a.d(e, { V: () => n });
var r = a(452896);
function n(t, e, a = [e], _ = 'npm') {
    let o = t._metadata || {};
    o.sdk ||
        (o.sdk = {
            name: `sentry.javascript.${e}`,
            packages: a.map((t) => ({
                name: `${_}:@sentry/${t}`,
                version: r.J
            })),
            version: r.J
        }),
        (t._metadata = o);
}
