a.d(e, {
    RA: () => o,
    U4: () => i,
    vK: () => s
});
var r = a(176984),
    n = a(622916);
let _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(t, e = !1) {
    let { host: a, path: r, pass: n, port: _, projectId: i, protocol: c, publicKey: s } = t;
    return `${c}://${s}${e && n ? `:${n}` : ''}@${a}${_ ? `:${_}` : ''}/${r ? `${r}/` : r}${i}`;
}
function i(t) {
    let e = _.exec(t);
    if (!e)
        return void (0, n.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
        });
    let [a, r, o = '', i = '', s = '', E = ''] = e.slice(1),
        l = '',
        u = E,
        I = u.split('/');
    if ((I.length > 1 && ((l = I.slice(0, -1).join('/')), (u = I.pop())), u)) {
        let t = u.match(/^\d+/);
        t && (u = t[0]);
    }
    return c({
        host: i,
        pass: o,
        path: l,
        projectId: u,
        port: s,
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
function s(t) {
    let e = 'string' == typeof t ? i(t) : c(t);
    if (
        e &&
        (function (t) {
            if (!r.X) return !0;
            let { port: e, projectId: a, protocol: _ } = t;
            return !['protocol', 'publicKey', 'host', 'projectId'].find((e) => !t[e] && (n.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0)) && (a.match(/^\d+$/) ? ('http' !== _ && 'https' !== _ ? (n.kg.error(`Invalid Sentry Dsn: Invalid protocol ${_}`), !1) : !(e && isNaN(parseInt(e, 10))) || (n.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)) : (n.kg.error(`Invalid Sentry Dsn: Invalid projectId ${a}`), !1));
        })(e)
    )
        return e;
}
