n.d(t, { _: () => a }), n(388685);
var i = n(392711),
    r = n.n(i),
    s = n(442837),
    l = n(651941);
function a(e) {
    return (0, s.Wu)([l.Z], () =>
        r()(l.Z.getUserVerifiedKeys(e))
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
