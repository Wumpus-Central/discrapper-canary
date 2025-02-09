n.d(t, {
    Z: () => f,
    x: () => x
}),
    n(653041);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(686546),
    m = n(706454),
    h = n(768581),
    p = n(624138),
    g = n(388032),
    _ = n(380632),
    x = (((i = {})[(i.SMALL = (0, p.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, p.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE'), i);
let C = {
        [x.SMALL]: _.moreGuildsSmall,
        [x.LARGE]: _.moreGuildsLarge
    },
    v = {
        [x.SMALL]: _.iconSmall,
        [x.LARGE]: _.iconLarge
    };
function f(e) {
    var t, n, i;
    let { application: l, mutualGuilds: c, mutualGuildShownMax: p = 4, className: f, textVariant: I = 'text-sm/normal', compact: b, guildIconSize: j = x.LARGE, guildsClassName: S } = e,
        N = (0, o.e7)([m.default], () => m.default.locale),
        E = new Intl.ListFormat(N),
        y = null !== (n = null === (t = l.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        P = null !== (i = null == c ? void 0 : c.length) && void 0 !== i ? i : 0,
        A = Math.max(0, y - P),
        { shownMutualGuilds: T, hiddenMutualGuilds: L } = r.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == c ||
                    c.forEach((n) => {
                        e.length < p && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === p && t.length > 0 && (t.push(e[p - 1]), (e = e.slice(0, p - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t
                }
            );
        }, [c, p]),
        R = L.length,
        Z = (function (e, t, n, i, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return g.intl.formatToPlainString(g.t.pnzE1t, { mutualGuildCount: t });
            let r = t > 0 ? g.t.YR8PSE : g.t.GQjq6e,
                l = new Intl.NumberFormat(i, {
                    notation: a ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return g.intl.formatToPlainString(r, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n)
            });
        })(y, P, A, N, b);
    return 0 === T.length && null == Z
        ? null
        : (0, a.jsxs)('div', {
              className: s()(f, _.wrapper),
              children: [
                  (0, a.jsx)('div', {
                      className: s()(_.icons, S),
                      children:
                          T.length > 0
                              ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        T.map((e, t) => {
                                            let n = t === T.length - 1 && 0 === R,
                                                i = h.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: j,
                                                    canAnimate: !1
                                                }),
                                                l = (0, a.jsx)(d.ua7, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, a.jsx)('img', {
                                                            ...e,
                                                            className: s()(_.icon, v[j]),
                                                            src: i,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, a.jsx)(r.Fragment, { children: l }, e.id)
                                                : (0, a.jsx)(
                                                      u.ZP,
                                                      {
                                                          className: _.iconMask,
                                                          height: j,
                                                          width: j,
                                                          mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: l
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        R > 0
                                            ? (0, a.jsx)(d.ua7, {
                                                  text: g.intl.formatToPlainString(g.t.m6oRrK, { appNames: E.format(L.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, a.jsxs)('div', {
                                                          ...e,
                                                          className: s()(_.moreGuilds, C[j]),
                                                          children: ['+', R]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, a.jsx)(d.QTo, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: j,
                                    height: j,
                                    className: _.defaultIcon
                                })
                  }),
                  null != Z
                      ? (0, a.jsx)(d.Text, {
                            variant: I,
                            color: 'header-secondary',
                            children: Z
                        })
                      : null
              ]
          });
}
