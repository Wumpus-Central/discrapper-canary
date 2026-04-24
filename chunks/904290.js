a.d(t, { A: () => O });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(3203),
    o = a(192308),
    c = a(408278),
    d = a(308528),
    u = a(688810),
    h = a(355622),
    p = a(408018),
    m = a(201349),
    f = a(195880),
    b = a(45787),
    _ = a(746174),
    g = a(95701),
    x = a(562153),
    v = a(183555),
    A = a(448613),
    y = a(597770),
    E = a(751188),
    I = a(17928),
    S = a(451988),
    j = a(775602),
    C = a(21161),
    T = a(652215),
    R = a(985018);
function w(e) {
    let { user: t, analyticsLocations: a, confettiEnabled: l = !0, onClose: i } = e,
        { giftButtonRef: s, handleMouseEnter: o } = (function (e) {
            let { enabled: t } = e,
                a = (0, I.bG)([j.A], () => j.A.useReducedMotion),
                r = n.useRef(null),
                l = n.useRef(0),
                { createMultipleConfettiAt: i } = n.useContext(C.x),
                s = n.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                o = n.useCallback(() => {
                    if (a) return;
                    let e = r.current?.getBoundingClientRect();
                    null != e && i(e.left + e.width / 2, e.top + e.height / 2, s, 30);
                }, [i, a, s]);
            return (
                n.useEffect(() => {
                    if (!t || a) return;
                    let e = new S.J_(1e3, o);
                    return e.delay(), () => e.cancel();
                }, [t, a, o]),
                {
                    giftButtonRef: r,
                    handleMouseEnter: n.useCallback(() => {
                        t && ((l.current += 1), l.current % 4 == 0 && o());
                    }, [t, o]),
                }
            );
        })({ enabled: l }),
        { openGiftModal: d } = (0, E.$)({
            giftRecipient: t,
            analyticsLocations: a,
            analyticsObject: {
                page: T.liQ.USER_PROFILE,
                section: T.JJy.USER_PROFILE,
                object: T.ZSU.BUTTON_ICON,
                objectType: T.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        u = n.useCallback(() => {
            d(), i?.();
        }, [d, i]);
    return (0, r.jsx)("div", {
        ref: s,
        onMouseEnter: o,
        children: (0, r.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: y.o,
            "aria-label": R.intl.string(R.t.PEjaCx),
            onClick: u,
        }),
    });
}
var k = a(788868),
    L = a(831111);
let N = (0, g.createChannelRecord)({ id: "1", type: T.rbe.DM });
function O(e) {
    let { user: t, guildId: l, channelId: g, onClose: y, disableAutoFocus: E = !1, upsell: I = !1 } = e,
        { newestAnalyticsLocation: S, analyticsLocations: j } = (0, u.Ay)(),
        { trackUserProfileAction: C } = (0, v.NJ)(),
        T = (0, _.j)("UserProfilePopoutDirectMessageSection"),
        [O, P] = n.useState(""),
        [D, M] = n.useState((0, p.x7)(O)),
        U = n.useRef(!1),
        F = n.useRef(null),
        V = n.useRef(null),
        { Component: B } = (0, s.V)(),
        G = n.useMemo(() => ({ ...h.oU.USER_PROFILE, disableAutoFocus: E }), [E]),
        H = n.useCallback(async () => {
            (0, b.xs)(t.id),
                await d.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await a.e("95501").then(a.bind(a, 367516));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, giftIntentType: k.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: j });
                });
        }, [t.id, j]),
        W = n.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: L.Uo,
                    children: [
                        (0, r.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: B,
                            "aria-label": R.intl.string(R.t.I61IsE),
                            onClick: H,
                        }),
                        (0, r.jsx)(w, { user: t, analyticsLocations: j, onClose: y, confettiEnabled: I }),
                    ],
                }),
            [B, H, t, j, y, I],
        );
    return (0, r.jsx)(m.Ay, {
        className: i()(L.kL, { [L.UX]: I }),
        editorClassName: L.EN,
        type: G,
        placeholder: R.intl.formatToPlainString(R.t["0ZQw/X"], { name: x.Ay.getName(l, g, t) }),
        channel: N,
        textValue: O,
        richValue: D,
        onChange: (e, t, a) => {
            t !== O && (P(t), M(a));
        },
        focused: U.current,
        onFocus: () => {
            U.current = !0;
        },
        onBlur: () => {
            U.current = !1;
        },
        onSubmit: async (e) => {
            let { value: a } = e,
                r = a.trim();
            if ("" === r) return { shouldClear: !1, shouldRefocus: !0 };
            (F.current !== r || null == V.current) && ((F.current = r), (V.current = (0, f.m)()));
            try {
                return (
                    C({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, A.p)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: S,
                        nonce: V.current ?? void 0,
                    }),
                    (F.current = null),
                    (V.current = null),
                    y?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: I || T ? W : void 0,
    });
}
