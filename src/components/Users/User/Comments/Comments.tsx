import { FC } from "react";

import cl from "./Comments.module.scss";
import { CommentsProps } from ".";
import { useGetAllCommentsUserQuery } from "store/services/comments";

export const Comments: FC<CommentsProps> = (props) => {
    const { userId } = props;

    const { data, isFetching } = useGetAllCommentsUserQuery({ userId });

    return (
        <div>
            {isFetching && <h2>Загрузка...</h2>}
            {data &&
                data.map((comment) => <h2 key={comment.id}>{comment.text}</h2>)}
        </div>
    );
};
