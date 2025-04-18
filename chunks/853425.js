n.d(t, { Z: () => p }), n(415506);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(386506),
    s = n(304761),
    l = n(865427),
    c = n(478543),
    u = n(366953);
async function d(e) {
    if (200 !== (await (0, o.f0)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f(e) {
    if (200 !== (await (0, o.aD)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function _() {
    await (0, o.bF)(), window.location.reload(!0);
}
let p = i.memo(function (e) {
    let { url: t } = e,
        n = (0, a.cj)([s.C], () => s.C.getCurrentBuildOverride()),
        o = (0, a.e7)([s.C], () => s.C.getBuildOverride(t)),
        { payload: p, validatedURL: h } = o,
        m = n.state === s.Z.Resolving || o.state === s.Z.Resolving,
        g = i.useCallback(() => {
            if ((0, l.mG)(o.url) && null != o.override) {
                var e;
                return f(null == (e = o.override) ? void 0 : e.targetBuildOverride);
            }
            return null == p ? Promise.reject(Error('Invalid override payload')) : ((0, u.Z)(o.override, p), d(p));
        }, [p, o]);
    return null != h
        ? (0, r.jsx)(c.Z, {
              loading: m,
              linkMeta: o.override,
              currentOverrides: n.overrides,
              applyBuildOverride: g,
              clearBuildOverride: _,
              url: h
          })
        : null;
});
