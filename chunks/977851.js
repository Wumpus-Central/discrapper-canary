(t.d(n, { V: () => j }), t(321073));
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(435558),
    o = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(198052),
    A = t(384059),
    m = t(573163),
    h = t(309010),
    C = t(741961),
    p = t(234320),
    g = t(20465),
    E = t(108460),
    f = t(204651),
    x = t(652215),
    v = t(375708);
function I(e) {
    let n = (0, o.bG)([C.A], () => !(0, r.isEmpty)(C.A.getTypingUsers(e)), [e]),
        t = (0, o.bG)([h.Ay], () => h.Ay.getVoiceChannelId() === e, [e]),
        { unreadCount: l, mentionCount: i } = (0, o.cf)(
            [m.Ay],
            () => ({ unreadCount: m.Ay.getUnreadCount(e), mentionCount: m.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: l, mentionCount: i, voiceChannelIsSelected: t, isTyping: n };
}
function T(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: i, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = I(t);
    return (0, l.jsx)(E.A, { className: n, unreadCount: i, mentionCount: s, isTyping: a, canBadge: r });
}
function j(e) {
    let n,
        {
            channelId: t,
            className: s,
            showingClassName: r,
            onClick: m,
            inPopout: h,
            showRequestToSpeakSidebar: C,
            toggleRequestToSpeakSidebar: E,
            ...j
        } = e,
        { parentAnalyticsLocation: N } = (0, u.Ay)(),
        { disabled: _ } = j,
        b = i.useRef(null),
        O = (0, o.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: S,
            unreadCount: y,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: l } = I(e),
                [s, a] = i.useState(!1);
            return (
                i.useEffect(() => {
                    a(n > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, g.R);
                    return () => {
                        (clearTimeout(e), a(!1));
                    };
                }, [n]),
                { isShowing: s || t > 0 || l, unreadCount: n, mentionCount: t }
            );
        })(t),
        M = i.useCallback(() => {
            ((0, A.X)(N, A.O.CHAT, !O), m?.(), !O && C && E?.(), c.A.updateChatOpen(t, !O));
        }, [t, O, m, C, E, N]),
        L = i.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, l.jsx)(T, { className: n, channelId: t });
            },
            [t],
        ),
        D = i.useCallback(() => {
            b.current?.focus();
        }, []);
    (0, p.Vo)({ event: x.jej.FOCUS_CHAT_BUTTON, handler: _ ? null : D });
    let [P, k] = i.useState(!1),
        G = i.useCallback(() => {
            h && k(!0);
        }, [h]);
    ((0, p.Vo)({ event: x.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: G }),
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
    let U = [(n = h && _ ? v.intl.string(v.t.DPgc5h) : O ? v.intl.string(v.t.nthdxB) : v.intl.string(v.t["5KxXrK"]))];
    return (
        R > 0 && U.push(v.intl.formatToPlainString(v.t["3l1GOx"], { mentionCount: R })),
        y > 0 && U.push(v.intl.string(v.t.x5zAGZ)),
        (0, l.jsx)(f.A, {
            buttonRef: b,
            onClick: M,
            label: n,
            "aria-label": U.join(", "),
            iconComponent: L,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: S }),
            forceTooltipOpen: P,
            ...j,
        })
    );
}
