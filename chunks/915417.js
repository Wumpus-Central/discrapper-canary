"use strict";
n.d(t, { g: () => j });
var i = n(627968),
    s = n(64700),
    l = n(280513),
    r = n(158954),
    a = n(311907),
    o = n(397927),
    d = n(60175),
    c = n(90084),
    u = n(42780),
    m = n(997509),
    g = n(555337),
    x = n(583047),
    h = n(501381),
    _ = n(652215),
    A = n(985018),
    p = n(551511);
let f = {
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
    visibility: l.n.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null,
};
function j(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: j } = (0, a.cf)([g.A], () => ({
            guild: g.A.getGuild(),
            guildProfile: g.A.getGuildProfile(),
        })),
        N = n?.id,
        E = (0, a.bG)([d.A], () => d.A.get(N)),
        { fetchGuildProfile: b } = (0, c.u)(N),
        T = j?.visibility == null || !l.i.VISIBLE.has(j?.visibility),
        C = j?.visibility === l.n.PUBLIC_WITH_RECRUITMENT;
    s.useEffect(() => {
        null != N && b();
    }, [N, b]);
    let I = s.useMemo(() => (null == n || null == j ? f : j), [n, j]),
        v = s.useCallback(() => {
            n?.id != null &&
                (C
                    ? m.A.updateGuildProfile(n.id, { visibility: l.n.PUBLIC })
                    : m.A.updateGuildProfile(n.id, { visibility: l.n.PUBLIC_WITH_RECRUITMENT }));
        }, [n?.id, C]),
        S = s.useCallback(() => {
            m.A.setSection(_.BEX.PROFILE);
        }, []);
    if (null == n) return null;
    let y = t ?? E?.formFields;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: A.intl.string(A.t.AHJddL),
            }),
            (0, i.jsx)(r.EYj, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-subtle",
                className: p.nB,
                children: A.intl.string(A.t.Z7TCtd),
            }),
            (0, i.jsx)(h.o, { guildId: n.id }),
            (0, i.jsx)("div", {
                className: p.Zd,
                children: null != y ? (0, i.jsx)(x.a, { guild: n, formFields: y }) : (0, i.jsx)(o.y$y, {}),
            }),
            (0, i.jsx)("div", { className: p.yF }),
            (0, i.jsxs)("div", {
                className: p.Im,
                children: [
                    (0, i.jsxs)("div", {
                        className: p.fi,
                        children: [
                            (0, i.jsx)(o.dOG, {
                                label: A.intl.string(A.t["N/0232"]),
                                checked: C,
                                onChange: v,
                                disabled: T,
                            }),
                            (0, i.jsx)(r.EYj, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: A.intl.string(A.t["3TSZYK"]),
                            }),
                            T &&
                                (0, i.jsx)(r.EYj, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: A.intl.format(A.t.Bk0VOi, {
                                        profileLink: (e, t) => (0, i.jsx)(o.MzZ, { onClick: S, children: e }, t),
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: p.fi,
                        children: (0, i.jsxs)("div", {
                            className: p.cK,
                            children: [
                                (0, i.jsx)("div", { className: p.D7 }),
                                (0, i.jsx)(u.Ay, {
                                    className: p.VH,
                                    profile: I,
                                    CTAOverride: (0, i.jsx)(r.$nd, {
                                        variant: "active",
                                        size: "sm",
                                        text: A.intl.string(A.t["7XdMW2"]),
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
