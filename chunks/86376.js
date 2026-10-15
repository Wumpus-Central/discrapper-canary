t.d(l, { A: () => y });
var i = t(477900),
    n = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    c = t(866665),
    o = t(297264),
    d = t(939249),
    u = t(834730),
    m = t(537547),
    x = t(534400),
    I = t(345942),
    h = t(773669),
    v = t(280450),
    j = t(696451),
    g = t(149790),
    A = t(935208),
    N = t(107123),
    f = t(105292),
    C = t(604280);
function p(e) {
    let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
        a = l.id,
        u = (0, r.bG)([j.Ay, v.default], () => j.Ay.getMember(a, v.default.getId())?.joinedAt != null, [a]),
        m = n.useCallback(
            (e) => {
                u && (e.stopPropagation(), (0, I.u)(l.id));
            },
            [u, l.id],
        );
    return !u || t
        ? (0, i.jsx)(c.m, {
              text: l.name,
              overflowOnly: !0,
              children: (0, i.jsx)(o.D, {
                  id: s,
                  className: C.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: l.name,
              }),
          })
        : (0, i.jsx)(d.D, {
              className: C.YS,
              onClick: m,
              children: (0, i.jsx)(c.m, {
                  text: l.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(o.D, {
                      id: s,
                      className: C.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: l.name,
                  }),
              }),
          });
}
function b(e) {
    let { profile: l } = e;
    return (0, i.jsx)(x.o9, {
        className: C.WD,
        guildId: l.id,
        guildTag: l.tag ?? void 0,
        guildBadge: l.badgeHash ?? void 0,
    });
}
function E(e) {
    let { onlineCount: l, memberCount: t, className: n, highContrast: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: a()(C.ol, n),
        children: [
            (0, i.jsxs)("div", {
                className: C.Kl,
                children: [
                    (0, i.jsx)("div", { className: C.JX }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: f.intl.format(f.t["LC+S+m"], { membersOnline: l }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: C.Kl,
                children: [
                    (0, i.jsx)("div", { className: a()(C.Om, s && C.i7) }),
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: f.intl.format(f.t.zRl6XR, { count: t }),
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
        a = (0, r.bG)([h.default], () => h.default.locale),
        c = (0, N.P)(A.default.extractTimestamp(l.id), a),
        o = n.useMemo(() => {
            let e = (0, g.b9)(l);
            return (0, i.jsx)(m.A, { guild: e, isBannerVisible: !1 });
        }, [l]);
    return (0, i.jsxs)("div", {
        className: C.wx,
        children: [
            (0, i.jsxs)("div", {
                className: C.VW,
                children: [
                    (0, i.jsx)(p, { profile: l, disableGuildNameClick: t, guildNameId: s }),
                    o,
                    null != l.tag && "" !== l.tag && (0, i.jsx)(b, { profile: l }),
                ],
            }),
            (0, i.jsx)(E, { onlineCount: l.onlineCount, memberCount: l.memberCount }),
            (0, i.jsx)("div", {
                className: C.b5,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: f.intl.format(f.t.zb2Q56, { createdAtDate: c }),
                }),
            }),
        ],
    });
}
