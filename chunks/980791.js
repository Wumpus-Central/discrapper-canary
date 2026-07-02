i.d(t, { default: () => B });
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(189213),
    d = i(783878),
    u = i(331322),
    o = i(834730),
    c = i(821609),
    p = i(272613),
    G = i(916603),
    g = i(448564),
    C = i(468689),
    h = i(71393),
    m = i(17928),
    A = i(736056),
    b = i(576705),
    v = i(567305),
    S = i(652215),
    x = i(375708),
    I = i(469993),
    f = i(836039),
    j = i(260509),
    M = i(555325);
let E = {
        "server-subscriptions-onboarding": {
            title: () => x.intl.string(x.t["KzCF/6"]),
            description: () => x.intl.string(x.t.xMW8FH),
            canCreateGuild: !1,
            useIsGuildSupported: () =>
                (0, m.bG)(
                    [A.A],
                    () => (e, t) =>
                        (0, j.bM)(e, t) &&
                        (0, M.V9)({
                            guild: e,
                            isOwner: !0,
                            canManageGuildRoleSubscriptions: !0,
                            isUserInCreatorMonetizationEligibleCountry: (0, I.Z1)(),
                            shouldRestrictUpdatingRoleSubscriptionSettings: (0, f.mk)(e.id),
                        }),
                    [],
                    m.My,
                ),
        },
        "server-subscriptions-create-tier-from-template": {
            title: () => x.intl.string(x.t.aTFQKh),
            description: () => x.intl.string(x.t.oTbFQg),
            canCreateGuild: !1,
            useIsGuildSupported: () =>
                (0, m.bG)(
                    [A.A, b.A],
                    () => (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
                        !e.features.has(S.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                        b.A.can(S.xBc.ADMINISTRATOR, e) &&
                        (0, v.TG)(e.id),
                    [],
                ),
        },
    },
    R = {
        title: () => x.intl.string(x.t.V42OaH),
        description: () => x.intl.string(x.t["7dJ16X"]),
        selectGuildCta: () => x.intl.string(x.t.LhlgY9),
        createGuildDescription: () => x.intl.string(x.t.anOisx),
        createGuildCta: () => x.intl.string(x.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, m.bG)([b.A], () => (e) => b.A.canAccessGuildSettings(e), [], m.My),
    };
var T = i(711014),
    O = i(287809),
    k = i(553634);
function y(e) {
    let { className: t, guildId: i, onChange: s, isGuildIncluded: a } = e,
        { options: u } = (function (e) {
            let { isGuildIncluded: t, selectedGuildId: i } = e,
                n = (0, m.bG)([T.Ay], () => T.Ay.getFlattenedGuildIds()),
                s = (0, m.bG)([h.A], () => h.A.getGuilds()),
                a = (0, m.bG)([O.default], () => O.default.getCurrentUser());
            return {
                options: l.useMemo(
                    () =>
                        null == a
                            ? []
                            : (null == t
                                  ? n
                                  : n.filter((e) => {
                                        let i = s[e];
                                        return r()(null != i, "guild should not be null"), t(i, a);
                                    })
                              ).map((e) => {
                                  let t = s[e];
                                  return (
                                      r()(null != t, "guild should not be null"), { id: e, label: t.name, value: t.id }
                                  );
                              }),
                    [n, s, a, t],
                ),
                selectedGuild: null == i ? void 0 : s[i],
            };
        })({ isGuildIncluded: a });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.Z, {
            onSelectionChange: s,
            value: i,
            options: u,
            placeholder: x.intl.string(x.t.etZ9tX),
            selectionMode: "single",
        }),
    });
}
function B(e) {
    let { transitionState: t, onClose: i, feature: s, section: d, subsection: m } = e,
        {
            canCreateGuild: A,
            createGuildCta: b,
            createGuildDescription: v,
            selectGuildCta: S,
            title: x,
            description: I,
            isGuildSupported: f,
        } = (function (e) {
            let [t] = l.useState(null == e ? void 0 : E[e]),
                i = R.useIsGuildSupported(),
                n = t?.useIsGuildSupported?.(),
                s = { ...R, ...(t ?? {}) };
            return {
                title: s.title(),
                description: s.description(),
                selectGuildCta: s.selectGuildCta(),
                createGuildDescription: s.createGuildDescription(),
                createGuildCta: s.createGuildCta(),
                canCreateGuild: s.canCreateGuild,
                isGuildSupported: (e, t) => i(e, t) && n?.(e, t) !== !1,
            };
        })(s),
        [j, M] = l.useState(),
        [T, O] = l.useState(!1);
    async function B() {
        O(!0);
        let e = await new Promise((e) => {
            p.A.openCreateGuildModal({ onSuccess: e });
        });
        await new Promise((t) => {
            h.A.addChangeListener(function i() {
                null != h.A.getGuild(e) && (h.A.removeChangeListener(i), t());
            });
        }),
            C.A.open(e, d, void 0, m),
            i?.();
    }
    return (0, n.jsx)(a.Modal, {
        transitionState: t,
        onClose: () => Promise.resolve(i?.()),
        title: x,
        actions: [],
        children: (0, n.jsxs)(u.B, {
            direction: "vertical",
            gap: 32,
            children: [
                (0, n.jsxs)(u.B, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        (0, n.jsx)(o.E, { variant: "text-md/medium", children: I }),
                        (0, n.jsxs)("div", {
                            className: k.c,
                            children: [
                                (0, n.jsx)("div", {
                                    className: k.o,
                                    children: (0, n.jsx)(y, { guildId: j, onChange: M, isGuildIncluded: f }),
                                }),
                                (0, n.jsx)(c.$, {
                                    variant: "primary",
                                    text: S,
                                    onClick: () => {
                                        r()(null != j, "Guild ID must not be null on click"),
                                            g.A.hasSeenCreatorOnboardingForGuild(j) || (0, G.G)(j),
                                            C.A.open(j, d, void 0, m),
                                            i?.();
                                    },
                                    disabled: null == j,
                                }),
                            ],
                        }),
                    ],
                }),
                A &&
                    (0, n.jsxs)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        align: "start",
                        children: [
                            (0, n.jsx)(o.E, { variant: "text-md/medium", children: v }),
                            (0, n.jsx)(c.$, { variant: "primary", text: b, onClick: B, loading: T }),
                        ],
                    }),
            ],
        }),
    });
}
