n.d(t, { Z: () => P });
var r = n(951288);
n(647438);
var i = n(620662),
    a = n(841784),
    o = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(206074),
    u = n(584057),
    d = n(355281),
    f = n(509003),
    _ = n(750154),
    p = n(374129),
    h = n(639351),
    m = n(652853),
    g = n(103479),
    E = n(191764),
    b = n(238607),
    y = n(414402),
    O = n(934393),
    v = n(195990),
    I = n(803663),
    T = n(585253),
    S = n(715547),
    A = n(994102),
    C = n(981631),
    N = n(671955),
    R = n(723701);
function P(e) {
    let { user: t, activity: n, onAction: P, onClose: w, application: D } = e,
        { themeType: x } = (0, m.z)(),
        L = (0, c.q)(D, "UserProfileActivityButtons"),
        j = (0, u.L)(null != n ? n : void 0, void 0),
        { showPlayButton: M } = d.m.useConfig({ location: "UserProfileActivityButtons" });
    if (M && null != D && (0, f.bP)(D))
        return (0, r.jsx)(v.Z, {
            user: t,
            application: D,
            onAction: P,
            onClose: w,
        });
    if ((0, s.Z)(n))
        return (0, r.jsx)(O.Z, {
            platformType: C.ABu.XBOX,
            icon: () => (0, r.jsx)(h.Z, {}),
            onAction: P,
        });
    if ((0, o.Z)(n))
        return (0, r.jsx)(O.Z, {
            platformType: C.ABu.PLAYSTATION,
            icon: () => (0, r.jsx)(p.Z, {}),
            onAction: P,
        });
    if ((0, l.Z)(n))
        return (0, r.jsx)(S.Z, {
            activity: n,
            onAction: P,
        });
    let k = x === N.l.MODAL || x === N.l.MODAL_V2;
    if (!j && L && null != D && !k)
        return (0, r.jsx)(A.Z, {
            application: D,
            onAction: P,
            onClose: w,
        });
    let U = (0, i.Z)(n, C.xjy.JOIN) || (0, a.Z)(n),
        G = (null == n ? void 0 : n.application_id) != null;
    return U && G
        ? (0, r.jsxs)("div", {
              className: R.buttonContainer,
              children: [
                  (0, r.jsx)(b.Z, {
                      user: t,
                      activity: n,
                      onAction: P,
                      onClose: w,
                  }),
                  (0, r.jsx)(T.Z, {
                      activity: n,
                      onAction: P,
                  }),
              ],
          })
        : U
          ? (0, r.jsx)(b.Z, {
                user: t,
                activity: n,
                onAction: P,
                onClose: w,
            })
          : (null == n ? void 0 : n.type) === C.IIU.HANG_STATUS
            ? (0, r.jsx)(E.Z, {
                  user: t,
                  activity: n,
                  onAction: P,
                  onClose: w,
              })
            : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
              ? (0, r.jsx)(g.Z, {
                    user: t,
                    activity: n,
                    onAction: P,
                })
              : G
                ? (0, r.jsx)(T.Z, {
                      activity: n,
                      onAction: P,
                  })
                : (0, i.Z)(n, C.xjy.INSTANCE)
                  ? (0, r.jsx)(y.Z, {
                        user: t,
                        activity: n,
                        onAction: P,
                    })
                  : (0, _.dS)(n)
                    ? (0, r.jsx)(I.Z, {
                          activity: n,
                          onAction: P,
                          onClose: w,
                      })
                    : null;
}
