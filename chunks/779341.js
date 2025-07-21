t.d(e, { Z: () => l });
var o = t(255367);
t(73800);
var i = t(585183),
    r = t(728151),
    s = t(981631);
function l(n) {
    let { authToken: e, onContinue: t, onError: l, onClose: a } = n;
    return (0, o.jsx)(i.h, {
        platformType: s.ABu.CRUNCHYROLL,
        clientId: r.sp,
        scopes: r.Ii,
        authToken: e,
        onContinue: t,
        onError: l,
        onClose: a
    });
}
