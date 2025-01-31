n.d(t, {
    a: () => c,
    j: () => d
});
var i = n(544891),
    r = n(570140),
    a = n(626135),
    s = n(70956),
    o = n(981631);
let l = 5000,
    u = 3;
async function c(e, t) {
    let n;
    let c = performance.now(),
        d = 0;
    switch (e.type) {
        case 'channel':
            n = o.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case 'guild':
            n = o.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case 'user':
            n = o.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case 'application':
            n = o.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let f = async (t) =>
            d >= u
                ? (p(!0),
                  r.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, t)), _()),
        _ = () =>
            i.tn
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
                            ? f(l)
                            : (p(!1),
                              r.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: t.body
                              })),
                    (n) => {
                        if (t.signal.aborted) {
                            p(!0);
                            return;
                        }
                        return 429 === n.status
                            ? f(n.body.retry_after * s.Z.Millis.SECOND)
                            : (p(!0),
                              r.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        p = (e) => {
            let n = performance.now() - c;
            a.default.track(o.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: n,
                error: e,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(d - 1, 0),
                kind: null,
                command_type: null
            });
        };
    await _();
}
function d(e) {
    r.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
