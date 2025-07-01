a.d(e, { V: () => _ });
var r = a(452896);
function _(t, e, a = [e], n = 'npm') {
    let o = t._metadata || {};
    (o.sdk ||
        (o.sdk = {
            name: `sentry.javascript.${e}`,
            packages: a.map((t) => ({
                name: `${n}:@sentry/${t}`,
                version: r.J
            })),
            version: r.J
        }),
        (t._metadata = o));
}
