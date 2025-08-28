n.d(t, { Z: () => D });
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
    _ = n(355281),
    p = n(509003),
    h = n(750154),
    m = n(374129),
    g = n(639351),
    E = n(652853),
    b = n(103479),
    y = n(191764),
    O = n(238607),
    v = n(414402),
    I = n(934393),
    T = n(195990),
    S = n(803663),
    A = n(585253),
    C = n(715547),
    N = n(994102),
    R = n(981631),
    P = n(671955),
    w = n(723701);
function D(e) {
    let { user: t, activity: n, onAction: D, onClose: x, application: L } = e,
        { themeType: j } = (0, E.z)(),
        M = (0, c.q)(L, "UserProfileActivityButtons"),
        k = (0, f.L)(null != n ? n : void 0, void 0),
        { showPlayButton: U } = _.m.useConfig({ location: "UserProfileActivityButtons" }),
        { analyticsLocations: G } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS);
    if (U && null != L && (0, p.bP)(L))
        return (0, r.jsx)(T.Z, {
            user: t,
            application: L,
            onAction: D,
            onClose: x,
        });
    if ((0, s.Z)(n))
        return (0, r.jsx)(I.Z, {
            platformType: R.ABu.XBOX,
            icon: () => (0, r.jsx)(g.Z, {}),
            onAction: D,
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(I.Z, {
            platformType: R.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(m.Z, {}),
            onAction: D,
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(C.Z, {
            activity: n,
            onAction: D,
        });
    let B = j === P.l.MODAL || j === P.l.MODAL_V2;
    if (!k && M && null != L && !B)
        return (0, r.jsx)(N.Z, {
            application: L,
            onAction: D,
            onClose: x,
            analyticsLocations: G,
        });
    let Z = (0, i.Z)(n, R.xjy.JOIN) || (0, a.Z)(n),
        F = (null == n ? void 0 : n.application_id) != null;
    return Z && F
        ? (0, r.jsxs)("div", {
              className: w.buttonContainer,
              children: [
                  (0, r.jsx)(O.Z, {
                      user: t,
                      activity: n,
                      onAction: D,
                      onClose: x,
                  }),
                  (0, r.jsx)(A.Z, {
                      activity: n,
                      onAction: D,
                  }),
              ],
          })
        : Z
          ? (0, r.jsx)(O.Z, {
                user: t,
                activity: n,
                onAction: D,
                onClose: x,
            })
          : (null == n ? void 0 : n.type) === R.IIU.HANG_STATUS
            ? (0, r.jsx)(y.Z, {
                  user: t,
                  activity: n,
                  onAction: D,
                  onClose: x,
              })
            : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
              ? (0, r.jsx)(b.Z, {
                    user: t,
                    activity: n,
                    onAction: D,
                })
              : F
                ? (0, r.jsx)(A.Z, {
                      activity: n,
                      onAction: D,
                  })
                : (0, i.Z)(n, R.xjy.INSTANCE)
                  ? (0, r.jsx)(v.Z, {
                        user: t,
                        activity: n,
                        onAction: D,
                    })
                  : (0, h.dS)(n)
                    ? (0, r.jsx)(S.Z, {
                          activity: n,
                          onAction: D,
                          onClose: x,
                      })
                    : null;
}
