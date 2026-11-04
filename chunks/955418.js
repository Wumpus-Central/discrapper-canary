let r = null,
    l = null,
    u = new Set();
function s() {
    for (let e of u) e();
}
function o() {
    null != l && (clearTimeout(l), (l = null));
}
function i(e) {
    null != r && (null == e || r.iframeId === e) && (o(), (r = null), s());
}
n.d(
    t,
    {},
    {
        EX: function (e) {
            (o(), (r = { ...e }), (l = setTimeout(() => i(), 8e3)), s());
        },
        NO: function () {
            return r;
        },
        SV: function (e) {
            return (
                u.add(e),
                () => {
                    u.delete(e);
                }
            );
        },
        ny: i,
    },
);
