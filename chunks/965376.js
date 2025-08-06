(n.d(t, { D: () => p }), n(539854));
var r = n(73800),
    i = n(442837),
    l = n(941028),
    a = n(493773),
    s = n(509848),
    o = n(485386),
    c = n(159299),
    u = n(231338),
    d = n(388032);
let h = [];
function p(e, t) {
    (0, a.ZP)(() => {
        (null == t ? void 0 : t.id) != null && (0, l.b8)(t.id, e, s.KV);
    });
    let n = (0, i.e7)([o.Z], () => (null != t ? o.Z.getSortedRoles(t.id) : [])),
        { version: p, members: f } = (0, i.cj)([c.Z], () => ({
            version: c.Z.getMemberListVersion(e),
            members: c.Z.getMemberListSections(e)
        })),
        g = null == t,
        m = r.useMemo(() => {
            if (g) return h;
            let e = n
                .filter((e) => e.hoist)
                .map((e) => ({
                    id: e.id,
                    label: e.name
                }));
            return (
                e.push(
                    {
                        id: u.Sk.ONLINE,
                        label: d.intl.string(d.t.WbGtnJ)
                    },
                    {
                        id: u.Sk.OFFLINE,
                        label: d.intl.string(d.t.Vv0abG)
                    }
                ),
                e.map((e) => {
                    var t, n;
                    let { id: r, label: i } = e;
                    return {
                        label: i,
                        userIds: null != (n = null == f || null == (t = f[r]) ? void 0 : t.userIds) ? n : [],
                        id: r,
                        roleId: r
                    };
                })
            );
        }, [n, f, p, g]);
    return null != f ? m : h;
}
