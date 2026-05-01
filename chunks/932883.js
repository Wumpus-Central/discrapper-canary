"use strict";
n.d(t, { GM: () => E, Hi: () => S, Ml: () => A, P3: () => T, Ut: () => I, X8: () => g, op: () => m });
var i,
    r = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(17928),
    l = n(964486),
    u = n(919796),
    c = n(174459),
    d = n(310031),
    _ = n(394953),
    f = n(849077),
    h = n(652215);
let p = s.createContext(""),
    E = (e) => {
        let { children: t } = e,
            [n] = s.useState(() => (0, a.A)());
        return (0, r.jsx)(p.Provider, { value: n, children: t });
    },
    m = () => s.useContext(p);
var g =
    (((i = {}).CLICK = "click"),
    (i.CONTEXT_MENU = "context_menu"),
    (i.BOOKMARK = "bookmark"),
    (i.ACK = "ack"),
    (i.SETTINGS = "settings"),
    i);
function A(e) {
    let { message: t, interactionType: n, viewId: i } = e;
    c.default.track(h.HAw.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type,
        view_id: i,
    });
}
function I(e) {
    let { section: t, enabled: n, viewId: i } = e;
    c.default.track(h.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, { section: t, enabled: n, view_id: i });
}
function T(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: i,
        channelsFetched: r,
        mentionsFetched: s,
        loadingTrigger: a,
        viewId: o,
    } = e;
    c.default.track(h.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: i,
        channels_fetched: r,
        mentions_fetched: s,
        loading_trigger: a ?? f.VA.UNKNOWN,
        view_id: o,
    });
}
function S(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: i,
            unreadMessages: r,
            viewId: a,
            messagesByCategory: p,
        } = e,
        E = s.useRef(null),
        m = s.useRef(!1),
        g = (0, o.bG)([d.A], () => d.A.isLoading),
        A = (0, u.A)(g),
        I = (0, o.bG)([d.A], () => d.A.currentRequestAnalyticsPayload ?? null),
        { unreadRecentMentionsCount: S, unreadChannelIds: N } = (0, _.U4)();
    (0, l.Ay)(() => {
        !(function (e) {
            let { variant: t, viewId: n, entrypoint: i } = e;
            c.default.track(h.HAw.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t, inbox_entrypoint: i, view_id: n });
        })({ variant: t, viewId: a, entrypoint: n }),
            (E.current = Date.now());
    }),
        s.useEffect(() => {
            if (null != E.current && (i?.length > 0 || r?.length > 0) && !m.current) {
                let e = Date.now() - E.current;
                (m.current = !0),
                    (function (e) {
                        let {
                            timeToLoad: t,
                            unreadsCount: n,
                            totalMessagesCount: i,
                            viewId: r,
                            unreadsBadgeMentionCount: s,
                            unreadsBadgeChannelCount: a,
                            unreadMessageItemsCount: o,
                            unreadMentionsCount: l,
                        } = e;
                        c.default.track(h.HAw.NOTIFICATIONS_INBOX_READY, {
                            time_to_load: t,
                            unreads_count: n,
                            total_messages_count: i,
                            view_id: r,
                            unreads_badge_mention_count: s,
                            unreads_badge_channel_count: a,
                            unread_message_items_count: o,
                            unread_mentions_count: l,
                        });
                    })({
                        timeToLoad: e,
                        unreadsCount: r.length,
                        totalMessagesCount: i.length,
                        unreadsBadgeMentionCount: S,
                        unreadsBadgeChannelCount: N.length,
                        unreadMessageItemsCount: p.UNREAD.length,
                        unreadMentionsCount: p.UNREAD.filter((e) => e.every((e) => e.kind === f.yL.MENTION)).length,
                        viewId: a,
                    });
            }
        }, [i, r, a, N, S, p]),
        s.useEffect(() => {
            let e = I?.loadingTrigger === f.VA.AUTO_LOAD;
            null == I ||
                !0 !== A ||
                !1 !== g ||
                e ||
                T({
                    timeToLoad: I?.timeToLoad,
                    messagesCount: i.length,
                    unreadMessagesCount: r.length,
                    loadingTrigger: I?.loadingTrigger ?? f.VA.UNKNOWN,
                    viewId: I?.viewId,
                    channelsFetched: I?.channelsFetched,
                    mentionsFetched: I?.mentionsFetched,
                });
        }, [g, i, r, a, A, I]),
        (0, l.l0)(() => {
            !(function (e) {
                let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: i, totalItemsCount: r, viewId: s } = e;
                c.default.track(h.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
                    unreads_count: t,
                    total_messages_count: n,
                    unread_items_count: i,
                    total_items_count: r,
                    view_id: s,
                });
            })({
                unreadsCount: r?.length ?? 0,
                totalMessagesCount: i?.length ?? 0,
                unreadItemsCount: p.UNREAD.length,
                totalItemsCount: p.TODAY.length + p.YESTERDAY.length + p.OLDER.length,
                viewId: a,
            });
        });
}
