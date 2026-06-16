"use strict";
n.d(t, { Df: () => D, LB: () => R });
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
    E = n(72314),
    m = n(31717),
    g = n(580745),
    A = n(232835),
    I = n(222823),
    T = n(309010),
    S = n(967198),
    y = n(712687),
    N = n(531685),
    v = n(625494),
    C = n(652215);
function R(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (N.A.isElementFullScreen()) return !1;
            if (v._.hasSubscribers(C.jej.CALL_DECLINE)) return v._.dispatch(C.jej.CALL_DECLINE), !1;
            if (y.A.close()) return !1;
            if (v._.hasSubscribers(C.jej.MEDIA_MODAL_CLOSE)) return v._.dispatch(C.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(C.jej.POPOUT_CLOSE)) return n.dispatch(C.jej.POPOUT_CLOSE), !1;
            if (v._.hasSubscribers(C.jej.CLOSE_GIF_PICKER)) return v._.dispatch(C.jej.CLOSE_GIF_PICKER), !1;
            if (v._.hasSubscribers(C.jej.MODAL_CLOSE)) return v._.dispatch(C.jej.MODAL_CLOSE), !1;
            if (v._.hasSubscribers(C.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return v._.dispatch(C.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1;
            if (v._.hasSubscribers(C.jej.SEARCH_RESULTS_CLOSE)) return v._.dispatch(C.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(C.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(C.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let r = S.A.getGuildId(),
                s = e ?? T.A.getChannelId(r),
                l = p.A.getChannel(s),
                u = f.Ay.getSection(s, l?.isDM()) === C.YvQ.SIDEBAR_CHAT ? f.Ay.getSidebarState(s) : null,
                _ = u?.type === d.PE.VIEW_THREAD || u?.type === d.PE.VIEW_CHANNEL ? u.channelId : null;
            if (!1 === O(s) || !1 === O(_)) return !1;
            if (null != s && u?.type === d.PE.CREATE_THREAD) return c.A.closeChannelSidebar(s), !1;
            let h = b(s),
                m = b(_);
            return (
                null == s || h || m || null == u
                    ? null != s && !h && !1 !== E.A.isAtBottom(s) && a.A.getChatOpen(s)
                        ? i.A.updateChatOpen(s, !1)
                        : v._.dispatch(C.jej.SCROLLTO_PRESENT)
                    : c.A.closeChannelSidebar(s),
                !1
            );
        },
    };
}
function O(e) {
    if (null != e) {
        if (g.A.isEditingAny(e)) return r.A.endEditMessage(e), !1;
        if (null != u.A.getPendingReply(e)) return (0, l.Jx)(e), !1;
        if (null != _.A.getStickerPreview(e, m.C.ChannelMessage)) return (0, h.x5)(e, m.C.ChannelMessage), !1;
    }
}
function b(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        A.A.getMessages(e).hasMoreAfter && (r.A.jumpToPresent(e, C.EMb), (t = !0)),
        I.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: C.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: C.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let D = R();
