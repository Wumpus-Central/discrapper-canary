r.d(p, { A: () => s });
var t = r(582128);
let s = () => {
    let [e, p] = (0, t.useState)(null);
    return (
        (0, t.useEffect)(() => {
            window?.EyeDropper != null && p(new window.EyeDropper());
        }, []),
        e
    );
};
