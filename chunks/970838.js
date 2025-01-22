r.d(n, {
    Bw: function () {
        return s;
    },
    px: function () {
        return l;
    },
    rY: function () {
        return o;
    }
});
let i = {},
    a = null;
function o(e) {
    var n;
    let r = null !== (n = i[e]) && void 0 !== n ? n : 0;
    0 === r && (null == a || a(e, !0)), (i[e] = r + 1);
}
function s(e) {
    i[e]--, 0 === i[e] && (null == a || a(e, !1));
}
function l(e) {
    a = null != e ? e : null;
}
