function r(e, t) {
    if (e === t) return !0;
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function i(e) {
    return null == e ? new Set() : e instanceof Set ? e : new Set(e);
}
(n.d(t, {
    G: () => i,
    O: () => r
}),
    n(388685));
