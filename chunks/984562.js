n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(280513),
    r = n(311907),
    a = n(289873),
    o = n(534514),
    d = n(834730),
    c = n(243721),
    u = n(531142),
    m = n(793574),
    g = n(837011),
    h = n(90084),
    x = n(685073),
    _ = n(828162),
    p = n(208039),
    A = n(997509),
    E = n(555337),
    f = n(342490),
    j = n(694878),
    N = n(989556),
    I = n(712150),
    C = n(190695),
    b = n(29086),
    v = n(652215),
    S = n(743981),
    T = n(116112),
    y = n(985018),
    R = n(15137);
let L = function () {
    (0, y.useSyncMessages)(T.messagesLoader);
    let e = (0, r.bG)([E.A], () => E.A.getGuild()),
        t = (0, r.bG)([E.A], () => E.A.getGuildProfile()),
        { fetchGuildProfile: n, fetchStatus: L } = (0, h.u)(e?.id);
    if (
        (l.useEffect(() => {
            L === g.X.NOT_FETCHED && n();
        }, [n, L]),
        L !== g.X.FETCHED)
    )
        return (0, i.jsx)("div", { className: R.dc, children: (0, i.jsx)(a.y, {}) });
    if (null == e || null == t) return null;
    let D = s.i.VISIBLE.has(t.visibility),
        O = (0, x.Rg)(e),
        G = !O || t?.tag == null,
        M = t.badge ?? S.hc["0"],
        k = t.badgeColorPrimary ?? null,
        U = t.badgeColorSecondary ?? null,
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.A, {
                    className: R.uW,
                    guildId: e.id,
                    isDisabled: G,
                    tag: t.tag ?? "",
                    badge: M,
                    primaryColor: k,
                    secondaryColor: U,
                }),
                (0, i.jsx)(j.A, { className: R.uW, selectedBadge: M, guildId: e.id }),
                (0, i.jsx)(I.A, { className: R.uW, guildId: e.id, badge: M, primaryColor: k, secondaryColor: U }),
            ],
        });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(o.D, {
                className: R.DD,
                variant: "heading-lg/semibold",
                children: y.intl.string(T.default.mf2OwH),
            }),
            (0, i.jsxs)("div", {
                className: R.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.hu,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.iQ,
                                children: [
                                    (0, i.jsx)(d.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: y.intl.format(T.default["655Uny"], {
                                            onClickServerProfile: () => {
                                                A.A.setSection(v.BEX.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                A.A.setSection(v.BEX.ACCESS);
                                            },
                                        }),
                                    }),
                                    !D &&
                                        (0, i.jsx)(p.A, {
                                            className: R.pB,
                                            children: (0, i.jsx)(d.E, {
                                                variant: "text-xs/medium",
                                                children: y.intl.format(T.default.CRbkIz, {
                                                    onClickEditSetting: () =>
                                                        A.A.setSection(v.BEX.PROFILE, v.nd0.PROFILE_VISIBILITY),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            O
                                ? (0, i.jsxs)("div", {
                                      className: R.DZ,
                                      children: [
                                          (0, i.jsx)("label", {
                                              htmlFor: "enable-server-tag",
                                              children: (0, i.jsx)(d.E, {
                                                  variant: "text-md/semibold",
                                                  color: "text-strong",
                                                  children: y.intl.string(T.default["1zams8"]),
                                              }),
                                          }),
                                          (0, i.jsx)(c.d, {
                                              id: "enable-server-tag",
                                              checked: !G,
                                              onChange: () => {
                                                  G
                                                      ? A.A.updateGuildProfile(e.id, {
                                                            tag: t.tag ?? "",
                                                            badge: M,
                                                            badgeColorPrimary: k,
                                                            badgeColorSecondary: U,
                                                        })
                                                      : A.A.updateGuildProfile(e.id, { tag: null });
                                              },
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)("div", {
                                      className: R.vw,
                                      children: (0, i.jsx)(f.u, {
                                          onClick: () => {
                                              (0, _.A)(e.id, m.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), A.A.close();
                                          },
                                      }),
                                  }),
                            G ? (0, i.jsx)(u.R, { children: (0, i.jsx)("div", { className: R.n8, children: w }) }) : w,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: R.so,
                        children: [
                            (0, i.jsx)(b.A, {
                                guildId: e.id,
                                tag: t.tag,
                                badge: M,
                                primaryColor: k,
                                secondaryColor: U,
                            }),
                            !G && (0, i.jsx)(C.A, { guildId: e.id }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
