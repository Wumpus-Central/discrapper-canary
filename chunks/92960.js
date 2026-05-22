"use strict";
n.d(t, { Df: () => b, LB: () => v });
var i = n(367513),
    r = n(720149),
    s = n(334738),
    a = n(313961),
    o = n(267102),
    l = n(118517),
    u = n(853145),
    c = n(138298),
    d = n(940382),
    _ = n(931664),
    f = n(631576),
    h = n(761640),
    p = n(734057),
    E = n(31717),
    m = n(580745),
    g = n(232835),
    A = n(222823),
    I = n(309010),
    T = n(967198),
    S = n(712687),
    N = n(531685),
    y = n(625494),
    C = n(652215);
function v(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (N.A.isElementFullScreen()) return !1;
            if (y._.hasSubscribers(C.jej.CALL_DECLINE)) return y._.dispatch(C.jej.CALL_DECLINE), !1;
            if (S.A.close()) return !1;
            if (y._.hasSubscribers(C.jej.MEDIA_MODAL_CLOSE)) return y._.dispatch(C.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(C.jej.POPOUT_CLOSE)) return n.dispatch(C.jej.POPOUT_CLOSE), !1;
            if (y._.hasSubscribers(C.jej.CLOSE_GIF_PICKER)) return y._.dispatch(C.jej.CLOSE_GIF_PICKER), !1;
            if (y._.hasSubscribers(C.jej.MODAL_CLOSE)) return y._.dispatch(C.jej.MODAL_CLOSE), !1;
            if (y._.hasSubscribers(C.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return y._.dispatch(C.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1;
            if (y._.hasSubscribers(C.jej.SEARCH_RESULTS_CLOSE)) return y._.dispatch(C.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(C.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(C.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let r = T.A.getGuildId(),
                s = e ?? I.A.getChannelId(r),
                l = p.A.getChannel(s),
                u = h.Ay.getSection(s, l?.isDM()) === C.YvQ.SIDEBAR_CHAT ? h.Ay.getSidebarState(s) : null,
                _ = u?.type === d.PE.VIEW_THREAD || u?.type === d.PE.VIEW_CHANNEL ? u.channelId : null;
            if (!1 === O(s) || !1 === O(_)) return !1;
            if (null != s && u?.type === d.PE.CREATE_THREAD) return c.A.closeChannelSidebar(s), !1;
            let f = R(s),
                E = R(_);
            return (
                null == s || f || E || null == u
                    ? null != s && !f && a.A.getChatOpen(s)
                        ? i.A.updateChatOpen(s, !1, "esc keybind")
                        : y._.dispatch(C.jej.SCROLLTO_PRESENT)
                    : c.A.closeChannelSidebar(s),
                !1
            );
        },
    };
}
function O(e) {
    if (null != e) {
        if (m.A.isEditingAny(e)) return r.A.endEditMessage(e), !1;
        if (null != u.A.getPendingReply(e)) return (0, l.Jx)(e), !1;
        if (null != _.A.getStickerPreview(e, E.C.ChannelMessage)) return (0, f.x5)(e, E.C.ChannelMessage), !1;
    }
}
function R(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        g.A.getMessages(e).hasMoreAfter && (r.A.jumpToPresent(e, C.EMb), (t = !0)),
        A.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: C.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: C.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let b = v();
