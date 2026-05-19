n.d(t, { A: () => M });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    u = n(3203),
    c = n(192308),
    s = n(408278),
    o = n(308528),
    d = n(688810),
    y = n(355622),
    f = n(408018),
    h = n(201349),
    p = n(195880),
    C = n(45787),
    R = n(95701),
    m = n(562153),
    b = n(183555),
    E = n(448613),
    x = n(597770),
    g = n(751188),
    I = n(17928),
    j = n(451988),
    k = n(775602),
    A = n(21161),
    N = n(652215),
    S = n(375708);
function v(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: i = !0, onClose: r } = e,
        { giftButtonRef: u, handleMouseEnter: c } = (function (e) {
            let { enabled: t } = e,
                n = (0, I.bG)([k.A], () => k.A.useReducedMotion),
                a = l.useRef(null),
                i = l.useRef(0),
                { createMultipleConfettiAt: r } = l.useContext(A.x),
                u = l.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                c = l.useCallback(() => {
                    if (n) return;
                    let e = a.current?.getBoundingClientRect();
                    null != e && r(e.left + e.width / 2, e.top + e.height / 2, u, 30);
                }, [r, n, u]);
            return (
                l.useEffect(() => {
                    if (!t || n) return;
                    let e = new j.J_(1e3, c);
                    return e.delay(), () => e.cancel();
                }, [t, n, c]),
                {
                    giftButtonRef: a,
                    handleMouseEnter: l.useCallback(() => {
                        t && ((i.current += 1), i.current % 4 == 0 && c());
                    }, [t, c]),
                }
            );
        })({ enabled: i }),
        { openGiftModal: o } = (0, g.$)({
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
        d = l.useCallback(() => {
            o(), r?.();
        }, [o, r]);
    return (0, a.jsx)("div", {
        ref: u,
        onMouseEnter: c,
        children: (0, a.jsx)(s.K, {
            size: "sm",
            variant: "icon-only",
            icon: x.o,
            "aria-label": S.intl.string(S.t.PEjaCx),
            onClick: d,
        }),
    });
}
var w = n(788868),
    _ = n(831111);
let L = (0, R.createChannelRecord)({ id: "1", type: N.rbe.DM });
function M(e) {
    let { user: t, guildId: i, channelId: R, onClose: x, disableAutoFocus: g = !1, upsell: I = !1 } = e,
        { newestAnalyticsLocation: j, analyticsLocations: k } = (0, d.Ay)(),
        { trackUserProfileAction: A } = (0, b.NJ)(),
        [N, M] = l.useState(""),
        [T, U] = l.useState((0, f.x7)(N)),
        V = l.useRef(!1),
        O = l.useRef(null),
        P = l.useRef(null),
        { Component: F } = (0, u.V)(),
        z = l.useMemo(() => ({ ...y.oU.USER_PROFILE, disableAutoFocus: g }), [g]),
        B = l.useCallback(async () => {
            (0, C.xs)(t.id),
                await o.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("8802"), n.e("22638"), n.e("8891"), n.e("95501")]).then(
                        n.bind(n, 367516),
                    );
                    return (t) =>
                        (0, a.jsx)(e, { ...t, giftIntentType: w.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: k });
                });
        }, [t.id, k]),
        D = l.useCallback(
            () =>
                (0, a.jsxs)("div", {
                    className: _.Uo,
                    children: [
                        (0, a.jsx)(s.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: F,
                            "aria-label": S.intl.string(S.t.I61IsE),
                            onClick: B,
                        }),
                        (0, a.jsx)(v, { user: t, analyticsLocations: k, onClose: x, confettiEnabled: I }),
                    ],
                }),
            [F, B, t, k, x, I],
        );
    return (0, a.jsx)(h.Ay, {
        className: r()(_.kL, { [_.UX]: I }),
        editorClassName: _.EN,
        type: z,
        placeholder: S.intl.formatToPlainString(S.t["0ZQw/X"], { name: m.Ay.getName(i, R, t) }),
        channel: L,
        textValue: N,
        richValue: T,
        onChange: (e, t, n) => {
            t !== N && (M(t), U(n));
        },
        focused: V.current,
        onFocus: () => {
            V.current = !0;
        },
        onBlur: () => {
            V.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e,
                a = n.trim();
            if ("" === a) return { shouldClear: !1, shouldRefocus: !0 };
            (O.current !== a || null == P.current) && ((O.current = a), (P.current = (0, p.m)()));
            try {
                return (
                    A({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, E.p)({
                        userId: t.id,
                        content: a,
                        openChannel: !0,
                        whenReady: !0,
                        location: j,
                        nonce: P.current ?? void 0,
                    }),
                    (O.current = null),
                    (P.current = null),
                    x?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: I ? D : void 0,
    });
}
