n.d(t, { Z: () => T });
var r = n(255367);
n(73800);
var i = n(620662),
    a = n(841784),
    o = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(206074),
    u = n(750154),
    d = n(374129),
    _ = n(639351),
    f = n(103479),
    p = n(191764),
    h = n(238607),
    m = n(414402),
    g = n(934393),
    E = n(803663),
    b = n(585253),
    y = n(715547),
    O = n(994102),
    v = n(981631),
    I = n(327833);
function T(e) {
    let { user: t, activity: n, onAction: T, onClose: S, application: A } = e,
        N = (0, c.q)(A, 'UserProfileActivityButtons');
    if ((0, s.Z)(n))
        return (0, r.jsx)(g.Z, {
            platformType: v.ABu.XBOX,
            icon: () => (0, r.jsx)(_.Z, {}),
            onAction: T
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(g.Z, {
            platformType: v.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(d.Z, {}),
            onAction: T
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(y.Z, {
            activity: n,
            onAction: T
        });
    let C = (0, i.Z)(n, v.xjy.JOIN) || (0, a.Z)(n),
        R = (null == n ? void 0 : n.application_id) != null;
    return C && R
        ? (0, r.jsxs)('div', {
              className: I.buttonContainer,
              children: [
                  (0, r.jsx)(h.Z, {
                      user: t,
                      activity: n,
                      onAction: T,
                      onClose: S
                  }),
                  (0, r.jsx)(b.Z, {
                      activity: n,
                      onAction: T
                  })
              ]
          })
        : C
          ? (0, r.jsx)(h.Z, {
                user: t,
                activity: n,
                onAction: T,
                onClose: S
            })
          : N && null != A
            ? (0, r.jsx)(O.Z, {
                  application: A,
                  onAction: T,
                  onClose: S
              })
            : (null == n ? void 0 : n.type) === v.IIU.HANG_STATUS
              ? (0, r.jsx)(p.Z, {
                    user: t,
                    activity: n,
                    onAction: T,
                    onClose: S
                })
              : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      activity: n,
                      onAction: T
                  })
                : R
                  ? (0, r.jsx)(b.Z, {
                        activity: n,
                        onAction: T
                    })
                  : (0, i.Z)(n, v.xjy.INSTANCE)
                    ? (0, r.jsx)(m.Z, {
                          user: t,
                          activity: n,
                          onAction: T
                      })
                    : (0, u.dS)(n)
                      ? (0, r.jsx)(E.Z, {
                            activity: n,
                            onAction: T,
                            onClose: S
                        })
                      : null;
}
