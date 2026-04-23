n.d(t, { A: () => r });
var i = n(64700),
    l = n(599941),
    s = n(386784);
function r(e, t) {
    let n = (0, l.uP)(e),
        r = (0, s.A)(e);
    return i.useMemo(
        () =>
            n.map((e) => {
                let n = e?.role_id;
                return {
                    ...(t?.ppgs[e.id] ?? {}),
                    key: e.id,
                    subscriptionListing: e,
                    roleMemberCount: null == n ? void 0 : r?.[n],
                };
            }),
        [n, t?.ppgs, r],
    );
}
