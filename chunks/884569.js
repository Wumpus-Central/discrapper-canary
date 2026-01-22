n.d(t, { B: () => c });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(367130),
    o = n(486227),
    s = n(287809),
    d = n(985018);
function c(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, o.E)(e.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && e.isDM() && null == n
        ? (0, r.jsx)(l.Drp, {
              id: "mark-as-likely-ato",
              label: d.intl.string(d.t.AWKKgc),
              action: () => (0, a.a)(e.id),
          })
        : null;
}
