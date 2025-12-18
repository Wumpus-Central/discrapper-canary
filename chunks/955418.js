n.d(t, { Z: () => P }), n(388685), n(781311);
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
    _ = n(795448),
    m = n(131704),
    h = n(5192),
    g = n(785717),
    E = n(698305),
    b = n(302624),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    S = n(15);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (0, m.createChannelRecord)({
    id: "1",
    type: y.d4z.DM,
});
function P(e) {
    let { user: t, guildId: a, channelId: m, onClose: y, disableAutoFocus: I = !1, upsell: C = !1 } = e,
        { newestAnalyticsLocation: P, analyticsLocations: R } = (0, u.ZP)(),
        { trackUserProfileAction: w } = (0, g.KZ)(),
        [D, x] = i.useState(""),
        [L, j] = i.useState((0, f.JM)(D)),
        M = i.useRef(!1),
        { Component: k } = (0, s.V)(),
        U = i.useMemo(() => A(T({}, d.Ie.USER_PROFILE), { disableAutoFocus: I }), [I]),
        G = i.useCallback(async () => {
            (0, _.PV)(t.id),
                await c.Z.openPrivateChannel({ recipientIds: [t.id] }),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            A(T({}, t), {
                                giftIntentType: O.hX.FRIEND_ANNIVERSARY,
                                analyticsLocationHistory: R,
                            }),
                        );
                });
        }, [t.id, R]),
        Z = i.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: S.buttons,
                    children: [
                        (0, r.jsx)(l.hU, {
                            size: "sm",
                            variant: "icon-only",
                            icon: k,
                            "aria-label": v.intl.string(v.t.I61IsE),
                            onClick: G,
                        }),
                        (0, r.jsx)(b.Z, {
                            user: t,
                            analyticsLocations: R,
                        }),
                    ],
                }),
            [k, G, t, R],
        );
    return (0, r.jsx)(p.ZP, {
        className: o()(S.container, { [S.upsell]: C }),
        editorClassName: S.editor,
        type: U,
        placeholder: v.intl.formatToPlainString(v.t["0ZQw/X"], { name: h.ZP.getName(a, m, t) }),
        channel: N,
        textValue: D,
        richValue: L,
        onChange: (e, t, n) => {
            t !== D && (x(t), j(n));
        },
        focused: M.current,
        onFocus: () => {
            M.current = !0;
        },
        onBlur: () => {
            M.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    w({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, E.Z)({
                        userId: t.id,
                        content: n.trim(),
                        openChannel: !0,
                        whenReady: !0,
                        location: P,
                    }),
                    null == y || y(),
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
        renderButtons: C ? Z : void 0,
    });
}
