n.d(t, {
    I: () => c,
    T: () => u,
}),
    n(896048);
var s = n(627968),
    i = n(397927),
    r = n(954376),
    a = n(287809),
    l = n(562153),
    o = n(985018),
    d = n(441805);
let c = (e, t) => {
        if (1 === e.length) {
            let n = a.default.getUser(e[0]);
            return null != n
                ? (0, s.jsx)(i.euF, {
                      src: n.getAvatarURL(t, 32),
                      size: i._3J.SIZE_32,
                      "aria-hidden": !0,
                  })
                : (0, s.jsx)(i.nys, {});
        }
        return (0, s.jsx)(r.A, {
            recipients: e,
            size: i._3J.SIZE_32,
        });
    },
    u = (e, t, n, r) => {
        let c = [...e].map((e) => a.default.getUser(e)),
            u = (e) =>
                (0, s.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    className: d.Xh,
                    children: l.Ay.getName(n, r, e),
                });
        return t >= 4
            ? o.intl.format(o.t.qfo6KR, {
                  usernameHook1: () => u(c[0]),
                  usernameHook2: () => u(c[1]),
                  numberOfOtherUsers: t - e.length,
              })
            : 3 === t
              ? o.intl.format(o.t["67ZE+9"], {
                    usernameHook1: () => u(c[0]),
                    usernameHook2: () => u(c[1]),
                })
              : 2 === t
                ? o.intl.format(o.t.veV4IN, {
                      usernameHook1: () => u(c[0]),
                      usernameHook2: () => u(c[1]),
                  })
                : o.intl.format(o.t["4WHCtq"], { usernameHook: () => u(c[0]) });
    };
