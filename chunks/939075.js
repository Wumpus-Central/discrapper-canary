var l = e(477900);
e(582128);
var i = e(855986),
    a = e(477782),
    r = e(541806),
    s = e(765379),
    o = e(672979),
    c = e(90644),
    u = e(717306),
    d = e(20805),
    A = e(474397),
    x = e(780964),
    m = e(766075),
    f = e(287809),
    g = e(301736),
    p = e(792996);
function _() {
    return (0, m.openUserSettings)(x.X.CONNECTIONS_CATEGORY);
}
function I(t) {
    let { entry: n, onOpenGameSettings: e } = t;
    return (0, d.aj)(n) || (0, d.Lf)(n) || (0, d.Tq)(n) ? _ : (0, d.zD)(n) ? e : null;
}
e.d(
    n,
    {},
    {
        A: function (t) {
            let { user: n, activity: e, entry: d, onAction: x, onClose: m, appContext: E } = t,
                T = (0, g.A)();
            if (!(0, i.bG)([f.default], () => f.default.getCurrentUser()?.id === n.id)) return null;
            let N = (function (t) {
                let { activity: n, entry: e, onOpenGameSettings: l } = t;
                return null != e
                    ? I({ entry: e, onOpenGameSettings: l })
                    : null != n
                      ? (function (t) {
                            let { activity: n, onOpenGameSettings: e } = t;
                            return (0, u.A)(n) || (0, c.A)(n) || (0, r.A)(n)
                                ? _
                                : (0, o.A)(n) && !(0, s.A)(n)
                                  ? e
                                  : null;
                        })({ activity: n, onOpenGameSettings: l })
                      : null;
            })({ activity: e, entry: d, onOpenGameSettings: T });
            return null == N
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "manage-privacy",
                      label: p.intl.string(p.t.anfNPV),
                      action: () => {
                          (x?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), N(), (0, A.A)(E), m?.());
                      },
                  });
        },
        y: I,
    },
);
