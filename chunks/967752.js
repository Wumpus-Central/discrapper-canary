a.d(e, {
    RA: () => o,
    U4: () => i,
    vK: () => c,
});
var r = a(176984),
    _ = a(622916);
let n = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(t, e = !1) {
    let { host: a, path: r, pass: _, port: n, projectId: i, protocol: E, publicKey: c } = t;
    return `${E}://${c}${e && _ ? `:${_}` : ""}@${a}${n ? `:${n}` : ""}/${r ? `${r}/` : r}${i}`;
}
function i(t) {
    let e = n.exec(t);
    if (!e)
        return void (0, _.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
        });
    let [a, r, o = "", i = "", c = "", s = ""] = e.slice(1),
        l = "",
        I = s,
        R = I.split("/");
    if ((R.length > 1 && ((l = R.slice(0, -1).join("/")), (I = R.pop())), I)) {
        let t = I.match(/^\d+/);
        t && (I = t[0]);
    }
    return E({
        host: i,
        pass: o,
        path: l,
        projectId: I,
        port: c,
        protocol: a,
        publicKey: r,
    });
}
function E(t) {
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
    let e = "string" == typeof t ? i(t) : E(t);
    if (
        e &&
        (function (t) {
            if (!r.X) return !0;
            let { port: e, projectId: a, protocol: n } = t;
            return (
                !["protocol", "publicKey", "host", "projectId"].find(
                    (e) => !t[e] && (_.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0),
                ) &&
                (a.match(/^\d+$/)
                    ? "http" !== n && "https" !== n
                        ? (_.kg.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), !1)
                        : !(e && isNaN(parseInt(e, 10))) || (_.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
                    : (_.kg.error(`Invalid Sentry Dsn: Invalid projectId ${a}`), !1))
            );
        })(e)
    )
        return e;
}
