n.d(t, {
    V: function () {
        return c;
    }
}),
    n(47120),
    n(192379);
var i = n(392711),
    s = n.n(i),
    r = n(442837),
    a = n(271383),
    l = n(430824),
    o = n(353093);
function c() {
    return (0, r.Wu)([l.Z, a.ZP], () => {
        let e = l.Z.getGuilds();
        return s()(e)
            .values()
            .filter((e) => {
                var t;
                return (0, o.EJ)(e) && (null === (t = a.ZP.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null;
            })
            .value();
    });
}
