n.d(t, { Z: () => o });
var i = n(70956),
    r = n(564990),
    a = n(353647);
let s = i.Z.Millis.MINUTE;
function o(e, t) {
    var n, i;
    if (a.Z.isFetchingUserOutbox(e)) return;
    let o = null !== (i = null === (n = a.Z.getUserOutbox(e)) || void 0 === n ? void 0 : n.lastFetched) && void 0 !== i ? i : 0;
    if (!(Date.now() - o < s)) return (0, r.JX)(e, t);
}
