n.d(t, { Df: () => M, LB: () => j });
var i = n(367513),
    r = n(465532),
    l = n(148494),
    s = n(334738),
    a = n(198052),
    o = n(267102),
    c = n(118517),
    u = n(853145),
    d = n(138298),
    h = n(940382),
    m = n(931664),
    A = n(631576),
    g = n(761640),
    f = n(734057),
    b = n(72314),
    E = n(31717),
    p = n(580745),
    C = n(232835),
    S = n(573163),
    v = n(309010),
    _ = n(967198),
    y = n(712687),
    O = n(531685),
    T = n(625494),
    x = n(652215);
function j(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (O.A.isElementFullScreen()) return !1;
            if (T._.hasSubscribers(x.jej.CALL_DECLINE)) return (T._.dispatch(x.jej.CALL_DECLINE), !1);
            if (y.A.close()) return !1;
            if (T._.hasSubscribers(x.jej.MEDIA_MODAL_CLOSE)) return (T._.dispatch(x.jej.MEDIA_MODAL_CLOSE), !1);
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(x.jej.POPOUT_CLOSE)) return (n.dispatch(x.jej.POPOUT_CLOSE), !1);
            if (T._.hasSubscribers(x.jej.CLOSE_GIF_PICKER)) return (T._.dispatch(x.jej.CLOSE_GIF_PICKER), !1);
            if (T._.hasSubscribers(x.jej.MODAL_CLOSE)) return (T._.dispatch(x.jej.MODAL_CLOSE), !1);
            if (T._.hasSubscribers(x.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return (T._.dispatch(x.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1);
            if (T._.hasSubscribers(x.jej.SEARCH_RESULTS_CLOSE)) return (T._.dispatch(x.jej.SEARCH_RESULTS_CLOSE), !1);
            if (n?.hasSubscribers(x.jej.POPOUT_CLOSE_AFTER_MODALS))
                return (n.dispatch(x.jej.POPOUT_CLOSE_AFTER_MODALS), !1);
            let r = _.A.getGuildId(),
                l = e ?? v.Ay.getChannelId(r),
                s = f.A.getChannel(l),
                c = g.Ay.getSection(l, s?.isDM()) === x.YvQ.SIDEBAR_CHAT ? g.Ay.getSidebarState(l) : null,
                u = c?.type === h.PE.VIEW_CHANNEL ? c.channelId : null;
            if (!1 === I(l) || !1 === I(u)) return !1;
            if (T._.hasSubscribers(x.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL))
                return (T._.dispatch(x.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL), !1);
            if (T._.hasSubscribers(x.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE))
                return (T._.dispatch(x.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE), !1);
            if (null != l && c?.type === h.PE.CREATE_THREAD) return (d.A.closeChannelSidebar(l), !1);
            let m = R(l),
                A = R(u);
            return (
                null == l || m || A || null == c
                    ? null != l && !m && !1 !== b.A.isAtBottom(l) && a.A.getChatOpen(l)
                        ? i.A.updateChatOpen(l, !1)
                        : T._.dispatch(x.jej.SCROLLTO_PRESENT)
                    : d.A.closeChannelSidebar(l),
                !1
            );
        },
    };
}
function I(e) {
    if (null != e) {
        if (p.A.isEditingAny(e)) return (l.A.endEditMessage(e), !1);
        if (null != u.A.getPendingReply(e)) return ((0, c.Jx)(e), !1);
        if (null != E.A.getScheduledMessage(e)) return (r.A.clearDraft(e, E.C.ScheduledMessage), !1);
        if (null != m.A.getStickerPreview(e, E.C.ChannelMessage)) return ((0, A.x5)(e, E.C.ChannelMessage), !1);
    }
}
function R(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        C.A.getMessages(e).hasMoreAfter && (l.A.jumpToPresent(e, x.EMb), (t = !0)),
        S.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: x.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: x.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let M = j();
