export interface UiState<T> {
    loading: boolean;
    error: boolean;
    data: T | null;
}
