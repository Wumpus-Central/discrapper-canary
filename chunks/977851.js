(t.d(n, { V: () => T }), t(321073));
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(435558),
    r = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(198052),
    A = t(384059),
    h = t(573163),
    m = t(309010),
    C = t(741961),
    p = t(234320),
    x = t(20465),
    g = t(108460),
    f = t(204651),
    E = t(652215),
    I = t(660183);
function v(e) {
    let n = (0, r.bG)([C.A], () => !(0, o.isEmpty)(C.A.getTypingUsers(e)), [e]),
        t = (0, r.bG)([m.Ay], () => m.Ay.getVoiceChannelId() === e, [e]),
        { unreadCount: l, mentionCount: i } = (0, r.cf)(
            [h.Ay],
            () => ({ unreadCount: h.Ay.getUnreadCount(e), mentionCount: h.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: l, mentionCount: i, voiceChannelIsSelected: t, isTyping: n };
}
function j(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: i, mentionCount: a, isTyping: s, voiceChannelIsSelected: o } = v(t);
    return (0, l.jsx)(g.A, { className: n, unreadCount: i, mentionCount: a, isTyping: s, canBadge: o });
}
function T(e) {
    let n,
        {
            channelId: t,
            className: a,
            showingClassName: o,
            onClick: h,
            inPopout: m,
            showRequestToSpeakSidebar: C,
            toggleRequestToSpeakSidebar: g,
            ...T
        } = e,
        { parentAnalyticsLocation: N } = (0, u.Ay)(),
        { disabled: _ } = T,
        O = i.useRef(null),
        b = (0, r.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: y,
            unreadCount: S,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: l } = v(e),
                [a, s] = i.useState(!1);
            return (
                i.useEffect(() => {
                    s(n > 0);
                    let e = setTimeout(() => {
                        s(!1);
                    }, x.R);
                    return () => {
                        (clearTimeout(e), s(!1));
                    };
                }, [n]),
                { isShowing: a || t > 0 || l, unreadCount: n, mentionCount: t }
            );
        })(t),
        D = i.useCallback(() => {
            ((0, A.X)(N, A.O.CHAT, !b), h?.(), !b && C && g?.(), c.A.updateChatOpen(t, !b));
        }, [t, b, h, C, g, N]),
        L = i.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, l.jsx)(j, { className: n, channelId: t });
            },
            [t],
        ),
        M = i.useCallback(() => {
            O.current?.focus();
        }, []);
    (0, p.Vo)({ event: E.jej.FOCUS_CHAT_BUTTON, handler: _ ? null : M });
    let [P, k] = i.useState(!1),
        U = i.useCallback(() => {
            m && k(!0);
        }, [m]);
    ((0, p.Vo)({ event: E.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: U }),
        i.useEffect(() => {
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
    let G = [(n = m && _ ? I.intl.string(I.t.DPgc5h) : b ? I.intl.string(I.t.nthdxB) : I.intl.string(I.t["5KxXrK"]))];
    return (
        R > 0 && G.push(I.intl.formatToPlainString(I.t["3l1GOx"], { mentionCount: R })),
        S > 0 && G.push(I.intl.string(I.t.x5zAGZ)),
        (0, l.jsx)(f.A, {
            buttonRef: O,
            onClick: D,
            label: n,
            "aria-label": G.join(", "),
            iconComponent: L,
            tooltipPosition: "bottom",
            wrapperClassName: s()(a, null != o && { [o]: y }),
            forceTooltipOpen: P,
            ...T,
        })
    );
}
