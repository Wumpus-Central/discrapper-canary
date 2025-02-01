var i = n(413135).Buffer,
    r = n(988608),
    a = n(35609),
    s = n(168725);
function o(e) {
    return new s(new i(a[e].prime, 'hex'), new i(a[e].gen, 'hex'));
}
var l = {
    binary: !0,
    hex: !0,
    base64: !0
};
function u(e, t, n, a) {
    return i.isBuffer(t) || void 0 === l[t] ? u(e, 'binary', t, n) : ((t = t || 'binary'), (a = a || 'binary'), (n = n || new i([2])), i.isBuffer(n) || (n = new i(n, a)), 'number' == typeof e) ? new s(r(e, n), n, !0) : (i.isBuffer(e) || (e = new i(e, t)), new s(e, n, !0));
}
(t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = o), (t.createDiffieHellman = t.DiffieHellman = u);
