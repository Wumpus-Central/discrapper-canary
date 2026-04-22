l.d(n, { A: () => o });
var t = l(627968),
    i = l(64700),
    r = l(568602),
    s = l(203982),
    a = l(652215);
function o(e) {
    let { children: n } = e,
        [l, o] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                o(!0),
                    setTimeout(() => {
                        o(!1);
                    }, 300);
            };
            return (
                s._.subscribe(a.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    s._.unsubscribe(a.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(r.b, { isShaking: l, intensity: 1.4, children: n })
    );
}
