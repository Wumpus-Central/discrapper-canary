n.d(t, { g: () => s });
var r = n(927813),
    l = n(427262),
    i = n(985018);
let a = +r.A.Millis.DAY;
function s(e) {
    var t, n, r;
    if ((0, l.mv)(e.user)) return i.intl.string(i.t.VaCdhQ);
    let s = null == (t = e.member) ? void 0 : t.joinedAt;
    return null == s
        ? i.intl.string(i.t.CQmzib)
        : null != e.member && e.member.roles.length > 0
          ? null != (n = null == (r = e.role) ? void 0 : r.name)
              ? n
              : i.intl.string(i.t["97/NdO"])
          : new Date().getTime() - Date.parse(s) < a
            ? i.intl.string(i.t.IKE48n)
            : i.intl.string(i.t.u0gUWt);
}
