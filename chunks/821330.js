var i = n(876557),
    r = n(541303),
    a = Object.prototype.hasOwnProperty;
function s(e) {
    if (!i(e)) return r(e);
    var t = [];
    for (var n in Object(e)) a.call(e, n) && 'constructor' != n && t.push(n);
    return t;
}
e.exports = s;
