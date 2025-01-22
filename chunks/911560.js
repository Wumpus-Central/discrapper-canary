var i = r(512969),
    a = r(544891),
    o = r(570140),
    s = r(38618),
    l = r(893607),
    u = r(131704),
    c = r(592125),
    d = r(944486),
    f = r(981631),
    p = r(176505);
let h = {},
    _ = !1;
function m() {
    !_ &&
        ((_ = !0),
        o.Z.subscribe('CONNECTION_OPEN', () => {
            h = {};
            let e = d.Z.getChannelId(),
                n = c.Z.getChannel(e);
            null != e && null == n && g(e);
        }));
}
function g(e) {
    if (null == e || e === p.V || (0, p.AB)(e) || null != c.Z.getChannel(e)) return Promise.resolve();
    if ((m(), !s.Z.isConnected())) return Promise.resolve();
    let n = h[e];
    if (null != n) return 'LOADING' === n.type ? n.promise : Promise.resolve();
    let r = (0, i.LX)(location.pathname, {
            path: f.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId(), ':messageId'),
            exact: !0
        }),
        d = a.tn
            .get({
                url: f.ANM.CHANNEL(e),
                rejectWithError: !1
            })
            .then((n) => {
                let { body: i } = n;
                if (((h[e] = { type: 'LOADED' }), u.Ec.has(i.type))) {
                    var a;
                    o.Z.dispatch({
                        type: 'THREAD_CREATE',
                        channel: (0, u.q_)(i),
                        messageId: null == r ? void 0 : null === (a = r.params) || void 0 === a ? void 0 : a.messageId
                    });
                }
            })
            .catch(() => {
                var n;
                (h[e] = { type: 'NOT_FOUND' }),
                    o.Z.dispatch({
                        type: 'CHANNEL_DELETE',
                        channel: {
                            id: e,
                            guild_id: null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.guildId,
                            parent_id: void 0
                        }
                    });
            });
    return (
        (h[e] = {
            type: 'LOADING',
            promise: d
        }),
        d
    );
}
n.Z = { loadThread: g };
