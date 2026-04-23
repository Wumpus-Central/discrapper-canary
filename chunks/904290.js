"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(3203),
    l = n(192308),
    d = n(408278),
    _ = n(308528),
    u = n(688810),
    c = n(355622),
    E = n(408018),
    h = n(201349),
    m = n(195880),
    f = n(45787),
    g = n(746174),
    p = n(95701),
    A = n(562153),
    I = n(183555),
    T = n(448613),
    S = n(597770),
    N = n(751188),
    C = n(17928),
    R = n(451988),
    O = n(775602),
    y = n(21161),
    v = n(652215),
    D = n(985018);
function L(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: s = !0, onClose: a } = e,
        { giftButtonRef: o, handleMouseEnter: l } = (function (e) {
            let { enabled: t } = e,
                n = (0, C.bG)([O.A], () => O.A.useReducedMotion),
                i = r.useRef(null),
                s = r.useRef(0),
                { createMultipleConfettiAt: a } = r.useContext(y.x),
                o = r.useMemo(
                    () => ({
                        size: { type: "static-random", minValue: 2, maxValue: 6 },
                        velocity: { type: "static-random", minValue: { x: -10, y: -25 }, maxValue: { x: 10, y: -5 } },
                        dragCoefficient: { type: "static", value: 0.001 },
                    }),
                    [],
                ),
                l = r.useCallback(() => {
                    if (n) return;
                    let e = i.current?.getBoundingClientRect();
                    null != e && a(e.left + e.width / 2, e.top + e.height / 2, o, 30);
                }, [a, n, o]);
            return (
                r.useEffect(() => {
                    if (!t || n) return;
                    let e = new R.J_(1e3, l);
                    return e.delay(), () => e.cancel();
                }, [t, n, l]),
                {
                    giftButtonRef: i,
                    handleMouseEnter: r.useCallback(() => {
                        t && ((s.current += 1), s.current % 4 == 0 && l());
                    }, [t, l]),
                }
            );
        })({ enabled: s }),
        { openGiftModal: _ } = (0, N.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: v.liQ.USER_PROFILE,
                section: v.JJy.USER_PROFILE,
                object: v.ZSU.BUTTON_ICON,
                objectType: v.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        u = r.useCallback(() => {
            _(), a?.();
        }, [_, a]);
    return (0, i.jsx)("div", {
        ref: o,
        onMouseEnter: l,
        children: (0, i.jsx)(d.K, {
            size: "sm",
            variant: "icon-only",
            icon: S.o,
            "aria-label": D.intl.string(D.t.PEjaCx),
            onClick: u,
        }),
    });
}
var b = n(788868),
    w = n(831111);
let P = (0, p.createChannelRecord)({ id: "1", type: v.rbe.DM });
function k(e) {
    let { user: t, guildId: s, channelId: p, onClose: S, disableAutoFocus: N = !1, upsell: C = !1 } = e,
        { newestAnalyticsLocation: R, analyticsLocations: O } = (0, u.Ay)(),
        { trackUserProfileAction: y } = (0, I.NJ)(),
        v = (0, g.j)("UserProfilePopoutDirectMessageSection"),
        [k, M] = r.useState(""),
        [U, x] = r.useState((0, E.x7)(k)),
        G = r.useRef(!1),
        V = r.useRef(null),
        F = r.useRef(null),
        { Component: B } = (0, o.V)(),
        H = r.useMemo(() => ({ ...c.oU.USER_PROFILE, disableAutoFocus: N }), [N]),
        j = r.useCallback(async () => {
            (0, f.xs)(t.id),
                await _.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, giftIntentType: b.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: O });
                });
        }, [t.id, O]),
        W = r.useCallback(
            () =>
                (0, i.jsxs)("div", {
                    className: w.Uo,
                    children: [
                        (0, i.jsx)(d.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: B,
                            "aria-label": D.intl.string(D.t.I61IsE),
                            onClick: j,
                        }),
                        (0, i.jsx)(L, { user: t, analyticsLocations: O, onClose: S, confettiEnabled: C }),
                    ],
                }),
            [B, j, t, O, S, C],
        );
    return (0, i.jsx)(h.Ay, {
        className: a()(w.kL, { [w.UX]: C }),
        editorClassName: w.EN,
        type: H,
        placeholder: D.intl.formatToPlainString(D.t["0ZQw/X"], { name: A.Ay.getName(s, p, t) }),
        channel: P,
        textValue: k,
        richValue: U,
        onChange: (e, t, n) => {
            t !== k && (M(t), x(n));
        },
        focused: G.current,
        onFocus: () => {
            G.current = !0;
        },
        onBlur: () => {
            G.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e,
                i = n.trim();
            if ("" === i) return { shouldClear: !1, shouldRefocus: !0 };
            (V.current !== i || null == F.current) && ((V.current = i), (F.current = (0, m.m)()));
            try {
                return (
                    y({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, T.p)({
                        userId: t.id,
                        content: i,
                        openChannel: !0,
                        whenReady: !0,
                        location: R,
                        nonce: F.current ?? void 0,
                    }),
                    (V.current = null),
                    (F.current = null),
                    S?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: C || v ? W : void 0,
    });
}
