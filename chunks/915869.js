i.d(t, {
    W5: () => F,
    j1: () => et,
    xR: () => D,
    lZ: () => W,
    lK: () => B,
    V_: () => P,
    bL: () => k,
    tx: () => M,
    UN: () => $,
    hh: () => Z,
    rf: () => z,
    Zw: () => V,
    It: () => O,
    I8: () => G,
    d0: () => ei,
    A_: () => X,
    Ts: () => q,
    $7: () => H,
    $O: () => J,
});
var n = i(64700),
    l = i(284009),
    r = i.n(l),
    o = i(735438),
    s = i(835245),
    a = i(317097),
    u = i(121894),
    c = i(17928),
    d = i(554375),
    m = i(66834),
    f = i(444927),
    g = i(159273),
    p = i(371794),
    _ = i(500345),
    S = i(579908),
    v = i(599941),
    A = i(636194),
    y = i(855918),
    E = i(739455),
    b = i(881288),
    C = i(244912),
    h = i(9865),
    I = i(652215);
let L = (0, h.np)({
    id: "0",
    guildId: "0",
    name: "",
    mentionable: !1,
    managed: !1,
    position: 0,
    hoist: !1,
    permissions: I.xBc.SEND_MESSAGES,
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
var j = i(846922),
    N = i(2242),
    T = i(788868);
function w(e, t, i) {
    let l = (0, j.y)((e) => e.setListing),
        r = n.useCallback(
            (n) => {
                l(e, (e) => {
                    let l = e?.[t] ?? i;
                    return Object.assign({}, e, { [t]: "function" == typeof n ? n(l) : n });
                });
            },
            [l, e, t, i],
        ),
        o = (0, j.y)((i) => i.listings[e]?.[t]);
    return [void 0 !== o ? o : i, r];
}
function x(e, t) {
    let i = (0, c.bG)([A.A], () => A.A.getSubscriptionListing(e)),
        l = (0, f.A)(() => t);
    return n.useMemo(() => l(i), [i, l]);
}
function M(e) {
    let t = x(e, (e) => e?.name ?? "");
    return w(e, "name", t);
}
function k(e) {
    let t = x(e, (e) => e?.subscription_plans[0]?.price);
    return w(e, "priceTier", t);
}
function G(e) {
    let t = x(e, (e) => e?.description ?? "");
    return w(e, "description", t);
}
function B(e, t) {
    let i = x(e, (e) => {
        if (e?.image_asset != null) return (0, p.YE)(e.application_id, e.image_asset, t);
    });
    return w(e, "image", i);
}
function H(e, t) {
    let i = (0, b.A)(t, e);
    return w(
        e,
        "roleIcon",
        n.useMemo(() => ({ icon: i?.icon ?? void 0, unicodeEmoji: i?.unicodeEmoji ?? void 0 }), [i]),
    );
}
function O(e, t) {
    let i = (0, b.A)(t, e),
        l = (0, j.y)((t) => t.listings[e]?.roleColor),
        r = (0, j.y)((t) => t.listings[e]?.roleIcon);
    return n.useMemo(() => {
        let e = { ...(i ?? L) };
        return (
            void 0 !== r && ((e.icon = r.icon ?? ""), (e.unicodeEmoji = r.unicodeEmoji ?? "")),
            void 0 !== l && ((e.color = l), (e.colorString = (0, a.Hl)(l))),
            e
        );
    }, [i, r, l]);
}
function D(e, t) {
    let i = (0, b.A)(t, e);
    return w(
        e,
        "roleColor",
        n.useMemo(() => i?.color ?? I.TGz, [i]),
    );
}
function F(e, t) {
    let i = (0, b.A)(t, e);
    return w(
        e,
        "channelAccessFormat",
        n.useMemo(
            () =>
                null == i
                    ? j.h.SOME_CHANNELS_ACCESS
                    : (0, y.iR)(i)
                      ? j.h.ALL_CHANNELS_ACCESS
                      : j.h.SOME_CHANNELS_ACCESS,
            [i],
        ),
    );
}
let R = [];
function W(e) {
    let t = x(e, (e) => (null == e ? R : e.role_benefits.benefits.filter(_.B1)));
    return w(e, "channelBenefits", t);
}
let Y = [];
function J(e) {
    let t = x(e, (e) => (null == e ? Y : e.role_benefits.benefits.filter(_.b1)));
    return w(e, "intangibleBenefits", t);
}
let U = new Set();
function K(e, t) {
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
function $(e, t) {
    let i = (0, b.A)(t, e),
        l = (0, c.yK)([g.Ay], () => g.Ay.getGuildEmoji(t), [t]);
    return w(
        e,
        "tierEmojiIds",
        n.useMemo(() => (null == i ? U : K(l, i.id)), [l, i]),
    );
}
function P(e) {
    let t = (0, v.dL)(e),
        { selectedOption: i } = (0, C.A)(t?.active_trial ?? null);
    return w(e, "trialInterval", i ?? null);
}
function Z(e) {
    let t = (0, v.dL)(e);
    return w(e, "trialLimit", t?.max_num_active_trial_users ?? null);
}
function z(e) {
    return (0, j.y)((t) => void 0 !== t.listings[e]);
}
function V(e) {
    return (0, j.y)((t) => {
        for (let i of e) if (void 0 !== t.listings[i]) return !0;
        return !1;
    });
}
function X(e) {
    let t = x(e, (e) => e?.subscription_plans[0]),
        [i] = w(e, "priceTier", void 0);
    return [
        n.useMemo(
            () => ({
                price: i ?? t?.price ?? 0,
                currency: t?.currency ?? I.Yri.USD,
                interval: t?.interval ?? T.WT.MONTH,
                interval_count: t?.interval_count ?? 1,
                id: t?.id ?? "",
            }),
            [t, i],
        ),
    ];
}
function q(e) {
    (0, u.r)(() => {
        j.y.setState((t) => ({ listings: { ...t.listings, [e]: t.listings.nonexistantEditStateId } }));
    });
}
async function Q(e) {
    let { guildId: t, editStateId: i } = e,
        n = A.A.getSubscriptionListing(i);
    r()(null != n, "listing doesnt exist");
    let l = n.role_id,
        s = n.id,
        a = j.y.getState().listings[i];
    r()(null != a, "edit state does not exist");
    let { roleColor: u, roleIcon: c, trialLimit: f, trialInterval: p, tierEmojiIds: _ } = a;
    (void 0 !== u || void 0 !== c) &&
        (await m.A.updateRole(t, l, { color: u, icon: c?.icon, unicodeEmoji: c?.unicodeEmoji }));
    let v = A.A.getSubscriptionTrial(s);
    if (
        ((null != f || null != p || (null != v && null == p)) &&
            (await S.J1(t, s, { trial: p, max_num_active_trial_users: f })),
        void 0 !== _)
    ) {
        let e = K(g.Ay.getGuildEmoji(t), l),
            i = (0, o.difference)([..._], [...e]),
            n = (0, o.difference)([...e], [..._]),
            r = i.map((e) => {
                let i = g.Ay.getCustomEmojiById(e);
                if (null != i) return (0, d.Cp)({ guildId: t, emojiId: i.id, roles: [...i.roles, l] });
            }),
            s = n.map((e) => {
                let i = g.Ay.getCustomEmojiById(e);
                if (null == i) return;
                let n = i.roles.filter((e) => e !== l);
                return n.length > 0 ? (0, d.Cp)({ guildId: t, emojiId: i.id, roles: n }) : (0, d.ak)(t, i.id);
            });
        await Promise.all([...r, ...s]);
    }
}
async function ee(e) {
    let { guildId: t, editStateId: i, groupListingId: n, onBeforeDispatchNewListing: l } = e,
        o = j.y.getState().listings[i];
    r()(null != o, "edit state does not exist");
    let {
        name: s,
        description: a,
        channelBenefits: u,
        intangibleBenefits: c,
        priceTier: d,
        image: m,
        channelAccessFormat: f,
    } = o;
    r()(null != s, "no name provided"),
        r()(null != a, "no description provided"),
        r()(null != d, "no priceTier provided"),
        r()(null != m, "no image provided");
    let g = f === j.h.ALL_CHANNELS_ACCESS,
        p = n;
    null == p && (p = (await S.J4(t, {})).id), null != u && u.length > 0 && (await (0, E.pF)(t, u));
    let _ = [...(u ?? []), ...(c ?? [])],
        v = (0, E.JH)(i, t);
    return S.K0({
        guildId: t,
        groupListingId: p,
        data: { can_access_all_channels: g, image: m, name: s, description: a, benefits: _, priceTier: d },
        analyticsContext: v,
        onBeforeDispatchNewListing: l,
    });
}
function et() {
    let [e, t] = n.useState(!1),
        [i, l] = n.useState();
    return {
        loading: e,
        error: i,
        handleCreateOrUpdateFromEditState: n.useCallback(async (e) => {
            let {
                    guildId: i,
                    editStateId: n,
                    groupListingId: s,
                    onBeforeDispatchNewListing: a,
                    onAfterDispatchNewListing: c,
                } = e,
                d = n,
                m = A.A.getSubscriptionListing(d);
            try {
                if ((t(!0), l(void 0), null != m))
                    r()(null != s, "groupListingId is null"),
                        await (function (e) {
                            let { guildId: t, editStateId: i, groupListingId: n } = e,
                                l = A.A.getSubscriptionListing(i);
                            r()(null != l, "listing doesnt exist");
                            let s = j.y.getState().listings[i];
                            r()(null != s, "edit state does not exist");
                            let {
                                    name: a,
                                    description: u,
                                    channelBenefits: c,
                                    intangibleBenefits: d,
                                    priceTier: m,
                                    image: f,
                                    channelAccessFormat: g,
                                } = s,
                                p = {};
                            if (
                                (a !== l.name && (p.name = a),
                                u !== l.description && (p.description = u),
                                m !== l.subscription_plans[0]?.price && (p.priceTier = m),
                                null != f && (p.image = f),
                                null != g && (p.can_access_all_channels = g === j.h.ALL_CHANNELS_ACCESS),
                                null != c || null != d)
                            ) {
                                let e = l.role_benefits.benefits.filter(_.B1),
                                    t = l.role_benefits.benefits.filter(_.b1);
                                p.benefits = [...(c ?? e), ...(d ?? t)];
                            }
                            return (0, o.isEmpty)(p)
                                ? l
                                : S.vW({ guildId: t, groupListingId: n, listingId: i, data: p });
                        })({ guildId: i, editStateId: d, groupListingId: s });
                else {
                    var f;
                    let e = await ee({ guildId: i, editStateId: d, groupListingId: s, onBeforeDispatchNewListing: a });
                    (d = e.id),
                        (f = d),
                        (0, u.r)(() => {
                            j.y.setState((e) => ({ listings: { ...e.listings, [f]: e.listings[n], [n]: void 0 } }));
                        }),
                        c?.(e);
                }
                return await Q({ guildId: i, editStateId: d }), q(d), !0;
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                l(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function ei(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        l = (0, v.cY)(e, i),
        r = (0, j.y)((e) => e.editStateIdsForGroup[t]),
        o = (0, j.y)((e) => e.setEditStateIdsForGroup),
        a = (0, j.y)((e) => e.setListing),
        u = n.useMemo(
            () => [
                ...l.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(r ?? []),
            ],
            [r, l],
        ),
        c = n.useCallback(() => {
            let e = (0, s.A)();
            o(t, (t) => [...(t ?? []), e]);
        }, [t, o]);
    return {
        editStateIds: u,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: n.useCallback(
            (e) => {
                let i = (0, s.A)();
                return (
                    o(t, (e) => [...(e ?? []), i]),
                    e.listings.forEach((t) => {
                        a(i, () => ({
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
                    i
                );
            },
            [t, o, a],
        ),
        removeEditStateId: n.useCallback(
            (e) => {
                o(t, (t) => (t ?? []).filter((t) => t !== e));
            },
            [t, o],
        ),
    };
}
