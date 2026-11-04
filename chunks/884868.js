let i = ["conjure-", "vibegrations-"];
n.d(
    t,
    {},
    {
        UL: function (e) {
            let t = i.map((t) => `${t}${e}`);
            return { requests: t, results: t.map((e) => `${e}-result`), acks: t.map((e) => `${e}-ack`) };
        },
        YX: function (e, t, n) {
            return "object" == typeof e && null != e && "string" == typeof e.type && t.includes(e.type) && e.id === n;
        },
        d5: function (e) {
            let t = e.timeoutMs;
            return ("number" == typeof t && isFinite(t) && t > 0 ? Math.min(Math.floor(t), 2e4) : 2e4) + 4e3;
        },
        fq: class extends Error {
            constructor(e, t) {
                (super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout"));
            }
        },
    },
);
