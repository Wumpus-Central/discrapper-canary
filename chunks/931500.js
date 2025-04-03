n.d(t, { _: () => l }), n(47120);
var r = n(392711),
    i = n.n(r),
    s = n(442837),
    a = n(651941);
function l(e) {
    return (0, s.Wu)([a.Z], () =>
        i()(a.Z.getUserVerifiedKeys(e))
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
