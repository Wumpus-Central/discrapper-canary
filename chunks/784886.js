"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(3203),
    l = n(397927),
    u = n(308528),
    c = n(688810),
    d = n(355622),
    _ = n(408018),
    f = n(133343),
    p = n(195880),
    h = n(45787),
    m = n(95701),
    g = n(562153),
    E = n(183555),
    A = n(448613),
    I = n(633572),
    T = n(652215),
    y = n(788868),
    S = n(985018),
    v = n(787288);
let C = (0, m.createChannelRecord)({ id: "1", type: T.rbe.DM });
function b(e) {
    let { user: t, guildId: a, channelId: m, onClose: T, disableAutoFocus: b = !1, upsell: N = !1 } = e,
        { newestAnalyticsLocation: R, analyticsLocations: O } = (0, c.Ay)(),
        { trackUserProfileAction: D } = (0, E.NJ)(),
        [L, w] = i.useState(""),
        [x, P] = i.useState((0, _.x7)(L)),
        M = i.useRef(!1),
        k = i.useRef(null),
        U = i.useRef(null),
        { Component: G } = (0, o.V)(),
        V = i.useMemo(() => ({ ...d.oU.USER_PROFILE, disableAutoFocus: b }), [b]),
        F = i.useCallback(async () => {
            (0, h.xs)(t.id),
                await u.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, giftIntentType: y.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: O });
                });
        }, [t.id, O]),
        B = i.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: v.Uo,
                    children: [
                        (0, r.jsx)(l.K0, {
                            size: "sm",
                            variant: "icon-only",
                            icon: G,
                            "aria-label": S.intl.string(S.t.I61IsE),
                            onClick: F,
                        }),
                        (0, r.jsx)(I.A, { user: t, analyticsLocations: O }),
                    ],
                }),
            [G, F, t, O],
        );
    return (0, r.jsx)(f.Ay, {
        className: s()(v.kL, { [v.UX]: N }),
        editorClassName: v.EN,
        type: V,
        placeholder: S.intl.formatToPlainString(S.t["0ZQw/X"], { name: g.Ay.getName(a, m, t) }),
        channel: C,
        textValue: L,
        richValue: x,
        onChange: (e, t, n) => {
            t !== L && (w(t), P(n));
        },
        focused: M.current,
        onFocus: () => {
            M.current = !0;
        },
        onBlur: () => {
            M.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e,
                r = n.trim();
            if ("" === r) return { shouldClear: !1, shouldRefocus: !0 };
            (k.current !== r || null == U.current) && ((k.current = r), (U.current = (0, p.m)()));
            try {
                return (
                    D({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, A.p)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: R,
                        nonce: U.current ?? void 0,
                    }),
                    (k.current = null),
                    (U.current = null),
                    T?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: N ? B : void 0,
    });
}
