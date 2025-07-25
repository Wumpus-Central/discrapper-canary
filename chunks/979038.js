n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var i = n(40851),
    a = n(620662),
    o = n(841784),
    s = n(834353),
    l = n(802856),
    c = n(420660),
    u = n(206074),
    d = n(750154),
    f = n(374129),
    _ = n(639351),
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
    let { user: t, activity: n, onAction: i, onClose: p, application: N } = e,
        C = (0, u.q)(N, 'UserProfileActivityButtons');
    return null != n && n.application_id === I.bO
        ? ((n.buttons = [T.intl.string(S.default['Fv/2Oz'])]),
          (n.metadata = { button_urls: [I.U8] }),
          (0, r.jsx)(A, {
              user: t,
              activity: n,
              onAction: i
          }))
        : (0, l.Z)(n)
          ? (0, r.jsx)(E.Z, {
                platformType: v.ABu.XBOX,
                icon: () => (0, r.jsx)(_.Z, {}),
                onAction: i
            })
          : (0, s.Z)(n)
            ? (0, r.jsx)(E.Z, {
                  platformType: v.ABu.PLAYSTATION,
                  icon: () => (0, r.jsx)(f.Z, {}),
                  onAction: i
              })
            : (0, c.Z)(n)
              ? (0, r.jsx)(y.Z, {
                    activity: n,
                    onAction: i
                })
              : (0, a.Z)(n, v.xjy.JOIN) && !(0, o.Z)(n)
                ? (0, r.jsx)(m.Z, {
                      user: t,
                      activity: n,
                      onAction: i,
                      onClose: p
                  })
                : C && null != N
                  ? (0, r.jsx)(O.Z, {
                        application: N,
                        onAction: i,
                        onClose: p
                    })
                  : (0, a.Z)(n, v.xjy.JOIN) || (0, o.Z)(n)
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
                      : (0, a.Z)(n, v.xjy.INSTANCE)
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
                          : null;
}
