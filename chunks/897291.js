n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(996146),
    o = n(28664),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(963249),
    d = n(109213),
    f = n(909917),
    p = n(602733),
    _ = n(51144),
    m = n(443603),
    h = n(981631),
    g = n(388032),
    E = n(564355);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { disabled: t, channel: i } = e,
        { analyticsLocations: b } = (0, c.ZP)(l.Z.GIFT_BUTTON),
        O = (0, _.Ft)(i),
        { Component: S, events: I, play: T } = (0, a.$)(),
        { enabled: A } = d.G.useExperiment({ location: "gift-button" }, { autoTrackExposure: !1 }),
        C = i.type === h.d4z.DM,
        N = (0, p.ao)({
            location: "gift-button",
            isGift: !0,
            giftRecipient: O,
        });
    if (t) return null;
    let P = () => {
        N && C && null != O
            ? (0, f.Z)({
                  giftRecipient: O,
                  analyticsLocations: b,
                  analyticsObject: {
                      page: i.isPrivate() ? h.ZY5.DM_CHANNEL : h.ZY5.GUILD_CHANNEL,
                      section: h.jXE.CHANNEL_TEXT_AREA,
                      object: h.qAy.BUTTON_ICON,
                      objectType: h.AnalyticsObjectTypes.GIFT,
                  },
              })
            : A && C && null != O
              ? (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("59207").then(n.bind(n, 435626));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            y(
                                {
                                    analyticsObject: {
                                        page: h.ZY5.DM_CHANNEL,
                                        section: h.jXE.CHANNEL_TEXT_AREA,
                                        object: h.qAy.BUTTON_ICON,
                                        objectType: h.AnalyticsObjectTypes.GIFT,
                                    },
                                    analyticsLocations: b,
                                    giftRecipient: O,
                                },
                                t,
                            ),
                        );
                })
              : (0, u.Z)({
                    isGift: !0,
                    giftRecipient: null === O ? void 0 : O,
                    initialPlanId: null,
                    analyticsLocations: b,
                    analyticsObject: {
                        page: i.isPrivate() ? h.ZY5.DM_CHANNEL : h.ZY5.GUILD_CHANNEL,
                        section: h.jXE.CHANNEL_TEXT_AREA,
                        object: h.qAy.BUTTON_ICON,
                        objectType: h.AnalyticsObjectTypes.GIFT,
                    },
                });
    };
    return (0, r.jsx)(o.u, {
        ariaHidden: N,
        text: g.intl.string(N ? g.t.TW4JV0 : g.t.sWtWDX),
        children: (0, r.jsx)(
            m.Z,
            v(
                y(
                    {
                        className: E.button,
                        isActive: !1,
                        "aria-label": g.intl.string(N ? g.t.TW4JV0 : g.t.Z1RnTk),
                        "aria-haspopup": "dialog",
                        onClick: () => {
                            P(), T();
                        },
                    },
                    I,
                ),
                {
                    children: (0, r.jsx)(S, {
                        size: "refresh_sm",
                        color: "currentColor",
                    }),
                },
            ),
        ),
    });
}
let I = i.memo(S);
