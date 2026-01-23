n.d(t, {
    D: () => T,
});
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
    y = n(222823),
    b = n(309010),
    O = n(967198),
    v = n(712687),
    A = n(531685),
    I = n(203982),
    S = n(652215);
let T = {
    binds: ["esc", "shift+pagedown"],
    comboKeysBindGlobal: !0,
    action(e) {
        if (A.A.isElementFullScreen()) return !1;
        if (I._.hasSubscribers(S.jej.CALL_DECLINE)) return I._.dispatch(S.jej.CALL_DECLINE), !1;
        if (v.A.close()) return !1;
        if (I._.hasSubscribers(S.jej.MEDIA_MODAL_CLOSE)) return I._.dispatch(S.jej.MEDIA_MODAL_CLOSE), !1;
        let t = (0, o.wp)(e);
        if (null == t ? void 0 : t.hasSubscribers(S.jej.POPOUT_CLOSE)) return t.dispatch(S.jej.POPOUT_CLOSE), !1;
        if (I._.hasSubscribers(S.jej.CLOSE_GIF_PICKER)) return I._.dispatch(S.jej.CLOSE_GIF_PICKER), !1;
        if (I._.hasSubscribers(S.jej.MODAL_CLOSE)) return I._.dispatch(S.jej.MODAL_CLOSE), !1;
        if (I._.hasSubscribers(S.jej.SEARCH_RESULTS_CLOSE)) return I._.dispatch(S.jej.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(S.jej.POPOUT_CLOSE_AFTER_MODALS))
            return t.dispatch(S.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = O.A.getGuildId(),
            i = b.A.getChannelId(n),
            a = h.A.getChannel(i),
            l =
                _.Ay.getSection(i, null == a ? void 0 : a.isDM()) === S.YvQ.SIDEBAR_CHAT
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
                    ? r.A.updateChatOpen(i, !1, "esc keybind")
                    : I._.dispatch(S.jej.SCROLLTO_PRESENT)
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
        E.A.getMessages(e).hasMoreAfter && (i.A.jumpToPresent(e, S.EMb), (t = !0)),
        y.Ay.hasUnread(e) &&
            ((0, a.ack)(e, {
                object: S.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: S.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, a.fb)(e),
        t
    );
}
