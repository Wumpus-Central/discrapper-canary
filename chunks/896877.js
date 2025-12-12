function r(e, t = Date.now()) {
    let n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return 1000 * n;
    let i = Date.parse(`${e}`);
    return isNaN(i) ? 60000 : i - t;
}
function i(e, t, n = Date.now()) {
    return (e[t] || e.all || 0) > n;
}
function a(e, { statusCode: t, headers: n }, i = Date.now()) {
    let o = { ...e },
        _ = n && n["x-sentry-rate-limits"],
        s = n && n["retry-after"];
    if (_)
        for (let e of _.trim().split(",")) {
            let [t, n, , , r] = e.split(":", 5),
                a = parseInt(t, 10),
                _ = (isNaN(a) ? 60 : a) * 1000;
            if (n)
                for (let e of n.split(";"))
                    "metric_bucket" === e ? (!r || r.split(";").includes("custom")) && (o[e] = i + _) : (o[e] = i + _);
            else o.all = i + _;
        }
    else s ? (o.all = i + r(s, i)) : 429 === t && (o.all = i + 60000);
    return o;
}
n.d(t, {
    JY: () => r,
    Q: () => i,
    WG: () => a,
});
