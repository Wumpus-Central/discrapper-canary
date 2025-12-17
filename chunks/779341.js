t.d(n, { Z: () => a });
var o = t(54381);
t(473749);
var i = t(585183),
    r = t(728151),
    s = t(981631);
function a(e) {
    let { authToken: n, onContinue: t, onError: a, onClose: l } = e;
    return (0, o.jsx)(i.h, {
        platformType: s.ABu.CRUNCHYROLL,
        clientId: r.sp,
        scopes: r.Ii,
        authToken: n,
        onContinue: t,
        onError: a,
        onClose: l,
    });
}
