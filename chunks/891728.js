n.d(t, { V: () => c }), n(47120), n(192379);
var i = n(392711),
    s = n.n(i),
    l = n(442837),
    r = n(271383),
    a = n(430824),
    o = n(353093);
function c() {
    return (0, l.Wu)([a.Z, r.ZP], () => {
        let e = a.Z.getGuilds();
        return s()(e)
            .values()
            .filter((e) => {
                var t;
                return (0, o.EJ)(e) && (null === (t = r.ZP.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null;
            })
            .value();
    });
}
