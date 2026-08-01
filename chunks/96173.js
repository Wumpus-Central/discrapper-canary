a.d(t, { A: () => m });
var i = a(582128),
    n = a(598748),
    l = a(540185),
    r = a(702841),
    s = a(793574),
    p = a(382483),
    c = a(385113),
    u = a(885386),
    f = a(287809),
    d = a(403362),
    o = a(633075),
    A = a(646976),
    _ = a(289173);
let h = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-setter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var b = a(667049),
    I = a(229231);
function m() {
    let e = u.Q_.useSetting(),
        t = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        a = (0, b.A)(t?.id),
        m = (0, r.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        E = (0, r.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        g = (0, r.bG)([c.A], () => c.A.getDeveloperApplicationIds()),
        w = h.useConfig({ location: s.A.USER_PROFILE_MODAL_V2 }).enabled;
    return (
        i.useEffect(() => {
            (0, p.Wq)().catch(() => {}), e && (0, p.i$)().catch(() => {});
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof o.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return I.Zc.flatMap((a) => {
                switch (a) {
                    case l.x.APPLICATION: {
                        let a = new Set([...E, ...(e ? g : [])]);
                        return Object.values(m)
                            .map((e) => e[0])
                            .filter(d.Vq)
                            .filter((e) => a.has(e.application_id))
                            .filter((e) => !t.has(e.application_id))
                            .filter(
                                (e) =>
                                    null != e.surfaces[n.m.WIDGET_TOP] &&
                                    null != e.surfaces[n.m.WIDGET_BOTTOM] &&
                                    null != e.surfaces[n.m.ADD_WIDGET_PREVIEW],
                            )
                            .map((e) => new o.R({ applicationId: e.application_id }));
                    }
                    case l.x.PERSONAL:
                        return [];
                    case l.x.CLIPS_GALLERY:
                        if (!w || i.has(a)) return [];
                        return new A.k({ clips: [] });
                    default:
                        if ((0, _.hL)(a)) {
                            if (i.has(a)) return [];
                            return new _.Yy({ type: a, games: [] });
                        }
                        return (0, d.xb)(a);
                }
            });
        }, [e, m, E, g, a, w])
    );
}
