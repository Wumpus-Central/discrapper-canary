(t.d(n, { V: () => j }), t(321073));
var i = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(435558),
    r = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(198052),
    A = t(384059),
    m = t(573163),
    h = t(309010),
    C = t(741961),
    p = t(234320),
    x = t(20465),
    g = t(108460),
    f = t(204651),
    E = t(652215),
    I = t(375708);
function v(e) {
    let n = (0, r.bG)([C.A], () => !(0, o.isEmpty)(C.A.getTypingUsers(e)), [e]),
        t = (0, r.bG)([h.Ay], () => h.Ay.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: l } = (0, r.cf)(
            [m.Ay],
            () => ({ unreadCount: m.Ay.getUnreadCount(e), mentionCount: m.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: i, mentionCount: l, voiceChannelIsSelected: t, isTyping: n };
}
function T(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: l, mentionCount: a, isTyping: s, voiceChannelIsSelected: o } = v(t);
    return (0, i.jsx)(g.A, { className: n, unreadCount: l, mentionCount: a, isTyping: s, canBadge: o });
}
function j(e) {
    let n,
        {
            channelId: t,
            className: a,
            showingClassName: o,
            onClick: m,
            inPopout: h,
            showRequestToSpeakSidebar: C,
            toggleRequestToSpeakSidebar: g,
            ...j
        } = e,
        { parentAnalyticsLocation: N } = (0, u.Ay)(),
        { disabled: _ } = j,
        O = l.useRef(null),
        b = (0, r.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: y,
            unreadCount: S,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: i } = v(e),
                [a, s] = l.useState(!1);
            return (
                l.useEffect(() => {
                    s(n > 0);
                    let e = setTimeout(() => {
                        s(!1);
                    }, x.R);
                    return () => {
                        (clearTimeout(e), s(!1));
                    };
                }, [n]),
                { isShowing: a || t > 0 || i, unreadCount: n, mentionCount: t }
            );
        })(t),
        D = l.useCallback(() => {
            ((0, A.X)(N, A.O.CHAT, !b), m?.(), !b && C && g?.(), c.A.updateChatOpen(t, !b));
        }, [t, b, m, C, g, N]),
        L = l.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, i.jsx)(T, { className: n, channelId: t });
            },
            [t],
        ),
        M = l.useCallback(() => {
            O.current?.focus();
        }, []);
    (0, p.Vo)({ event: E.jej.FOCUS_CHAT_BUTTON, handler: _ ? null : M });
    let [P, k] = l.useState(!1),
        U = l.useCallback(() => {
            h && k(!0);
        }, [h]);
    ((0, p.Vo)({ event: E.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: U }),
        l.useEffect(() => {
            let e;
            return (
                P &&
                    (e = setTimeout(() => {
                        k(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [P]));
    let G = [(n = h && _ ? I.intl.string(I.t.DPgc5h) : b ? I.intl.string(I.t.nthdxB) : I.intl.string(I.t["5KxXrK"]))];
    return (
        R > 0 && G.push(I.intl.formatToPlainString(I.t["3l1GOx"], { mentionCount: R })),
        S > 0 && G.push(I.intl.string(I.t.x5zAGZ)),
        (0, i.jsx)(f.A, {
            buttonRef: O,
            onClick: D,
            label: n,
            "aria-label": G.join(", "),
            iconComponent: L,
            tooltipPosition: "bottom",
            wrapperClassName: s()(a, null != o && { [o]: y }),
            forceTooltipOpen: P,
            ...j,
        })
    );
}
