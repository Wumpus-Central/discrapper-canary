var r = n(477900),
    o = n(582128),
    i = n(778712),
    a = n(97808),
    s = n(834730),
    l = n(854627),
    c = n(589152),
    g = n(792996),
    u = n(896423);
n.d(
    e,
    {},
    {
        A: function () {
            let t = (0, c.b)().slice(0, 3),
                e = t[0],
                { avatarSrc: n, eventHandlers: m } = (0, l.A)({
                    userId: e?.id,
                    size: i._3.SIZE_24,
                    animateOnHover: !0,
                });
            function d(t) {
                return null != t.globalName ? t.globalName : t.username;
            }
            let I = o.useMemo(
                () =>
                    t.length >= 2
                        ? g.intl.formatToPlainString(g.t.c7ETJH, { username: d(t[0]) })
                        : 1 === t.length
                          ? g.intl.formatToPlainString(g.t.dpjXPL, { username: d(t[0]) })
                          : "",
                [t],
            );
            return 0 === t.length
                ? null
                : (0, r.jsxs)("div", {
                      className: u.kL,
                      children: [
                          (0, r.jsx)(a.eu, {
                              className: u.__invalid_icon,
                              src: n,
                              "aria-label": e.username,
                              size: i._3.SIZE_24,
                              ...m,
                          }),
                          (0, r.jsx)(s.E, {
                              className: u.Qq,
                              variant: "body-sm/normal",
                              color: "text-overlay-light",
                              children: I,
                          }),
                      ],
                  });
        },
    },
);
