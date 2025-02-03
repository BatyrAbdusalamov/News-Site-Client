import { FC, PropsWithChildren, useEffect } from "react"
import { CardBlock } from "../../components/CardBlock";
import { getPostDataRequest, postCurrentPageSelector, postDataSelector, postLoadingSelector } from "../../ducks/post/data";
import { useDispatch, useSelector } from "react-redux";
import {ClimbingBoxLoader} from "react-spinners"
import css from "./MainPage.module.scss"


interface MainPageProps {
  children?: PropsWithChildren;
}
export const MainPage: FC<MainPageProps> = () => {
  const dispatch = useDispatch()
  const dataPosts = useSelector(postDataSelector)
  const dataLoadingPosts = useSelector(postLoadingSelector)
  const currentPage = useSelector(postCurrentPageSelector)
    useEffect(()=>{dispatch(getPostDataRequest(currentPage))},[dispatch])
  return(
    <>
    <div className={css.main}>
    <ClimbingBoxLoader loading={dataLoadingPosts} size={22} color="#6394eb"/>
    </div>
    <CardBlock posts={dataPosts}/>
    </>
  );
}