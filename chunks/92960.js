"use strict";
n.d(t, { D: () => b });
var r = n(367513),
    i = n(843472),
    a = n(334738),
    s = n(313961),
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
    g = n(580745),
    E = n(320501),
    A = n(222823),
    I = n(309010),
    T = n(967198),
    y = n(712687),
    S = n(531685),
    v = n(203982),
    C = n(652215);
let b = {
    binds: ["esc", "shift+pagedown"],
    comboKeysBindGlobal: !0,
    action(e) {
        if (S.A.isElementFullScreen()) return !1;
        if (v._.hasSubscribers(C.jej.CALL_DECLINE)) return v._.dispatch(C.jej.CALL_DECLINE), !1;
        if (y.A.close()) return !1;
        if (v._.hasSubscribers(C.jej.MEDIA_MODAL_CLOSE)) return v._.dispatch(C.jej.MEDIA_MODAL_CLOSE), !1;
        let t = (0, o.wp)(e);
        if (t?.hasSubscribers(C.jej.POPOUT_CLOSE)) return t.dispatch(C.jej.POPOUT_CLOSE), !1;
        if (v._.hasSubscribers(C.jej.CLOSE_GIF_PICKER)) return v._.dispatch(C.jej.CLOSE_GIF_PICKER), !1;
        if (v._.hasSubscribers(C.jej.MODAL_CLOSE)) return v._.dispatch(C.jej.MODAL_CLOSE), !1;
        if (v._.hasSubscribers(C.jej.SEARCH_RESULTS_CLOSE)) return v._.dispatch(C.jej.SEARCH_RESULTS_CLOSE), !1;
        if (t?.hasSubscribers(C.jej.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(C.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = T.A.getGuildId(),
            i = I.A.getChannelId(n),
            a = h.A.getChannel(i),
            l = p.Ay.getSection(i, a?.isDM()) === C.YvQ.SIDEBAR_CHAT ? p.Ay.getSidebarState(i) : null,
            u = l?.type === d.PE.VIEW_THREAD || l?.type === d.PE.VIEW_CHANNEL ? l.channelId : null;
        if (!1 === N(i) || !1 === N(u)) return !1;
        if (null != i && l?.type === d.PE.CREATE_THREAD) return c.A.closeChannelSidebar(i), !1;
        let _ = R(i),
            f = R(u);
        return (
            null == i || _ || f || null == l
                ? null != i && !_ && s.A.getChatOpen(i)
                    ? r.A.updateChatOpen(i, !1, "esc keybind")
                    : v._.dispatch(C.jej.SCROLLTO_PRESENT)
                : c.A.closeChannelSidebar(i),
            !1
        );
    },
};
function N(e) {
    if (null != e) {
        if (g.A.isEditingAny(e)) return i.A.endEditMessage(e), !1;
        if (null != u.A.getPendingReply(e)) return (0, l.Jx)(e), !1;
        if (null != _.A.getStickerPreview(e, m.C.ChannelMessage)) return (0, f.x5)(e, m.C.ChannelMessage), !1;
    }
}
function R(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        E.A.getMessages(e).hasMoreAfter && (i.A.jumpToPresent(e, C.EMb), (t = !0)),
        A.Ay.hasUnread(e) &&
            ((0, a.ack)(e, {
                object: C.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: C.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, a.fb)(e),
        t
    );
}
