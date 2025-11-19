n.d(t, {
    G: () => c,
    Q: () => l,
});
var r = n(473749),
    i = n(442837),
    a = n(232567),
    o = n(594174),
    s = n(276444);
let l = 3;
function c() {
    let e = (0, i.Wu)([s.Z], () => s.Z.getSentUserIds()),
        t = (0, i.Wu)([o.default], () => e.map((e) => o.default.getUser(e)).filter((e) => null != e));
    return (
        r.useEffect(() => {
            e.forEach((e) => {
                (0, a.PR)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === l,
            refreshAt: (0, i.e7)([s.Z], () => s.Z.getRefreshAt()),
        }
    );
}
