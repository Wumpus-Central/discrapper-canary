n.d(t, { A: () => j });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(3203),
    s = n(192308),
    c = n(408278),
    u = n(308528),
    d = n(688810),
    f = n(355622),
    _ = n(408018),
    h = n(133343),
    A = n(195880),
    p = n(45787),
    m = n(746174),
    S = n(95701),
    g = n(562153),
    b = n(183555),
    x = n(448613),
    T = n(633572),
    E = n(652215),
    R = n(788868),
    v = n(985018),
    C = n(831111);
let y = (0, S.createChannelRecord)({ id: "1", type: E.rbe.DM });
function j(e) {
    let { user: t, guildId: l, channelId: S, onClose: E, disableAutoFocus: j = !1, upsell: I = !1 } = e,
        { newestAnalyticsLocation: L, analyticsLocations: P } = (0, d.Ay)(),
        { trackUserProfileAction: N } = (0, b.NJ)(),
        U = (0, m.j)("UserProfilePopoutDirectMessageSection"),
        [w, k] = r.useState(""),
        [M, O] = r.useState((0, _.x7)(w)),
        V = r.useRef(!1),
        $ = r.useRef(null),
        F = r.useRef(null),
        { Component: D } = (0, o.V)(),
        G = r.useMemo(() => ({ ...f.oU.USER_PROFILE, disableAutoFocus: j }), [j]),
        B = r.useCallback(async () => {
            (0, p.xs)(t.id),
                await u.A.openPrivateChannel({ recipientIds: [t.id] }),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                    return (t) =>
                        (0, a.jsx)(e, { ...t, giftIntentType: R.np.FRIEND_ANNIVERSARY, analyticsLocationHistory: P });
                });
        }, [t.id, P]),
        H = r.useCallback(
            () =>
                (0, a.jsxs)("div", {
                    className: C.Uo,
                    children: [
                        (0, a.jsx)(c.K, {
                            size: "sm",
                            variant: "icon-only",
                            icon: D,
                            "aria-label": v.intl.string(v.t.I61IsE),
                            onClick: B,
                        }),
                        (0, a.jsx)(T.A, { user: t, analyticsLocations: P, onClose: E, confettiEnabled: I }),
                    ],
                }),
            [D, B, t, P, E, I],
        );
    return (0, a.jsx)(h.Ay, {
        className: i()(C.kL, { [C.UX]: I }),
        editorClassName: C.EN,
        type: G,
        placeholder: v.intl.formatToPlainString(v.t["0ZQw/X"], { name: g.Ay.getName(l, S, t) }),
        channel: y,
        textValue: w,
        richValue: M,
        onChange: (e, t, n) => {
            t !== w && (k(t), O(n));
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
            ($.current !== a || null == F.current) && (($.current = a), (F.current = (0, A.m)()));
            try {
                return (
                    N({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, x.p)({
                        userId: t.id,
                        content: a,
                        openChannel: !0,
                        whenReady: !0,
                        location: L,
                        nonce: F.current ?? void 0,
                    }),
                    ($.current = null),
                    (F.current = null),
                    E?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
        renderButtons: I || U ? H : void 0,
    });
}
