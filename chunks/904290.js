"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(3203),
    o = n(192308),
    c = n(408278),
    d = n(308528),
    u = n(688810),
    _ = n(355622),
    p = n(408018),
    f = n(201349),
    m = n(195880),
    h = n(45787),
    g = n(746174),
    b = n(95701),
    A = n(562153),
    E = n(183555),
    v = n(448613),
    I = n(597770),
    y = n(751188),
    x = n(17928),
    S = n(451988),
    T = n(775602),
    C = n(21161),
    N = n(652215),
    R = n(985018);
function w(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: i = !0, onClose: l } = e,
        { giftButtonRef: s, handleMouseEnter: o } = (function (e) {
            let { enabled: t } = e,
                n = (0, x.bG)([T.A], () => T.A.useReducedMotion),
                r = a.useRef(null),
                i = a.useRef(0),
                { createMultipleConfettiAt: l } = a.useContext(C.x),
                s = a.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                o = a.useCallback(() => {
                    if (n) return;
                    let e = r.current?.getBoundingClientRect();
                    null != e && l(e.left + e.width / 2, e.top + e.height / 2, s, 30);
                }, [l, n, s]);
            return (
                a.useEffect(() => {
                    if (!t || n) return;
                    let e = new S.J_(1e3, o);
                    return e.delay(), () => e.cancel();
                }, [t, n, o]),
                {
                    giftButtonRef: r,
                    handleMouseEnter: a.useCallback(() => {
                        t && ((i.current += 1), i.current % 4 == 0 && o());
                    }, [t, o]),
                }
            );
        })({ enabled: i }),
        { openGiftModal: d } = (0, y.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: N.liQ.USER_PROFILE,
                section: N.JJy.USER_PROFILE,
                object: N.ZSU.BUTTON_ICON,
                objectType: N.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        u = a.useCallback(() => {
            d(), l?.();
        }, [d, l]);
    return (0, r.jsx)("div", {
        ref: s,
        onMouseEnter: o,
        children: (0, r.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: I.o,
            "aria-label": R.intl.string(R.t.PEjaCx),
            onClick: u,
        }),
    });
}
var L = n(788868),
    M = n(831111);
let O = (0, b.createChannelRecord)({ id: "1", type: N.rbe.DM });
function D(e) {
    let { user: t, guildId: i, channelId: b, onClose: I, disableAutoFocus: y = !1, upsell: x = !1 } = e,
        { newestAnalyticsLocation: S, analyticsLocations: T } = (0, u.Ay)(),
        { trackUserProfileAction: C } = (0, E.NJ)(),
        N = (0, g.j)("UserProfilePopoutDirectMessageSection"),
        [D, P] = a.useState(""),
        [j, k] = a.useState((0, p.x7)(D)),
        U = a.useRef(!1),
        F = a.useRef(null),
        B = a.useRef(null),
        { Component: G } = (0, s.V)(),
        V = a.useMemo(() => ({ ..._.oU.USER_PROFILE, disableAutoFocus: y }), [y]),
        H = a.useCallback(async () => {
            (0, h.xs)(t.id),
                await d.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, giftIntentType: L.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: T });
                });
        }, [t.id, T]),
        W = a.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: M.Uo,
                    children: [
                        (0, r.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: G,
                            "aria-label": R.intl.string(R.t.I61IsE),
                            onClick: H,
                        }),
                        (0, r.jsx)(w, { user: t, analyticsLocations: T, onClose: I, confettiEnabled: x }),
                    ],
                }),
            [G, H, t, T, I, x],
        );
    return (0, r.jsx)(f.Ay, {
        className: l()(M.kL, { [M.UX]: x }),
        editorClassName: M.EN,
        type: V,
        placeholder: R.intl.formatToPlainString(R.t["0ZQw/X"], { name: A.Ay.getName(i, b, t) }),
        channel: O,
        textValue: D,
        richValue: j,
        onChange: (e, t, n) => {
            t !== D && (P(t), k(n));
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
            (F.current !== r || null == B.current) && ((F.current = r), (B.current = (0, m.m)()));
            try {
                return (
                    C({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, v.p)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: S,
                        nonce: B.current ?? void 0,
                    }),
                    (F.current = null),
                    (B.current = null),
                    I?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: x || N ? W : void 0,
    });
}
