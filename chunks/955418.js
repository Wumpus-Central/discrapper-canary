n.d(t, { Z: () => R }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(114101),
    l = n(481060),
    c = n(493683),
    u = n(906732),
    d = n(541716),
    f = n(752305),
    p = n(893718),
    _ = n(48854),
    m = n(795448),
    h = n(131704),
    g = n(5192),
    E = n(785717),
    b = n(698305),
    y = n(302624),
    O = n(981631),
    v = n(474936),
    S = n(388032),
    I = n(15);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (0, h.createChannelRecord)({
    id: "1",
    type: O.d4z.DM,
});
function R(e) {
    let { user: t, guildId: a, channelId: h, onClose: O, disableAutoFocus: T = !1, upsell: A = !1 } = e,
        { newestAnalyticsLocation: R, analyticsLocations: w } = (0, u.ZP)(),
        { trackUserProfileAction: D } = (0, E.KZ)(),
        [x, L] = i.useState(""),
        [j, M] = i.useState((0, f.JM)(x)),
        k = i.useRef(!1),
        U = i.useRef(null),
        G = i.useRef(null),
        { Component: Z } = (0, s.V)(),
        F = i.useMemo(() => N(C({}, d.Ie.USER_PROFILE), { disableAutoFocus: T }), [T]),
        B = i.useCallback(async () => {
            (0, m.PV)(t.id),
                await c.Z.openPrivateChannel({ recipientIds: [t.id] }),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            N(C({}, t), {
                                giftIntentType: v.hX.FRIEND_ANNIVERSARY,
                                analyticsLocationHistory: w,
                            }),
                        );
                });
        }, [t.id, w]),
        V = i.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: I.buttons,
                    children: [
                        (0, r.jsx)(l.hU, {
                            size: "sm",
                            variant: "icon-only",
                            icon: Z,
                            "aria-label": S.intl.string(S.t.I61IsE),
                            onClick: B,
                        }),
                        (0, r.jsx)(y.Z, {
                            user: t,
                            analyticsLocations: w,
                        }),
                    ],
                }),
            [Z, B, t, w],
        );
    return (0, r.jsx)(p.ZP, {
        className: o()(I.container, { [I.upsell]: A }),
        editorClassName: I.editor,
        type: F,
        placeholder: S.intl.formatToPlainString(S.t["0ZQw/X"], { name: g.ZP.getName(a, h, t) }),
        channel: P,
        textValue: x,
        richValue: j,
        onChange: (e, t, n) => {
            t !== x && (L(t), M(n));
        },
        focused: k.current,
        onFocus: () => {
            k.current = !0;
        },
        onBlur: () => {
            k.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e,
                r = n.trim();
            if ("" === r)
                return {
                    shouldClear: !1,
                    shouldRefocus: !0,
                };
            (U.current !== r || null == G.current) && ((U.current = r), (G.current = (0, _.r)()));
            try {
                var i;
                return (
                    D({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, b.Z)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: R,
                        nonce: null != (i = G.current) ? i : void 0,
                    }),
                    (U.current = null),
                    (G.current = null),
                    null == O || O(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1,
                    }
                );
            } catch (e) {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1,
                };
            }
        },
        renderButtons: A ? V : void 0,
    });
}
