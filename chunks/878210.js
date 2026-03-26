t.d(l, { A: () => o });
var i = t(627968),
    n = t(64700),
    s = t(397927),
    a = t(203982),
    r = t(652215);
function o(e) {
    let { children: l } = e,
        [t, o] = n.useState(!1);
    return (
        n.useEffect(() => {
            let e = () => {
                o(!0),
                    setTimeout(() => {
                        o(!1);
                    }, 1e3);
            };
            return (
                a._.subscribe(r.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    a._.unsubscribe(r.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, i.jsx)(s.bfh, { isShaking: t, intensity: 1.4, children: l })
    );
}
