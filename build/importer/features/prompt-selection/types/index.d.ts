export type PromptSelectionProps = {
    reload: () => void;
    close: () => void;
    isModal: boolean;
    onSuccess: (selectedPromptId: string, inheritRepoConfig: boolean) => void;
    prompts?: {
        id: number;
        label: string;
    }[];
};
