n.d(e, { m: () => a });
var i = n(64700),
    s = n(123924),
    o = n(384494),
    p = n(844222);
function a(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        a = arguments.length > 3 ? arguments[3] : void 0,
        c = i.useContext(p.C).reducedMotion.enabled,
        u = e;
    "animate-always" !== n &&
        ("respect-motion-settings" !== n || c) &&
        (u = "function" == typeof e ? (t, n) => ({ ...e(t, n), ...o.W }) : e.map((t) => ({ ...t, ...o.W })));
    let d = "function" == typeof u,
        [r, h, l] = (0, s.useSprings)(t, u, a);
    return d || 4 == arguments.length ? [r, h, l] : r;
}
