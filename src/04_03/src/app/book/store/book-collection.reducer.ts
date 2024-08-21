import { createReducer, on } from "@ngrx/store";
import { BookCollectionSlice } from "./book-collection.slice";
import { createBookStart } from "./book-collection.actions";

const initial: BookCollectionSlice = {
  entities: []
}

export const bookCollectionReducer = createReducer(
  initial,
  on(createBookStart, (slice, { book }) => ({
    ...slice,
    entities: [...slice.entities, book],
  }))
);