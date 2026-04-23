n.d(t, { Q: () => o });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(544231),
    d = n(74114),
    s = n(287809),
    u = n(985018);
function o(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, d.l)(e.id);
    return t?.isStaff() === !0 && e.isDM() && null == n
        ? (0, r.jsx)(l.Dr, {
              id: "mark-as-stranger-danger",
              label: u.intl.string(u.t.CgWmmT),
              action: () => (0, a.Ju)(e.id),
          })
        : null;
}
