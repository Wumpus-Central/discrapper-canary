n.d(t, { Df: () => R, LB: () => x });
var i = n(367513),
    r = n(148494),
    l = n(334738),
    s = n(313961),
    a = n(267102),
    o = n(118517),
    c = n(853145),
    u = n(138298),
    d = n(940382),
    A = n(931664),
    h = n(631576),
    m = n(761640),
    g = n(734057),
    p = n(72314),
    f = n(31717),
    E = n(580745),
    b = n(232835),
    C = n(568548),
    v = n(309010),
    S = n(967198),
    y = n(712687),
    O = n(531685),
    T = n(625494),
    _ = n(652215);
function x(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (O.A.isElementFullScreen()) return !1;
            if (T._.hasSubscribers(_.jej.CALL_DECLINE)) return T._.dispatch(_.jej.CALL_DECLINE), !1;
            if (y.A.close()) return !1;
            if (T._.hasSubscribers(_.jej.MEDIA_MODAL_CLOSE)) return T._.dispatch(_.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, a.wp)(t);
            if (n?.hasSubscribers(_.jej.POPOUT_CLOSE)) return n.dispatch(_.jej.POPOUT_CLOSE), !1;
            if (T._.hasSubscribers(_.jej.CLOSE_GIF_PICKER)) return T._.dispatch(_.jej.CLOSE_GIF_PICKER), !1;
            if (T._.hasSubscribers(_.jej.MODAL_CLOSE)) return T._.dispatch(_.jej.MODAL_CLOSE), !1;
            if (T._.hasSubscribers(_.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return T._.dispatch(_.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1;
            if (T._.hasSubscribers(_.jej.SEARCH_RESULTS_CLOSE)) return T._.dispatch(_.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(_.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(_.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let r = S.A.getGuildId(),
                l = e ?? v.Ay.getChannelId(r),
                o = g.A.getChannel(l),
                c = m.Ay.getSection(l, o?.isDM()) === _.YvQ.SIDEBAR_CHAT ? m.Ay.getSidebarState(l) : null,
                A = c?.type === d.PE.VIEW_THREAD || c?.type === d.PE.VIEW_CHANNEL ? c.channelId : null;
            if (!1 === j(l) || !1 === j(A)) return !1;
            if (T._.hasSubscribers(_.jej.GUILD_ROOM_VIDEO_TILE_COLLAPSE))
                return T._.dispatch(_.jej.GUILD_ROOM_VIDEO_TILE_COLLAPSE), !1;
            if (null != l && c?.type === d.PE.CREATE_THREAD) return u.A.closeChannelSidebar(l), !1;
            let h = I(l),
                f = I(A);
            return (
                null == l || h || f || null == c
                    ? null != l && !h && !1 !== p.A.isAtBottom(l) && s.A.getChatOpen(l)
                        ? i.A.updateChatOpen(l, !1)
                        : T._.dispatch(_.jej.SCROLLTO_PRESENT)
                    : u.A.closeChannelSidebar(l),
                !1
            );
        },
    };
}
function j(e) {
    if (null != e) {
        if (E.A.isEditingAny(e)) return r.A.endEditMessage(e), !1;
        if (null != c.A.getPendingReply(e)) return (0, o.Jx)(e), !1;
        if (null != A.A.getStickerPreview(e, f.C.ChannelMessage)) return (0, h.x5)(e, f.C.ChannelMessage), !1;
    }
}
function I(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        b.A.getMessages(e).hasMoreAfter && (r.A.jumpToPresent(e, _.EMb), (t = !0)),
        C.Ay.hasUnread(e) &&
            ((0, l.ack)(e, {
                object: _.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: _.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, l.fb)(e),
        t
    );
}
let R = x();
