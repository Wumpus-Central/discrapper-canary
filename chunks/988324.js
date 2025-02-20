var r,
    i = n(444675),
    o = n(413135),
    a = o.Buffer,
    s = {};
for (r in o) o.hasOwnProperty(r) && 'SlowBuffer' !== r && 'Buffer' !== r && (s[r] = o[r]);
var l = (s.Buffer = {});
for (r in a) a.hasOwnProperty(r) && 'allocUnsafe' !== r && 'allocUnsafeSlow' !== r && (l[r] = a[r]);
if (
    ((s.Buffer.prototype = a.prototype),
    (l.from && l.from !== Uint8Array.from) ||
        (l.from = function (e, t, n) {
            if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
            if (e && void 0 === e.length) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
            return a(e, t, n);
        }),
    l.alloc ||
        (l.alloc = function (e, t, n) {
            if ('number' != typeof e) throw TypeError('The "size" argument must be of type number. Received type ' + typeof e);
            if (e < 0 || e >= 2 * 1073741824) throw RangeError('The value "' + e + '" is invalid for option "size"');
            var r = a(e);
            return t && 0 !== t.length ? ('string' == typeof n ? r.fill(t, n) : r.fill(t)) : r.fill(0), r;
        }),
    !s.kStringMaxLength)
)
    try {
        s.kStringMaxLength = i.binding('buffer').kStringMaxLength;
    } catch (e) {}
!s.constants && ((s.constants = { MAX_LENGTH: s.kMaxLength }), s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), (e.exports = s);
