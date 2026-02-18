n.d(t, { A: () => o });
var a = n(679740);
let i = { LATIN12: a.Xh, LATIN24: a.ID, ASIAN: a.KC },
    l = /(AM|PM)$/;
function o(e) {
    return null != e.match(l) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}
