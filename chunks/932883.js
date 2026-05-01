n.d(t, { GM: () => T, Hi: () => m, Ml: () => N, P3: () => p, Ut: () => f, X8: () => S, op: () => h });
var i,
    a = n(627968),
    r = n(64700),
    s = n(132500),
    l = n(17928),
    o = n(964486),
    d = n(919796),
    c = n(954571),
    _ = n(310031),
    E = n(394953),
    u = n(849077),
    A = n(652215);
let I = r.createContext(""),
    T = (e) => {
        let { children: t } = e,
            [n] = r.useState(() => (0, s.A)());
        return (0, a.jsx)(I.Provider, { value: n, children: t });
    },
    h = () => r.useContext(I);
var S =
    (((i = {}).CLICK = "click"),
    (i.CONTEXT_MENU = "context_menu"),
    (i.BOOKMARK = "bookmark"),
    (i.ACK = "ack"),
    (i.SETTINGS = "settings"),
    i);
function N(e) {
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
function f(e) {
    let { section: t, enabled: n, viewId: i } = e;
    c.default.track(A.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, { section: t, enabled: n, view_id: i });
}
function p(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: i,
        channelsFetched: a,
        mentionsFetched: r,
        loadingTrigger: s,
        viewId: l,
    } = e;
    c.default.track(A.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: i,
        channels_fetched: a,
        mentions_fetched: r,
        loading_trigger: s ?? u.VA.UNKNOWN,
        view_id: l,
    });
}
function m(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: i,
            unreadMessages: a,
            viewId: s,
            messagesByCategory: I,
        } = e,
        T = r.useRef(null),
        h = r.useRef(!1),
        S = (0, l.bG)([_.A], () => _.A.isLoading),
        N = (0, d.A)(S),
        f = (0, l.bG)([_.A], () => _.A.currentRequestAnalyticsPayload ?? null),
        { unreadRecentMentionsCount: m, unreadChannelIds: O } = (0, E.U4)();
    (0, o.Ay)(() => {
        !(function (e) {
            let { variant: t, viewId: n, entrypoint: i } = e;
            c.default.track(A.HAw.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t, inbox_entrypoint: i, view_id: n });
        })({ variant: t, viewId: s, entrypoint: n }),
            (T.current = Date.now());
    }),
        r.useEffect(() => {
            if (null != T.current && (i?.length > 0 || a?.length > 0) && !h.current) {
                let e = Date.now() - T.current;
                (h.current = !0),
                    (function (e) {
                        let {
                            timeToLoad: t,
                            unreadsCount: n,
                            totalMessagesCount: i,
                            viewId: a,
                            unreadsBadgeMentionCount: r,
                            unreadsBadgeChannelCount: s,
                            unreadMessageItemsCount: l,
                            unreadMentionsCount: o,
                        } = e;
                        c.default.track(A.HAw.NOTIFICATIONS_INBOX_READY, {
                            time_to_load: t,
                            unreads_count: n,
                            total_messages_count: i,
                            view_id: a,
                            unreads_badge_mention_count: r,
                            unreads_badge_channel_count: s,
                            unread_message_items_count: l,
                            unread_mentions_count: o,
                        });
                    })({
                        timeToLoad: e,
                        unreadsCount: a.length,
                        totalMessagesCount: i.length,
                        unreadsBadgeMentionCount: m,
                        unreadsBadgeChannelCount: O.length,
                        unreadMessageItemsCount: I.UNREAD.length,
                        unreadMentionsCount: I.UNREAD.filter((e) => e.every((e) => e.kind === u.yL.MENTION)).length,
                        viewId: s,
                    });
            }
        }, [i, a, s, O, m, I]),
        r.useEffect(() => {
            let e = f?.loadingTrigger === u.VA.AUTO_LOAD;
            null == f ||
                !0 !== N ||
                !1 !== S ||
                e ||
                p({
                    timeToLoad: f?.timeToLoad,
                    messagesCount: i.length,
                    unreadMessagesCount: a.length,
                    loadingTrigger: f?.loadingTrigger ?? u.VA.UNKNOWN,
                    viewId: f?.viewId,
                    channelsFetched: f?.channelsFetched,
                    mentionsFetched: f?.mentionsFetched,
                });
        }, [S, i, a, s, N, f]),
        (0, o.l0)(() => {
            !(function (e) {
                let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: i, totalItemsCount: a, viewId: r } = e;
                c.default.track(A.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
                    unreads_count: t,
                    total_messages_count: n,
                    unread_items_count: i,
                    total_items_count: a,
                    view_id: r,
                });
            })({
                unreadsCount: a?.length ?? 0,
                totalMessagesCount: i?.length ?? 0,
                unreadItemsCount: I.UNREAD.length,
                totalItemsCount: I.TODAY.length + I.YESTERDAY.length + I.OLDER.length,
                viewId: s,
            });
        });
}
