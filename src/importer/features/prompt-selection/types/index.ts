export type PromptSelectionProps = {
  reload: () => void;
  close: () => void;
  isModal: boolean;
  onSuccess: () => void;
  prompts?: { id: number, label: string}[];
};
