"use strict";
n.d(t, { V: () => N }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(311907),
    c = n(367513),
    d = n(688810),
    u = n(313961),
    h = n(384059),
    A = n(222823),
    p = n(309010),
    g = n(741961),
    m = n(234320),
    _ = n(20465),
    f = n(108460),
    x = n(709562),
    C = n(652215),
    E = n(985018);
function I(e) {
    let t = (0, o.bG)([g.A], () => !(0, a.isEmpty)(g.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([p.A], () => p.A.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: s } = (0, o.cf)(
            [A.Ay],
            () => ({ unreadCount: A.Ay.getUnreadCount(e), mentionCount: A.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: i, mentionCount: s, voiceChannelIsSelected: n, isTyping: t };
}
function b(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: s, mentionCount: l, isTyping: r, voiceChannelIsSelected: a } = I(n);
    return (0, i.jsx)(f.A, { className: t, unreadCount: s, mentionCount: l, isTyping: r, canBadge: a });
}
function N(e) {
    let t,
        {
            channelId: n,
            className: l,
            showingClassName: a,
            onClick: A,
            inPopout: p,
            showRequestToSpeakSidebar: g,
            toggleRequestToSpeakSidebar: f,
            ...N
        } = e,
        { parentAnalyticsLocation: S } = (0, d.Ay)(),
        { disabled: T } = N,
        v = s.useRef(null),
        y = (0, o.bG)([u.A], () => u.A.getChatOpen(n), [n]),
        {
            isShowing: j,
            unreadCount: R,
            mentionCount: O,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = I(e),
                [l, r] = s.useState(!1);
            return (
                s.useEffect(() => {
                    r(t > 0);
                    let e = setTimeout(() => {
                        r(!1);
                    }, _.R);
                    return () => {
                        clearTimeout(e), r(!1);
                    };
                }, [t]),
                { isShowing: l || n > 0 || i, unreadCount: t, mentionCount: n }
            );
        })(n),
        L = s.useCallback(() => {
            (0, h.X)(S, h.O.CHAT, !y), A?.(), !y && g && f?.(), c.A.updateChatOpen(n, !y, "toggle chat button");
        }, [n, y, A, g, f, S]),
        M = s.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(b, { className: t, channelId: n });
            },
            [n],
        ),
        D = s.useCallback(() => {
            v.current?.focus();
        }, []);
    (0, m.Vo)({ event: C.jej.FOCUS_CHAT_BUTTON, handler: T ? null : D });
    let [G, U] = s.useState(!1),
        P = s.useCallback(() => {
            p && U(!0);
        }, [p]);
    (0, m.Vo)({ event: C.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: P }),
        s.useEffect(() => {
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
    let w = [(t = p && T ? E.intl.string(E.t.DPgc5h) : y ? E.intl.string(E.t.nthdxB) : E.intl.string(E.t["5KxXrK"]))];
    return (
        O > 0 && w.push(E.intl.formatToPlainString(E.t["3l1GOx"], { mentionCount: O })),
        R > 0 && w.push(E.intl.string(E.t.x5zAGZ)),
        (0, i.jsx)(x.A, {
            buttonRef: v,
            onClick: L,
            label: t,
            "aria-label": w.join(", "),
            iconComponent: M,
            tooltipPosition: "bottom",
            wrapperClassName: r()(l, null != a && { [a]: j }),
            forceTooltipOpen: G,
            ...N,
        })
    );
}
