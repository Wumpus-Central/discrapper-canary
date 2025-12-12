n.d(t, {
    D2: () => c,
    Hj: () => s,
    rK: () => E,
});
var r = n(975318),
    i = n(98076),
    a = n(521257);
let o = {},
    _ = {};
function s(e, t) {
    (o[e] = o[e] || []), o[e].push(t);
}
function c(e, t) {
    _[e] || (t(), (_[e] = !0));
}
function E(e, t) {
    let n = e && o[e];
    if (n)
        for (let o of n)
            try {
                o(t);
            } catch (t) {
                r.X &&
                    i.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, a.$P)(o)}
Error:`,
                        t,
                    );
            }
}
