n.d(t, { Q: () => c });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(544231),
    o = n(74114),
    s = n(287809),
    d = n(985018);
function c(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.l)(e.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && e.isDM() && null == n
        ? (0, r.jsx)(l.Drp, {
              id: "mark-as-stranger-danger",
              label: d.intl.string(d.t.CgWmmT),
              action: () => (0, a.Ju)(e.id),
          })
        : null;
}
