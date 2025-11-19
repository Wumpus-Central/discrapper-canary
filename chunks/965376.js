n.d(t, { D: () => h }), n(539854);
var r = n(473749),
    i = n(442837),
    l = n(941028),
    a = n(493773),
    s = n(509848),
    o = n(485386),
    c = n(159299),
    d = n(231338),
    u = n(388032);
let p = [];
function h(e, t) {
    (0, a.ZP)(() => {
        (null == t ? void 0 : t.id) != null && (0, l.b8)(t.id, e, s.KV);
    });
    let n = (0, i.e7)([o.Z], () => (null != t ? o.Z.getSortedRoles(t.id) : [])),
        { version: h, members: f } = (0, i.cj)([c.Z], () => ({
            version: c.Z.getMemberListVersion(e),
            members: c.Z.getMemberListSections(e),
        })),
        g = null == t,
        m = r.useMemo(() => {
            if (g) return p;
            let e = n
                .filter((e) => e.hoist)
                .map((e) => ({
                    id: e.id,
                    label: e.name,
                }));
            return (
                e.push(
                    {
                        id: d.Sk.ONLINE,
                        label: u.intl.string(u.t.WbGtnH),
                    },
                    {
                        id: d.Sk.OFFLINE,
                        label: u.intl.string(u.t.Vv0abJ),
                    },
                ),
                e.map((e) => {
                    var t, n;
                    let { id: r, label: i } = e;
                    return {
                        label: i,
                        userIds: null != (n = null == f || null == (t = f[r]) ? void 0 : t.userIds) ? n : [],
                        id: r,
                        roleId: r,
                    };
                })
            );
        }, [n, f, h, g]);
    return null != f ? m : p;
}
