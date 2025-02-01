i.d(n, { Z: () => c });
var t = i(200651),
    l = i(481060),
    o = i(906732),
    s = i(335131),
    r = i(475413),
    a = i(228168),
    d = i(388032);
function c(e) {
    let { onClose: n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: c } = (0, o.ZP)();
    return (0, t.jsx)(r.Ht, {
        action: a.yM.VISIT_SHOP,
        icon: l.EOn,
        text: d.intl.string(d.t.b2d0Nz),
        onClick: () => {
            (0, s.mK)({
                analyticsSource: c,
                analyticsLocations: i,
                openInLayer: !1
            }),
                null == n || n();
        }
    });
}
