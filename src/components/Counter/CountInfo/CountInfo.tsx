import { FC } from "react";
import { useAppSelector } from "store";

import cl from "./CountInfo.module.scss";

export const CountInfo: FC = () => {
    const value = useAppSelector((state) => state.counter.value);

    return <h1>{value}</h1>;
};
