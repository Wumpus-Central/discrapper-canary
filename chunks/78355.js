_.d(e, { V: () => r });
var a = _(452896);
function r(t, e, _ = [e], n = "npm") {
    let o = t._metadata || {};
    o.sdk ||
        (o.sdk = {
            name: `sentry.javascript.${e}`,
            packages: _.map((t) => ({
                name: `${n}:@sentry/${t}`,
                version: a.J,
            })),
            version: a.J,
        }),
        (t._metadata = o);
}
