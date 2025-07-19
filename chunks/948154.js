(n.d(t, { Z: () => O }), n(642613), n(539854), n(388685));
var r = n(392711),
    i = n(570140),
    a = n(235820),
    o = n(904245),
    s = n(45114),
    l = n(455199),
    c = n(703656),
    u = n(306680),
    d = n(709054),
    f = n(804932),
    _ = n(787879),
    p = n(982183),
    h = n(981631);
let m = 5,
    g = 1500;
function E(e) {
    return a.Z.fetchRecentMentions(e, h.DJj, null, l.ZP.roleFilter, l.ZP.everyoneFilter);
}
let b = (0, r.debounce)(y, g);
async function y(e) {
    let { loadUntilMessageId: t, onlyUnread: n = !1 } = e,
        r = [],
        a = _.Z.getNotifyingChannelIds();
    if (null == a) return;
    let s = _.Z.getChannelInfoMap();
    for (let e of (a.sort((e, t) => d.default.compare(u.ZP.lastMessageId(t), u.ZP.lastMessageId(e))), a)) {
        var c, f;
        if (n && !u.ZP.hasUnread(e)) continue;
        let i = u.ZP.lastMessageId(e),
            a = null != t && null != i && 0 > d.default.compare(i, t);
        if (r.length >= m || a) break;
        (n ? (null == (c = s[e]) ? void 0 : c.loadState) === p.a7.UNLOADED : (null == (f = s[e]) ? void 0 : f.loadState) !== p.a7.LOADED) &&
            r.push(
                o.Z.fetchMessages({
                    channelId: e,
                    limit: n ? p.W9 : p.AQ,
                    isPreload: n
                })
            );
    }
    let h = l.ZP.getSettingsFilteredMentions(),
        g = null != h && h.length > 0 ? h[h.length - 1].id : null;
    if ((l.ZP.hasMore && !l.ZP.loading && r.push(E(g)), 0 === r.length))
        return void i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
            onlyUnread: n,
            finished: !0,
            requestedMessageId: t
        });
    try {
        (await Promise.all(r),
            i.Z.dispatch({
                type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
                onlyUnread: n,
                requestedMessageId: t
            }));
    } catch (e) {
        i.Z.dispatch({ type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE' });
    }
}
let O = {
    loadMoreInbox(e, t) {
        if (!_.Z.canLoadMore(e, t)) return !1;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START',
            onlyUnread: t
        }),
            b({
                loadUntilMessageId: e,
                onlyUnread: t
            }));
    },
    inboxItemClick(e) {
        let { message: t, channel: n, isUnread: r, isSidebar: a, track: l = !0 } = e;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_ITEM_CLICK',
            messageId: t.id,
            isUnread: r
        }),
            l &&
                (0, f.Qz)({
                    interactionType: f.s_.CLICK,
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
