n.d(t, {
    CP: () => I,
    HP: () => h,
    Qz: () => y,
    RZ: () => O,
    fJ: () => m,
    s_: () => b,
    vU: () => T,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(442837),
    s = n(493773),
    l = n(699682),
    c = n(626135),
    u = n(787879),
    d = n(370774),
    f = n(982183),
    _ = n(981631);
let p = i.createContext(""),
    h = (e) => {
        let { children: t } = e,
            [n] = i.useState(() => (0, a.Z)());
        return (0, r.jsx)(p.Provider, {
            value: n,
            children: t,
        });
    },
    m = () => i.useContext(p);
function g(e) {
    let { variant: t, viewId: n, entrypoint: r } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_OPENED, {
        inbox_variant: t,
        inbox_entrypoint: r,
        view_id: n,
    });
}
function E(e) {
    let {
        timeToLoad: t,
        unreadsCount: n,
        totalMessagesCount: r,
        viewId: i,
        unreadsBadgeMentionCount: a,
        unreadsBadgeChannelCount: o,
        unreadMessageItemsCount: s,
        unreadMentionsCount: l,
    } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_READY, {
        time_to_load: t,
        unreads_count: n,
        total_messages_count: r,
        view_id: i,
        unreads_badge_mention_count: a,
        unreads_badge_channel_count: o,
        unread_message_items_count: s,
        unread_mentions_count: l,
    });
}
var b = (function (e) {
    return (
        (e.CLICK = "click"),
        (e.CONTEXT_MENU = "context_menu"),
        (e.BOOKMARK = "bookmark"),
        (e.ACK = "ack"),
        (e.SETTINGS = "settings"),
        e
    );
})({});
function y(e) {
    var t, n;
    let { message: r, interactionType: i, viewId: a } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: i,
        message_id: r.id,
        channel_id: r.channel_id,
        author_id: r.author.id,
        message_type: r.type,
        view_id: a,
        mentioned_game_ids: null != (n = null == (t = r.mentionGames) ? void 0 : t.map((e) => e.id)) ? n : [],
    });
}
function O(e) {
    let { section: t, enabled: n, viewId: r } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_SECTION_INTERACTED, {
        section: t,
        enabled: n,
        view_id: r,
    });
}
function v(e) {
    let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: r, totalItemsCount: i, viewId: a } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_UNMOUNTED, {
        unreads_count: t,
        total_messages_count: n,
        unread_items_count: r,
        total_items_count: i,
        view_id: a,
    });
}
function I(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: r,
        channelsFetched: i,
        mentionsFetched: a,
        loadingTrigger: o,
        viewId: s,
    } = e;
    c.default.track(_.rMx.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: r,
        channels_fetched: i,
        mentions_fetched: a,
        loading_trigger: null != o ? o : f.X.UNKNOWN,
        view_id: s,
    });
}
function T(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: r,
            unreadMessages: a,
            viewId: c,
            messagesByCategory: _,
        } = e,
        p = i.useRef(null),
        h = i.useRef(!1),
        m = (0, o.e7)([u.Z], () => u.Z.isLoading),
        b = (0, l.Z)(m),
        y = (0, o.e7)([u.Z], () => {
            var e;
            return null != (e = u.Z.currentRequestAnalyticsPayload) ? e : null;
        }),
        { unreadRecentMentionsCount: O, unreadChannelIds: T } = (0, d.O4)();
    (0, s.ZP)(() => {
        g({
            variant: t,
            viewId: c,
            entrypoint: n,
        }),
            (p.current = Date.now());
    }),
        i.useEffect(() => {
            if (
                null != p.current &&
                ((null == r ? void 0 : r.length) > 0 || (null == a ? void 0 : a.length) > 0) &&
                !h.current
            ) {
                let e = Date.now() - p.current;
                (h.current = !0),
                    E({
                        timeToLoad: e,
                        unreadsCount: a.length,
                        totalMessagesCount: r.length,
                        unreadsBadgeMentionCount: O,
                        unreadsBadgeChannelCount: T.length,
                        unreadMessageItemsCount: _.UNREAD.length,
                        unreadMentionsCount: _.UNREAD.filter((e) => e.every((e) => e.kind === f.fL.MENTION)).length,
                        viewId: c,
                    });
            }
        }, [r, a, c, T, O, _]),
        i.useEffect(() => {
            let e = (null == y ? void 0 : y.loadingTrigger) === f.X.AUTO_LOAD;
            if (null != y && !0 === b && !1 === m && !e) {
                var t;
                I({
                    timeToLoad: null == y ? void 0 : y.timeToLoad,
                    messagesCount: r.length,
                    unreadMessagesCount: a.length,
                    loadingTrigger: null != (t = null == y ? void 0 : y.loadingTrigger) ? t : f.X.UNKNOWN,
                    viewId: null == y ? void 0 : y.viewId,
                    channelsFetched: null == y ? void 0 : y.channelsFetched,
                    mentionsFetched: null == y ? void 0 : y.mentionsFetched,
                });
            }
        }, [m, r, a, c, b, y]),
        (0, s.zq)(() => {
            var e, t;
            v({
                unreadsCount: null != (e = null == a ? void 0 : a.length) ? e : 0,
                totalMessagesCount: null != (t = null == r ? void 0 : r.length) ? t : 0,
                unreadItemsCount: _.UNREAD.length,
                totalItemsCount: _.TODAY.length + _.YESTERDAY.length + _.OLDER.length,
                viewId: c,
            });
        });
}
