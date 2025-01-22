r.d(n, {
    Q1: function () {
        return u;
    },
    hV: function () {
        return c;
    },
    ky: function () {
        return l;
    }
});
var i = r(895924),
    a = r(809090),
    o = r(944877),
    s = r(689079);
let l = (e) => (e.type === i.Qi.BUILT_IN ? o.Z : a.Z);
function u(e) {
    return ''.concat(e / 16, 'rem');
}
function c(e, n) {
    let r = n,
        i = !1,
        a = n.indexOf(':');
    if (a >= 0) {
        let e = n.lastIndexOf(' ', a);
        e >= 0 ? ((n = n.substring(0, e)), (i = !0)) : (n = n.substring(0, a));
    } else n = n.substring(0, n.length);
    let o = n.split(' ', s.Vd + 1);
    return (
        o.length > s.Vd && ((i = !0), o.pop()),
        (n = o.join(' ')),
        (r.length > n.length || n.endsWith(' ')) && ((i = !0), (n = n.trimEnd())),
        {
            text: n,
            parts: o,
            hasSpaceTerminator: i
        }
    );
}
