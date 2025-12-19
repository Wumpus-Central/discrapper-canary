t.d(n, { Z: () => s });
var o = t(54381);
t(473749);
var i = t(585183),
    r = t(728151),
    a = t(981631);
function s(e) {
    let { authToken: n, onContinue: t, onError: s, onClose: l } = e;
    return (0, o.jsx)(i.h, {
        platformType: a.ABu.CRUNCHYROLL,
        clientId: r.sp,
        scopes: r.Ii,
        authToken: n,
        onContinue: t,
        onError: s,
        onClose: l,
    });
}
