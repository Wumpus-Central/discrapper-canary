var r = n(531478).codes.ERR_INVALID_OPT_VALUE;
function i(e, t, n) {
    return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
}
function o(e, t, n, o) {
    var a = i(t, o, n);
    if (null != a) {
        if (!(isFinite(a) && Math.floor(a) === a) || a < 0) throw new r(o ? n : 'highWaterMark', a);
        return Math.floor(a);
    }
    return e.objectMode ? 16 : 16384;
}
e.exports = { getHighWaterMark: o };
