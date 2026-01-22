n.d(t, {
    g: () => O,
});
var r = n(627968),
    i = n(64700),
    l = n(280513),
    s = n(158954),
    a = n(311907),
    c = n(397927),
    o = n(60175),
    d = n(90084),
    u = n(42780),
    f = n(997509),
    g = n(555337),
    b = n(583047),
    m = n(501381),
    p = n(652215),
    x = n(985018),
    h = n(5425);
let j = {
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

function O(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: O } = (0, a.cf)([g.A], () => ({
            guild: g.A.getGuild(),
            guildProfile: g.A.getGuildProfile(),
        })),
        y = null == n ? void 0 : n.id,
        v = (0, a.bG)([o.A], () => o.A.get(y)),
        { fetchGuildProfile: A } = (0, d.u)(y),
        E = (null == O ? void 0 : O.visibility) == null || !l.i.VISIBLE.has(null == O ? void 0 : O.visibility),
        N = (null == O ? void 0 : O.visibility) === l.n.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != y && A();
    }, [y, A]);
    let _ = i.useMemo(() => (null == n || null == O ? j : O), [n, O]),
        S = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (N
                    ? f.A.updateGuildProfile(n.id, {
                          visibility: l.n.PUBLIC,
                      })
                    : f.A.updateGuildProfile(n.id, {
                          visibility: l.n.PUBLIC_WITH_RECRUITMENT,
                      }));
        }, [null == n ? void 0 : n.id, N]),
        T = i.useCallback(() => {
            f.A.setSection(p.BEX.PROFILE);
        }, []);
    if (null == n) return null;
    let I = null != t ? t : null == v ? void 0 : v.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.AHJddL),
            }),
            (0, r.jsx)(s.EYj, {
                tag: "p",
                variant: "text-sm/medium",
                color: "text-subtle",
                className: h.nB,
                children: x.intl.string(x.t.Z7TCtd),
            }),
            (0, r.jsx)(m.o, {
                guildId: n.id,
            }),
            (0, r.jsx)("div", {
                className: h.Zd,
                children:
                    null != I
                        ? (0, r.jsx)(b.a, {
                              guild: n,
                              formFields: I,
                          })
                        : (0, r.jsx)(c.y$y, {}),
            }),
            (0, r.jsx)("div", {
                className: h.yF,
            }),
            (0, r.jsxs)("div", {
                className: h.Im,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.fi,
                        children: [
                            (0, r.jsx)(c.dOG, {
                                label: x.intl.string(x.t["N/0232"]),
                                checked: N,
                                onChange: S,
                                disabled: E,
                            }),
                            (0, r.jsx)(s.EYj, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: x.intl.string(x.t["3TSZYK"]),
                            }),
                            E &&
                                (0, r.jsx)(s.EYj, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: x.intl.format(x.t.Bk0VOi, {
                                        profileLink: (e, t) =>
                                            (0, r.jsx)(
                                                c.MzZ,
                                                {
                                                    onClick: T,
                                                    children: e,
                                                },
                                                t,
                                            ),
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: h.fi,
                        children: (0, r.jsxs)("div", {
                            className: h.cK,
                            children: [
                                (0, r.jsx)("div", {
                                    className: h.D7,
                                }),
                                (0, r.jsx)(u.Ay, {
                                    className: h.VH,
                                    profile: _,
                                    CTAOverride: (0, r.jsx)(s.$nd, {
                                        variant: "active",
                                        size: "sm",
                                        text: x.intl.string(x.t["7XdMW2"]),
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
