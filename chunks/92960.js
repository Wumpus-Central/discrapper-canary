n.d(t, { D: () => T });
var r = n(367513),
    i = n(843472),
    a = n(334738),
    s = n(313961),
    o = n(267102),
    l = n(118517),
    c = n(853145),
    u = n(138298),
    d = n(940382),
    f = n(931664),
    p = n(631576),
    _ = n(761640),
    h = n(734057),
    m = n(31717),
    g = n(580745),
    E = n(320501),
    b = n(222823),
    y = n(309010),
    O = n(967198),
    A = n(712687),
    v = n(531685),
    S = n(203982),
    I = n(652215);
let T = {
    binds: ["esc", "shift+pagedown"],
    comboKeysBindGlobal: !0,
    action(e) {
        if (v.A.isElementFullScreen()) return !1;
        if (S._.hasSubscribers(I.jej.CALL_DECLINE)) return S._.dispatch(I.jej.CALL_DECLINE), !1;
        if (A.A.close()) return !1;
        if (S._.hasSubscribers(I.jej.MEDIA_MODAL_CLOSE)) return S._.dispatch(I.jej.MEDIA_MODAL_CLOSE), !1;
        let t = (0, o.wp)(e);
        if (null == t ? void 0 : t.hasSubscribers(I.jej.POPOUT_CLOSE)) return t.dispatch(I.jej.POPOUT_CLOSE), !1;
        if (S._.hasSubscribers(I.jej.CLOSE_GIF_PICKER)) return S._.dispatch(I.jej.CLOSE_GIF_PICKER), !1;
        if (S._.hasSubscribers(I.jej.MODAL_CLOSE)) return S._.dispatch(I.jej.MODAL_CLOSE), !1;
        if (S._.hasSubscribers(I.jej.SEARCH_RESULTS_CLOSE)) return S._.dispatch(I.jej.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(I.jej.POPOUT_CLOSE_AFTER_MODALS))
            return t.dispatch(I.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = O.A.getGuildId(),
            i = y.A.getChannelId(n),
            a = h.A.getChannel(i),
            l =
                _.Ay.getSection(i, null == a ? void 0 : a.isDM()) === I.YvQ.SIDEBAR_CHAT
                    ? _.Ay.getSidebarState(i)
                    : null,
            c =
                (null == l ? void 0 : l.type) === d.PE.VIEW_THREAD ||
                (null == l ? void 0 : l.type) === d.PE.VIEW_CHANNEL
                    ? l.channelId
                    : null;
        if (!1 === C(i) || !1 === C(c)) return !1;
        if (null != i && (null == l ? void 0 : l.type) === d.PE.CREATE_THREAD) return u.A.closeChannelSidebar(i), !1;
        let f = N(i),
            p = N(c);
        return (
            null == i || f || p || null == l
                ? null != i && !f && s.A.getChatOpen(i)
                    ? r.A.updateChatOpen(i, !1)
                    : S._.dispatch(I.jej.SCROLLTO_PRESENT)
                : u.A.closeChannelSidebar(i),
            !1
        );
    },
};
function C(e) {
    if (null != e) {
        if (g.A.isEditingAny(e)) return i.A.endEditMessage(e), !1;
        if (null != c.A.getPendingReply(e)) return (0, l.Jx)(e), !1;
        if (null != f.A.getStickerPreview(e, m.C.ChannelMessage)) return (0, p.x5)(e, m.C.ChannelMessage), !1;
    }
}
function N(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        E.A.getMessages(e).hasMoreAfter && (i.A.jumpToPresent(e, I.EMb), (t = !0)),
        b.Ay.hasUnread(e) &&
            ((0, a.ack)(e, {
                object: I.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: I.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, a.fb)(e),
        t
    );
}
