s.d(e, { I: () => E, T: () => u });
var a = s(627968),
    A = s(97808),
    i = s(778712),
    l = s(950305),
    r = s(834730),
    n = s(954376),
    _ = s(287809),
    I = s(562153),
    h = s(985018),
    d = s(131678);
let E = (t, e) => {
        if (1 === t.length) {
            let s = _.default.getUser(t[0]);
            return null != s
                ? (0, a.jsx)(A.eu, { src: s.getAvatarURL(e, 32), size: i._3.SIZE_32, "aria-hidden": !0 })
                : (0, a.jsx)(l.n, {});
        }
        return (0, a.jsx)(n.A, { recipients: t, size: i._3.SIZE_32 });
    },
    u = (t, e, s, A) => {
        let i = [...t].map((t) => _.default.getUser(t)),
            l = (t) =>
                (0, a.jsx)(r.E, { variant: "text-md/semibold", className: d.Xh, children: I.Ay.getName(s, A, t) });
        return e >= 4
            ? h.intl.format(h.t.qfo6KR, {
                  usernameHook1: () => l(i[0]),
                  usernameHook2: () => l(i[1]),
                  numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? h.intl.format(h.t["67ZE+9"], { usernameHook1: () => l(i[0]), usernameHook2: () => l(i[1]) })
              : 2 === e
                ? h.intl.format(h.t.veV4IN, { usernameHook1: () => l(i[0]), usernameHook2: () => l(i[1]) })
                : h.intl.format(h.t["4WHCtq"], { usernameHook: () => l(i[0]) });
    };
