n.d(t, {
    KQ: () => g,
    ZP: () => b,
    aG: () => E
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(857395),
    u = n(594174),
    d = n(353093),
    f = n(308083),
    _ = n(388032),
    p = n(194776);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: o = f.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: _.NW.formatToPlainString(_.t.PShNVV, { tag: n }),
                  className: a()(p.badge, i),
                  width: o,
                  height: o
              });
    }),
    E = i.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: i, className: o, textClassName: s, badgeClassName: c, onClick: u, onMouseEnter: _, textVariant: h = 'text-xs/semibold', textColor: m = 'text-normal', badgeSize: E = f.NC.SIZE_12, inline: b = !0 } = e;
        return (0, r.jsx)(l.P3F, {
            tag: 'span',
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: _,
            className: a()(p.chipletContainerInner, b && p.chipletContainerInline, null != u && p.clickable, o),
            children: (0, r.jsxs)(l.Text, {
                variant: h,
                color: m,
                tag: 'span',
                className: a()(p.text, s),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, r.jsx)(g, {
                              src: (0, d.ky)(t, i, E),
                              tag: null == n ? void 0 : n.toString(),
                              size: E,
                              className: c
                          })
                        : i,
                    (0, r.jsx)('span', {
                        className: p.unselectable,
                        children: n
                    })
                ]
            })
        });
    }),
    b = i.memo(function (e) {
        var t;
        let { primaryGuild: n, userId: i, contextGuildId: o, className: l, containerClassName: f, textVariant: _, textColor: h, badgeSize: g, disableGuildProfile: b = !1, inline: y = !0, onShowProfile: v } = e,
            O = (0, s.e7)([u.default], () => u.default.getUser(i), [i]),
            I = null != (t = null == O ? void 0 : O.primaryGuild) ? t : n,
            { tag: S, badge: T, guildId: N } = (0, d.Pb)(I);
        return (0, d.p0)(i, o) && null != N
            ? b
                ? (0, r.jsx)(E, {
                      guildId: N,
                      clanTag: S,
                      clanBadge: T,
                      className: a()(p.noTooltip, l),
                      textVariant: _,
                      textColor: h,
                      badgeSize: g,
                      inline: y
                  })
                : (0, r.jsx)(c.Z, {
                      guildId: N,
                      onRequestOpen: v,
                      children: (e) =>
                          (0, r.jsx)('span', {
                              className: f,
                              children: (0, r.jsx)(
                                  E,
                                  m(
                                      {
                                          guildId: N,
                                          clanTag: S,
                                          clanBadge: T,
                                          className: l,
                                          textVariant: _,
                                          textColor: h,
                                          badgeSize: g,
                                          inline: y
                                      },
                                      e
                                  )
                              )
                          })
                  })
            : null;
    });
