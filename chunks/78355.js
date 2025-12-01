r.d(t, { V: () => a });
var n = r(452896);
function a(e, t, r = [t], i = "npm") {
    let o = e._metadata || {};
    o.sdk ||
        (o.sdk = {
            name: `sentry.javascript.${t}`,
            packages: r.map((e) => ({
                name: `${i}:@sentry/${e}`,
                version: n.J,
            })),
            version: n.J,
        }),
        (e._metadata = o);
}
