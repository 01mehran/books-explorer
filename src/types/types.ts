export type TAuthor = {
  name: string;
};

export type TFormats = Record<string, string>;

export type TBooks = {
  id: number;
  title: string;
  download_count: number;
  authors: TAuthor[];
  formats: TFormats;
};

export type TBookCardProps = {
  book: TBooks;
};


export type TControlsBarProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;

  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>
};