if (221552 == n.j) var r = n(115560);
var s = n(73153),
    i = n(975189);
let o = new Map();
function l(e) {
    let t = o.get(e);
    null != t && (o.delete(e), clearTimeout(t.timeout), t.reject(Error("Publish eval result unavailable")));
}
n.d(
    t,
    {},
    {
        OB: function (e, t) {
            let n = t?.status;
            (403 === n || 404 === n) && s.h.dispatch({ type: "CONJURE_PUBLISH_EVAL_PROJECT_GONE", projectId: e });
        },
        Wh: {
            publish_eval_result(e, t) {
                let { projectId: n } = t,
                    r = o.get(n);
                r?.requestId === e.request_id && (o.delete(n), clearTimeout(r.timeout), r.resolve(e));
            },
        },
        yD: function (e, t) {
            return new Promise((n, s) => {
                if (o.has(e)) return void s(Error("Publish eval already pending"));
                let a = (0, r.A)(),
                    c = setTimeout(() => l(e), 15e3);
                o.set(e, { requestId: a, resolve: n, reject: s, timeout: c });
                try {
                    let n = (0, i.KY)(e);
                    if (null == n) throw Error("Not connected");
                    n.sendPublishEval({ type: "submit_publish_eval", request_id: a, ...t });
                } catch {
                    l(e);
                }
            });
        },
        yv: l,
    },
);
