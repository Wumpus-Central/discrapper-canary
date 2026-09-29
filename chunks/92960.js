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
    A = n(931664),
    m = n(631576),
    g = n(761640),
    f = n(734057),
    E = n(72314),
    b = n(31717),
    p = n(580745),
    C = n(232835),
    S = n(573163),
    v = n(309010),
    _ = n(967198),
    O = n(712687),
    T = n(531685),
    x = n(625494),
    y = n(652215);
function j(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (T.A.isElementFullScreen()) return !1;
            if (x._.hasSubscribers(y.jej.CALL_DECLINE)) return (x._.dispatch(y.jej.CALL_DECLINE), !1);
            if (O.A.close()) return !1;
            if (x._.hasSubscribers(y.jej.MEDIA_MODAL_CLOSE)) return (x._.dispatch(y.jej.MEDIA_MODAL_CLOSE), !1);
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(y.jej.POPOUT_CLOSE)) return (n.dispatch(y.jej.POPOUT_CLOSE), !1);
            if (x._.hasSubscribers(y.jej.CLOSE_GIF_PICKER)) return (x._.dispatch(y.jej.CLOSE_GIF_PICKER), !1);
            if (x._.hasSubscribers(y.jej.MODAL_CLOSE)) return (x._.dispatch(y.jej.MODAL_CLOSE), !1);
            if (x._.hasSubscribers(y.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return (x._.dispatch(y.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1);
            if (x._.hasSubscribers(y.jej.SEARCH_RESULTS_CLOSE)) return (x._.dispatch(y.jej.SEARCH_RESULTS_CLOSE), !1);
            if (n?.hasSubscribers(y.jej.POPOUT_CLOSE_AFTER_MODALS))
                return (n.dispatch(y.jej.POPOUT_CLOSE_AFTER_MODALS), !1);
            let r = _.A.getGuildId(),
                l = e ?? v.Ay.getChannelId(r),
                s = f.A.getChannel(l),
                c = g.Ay.getSection(l, s?.isDM()) === y.YvQ.SIDEBAR_CHAT ? g.Ay.getSidebarState(l) : null,
                u = c?.type === h.PE.VIEW_CHANNEL ? c.channelId : null;
            if (!1 === R(l) || !1 === R(u)) return !1;
            if (x._.hasSubscribers(y.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL))
                return (x._.dispatch(y.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL), !1);
            if (x._.hasSubscribers(y.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE))
                return (x._.dispatch(y.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE), !1);
            if (null != l && c?.type === h.PE.CREATE_THREAD) return (d.A.closeChannelSidebar(l), !1);
            let A = I(l),
                m = I(u);
            return (
                null == l || A || m || null == c
                    ? null != l && !A && !1 !== E.A.isAtBottom(l) && a.A.getChatOpen(l)
                        ? i.A.updateChatOpen(l, !1)
                        : x._.dispatch(y.jej.SCROLLTO_PRESENT)
                    : d.A.closeChannelSidebar(l),
                !1
            );
        },
    };
}
function R(e) {
    if (null != e) {
        if (p.A.isEditingAny(e)) return (l.A.endEditMessage(e), !1);
        if (null != u.A.getPendingReply(e)) return ((0, c.Jx)(e), !1);
        if (null != b.A.getScheduledMessage(e)) return (r.A.clearDraft(e, b.C.ScheduledMessage), !1);
        if (null != A.A.getStickerPreview(e, b.C.ChannelMessage)) return ((0, m.x5)(e, b.C.ChannelMessage), !1);
    }
}
function I(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        C.A.getMessages(e).hasMoreAfter && (l.A.jumpToPresent(e, y.EMb), (t = !0)),
        S.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: y.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: y.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let M = j();
