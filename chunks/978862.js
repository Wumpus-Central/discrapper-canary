let i = globalThis;
s.d(
    e,
    {},
    {
        B: function (t, e, s) {
            let n = s || i,
                r = (n.__SENTRY__ = n.__SENTRY__ || {}),
                o = (r["8.55.0"] = r["8.55.0"] || {});
            return o[t] || (o[t] = e());
        },
        O: i,
    },
);
