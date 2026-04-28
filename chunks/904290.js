a.d(t, { A: () => O });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(3203),
    o = a(192308),
    c = a(408278),
    d = a(308528),
    u = a(688810),
    h = a(355622),
    p = a(408018),
    m = a(201349),
    f = a(195880),
    _ = a(45787),
    b = a(746174),
    g = a(95701),
    x = a(562153),
    v = a(183555),
    A = a(448613),
    E = a(597770),
    y = a(751188),
    I = a(17928),
    S = a(451988),
    j = a(775602),
    C = a(21161),
    T = a(652215),
    w = a(985018);
function R(e) {
    let { user: t, analyticsLocations: a, confettiEnabled: r = !0, onClose: i } = e,
        { giftButtonRef: s, handleMouseEnter: o } = (function (e) {
            let { enabled: t } = e,
                a = (0, I.bG)([j.A], () => j.A.useReducedMotion),
                n = l.useRef(null),
                r = l.useRef(0),
                { createMultipleConfettiAt: i } = l.useContext(C.x),
                s = l.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                o = l.useCallback(() => {
                    if (a) return;
                    let e = n.current?.getBoundingClientRect();
                    null != e && i(e.left + e.width / 2, e.top + e.height / 2, s, 30);
                }, [i, a, s]);
            return (
                l.useEffect(() => {
                    if (!t || a) return;
                    let e = new S.J_(1e3, o);
                    return e.delay(), () => e.cancel();
                }, [t, a, o]),
                {
                    giftButtonRef: n,
                    handleMouseEnter: l.useCallback(() => {
                        t && ((r.current += 1), r.current % 4 == 0 && o());
                    }, [t, o]),
                }
            );
        })({ enabled: r }),
        { openGiftModal: d } = (0, y.$)({
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
        u = l.useCallback(() => {
            d(), i?.();
        }, [d, i]);
    return (0, n.jsx)("div", {
        ref: s,
        onMouseEnter: o,
        children: (0, n.jsx)(c.K, {
            size: "sm",
            variant: "icon-only",
            icon: E.o,
            "aria-label": w.intl.string(w.t.PEjaCx),
            onClick: u,
        }),
    });
}
var N = a(788868),
    k = a(831111);
let L = (0, g.createChannelRecord)({ id: "1", type: T.rbe.DM });
function O(e) {
    let { user: t, guildId: r, channelId: g, onClose: E, disableAutoFocus: y = !1, upsell: I = !1 } = e,
        { newestAnalyticsLocation: S, analyticsLocations: j } = (0, u.Ay)(),
        { trackUserProfileAction: C } = (0, v.NJ)(),
        T = (0, b.j)("UserProfilePopoutDirectMessageSection"),
        [O, M] = l.useState(""),
        [P, D] = l.useState((0, p.x7)(O)),
        U = l.useRef(!1),
        V = l.useRef(null),
        F = l.useRef(null),
        { Component: B } = (0, s.V)(),
        G = l.useMemo(() => ({ ...h.oU.USER_PROFILE, disableAutoFocus: y }), [y]),
        H = l.useCallback(async () => {
            (0, _.xs)(t.id),
                await d.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await a.e("95501").then(a.bind(a, 367516));
                    return (t) =>
                        (0, n.jsx)(e, { ...t, giftIntentType: N.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: j });
                });
        }, [t.id, j]),
        W = l.useCallback(
            () =>
                (0, n.jsxs)("div", {
                    className: k.Uo,
                    children: [
                        (0, n.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: B,
                            "aria-label": w.intl.string(w.t.I61IsE),
                            onClick: H,
                        }),
                        (0, n.jsx)(R, { user: t, analyticsLocations: j, onClose: E, confettiEnabled: I }),
                    ],
                }),
            [B, H, t, j, E, I],
        );
    return (0, n.jsx)(m.Ay, {
        className: i()(k.kL, { [k.UX]: I }),
        editorClassName: k.EN,
        type: G,
        placeholder: w.intl.formatToPlainString(w.t["0ZQw/X"], { name: x.Ay.getName(r, g, t) }),
        channel: L,
        textValue: O,
        richValue: P,
        onChange: (e, t, a) => {
            t !== O && (M(t), D(a));
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
                n = a.trim();
            if ("" === n) return { shouldClear: !1, shouldRefocus: !0 };
            (V.current !== n || null == F.current) && ((V.current = n), (F.current = (0, f.m)()));
            try {
                return (
                    C({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, A.p)({
                        userId: t.id,
                        content: n,
                        openChannel: !0,
                        whenReady: !0,
                        location: S,
                        nonce: F.current ?? void 0,
                    }),
                    (V.current = null),
                    (F.current = null),
                    E?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: I || T ? W : void 0,
    });
}
