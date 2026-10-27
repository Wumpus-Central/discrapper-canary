l.d(n, { default: () => eG });
var t = l(477900),
    i = l(582128),
    s = l(17928),
    r = l(696208),
    d = l(224640),
    a = l(20742),
    u = l(430993),
    c = l(148149),
    o = l(442433),
    x = l(793574),
    h = l(688810),
    g = l(915089),
    m = l(857071),
    j = l(734057),
    f = l(71393),
    A = l(763827),
    v = l(174459),
    N = l(422653),
    I = l(285059),
    C = l(698441),
    y = l(485394),
    _ = l(826383);
l(321073);
var E = l(988794),
    p = l(530209),
    S = l(974930),
    k = l(691012),
    b = l(428978),
    R = l(850183),
    T = l(503698),
    D = l.n(T),
    G = l(97808),
    L = l(778712),
    M = l(834730),
    U = l(939249),
    P = l(463930),
    w = l(140735),
    O = l(900002),
    z = l(177953),
    K = l(297264),
    F = l(376728),
    V = l(548118),
    Z = l(714991),
    q = l(967144),
    H = l(660110),
    B = l(402860),
    Q = l(696451),
    X = l(427262),
    Y = l(408607),
    W = l(722260),
    J = l(563312),
    $ = l(794782),
    ee = l(937050),
    en = l(620018),
    el = l(103355),
    et = l(167630),
    ei = l(105292),
    es = l(32374);
function er(e) {
    let { creator: n, guildId: l, channelId: i } = e,
        { analyticsLocations: r } = (0, h.Ay)(),
        d = (0, s.bG)([Q.Ay], () => Q.Ay.getMember(l, n.id), [n, l]),
        a = (0, q.gn)(d?.guildId, d?.userId, d?.colorStrings ?? null);
    return (0, t.jsxs)("div", {
        className: es.nM,
        children: [
            (0, t.jsx)(G.eu, {
                size: L._3.SIZE_20,
                src: n.getAvatarURL(l, 20),
                "aria-label": d?.nick ?? X.Ay.getName(n),
                className: es.Kk,
            }),
            (0, t.jsx)(M.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: ei.intl.format(ei.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, t.jsx)(
                            U.D,
                            {
                                onClick: () =>
                                    (0, B.openUserProfileModal)({
                                        guildId: l,
                                        channelId: i,
                                        userId: n.id,
                                        roleId: d?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: es.xL,
                                tag: "span",
                                role: "link",
                                children: (0, t.jsx)(P.g, {
                                    name: d?.nick ?? X.Ay.getName(n),
                                    colorString: d?.colorString ?? null,
                                    colorStrings: a,
                                }),
                            },
                            "open-user-profile",
                        );
                    },
                }),
            }),
        ],
    });
}
function ed(e) {
    let { guild: n, onClick: l, onClose: s } = e,
        r = i.useCallback(
            (e) => {
                (l?.(e), null != l && s?.(e));
            },
            [l, s],
        ),
        d = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(w.A, { children: ei.intl.string(ei.t["5qyruI"]) }),
                (0, t.jsx)(V.Ay, {
                    guild: n,
                    size: V.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: D()(es.$f, es.Kk),
                }),
                (0, t.jsx)(Z.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: O.ST.Colors.PRIMARY,
                    size: 16,
                    className: es.n2,
                }),
                (0, t.jsx)(M.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: es.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, t.jsx)("div", {
        className: es.nM,
        children: null != l ? (0, t.jsx)(U.D, { onClick: r, className: es.vk, role: "link", children: d }) : d,
    });
}
function ea(e) {
    let { userCount: n, onClick: l } = e;
    return (0, t.jsxs)("div", {
        className: es.nM,
        children: [
            (0, t.jsx)(z.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: es.Kk,
                "aria-label": ei.intl.string(ei.t["9Oq93m"]),
            }),
            (0, t.jsx)(U.D, {
                onClick: l,
                className: es.tK,
                children: (0, t.jsx)(M.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: ei.intl.format(ei.t["+DLsD8"], { count: n }),
                }),
            }),
        ],
    });
}
function eu(e) {
    let {
            guildEvent: n,
            guild: l,
            channel: r,
            headerId: d,
            onClose: a,
            onClickInterestedCount: u,
            recurrenceId: c,
            setRecurrenceId: o,
        } = e,
        x = (0, s.bG)([f.A], () => null != f.A.getGuild(l.id), [l.id]),
        { startTime: h, endTime: g } = (0, J.Ay)(n, c),
        m = (0, _.A)(n.guild_id, n.id, c),
        j = i.useCallback(
            (e) => {
                (e.stopPropagation(), null != n && (0, F.rq)(n));
            },
            [n],
        ),
        A = (0, W.A)(c, n.id),
        v = (0, Y.A)(n);
    i.useEffect(() => {
        (I.A.getGuildEventUserCounts(l.id, n.id, null != c ? [c] : []), I.A.getGuildEventsForCurrentUser(l.id));
    }, [l.id, n.id, c]);
    let N = (0, $.Sn)(n.recurrence_rule),
        C = n?.scheduled_start_time != null ? (0, S.j)(A, h, new Date(n?.scheduled_start_time)) : null;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsxs)("div", {
                className: es.wx,
                children: [
                    (0, t.jsx)(el.L, {
                        startTime: h.toISOString(),
                        endTime: g?.toISOString(),
                        status: C ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: c,
                    }),
                    (0, t.jsx)(K.D, {
                        id: d,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: es.DD,
                        children: n.name,
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: es.rf,
                children: [
                    (0, t.jsx)(ed, { guild: l, onClick: x ? j : void 0, onClose: a }),
                    (0, t.jsx)(et.A, { guildScheduledEvent: n, channel: r, onClose: a }),
                    null != m && (0, t.jsx)(ea, { userCount: m, onClick: u }),
                    null != v && (0, t.jsx)(er, { creator: v, guildId: l.id, channelId: r?.id }, v.id),
                    null != n.description &&
                        (0, t.jsx)("div", {
                            className: es.h_,
                            children: (0, t.jsx)(ee.A, { description: n.description, truncate: !1, guildId: l.id }),
                        }),
                    E.Tn.has(n.entity_type) &&
                        (0, t.jsx)(H.A, { noBackground: !0, divider: H.V.TOP, channelId: r?.id }),
                ],
            }),
            null != N && (0, t.jsx)("hr", { className: es.yF }),
            null != N &&
                (0, t.jsx)(en.A, {
                    guildId: l.id,
                    recurrenceRule: N,
                    guildEventId: n.id,
                    onRecurrenceClick: o,
                    hideScroller: !0,
                    activeRecurrenceId: c,
                }),
        ],
    });
}
var ec = l(364522),
    eo = l(289873),
    ex = l(297413),
    eh = l(489673),
    eg = l(342296),
    em = l(280450),
    ej = l(290863),
    ef = l(461213),
    eA = l(287809),
    ev = l(824242);
