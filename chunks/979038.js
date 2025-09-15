n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var i = n(620662),
    a = n(841784),
    o = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(206074),
    u = n(100527),
    d = n(906732),
    f = n(584057),
    _ = n(750154),
    p = n(374129),
    h = n(639351),
    m = n(652853),
    g = n(103479),
    E = n(191764),
    b = n(238607),
    y = n(414402),
    O = n(934393),
    v = n(803663),
    I = n(715547),
    T = n(994102),
    S = n(981631),
    A = n(671955);
function C(e) {
    let { user: t, activity: n, onAction: C, onClose: N, application: R } = e,
        { themeType: P } = (0, m.z)(),
        w = (0, c.q)(R, "UserProfileActivityButtons"),
        D = (0, f.L)(null != n ? n : void 0, void 0),
        { analyticsLocations: x } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS);
    if ((0, s.Z)(n))
        return (0, r.jsx)(O.Z, {
            platformType: S.ABu.XBOX,
            icon: () => (0, r.jsx)(h.Z, {}),
            onAction: C,
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(O.Z, {
            platformType: S.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(p.Z, {}),
            onAction: C,
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(I.Z, {
            activity: n,
            onAction: C,
        });
    let L = P === A.l.MODAL || P === A.l.MODAL_V2;
    return D || !w || null == R || L
        ? (0, i.Z)(n, S.xjy.JOIN) || (0, a.Z)(n)
            ? (0, r.jsx)(b.Z, {
                  user: t,
                  activity: n,
                  onAction: C,
                  onClose: N,
              })
            : (null == n ? void 0 : n.type) === S.IIU.HANG_STATUS
              ? (0, r.jsx)(E.Z, {
                    user: t,
                    activity: n,
                    onAction: C,
                    onClose: N,
                })
              : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                ? (0, r.jsx)(g.Z, {
                      user: t,
                      activity: n,
                      onAction: C,
                  })
                : (0, i.Z)(n, S.xjy.INSTANCE)
                  ? (0, r.jsx)(y.Z, {
                        user: t,
                        activity: n,
                        onAction: C,
                    })
                  : (0, _.dS)(n)
                    ? (0, r.jsx)(v.Z, {
                          activity: n,
                          onAction: C,
                          onClose: N,
                      })
                    : null
        : (0, r.jsx)(T.Z, {
              application: R,
              onAction: C,
              onClose: N,
              analyticsLocations: x,
          });
}
