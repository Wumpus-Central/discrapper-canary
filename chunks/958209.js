r.d(t, {
    D2: () => c,
    Hj: () => s,
    rK: () => E,
});
var n = r(975318),
    a = r(98076),
    i = r(521257);
let o = {},
    _ = {};
function s(e, t) {
    (o[e] = o[e] || []), o[e].push(t);
}
function c(e, t) {
    _[e] || (t(), (_[e] = !0));
}
function E(e, t) {
    let r = e && o[e];
    if (r)
        for (let o of r)
            try {
                o(t);
            } catch (t) {
                n.X &&
                    a.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, i.$P)(o)}
Error:`,
                        t,
                    );
            }
}