function eN(e) {
    let { children: n } = e;
    return (0, t.jsxs)("div", {
        className: ev.do,
        children: [
            (0, t.jsx)(eh.A, {
                children: (0, t.jsx)("div", {
                    className: ev.n1,
                    children: (0, t.jsx)(z.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: ev.Kk,
                    }),
                }),
            }),
            n,
        ],
    });
}
function eI() {
    return (0, t.jsx)(eN, {
        children: (0, t.jsx)(K.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: ev.DD,
            children: ei.intl.string(ei.t.hW0mBR),
        }),
    });
}
function eC() {
    return (0, t.jsx)(eN, {
        children: (0, t.jsx)(K.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: ev.JU,
            children: ei.intl.string(ei.t.obChXk),
        }),
    });
}
function ey(e) {
    let { count: n } = e;
    return (0, t.jsxs)("div", {
        className: ev.f0,
        children: [
            (0, t.jsx)("div", {
                className: D()(ev.Pc, ev.uY),
                children: (0, t.jsx)(z.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: ev.Kk,
                }),
            }),
            (0, t.jsx)(M.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: ei.intl.format(ei.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function e_(e) {
    let { eventUser: n, guildId: l, onContextMenu: r } = e,
        d = i.useRef(null),
        a = (0, s.bG)([eA.default], () => eA.default.getUser(n.user_id)),
        u = (0, s.bG)(
            [ef.A, ej.A, em.default],
            () => (n.user_id === em.default.getId() ? ef.A.getStatus() : ej.A.getStatus(n.user_id, l)),
            [n.user_id, l],
        );
    return null == a
        ? null
        : (0, t.jsx)(eg.A, {
              targetElementRef: d,
              userId: n.user_id,
              guildId: l,
              position: "left",
              spacing: 16,
              children: (e, i) => {
                  let { isShown: s } = i;
                  return (0, t.jsxs)(U.D, {
                      innerRef: d,
                      className: D()(ev.f0, ev.fv, { [ev.wH]: s }),
                      onContextMenu: (e) => r(e, a),
                      ...e,
                      children: [
                          (0, t.jsx)(G.eu, {
                              src: a.getAvatarURL(l, 24),
                              "aria-label": a.username,
                              size: L._3.SIZE_24,
                              className: ev.uY,
                              status: u,
                          }),
                          (0, t.jsx)(ex.A, {
                              user: a,
                              className: ev.sY,
                              discriminatorClass: ev.XU,
                              nick: n.member?.nick,
                          }),
                      ],
                  });
              },
          });
}
function eE(e) {
    let { eventUsers: n, guildId: l, usersNotShownCount: i = 0, onContextMenu: s } = e;
    return (0, t.jsxs)(ec.Ip, {
        className: ev.DK,
        children: [
            n.map((e) => (0, t.jsx)(e_, { guildId: l, eventUser: e, onContextMenu: s }, e.user_id)),
            i > 0 && (0, t.jsx)(ey, { count: i }),
        ],
    });
}
function ep(e) {
    let { children: n } = e;
    return (0, t.jsx)("div", { className: ev.kL, children: n });
}
function eS(e) {
    let { children: n } = e;
    return (0, t.jsx)("div", { className: ev.zC, children: n });
}
function ek(e) {
    let { guildEvent: n, recurrenceId: i, eventUsers: s, loading: r, error: d } = e,
        a = (0, _.A)(n.guild_id, n.id, i);
    if (r && 0 === s.length)
        return (0, t.jsx)(eS, { children: (0, t.jsx)(eo.y, { type: eo.y.Type.SPINNING_CIRCLE, className: ev.u1 }) });
    if (null != d && 0 === s.length) return (0, t.jsx)(eS, { children: (0, t.jsx)(eC, {}) });
    let u = 0;
    return (
        s.length >= E.C1 && a > E.C1 && (u = Math.max(a - s.length, 0)),
        0 === s.length
            ? (0, t.jsx)(eS, { children: (0, t.jsx)(eI, {}) })
            : (0, t.jsx)(ep, {
                  children: (0, t.jsx)(eE, {
                      eventUsers: s,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  l.e("790484"),
                                  l.e("463317"),
                                  l.e("834552"),
                                  l.e("708757"),
                                  l.e("585968"),
                                  l.e("893190"),
                                  l.e("776273"),
                                  l.e("189673"),
                                  l.e("882073"),
                                  l.e("797558"),
                                  l.e("638221"),
                                  l.e("691994"),
                                  l.e("229787"),
                                  l.e("936320"),
                                  l.e("482861"),
                                  l.e("576665"),
                                  l.e("332470"),
                                  l.e("624198"),
                                  l.e("715038"),
                                  l.e("33611"),
                                  l.e("190889"),
                                  l.e("242204"),
                                  l.e("856753"),
                                  l.e("61129"),
                                  l.e("205941"),
                                  l.e("331203"),
                                  l.e("255302"),
                                  l.e("172883"),
                                  l.e("825486"),
                                  l.e("920628"),
                                  l.e("873786"),
                                  l.e("532418"),
                              ]).then(l.bind(l, 668569));
                              return (l) => (0, t.jsx)(e, { ...l, user: n });
                          });
                      },
                      usersNotShownCount: u,
                  }),
              })
    );
}
var eb = l(482857),
    eR = l(652215),
    eT = l(985216);
