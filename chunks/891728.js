n.d(t, { V: () => c }), n(47120), n(192379);
var r = n(392711),
    i = n.n(r),
    s = n(442837),
    a = n(271383),
    l = n(430824),
    o = n(353093);
function c() {
    return (0, s.Wu)([l.Z, a.ZP], () => {
        let e = l.Z.getGuilds();
        return i()(e)
            .values()
            .filter((e) => {
                var t;
                return (0, o.EJ)(e) && (null === (t = a.ZP.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null;
            })
            .value();
    });
}
