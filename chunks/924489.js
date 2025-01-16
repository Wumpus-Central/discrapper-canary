n.d(t, {
    Z: function () {
        return v;
    },
    x: function () {
        return i;
    }
}),
    n(653041);
var i,
    a,
    l = n(200651),
    r = n(192379),
    c = n(120356),
    o = n.n(c),
    s = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(686546),
    g = n(706454),
    f = n(768581),
    p = n(624138),
    h = n(388032),
    _ = n(484759);
((a = i || (i = {}))[(a.SMALL = (0, p.Mg)(d.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (a[(a.LARGE = (0, p.Mg)(d.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let x = {
        [i.SMALL]: _.moreGuildsSmall,
        [i.LARGE]: _.moreGuildsLarge
    },
    C = {
        [i.SMALL]: _.iconSmall,
        [i.LARGE]: _.iconLarge
    };
function v(e) {
    var t, n, a;
    let { application: c, mutualGuilds: d, mutualGuildShownMax: p = 4, className: v, textVariant: b = 'text-sm/normal', compact: j, guildIconSize: I = i.LARGE, guildsClassName: N } = e,
        S = (0, s.e7)([g.default], () => g.default.locale),
        y = new Intl.ListFormat(S),
        A = null !== (n = null === (t = c.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        T = null !== (a = null == d ? void 0 : d.length) && void 0 !== a ? a : 0,
        L = Math.max(0, A - T),
        { shownMutualGuilds: R, hiddenMutualGuilds: P } = r.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == d ||
                    d.forEach((n) => {
                        e.length < p && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === p && t.length > 0 && (t.push(e[p - 1]), (e = e.slice(0, p - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t
                }
            );
        }, [d, p]),
        E = P.length,
        Z = (function (e, t, n, i, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return h.intl.formatToPlainString(h.t.pnzE1t, { mutualGuildCount: t });
            let l = t > 0 ? h.t.YR8PSE : h.t.GQjq6e,
                r = new Intl.NumberFormat(i, {
                    notation: a ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return h.intl.formatToPlainString(l, {
                guildCount: r.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: r.format(n)
            });
        })(A, T, L, S, j);
    return 0 === R.length && null == Z
        ? null
        : (0, l.jsxs)('div', {
              className: o()(v, _.wrapper),
              children: [
                  (0, l.jsx)('div', {
                      className: o()(_.icons, N),
                      children:
                          R.length > 0
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        R.map((e, t) => {
                                            let n = t === R.length - 1 && 0 === E,
                                                i = f.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: I,
                                                    canAnimate: !1
                                                }),
                                                a = (0, l.jsx)(u.Tooltip, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, l.jsx)('img', {
                                                            ...e,
                                                            className: o()(_.icon, C[I]),
                                                            src: i,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, l.jsx)(r.Fragment, { children: a }, e.id)
                                                : (0, l.jsx)(
                                                      m.ZP,
                                                      {
                                                          className: _.iconMask,
                                                          height: I,
                                                          width: I,
                                                          mask: m.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: a
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        E > 0
                                            ? (0, l.jsx)(u.Tooltip, {
                                                  text: h.intl.formatToPlainString(h.t.m6oRrK, { appNames: y.format(P.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, l.jsxs)('div', {
                                                          ...e,
                                                          className: o()(_.moreGuilds, x[I]),
                                                          children: ['+', E]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, l.jsx)(u.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: I,
                                    height: I,
                                    className: _.defaultIcon
                                })
                  }),
                  null != Z
                      ? (0, l.jsx)(u.Text, {
                            variant: b,
                            color: 'header-secondary',
                            children: Z
                        })
                      : null
              ]
          });
}
