r.d(t, { Z: () => s }), r(388685);
var n = r(647438),
    o = r(296009),
    i = r(442837),
    l = r(594174),
    c = r(517157);
function s() {
    let e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, c.Z)(null == e ? void 0 : e.id);
    return n.useMemo(() => {
        let e = new Set(t.map((e) => e.type));
        return Object.values(o.l).filter((t) => !e.has(t));
    }, [t]);
}
