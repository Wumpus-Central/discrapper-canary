"use strict";
n.d(t, { Df: () => b, LB: () => C });
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
    h = n(631576),
    f = n(761640),
    p = n(734057),
    E = n(31717),
    m = n(580745),
    g = n(232835),
    A = n(222823),
    I = n(309010),
    T = n(967198),
    S = n(712687),
    y = n(531685),
    N = n(625494),
    v = n(652215);
function C(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (y.A.isElementFullScreen()) return !1;
            if (N._.hasSubscribers(v.jej.CALL_DECLINE)) return N._.dispatch(v.jej.CALL_DECLINE), !1;
            if (S.A.close()) return !1;
            if (N._.hasSubscribers(v.jej.MEDIA_MODAL_CLOSE)) return N._.dispatch(v.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(v.jej.POPOUT_CLOSE)) return n.dispatch(v.jej.POPOUT_CLOSE), !1;
            if (N._.hasSubscribers(v.jej.CLOSE_GIF_PICKER)) return N._.dispatch(v.jej.CLOSE_GIF_PICKER), !1;
            if (N._.hasSubscribers(v.jej.MODAL_CLOSE)) return N._.dispatch(v.jej.MODAL_CLOSE), !1;
            if (N._.hasSubscribers(v.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return N._.dispatch(v.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1;
            if (N._.hasSubscribers(v.jej.SEARCH_RESULTS_CLOSE)) return N._.dispatch(v.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(v.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(v.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let r = T.A.getGuildId(),
                s = e ?? I.A.getChannelId(r),
                l = p.A.getChannel(s),
                u = f.Ay.getSection(s, l?.isDM()) === v.YvQ.SIDEBAR_CHAT ? f.Ay.getSidebarState(s) : null,
                _ = u?.type === d.PE.VIEW_THREAD || u?.type === d.PE.VIEW_CHANNEL ? u.channelId : null;
            if (!1 === R(s) || !1 === R(_)) return !1;
            if (null != s && u?.type === d.PE.CREATE_THREAD) return c.A.closeChannelSidebar(s), !1;
            let h = O(s),
                E = O(_);
            return (
                null == s || h || E || null == u
                    ? null != s && !h && a.A.getChatOpen(s)
                        ? i.A.updateChatOpen(s, !1)
                        : N._.dispatch(v.jej.SCROLLTO_PRESENT)
                    : c.A.closeChannelSidebar(s),
                !1
            );
        },
    };
}
function R(e) {
    if (null != e) {
        if (m.A.isEditingAny(e)) return r.A.endEditMessage(e), !1;
        if (null != u.A.getPendingReply(e)) return (0, l.Jx)(e), !1;
        if (null != _.A.getStickerPreview(e, E.C.ChannelMessage)) return (0, h.x5)(e, E.C.ChannelMessage), !1;
    }
}
function O(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        g.A.getMessages(e).hasMoreAfter && (r.A.jumpToPresent(e, v.EMb), (t = !0)),
        A.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: v.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: v.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let b = C();
