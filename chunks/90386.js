s.d(e, { I: () => I, T: () => E });
var _ = s(627968),
    i = s(397927),
    a = s(954376),
    A = s(287809),
    n = s(562153),
    r = s(985018),
    l = s(441805);
let I = (t, e) => {
        if (1 === t.length) {
            let s = A.default.getUser(t[0]);
            return null != s
                ? (0, _.jsx)(i.euF, { src: s.getAvatarURL(e, 32), size: i._3J.SIZE_32, "aria-hidden": !0 })
                : (0, _.jsx)(i.nys, {});
        }
        return (0, _.jsx)(a.A, { recipients: t, size: i._3J.SIZE_32 });
    },
    E = (t, e, s, a) => {
        let I = [...t].map((t) => A.default.getUser(t)),
            E = (t) =>
                (0, _.jsx)(i.Text, { variant: "text-md/semibold", className: l.Xh, children: n.Ay.getName(s, a, t) });
        return e >= 4
            ? r.intl.format(r.t.qfo6KR, {
                  usernameHook1: () => E(I[0]),
                  usernameHook2: () => E(I[1]),
                  numberOfOtherUsers: e - t.length,
              })
            : 3 === e
              ? r.intl.format(r.t["67ZE+9"], { usernameHook1: () => E(I[0]), usernameHook2: () => E(I[1]) })
              : 2 === e
                ? r.intl.format(r.t.veV4IN, { usernameHook1: () => E(I[0]), usernameHook2: () => E(I[1]) })
                : r.intl.format(r.t["4WHCtq"], { usernameHook: () => E(I[0]) });
    };
