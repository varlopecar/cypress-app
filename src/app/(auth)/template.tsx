import { ReactNode } from "react";

interface AuthTemplateProps {
    children: ReactNode;
}

export function AuthTemplate({ children }: AuthTemplateProps) {
    return (
        <div className="h-screen p-6 flex justify-center">
            {children}
        </ div>
    );
}