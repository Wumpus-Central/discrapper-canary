n.d(t, {
    Qz: () => c,
    RZ: () => u,
    s_: () => s,
    vU: () => d
});
var r,
    i = n(73800),
    l = n(493773),
    o = n(626135),
    a = n(981631),
    s = (((r = {}).CLICK = 'click'), (r.CONTEXT_MENU = 'context_menu'), (r.BOOKMARK = 'bookmark'), (r.ACK = 'ack'), (r.SETTINGS = 'settings'), r);
function c(e) {
    let { message: t, interactionType: n } = e;
    o.default.track(a.rMx.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type
    });
}
function u(e) {
    let { section: t, enabled: n } = e;
    o.default.track(a.rMx.NOTIFICATIONS_INBOX_SECTION_INTERACTED, {
        section: t,
        enabled: n
    });
}
function d(e) {
    let { notificationCenterVariant: t, messages: n, unreadMessages: r } = e,
        s = i.useRef(null),
        c = i.useRef(!1);
    ((0, l.ZP)(() => {
        (!(function (e) {
            let { variant: t } = e;
            o.default.track(a.rMx.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t });
        })({ variant: t }),
            (s.current = Date.now()));
    }),
        i.useEffect(() => {
            if (null != s.current && null != n && null != r && !c.current) {
                let e = Date.now() - s.current;
                ((c.current = !0),
                    (function (e) {
                        let { timeToLoad: t, unreadsCount: n, totalMessagesCount: r } = e;
                        o.default.track(a.rMx.NOTIFICATIONS_INBOX_LOADED, {
                            time_to_load: t,
                            unreads_count: n,
                            total_messages_count: r
                        });
                    })({
                        timeToLoad: e,
                        unreadsCount: r.length,
                        totalMessagesCount: n.length
                    }));
            }
        }, [n, r]),
        (0, l.zq)(() => {
            var e, t;
            !(function (e) {
                let { unreadsCount: t, totalMessagesCount: n } = e;
                o.default.track(a.rMx.NOTIFICATIONS_INBOX_UNMOUNTED, {
                    unreads_count: t,
                    total_messages_count: n
                });
            })({
                unreadsCount: null != (e = null == r ? void 0 : r.length) ? e : 0,
                totalMessagesCount: null != (t = null == n ? void 0 : n.length) ? t : 0
            });
        }));
}
