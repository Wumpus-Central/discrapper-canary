(n.d(t, {
    CP: () => I,
    HP: () => h,
    Qz: () => y,
    RZ: () => O,
    fJ: () => m,
    s_: () => b,
    vU: () => T
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    o = n(772848),
    a = n(442837),
    s = n(493773),
    l = n(699682),
    c = n(626135),
    u = n(787879),
    d = n(370774),
    f = n(982183),
    _ = n(981631);
let p = i.createContext(''),
    h = (e) => {
        let { children: t } = e,
            [n] = i.useState(() => (0, o.Z)());
        return (0, r.jsx)(p.Provider, {
            value: n,
            children: t
        });
    },
    m = () => i.useContext(p);
function g(e) {
    let { variant: t, viewId: n, entrypoint: r } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_OPENED, {
        inbox_variant: t,
        inbox_entrypoint: r,
        view_id: n
    });
}
function E(e) {
    let { timeToLoad: t, unreadsCount: n, totalMessagesCount: r, viewId: i, unreadsBadgeMentionCount: o, unreadsBadgeChannelCount: a, unreadMessageItemsCount: s, unreadMentionsCount: l } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_READY, {
        time_to_load: t,
        unreads_count: n,
        total_messages_count: r,
        view_id: i,
        unreads_badge_mention_count: o,
        unreads_badge_channel_count: a,
        unread_message_items_count: s,
        unread_mentions_count: l
    });
}
var b = (function (e) {
    return ((e.CLICK = 'click'), (e.CONTEXT_MENU = 'context_menu'), (e.BOOKMARK = 'bookmark'), (e.ACK = 'ack'), (e.SETTINGS = 'settings'), e);
})({});
function y(e) {
    let { message: t, interactionType: n, viewId: r } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type,
        view_id: r
    });
}
function O(e) {
    let { section: t, enabled: n, viewId: r } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_SECTION_INTERACTED, {
        section: t,
        enabled: n,
        view_id: r
    });
}
function v(e) {
    let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: r, totalItemsCount: i, viewId: o } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_UNMOUNTED, {
        unreads_count: t,
        total_messages_count: n,
        unread_items_count: r,
        total_items_count: i,
        view_id: o
    });
}
function I(e) {
    let { timeToLoad: t, messagesCount: n, unreadMessagesCount: r, channelsFetched: i, mentionsFetched: o, loadingTrigger: a, viewId: s } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: r,
        channels_fetched: i,
        mentions_fetched: o,
        loading_trigger: null != a ? a : f.X.UNKNOWN,
        view_id: s
    });
}
function T(e) {
    let { notificationCenterVariant: t, entrypoint: n, messages: r, unreadMessages: o, viewId: c, messagesByCategory: _ } = e,
        p = i.useRef(null),
        h = i.useRef(!1),
        m = (0, a.e7)([u.Z], () => u.Z.isLoading),
        b = (0, l.Z)(m),
        y = (0, a.e7)([u.Z], () => {
            var e;
            return null != (e = u.Z.currentRequestAnalyticsPayload) ? e : null;
        }),
        { unreadRecentMentionsCount: O, unreadChannelIds: T } = (0, d.O4)();
    ((0, s.ZP)(() => {
        (g({
            variant: t,
            viewId: c,
            entrypoint: n
        }),
            (p.current = Date.now()));
    }),
        i.useEffect(() => {
            if (null != p.current && ((null == r ? void 0 : r.length) > 0 || (null == o ? void 0 : o.length) > 0) && !h.current) {
                let e = Date.now() - p.current;
                ((h.current = !0),
                    E({
                        timeToLoad: e,
                        unreadsCount: o.length,
                        totalMessagesCount: r.length,
                        unreadsBadgeMentionCount: O,
                        unreadsBadgeChannelCount: T.length,
                        unreadMessageItemsCount: _.UNREAD.length,
                        unreadMentionsCount: _.UNREAD.filter((e) => e.every((e) => e.kind === f.fL.MENTION)).length,
                        viewId: c
                    }));
            }
        }, [r, o, c, T, O, _]),
        i.useEffect(() => {
            let e = (null == y ? void 0 : y.loadingTrigger) === f.X.AUTO_LOAD;
            if (null != y && !0 === b && !1 === m && !e) {
                var t;
                I({
                    timeToLoad: null == y ? void 0 : y.timeToLoad,
                    messagesCount: r.length,
                    unreadMessagesCount: o.length,
                    loadingTrigger: null != (t = null == y ? void 0 : y.loadingTrigger) ? t : f.X.UNKNOWN,
                    viewId: null == y ? void 0 : y.viewId,
                    channelsFetched: null == y ? void 0 : y.channelsFetched,
                    mentionsFetched: null == y ? void 0 : y.mentionsFetched
                });
            }
        }, [m, r, o, c, b, y]),
        (0, s.zq)(() => {
            var e, t;
            v({
                unreadsCount: null != (e = null == o ? void 0 : o.length) ? e : 0,
                totalMessagesCount: null != (t = null == r ? void 0 : r.length) ? t : 0,
                unreadItemsCount: _.UNREAD.length,
                totalItemsCount: _.TODAY.length + _.YESTERDAY.length + _.OLDER.length,
                viewId: c
            });
        }));
}
