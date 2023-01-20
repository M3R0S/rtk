import { FC } from "react";
import { useGetAllUsersQuery } from "store/services/user";
import { User } from "./User";

import cl from "./Users.module.scss";

export const Users: FC = () => {
    const { isError, isLoading, data } = useGetAllUsersQuery(null);

    return (
        <section className={cl.container}>
            {isError && <h1>Ошибка загрузки</h1>}
            {isLoading && <h1>Загрузка...</h1>}
            {data && data.map((user) => <User {...user} key={user.id} />)}
        </section>
    );
};
