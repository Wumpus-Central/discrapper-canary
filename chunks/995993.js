n.d(t, { m: () => x });
var r = n(54381),
    i = n(473749),
    l = n(399606),
    o = n(704215),
    a = n(692547),
    s = n(481060),
    c = n(239091),
    u = n(266454),
    d = n(45966),
    p = n(31445),
    h = n(22082),
    f = n(703656),
    g = n(306680),
    m = n(709054),
    b = n(540126),
    _ = n(434479),
    y = n(981631),
    O = n(176505),
    v = n(490897),
    j = n(388032),
    C = n(885525);
function x(e) {
    let { guild: t, selected: x } = e,
        E = (0, p.Z)(t),
        S = (0, u.Nj)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        I = (0, l.Wu)([h.Z], () =>
            Array.from(h.Z.getNewChannelIds(t.id)).filter((e) => h.Z.shouldIndicateNewChannel(t.id, e)),
        ),
        P = (0, l.e7)([g.ZP], () => g.ZP.hasUnread(t.id, v.W.GUILD_ONBOARDING_QUESTION)),
        N = I.length > b.Cb,
        Z = (0, l.e7)([d.Z, g.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = g.ZP.lastMessageId(t.id, v.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let r = m.default.extractTimestamp(n);
            return null != e && e > r;
        }),
        w = i.useCallback(() => {
            (0, f.uL)(y.Z5c.CHANNEL(t.id, E ? O.oC.CUSTOMIZE_COMMUNITY : O.oC.CHANNEL_BROWSER));
        }, [t.id, E]),
        T = i.useCallback(
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
        A = null;
    return (
        (S && !P && !N) ||
            x ||
            Z ||
            (A = (0, r.jsx)(s.IGR, {
                color: a.Z.colors.BADGE_BRAND_BG.css,
                text: j.intl.string(j.t.y2b7CA),
                className: C.newChannel,
            })),
        (0, r.jsx)(_.m, {
            id: "channels-".concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(s.H$4, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            text: E ? j.intl.string(j.t.h9mGOP) : j.intl.string(j.t.et6wav),
            selected: x,
            onClick: w,
            onContextMenu: T,
            trailing: A,
        })
    );
}
