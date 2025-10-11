n.d(t, { Z: () => d }), n(388685);
var r = n(647438),
    i = n(296009),
    l = n(442837),
    a = n(594174),
    o = n(836197),
    s = n(880421),
    c = n(172416),
    u = n(517157);
function d() {
    let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        t = (0, u.Z)(null == e ? void 0 : e.id),
        n = t.some((e) => o.Ki.includes(e.type)),
        d = (0, c.Un)({ location: "useAvailableWidgetTypes" }),
        p = (0, s.k)({ location: "useAvailableWidgetTypes" }),
        f = d || n;
    return r.useMemo(() => {
        let e = new Set(t.map((e) => e.type));
        return Object.values(i.l).filter(
            (t) => (t !== i.l.APPLICATION || !!p) && (!o.Ki.includes(t) || !!f) && !e.has(t),
        );
    }, [t, f, p]);
}
