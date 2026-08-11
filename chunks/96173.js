a.d(t, { A: () => E });
var i = a(582128),
    n = a(598748),
    l = a(540185),
    r = a(702841),
    s = a(793574),
    u = a(382483),
    c = a(385113),
    p = a(885386),
    d = a(287809),
    f = a(403362),
    o = a(633075),
    A = a(646976),
    b = a(289173),
    h = a(210598);
let _ = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-setter",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var g = a(465318),
    I = a(667049),
    m = a(229231);
function E() {
    let e = p.Q_.useSetting(),
        t = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        a = (0, I.A)(t?.id),
        E = g.A.useConfig({ location: "useAddableWidgets" }).enabled,
        w = (0, r.bG)([c.A], () => c.A.getAllConfigsByApplication()),
        C = (0, r.bG)([c.A], () => c.A.getFeaturedApplicationIds()),
        G = (0, r.bG)([c.A], () => c.A.getDeveloperApplicationIds()),
        L = _.useConfig({ location: s.A.USER_PROFILE_MODAL_V2 }).enabled;
    return (
        i.useEffect(() => {
            (0, u.Wq)().catch(() => {}), e && (0, u.i$)().catch(() => {});
        }, [e]),
        i.useMemo(() => {
            let t = new Set(a.filter((e) => e instanceof o.R).map((e) => e.applicationId)),
                i = new Set(a.map((e) => e.type));
            return m.Zc.flatMap((a) => {
                switch (a) {
                    case l.x.APPLICATION: {
                        let a = new Set([...C, ...(e ? G : [])]);
                        return Object.values(w)
                            .map((e) => e[0])
                            .filter(f.Vq)
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
                        if (!E || i.has(a)) return [];
                        return (0, h.g0)();
                    case l.x.CLIPS_GALLERY:
                        if (!L || i.has(a)) return [];
                        return new A.k({ clips: [] });
                    default:
                        if ((0, b.hL)(a)) {
                            if (i.has(a)) return [];
                            return new b.Yy({ type: a, games: [] });
                        }
                        return (0, f.xb)(a);
                }
            });
        }, [e, w, C, G, a, L, E])
    );
}
