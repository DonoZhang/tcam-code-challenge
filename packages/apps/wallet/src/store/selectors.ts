import { APPSTATUS } from "../constants";

export const getLoading = (state:IState) => state.appStatus === APPSTATUS.LOADING
export const getError = (state:IState) => state.appStatus === APPSTATUS.ERROR