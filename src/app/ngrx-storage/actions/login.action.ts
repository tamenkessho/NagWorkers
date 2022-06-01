import { createAction, props } from '@ngrx/store';

export const loadNgrxActions = createAction(
  '[NgrxAction] Load NgrxActions'
);

export const loadNgrxActionsSuccess = createAction(
  '[NgrxAction] Load NgrxActions Success',
  props<{ data: any }>()
);

export const loadNgrxActionsFailure = createAction(
  '[NgrxAction] Load NgrxActions Failure',
  props<{ error: any }>()
);
