var i = r(880051),
    a = r(173472),
    o = Object.prototype.hasOwnProperty;
function s(e) {
    if (!(0, i.Z)(e)) return (0, a.Z)(e);
    var n = [];
    for (var r in Object(e)) o.call(e, r) && 'constructor' != r && n.push(r);
    return n;
}
n.Z = s;
