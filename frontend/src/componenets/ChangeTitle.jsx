import { useEffect } from "react";

const ChangeTitle = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);
    return props.children;
};

export default ChangeTitle;