n.d(t, {
    a: () => d,
    j: () => _
});
var i = n(544891),
    r = n(570140),
    a = n(626135),
    s = n(70956),
    o = n(823379),
    l = n(981631);
let u = 5000,
    c = 3;
async function d(e, t) {
    let n;
    let o = performance.now(),
        d = 0;
    switch (e.type) {
        case 'channel':
            n = l.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case 'guild':
            n = l.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case 'user':
            n = l.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case 'application':
            n = l.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let _ = async (t) =>
            d >= c
                ? (h({ error: !0 }),
                  r.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, t)), p()),
        p = () =>
            i.tn
                .get({
                    url: n,
                    retries: c - d - 1,
                    signal: t.signal,
                    onRequestCreated: () => d++,
                    rejectWithError: !1
                })
                .then(
                    (t) =>
                        202 === t.status
                            ? _(u)
                            : (h({ error: !1 }),
                              r.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: t.body
                              })),
                    (n) => {
                        if (t.signal.aborted) {
                            h({ error: !0 });
                            return;
                        }
                        return 429 === n.status
                            ? _(n.body.retry_after * s.Z.Millis.SECOND)
                            : (h({ error: !0 }),
                              r.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        h = (i) => {
            let { error: r } = i,
                s = performance.now() - o;
            a.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: s,
                error: r,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(d - 1, 0),
                kind: null,
                command_type: null,
                url: n,
                target_type: e.type,
                target_id: f(e)
            });
        };
    await p();
}
function f(e) {
    switch (e.type) {
        case 'channel':
            return e.channelId;
        case 'guild':
            return e.guildId;
        case 'user':
            return null;
        case 'application':
            return e.applicationId;
        default:
            (0, o.vE)(e);
    }
}
function _(e) {
    r.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
