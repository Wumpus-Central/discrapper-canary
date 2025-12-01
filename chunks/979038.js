n.d(t, { Z: () => C });
var r = n(54381);
n(473749);
var i = n(620662),
    a = n(841784),
    o = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(206074),
    u = n(100527),
    d = n(906732),
    f = n(584057),
    p = n(750154),
    _ = n(374129),
    m = n(639351),
    h = n(652853),
    g = n(103479),
    E = n(191764),
    b = n(238607),
    y = n(414402),
    O = n(934393),
    v = n(803663),
    S = n(715547),
    I = n(994102),
    T = n(981631),
    A = n(671955);
function C(e) {
    var t;
    let { user: n, activity: C, onAction: N, onClose: P, application: R } = e,
        { themeType: w } = (0, h.z)(),
        D = (0, c.q)(R),
        x = (0, f.L)(null != (t = null == C ? void 0 : C.application_id) ? t : null == R ? void 0 : R.id),
        { analyticsLocations: L } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS),
        j = w === A.l.MODAL || w === A.l.MODAL_V2;
    return x || !D || null == R || j
        ? (0, s.Z)(C)
            ? (0, r.jsx)(O.Z, {
                  platformType: T.ABu.XBOX,
                  icon: () => (0, r.jsx)(m.Z, {}),
                  onAction: N,
              })
            : (0, o.Z)(C)
              ? (0, r.jsx)(O.Z, {
                    platformType: T.ABu.PLAYSTATION,
                    icon: () => (0, r.jsx)(_.Z, {}),
                    onAction: N,
                })
              : (0, l.Z)(C)
                ? (0, r.jsx)(S.Z, {
                      activity: C,
                      onAction: N,
                  })
                : (0, i.Z)(C, T.xjy.JOIN) || (0, a.Z)(C)
                  ? (0, r.jsx)(b.Z, {
                        user: n,
                        activity: C,
                        onAction: N,
                        onClose: P,
                    })
                  : (null == C ? void 0 : C.type) === T.IIU.HANG_STATUS
                    ? (0, r.jsx)(E.Z, {
                          user: n,
                          activity: C,
                          onAction: N,
                          onClose: P,
                      })
                    : (null == C ? void 0 : C.buttons) != null && (null == C ? void 0 : C.buttons.length) >= 1
                      ? (0, r.jsx)(g.Z, {
                            user: n,
                            activity: C,
                            onAction: N,
                        })
                      : (0, i.Z)(C, T.xjy.INSTANCE)
                        ? (0, r.jsx)(y.Z, {
                              user: n,
                              activity: C,
                              onAction: N,
                          })
                        : (0, p.dS)(C)
                          ? (0, r.jsx)(v.Z, {
                                activity: C,
                                onAction: N,
                                onClose: P,
                            })
                          : null
        : (0, r.jsx)(I.Z, {
              application: R,
              onAction: N,
              onClose: P,
              analyticsLocations: L,
          });
}
