r.d(t, { y: () => E });
var n = r(509440),
    a = r(771560),
    i = r(688560),
    o = r(606093),
    _ = r(635196);
let s = o.n,
    c = new WeakMap(),
    E = (0, i._I)((e = {}) => {
        let t = e.types || ["crash", "deprecation", "intervention"];
        function r(e) {
            if (c.has((0, n.s3)()))
                for (let t of e)
                    (0, n.$e)((e) => {
                        e.setExtra("url", t.url);
                        let r = `ReportingObserver [${t.type}]`,
                            n = "No details available";
                        if (t.body) {
                            let r = {};
                            for (let e in t.body) r[e] = t.body[e];
                            if ((e.setExtra("body", r), "crash" === t.type)) {
                                let e = t.body;
                                n = [e.crashId || "", e.reason || ""].join(" ").trim() || n;
                            } else n = t.body.message || n;
                        }
                        (0, a.uT)(`${r}: ${n}`);
                    });
        }
        return {
            name: "ReportingObserver",
            setupOnce() {
                (0, _.zb)() &&
                    new s.ReportingObserver(r, {
                        buffered: !0,
                        types: t,
                    }).observe();
            },
            setup(e) {
                c.set(e, !0);
            },
        };
    });
