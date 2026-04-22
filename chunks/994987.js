l.d(t, { A: () => o });
var n = l(627968),
    i = l(417597),
    s = l(459192),
    a = l(778712),
    r = l(287809),
    d = l(923531),
    c = l(283900),
    u = l(494596);
let o = (e) => {
    let { userId: t, dmsSent: l, callCount: o } = e,
        x = (0, i.bG)([r.default], () => r.default.getUser(t));
    return void 0 === x
        ? null
        : (0, n.jsx)(s.u, {
              title: x.username,
              body: (0, d.fq)(l, o),
              asContainer: !0,
              children: (0, n.jsx)("div", {
                  className: u.k,
                  children: (0, n.jsx)(c.H, { user: x, avatarSize: a._3.SIZE_40 }),
              }),
          });
};
