n.d(t, { Z: () => f });
var r = n(951288),
    i = n(399606),
    a = n(681715),
    o = n(481060),
    s = n(594174),
    l = n(198952),
    c = n(345909),
    u = n(388032),
    d = n(869392);
let f = (e) => {
    let { userId: t, dmsSent: n, callCount: f } = e,
        _ = (0, i.e7)([s.default], () => s.default.getUser(t));
    return void 0 === _
        ? null
        : (0, r.jsx)(a.i_, {
              title: _.username,
              body: u.intl.formatToPlainString(c.default.Fjwpen, {
                  dmsSent: n,
                  callCount: f,
              }),
              asContainer: !0,
              children: (0, r.jsx)("div", {
                  className: d.container,
                  children: (0, r.jsx)(l.r, {
                      user: _,
                      avatarSize: o.EFr.SIZE_40,
                  }),
              }),
          });
};
