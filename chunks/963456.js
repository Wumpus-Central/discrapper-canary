n.d(t, {
    a: () => _,
    j: () => h,
}),
    n(539854);
var r = n(544891),
    i = n(570140),
    a = n(626135),
    o = n(70956),
    s = n(823379),
    l = n(981631);
let c = 5000,
    u = 3,
    d = 1000,
    f = 1001,
    p = 1002;
async function _(e, t) {
    let n,
        s = performance.now(),
        _ = 0,
        h = [];
    switch (e.type) {
        case "channel":
            n = l.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case "guild":
            n = l.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case "user":
            n = l.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case "application":
            n = l.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let g = async (t) =>
            _ >= u
                ? (h.push(p),
                  b({ error: !0 }),
                  i.Z.dispatch({
                      type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                      target: e,
                  }))
                : (await new Promise((e) => setTimeout(e, t)), E()),
        E = () =>
            r.tn
                .get({
                    url: n,
                    retries: u - _ - 1,
                    signal: t.signal,
                    onRequestCreated: () => _++,
                    rejectWithError: !1,
                })
                .then(
                    (t) =>
                        202 === t.status
                            ? (h.push(202), g(c))
                            : (b({ error: !1 }),
                              i.Z.dispatch({
                                  type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
                                  target: e,
                                  index: t.body,
                              })),
                    (n) => {
                        var r;
                        if (t.signal.aborted) {
                            h.push(f), b({ error: !0 });
                            return;
                        }
                        return 429 === n.status
                            ? (h.push(429), g(n.body.retry_after * o.Z.Millis.SECOND))
                            : (h.push(null != (r = n.status) ? r : d),
                              b({ error: !0 }),
                              i.Z.dispatch({
                                  type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                                  target: e,
                              }));
                    },
                ),
        b = (r) => {
            let { error: i } = r,
                o = performance.now() - s;
            a.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: o,
                error: i,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(_ - 1, 0),
                kind: null,
                command_type: null,
                url: n,
                target_type: e.type,
                target_id: m(e),
                failure_statuses: h,
            });
        };
    await E();
}
function m(e) {
    switch (e.type) {
        case "channel":
            return e.channelId;
        case "guild":
            return e.guildId;
        case "user":
            return null;
        case "application":
            return e.applicationId;
        default:
            (0, s.vE)(e);
    }
}
function h(e) {
    i.Z.dispatch({
        type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
        target: e,
    });
}
