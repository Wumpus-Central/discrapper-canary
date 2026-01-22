n.d(t, {
    A: () => a,
});
var r = n(735438),
    i = n.n(r);

function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    return i()(e)
        .map((e) => ("null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]))
        .flattenDeep()
        .filter(n)
        .value();
}
