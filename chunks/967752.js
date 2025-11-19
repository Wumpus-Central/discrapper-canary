_.d(e, {
    RA: () => o,
    U4: () => E,
    vK: () => c,
});
var a = _(176984),
    r = _(622916);
let n = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(t, e = !1) {
    let { host: _, path: a, pass: r, port: n, projectId: E, protocol: i, publicKey: c } = t;
    return `${i}://${c}${e && r ? `:${r}` : ""}@${_}${n ? `:${n}` : ""}/${a ? `${a}/` : a}${E}`;
}
function E(t) {
    let e = n.exec(t);
    if (!e)
        return void (0, r.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
        });
    let [_, a, o = "", E = "", c = "", s = ""] = e.slice(1),
        l = "",
        I = s,
        R = I.split("/");
    if ((R.length > 1 && ((l = R.slice(0, -1).join("/")), (I = R.pop())), I)) {
        let t = I.match(/^\d+/);
        t && (I = t[0]);
    }
    return i({
        host: E,
        pass: o,
        path: l,
        projectId: I,
        port: c,
        protocol: _,
        publicKey: a,
    });
}
function i(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId,
    };
}
function c(t) {
    let e = "string" == typeof t ? E(t) : i(t);
    if (
        e &&
        (function (t) {
            if (!a.X) return !0;
            let { port: e, projectId: _, protocol: n } = t;
            return (
                !["protocol", "publicKey", "host", "projectId"].find(
                    (e) => !t[e] && (r.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0),
                ) &&
                (_.match(/^\d+$/)
                    ? "http" !== n && "https" !== n
                        ? (r.kg.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), !1)
                        : !(e && isNaN(parseInt(e, 10))) || (r.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
                    : (r.kg.error(`Invalid Sentry Dsn: Invalid projectId ${_}`), !1))
            );
        })(e)
    )
        return e;
}
