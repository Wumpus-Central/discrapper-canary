n.d(t, {
    KQ: () => g,
    ZP: () => y,
    aG: () => E
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(210887),
    c = n(594174),
    d = n(645896),
    f = n(353093),
    _ = n(426964),
    p = n(308083),
    h = n(388032),
    m = n(794322);
let g = r.memo(function (e) {
        let { src: t, tag: n, className: r, size: a = p.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, i.jsx)('img', {
                  src: t,
                  alt: h.intl.formatToPlainString(h.t.PShNVV, { tag: n }),
                  className: s()(m.badge, r),
                  width: a,
                  height: a
              });
    }),
    E = r.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: r, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: d, textVariant: _ = 'text-xs/semibold', textColor: h = 'text-normal', badgeSize: E = p.NC.SIZE_12, inline: v = !0 } = e;
        return (0, i.jsx)(l.P3F, {
            tag: 'span',
            tabIndex: null == c ? -1 : void 0,
            onClick: c,
            onMouseEnter: d,
            className: s()(m.chipletContainerInner, v && m.chipletContainerInline, null != c && m.clickable, a),
            children: (0, i.jsxs)(l.Text, {
                variant: _,
                color: h,
                tag: 'span',
                className: s()(m.text, o),
                children: [
                    null != r && 'string' == typeof r
                        ? (0, i.jsx)(g, {
                              src: (0, f.ky)(t, r, E),
                              tag: null == n ? void 0 : n.toString(),
                              size: E,
                              className: u
                          })
                        : r,
                    (0, i.jsx)('span', {
                        className: m.unselectable,
                        children: n
                    })
                ]
            })
        });
    }),
    v = r.memo(function (e) {
        var t, n;
        let { primaryGuild: a, userId: f, className: p, children: h, profileViewedAnalytics: g, onShowProfile: E } = e,
            v = (0, o.e7)([c.default], () => c.default.getUser(f), [f]),
            y = null !== (t = null == v ? void 0 : v.primaryGuild) && void 0 !== t ? t : a,
            [I, T] = (0, d.L_)(null !== (n = null == y ? void 0 : y.identityGuildId) && void 0 !== n ? n : null),
            b = r.useCallback(() => {
                T();
            }, [T]),
            S = (0, o.e7)([u.Z], () => u.Z.theme);
        return (0, i.jsx)(l.ze6, {
            theme: S,
            children: (0, i.jsx)(l.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(_.Z, {
                        isLoading: I,
                        clan: y,
                        onClose: t,
                        profileViewedAnalytics: g,
                        userId: f
                    });
                },
                position: 'top',
                animationPosition: 'top',
                spacing: 16,
                children: (e) =>
                    (0, i.jsx)(l.P3F, {
                        className: s()(m.clickable, p),
                        tag: 'span',
                        ...e,
                        onClick: (t) => {
                            var n;
                            null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation(), null == E || E();
                        },
                        onMouseEnter: () => {
                            var t;
                            b(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                        },
                        children: h
                    })
            })
        });
    }),
    y = r.memo(function (e) {
        var t;
        let { primaryGuild: n, userId: r, contextGuildId: a, className: l, containerClassName: u, textVariant: d, textColor: _, badgeSize: p, disableGuildProfile: h = !1, inline: g = !0, profileViewedAnalytics: y, onShowProfile: I } = e,
            T = (0, o.e7)([c.default], () => c.default.getUser(r), [r]),
            b = null !== (t = null == T ? void 0 : T.primaryGuild) && void 0 !== t ? t : n,
            { tag: S, badge: A, guildId: N } = (0, f.Pb)(b);
        return (0, f.p0)(r, a) && null != N
            ? h
                ? (0, i.jsx)(E, {
                      guildId: N,
                      clanTag: S,
                      clanBadge: A,
                      className: s()(m.noTooltip, l),
                      textVariant: d,
                      textColor: _,
                      badgeSize: p,
                      inline: g
                  })
                : (0, i.jsx)(v, {
                      primaryGuild: b,
                      userId: r,
                      profileViewedAnalytics: y,
                      className: u,
                      onShowProfile: I,
                      children: (0, i.jsx)(E, {
                          guildId: N,
                          clanTag: S,
                          clanBadge: A,
                          className: l,
                          textVariant: d,
                          textColor: _,
                          badgeSize: p,
                          inline: g
                      })
                  })
            : null;
    });
