var n = r(855986),
    E = r(46653),
    i = r(495867),
    u = r(753181);
function l(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
r.d(
    t,
    {},
    {
        c: function () {
            return (0, n.bG)([i.A, E.default], () => {
                let e = i.A.getUserIds();
                return null == e || l(e, E.default.getId());
            });
        },
        w: function (e) {
            return (0, n.bG)([u.A, E.default], () => {
                if (null == e) return !0;
                let t = u.A.getUserIds(e);
                return null == t || l(t, E.default.getId());
            });
        },
    },
);
