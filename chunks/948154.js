(n.d(t, { Z: () => S }), n(539854), n(388685));
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
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let y = 5,
    O = 1500;
function v(e) {
    return a.Z.fetchRecentMentions(e, h.DJj, null, l.ZP.roleFilter, l.ZP.everyoneFilter);
}
let I = (0, r.throttle)(T, O);
async function T(e) {
    var t,
        n,
        r,
        { preload: a = !1 } = e,
        s = E(e, ['preload']);
    let c = Date.now(),
        h = [],
        m = f.Z.getNotifyingChannelIds();
    if (null == m) return;
    let g = f.Z.getChannelInfoMap();
    for (let e of m) {
        if (a && !u.ZP.hasUnread(e)) continue;
        let r = u.ZP.lastMessageId(e),
            i = null != r && d.default.age(r) > p.ib;
        if (h.length >= y || i) break;
        (a ? (null == (t = g[e]) ? void 0 : t.loadState) === p.a7.UNLOADED : (null == (n = g[e]) ? void 0 : n.loadState) !== p.a7.LOADED) &&
            h.push(
                o.Z.fetchMessages({
                    channelId: e,
                    limit: a ? p.W9 : p.AQ,
                    isPreload: a
                })
            );
    }
    let b = l.ZP.getSettingsFilteredMentions(),
        O = null != b && b.length > 0 ? b[b.length - 1].id : null,
        I = !1;
    if ((l.ZP.hasMore && !l.ZP.loading && (h.push(v(O)), (I = !0)), 0 === h.length))
        return void i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
            preload: a,
            finished: !0
        });
    try {
        await Promise.all(h);
        let e = {
            timeToLoad: Date.now() - c,
            loadingTrigger: null != (r = s.loadingTrigger) ? r : p.X.UNKNOWN,
            viewId: s.viewId,
            channelsFetched: h.length - +!!I,
            mentionsFetched: I
        };
        (a && (0, _.CP)(e),
            i.Z.dispatch({
                type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
                preload: a,
                analyticsPayload: e
            }));
    } catch (e) {
        i.Z.dispatch({ type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE' });
    }
}
let S = {
    loadMoreInbox() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var { preload: t = !1 } = e,
            n = E(e, ['preload']);
        if (!f.Z.canLoadMore({ preload: t })) return !1;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START',
            preload: t
        }),
            I(g({ preload: t }, n)));
    },
    inboxItemClick(e) {
        let { message: t, channel: n, isUnread: r, isSidebar: a, viewId: l, track: u = !0 } = e;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_ITEM_CLICK',
            messageId: t.id,
            isUnread: r
        }),
            u &&
                (0, _.Qz)({
                    interactionType: _.s_.CLICK,
                    message: t,
                    viewId: l
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
        let d = a ? h.Z5c.NOTIFICATIONS_INBOX(n.id, t.id) : h.Z5c.CHANNEL(n.guild_id, n.id, t.id);
        (0, c.uL)(d);
    }
};
