import {FC} from "react"
import { Post } from "../../shared/api/types"
import { Card } from "./components/Card"
import css from "./CardBlock.module.scss"

interface CardBlockProps {
  posts: Post[] 
}

export const CardBlock: FC<CardBlockProps> = ({posts}) => {
  return(
    <div className={css.block}>
    {posts.length && posts.map(({id,content,topic,picture})=>(
      <Card
        key={id}
        topic={topic}
        content={content}
        picture={picture}
      />
    ))}
    </div>
  )
}