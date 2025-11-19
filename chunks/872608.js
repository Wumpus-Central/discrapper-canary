n.d(t, { Z: () => d });
var r = n(54381),
    i = n(399606),
    a = n(681715),
    o = n(481060),
    s = n(594174),
    l = n(546791),
    c = n(198952),
    u = n(869392);
let d = (e) => {
    let { userId: t, dmsSent: n, callCount: d } = e,
        f = (0, i.e7)([s.default], () => s.default.getUser(t));
    return void 0 === f
        ? null
        : (0, r.jsx)(a.i_, {
              title: f.username,
              body: (0, l.Kp)(n, d),
              asContainer: !0,
              children: (0, r.jsx)("div", {
                  className: u.container,
                  children: (0, r.jsx)(c.r, {
                      user: f,
                      avatarSize: o.EFr.SIZE_40,
                  }),
              }),
          });
};
