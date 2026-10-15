t.d(n, { g: () => r });
var i = t(927813),
    l = t(427262),
    s = t(105292);
let a = +i.A.Millis.DAY;
function r(e) {
    if ((0, l.mv)(e.user)) return s.intl.string(s.t.VaCdhQ);
    let n = e.member?.joinedAt;
    return null == n
        ? s.intl.string(s.t.CQmzib)
        : null != e.member && e.member.roles.length > 0
          ? (e.role?.name ?? s.intl.string(s.t["97/NdO"]))
          : new Date().getTime() - Date.parse(n) < a
            ? s.intl.string(s.t.IKE48n)
            : s.intl.string(s.t.u0gUWt);
}
