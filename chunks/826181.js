t.d(a, { default: () => B });
var i = t(627968),
    r = t(64700),
    n = t(284009),
    l = t.n(n),
    s = t(224640),
    o = t(430993),
    c = t(534514),
    d = t(834730),
    _ = t(772707),
    u = t(403581),
    m = t(189213),
    f = t(17928),
    I = t(821609),
    S = t(964486),
    b = t(975807),
    p = t(344346),
    N = t(303136),
    P = t(639289),
    g = t(976860),
    U = t(287809),
    x = t(954571),
    O = t(676279),
    h = t(751877),
    E = t(88001),
    R = t(652215),
    C = t(466919),
    T = t(985018),
    A = t(651702);
let v = {
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [E.Hy.UNKNOWN_USER]: 3,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION]: 8,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG]: 9,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN]: 10,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED]: 11,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP]: 12,
    [E.Hy.BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT]: 13,
};
function y(e) {
    let { onClose: a, isExistingSub: t, premiumGroupPrimaryName: r, currentUser: n, ...l } = e,
        _ = (0, O.TM)()
            ? "https://cdn.discordapp.com/assets/content/6f1af775556f31ba3974e07284f40d22447cbda5a6bbbb8ca186194b286063e3.mov"
            : "https://cdn.discordapp.com/assets/content/5b4b773c0a11f965af7ffe155e4aed3407c32c7050165e74650a5521691d1743.webm";
    return (0, i.jsx)(s.d, {
        ...l,
        onClose: a,
        children: (0, i.jsx)(o.c, {
            children: (0, i.jsxs)("div", {
                className: A.hQ,
                children: [
                    (0, i.jsx)("div", { className: A.ZB }),
                    (0, i.jsx)(c.D, {
                        className: A.wx,
                        variant: "display-md",
                        color: "text-strong",
                        children: T.intl.string(T.t.QWljxE),
                    }),
                    (0, i.jsxs)("div", {
                        className: A.Dz,
                        children: [
                            (0, i.jsx)(N.A, {
                                fallbackImage:
                                    "https://cdn.discordapp.com/assets/content/b0bb3929d31ac9ae0bf431b4b92ee6c334165d518a03e286a9d664691750ad04.png",
                                className: A.d9,
                                children: (0, i.jsx)("source", { src: _ }),
                            }),
                            (0, i.jsx)(p.A, {
                                user: n,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: n.nameplate,
                                className: A.M4,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: A.FS,
                        children: (0, i.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: T.intl.format(t ? C.default.axh0pl : C.default["+KAArL"], {
                                premiumGroupProductName: (0, E.DP)(),
                                primaryName: r,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: A.qr,
                        children: (0, i.jsx)(I.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: T.intl.string(C.default.EL9m2H),
                            onClick: () => {
                                a(), (0, g.pX)(R.BVt.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function G(e) {
    let {
            setModalState: a,
            onClose: t,
            premiumGroupSubscriptionId: n,
            premiumGroupInviteId: l,
            isExistingSub: s,
            premiumGroupPrimaryName: o,
            currentUser: c,
            setError: d,
            ...m
        } = e,
        f = (0, E.DP)(),
        [I, p] = (0, r.useState)(!1);
    (0, S.Ay)(() => {
        x.default.track(R.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: l,
            subscription_id: n,
            is_existing_sub: s,
        });
    });
    let N = async () => {
        x.default.track(R.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: l,
            subscription_id: n,
            is_existing_sub: s,
        }),
            p(!0);
        let e = await (0, h.wc)(n, c.id, l);
        if ((p(!1), e.ok)) a(1);
        else {
            var t;
            let i = null == (t = e.body?.code) ? 0 : (v[t] ?? 0);
            x.default.track(R.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: l,
                subscription_id: n,
                error_type: (function (e) {
                    switch (e) {
                        case 1:
                            return "cooldown_not_over";
                        case 2:
                            return "has_server_boosts";
                        case 3:
                            return "invite_canceled";
                        case 4:
                            return "country_restriction";
                        case 5:
                            return "has_nitro_credits";
                        case 6:
                            return "has_gift_subscription";
                        case 7:
                            return "invalid_subscription";
                        case 8:
                            return "has_mobile_subscription";
                        case 9:
                            return "account_too_young";
                        case 10:
                            return "has_ineligible_plan";
                        case 11:
                            return "invite_already_accepted";
                        case 12:
                            return "already_in_group";
                        case 13:
                            return "is_bot";
                        default:
                            return "unknown";
                    }
                })(i),
                error_code: e.body?.code,
            }),
                d(i),
                a(2);
        }
    };
    return (0, i.jsx)(_.k, {
        ...m,
        onClose: t,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        graphic: {
            src: "https://cdn.discordapp.com/assets/content/e73f685093cfc29d516c588ba27f23a1e03e9dbe02edcbe92a7ac79170c1931d.png",
            type: "image",
        },
        title: T.intl.formatToPlainString(s ? C.default["0Yxz12"] : C.default.UjA5k8, { premiumGroupProductName: f }),
        subtitle: T.intl.format(s ? C.default.YjSsdH : C.default.qkFeBP, {
            premiumGroupProductName: f,
            cooldownMonths: E.wl,
            primaryName: o,
        }),
        actions: [
            {
                text: T.intl.string(C.default["IO+nlU"]),
                onClick: () => {
                    (0, b.A)(E.TE);
                },
                variant: "secondary",
            },
            { text: T.intl.string(C.default.odQeh3), onClick: N, variant: "expressive", icon: u.t, loading: I },
        ],
    });
}
function L(e) {
    let a,
        t,
        { error: r, onClose: n, ...l } = e,
        s = (0, E.DP)();
    switch (r) {
        case 1:
            (a = T.intl.formatToPlainString(C.default["wMo6/n"], { premiumGroupProductName: s })),
                (t = T.intl.formatToPlainString(C.default.C08r8L, {
                    premiumGroupProductName: s,
                    cooldownMonths: E.wl,
                }));
            break;
        case 2:
            (a = T.intl.formatToPlainString(C.default["Um4ml+"], { premiumGroupProductName: s })),
                (t = T.intl.string(C.default.Fm8iss));
            break;
        case 3:
            (a = T.intl.string(C.default.yGTLxP)),
                (t = T.intl.formatToPlainString(C.default["7/qtoL"], { premiumGroupProductName: s }));
            break;
        case 4:
            (a = T.intl.formatToPlainString(C.default["S+UfpQ"], { premiumGroupProductName: s })),
                (t = T.intl.formatToPlainString(C.default.AKYhx6, {
                    premiumGroupProductName: s,
                    countryName: (0, E.mU)(),
                }));
            break;
        case 5:
            (a = T.intl.formatToPlainString(C.default.anKEqI, { premiumGroupProductName: s })),
                (t = T.intl.formatToPlainString(C.default["67BbUf"], { premiumGroupProductName: s }));
            break;
        case 6:
            (a = T.intl.formatToPlainString(C.default.VH7zHG, { premiumGroupProductName: s })),
                (t = T.intl.string(C.default.s47Jqb));
            break;
        case 7:
            (a = T.intl.formatToPlainString(C.default.agSoQJ, { premiumGroupProductName: s })),
                (t = T.intl.formatToPlainString(C.default.YhJsq4, { premiumGroupProductName: s }));
            break;
        default:
            (a = T.intl.formatToPlainString(C.default["Kpg/uU"], { premiumGroupProductName: s })),
                (t = T.intl.formatToPlainString(C.default.GrEzlX, { premiumGroupProductName: s }));
    }
    return (0, i.jsx)(m.Modal, {
        size: "md",
        title: a,
        subtitle: t,
        onClose: n,
        actions: [
            {
                text: T.intl.string(C.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, b.A)(E.TE);
                },
            },
        ],
        ...l,
    });
}
function B(e) {
    let {
            premiumGroupSubscriptionId: a,
            premiumGroupInviteId: t,
            isExistingSub: n,
            premiumGroupPrimaryName: s,
            ...o
        } = e,
        [c, d] = (0, r.useState)(0),
        [_, u] = (0, r.useState)(null),
        m = (0, f.bG)([U.default], () => U.default.getCurrentUser());
    l()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let I = null;
    switch (c) {
        case 0:
            I = (0, i.jsx)(G, {
                setModalState: d,
                premiumGroupSubscriptionId: a,
                premiumGroupInviteId: t,
                isExistingSub: n,
                premiumGroupPrimaryName: s,
                currentUser: m,
                setError: u,
                ...o,
            });
            break;
        case 1:
            I = (0, i.jsx)(y, { ...o, isExistingSub: n, premiumGroupPrimaryName: s, currentUser: m });
            break;
        case 2:
            I = (0, i.jsx)(L, { error: _, ...o });
    }
    return (0, i.jsx)(P.A, {
        isConfirmationStep: 1 === c,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: I,
    });
}
