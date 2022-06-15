import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, SecurityState } from "./security.reducer";

const {selectEntities, selectAll} = adapter.getSelectors()

export const selectSecurityState = createFeatureSelector<SecurityState>('securities');

export const selectSecurities = createSelector(
  selectSecurityState,
  selectAll
)
