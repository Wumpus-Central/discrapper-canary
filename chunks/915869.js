n.d(t, {
    W5: () => Y,
    j1: () => et,
    xR: () => W,
    lZ: () => R,
    lK: () => H,
    V_: () => V,
    bL: () => G,
    tx: () => M,
    UN: () => K,
    hh: () => Z,
    rf: () => z,
    Zw: () => J,
    It: () => O,
    I8: () => B,
    d0: () => en,
    A_: () => Q,
    Ts: () => X,
    $7: () => k,
    $O: () => P,
});
var i = n(64700),
    l = n(284009),
    r = n.n(l),
    o = n(735438),
    a = n(835245),
    s = n(317097),
    u = n(121894),
    c = n(17928),
    d = n(554375),
    m = n(66834),
    f = n(444927),
    g = n(159273),
    p = n(371794),
    A = n(500345),
    _ = n(579908),
    v = n(599941),
    S = n(636194),
    y = n(855918),
    E = n(739455),
    b = n(881288),
    h = n(244912),
    C = n(9865),
    N = n(652215);
let j = (0, C.np)({
    id: "0",
    guildId: "0",
    name: "",
    mentionable: !1,
    managed: !1,
    position: 0,
    hoist: !1,
    permissions: N.xBc.SEND_MESSAGES,
    color: 0,
    colors: { primary_color: 0, secondary_color: null, tertiary_color: null },
    colorString: "0",
    colorStrings: { primaryColor: "0", secondaryColor: null, tertiaryColor: null },
    icon: null,
    unicodeEmoji: null,
    flags: 0,
    description: null,
    tags: {},
    version: 0,
});
var I = n(846922),
    T = n(2242),
    L = n(788868);
