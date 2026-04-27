"use strict";
r.d(t, { A: () => D });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(3203),
    o = r(192308),
    c = r(408278),
    d = r(308528),
    u = r(688810),
    _ = r(355622),
    p = r(408018),
    f = r(201349),
    m = r(195880),
    h = r(45787),
    g = r(746174),
    b = r(95701),
    A = r(562153),
    E = r(183555),
    v = r(448613),
    y = r(597770),
    I = r(751188),
    S = r(17928),
    x = r(451988),
    T = r(775602),
    C = r(21161),
    R = r(652215),
    N = r(985018);
function L(e) {
    let { user: t, analyticsLocations: r, confettiEnabled: a = !0, onClose: s } = e,
        { giftButtonRef: l, handleMouseEnter: o } = (function (e) {
            let { enabled: t } = e,
                r = (0, S.bG)([T.A], () => T.A.useReducedMotion),
                n = i.useRef(null),
                a = i.useRef(0),
                { createMultipleConfettiAt: s } = i.useContext(C.x),
                l = i.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                o = i.useCallback(() => {
                    if (r) return;
                    let e = n.current?.getBoundingClientRect();
                    null != e && s(e.left + e.width / 2, e.top + e.height / 2, l, 30);
                }, [s, r, l]);
            return (
                i.useEffect(() => {
                    if (!t || r) return;
                    let e = new x.J_(1e3, o);
                    return e.delay(), () => e.cancel();
                }, [t, r, o]),
                {
                    giftButtonRef: n,
                    handleMouseEnter: i.useCallback(() => {
                        t && ((a.current += 1), a.current % 4 == 0 && o());
                    }, [t, o]),
                }
            );
        })({ enabled: a }),
        { openGiftModal: d } = (0, I.$)({
            giftRecipient: t,
            analyticsLocations: r,
            analyticsObject: {
                page: R.liQ.USER_PROFILE,
                section: R.JJy.USER_PROFILE,
                object: R.ZSU.BUTTON_ICON,
                objectType: R.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        u = i.useCallback(() => {
            d(), s?.();
        }, [d, s]);
    return (0, n.jsx)("div", {
        ref: l,
        onMouseEnter: o,
        children: (0, n.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: y.o,
            "aria-label": N.intl.string(N.t.PEjaCx),
            onClick: u,
        }),
    });
}
var w = r(788868),
    P = r(831111);
let O = (0, b.createChannelRecord)({ id: "1", type: R.rbe.DM });
function D(e) {
    let { user: t, guildId: a, channelId: b, onClose: y, disableAutoFocus: I = !1, upsell: S = !1 } = e,
        { newestAnalyticsLocation: x, analyticsLocations: T } = (0, u.Ay)(),
        { trackUserProfileAction: C } = (0, E.NJ)(),
        R = (0, g.j)("UserProfilePopoutDirectMessageSection"),
        [D, M] = i.useState(""),
        [k, j] = i.useState((0, p.x7)(D)),
        U = i.useRef(!1),
        F = i.useRef(null),
        B = i.useRef(null),
        { Component: G } = (0, l.V)(),
        H = i.useMemo(() => ({ ..._.oU.USER_PROFILE, disableAutoFocus: I }), [I]),
        V = i.useCallback(async () => {
            (0, h.xs)(t.id),
                await d.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await r.e("95501").then(r.bind(r, 367516));
                    return (t) =>
                        (0, n.jsx)(e, { ...t, giftIntentType: w.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: T });
                });
        }, [t.id, T]),
        W = i.useCallback(
            () =>
                (0, n.jsxs)("div", {
                    className: P.Uo,
                    children: [
                        (0, n.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: G,
                            "aria-label": N.intl.string(N.t.I61IsE),
                            onClick: V,
                        }),
                        (0, n.jsx)(L, { user: t, analyticsLocations: T, onClose: y, confettiEnabled: S }),
                    ],
                }),
            [G, V, t, T, y, S],
        );
    return (0, n.jsx)(f.Ay, {
        className: s()(P.kL, { [P.UX]: S }),
        editorClassName: P.EN,
        type: H,
        placeholder: N.intl.formatToPlainString(N.t["0ZQw/X"], { name: A.Ay.getName(a, b, t) }),
        channel: O,
        textValue: D,
        richValue: k,
        onChange: (e, t, r) => {
            t !== D && (M(t), j(r));
        },
        focused: U.current,
        onFocus: () => {
            U.current = !0;
        },
        onBlur: () => {
            U.current = !1;
        },
        onSubmit: async (e) => {
            let { value: r } = e,
                n = r.trim();
            if ("" === n) return { shouldClear: !1, shouldRefocus: !0 };
            (F.current !== n || null == B.current) && ((F.current = n), (B.current = (0, m.m)()));
            try {
                return (
                    C({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, v.p)({
                        userId: t.id,
                        content: n,
                        openChannel: !0,
                        whenReady: !0,
                        location: x,
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
