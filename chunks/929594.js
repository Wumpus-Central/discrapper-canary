n.d(t, { Z: () => r });
var i = n(972698);
function r(e, t) {
    if ('object' != (0, i.Z)(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' != (0, i.Z)(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
