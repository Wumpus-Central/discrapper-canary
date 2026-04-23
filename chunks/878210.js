t.d(n, { A: () => o });
var l = t(627968),
    i = t(64700),
    r = t(568602),
    a = t(203982),
    s = t(652215);
function o(e) {
    let { children: n } = e,
        [t, o] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                o(!0),
                    setTimeout(() => {
                        o(!1);
                    }, 300);
            };
            return (
                a._.subscribe(s.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    a._.unsubscribe(s.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, l.jsx)(r.b, { isShaking: t, intensity: 1.4, children: n })
    );
}
