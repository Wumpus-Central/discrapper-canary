n.d(t, { A: () => l });
var a = n(679740);
let i = { LATIN12: a.Xh, LATIN24: a.ID, ASIAN: a.KC },
    r = /(AM|PM)$/;
function l(e) {
    return null != e.match(r) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}
