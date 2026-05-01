"use strict";
n.d(t, { A: () => I, y: () => A });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(541806),
    o = n(765379),
    l = n(672979),
    u = n(90644),
    c = n(717306),
    d = n(20805),
    _ = n(474397),
    f = n(780964),
    h = n(858897),
    p = n(287809),
    E = n(301736),
    m = n(375708);
let g = () => (0, h.openUserSettings)(f.X.CONNECTIONS_PANEL);
function A(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, d.aj)(t) || (0, d.Lf)(t) || (0, d.Tq)(t) ? g : (0, d.zD)(t) ? n : null;
}
function I(e) {
    let { user: t, activity: n, entry: d, onAction: f, onClose: h, appContext: I } = e,
        T = (0, E.A)();
    if (!(0, r.bG)([p.default], () => p.default.getCurrentUser()?.id === t.id)) return null;
    let S = (function (e) {
        let { activity: t, entry: n, onOpenGameSettings: i } = e;
        return null != n
            ? A({ entry: n, onOpenGameSettings: i })
            : null != t
              ? (function (e) {
                    let { activity: t, onOpenGameSettings: n } = e;
                    return (0, c.A)(t) || (0, u.A)(t) || (0, a.A)(t) ? g : (0, l.A)(t) && !(0, o.A)(t) ? n : null;
                })({ activity: t, onOpenGameSettings: i })
              : null;
    })({ activity: n, entry: d, onOpenGameSettings: T });
    return null == S
        ? null
        : (0, i.jsx)(s.Dr, {
              id: "manage-privacy",
              label: m.intl.string(m.t.anfNPV),
              action: () => {
                  f?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), S(), (0, _.A)(I), h?.();
              },
          });
}
