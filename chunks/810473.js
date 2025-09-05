r.d(t, { Z: () => s }), r(388685);
var n = r(647438),
    i = r(296009),
    o = r(442837),
    l = r(594174),
    c = r(162650),
    a = r(517157);
function s() {
    let e = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, a.Z)(null == e ? void 0 : e.id),
        r = c.Q.useConfig({ location: "useAvailableWidgetTypes" }).enabled;
    return n.useMemo(() => {
        let e = new Set(t.map((e) => e.type));
        return Object.values(i.l).filter((t) => (t !== i.l.APPLICATION || !!r) && !e.has(t));
    }, [t, r]);
}
