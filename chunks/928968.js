n.d(t, {
    f: () => a,
    w: () => s
});
var i = n(515652),
    r = n(926028);
function a(e, t) {
    var n = new r.p(i.s[e]);
    return n.loadDataTransfer(t), n;
}
function s(e) {
    if (!e) return null;
    var t = Array.prototype.slice.call(e.types || []);
    return (
        Object.keys(i.s).filter(function (e) {
            return i.s[e].matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
            });
        })[0] || null
    );
}
