n.d(t, {
    k9: () => l,
    tT: () => o,
    zx: () => s
});
var i = n(442837),
    r = n(581883),
    a = n(710111),
    s = (function (e) {
        return (e[(e.GLOBAL = 0)] = 'GLOBAL'), (e[(e.GUILD = 1)] = 'GUILD'), e;
    })({});
function o(e) {
    return (0, i.e7)([r.Z], () => {
        var t, n;
        return u(e, null !== (n = null === (t = r.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
    });
}
function l(e) {
    var t, n;
    return u(e, null !== (n = null === (t = r.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
}
function u(e, t) {
    var n, i;
    let r = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
        s = null === (i = t[a.hY]) || void 0 === i ? void 0 : i.joinSound,
        o = null != r ? r : s;
    return null != o
        ? {
              ...o,
              type: null != r ? 1 : 0
          }
        : void 0;
}
