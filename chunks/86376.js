l.d(t, { A: () => y, X: () => k });
var s = l(627968),
    a = l(64700),
    i = l(503698),
    n = l.n(i),
    r = l(17928),
    c = l(990078),
    o = l(534514),
    d = l(939249),
    m = l(834730),
    u = l(986268),
    x = l(345942),
    h = l(773669),
    v = l(280450),
    j = l(696451),
    g = l(860689),
    f = l(935208),
    b = l(107123),
    p = l(375708),
    N = l(446037);
function A(e) {
    let { profile: t, disableGuildNameClick: l } = e,
        i = t.id,
        n = (0, r.bG)([j.Ay, v.default], () => j.Ay.getMember(i, v.default.getId())?.joinedAt != null, [i]),
        m = a.useCallback(
            (e) => {
                n && (e.stopPropagation(), (0, x.u)(t.id));
            },
            [n, t.id],
        );
    return !n || l
        ? (0, s.jsx)(c.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, s.jsx)(o.D, {
                  className: N.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, s.jsx)(d.D, {
              className: N.YS,
              onClick: m,
              children: (0, s.jsx)(c.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, s.jsx)(o.D, {
                      className: N.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function k(e) {
    let { onlineCount: t, memberCount: l, className: a, highContrast: i = !1 } = e;
    return (0, s.jsxs)("div", {
        className: n()(N.ol, a),
        children: [
            (0, s.jsxs)("div", {
                className: N.Kl,
                children: [
                    (0, s.jsx)("div", { className: N.JX }),
                    (0, s.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: i ? "text-default" : "text-subtle",
                        children: p.intl.format(p.t["LC+S+m"], { membersOnline: t }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: N.Kl,
                children: [
                    (0, s.jsx)("div", { className: n()(N.Om, i && N.i7) }),
                    (0, s.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: i ? "text-default" : "text-subtle",
                        children: p.intl.format(p.t.zRl6XR, { count: l }),
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { profile: t, disableGuildNameClick: l } = e,
        i = (0, r.bG)([h.default], () => h.default.locale),
        n = (0, b.P)(f.default.extractTimestamp(t.id), i),
        c = a.useMemo(() => {
            let e = (0, g.b9)(t);
            return (0, s.jsx)(u.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, s.jsxs)("div", {
        className: N.wx,
        children: [
            (0, s.jsxs)("div", {
                className: N.VW,
                children: [(0, s.jsx)(A, { profile: t, disableGuildNameClick: l }), c],
            }),
            (0, s.jsx)(k, { onlineCount: t.onlineCount, memberCount: t.memberCount }),
            (0, s.jsx)("div", {
                className: N.b5,
                children: (0, s.jsx)(m.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: p.intl.format(p.t.zb2Q56, { createdAtDate: n }),
                }),
            }),
        ],
    });
}
