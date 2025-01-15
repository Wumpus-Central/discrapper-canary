n.d(t, {
    G: function () {
        return c;
    },
    Q: function () {
        return o;
    }
});
var i = n(192379),
    r = n(442837),
    s = n(232567),
    a = n(594174),
    l = n(276444);
let o = 3;
function c() {
    let e = (0, r.Wu)([l.Z], () => l.Z.getSentUserIds()),
        t = (0, r.Wu)([a.default], () => e.map((e) => a.default.getUser(e)).filter((e) => null != e));
    i.useEffect(() => {
        e.forEach((e) => {
            (0, s.PR)(e);
        });
    }, [e]);
    let n = e.length === o;
    return {
        referralSentUsers: t,
        hasSentAllReferrals: n,
        refreshAt: (0, r.e7)([l.Z], () => l.Z.getRefreshAt())
    };
}
