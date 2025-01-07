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
    a = n(232567),
    s = n(594174),
    l = n(276444);
let o = 3;
function c() {
    let e = (0, r.Wu)([l.Z], () => l.Z.getSentUserIds()),
        t = (0, r.Wu)([s.default], () => e.map((e) => s.default.getUser(e)).filter((e) => null != e));
    i.useEffect(() => {
        e.forEach((e) => {
            (0, a.PR)(e);
        });
    }, [e]);
    let n = e.length === o;
    return {
        referralSentUsers: t,
        hasSentAllReferrals: n,
        refreshAt: (0, r.e7)([l.Z], () => l.Z.getRefreshAt())
    };
}
