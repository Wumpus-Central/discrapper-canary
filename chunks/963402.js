t.d(l, { X: () => C, A: () => I });
var i = t(477900),
    a = t(582128),
    s = t(503698),
    n = t.n(s),
    r = t(17928),
    c = t(866665),
    o = t(297264),
    d = t(939249),
    m = t(834730),
    u = t(986268),
    x = t(534400),
    v = t(345942),
    g = t(773669),
    h = t(280450),
    j = t(696451),
    f = t(149790),
    b = t(935208),
    p = t(107123);
let N = (0, t(945810).mj)({
    name: "2026-06-guild-profile-server-tag",
    kind: "user",
    defaultConfig: { showServerTag: !1 },
    variations: { 1: { showServerTag: !0 } },
});
var A = t(375708),
    k = t(238525);
function y(e) {
    let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
        n = l.id,
        m = (0, r.bG)([j.Ay, h.default], () => j.Ay.getMember(n, h.default.getId())?.joinedAt != null, [n]),
        u = a.useCallback(
            (e) => {
                m && (e.stopPropagation(), (0, v.u)(l.id));
            },
            [m, l.id],
        );
    return !m || t
        ? (0, i.jsx)(c.m, {
              text: l.name,
              overflowOnly: !0,
              children: (0, i.jsx)(o.D, {
                  id: s,
                  className: k.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: l.name,
              }),
          })
        : (0, i.jsx)(d.D, {
              className: k.YS,
              onClick: u,
              children: (0, i.jsx)(c.m, {
                  text: l.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(o.D, {
                      id: s,
                      className: k.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: l.name,
                  }),
              }),
          });
}
function G(e) {
    let { profile: l } = e,
        { showServerTag: t } = N.useConfig({ location: "GuildProfileHeader" });
    return t
        ? (0, i.jsx)(x.o9, {
              className: k.WD,
              guildId: l.id,
              guildTag: l.tag ?? void 0,
              guildBadge: l.badgeHash ?? void 0,
          })
        : null;
}
function C(e) {
    let { onlineCount: l, memberCount: t, className: a, highContrast: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: n()(k.ol, a),
        children: [
            (0, i.jsxs)("div", {
                className: k.Kl,
                children: [
                    (0, i.jsx)("div", { className: k.JX }),
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: A.intl.format(A.t["LC+S+m"], { membersOnline: l }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: k.Kl,
                children: [
                    (0, i.jsx)("div", { className: n()(k.Om, s && k.i7) }),
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: A.intl.format(A.t.zRl6XR, { count: t }),
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
        n = (0, r.bG)([g.default], () => g.default.locale),
        c = (0, p.P)(b.default.extractTimestamp(l.id), n),
        o = a.useMemo(() => {
            let e = (0, f.b9)(l);
            return (0, i.jsx)(u.A, { guild: e, isBannerVisible: !1 });
        }, [l]);
    return (0, i.jsxs)("div", {
        className: k.wx,
        children: [
            (0, i.jsxs)("div", {
                className: k.VW,
                children: [
                    (0, i.jsx)(y, { profile: l, disableGuildNameClick: t, guildNameId: s }),
                    o,
                    null != l.tag && "" !== l.tag && (0, i.jsx)(G, { profile: l }),
                ],
            }),
            (0, i.jsx)(C, { onlineCount: l.onlineCount, memberCount: l.memberCount }),
            (0, i.jsx)("div", {
                className: k.b5,
                children: (0, i.jsx)(m.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: A.intl.format(A.t.zb2Q56, { createdAtDate: c }),
                }),
            }),
        ],
    });
}
