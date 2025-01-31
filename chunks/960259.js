n.d(t, {
    bW: () => u,
    hN: () => c,
    vW: () => l
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(679136),
    s = n(580747);
let o = r.createContext({
    enabled: !1,
    highlight: !1
});
function l(e) {
    let { children: t, overwriteValue: n } = e,
        { enabled: l } = a.Z.useExperiment({ location: 'web redesign icon context' }),
        u = (0, s.Z)('highlight_redesigned_icons'),
        c = r.useMemo(
            () => ({
                enabled: l,
                highlight: u
            }),
            [l, u]
        );
    return (0, i.jsx)(o.Provider, {
        value: null != n ? n : c,
        children: t
    });
}
function u() {
    return r.useContext(o);
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { size: 24 };
    return function (a) {
        let { enabled: s, highlight: o } = u();
        if (!s) return (0, i.jsx)(e, { ...a });
        {
            var l, c, d, f;
            let e = { ...a };
            for (let [t, i] of Object.entries(
                (n = {
                    foreground: 'colorClass',
                    color: 'color',
                    ...(null != n ? n : {})
                })
            )) {
                let n = a[t];
                if ((null == n && 'color' === t && (n = o ? 'yellow' : 'currentColor'), 'remove' === i)) {
                    delete e[t];
                    continue;
                }
                e[i] = n;
            }
            return (null !== (d = (l = e).width) && void 0 !== d) || (l.width = r.size), (null !== (f = (c = e).height) && void 0 !== f) || (c.height = r.size), (0, i.jsx)(t, { ...e });
        }
    };
}
