"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(3203),
    l = n(192308),
    u = n(408278),
    c = n(308528),
    d = n(688810),
    _ = n(355622),
    f = n(408018),
    p = n(133343),
    h = n(195880),
    E = n(45787),
    m = n(746174),
    g = n(95701),
    A = n(562153),
    I = n(183555),
    T = n(448613),
    S = n(633572),
    y = n(652215),
    N = n(788868),
    v = n(985018),
    C = n(831111);
let O = (0, g.createChannelRecord)({ id: "1", type: y.rbe.DM });
function R(e) {
    let { user: t, guildId: s, channelId: g, onClose: y, disableAutoFocus: R = !1, upsell: b = !1 } = e,
        { newestAnalyticsLocation: D, analyticsLocations: L } = (0, d.Ay)(),
        { trackUserProfileAction: w } = (0, I.NJ)(),
        M = (0, m.j)("UserProfilePopoutDirectMessageSection"),
        [P, x] = i.useState(""),
        [k, U] = i.useState((0, f.x7)(P)),
        G = i.useRef(!1),
        F = i.useRef(null),
        V = i.useRef(null),
        { Component: B } = (0, o.V)(),
        H = i.useMemo(() => ({ ..._.oU.USER_PROFILE, disableAutoFocus: R }), [R]),
        j = i.useCallback(async () => {
            (0, E.xs)(t.id),
                await c.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, giftIntentType: N.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: L });
                });
        }, [t.id, L]),
        Y = i.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: C.Uo,
                    children: [
                        (0, r.jsx)(u.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: B,
                            "aria-label": v.intl.string(v.t.I61IsE),
                            onClick: j,
                        }),
                        (0, r.jsx)(S.A, { user: t, analyticsLocations: L, onClose: y, confettiEnabled: b }),
                    ],
                }),
            [B, j, t, L, y, b],
        );
    return (0, r.jsx)(p.Ay, {
        className: a()(C.kL, { [C.UX]: b }),
        editorClassName: C.EN,
        type: H,
        placeholder: v.intl.formatToPlainString(v.t["0ZQw/X"], { name: A.Ay.getName(s, g, t) }),
        channel: O,
        textValue: P,
        richValue: k,
        onChange: (e, t, n) => {
            t !== P && (x(t), U(n));
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
                r = n.trim();
            if ("" === r) return { shouldClear: !1, shouldRefocus: !0 };
            (F.current !== r || null == V.current) && ((F.current = r), (V.current = (0, h.m)()));
            try {
                return (
                    w({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, T.p)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: D,
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
        renderButtons: b || M ? Y : void 0,
    });
}
