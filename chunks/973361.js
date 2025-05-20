(t.parse = a), (t.serialize = s);
var n = decodeURIComponent,
    r = encodeURIComponent,
    i = /; */,
    o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function a(e, t) {
    if ('string' != typeof e) throw TypeError('argument str must be a string');
    var r = {},
        o = t || {},
        a = e.split(i),
        s = o.decode || n;
    return (
        a.forEach(function (e) {
            var t = e.indexOf('=');
            if (!(t < 0)) {
                var n = e.substr(0, t).trim(),
                    i = e.substr(++t, e.length).trim();
                '"' == i[0] && (i = i.slice(1, -1)), void 0 == r[n] && (r[n] = l(i, s));
            }
        }),
        r
    );
}
function s(e, t, n) {
    var i = n || {},
        a = i.encode || r;
    if (!o.test(e)) throw TypeError('argument name is invalid');
    var s = a(t);
    if (s && !o.test(s)) throw TypeError('argument val is invalid');
    var l = [e + '=' + s];
    if (null != i.maxAge) {
        var c = i.maxAge - 0;
        if (isNaN(c)) throw Error('maxAge should be a Number');
        l.push('Max-Age=' + Math.floor(c));
    }
    if (i.domain) {
        if (!o.test(i.domain)) throw TypeError('option domain is invalid');
        l.push('Domain=' + i.domain);
    }
    if (i.path) {
        if (!o.test(i.path)) throw TypeError('option path is invalid');
        l.push('Path=' + i.path);
    }
    return i.expires && l.push('Expires=' + i.expires.toUTCString()), i.httpOnly && l.push('HttpOnly'), i.secure && l.push('Secure'), i.firstPartyOnly && l.push('First-Party-Only'), l.join('; ');
}
function l(e, t) {
    try {
        return t(e);
    } catch (t) {
        return e;
    }
}
