"use strict";
n.d(t, { A: () => j, X: () => N });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(990078),
    c = n(534514),
    d = n(939249),
    u = n(834730),
    _ = n(986268),
    h = n(345942),
    m = n(773669),
    p = n(961350),
    g = n(696451),
    A = n(860689),
    f = n(661191),
    x = n(107123),
    E = n(985018),
    I = n(73045);
function v(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        r = t.id,
        l = (0, a.bG)([g.Ay, p.default], () => g.Ay.getMember(r, p.default.getId())?.joinedAt != null, [r]),
        u = s.useCallback(
            (e) => {
                l && (e.stopPropagation(), (0, h.u)(t.id));
            },
            [l, t.id],
        );
    return !l || n
        ? (0, i.jsx)(o.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, i.jsx)(c.D, {
                  className: I.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, i.jsx)(d.D, {
              className: I.YS,
              onClick: u,
              children: (0, i.jsx)(o.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(c.D, {
                      className: I.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function N(e) {
    let { onlineCount: t, memberCount: n, className: s, highContrast: r = !1 } = e;
    return (0, i.jsxs)("div", {
        className: l()(I.ol, s),
        children: [
            (0, i.jsxs)("div", {
                className: I.Kl,
                children: [
                    (0, i.jsx)("div", { className: I.JX }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: r ? "text-default" : "text-subtle",
                        children: E.intl.format(E.t["LC+S+m"], { membersOnline: t }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: I.Kl,
                children: [
                    (0, i.jsx)("div", { className: l()(I.Om, r && I.i7) }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: r ? "text-default" : "text-subtle",
                        children: E.intl.format(E.t.zRl6XR, { count: n }),
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        r = (0, a.bG)([m.default], () => m.default.locale),
        l = (0, x.P)(f.default.extractTimestamp(t.id), r),
        o = s.useMemo(() => {
            let e = (0, A.b9)(t);
            return (0, i.jsx)(_.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: I.wx,
        children: [
            (0, i.jsxs)("div", {
                className: I.VW,
                children: [(0, i.jsx)(v, { profile: t, disableGuildNameClick: n }), o],
            }),
            (0, i.jsx)(N, { onlineCount: t.onlineCount, memberCount: t.memberCount }),
            (0, i.jsx)("div", {
                className: I.b5,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: E.intl.format(E.t.zb2Q56, { createdAtDate: l }),
                }),
            }),
        ],
    });
}
