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
    var t;
    let { user: n, activity: C, onAction: N, onClose: R, application: P } = e,
        { themeType: w } = (0, m.z)(),
        D = (0, c.q)(P, "UserProfileActivityButtons"),
        x = (0, f.L)(null != (t = null == C ? void 0 : C.application_id) ? t : null == P ? void 0 : P.id),
        { analyticsLocations: L } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS),
        M = w === A.l.MODAL || w === A.l.MODAL_V2;
    return x || !D || null == P || M
        ? (0, s.Z)(C)
            ? (0, r.jsx)(O.Z, {
                  platformType: S.ABu.XBOX,
                  icon: () => (0, r.jsx)(h.Z, {}),
                  onAction: N,
              })
            : (0, o.Z)(C)
              ? (0, r.jsx)(O.Z, {
                    platformType: S.ABu.PLAYSTATION,
                    icon: () => (0, r.jsx)(p.Z, {}),
                    onAction: N,
                })
              : (0, l.Z)(C)
                ? (0, r.jsx)(I.Z, {
                      activity: C,
                      onAction: N,
                  })
                : (0, i.Z)(C, S.xjy.JOIN) || (0, a.Z)(C)
                  ? (0, r.jsx)(b.Z, {
                        user: n,
                        activity: C,
                        onAction: N,
                        onClose: R,
                    })
                  : (null == C ? void 0 : C.type) === S.IIU.HANG_STATUS
                    ? (0, r.jsx)(E.Z, {
                          user: n,
                          activity: C,
                          onAction: N,
                          onClose: R,
                      })
                    : (null == C ? void 0 : C.buttons) != null && (null == C ? void 0 : C.buttons.length) >= 1
                      ? (0, r.jsx)(g.Z, {
                            user: n,
                            activity: C,
                            onAction: N,
                        })
                      : (0, i.Z)(C, S.xjy.INSTANCE)
                        ? (0, r.jsx)(y.Z, {
                              user: n,
                              activity: C,
                              onAction: N,
                          })
                        : (0, _.dS)(C)
                          ? (0, r.jsx)(v.Z, {
                                activity: C,
                                onAction: N,
                                onClose: R,
                            })
                          : null
        : (0, r.jsx)(T.Z, {
              application: P,
              onAction: N,
              onClose: R,
              analyticsLocations: L,
          });
}
