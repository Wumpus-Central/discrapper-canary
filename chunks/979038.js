n.d(t, { Z: () => R });
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
    I = n(585253),
    T = n(715547),
    S = n(994102),
    A = n(981631),
    C = n(671955),
    N = n(723701);
function R(e) {
    let { user: t, activity: n, onAction: R, onClose: P, application: w } = e,
        { themeType: D } = (0, m.z)(),
        x = (0, c.q)(w, "UserProfileActivityButtons"),
        L = (0, f.L)(null != n ? n : void 0, void 0),
        { analyticsLocations: j } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS);
    if ((0, s.Z)(n))
        return (0, r.jsx)(O.Z, {
            platformType: A.ABu.XBOX,
            icon: () => (0, r.jsx)(h.Z, {}),
            onAction: R,
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(O.Z, {
            platformType: A.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(p.Z, {}),
            onAction: R,
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(T.Z, {
            activity: n,
            onAction: R,
        });
    let M = D === C.l.MODAL || D === C.l.MODAL_V2;
    if (!L && x && null != w && !M)
        return (0, r.jsx)(S.Z, {
            application: w,
            onAction: R,
            onClose: P,
            analyticsLocations: j,
        });
    let k = (0, i.Z)(n, A.xjy.JOIN) || (0, a.Z)(n),
        U = (null == n ? void 0 : n.application_id) != null;
    return k && U
        ? (0, r.jsxs)("div", {
              className: N.buttonContainer,
              children: [
                  (0, r.jsx)(b.Z, {
                      user: t,
                      activity: n,
                      onAction: R,
                      onClose: P,
                  }),
                  (0, r.jsx)(I.Z, {
                      activity: n,
                      onAction: R,
                  }),
              ],
          })
        : k
          ? (0, r.jsx)(b.Z, {
                user: t,
                activity: n,
                onAction: R,
                onClose: P,
            })
          : (null == n ? void 0 : n.type) === A.IIU.HANG_STATUS
            ? (0, r.jsx)(E.Z, {
                  user: t,
                  activity: n,
                  onAction: R,
                  onClose: P,
              })
            : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
              ? (0, r.jsx)(g.Z, {
                    user: t,
                    activity: n,
                    onAction: R,
                })
              : U
                ? (0, r.jsx)(I.Z, {
                      activity: n,
                      onAction: R,
                  })
                : (0, i.Z)(n, A.xjy.INSTANCE)
                  ? (0, r.jsx)(y.Z, {
                        user: t,
                        activity: n,
                        onAction: R,
                    })
                  : (0, _.dS)(n)
                    ? (0, r.jsx)(v.Z, {
                          activity: n,
                          onAction: R,
                          onClose: P,
                      })
                    : null;
}
