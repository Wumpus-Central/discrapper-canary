var i = r(531478).codes.ERR_INVALID_OPT_VALUE;
function a(e, n, r) {
    return null != e.highWaterMark ? e.highWaterMark : n ? e[r] : null;
}
function o(e, n, r, o) {
    var s = a(n, o, r);
    if (null != s) {
        if (!(isFinite(s) && Math.floor(s) === s) || s < 0) throw new i(o ? r : 'highWaterMark', s);
        return Math.floor(s);
    }
    return e.objectMode ? 16 : 16384;
}
e.exports = { getHighWaterMark: o };
