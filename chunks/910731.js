a.d(e, { e: () => i });
var r = a(622916),
    n = a(370336),
    o = a(899517),
    _ = a(578346);
function i(t) {
    let e = 'console';
    (0, _.Hj)(e, t), (0, _.D2)(e, c);
}
function c() {
    'console' in o.n &&
        r.RU.forEach(function (t) {
            t in o.n.console &&
                (0, n.hl)(o.n.console, t, function (e) {
                    return (
                        (r.LD[t] = e),
                        function (...e) {
                            (0, _.rK)('console', {
                                args: e,
                                level: t
                            });
                            let a = r.LD[t];
                            a && a.apply(o.n.console, e);
                        }
                    );
                });
        });
}
