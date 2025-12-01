r.d(t, { e: () => _ });
var n = r(622916),
    a = r(370336),
    i = r(899517),
    o = r(578346);
function _(e) {
    let t = "console";
    (0, o.Hj)(t, e), (0, o.D2)(t, s);
}
function s() {
    "console" in i.n &&
        n.RU.forEach(function (e) {
            e in i.n.console &&
                (0, a.hl)(i.n.console, e, function (t) {
                    return (
                        (n.LD[e] = t),
                        function (...t) {
                            (0, o.rK)("console", {
                                args: t,
                                level: e,
                            });
                            let r = n.LD[e];
                            r && r.apply(i.n.console, t);
                        }
                    );
                });
        });
}
