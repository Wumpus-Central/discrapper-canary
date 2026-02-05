"use strict";
n.d(t, { A: () => S, y: () => T });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(541806),
    o = n(765379),
    l = n(672979),
    u = n(90644),
    c = n(717306),
    d = n(20805),
    _ = n(474397),
    f = n(780964),
    p = n(840065),
    h = n(287809),
    m = n(301736),
    g = n(652215),
    E = n(985018);
let A = () => (0, p.openUserSettings)(f.X.CONNECTIONS_PANEL, { section: g.nc_.CONNECTIONS });
function I(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, c.A)(t) || (0, u.A)(t) || (0, s.A)(t) ? A : (0, l.A)(t) && !(0, o.A)(t) ? n : null;
}
function T(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, d.aj)(t) || (0, d.Lf)(t) || (0, d.Tq)(t) ? A : (0, d.zD)(t) ? n : null;
}
function y(e) {
    let { activity: t, entry: n, onOpenGameSettings: r } = e;
    return null != n
        ? T({ entry: n, onOpenGameSettings: r })
        : null != t
          ? I({ activity: t, onOpenGameSettings: r })
          : null;
}
function S(e) {
    let { user: t, activity: n, entry: s, onAction: o, onClose: l, appContext: u } = e,
        c = (0, m.A)();
    if (!(0, i.bG)([h.default], () => h.default.getCurrentUser()?.id === t.id)) return null;
    let d = y({ activity: n, entry: s, onOpenGameSettings: c });
    return null == d
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "manage-privacy",
              label: E.intl.string(E.t.anfNPV),
              action: () => {
                  o?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), d(), (0, _.A)(u), l?.();
              },
          });
}
