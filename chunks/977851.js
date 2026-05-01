t.d(n, { V: () => _ }), t(321073);
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(735438),
    o = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(313961),
    A = t(384059),
    h = t(222823),
    m = t(309010),
    C = t(741961),
    E = t(234320),
    p = t(20465),
    g = t(108460),
    x = t(204651),
    I = t(652215),
    f = t(375708);
function T(e) {
    let n = (0, o.bG)([C.A], () => !(0, r.isEmpty)(C.A.getTypingUsers(e)), [e]),
        t = (0, o.bG)([m.A], () => m.A.getVoiceChannelId() === e, [e]),
        { unreadCount: l, mentionCount: i } = (0, o.cf)(
            [h.Ay],
            () => ({ unreadCount: h.Ay.getUnreadCount(e), mentionCount: h.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: l, mentionCount: i, voiceChannelIsSelected: t, isTyping: n };
}
function v(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: i, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = T(t);
    return (0, l.jsx)(g.A, { className: n, unreadCount: i, mentionCount: s, isTyping: a, canBadge: r });
}
function _(e) {
    let n,
        {
            channelId: t,
            className: s,
            showingClassName: r,
            onClick: h,
            inPopout: m,
            showRequestToSpeakSidebar: C,
            toggleRequestToSpeakSidebar: g,
            ..._
        } = e,
        { parentAnalyticsLocation: j } = (0, u.Ay)(),
        { disabled: N } = _,
        O = i.useRef(null),
        S = (0, o.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: b,
            unreadCount: y,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: l } = T(e),
                [s, a] = i.useState(!1);
            return (
                i.useEffect(() => {
                    a(n > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, p.R);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [n]),
                { isShowing: s || t > 0 || l, unreadCount: n, mentionCount: t }
            );
        })(t),
        L = i.useCallback(() => {
            (0, A.X)(j, A.O.CHAT, !S), h?.(), !S && C && g?.(), c.A.updateChatOpen(t, !S, "toggle chat button");
        }, [t, S, h, C, g, j]),
        M = i.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, l.jsx)(v, { className: n, channelId: t });
            },
            [t],
        ),
        D = i.useCallback(() => {
            O.current?.focus();
        }, []);
    (0, E.Vo)({ event: I.jej.FOCUS_CHAT_BUTTON, handler: N ? null : D });
    let [P, G] = i.useState(!1),
        k = i.useCallback(() => {
            m && G(!0);
        }, [m]);
    (0, E.Vo)({ event: I.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: k }),
        i.useEffect(() => {
            let e;
            return (
                P &&
                    (e = setTimeout(() => {
                        G(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [P]);
    let U = [(n = m && N ? f.intl.string(f.t.DPgc5h) : S ? f.intl.string(f.t.nthdxB) : f.intl.string(f.t["5KxXrK"]))];
    return (
        R > 0 && U.push(f.intl.formatToPlainString(f.t["3l1GOx"], { mentionCount: R })),
        y > 0 && U.push(f.intl.string(f.t.x5zAGZ)),
        (0, l.jsx)(x.A, {
            buttonRef: O,
            onClick: L,
            label: n,
            "aria-label": U.join(", "),
            iconComponent: M,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: b }),
            forceTooltipOpen: P,
            ..._,
        })
    );
}
