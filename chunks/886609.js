t.d(n, { KE: () => m, L1: () => h, dC: () => p });
var l = t(477900),
    r = t(582128),
    i = t(917310),
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
    d = r.createContext(c);
function h(e) {
    let { children: n } = e,
        [t] = r.useState(o);
    return (0, l.jsx)(d.Provider, { value: t, children: n });
}
function m(e) {
    for (let n of (0, i.tJ)(e)) if ("spoiler" === n.type && Array.from((0, i.tJ)(n.value.content)).some(f)) return !0;
    return !1;
}
function f(e) {
    return "link" === e.type;
}
function p(e) {
    let { children: n, id: t } = e,
        i = r.useContext(d),
        u = (0, a.P)(i, (e) => e.revealedIds.has(t)),
        o = (0, a.P)(i, (e) => e.hoveredId === t),
        c = r.useCallback(() => i.getState().reveal(t), [i, t]),
        h = r.useCallback(() => i.getState().setHovered(t, !0), [i, t]),
        m = r.useCallback(() => i.getState().setHovered(t, !1), [i, t]);
    return (0, l.jsx)(s.Ay, {
        type: s.Ay.Types.TEXT,
        obscured: !u,
        hovered: o,
        onReveal: c,
        onMouseEnter: h,
        onMouseLeave: m,
        children: () => n,
    });
}
