n.d(t, {
    Z: function () {
        return f;
    },
    x: function () {
        return i;
    }
}),
    n(653041);
var i,
    a,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(686546),
    p = n(706454),
    h = n(768581),
    g = n(624138),
    C = n(388032),
    x = n(484759);
((a = i || (i = {}))[(a.SMALL = (0, g.Mg)(d.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (a[(a.LARGE = (0, g.Mg)(d.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let v = {
        [i.SMALL]: x.moreGuildsSmall,
        [i.LARGE]: x.moreGuildsLarge
    },
    _ = {
        [i.SMALL]: x.iconSmall,
        [i.LARGE]: x.iconLarge
    };
function f(e) {
    var t, n, a;
    let { application: o, mutualGuilds: d, mutualGuildShownMax: g = 4, className: f, textVariant: b = 'text-sm/normal', compact: I, guildIconSize: S = i.LARGE, guildsClassName: j } = e,
        N = (0, c.e7)([p.default], () => p.default.locale),
        E = new Intl.ListFormat(N),
        y = null !== (n = null === (t = o.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        P = null !== (a = null == d ? void 0 : d.length) && void 0 !== a ? a : 0,
        A = Math.max(0, y - P),
        { shownMutualGuilds: T, hiddenMutualGuilds: L } = l.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == d ||
                    d.forEach((n) => {
                        e.length < g && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === g && t.length > 0 && (t.push(e[g - 1]), (e = e.slice(0, g - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t
                }
            );
        }, [d, g]),
        R = L.length,
        Z = (function (e, t, n, i, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return C.intl.formatToPlainString(C.t.pnzE1t, { mutualGuildCount: t });
            let r = t > 0 ? C.t.YR8PSE : C.t.GQjq6e,
                l = new Intl.NumberFormat(i, {
                    notation: a ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return C.intl.formatToPlainString(r, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n)
            });
        })(y, P, A, N, I);
    return 0 === T.length && null == Z
        ? null
        : (0, r.jsxs)('div', {
              className: s()(f, x.wrapper),
              children: [
                  (0, r.jsx)('div', {
                      className: s()(x.icons, j),
                      children:
                          T.length > 0
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        T.map((e, t) => {
                                            let n = t === T.length - 1 && 0 === R,
                                                i = h.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: S,
                                                    canAnimate: !1
                                                }),
                                                a = (0, r.jsx)(u.Tooltip, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, r.jsx)('img', {
                                                            ...e,
                                                            className: s()(x.icon, _[S]),
                                                            src: i,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, r.jsx)(l.Fragment, { children: a }, e.id)
                                                : (0, r.jsx)(
                                                      m.ZP,
                                                      {
                                                          className: x.iconMask,
                                                          height: S,
                                                          width: S,
                                                          mask: m.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: a
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        R > 0
                                            ? (0, r.jsx)(u.Tooltip, {
                                                  text: C.intl.formatToPlainString(C.t.m6oRrK, { appNames: E.format(L.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, r.jsxs)('div', {
                                                          ...e,
                                                          className: s()(x.moreGuilds, v[S]),
                                                          children: ['+', R]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, r.jsx)(u.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: S,
                                    height: S,
                                    className: x.defaultIcon
                                })
                  }),
                  null != Z
                      ? (0, r.jsx)(u.Text, {
                            variant: b,
                            color: 'header-secondary',
                            children: Z
                        })
                      : null
              ]
          });
}
