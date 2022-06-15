import { createAction, props } from "@ngrx/store";
import { Security } from "./security.model";

export const requestSecurities = createAction('[Security List Component] Request Securities');
export const securitiesLoaded = createAction(
  '[Security Effect] Securities Loaded',
  props<{entities: Security[]}>()
)
export const addSecurity = createAction(
  '[Security Form] Create Security',
  props<{sec: any}>()
)
export const securityAdded = createAction(
  '[Security Effect] Security Created',
  props<{sec: Security}>()
)
