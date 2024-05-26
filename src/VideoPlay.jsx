import { forwardRef } from "react";

export default forwardRef(function VideoPlay(props, ref) {
    return (<video ref={ref} {...props}></video>);
});