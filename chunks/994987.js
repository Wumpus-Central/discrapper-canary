n.d(t, { A: () => u });
var i = n(627968),
    s = n(417597),
    r = n(435371),
    a = n(397927),
    l = n(287809),
    o = n(923531),
    c = n(283900),
    d = n(478311);
let u = (e) => {
    let { userId: t, dmsSent: n, callCount: u } = e,
        _ = (0, s.bG)([l.default], () => l.default.getUser(t));
    return void 0 === _
        ? null
        : (0, i.jsx)(r.un, {
              title: _.username,
              body: (0, o.fq)(n, u),
              asContainer: !0,
              children: (0, i.jsx)("div", {
                  className: d.k,
                  children: (0, i.jsx)(c.H, { user: _, avatarSize: a._3J.SIZE_40 }),
              }),
          });
};
