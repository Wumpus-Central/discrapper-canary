r.d(n, {
    a: function () {
        return d;
    },
    j: function () {
        return f;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(626135),
    s = r(70956),
    l = r(981631);
let u = 5000,
    c = 3;
async function d(e, n) {
    let r;
    let d = performance.now(),
        f = 0;
    switch (e.type) {
        case 'channel':
            r = l.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case 'guild':
            r = l.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case 'user':
            r = l.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case 'application':
            r = l.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let p = async (n) =>
            f >= c
                ? (_(!0),
                  a.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, n)), h()),
        h = () =>
            i.tn
                .get({
                    url: r,
                    retries: c - f - 1,
                    signal: n.signal,
                    onRequestCreated: () => f++,
                    rejectWithError: !1
                })
                .then(
                    (n) =>
                        202 === n.status
                            ? p(u)
                            : (_(!1),
                              a.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: n.body
                              })),
                    (r) => {
                        if (n.signal.aborted) {
                            _(!0);
                            return;
                        }
                        return 429 === r.status
                            ? p(r.body.retry_after * s.Z.Millis.SECOND)
                            : (_(!0),
                              a.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        _ = (e) => {
            let r = performance.now() - d;
            o.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: r,
                error: e,
                aborted: n.signal.aborted,
                include_applications: !0,
                retries: Math.max(f - 1, 0),
                kind: null,
                command_type: null
            });
        };
    await h();
}
function f(e) {
    a.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
