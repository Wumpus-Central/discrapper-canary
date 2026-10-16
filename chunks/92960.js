n.d(t, { Df: () => M, LB: () => R });
var i = n(367513),
    r = n(465532),
    l = n(148494),
    s = n(334738),
    a = n(198052),
    o = n(267102),
    u = n(118517),
    c = n(853145),
    d = n(138298),
    h = n(940382),
    m = n(931664),
    A = n(631576),
    E = n(358047),
    g = n(734057),
    f = n(72314),
    p = n(31717),
    C = n(580745),
    _ = n(232835),
    b = n(573163),
    S = n(309010),
    T = n(967198),
    I = n(712687),
    v = n(531685),
    O = n(625494),
    y = n(652215);
function R(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (v.A.isElementFullScreen()) return !1;
            if (O._.hasSubscribers(y.jej.CALL_DECLINE)) return (O._.dispatch(y.jej.CALL_DECLINE), !1);
            if (I.A.close()) return !1;
            if (O._.hasSubscribers(y.jej.MEDIA_MODAL_CLOSE)) return (O._.dispatch(y.jej.MEDIA_MODAL_CLOSE), !1);
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(y.jej.POPOUT_CLOSE)) return (n.dispatch(y.jej.POPOUT_CLOSE), !1);
            if (O._.hasSubscribers(y.jej.CLOSE_GIF_PICKER)) return (O._.dispatch(y.jej.CLOSE_GIF_PICKER), !1);
            if (O._.hasSubscribers(y.jej.MODAL_CLOSE)) return (O._.dispatch(y.jej.MODAL_CLOSE), !1);
            if (O._.hasSubscribers(y.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return (O._.dispatch(y.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1);
            if (O._.hasSubscribers(y.jej.SEARCH_RESULTS_CLOSE)) return (O._.dispatch(y.jej.SEARCH_RESULTS_CLOSE), !1);
            if (n?.hasSubscribers(y.jej.POPOUT_CLOSE_AFTER_MODALS))
                return (n.dispatch(y.jej.POPOUT_CLOSE_AFTER_MODALS), !1);
            let r = T.A.getGuildId(),
                l = e ?? S.Ay.getChannelId(r),
                s = g.A.getChannel(l),
                u = E.Ay.getSection(l, s?.isDM()) === y.YvQ.SIDEBAR_CHAT ? E.Ay.getSidebarState(l) : null,
                c = u?.type === h.PE.VIEW_CHANNEL ? u.channelId : null;
            if (!1 === x(l) || !1 === x(c)) return !1;
            if (O._.hasSubscribers(y.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL))
                return (O._.dispatch(y.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL), !1);
            if (O._.hasSubscribers(y.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE))
                return (O._.dispatch(y.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE), !1);
            if (null != l && u?.type === h.PE.CREATE_THREAD) return (d.A.closeChannelSidebar(l), !1);
            let m = N(l),
                A = N(c);
            return (
                null == l || m || A || null == u
                    ? null != l && !m && !1 !== f.A.isAtBottom(l) && a.A.getChatOpen(l)
                        ? i.A.updateChatOpen(l, !1)
                        : O._.dispatch(y.jej.SCROLLTO_PRESENT)
                    : d.A.closeChannelSidebar(l),
                !1
            );
        },
    };
}
function x(e) {
    if (null != e) {
        if (C.A.isEditingAny(e)) return (l.A.endEditMessage(e), !1);
        if (null != c.A.getPendingReply(e)) return ((0, u.Jx)(e), !1);
        if (null != p.A.getScheduledMessage(e)) return (r.A.clearDraft(e, p.C.ScheduledMessage), !1);
        if (null != m.A.getStickerPreview(e, p.C.ChannelMessage)) return ((0, A.x5)(e, p.C.ChannelMessage), !1);
    }
}
function N(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        _.A.getMessages(e).hasMoreAfter && (l.A.jumpToPresent(e, y.EMb), (t = !0)),
        b.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: y.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: y.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let M = R();
