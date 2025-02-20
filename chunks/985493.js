var r = n(413135).Buffer,
    i = n(988608),
    o = n(35609),
    a = n(168725);
function s(e) {
    return new a(new r(o[e].prime, 'hex'), new r(o[e].gen, 'hex'));
}
var l = {
    binary: !0,
    hex: !0,
    base64: !0
};
function c(e, t, n, o) {
    return r.isBuffer(t) || void 0 === l[t] ? c(e, 'binary', t, n) : ((t = t || 'binary'), (o = o || 'binary'), (n = n || new r([2])), r.isBuffer(n) || (n = new r(n, o)), 'number' == typeof e) ? new a(i(e, n), n, !0) : (r.isBuffer(e) || (e = new r(e, t)), new a(e, n, !0));
}
(t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = s), (t.createDiffieHellman = t.DiffieHellman = c);
