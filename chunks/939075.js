e.d(n, { A: () => T, y: () => E });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(477782),
    a = e(541806),
    s = e(765379),
    o = e(672979),
    c = e(90644),
    u = e(717306),
    d = e(20805),
    A = e(474397),
    x = e(780964),
    p = e(858897),
    f = e(287809),
    _ = e(301736),
    m = e(985018);
let g = () => (0, p.openUserSettings)(x.X.CONNECTIONS_PANEL);
function E(t) {
    let { entry: n, onOpenGameSettings: e } = t;
    return (0, d.aj)(n) || (0, d.Lf)(n) || (0, d.Tq)(n) ? g : (0, d.zD)(n) ? e : null;
}
function T(t) {
    let { user: n, activity: e, entry: d, onAction: x, onClose: p, appContext: T } = t,
        N = (0, _.A)();
    if (!(0, l.bG)([f.default], () => f.default.getCurrentUser()?.id === n.id)) return null;
    let C = (function (t) {
        let { activity: n, entry: e, onOpenGameSettings: i } = t;
        return null != e
            ? E({ entry: e, onOpenGameSettings: i })
            : null != n
              ? (function (t) {
                    let { activity: n, onOpenGameSettings: e } = t;
                    return (0, u.A)(n) || (0, c.A)(n) || (0, a.A)(n) ? g : (0, o.A)(n) && !(0, s.A)(n) ? e : null;
                })({ activity: n, onOpenGameSettings: i })
              : null;
    })({ activity: e, entry: d, onOpenGameSettings: N });
    return null == C
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "manage-privacy",
              label: m.intl.string(m.t.anfNPV),
              action: () => {
                  x?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), C(), (0, A.A)(T), p?.();
              },
          });
}
