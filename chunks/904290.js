"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(3203),
    o = n(192308),
    c = n(408278),
    u = n(308528),
    d = n(688810),
    _ = n(355622),
    p = n(408018),
    f = n(201349),
    h = n(195880),
    m = n(45787),
    g = n(746174),
    b = n(95701),
    A = n(562153),
    E = n(183555),
    v = n(448613),
    y = n(597770),
    I = n(751188),
    S = n(17928),
    T = n(451988),
    C = n(775602),
    x = n(21161),
    R = n(652215),
    N = n(985018);
function L(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: a = !0, onClose: l } = e,
        { giftButtonRef: s, handleMouseEnter: o } = (function (e) {
            let { enabled: t } = e,
                n = (0, S.bG)([C.A], () => C.A.useReducedMotion),
                r = i.useRef(null),
                a = i.useRef(0),
                { createMultipleConfettiAt: l } = i.useContext(x.x),
                s = i.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                o = i.useCallback(() => {
                    if (n) return;
                    let e = r.current?.getBoundingClientRect();
                    null != e && l(e.left + e.width / 2, e.top + e.height / 2, s, 30);
                }, [l, n, s]);
            return (
                i.useEffect(() => {
                    if (!t || n) return;
                    let e = new T.J_(1e3, o);
                    return e.delay(), () => e.cancel();
                }, [t, n, o]),
                {
                    giftButtonRef: r,
                    handleMouseEnter: i.useCallback(() => {
                        t && ((a.current += 1), a.current % 4 == 0 && o());
                    }, [t, o]),
                }
            );
        })({ enabled: a }),
        { openGiftModal: u } = (0, I.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: R.liQ.USER_PROFILE,
                section: R.JJy.USER_PROFILE,
                object: R.ZSU.BUTTON_ICON,
                objectType: R.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        d = i.useCallback(() => {
            u(), l?.();
        }, [u, l]);
    return (0, r.jsx)("div", {
        ref: s,
        onMouseEnter: o,
        children: (0, r.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: y.o,
            "aria-label": N.intl.string(N.t.PEjaCx),
            onClick: d,
        }),
    });
}
var w = n(788868),
    O = n(831111);
let D = (0, b.createChannelRecord)({ id: "1", type: R.rbe.DM });
function P(e) {
    let { user: t, guildId: a, channelId: b, onClose: y, disableAutoFocus: I = !1, upsell: S = !1 } = e,
        { newestAnalyticsLocation: T, analyticsLocations: C } = (0, d.Ay)(),
        { trackUserProfileAction: x } = (0, E.NJ)(),
        R = (0, g.j)("UserProfilePopoutDirectMessageSection"),
        [P, M] = i.useState(""),
        [k, j] = i.useState((0, p.x7)(P)),
        U = i.useRef(!1),
        F = i.useRef(null),
        B = i.useRef(null),
        { Component: G } = (0, s.V)(),
        H = i.useMemo(() => ({ ..._.oU.USER_PROFILE, disableAutoFocus: I }), [I]),
        V = i.useCallback(async () => {
            (0, m.xs)(t.id),
                await u.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, giftIntentType: w.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: C });
                });
        }, [t.id, C]),
        W = i.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: O.Uo,
                    children: [
                        (0, r.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: G,
                            "aria-label": N.intl.string(N.t.I61IsE),
                            onClick: V,
                        }),
                        (0, r.jsx)(L, { user: t, analyticsLocations: C, onClose: y, confettiEnabled: S }),
                    ],
                }),
            [G, V, t, C, y, S],
        );
    return (0, r.jsx)(f.Ay, {
        className: l()(O.kL, { [O.UX]: S }),
        editorClassName: O.EN,
        type: H,
        placeholder: N.intl.formatToPlainString(N.t["0ZQw/X"], { name: A.Ay.getName(a, b, t) }),
        channel: D,
        textValue: P,
        richValue: k,
        onChange: (e, t, n) => {
            t !== P && (M(t), j(n));
        },
        focused: U.current,
        onFocus: () => {
            U.current = !0;
        },
        onBlur: () => {
            U.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e,
                r = n.trim();
            if ("" === r) return { shouldClear: !1, shouldRefocus: !0 };
            (F.current !== r || null == B.current) && ((F.current = r), (B.current = (0, h.m)()));
            try {
                return (
                    x({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, v.p)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: T,
                        nonce: B.current ?? void 0,
                    }),
                    (F.current = null),
                    (B.current = null),
                    y?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: S || R ? W : void 0,
    });
}
