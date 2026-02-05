n.d(t, { V: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(311907),
    d = n(367513),
    c = n(688810),
    u = n(313961),
    h = n(384059),
    A = n(222823),
    g = n(309010),
    m = n(741961),
    p = n(234320),
    _ = n(20465),
    x = n(108460),
    f = n(709562),
    E = n(652215),
    C = n(985018);
function I(e) {
    let t = (0, o.bG)([m.A], () => !(0, r.isEmpty)(m.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([g.A], () => g.A.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: l } = (0, o.cf)(
            [A.Ay],
            () => ({ unreadCount: A.Ay.getUnreadCount(e), mentionCount: A.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: i, mentionCount: l, voiceChannelIsSelected: n, isTyping: t };
}
function S(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = I(n);
    return (0, i.jsx)(x.A, { className: t, unreadCount: l, mentionCount: s, isTyping: a, canBadge: r });
}
function b(e) {
    let t,
        {
            channelId: n,
            className: s,
            showingClassName: r,
            onClick: A,
            inPopout: g,
            showRequestToSpeakSidebar: m,
            toggleRequestToSpeakSidebar: x,
            ...b
        } = e,
        { parentAnalyticsLocation: N } = (0, c.Ay)(),
        { disabled: T } = b,
        j = l.useRef(null),
        v = (0, o.bG)([u.A], () => u.A.getChatOpen(n), [n]),
        {
            isShowing: y,
            unreadCount: R,
            mentionCount: O,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = I(e),
                [s, a] = l.useState(!1);
            return (
                l.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, _.R);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                { isShowing: s || n > 0 || i, unreadCount: t, mentionCount: n }
            );
        })(n),
        L = l.useCallback(() => {
            (0, h.X)(N, h.O.CHAT, !v), A?.(), !v && m && x?.(), d.A.updateChatOpen(n, !v, "toggle chat button");
        }, [n, v, A, m, x, N]),
        D = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(S, { className: t, channelId: n });
            },
            [n],
        ),
        M = l.useCallback(() => {
            j.current?.focus();
        }, []);
    (0, p.Vo)({ event: E.jej.FOCUS_CHAT_BUTTON, handler: T ? null : M });
    let [G, U] = l.useState(!1),
        P = l.useCallback(() => {
            g && U(!0);
        }, [g]);
    (0, p.Vo)({ event: E.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: P }),
        l.useEffect(() => {
            let e;
            return (
                G &&
                    (e = setTimeout(() => {
                        U(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [G]);
    let k = [(t = g && T ? C.intl.string(C.t.DPgc5h) : v ? C.intl.string(C.t.nthdxB) : C.intl.string(C.t["5KxXrK"]))];
    return (
        O > 0 && k.push(C.intl.formatToPlainString(C.t["3l1GOx"], { mentionCount: O })),
        R > 0 && k.push(C.intl.string(C.t.x5zAGZ)),
        (0, i.jsx)(f.A, {
            buttonRef: j,
            onClick: L,
            label: t,
            "aria-label": k.join(", "),
            iconComponent: D,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: y }),
            forceTooltipOpen: G,
            ...b,
        })
    );
}
