"use strict";
r.d(t, { A: () => D });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    l = r.n(a),
    s = r(3203),
    o = r(192308),
    c = r(408278),
    u = r(308528),
    d = r(688810),
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
    T = r(451988),
    x = r(775602),
    C = r(21161),
    R = r(652215),
    N = r(985018);
function L(e) {
    let { user: t, analyticsLocations: r, confettiEnabled: a = !0, onClose: l } = e,
        { giftButtonRef: s, handleMouseEnter: o } = (function (e) {
            let { enabled: t } = e,
                r = (0, S.bG)([x.A], () => x.A.useReducedMotion),
                n = i.useRef(null),
                a = i.useRef(0),
                { createMultipleConfettiAt: l } = i.useContext(C.x),
                s = i.useMemo(
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
                    null != e && l(e.left + e.width / 2, e.top + e.height / 2, s, 30);
                }, [l, r, s]);
            return (
                i.useEffect(() => {
                    if (!t || r) return;
                    let e = new T.J_(1e3, o);
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
        { openGiftModal: u } = (0, I.$)({
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
        d = i.useCallback(() => {
            u(), l?.();
        }, [u, l]);
    return (0, n.jsx)("div", {
        ref: s,
        onMouseEnter: o,
        children: (0, n.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: y.o,
            "aria-label": N.intl.string(N.t.PEjaCx),
            onClick: d,
        }),
    });
}
var w = r(788868),
    O = r(831111);
let P = (0, b.createChannelRecord)({ id: "1", type: R.rbe.DM });
function D(e) {
    let { user: t, guildId: a, channelId: b, onClose: y, disableAutoFocus: I = !1, upsell: S = !1 } = e,
        { newestAnalyticsLocation: T, analyticsLocations: x } = (0, d.Ay)(),
        { trackUserProfileAction: C } = (0, E.NJ)(),
        R = (0, g.j)("UserProfilePopoutDirectMessageSection"),
        [D, M] = i.useState(""),
        [k, j] = i.useState((0, p.x7)(D)),
        U = i.useRef(!1),
        F = i.useRef(null),
        G = i.useRef(null),
        { Component: B } = (0, s.V)(),
        H = i.useMemo(() => ({ ..._.oU.USER_PROFILE, disableAutoFocus: I }), [I]),
        V = i.useCallback(async () => {
            (0, h.xs)(t.id),
                await u.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await r.e("95501").then(r.bind(r, 367516));
                    return (t) =>
                        (0, n.jsx)(e, { ...t, giftIntentType: w.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: x });
                });
        }, [t.id, x]),
        W = i.useCallback(
            () =>
                (0, n.jsxs)("div", {
                    className: O.Uo,
                    children: [
                        (0, n.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: B,
                            "aria-label": N.intl.string(N.t.I61IsE),
                            onClick: V,
                        }),
                        (0, n.jsx)(L, { user: t, analyticsLocations: x, onClose: y, confettiEnabled: S }),
                    ],
                }),
            [B, V, t, x, y, S],
        );
    return (0, n.jsx)(f.Ay, {
        className: l()(O.kL, { [O.UX]: S }),
        editorClassName: O.EN,
        type: H,
        placeholder: N.intl.formatToPlainString(N.t["0ZQw/X"], { name: A.Ay.getName(a, b, t) }),
        channel: P,
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
            (F.current !== n || null == G.current) && ((F.current = n), (G.current = (0, m.m)()));
            try {
                return (
                    C({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, v.p)({
                        userId: t.id,
                        content: n,
                        openChannel: !0,
                        whenReady: !0,
                        location: T,
                        nonce: G.current ?? void 0,
                    }),
                    (F.current = null),
                    (G.current = null),
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
