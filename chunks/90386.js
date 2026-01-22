i.d(t, {
    I: () => c,
    T: () => m,
}),
    i(896048);
var n = i(627968),
    s = i(397927),
    r = i(954376),
    a = i(287809),
    l = i(562153),
    o = i(985018),
    d = i(441805);
let c = (e, t) => {
        if (1 === e.length) {
            let i = a.default.getUser(e[0]);
            return null != i
                ? (0, n.jsx)(s.euF, {
                      src: i.getAvatarURL(t, 32),
                      size: s._3J.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, n.jsx)(s.nys, {});
        }
        return (0, n.jsx)(r.A, {
            recipients: e,
            size: s._3J.SIZE_32,
        });
    },
    m = (e, t, i, r) => {
        let c = [...e].map((e) => a.default.getUser(e)),
            m = (e) =>
                (0, n.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    className: d.Xh,
                    children: l.Ay.getName(i, r, e),
                });
        return t >= 4
            ? o.intl.format(o.t.qfo6KR, {
                  usernameHook1: () => m(c[0]),
                  usernameHook2: () => m(c[1]),
                  numberOfOtherUsers: t - e.length,
              })
            : 3 === t
              ? o.intl.format(o.t["67ZE+9"], {
                    usernameHook1: () => m(c[0]),
                    usernameHook2: () => m(c[1]),
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IN, {
                      usernameHook1: () => m(c[0]),
                      usernameHook2: () => m(c[1]),
                  })
                : o.intl.format(o.t["4WHCtq"], {
                      usernameHook: () => m(c[0]),
                  });
    };
