n.d(t, { g: () => r });
var i = n(927813),
    l = n(427262),
    s = n(985018);
let a = +i.A.Millis.DAY;
function r(e) {
    if ((0, l.mv)(e.user)) return s.intl.string(s.t.VaCdhQ);
    let t = e.member?.joinedAt;
    return null == t
        ? s.intl.string(s.t.CQmzib)
        : null != e.member && e.member.roles.length > 0
          ? (e.role?.name ?? s.intl.string(s.t["97/NdO"]))
          : new Date().getTime() - Date.parse(t) < a
            ? s.intl.string(s.t.IKE48n)
            : s.intl.string(s.t.u0gUWt);
}
