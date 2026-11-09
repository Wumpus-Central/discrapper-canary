let r = null,
    l = null,
    u = new Set();
function o() {
    for (let e of u) e();
}
function s() {
    null != l && (clearTimeout(l), (l = null));
}
function i(e) {
    null != r && (null == e || r.iframeId === e) && (s(), (r = null), o());
}
n.d(
    t,
    {},
    {
        EX: function (e) {
            (s(), (r = { ...e }), (l = setTimeout(() => i(), 8e3)), o());
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
