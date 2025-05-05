e.d(t, { Z: () => l });
var o = e(255367);
e(73800);
var i = e(585183),
    r = e(728151),
    s = e(981631);
function l(n) {
    let { authToken: t, onContinue: e, onError: l, onClose: a } = n;
    return (0, o.jsx)(i.h, {
        platformType: s.ABu.CRUNCHYROLL,
        clientId: r.sp,
        scopes: r.Ii,
        authToken: t,
        onContinue: e,
        onError: l,
        onClose: a
    });
}
