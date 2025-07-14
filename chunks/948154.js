(n.d(t, { Z: () => E }), n(642613), n(539854), n(388685));
var r = n(392711),
    i = n(570140),
    a = n(235820),
    o = n(904245),
    s = n(455199),
    l = n(306680),
    c = n(709054),
    u = n(787879),
    d = n(982183),
    f = n(981631);
let _ = 5,
    p = 1500;
function h(e) {
    return a.Z.fetchRecentMentions(e, f.DJj, null, s.ZP.roleFilter, s.ZP.everyoneFilter);
}
let m = (0, r.debounce)(g, p);
async function g(e) {
    let { loadUntilMessageId: t, onlyUnread: n = !1 } = e,
        r = [],
        a = u.Z.getNotifyingChannelIds();
    if (null == a) return;
    let f = u.Z.getChannelInfoMap();
    for (let e of (a.sort((e, t) => c.default.compare(l.ZP.lastMessageId(t), l.ZP.lastMessageId(e))), a)) {
        var p, m;
        if (n && !l.ZP.hasUnread(e)) continue;
        let i = l.ZP.lastMessageId(e),
            a = null != t && null != i && 0 > c.default.compare(i, t);
        if (r.length >= _ || a) break;
        (n ? (null == (p = f[e]) ? void 0 : p.loadState) === d.a7.UNLOADED : (null == (m = f[e]) ? void 0 : m.loadState) !== d.a7.LOADED) &&
            r.push(
                o.Z.fetchMessages({
                    channelId: e,
                    limit: n ? d.W9 : d.AQ,
                    isPreload: n
                })
            );
    }
    let g = s.ZP.getSettingsFilteredMentions(),
        E = null != g && g.length > 0 ? g[g.length - 1].id : null;
    if ((s.ZP.hasMore && !s.ZP.loading && r.push(h(E)), 0 === r.length))
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
let E = {
    loadMoreInbox(e, t) {
        if (!u.Z.canLoadMore(e, t)) return !1;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START',
            onlyUnread: t
        }),
            m({
                loadUntilMessageId: e,
                onlyUnread: t
            }));
    }
};
