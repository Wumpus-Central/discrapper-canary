n.d(t, {
    CP: () => l,
    Je: () => p,
    KJ: () => f,
    OT: () => c,
    Tu: () => s,
    d0: () => d,
    lK: () => _,
    xI: () => u
}),
    n(47120),
    n(301563);
var r = n(695346),
    i = n(594174),
    o = n(55563),
    a = n(981631);
function s(e, t) {
    return ''.concat(e, ':').concat(t);
}
function l(e) {
    let [t, n] = e.split(':');
    return {
        applicationId: t,
        branchId: n
    };
}
function c(e, t) {
    if (!r.G6.getSetting() || r.co.getSetting() === a.Skl.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(a.eHb.PRIVATE);
}
function u(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
}
function d(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(a.eHb.PRIVATE))) && !t.isHidden();
}
function f(e) {
    return null == e ? null : e.type === a.vxO.INSTALLING || e.type === a.vxO.UPDATING || e.type === a.vxO.UNINSTALLING ? e : null;
}
function _(e) {
    return e.reduce(
        (e, t) => {
            let n = f(t);
            return null == n || t.type === a.vxO.UP_TO_DATE
                ? e
                : {
                      total: e.total + Number(n.total),
                      progress: e.progress + Number(n.progress)
                  };
        },
        {
            total: 0,
            progress: 0
        }
    );
}
function p(e) {
    return !!e.isDiscordApplication() && e.isEntitled(i.default.getCurrentUser(), o.Z);
}
