"use strict";
n.d(t, { Df: () => b, LB: () => C });
var r = n(367513),
    i = n(843472),
    s = n(334738),
    a = n(313961),
    o = n(267102),
    l = n(118517),
    u = n(853145),
    c = n(138298),
    d = n(940382),
    _ = n(931664),
    f = n(631576),
    p = n(761640),
    h = n(734057),
    m = n(31717),
    E = n(580745),
    g = n(320501),
    A = n(222823),
    I = n(309010),
    T = n(967198),
    S = n(712687),
    y = n(531685),
    v = n(203982),
    N = n(652215);
function C(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (y.A.isElementFullScreen()) return !1;
            if (v._.hasSubscribers(N.jej.CALL_DECLINE)) return v._.dispatch(N.jej.CALL_DECLINE), !1;
            if (S.A.close()) return !1;
            if (v._.hasSubscribers(N.jej.MEDIA_MODAL_CLOSE)) return v._.dispatch(N.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, o.wp)(t);
            if (n?.hasSubscribers(N.jej.POPOUT_CLOSE)) return n.dispatch(N.jej.POPOUT_CLOSE), !1;
            if (v._.hasSubscribers(N.jej.CLOSE_GIF_PICKER)) return v._.dispatch(N.jej.CLOSE_GIF_PICKER), !1;
            if (v._.hasSubscribers(N.jej.MODAL_CLOSE)) return v._.dispatch(N.jej.MODAL_CLOSE), !1;
            if (v._.hasSubscribers(N.jej.SEARCH_RESULTS_CLOSE)) return v._.dispatch(N.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(N.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(N.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let i = T.A.getGuildId(),
                s = e ?? I.A.getChannelId(i),
                l = h.A.getChannel(s),
                u = p.Ay.getSection(s, l?.isDM()) === N.YvQ.SIDEBAR_CHAT ? p.Ay.getSidebarState(s) : null,
                _ = u?.type === d.PE.VIEW_THREAD || u?.type === d.PE.VIEW_CHANNEL ? u.channelId : null;
            if (!1 === R(s) || !1 === R(_)) return !1;
            if (null != s && u?.type === d.PE.CREATE_THREAD) return c.A.closeChannelSidebar(s), !1;
            let f = O(s),
                m = O(_);
            return (
                null == s || f || m || null == u
                    ? null != s && !f && a.A.getChatOpen(s)
                        ? r.A.updateChatOpen(s, !1, "esc keybind")
                        : v._.dispatch(N.jej.SCROLLTO_PRESENT)
                    : c.A.closeChannelSidebar(s),
                !1
            );
        },
    };
}
function R(e) {
    if (null != e) {
        if (E.A.isEditingAny(e)) return i.A.endEditMessage(e), !1;
        if (null != u.A.getPendingReply(e)) return (0, l.Jx)(e), !1;
        if (null != _.A.getStickerPreview(e, m.C.ChannelMessage)) return (0, f.x5)(e, m.C.ChannelMessage), !1;
    }
}
function O(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        g.A.getMessages(e).hasMoreAfter && (i.A.jumpToPresent(e, N.EMb), (t = !0)),
        A.Ay.hasUnread(e) &&
            ((0, s.ack)(e, {
                object: N.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: N.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, s.fb)(e),
        t
    );
}
let b = C();
