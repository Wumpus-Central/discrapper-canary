var r = n(780755),
    i = n(272469),
    o = n(968072);
let a = {},
    s = {};
n.d(
    t,
    {},
    {
        AS: function (e, t) {
            if (!s[e]) {
                s[e] = !0;
                try {
                    t();
                } catch (t) {
                    r.T && i.vF.error(`Error while instrumenting ${e}`, t);
                }
            }
        },
        aj: function (e, t) {
            let n = e && a[e];
            if (n)
                for (let a of n)
                    try {
                        a(t);
                    } catch (t) {
                        r.T &&
                            i.vF.error(
                                `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, o.qQ)(a)}
Error:`,
                                t,
                            );
                    }
        },
        s5: function (e, t) {
            ((a[e] = a[e] || []), a[e].push(t));
        },
    },
);
