a.d(t, { m: () => i });
var n = a(64700),
    s = a(517738),
    r = a(384494),
    o = a(844222);
function i(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        i = arguments.length > 3 ? arguments[3] : void 0,
        l = n.useContext(o.C).reducedMotion.enabled,
        E = t;
    "animate-always" !== a &&
        ("respect-motion-settings" !== a || l) &&
        (E = "function" == typeof t ? (e, a) => ({ ...t(e, a), ...r.W }) : t.map((e) => ({ ...e, ...r.W })));
    let c = "function" == typeof E,
        [d, u, S] = (0, s.useSprings)(e, E, i);
    return c || 4 == arguments.length ? [d, u, S] : d;
}
