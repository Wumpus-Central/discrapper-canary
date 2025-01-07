r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(972698);
function a(e, n) {
    if ('object' != (0, i.Z)(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var a = r.call(e, n || 'default');
        if ('object' != (0, i.Z)(a)) return a;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === n ? String : Number)(e);
}