function eD(e) {
    let { guildEvent: n, guild: l, channel: i, onActionTaken: d, recurrenceId: a } = e,
        u = (0, C.Fd)(n),
        c = (0, s.bG)([A.A], () => A.A.getChannelId()),
        o = c === n.channel_id && null != c && u,
        x = (0, s.bG)([C.Ay], () => C.Ay.isInterestedInEventRecurrence(n.id, a), [a, n]),
        h = (0, y.Ay)(n),
        g = (0, s.bG)([m.A], () => m.A.isLurking(l.id), [l.id]),
        j = (0, p.e)(i?.id, n.id),
        f = (0, eb.A)({ guild: l, channel: i, guildScheduledEvent: n, isActive: u, recurrenceId: a, onActionTaken: d }),
        v = (0, b.Zq)({
            isActive: u,
            isUserLurking: g,
            rsvped: x,
            isChannelPublic: j,
            canInvite: h,
            isJoined: o,
            entityType: n.entity_type,
            ...f,
        }),
        N =
            null != f.onContextMenu
                ? (0, t.jsx)("div", { className: eT.Zv, children: (0, t.jsx)(b.jD, { onClick: f.onContextMenu }) })
                : void 0;
    return (0, t.jsx)(r.H, { leading: N, actions: v });
}
let eG = function (e) {
    let n,
        r,
        { guildScheduledEventId: m, transitionState: A, initialRecurrenceId: y, onClose: p } = e,
        { analyticsLocations: b } = (0, h.Ay)(x.A.GUILD_EVENT_MODAL),
        [T, D] = i.useState(y),
        G = (0, s.bG)([C.Ay], () => C.Ay.getGuildScheduledEvent(m), [m]),
        L = G?.id,
        M = G?.guild_id,
        U = (0, s.bG)([f.A], () => f.A.getGuild(M), [M]),
        P = G?.channel_id,
        w = (0, s.bG)([j.A], () => j.A.getChannel(P), [P]),
        O = (0, g.GV)(),
        [z, K] = i.useState(E.al.EVENT_INFO),
        F = i.useRef(null),
        V = i.useRef(!1),
        Z =
            ((n = (0, s.yK)([C.Ay], () => Object.values(C.Ay.getUsersForGuildEvent(L, null)), [L])),
            (r = (0, s.yK)([C.Ay], () => Object.values(C.Ay.getUsersForGuildEvent(L, T)), [L, T])),
            (0, i.useMemo)(() => {
                let e = r.reduce((e, n) => ((e[n.user_id] = n), e), {}),
                    l = n.filter((n) => {
                        let l = e[n.user_id];
                        return null == l || l.response === E.Qi.INTERESTED;
                    }),
                    t = r.filter((e) => e.response === E.Qi.INTERESTED),
                    i = new Set(),
                    s = [];
                function d(e) {
                    i.has(e.user_id) || (s.push(e), i.add(e.user_id));
                }
                return (l.forEach(d), t.forEach(d), s);
            }, [n, r]));
    i.useLayoutEffect(() => {
        V.current && ((V.current = !1), F.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus());
    }, [z]);
    let q = null != G ? (0, k.A)(G, 2048) : null,
        H = i.useCallback(
            (e) => {
                null != q &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([l.e("95340"), l.e("431658")]).then(l.bind(l, 928625));
                        return (n) => (0, t.jsx)(e, { ...n, imageUrl: q });
                    });
            },
            [q],
        ),
        B = (0, _.A)(M, L, T),
        [Q, { loading: X, error: Y }] = (0, N.A)(() => I.A.getGuildEventUsers(G?.id, T, M)),
        W = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == G
                ? p()
                : W.current ||
                  ((W.current = !0), v.default.track(eR.HAw.OPEN_MODAL, { type: E.BV, guild_id: G.guild_id }));
        }, [G, p]),
        null == G || null == U)
    )
        return null;
    function J(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e !== z && (e === E.al.RSVP_LIST && Q(), (V.current = n), K(e));
    }
    let $ = T ?? (0, S.G3)(G);
    return (0, t.jsx)(h.f5, {
        value: b,
        children: (0, t.jsxs)(d.d, {
            transitionState: A,
            size: "lg",
            onClose: p,
            "aria-label": G.name,
            children: [
                (0, t.jsx)(a.rQ, { title: G.name }),
                G?.image != null &&
                    null != q &&
                    (0, t.jsx)("div", { onContextMenu: H, children: (0, t.jsx)(R.A, { source: q, className: eT.vK }) }),
                (0, t.jsx)(u.c, {
                    children: (0, t.jsx)("div", {
                        ref: F,
                        children: (0, t.jsx)(c.t, {
                            "aria-label": ei.intl.string(ei.t["+1H47t"]),
                            selectedId: z,
                            onChange: J,
                            panelAnimation: "fade",
                            items: [
                                {
                                    id: E.al.EVENT_INFO,
                                    label: ei.intl.string(ei.t.iW6Xuo),
                                    panel: () =>
                                        (0, t.jsx)("div", {
                                            className: eT.SZ,
                                            children: (0, t.jsx)(eu, {
                                                guildEvent: G,
                                                guild: U,
                                                channel: w,
                                                headerId: O,
                                                onClose: p,
                                                onClickInterestedCount: () => J(E.al.RSVP_LIST, !0),
                                                recurrenceId: $,
                                                setRecurrenceId: D,
                                            }),
                                        }),
                                },
                                {
                                    id: E.al.RSVP_LIST,
                                    label: ei.intl.formatToPlainString(ei.t["ZrTT/N"], { userCount: B }),
                                    panel: () =>
                                        (0, t.jsx)("div", {
                                            className: eT.SZ,
                                            children: (0, t.jsx)(ek, {
                                                guildEvent: G,
                                                recurrenceId: $,
                                                eventUsers: Z,
                                                loading: X,
                                                error: Y,
                                            }),
                                        }),
                                },
                            ],
                        }),
                    }),
                }),
                (0, t.jsx)(eD, { guildEvent: G, guild: U, channel: w, onActionTaken: p, recurrenceId: $ }),
            ],
        }),
    });
};
