"use strict";
n.d(t, { GM: () => E, Hi: () => S, Ml: () => A, P3: () => T, Ut: () => I, X8: () => g, op: () => m });
var r,
    i = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(311907),
    l = n(964486),
    u = n(919796),
    c = n(954571),
    d = n(320697),
    _ = n(394953),
    f = n(849077),
    p = n(652215);
let h = s.createContext(""),
    E = (e) => {
        let { children: t } = e,
            [n] = s.useState(() => (0, a.A)());
        return (0, i.jsx)(h.Provider, { value: n, children: t });
    },
    m = () => s.useContext(h);
var g =
    (((r = {}).CLICK = "click"),
    (r.CONTEXT_MENU = "context_menu"),
    (r.BOOKMARK = "bookmark"),
    (r.ACK = "ack"),
    (r.SETTINGS = "settings"),
    r);
function A(e) {
    let { message: t, interactionType: n, viewId: r } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type,
        view_id: r,
    });
}
function I(e) {
    let { section: t, enabled: n, viewId: r } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, { section: t, enabled: n, view_id: r });
}
function T(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: r,
        channelsFetched: i,
        mentionsFetched: s,
        loadingTrigger: a,
        viewId: o,
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: r,
        channels_fetched: i,
        mentions_fetched: s,
        loading_trigger: a ?? f.VA.UNKNOWN,
        view_id: o,
    });
}
function S(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: r,
            unreadMessages: i,
            viewId: a,
            messagesByCategory: h,
        } = e,
        E = s.useRef(null),
        m = s.useRef(!1),
        g = (0, o.bG)([d.A], () => d.A.isLoading),
        A = (0, u.A)(g),
        I = (0, o.bG)([d.A], () => d.A.currentRequestAnalyticsPayload ?? null),
        { unreadRecentMentionsCount: S, unreadChannelIds: y } = (0, _.U4)();
    (0, l.Ay)(() => {
        !(function (e) {
            let { variant: t, viewId: n, entrypoint: r } = e;
            c.default.track(p.HAw.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t, inbox_entrypoint: r, view_id: n });
        })({ variant: t, viewId: a, entrypoint: n }),
            (E.current = Date.now());
    }),
        s.useEffect(() => {
            if (null != E.current && (r?.length > 0 || i?.length > 0) && !m.current) {
                let e = Date.now() - E.current;
                (m.current = !0),
                    (function (e) {
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
                        c.default.track(p.HAw.NOTIFICATIONS_INBOX_READY, {
                            time_to_load: t,
                            unreads_count: n,
                            total_messages_count: r,
                            view_id: i,
                            unreads_badge_mention_count: s,
                            unreads_badge_channel_count: a,
                            unread_message_items_count: o,
                            unread_mentions_count: l,
                        });
                    })({
                        timeToLoad: e,
                        unreadsCount: i.length,
                        totalMessagesCount: r.length,
                        unreadsBadgeMentionCount: S,
                        unreadsBadgeChannelCount: y.length,
                        unreadMessageItemsCount: h.UNREAD.length,
                        unreadMentionsCount: h.UNREAD.filter((e) => e.every((e) => e.kind === f.yL.MENTION)).length,
                        viewId: a,
                    });
            }
        }, [r, i, a, y, S, h]),
        s.useEffect(() => {
            let e = I?.loadingTrigger === f.VA.AUTO_LOAD;
            null == I ||
                !0 !== A ||
                !1 !== g ||
                e ||
                T({
                    timeToLoad: I?.timeToLoad,
                    messagesCount: r.length,
                    unreadMessagesCount: i.length,
                    loadingTrigger: I?.loadingTrigger ?? f.VA.UNKNOWN,
                    viewId: I?.viewId,
                    channelsFetched: I?.channelsFetched,
                    mentionsFetched: I?.mentionsFetched,
                });
        }, [g, r, i, a, A, I]),
        (0, l.l0)(() => {
            !(function (e) {
                let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: r, totalItemsCount: i, viewId: s } = e;
                c.default.track(p.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
                    unreads_count: t,
                    total_messages_count: n,
                    unread_items_count: r,
                    total_items_count: i,
                    view_id: s,
                });
            })({
                unreadsCount: i?.length ?? 0,
                totalMessagesCount: r?.length ?? 0,
                unreadItemsCount: h.UNREAD.length,
                totalItemsCount: h.TODAY.length + h.YESTERDAY.length + h.OLDER.length,
                viewId: a,
            });
        });
}
