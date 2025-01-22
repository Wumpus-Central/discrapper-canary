r.d(n, {
    h: function () {
        return c;
    }
});
var i = r(177593);
var a = r(653041);
var o = r(570140),
    s = r(38618);
let l = [];
function u(e) {
    setImmediate(() => e());
}
function c(e) {
    s.Z.isConnectedOrOverlay() ? u(e) : l.push(e);
}
o.Z.subscribe('CONNECTION_OPEN', () => {
    l.forEach((e) => u(e)), (l = []);
}),
    o.Z.subscribe('CONNECTION_RESUMED', () => {
        l.forEach((e) => u(e)), (l = []);
    });
