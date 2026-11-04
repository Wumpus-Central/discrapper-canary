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
    f = e(780964),
    g = e(766075),
    m = e(287809),
    p = e(301736),
    x = e(792996);
function _() {
    return (0, g.openUserSettings)(f.X.CONNECTIONS_CATEGORY);
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
            let { user: n, activity: e, entry: d, onAction: f, onClose: g, appContext: N } = t,
                E = (0, p.A)();
            if (!(0, i.bG)([m.default], () => m.default.getCurrentUser()?.id === n.id)) return null;
            let T = (function (t) {
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
            })({ activity: e, entry: d, onOpenGameSettings: E });
            return null == T
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "manage-privacy",
                      label: x.intl.string(x.t.anfNPV),
                      action: () => {
                          (f?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }), T(), (0, A.A)(N), g?.());
                      },
                  });
        },
        y: I,
    },
);
