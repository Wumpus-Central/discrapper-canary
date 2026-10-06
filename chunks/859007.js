n.d(t, { y: () => l });
var i = n(587895),
    r = n(625180),
    a = n(25451),
    s = n(165610);
function l(e) {
    let { applicationId: t, launch: n, analyticsContext: l } = e,
        o = i.A.getApplication(t);
    return (
        !!(null != o && (0, a.X)(o)) &&
        (r.A.launchFrame({ applicationId: t, surface: s.sd, launch: n, analyticsContext: l }), !0)
    );
}
