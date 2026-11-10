var r = t(477900),
    l = t(582128),
    i = t(714414),
    a = t(196765),
    u = t(976245),
    s = t(302031);
function o() {
    return (0, u.y)()((e) => ({
        revealedIds: new Set(),
        hoveredId: null,
        reveal(n) {
            e((e) => (e.revealedIds.has(n) ? e : { revealedIds: new Set(e.revealedIds).add(n) }));
        },
        setHovered(n, t) {
            e((e) => (t ? { hoveredId: n } : e.hoveredId === n ? { hoveredId: null } : e));
        },
    }));
}
let c = (0, u.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    d = l.createContext(c);
function h(e) {
    return "link" === e.type;
}
t.d(
    n,
    {},
    {
        KE: function (e) {
            for (let n of (0, i.tJ)(e))
                if ("spoiler" === n.type && Array.from((0, i.tJ)(n.value.content)).some(h)) return !0;
            return !1;
        },
        L1: function (e) {
            let { children: n } = e,
                [t] = l.useState(o);
            return (0, r.jsx)(d.Provider, { value: t, children: n });
        },
        dC: function (e) {
            let { children: n, id: t } = e,
                i = l.useContext(d),
                u = (0, a.P)(i, (e) => e.revealedIds.has(t)),
                o = (0, a.P)(i, (e) => e.hoveredId === t),
                c = l.useCallback(() => i.getState().reveal(t), [i, t]),
                h = l.useCallback(() => i.getState().setHovered(t, !0), [i, t]),
                m = l.useCallback(() => i.getState().setHovered(t, !1), [i, t]);
            return (0, r.jsx)(s.Ay, {
                type: s.Ay.Types.TEXT,
                obscured: !u,
                hovered: o,
                onReveal: c,
                onMouseEnter: h,
                onMouseLeave: m,
                children: () => n,
            });
        },
    },
);
