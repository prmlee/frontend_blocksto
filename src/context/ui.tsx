import { createContext, useState } from 'react';
import { Notebook } from '../constants';

export type HousePanelType =
  | 'notebook-panel'
  | 'create-panel'
  | 'gmap-panel'
  | 'add-panel'
  | 'consult-panel';
export type ConsultPanelType = 'category' | 'info' | 'docs';

interface UiProps {
  selectedHousePanel: HousePanelType;
  selectedBookTitle: string;
  selectedDocumentTitle: string;
  selectedConsultPanel: ConsultPanelType;
  moveToHousePanel: (value: HousePanelType) => void;
  selectBook: (value: string) => void;
  selectCategory: (value: string) => void;
  moveToConsultPanel: (value: ConsultPanelType) => void;
}

export const UiContext = createContext<UiProps>({} as UiProps);

const UiProvider = ({ children }: any) => {
  const [selectedHousePanel, setSelectedHousePanel] =
    useState<HousePanelType>('notebook-panel');
  const [selectedBookTitle, setSelectedBookTitle] = useState<string>('');
  const [selectedDocumentTitle, setSelectedDocumentTitle] =
    useState<string>('');
  const [selectedConsultPanel, setSelectedConsultPanel] =
    useState<ConsultPanelType>('category');

  const moveToHousePanel = (housePanel: HousePanelType) => {
    setSelectedHousePanel(housePanel);
  };

  const selectBook = (value: string) => {
    setSelectedBookTitle(value);
  };

  const selectCategory = (value: string) => {
    setSelectedDocumentTitle(value);
  };

  const moveToConsultPanel = (consultPanel: ConsultPanelType) => {
    setSelectedConsultPanel(consultPanel);
  };

  return (
    <UiContext.Provider
      value={{
        selectedHousePanel,
        selectedBookTitle,
        selectedDocumentTitle,
        selectedConsultPanel,
        moveToHousePanel,
        selectBook,
        selectCategory,
        moveToConsultPanel,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
