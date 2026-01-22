n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(833349),
    a = n(626584),
    s = n(939496),
    o = n(993401),
    l = n(652215),
    c = n(996988),
    u = n(985018);
function d(e) {
    let { user: t, activity: n, onAction: d } = e,
        { themeType: f } = (0, s.E)(),
        p = f === c.d.MODAL_V2;
    if (!(0, i.A)(n, l.jUm.INSTANCE)) return null;
    let _ = (e) => {
        e.stopPropagation(),
            null == d || d({ action: "PRESS_NOTIFY_BUTTON" }),
            new a.A("UserActivityActions").log("notify", t.id, n);
    };
    return (0, r.jsx)(o.FD, {
        text: u.intl.string(u.t.vwl1PK),
        fullWidth: !p,
        onClick: _,
    });
}
