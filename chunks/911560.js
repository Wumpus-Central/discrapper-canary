n.d(t, { Z: () => E });
var i = n(512969),
    r = n(544891),
    a = n(570140),
    s = n(333023),
    o = n(38618),
    l = n(893607),
    u = n(131704),
    c = n(592125),
    d = n(944486),
    f = n(981631),
    _ = n(176505);
let p = {},
    h = !1;
function m() {
    h ||
        ((h = !0),
        a.Z.subscribe('CONNECTION_OPEN', () => {
            p = {};
            let e = d.Z.getChannelId(),
                t = c.Z.getChannel(e);
            null != e && null == t && g(e);
        }));
}
function g(e) {
    if (null == e || e === s.V || (0, _.AB)(e) || null != c.Z.getChannel(e) || (m(), !o.Z.isConnected())) return Promise.resolve();
    let t = p[e];
    if (null != t) return 'LOADING' === t.type ? t.promise : Promise.resolve();
    let n = (0, i.LX)(location.pathname, {
            path: f.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId(), ':messageId'),
            exact: !0
        }),
        d = r.tn
            .get({
                url: f.ANM.CHANNEL(e),
                rejectWithError: !1
            })
            .then((t) => {
                let { body: i } = t;
                if (((p[e] = { type: 'LOADED' }), u.Ec.has(i.type))) {
                    var r;
                    a.Z.dispatch({
                        type: 'THREAD_CREATE',
                        channel: (0, u.q_)(i),
                        messageId: null == n ? void 0 : null === (r = n.params) || void 0 === r ? void 0 : r.messageId
                    });
                }
            })
            .catch(() => {
                var t;
                (p[e] = { type: 'NOT_FOUND' }),
                    a.Z.dispatch({
                        type: 'CHANNEL_DELETE',
                        channel: {
                            id: e,
                            guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
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
