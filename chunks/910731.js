a.d(e, { e: () => i });
var r = a(622916),
    n = a(370336),
    _ = a(899517),
    o = a(578346);
function i(t) {
    let e = 'console';
    (0, o.Hj)(e, t), (0, o.D2)(e, c);
}
function c() {
    'console' in _.n &&
        r.RU.forEach(function (t) {
            t in _.n.console &&
                (0, n.hl)(_.n.console, t, function (e) {
                    return (
                        (r.LD[t] = e),
                        function (...e) {
                            (0, o.rK)('console', {
                                args: e,
                                level: t
                            });
                            let a = r.LD[t];
                            a && a.apply(_.n.console, e);
                        }
                    );
                });
        });
}
