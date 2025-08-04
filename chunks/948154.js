(n.d(t, { Z: () => A }), n(539854), n(388685));
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
    return a.Z.fetchRecentMentions({
        before: e,
        limit: h.DJj,
        roles: l.ZP.roleFilter,
        everyone: l.ZP.everyoneFilter,
        feature: p.Lr
    });
}
let I = (0, r.throttle)(S, O);
function T(e) {
    let t = _.Z.getChannelInfoMap(),
        n = [];
    for (let i of e) {
        var r;
        if ((null == (r = t[i]) ? void 0 : r.loadState) === p.a7.LOADED) continue;
        let e = u.ZP.lastMessageId(i),
            a = null != e && d.default.age(e) > p.ib;
        if (n.length >= y || a) break;
        let s = o.Z.fetchMessages({
            channelId: i,
            limit: p.AQ,
            feature: p.Lr
        });
        !1 !== s && null != s && n.push(s);
    }
    return n;
}
async function S(e) {
    var t,
        { preload: n = !1 } = e,
        r = E(e, ['preload']);
    let a = Date.now(),
        o = _.Z.getNotifyingChannelIds();
    if (null == o) return;
    let s = n ? [] : T(o),
        c = l.ZP.getSettingsFilteredMentions(),
        u = null != c && c.length > 0 ? c[c.length - 1].id : null,
        d = !1;
    if ((l.ZP.hasMore && !l.ZP.loading && (s.push(v(u)), (d = !0)), 0 === s.length))
        return void i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
            preload: n,
            finished: !0
        });
    try {
        await Promise.all(s);
        let e = {
            timeToLoad: Date.now() - a,
            loadingTrigger: null != (t = r.loadingTrigger) ? t : p.X.UNKNOWN,
            viewId: r.viewId,
            channelsFetched: s.length - +!!d,
            mentionsFetched: d
        };
        (n && (0, f.CP)(e),
            i.Z.dispatch({
                type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS',
                preload: n,
                analyticsPayload: e
            }));
    } catch (e) {
        i.Z.dispatch({ type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE' });
    }
}
let A = {
    loadMoreInbox() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var { preload: t = !1 } = e,
            n = E(e, ['preload']);
        if (!_.Z.canLoadMore({ preload: t })) return !1;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START',
            preload: t
        }),
            I(g({ preload: t }, n)));
    },
    inboxItemClick: function (e) {
        let { message: t, channel: n, isUnread: r, isSidebar: a, viewId: l, track: u = !0 } = e;
        (i.Z.dispatch({
            type: 'NOTIFICATIONS_INBOX_ITEM_CLICK',
            messageId: t.id,
            isUnread: r
        }),
            u &&
                (0, f.Qz)({
                    interactionType: f.s_.CLICK,
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
        let d = a ? h.STv : n.guild_id;
        (0, c.uL)(h.Z5c.CHANNEL(d, n.id, t.id));
    }
};
