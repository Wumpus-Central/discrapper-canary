n.d(t, {
    a: () => d,
    j: () => p
});
var r = n(544891),
    i = n(570140),
    o = n(626135),
    a = n(70956),
    s = n(823379),
    l = n(981631);
let c = 5000,
    u = 3;
async function d(e, t) {
    let n;
    let s = performance.now(),
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
    let p = async (t) =>
            d >= u
                ? (h({ error: !0 }),
                  i.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, t)), _()),
        _ = () =>
            r.tn
                .get({
                    url: n,
                    retries: u - d - 1,
                    signal: t.signal,
                    onRequestCreated: () => d++,
                    rejectWithError: !1
                })
                .then(
                    (t) =>
                        202 === t.status
                            ? p(c)
                            : (h({ error: !1 }),
                              i.Z.dispatch({
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
                            ? p(n.body.retry_after * a.Z.Millis.SECOND)
                            : (h({ error: !0 }),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        h = (r) => {
            let { error: i } = r,
                a = performance.now() - s;
            o.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: a,
                error: i,
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
    await _();
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
            (0, s.vE)(e);
    }
}
function p(e) {
    i.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
