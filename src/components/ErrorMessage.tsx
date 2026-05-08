import type {ReactNode} from "react";

type ErrorMessageProps = {
    children: ReactNode;
}

export default function ErrorMessage({children}:ErrorMessageProps) {
    return (
        <span className="text-red-500 text-sm mt-1 block">{children}</span>
    );
}