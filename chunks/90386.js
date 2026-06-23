n.d(t, { I: () => h, T: () => k });
var r = n(627968),
    s = n(97808),
    a = n(778712),
    i = n(950305),
    o = n(834730),
    l = n(954376),
    c = n(287809),
    u = n(562153),
    m = n(375708),
    d = n(131678);
function h(e, t) {
    if (1 === e.length) {
        let n = c.default.getUser(e[0]);
        return null != n
            ? (0, r.jsx)(s.eu, { src: n.getAvatarURL(t, 32), size: a._3.SIZE_32, "aria-hidden": !0 })
            : (0, r.jsx)(i.n, {});
    }
    return (0, r.jsx)(l.A, { recipients: e, size: a._3.SIZE_32 });
}
function k(e, t, n, s) {
    let a = [...e].map((e) => c.default.getUser(e));
    function i(e) {
        return (0, r.jsx)(o.E, { variant: "text-md/semibold", className: d.Xh, children: u.Ay.getName(n, s, e) });
    }
    return t >= 4
        ? m.intl.format(m.t.qfo6KR, {
              usernameHook1: () => i(a[0]),
              usernameHook2: () => i(a[1]),
              numberOfOtherUsers: t - e.length,
          })
        : 3 === t
          ? m.intl.format(m.t["67ZE+9"], { usernameHook1: () => i(a[0]), usernameHook2: () => i(a[1]) })
          : 2 === t
            ? m.intl.format(m.t.veV4IN, { usernameHook1: () => i(a[0]), usernameHook2: () => i(a[1]) })
            : m.intl.format(m.t["4WHCtq"], { usernameHook: () => i(a[0]) });
}
