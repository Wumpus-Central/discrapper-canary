var i = t(477900),
    n = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(855986),
    o = t(866665),
    c = t(534514),
    d = t(939249),
    u = t(834730),
    m = t(877126),
    x = t(534400),
    I = t(345942),
    h = t(773669),
    v = t(46653),
    j = t(696451),
    g = t(537975),
    A = t(811091),
    N = t(107123),
    f = t(792996),
    b = t(604280);
function y(e) {
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
        ? (0, i.jsx)(o.m, {
              text: l.name,
              overflowOnly: !0,
              children: (0, i.jsx)(c.D, {
                  id: s,
                  className: b.J5,
                  variant: "heading-sm/semibold",
                  color: "text-strong",
                  children: l.name,
              }),
          })
        : (0, i.jsx)(d.D, {
              className: b.YS,
              onClick: m,
              children: (0, i.jsx)(o.m, {
                  text: l.name,
                  overflowOnly: !0,
                  children: (0, i.jsx)(c.D, {
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
    return (0, i.jsx)(x.o9, {
        className: b.WD,
        guildId: l.id,
        guildTag: l.tag ?? void 0,
        guildBadge: l.badgeHash ?? void 0,
    });
}
function p(e) {
    let { onlineCount: l, memberCount: t, className: n, highContrast: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: a()(b.ol, n),
        children: [
            (0, i.jsxs)("div", {
                className: b.Kl,
                children: [
                    (0, i.jsx)("div", { className: b.JX }),
                    (0, i.jsx)(u.E, {
                        variant: "body-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: f.intl.format(f.t["LC+S+m"], { membersOnline: l }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: b.Kl,
                children: [
                    (0, i.jsx)("div", { className: a()(b.Om, s && b.i7) }),
                    (0, i.jsx)(u.E, {
                        variant: "body-sm/normal",
                        color: s ? "text-default" : "text-subtle",
                        children: f.intl.format(f.t.zRl6XR, { count: t }),
                    }),
                ],
            }),
        ],
    });
}
t.d(
    l,
    {},
    {
        A: function (e) {
            let { profile: l, disableGuildNameClick: t, guildNameId: s } = e,
                a = (0, r.bG)([h.default], () => h.default.locale),
                o = (0, N.P)(A.default.extractTimestamp(l.id), a),
                c = n.useMemo(() => {
                    let e = (0, g.b9)(l);
                    return (0, i.jsx)(m.A, { guild: e, isBannerVisible: !1 });
                }, [l]);
            return (0, i.jsxs)("div", {
                className: b.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: b.VW,
                        children: [
                            (0, i.jsx)(y, { profile: l, disableGuildNameClick: t, guildNameId: s }),
                            c,
                            null != l.tag && "" !== l.tag && (0, i.jsx)(C, { profile: l }),
                        ],
                    }),
                    (0, i.jsx)(p, { onlineCount: l.onlineCount, memberCount: l.memberCount }),
                    (0, i.jsx)("div", {
                        className: b.b5,
                        children: (0, i.jsx)(u.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: f.intl.format(f.t.zb2Q56, { createdAtDate: o }),
                        }),
                    }),
                ],
            });
        },
    },
);
