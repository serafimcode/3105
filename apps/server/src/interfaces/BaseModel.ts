export interface BaseModel<T> {
   getAll(): Promise<T[]>;
}
