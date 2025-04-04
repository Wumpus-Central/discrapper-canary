n.d(t, { Z: () => p }), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(386506),
    s = n(304761),
    l = n(865427),
    c = n(478543),
    u = n(366953);
async function d(e) {
    if (200 !== (await (0, a.f0)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f(e) {
    if (200 !== (await (0, a.aD)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function _() {
    await (0, a.bF)(), window.location.reload(!0);
}
let p = i.memo(function (e) {
    let { url: t } = e,
        n = (0, o.cj)([s.C], () => s.C.getCurrentBuildOverride()),
        a = (0, o.e7)([s.C], () => s.C.getBuildOverride(t)),
        { payload: p, validatedURL: h } = a,
        m = n.state === s.Z.Resolving || a.state === s.Z.Resolving,
        g = i.useCallback(() => {
            if ((0, l.mG)(a.url) && null != a.override) {
                var e;
                return f(null == (e = a.override) ? void 0 : e.targetBuildOverride);
            }
            return null == p ? Promise.reject(Error('Invalid override payload')) : ((0, u.Z)(a.override, p), d(p));
        }, [p, a]);
    return null != h
        ? (0, r.jsx)(c.Z, {
              loading: m,
              linkMeta: a.override,
              currentOverrides: n.overrides,
              applyBuildOverride: g,
              clearBuildOverride: _,
              url: h
          })
        : null;
});
