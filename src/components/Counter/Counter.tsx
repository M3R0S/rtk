import { FC } from "react";

import cl from "./Counter.module.scss";
import { ClickHandler } from ".";
import { useAppDispatch } from "store";
import { increment, decrement } from "store/slice/counter";
import { Button } from "components/ui";
import { CountInfo } from "./CountInfo";

export const Counter: FC = () => {
    const dispatch = useAppDispatch();

    const clickHandler: ClickHandler = (callback) => {
        dispatch(callback());
    };

    return (
        <section className={cl.container}>
            <Button className={cl.counted} onClick={() => clickHandler(increment)}>increment</Button>
            <CountInfo />
            <Button className={cl.counted} onClick={() => clickHandler(decrement)}>decrement</Button>
        </section>
    );
};
