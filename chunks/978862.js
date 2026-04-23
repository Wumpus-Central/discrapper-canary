s.d(e, { B: () => i, O: () => r });
let r = globalThis;
function i(t, e, s) {
    let i = s || r,
        n = (i.__SENTRY__ = i.__SENTRY__ || {}),
        o = (n["8.55.0"] = n["8.55.0"] || {});
    return o[t] || (o[t] = e());
}
