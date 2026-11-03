i.d(l, { A: () => E });
var t = i(477900),
    n = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    o = i(866665),
    c = i(534514),
    d = i(939249),
    u = i(834730),
    m = i(537547),
    x = i(534400),
    I = i(345942),
    h = i(773669),
    v = i(280450),
    j = i(696451),
    g = i(149790),
    A = i(935208),
    N = i(107123),
    f = i(105292),
    b = i(604280);
function y(e) {
    let { profile: l, disableGuildNameClick: i, guildNameId: s } = e,
        a = l.id,
        u = (0, r.bG)([j.Ay, v.default], () => j.Ay.getMember(a, v.default.getId())?.joinedAt != null, [a]),
        m = n.useCallback(
            (e) => {
                u && (e.stopPropagation(), (0, I.u)(l.id));
            },
            [u, l.id],
        );
    return !u || i
        ? (0, t.jsx)(o.m, {
              text: l.name,
              overflowOnly: !0,
              children: (0, t.jsx)(c.D, {
                  id: s,
                  className: b.J5,
                  variant: "heading-sm/semibold",
                  color: "text-strong",
                  children: l.name,
              }),
          })
        : (0, t.jsx)(d.D, {
              className: b.YS,
              onClick: m,
              children: (0, t.jsx)(o.m, {
                  text: l.name,
                  overflowOnly: !0,
                  children: (0, t.jsx)(c.D, {
                      id: s,
                      className: b.J5,
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: l.name,
                  }),
              }),
          });
}
function C(e) {
    let { profile: l } = e;
    return (0, t.jsx)(x.o9, {
        className: b.WD,
        guildId: l.id,
        guildTag: l.tag ?? void 0,
        guildBadge: l.badgeHash ?? void 0,
    });
}
function p(e) {
    let { onlineCount: l, memberCount: i, className: n, highContrast: s = !1 } = e;
    return (0, t.jsxs)("div", {
        className: a()(b.ol, n),
        children: [
            (0, t.jsxs)("div", {
                className: b.Kl,
                children: [
                    (0, t.jsx)("div", { className: b.JX }),
                    (0, t.jsx)(u.E, {
                        variant: "body-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: f.intl.format(f.t["LC+S+m"], { membersOnline: l }),
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: b.Kl,
                children: [
                    (0, t.jsx)("div", { className: a()(b.Om, s && b.i7) }),
                    (0, t.jsx)(u.E, {
                        variant: "body-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: f.intl.format(f.t.zRl6XR, { count: i }),
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { profile: l, disableGuildNameClick: i, guildNameId: s } = e,
        a = (0, r.bG)([h.default], () => h.default.locale),
        o = (0, N.P)(A.default.extractTimestamp(l.id), a),
        c = n.useMemo(() => {
            let e = (0, g.b9)(l);
            return (0, t.jsx)(m.A, { guild: e, isBannerVisible: !1 });
        }, [l]);
    return (0, t.jsxs)("div", {
        className: b.wx,
        children: [
            (0, t.jsxs)("div", {
                className: b.VW,
                children: [
                    (0, t.jsx)(y, { profile: l, disableGuildNameClick: i, guildNameId: s }),
                    c,
                    null != l.tag && "" !== l.tag && (0, t.jsx)(C, { profile: l }),
                ],
            }),
            (0, t.jsx)(p, { onlineCount: l.onlineCount, memberCount: l.memberCount }),
            (0, t.jsx)("div", {
                className: b.b5,
                children: (0, t.jsx)(u.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: f.intl.format(f.t.zb2Q56, { createdAtDate: o }),
                }),
            }),
        ],
    });
}
