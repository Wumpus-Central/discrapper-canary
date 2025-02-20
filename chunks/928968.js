n.d(t, {
    f: () => o,
    w: () => a
});
var r = n(515652),
    i = n(926028);
function o(e, t) {
    var n = new i.p(r.s[e]);
    return n.loadDataTransfer(t), n;
}
function a(e) {
    if (!e) return null;
    var t = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(r.s).filter(function (e) {
            return r.s[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
            });
        })[0] || null
    );
}
