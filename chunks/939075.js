"use strict";
n.d(t, { A: () => m, y: () => T });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    s = n(541806),
    l = n(765379),
    o = n(672979),
    d = n(90644),
    c = n(717306),
    u = n(20805),
    _ = n(474397),
    E = n(780964),
    A = n(766075),
    h = n(287809),
    I = n(301736),
    f = n(375708);
function p() {
    return (0, A.openUserSettings)(E.X.CONNECTIONS_PANEL);
}
function T(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, u.aj)(t) || (0, u.Lf)(t) || (0, u.Tq)(t) ? p : (0, u.zD)(t) ? n : null;
}
function m(e) {
    let { user: t, activity: n, entry: u, onAction: E, onClose: A, appContext: m } = e,
        g = (0, I.A)();
    if (!(0, r.bG)([h.default], () => h.default.getCurrentUser()?.id === t.id)) return null;
    let S = (function (e) {
        let { activity: t, entry: n, onOpenGameSettings: i } = e;
        return null != n
            ? T({ entry: n, onOpenGameSettings: i })
            : null != t
              ? (function (e) {
                    let { activity: t, onOpenGameSettings: n } = e;
                    return (0, c.A)(t) || (0, d.A)(t) || (0, s.A)(t) ? p : (0, o.A)(t) && !(0, l.A)(t) ? n : null;
                })({ activity: t, onOpenGameSettings: i })
              : null;
    })({ activity: n, entry: u, onOpenGameSettings: g });
    return null == S
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "manage-privacy",
              label: f.intl.string(f.t.anfNPV),
              action: () => {
                  E?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), S(), (0, _.A)(m), A?.();
              },
          });
}
