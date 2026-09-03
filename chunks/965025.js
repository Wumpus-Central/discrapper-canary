n.d(t, { A: () => a });
var i = n(507756),
    r = n(731854);
function a(e, t, n, a) {
    if (n.type !== r.ei.FIXED) return n;
    let s = (0, i.A)(e, t, n.height, a);
    return s === n.height ? n : { ...n, width: Math.round((n.width * s) / n.height), height: s };
}
