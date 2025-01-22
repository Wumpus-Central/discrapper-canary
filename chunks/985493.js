var i = r(413135).Buffer,
    a = r(988608),
    o = r(35609),
    s = r(168725);
function l(e) {
    return new s(new i(o[e].prime, 'hex'), new i(o[e].gen, 'hex'));
}
var u = {
    binary: !0,
    hex: !0,
    base64: !0
};
function c(e, n, r, o) {
    return i.isBuffer(n) || void 0 === u[n] ? c(e, 'binary', n, r) : ((n = n || 'binary'), (o = o || 'binary'), (r = r || new i([2])), !i.isBuffer(r) && (r = new i(r, o)), 'number' == typeof e) ? new s(a(e, r), r, !0) : (!i.isBuffer(e) && (e = new i(e, n)), new s(e, r, !0));
}
(n.DiffieHellmanGroup = n.createDiffieHellmanGroup = n.getDiffieHellman = l), (n.createDiffieHellman = n.DiffieHellman = c);
