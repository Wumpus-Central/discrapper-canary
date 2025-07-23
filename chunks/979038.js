n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var i = n(40851),
    a = n(131734),
    o = n(620662),
    s = n(841784),
    l = n(834353),
    c = n(802856),
    u = n(420660),
    d = n(750154),
    _ = n(374129),
    f = n(639351),
    p = n(892001),
    h = n(103479),
    m = n(238607),
    g = n(414402),
    E = n(934393),
    b = n(803663),
    y = n(715547),
    O = n(994102),
    v = n(981631),
    I = n(477839),
    T = n(388032),
    S = n(603571);
let A = (e) => {
    let { user: t, activity: n, onAction: a } = e,
        o = (0, i.Aq)(),
        s = (e) => {
            let { action: t } = e;
            (o.dispatch(v.CkL.POPOUT_CLOSE), (0, p.closeUserProfileModal)(), null == a || a({ action: t }));
        };
    return (0, r.jsx)(h.Z, {
        user: t,
        activity: n,
        onAction: s
    });
};
function N(e) {
    let { user: t, activity: n, onAction: i, onClose: p, application: N } = e;
    return null != n && n.application_id === I.bO
        ? ((n.buttons = [T.intl.string(S.default['Fv/2Oz'])]),
          (n.metadata = { button_urls: [I.U8] }),
          (0, r.jsx)(A, {
              user: t,
              activity: n,
              onAction: i
          }))
        : (0, c.Z)(n)
          ? (0, r.jsx)(E.Z, {
                platformType: v.ABu.XBOX,
                icon: () => (0, r.jsx)(f.Z, {}),
                onAction: i
            })
          : (0, l.Z)(n)
            ? (0, r.jsx)(E.Z, {
                  platformType: v.ABu.PLAYSTATION,
                  icon: () => (0, r.jsx)(_.Z, {}),
                  onAction: i
              })
            : (0, u.Z)(n)
              ? (0, r.jsx)(y.Z, {
                    activity: n,
                    onAction: i
                })
              : (0, o.Z)(n, v.xjy.JOIN) || (0, s.Z)(n)
                ? (0, r.jsx)(m.Z, {
                      user: t,
                      activity: n,
                      onAction: i,
                      onClose: p
                  })
                : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                  ? (0, r.jsx)(h.Z, {
                        user: t,
                        activity: n,
                        onAction: i
                    })
                  : (0, o.Z)(n, v.xjy.INSTANCE)
                    ? (0, r.jsx)(g.Z, {
                          user: t,
                          activity: n,
                          onAction: i
                      })
                    : (0, d.dS)(n)
                      ? (0, r.jsx)(b.Z, {
                            activity: n,
                            onAction: i,
                            onClose: p
                        })
                      : null != N && null != (0, a.Z)(N)
                        ? (0, r.jsx)(O.Z, {
                              application: N,
                              onAction: i,
                              onClose: p
                          })
                        : null;
}
