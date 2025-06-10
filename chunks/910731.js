a.d(e, { e: () => i });
var r = a(622916),
    _ = a(370336),
    n = a(899517),
    o = a(578346);
function i(t) {
    let e = 'console';
    (0, o.Hj)(e, t), (0, o.D2)(e, c);
}
function c() {
    'console' in n.n &&
        r.RU.forEach(function (t) {
            t in n.n.console &&
                (0, _.hl)(n.n.console, t, function (e) {
                    return (
                        (r.LD[t] = e),
                        function (...e) {
                            (0, o.rK)('console', {
                                args: e,
                                level: t
                            });
                            let a = r.LD[t];
                            a && a.apply(n.n.console, e);
                        }
                    );
                });
        });
}
