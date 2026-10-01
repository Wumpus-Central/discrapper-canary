e.d(n, { A: () => g, y: () => E });
var l = e(477900);
e(582128);
var i = e(17928),
    r = e(477782),
    a = e(541806),
    s = e(765379),
    o = e(672979),
    c = e(90644),
    u = e(717306),
    d = e(20805),
    A = e(474397),
    x = e(780964),
    p = e(766075),
    f = e(287809),
    m = e(301736),
    _ = e(375708);
function T() {
    return (0, p.openUserSettings)(x.X.CONNECTIONS_CATEGORY);
}
function E(t) {
    let { entry: n, onOpenGameSettings: e } = t;
    return (0, d.aj)(n) || (0, d.Lf)(n) || (0, d.Tq)(n) ? T : (0, d.zD)(n) ? e : null;
}
function g(t) {
    let { user: n, activity: e, entry: d, onAction: x, onClose: p, appContext: g } = t,
        N = (0, m.A)();
    if (!(0, i.bG)([f.default], () => f.default.getCurrentUser()?.id === n.id)) return null;
    let C = (function (t) {
        let { activity: n, entry: e, onOpenGameSettings: l } = t;
        return null != e
            ? E({ entry: e, onOpenGameSettings: l })
            : null != n
              ? (function (t) {
                    let { activity: n, onOpenGameSettings: e } = t;
                    return (0, u.A)(n) || (0, c.A)(n) || (0, a.A)(n) ? T : (0, o.A)(n) && !(0, s.A)(n) ? e : null;
                })({ activity: n, onOpenGameSettings: l })
              : null;
    })({ activity: e, entry: d, onOpenGameSettings: N });
    return null == C
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "manage-privacy",
              label: _.intl.string(_.t.anfNPV),
              action: () => {
                  (x?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), C(), (0, A.A)(g), p?.());
              },
          });
}
