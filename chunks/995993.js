n.d(t, { m: () => C });
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    a = n(692547),
    s = n(481060),
    c = n(239091),
    u = n(605236),
    d = n(45966),
    p = n(31445),
    h = n(22082),
    f = n(703656),
    g = n(306680),
    m = n(709054),
    b = n(540126),
    y = n(434479),
    _ = n(981631),
    v = n(176505),
    O = n(490897),
    j = n(388032),
    x = n(990252);
function C(e) {
    let { guild: t, selected: C } = e,
        S = (0, p.Z)(t),
        P = (0, u.wE)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        I = (0, l.Wu)([h.Z], () => Array.from(h.Z.getNewChannelIds(t.id)).filter((e) => h.Z.shouldIndicateNewChannel(t.id, e))),
        N = (0, l.e7)([g.ZP], () => g.ZP.hasUnread(t.id, O.W.GUILD_ONBOARDING_QUESTION)),
        Z = I.length > b.Cb,
        w = (0, l.e7)([d.Z, g.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = g.ZP.lastMessageId(t.id, O.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let r = m.default.extractTimestamp(n);
            return null != e && e > r;
        }),
        E = i.useCallback(() => {
            (0, f.uL)(_.Z5c.CHANNEL(t.id, S ? v.oC.CUSTOMIZE_COMMUNITY : v.oC.CHANNEL_BROWSER));
        }, [t.id, S]),
        T = i.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('8926').then(n.bind(n, 156673));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l = { guild: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        );
                    };
                });
            },
            [t]
        ),
        A = null;
    return (
        (P && !N && !Z) ||
            C ||
            w ||
            (A = (0, r.jsx)(s.IGR, {
                color: a.Z.colors.BADGE_BRAND_BG.css,
                text: j.NW.string(j.t.y2b7CA),
                className: x.newChannel
            })),
        (0, r.jsx)(y.m, {
            id: 'channels-'.concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(s.H$4, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: S ? j.NW.string(j.t.h9mGOD) : j.NW.string(j.t.et6wam),
            selected: C,
            onClick: E,
            onContextMenu: T,
            trailing: A
        })
    );
}
