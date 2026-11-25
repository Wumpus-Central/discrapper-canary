if (221552 == n.j) var r = n(115560);
var s = n(73153),
    o = n(975189);
let i = new Map();
function l(e) {
    let t = i.get(e);
    null != t && (i.delete(e), clearTimeout(t.timeout), t.reject(Error("Publish eval result unavailable")));
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
                    r = i.get(n);
                r?.requestId === e.request_id && (i.delete(n), clearTimeout(r.timeout), r.resolve(e));
            },
        },
        yD: function (e, t) {
            return new Promise((n, s) => {
                if (i.has(e)) return void s(Error("Publish eval already pending"));
                let a = (0, r.A)(),
                    c = setTimeout(() => l(e), 15e3);
                i.set(e, { requestId: a, resolve: n, reject: s, timeout: c });
                try {
                    let n = (0, o.KY)(e);
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
