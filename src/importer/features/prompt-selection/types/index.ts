export type PromptSelectionProps = {
  reload: () => void;
  close: () => void;
  isModal: boolean;
  prompts?: { id: number, label: string}[];
};
