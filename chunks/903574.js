n.d(t, { y: () => E });
var r = n(509440),
    i = n(771560),
    a = n(688560),
    o = n(606093),
    _ = n(635196);
let s = o.n,
    c = new WeakMap(),
    E = (0, a._I)((e = {}) => {
        let t = e.types || ["crash", "deprecation", "intervention"];
        function n(e) {
            if (c.has((0, r.s3)()))
                for (let t of e)
                    (0, r.$e)((e) => {
                        e.setExtra("url", t.url);
                        let n = `ReportingObserver [${t.type}]`,
                            r = "No details available";
                        if (t.body) {
                            let n = {};
                            for (let e in t.body) n[e] = t.body[e];
                            if ((e.setExtra("body", n), "crash" === t.type)) {
                                let e = t.body;
                                r = [e.crashId || "", e.reason || ""].join(" ").trim() || r;
                            } else r = t.body.message || r;
                        }
                        (0, i.uT)(`${n}: ${r}`);
                    });
        }
        return {
            name: "ReportingObserver",
            setupOnce() {
                (0, _.zb)() &&
                    new s.ReportingObserver(n, {
                        buffered: !0,
                        types: t,
                    }).observe();
            },
            setup(e) {
                c.set(e, !0);
            },
        };
    });
