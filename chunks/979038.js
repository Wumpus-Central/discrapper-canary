n.d(t, { Z: () => w });
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
    b = n(652853),
    y = n(103479),
    O = n(191764),
    v = n(238607),
    S = n(414402),
    I = n(934393),
    T = n(803663),
    C = n(715547),
    A = n(994102),
    N = n(981631),
    P = n(671955);
function w(e) {
    var t;
    let { user: n, activity: w, onAction: R, onClose: D, application: x, containerClassName: L } = e,
        { themeType: j } = (0, b.z)(),
        M = (0, i.e7)([m.default], () => m.default.getId() === n.id),
        k = (0, u.q)(x),
        U = (0, _.L)(null != (t = null == w ? void 0 : w.application_id) ? t : null == x ? void 0 : x.id),
        { analyticsLocations: G } = (0, p.ZP)(f.Z.USER_PROFILE_ACTIVITY_BUTTONS),
        Z = j === P.l.MODAL || j === P.l.MODAL_V2,
        F = j === P.l.POPOUT,
        B = (() =>
            M
                ? F && (null == w ? void 0 : w.type) === N.IIU.PLAYING && (null == x ? void 0 : x.id) != null
                    ? (0, r.jsx)(d.Z, {
                          applicationId: x.id,
                          onAction: R,
                          onClose: D,
                      })
                    : null
                : U || !k || null == x || Z
                  ? (0, l.Z)(w)
                      ? (0, r.jsx)(I.Z, {
                            platformType: N.ABu.XBOX,
                            icon: () => (0, r.jsx)(E.Z, {}),
                            onAction: R,
                        })
                      : (0, s.Z)(w)
                        ? (0, r.jsx)(I.Z, {
                              platformType: N.ABu.PLAYSTATION,
                              icon: () => (0, r.jsx)(g.Z, {}),
                              onAction: R,
                          })
                        : (0, c.Z)(w)
                          ? (0, r.jsx)(C.Z, {
                                activity: w,
                                onAction: R,
                            })
                          : (0, a.Z)(w, N.xjy.JOIN) || (0, o.Z)(w)
                            ? (0, r.jsx)(v.Z, {
                                  user: n,
                                  activity: w,
                                  onAction: R,
                                  onClose: D,
                              })
                            : (null == w ? void 0 : w.type) === N.IIU.HANG_STATUS
                              ? (0, r.jsx)(O.Z, {
                                    user: n,
                                    activity: w,
                                    onAction: R,
                                    onClose: D,
                                })
                              : (null == w ? void 0 : w.buttons) != null && (null == w ? void 0 : w.buttons.length) >= 1
                                ? (0, r.jsx)(y.Z, {
                                      user: n,
                                      activity: w,
                                      onAction: R,
                                  })
                                : (0, a.Z)(w, N.xjy.INSTANCE)
                                  ? (0, r.jsx)(S.Z, {
                                        user: n,
                                        activity: w,
                                        onAction: R,
                                    })
                                  : (0, h.dS)(w)
                                    ? (0, r.jsx)(T.Z, {
                                          activity: w,
                                          onAction: R,
                                          onClose: D,
                                      })
                                    : null
                  : (0, r.jsx)(A.Z, {
                        application: x,
                        onAction: R,
                        onClose: D,
                        analyticsLocations: G,
                    }))();
    return null == B
        ? null
        : (0, r.jsx)("div", {
              className: L,
              children: B,
          });
}
