"use strict";
n.d(t, { Df: () => v, LB: () => L });
var i = n(367513),
    r = n(148494),
    a = n(334738),
    s = n(313961),
    l = n(267102),
    o = n(118517),
    d = n(853145),
    c = n(138298),
    u = n(940382),
    _ = n(931664),
    E = n(631576),
    A = n(761640),
    h = n(734057),
    I = n(72314),
    f = n(31717),
    p = n(580745),
    T = n(232835),
    m = n(568548),
    g = n(309010),
    S = n(967198),
    N = n(712687),
    C = n(531685),
    O = n(625494),
    R = n(652215);
function L(e) {
    return {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(t) {
            if (C.A.isElementFullScreen()) return !1;
            if (O._.hasSubscribers(R.jej.CALL_DECLINE)) return O._.dispatch(R.jej.CALL_DECLINE), !1;
            if (N.A.close()) return !1;
            if (O._.hasSubscribers(R.jej.MEDIA_MODAL_CLOSE)) return O._.dispatch(R.jej.MEDIA_MODAL_CLOSE), !1;
            let n = (0, l.wp)(t);
            if (n?.hasSubscribers(R.jej.POPOUT_CLOSE)) return n.dispatch(R.jej.POPOUT_CLOSE), !1;
            if (O._.hasSubscribers(R.jej.CLOSE_GIF_PICKER)) return O._.dispatch(R.jej.CLOSE_GIF_PICKER), !1;
            if (O._.hasSubscribers(R.jej.MODAL_CLOSE)) return O._.dispatch(R.jej.MODAL_CLOSE), !1;
            if (O._.hasSubscribers(R.jej.CONVERSATIONS_FOCUS_MODE_CLOSE))
                return O._.dispatch(R.jej.CONVERSATIONS_FOCUS_MODE_CLOSE), !1;
            if (O._.hasSubscribers(R.jej.SEARCH_RESULTS_CLOSE)) return O._.dispatch(R.jej.SEARCH_RESULTS_CLOSE), !1;
            if (n?.hasSubscribers(R.jej.POPOUT_CLOSE_AFTER_MODALS))
                return n.dispatch(R.jej.POPOUT_CLOSE_AFTER_MODALS), !1;
            let r = S.A.getGuildId(),
                a = e ?? g.Ay.getChannelId(r),
                o = h.A.getChannel(a),
                d = A.Ay.getSection(a, o?.isDM()) === R.YvQ.SIDEBAR_CHAT ? A.Ay.getSidebarState(a) : null,
                _ = d?.type === u.PE.VIEW_THREAD || d?.type === u.PE.VIEW_CHANNEL ? d.channelId : null;
            if (!1 === D(a) || !1 === D(_)) return !1;
            if (null != a && d?.type === u.PE.CREATE_THREAD) return c.A.closeChannelSidebar(a), !1;
            let E = y(a),
                f = y(_);
            return (
                null == a || E || f || null == d
                    ? null != a && !E && !1 !== I.A.isAtBottom(a) && s.A.getChatOpen(a)
                        ? i.A.updateChatOpen(a, !1)
                        : O._.dispatch(R.jej.SCROLLTO_PRESENT)
                    : c.A.closeChannelSidebar(a),
                !1
            );
        },
    };
}
function D(e) {
    if (null != e) {
        if (p.A.isEditingAny(e)) return r.A.endEditMessage(e), !1;
        if (null != d.A.getPendingReply(e)) return (0, o.Jx)(e), !1;
        if (null != _.A.getStickerPreview(e, f.C.ChannelMessage)) return (0, E.x5)(e, f.C.ChannelMessage), !1;
    }
}
function y(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        T.A.getMessages(e).hasMoreAfter && (r.A.jumpToPresent(e, R.EMb), (t = !0)),
        m.Ay.hasUnread(e) &&
            ((0, a.ack)(e, {
                object: R.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: R.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, a.fb)(e),
        t
    );
}
let v = L();
