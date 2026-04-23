"use strict";
n.d(t, { A: () => C, X: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(17928),
    o = n(990078),
    d = n(534514),
    c = n(939249),
    u = n(834730),
    _ = n(986268),
    h = n(345942),
    p = n(773669),
    m = n(495544),
    g = n(696451),
    x = n(860689),
    f = n(935208),
    A = n(107123),
    E = n(985018),
    I = n(73045);
function v(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        l = t.id,
        r = (0, a.bG)([g.Ay, m.default], () => g.Ay.getMember(l, m.default.getId())?.joinedAt != null, [l]),
        u = s.useCallback(
            (e) => {
                r && (e.stopPropagation(), (0, h.u)(t.id));
            },
            [r, t.id],
        );
    return !r || n
        ? (0, i.jsx)(o.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, i.jsx)(d.D, {
                  className: I.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, i.jsx)(c.D, {
              className: I.YS,
              onClick: u,
              children: (0, i.jsx)(o.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(d.D, {
                      className: I.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function j(e) {
    let { onlineCount: t, memberCount: n, className: s, highContrast: l = !1 } = e;
    return (0, i.jsxs)("div", {
        className: r()(I.ol, s),
        children: [
            (0, i.jsxs)("div", {
                className: I.Kl,
                children: [
                    (0, i.jsx)("div", { className: I.JX }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: l ? "text-default" : "text-subtle",
                        children: E.intl.format(E.t["LC+S+m"], { membersOnline: t }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: I.Kl,
                children: [
                    (0, i.jsx)("div", { className: r()(I.Om, l && I.i7) }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: l ? "text-default" : "text-subtle",
                        children: E.intl.format(E.t.zRl6XR, { count: n }),
                    }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        l = (0, a.bG)([p.default], () => p.default.locale),
        r = (0, A.P)(f.default.extractTimestamp(t.id), l),
        o = s.useMemo(() => {
            let e = (0, x.b9)(t);
            return (0, i.jsx)(_.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: I.wx,
        children: [
            (0, i.jsxs)("div", {
                className: I.VW,
                children: [(0, i.jsx)(v, { profile: t, disableGuildNameClick: n }), o],
            }),
            (0, i.jsx)(j, { onlineCount: t.onlineCount, memberCount: t.memberCount }),
            (0, i.jsx)("div", {
                className: I.b5,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: E.intl.format(E.t.zb2Q56, { createdAtDate: r }),
                }),
            }),
        ],
    });
}
