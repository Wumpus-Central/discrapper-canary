var i = r(512969),
    a = r(544891),
    o = r(570140),
    s = r(333023),
    l = r(38618),
    u = r(893607),
    c = r(131704),
    d = r(592125),
    f = r(944486),
    p = r(981631),
    h = r(176505);
let _ = {},
    m = !1;
function g() {
    !m &&
        ((m = !0),
        o.Z.subscribe('CONNECTION_OPEN', () => {
            _ = {};
            let e = f.Z.getChannelId(),
                n = d.Z.getChannel(e);
            null != e && null == n && E(e);
        }));
}
function E(e) {
    if (null == e || e === s.V || (0, h.AB)(e) || null != d.Z.getChannel(e)) return Promise.resolve();
    if ((g(), !l.Z.isConnected())) return Promise.resolve();
    let n = _[e];
    if (null != n) return 'LOADING' === n.type ? n.promise : Promise.resolve();
    let r = (0, i.LX)(location.pathname, {
            path: p.Z5c.CHANNEL(u.Hw.guildId(), u.Hw.channelId(), ':messageId'),
            exact: !0
        }),
        f = a.tn
            .get({
                url: p.ANM.CHANNEL(e),
                rejectWithError: !1
            })
            .then((n) => {
                let { body: i } = n;
                if (((_[e] = { type: 'LOADED' }), c.Ec.has(i.type))) {
                    var a;
                    o.Z.dispatch({
                        type: 'THREAD_CREATE',
                        channel: (0, c.q_)(i),
                        messageId: null == r ? void 0 : null === (a = r.params) || void 0 === a ? void 0 : a.messageId
                    });
                }
            })
            .catch(() => {
                var n;
                (_[e] = { type: 'NOT_FOUND' }),
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
        (_[e] = {
            type: 'LOADING',
            promise: f
        }),
        f
    );
}
n.Z = { loadThread: E };
