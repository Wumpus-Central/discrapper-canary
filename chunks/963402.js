t.d(l, { A: () => _ });
var i = t(477900),
    n = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    o = t(866665),
    c = t(297264),
    d = t(939249),
    u = t(834730),
    m = t(537547),
    x = t(534400),
    v = t(345942),
    g = t(773669),
    h = t(280450),
    I = t(696451),
    j = t(149790),
    A = t(935208),
    N = t(107123);
let f = (0, t(945810).mj)({
    name: "2026-06-guild-profile-server-tag",
    kind: "user",
    defaultConfig: { showServerTag: !1 },
    variations: { 1: { showServerTag: !0 } },
});
var C = t(375708),
    p = t(604280);
function b(e) {
    let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
        a = l.id,
        u = (0, r.bG)([I.Ay, h.default], () => I.Ay.getMember(a, h.default.getId())?.joinedAt != null, [a]),
        m = n.useCallback(
            (e) => {
                u && (e.stopPropagation(), (0, v.u)(l.id));
            },
            [u, l.id],
        );
    return !u || t
        ? (0, i.jsx)(o.m, {
              text: l.name,
              overflowOnly: !0,
              children: (0, i.jsx)(c.D, {
                  id: s,
                  className: p.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: l.name,
              }),
          })
        : (0, i.jsx)(d.D, {
              className: p.YS,
              onClick: m,
              children: (0, i.jsx)(o.m, {
                  text: l.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(c.D, {
                      id: s,
                      className: p.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: l.name,
                  }),
              }),
          });
}
function E(e) {
    let { profile: l } = e,
        { showServerTag: t } = f.useConfig({ location: "GuildProfileHeader" });
    return t
        ? (0, i.jsx)(x.o9, {
              className: p.WD,
              guildId: l.id,
              guildTag: l.tag ?? void 0,
              guildBadge: l.badgeHash ?? void 0,
          })
        : null;
}
function y(e) {
    let { onlineCount: l, memberCount: t, className: n, highContrast: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: a()(p.ol, n),
        children: [
            (0, i.jsxs)("div", {
                className: p.Kl,
                children: [
                    (0, i.jsx)("div", { className: p.JX }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: C.intl.format(C.t["LC+S+m"], { membersOnline: l }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: p.Kl,
                children: [
                    (0, i.jsx)("div", { className: a()(p.Om, s && p.i7) }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: C.intl.format(C.t.zRl6XR, { count: t }),
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
        a = (0, r.bG)([g.default], () => g.default.locale),
        o = (0, N.P)(A.default.extractTimestamp(l.id), a),
        c = n.useMemo(() => {
            let e = (0, j.b9)(l);
            return (0, i.jsx)(m.A, { guild: e, isBannerVisible: !1 });
        }, [l]);
    return (0, i.jsxs)("div", {
        className: p.wx,
        children: [
            (0, i.jsxs)("div", {
                className: p.VW,
                children: [
                    (0, i.jsx)(b, { profile: l, disableGuildNameClick: t, guildNameId: s }),
                    c,
                    null != l.tag && "" !== l.tag && (0, i.jsx)(E, { profile: l }),
                ],
            }),
            (0, i.jsx)(y, { onlineCount: l.onlineCount, memberCount: l.memberCount }),
            (0, i.jsx)("div", {
                className: p.b5,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: C.intl.format(C.t.zb2Q56, { createdAtDate: o }),
                }),
            }),
        ],
    });
}
