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
  languages: string[];
  summaries: string[];
};

export type TBookCardProps = {
  book: TBooks;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBook: React.Dispatch<React.SetStateAction<TBooks | null>>;
  isModalOpen: boolean;
};

export type TControlsBarProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export type TModal = {
  isModalOpen: boolean;
  selectedBook: TBooks;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
