n.d(t, { Z: () => I });
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
    f = n(639351),
    _ = n(103479),
    p = n(238607),
    h = n(414402),
    m = n(934393),
    g = n(803663),
    E = n(585253),
    b = n(715547),
    y = n(994102),
    O = n(981631),
    v = n(327833);
function I(e) {
    let { user: t, activity: n, onAction: I, onClose: T, application: S } = e,
        A = (0, c.q)(S, 'UserProfileActivityButtons');
    if ((0, s.Z)(n))
        return (0, r.jsx)(m.Z, {
            platformType: O.ABu.XBOX,
            icon: () => (0, r.jsx)(f.Z, {}),
            onAction: I
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(m.Z, {
            platformType: O.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(d.Z, {}),
            onAction: I
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(b.Z, {
            activity: n,
            onAction: I
        });
    let N = (0, i.Z)(n, O.xjy.JOIN) || (0, a.Z)(n),
        C = (null == n ? void 0 : n.application_id) != null;
    return N && C
        ? (0, r.jsxs)('div', {
              className: v.buttonContainer,
              children: [
                  (0, r.jsx)(p.Z, {
                      user: t,
                      activity: n,
                      onAction: I,
                      onClose: T
                  }),
                  (0, r.jsx)(E.Z, {
                      activity: n,
                      onAction: I
                  })
              ]
          })
        : N
          ? (0, r.jsx)(p.Z, {
                user: t,
                activity: n,
                onAction: I,
                onClose: T
            })
          : A && null != S
            ? (0, r.jsx)(y.Z, {
                  application: S,
                  onAction: I,
                  onClose: T
              })
            : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
              ? (0, r.jsx)(_.Z, {
                    user: t,
                    activity: n,
                    onAction: I
                })
              : C
                ? (0, r.jsx)(E.Z, {
                      activity: n,
                      onAction: I
                  })
                : (0, i.Z)(n, O.xjy.INSTANCE)
                  ? (0, r.jsx)(h.Z, {
                        user: t,
                        activity: n,
                        onAction: I
                    })
                  : (0, u.dS)(n)
                    ? (0, r.jsx)(g.Z, {
                          activity: n,
                          onAction: I,
                          onClose: T
                      })
                    : null;
}
