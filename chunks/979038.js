n.d(t, { Z: () => S });
var r = n(255367);
n(73800);
var i = n(620662),
    a = n(841784),
    o = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(206074),
    u = n(584057),
    d = n(750154),
    _ = n(374129),
    f = n(639351),
    p = n(103479),
    h = n(191764),
    m = n(238607),
    g = n(414402),
    E = n(934393),
    b = n(803663),
    y = n(585253),
    O = n(715547),
    v = n(994102),
    I = n(981631),
    T = n(327833);
function S(e) {
    let { user: t, activity: n, onAction: S, onClose: A, application: N } = e,
        C = (0, c.q)(N, 'UserProfileActivityButtons'),
        R = (0, u.L)(null != n ? n : void 0, void 0);
    if ((0, s.Z)(n))
        return (0, r.jsx)(E.Z, {
            platformType: I.ABu.XBOX,
            icon: () => (0, r.jsx)(f.Z, {}),
            onAction: S
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(E.Z, {
            platformType: I.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(_.Z, {}),
            onAction: S
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(O.Z, {
            activity: n,
            onAction: S
        });
    let P = (0, i.Z)(n, I.xjy.JOIN) || (0, a.Z)(n),
        w = (null == n ? void 0 : n.application_id) != null;
    return !R && C && null != N
        ? (0, r.jsx)(v.Z, {
              application: N,
              onAction: S,
              onClose: A
          })
        : P && w
          ? (0, r.jsxs)('div', {
                className: T.buttonContainer,
                children: [
                    (0, r.jsx)(m.Z, {
                        user: t,
                        activity: n,
                        onAction: S,
                        onClose: A
                    }),
                    (0, r.jsx)(y.Z, {
                        activity: n,
                        onAction: S
                    })
                ]
            })
          : P
            ? (0, r.jsx)(m.Z, {
                  user: t,
                  activity: n,
                  onAction: S,
                  onClose: A
              })
            : (null == n ? void 0 : n.type) === I.IIU.HANG_STATUS
              ? (0, r.jsx)(h.Z, {
                    user: t,
                    activity: n,
                    onAction: S,
                    onClose: A
                })
              : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                ? (0, r.jsx)(p.Z, {
                      user: t,
                      activity: n,
                      onAction: S
                  })
                : w
                  ? (0, r.jsx)(y.Z, {
                        activity: n,
                        onAction: S
                    })
                  : (0, i.Z)(n, I.xjy.INSTANCE)
                    ? (0, r.jsx)(g.Z, {
                          user: t,
                          activity: n,
                          onAction: S
                      })
                    : (0, d.dS)(n)
                      ? (0, r.jsx)(b.Z, {
                            activity: n,
                            onAction: S,
                            onClose: A
                        })
                      : null;
}
