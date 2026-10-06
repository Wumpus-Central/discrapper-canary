n.d(e, { A: () => N, y: () => I });
var l = n(477900);
n(582128);
var i = n(17928),
    a = n(477782),
    r = n(541806),
    s = n(765379),
    o = n(672979),
    c = n(90644),
    u = n(717306),
    d = n(20805),
    A = n(474397),
    f = n(780964),
    p = n(766075),
    g = n(287809),
    m = n(301736),
    x = n(375708);
function _() {
    return (0, p.openUserSettings)(f.X.CONNECTIONS_CATEGORY);
}
function I(t) {
    let { entry: e, onOpenGameSettings: n } = t;
    return (0, d.aj)(e) || (0, d.Lf)(e) || (0, d.Tq)(e) ? _ : (0, d.zD)(e) ? n : null;
}
function N(t) {
    let { user: e, activity: n, entry: d, onAction: f, onClose: p, appContext: N } = t,
        E = (0, m.A)();
    if (!(0, i.bG)([g.default], () => g.default.getCurrentUser()?.id === e.id)) return null;
    let T = (function (t) {
        let { activity: e, entry: n, onOpenGameSettings: l } = t;
        return null != n
            ? I({ entry: n, onOpenGameSettings: l })
            : null != e
              ? (function (t) {
                    let { activity: e, onOpenGameSettings: n } = t;
                    return (0, u.A)(e) || (0, c.A)(e) || (0, r.A)(e) ? _ : (0, o.A)(e) && !(0, s.A)(e) ? n : null;
                })({ activity: e, onOpenGameSettings: l })
              : null;
    })({ activity: n, entry: d, onOpenGameSettings: E });
    return null == T
        ? null
        : (0, l.jsx)(a.Dr, {
              id: "manage-privacy",
              label: x.intl.string(x.t.anfNPV),
              action: () => {
                  (f?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), T(), (0, A.A)(N), p?.());
              },
          });
}
