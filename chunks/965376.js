n.d(t, { D: () => m }), n(47120), n(978209), n(653041);
var r = n(192379),
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    a = n(941028),
    s = n(493773),
    c = n(509848),
    u = n(430824),
    d = n(159299),
    p = n(231338),
    h = n(388032);
let f = [];
function m(e, t) {
    (0, s.ZP)(() => {
        (null == t ? void 0 : t.id) != null && (0, a.b8)(t.id, e, c.KV);
    });
    let n = (0, o.e7)([u.Z], () => (null != t ? u.Z.getRoles(t.id) : void 0)),
        { version: i, members: m } = (0, o.cj)([d.Z], () => ({
            version: d.Z.getMemberListVersion(e),
            members: d.Z.getMemberListSections(e)
        })),
        g = null == t,
        b = r.useMemo(() => {
            if (g) return f;
            let e = l()(n)
                .values()
                .filter((e) => e.hoist)
                .sortBy((e) => e.position)
                .reverse()
                .map((e) => e.id)
                .value();
            return (
                e.push(p.Sk.ONLINE, p.Sk.OFFLINE),
                e.map((e) => {
                    var t, r, i, l;
                    return {
                        label: e === p.Sk.ONLINE ? h.NW.string(h.t.WbGtnJ) : e === p.Sk.OFFLINE ? h.NW.string(h.t.Vv0abG) : null !== (i = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '',
                        userIds: null !== (l = null == m ? void 0 : null === (r = m[e]) || void 0 === r ? void 0 : r.userIds) && void 0 !== l ? l : [],
                        id: e,
                        roleId: e
                    };
                })
            );
        }, [n, m, i, g]);
    return null != m ? b : f;
}
