var i,
    a = r(444675),
    o = r(413135),
    s = o.Buffer,
    l = {};
for (i in o) {
    if (!!o.hasOwnProperty(i)) 'SlowBuffer' !== i && 'Buffer' !== i && (l[i] = o[i]);
}
var u = (l.Buffer = {});
for (i in s) {
    if (!!s.hasOwnProperty(i)) 'allocUnsafe' !== i && 'allocUnsafeSlow' !== i && (u[i] = s[i]);
}
if (
    ((l.Buffer.prototype = s.prototype),
    (!u.from || u.from === Uint8Array.from) &&
        (u.from = function (e, n, r) {
            if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
            if (e && void 0 === e.length) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
            return s(e, n, r);
        }),
    !u.alloc &&
        (u.alloc = function (e, n, r) {
            if ('number' != typeof e) throw TypeError('The "size" argument must be of type number. Received type ' + typeof e);
            if (e < 0 || e >= 2 * 1073741824) throw RangeError('The value "' + e + '" is invalid for option "size"');
            var i = s(e);
            return n && 0 !== n.length ? ('string' == typeof r ? i.fill(n, r) : i.fill(n)) : i.fill(0), i;
        }),
    !l.kStringMaxLength)
)
    try {
        l.kStringMaxLength = a.binding('buffer').kStringMaxLength;
    } catch (e) {}
!l.constants && ((l.constants = { MAX_LENGTH: l.kMaxLength }), l.kStringMaxLength && (l.constants.MAX_STRING_LENGTH = l.kStringMaxLength)), (e.exports = l);
