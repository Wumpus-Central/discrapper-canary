n.d(t, { _: () => a }), n(47120);
var i = n(392711),
    s = n.n(i),
    l = n(442837),
    r = n(651941);
function a(e) {
    return (0, l.Wu)([r.Z], () =>
        s()(r.Z.getUserVerifiedKeys(e))
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
