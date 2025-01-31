export type TSearchInputItem = {
  label: string;
  value: string | number;
};

export interface ISearchInput {
  data: TSearchInputItem[];
  onSelect: (item: string | number) => void;
  placeholder: string;
}
