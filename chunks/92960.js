n.d(t, { Df: () => b, LB: () => y });
var i = n(367513),
    r = n(465532),
    a = n(148494),
    s = n(334738),
    l = n(198052),
    o = n(267102),
    d = n(118517),
    c = n(853145),
    u = n(138298),
    _ = n(940382),
    E = n(931664),
    A = n(631576),
    h = n(358047),
    f = n(734057),
    I = n(72314),
    p = n(31717),
    T = n(580745),
    m = n(232835),
    g = n(573163),
    S = n(309010),
    N = n(967198),
    C = n(712687),
    O = n(531685),
    R = n(625494),
    L = n(652215);
function y(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (O.A.isElementFullScreen()) return !1;
            if (R._.hasSubscribers(L.jej.CALL_DECLINE)) return (R._.dispatch(L.jej.CALL_DECLINE), !1);
            if (C.A.close()) return !1;
            if (R._.hasSubscribers(L.jej.MEDIA_MODAL_CLOSE)) return (R._.dispatch(L.jej.MEDIA_MODAL_CLOSE), !1);
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(L.jej.POPOUT_CLOSE)) return (n.dispatch(L.jej.POPOUT_CLOSE), !1);
            if (R._.hasSubscribers(L.jej.CLOSE_GIF_PICKER)) return (R._.dispatch(L.jej.CLOSE_GIF_PICKER), !1);
            if (R._.hasSubscribers(L.jej.MODAL_CLOSE)) return (R._.dispatch(L.jej.MODAL_CLOSE), !1);
            if (R._.hasSubscribers(L.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return (R._.dispatch(L.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1);
            if (R._.hasSubscribers(L.jej.SEARCH_RESULTS_CLOSE)) return (R._.dispatch(L.jej.SEARCH_RESULTS_CLOSE), !1);
            if (n?.hasSubscribers(L.jej.POPOUT_CLOSE_AFTER_MODALS))
                return (n.dispatch(L.jej.POPOUT_CLOSE_AFTER_MODALS), !1);
            let r = N.A.getGuildId(),
                a = e ?? S.Ay.getChannelId(r),
                s = f.A.getChannel(a),
                d = h.Ay.getSection(a, s?.isDM()) === L.YvQ.SIDEBAR_CHAT ? h.Ay.getSidebarState(a) : null,
                c = d?.type === _.PE.VIEW_CHANNEL ? d.channelId : null;
            if (!1 === D(a) || !1 === D(c)) return !1;
            if (R._.hasSubscribers(L.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL))
                return (R._.dispatch(L.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL), !1);
            if (R._.hasSubscribers(L.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE))
                return (R._.dispatch(L.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE), !1);
            if (null != a && d?.type === _.PE.CREATE_THREAD) return (u.A.closeChannelSidebar(a), !1);
            let E = v(a),
                A = v(c);
            return (
                null == a || E || A || null == d
                    ? null != a && !E && !1 !== I.A.isAtBottom(a) && l.A.getChatOpen(a)
                        ? i.A.updateChatOpen(a, !1)
                        : R._.dispatch(L.jej.SCROLLTO_PRESENT)
                    : u.A.closeChannelSidebar(a),
                !1
            );
        },
    };
}
function D(e) {
    if (null != e) {
        if (T.A.isEditingAny(e)) return (a.A.endEditMessage(e), !1);
        if (null != c.A.getPendingReply(e)) return ((0, d.Jx)(e), !1);
        if (null != p.A.getScheduledMessage(e)) return (r.A.clearDraft(e, p.C.ScheduledMessage), !1);
        if (null != E.A.getStickerPreview(e, p.C.ChannelMessage)) return ((0, A.x5)(e, p.C.ChannelMessage), !1);
    }
}
function v(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        m.A.getMessages(e).hasMoreAfter && (a.A.jumpToPresent(e, L.EMb), (t = !0)),
        g.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: L.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: L.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let b = y();