function x(e, t, n) {
    let l = (0, I.y)((e) => e.setListing),
        r = i.useCallback(
            (i) => {
                l(e, (e) => {
                    let l = e?.[t] ?? n;
                    return Object.assign({}, e, { [t]: "function" == typeof i ? i(l) : i });
                });
            },
            [l, e, t, n],
        ),
        o = (0, I.y)((n) => n.listings[e]?.[t]);
    return [void 0 !== o ? o : n, r];
}
function w(e, t) {
    let n = (0, c.bG)([S.A], () => S.A.getSubscriptionListing(e)),
        l = (0, f.A)(() => t);
    return i.useMemo(() => l(n), [n, l]);
}
function M(e) {
    let t = w(e, (e) => e?.name ?? "");
    return x(e, "name", t);
}
function G(e) {
    let t = w(e, (e) => e?.subscription_plans[0]?.price);
    return x(e, "priceTier", t);
}
function B(e) {
    let t = w(e, (e) => e?.description ?? "");
    return x(e, "description", t);
}
function H(e, t) {
    let n = w(e, (e) => {
        if (e?.image_asset != null) return (0, p.YE)(e.application_id, e.image_asset, t);
    });
    return x(e, "image", n);
}
function k(e, t) {
    let n = (0, b.A)(t, e);
    return x(
        e,
        "roleIcon",
        i.useMemo(() => ({ icon: n?.icon ?? void 0, unicodeEmoji: n?.unicodeEmoji ?? void 0 }), [n]),
    );
}
function O(e, t) {
    let n = (0, b.A)(t, e),
        l = (0, I.y)((t) => t.listings[e]?.roleColor),
        r = (0, I.y)((t) => t.listings[e]?.roleIcon);
    return i.useMemo(() => {
        let e = { ...(n ?? j) };
        return (
            void 0 !== r && ((e.icon = r.icon ?? ""), (e.unicodeEmoji = r.unicodeEmoji ?? "")),
            void 0 !== l && ((e.color = l), (e.colorString = (0, s.Hl)(l))),
            e
        );
    }, [n, r, l]);
}
function W(e, t) {
    let n = (0, b.A)(t, e);
    return x(
        e,
        "roleColor",
        i.useMemo(() => n?.color ?? N.TGz, [n]),
    );
}
function Y(e, t) {
    let n = (0, b.A)(t, e);
    return x(
        e,
        "channelAccessFormat",
        i.useMemo(
            () =>
                null == n
                    ? I.h.SOME_CHANNELS_ACCESS
                    : (0, y.iR)(n)
                      ? I.h.ALL_CHANNELS_ACCESS
                      : I.h.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let D = [];
function R(e) {
    let t = w(e, (e) => (null == e ? D : e.role_benefits.benefits.filter(A.B1)));
    return x(e, "channelBenefits", t);
}
let $ = [];
function P(e) {
    let t = w(e, (e) => (null == e ? $ : e.role_benefits.benefits.filter(A.b1)));
    return x(e, "intangibleBenefits", t);
}
let U = new Set();
function F(e, t) {
    return 0 === e.length
        ? U
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function K(e, t) {
    let n = (0, b.A)(t, e),
        l = (0, c.yK)([g.Ay], () => g.Ay.getGuildEmoji(t), [t]);
    return x(
        e,
        "tierEmojiIds",
        i.useMemo(() => (null == n ? U : F(l, n.id)), [l, n]),
    );
}
function V(e) {
    let t = (0, v.dL)(e),
        { selectedOption: n } = (0, h.A)(t?.active_trial ?? null);
    return x(e, "trialInterval", n ?? null);
}
function Z(e) {
    let t = (0, v.dL)(e);
    return x(e, "trialLimit", t?.max_num_active_trial_users ?? null);
}
function z(e) {
    return (0, I.y)((t) => void 0 !== t.listings[e]);
}
function J(e) {
    return (0, I.y)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function Q(e) {
    let t = w(e, (e) => e?.subscription_plans[0]),
        [n] = x(e, "priceTier", void 0);
    return [
        i.useMemo(
            () => ({
                price: n ?? t?.price ?? 0,
                currency: t?.currency ?? N.Yri.USD,
                interval: t?.interval ?? L.WT.MONTH,
                interval_count: t?.interval_count ?? 1,
                id: t?.id ?? "",
            }),
            [t, n],
        ),
    ];
}
function X(e) {
    (0, u.r)(() => {
        I.y.setState((t) => ({ listings: { ...t.listings, [e]: t.listings.nonexistantEditStateId } }));
    });
}
async function q(e) {
    let { guildId: t, editStateId: n } = e,
        i = S.A.getSubscriptionListing(n);
    r()(null != i, "listing doesnt exist");
    let l = i.role_id,
        a = i.id,
        s = I.y.getState().listings[n];
    r()(null != s, "edit state does not exist");
    let { roleColor: u, roleIcon: c, trialLimit: f, trialInterval: p, tierEmojiIds: A } = s;
    (void 0 !== u || void 0 !== c) &&
        (await m.A.updateRole(t, l, { color: u, icon: c?.icon, unicodeEmoji: c?.unicodeEmoji }));
    let v = S.A.getSubscriptionTrial(a);
    if (
        ((null != f || null != p || (null != v && null == p)) &&
            (await _.J1(t, a, { trial: p, max_num_active_trial_users: f })),
        void 0 !== A)
    ) {
        let e = F(g.Ay.getGuildEmoji(t), l),
            n = (0, o.difference)([...A], [...e]),
            i = (0, o.difference)([...e], [...A]),
            r = n.map((e) => {
                let n = g.Ay.getCustomEmojiById(e);
                if (null != n) return (0, d.Cp)({ guildId: t, emojiId: n.id, roles: [...n.roles, l] });
            }),
            a = i.map((e) => {
                let n = g.Ay.getCustomEmojiById(e);
                if (null == n) return;
                let i = n.roles.filter((e) => e !== l);
                return i.length > 0 ? (0, d.Cp)({ guildId: t, emojiId: n.id, roles: i }) : (0, d.ak)(t, n.id);
            });
        await Promise.all([...r, ...a]);
    }
}
async function ee(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: l } = e,
        o = I.y.getState().listings[n];
    r()(null != o, "edit state does not exist");
    let {
        name: a,
        description: s,
        channelBenefits: u,
        intangibleBenefits: c,
        priceTier: d,
        image: m,
        channelAccessFormat: f,
    } = o;
    r()(null != a, "no name provided"),
        r()(null != s, "no description provided"),
        r()(null != d, "no priceTier provided"),
        r()(null != m, "no image provided");
    let g = f === I.h.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await _.J4(t, {})).id), null != u && u.length > 0 && (await (0, E.pF)(t, u));
    let A = [...(u ?? []), ...(c ?? [])],
        v = (0, E.JH)(n, t);
    return _.K0({
        guildId: t,
        groupListingId: p,
        data: { can_access_all_channels: g, image: m, name: a, description: s, benefits: A, priceTier: d },
        analyticsContext: v,
        onBeforeDispatchNewListing: l,
    });
}
function et() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let {
                    guildId: n,
                    editStateId: i,
                    groupListingId: a,
                    onBeforeDispatchNewListing: s,
                    onAfterDispatchNewListing: c,
                } = e,
                d = i,
                m = S.A.getSubscriptionListing(d);
            try {
                if ((t(!0), l(void 0), null != m))
                    r()(null != a, "groupListingId is null"),
                        await (function (e) {
                            let { guildId: t, editStateId: n, groupListingId: i } = e,
                                l = S.A.getSubscriptionListing(n);
                            r()(null != l, "listing doesnt exist");
                            let a = I.y.getState().listings[n];
                            r()(null != a, "edit state does not exist");
                            let {
                                    name: s,
                                    description: u,
                                    channelBenefits: c,
                                    intangibleBenefits: d,
                                    priceTier: m,
                                    image: f,
                                    channelAccessFormat: g,
                                } = a,
                                p = {};
                            if (
                                (s !== l.name && (p.name = s),
                                u !== l.description && (p.description = u),
                                m !== l.subscription_plans[0]?.price && (p.priceTier = m),
                                null != f && (p.image = f),
                                null != g && (p.can_access_all_channels = g === I.h.ALL_CHANNELS_ACCESS),
                                null != c || null != d)
                            ) {
                                let e = l.role_benefits.benefits.filter(A.B1),
                                    t = l.role_benefits.benefits.filter(A.b1);
                                p.benefits = [...(c ?? e), ...(d ?? t)];
                            }
                            return (0, o.isEmpty)(p)
                                ? l
                                : _.vW({ guildId: t, groupListingId: i, listingId: n, data: p });
                        })({ guildId: n, editStateId: d, groupListingId: a });
                else {
                    var f;
                    let e = await ee({ guildId: n, editStateId: d, groupListingId: a, onBeforeDispatchNewListing: s });
                    (d = e.id),
                        (f = d),
                        (0, u.r)(() => {
                            I.y.setState((e) => ({ listings: { ...e.listings, [f]: e.listings[i], [i]: void 0 } }));
                        }),
                        c?.(e);
                }
                return await q({ guildId: n, editStateId: d }), X(d), !0;
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                l(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function en(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        l = (0, v.cY)(e, n),
        r = (0, I.y)((e) => e.editStateIdsForGroup[t]),
        o = (0, I.y)((e) => e.setEditStateIdsForGroup),
        s = (0, I.y)((e) => e.setListing),
        u = i.useMemo(
            () => [
                ...l.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(r ?? []),
            ],
            [r, l],
        ),
        c = i.useCallback(() => {
            let e = (0, a.A)();
            o(t, (t) => [...(t ?? []), e]);
        }, [t, o]);
    return {
        editStateIds: u,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: i.useCallback(
            (e) => {
                let n = (0, a.A)();
                return (
                    o(t, (e) => [...(e ?? []), n]),
                    e.listings.forEach((t) => {
                        s(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: T.bN.CHANNEL,
                                description: e.description,
                                name: e.name,
                                emoji_name: e.emoji_name,
                            })),
                            roleIcon: { unicodeEmoji: void 0, icon: t.image },
                            roleColor: t.role_color,
                            usedTemplate: e.category,
                        }));
                    }),
                    n
                );
            },
            [t, o, s],
        ),
        removeEditStateId: i.useCallback(
            (e) => {
                o(t, (t) => (t ?? []).filter((t) => t !== e));
            },
            [t, o],
        ),
    };
}
