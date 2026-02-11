"use strict";
n.d(t, {
    $7: () => k,
    $O: () => H,
    A_: () => Z,
    I8: () => P,
    It: () => U,
    Ts: () => J,
    UN: () => K,
    V_: () => $,
    W5: () => F,
    Zw: () => X,
    bL: () => x,
    d0: () => ea,
    hh: () => z,
    j1: () => ei,
    lK: () => M,
    lZ: () => B,
    rf: () => q,
    tx: () => w,
    xR: () => G,
});
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n(835245),
    l = n(317097),
    u = n(121894),
    c = n(311907),
    d = n(554375),
    _ = n(686956),
    f = n(444927),
    h = n(508675),
    p = n(371794),
    g = n(500345),
    E = n(579908),
    A = n(599941),
    I = n(636194),
    T = n(855918),
    y = n(739455),
    S = n(881288),
    v = n(244912),
    C = n(516917),
    b = n(846922),
    N = n(2242),
    R = n(652215),
    O = n(788868);
function D(e, t, n) {
    let i = (0, b.y)((e) => e.setListing),
        a = r.useCallback(
            (r) => {
                i(e, (e) => {
                    let i = e?.[t] ?? n;
                    return Object.assign({}, e, { [t]: "function" == typeof r ? r(i) : r });
                });
            },
            [i, e, t, n],
        ),
        s = (0, b.y)((n) => n.listings[e]?.[t]);
    return [void 0 !== s ? s : n, a];
}
function L(e, t) {
    let n = (0, c.bG)([I.A], () => I.A.getSubscriptionListing(e)),
        i = (0, f.A)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function w(e) {
    let t = L(e, (e) => e?.name ?? "");
    return D(e, "name", t);
}
function x(e) {
    let t = L(e, (e) => e?.subscription_plans[0]?.price);
    return D(e, "priceTier", t);
}
function P(e) {
    let t = L(e, (e) => e?.description ?? "");
    return D(e, "description", t);
}
function M(e, t) {
    let n = L(e, (e) => {
        if (e?.image_asset != null) return (0, p.YE)(e.application_id, e.image_asset, t);
    });
    return D(e, "image", n);
}
function k(e, t) {
    let n = (0, S.A)(t, e);
    return D(
        e,
        "roleIcon",
        r.useMemo(() => ({ icon: n?.icon ?? void 0, unicodeEmoji: n?.unicodeEmoji ?? void 0 }), [n]),
    );
}
function U(e, t) {
    let n = (0, S.A)(t, e),
        i = (0, b.y)((t) => t.listings[e]?.roleColor),
        a = (0, b.y)((t) => t.listings[e]?.roleIcon);
    return r.useMemo(() => {
        let e = { ...(n ?? C.K) };
        return (
            void 0 !== a && ((e.icon = a.icon ?? ""), (e.unicodeEmoji = a.unicodeEmoji ?? "")),
            void 0 !== i && ((e.color = i), (e.colorString = (0, l.Hl)(i))),
            e
        );
    }, [n, a, i]);
}
function G(e, t) {
    let n = (0, S.A)(t, e);
    return D(
        e,
        "roleColor",
        r.useMemo(() => n?.color ?? R.TGz, [n]),
    );
}
function F(e, t) {
    let n = (0, S.A)(t, e);
    return D(
        e,
        "channelAccessFormat",
        r.useMemo(
            () =>
                null == n
                    ? b.h.SOME_CHANNELS_ACCESS
                    : (0, T.iR)(n)
                      ? b.h.ALL_CHANNELS_ACCESS
                      : b.h.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let V = [];
function B(e) {
    let t = L(e, (e) => (null == e ? V : e.role_benefits.benefits.filter(g.B1)));
    return D(e, "channelBenefits", t);
}
let j = [];
function H(e) {
    let t = L(e, (e) => (null == e ? j : e.role_benefits.benefits.filter(g.b1)));
    return D(e, "intangibleBenefits", t);
}
let Y = new Set();
function W(e, t) {
    return 0 === e.length
        ? Y
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
    let n = (0, S.A)(t, e),
        i = (0, c.yK)([h.Ay], () => h.Ay.getGuildEmoji(t), [t]);
    return D(
        e,
        "tierEmojiIds",
        r.useMemo(() => (null == n ? Y : W(i, n.id)), [i, n]),
    );
}
function $(e) {
    let t = (0, A.dL)(e),
        { selectedOption: n } = (0, v.A)(t?.active_trial ?? null);
    return D(e, "trialInterval", n ?? null);
}
function z(e) {
    let t = (0, A.dL)(e);
    return D(e, "trialLimit", t?.max_num_active_trial_users ?? null);
}
function q(e) {
    return (0, b.y)((t) => void 0 !== t.listings[e]);
}
function X(e) {
    return (0, b.y)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function Z(e) {
    let t = L(e, (e) => e?.subscription_plans[0]),
        [n] = D(e, "priceTier", void 0);
    return [
        r.useMemo(
            () => ({
                price: n ?? t?.price ?? 0,
                currency: t?.currency ?? R.Yri.USD,
                interval: t?.interval ?? O.WT.MONTH,
                interval_count: t?.interval_count ?? 1,
                id: t?.id ?? "",
            }),
            [t, n],
        ),
    ];
}
function Q(e, t) {
    (0, u.r)(() => {
        b.y.setState((n) => ({ listings: { ...n.listings, [t]: n.listings[e] } }));
    });
}
function J(e) {
    Q("nonexistantEditStateId", e);
}
function ee(e, t) {
    (0, u.r)(() => {
        b.y.setState((n) => ({ listings: { ...n.listings, [t]: n.listings[e], [e]: void 0 } }));
    });
}
async function et(e) {
    let { guildId: t, editStateId: n } = e,
        r = I.A.getSubscriptionListing(n);
    a()(null != r, "listing doesnt exist");
    let i = r.role_id,
        o = r.id,
        l = b.y.getState().listings[n];
    a()(null != l, "edit state does not exist");
    let { roleColor: u, roleIcon: c, trialLimit: f, trialInterval: p, tierEmojiIds: g } = l;
    (void 0 !== u || void 0 !== c) &&
        (await _.A.updateRole(t, i, { color: u, icon: c?.icon, unicodeEmoji: c?.unicodeEmoji }));
    let A = I.A.getSubscriptionTrial(o);
    if (
        ((null != f || null != p || (null != A && null == p)) &&
            (await E.J1(t, o, { trial: p, max_num_active_trial_users: f })),
        void 0 !== g)
    ) {
        let e = W(h.Ay.getGuildEmoji(t), i),
            n = (0, s.difference)([...g], [...e]),
            r = (0, s.difference)([...e], [...g]),
            a = n.map((e) => {
                let n = h.Ay.getCustomEmojiById(e);
                if (null != n) return (0, d.Cp)({ guildId: t, emojiId: n.id, roles: [...n.roles, i] });
            }),
            o = r.map((e) => {
                let n = h.Ay.getCustomEmojiById(e);
                if (null == n) return;
                let r = n.roles.filter((e) => e !== i);
                return r.length > 0 ? (0, d.Cp)({ guildId: t, emojiId: n.id, roles: r }) : (0, d.ak)(t, n.id);
            });
        await Promise.all([...a, ...o]);
    }
}
function en(e) {
    let { guildId: t, editStateId: n, groupListingId: r } = e,
        i = I.A.getSubscriptionListing(n);
    a()(null != i, "listing doesnt exist");
    let o = n,
        l = b.y.getState().listings[o];
    a()(null != l, "edit state does not exist");
    let {
            name: u,
            description: c,
            channelBenefits: d,
            intangibleBenefits: _,
            priceTier: f,
            image: h,
            channelAccessFormat: p,
        } = l,
        A = {};
    if (
        (u !== i.name && (A.name = u),
        c !== i.description && (A.description = c),
        f !== i.subscription_plans[0]?.price && (A.priceTier = f),
        null != h && (A.image = h),
        null != p && (A.can_access_all_channels = p === b.h.ALL_CHANNELS_ACCESS),
        null != d || null != _)
    ) {
        let e = i.role_benefits.benefits.filter(g.B1),
            t = i.role_benefits.benefits.filter(g.b1);
        A.benefits = [...(d ?? e), ...(_ ?? t)];
    }
    return (0, s.isEmpty)(A) ? i : E.vW({ guildId: t, groupListingId: r, listingId: o, data: A });
}
async function er(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        s = b.y.getState().listings[n];
    a()(null != s, "edit state does not exist");
    let {
        name: o,
        description: l,
        channelBenefits: u,
        intangibleBenefits: c,
        priceTier: d,
        image: _,
        channelAccessFormat: f,
    } = s;
    a()(null != o, "no name provided"),
        a()(null != l, "no description provided"),
        a()(null != d, "no priceTier provided"),
        a()(null != _, "no image provided");
    let h = f === b.h.ALL_CHANNELS_ACCESS,
        p = r;
    null == p && (p = (await E.J4(t, {})).id), null != u && u.length > 0 && (await (0, y.pF)(t, u));
    let g = [...(u ?? []), ...(c ?? [])],
        A = (0, y.JH)(n, t);
    return E.K0({
        guildId: t,
        groupListingId: p,
        data: { can_access_all_channels: h, image: _, name: o, description: l, benefits: g, priceTier: d },
        analyticsContext: A,
        onBeforeDispatchNewListing: i,
    });
}
function ei() {
    let [e, t] = r.useState(!1),
        [n, i] = r.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let {
                    guildId: n,
                    editStateId: r,
                    groupListingId: s,
                    onBeforeDispatchNewListing: o,
                    onAfterDispatchNewListing: l,
                } = e,
                u = r,
                c = null != I.A.getSubscriptionListing(u);
            try {
                if ((t(!0), i(void 0), c))
                    a()(null != s, "groupListingId is null"),
                        await en({ guildId: n, editStateId: u, groupListingId: s });
                else {
                    let e = await er({ guildId: n, editStateId: u, groupListingId: s, onBeforeDispatchNewListing: o });
                    (u = e.id), ee(r, u), l?.(e);
                }
                return await et({ guildId: n, editStateId: u }), J(u), !0;
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                i(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, A.cY)(e, n),
        a = (0, b.y)((e) => e.editStateIdsForGroup[t]),
        s = (0, b.y)((e) => e.setEditStateIdsForGroup),
        l = (0, b.y)((e) => e.setListing),
        u = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(a ?? []),
            ],
            [a, i],
        ),
        c = r.useCallback(() => {
            let e = (0, o.A)();
            s(t, (t) => [...(t ?? []), e]);
        }, [t, s]);
    return {
        editStateIds: u,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, o.A)();
                return (
                    s(t, (e) => [...(e ?? []), n]),
                    e.listings.forEach((t) => {
                        l(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: N.bN.CHANNEL,
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
            [t, s, l],
        ),
        removeEditStateId: r.useCallback(
            (e) => {
                s(t, (t) => (t ?? []).filter((t) => t !== e));
            },
            [t, s],
        ),
    };
}
