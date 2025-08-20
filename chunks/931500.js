n.d(t, { _: () => s }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(651941);
function s(e) {
    return (0, a.Wu)([o.Z], () =>
        i()(o.Z.getUserVerifiedKeys(e))
            .entries()
            .map((e) => {
                let [t, n] = e;
                return {
                    verifiedKey: t,
                    timestamp: n,
                };
            })
            .sortBy((e) => -1 * e.timestamp)
            .value(),
    );
}
