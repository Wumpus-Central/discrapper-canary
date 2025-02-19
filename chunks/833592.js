n.d(t, {
    Vk: () => p,
    g3: () => _,
    jF: () => m,
    jk: () => f,
    wt: () => h
});
var r = n(990547),
    i = n(544891),
    a = n(283693),
    o = n(570140),
    l = n(695346),
    s = n(573261),
    c = n(140155),
    d = n(178480),
    u = n(981631);
function p(e) {
    o.Z.dispatch({
        type: 'NOTIFICATION_CENTER_SET_ACTIVE',
        active: e
    });
}
function m() {
    o.Z.dispatch({ type: 'RESET_NOTIFICATION_CENTER' });
}
async function f(e, t) {
    if (c.Z.loading) return;
    await o.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS' });
    let n = Math.ceil(c.Z.items.length / e.limit);
    try {
        let i = await s.Z.get({
            url: u.ANM.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: r.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    var t;
                    let r = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map((e) => e.type);
                    return (0, a.iG)({
                        page: n,
                        items: r,
                        item_count: r.length
                    });
                }
            },
            query: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
            rejectWithError: !0
        });
        null == t || t(),
            await o.Z.dispatch({
                type: 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS',
                items: i.body.items,
                cursor: i.body.cursor,
                hasMore: i.body.has_more
            });
    } catch (e) {
        null == t || t(), await o.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE' });
    }
}
function h(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]),
          o.Z.dispatch({
              type: 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK',
              localIds: t
          }))
        : (0, d.RB)(e)
          ? ((n = e.id),
            o.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEMS_ACK',
                optimistic: !0,
                ids: [n]
            }))
          : g(e.id);
}
async function g(e) {
    try {
        o.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            optimistic: !0,
            ids: [e]
        }),
            await i.tn.post({
                url: u.ANM.NOTIF_CENTER_ITEMS_ACK(e),
                rejectWithError: !0
            });
    } catch (t) {
        o.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE',
            ids: [e]
        });
    }
}
async function _(e) {
    let t = l.d$.getSetting();
    try {
        o.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        }),
            await s.Z.delete({
                url: u.ANM.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, d.RB)(e) ? 'mention' : 'regular' },
                trackedActionData: {
                    event: r.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: {
                        notification_center_id: e.id,
                        acked: (0, d.r)(e, t),
                        item_type: e.type
                    }
                },
                rejectWithError: !1
            });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE',
                item: e
            }),
            t)
        );
    }
}
