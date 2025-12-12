n.d(t, {
    K: () => _,
    M: () => o,
});
var r = n(98076),
    i = n(509440),
    a = n(4757);
function o(e, t) {
    !0 === t.debug &&
        (a.X
            ? r.kg.enable()
            : (0, r.Cf)(() => {
                  console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
              })),
        (0, i.nZ)().update(t.initialScope);
    let n = new e(t);
    return _(n), n.init(), n;
}
function _(e) {
    (0, i.nZ)().setClient(e);
}
