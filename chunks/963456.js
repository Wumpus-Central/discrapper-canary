n.d(t, {
    a: () => p,
    j: () => g
}),
    n(653041);
var r = n(544891),
    i = n(570140),
    o = n(626135),
    a = n(70956),
    s = n(823379),
    l = n(981631);
let c = 5000,
    u = 3,
    d = 1000,
    f = 1001,
    _ = 1002;
async function p(e, t) {
    let n;
    let s = performance.now(),
        p = 0,
        g = [];
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
    let m = async (t) =>
            p >= u
                ? (g.push(_),
                  v({ error: !0 }),
                  i.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, t)), E()),
        E = () =>
            r.tn
                .get({
                    url: n,
                    retries: u - p - 1,
                    signal: t.signal,
                    onRequestCreated: () => p++,
                    rejectWithError: !1
                })
                .then(
                    (t) =>
                        202 === t.status
                            ? (g.push(202), m(c))
                            : (v({ error: !1 }),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: t.body
                              })),
                    (n) => {
                        var r;
                        if (t.signal.aborted) {
                            g.push(f), v({ error: !0 });
                            return;
                        }
                        return 429 === n.status
                            ? (g.push(429), m(n.body.retry_after * a.Z.Millis.SECOND))
                            : (g.push(null !== (r = n.status) && void 0 !== r ? r : d),
                              v({ error: !0 }),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        v = (r) => {
            let { error: i } = r,
                a = performance.now() - s;
            o.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: a,
                error: i,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(p - 1, 0),
                kind: null,
                command_type: null,
                url: n,
                target_type: e.type,
                target_id: h(e),
                failure_statuses: g
            });
        };
    await E();
}
function h(e) {
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
            (0, s.vE)(e);
    }
}
function g(e) {
    i.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
