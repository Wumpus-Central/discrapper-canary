var i,
    r = n(444675),
    a = n(413135),
    s = a.Buffer,
    o = {};
for (i in a) a.hasOwnProperty(i) && 'SlowBuffer' !== i && 'Buffer' !== i && (o[i] = a[i]);
var l = (o.Buffer = {});
for (i in s) s.hasOwnProperty(i) && 'allocUnsafe' !== i && 'allocUnsafeSlow' !== i && (l[i] = s[i]);
if (
    ((o.Buffer.prototype = s.prototype),
    (l.from && l.from !== Uint8Array.from) ||
        (l.from = function (e, t, n) {
            if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
            if (e && void 0 === e.length) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
            return s(e, t, n);
        }),
    l.alloc ||
        (l.alloc = function (e, t, n) {
            if ('number' != typeof e) throw TypeError('The "size" argument must be of type number. Received type ' + typeof e);
            if (e < 0 || e >= 2 * 1073741824) throw RangeError('The value "' + e + '" is invalid for option "size"');
            var i = s(e);
            return t && 0 !== t.length ? ('string' == typeof n ? i.fill(t, n) : i.fill(t)) : i.fill(0), i;
        }),
    !o.kStringMaxLength)
)
    try {
        o.kStringMaxLength = r.binding('buffer').kStringMaxLength;
    } catch (e) {}
!o.constants && ((o.constants = { MAX_LENGTH: o.kMaxLength }), o.kStringMaxLength && (o.constants.MAX_STRING_LENGTH = o.kStringMaxLength)), (e.exports = o);
