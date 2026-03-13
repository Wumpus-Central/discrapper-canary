"use strict";
n.d(t, { A: () => S, X: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(986268),
    d = n(345942),
    _ = n(773669),
    f = n(961350),
    p = n(696451),
    h = n(860689),
    m = n(661191),
    E = n(107123),
    g = n(985018),
    A = n(837756);
function I(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        s = t.id,
        a = (0, o.bG)([p.Ay, f.default], () => p.Ay.getMember(s, f.default.getId())?.joinedAt != null, [s]),
        c = i.useCallback(
            (e) => {
                a && (e.stopPropagation(), (0, d.u)(t.id));
            },
            [a, t.id],
        );
    return !a || n
        ? (0, r.jsx)(l.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, r.jsx)(u.Heading, {
                  className: A.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, r.jsx)(u.DUT, {
              className: A.YS,
              onClick: c,
              children: (0, r.jsx)(l.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, r.jsx)(u.Heading, {
                      className: A.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function T(e) {
    let { onlineCount: t, memberCount: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: a()(A.ol, i),
        children: [
            (0, r.jsxs)("div", {
                className: A.Kl,
                children: [
                    (0, r.jsx)("div", { className: A.JX }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: g.intl.format(g.t["LC+S+m"], { membersOnline: t }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: A.Kl,
                children: [
                    (0, r.jsx)("div", { className: A.Om }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: g.intl.format(g.t.zRl6XR, { count: n }),
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        s = (0, o.bG)([_.default], () => _.default.locale),
        a = (0, E.P)(m.default.extractTimestamp(t.id), s),
        l = i.useMemo(() => {
            let e = (0, h.b9)(t);
            return (0, r.jsx)(c.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, r.jsxs)("div", {
        className: A.wx,
        children: [
            (0, r.jsxs)("div", {
                className: A.VW,
                children: [(0, r.jsx)(I, { profile: t, disableGuildNameClick: n }), l],
            }),
            (0, r.jsx)(T, { onlineCount: t.onlineCount, memberCount: t.memberCount }),
            (0, r.jsx)("div", {
                className: A.b5,
                children: (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: g.intl.format(g.t.zb2Q56, { createdAtDate: a }),
                }),
            }),
        ],
    });
}
