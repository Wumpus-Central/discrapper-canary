n.d(t, {
    R: () => i,
}),
    n(896048);
var r = n(64700);

function i() {
    let e = window,
        [t, n] = r.useState(e.document.hasFocus());
    return (
        r.useEffect(() => {
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener("focus", t),
                e.addEventListener("blur", r),
                () => {
                    e.removeEventListener("focus", t), e.removeEventListener("blur", r);
                }
            );
        }, [e]),
        t
    );
}
