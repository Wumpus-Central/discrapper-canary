n.d(t, { g: () => r });
var i = n(927813),
    l = n(427262),
    a = n(985018);
let s = +i.A.Millis.DAY;
function r(e) {
    if ((0, l.mv)(e.user)) return a.intl.string(a.t.VaCdhQ);
    let t = e.member?.joinedAt;
    return null == t
        ? a.intl.string(a.t.CQmzib)
        : null != e.member && e.member.roles.length > 0
          ? (e.role?.name ?? a.intl.string(a.t["97/NdO"]))
          : new Date().getTime() - Date.parse(t) < s
            ? a.intl.string(a.t.IKE48n)
            : a.intl.string(a.t.u0gUWt);
}
