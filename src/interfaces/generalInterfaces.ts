export interface PresentationProps{
    path: string;
    title: string;
    subtitle: string;
    pdfFile: string;
}

export interface BooleanState{
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}