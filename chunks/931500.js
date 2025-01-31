n.d(t, { _: () => a }), n(47120);
var i = n(392711),
    s = n.n(i),
    r = n(442837),
    l = n(651941);
function a(e) {
    return (0, r.Wu)([l.Z], () =>
        s()(l.Z.getUserVerifiedKeys(e))
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
