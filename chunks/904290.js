t.d(n, { A: () => U });
var a = t(627968),
    i = t(64700),
    l = t(503698),
    r = t.n(l),
    o = t(3203),
    s = t(192308),
    u = t(408278),
    c = t(308528),
    d = t(688810),
    f = t(355622),
    y = t(408018),
    h = t(201349),
    p = t(195880),
    C = t(45787),
    b = t(746174),
    m = t(95701),
    R = t(562153),
    E = t(183555),
    g = t(448613),
    x = t(597770),
    j = t(751188),
    k = t(17928),
    I = t(451988),
    S = t(775602),
    v = t(21161),
    w = t(652215),
    A = t(375708);
function N(e) {
    let { user: n, analyticsLocations: t, confettiEnabled: l = !0, onClose: r } = e,
        { giftButtonRef: o, handleMouseEnter: s } = (function (e) {
            let { enabled: n } = e,
                t = (0, k.bG)([S.A], () => S.A.useReducedMotion),
                a = i.useRef(null),
                l = i.useRef(0),
                { createMultipleConfettiAt: r } = i.useContext(v.x),
                o = i.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                s = i.useCallback(() => {
                    if (t) return;
                    let e = a.current?.getBoundingClientRect();
                    null != e && r(e.left + e.width / 2, e.top + e.height / 2, o, 30);
                }, [r, t, o]);
            return (
                i.useEffect(() => {
                    if (!n || t) return;
                    let e = new I.J_(1e3, s);
                    return e.delay(), () => e.cancel();
                }, [n, t, s]),
                {
                    giftButtonRef: a,
                    handleMouseEnter: i.useCallback(() => {
                        n && ((l.current += 1), l.current % 4 == 0 && s());
                    }, [n, s]),
                }
            );
        })({ enabled: l }),
        { openGiftModal: c } = (0, j.$)({
            giftRecipient: n,
            analyticsLocations: t,
            analyticsObject: {
                page: w.liQ.USER_PROFILE,
                section: w.JJy.USER_PROFILE,
                object: w.ZSU.BUTTON_ICON,
                objectType: w.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        d = i.useCallback(() => {
            c(), r?.();
        }, [c, r]);
    return (0, a.jsx)("div", {
        ref: o,
        onMouseEnter: s,
        children: (0, a.jsx)(u.K, {
            size: "sm",
            variant: "icon-only",
            icon: x.o,
            "aria-label": A.intl.string(A.t.PEjaCx),
            onClick: d,
        }),
    });
}
var _ = t(788868),
    M = t(831111);
let P = (0, m.createChannelRecord)({ id: "1", type: w.rbe.DM });
function U(e) {
    let { user: n, guildId: l, channelId: m, onClose: x, disableAutoFocus: j = !1, upsell: k = !1 } = e,
        { newestAnalyticsLocation: I, analyticsLocations: S } = (0, d.Ay)(),
        { trackUserProfileAction: v } = (0, E.NJ)(),
        w = (0, b.j)("UserProfilePopoutDirectMessageSection"),
        [U, L] = i.useState(""),
        [T, V] = i.useState((0, y.x7)(U)),
        O = i.useRef(!1),
        F = i.useRef(null),
        D = i.useRef(null),
        { Component: z } = (0, o.V)(),
        B = i.useMemo(() => ({ ...f.oU.USER_PROFILE, disableAutoFocus: j }), [j]),
        J = i.useCallback(async () => {
            (0, C.xs)(n.id),
                await c.A.openPrivateChannel({ recipientIds: [n.id] }),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("44729"),
                        t.e("22638"),
                        t.e("8891"),
                        t.e("95501"),
                    ]).then(t.bind(t, 367516));
                    return (n) =>
                        (0, a.jsx)(e, { ...n, giftIntentType: _.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: S });
                });
        }, [n.id, S]),
        G = i.useCallback(
            () =>
                (0, a.jsxs)("div", {
                    className: M.Uo,
                    children: [
                        (0, a.jsx)(u.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: z,
                            "aria-label": A.intl.string(A.t.I61IsE),
                            onClick: J,
                        }),
                        (0, a.jsx)(N, { user: n, analyticsLocations: S, onClose: x, confettiEnabled: k }),
                    ],
                }),
            [z, J, n, S, x, k],
        );
    return (0, a.jsx)(h.Ay, {
        className: r()(M.kL, { [M.UX]: k }),
        editorClassName: M.EN,
        type: B,
        placeholder: A.intl.formatToPlainString(A.t["0ZQw/X"], { name: R.Ay.getName(l, m, n) }),
        channel: P,
        textValue: U,
        richValue: T,
        onChange: (e, n, t) => {
            n !== U && (L(n), V(t));
        },
        focused: O.current,
        onFocus: () => {
            O.current = !0;
        },
        onBlur: () => {
            O.current = !1;
        },
        onSubmit: async (e) => {
            let { value: t } = e,
                a = t.trim();
            if ("" === a) return { shouldClear: !1, shouldRefocus: !0 };
            (F.current !== a || null == D.current) && ((F.current = a), (D.current = (0, p.m)()));
            try {
                return (
                    v({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, g.p)({
                        userId: n.id,
                        content: a,
                        openChannel: !0,
                        whenReady: !0,
                        location: I,
                        nonce: D.current ?? void 0,
                    }),
                    (F.current = null),
                    (D.current = null),
                    x?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: k || w ? G : void 0,
    });
}
