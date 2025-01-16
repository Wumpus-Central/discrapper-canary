r.d(n, {
    KQ: function () {
        return v;
    },
    aG: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(210887),
    f = r(594174),
    _ = r(645896),
    h = r(353093),
    p = r(426964),
    m = r(308083),
    g = r(388032),
    E = r(856601);
let v = s.memo(function (e) {
        let { src: n, tag: r, className: i, size: s = m.NC.SIZE_16 } = e;
        return null == n
            ? null
            : (0, a.jsx)('img', {
                  src: n,
                  alt: g.intl.formatToPlainString(g.t.PShNVV, { tag: r }),
                  className: l()(E.badge, i),
                  width: s,
                  height: s
              });
    }),
    I = s.memo(function (e) {
        let { guildId: n, clanTag: r, clanBadge: i, className: s, textClassName: o, badgeClassName: u, onClick: d, onMouseEnter: f, textVariant: _ = 'text-xs/semibold', textColor: p = 'text-normal', badgeSize: g = m.NC.SIZE_12, inline: I = !0 } = e;
        return (0, a.jsx)(c.Clickable, {
            tag: 'span',
            tabIndex: null == d ? -1 : void 0,
            onClick: d,
            onMouseEnter: f,
            className: l()(E.chipletContainerInner, I && E.chipletContainerInline, null != d && E.clickable, s),
            children: (0, a.jsxs)(c.Text, {
                variant: _,
                color: p,
                tag: 'span',
                className: l()(E.text, o),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, a.jsx)(v, {
                              src: (0, h.ky)(n, i, g),
                              tag: null == r ? void 0 : r.toString(),
                              size: g,
                              className: u
                          })
                        : i,
                    (0, a.jsx)('span', {
                        className: E.unselectable,
                        children: r
                    })
                ]
            })
        });
    }),
    T = s.memo(function (e) {
        var n, r;
        let { primaryGuild: i, userId: o, className: h, children: m, profileViewedAnalytics: g } = e,
            v = (0, u.e7)([f.default], () => f.default.getUser(o), [o]),
            I = null !== (n = null == v ? void 0 : v.primaryGuild) && void 0 !== n ? n : i,
            [T, b] = (0, _.L_)(null !== (r = null == I ? void 0 : I.identityGuildId) && void 0 !== r ? r : null),
            y = s.useCallback(() => {
                b();
            }, [b]),
            S = (0, u.e7)([d.Z], () => d.Z.theme);
        return (0, a.jsx)(c.ThemeContextProvider, {
            theme: S,
            children: (0, a.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(p.Z, {
                        isLoading: T,
                        clan: I,
                        onClose: n,
                        profileViewedAnalytics: g,
                        userId: o
                    });
                },
                position: 'top',
                animationPosition: 'top',
                spacing: 16,
                children: (e) =>
                    (0, a.jsx)(c.Clickable, {
                        className: l()(E.clickable, h),
                        tag: 'span',
                        ...e,
                        onClick: (n) => {
                            var r;
                            null === (r = e.onClick) || void 0 === r || r.call(e, n), n.preventDefault(), n.stopPropagation();
                        },
                        onMouseEnter: () => {
                            var n;
                            y(), null === (n = e.onMouseEnter) || void 0 === n || n.call(e);
                        },
                        children: m
                    })
            })
        });
    });
n.ZP = s.memo(function (e) {
    var n;
    let { primaryGuild: r, userId: i, contextGuildId: s, className: o, containerClassName: c, textVariant: d, textColor: _, badgeSize: p, disableGuildProfile: m = !1, inline: g = !0, profileViewedAnalytics: v } = e,
        b = (0, u.e7)([f.default], () => f.default.getUser(i), [i]),
        y = null !== (n = null == b ? void 0 : b.primaryGuild) && void 0 !== n ? n : r,
        { tag: S, badge: A, guildId: N } = (0, h.Pb)(y);
    return (0, h.p0)(i, s) && null != N
        ? m
            ? (0, a.jsx)(I, {
                  guildId: N,
                  clanTag: S,
                  clanBadge: A,
                  className: l()(E.noTooltip, o),
                  textVariant: d,
                  textColor: _,
                  badgeSize: p,
                  inline: g
              })
            : (0, a.jsx)(T, {
                  primaryGuild: y,
                  userId: i,
                  profileViewedAnalytics: v,
                  className: c,
                  children: (0, a.jsx)(I, {
                      guildId: N,
                      clanTag: S,
                      clanBadge: A,
                      className: o,
                      textVariant: d,
                      textColor: _,
                      badgeSize: p,
                      inline: g
                  })
              })
        : null;
});
