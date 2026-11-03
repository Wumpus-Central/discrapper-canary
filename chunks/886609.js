t.d(n, { KE: () => v, L1: () => h, dC: () => f });
var l = t(477900),
    r = t(582128),
    a = t(465632),
    u = t(196765),
    i = t(976245),
    s = t(302031);
function c() {
    return (0, i.y)()((e) => ({
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
let o = (0, i.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    d = r.createContext(o);
function h(e) {
    let { children: n } = e,
        [t] = r.useState(c);
    return (0, l.jsx)(d.Provider, { value: t, children: n });
}
function v(e) {
    for (let n of (0, a.tJ)(e)) if ("spoiler" === n.type && Array.from((0, a.tJ)(n.value.content)).some(m)) return !0;
    return !1;
}
function m(e) {
    return "link" === e.type;
}
function f(e) {
    let { children: n, id: t } = e,
        a = r.useContext(d),
        i = (0, u.P)(a, (e) => e.revealedIds.has(t)),
        c = (0, u.P)(a, (e) => e.hoveredId === t),
        o = r.useCallback(() => a.getState().reveal(t), [a, t]),
        h = r.useCallback(() => a.getState().setHovered(t, !0), [a, t]),
        v = r.useCallback(() => a.getState().setHovered(t, !1), [a, t]);
    return (0, l.jsx)(s.Ay, {
        type: s.Ay.Types.TEXT,
        obscured: !i,
        hovered: c,
        onReveal: o,
        onMouseEnter: h,
        onMouseLeave: v,
        children: () => n,
    });
}
