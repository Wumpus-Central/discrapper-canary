n.d(t, { Df: () => D, LB: () => j });
var i = n(367513),
    r = n(465532),
    l = n(148494),
    s = n(334738),
    a = n(198052),
    o = n(267102),
    c = n(118517),
    u = n(853145),
    d = n(138298),
    A = n(940382),
    h = n(931664),
    m = n(631576),
    g = n(761640),
    p = n(734057),
    f = n(72314),
    E = n(31717),
    b = n(580745),
    C = n(232835),
    v = n(568548),
    S = n(309010),
    y = n(967198),
    O = n(712687),
    T = n(531685),
    _ = n(625494),
    x = n(652215);
function j(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (T.A.isElementFullScreen()) return !1;
            if (_._.hasSubscribers(x.jej.CALL_DECLINE)) return _._.dispatch(x.jej.CALL_DECLINE), !1;
            if (O.A.close()) return !1;
            if (_._.hasSubscribers(x.jej.MEDIA_MODAL_CLOSE)) return _._.dispatch(x.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(x.jej.POPOUT_CLOSE)) return n.dispatch(x.jej.POPOUT_CLOSE), !1;
            if (_._.hasSubscribers(x.jej.CLOSE_GIF_PICKER)) return _._.dispatch(x.jej.CLOSE_GIF_PICKER), !1;
            if (_._.hasSubscribers(x.jej.MODAL_CLOSE)) return _._.dispatch(x.jej.MODAL_CLOSE), !1;
            if (_._.hasSubscribers(x.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return _._.dispatch(x.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1;
            if (_._.hasSubscribers(x.jej.SEARCH_RESULTS_CLOSE)) return _._.dispatch(x.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(x.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(x.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let r = y.A.getGuildId(),
                l = e ?? S.Ay.getChannelId(r),
                s = p.A.getChannel(l),
                c = g.Ay.getSection(l, s?.isDM()) === x.YvQ.SIDEBAR_CHAT ? g.Ay.getSidebarState(l) : null,
                u = c?.type === A.PE.VIEW_THREAD || c?.type === A.PE.VIEW_CHANNEL ? c.channelId : null;
            if (!1 === I(l) || !1 === I(u)) return !1;
            if (_._.hasSubscribers(x.jej.GUILD_ROOM_VIDEO_TILE_COLLAPSE))
                return _._.dispatch(x.jej.GUILD_ROOM_VIDEO_TILE_COLLAPSE), !1;
            if (null != l && c?.type === A.PE.CREATE_THREAD) return d.A.closeChannelSidebar(l), !1;
            let h = R(l),
                m = R(u);
            return (
                null == l || h || m || null == c
                    ? null != l && !h && !1 !== f.A.isAtBottom(l) && a.A.getChatOpen(l)
                        ? i.A.updateChatOpen(l, !1)
                        : _._.dispatch(x.jej.SCROLLTO_PRESENT)
                    : d.A.closeChannelSidebar(l),
                !1
            );
        },
    };
}
function I(e) {
    if (null != e) {
        if (b.A.isEditingAny(e)) return l.A.endEditMessage(e), !1;
        if (null != u.A.getPendingReply(e)) return (0, c.Jx)(e), !1;
        if (null != E.A.getScheduledMessage(e)) return r.A.clearDraft(e, E.C.ScheduledMessage), !1;
        if (null != h.A.getStickerPreview(e, E.C.ChannelMessage)) return (0, m.x5)(e, E.C.ChannelMessage), !1;
    }
}
function R(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        C.A.getMessages(e).hasMoreAfter && (l.A.jumpToPresent(e, x.EMb), (t = !0)),
        v.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: x.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: x.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let D = j();
