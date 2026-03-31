n.d(t, { V: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(311907),
    c = n(367513),
    d = n(688810),
    u = n(313961),
    h = n(384059),
    A = n(222823),
    _ = n(309010),
    m = n(741961),
    g = n(234320),
    p = n(20465),
    f = n(108460),
    x = n(709562),
    E = n(652215),
    I = n(985018);
function C(e) {
    let t = (0, o.bG)([m.A], () => !(0, r.isEmpty)(m.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([_.A], () => _.A.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: l } = (0, o.cf)(
            [A.Ay],
            () => ({ unreadCount: A.Ay.getUnreadCount(e), mentionCount: A.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: i, mentionCount: l, voiceChannelIsSelected: n, isTyping: t };
}
function N(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = C(n);
    return (0, i.jsx)(f.A, { className: t, unreadCount: l, mentionCount: s, isTyping: a, canBadge: r });
}
function T(e) {
    let t,
        {
            channelId: n,
            className: s,
            showingClassName: r,
            onClick: A,
            inPopout: _,
            showRequestToSpeakSidebar: m,
            toggleRequestToSpeakSidebar: f,
            ...T
        } = e,
        { parentAnalyticsLocation: S } = (0, d.Ay)(),
        { disabled: b } = T,
        y = l.useRef(null),
        v = (0, o.bG)([u.A], () => u.A.getChatOpen(n), [n]),
        {
            isShowing: j,
            unreadCount: R,
            mentionCount: O,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = C(e),
                [s, a] = l.useState(!1);
            return (
                l.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, p.R);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                { isShowing: s || n > 0 || i, unreadCount: t, mentionCount: n }
            );
        })(n),
        L = l.useCallback(() => {
            (0, h.X)(S, h.O.CHAT, !v), A?.(), !v && m && f?.(), c.A.updateChatOpen(n, !v, "toggle chat button");
        }, [n, v, A, m, f, S]),
        M = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(N, { className: t, channelId: n });
            },
            [n],
        ),
        D = l.useCallback(() => {
            y.current?.focus();
        }, []);
    (0, g.Vo)({ event: E.jej.FOCUS_CHAT_BUTTON, handler: b ? null : D });
    let [U, G] = l.useState(!1),
        P = l.useCallback(() => {
            _ && G(!0);
        }, [_]);
    (0, g.Vo)({ event: E.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: P }),
        l.useEffect(() => {
            let e;
            return (
                U &&
                    (e = setTimeout(() => {
                        G(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [U]);
    let k = [(t = _ && b ? I.intl.string(I.t.DPgc5h) : v ? I.intl.string(I.t.nthdxB) : I.intl.string(I.t["5KxXrK"]))];
    return (
        O > 0 && k.push(I.intl.formatToPlainString(I.t["3l1GOx"], { mentionCount: O })),
        R > 0 && k.push(I.intl.string(I.t.x5zAGZ)),
        (0, i.jsx)(x.A, {
            buttonRef: y,
            onClick: L,
            label: t,
            "aria-label": k.join(", "),
            iconComponent: M,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: j }),
            forceTooltipOpen: U,
            ...T,
        })
    );
}
