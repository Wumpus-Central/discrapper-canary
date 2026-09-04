n.d(t, { y: () => l });
var i = n(587895),
    r = n(625180),
    a = n(207371),
    s = n(165610);
function l(e) {
    let { applicationId: t, customId: n, referrerId: l, analyticsContext: o } = e,
        d = i.A.getApplication(t);
    return (
        !!(null != d && (0, a.x)(d)) &&
        (r.A.launchFrame({ applicationId: t, surface: s.sd, customId: n, referrerId: l, analyticsContext: o }), !0)
    );
}
