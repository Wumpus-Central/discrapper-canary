var r = n(56135),
    i = n(440693),
    a = n(766598),
    o = '[object Null]',
    s = '[object Undefined]',
    l = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? s : o) : l && l in Object(e) ? i(e) : a(e);
};
