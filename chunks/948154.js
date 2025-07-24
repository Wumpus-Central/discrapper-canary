(n.d(t, { Z: () => O }), n(539854), n(388685));
var r = n(392711),
    i = n(570140),
    a = n(235820),
    o = n(904245),
    s = n(45114),
    l = n(455199),
    c = n(703656),
    u = n(306680),
    d = n(709054),
    _ = n(804932),
    f = n(787879),
    p = n(982183),
    h = n(981631);
let m = 5,
    g = 1500;
function E(e) {
    return a.Z.fetchRecentMentions(e, h.DJj, null, l.ZP.roleFilter, l.ZP.everyoneFilter);
}
let b = (0, r.throttle)(y, g);
async function y(e) {
    let { preload: t = !1 } = e,
        n = [],
        r = f.Z.getNotifyingChannelIds();
    if (null == r) return;
    let a = f.Z.getChannelInfoMap();
    for (let e of r) {
        var s, c;
        if (t && !u.ZP.hasUnread(e)) continue;
        let r = u.ZP.lastMessageId(e),
            i = null != r && d.default.age(r) > p.ib;
        if (n.length >= m || i) break;
        (t ? (null == (s = a[e]) ? void 0 : s.loadState) === p.a7.UNLOADED : (null == (c = a[e]) ? void 0 : c.loadState) !== p.a7.LOADED) &&
            n.push(
                o.Z.fetchMessages({
                    channelId: e,
                    limit: t ? p.W9 : p.AQ,
                    isPreload: t
                })
            );
    }
    let _ = l.ZP.getSettingsFilteredMentions(),
        h = null != _ && _.length > 0 ? _[_.length - 1].id : null;
    if ((l.ZP.hasMore && !l.ZP.loading && n.push(E(h)), 0 === n.length))
        return void i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
            preload: t,
            finished: !0
        });
    try {
        (await Promise.all(n),
            i.Z.dispatch({
                type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
                preload: t
            }));
    } catch (e) {
        i.Z.dispatch({ type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE' });
    }
}
let O = {
    loadMoreInbox() {
        let { preload: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!f.Z.canLoadMore({ preload: e })) return !1;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START',
            preload: e
        }),
            b({ preload: e }));
    },
    inboxItemClick(e) {
        let { message: t, channel: n, isUnread: r, isSidebar: a, track: l = !0 } = e;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_ITEM_CLICK',
            messageId: t.id,
            isUnread: r
        }),
            l &&
                (0, _.Qz)({
                    interactionType: _.s_.CLICK,
                    message: t
                }),
            r &&
                s.In(
                    t.channel_id,
                    {
                        section: h.jXE.INBOX,
                        object: h.qAy.ACK_MESSAGE_VIEWED,
                        objectType: h.Qqv.ACK_SEMI_AUTOMATIC
                    },
                    !0,
                    void 0,
                    t.id
                ),
            o.Z.trackJump(n.id, t.id, p.JP));
        let u = a ? h.Z5c.NOTIFICATIONS_INBOX(n.id, t.id) : h.Z5c.CHANNEL(n.guild_id, n.id, t.id);
        (0, c.uL)(u);
    }
};
