t.d(n, { V: () => _ }), t(321073);
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(435558),
    o = t(17928),
    c = t(367513),
    u = t(688810),
    d = t(198052),
    A = t(384059),
    m = t(573163),
    h = t(309010),
    C = t(741961),
    E = t(234320),
    f = t(20465),
    p = t(108460),
    g = t(204651),
    x = t(652215),
    I = t(375708);
function v(e) {
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
        { unreadCount: i, mentionCount: a, isTyping: s, voiceChannelIsSelected: r } = v(t);
    return (0, l.jsx)(p.A, { className: n, unreadCount: i, mentionCount: a, isTyping: s, canBadge: r });
}
function _(e) {
    let n,
        {
            channelId: t,
            className: a,
            showingClassName: r,
            onClick: m,
            inPopout: h,
            showRequestToSpeakSidebar: C,
            toggleRequestToSpeakSidebar: p,
            ..._
        } = e,
        { parentAnalyticsLocation: N } = (0, u.Ay)(),
        { disabled: j } = _,
        b = i.useRef(null),
        S = (0, o.bG)([d.A], () => d.A.getChatOpen(t), [t]),
        {
            isShowing: O,
            unreadCount: y,
            mentionCount: R,
        } = (function (e) {
            let { unreadCount: n, mentionCount: t, isTyping: l } = v(e),
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
        M = i.useCallback(() => {
            (0, A.X)(N, A.O.CHAT, !S), m?.(), !S && C && p?.(), c.A.updateChatOpen(t, !S);
        }, [t, S, m, C, p, N]),
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
    (0, E.Vo)({ event: x.jej.FOCUS_CHAT_BUTTON, handler: j ? null : D });
    let [P, G] = i.useState(!1),
        k = i.useCallback(() => {
            h && G(!0);
        }, [h]);
    (0, E.Vo)({ event: x.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: k }),
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
    let V = [(n = h && j ? I.intl.string(I.t.DPgc5h) : S ? I.intl.string(I.t.nthdxB) : I.intl.string(I.t["5KxXrK"]))];
    return (
        R > 0 && V.push(I.intl.formatToPlainString(I.t["3l1GOx"], { mentionCount: R })),
        y > 0 && V.push(I.intl.string(I.t.x5zAGZ)),
        (0, l.jsx)(g.A, {
            buttonRef: b,
            onClick: M,
            label: n,
            "aria-label": V.join(", "),
            iconComponent: L,
            tooltipPosition: "bottom",
            wrapperClassName: s()(a, null != r && { [r]: O }),
            forceTooltipOpen: P,
            ..._,
        })
    );
}
