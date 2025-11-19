_.d(e, { e: () => E });
var a = _(622916),
    r = _(370336),
    n = _(899517),
    o = _(578346);
function E(t) {
    let e = "console";
    (0, o.Hj)(e, t), (0, o.D2)(e, i);
}
function i() {
    "console" in n.n &&
        a.RU.forEach(function (t) {
            t in n.n.console &&
                (0, r.hl)(n.n.console, t, function (e) {
                    return (
                        (a.LD[t] = e),
                        function (...e) {
                            (0, o.rK)("console", {
                                args: e,
                                level: t,
                            });
                            let _ = a.LD[t];
                            _ && _.apply(n.n.console, e);
                        }
                    );
                });
        });
}
