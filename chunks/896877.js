function n(e, t = Date.now()) {
    let r = parseInt(`${e}`, 10);
    if (!isNaN(r)) return 1000 * r;
    let a = Date.parse(`${e}`);
    return isNaN(a) ? 60000 : a - t;
}
function a(e, t, r = Date.now()) {
    return (e[t] || e.all || 0) > r;
}
function i(e, { statusCode: t, headers: r }, a = Date.now()) {
    let o = { ...e },
        _ = r && r["x-sentry-rate-limits"],
        s = r && r["retry-after"];
    if (_)
        for (let e of _.trim().split(",")) {
            let [t, r, , , n] = e.split(":", 5),
                i = parseInt(t, 10),
                _ = (isNaN(i) ? 60 : i) * 1000;
            if (r)
                for (let e of r.split(";"))
                    "metric_bucket" === e ? (!n || n.split(";").includes("custom")) && (o[e] = a + _) : (o[e] = a + _);
            else o.all = a + _;
        }
    else s ? (o.all = a + n(s, a)) : 429 === t && (o.all = a + 60000);
    return o;
}
r.d(t, {
    JY: () => n,
    Q: () => a,
    WG: () => i,
});
