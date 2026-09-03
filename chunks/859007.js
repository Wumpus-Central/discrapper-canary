n.d(t, { y: () => l });
var i = n(587895),
    r = n(625180),
    a = n(207371),
    s = n(165610);
function l(e) {
    let { applicationId: t, customId: n, referrerId: l } = e,
        o = i.A.getApplication(t);
    return (
        !!(null != o && (0, a.x)(o)) &&
        (r.A.launchFrame({ applicationId: t, surface: s.sd, customId: n, referrerId: l }), !0)
    );
}
