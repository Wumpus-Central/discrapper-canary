n.d(t, {
    $7: () => G,
    $O: () => K,
    A_: () => ee,
    I8: () => k,
    It: () => V,
    Ts: () => en,
    UN: () => X,
    V_: () => Z,
    W5: () => B,
    Zw: () => J,
    bL: () => M,
    d0: () => el,
    hh: () => Q,
    j1: () => eo,
    lK: () => U,
    lZ: () => Y,
    rf: () => $,
    tx: () => j,
    xR: () => F,
}),
    n(228524),
    n(896048);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n(835245),
    l = n(317097),
    c = n(121894),
    u = n(311907),
    d = n(554375),
    f = n(686956),
    p = n(444927),
    _ = n(508675),
    h = n(371794),
    m = n(500345),
    g = n(579908),
    E = n(599941),
    b = n(636194),
    y = n(855918),
    O = n(739455),
    A = n(881288),
    v = n(244912),
    S = n(516917),
    I = n(846922),
    T = n(2242),
    C = n(652215),
    N = n(788868);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t, n) {
    let i = (0, I.y)((e) => e.setListing),
        a = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let a = null != (i = null == e ? void 0 : e[t]) ? i : n;
                    return Object.assign({}, e, { [t]: "function" == typeof r ? r(a) : r });
                });
            },
            [i, e, t, n],
        ),
        s = (0, I.y)((n) => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t];
        });
    return [void 0 !== s ? s : n, a];
}
function L(e, t) {
    let n = (0, u.bG)([b.A], () => b.A.getSubscriptionListing(e)),
        i = (0, p.A)(() => t);
    return r.useMemo(() => i(n), [n, i]);
}
function j(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : "";
    });
    return x(e, "name", t);
}
function M(e) {
    let t = L(e, (e) => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price;
    });
    return x(e, "priceTier", t);
}
function k(e) {
    let t = L(e, (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : "";
    });
    return x(e, "description", t);
}
function U(e, t) {
    let n = L(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, h.YE)(e.application_id, e.image_asset, t);
    });
    return x(e, "image", n);
}
function G(e, t) {
    let n = (0, A.A)(t, e);
    return x(
        e,
        "roleIcon",
        r.useMemo(() => {
            var e, t;
            return {
                icon: null != (e = null == n ? void 0 : n.icon) ? e : void 0,
                unicodeEmoji: null != (t = null == n ? void 0 : n.unicodeEmoji) ? t : void 0,
            };
        }, [n]),
    );
}
function V(e, t) {
    let n = (0, A.A)(t, e),
        i = (0, I.y)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor;
        }),
        a = (0, I.y)((t) => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon;
        });
    return r.useMemo(() => {
        let e = w({}, null != n ? n : S.K);
        if (void 0 !== a) {
            var t, r;
            (e.icon = null != (t = a.icon) ? t : ""), (e.unicodeEmoji = null != (r = a.unicodeEmoji) ? r : "");
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, l.Hl)(i))), e;
    }, [n, a, i]);
}
function F(e, t) {
    let n = (0, A.A)(t, e);
    return x(
        e,
        "roleColor",
        r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.color) ? e : C.TGz;
        }, [n]),
    );
}
function B(e, t) {
    let n = (0, A.A)(t, e);
    return x(
        e,
        "channelAccessFormat",
        r.useMemo(
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
let H = [];
function Y(e) {
    let t = L(e, (e) => (null == e ? H : e.role_benefits.benefits.filter(m.B1)));
    return x(e, "channelBenefits", t);
}
let W = [];
function K(e) {
    let t = L(e, (e) => (null == e ? W : e.role_benefits.benefits.filter(m.b1)));
    return x(e, "intangibleBenefits", t);
}
let z = new Set();
function q(e, t) {
    return 0 === e.length
        ? z
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  }),
          );
}
function X(e, t) {
    let n = (0, A.A)(t, e),
        i = (0, u.yK)([_.Ay], () => _.Ay.getGuildEmoji(t), [t]);
    return x(
        e,
        "tierEmojiIds",
        r.useMemo(() => (null == n ? z : q(i, n.id)), [i, n]),
    );
}
function Z(e) {
    var t;
    let n = (0, E.dL)(e),
        { selectedOption: r } = (0, v.A)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return x(e, "trialInterval", null != r ? r : null);
}
function Q(e) {
    var t;
    let n = (0, E.dL)(e);
    return x(e, "trialLimit", null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null);
}
function $(e) {
    return (0, I.y)((t) => void 0 !== t.listings[e]);
}
function J(e) {
    return (0, I.y)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function ee(e) {
    let t = L(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = x(e, "priceTier", void 0);
    return [
        r.useMemo(() => {
            var e, r, i, a, s;
            return {
                price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
                currency: null != (r = null == t ? void 0 : t.currency) ? r : C.Yri.USD,
                interval: null != (i = null == t ? void 0 : t.interval) ? i : N.WT.MONTH,
                interval_count: null != (a = null == t ? void 0 : t.interval_count) ? a : 1,
                id: null != (s = null == t ? void 0 : t.id) ? s : "",
            };
        }, [t, n]),
    ];
}
function et(e, t) {
    (0, c.r)(() => {
        I.y.setState((n) => ({ listings: D(w({}, n.listings), { [t]: n.listings[e] }) }));
    });
}
function en(e) {
    et("nonexistantEditStateId", e);
}
function er(e, t) {
    (0, c.r)(() => {
        I.y.setState((n) => ({
            listings: D(w({}, n.listings), {
                [t]: n.listings[e],
                [e]: void 0,
            }),
        }));
    });
}
async function ei(e) {
    let { guildId: t, editStateId: n } = e,
        r = b.A.getSubscriptionListing(n);
    a()(null != r, "listing doesnt exist");
    let i = r.role_id,
        o = r.id,
        l = I.y.getState().listings[n];
    a()(null != l, "edit state does not exist");
    let { roleColor: c, roleIcon: u, trialLimit: p, trialInterval: h, tierEmojiIds: m } = l;
    (void 0 !== c || void 0 !== u) &&
        (await f.A.updateRole(t, i, {
            color: c,
            icon: null == u ? void 0 : u.icon,
            unicodeEmoji: null == u ? void 0 : u.unicodeEmoji,
        }));
    let E = b.A.getSubscriptionTrial(o);
    if (
        ((null != p || null != h || (null != E && null == h)) &&
            (await g.J1(t, o, {
                trial: h,
                max_num_active_trial_users: p,
            })),
        void 0 !== m)
    ) {
        let e = q(_.Ay.getGuildEmoji(t), i),
            n = (0, s.difference)([...m], [...e]),
            r = (0, s.difference)([...e], [...m]),
            a = n.map((e) => {
                let n = _.Ay.getCustomEmojiById(e);
                if (null != n)
                    return (0, d.Cp)({
                        guildId: t,
                        emojiId: n.id,
                        roles: [...n.roles, i],
                    });
            }),
            o = r.map((e) => {
                let n = _.Ay.getCustomEmojiById(e);
                if (null == n) return;
                let r = n.roles.filter((e) => e !== i);
                return r.length > 0
                    ? (0, d.Cp)({
                          guildId: t,
                          emojiId: n.id,
                          roles: r,
                      })
                    : (0, d.ak)(t, n.id);
            });
        await Promise.all([...a, ...o]);
    }
}
function ea(e) {
    var t;
    let { guildId: n, editStateId: r, groupListingId: i } = e,
        o = b.A.getSubscriptionListing(r);
    a()(null != o, "listing doesnt exist");
    let l = r,
        c = I.y.getState().listings[l];
    a()(null != c, "edit state does not exist");
    let {
            name: u,
            description: d,
            channelBenefits: f,
            intangibleBenefits: p,
            priceTier: _,
            image: h,
            channelAccessFormat: E,
        } = c,
        y = {};
    if (
        (u !== o.name && (y.name = u),
        d !== o.description && (y.description = d),
        _ !== (null == (t = o.subscription_plans[0]) ? void 0 : t.price) && (y.priceTier = _),
        null != h && (y.image = h),
        null != E && (y.can_access_all_channels = E === I.h.ALL_CHANNELS_ACCESS),
        null != f || null != p)
    ) {
        let e = o.role_benefits.benefits.filter(m.B1),
            t = o.role_benefits.benefits.filter(m.b1);
        y.benefits = [...(null != f ? f : e), ...(null != p ? p : t)];
    }
    return (0, s.isEmpty)(y)
        ? o
        : g.vW({
              guildId: n,
              groupListingId: i,
              listingId: l,
              data: y,
          });
}
async function es(e) {
    let { guildId: t, editStateId: n, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        s = I.y.getState().listings[n];
    a()(null != s, "edit state does not exist");
    let {
        name: o,
        description: l,
        channelBenefits: c,
        intangibleBenefits: u,
        priceTier: d,
        image: f,
        channelAccessFormat: p,
    } = s;
    a()(null != o, "no name provided"),
        a()(null != l, "no description provided"),
        a()(null != d, "no priceTier provided"),
        a()(null != f, "no image provided");
    let _ = p === I.h.ALL_CHANNELS_ACCESS,
        h = r;
    null == h && (h = (await g.J4(t, {})).id), null != c && c.length > 0 && (await (0, O.pF)(t, c));
    let m = [...(null != c ? c : []), ...(null != u ? u : [])],
        E = (0, O.JH)(n, t);
    return g.K0({
        guildId: t,
        groupListingId: h,
        data: {
            can_access_all_channels: _,
            image: f,
            name: o,
            description: l,
            benefits: m,
            priceTier: d,
        },
        analyticsContext: E,
        onBeforeDispatchNewListing: i,
    });
}
function eo() {
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
                c = r,
                u = null != b.A.getSubscriptionListing(c);
            try {
                if ((t(!0), i(void 0), u))
                    a()(null != s, "groupListingId is null"),
                        await ea({
                            guildId: n,
                            editStateId: c,
                            groupListingId: s,
                        });
                else {
                    let e = await es({
                        guildId: n,
                        editStateId: c,
                        groupListingId: s,
                        onBeforeDispatchNewListing: o,
                    });
                    (c = e.id), er(r, c), null == l || l(e);
                }
                return (
                    await ei({
                        guildId: n,
                        editStateId: c,
                    }),
                    en(c),
                    !0
                );
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                i(e);
            } finally {
                t(!1);
            }
        }, []),
    };
}
function el(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, E.cY)(e, n),
        a = (0, I.y)((e) => e.editStateIdsForGroup[t]),
        s = (0, I.y)((e) => e.setEditStateIdsForGroup),
        l = (0, I.y)((e) => e.setListing),
        c = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != a ? a : []),
            ],
            [a, i],
        ),
        u = r.useCallback(() => {
            let e = (0, o.A)();
            s(t, (t) => [...(null != t ? t : []), e]);
        }, [t, s]);
    return {
        editStateIds: c,
        addNewEditStateId: u,
        addNewEditStateFromTemplate: r.useCallback(
            (e) => {
                let n = (0, o.A)();
                return (
                    s(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        l(n, () => ({
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
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: t.image,
                            },
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
                s(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, s],
        ),
    };
}
