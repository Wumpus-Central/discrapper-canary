t.d(n, { Z: () => c });
var i = t(200651),
    l = t(481060),
    o = t(906732),
    s = t(335131),
    r = t(475413),
    a = t(228168),
    d = t(388032);
function c(e) {
    let { onClose: n } = e,
        { analyticsLocations: t, newestAnalyticsLocation: c } = (0, o.ZP)();
    return (0, i.jsx)(r.Ht, {
        action: a.yM.VISIT_SHOP,
        icon: l.EOn,
        text: d.intl.string(d.t.b2d0Nz),
        onClick: () => {
            (0, s.mK)({
                analyticsSource: c,
                analyticsLocations: t,
                openInLayer: !1
            }),
                null == n || n();
        }
    });
}
