n.d(t, { D: () => h }), n(47120), n(653041);
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    r = n(442837),
    s = n(430824),
    o = n(159299),
    c = n(231338),
    d = n(388032);
let u = [];
function h(e, t) {
    let n = (0, r.e7)([s.Z], () => (null != t ? s.Z.getRoles(t.id) : void 0)),
        { version: l, members: h } = (0, r.cj)([o.Z], () => ({
            version: o.Z.getMemberListVersion(e),
            members: o.Z.getMemberListSections(e)
        })),
        p = null == t,
        m = i.useMemo(() => {
            if (p) return u;
            let e = a()(n)
                .values()
                .filter((e) => e.hoist)
                .sortBy((e) => e.position)
                .reverse()
                .map((e) => e.id)
                .value();
            return (
                e.push(c.Sk.ONLINE, c.Sk.OFFLINE),
                e.map((e) => {
                    var t, i, l, a;
                    return {
                        label: e === c.Sk.ONLINE ? d.intl.string(d.t.WbGtnJ) : e === c.Sk.OFFLINE ? d.intl.string(d.t.Vv0abG) : null !== (l = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : '',
                        userIds: null !== (a = null == h ? void 0 : null === (i = h[e]) || void 0 === i ? void 0 : i.userIds) && void 0 !== a ? a : [],
                        id: e,
                        roleId: e
                    };
                })
            );
        }, [n, h, l, p]);
    return null != h ? m : u;
}
