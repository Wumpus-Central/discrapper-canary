n.d(t, {
    Qz: () => u,
    RZ: () => d,
    s_: () => c,
    vU: () => _
});
var r = n(73800),
    i = n(493773),
    a = n(626135),
    o = n(981631);
function s(e) {
    let { variant: t } = e;
    a.default.track(o.rMx.NOTIFICATIONS_INBOX_OPENED, { inbox_variant: t });
}
function l(e) {
    let { timeToLoad: t, unreadsCount: n, totalMessagesCount: r } = e;
    a.default.track(o.rMx.NOTIFICATIONS_INBOX_LOADED, {
        time_to_load: t,
        unreads_count: n,
        total_messages_count: r
    });
}
var c = (function (e) {
    return ((e.CLICK = 'click'), (e.CONTEXT_MENU = 'context_menu'), (e.BOOKMARK = 'bookmark'), (e.ACK = 'ack'), (e.SETTINGS = 'settings'), e);
})({});
function u(e) {
    let { message: t, interactionType: n } = e;
    a.default.track(o.rMx.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: n,
        message_id: t.id,
        channel_id: t.channel_id,
        author_id: t.author.id,
        message_type: t.type
    });
}
function d(e) {
    let { section: t, enabled: n } = e;
    a.default.track(o.rMx.NOTIFICATIONS_INBOX_SECTION_INTERACTED, {
        section: t,
        enabled: n
    });
}
function f(e) {
    let { unreadsCount: t, totalMessagesCount: n } = e;
    a.default.track(o.rMx.NOTIFICATIONS_INBOX_UNMOUNTED, {
        unreads_count: t,
        total_messages_count: n
    });
}
function _(e) {
    let { notificationCenterVariant: t, messages: n, unreadMessages: a } = e,
        o = r.useRef(null),
        c = r.useRef(!1);
    ((0, i.ZP)(() => {
        (s({ variant: t }), (o.current = Date.now()));
    }),
        r.useEffect(() => {
            if (null != o.current && null != n && null != a && !c.current) {
                let e = Date.now() - o.current;
                ((c.current = !0),
                    l({
                        timeToLoad: e,
                        unreadsCount: a.length,
                        totalMessagesCount: n.length
                    }));
            }
        }, [n, a]),
        (0, i.zq)(() => {
            var e, t;
            f({
                unreadsCount: null != (e = null == a ? void 0 : a.length) ? e : 0,
                totalMessagesCount: null != (t = null == n ? void 0 : n.length) ? t : 0
            });
        }));
}
