"use strict";
n.d(t, { A: () => a });
var i = n(64700);
let a = () => {
    let [e, t] = (0, i.useState)(null);
    return (
        (0, i.useEffect)(() => {
            window?.EyeDropper != null && t(new window.EyeDropper());
        }, []),
        e
    );
};
