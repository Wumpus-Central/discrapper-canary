var i = n(56135),
    r = n(440693),
    a = n(766598),
    s = '[object Null]',
    o = '[object Undefined]',
    l = i ? i.toStringTag : void 0;
function u(e) {
    return null == e ? (void 0 === e ? o : s) : l && l in Object(e) ? r(e) : a(e);
}
e.exports = u;
