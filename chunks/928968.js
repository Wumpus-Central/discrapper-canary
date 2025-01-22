r.d(n, {
    f: function () {
        return o;
    },
    w: function () {
        return s;
    }
});
var i = r(515652),
    a = r(926028);
function o(e, n) {
    var r = new a.p(i.s[e]);
    return r.loadDataTransfer(n), r;
}
function s(e) {
    if (!e) return null;
    var n = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(i.s).filter(function (e) {
            return i.s[e].matchesTypes.some(function (e) {
                return n.indexOf(e) > -1;
            });
        })[0] || null
    );
}
