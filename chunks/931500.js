n.d(t, {
    _: function () {
        return l;
    }
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    s = n(442837),
    a = n(651941);
function l(e) {
    return (0, s.Wu)([a.Z], () =>
        r()(a.Z.getUserVerifiedKeys(e))
            .entries()
            .map((e) => {
                let [t, n] = e;
                return {
                    verifiedKey: t,
                    timestamp: n
                };
            })
            .sortBy((e) => -1 * e.timestamp)
            .value()
    );
}
