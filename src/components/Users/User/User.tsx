import { FC, useState } from "react";

import cl from "./User.module.scss";
import { UserProps } from ".";
import { Button } from "components/ui";
import { Comments } from "./Comments";

export const User: FC<UserProps> = (props) => {
    const { age, id, name } = props;

    const [isOpenComments, setIsOpenComments] = useState<boolean>(false);

    const clickHandler = () => {
        setIsOpenComments(!isOpenComments);
    };

    return (
        <div className={cl.wrapper}>
            {<h1>{`${id}. ${name} ${age} ages`}</h1>}
            <Button onClick={clickHandler}>Комментарии</Button>
            {isOpenComments && <Comments userId={id} />}
        </div>
    );
};
