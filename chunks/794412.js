n.d(t, {
    od: () => ee,
    S_: () => $,
    nR: () => et,
    Ye: () => ei,
    Nz: () => Z,
    fv: () => en,
    i_: () => X,
    uM: () => eo,
    _2: () => es,
    w6: () => z,
    Ub: () => er,
    tV: () => ed,
    kG: () => ec,
    u$: () => ea,
    zN: () => el,
});
var i = n(435558),
    r = n.n(i),
    a = n(554146),
    s = n(873298),
    l = n(406935),
    o = n(157559),
    d = n(541689),
    c = n(517057),
    u = n(976860),
    _ = n(594061),
    E = n(95701),
    A = n(46653),
    f = n(734057),
    h = n(71393),
    I = n(576705),
    p = n(309010),
    m = n(967198),
    g = n(927813),
    T = n(811091),
    S = n(181079),
    N = n(266599),
    C = n(796637),
    O = n(93055),
    R = n(5180),
    L = n(635233),
    y = n(928424),
    D = n(858899),
    b = n(27232),
    v = n(792996),
    P = n(349828),
    M = n(652215),
    U = n(818348);
function w(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function G(e) {
    let t = m.A.getGuildId(),
        n = p.Ay.getChannelId();
    (0, R.ai)(t) &&
        null != n &&
        e.has(n) &&
        (0, u.pX)(
            M.BVt.CHANNEL(
                t,
                (function (e, t) {
                    let n = (0, C.g)(),
                        i = n
                            .getSections()
                            .flatMap((e, t) =>
                                r()
                                    .range(e)
                                    .map((e) => n.getChannelFromSectionRow(t, e)?.channel.id),
                            )
                            .filter((e) => null != e),
                        a = i.indexOf(e);
                    for (let e = a - 1; e >= 0; e--) if (!t.has(i[e])) return i[e];
                    return i.find((e) => !t.has(e));
                })(n, e),
            ),
        );
}
function x(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === s.Ip.CATEGORY) continue;
        let i = f.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && E.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = l.ZQ.create({ value: i.type })),
            !i.isPrivate() && !I.A.can(U.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function k(e, t) {
    let n = e[t];
    if (null == n || "0" === n.parentId) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = "0");
}
function F(e) {
    return r().filter(e, (e) => e.type !== s.Ip.CATEGORY).length;
}
function B(e, t) {
    if ((x(e), r().size(e) >= 200)) return { limit: 200, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, O.o9)();
    return t === s.Ip.CATEGORY || F(e) < n ? null : { limit: n, canUpsell: i };
}
function V(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, y.A)(t)
        : o.A.show({ title: v.intl.string(v.t["+XYXtZ"]), body: v.intl.formatToPlainString(v.t.JaIyFi, { count: t }) });
}
function H(e) {
    e?.status === 403 &&
        (_.wc.loadIfNecessary(!0).catch(M.tEg),
        o.A.show({ title: v.intl.string(v.t.iufib1), body: v.intl.string(v.t.eAn6z2) }));
}
function j(e) {
    let { update: t, batched: n = !1 } = e;
    return _.wc.updateAsync("favorites", t, n ? _.Sb.FREQUENT_USER_ACTION : _.Sb.INFREQUENT_USER_ACTION, H);
}
function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.default.fromTimestamp(Date.now());
    return ((e[n] = s.wL.create({ nickname: t, type: s.Ip.CATEGORY, position: w(e), parentId: "0" })), n);
}
function Y(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === s.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function K(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !S.A.isFavorite(e));
    if (0 === r.length) return;
    let a = !S.A.favoriteGuildEnabled;
    (await j({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? "0";
            for (let a of r) {
                let r = B(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || V(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = Y(e.favoriteChannels, t.categoryName) ?? W(e.favoriteChannels, t.categoryName);
                    let n = B(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return (i || V(n), !1);
                }
                let c = f.A.getChannel(a);
                ((e.favoriteChannels[a] = s.wL.create({
                    nickname: "",
                    type: s.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? l.ZQ.create({ value: c.type }) : void 0,
                    position: w(e.favoriteChannels),
                    parentId: d,
                })),
                    x(e.favoriteChannels),
                    k(e.favoriteChannels, a),
                    (o = !0),
                    (0, L.LO)(n, c?.type ?? null, F(e.favoriteChannels)));
            }
            o && a && !i && ((e.guildVisible = l._t.create({ value: !0 })), (0, L.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => S.A.isFavorite(e)) && (0, D.P0)({ text: v.intl.string(v.t["4tSWQg"]), icon: b.StarIcon }));
}
async function $(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await K(t, { parentId: n ?? null }, i);
}
function X(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = S.A.getFavorite(e);
    null != n &&
        (G(new Set([e])),
        j({
            update: (i) => {
                if ((delete i.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                    for (let t in i.favoriteChannels)
                        i.favoriteChannels[t].parentId === e && (i.favoriteChannels[t].parentId = "0");
                (x(i.favoriteChannels),
                    t &&
                        (0, L.TX)(
                            n.type === s.Ip.CATEGORY ? null : (f.A.getChannel(e)?.type ?? null),
                            F(i.favoriteChannels),
                        ));
            },
        }));
}
function z(e, t) {
    S.A.isFavorite(e) &&
        j({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
function q() {
    return S.A.pruneInactiveThreads;
}
let Q = 0,
    J = null;
async function Z() {
    let e = A.default.getId();
    if (!q() || (e === J && Date.now() - Q < g.A.Millis.DAY)) return;
    let t = S.A.pruneInactiveThreadsScope,
        n = t === P.l0 ? (0, N.PG)() : null;
    if (n?.length === 0) return;
    ((Q = Date.now()), (J = e));
    let i = { days: S.A.pruneInactiveThreadsDays, categoryIds: n };
    if ((await (0, N.FT)(n), !q() || S.A.pruneInactiveThreadsScope !== t)) return;
    let r = p.Ay.getChannelId(),
        a = (0, N.wm)(i)
            .map((e) => e.id)
            .filter((e) => e !== r);
    0 !== a.length &&
        (await (async function (e, t) {
            let n = new Set(e);
            await j({
                update: (e) => {
                    let i = (0, N.wm)(t).filter((t) => n.has(t.id) && null != e.favoriteChannels[t.id]);
                    if (0 === i.length) return !1;
                    for (let t of (G(new Set(i.map((e) => e.id))), i))
                        (delete e.favoriteChannels[t.id], (0, L.TX)(t.type, F(e.favoriteChannels)));
                },
            });
        })(a, i));
}
async function ee(e) {
    if (!(0, R.QN)(e)) return null;
    let t = e.trim(),
        n = T.default.fromTimestamp(Date.now());
    return (
        await j({
            update: (e) => {
                let i = B(e.favoriteChannels, s.Ip.CATEGORY);
                if (null != i) return (V(i), !1);
                W(e.favoriteChannels, t, n);
            },
        }),
        null != S.A.getFavorite(n) ? n : null
    );
}
async function et(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await K(t, { categoryName: n }, i);
}
function en(e) {
    X(e);
}
async function ei(e) {
    var t;
    let n,
        i = S.A.autoAddThreadsMode;
    if ("never" === i || S.A.isFavorite(e)) return;
    let r = f.A.getChannel(e);
    if (null == r || !r.isThread() || !(r.isPrivate() || I.A.can(U.xB.VIEW_CHANNEL, r))) return;
    let a =
        (i === P.Gv && null != (n = null != (t = r.guild_id) ? h.A.getGuild(t)?.name : null) && (0, R.QN)(n)
            ? n.trim()
            : null) ?? P.A;
    await K([e], { categoryName: a }, "auto_thread_join", { silent: !0 });
}
function er(e) {
    let t = "never" !== e,
        n = e === P.Gv;
    j({
        update: (i) => {
            if (
                (i.autoAddJoinedThreads === t && i.autoAddJoinedThreadsPerGuild === n) ||
                (e === P.AK &&
                    null ==
                        (function (e) {
                            let t = Y(e, P.A);
                            if (null != t) return t;
                            let n = B(e, s.Ip.CATEGORY);
                            return null != n ? void V(n) : W(e, P.A);
                        })(i.favoriteChannels))
            )
                return !1;
            ((i.autoAddJoinedThreads = t), (i.autoAddJoinedThreadsPerGuild = n));
        },
    });
}
function ea(e, t, n) {
    return j({
        update: (i) => {
            ((i.pruneInactiveThreads = l._t.create({ value: e })),
                e && ((i.pruneInactiveThreadsDays = t), (i.pruneAllFavoritedThreads = "all" === n)));
        },
    });
}
function es(e, t) {
    j({
        update: (n) => {
            let i = null != t ? [t] : Object.keys(n.favoriteChannels),
                r = !1;
            for (let t of i) {
                let i = n.favoriteChannels[t];
                null != i && i.type === s.Ip.CATEGORY && i.collapsed !== e && ((i.collapsed = e), (r = !0));
            }
            if (!r) return !1;
        },
        batched: !0,
    });
}
function el(e) {
    0 !== e.length &&
        j({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    (null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? "0"), k(t.favoriteChannels, e)));
                }
                (0, L.P)();
            },
        });
}
function eo() {
    (j({
        update: (e) => {
            ((e.favoriteChannels = {}),
                (e.guildVisible = void 0),
                (e.muted = !1),
                (e.autoAddJoinedThreads = !1),
                (e.autoAddJoinedThreadsPerGuild = !1),
                (e.pruneInactiveThreads = void 0),
                (e.pruneInactiveThreadsDays = 0),
                (e.pruneAllFavoritedThreads = !1));
        },
    }),
        (0, d.Ab)(),
        (0, c._0)(),
        (0, _.xB)(a.M.FAVORITES_GUILD_SUGGESTIONS));
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    j({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            ((n.guildVisible = l._t.create({ value: e })), (0, L.uS)(t, e));
        },
    });
}
function ec(e) {
    (ed(e, "settings_page"), !e && (0, R.ai)(m.A.getGuildId()) && (0, u.pX)(M.BVt.ME));
}
