t.d(n, { V: () => _ }), t(321073);
var l = t(627968),
    i = t(64700),
    a = t(503698),
    s = t.n(a),
    r = t(735438),
    o = t(311907),
    c = t(367513),
    u = t(688810),
    d = t(313961),
    A = t(384059),
    h = t(222823),
    p = t(309010),
    m = t(741961),
    g = t(234320),
    f = t(20465),
    C = t(108460),
    E = t(709562),
    v = t(652215),
    I = t(985018);
function x(e) {
    let n = (0, o.bG)([m.A], () => !(0, r.isEmpty)(m.A.getTypingUsers(e)), [e]),
        t = (0, o.bG)([p.A], () => p.A.getVoiceChannelId() === e, [e]),
        { unreadCount: l, mentionCount: i } = (0, o.cf)(
            [h.Ay],
            () => ({ unreadCount: h.Ay.getUnreadCount(e), mentionCount: h.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: l, mentionCount: i, voiceChannelIsSelected: t, isTyping: n };
}
function T(e) {
    let { className: n, channelId: t } = e,
        { unreadCount: i, mentionCount: a, isTyping: s, voiceChannelIsSelected: r } = x(t);
    return (0, l.jsx)(C.A, { className: n, unreadCount: i, mentionCount: a, isTyping: s, canBadge: r });
}
function _(e) {
    let n,
        {
            channelId: t,
            className: a,
            showingClassName: r,
            onClick: h,
            inPopout: p,
            showRequestToSpeakSidebar: m,
            toggleRequestToSpeakSidebar: C,
            ..._
        } = e,
        { parentAnalyticsLocation: j } = (0, u.Ay)(),
        { disabled: N } = _,
        b = i.useRef(null),
        y = (0, o.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: S,
            unreadCount: O,
            mentionCount: L,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: l } = x(e),
                [a, s] = i.useState(!1);
            return (
                i.useEffect(() => {
                    s(n > 0);
                    let e = setTimeout(() => {
                        s(!1);
                    }, f.R);
                    return () => {
                        clearTimeout(e), s(!1);
                    };
                }, [n]),
                { isShowing: a || t > 0 || l, unreadCount: n, mentionCount: t }
            );
        })(t),
        R = i.useCallback(() => {
            (0, A.X)(j, A.O.CHAT, !y), h?.(), !y && m && C?.(), c.A.updateChatOpen(t, !y, "toggle chat button");
        }, [t, y, h, m, C, j]),
        M = i.useCallback(
            (e) => {
                let { className: n } = e;
                return (0, l.jsx)(T, { className: n, channelId: t });
            },
            [t],
        ),
        D = i.useCallback(() => {
            b.current?.focus();
        }, []);
    (0, g.Vo)({ event: v.jej.FOCUS_CHAT_BUTTON, handler: N ? null : D });
    let [P, G] = i.useState(!1),
        k = i.useCallback(() => {
            p && G(!0);
        }, [p]);
    (0, g.Vo)({ event: v.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: k }),
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
    let V = [(n = p && N ? I.intl.string(I.t.DPgc5h) : y ? I.intl.string(I.t.nthdxB) : I.intl.string(I.t["5KxXrK"]))];
    return (
        L > 0 && V.push(I.intl.formatToPlainString(I.t["3l1GOx"], { mentionCount: L })),
        O > 0 && V.push(I.intl.string(I.t.x5zAGZ)),
        (0, l.jsx)(E.A, {
            buttonRef: b,
            onClick: R,
            label: n,
            "aria-label": V.join(", "),
            iconComponent: M,
            tooltipPosition: "bottom",
            wrapperClassName: s()(a, null != r && { [r]: S }),
            forceTooltipOpen: P,
            ..._,
        })
    );
}
