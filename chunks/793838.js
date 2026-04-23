e.d(n, { A: () => d });
var i = e(627968);
e(64700);
var l = e(833349),
    r = e(626584),
    a = e(939496),
    s = e(993401),
    o = e(652215),
    c = e(996988),
    u = e(985018);
function d(t) {
    let { user: n, activity: e, onAction: d } = t,
        { themeType: A } = (0, a.E)(),
        x = A === c.d.MODAL_V2;
    return (0, l.A)(e, o.jUm.INSTANCE)
        ? (0, i.jsx)(s.FD, {
              text: u.intl.string(u.t.vwl1PK),
              fullWidth: !x,
              onClick: (t) => {
                  t.stopPropagation(),
                      d?.({ action: "PRESS_NOTIFY_BUTTON" }),
                      new r.A("UserActivityActions").log("notify", n.id, e);
              },
          })
        : null;
}
