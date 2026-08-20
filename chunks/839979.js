n.d(t, { B: () => ri, i: () => rl }), n(321073);
var l,
    i,
    s = n(477900),
    r = n(582128),
    a = n(435558),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    A = n(715828),
    g = n(312138),
    m = n(475825),
    f = n(707554),
    p = n(140735),
    C = n(38021),
    E = n(951001),
    x = n(820284),
    N = n(629675),
    _ = n(263619),
    I = n(192308),
    S = n(66834),
    b = n(999903),
    G = n(544169),
    j = n(16236),
    v = n(5180),
    R = n(770376),
    y = n(395504),
    M = n(924985),
    L = n(734057),
    T = n(769765),
    U = n(808728),
    D = n(71393),
    O = n(576705),
    P = n(967198),
    V = n(543465);
n(667532);
var w = n(95701),
    H = n(111613),
    B = n(652215);
function k(e, t) {
    return null != e && null != t && (e === t || ((0, w.tr)(e) && (0, w.tr)(t)) || ((0, w.ay)(e) && (0, w.ay)(t)));
}
function F(e, t, n, l) {
    let i = -1;
    if (
        (l.find((e, n) => {
            let { channel: l } = e;
            return l.id === t && ((i = n), !0);
        }),
        i < 0)
    )
        return null;
    for (let t = i; t >= 0 && t < l.length; t += e) {
        let e = l[t];
        if (k(e.channel.type, n)) return e;
    }
    return null;
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || k(e.type, l));
            })
            .find((t, n) => {
                let {
                    channel: { id: i },
                } = t;
                return null != e && i === e.id && ((l = n), !0);
            }),
        l
    );
}
function z(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function W(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = B.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? z(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = B.rbe,
                        i = n[(K(t, n, !0) ?? 0) + 1],
                        s = F(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (k(e.type, n.type)) return z(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(K(n, i, !0) ?? 0) - 1],
                l = F(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (k(t.channel.type, e.type) || (e.isGuildVocal() && (0, w.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(K(n, i, !0) ?? 0) - 1]),
            (l = F(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, w.tr)(e.type) && null != l && ((0, w.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(K(n, i, !0) ?? 0) + 1],
            l = F(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (k(t.channel.type, e.type) || ((0, w.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(K(n, i, !0) ?? 0) + 1],
        a = F(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var Y = n(488926);
let X = "DRAGGABLE_GUILD_CHANNEL";
function q(e, t) {
    if (null == e || null == t) return null;
    if (!(0, v.ai)(e)) return L.A.getChannel(t);
    let n = U.Ay.getChannels(e),
        l =
            n[U.I6].find((e) => e.channel.id === t) ??
            n[U.vM].find((e) => e.channel.id === t) ??
            n[B.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function Z(e, t) {
    if (null != e.parent_id) {
        let t = L.A.getChannel(e.parent_id);
        if (null != t) return O.A.can(B.xBc.MANAGE_CHANNELS, t);
    }
    return O.A.can(B.xBc.MANAGE_CHANNELS, t);
}
function J(e) {
    return (0, N.T)(
        X,
        {
            drop(e, t) {
                let n,
                    l = P.A.getGuildId(),
                    i = t.getItem(),
                    r = W(q(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = q(l, i.id);
                if (null == a) return;
                let o = T.A.getCategories(l),
                    d = D.A.getGuild(l);
                if (null == d) return;
                let c = (function (e, t, n, l) {
                    let i,
                        s,
                        r = [],
                        a = [],
                        o = l._categories;
                    function d(t) {
                        var n, l;
                        let a;
                        return (
                            (a =
                                null == i ||
                                null == s ||
                                ((n = i),
                                (l = s),
                                +(null == n || null == l || null == t[n] || t[n].channel !== e || null == t[l]))
                                    ? [...t]
                                    : H.Ay.moveItemFromTo(t, i, s)),
                            (r = r.concat(
                                H.Ay.calculatePositionDeltas({
                                    oldOrdering: t,
                                    newOrdering: a,
                                    idGetter: (e) => {
                                        let { channel: t } = e;
                                        return t.id;
                                    },
                                    existingPositionGetter: (e) => {
                                        let { channel: t } = e;
                                        return t.position;
                                    },
                                }),
                            )),
                            a
                        );
                    }
                    if (e.isCategory()) {
                        let n = [...o].slice(1);
                        (i = K(e, n)), (s = K(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, w.tr)(e.type) || e.isCategory()) {
                        let n = (0, b.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, w.tr)(t);
                        });
                        (i = K(e, n)), (s = K(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, b.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = K(e, n)), (s = K(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, q(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, v.ai)(l)) return void (0, j.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = L.A.getChannel(t);
                            if (null == n) return !1;
                            let l = L.A.getChannel(n.parent_id);
                            return n.type === B.rbe.GUILD_CATEGORY || null == l
                                ? O.A.can(B.xBc.MANAGE_CHANNELS, d)
                                : O.A.can(B.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = L.A.getChannel(e.parent_id);
                                if (!(null != t && O.A.can(B.xBc.MANAGE_ROLES, a) && O.A.can(B.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = Y.r(a, t),
                                    i = Y.r(a, L.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = L.A.getChannel(n.parent_id);
                        null != e &&
                            (0, I.openModal)((t) =>
                                (0, s.jsx)(G.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), S.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && S.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else S.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = L.A.getChannel(n.id);
                if (null == l) return !1;
                let i = W(L.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, v.ai)(P.A.getGuildId())) return !0;
                if (V.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = D.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = L.A.getChannel(i.parentId),
                    a = L.A.getChannel(l.parent_id),
                    o = O.A.can(B.xBc.MANAGE_CHANNELS, s),
                    d = null != a ? O.A.can(B.xBc.MANAGE_CHANNELS, a) : o,
                    c = null != r ? O.A.can(B.xBc.MANAGE_CHANNELS, r) : o;
                return d && c;
            },
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null,
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                  };
        },
    )(
        (0, _.I)(
            X,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, v.ai)(P.A.getGuildId())) return !0;
                    let l = D.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, y.WW)(l.id) && Z(t, l)
                            ? ((0, R.A)() &&
                                  (0, I.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : V.Ay.isFavorite(l.id, t.id) && Z(t, l)
                              ? ((0, I.openModalLazy)(async () => {
                                    let { default: e } = await n.e("280545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : Z(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = P.A.getGuildId(),
                        a = T.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, b.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === B.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, v.ai)(r) ||
                                      (O.A.can(B.xBc.MANAGE_CHANNELS, t) && O.A.can(B.xBc.VIEW_CHANNEL, t))
                                : !M.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var $ = n(775602),
    Q = n(793574),
    ee = n(688810),
    et = n(915089),
    en = n(554146),
    el = n(866665),
    ei = n(939249),
    es = n(789645),
    er = n(812993),
    ea = n(687966),
    eo = n(131607),
    ed = n(652793),
    ec = n(976860),
    eu = n(746080),
    eh = n(49999),
    eA = n(667378),
    eg = n(375708),
    em = n(275833),
    ef = n(964306);
let ep = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, eo.ww)([en.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === en.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(eh.i.USER_DISMISS), (0, ec.pX)(B.BVt.CHANNEL(t, eu.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: em.c,
            children: [
                (0, s.jsx)("div", {
                    className: ef.Xs,
                    children: (0, s.jsx)(el.m, {
                        text: eg.intl.string(eg.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ei.D, {
                            onClick: c,
                            "aria-label": eg.intl.string(eg.t.fgq1gs),
                            children: (0, s.jsx)(es.P, { size: "xs", color: "currentColor", className: ef.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: ef.yW,
                        children: (0, s.jsx)(er.Lp, {
                            disableColor: !0,
                            text: eg.intl.string(eg.t.y2b7CA),
                            className: em.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(ed.G, {
        className: ef.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(ea.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: eg.intl.string(eA.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eC = n(361158),
    eE = n(270533),
    ex = n(186111),
    eN = n(917782);
let e_ = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, I.useHasAnyModalOpen)(),
        i = (0, u.bG)([ex.A], () => ex.A.hasLayers()),
        a = (0, eC.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, eo.ww)([en.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === en.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, eo.ww)(l || i || a || !c ? [] : [en.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(eh.i.USER_DISMISS), (0, ec.pX)(B.BVt.CHANNEL(t, eu.VV.GAME_SERVERS));
        }, [t, g]),
        f = r.useRef(null),
        p = h === en.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(eE.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ed.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, s.jsx)(ea.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: eg.intl.string(eA.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(er.Lp, { disableColor: !0, text: eg.intl.string(eg.t.y2b7CA), className: eN.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eI = n(177953),
    eS = n(533550),
    eb = n(624458),
    eG = n(844944),
    ej = n(513461),
    ev = n(663997),
    eR = n(221950);
function ey(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([O.A], () => O.A.can(B.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([eG.A], () => eG.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(B.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eb.A.fetchGuildJoinRequests({ guildId: t.id, status: ej.B5.SUBMITTED, limit: ev.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, eR.aZ)(t.id);
        }, [t.id]),
        d = (0, eS.q8)(t.id, en.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(ed.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(eI.n, { size: "md", color: "currentColor", className: e }),
            text: eg.intl.string(eg.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(er.hV, { count: a }) : null,
        }),
    });
}
var eM = n(632015);
function eL(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ed.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eM.f, { size: "md", color: "currentColor", className: e }),
        text: eg.intl.string(eg.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.GUILD_SPACE));
        },
    });
}
var eT = n(581007),
    eU = n(522435),
    eD = n(285406),
    eO = n(582904),
    eP = n(419534),
    eV = n(503698),
    ew = n.n(eV),
    eH = n(695366),
    eB = n(104510),
    ek = n(544048),
    eF = n(868652),
    eK = n(379229),
    ez = n(482487),
    eW = n(914732),
    eY = n(828162),
    eX = n(794176),
    eq = n(247806);
function eZ(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eK.cD.WARNING:
            return (0, s.jsx)(eH.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eK.cD.UNREAD:
            return (0, s.jsx)(er.hV, { count: t.count });
        default:
            return null;
    }
}
let eJ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e$ = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eW.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, ez.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, eF.Zm)(t),
                    (0, eY.A)(t, Q.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eh.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            g = (0, u.bG)([ex.A], () => ex.A.hasLayers()),
            m = (0, eC.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || g || m,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case eK.o.LEVEL_REACHED:
                        return (0, s.jsx)(eE.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(eE.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(eE.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(eE.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(eE.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.EXPIRING_PERK:
                        return (0, s.jsx)(eE.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eK.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(eE.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(eE.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case eK.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(eE.Ns, { guildId: t, channelRowRef: c, ...i.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, i?.popout, c, f]),
            [C, E] = r.useState(null);
        r.useEffect(() => {
            i?.popout == null && E(null);
        }, [i?.popout]);
        let x = r.useCallback((e) => {
            E(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(ed.G, {
                    ref: c,
                    className: eq.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eB._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: eq.Fi,
                            children: (0, s.jsx)(ek.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: eq.UU,
                                sceneSegments: eJ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ew()({ [eq.A7]: i?.showUnread === !0 }),
                        children: eg.intl.string(eX.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(er.Lp, {
                              text: eg.intl.string(eg.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(eZ, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var eQ = n(296704),
    e0 = n(834730),
    e1 = n(717421),
    e3 = n(442433),
    e2 = n(230135),
    e9 = n(228366);
let e7 = {};
class e6 extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e7 = e);
    }
    getState() {
        return e7;
    }
    getCountForGuild(e) {
        return e7[e];
    }
}
let e5 = new e6(e9.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e7 = { ...e7, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e7 = {};
    },
});
var e8 = n(147925),
    e4 = n(363487),
    te = n(568065);
function tt(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(B.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : B.M2T[B.TVA.TIER_3],
            n = Object.values(te.sy),
            l = Object.values(te.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tn = n(196577);
let tl = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e1.z)(
            () => ({ width: n === i ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, i],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: tn.hQ,
            children: [
                (0, s.jsx)("div", { className: ew()(tn.L$, a) }),
                (0, s.jsx)(eQ.animated.div, { className: ew()(tn.qB, { [tn.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: tn.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tn.Ui,
                            children: [
                                (0, s.jsx)(e0.E, {
                                    className: tn.Qq,
                                    variant: "text-xs/semibold",
                                    children: eg.intl.string(eX.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(e0.E, {
                                        className: tn.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: tn.Ui,
                            children: [
                                (0, s.jsx)(e0.E, {
                                    className: ew()(tn.Qq, tn.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? eg.intl.formatToPlainString(eX.default["Ehpq+7"], { appliedBoostCount: n })
                                        : eg.intl.formatToPlainString(eX.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(e8.A, {
                                    width: 12,
                                    height: 12,
                                    direction: e8.A.Directions.RIGHT,
                                    className: ew()(tn.Qq, tn.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function ti(e) {
    let { guild: t, withMargin: l } = e,
        i = tt(t),
        a = (0, e4.A)(t.id),
        o = r.useCallback(() => {
            (0, eY.A)(t.id, Q.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([e5], () => e5.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e2.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e3.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(ei.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: ew()(tn.kL, { [tn.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(tl, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function ts(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(ti, { guild: t, withMargin: n });
}
tl.displayName = "GuildPowerupsProgressBarUI";
var tr = n(455234),
    ta = n(181079),
    to = n(607567),
    td = n(403362),
    tc = n(996439),
    tu = n(935208),
    th = n(63995),
    tA = n(518769);
function tg(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, to.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tm = n(787541),
    tf = n(79858),
    tp = n(600761),
    tC = n(72314),
    tE = n(297469),
    tx = n(960755),
    tN = n(633965),
    t_ = n(702841),
    tI = n(41200),
    tS = n(831617),
    tb = n(589603),
    tG = n(496767),
    tj = n(134413),
    tv = n(701785),
    tR = n(101611),
    ty = n(473529),
    tM = n(978165),
    tL = n(960253),
    tT = n(770666),
    tU = n(508654),
    tD = n(470452),
    tO = n(521427);
let tP = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tV = n(871123),
    tw = n(683180),
    tH = n(281405),
    tB = n(3026),
    tk = n(821609),
    tF = n(499373),
    tK = n(259678),
    tz = n(847374),
    tW = n(285796),
    tY = n(983851),
    tX = n(914430),
    tq = n(47167),
    tZ = n(485947),
    tJ = n(970853),
    t$ = n(551851),
    tQ = n(391507);
function t0(e) {
    e.stopPropagation();
}
function t1(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(el.m, {
        text: t,
        children: (0, s.jsx)(ei.D, {
            className: ew()(tQ.c9, tQ.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tF.T, { size: "xs", color: "currentColor", className: tQ.hs }),
        }),
    });
}
let t3 = J(
        r.memo(function (e) {
            let t,
                {
                    channel: l,
                    connectChannelDragSource: i,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: A,
                    children: g,
                } = e,
                m = (0, u.bG)([V.Ay], () => V.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([M.A], () => M.A.isCollapsed(l.id)),
                p = (0, u.bG)([O.A], () => O.A.can(B.xBc.MANAGE_CHANNELS, l)),
                C = (0, tq.Ay)(l);
            t = null != h ? (c > h ? tQ.mU : tQ.TR) : tQ.fx;
            let E = r.useCallback(() => {
                    f ? (0, tX.fh)(l.id) : (0, tX.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = D.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, e3.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("926132"),
                                        n.e("391763"),
                                        n.e("238730"),
                                        n.e("535321"),
                                        n.e("603998"),
                                        n.e("550033"),
                                        n.e("412255"),
                                        n.e("63340"),
                                        n.e("430997"),
                                        n.e("379995"),
                                        n.e("591377"),
                                        n.e("35723"),
                                        n.e("566378"),
                                        n.e("715675"),
                                    ]).then(n.bind(n, 740438));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = r.useCallback(() => {
                    let e = l.type === B.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, I.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("377476"),
                                n.e("766811"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("203589"),
                                n.e("692513"),
                                n.e("589916"),
                                n.e("460773"),
                                n.e("208018"),
                                n.e("120379"),
                                n.e("669990"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("358608"),
                                n.e("528034"),
                            ]).then(n.bind(n, 333369));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                _ = (0, tJ.A)(l);
            null == _ && p && !o && (_ = { label: eg.intl.string(eg.t["fUYU+j"]), perform: N });
            let { role: S, tabIndex: b, ...G } = (0, d.rm)(l.id),
                j = r.useRef(null),
                v = r.useRef(null),
                R = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tK.vN, {
                            focusTarget: j,
                            ringTarget: v,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: v,
                                className: ew()(tQ.Ki, tQ.iE, { [tQ.yZ]: f, [tQ.SU]: m, [tQ.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ei.D, {
                                        innerRef: j,
                                        className: tQ.rb,
                                        tabIndex: b,
                                        ...G,
                                        onClick: E,
                                        "aria-label": eg.intl.formatToPlainString(eg.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tZ.A, {
                                                className: tQ.UU,
                                                children: (0, s.jsx)(tB.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tz.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: tQ.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t0,
                                        className: tQ.Y_,
                                        children:
                                            null != _
                                                ? (0, s.jsx)(t1, { label: _.label, onClick: _.perform, tabIndex: b })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != i ? a(i(R)) : R;
        }),
    ),
    t2 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ew()(l, tQ.fx),
            children: (0, s.jsxs)("div", {
                className: ew()(tQ.Ki, tQ._V),
                children: [
                    (0, s.jsx)("div", {
                        className: tQ.rb,
                        children: (0, s.jsx)(tZ.A, { className: tQ.UU, children: (0, s.jsx)(tB.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(el.m, {
                              asContainer: !0,
                              text: eg.intl.string(eg.t["5qNmsU"]),
                              children: (0, s.jsx)(ei.D, {
                                  className: tQ.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tW.a, { size: "md", color: "currentColor", className: tQ.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t9 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t$.A], () => t$.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), e9.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), e9.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: tQ.oA,
            children: (0, s.jsx)(tk.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: tY.H,
                text: n ? eg.intl.string(eg.t["/eB9Bg"]) : eg.intl.string(eg.t.Q2gPWl),
            }),
        });
    }),
    t7 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t$.A], () => t$.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === B.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: tQ.fx,
                      children: (0, s.jsx)("div", {
                          className: ew()(tQ.Ki, tQ._V),
                          children: (0, s.jsx)(tZ.A, {
                              className: tQ.UU,
                              children: (0, s.jsx)(tB.A, { children: eg.intl.string(eg.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t6 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tq.Ay)(t);
        return (0, s.jsx)("li", {
            className: tQ.fx,
            children: (0, s.jsx)("div", {
                className: ew()(tQ.Ki, tQ._V),
                children: (0, s.jsx)(tZ.A, { className: tQ.UU, children: (0, s.jsx)(tB.A, { children: n }) }),
            }),
        });
    });
var t5 = n(728321),
    t8 = n(244083);
let t4 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var ne = n(906659);
let nt = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: l,
            guildChannelsVersion: i,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = l.getCategoryFromSection(l.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != a && i.includes(a) && (t = (0, eP.xb)(l)), (0, eP.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tE.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tE.bK:
            if (n.features.has(B.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tE.HP:
            return (0, s.jsx)(t2, { name: eg.intl.string(eg.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t2, { name: eg.intl.string(eg.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: ne.ts }), (0, s.jsx)(t7, { category: e, channel: n })],
            });
        }
        case tE.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t3, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t5.A, {
                    inlineSpecs: t4,
                    arrowAlignment: t8.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t3, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nn = n(104171),
    nl = n(186369),
    ni = n(970812),
    ns = n(871237);
function nr(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tE.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tH.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tE.PU ||
                ((0, v.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tE.HP ||
                      (!!t && n !== tE.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tE.PU &&
            n !== tE.HP &&
            n !== tE.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let na = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t9, { category: l });
    }),
    no = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nr(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tE.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, y.jN)(a),
            { enableWaveformIcon: f } = (0, nl.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([V.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = V.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, ns.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(na, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: ne.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: ne.qz,
                          children: (0, s.jsx)(nn.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(ni.A, { color: "currentColor", className: ew()(e, ef.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nd = n(625903),
    nc = n(283973),
    nu = n(933832),
    nh = n(435183),
    nA = n(698441),
    ng = n(855687),
    nm = n(816662),
    nf = n(446600),
    np = n(616356);
function nC(e, t, n) {
    return null != t && !!t && !k(n, e.type);
}
function nE(e, t) {
    return null == t ? ef.fx : e > t ? ef.mU : ef.TR;
}
function nx(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [O.A, P.A],
        () =>
            n ||
            (0, v.ai)(P.A.getGuildId()) ||
            (!O.A.can(B.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(B.xBc.MANAGE_ROLES, t) &&
                !O.A.can(B.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, w.tr)(t.type) && !O.A.can(B.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(B.xBc.CONNECT, t)) ||
            !w.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(el.m, {
              asContainer: !0,
              text: eg.intl.string(eg.t["3gUsJb"]),
              children: (0, s.jsx)(ei.D, {
                  className: ew()(ef.Xs, i ? ef.Tf : void 0, r ? ef.bw : ef.UI),
                  onClick: function () {
                      nh.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": eg.intl.string(eg.t["3gUsJb"]),
                  children: (0, s.jsx)(nd.SettingsIcon, { size: "xs", color: "currentColor", className: ef.gE }),
              }),
          });
}
function nN(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([D.A], () => D.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nf.A], () => nf.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nA.Ay], () => nA.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([O.A], () => (0, ng.K)(O.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === B.rbe.GUILD_VOICE ? eg.intl.string(eg.t["EE+P0H"]) : eg.intl.string(eg.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nc.R, { size: "xs", className: ef.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(t5.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(el.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(ei.D, {
                className: ew()(ef.Xs, o ? ef.Tf : void 0, d ? ef.bw : ef.UI),
                onClick: function () {
                    if (null != c) {
                        let e = np.A.getAllActiveStreams().filter(
                            (e) => e.state !== B.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("22547"),
                            ]).then(n.bind(n, 1310));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: B.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: A,
                                });
                        });
                    }
                },
                tabIndex: a,
                "aria-label": m,
                children: p,
            }),
        })
    );
}
function n_(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: eg.intl.string(eg.t["ROh4T+"]),
        children: (0, s.jsx)(ei.D, {
            className: ef.Xs,
            onClick: function () {
                (0, nm.Ol)(t.guild_id, t.id);
            },
            "aria-label": eg.intl.string(eg.t["ROh4T+"]),
            children: (0, s.jsx)(es.P, { size: "xs", color: "currentColor", className: ef.gE }),
        }),
    });
}
function nI(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: eg.intl.string(eg.t["N2c/Un"]),
        children: (0, s.jsx)(ei.D, {
            className: ef.Xs,
            onClick: function () {
                (0, nm.jA)(t.guild_id, t.id, !0, { section: B.JJy.CHANNEL_LIST });
            },
            "aria-label": eg.intl.string(eg.t["N2c/Un"]),
            children: (0, s.jsx)(nu.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ef.gE }),
        }),
    });
}
class nS extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nx, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nN, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(n_, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nI, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nE(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nC(e, t, n);
    }
}
var nb = n(166444),
    nG = n(790782);
let nj = J(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: i,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: A,
            tabIndex: g,
        } = e,
        m = (0, u.bG)([L.A, U.Ay], () => {
            let e = U.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : L.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([L.A], () => L.A.getChannel(m?.parent_id)),
        p = l === m?.id,
        C = (0, tq.Ay)(m),
        E = (0, u.bG)([O.A], () =>
            null != f ? O.A.can(B.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(B.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, e3.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("729559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: m });
                    });
            },
            [m],
        );
    if (null == m) return null;
    let N = nE(i, c),
        _ = nC(m, o, d),
        I = (0, s.jsx)("div", {
            className: ew()(N, { [ef.r9]: _, [ef.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nb.Ay, {
                className: ef.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nG.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nN, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nx, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (I = A(h(I))), I;
});
var nv = n(34188),
    nR = n(733391),
    ny = n(832163),
    nM = n(517907),
    nL = n(31969),
    nT = n(44724),
    nU = n(849134),
    nD = n(770178),
    nO = n(307076);
let nP = Math.ceil(Math.sqrt(115200)),
    nV = (nP - 240) / 2,
    nw = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nD.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, e1.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            u = r.useCallback(
                (e, t) => {
                    c({ shineSpring: 1, delay: t, reset: !0, loop: { reset: !0, delay: 1600 } });
                },
                [c],
            ),
            h = r.useCallback(() => {
                c({ shineSpring: 0, immediate: !0, loop: !1 });
            }, [c]),
            A = r.useMemo(
                () =>
                    n(
                        (0, s.jsx)(eQ.animated.div, {
                            className: nO.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nP}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nO.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nV}px` },
                children: A,
            })
        );
    });
var nH = n(371794),
    nB = n(240248),
    nk = n(998218),
    nF = n(592278),
    nK = n(672812),
    nz = n(427797);
let nW = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, u.bG)([ex.A], () => ex.A.hasLayers()),
        c = (0, eC.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nR.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([ny.A], () => ny.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, eo.x_)(en.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === en.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tV.nY)(t.id),
        E = (0, nL.F)("storefront_badge", { applicationId: C }),
        x = (0, nM.A)({ applicationId: C, location: "game_shop_channel_row" }),
        N = null;
    p ? (N = eg.intl.string(eg.t.y2b7CA)) : x && (N = eg.intl.string(nF.default.hriMCc)), null != E && (N = E.text);
    let [_, S] = (0, eo.x_)(en.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = _ === en.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eh.i.INDIRECT_ACTION), b && S(eh.i.INDIRECT_ACTION));
    }, [f, S, l, p, b]);
    let G = r.useCallback(() => {
            f(eh.i.TAKE_ACTION), S(eh.i.TAKE_ACTION);
            let e = (0, tV.mq)(t.id),
                n = ny.A.getStorefrontState(e)?.activePage ?? 0;
            (0, ec.pX)(B.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, S]),
        j = r.useCallback(() => {
            (0, nT.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        v = r.useCallback(() => {
            S(eh.i.USER_DISMISS);
        }, [S]),
        R = r.useCallback(
            (e) => {
                null != t &&
                    (0, e3.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        y = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        M = r.useCallback(
            (e) =>
                (0, s.jsx)(ed.G, {
                    background: (0, s.jsx)("div", { className: nz.D }),
                    innerClassName: nz.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nv.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(e0.E, {
                        variant: "text-md/medium",
                        className: nK.UU,
                        children: eg.intl.string(eg.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: j,
                    onClick: G,
                    onContextMenu: R,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != N && (0, s.jsx)(er.Lp, { text: N, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, j, G, R, N],
        ),
        L = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nk.A.toURLSafe((0, nH.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nk.A.toURLSafe((0, nH.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: eg.intl.string(eg.t["7PvvS9"]),
                        body: eg.intl.formatToPlainString(eg.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, nB.uJ)(e) && (0, nB.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nB.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        T = r.useCallback(
            () =>
                b && null != L
                    ? (0, s.jsx)(nU.A, {
                          onActionClick: G,
                          onActionMouseDown: j,
                          onRender: y,
                          onRequestClose: v,
                          targetElementRef: a,
                          ...L,
                      })
                    : null,
            [b, L, G, j, y, v],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nw, { ref: i, children: M }), !o && !d && !c && T()] });
});
var nY = n(740426),
    nX = n(826673),
    nq = n(591552),
    nZ = n(202776),
    nJ = n(454058),
    n$ = n(573163);
function nQ(e) {
    let { guild: t, selected: l } = e,
        i = (0, nZ.A)(t),
        a = (0, nX.HX)(en.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, t_.yK)([nJ.A], () =>
            Array.from(nJ.A.getNewChannelIds(t.id)).filter((e) => nJ.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, t_.bG)([n$.Ay], () => n$.Ay.hasUnread(t.id, nG.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tE.rR,
        u = (0, t_.bG)([nq.A, n$.Ay], () => {
            let e = nq.A.lastFetchedAt(t.id),
                n = n$.Ay.lastMessageId(t.id, nG.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tu.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, ec.pX)(B.BVt.CHANNEL(t.id, i ? eu.VV.CUSTOMIZE_COMMUNITY : eu.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, e3.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        m = null;
    return (
        (a && !d && !c) ||
            l ||
            u ||
            (m = (0, s.jsx)(er.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: eg.intl.string(eg.t.y2b7CA),
            })),
        (0, s.jsx)(ed.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nY.k, { size: "md", color: "currentColor", className: e }),
            text: i ? eg.intl.string(eg.t.h9mGOP) : eg.intl.string(eg.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n0 = n(855473);
function n1(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ed.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n0.Z, { size: "md", color: "currentColor", className: e }),
        text: eg.intl.string(eg.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.GUILD_HOME));
        },
    });
}
var n3 = n(297264),
    n2 = n(5373),
    n9 = n(65995),
    n7 = n(195702);
function n6(e, t) {
    return (0, s.jsx)(e0.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n5 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tv.h], () => tv.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n9.A], () => n9.A.getCompletedActions(t.id)),
        i = r.useMemo(() => {
            if (null == n || null == l) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != l[t.channelId] && e++;
                }),
                e
            );
        }, [l, n]),
        a = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, s.jsxs)("li", {
        children: [
            (0, s.jsxs)(ei.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: n7.G9,
                onClick: function () {
                    (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n7.A1,
                        children: [
                            (0, s.jsx)(n3.D, { variant: "heading-sm/bold", children: eg.intl.string(eg.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n7.Ib,
                                children: [
                                    (0, s.jsx)(e0.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n7.Cv,
                                        children: eg.intl.format(eg.t.eqZ1lW, {
                                            numberHook: n6,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(e8.A, {
                                        className: n7.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e8.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n2.i, {
                        className: n7.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n7.yF }),
        ],
    });
});
var n8 = n(581925);
function n4(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ed.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n8.L, { size: "md", color: "currentColor", className: e }),
        text: eg.intl.string(eg.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var le = n(514179);
function lt(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ed.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(le.A, { className: e }),
        text: eg.intl.string(eg.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e3.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var ln = n(506774),
    ll = n(95561),
    li = n(289397),
    ls = n(486418),
    lr = n(575926),
    la = n(440293),
    lo = n(174459),
    ld = n(634654),
    lc = n(888918);
function lu(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, la.w)(t),
        r = (0, t_.bG)([D.A], () => D.A.getGuild(t)),
        a = r?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === ln.w.get(ld.bJ, "false"),
        d = (0, t_.bG)([$.Ay], () => $.Ay.useReducedMotion);
    return (0, s.jsx)(ed.G, {
        id: `shop-${t}`,
        className: ew()(lc.A2, { [lc.wH]: n, [lc.ST]: o }),
        innerClassName: lc.LE,
        renderIcon: (e) => (0, s.jsx)(lr.h, { width: 20, height: 20, className: ew()([e, lc.sV]) }),
        text: eg.intl.string(eg.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lc.ai,
            children: [
                d
                    ? (0, s.jsx)(er.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: eg.intl.string(eg.t.y2b7CA),
                          className: lc.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, li.n)("server_products/storefront/money.gif"),
                          className: lc.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ei.D, {
                        className: lc.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nX.Dr)(en.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lo.default.track(B.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ll.H$)(t),
                                    action_taken: ld.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, ec.bG)(B.BVt.CHANNEL(t, U.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": eg.intl.string(eg.t.cpT0Cq),
                        children: (0, s.jsx)(tW.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lh(e) {
    let { guild: t, selected: l } = e;
    function i() {
        ln.w.set(ld.bJ, "true"), (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.GUILD_SHOP));
    }
    return (0, ls.P)(t)
        ? (0, s.jsx)(lu, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ed.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lr.h, { width: 20, height: 20, className: e }),
              text: eg.intl.string(eg.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e3.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lA = n(308528),
    lg = n(534890),
    lm = n(262763),
    lf = n(499211),
    lp = n(406704),
    lC = n(747926),
    lE = n(977997),
    lx = n(807632),
    lN = n(37411);
function l_(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lx.YG)(t),
        i = (0, lx.IO)(t),
        r = (0, lp._M)(t);
    return l && i && r ? (0, s.jsx)(lI, { thread: t, tabIndex: n }) : null;
}
function lI(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lE.A], () => lE.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lf.A)(t.id),
        a = r.useCallback(() => {
            lm.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lC.JA)(t, !0, lN.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(el.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t["96ANUN"]),
                children: (0, s.jsx)(ei.D, {
                    className: ef.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": eg.intl.string(eg.t["96ANUN"]),
                    children: (0, s.jsx)(tY.H, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            }),
            (0, s.jsx)(el.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t.ZXxLQg),
                children: (0, s.jsx)(ei.D, {
                    className: ef.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": eg.intl.string(eg.t.ZXxLQg),
                    children: (0, s.jsx)(lg.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            }),
        ],
    });
}
var lS = n(897898),
    lb = n(152007);
function lG(e) {
    return null != e && e > 0;
}
var lj = n(405018),
    lv = n(428689),
    lR = n(525093);
function ly(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lR.iE,
        children: [
            (0, s.jsxs)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ew()(lR.VV, { [lR.Ki]: l, [lR.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lv.VideoIcon, { size: "md", color: "currentColor", className: lR.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ew()(lR.X5, { [lR.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lM(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lj.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(ly, { users: l, total: r, videoLimit: a })
    );
}
var lL = n(146630);
function lT(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lL.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(er.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lU = n(588224),
    lD = n(447199);
function lO(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lG(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: ef.yW,
              children: [
                  a ? (0, s.jsx)(lM, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lT, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lP(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ew()(lD.GI, { [lD.a7]: n }, { [lD.BJ]: l }), style: t },
        { density: r } = (0, C.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...i,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, s.jsxs)("svg", {
                ...i,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, s.jsxs)("svg", {
                ...i,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let lV = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([to.Ay], () => to.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lE.A], () => lE.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([n$.Ay], () => ({
                unread: n$.Ay.hasUnread(t.id),
                mentionCount: n$.Ay.getMentionCount(t.id),
                isMentionLowImportance: n$.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lb.A], () => lb.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lC.JA)(t, !e.shiftKey, lN.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lA.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    (0, lS.A)(e, t);
                },
                [t],
            ),
            x = r.useCallback(
                (e) => {
                    let l = L.A.getChannel(t.id);
                    null != l &&
                        (0, e3.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("391763"),
                                n.e("238730"),
                                n.e("691671"),
                                n.e("603998"),
                                n.e("947502"),
                                n.e("343266"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("896804"),
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: l });
                        });
                },
                [t.id],
            ),
            N = null == c ? 0 : c.length,
            { role: _, ...I } = (0, d.rm)(t.id),
            S = r.useRef(null),
            b =
                g > 0
                    ? eg.intl.formatToPlainString(eg.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? eg.intl.formatToPlainString(eg.t.YlVvmc, { channelName: t.name })
                      : eg.intl.formatToPlainString(eg.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: _,
            className: ew()(ef.fx, { [ef.wH]: l }),
            children: [
                (0, s.jsx)(lP, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lP, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tK.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ew()(ef.Ki, nK.iE, nK.ZS, {
                            [nK.J1]: l,
                            [nK.F4]: !l && f,
                            [nK.V2]: !f && !l && A,
                            [nK.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: x,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: ew()(nK.gy, nK.WS) }),
                            (0, s.jsx)(ei.D, {
                                ...I,
                                innerRef: S,
                                className: nK.nf,
                                onClick: p,
                                onAuxClick: E,
                                "aria-label": b,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ew()(nK.Y5, nK.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tB.A, {
                                            className: nK.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(e0.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: t.name,
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nK.Y_,
                                            onClick: nb.dG,
                                            onKeyDown: nb.dG,
                                            children: [
                                                (0, s.jsx)(lO, {
                                                    thread: t,
                                                    countInVoice: N,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(l_, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lU.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lw = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, tq.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([L.A], () => i.map((e) => L.A.getChannel(e)).filter(td.Vq), [i]),
            c = (0, u.bG)([to.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = to.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lD.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": eg.intl.formatToPlainString(eg.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ew()(lD.eh, { [lD.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lV,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: l === e.id,
                                isLast: t === d.length - 1,
                                withGuildIcon: r,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        });
    });
var lH = n(922016),
    lB = n(367513),
    lk = n(296216),
    lF = n(963027),
    lK = n(202384),
    lz = n(51758),
    lW = n(139033),
    lY = n(305866),
    lX = n(123292),
    lq = n(830215),
    lZ = n(315982),
    lJ = n(480900),
    l$ = n(557722),
    lQ = n(834942),
    l0 = n(287809),
    l1 = n(53516),
    l3 = n(648580),
    l2 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l9 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, et.GV)(),
        a = (0, u.bG)([lQ.A], () => lQ.A.getCheck(l), [l]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: h,
            verificationRole: A,
        } = a,
        {
            header: g,
            body: m,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = eg.intl.string(eg.t["6zY8BI"]),
                    {
                        notClaimed: n,
                        notPhoneVerified: l,
                        notEmailVerified: i,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: eg.intl.string(eg.t.IRxUlG), buttonText: eg.intl.string(eg.t.fiNVin) }
                    : l
                      ? { header: e, body: eg.intl.string(eg.t.vW8iUF), buttonText: eg.intl.string(eg.t["50gfOv"]) }
                      : i
                        ? { header: e, body: eg.intl.string(eg.t.vdSOpz), buttonText: eg.intl.string(eg.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: eg.intl.formatToPlainString(eg.t.v1ktYb, { min: B.$8o.MEMBER_AGE }),
                                buttonText: eg.intl.string(eg.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: eg.intl.formatToPlainString(eg.t.sncw41, { min: B.$8o.ACCOUNT_AGE }),
                                  buttonText: eg.intl.string(eg.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: eg.intl.format(eg.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: eg.intl.string(eg.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == m
        ? null
        : (0, s.jsxs)(lY.l, {
              className: l3.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l3.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l3.Qs,
                      children: [
                          (0, s.jsx)(n3.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l3.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l3.FS,
                                            children: (0, s.jsx)(tk.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? lZ.R()
                                                        : c
                                                          ? (0, I.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("590275"),
                                                                        n.e("334179"),
                                                                        n.e("14775"),
                                                                        n.e("989545"),
                                                                        n.e("991531"),
                                                                        n.e("311493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: l$.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l1.V },
                                                            )
                                                          : d
                                                            ? (lq.A.verifyResend(),
                                                              (0, lW.A)({
                                                                  title: eg.intl.string(eg.t.LykQYk),
                                                                  subtitle: eg.intl.format(eg.t.azKEPy, {
                                                                      email: l0.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lJ.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lX.Q, {
                                            onClick: i,
                                            text: eg.intl.string(eg.t.oEAioF),
                                            variant: "secondary",
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var l7 = n(824865),
    l6 = n(378570),
    l5 = n(790535),
    l8 = n(113783),
    l4 = n(96566),
    ie = n(280450),
    it = n(312006),
    il = n(505543),
    ii = n(994500),
    is = n(685399),
    ir = n(475889),
    ia = n(693879),
    io = n(435470),
    id = n(35275),
    ic = n(300596);
function iu(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ew()(ef.Xs, ic.U),
        children: (0, s.jsx)(id.A, {
            className: ef.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ih = n(863005),
    iA = n(669715),
    ig = n(769015),
    im = n(217223);
function ip(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ew()(im.kL, t, l && im.F4),
                children: (0, s.jsx)(ig.A, { game: n[0].application, className: im.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ew()(im.kL, t, l && im.F4),
            children: [
                (0, s.jsx)(ig.A, { game: n[0].application, className: im.wK }),
                2 === n.length
                    ? (0, s.jsx)(ig.A, { game: n[1].application, className: im.wK })
                    : (0, s.jsx)(e0.E, {
                          className: im.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function iC(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: l,
            voiceStates: i,
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: A,
            resolvedUnreadSetting: g,
        } = e,
        m = (0, u.bG)([n$.Ay], () => n$.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n$.Ay], () => n$.Ay.getIsMentionLowImportance(t.id)),
        p = (0, is.Ay)(t),
        C = (0, u.bG)([O.A], () => !O.A.can(B.xBc.CONNECT, t)),
        E = (0, ir.H)(t),
        x = (0, u.bG)([lE.A], () => lE.A.hasVideo(t.id)),
        N = (0, l4.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lj.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === B.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        I = (0, u.bG)([ih.A], () => ih.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, io.ed)(t.guild_id, t.id),
        b = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)?.features.has(B.GuildFeatures.COMMUNITY) ?? !1);
    if (lG(m)) return (0, s.jsx)(lT, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(iu, { locked: d });
    if (c)
        return (0, s.jsx)(er.Lp, { text: eg.intl.string(eg.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nG.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e0.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: eg.intl.format(eg.t.GkAbqY, { count: (0, er.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(e0.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, er.Gu)(S) });
    let G = i?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(lM, { userCount: G, video: x || N, channel: t })
        : l && (0, iA.t)(i) && b
          ? (0, s.jsx)(er.Lp, { text: eg.intl.string(eg.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(ia.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(ip, { embeddedApps: p, muted: A })
              : null;
}
var iE = n(714619);
class ix extends nS {
    channelItemRef = r.createRef();
    state = { shouldShowGuildVerificationPopout: !1 };
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, ns.Pd)(e, lE.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ef.ZS;
        if (null != t)
            if (e > t) return ef.mU;
            else return ef.TR;
        return ef.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lz.V)(s) && (0, lK.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, l5.av)(e),
            __OVERLAY__ || (0, l6.iN)(e.id, i ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, l6.iN)(e.id, n ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("238730"),
                    n.e("535321"),
                    n.e("474610"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("309004"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("187048"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, s.jsx)(lU.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l9, {
                type: l2.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(el.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t.ZXxLQg),
                children: (0, s.jsx)(ei.D, {
                    className: ew()(ef.Xs, n ? ef.Tf : null),
                    onClick: () => {
                        lB.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": eg.intl.string(eg.t.ZXxLQg),
                    children: (0, s.jsx)(lg.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ef.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? eg.intl.string(eg.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tB.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: l,
                connectChannelDropTarget: i,
                connectChannelDragSource: r,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: A,
                unread: g,
                resolvedUnreadSetting: m,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: ew()(this.getModeClass(), { [ef.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tq.m1)(e, l0.default, ii.A),
                children: [
                    (0, s.jsx)(lH.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(el.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nb.Ay, {
                                    ref: this.channelItemRef,
                                    className: ef.Ki,
                                    iconClassName: ew()({ [iE.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: m,
                                    mentionCount: f,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, lF.Ay)({
                                        channel: e,
                                        unread: g,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: A,
                                    }),
                                    children: [
                                        p && this.renderAcceptSuggestionButton(),
                                        p && this.renderRemoveSuggestionButton(),
                                        !p && this.renderOpenChatButton(),
                                        !p && this.renderInviteButton(),
                                        !p && this.renderEditButton(),
                                        !p && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return c && (E = a(E)), d && (E = i(r(E))), E;
    }
}
let iN = J((0, lk.F)(ix));
function i_(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n$.Ay], () => ({ unread: n$.Ay.hasUnread(r.id), mentionCount: n$.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([L.A, lQ.A, O.A], () => {
            let e = L.A.getChannel(r.parent_id),
                t = lQ.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && O.A.can(B.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, v.ai)(i.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: O.A.can(B.xBc.MOVE_MEMBERS, r),
                locked: !O.A.can(B.xBc.CONNECT, r),
                bypassLimit: O.A.can(B.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([M.A], () => M.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, il.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([it.Ay, ie.default], () => {
                    let n = ie.default.getId();
                    return it.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nf.A], () => nf.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, l8.zy)(r.id, tA.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lf.A)(r.id),
        N = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(i.id, r.id)),
        _ = (0, l4.xn)(r.id),
        I = iC({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < B.RCc),
        }),
        S = e.connected && null == I;
    return (0, s.jsx)(iN, {
        categoryCollapsed: m,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...g,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: S,
        channelInfo: I,
        resolvedUnreadSetting: A,
    });
}
function iI(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lA.A.preload(n, t.id);
}
let iS = J(
        class extends nS {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = D.A.getGuild(t.getGuildId());
                null != l &&
                    (0, e3.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("603998"),
                            n.e("309004"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("544058"),
                            n.e("715669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, ec.pX)(B.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: B.liQ.GUILD_CHANNEL,
                            section: B.JJy.CHANNEL_LIST,
                            object: B.ZSU.CHANNEL,
                        },
                    },
                });
            };
            render() {
                let {
                        channel: e,
                        selected: t,
                        connectChannelDropTarget: n,
                        connectChannelDragSource: l,
                        connectDragPreview: i,
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: ew()(this.getClassName(), { [ef.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tq.m1)(e, l0.default, ii.A),
                        children: (0, s.jsxs)(nb.Ay, {
                            className: ef.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iI,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lF.Ay)({ channel: e }),
                            resolvedUnreadSetting: nG.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    ib = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([L.A, O.A], () => {
                let e = L.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iS, { ...i, ...e });
    });
var iG = n(172218),
    ij = n(811024),
    iv = n(323073);
function iR(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: eg.intl.string(eg.t.Pa817q) };
    }
    return null;
}
var iy = n(3322),
    iM = n(696451),
    iL = n(763827),
    iT = n(56059),
    iU = n(163328),
    iD = n(778712),
    iO = n(730134),
    iP = n(707539),
    iV = n(486020),
    iw = n(98098);
function iH(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ih.A, n$.Ay, O.A], () => {
            let e = ih.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ih.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ih.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(B.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n$.Ay.lastMessageId(e.id),
                        l = n$.Ay.lastMessageId(t.id);
                    return tu.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iT.b : iU.y;
    return (
        r.useEffect(() => {
            (0, iP.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iw.SW,
            children: [
                (0, s.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iw.DD,
                    children: t.isForumLikeChannel() ? eg.intl.string(eg.t.ioVdO2) : eg.intl.string(eg.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iw.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iB, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ei.D, {
                            className: iw.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, l6.iN)(t.id)
                                    : (0, I.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("852197"),
                                              n.e("461815"),
                                              n.e("618416"),
                                              n.e("524434"),
                                              n.e("849162"),
                                              n.e("802598"),
                                              n.e("242266"),
                                              n.e("552705"),
                                              n.e("481647"),
                                              n.e("776602"),
                                              n.e("140402"),
                                              n.e("139970"),
                                              n.e("472789"),
                                              n.e("179049"),
                                              n.e("31267"),
                                              n.e("444567"),
                                              n.e("665927"),
                                              n.e("751743"),
                                              n.e("384042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: iw.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iw.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iw.Pf,
                                    children: (0, s.jsx)(e0.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: eg.intl.string(eg.t["4qdZ93"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function iB(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l0.default], () => l0.default.getUser(t.ownerId)),
        l = (0, iP.JO)(t);
    return (0, s.jsxs)(ei.D, {
        className: iw.nM,
        onClick: function (e) {
            (0, lC.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lN.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iw.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iw.my,
                              src: iV.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iO.A, { className: iw.my, user: n, size: iD._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iw.Pf,
                children: [
                    (0, s.jsx)(e0.E, { className: iw.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e0.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e0.E, {
                        className: iw.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iP.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var ik = n(364522),
    iF = n(302959),
    iK = n(35903),
    iz = n(970928),
    iW = n(427262),
    iY = n(641635);
let iX = nn.DN.SIZE_24;
function iq(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iV.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(el.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iY.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iz.uD)(i, r, [128, 128]), className: iY.P3 })
        : null;
}
function iZ(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l0.default], () => i.map((e) => l0.default.getUser(e)).filter(td.Vq));
    return (0, s.jsx)("div", {
        className: iY.ec,
        children: (0, s.jsxs)("div", {
            className: iY.Wh,
            children: [
                (0, s.jsx)(iq, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iY.X0,
                    children: [
                        (0, s.jsx)(n3.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iY.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(nn.Ay, {
                                className: iY.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iX,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nn.mt) return null;
                                    let t = iW.Ay.getName(e);
                                    return (0, s.jsx)(
                                        el.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iX),
                                                alt: t,
                                                className: iY.my,
                                            }),
                                        },
                                        e.id,
                                    );
                                },
                            }),
                    ],
                }),
            ],
        }),
    });
}
var iJ = n(584960);
function i$(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l0.default], () => l0.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: iJ.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: iJ.Il,
                      children: (0, s.jsx)(iZ, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: iJ.M4,
                      children: (0, s.jsx)(iK.A, {
                          type: iF.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: l.embeddedActivity,
                          user: a,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: i,
                      }),
                  }),
              ],
          });
}
var iQ = n(713654),
    i0 = n(744399);
function i1(e) {
    let { channel: t } = e,
        n = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)),
        l = (0, tq.Ay)(t),
        i = (0, iQ.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i0.hY,
              children: [
                  (0, s.jsx)(i, { className: i0.p }),
                  (0, s.jsx)(e0.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i0.HA,
                      children: l,
                  }),
              ],
          });
}
var i3 = n(220650);
function i2(e) {
    let { channel: t, onAction: n } = e,
        l = (0, is.Ay)(t),
        i = Array.from((0, is.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(ik.Ip, {
              className: i3.kL,
              children: [
                  (0, s.jsx)("div", { className: i3.oT, children: (0, s.jsx)(i1, { channel: t }) }),
                  (0, s.jsx)("div", { className: i3.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          i$,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class i9 extends nS {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
    channelItemRef = r.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        (this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e);
    };
    enterTimer = null;
    exitTimer = null;
    handleMouseEnter = () => {
        (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
            (this.resetTextChannelPopoutTimers(),
            (this.enterTimer = setTimeout(() => {
                null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
            }, 200)));
    };
    handleMouseLeave = () => {
        this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
            }, 250));
    };
    handleThreadsPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
    };
    handleActivitiesPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
    };
    handleMenuItemPopoverVisibilityChange = (e) => {
        this.setState({ isMenuItemPopoverVisible: e });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        lA.A.preload(t ?? B.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i2, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iH, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === B.rbe.GROUP_DM)
            return void (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("238730"),
                    n.e("947502"),
                    n.e("965789"),
                    n.e("368530"),
                    n.e("187048"),
                    n.e("566378"),
                    n.e("17244"),
                    n.e("153416"),
                    n.e("760200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === B.rbe.DM) {
            let l = l0.default.getUser(t.getRecipientId());
            null != l &&
                (0, e3.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("924697"),
                        n.e("207322"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("866038"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("993103"),
                        n.e("834552"),
                        n.e("893190"),
                        n.e("391763"),
                        n.e("708757"),
                        n.e("571210"),
                        n.e("468403"),
                        n.e("585968"),
                        n.e("189673"),
                        n.e("88342"),
                        n.e("238730"),
                        n.e("229787"),
                        n.e("311802"),
                        n.e("698965"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("576665"),
                        n.e("235313"),
                        n.e("776273"),
                        n.e("474610"),
                        n.e("436564"),
                        n.e("947502"),
                        n.e("245996"),
                        n.e("700792"),
                        n.e("592822"),
                        n.e("838056"),
                        n.e("965789"),
                        n.e("823427"),
                        n.e("529422"),
                        n.e("508829"),
                        n.e("309291"),
                        n.e("307059"),
                        n.e("187048"),
                        n.e("516054"),
                        n.e("298199"),
                        n.e("17244"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("238730"),
                    n.e("535321"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("238730"),
                    n.e("535321"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("309004"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("187048"),
                    n.e("544058"),
                    n.e("65200"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("248804"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ef.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: i,
                hasActiveThreads: r,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: A,
                isFavoriteSuggestion: g,
                subtitle: m,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                isTargetInViewport: x,
                channelItemRef: N,
                isSuggestedSection: _,
            } = this.props,
            I = N ?? this.channelItemRef,
            { isMenuItemPopoverVisible: S } = this.state,
            b = !S && a,
            G = !S && E && null != p && p.length > 0,
            j = iR(m),
            v = (0, s.jsxs)("li", {
                className: ew()(this.getClassName(), { [ef.r9]: this.isDisabled(), [ef.wH]: n }),
                "data-dnd-name": (0, tq.m1)(e, l0.default, ii.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lH.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nb.Ay, {
                                ref: this.setChannelItemRef,
                                className: ef.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: j?.subtitle,
                                subtitleColor: j?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? B.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: _ ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lF.Ay)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(iy.A, {
                            targetElementRef: I,
                            channelType: e.type,
                            isTargetInViewport: x,
                            onVisibilityChange: this.handleMenuItemPopoverVisibilityChange,
                        }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let i7 = J(i9);
function i6(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lp.NR)(t),
        h = (0, u.cf)([n$.Ay], () => ({
            unread: n$.Ay.hasUnread(t.id),
            ackMessageId: n$.Ay.ackMessageId(t.id),
            isLowImportanceMention: n$.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([L.A, O.A], () => {
            let e = L.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    ((0, v.ai)(n.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([nJ.A], () => nJ.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lf.A)(t.id),
        C = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        E = (0, iv.ni)(t),
        x = (0, ij.Gp)(t.id),
        N = iC({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: m,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: A,
        }),
        _ = (0, is.Ay)(t),
        [I, S] = r.useState(!1),
        b = (0, iG.K)(
            r.useCallback((e) => {
                S(e);
            }, []),
        );
    return (0, u.bG)([iL.A, iM.Ay], () => iL.A.getChannelId() !== t.id && iM.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(i7, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: m && e.canBeNewChannel,
              isFavoriteSuggestion: i && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: _,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != N,
              enableActivities: x,
              isTargetInViewport: I,
              channelItemRef: b,
          });
}
var i5 = n(900797),
    i8 = n(636585),
    i4 = n(531685),
    se =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let st = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sn = { topBar: st, bottomBar: st },
    sl = {},
    si = {};
function ss(e) {
    let t = L.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lb.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tr.Y)(t)
    );
}
function sr(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n$.Ay.getMentionCount(e) > 0;
}
function sa(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? th.A.getMutableParticipants(e.id, tA.ip.SPEAKER).length > 0
            : to.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function so(e) {
    let { guildChannels: t } = tx.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(si[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let l = null,
        i = null,
        s = null,
        r = null,
        a = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, g, m] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((ss(t.id) || o().some(t.threadIds, ss)) && (d = !1),
            (sr(t.id) || o().some(t.threadIds, sr)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let f = 0,
        p = !1,
        C = 0,
        E = !1;
    if (d || a)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (ss(t.id) || o().some(t.threadIds, ss)) && (null == i && (i = t.id), (p = !0)),
                (sr(t.id) || o().some(t.threadIds, sr)) &&
                    (null == l && (l = t.id),
                    (f += n$.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n$.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (ss(t.id) || o().some(t.threadIds, ss)) && (null == r && (r = t.id), (E = !0)),
                (sr(t.id) || o().some(t.threadIds, sr)) &&
                    (null == s && (s = t.id),
                    (C += n$.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n$.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sa)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let I = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        S = null != x && ("mentions" === x.mode || !I);
    return (sl[e] = { topBar: I ? (N ?? st) : st, bottomBar: S ? (x ?? st) : st }), !0;
}
let sd = o().throttle(so, 200);
function sc(e) {
    let { guildId: t } = e,
        n = D.A.getGuild(t);
    return null != n && !!n.features.has(B.GuildFeatures.COMMUNITY) && sd(t);
}
function su(e) {
    let { id: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let l = D.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && sd(n.guild_id);
}
function sh(e) {
    let { channel: t } = e,
        n = L.A.getChannel(t.id);
    if (null == n) return !1;
    let l = D.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && sd(n.guild_id);
}
function sA(e) {
    let { channelId: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let l = D.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && P.A.getGuildId() === n.guild_id && sd(n.guild_id)
    );
}
function sg(e) {
    let { guildId: t } = e;
    return null != t && sd(t);
}
class sm extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tx.A, L.A, D.A, lb.A, n$.Ay, P.A, to.Ay, th.A, V.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sl[e] ?? sn;
    }
}
let sf = new sm(e9.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = D.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(B.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(si[t], n) &&
            ((si[t] = n), so(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return L.A.getChannel(t)?.guild_id;
                })
                .filter(td.Vq)
                .uniq()
                .forEach((e) => {
                    let t = D.A.getGuild(e);
                    null != t && t.features.has(B.GuildFeatures.COMMUNITY) && sd(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sA,
    CHANNEL_DELETE: sh,
    CHANNEL_LOCAL_ACK: sA,
    MESSAGE_ACK: sA,
    MESSAGE_CREATE: sA,
    MESSAGE_DELETE_BULK: sA,
    MESSAGE_DELETE: sA,
    PASSIVE_UPDATE_V2: function (e) {
        let t = D.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(B.GuildFeatures.COMMUNITY)) && sd(e.guildId);
    },
    RESORT_THREADS: sA,
    THREAD_CREATE: sh,
    THREAD_DELETE: sh,
    THREAD_LIST_SYNC: sc,
    THREAD_MEMBER_UPDATE: su,
    THREAD_MEMBERS_UPDATE: su,
    THREAD_UPDATE: sh,
    BULK_CLEAR_RECENTS: sc,
    CATEGORY_COLLAPSE_ALL: sc,
    CATEGORY_EXPAND_ALL: sc,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = P.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sl[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sd(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sg,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sg,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sd(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sg,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sg,
});
var sp = n(350536);
let sC = { friction: 30, tension: 300 };
function sE(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([to.Ay], () => to.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, ns.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ei.D, {
        className: ew()(sp.M0, sp.OF),
        onClick: a,
        children: [
            (0, s.jsx)(tY.H, { size: "custom", className: sp.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e0.E, {
                variant: "text-xs/semibold",
                className: sp.pM,
                children: eg.intl.format(eg.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(i8.A, {
                guildId: t.id,
                className: sp.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iD._3.SIZE_16,
            }),
        ],
    });
}
function sx(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sf], () => sf.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([i4.A], () => i4.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === se.HIDDEN,
        f = (0, e1.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sC,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != g && a(g);
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: ew()(sp.kL, { [sp.Mn]: "top" === t, [sp.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eQ.animated.div, {
            className: sp.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case se.HIDDEN:
                        return (0, s.jsx)("div", { className: ew()(sp.M0, sp.Te) });
                    case se.UNREAD:
                        return (0, s.jsxs)(ei.D, {
                            className: sp.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tz.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sp.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(i5.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sp.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e0.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sp.pM,
                                    children: eg.intl.string(eg.t.FCRiT3),
                                }),
                            ],
                        });
                    case se.MENTIONS:
                        return (0, s.jsx)(ei.D, {
                            className: ew()(sp.M0, sp.vU),
                            onClick: p,
                            children: (0, s.jsx)(e0.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sp.pM,
                                children: eg.intl.format(eg.t.EQcLyp, { count: A }),
                            }),
                        });
                    case se.VOICE_CHANNELS:
                        return (0, s.jsx)(sE, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sN = n(310953),
    s_ = n(173860);
function sI(e) {
    let t = L.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lb.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tr.Y)(t)
    );
}
function sS(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n$.Ay.getMentionCount(e) > 0;
}
let sb = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sN.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([i4.A], () => i4.A.isFocused());
    return (0, s.jsx)(s_.A, { ref: t, ...r, isUnread: sI, isMentioned: sS, items: a, animate: o });
});
var sG = n(81466);
function sj(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n$.Ay],
            () => ({
                hasUnread: n$.Ay.hasUnread(t.id, nG.P.GUILD_EVENT),
                mentionCount: n$.Ay.getMentionCount(t.id, nG.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, I.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("489565"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("931937"),
                n.e("998835"),
                n.e("947359"),
                n.e("694303"),
                n.e("147626"),
                n.e("256373"),
                n.e("970644"),
                n.e("449347"),
                n.e("464287"),
                n.e("853934"),
                n.e("468248"),
                n.e("469647"),
                n.e("798354"),
                n.e("711588"),
            ]).then(n.bind(n, 15823));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, nX.Dr)(en.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tU.Ay)(t.id),
        c = d.length > 0 ? eg.intl.formatToPlainString(eg.t.IBdqSu, { number: d.length }) : eg.intl.string(eg.t.tlopTM);
    return (0, s.jsx)(ed.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sG.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(er.hV, { className: nK.Do, disableColor: !0, count: r }) : null,
    });
}
var sv = n(152367),
    sR = n(972786),
    sy = n(20386),
    sM = n(309010),
    sL = n(459864);
function sT(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([sR.A], () => sR.A.getSelectedProjectId(t.id), [t.id]),
        i = (0, u.bG)([sM.Ay], () => sM.Ay.getChannelId(), []),
        r = (0, u.bG)([P.A], () => P.A.getGuildId(), []);
    return (0, s.jsx)(ed.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sv.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: eg.intl.string(sL.default.Xmvb23),
        selected: n,
        trailing: (0, s.jsx)(sy.iT, { guildId: t.id }),
        onClick: () => {
            let e = i === eu.VV.VIBEGRATIONS && r === t.id;
            (0, ec.pX)(B.BVt.CHANNEL(t.id, eu.VV.VIBEGRATIONS, null == l || e ? null : l));
        },
    });
}
var sU = n(845056),
    sD = n(765379),
    sO = n(271683),
    sP = n(725613),
    sV = n(857253),
    sw = n(360729),
    sH = n(22231),
    sB = n(241326),
    sk = n(750943),
    sF = n(743674),
    sK = n(888697),
    sz = n(26741),
    sW = n(493819),
    sY = n(722884),
    sX = n(955216),
    sq = n(176431);
function sZ(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sF.S)(l),
        c = (0, eU.je)(t),
        u = (0, sz.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sz.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sY.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sz.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sK.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e3.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: sq.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: sq.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sW.A, { imageUrl: l, animatedUrl: i, className: sq.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sq.n_,
                      children: [
                          (0, s.jsx)(el.m, {
                              text: eg.intl.string(sX.default.XJ4UpB),
                              children: (0, s.jsx)(ei.D, {
                                  className: sq.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sH.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(el.m, {
                              text: eg.intl.string(sX.default.XV4qT6),
                              children: (0, s.jsx)(ei.D, {
                                  className: sq.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sB.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sJ(e) {
    let { channel: t } = e,
        n = (0, sz.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sz.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sY.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sq._o,
        children: (0, s.jsxs)(ei.D, {
            className: sq.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sk.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: eg.intl.string(sX.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s$(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eT.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eU.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eU.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(sZ, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sJ, { channel: t })
              : null
        : null;
}
var sQ = n(290863),
    s0 = n(461213),
    s1 = n(532622),
    s3 = n(882840),
    s2 = n(208971),
    s9 = n(46054),
    s7 = n(569381),
    s6 = n(165648);
function s5(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, s2.G)((0, s3.l)(t)),
        { enableHangoutWindow: d } = (0, eT.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eU.lr)(t),
        u = null != o && o.length > 0,
        h = (0, s1.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lo.default.track(B.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ew()(s7.Ui, n && h ? s7.BI : null);
    return u
        ? (0, s.jsx)(ei.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e0.E, {
                  variant: "text-xs/medium",
                  className: ew()(s7.qS, s6.PT),
                  children: (0, s.jsx)(tB.A, { children: s9.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ei.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(e0.E, {
                        variant: "text-xs/medium",
                        className: s7.qS,
                        children: eg.intl.string(eg.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sH.PencilIcon, { color: "currentColor", className: s7.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tB.A, { children: i })
            : null;
}
class s8 extends nS {
    state = { shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = r.createRef();
    channelItemRef = r.createRef();
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    handleVoiceConnect = () => {
        let {
            locked: e,
            connected: t,
            channel: n,
            unverifiedAccount: l,
            needSubscriptionToAccess: i,
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        l && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        o && lB.A.updateChatOpen(n.id, !0),
            lm.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, e3.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("238730"),
                    n.e("535321"),
                    n.e("474610"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("309004"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("187048"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, ns.Pd)(e, lE.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ef.ZS;
        if (null != t)
            if (e > t) return ef.mU;
            else return ef.TR;
        return ef.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, lz.V)(t) && (0, lK.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sO.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iR(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(s5, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lU.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: i,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: l } = this.props;
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(s$, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l9, { type: l2.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(el.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t.ZXxLQg),
                children: (0, s.jsx)(ei.D, {
                    className: ew()(ef.Xs, n ? ef.Tf : null),
                    onClick: () => {
                        lB.A.updateChatOpen(e.id, !0),
                            (0, l6.iN)(e.id, l ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": eg.intl.string(eg.t.ZXxLQg),
                    children: (0, s.jsx)(lg.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ef.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? eg.intl.string(eg.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: l,
                resolvedUnreadSetting: i,
                mentionCount: r,
                locked: a,
                connectChannelDropTarget: o,
                connectChannelDragSource: d,
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                showTutorial: g,
                hasActiveEvent: m,
                embeddedApps: f,
                isSubscriptionGated: p,
                isFavoriteSuggestion: C,
                withGuildIcon: E,
                hasStartTime: x,
                voiceChannelStartTime: N,
                shouldHighlightChannel: _,
                shouldUseAnimatedWaveform: I,
                voiceStates: S,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            G = _ || I,
            j = (0, s.jsxs)("li", {
                ref: this.ref,
                className: ew()(this.getModeClass(), { [ef.r9]: this.isDisabled(), [ef.fy]: _ }),
                "data-dnd-name": (0, tq.m1)(e, l0.default, ii.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: ef.UQ }),
                                (0, s.jsx)("div", { className: ef.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lH.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(el.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nb.Ay, {
                                        ref: this.channelItemRef,
                                        className: ef.Ki,
                                        iconClassName: ew()({ [ef.Gj]: m || x || G }),
                                        hasActiveEvent: m,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
                                        mentionCount: r,
                                        locked: a,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: u,
                                        isFavoriteSuggestion: C,
                                        "aria-label": (0, lF.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: S,
                                            activityNames: [
                                                ...new Set([
                                                    ...f.map((e) => e.application.name),
                                                    ...this.props.nonEmbeddedActivityNames,
                                                ]),
                                            ],
                                            isSubscriptionGated: p,
                                            voiceChannelStartTime: N,
                                        }),
                                        withGuildIcon: E,
                                        children: [
                                            C &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !C &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderOpenChatButton(),
                                                        this.renderInviteButton(),
                                                        this.renderEditButton(),
                                                        this.renderChannelInfo(),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                        }),
                    }),
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            A && (j = c(j)),
            h && (j = o(d(j))),
            g &&
                (j = (0, s.jsx)(t5.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: j,
                })),
            j
        );
    }
}
let s4 = J((0, lk.F)(s8));
function re(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n$.Ay], () => ({ unread: n$.Ay.hasUnread(n.id), mentionCount: n$.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([L.A, lQ.A, O.A], () => {
            let e = L.A.getChannel(n.parent_id),
                i = lQ.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, v.ai)(t.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(B.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(B.xBc.CONNECT, n),
                bypassLimit: O.A.can(B.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lE.A], () => lE.A.hasVideo(n.id)),
        { enabled: g } = sw.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, is.Ay)(n),
        f = (0, u.yK)([s0.A, sQ.A, ie.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = ie.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? s0.A.getActivities() : sQ.A.getActivities(l.id, n.guild_id))
                    !(0, sU.N)(i) || (0, sD.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, tq.Ay)(n),
        C = (0, tU.Qs)(n.id),
        E = (0, u.bG)([sP.A], () => sP.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lf.A)(n.id),
        _ = (0, sV.A)(),
        I = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        S = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nl.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        R = b && j,
        y = G && j,
        M = iC({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        T = S && null == M;
    return (0, s.jsx)(s4, {
        channelName: p,
        embeddedApps: m,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: B.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: S,
        isFavoriteSuggestion: i && !I,
        forceShowButtons: T,
        channelInfo: M,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != M,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: R,
        shouldUseAnimatedWaveform: y,
        guildRoomsEnabled: g,
    });
}
n(131955);
function rt(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rn extends r.PureComponent {
    static contextType = d.nC;
    _list = null;
    unreadTopRef = r.createRef();
    unreadBottomRef = r.createRef();
    static defaultProps = { density: "default" };
    state = {
        initialized: !1,
        isUnreadVisible: !0,
        topUnread: null,
        topMention: null,
        bottomUnread: null,
        bottomMention: null,
    };
    componentDidMount() {
        this.setState({ initialized: !0 }), (0, tN.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tC.A.getGuildDimensions(l);
        null != n
            ? (this.scrollToChannel(n), E.A.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != r && this.scrollTo(r)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  s &&
                  (null == r && null != i
                      ? this.scrollToChannel(i, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        (t.current = e?.getScrollerNode() ?? null), (this._list = e);
    };
    scrollTo(e, t) {
        this._list?.scrollTo({ to: e, animate: !1, callback: t });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            l = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != i)
            if (null != s.threadOffset) {
                let [e] = i.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * rt(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + rt(r), padding: n, animate: t, callback: l });
            } else i.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: l });
        else l?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            l = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < l.length - 1; e++)
            if ((t[l[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, l] = t;
        return this.scrollToChannel(e, !0, null != n && null != l ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            l = this._list;
        if (null == l) return !1;
        for (let { row: e, section: i } of n) {
            let [n, s] = l.getScrollPosition(i, e),
                r = l.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            l = [];
        for (var i = 0; i < t.length; i++) {
            let s = t[i];
            if ((0, A.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [i, r] = e.getScrollPosition(s.section, s.row);
                null != t && i + r < n.scrollTop + n.offsetHeight && i > n.scrollTop && l.push(t.channel.id);
            }
        }
        return l;
    };
    handleResize = () => {
        let { showNewUnreadsBar: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), e && null != t)) {
            let { scrollTop: e } = t;
            this.updateChannelListScroll(e);
        }
    };
    handleListScroll = () => {
        let { onScroll: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if (null != t) {
            let { scrollTop: n } = t;
            null != e && e(t), this.updateChannelListScroll(n);
        }
        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
    };
    handleUnreadCalculate = (e, t, n) => {
        let l = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: l, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: l, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: l, row: i } = n;
                if (l < tE.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, w.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, tr.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        E.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (e === tE.PU) return i;
        if (e === tE.bK) return t.features.has(B.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === B.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === l ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: l,
            selectedChannelId: i,
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: l,
                selectedChannelId: i,
                selectedVoiceChannelId: s,
                optInEnabled: r,
                visualRefreshEnabled: a,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = nr(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tE.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== M.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(B.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== i && e.id !== l && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: l, selectedVoiceChannelId: i, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: i, selectedVoiceChannelId: s, voiceStates: l })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: i,
            selectedVoiceChannelId: l,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: l,
                stageChannelSpeakerVoiceStates: i,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = rt(r);
        if (e === tE.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tH.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === B.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rt(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eO.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eT.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eU.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            l = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == l) return;
        let i = null,
            s = l.getShownChannelAndThreadIds();
        null != n && s.includes(n) && (i = (0, eP.xb)(t)), (0, eP.DD)(e.id, s, i);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: i,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            nt,
            {
                sectionIndex: t,
                guild: i,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tE.PU:
                        return "hoisted-spacer";
                    case tE.bK:
                        return "uncategorized-spacer";
                    case tE.HP:
                        return "favorites";
                    case t.recentsSectionNumber:
                        return "recents-header";
                    case t.voiceChannelsSectionNumber:
                        return "voice-channels-header";
                    default: {
                        let n = t.getNamedCategoryFromSection(e);
                        if (null != n) return `category-${n.id}`;
                        return `section-${e}`;
                    }
                }
            })(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: l,
                selectedChannel: i,
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: g,
                withGuildIcon: m,
            } = this.props;
        if (t === tE.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tH.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eD.A,
                        { guild: l, channel: U.Ay.getDefaultChannel(l.id) },
                        tH.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tH.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(ts, { guild: l, withMargin: i.length > 1 }, tH.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tH.n.GUILD_SPACE:
                    return (0, s.jsx)(eL, { guild: l, selected: a === eu.VV.GUILD_SPACE }, tH.n.GUILD_SPACE);
                case tH.n.GUILD_HOME:
                    return (0, s.jsx)(n1, { guild: l, selected: a === eu.VV.GUILD_HOME }, tH.n.GUILD_HOME);
                case tH.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sj,
                        { guild: l, selected: a === tH.n.GUILD_SCHEDULED_EVENTS },
                        tH.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tH.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        lt,
                        { guild: l, selected: a === eu.VV.ROLE_SUBSCRIPTIONS },
                        tH.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tH.n.GUILD_SHOP:
                    return (0, s.jsx)(lh, { guild: l, selected: a === eu.VV.GUILD_SHOP }, tH.n.GUILD_SHOP);
                case tH.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nW, { guild: l, selected: a === eu.VV.GAME_SHOP }, tH.n.GUILD_GAME_SHOP);
                case tH.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sT, { guild: l, selected: a === eu.VV.VIBEGRATIONS }, tH.n.GUILD_VIBEGRATIONS);
                case tH.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n5, { guild: l });
                case tH.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        nQ,
                        { guild: l, selected: a === eu.VV.CHANNEL_BROWSER || a === eu.VV.CUSTOMIZE_COMMUNITY },
                        tH.n.CHANNELS_AND_ROLES,
                    );
                case tH.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nj,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tH.n.GUILD_DIRECTORY,
                    );
                case tH.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        ey,
                        { guild: l, selected: a === eu.VV.MEMBER_SAFETY },
                        tH.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tH.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e$, { guildId: l.id, selected: a === eu.VV.GUILD_BOOSTS }, tH.n.GUILD_BOOSTS);
                case tH.n.GAME_SERVERS:
                    return (0, s.jsx)(e_, { guildId: l.id, selected: a === eu.VV.GAME_SERVERS }, tH.n.GAME_SERVERS);
                case tH.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ep,
                        { guildId: l.id, selected: a === eu.VV.GAME_SERVERS },
                        tH.n.GAME_SERVERS_EMPTY,
                    );
                case tH.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        n4,
                        { guild: l, selected: a === eu.VV.GUILD_OFFICIAL_MESSAGES },
                        tH.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tE.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case B.rbe.GUILD_ANNOUNCEMENT:
            case B.rbe.GUILD_TEXT:
            case B.rbe.GUILD_FORUM:
            case B.rbe.GUILD_MEDIA:
            case B.rbe.DM:
            case B.rbe.GROUP_DM:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(i6, {
                                channel: x,
                                guild: l,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, s.jsx)(lw, {
                                      withGuildIcon: m,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != i && (i.id === C.id || i.parent_id === x.id) ? i : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case B.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    i_,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: A[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case B.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    re,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case B.rbe.GUILD_STORE:
                return (0, s.jsx)(ib, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case B.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t6, { channel: x }, `readonly-${x.id}`);
            case B.rbe.PUBLIC_THREAD:
            case B.rbe.PRIVATE_THREAD:
            case B.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    i6,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        muted: C.isMuted,
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    N,
                );
            default:
                return null;
        }
    };
    renderSectionFooter = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            no,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: l, canHaveVoiceSummary: i } = nr(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: ne.Eo,
            children: (0, s.jsx)(sb, {
                ref: this.unreadTopRef,
                textUnread: eg.intl.string(eg.t.FCRiT3),
                textMention: eg.intl.string(eg.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: ne.Vq,
                barClassName: ne.bu,
                guildId: i,
                guildChannels: r,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: l, isUnreadVisible: i } = this.state;
        return (0, s.jsx)(sb, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eg.intl.string(eg.t.FCRiT3),
            textMention: eg.intl.string(eg.t["8zH0LJ"]),
            hide: null == l && i,
            className: ne.di,
            barClassName: ne.bu,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
        });
    }
    getAnchorId = (e, t) => {
        let { guildChannels: n } = this.props;
        if (e !== tE.PU) {
            if (null == t)
                return e === tE.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tE.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, v.ai)(n) && (i["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, s.jsx)(g.sk, {
            children: (t) =>
                (0, s.jsx)(
                    m.OZ,
                    {
                        ref: this.setListRef,
                        className: ne.XG,
                        fade: !0,
                        sectionHeight: this.getSectionHeight,
                        footerHeight: this.getSectionFooterHeight,
                        rowHeight: this.getRowHeight,
                        paddingTop: o,
                        paddingBottom: d,
                        renderSection: this.renderSection,
                        renderFooter: this.renderSectionFooter,
                        renderRow: this.renderRow,
                        onScroll: this.handleListScroll,
                        onResize: this.handleResize,
                        onContentResize: this.handleResize,
                        sections: e.getSections(!0),
                        innerAriaLabel: eg.intl.string(eg.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...a,
                        ...t,
                        ...i,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!tf.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tm.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tm.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(et.V0, {
            children: (l) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: l, children: eg.intl.string(eg.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: ne.Eo,
                                      children: (0, s.jsx)(sx, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sx, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(r.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let rl = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([$.Ay], () => $.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, ee.Ay)(Q.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([L.A], () => L.A.getChannel(n)),
        h = (0, u.bG)([L.A], () => L.A.getChannel(l)),
        A = (0, u.bG)([P.A], () => P.A.getGuildId()),
        g = (0, y.jN)(t),
        m = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (B.Ut1.test(t) || (0, eu.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: i,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        N = E.setFocus;
    r.useEffect(() => {
        null != n && N(n);
    }, [n, N]);
    let _ = (function (e) {
        let [t] = (0, u.bG)(
            [th.A, L.A, ta.A],
            () => {
                let t;
                return [
                    (t = (0, v.ai)(e)
                        ? tu.default
                              .keys(ta.A.getFavoriteChannels())
                              .map((e) => L.A.getChannel(e))
                              .filter(td.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : th.A.getChannels(e)).reduce((e, t) => {
                        let n = th.A.getMutableParticipants(t.id, tA.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === tA.wY.VOICE).map(tg)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + th.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tc.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(ee.f5, {
        value: a,
        children: (0, s.jsx)(x.A, {
            section: B.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(tp.q, { containerRef: E.containerProps.ref, itemType: X }),
                    (0, s.jsx)(rn, {
                        ...e,
                        listNavigator: E,
                        ref: m,
                        selectedChannel: o,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: _,
                        selectedGuildId: A,
                        optInEnabled: g,
                    }),
                ],
            }),
        }),
    });
};
function ri(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tT.A)(t)),
                    (l = (0, tU.Ay)(t)),
                    !(0, u.bG)([D.A], () => {
                        if (null == t) return !1;
                        let e = D.A.getGuild(t);
                        return e?.features.has(B.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, tG.W)(e.id),
                r = (0, tL.vz)(e.id),
                a = (0, tI.r)(e),
                o = (0, tV.jz)(e),
                d = (0, ty.d)(e.id),
                c = (0, t_.bG)([tv.h], () => tv.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tw.QI)(e, "useGuildActionRows"),
                A = (0, tM.A)(e.id),
                g = (0, tR.jY)(e.id),
                m = (0, tj.fw)(e.id),
                f = (0, tD.Uq)(e, "useGuildActionRows"),
                p = [],
                C = e.features.has(B.GuildFeatures.HUB),
                E = e.features.has(B.GuildFeatures.COMMUNITY),
                x = e.features.has(B.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, e4.A)(e.id);
            tP.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = tt(e),
                I = (0, tO.bW)(e.id, "useGuildActionRows"),
                S = (0, tS.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(B.GuildFeatures.GAME_SERVERS),
                G = (0, tb.N)("useGuildActionRows"),
                [j] = (0, eo.kn)(S && G && !b ? [en.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                C && p.push(tH.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tH.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tH.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tH.n.GUILD_HOME),
                f && p.push(tH.n.GUILD_SPACE),
                i && p.push(tH.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tH.n.CHANNELS_AND_ROLES),
                r && p.push(tH.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tH.n.GUILD_SHOP),
                o && p.push(tH.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tH.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tH.n.GUILD_BOOSTS),
                I && p.push(tH.n.GUILD_OFFICIAL_MESSAGES),
                S && (b ? p.push(tH.n.GAME_SERVERS) : null != j && p.push(tH.n.GAME_SERVERS_EMPTY)),
                h && p.push(tH.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tx.A], () => tx.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rl, { ...e, ...n, density: l });
}
