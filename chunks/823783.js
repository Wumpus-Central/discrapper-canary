n.d(t, { B$: () => u, ur: () => c });
var r = n(875565),
    i = n(690094),
    o = n(366781),
    a = n(83220),
    s = n(978862),
    l = n(873326);
function c(e, t) {
    let n = "fetch";
    (0, l.s5)(n, e), (0, l.AS)(n, () => d(void 0, t));
}
function u(e) {
    let t = "fetch-body-resolved";
    (0, l.s5)(t, e), (0, l.AS)(t, () => d(h));
}
function d(e, t = !1) {
    (!t || (0, o.m7)()) &&
        (0, i.GS)(s.O, "fetch", function (t) {
            return function (...n) {
                let o = Error(),
                    { method: c, url: u } = (function (e) {
                        if (0 === e.length) return { method: "GET", url: "" };
                        if (2 === e.length) {
                            let [t, n] = e;
                            return { url: m(t), method: f(n, "method") ? String(n.method).toUpperCase() : "GET" };
                        }
                        let t = e[0];
                        return { url: m(t), method: f(t, "method") ? String(t.method).toUpperCase() : "GET" };
                    })(n),
                    d = {
                        args: n,
                        fetchData: { method: c, url: u },
                        startTimestamp: 1e3 * (0, a.zf)(),
                        virtualError: o,
                    };
                return (
                    e || (0, l.aj)("fetch", { ...d }),
                    t.apply(s.O, n).then(
                        async (t) => (
                            e ? e(t) : (0, l.aj)("fetch", { ...d, endTimestamp: 1e3 * (0, a.zf)(), response: t }), t
                        ),
                        (e) => {
                            throw (
                                ((0, l.aj)("fetch", { ...d, endTimestamp: 1e3 * (0, a.zf)(), error: e }),
                                (0, r.bJ)(e) &&
                                    void 0 === e.stack &&
                                    ((e.stack = o.stack), (0, i.my)(e, "framesToPop", 1)),
                                e)
                            );
                        },
                    )
                );
            };
        });
}
async function p(e, t) {
    if (e && e.body) {
        let n = e.body,
            r = n.getReader(),
            i = setTimeout(() => {
                n.cancel().then(null, () => {});
            }, 9e4),
            o = !0;
        for (; o; ) {
            let e;
            try {
                e = setTimeout(() => {
                    n.cancel().then(null, () => {});
                }, 5e3);
                let { done: i } = await r.read();
                clearTimeout(e), i && (t(), (o = !1));
            } catch (e) {
                o = !1;
            } finally {
                clearTimeout(e);
            }
        }
        clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {});
    }
}
function h(e) {
    let t;
    try {
        t = e.clone();
    } catch (e) {
        return;
    }
    p(t, () => {
        (0, l.aj)("fetch-body-resolved", { endTimestamp: 1e3 * (0, a.zf)(), response: e });
    });
}
function f(e, t) {
    return !!e && "object" == typeof e && !!e[t];
}
function m(e) {
    return "string" == typeof e ? e : e ? (f(e, "url") ? e.url : e.toString ? e.toString() : "") : "";
}
