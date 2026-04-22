n.d(t, { g: () => C });
var i = n(627968),
    l = n(64700),
    s = n(280513),
    r = n(534514),
    a = n(834730),
    o = n(821609),
    d = n(311907),
    c = n(289873),
    u = n(243721),
    m = n(349288),
    g = n(60175),
    h = n(90084),
    x = n(42780),
    _ = n(997509),
    p = n(555337),
    A = n(583047),
    E = n(501381),
    f = n(652215),
    j = n(985018),
    N = n(883984);
let I = {
    id: "0",
    name: "",
    description: "",
    icon: "",
    customBanner: null,
    onlineCount: 0,
    memberCount: 0,
    traits: [],
    gameApplicationIds: [],
    gameActivity: {},
    visibility: s.n.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null,
};
function C(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: C } = (0, d.cf)([p.A], () => ({
            guild: p.A.getGuild(),
            guildProfile: p.A.getGuildProfile(),
        })),
        b = n?.id,
        v = (0, d.bG)([g.A], () => g.A.get(b)),
        { fetchGuildProfile: S } = (0, h.u)(b),
        T = C?.visibility == null || !s.i.VISIBLE.has(C?.visibility),
        y = C?.visibility === s.n.PUBLIC_WITH_RECRUITMENT;
    l.useEffect(() => {
        null != b && S();
    }, [b, S]);
    let R = l.useMemo(() => (null == n || null == C ? I : C), [n, C]),
        L = l.useCallback(() => {
            n?.id != null &&
                (y
                    ? _.A.updateGuildProfile(n.id, { visibility: s.n.PUBLIC })
                    : _.A.updateGuildProfile(n.id, { visibility: s.n.PUBLIC_WITH_RECRUITMENT }));
        }, [n?.id, y]),
        D = l.useCallback(() => {
            _.A.setSection(f.BEX.PROFILE);
        }, []);
    if (null == n) return null;
    let O = t ?? v?.formFields;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: j.intl.string(j.t.AHJddL),
            }),
            (0, i.jsx)(a.E, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-subtle",
                className: N.nB,
                children: j.intl.string(j.t.Z7TCtd),
            }),
            (0, i.jsx)(E.o, { guildId: n.id }),
            (0, i.jsx)("div", {
                className: N.Zd,
                children: null != O ? (0, i.jsx)(A.a, { guild: n, formFields: O }) : (0, i.jsx)(c.y, {}),
            }),
            (0, i.jsx)("div", { className: N.yF }),
            (0, i.jsxs)("div", {
                className: N.Im,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.fi,
                        children: [
                            (0, i.jsx)(u.d, {
                                label: j.intl.string(j.t["N/0232"]),
                                checked: y,
                                onChange: L,
                                disabled: T,
                            }),
                            (0, i.jsx)(a.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.string(j.t["3TSZYK"]),
                            }),
                            T &&
                                (0, i.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.Bk0VOi, {
                                        profileLink: (e, t) => (0, i.jsx)(m.Anchor, { onClick: D, children: e }, t),
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: N.fi,
                        children: (0, i.jsxs)("div", {
                            className: N.cK,
                            children: [
                                (0, i.jsx)("div", { className: N.D7 }),
                                (0, i.jsx)(x.Ay, {
                                    className: N.VH,
                                    profile: R,
                                    CTAOverride: (0, i.jsx)(o.$, {
                                        variant: "active",
                                        size: "sm",
                                        text: j.intl.string(j.t["7XdMW2"]),
                                        fullWidth: !0,
                                    }),
                                    disableGuildNameClick: !0,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
