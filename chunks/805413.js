n.d(t, { A: () => m, e: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(179771),
    o = n(417098),
    d = n(793574),
    c = n(688810),
    u = n(429913),
    _ = n(206828),
    E = n(942370),
    A = n(49999),
    h = n(176219),
    f = n(105292),
    I = n(971656);
function p(e) {
    return null != e && !e.scopes.includes(l.F.SDK_SOCIAL_LAYER) && e.application.id === E.T.ACTIVISION_APPLICATION_ID;
}
let m = function (e) {
    let { markAsDismissed: t, recurringDismiss: n, noticeType: a } = e,
        l = E.T.CALL_OF_DUTY_APPLICATION_ID,
        m = (0, u.h)(l),
        T = m?.name,
        { startAuthorization: g, canStartAuthorization: S, fetched: N, token: C } = (0, _.RD)(m),
        { analyticsLocations: O } = (0, c.Ay)(d.A.NOTICE),
        R = p(C),
        [L, y] = r.useState(!1);
    return (r.useEffect(() => {
        N && !R && t(L ? A.i.TAKE_ACTION : A.i.INDIRECT_ACTION);
    }, [L, N, t, R]),
    null != m && S && N)
        ? (0, i.jsxs)(o.$T, {
              color: o.Hv.WARNING,
              children: [
                  (0, i.jsx)(o.PM, {
                      noticeType: a,
                      onClick: () => {
                          t(A.i.USER_DISMISS);
                      },
                  }),
                  (0, i.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/37dd378cbc52678cf98cba1b9abef1a63da6d2bdbc6535c3982aff71e6d23783.png",
                      alt: T,
                      className: s()(I.tV, I.Y5),
                  }),
                  f.intl.string(h.default.OleW32),
                  (0, i.jsx)(o.Z_, {
                      onClick: function () {
                          (y(!0), g({ analyticsLocations: O }));
                      },
                      className: I.NS,
                      noticeType: a,
                      children: f.intl.string(h.default.ZeOhh9),
                  }),
                  (0, i.jsx)(o.zr, {
                      onClick: () => n(A.i.USER_DISMISS),
                      className: I.go,
                      children: f.intl.string(h.default["8qJAeT"]),
                  }),
              ],
          })
        : null;
};
