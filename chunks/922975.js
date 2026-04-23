n.d(t, {
    $7: () => B,
    $O: () => U,
    A_: () => z,
    I8: () => G,
    It: () => k,
    Ts: () => Q,
    UN: () => F,
    V_: () => K,
    W5: () => W,
    Zw: () => Z,
    bL: () => M,
    d0: () => et,
    hh: () => J,
    j1: () => ee,
    lK: () => H,
    lZ: () => D,
    rf: () => V,
    tx: () => w,
    xR: () => O,
});
var i = n(64700),
    l = n(284009),
    r = n.n(l),
    o = n(735438),
    a = n(835245),
    s = n(317097),
    u = n(121894),
    c = n(311907),
    d = n(554375),
    m = n(686956),
    f = n(444927),
    g = n(508675),
    p = n(371794),
    A = n(500345),
    v = n(579908),
    _ = n(599941),
    S = n(636194),
    y = n(855918),
    h = n(739455),
    E = n(881288),
    b = n(244912),
    N = n(516917),
    C = n(846922),
    j = n(2242),
    x = n(652215),
    I = n(788868);
function L(e, t, n) {
    let l = (0, C.y)((e) => e.setListing),
        r = i.useCallback(
            (i) => {
                l(e, (e) => {
                    let l = e?.[t] ?? n;
                    return Object.assign({}, e, { [t]: "function" == typeof i ? i(l) : i });
                });
            },
            [l, e, t, n],
        ),
        o = (0, C.y)((n) => n.listings[e]?.[t]);
    return [void 0 !== o ? o : n, r];
}
function T(e, t) {
    let n = (0, c.bG)([S.A], () => S.A.getSubscriptionListing(e)),
        l = (0, f.A)(() => t);
    return i.useMemo(() => l(n), [n, l]);
}
function w(e) {
    let t = T(e, (e) => e?.name ?? "");
    return L(e, "name", t);
}
function M(e) {
    let t = T(e, (e) => e?.subscription_plans[0]?.price);
    return L(e, "priceTier", t);
}
function G(e) {
    let t = T(e, (e) => e?.description ?? "");
    return L(e, "description", t);
}
function H(e, t) {
    let n = T(e, (e) => {
        if (e?.image_asset != null) return (0, p.YE)(e.application_id, e.image_asset, t);
    });
    return L(e, "image", n);
}
function B(e, t) {
    let n = (0, E.A)(t, e);
    return L(
        e,
        "roleIcon",
        i.useMemo(() => ({ icon: n?.icon ?? void 0, unicodeEmoji: n?.unicodeEmoji ?? void 0 }), [n]),
    );
}
function k(e, t) {
    let n = (0, E.A)(t, e),
        l = (0, C.y)((t) => t.listings[e]?.roleColor),
        r = (0, C.y)((t) => t.listings[e]?.roleIcon);
    return i.useMemo(() => {
        let e = { ...(n ?? N.K) };
        return (
            void 0 !== r && ((e.icon = r.icon ?? ""), (e.unicodeEmoji = r.unicodeEmoji ?? "")),
            void 0 !== l && ((e.color = l), (e.colorString = (0, s.Hl)(l))),
            e
        );
    }, [n, r, l]);
}
function O(e, t) {
    let n = (0, E.A)(t, e);
    return L(
        e,
        "roleColor",
        i.useMemo(() => n?.color ?? x.TGz, [n]),
    );
}
function W(e, t) {
    let n = (0, E.A)(t, e);
    return L(
        e,
        "channelAccessFormat",
        i.useMemo(
            () =>
                null == n
                    ? C.h.SOME_CHANNELS_ACCESS
                    : (0, y.iR)(n)
                      ? C.h.ALL_CHANNELS_ACCESS
                      : C.h.SOME_CHANNELS_ACCESS,
            [n],
        ),
    );
}
let Y = [];
function D(e) {
    let t = T(e, (e) => (null == e ? Y : e.role_benefits.benefits.filter(A.B1)));
    return L(e, "channelBenefits", t);
}
let R = [];
function U(e) {
    let t = T(e, (e) => (null == e ? R : e.role_benefits.benefits.filter(A.b1)));
    return L(e, "intangibleBenefits", t);
}
let $ = new Set();
function P(e, t) {
    return 0 === e.length
        ? $
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function F(e, t) {
    let n = (0, E.A)(t, e),
        l = (0, c.yK)([g.Ay], () => g.Ay.getGuildEmoji(t), [t]);
    return L(
        e,
        "tierEmojiIds",
        i.useMemo(() => (null == n ? $ : P(l, n.id)), [l, n]),
    );
}
function K(e) {
    let t = (0, _.dL)(e),
        { selectedOption: n } = (0, b.A)(t?.active_trial ?? null);
    return L(e, "trialInterval", n ?? null);
}
function J(e) {
    let t = (0, _.dL)(e);
    return L(e, "trialLimit", t?.max_num_active_trial_users ?? null);
}
function V(e) {
    return (0, C.y)((t) => void 0 !== t.listings[e]);
}
function Z(e) {
    return (0, C.y)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function z(e) {
    let t = T(e, (e) => e?.subscription_plans[0]),
        [n] = L(e, "priceTier", void 0);
    return [
        i.useMemo(
            () => ({
                price: n ?? t?.price ?? 0,
                currency: t?.currency ?? x.Yri.USD,
                interval: t?.interval ?? I.WT.MONTH,
                interval_count: t?.interval_count ?? 1,
                id: t?.id ?? "",
            }),
            [t, n],
        ),
    ];
}
function Q(e) {
    (0, u.r)(() => {
        C.y.setState((t) => ({ listings: { ...t.listings, [e]: t.listings.nonexistantEditStateId } }));
    });
}
async function X(e) {
    let { guildId: t, editStateId: n } = e,
        i = S.A.getSubscriptionListing(n);
    r()(null != i, "listing doesnt exist");
    let l = i.role_id,
        a = i.id,
        s = C.y.getState().listings[n];
    r()(null != s, "edit state does not exist");
    let { roleColor: u, roleIcon: c, trialLimit: f, trialInterval: p, tierEmojiIds: A } = s;
    (void 0 !== u || void 0 !== c) &&
        (await m.A.updateRole(t, l, { color: u, icon: c?.icon, unicodeEmoji: c?.unicodeEmoji }));
    let _ = S.A.getSubscriptionTrial(a);
    if (
        ((null != f || null != p || (null != _ && null == p)) &&
            (await v.J1(t, a, { trial: p, max_num_active_trial_users: f })),
        void 0 !== A)
    ) {
        let e = P(g.Ay.getGuildEmoji(t), l),
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
async function q(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: l } = e,
        o = C.y.getState().listings[n];
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
    let g = f === C.h.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await v.J4(t, {})).id), null != u && u.length > 0 && (await (0, h.pF)(t, u));
    let A = [...(u ?? []), ...(c ?? [])],
        _ = (0, h.JH)(n, t);
    return v.K0({
        guildId: t,
        groupListingId: p,
        data: { can_access_all_channels: g, image: m, name: a, description: s, benefits: A, priceTier: d },
        analyticsContext: _,
        onBeforeDispatchNewListing: l,
    });
}
function ee() {
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
                            let a = C.y.getState().listings[n];
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
                                null != g && (p.can_access_all_channels = g === C.h.ALL_CHANNELS_ACCESS),
                                null != c || null != d)
                            ) {
                                let e = l.role_benefits.benefits.filter(A.B1),
                                    t = l.role_benefits.benefits.filter(A.b1);
                                p.benefits = [...(c ?? e), ...(d ?? t)];
                            }
                            return (0, o.isEmpty)(p)
                                ? l
                                : v.vW({ guildId: t, groupListingId: i, listingId: n, data: p });
                        })({ guildId: n, editStateId: d, groupListingId: a });
                else {
                    var f;
                    let e = await q({ guildId: n, editStateId: d, groupListingId: a, onBeforeDispatchNewListing: s });
                    (d = e.id),
                        (f = d),
                        (0, u.r)(() => {
                            C.y.setState((e) => ({ listings: { ...e.listings, [f]: e.listings[i], [i]: void 0 } }));
                        }),
                        c?.(e);
                }
                return await X({ guildId: n, editStateId: d }), Q(d), !0;
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                l(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function et(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        l = (0, _.cY)(e, n),
        r = (0, C.y)((e) => e.editStateIdsForGroup[t]),
        o = (0, C.y)((e) => e.setEditStateIdsForGroup),
        s = (0, C.y)((e) => e.setListing),
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
                                ref_type: j.bN.CHANNEL,
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
