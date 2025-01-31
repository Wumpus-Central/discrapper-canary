n.d(t, { Z: () => p }), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(386506),
    o = n(304761),
    l = n(865427),
    u = n(478543),
    c = n(366953);
async function d(e) {
    if (200 !== (await (0, s.f0)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f(e) {
    if (200 !== (await (0, s.aD)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function _() {
    await (0, s.bF)(), window.location.reload(!0);
}
let p = r.memo(function (e) {
    let { url: t } = e,
        n = (0, a.cj)([o.C], () => o.C.getCurrentBuildOverride()),
        s = (0, a.e7)([o.C], () => o.C.getBuildOverride(t)),
        { payload: p, validatedURL: h } = s,
        m = n.state === o.Z.Resolving || s.state === o.Z.Resolving,
        g = r.useCallback(() => {
            if ((0, l.mG)(s.url) && null != s.override) {
                var e;
                return f(null === (e = s.override) || void 0 === e ? void 0 : e.targetBuildOverride);
            }
            return null == p ? Promise.reject(Error('Invalid override payload')) : ((0, c.Z)(s.override, p), d(p));
        }, [p, s]);
    return null != h
        ? (0, i.jsx)(u.Z, {
              loading: m,
              linkMeta: s.override,
              currentOverrides: n.overrides,
              applyBuildOverride: g,
              clearBuildOverride: _,
              url: h
          })
        : null;
});
