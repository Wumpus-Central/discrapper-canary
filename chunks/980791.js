i.d(t, { default: () => y });
var n = i(627968),
    l = i(64700),
    a = i(284009),
    s = i.n(a),
    r = i(862482),
    d = i(783878),
    o = i(935462),
    u = i(534514),
    c = i(331322),
    G = i(834730),
    p = i(821609),
    g = i(915089),
    S = i(272613),
    C = i(916603),
    h = i(448564),
    b = i(997509),
    m = i(71393),
    A = i(17928),
    E = i(736056),
    x = i(576705),
    _ = i(567305),
    M = i(652215),
    I = i(985018),
    v = i(469993),
    j = i(836039),
    N = i(260509),
    F = i(555325);
let O = {
        "server-subscriptions-onboarding": {
            title: () => I.intl.string(I.t["KzCF/6"]),
            description: () => I.intl.string(I.t.xMW8FH),
            canCreateGuild: !1,
            useIsGuildSupported: () =>
                (0, A.bG)(
                    [E.A],
                    () => (e, t) =>
                        (0, N.bM)(e, t) &&
                        (0, F.V9)({
                            guild: e,
                            isOwner: !0,
                            canManageGuildRoleSubscriptions: !0,
                            isUserInCreatorMonetizationEligibleCountry: (0, v.Z1)(),
                            shouldRestrictUpdatingRoleSubscriptionSettings: (0, j.mk)(e.id),
                        }),
                    [],
                    A.My,
                ),
        },
        "server-subscriptions-create-tier-from-template": {
            title: () => I.intl.string(I.t.aTFQKh),
            description: () => I.intl.string(I.t.oTbFQg),
            canCreateGuild: !1,
            useIsGuildSupported: () =>
                (0, A.bG)(
                    [E.A, x.A],
                    () => (e) =>
                        e.features.has(M.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
                        !e.features.has(M.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                        x.A.can(M.xBc.ADMINISTRATOR, e) &&
                        (0, _.TG)(e.id),
                    [],
                ),
        },
    },
    R = {
        title: () => I.intl.string(I.t.V42OaH),
        description: () => I.intl.string(I.t["7dJ16X"]),
        selectGuildCta: () => I.intl.string(I.t.LhlgY9),
        createGuildDescription: () => I.intl.string(I.t.anOisx),
        createGuildCta: () => I.intl.string(I.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, A.bG)([x.A], () => (e) => x.A.canAccessGuildSettings(e), [], A.My),
    };
var T = i(711014),
    f = i(287809),
    z = i(553634);
function w(e) {
    let { className: t, guildId: i, onChange: a, isGuildIncluded: r } = e,
        { options: o } = (function (e) {
            let { isGuildIncluded: t, selectedGuildId: i } = e,
                n = (0, A.bG)([T.Ay], () => T.Ay.getFlattenedGuildIds()),
                a = (0, A.bG)([m.A], () => m.A.getGuilds()),
                r = (0, A.bG)([f.default], () => f.default.getCurrentUser());
            return {
                options: l.useMemo(
                    () =>
                        null == r
                            ? []
                            : (null == t
                                  ? n
                                  : n.filter((e) => {
                                        let i = a[e];
                                        return s()(null != i, "guild should not be null"), t(i, r);
                                    })
                              ).map((e) => {
                                  let t = a[e];
                                  return (
                                      s()(null != t, "guild should not be null"), { id: e, label: t.name, value: t.id }
                                  );
                              }),
                    [n, a, r, t],
                ),
                selectedGuild: null == i ? void 0 : a[i],
            };
        })({ isGuildIncluded: r });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.Z, {
            onSelectionChange: a,
            value: i,
            options: o,
            placeholder: I.intl.string(I.t.etZ9tX),
            selectionMode: "single",
        }),
    });
}
function y(e) {
    let { transitionState: t, onClose: i, feature: a, section: d, subsection: A } = e,
        E = (0, g.GV)(),
        {
            canCreateGuild: x,
            createGuildCta: _,
            createGuildDescription: M,
            selectGuildCta: I,
            title: v,
            description: j,
            isGuildSupported: N,
        } = (function (e) {
            let [t] = l.useState(null == e ? void 0 : O[e]),
                i = R.useIsGuildSupported(),
                n = t?.useIsGuildSupported?.(),
                a = { ...R, ...(t ?? {}) };
            return {
                title: a.title(),
                description: a.description(),
                selectGuildCta: a.selectGuildCta(),
                createGuildDescription: a.createGuildDescription(),
                createGuildCta: a.createGuildCta(),
                canCreateGuild: a.canCreateGuild,
                isGuildSupported: (e, t) => i(e, t) && n?.(e, t) !== !1,
            };
        })(a),
        [F, T] = l.useState(),
        [f, y] = l.useState(!1),
        k = async () => {
            y(!0);
            let e = await new Promise((e) => {
                S.A.openCreateGuildModal({ onSuccess: e });
            });
            await new Promise((t) => {
                m.A.addChangeListener(function i() {
                    null != m.A.getGuild(e) && (m.A.removeChangeListener(i), t());
                });
            }),
                b.A.open(e, d, void 0, A),
                i?.();
        };
    return (0, n.jsxs)(o.EO, {
        transitionState: t,
        "aria-labelledby": E,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(o.rQ, {
                className: z.Hc,
                separator: !1,
                children: [
                    (0, n.jsx)(u.D, { id: E, variant: "heading-lg/medium", children: v }),
                    (0, n.jsx)(o.s_, { onClick: i }),
                ],
            }),
            (0, n.jsxs)(o.$m, {
                className: z.jE,
                children: [
                    (0, n.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(G.E, { variant: "text-md/medium", children: j }),
                            (0, n.jsxs)("div", {
                                className: z.ce,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: z.oN,
                                        children: (0, n.jsx)(w, { guildId: F, onChange: T, isGuildIncluded: N }),
                                    }),
                                    (0, n.jsx)(p.$, {
                                        variant: "primary",
                                        text: I,
                                        onClick: () => {
                                            s()(null != F, "Guild ID must not be null on click"),
                                                h.A.hasSeenCreatorOnboardingForGuild(F) || (0, C.G)(F),
                                                b.A.open(F, d, void 0, A),
                                                i?.();
                                        },
                                        disabled: null == F,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    x &&
                        (0, n.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, n.jsx)(G.E, { variant: "text-md/medium", children: M }),
                                (0, n.jsx)(r.$n, { onClick: k, submitting: f, className: z.qo, children: _ }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
