n.d(t, { m: () => x });
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    c = n(239091),
    u = n(266454),
    d = n(45966),
    f = n(31445),
    h = n(22082),
    p = n(703656),
    g = n(306680),
    b = n(709054),
    m = n(540126),
    y = n(434479),
    O = n(981631),
    v = n(176505),
    j = n(490897),
    C = n(388032);
function x(e) {
    let { guild: t, selected: x } = e,
        E = (0, f.Z)(t),
        S = (0, u.Nj)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        I = (0, l.Wu)([h.Z], () =>
            Array.from(h.Z.getNewChannelIds(t.id)).filter((e) => h.Z.shouldIndicateNewChannel(t.id, e)),
        ),
        _ = (0, l.e7)([g.ZP], () => g.ZP.hasUnread(t.id, j.W.GUILD_ONBOARDING_QUESTION)),
        P = I.length > m.Cb,
        N = (0, l.e7)([d.Z, g.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = g.ZP.lastMessageId(t.id, j.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let r = b.default.extractTimestamp(n);
            return null != e && e > r;
        }),
        Z = i.useCallback(() => {
            (0, p.uL)(O.Z5c.CHANNEL(t.id, E ? v.oC.CUSTOMIZE_COMMUNITY : v.oC.CHANNEL_BROWSER));
        }, [t.id, E]),
        w = i.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e("8926").then(n.bind(n, 156673));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
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
                            i),
                        );
                    };
                });
            },
            [t],
        ),
        T = null;
    return (
        (S && !_ && !P) ||
            x ||
            N ||
            (T = (0, r.jsx)(s.IGR, {
                color: o.Z.colors.BADGE_BACKGROUND_DEFAULT.css,
                text: C.intl.string(C.t.y2b7CA),
            })),
        (0, r.jsx)(y.m, {
            id: "channels-".concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(s.H$4, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            text: E ? C.intl.string(C.t.h9mGOP) : C.intl.string(C.t.et6wav),
            selected: x,
            onClick: Z,
            onContextMenu: w,
            trailing: T,
        })
    );
}
