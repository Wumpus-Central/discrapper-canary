n.d(t, {
    y: () => o,
});
var r = n(587895),
    i = n(625180),
    a = n(207371);

function o(e) {
    let { applicationId: t } = e,
        n = r.A.getApplication(t);
    return (
        !!(null != n && (0, a.x)(n)) &&
        (i.A.launchFrame({
            applicationId: t,
        }),
        !0)
    );
}
