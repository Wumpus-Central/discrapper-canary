r.d(t, { Z: () => c }), r(388685);
var n = r(647438),
    i = r(296009),
    l = r(442837),
    a = r(594174),
    o = r(517157);
function c() {
    let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        t = (0, o.Z)(null == e ? void 0 : e.id);
    return n.useMemo(() => {
        let e = new Set(t.map((e) => e.type));
        return Object.values(i.l).filter((t) => !e.has(t));
    }, [t]);
}
