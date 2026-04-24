n.d(t, { A: () => P });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(3203),
    s = n(192308),
    c = n(408278),
    d = n(308528),
    u = n(688810),
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
    I = n(597770),
    y = n(751188),
    S = n(17928),
    C = n(451988),
    T = n(775602),
    x = n(21161),
    R = n(652215),
    L = n(985018);
function N(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: l = !0, onClose: r } = e,
        { giftButtonRef: o, handleMouseEnter: s } = (function (e) {
            let { enabled: t } = e,
                n = (0, S.bG)([T.A], () => T.A.useReducedMotion),
                a = i.useRef(null),
                l = i.useRef(0),
                { createMultipleConfettiAt: r } = i.useContext(x.x),
                o = i.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                s = i.useCallback(() => {
                    if (n) return;
                    let e = a.current?.getBoundingClientRect();
                    null != e && r(e.left + e.width / 2, e.top + e.height / 2, o, 30);
                }, [r, n, o]);
            return (
                i.useEffect(() => {
                    if (!t || n) return;
                    let e = new C.J_(1e3, s);
                    return e.delay(), () => e.cancel();
                }, [t, n, s]),
                {
                    giftButtonRef: a,
                    handleMouseEnter: i.useCallback(() => {
                        t && ((l.current += 1), l.current % 4 == 0 && s());
                    }, [t, s]),
                }
            );
        })({ enabled: l }),
        { openGiftModal: d } = (0, y.$)({
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
        u = i.useCallback(() => {
            d(), r?.();
        }, [d, r]);
    return (0, a.jsx)("div", {
        ref: o,
        onMouseEnter: s,
        children: (0, a.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: I.o,
            "aria-label": L.intl.string(L.t.PEjaCx),
            onClick: u,
        }),
    });
}
var w = n(788868),
    O = n(831111);
let D = (0, b.createChannelRecord)({ id: "1", type: R.rbe.DM });
function P(e) {
    let { user: t, guildId: l, channelId: b, onClose: I, disableAutoFocus: y = !1, upsell: S = !1 } = e,
        { newestAnalyticsLocation: C, analyticsLocations: T } = (0, u.Ay)(),
        { trackUserProfileAction: x } = (0, E.NJ)(),
        R = (0, g.j)("UserProfilePopoutDirectMessageSection"),
        [P, j] = i.useState(""),
        [U, M] = i.useState((0, p.x7)(P)),
        k = i.useRef(!1),
        F = i.useRef(null),
        G = i.useRef(null),
        { Component: H } = (0, o.V)(),
        B = i.useMemo(() => ({ ..._.oU.USER_PROFILE, disableAutoFocus: y }), [y]),
        V = i.useCallback(async () => {
            (0, m.xs)(t.id),
                await d.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, a.jsx)(e, { ...t, giftIntentType: w.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: T });
                });
        }, [t.id, T]),
        W = i.useCallback(
            () =>
                (0, a.jsxs)("div", {
                    className: O.Uo,
                    children: [
                        (0, a.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: H,
                            "aria-label": L.intl.string(L.t.I61IsE),
                            onClick: V,
                        }),
                        (0, a.jsx)(N, { user: t, analyticsLocations: T, onClose: I, confettiEnabled: S }),
                    ],
                }),
            [H, V, t, T, I, S],
        );
    return (0, a.jsx)(f.Ay, {
        className: r()(O.kL, { [O.UX]: S }),
        editorClassName: O.EN,
        type: B,
        placeholder: L.intl.formatToPlainString(L.t["0ZQw/X"], { name: A.Ay.getName(l, b, t) }),
        channel: D,
        textValue: P,
        richValue: U,
        onChange: (e, t, n) => {
            t !== P && (j(t), M(n));
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
                a = n.trim();
            if ("" === a) return { shouldClear: !1, shouldRefocus: !0 };
            (F.current !== a || null == G.current) && ((F.current = a), (G.current = (0, h.m)()));
            try {
                return (
                    x({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, v.p)({
                        userId: t.id,
                        content: a,
                        openChannel: !0,
                        whenReady: !0,
                        location: C,
                        nonce: G.current ?? void 0,
                    }),
                    (F.current = null),
                    (G.current = null),
                    I?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: S || R ? W : void 0,
    });
}
