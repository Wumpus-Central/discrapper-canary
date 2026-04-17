n.d(t, { A: () => P });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(311907),
    a = n(81400),
    o = n(185955),
    d = n(318785),
    c = n(919395),
    u = n(124064),
    m = n(200790),
    g = n(230084),
    _ = n(339442),
    x = n(900254),
    h = n(431982),
    A = n(730588),
    p = n(593629),
    T = n(164599),
    f = n(669195),
    S = n(63675),
    E = n(617514),
    b = n(546849),
    C = n(101058),
    v = n(84540),
    N = n(836602),
    I = n(622543),
    j = n(950191),
    y = n(287809),
    O = n(927578),
    R = n(985018),
    L = n(289299);
function P() {
    let e = (0, r.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, r.bG)([I.A], () => I.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: P,
            pendingBio: D,
            pendingPronouns: G,
            pendingAccentColor: M,
            pendingThemeColors: U,
            pendingLegacyUsernameDisabled: k,
            pendingPrimaryGuildId: w,
            errors: V,
        } = (0, r.cf)([N.A], () => {
            let e = N.A.getPendingChanges(),
                t = N.A.getErrors();
            return { ...e, errors: t };
        }),
        B = (0, C.V7)({ userId: e.id, image: n }),
        F = (0, a.EC)(),
        H = O.Ay.canUsePremiumProfileCustomization(e),
        z = (0, c.z5)(n, e.avatar),
        Y = (0, c.Ac)(P, t?.banner),
        X = (0, j.Ay)(e.id),
        K = X?.getLegacyUsername(),
        W = (V.global_name?.length ?? 0) > 0 ? V.global_name : (F?.nick ?? []),
        Z = (V.bio?.length ?? 0) > 0 ? V.bio : (F?.bio ?? []),
        q = (0, d.b)();
    return (0, i.jsxs)("div", {
        className: L.Q,
        children: [
            (0, i.jsx)(_.A, {
                placeholder: e.username,
                errors: W,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, v.p)({ globalName: e }),
                user: e,
            }),
            (0, i.jsx)(
                b.A,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: V.pronouns,
                    onPronounsChange: (e) => (0, v.p)({ pronouns: e }),
                    pendingPronouns: G,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, i.jsx)(E.A, {}),
            (0, i.jsx)(
                g.A,
                {
                    onAvatarChange: (e) => {
                        (0, v.p)({ avatar: e }), (0, c.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: z,
                    errors: V.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, i.jsx)(m.A, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, i.jsx)(h.A, { user: e }),
            (0, i.jsx)(T.A, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, i.jsx)(f.A, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            H
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              A.A,
                              {
                                  showRemoveBannerButton: Y,
                                  errors: V.banner,
                                  onBannerChange: (e) => (0, v.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, i.jsx)(S.A, {
                              user: e,
                              pendingAvatarSrc: B,
                              pendingColors: U,
                              onThemeColorsChange: (e) => (0, v.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, i.jsx)(
                      p.A,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: M,
                          setPendingAccentColor: (e) => (0, v.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, i.jsx)(
                u.A,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: Z,
                    onBioChange: (e) => (0, v.p)({ bio: e }),
                    pendingBio: D,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            q.length > 0 &&
                (0, i.jsx)(o.A, {
                    availablePrimaryGuilds: q,
                    pendingPrimaryGuildId: w,
                    onChange: (e) => (0, v.p)({ primaryGuildId: e }),
                }),
            null != K && (0, i.jsx)(x.A, { legacyUsername: K, pendingLegacyUsernameDisabled: k }, "legacy_username"),
        ],
    });
}
