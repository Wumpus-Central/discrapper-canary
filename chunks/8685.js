var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(923928),
    c = r(468026),
    d = r(503856),
    f = r(209590),
    p = r(388032);
let h = () => {
        u.Z.clearSuppressWarning();
    },
    _ = () => {
        u.Z.clearSuppressWarning(!0);
    },
    m = () => {
        let e = o.useRef(null);
        function n() {
            null !== e.current && ((0, l.closeModal)(e.current), (e.current = null));
        }
        let [i, u] = (0, s.Wu)([f.Z], () => [f.Z.shouldShowWarning(), f.Z.isAFKChannel()], []),
            m = o.useCallback(() => {
                let n, r;
                u ? ((n = p.intl.string(p.t.Y40JkZ)), (r = p.intl.string(p.t['5J4yGR']))) : ((n = p.intl.string(p.t.FJSZVF)), (r = p.intl.string(p.t.etJjgY))),
                    (e.current = (0, l.openModal)((e) =>
                        (0, a.jsx)(c.default, {
                            title: n,
                            body: r,
                            onConfirm: h,
                            confirmText: p.intl.string(p.t.BddRzc),
                            secondaryConfirmText: p.intl.string(p.t['5E9SBw']),
                            onConfirmSecondary: _,
                            ...e
                        })
                    ));
            }, [u]),
            g = o.useCallback(() => {
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await r.e('41281').then(r.bind(r, 669732));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            showHideSuppressWarning: !0
                        });
                }).then((n) => {
                    null != n && (e.current = n);
                });
            }, []);
        return (
            o.useEffect(
                () => (
                    i && (0, d.p)() ? g() : i ? m() : n(),
                    () => {
                        n();
                    }
                ),
                [i, m, g]
            ),
            null
        );
    };
n.Z = m;
