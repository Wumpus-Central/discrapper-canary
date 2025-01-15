n.d(t, {
    G: function () {
        return c;
    },
    Q: function () {
        return o;
    }
});
var i = n(192379),
    s = n(442837),
    r = n(232567),
    a = n(594174),
    l = n(276444);
let o = 3;
function c() {
    let e = (0, s.Wu)([l.Z], () => l.Z.getSentUserIds()),
        t = (0, s.Wu)([a.default], () => e.map((e) => a.default.getUser(e)).filter((e) => null != e));
    i.useEffect(() => {
        e.forEach((e) => {
            (0, r.PR)(e);
        });
    }, [e]);
    let n = e.length === o;
    return {
        referralSentUsers: t,
        hasSentAllReferrals: n,
        refreshAt: (0, s.e7)([l.Z], () => l.Z.getRefreshAt())
    };
}
