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
    l = n(570140),
    o = n(695346),
    s = n(573261),
    c = n(140155),
    u = n(178480),
    d = n(981631);
function p(e) {
    l.Z.dispatch({
        type: 'NOTIFICATION_CENTER_SET_ACTIVE',
        active: e
    });
}
function m() {
    l.Z.dispatch({ type: 'RESET_NOTIFICATION_CENTER' });
}
async function f(e, t) {
    if (c.Z.loading) return;
    await l.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS' });
    let n = Math.ceil(c.Z.items.length / e.limit);
    try {
        let i = await s.Z.get({
            url: d.ANM.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: r.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    var t;
                    let r = ((null == (t = e.body) ? void 0 : t.items) || []).map((e) => e.type);
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
            await l.Z.dispatch({
                type: 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS',
                items: i.body.items,
                cursor: i.body.cursor,
                hasMore: i.body.has_more
            });
    } catch (e) {
        null == t || t(), await l.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE' });
    }
}
function h(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]),
          l.Z.dispatch({
              type: 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK',
              localIds: t
          }))
        : (0, u.RB)(e)
          ? ((n = e.id),
            l.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEMS_ACK',
                optimistic: !0,
                ids: [n]
            }))
          : g(e.id);
}
async function g(e) {
    try {
        l.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            optimistic: !0,
            ids: [e]
        }),
            await i.tn.post({
                url: d.ANM.NOTIF_CENTER_ITEMS_ACK(e),
                rejectWithError: !0
            });
    } catch (t) {
        l.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE',
            ids: [e]
        });
    }
}
async function _(e) {
    let t = o.d$.getSetting();
    try {
        l.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        }),
            await s.Z.delete({
                url: d.ANM.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, u.RB)(e) ? 'mention' : 'regular' },
                trackedActionData: {
                    event: r.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: {
                        notification_center_id: e.id,
                        acked: (0, u.r)(e, t),
                        item_type: e.type
                    }
                },
                rejectWithError: !1
            });
    } catch (t) {
        throw (
            (l.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE',
                item: e
            }),
            t)
        );
    }
}
