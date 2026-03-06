"use strict";
n.d(t, { GM: () => h, Hi: () => v, Ml: () => I, P3: () => y, Ut: () => T, X8: () => A, op: () => m });
var r = n(627968),
    i = n(64700),
    s = n(835245),
    a = n(311907),
    o = n(964486),
    l = n(919796),
    u = n(954571),
    c = n(320697),
    d = n(394953),
    _ = n(849077),
    f = n(652215);
let p = i.createContext(""),
    h = (e) => {
        let { children: t } = e,
            [n] = i.useState(() => (0, s.A)());
        return (0, r.jsx)(p.Provider, { value: n, children: t });
    },
    m = () => i.useContext(p);
function E(e) {
    let { variant: t, viewId: n, entrypoint: r } = e;
    u.default.track(f.HAw.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t, inbox_entrypoint: r, view_id: n });
}
function g(e) {
    let {
        timeToLoad: t,
        unreadsCount: n,
        totalMessagesCount: r,
        viewId: i,
        unreadsBadgeMentionCount: s,
        unreadsBadgeChannelCount: a,
        unreadMessageItemsCount: o,
        unreadMentionsCount: l,
    } = e;
    u.default.track(f.HAw.NOTIFICATIONS_INBOX_READY, {
        time_to_load: t,
        unreads_count: n,
        total_messages_count: r,
        view_id: i,
        unreads_badge_mention_count: s,
        unreads_badge_channel_count: a,
        unread_message_items_count: o,
        unread_mentions_count: l,
    });
}
var A = (function (e) {
    return (
        (e.CLICK = "click"),
        (e.CONTEXT_MENU = "context_menu"),
        (e.BOOKMARK = "bookmark"),
        (e.ACK = "ack"),
        (e.SETTINGS = "settings"),
        e
    );
})({});
function I(e) {
    let { message: t, interactionType: n, viewId: r } = e;
    u.default.track(f.HAw.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type,
        view_id: r,
    });
}
function T(e) {
    let { section: t, enabled: n, viewId: r } = e;
    u.default.track(f.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, { section: t, enabled: n, view_id: r });
}
function S(e) {
    let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: r, totalItemsCount: i, viewId: s } = e;
    u.default.track(f.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
        unreads_count: t,
        total_messages_count: n,
        unread_items_count: r,
        total_items_count: i,
        view_id: s,
    });
}
function y(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: r,
        channelsFetched: i,
        mentionsFetched: s,
        loadingTrigger: a,
        viewId: o,
    } = e;
    u.default.track(f.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: r,
        channels_fetched: i,
        mentions_fetched: s,
        loading_trigger: a ?? _.VA.UNKNOWN,
        view_id: o,
    });
}
function v(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: r,
            unreadMessages: s,
            viewId: u,
            messagesByCategory: f,
        } = e,
        p = i.useRef(null),
        h = i.useRef(!1),
        m = (0, a.bG)([c.A], () => c.A.isLoading),
        A = (0, l.A)(m),
        I = (0, a.bG)([c.A], () => c.A.currentRequestAnalyticsPayload ?? null),
        { unreadRecentMentionsCount: T, unreadChannelIds: v } = (0, d.U4)();
    (0, o.Ay)(() => {
        E({ variant: t, viewId: u, entrypoint: n }), (p.current = Date.now());
    }),
        i.useEffect(() => {
            if (null != p.current && (r?.length > 0 || s?.length > 0) && !h.current) {
                let e = Date.now() - p.current;
                (h.current = !0),
                    g({
                        timeToLoad: e,
                        unreadsCount: s.length,
                        totalMessagesCount: r.length,
                        unreadsBadgeMentionCount: T,
                        unreadsBadgeChannelCount: v.length,
                        unreadMessageItemsCount: f.UNREAD.length,
                        unreadMentionsCount: f.UNREAD.filter((e) => e.every((e) => e.kind === _.yL.MENTION)).length,
                        viewId: u,
                    });
            }
        }, [r, s, u, v, T, f]),
        i.useEffect(() => {
            let e = I?.loadingTrigger === _.VA.AUTO_LOAD;
            null == I ||
                !0 !== A ||
                !1 !== m ||
                e ||
                y({
                    timeToLoad: I?.timeToLoad,
                    messagesCount: r.length,
                    unreadMessagesCount: s.length,
                    loadingTrigger: I?.loadingTrigger ?? _.VA.UNKNOWN,
                    viewId: I?.viewId,
                    channelsFetched: I?.channelsFetched,
                    mentionsFetched: I?.mentionsFetched,
                });
        }, [m, r, s, u, A, I]),
        (0, o.l0)(() => {
            S({
                unreadsCount: s?.length ?? 0,
                totalMessagesCount: r?.length ?? 0,
                unreadItemsCount: f.UNREAD.length,
                totalItemsCount: f.TODAY.length + f.YESTERDAY.length + f.OLDER.length,
                viewId: u,
            });
        });
}
