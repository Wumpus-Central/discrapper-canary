l.d(t, { X: () => C, A: () => _ });
var i = l(477900),
    s = l(582128),
    a = l(503698),
    n = l.n(a),
    r = l(17928),
    d = l(866665),
    o = l(297264),
    c = l(939249),
    m = l(834730),
    u = l(986268),
    x = l(534400),
    h = l(345942),
    v = l(773669),
    g = l(280450),
    j = l(696451),
    f = l(149790),
    N = l(935208),
    p = l(107123);
let b = (0, l(945810).mj)({
    name: "2026-06-guild-profile-server-tag",
    kind: "user",
    defaultConfig: { showServerTag: !1 },
    variations: { 1: { showServerTag: !0 } },
});
var A = l(375708),
    G = l(604280);
function y(e) {
    let { profile: t, disableGuildNameClick: l, guildNameId: a } = e,
        n = t.id,
        m = (0, r.bG)([j.Ay, g.default], () => j.Ay.getMember(n, g.default.getId())?.joinedAt != null, [n]),
        u = s.useCallback(
            (e) => {
                m && (e.stopPropagation(), (0, h.u)(t.id));
            },
            [m, t.id],
        );
    return !m || l
        ? (0, i.jsx)(d.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, i.jsx)(o.D, {
                  id: a,
                  className: G.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, i.jsx)(c.D, {
              className: G.YS,
              onClick: u,
              children: (0, i.jsx)(d.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(o.D, {
                      id: a,
                      className: G.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function I(e) {
    let { profile: t } = e,
        { showServerTag: l } = b.useConfig({ location: "GuildProfileHeader" });
    return l
        ? (0, i.jsx)(x.o9, {
              className: G.WD,
              guildId: t.id,
              guildTag: t.tag ?? void 0,
              guildBadge: t.badgeHash ?? void 0,
          })
        : null;
}
function C(e) {
    let { onlineCount: t, memberCount: l, className: s, highContrast: a = !1 } = e;
    return (0, i.jsxs)("div", {
        className: n()(G.ol, s),
        children: [
            (0, i.jsxs)("div", {
                className: G.Kl,
                children: [
                    (0, i.jsx)("div", { className: G.JX }),
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: a ? "text-default" : "text-subtle",
                        children: A.intl.format(A.t["LC+S+m"], { membersOnline: t }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: G.Kl,
                children: [
                    (0, i.jsx)("div", { className: n()(G.Om, a && G.i7) }),
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: a ? "text-default" : "text-subtle",
                        children: A.intl.format(A.t.zRl6XR, { count: l }),
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { profile: t, disableGuildNameClick: l, guildNameId: a } = e,
        n = (0, r.bG)([v.default], () => v.default.locale),
        d = (0, p.P)(N.default.extractTimestamp(t.id), n),
        o = s.useMemo(() => {
            let e = (0, f.b9)(t);
            return (0, i.jsx)(u.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: G.wx,
        children: [
            (0, i.jsxs)("div", {
                className: G.VW,
                children: [
                    (0, i.jsx)(y, { profile: t, disableGuildNameClick: l, guildNameId: a }),
                    o,
                    null != t.tag && "" !== t.tag && (0, i.jsx)(I, { profile: t }),
                ],
            }),
            (0, i.jsx)(C, { onlineCount: t.onlineCount, memberCount: t.memberCount }),
            (0, i.jsx)("div", {
                className: G.b5,
                children: (0, i.jsx)(m.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: A.intl.format(A.t.zb2Q56, { createdAtDate: d }),
                }),
            }),
        ],
    });
}
