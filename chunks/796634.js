n.d(t, {
    G: () => c,
    Q: () => o
});
var i = n(192379),
    s = n(442837),
    r = n(232567),
    l = n(594174),
    a = n(276444);
let o = 3;
function c() {
    let e = (0, s.Wu)([a.Z], () => a.Z.getSentUserIds()),
        t = (0, s.Wu)([l.default], () => e.map((e) => l.default.getUser(e)).filter((e) => null != e));
    return (
        i.useEffect(() => {
            e.forEach((e) => {
                (0, r.PR)(e);
            });
        }, [e]),
        {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === o,
            refreshAt: (0, s.e7)([a.Z], () => a.Z.getRefreshAt())
        }
    );
}
