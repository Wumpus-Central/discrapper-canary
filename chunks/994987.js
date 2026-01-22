n.d(t, { A: () => d });
var r = n(627968),
    i = n(417597),
    a = n(435371),
    s = n(397927),
    o = n(287809),
    l = n(923531),
    c = n(283900),
    u = n(478311);
let d = (e) => {
    let { userId: t, dmsSent: n, callCount: d } = e,
        f = (0, i.bG)([o.default], () => o.default.getUser(t));
    return void 0 === f
        ? null
        : (0, r.jsx)(a.un, {
              title: f.username,
              body: (0, l.fq)(n, d),
              asContainer: !0,
              children: (0, r.jsx)("div", {
                  className: u.k,
                  children: (0, r.jsx)(c.H, {
                      user: f,
                      avatarSize: s._3J.SIZE_40,
                  }),
              }),
          });
};
