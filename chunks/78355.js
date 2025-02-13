a.d(e, { V: () => n });
var r = a(452896);
function n(t, e, a = [e], o = 'npm') {
    let _ = t._metadata || {};
    _.sdk ||
        (_.sdk = {
            name: `sentry.javascript.${e}`,
            packages: a.map((t) => ({
                name: `${o}:@sentry/${t}`,
                version: r.J
            })),
            version: r.J
        }),
        (t._metadata = _);
}
