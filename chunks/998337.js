n.d(t, { A: () => g, R: () => _ });
var i,
    s = n(627968),
    l = n(64700),
    a = n(36149),
    r = n(923531),
    o = n(207560),
    d = n(287809),
    c = n(998548),
    u = n(943670),
    _ = (((i = {}).CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"), (i.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"), i);
let m = {
    CONTENT_AND_SOCIAL: [
        { order: 100, predicate: r.$h, Component: u.A },
        { order: 200, predicate: () => (0, o.TR)() && !(0, a.Q9)(), Component: c.Ow },
        { order: 300, predicate: () => d.default.getCurrentUser()?.nsfwAllowed === !1, Component: c.Ev },
    ],
    DATA_AND_PRIVACY: [{ order: 100, predicate: r.$h, Component: u.A }],
};
function g(e) {
    let { page: t } = e,
        n = l.useMemo(() => {
            let e = m[t]
                .filter((e) => e.predicate())
                .sort((e, t) => e.order - t.order)
                .map((e) => e.Component);
            return 0 === e.length ? null : e[0];
        }, [t]);
    return null == n ? null : (0, s.jsx)(n, {}, screen);
}
