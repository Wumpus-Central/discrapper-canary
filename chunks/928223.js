n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(347805),
    l = n(183555),
    a = n(716804),
    r = n(900179),
    d = n(518477),
    o = n(985018),
    c = n(225675);
function u(e) {
    let { userId: t } = e,
        n = (0, a.g)(),
        { trackUserProfileAction: u } = (0, l.NJ)();
    return (0, i.jsx)(r.A, {
        heading: o.intl.string(o.t["mQKv+v"]),
        scrollTargetId: d.bk.NOTE,
        children: (0, i.jsx)(s.A, {
            userId: t,
            className: c.N,
            autoFocus: n === d.bk.NOTE,
            onUpdate: () => u({ action: "SET_NOTE" }),
        }),
    });
}
