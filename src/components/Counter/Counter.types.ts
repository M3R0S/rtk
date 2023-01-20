import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

type ClickHandlerParams =
    | ActionCreatorWithoutPayload<"counter/increment">
    | ActionCreatorWithoutPayload<"counter/decrement">;

export type ClickHandler = (callback: ClickHandlerParams) => void;
