export type BotSelectionProps = {
    isModal: boolean;
    onSuccess: (selectedBotId: string, inheritRepoConfig: boolean) => void;
    bots: {
        id: number;
        label: string;
    }[];
};
