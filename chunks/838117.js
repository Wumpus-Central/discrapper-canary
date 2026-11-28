var e = l(855986),
    u = l(782068);
function r(t) {
    return (0, e.bG)([u.A], () => (null == t ? null : u.A.getCopy(t)), [t]);
}
l.d(
    n,
    {},
    {
        AJ: function (t) {
            return null != r(t);
        },
        Ay: r,
        GB: function (t) {
            return (0, e.bG)([u.A], () => u.A.getDownstreamUpdates(t), [t]);
        },
        cg: function (t) {
            return (0, e.bG)([u.A], () => u.A.getLastSync(t), [t]);
        },
    },
);
