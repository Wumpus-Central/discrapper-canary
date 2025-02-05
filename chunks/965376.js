n.d(t, { D: () => f }), n(47120), n(653041);
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    r = n(442837),
    s = n(941028),
    o = n(493773),
    c = n(509848),
    d = n(430824),
    u = n(159299),
    h = n(231338),
    p = n(388032);
let m = [];
function f(e, t) {
    (0, o.ZP)(() => {
        (null == t ? void 0 : t.id) != null && (0, s.b8)(t.id, e, c.KV);
    });
    let n = (0, r.e7)([d.Z], () => (null != t ? d.Z.getRoles(t.id) : void 0)),
        { version: l, members: f } = (0, r.cj)([u.Z], () => ({
            version: u.Z.getMemberListVersion(e),
            members: u.Z.getMemberListSections(e)
        })),
        g = null == t,
        _ = i.useMemo(() => {
            if (g) return m;
            let e = a()(n)
                .values()
                .filter((e) => e.hoist)
                .sortBy((e) => e.position)
                .reverse()
                .map((e) => e.id)
                .value();
            return (
                e.push(h.Sk.ONLINE, h.Sk.OFFLINE),
                e.map((e) => {
                    var t, i, l, a;
                    return {
                        label: e === h.Sk.ONLINE ? p.intl.string(p.t.WbGtnJ) : e === h.Sk.OFFLINE ? p.intl.string(p.t.Vv0abG) : null !== (l = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : '',
                        userIds: null !== (a = null == f ? void 0 : null === (i = f[e]) || void 0 === i ? void 0 : i.userIds) && void 0 !== a ? a : [],
                        id: e,
                        roleId: e
                    };
                })
            );
        }, [n, f, l, g]);
    return null != f ? _ : m;
}
