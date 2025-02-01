var i = n(531478).codes.ERR_INVALID_OPT_VALUE;
function r(e, t, n) {
    return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
}
function a(e, t, n, a) {
    var s = r(t, a, n);
    if (null != s) {
        if (!(isFinite(s) && Math.floor(s) === s) || s < 0) throw new i(a ? n : 'highWaterMark', s);
        return Math.floor(s);
    }
    return e.objectMode ? 16 : 16384;
}
e.exports = { getHighWaterMark: a };
