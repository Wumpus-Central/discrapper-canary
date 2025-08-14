n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var i = n(620662),
    o = n(841784),
    a = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(206074),
    u = n(584057),
    d = n(355281),
    f = n(509003),
    _ = n(750154),
    p = n(374129),
    h = n(639351),
    m = n(103479),
    g = n(191764),
    E = n(238607),
    b = n(414402),
    y = n(934393),
    O = n(195990),
    v = n(803663),
    I = n(585253),
    T = n(715547),
    S = n(994102),
    A = n(981631),
    N = n(723701);
function C(e) {
    let { user: t, activity: n, onAction: C, onClose: R, application: P } = e,
        w = (0, c.q)(P, "UserProfileActivityButtons"),
        D = (0, u.L)(null != n ? n : void 0, void 0),
        { showPlayButton: L } = d.m.useConfig({ location: "UserProfileActivityButtons" });
    if (L && null != P && (0, f.bP)(P))
        return (0, r.jsx)(O.Z, {
            user: t,
            application: P,
            onAction: C,
            onClose: R,
        });
    if ((0, s.Z)(n))
        return (0, r.jsx)(y.Z, {
            platformType: A.ABu.XBOX,
            icon: () => (0, r.jsx)(h.Z, {}),
            onAction: C,
        });
    if ((0, a.Z)(n))
        return (0, r.jsx)(y.Z, {
            platformType: A.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(p.Z, {}),
            onAction: C,
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(T.Z, {
            activity: n,
            onAction: C,
        });
    let x = (0, i.Z)(n, A.xjy.JOIN) || (0, o.Z)(n),
        M = (null == n ? void 0 : n.application_id) != null;
    return !D && w && null != P
        ? (0, r.jsx)(S.Z, {
              application: P,
              onAction: C,
              onClose: R,
          })
        : x && M
          ? (0, r.jsxs)("div", {
                className: N.buttonContainer,
                children: [
                    (0, r.jsx)(E.Z, {
                        user: t,
                        activity: n,
                        onAction: C,
                        onClose: R,
                    }),
                    (0, r.jsx)(I.Z, {
                        activity: n,
                        onAction: C,
                    }),
                ],
            })
          : x
            ? (0, r.jsx)(E.Z, {
                  user: t,
                  activity: n,
                  onAction: C,
                  onClose: R,
              })
            : (null == n ? void 0 : n.type) === A.IIU.HANG_STATUS
              ? (0, r.jsx)(g.Z, {
                    user: t,
                    activity: n,
                    onAction: C,
                    onClose: R,
                })
              : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                ? (0, r.jsx)(m.Z, {
                      user: t,
                      activity: n,
                      onAction: C,
                  })
                : M
                  ? (0, r.jsx)(I.Z, {
                        activity: n,
                        onAction: C,
                    })
                  : (0, i.Z)(n, A.xjy.INSTANCE)
                    ? (0, r.jsx)(b.Z, {
                          user: t,
                          activity: n,
                          onAction: C,
                      })
                    : (0, _.dS)(n)
                      ? (0, r.jsx)(v.Z, {
                            activity: n,
                            onAction: C,
                            onClose: R,
                        })
                      : null;
}
