n.d(t, { Z: () => E });
var r = n(512969),
    i = n(544891),
    o = n(570140),
    a = n(333023),
    s = n(38618),
    l = n(893607),
    c = n(131704),
    u = n(592125),
    d = n(944486),
    f = n(981631),
    _ = n(176505);
let p = {},
    h = !1;
function m() {
    h ||
        ((h = !0),
        o.Z.subscribe('CONNECTION_OPEN', () => {
            p = {};
            let e = d.Z.getChannelId(),
                t = u.Z.getChannel(e);
            null != e && null == t && g(e);
        }));
}
function g(e) {
    if (null == e || e === a.V || (0, _.AB)(e) || null != u.Z.getChannel(e) || (m(), !s.Z.isConnected())) return Promise.resolve();
    let t = p[e];
    if (null != t)
        if ('LOADING' === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, r.LX)(location.pathname, {
            path: f.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId(), ':messageId'),
            exact: !0
        }),
        d = i.tn
            .get({
                url: f.ANM.CHANNEL(e),
                rejectWithError: !1
            })
            .then((t) => {
                let { body: r } = t;
                if (((p[e] = { type: 'LOADED' }), c.Ec.has(r.type))) {
                    var i;
                    o.Z.dispatch({
                        type: 'THREAD_CREATE',
                        channel: (0, c.q_)(r),
                        messageId: null == n || null == (i = n.params) ? void 0 : i.messageId
                    });
                }
            })
            .catch(() => {
                var t;
                (p[e] = { type: 'NOT_FOUND' }),
                    o.Z.dispatch({
                        type: 'CHANNEL_DELETE',
                        channel: {
                            id: e,
                            guild_id: null == n || null == (t = n.params) ? void 0 : t.guildId,
                            parent_id: void 0
                        }
                    });
            });
    return (
        (p[e] = {
            type: 'LOADING',
            promise: d
        }),
        d
    );
}
let E = { loadThread: g };
