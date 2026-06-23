i.d(t, { default: () => w });
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(862482),
    d = i(783878),
    u = i(935462),
    c = i(534514),
    o = i(331322),
    p = i(834730),
    G = i(821609),
    g = i(915089),
    h = i(272613),
    C = i(916603),
    m = i(448564),
    b = i(468689),
    A = i(71393),
    S = i(17928),
    x = i(736056),
    v = i(576705),
    j = i(567305),
    I = i(652215),
    f = i(375708),
    E = i(469993),
    M = i(836039),
    N = i(260509),
    R = i(555325);
let T = {
        "server-subscriptions-onboarding": {
            title: () => f.intl.string(f.t["KzCF/6"]),
            description: () => f.intl.string(f.t.xMW8FH),
            canCreateGuild: !1,
            useIsGuildSupported: () =>
                (0, S.bG)(
                    [x.A],
                    () => (e, t) =>
                        (0, N.bM)(e, t) &&
                        (0, R.V9)({
                            guild: e,
                            isOwner: !0,
                            canManageGuildRoleSubscriptions: !0,
                            isUserInCreatorMonetizationEligibleCountry: (0, E.Z1)(),
                            shouldRestrictUpdatingRoleSubscriptionSettings: (0, M.mk)(e.id),
                        }),
                    [],
                    S.My,
                ),
        },
        "server-subscriptions-create-tier-from-template": {
            title: () => f.intl.string(f.t.aTFQKh),
            description: () => f.intl.string(f.t.oTbFQg),
            canCreateGuild: !1,
            useIsGuildSupported: () =>
                (0, S.bG)(
                    [x.A, v.A],
                    () => (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
                        !e.features.has(I.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                        v.A.can(I.xBc.ADMINISTRATOR, e) &&
                        (0, j.TG)(e.id),
                    [],
                ),
        },
    },
    k = {
        title: () => f.intl.string(f.t.V42OaH),
        description: () => f.intl.string(f.t["7dJ16X"]),
        selectGuildCta: () => f.intl.string(f.t.LhlgY9),
        createGuildDescription: () => f.intl.string(f.t.anOisx),
        createGuildCta: () => f.intl.string(f.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, S.bG)([v.A], () => (e) => v.A.canAccessGuildSettings(e), [], S.My),
    };
var O = i(711014),
    y = i(287809),
    D = i(553634);
function F(e) {
    let { className: t, guildId: i, onChange: s, isGuildIncluded: a } = e,
        { options: u } = (function (e) {
            let { isGuildIncluded: t, selectedGuildId: i } = e,
                n = (0, S.bG)([O.Ay], () => O.Ay.getFlattenedGuildIds()),
                s = (0, S.bG)([A.A], () => A.A.getGuilds()),
                a = (0, S.bG)([y.default], () => y.default.getCurrentUser());
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
            placeholder: f.intl.string(f.t.etZ9tX),
            selectionMode: "single",
        }),
    });
}
function w(e) {
    let { transitionState: t, onClose: i, feature: s, section: d, subsection: S } = e,
        x = (0, g.GV)(),
        {
            canCreateGuild: v,
            createGuildCta: j,
            createGuildDescription: I,
            selectGuildCta: f,
            title: E,
            description: M,
            isGuildSupported: N,
        } = (function (e) {
            let [t] = l.useState(null == e ? void 0 : T[e]),
                i = k.useIsGuildSupported(),
                n = t?.useIsGuildSupported?.(),
                s = { ...k, ...(t ?? {}) };
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
        [R, O] = l.useState(),
        [y, w] = l.useState(!1);
    async function B() {
        w(!0);
        let e = await new Promise((e) => {
            h.A.openCreateGuildModal({ onSuccess: e });
        });
        await new Promise((t) => {
            A.A.addChangeListener(function i() {
                null != A.A.getGuild(e) && (A.A.removeChangeListener(i), t());
            });
        }),
            b.A.open(e, d, void 0, S),
            i?.();
    }
    return (0, n.jsxs)(u.EO, {
        transitionState: t,
        "aria-labelledby": x,
        parentComponent: "GuildSettingsPickerModal",
        children: [
            (0, n.jsxs)(u.rQ, {
                className: D.Hc,
                separator: !1,
                children: [
                    (0, n.jsx)(c.D, { id: x, variant: "heading-lg/medium", children: E }),
                    (0, n.jsx)(u.s_, { onClick: i }),
                ],
            }),
            (0, n.jsxs)(u.$m, {
                className: D.jE,
                children: [
                    (0, n.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(p.E, { variant: "text-md/medium", children: M }),
                            (0, n.jsxs)("div", {
                                className: D.ce,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: D.oN,
                                        children: (0, n.jsx)(F, { guildId: R, onChange: O, isGuildIncluded: N }),
                                    }),
                                    (0, n.jsx)(G.$, {
                                        variant: "primary",
                                        text: f,
                                        onClick: () => {
                                            r()(null != R, "Guild ID must not be null on click"),
                                                m.A.hasSeenCreatorOnboardingForGuild(R) || (0, C.G)(R),
                                                b.A.open(R, d, void 0, S),
                                                i?.();
                                        },
                                        disabled: null == R,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    v &&
                        (0, n.jsxs)(o.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, n.jsx)(p.E, { variant: "text-md/medium", children: I }),
                                (0, n.jsx)(a.$n, { onClick: B, submitting: y, className: D.qo, children: j }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
