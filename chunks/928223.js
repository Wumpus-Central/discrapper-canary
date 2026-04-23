n.d(t, { A: () => _ });
var a = n(627968);
n(64700);
var i = n(347805),
    l = n(183555),
    r = n(716804),
    s = n(900179),
    o = n(518477),
    d = n(985018),
    c = n(142948);
function _(e) {
    let { userId: t } = e,
        n = (0, r.g)(),
        { trackUserProfileAction: _ } = (0, l.NJ)();
    return (0, a.jsx)(s.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, a.jsx)(i.A, {
            userId: t,
            className: c.N,
            autoFocus: n === o.bk.NOTE,
            onUpdate: () => _({ action: "SET_NOTE" }),
        }),
    });
}
