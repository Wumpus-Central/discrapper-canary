n.d(t, { V: () => c }), n(47120), n(192379);
var i = n(392711),
    s = n.n(i),
    r = n(442837),
    l = n(271383),
    a = n(430824),
    o = n(353093);
function c() {
    return (0, r.Wu)([a.Z, l.ZP], () => {
        let e = a.Z.getGuilds();
        return s()(e)
            .values()
            .filter((e) => {
                var t;
                return (0, o.EJ)(e) && (null === (t = l.ZP.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null;
            })
            .value();
    });
}
