n.d(t, { m: () => o });
var a = n(582128),
    r = n(461376),
    i = n(384494),
    s = n(844222);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = a.useContext(s.C).reducedMotion.enabled,
        _ = t;
    "animate-always" !== n &&
        ("respect-motion-settings" !== n || l) &&
        (_ = "function" == typeof t ? (e, n) => ({ ...t(e, n), ...i.W }) : t.map((e) => ({ ...e, ...i.W })));
    let E = "function" == typeof _,
        [c, u, d] = (0, r.useSprings)(e, _, o);
    return E || 4 == arguments.length ? [c, u, d] : c;
}
