n.d(t, {
    Q1: () => l,
    hV: () => c,
    ky: () => s
}),
    n(35282),
    n(125548);
var r = n(895924),
    i = n(809090),
    a = n(944877),
    o = n(689079);
let s = (e) => (e.type === r.Qi.BUILT_IN ? a.Z : i.Z);
function l(e) {
    return ''.concat(e / 16, 'rem');
}
function c(e, t) {
    let n = t,
        r = !1,
        i = t.indexOf(':');
    if (i >= 0) {
        let e = t.lastIndexOf(' ', i);
        e >= 0 ? ((t = t.substring(0, e)), (r = !0)) : (t = t.substring(0, i));
    } else t = t.substring(0, t.length);
    let a = t.split(' ', o.Vd + 1);
    return (
        a.length > o.Vd && ((r = !0), a.pop()),
        (t = a.join(' ')),
        (n.length > t.length || t.endsWith(' ')) && ((r = !0), (t = t.trimEnd())),
        {
            text: t,
            parts: a,
            hasSpaceTerminator: r
        }
    );
}
