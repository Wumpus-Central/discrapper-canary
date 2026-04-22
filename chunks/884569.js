n.d(t, { B: () => o });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(367130),
    d = n(486227),
    s = n(287809),
    u = n(985018);
function o(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, d.E)(e.id);
    return t?.isStaff() === !0 && e.isDM() && null == n
        ? (0, r.jsx)(l.Dr, { id: "mark-as-likely-ato", label: u.intl.string(u.t.AWKKgc), action: () => (0, a.a)(e.id) })
        : null;
}
