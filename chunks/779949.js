var r = n(630449),
    i = n(326447),
    o = n(272469);
function a(e) {
    (0, r.o5)().setClient(e);
}
n.d(
    t,
    {},
    {
        B: a,
        J: function (e, t) {
            (!0 === t.debug &&
                (i.T
                    ? o.vF.enable()
                    : (0, o.pq)(() => {
                          console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
                      })),
                (0, r.o5)().update(t.initialScope));
            let n = new e(t);
            return (a(n), n.init(), n);
        },
    },
);
