n.d(t, { A: () => P });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(81400),
    o = n(185955),
    d = n(318785),
    c = n(919395),
    u = n(124064),
    m = n(200790),
    g = n(230084),
    _ = n(339442),
    x = n(900254),
    A = n(431982),
    h = n(730588),
    p = n(593629),
    T = n(164599),
    f = n(63675),
    S = n(617514),
    b = n(546849),
    E = n(101058),
    C = n(84540),
    N = n(836602),
    v = n(622543),
    I = n(950191),
    j = n(287809),
    y = n(927578),
    O = n(985018),
    R = n(35048);
function P() {
    let e = (0, a.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, a.bG)([v.A], () => v.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: P,
            pendingBio: L,
            pendingPronouns: D,
            pendingAccentColor: G,
            pendingThemeColors: M,
            pendingLegacyUsernameDisabled: U,
            pendingPrimaryGuildId: k,
            errors: w,
        } = (0, a.cf)([N.A], () => {
            let e = N.A.getPendingChanges(),
                t = N.A.getErrors();
            return { ...e, errors: t };
        }),
        V = (0, E.V7)({ userId: e.id, image: n }),
        B = (0, r.EC)(),
        F = y.Ay.canUsePremiumProfileCustomization(e),
        H = (0, c.z5)(n, e.avatar),
        z = (0, c.Ac)(P, t?.banner),
        Y = (0, I.Ay)(e.id),
        X = Y?.getLegacyUsername(),
        K = (w.global_name?.length ?? 0) > 0 ? w.global_name : (B?.nick ?? []),
        W = (w.bio?.length ?? 0) > 0 ? w.bio : (B?.bio ?? []),
        Z = (0, d.b)();
    return (0, i.jsxs)("div", {
        className: R.Q,
        children: [
            (0, i.jsx)(_.A, {
                placeholder: e.username,
                errors: K,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, C.p)({ globalName: e }),
                user: e,
            }),
            (0, i.jsx)(
                b.A,
                {
                    sectionTitle: O.intl.string(O.t["+T3RI/"]),
                    errors: w.pronouns,
                    onPronounsChange: (e) => (0, C.p)({ pronouns: e }),
                    pendingPronouns: D,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, i.jsx)(S.A, {}),
            (0, i.jsx)(
                g.A,
                {
                    onAvatarChange: (e) => {
                        (0, C.p)({ avatar: e }), (0, c.WU)(e);
                    },
                    showRemoveAvatarButton: H,
                    errors: w.avatar,
                    sectionTitle: O.intl.string(O.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, i.jsx)(m.A, { user: e, sectionTitle: O.intl.string(O.t["7v0T9P"]) }, "decoration"),
            (0, i.jsx)(A.A, { user: e }),
            (0, i.jsx)(T.A, { user: e, sectionTitle: O.intl.string(O.t.wR5wOo) }, "effect"),
            F
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              h.A,
                              {
                                  showRemoveBannerButton: z,
                                  errors: w.banner,
                                  onBannerChange: (e) => (0, C.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, i.jsx)(f.A, {
                              user: e,
                              pendingAvatarSrc: V,
                              pendingColors: M,
                              onThemeColorsChange: (e) => (0, C.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, i.jsx)(
                      p.A,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: G,
                          setPendingAccentColor: (e) => (0, C.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, i.jsx)(
                u.A,
                {
                    sectionTitle: O.intl.string(O.t.ZzAR2Y),
                    errors: W,
                    onBioChange: (e) => (0, C.p)({ bio: e }),
                    pendingBio: L,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            Z.length > 0 &&
                (0, i.jsx)(o.A, {
                    availablePrimaryGuilds: Z,
                    pendingPrimaryGuildId: k,
                    onChange: (e) => (0, C.p)({ primaryGuildId: e }),
                }),
            null != X && (0, i.jsx)(x.A, { legacyUsername: X, pendingLegacyUsernameDisabled: U }, "legacy_username"),
        ],
    });
}
