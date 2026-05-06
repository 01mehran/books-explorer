export type TAuthor = {
  name: string;
};

export type TFormats = Record<string, string>;

export type TBook = {
  id: number;
  title: string;
  download_count: number;
  authors: TAuthor[];
  formats: TFormats;
};

export type BookProps = {
  book: TBook;
};
