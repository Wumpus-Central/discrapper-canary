n.d(t, { Z: () => R });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(620662),
    o = n(841784),
    s = n(834353),
    l = n(802856),
    c = n(420660),
    u = n(206074),
    d = n(194544),
    f = n(100527),
    p = n(906732),
    _ = n(584057),
    h = n(750154),
    m = n(314897),
    g = n(374129),
    E = n(639351),
    b = n(172416),
    y = n(652853),
    O = n(103479),
    v = n(191764),
    S = n(238607),
    I = n(414402),
    T = n(934393),
    C = n(803663),
    A = n(715547),
    N = n(994102),
    P = n(981631),
    w = n(671955);
function R(e) {
    var t;
    let { user: n, activity: R, onAction: D, onClose: x, application: L, containerClassName: j } = e,
        { themeType: M } = (0, y.z)(),
        k = (0, i.e7)([m.default], () => m.default.getId() === n.id),
        U = (0, u.q)(L),
        G = (0, _.L)(null != (t = null == R ? void 0 : R.application_id) ? t : null == L ? void 0 : L.id),
        { analyticsLocations: Z } = (0, p.ZP)(f.Z.USER_PROFILE_ACTIVITY_BUTTONS),
        F = (0, b.U)({ location: "UserProfileActivityButtons" }),
        B = M === w.l.MODAL || M === w.l.MODAL_V2,
        V = M === w.l.POPOUT,
        H = (() =>
            k
                ? V && (null == R ? void 0 : R.type) === P.IIU.PLAYING && (null == L ? void 0 : L.id) != null && F
                    ? (0, r.jsx)(d.Z, {
                          applicationId: L.id,
                          onAction: D,
                          onClose: x,
                      })
                    : null
                : G || !U || null == L || B
                  ? (0, l.Z)(R)
                      ? (0, r.jsx)(T.Z, {
                            platformType: P.ABu.XBOX,
                            icon: () => (0, r.jsx)(E.Z, {}),
                            onAction: D,
                        })
                      : (0, s.Z)(R)
                        ? (0, r.jsx)(T.Z, {
                              platformType: P.ABu.PLAYSTATION,
                              icon: () => (0, r.jsx)(g.Z, {}),
                              onAction: D,
                          })
                        : (0, c.Z)(R)
                          ? (0, r.jsx)(A.Z, {
                                activity: R,
                                onAction: D,
                            })
                          : (0, a.Z)(R, P.xjy.JOIN) || (0, o.Z)(R)
                            ? (0, r.jsx)(S.Z, {
                                  user: n,
                                  activity: R,
                                  onAction: D,
                                  onClose: x,
                              })
                            : (null == R ? void 0 : R.type) === P.IIU.HANG_STATUS
                              ? (0, r.jsx)(v.Z, {
                                    user: n,
                                    activity: R,
                                    onAction: D,
                                    onClose: x,
                                })
                              : (null == R ? void 0 : R.buttons) != null && (null == R ? void 0 : R.buttons.length) >= 1
                                ? (0, r.jsx)(O.Z, {
                                      user: n,
                                      activity: R,
                                      onAction: D,
                                  })
                                : (0, a.Z)(R, P.xjy.INSTANCE)
                                  ? (0, r.jsx)(I.Z, {
                                        user: n,
                                        activity: R,
                                        onAction: D,
                                    })
                                  : (0, h.dS)(R)
                                    ? (0, r.jsx)(C.Z, {
                                          activity: R,
                                          onAction: D,
                                          onClose: x,
                                      })
                                    : null
                  : (0, r.jsx)(N.Z, {
                        application: L,
                        onAction: D,
                        onClose: x,
                        analyticsLocations: Z,
                    }))();
    return null == H
        ? null
        : (0, r.jsx)("div", {
              className: j,
              children: H,
          });
}
