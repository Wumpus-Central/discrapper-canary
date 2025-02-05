n.d(t, {
    Vk: () => m,
    g3: () => f,
    jF: () => _,
    jk: () => h,
    wt: () => p
});
var i = n(990547),
    l = n(544891),
    a = n(283693),
    r = n(570140),
    s = n(695346),
    o = n(573261),
    c = n(140155),
    d = n(178480),
    u = n(981631);
function m(e) {
    r.Z.dispatch({
        type: 'NOTIFICATION_CENTER_SET_ACTIVE',
        active: e
    });
}
function _() {
    r.Z.dispatch({ type: 'RESET_NOTIFICATION_CENTER' });
}
async function h(e, t) {
    if (c.Z.loading) return;
    await r.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS' });
    let n = Math.ceil(c.Z.items.length / e.limit);
    try {
        let l = await o.Z.get({
            url: u.ANM.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: i.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    var t;
                    let i = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map((e) => e.type);
                    return (0, a.iG)({
                        page: n,
                        items: i,
                        item_count: i.length
                    });
                }
            },
            query: { ...e },
            rejectWithError: !0
        });
        null == t || t(),
            await r.Z.dispatch({
                type: 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS',
                items: l.body.items,
                cursor: l.body.cursor,
                hasMore: l.body.has_more
            });
    } catch (e) {
        null == t || t(), await r.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE' });
    }
}
function p(e) {
    var t, n;
    null != e.local_id
        ? ((t = [e.local_id]),
          r.Z.dispatch({
              type: 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK',
              localIds: t
          }))
        : (0, d.RB)(e)
          ? ((n = e.id),
            r.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEMS_ACK',
                optimistic: !0,
                ids: [n]
            }))
          : g(e.id);
}
async function g(e) {
    try {
        r.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            optimistic: !0,
            ids: [e]
        }),
            await l.tn.post({
                url: u.ANM.NOTIF_CENTER_ITEMS_ACK(e),
                rejectWithError: !0
            });
    } catch (t) {
        r.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE',
            ids: [e]
        });
    }
}
async function f(e) {
    let t = s.d$.getSetting();
    try {
        r.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        }),
            await o.Z.delete({
                url: u.ANM.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, d.RB)(e) ? 'mention' : 'regular' },
                trackedActionData: {
                    event: i.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
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
            (r.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE',
                item: e
            }),
            t)
        );
    }
}
