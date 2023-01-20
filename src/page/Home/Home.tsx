import { FC } from "react";

import cl from "./Home.module.scss";
import { Counter, Users } from "components";

export const Home: FC = () => {
    return (
        <main className={cl.home}>
            <Counter />
            <Users />
        </main>
    );
};
