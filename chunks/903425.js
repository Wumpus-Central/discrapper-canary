var r = n(56135),
    i = n(440693),
    o = n(766598),
    a = '[object Null]',
    s = '[object Undefined]',
    l = r ? r.toStringTag : void 0;
e.exports = function (e) {
    return null == e ? (void 0 === e ? s : a) : l && l in Object(e) ? i(e) : o(e);
};
