s.d(t, { I: () => h, T: () => k });
var r = s(627968),
    a = s(97808),
    n = s(778712),
    i = s(950305),
    o = s(834730),
    l = s(954376),
    m = s(287809),
    c = s(562153),
    d = s(375708),
    u = s(131678);
let h = (e, t) => {
        if (1 === e.length) {
            let s = m.default.getUser(e[0]);
            return null != s
                ? (0, r.jsx)(a.eu, { src: s.getAvatarURL(t, 32), size: n._3.SIZE_32, "aria-hidden": !0 })
                : (0, r.jsx)(i.n, {});
        }
        return (0, r.jsx)(l.A, { recipients: e, size: n._3.SIZE_32 });
    },
    k = (e, t, s, a) => {
        let n = [...e].map((e) => m.default.getUser(e)),
            i = (e) =>
                (0, r.jsx)(o.E, { variant: "text-md/semibold", className: u.Xh, children: c.Ay.getName(s, a, e) });
        return t >= 4
            ? d.intl.format(d.t.qfo6KR, {
                  usernameHook1: () => i(n[0]),
                  usernameHook2: () => i(n[1]),
                  numberOfOtherUsers: t - e.length,
              })
            : 3 === t
              ? d.intl.format(d.t["67ZE+9"], { usernameHook1: () => i(n[0]), usernameHook2: () => i(n[1]) })
              : 2 === t
                ? d.intl.format(d.t.veV4IN, { usernameHook1: () => i(n[0]), usernameHook2: () => i(n[1]) })
                : d.intl.format(d.t["4WHCtq"], { usernameHook: () => i(n[0]) });
    };
