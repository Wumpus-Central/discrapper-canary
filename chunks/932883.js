n.d(t, { GM: () => I, Hi: () => S, Ml: () => T, P3: () => g, Ut: () => m, X8: () => p, op: () => f });
var i,
    r = n(477900),
    a = n(582128),
    s = n(132500),
    l = n(819169),
    o = n(17928),
    d = n(964486),
    c = n(174459),
    u = n(310031),
    _ = n(394953),
    E = n(849077),
    A = n(652215);
let h = a.createContext("");
function I(e) {
    let { children: t } = e,
        [n] = a.useState(() => (0, s.A)());
    return (0, r.jsx)(h.Provider, { value: n, children: t });
}
function f() {
    return a.useContext(h);
}
var p =
    (((i = {}).CLICK = "click"),
    (i.CONTEXT_MENU = "context_menu"),
    (i.BOOKMARK = "bookmark"),
    (i.ACK = "ack"),
    (i.SETTINGS = "settings"),
    i);
function T(e) {
    let { message: t, interactionType: n, viewId: i } = e;
    c.default.track(A.HAw.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type,
        view_id: i,
    });
}
function m(e) {
    let { section: t, enabled: n, viewId: i } = e;
    c.default.track(A.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, { section: t, enabled: n, view_id: i });
}
function g(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: i,
        channelsFetched: r,
        mentionsFetched: a,
        loadingTrigger: s,
        viewId: l,
    } = e;
    c.default.track(A.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: i,
        channels_fetched: r,
        mentions_fetched: a,
        loading_trigger: s ?? E.VA.UNKNOWN,
        view_id: l,
    });
}
function S(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: i,
            unreadMessages: r,
            viewId: s,
            messagesByCategory: h,
        } = e,
        I = a.useRef(null),
        f = a.useRef(!1),
        p = (0, o.bG)([u.A], () => u.A.isLoading),
        T = (0, l.A)(p),
        m = (0, o.bG)([u.A], () => u.A.currentRequestAnalyticsPayload ?? null),
        { unreadRecentMentionsCount: S, unreadChannelIds: N } = (0, _.U4)();
    (0, d.Ay)(() => {
        !(function (e) {
            let { variant: t, viewId: n, entrypoint: i } = e;
            c.default.track(A.HAw.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t, inbox_entrypoint: i, view_id: n });
        })({ variant: t, viewId: s, entrypoint: n }),
            (I.current = Date.now());
    }),
        a.useEffect(() => {
            if (null != I.current && (i?.length > 0 || r?.length > 0) && !f.current) {
                let e = Date.now() - I.current;
                (f.current = !0),
                    (function (e) {
                        let {
                            timeToLoad: t,
                            unreadsCount: n,
                            totalMessagesCount: i,
                            viewId: r,
                            unreadsBadgeMentionCount: a,
                            unreadsBadgeChannelCount: s,
                            unreadMessageItemsCount: l,
                            unreadMentionsCount: o,
                        } = e;
                        c.default.track(A.HAw.NOTIFICATIONS_INBOX_READY, {
                            time_to_load: t,
                            unreads_count: n,
                            total_messages_count: i,
                            view_id: r,
                            unreads_badge_mention_count: a,
                            unreads_badge_channel_count: s,
                            unread_message_items_count: l,
                            unread_mentions_count: o,
                        });
                    })({
                        timeToLoad: e,
                        unreadsCount: r.length,
                        totalMessagesCount: i.length,
                        unreadsBadgeMentionCount: S,
                        unreadsBadgeChannelCount: N.length,
                        unreadMessageItemsCount: h.UNREAD.length,
                        unreadMentionsCount: h.UNREAD.filter((e) => e.every((e) => e.kind === E.yL.MENTION)).length,
                        viewId: s,
                    });
            }
        }, [i, r, s, N, S, h]),
        a.useEffect(() => {
            let e = m?.loadingTrigger === E.VA.AUTO_LOAD;
            null == m ||
                !0 !== T ||
                !1 !== p ||
                e ||
                g({
                    timeToLoad: m?.timeToLoad,
                    messagesCount: i.length,
                    unreadMessagesCount: r.length,
                    loadingTrigger: m?.loadingTrigger ?? E.VA.UNKNOWN,
                    viewId: m?.viewId,
                    channelsFetched: m?.channelsFetched,
                    mentionsFetched: m?.mentionsFetched,
                });
        }, [p, i, r, s, T, m]),
        (0, d.l0)(() => {
            !(function (e) {
                let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: i, totalItemsCount: r, viewId: a } = e;
                c.default.track(A.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
                    unreads_count: t,
                    total_messages_count: n,
                    unread_items_count: i,
                    total_items_count: r,
                    view_id: a,
                });
            })({
                unreadsCount: r?.length ?? 0,
                totalMessagesCount: i?.length ?? 0,
                unreadItemsCount: h.UNREAD.length,
                totalItemsCount: h.TODAY.length + h.YESTERDAY.length + h.OLDER.length,
                viewId: s,
            });
        });
}
