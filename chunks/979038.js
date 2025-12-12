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
    m = n(750154),
    h = n(314897),
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
    R = n(671955);
function w(e) {
    var t;
    let { user: n, activity: w, onAction: D, onClose: x, application: L, containerClassName: j } = e,
        { themeType: M } = (0, y.z)(),
        k = (0, i.e7)([h.default], () => h.default.getId() === n.id),
        U = (0, u.q)(L),
        G = (0, _.L)(null != (t = null == w ? void 0 : w.application_id) ? t : null == L ? void 0 : L.id),
        { analyticsLocations: Z } = (0, p.ZP)(f.Z.USER_PROFILE_ACTIVITY_BUTTONS),
        F = (0, b.Un)({ location: "UserProfileActivityButtons" }),
        B = M === R.l.MODAL || M === R.l.MODAL_V2,
        V = M === R.l.POPOUT,
        H = (() =>
            k
                ? V && (null == w ? void 0 : w.type) === P.IIU.PLAYING && (null == L ? void 0 : L.id) != null && F
                    ? (0, r.jsx)(d.Z, {
                          applicationId: L.id,
                          onAction: D,
                          onClose: x,
                      })
                    : null
                : G || !U || null == L || B
                  ? (0, l.Z)(w)
                      ? (0, r.jsx)(T.Z, {
                            platformType: P.ABu.XBOX,
                            icon: () => (0, r.jsx)(E.Z, {}),
                            onAction: D,
                        })
                      : (0, s.Z)(w)
                        ? (0, r.jsx)(T.Z, {
                              platformType: P.ABu.PLAYSTATION,
                              icon: () => (0, r.jsx)(g.Z, {}),
                              onAction: D,
                          })
                        : (0, c.Z)(w)
                          ? (0, r.jsx)(A.Z, {
                                activity: w,
                                onAction: D,
                            })
                          : (0, a.Z)(w, P.xjy.JOIN) || (0, o.Z)(w)
                            ? (0, r.jsx)(S.Z, {
                                  user: n,
                                  activity: w,
                                  onAction: D,
                                  onClose: x,
                              })
                            : (null == w ? void 0 : w.type) === P.IIU.HANG_STATUS
                              ? (0, r.jsx)(v.Z, {
                                    user: n,
                                    activity: w,
                                    onAction: D,
                                    onClose: x,
                                })
                              : (null == w ? void 0 : w.buttons) != null && (null == w ? void 0 : w.buttons.length) >= 1
                                ? (0, r.jsx)(O.Z, {
                                      user: n,
                                      activity: w,
                                      onAction: D,
                                  })
                                : (0, a.Z)(w, P.xjy.INSTANCE)
                                  ? (0, r.jsx)(I.Z, {
                                        user: n,
                                        activity: w,
                                        onAction: D,
                                    })
                                  : (0, m.dS)(w)
                                    ? (0, r.jsx)(C.Z, {
                                          activity: w,
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
