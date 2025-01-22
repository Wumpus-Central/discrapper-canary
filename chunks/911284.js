r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(70956),
    a = r(564990),
    o = r(353647);
let s = i.Z.Millis.MINUTE;
function l(e, n) {
    var r, i;
    if (o.Z.isFetchingUserOutbox(e)) return;
    let l = null !== (i = null === (r = o.Z.getUserOutbox(e)) || void 0 === r ? void 0 : r.lastFetched) && void 0 !== i ? i : 0;
    if (!(Date.now() - l < s)) return (0, a.JX)(e, n);
}
