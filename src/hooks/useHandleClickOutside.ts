import {useEffect} from "react";

export const useHandleClickOutside = (ref: any, callback: (state: boolean) => void) => {
    useEffect(() => {
        const handleClick = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(false)
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref]);
}
