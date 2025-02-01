(t.parse = s), (t.serialize = o);
var n = decodeURIComponent,
    i = encodeURIComponent,
    r = /; */,
    a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function s(e, t) {
    if ('string' != typeof e) throw TypeError('argument str must be a string');
    var i = {},
        a = t || {},
        s = e.split(r),
        o = a.decode || n;
    return (
        s.forEach(function (e) {
            var t = e.indexOf('=');
            if (!(t < 0)) {
                var n = e.substr(0, t).trim(),
                    r = e.substr(++t, e.length).trim();
                '"' == r[0] && (r = r.slice(1, -1)), void 0 == i[n] && (i[n] = l(r, o));
            }
        }),
        i
    );
}
function o(e, t, n) {
    var r = n || {},
        s = r.encode || i;
    if (!a.test(e)) throw TypeError('argument name is invalid');
    var o = s(t);
    if (o && !a.test(o)) throw TypeError('argument val is invalid');
    var l = [e + '=' + o];
    if (null != r.maxAge) {
        var u = r.maxAge - 0;
        if (isNaN(u)) throw Error('maxAge should be a Number');
        l.push('Max-Age=' + Math.floor(u));
    }
    if (r.domain) {
        if (!a.test(r.domain)) throw TypeError('option domain is invalid');
        l.push('Domain=' + r.domain);
    }
    if (r.path) {
        if (!a.test(r.path)) throw TypeError('option path is invalid');
        l.push('Path=' + r.path);
    }
    return r.expires && l.push('Expires=' + r.expires.toUTCString()), r.httpOnly && l.push('HttpOnly'), r.secure && l.push('Secure'), r.firstPartyOnly && l.push('First-Party-Only'), l.join('; ');
}
function l(e, t) {
    try {
        return t(e);
    } catch (t) {
        return e;
    }
}
