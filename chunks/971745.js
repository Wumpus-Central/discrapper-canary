t.d(e, { A: () => n });
var a = t(64700);
let n = () => {
    let [A, e] = (0, a.useState)(null);
    return (
        (0, a.useEffect)(() => {
            window?.EyeDropper != null && e(new window.EyeDropper());
        }, []),
        A
    );
};
