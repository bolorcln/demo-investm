import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { requestSecurities, securitiesLoaded, securityAdded } from "./security.actions";
import { Security } from "./security.model";

export interface SecurityState extends EntityState<Security> {}

export const adapter: EntityAdapter<Security> = createEntityAdapter<Security>();
export const initialState: SecurityState = adapter.getInitialState();

export const securityReducer = createReducer(
  initialState,
  on(securitiesLoaded, (state, {entities}) => (
    adapter.addMany(entities, {...state})
  )),
  on(securityAdded, (state, {sec}) => (
    adapter.addOne(sec, {...state})
  ))
)
