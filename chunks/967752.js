r.d(t, {
    RA: () => o,
    U4: () => _,
    vK: () => c,
});
var n = r(176984),
    a = r(622916);
let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(e, t = !1) {
    let { host: r, path: n, pass: a, port: i, projectId: _, protocol: s, publicKey: c } = e;
    return `${s}://${c}${t && a ? `:${a}` : ""}@${r}${i ? `:${i}` : ""}/${n ? `${n}/` : n}${_}`;
}
function _(e) {
    let t = i.exec(e);
    if (!t)
        return void (0, a.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${e}`);
        });
    let [r, n, o = "", _ = "", c = "", E = ""] = t.slice(1),
        l = "",
        u = E,
        d = u.split("/");
    if ((d.length > 1 && ((l = d.slice(0, -1).join("/")), (u = d.pop())), u)) {
        let e = u.match(/^\d+/);
        e && (u = e[0]);
    }
    return s({
        host: _,
        pass: o,
        path: l,
        projectId: u,
        port: c,
        protocol: r,
        publicKey: n,
    });
}
function s(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId,
    };
}
function c(e) {
    let t = "string" == typeof e ? _(e) : s(e);
    if (
        t &&
        (function (e) {
            if (!n.X) return !0;
            let { port: t, projectId: r, protocol: i } = e;
            return (
                !["protocol", "publicKey", "host", "projectId"].find(
                    (t) => !e[t] && (a.kg.error(`Invalid Sentry Dsn: ${t} missing`), !0),
                ) &&
                (r.match(/^\d+$/)
                    ? "http" !== i && "https" !== i
                        ? (a.kg.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1)
                        : !(t && isNaN(parseInt(t, 10))) || (a.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
                    : (a.kg.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1))
            );
        })(t)
    )
        return t;
}
