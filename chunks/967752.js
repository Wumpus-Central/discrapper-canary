a.d(e, {
    RA: () => o,
    U4: () => i,
    vK: () => E
});
var r = a(176984),
    _ = a(622916);
let n = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(t, e = !1) {
    let { host: a, path: r, pass: _, port: n, projectId: i, protocol: c, publicKey: E } = t;
    return `${c}://${E}${e && _ ? `:${_}` : ''}@${a}${n ? `:${n}` : ''}/${r ? `${r}/` : r}${i}`;
}
function i(t) {
    let e = n.exec(t);
    if (!e)
        return void (0, _.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
        });
    let [a, r, o = '', i = '', E = '', s = ''] = e.slice(1),
        l = '',
        I = s,
        u = I.split('/');
    if ((u.length > 1 && ((l = u.slice(0, -1).join('/')), (I = u.pop())), I)) {
        let t = I.match(/^\d+/);
        t && (I = t[0]);
    }
    return c({
        host: i,
        pass: o,
        path: l,
        projectId: I,
        port: E,
        protocol: a,
        publicKey: r
    });
}
function c(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || '',
        pass: t.pass || '',
        host: t.host,
        port: t.port || '',
        path: t.path || '',
        projectId: t.projectId
    };
}
function E(t) {
    let e = 'string' == typeof t ? i(t) : c(t);
    if (
        e &&
        (function (t) {
            if (!r.X) return !0;
            let { port: e, projectId: a, protocol: n } = t;
            return !['protocol', 'publicKey', 'host', 'projectId'].find((e) => !t[e] && (_.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0)) && (a.match(/^\d+$/) ? ('http' !== n && 'https' !== n ? (_.kg.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), !1) : !(e && isNaN(parseInt(e, 10))) || (_.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)) : (_.kg.error(`Invalid Sentry Dsn: Invalid projectId ${a}`), !1));
        })(e)
    )
        return e;
}
