(t.d(n, { V: () => N }), t(321073));
var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(435558),
    o = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(198052),
    A = t(384059),
    h = t(573163),
    m = t(309010),
    g = t(741961),
    x = t(234320),
    C = t(20465),
    f = t(108460),
    p = t(204651),
    E = t(652215),
    j = t(105292);
function v(e) {
    let n = (0, o.bG)([g.A], () => !(0, r.isEmpty)(g.A.getTypingUsers(e)), [e]),
        t = (0, o.bG)([m.Ay], () => m.Ay.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: l } = (0, o.cf)(
            [h.Ay],
            () => ({ unreadCount: h.Ay.getUnreadCount(e), mentionCount: h.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: i, mentionCount: l, voiceChannelIsSelected: t, isTyping: n };
}
function I(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: l, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = v(t);
    return (0, i.jsx)(f.A, { className: n, unreadCount: l, mentionCount: s, isTyping: a, canBadge: r });
}
function N(e) {
    let n,
        {
            channelId: t,
            className: s,
            showingClassName: r,
            onClick: h,
            inPopout: m,
            showRequestToSpeakSidebar: g,
            toggleRequestToSpeakSidebar: f,
            ...N
        } = e,
        { parentAnalyticsLocation: T } = (0, u.Ay)(),
        { disabled: _ } = N,
        b = l.useRef(null),
        S = (0, o.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: y,
            unreadCount: O,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: i } = v(e),
                [s, a] = l.useState(!1);
            return (
                l.useEffect(() => {
                    a(n > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, C.R);
                    return () => {
                        (clearTimeout(e), a(!1));
                    };
                }, [n]),
                { isShowing: s || t > 0 || i, unreadCount: n, mentionCount: t }
            );
        })(t),
        L = l.useCallback(() => {
            ((0, A.X)(T, A.O.CHAT, !S), h?.(), !S && g && f?.(), c.A.updateChatOpen(t, !S));
        }, [t, S, h, g, f, T]),
        D = l.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, i.jsx)(I, { className: n, channelId: t });
            },
            [t],
        ),
        M = l.useCallback(() => {
            b.current?.focus();
        }, []);
    (0, x.Vo)({ event: E.jej.FOCUS_CHAT_BUTTON, handler: _ ? null : M });
    let [G, P] = l.useState(!1),
        k = l.useCallback(() => {
            m && P(!0);
        }, [m]);
    ((0, x.Vo)({ event: E.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: k }),
        l.useEffect(() => {
            let e;
            return (
                G &&
                    (e = setTimeout(() => {
                        P(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [G]));
    let U = [(n = m && _ ? j.intl.string(j.t.DPgc5h) : S ? j.intl.string(j.t.nthdxB) : j.intl.string(j.t["5KxXrK"]))];
    return (
        R > 0 && U.push(j.intl.formatToPlainString(j.t["3l1GOx"], { mentionCount: R })),
        O > 0 && U.push(j.intl.string(j.t.x5zAGZ)),
        (0, i.jsx)(p.A, {
            buttonRef: b,
            onClick: L,
            label: n,
            "aria-label": U.join(", "),
            iconComponent: D,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: y }),
            forceTooltipOpen: G,
            ...N,
        })
    );
}
