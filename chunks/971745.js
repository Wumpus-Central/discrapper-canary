"use strict";
n.d(t, { A: () => i });
var r = n(64700);
let i = () => {
    let [e, t] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            window?.EyeDropper != null && t(new window.EyeDropper());
        }, []),
        e
    );
};
