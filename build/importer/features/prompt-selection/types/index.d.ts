export type PromptSelectionProps = {
    isModal: boolean;
    onSuccess: (selectedPromptId: string, inheritRepoConfig: boolean) => void;
    prompts: {
        id: number;
        label: string;
    }[];
};
