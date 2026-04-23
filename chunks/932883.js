n.d(t, { GM: () => T, Hi: () => C, Ml: () => O, P3: () => f, Ut: () => R, X8: () => N, op: () => S });
var i,
    r = n(627968),
    a = n(64700),
    s = n(132500),
    _ = n(17928),
    l = n(964486),
    o = n(919796),
    E = n(954571),
    d = n(310031),
    c = n(394953),
    u = n(849077),
    I = n(652215);
let A = a.createContext(""),
    T = (e) => {
        let { children: t } = e,
            [n] = a.useState(() => (0, s.A)());
        return (0, r.jsx)(A.Provider, { value: n, children: t });
    },
    S = () => a.useContext(A);
var N =
    (((i = {}).CLICK = "click"),
    (i.CONTEXT_MENU = "context_menu"),
    (i.BOOKMARK = "bookmark"),
    (i.ACK = "ack"),
    (i.SETTINGS = "settings"),
    i);
function O(e) {
    let { message: t, interactionType: n, viewId: i } = e;
    E.default.track(I.HAw.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type,
        view_id: i,
    });
}
function R(e) {
    let { section: t, enabled: n, viewId: i } = e;
    E.default.track(I.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, { section: t, enabled: n, view_id: i });
}
function f(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: i,
        channelsFetched: r,
        mentionsFetched: a,
        loadingTrigger: s,
        viewId: _,
    } = e;
    E.default.track(I.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: i,
        channels_fetched: r,
        mentions_fetched: a,
        loading_trigger: s ?? u.VA.UNKNOWN,
        view_id: _,
    });
}
function C(e) {
    let {
            notificationCenterVariant: t,
            entrypoint: n,
            messages: i,
            unreadMessages: r,
            viewId: s,
            messagesByCategory: A,
        } = e,
        T = a.useRef(null),
        S = a.useRef(!1),
        N = (0, _.bG)([d.A], () => d.A.isLoading),
        O = (0, o.A)(N),
        R = (0, _.bG)([d.A], () => d.A.currentRequestAnalyticsPayload ?? null),
        { unreadRecentMentionsCount: C, unreadChannelIds: p } = (0, c.U4)();
    (0, l.Ay)(() => {
        !(function (e) {
            let { variant: t, viewId: n, entrypoint: i } = e;
            E.default.track(I.HAw.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t, inbox_entrypoint: i, view_id: n });
        })({ variant: t, viewId: s, entrypoint: n }),
            (T.current = Date.now());
    }),
        a.useEffect(() => {
            if (null != T.current && (i?.length > 0 || r?.length > 0) && !S.current) {
                let e = Date.now() - T.current;
                (S.current = !0),
                    (function (e) {
                        let {
                            timeToLoad: t,
                            unreadsCount: n,
                            totalMessagesCount: i,
                            viewId: r,
                            unreadsBadgeMentionCount: a,
                            unreadsBadgeChannelCount: s,
                            unreadMessageItemsCount: _,
                            unreadMentionsCount: l,
                        } = e;
                        E.default.track(I.HAw.NOTIFICATIONS_INBOX_READY, {
                            time_to_load: t,
                            unreads_count: n,
                            total_messages_count: i,
                            view_id: r,
                            unreads_badge_mention_count: a,
                            unreads_badge_channel_count: s,
                            unread_message_items_count: _,
                            unread_mentions_count: l,
                        });
                    })({
                        timeToLoad: e,
                        unreadsCount: r.length,
                        totalMessagesCount: i.length,
                        unreadsBadgeMentionCount: C,
                        unreadsBadgeChannelCount: p.length,
                        unreadMessageItemsCount: A.UNREAD.length,
                        unreadMentionsCount: A.UNREAD.filter((e) => e.every((e) => e.kind === u.yL.MENTION)).length,
                        viewId: s,
                    });
            }
        }, [i, r, s, p, C, A]),
        a.useEffect(() => {
            let e = R?.loadingTrigger === u.VA.AUTO_LOAD;
            null == R ||
                !0 !== O ||
                !1 !== N ||
                e ||
                f({
                    timeToLoad: R?.timeToLoad,
                    messagesCount: i.length,
                    unreadMessagesCount: r.length,
                    loadingTrigger: R?.loadingTrigger ?? u.VA.UNKNOWN,
                    viewId: R?.viewId,
                    channelsFetched: R?.channelsFetched,
                    mentionsFetched: R?.mentionsFetched,
                });
        }, [N, i, r, s, O, R]),
        (0, l.l0)(() => {
            !(function (e) {
                let { unreadsCount: t, totalMessagesCount: n, unreadItemsCount: i, totalItemsCount: r, viewId: a } = e;
                E.default.track(I.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
                    unreads_count: t,
                    total_messages_count: n,
                    unread_items_count: i,
                    total_items_count: r,
                    view_id: a,
                });
            })({
                unreadsCount: r?.length ?? 0,
                totalMessagesCount: i?.length ?? 0,
                unreadItemsCount: A.UNREAD.length,
                totalItemsCount: A.TODAY.length + A.YESTERDAY.length + A.OLDER.length,
                viewId: s,
            });
        });
}
