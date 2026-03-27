"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(3203),
    l = n(397927),
    u = n(308528),
    c = n(688810),
    d = n(355622),
    _ = n(408018),
    f = n(133343),
    p = n(195880),
    h = n(45787),
    m = n(746174),
    E = n(95701),
    g = n(562153),
    A = n(183555),
    I = n(448613),
    T = n(633572),
    S = n(652215),
    y = n(788868),
    v = n(985018),
    N = n(599159);
let C = (0, E.createChannelRecord)({ id: "1", type: S.rbe.DM });
function R(e) {
    let { user: t, guildId: s, channelId: E, onClose: S, disableAutoFocus: R = !1, upsell: O = !1 } = e,
        { newestAnalyticsLocation: b, analyticsLocations: D } = (0, c.Ay)(),
        { trackUserProfileAction: L } = (0, A.NJ)(),
        w = (0, m.j)("UserProfilePopoutDirectMessageSection"),
        [M, x] = i.useState(""),
        [P, k] = i.useState((0, _.x7)(M)),
        U = i.useRef(!1),
        G = i.useRef(null),
        F = i.useRef(null),
        { Component: V } = (0, o.V)(),
        B = i.useMemo(() => ({ ...d.oU.USER_PROFILE, disableAutoFocus: R }), [R]),
        H = i.useCallback(async () => {
            (0, h.xs)(t.id),
                await u.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, giftIntentType: y.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: D });
                });
        }, [t.id, D]),
        j = i.useCallback(
            () =>
                (0, r.jsxs)("div", {
                    className: N.Uo,
                    children: [
                        (0, r.jsx)(l.K0, {
                            size: "sm",
                            variant: "icon-only",
                            icon: V,
                            "aria-label": v.intl.string(v.t.I61IsE),
                            onClick: H,
                        }),
                        (0, r.jsx)(T.A, { user: t, analyticsLocations: D, onClose: S, confettiEnabled: O }),
                    ],
                }),
            [V, H, t, D, S, O],
        );
    return (0, r.jsx)(f.Ay, {
        className: a()(N.kL, { [N.UX]: O }),
        editorClassName: N.EN,
        type: B,
        placeholder: v.intl.formatToPlainString(v.t["0ZQw/X"], { name: g.Ay.getName(s, E, t) }),
        channel: C,
        textValue: M,
        richValue: P,
        onChange: (e, t, n) => {
            t !== M && (x(t), k(n));
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
            (G.current !== r || null == F.current) && ((G.current = r), (F.current = (0, p.m)()));
            try {
                return (
                    L({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, I.p)({
                        userId: t.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: b,
                        nonce: F.current ?? void 0,
                    }),
                    (G.current = null),
                    (F.current = null),
                    S?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: O || w ? j : void 0,
    });
}
