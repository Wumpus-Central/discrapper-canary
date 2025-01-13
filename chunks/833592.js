n.d(t, {
    Vk: function () {
        return m;
    },
    g3: function () {
        return g;
    },
    jF: function () {
        return h;
    },
    jk: function () {
        return f;
    },
    wt: function () {
        return p;
    }
});
var i = n(990547),
    r = n(544891),
    l = n(283693),
    a = n(570140),
    o = n(695346),
    s = n(573261),
    c = n(140155),
    d = n(178480),
    u = n(981631);
function m(e) {
    a.Z.dispatch({
        type: 'NOTIFICATION_CENTER_SET_ACTIVE',
        active: e
    });
}
function h() {
    a.Z.dispatch({ type: 'RESET_NOTIFICATION_CENTER' });
}
async function f(e, t) {
    if (c.Z.loading) return;
    await a.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS' });
    let n = Math.ceil(c.Z.items.length / e.limit);
    try {
        let r = await s.Z.get({
            url: u.ANM.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: i.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    var t;
                    let i = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map((e) => e.type);
                    return (0, l.iG)({
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
            await a.Z.dispatch({
                type: 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS',
                items: r.body.items,
                cursor: r.body.cursor,
                hasMore: r.body.has_more
            });
    } catch (e) {
        null == t || t(), await a.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE' });
    }
}
function p(e) {
    null != e.local_id
        ? (function (e) {
              a.Z.dispatch({
                  type: 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK',
                  localIds: e
              });
          })([e.local_id])
        : (0, d.RB)(e)
          ? (function (e) {
                a.Z.dispatch({
                    type: 'NOTIFICATION_CENTER_ITEMS_ACK',
                    optimistic: !0,
                    ids: [e]
                });
            })(e.id)
          : _(e.id);
}
async function _(e) {
    try {
        a.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            optimistic: !0,
            ids: [e]
        }),
            await r.tn.post({
                url: u.ANM.NOTIF_CENTER_ITEMS_ACK(e),
                rejectWithError: !0
            });
    } catch (t) {
        a.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE',
            ids: [e]
        });
    }
}
async function g(e) {
    let t = o.d$.getSetting();
    try {
        a.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        }),
            await s.Z.delete({
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
            (a.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE',
                item: e
            }),
            t)
        );
    }
}
