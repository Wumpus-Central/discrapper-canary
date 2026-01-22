n.d(t, {
    A: () => v,
    y: () => O,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(541806),
    o = n(765379),
    l = n(672979),
    c = n(90644),
    u = n(717306),
    d = n(20805),
    f = n(474397),
    p = n(780964),
    _ = n(840065),
    h = n(287809),
    m = n(301736),
    g = n(652215),
    E = n(985018);
let b = () =>
    (0, _.openUserSettings)(p.X.CONNECTIONS_PANEL, {
        section: g.nc_.CONNECTIONS,
    });

function y(e) {
    let { activity: t, onOpenGameSettings: n } = e;
    return (0, u.A)(t) || (0, c.A)(t) || (0, s.A)(t) ? b : (0, l.A)(t) && !(0, o.A)(t) ? n : null;
}

function O(e) {
    let { entry: t, onOpenGameSettings: n } = e;
    return (0, d.aj)(t) || (0, d.Lf)(t) || (0, d.Tq)(t) ? b : (0, d.zD)(t) ? n : null;
}

function A(e) {
    let { activity: t, entry: n, onOpenGameSettings: r } = e;
    return null != n
        ? O({
              entry: n,
              onOpenGameSettings: r,
          })
        : null != t
          ? y({
                activity: t,
                onOpenGameSettings: r,
            })
          : null;
}

function v(e) {
    let { user: t, activity: n, entry: s, onAction: o, onClose: l, appContext: c } = e,
        u = (0, m.A)();
    if (
        !(0, i.bG)([h.default], () => {
            var e;
            return (null == (e = h.default.getCurrentUser()) ? void 0 : e.id) === t.id;
        })
    )
        return null;
    let d = A({
        activity: n,
        entry: s,
        onOpenGameSettings: u,
    });
    return null == d
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "manage-privacy",
              label: E.intl.string(E.t.anfNPV),
              action: () => {
                  null == o ||
                      o({
                          action: "PRESS_MANAGE_PRIVACY_MENU_ITEM",
                      }),
                      d(),
                      (0, f.A)(c),
                      null == l || l();
              },
          });
}
