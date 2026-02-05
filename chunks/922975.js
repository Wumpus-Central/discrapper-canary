"use strict";
n.d(t, {
    $7: () => M,
    $O: () => j,
    A_: () => Z,
    I8: () => x,
    It: () => k,
    Ts: () => X,
    UN: () => W,
    V_: () => K,
    W5: () => G,
    Zw: () => q,
    bL: () => w,
    d0: () => ei,
    hh: () => z,
    j1: () => er,
    lK: () => P,
    lZ: () => F,
    rf: () => $,
    tx: () => L,
    xR: () => U,
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
    p = n(508675),
    h = n(371794),
    m = n(500345),
    g = n(579908),
    E = n(599941),
    A = n(636194),
    I = n(855918),
    T = n(739455),
    y = n(881288),
    S = n(244912),
    v = n(516917),
    C = n(846922),
    b = n(2242),
    N = n(652215),
    R = n(788868);
function O(e, t, n) {
    let i = (0, C.y)((e) => e.setListing),
        a = r.useCallback(
            (r) => {
                i(e, (e) => {
                    let i = e?.[t] ?? n;
                    return Object.assign({}, e, { [t]: "function" == typeof r ? r(i) : r });
                });
            },
            [i, e, t, n],
        ),
        s = (0, C.y)((n) => n.listings[e]?.[t]);
    return [void 0 !== s ? s : n, a];
}
function D(e, t) {
    let n = (0, c.bG)([A.A], () => A.A.getSubscriptionListing(e)),
        i = (0, f.A)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function L(e) {
    let t = D(e, (e) => e?.name ?? "");
    return O(e, "name", t);
}
function w(e) {
    let t = D(e, (e) => e?.subscription_plans[0]?.price);
    return O(e, "priceTier", t);
}
function x(e) {
    let t = D(e, (e) => e?.description ?? "");
    return O(e, "description", t);
}
function P(e, t) {
    let n = D(e, (e) => {
        if (e?.image_asset != null) return (0, h.YE)(e.application_id, e.image_asset, t);
    });
    return O(e, "image", n);
}
function M(e, t) {
    let n = (0, y.A)(t, e);
    return O(
        e,
        "roleIcon",
        r.useMemo(() => ({ icon: n?.icon ?? void 0, unicodeEmoji: n?.unicodeEmoji ?? void 0 }), [n]),
    );
}
function k(e, t) {
    let n = (0, y.A)(t, e),
        i = (0, C.y)((t) => t.listings[e]?.roleColor),
        a = (0, C.y)((t) => t.listings[e]?.roleIcon);
    return r.useMemo(() => {
        let e = { ...(n ?? v.K) };
        return (
            void 0 !== a && ((e.icon = a.icon ?? ""), (e.unicodeEmoji = a.unicodeEmoji ?? "")),
            void 0 !== i && ((e.color = i), (e.colorString = (0, l.Hl)(i))),
            e
        );
    }, [n, a, i]);
}
function U(e, t) {
    let n = (0, y.A)(t, e);
    return O(
        e,
        "roleColor",
        r.useMemo(() => n?.color ?? N.TGz, [n]),
    );
}
function G(e, t) {
    let n = (0, y.A)(t, e);
    return O(
        e,
        "channelAccessFormat",
        r.useMemo(
            () =>
                null == n
                    ? C.h.SOME_CHANNELS_ACCESS
                    : (0, I.iR)(n)
                      ? C.h.ALL_CHANNELS_ACCESS
                      : C.h.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let V = [];
function F(e) {
    let t = D(e, (e) => (null == e ? V : e.role_benefits.benefits.filter(m.B1)));
    return O(e, "channelBenefits", t);
}
let B = [];
function j(e) {
    let t = D(e, (e) => (null == e ? B : e.role_benefits.benefits.filter(m.b1)));
    return O(e, "intangibleBenefits", t);
}
let H = new Set();
function Y(e, t) {
    return 0 === e.length
        ? H
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function W(e, t) {
    let n = (0, y.A)(t, e),
        i = (0, c.yK)([p.Ay], () => p.Ay.getGuildEmoji(t), [t]);
    return O(
        e,
        "tierEmojiIds",
        r.useMemo(() => (null == n ? H : Y(i, n.id)), [i, n]),
    );
}
function K(e) {
    let t = (0, E.dL)(e),
        { selectedOption: n } = (0, S.A)(t?.active_trial ?? null);
    return O(e, "trialInterval", n ?? null);
}
function z(e) {
    let t = (0, E.dL)(e);
    return O(e, "trialLimit", t?.max_num_active_trial_users ?? null);
}
function $(e) {
    return (0, C.y)((t) => void 0 !== t.listings[e]);
}
function q(e) {
    return (0, C.y)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function Z(e) {
    let t = D(e, (e) => e?.subscription_plans[0]),
        [n] = O(e, "priceTier", void 0);
    return [
        r.useMemo(
            () => ({
                price: n ?? t?.price ?? 0,
                currency: t?.currency ?? N.Yri.USD,
                interval: t?.interval ?? R.WT.MONTH,
                interval_count: t?.interval_count ?? 1,
                id: t?.id ?? "",
            }),
            [t, n],
        ),
    ];
}
function Q(e, t) {
    (0, u.r)(() => {
        C.y.setState((n) => ({ listings: { ...n.listings, [t]: n.listings[e] } }));
    });
}
function X(e) {
    Q("nonexistantEditStateId", e);
}
function J(e, t) {
    (0, u.r)(() => {
        C.y.setState((n) => ({ listings: { ...n.listings, [t]: n.listings[e], [e]: void 0 } }));
    });
}
async function ee(e) {
    let { guildId: t, editStateId: n } = e,
        r = A.A.getSubscriptionListing(n);
    a()(null != r, "listing doesnt exist");
    let i = r.role_id,
        o = r.id,
        l = C.y.getState().listings[n];
    a()(null != l, "edit state does not exist");
    let { roleColor: u, roleIcon: c, trialLimit: f, trialInterval: h, tierEmojiIds: m } = l;
    (void 0 !== u || void 0 !== c) &&
        (await _.A.updateRole(t, i, { color: u, icon: c?.icon, unicodeEmoji: c?.unicodeEmoji }));
    let E = A.A.getSubscriptionTrial(o);
    if (
        ((null != f || null != h || (null != E && null == h)) &&
            (await g.J1(t, o, { trial: h, max_num_active_trial_users: f })),
        void 0 !== m)
    ) {
        let e = Y(p.Ay.getGuildEmoji(t), i),
            n = (0, s.difference)([...m], [...e]),
            r = (0, s.difference)([...e], [...m]),
            a = n.map((e) => {
                let n = p.Ay.getCustomEmojiById(e);
                if (null != n) return (0, d.Cp)({ guildId: t, emojiId: n.id, roles: [...n.roles, i] });
            }),
            o = r.map((e) => {
                let n = p.Ay.getCustomEmojiById(e);
                if (null == n) return;
                let r = n.roles.filter((e) => e !== i);
                return r.length > 0 ? (0, d.Cp)({ guildId: t, emojiId: n.id, roles: r }) : (0, d.ak)(t, n.id);
            });
        await Promise.all([...a, ...o]);
    }
}
function et(e) {
    let { guildId: t, editStateId: n, groupListingId: r } = e,
        i = A.A.getSubscriptionListing(n);
    a()(null != i, "listing doesnt exist");
    let o = n,
        l = C.y.getState().listings[o];
    a()(null != l, "edit state does not exist");
    let {
            name: u,
            description: c,
            channelBenefits: d,
            intangibleBenefits: _,
            priceTier: f,
            image: p,
            channelAccessFormat: h,
        } = l,
        E = {};
    if (
        (u !== i.name && (E.name = u),
        c !== i.description && (E.description = c),
        f !== i.subscription_plans[0]?.price && (E.priceTier = f),
        null != p && (E.image = p),
        null != h && (E.can_access_all_channels = h === C.h.ALL_CHANNELS_ACCESS),
        null != d || null != _)
    ) {
        let e = i.role_benefits.benefits.filter(m.B1),
            t = i.role_benefits.benefits.filter(m.b1);
        E.benefits = [...(d ?? e), ...(_ ?? t)];
    }
    return (0, s.isEmpty)(E) ? i : g.vW({ guildId: t, groupListingId: r, listingId: o, data: E });
}
async function en(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        s = C.y.getState().listings[n];
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
    let p = f === C.h.ALL_CHANNELS_ACCESS,
        h = r;
    null == h && (h = (await g.J4(t, {})).id), null != u && u.length > 0 && (await (0, T.pF)(t, u));
    let m = [...(u ?? []), ...(c ?? [])],
        E = (0, T.JH)(n, t);
    return g.K0({
        guildId: t,
        groupListingId: h,
        data: { can_access_all_channels: p, image: _, name: o, description: l, benefits: m, priceTier: d },
        analyticsContext: E,
        onBeforeDispatchNewListing: i,
    });
}
function er() {
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
                c = null != A.A.getSubscriptionListing(u);
            try {
                if ((t(!0), i(void 0), c))
                    a()(null != s, "groupListingId is null"),
                        await et({ guildId: n, editStateId: u, groupListingId: s });
                else {
                    let e = await en({ guildId: n, editStateId: u, groupListingId: s, onBeforeDispatchNewListing: o });
                    (u = e.id), J(r, u), l?.(e);
                }
                return await ee({ guildId: n, editStateId: u }), X(u), !0;
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                i(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function ei(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, E.cY)(e, n),
        a = (0, C.y)((e) => e.editStateIdsForGroup[t]),
        s = (0, C.y)((e) => e.setEditStateIdsForGroup),
        l = (0, C.y)((e) => e.setListing),
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
                                ref_type: b.bN.CHANNEL,
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
