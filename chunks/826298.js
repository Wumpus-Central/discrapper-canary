n.d(t, {
    Q1: () => l,
    hV: () => c,
    ky: () => s
}),
    n(301563),
    n(878331);
var r = n(895924),
    i = n(809090),
    o = n(944877),
    a = n(689079);
let s = (e) => (e.type === r.Qi.BUILT_IN ? o.Z : i.Z);
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
    let o = t.split(' ', a.Vd + 1);
    return (
        o.length > a.Vd && ((r = !0), o.pop()),
        (t = o.join(' ')),
        (n.length > t.length || t.endsWith(' ')) && ((r = !0), (t = t.trimEnd())),
        {
            text: t,
            parts: o,
            hasSpaceTerminator: r
        }
    );
}
