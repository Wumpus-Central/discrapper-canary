a.d(t, { A: () => E });
var i = a(582128),
    n = a(598748),
    l = a(540185),
    r = a(702841),
    s = a(793574),
    u = a(382483),
    c = a(385113),
    p = a(734066),
    d = a(885386),
    f = a(287809),
    o = a(403362),
    A = a(633075),
    b = a(646976),
    h = a(289173),
    _ = a(210598);
let g = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-setter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = a(465318),
    m = a(667049),
    w = a(229231);
function E() {
    let e = d.Q_.useSetting(),
        t = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        a = (0, m.A)(t?.id),
        E = I.A.useConfig({ location: "useAddableWidgets" }).enabled,
        C = (0, r.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        G = (0, r.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        L = (0, r.bG)([c.A], () => c.A.getDeveloperApplicationIds()),
        O = (0, p.sw)(),
        D = g.useConfig({ location: s.A.USER_PROFILE_MODAL_V2 }).enabled && O;
    return (
        i.useEffect(() => {
            (0, u.Wq)().catch(() => {}), e && (0, u.i$)().catch(() => {});
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof A.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return w.Zc.flatMap((a) => {
                switch (a) {
                    case l.x.APPLICATION: {
                        let a = new Set([...G, ...(e ? L : [])]);
                        return Object.values(C)
                            .map((e) => e[0])
                            .filter(o.Vq)
                            .filter((e) => a.has(e.application_id))
                            .filter((e) => !t.has(e.application_id))
                            .filter(
                                (e) =>
                                    null != e.surfaces[n.m.WIDGET_TOP] &&
                                    null != e.surfaces[n.m.WIDGET_BOTTOM] &&
                                    null != e.surfaces[n.m.ADD_WIDGET_PREVIEW],
                            )
                            .map((e) => new A.R({ applicationId: e.application_id }));
                    }
                    case l.x.PERSONAL:
                        if (!E || i.has(a)) return [];
                        return (0, _.g0)();
                    case l.x.CLIPS_GALLERY:
                        if (!D || i.has(a)) return [];
                        return new b.k({ clips: [] });
                    default:
                        if ((0, h.hL)(a)) {
                            if (i.has(a)) return [];
                            return new h.Yy({ type: a, games: [] });
                        }
                        return (0, o.xb)(a);
                }
            });
        }, [e, C, G, L, a, D, E])
    );
}
