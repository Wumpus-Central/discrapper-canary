n.d(t, { Z: () => T });
var r = n(255367);
n(73800);
var i = n(40851),
    o = n(620662),
    a = n(841784),
    s = n(834353),
    l = n(802856),
    c = n(420660),
    u = n(750154),
    d = n(374129),
    f = n(639351),
    _ = n(892001),
    p = n(103479),
    h = n(238607),
    m = n(414402),
    g = n(934393),
    E = n(803663),
    b = n(715547),
    y = n(981631),
    O = n(477839),
    v = n(388032),
    I = n(622802);
let S = (e) => {
    let { user: t, activity: n, onAction: o } = e,
        a = (0, i.Aq)(),
        s = (e) => {
            let { action: t } = e;
            a.dispatch(y.CkL.POPOUT_CLOSE), (0, _.closeUserProfileModal)(), null == o || o({ action: t });
        };
    return (0, r.jsx)(p.Z, {
        user: t,
        activity: n,
        onAction: s
    });
};
function T(e) {
    let { user: t, activity: n, onAction: i, onClose: _ } = e;
    return null != n && n.application_id === O.bO
        ? ((n.buttons = [v.intl.string(I.default['Fv/2Oz'])]),
          (n.metadata = { button_urls: [O.U8] }),
          (0, r.jsx)(S, {
              user: t,
              activity: n,
              onAction: i
          }))
        : (0, l.Z)(n)
          ? (0, r.jsx)(g.Z, {
                platformType: y.ABu.XBOX,
                icon: () => (0, r.jsx)(f.Z, {}),
                onAction: i
            })
          : (0, s.Z)(n)
            ? (0, r.jsx)(g.Z, {
                  platformType: y.ABu.PLAYSTATION,
                  icon: () => (0, r.jsx)(d.Z, {}),
                  onAction: i
              })
            : (0, c.Z)(n)
              ? (0, r.jsx)(b.Z, {
                    activity: n,
                    onAction: i
                })
              : (0, o.Z)(n, y.xjy.JOIN) || (0, a.Z)(n)
                ? (0, r.jsx)(h.Z, {
                      user: t,
                      activity: n,
                      onAction: i,
                      onClose: _
                  })
                : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                  ? (0, r.jsx)(p.Z, {
                        user: t,
                        activity: n,
                        onAction: i
                    })
                  : (0, o.Z)(n, y.xjy.INSTANCE)
                    ? (0, r.jsx)(m.Z, {
                          user: t,
                          activity: n,
                          onAction: i
                      })
                    : (0, u.dS)(n)
                      ? (0, r.jsx)(E.Z, {
                            activity: n,
                            onAction: i,
                            onClose: _
                        })
                      : null;
}
