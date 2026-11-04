var i = n(350835),
    r = n(487887);
function a(e) {
    return e.type === i.$.STREAMING && null != e.url && r.yz.test(e.url);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return null != e && (Array.isArray(e) ? e.some(a) : a(e));
        },
    },
);
