var r = n(73153),
    s = n(975189);
n.d(
    t,
    {},
    {
        j: {
            copy_state(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({ type: "CONJURE_COPY_STATE_SET", projectId: n, event: e });
            },
            copy_sync(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({ type: "CONJURE_COPY_SYNC_SET", projectId: n, event: e });
            },
            downstream_updates(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({ type: "CONJURE_DOWNSTREAM_UPDATES_SET", projectId: n, event: e });
            },
        },
        t: function (e, t) {
            let n = (0, s.b4)(e, "downstream updates", (e) => e.sendDownstreamUpdates(t));
            return (n && r.h.dispatch({ type: "CONJURE_DOWNSTREAM_UPDATES_REQUEST", projectId: e, enabled: t }), n);
        },
    },
);
