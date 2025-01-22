r.d(n, {
    KQ: function () {
        return v;
    },
    aG: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(210887),
    f = r(594174),
    p = r(645896),
    h = r(353093),
    _ = r(426964),
    m = r(308083),
    g = r(388032),
    E = r(856601);
let v = o.memo(function (e) {
        let { src: n, tag: r, className: i, size: o = m.NC.SIZE_16 } = e;
        return null == n
            ? null
            : (0, a.jsx)('img', {
                  src: n,
                  alt: g.intl.formatToPlainString(g.t.PShNVV, { tag: r }),
                  className: l()(E.badge, i),
                  width: o,
                  height: o
              });
    }),
    y = o.memo(function (e) {
        let { guildId: n, clanTag: r, clanBadge: i, className: o, textClassName: s, badgeClassName: u, onClick: d, onMouseEnter: f, textVariant: p = 'text-xs/semibold', textColor: _ = 'text-normal', badgeSize: g = m.NC.SIZE_12, inline: y = !0 } = e;
        return (0, a.jsx)(c.Clickable, {
            tag: 'span',
            tabIndex: null == d ? -1 : void 0,
            onClick: d,
            onMouseEnter: f,
            className: l()(E.chipletContainerInner, y && E.chipletContainerInline, null != d && E.clickable, o),
            children: (0, a.jsxs)(c.Text, {
                variant: p,
                color: _,
                tag: 'span',
                className: l()(E.text, s),
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
    b = o.memo(function (e) {
        var n, r;
        let { primaryGuild: i, userId: s, className: h, children: m, profileViewedAnalytics: g } = e,
            v = (0, u.e7)([f.default], () => f.default.getUser(s), [s]),
            y = null !== (n = null == v ? void 0 : v.primaryGuild) && void 0 !== n ? n : i,
            [b, I] = (0, p.L_)(null !== (r = null == y ? void 0 : y.identityGuildId) && void 0 !== r ? r : null),
            T = o.useCallback(() => {
                I();
            }, [I]),
            S = (0, u.e7)([d.Z], () => d.Z.theme);
        return (0, a.jsx)(c.ThemeContextProvider, {
            theme: S,
            children: (0, a.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(_.Z, {
                        isLoading: b,
                        clan: y,
                        onClose: n,
                        profileViewedAnalytics: g,
                        userId: s
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
                            T(), null === (n = e.onMouseEnter) || void 0 === n || n.call(e);
                        },
                        children: m
                    })
            })
        });
    });
n.ZP = o.memo(function (e) {
    var n;
    let { primaryGuild: r, userId: i, contextGuildId: o, className: s, containerClassName: c, textVariant: d, textColor: p, badgeSize: _, disableGuildProfile: m = !1, inline: g = !0, profileViewedAnalytics: v } = e,
        I = (0, u.e7)([f.default], () => f.default.getUser(i), [i]),
        T = null !== (n = null == I ? void 0 : I.primaryGuild) && void 0 !== n ? n : r,
        { tag: S, badge: A, guildId: C } = (0, h.Pb)(T);
    return (0, h.p0)(i, o) && null != C
        ? m
            ? (0, a.jsx)(y, {
                  guildId: C,
                  clanTag: S,
                  clanBadge: A,
                  className: l()(E.noTooltip, s),
                  textVariant: d,
                  textColor: p,
                  badgeSize: _,
                  inline: g
              })
            : (0, a.jsx)(b, {
                  primaryGuild: T,
                  userId: i,
                  profileViewedAnalytics: v,
                  className: c,
                  children: (0, a.jsx)(y, {
                      guildId: C,
                      clanTag: S,
                      clanBadge: A,
                      className: s,
                      textVariant: d,
                      textColor: p,
                      badgeSize: _,
                      inline: g
                  })
              })
        : null;
});
