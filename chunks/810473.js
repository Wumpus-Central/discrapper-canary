r.d(t, { Z: () => o }), r(388685);
var n = r(647438),
    l = r(296009),
    i = r(442837),
    a = r(594174),
    c = r(517157);
function o() {
    let e = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        t = (0, c.Z)(null == e ? void 0 : e.id);
    return n.useMemo(() => {
        let e = new Set(t.map((e) => e.type));
        return Object.values(l.l).filter((t) => !e.has(t));
    }, [t]);
}
