n.d(t, { Z: () => c }), n(388685);
var r = n(73800),
    i = n(296009),
    l = n(442837),
    o = n(594174),
    a = n(517157);
function c() {
    let e = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, a.Z)(null == e ? void 0 : e.id);
    return r.useMemo(() => {
        let e = new Set(t.map((e) => e.type));
        return Object.values(i.l).filter((t) => !e.has(t));
    }, [t]);
}
