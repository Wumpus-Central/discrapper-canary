n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(81400),
    o = n(185955),
    d = n(318785),
    u = n(919395),
    c = n(124064),
    g = n(200790),
    m = n(230084),
    _ = n(339442),
    A = n(900254),
    h = n(431982),
    p = n(730588),
    x = n(593629),
    E = n(164599),
    T = n(669195),
    S = n(63675),
    f = n(617514),
    b = n(546849),
    C = n(101058),
    v = n(84540),
    N = n(836602),
    I = n(622543),
    y = n(950191),
    j = n(287809),
    O = n(927578),
    R = n(985018),
    L = n(289299);
function D() {
    let e = (0, a.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, a.bG)([I.A], () => I.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: D,
            pendingBio: P,
            pendingPronouns: G,
            pendingAccentColor: M,
            pendingThemeColors: U,
            pendingLegacyUsernameDisabled: k,
            pendingPrimaryGuildId: V,
            errors: w,
        } = (0, a.cf)([N.A], () => {
            let e = N.A.getPendingChanges(),
                t = N.A.getErrors();
            return { ...e, errors: t };
        }),
        B = (0, C.V7)({ userId: e.id, image: n }),
        F = (0, r.EC)(),
        z = O.Ay.canUsePremiumProfileCustomization(e),
        H = (0, u.z5)(n, e.avatar),
        Y = (0, u.Ac)(D, t?.banner),
        X = (0, y.Ay)(e.id),
        K = X?.getLegacyUsername(),
        W = (w.global_name?.length ?? 0) > 0 ? w.global_name : (F?.nick ?? []),
        Z = (w.bio?.length ?? 0) > 0 ? w.bio : (F?.bio ?? []),
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
                    errors: w.pronouns,
                    onPronounsChange: (e) => (0, v.p)({ pronouns: e }),
                    pendingPronouns: G,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, i.jsx)(f.A, {}),
            (0, i.jsx)(
                m.A,
                {
                    onAvatarChange: (e) => {
                        (0, v.p)({ avatar: e }), (0, u.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: H,
                    errors: w.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, i.jsx)(g.A, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, i.jsx)(h.A, { user: e }),
            (0, i.jsx)(E.A, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, i.jsx)(T.A, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            z
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              p.A,
                              {
                                  showRemoveBannerButton: Y,
                                  errors: w.banner,
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
                      x.A,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: M,
                          setPendingAccentColor: (e) => (0, v.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, i.jsx)(
                c.A,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: Z,
                    onBioChange: (e) => (0, v.p)({ bio: e }),
                    pendingBio: P,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            q.length > 0 &&
                (0, i.jsx)(o.A, {
                    availablePrimaryGuilds: q,
                    pendingPrimaryGuildId: V,
                    onChange: (e) => (0, v.p)({ primaryGuildId: e }),
                }),
            null != K && (0, i.jsx)(A.A, { legacyUsername: K, pendingLegacyUsernameDisabled: k }, "legacy_username"),
        ],
    });
}
