n.d(t, { A: () => s }), n(896048);
var r = n(562465),
    i = n(954571),
    l = n(613057),
    a = n(652215);
let s = {
    [a.e$_.GET_NETWORKING_CONFIG]: {
        scope: l.hj,
        handler: () =>
            Promise.all([
                r.Bo.get({
                    url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                    retries: 3,
                    rejectWithError: !1,
                }).then((e) => {
                    let {
                        body: { address: t },
                    } = e;
                    return t;
                }),
                r.Bo.post({
                    url: a.Rsh.NETWORKING_TOKEN,
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then((e) => {
                    let {
                        body: { token: t },
                    } = e;
                    return t;
                }),
            ]).then((e) => {
                let [t, n] = e;
                return {
                    address: t,
                    token: n,
                };
            }),
    },
    [a.e$_.NETWORKING_SYSTEM_METRICS]: {
        scope: l.hj,
        handler(e) {
            let { socket: t, args: n } = e;
            (n.application_id = t.application.id), i.default.track(a.HAw.NETWORKING_SYSTEM_METRICS, n);
        },
    },
    [a.e$_.NETWORKING_PEER_METRICS]: {
        scope: l.hj,
        handler(e) {
            let { socket: t, args: n } = e;
            (n.application_id = t.application.id), i.default.track(a.HAw.NETWORKING_PEER_METRICS, n);
        },
    },
    [a.e$_.NETWORKING_CREATE_TOKEN]: {
        scope: l.hj,
        handler: () =>
            r.Bo.post({
                url: a.Rsh.NETWORKING_TOKEN,
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => e.body),
    },
};
