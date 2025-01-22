var i = r(876557),
    a = r(541303),
    o = Object.prototype.hasOwnProperty;
function s(e) {
    if (!i(e)) return a(e);
    var n = [];
    for (var r in Object(e)) o.call(e, r) && 'constructor' != r && n.push(r);
    return n;
}
e.exports = s;
