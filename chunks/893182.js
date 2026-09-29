l.d(t, { m: () => lf });
var n,
    i = l(477900),
    a = l(582128),
    s = l(593673),
    r = l(661531),
    d = l(369606),
    c = l(866665),
    o = l(408278),
    u = l(26430),
    m = l(562073),
    x = l(834730),
    h = l(650583),
    f = l(684343);
function g(e) {
    let { label: t, tabs: l, selectedId: n, panelId: s, getTabId: r, onSelect: d } = e,
        c = a.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                a = i.indexOf(l);
            if (-1 !== a && 0 !== i.length) {
                switch (e.key) {
                    case h.dh.ARROW_RIGHT:
                    case h.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case h.dh.ARROW_LEFT:
                    case h.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case h.dh.HOME:
                        t = 0;
                        break;
                    case h.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: f.vR,
        role: "tablist",
        "aria-label": t,
        children: l.map((e) => {
            let t = e.id === n;
            return (0, i.jsx)(
                "button",
                {
                    type: "button",
                    role: "tab",
                    id: r(e.id),
                    className: f.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(x.E, {
                        className: f.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "none",
                        children: e.label,
                    }),
                },
                e.id,
            );
        }),
    });
}
l(539888);
var j = l(289873),
    p = l(738188),
    v = l(375708),
    _ = l(448492);
function A() {
    return (0, i.jsx)("div", {
        className: _.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": v.intl.string(v.t.ZTNur7) }),
    });
}
function E() {
    return (0, i.jsxs)("div", {
        className: _.w,
        role: "alert",
        children: [
            (0, i.jsx)(p.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: v.intl.string(v.t.F8FvUy) }),
        ],
    });
}
var N = l(980707),
    I = l(477782),
    b = l(922016),
    S = l(297264),
    y = l(847374),
    T = l(914173);
function C(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(N.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                I.iD,
                {
                    id: `${t}-${e.id}`,
                    group: t,
                    label: e.label,
                    checked: e.id === n,
                    action: () => {
                        (s(e.id), r());
                    },
                },
                e.id,
            ),
        ),
    });
}
function w(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: d, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        h = l.find((e) => e.id === n);
    return null == h
        ? null
        : (0, i.jsx)(b.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(C, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(S.D, {
                      variant: "heading-sm/medium",
                      className: T.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: T.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": d,
                          children: [
                              null != h.icon && (0, i.jsx)("span", { className: T.Kk, children: h.icon }),
                              (0, i.jsx)(x.E, {
                                  className: T.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: h.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: T.Kk,
                                  children: (0, i.jsx)(y.a, {
                                      size: "xs",
                                      color: r.A.colors.ICON_DEFAULT,
                                      "aria-hidden": !0,
                                  }),
                              }),
                          ],
                      }),
                  }),
          });
}
var R = l(503698),
    D = l.n(R),
    k = l(17928),
    M = l(364522),
    L = l(663417),
    P = l(140735),
    G = l(97808),
    U = l(778712),
    O = l(463930),
    W = l(821609),
    B = l(192308),
    z = l(80682),
    F = l(967144),
    H = l(885386),
    q = l(153488),
    K = l(696451),
    Y = l(287809),
    $ = l(58703),
    X = l(927813),
    V = l(562153),
    Q = l(331322),
    Z = l(251812);
function J(e) {
    return e.entries.length < 3;
}
function ee(e) {
    return (0, Z.K)(J(e) ? void 0 : e.stat).name;
}
var et = l(104129),
    el = l(823353);
function en() {
    return (0, i.jsxs)(Q.B, {
        className: el.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: v.intl.string(et.default.ULK65a),
            }),
            (0, i.jsx)(x.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: v.intl.format(et.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var ei = l(939249),
    ea = l(342296),
    es = l(518782);
function er(e) {
    let t = Math.floor(Math.max(e, 0) / X.A.Seconds.MINUTE);
    return v.intl.formatToPlainString(et.default["6Y8H0A"], {
        hours: Math.floor(t / X.A.Minutes.HOUR),
        minutes: t % X.A.Minutes.HOUR,
    });
}
function ed(e, t) {
    switch (t) {
        case es.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: v.intl.formatToPlainString(v.t["k2UNz+"], { days: e.value }),
                secondary: er(e.time_played_seconds),
            };
        case es.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: v.intl.formatToPlainString(et.default.rgpc8E, { count: e.value }),
                secondary: er(e.time_played_seconds),
            };
        case es.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / X.A.Millis.MINUTE)) / X.A.Minutes.HOUR)),
                    (i = l % X.A.Minutes.HOUR),
                    0 === n
                        ? v.intl.formatToPlainString(et.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? v.intl.formatToPlainString(et.default["D/HToK"], { hours: n })
                          : v.intl.formatToPlainString(et.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var ec = l(81466),
    eo = l(406810),
    eu = l(687966),
    em = l(109112),
    ex = l(683063),
    eh = l(573435),
    ef = l(402860),
    eg = l(396583),
    ej = l(587895),
    ep = l(429913),
    ev = l(280450);
function e_(e, t) {
    return { id: e, name: v.intl.string(et.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eA(e, t) {
    return e.get(t) ?? e_(t, !1);
}
function eE(e, t) {
    return t.map((t) => eA(e, t));
}
function eN(e, t) {
    let l = t.user_id,
        n = (0, k.bG)([Y.default], () => Y.default.getUser(l), [l]),
        i = (0, k.bG)([K.Ay], () => K.Ay.getMember(e, l), [e, l]),
        a = (0, F.gn)(e, l, i?.colorStrings ?? null),
        s = V.Ay.useName(e, void 0, n),
        r = (0, k.bG)([ev.default], () => ev.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? v.intl.formatToPlainString(et.default.subXXA, { name: d }) : d,
    };
}
var eI = l(518477),
    eb = l(870087);
function eS(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: s,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
        } = e,
        u = eN(t, l),
        m = l.application_ids[0],
        x = null != m ? eA(s, m) : void 0,
        h = l.user_id,
        f = a.useCallback(() => {
            (0, ef.openUserProfileModal)({
                userId: h,
                guildId: t,
                tabSection: eI.RP.ACTIVITY,
                scrollTarget: eI.bk.RECENT_ACTIVITY,
            });
        }, [h, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: D()(eb.nM, { [eb.Bh]: r && !c, [eb.lR]: d }),
        children: [
            (0, i.jsx)(ey, { guildId: t, entry: l, identity: u, lastPlayedGame: x }),
            (0, i.jsx)(ew, { entry: l, stat: n, name: u.baseName, onClick: f }),
            (0, i.jsx)(eM, {
                name: u.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: f,
            }),
        ],
    });
}
function ey(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s } = e,
        r = a.useRef(null),
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT, { rank: l.rank }),
                (0, i.jsx)(G.eu, {
                    size: U._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, U.FT)(U._3.SIZE_32)) ?? void 0,
                    className: eb.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eb.Dc,
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(O.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(x.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: v.intl.formatToPlainString(et.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eb.D_, children: d })
        : (0, i.jsx)(ea.A, {
              targetElementRef: r,
              user: n.user,
              guildId: t,
              children: (e) => (0, i.jsx)(ei.D, { ...e, innerRef: r, className: D()(eb.D_, eb.FB), children: d }),
          });
}
function eT(e) {
    let { rank: t } = e,
        l = v.intl.formatToPlainString(et.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eb.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eb.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eb.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eb.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eb.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eb.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eb.mH,
                children: [
                    (0, i.jsx)(P.A, { children: l }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        tabularNumbers: !0,
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function eC(e) {
    let { stat: t } = e;
    switch (t) {
        case es.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(ec.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case es.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eo.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case es.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eu.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ew(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = ed(t, l);
    return (0, i.jsxs)(ei.D, {
        className: eb.TH,
        "aria-label": v.intl.formatToPlainString(et.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eb.bf,
                children: [
                    (0, i.jsx)(eC, { stat: l }),
                    (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eR(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eb.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eh.Ay, {
            mask: l ? eh.l8[24] : eh.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eb.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eb.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(em._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eD(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eb.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eR, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eb.rO,
                      children: (0, i.jsx)(eh.Ay, {
                          mask: eh.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eb.p0,
                              children: (0, i.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: v.intl.formatToPlainString(et.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function ek(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ex.u, {
        body:
            0 === t.length
                ? v.intl.string(et.default["7CrlYb"])
                : 1 === t.length
                  ? v.intl.formatToPlainString(et.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? v.intl.formatToPlainString(et.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : v.intl.formatToPlainString(et.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eD, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eM(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eE(a, l);
    return (0, i.jsx)("div", {
        className: eb.ag,
        children: (0, i.jsx)(ek, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(ei.D, {
                className: D()(eb.Nw, eb.Dz),
                "aria-label": v.intl.formatToPlainString(et.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eD, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eL = l(189043);
function eP(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r } = e,
        d = {
            1: { column: eL.HC, pillar: eL.P5 },
            2: { column: eL.th, pillar: eL.Vk },
            3: { column: eL.Ou, pillar: eL.el },
        };
    return (0, i.jsx)("div", {
        className: eL.pI,
        role: "list",
        "aria-label": v.intl.string(et.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eG,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: d[l + 1].column,
                    pillarClassName: d[l + 1].pillar,
                    stat: n,
                    games: a,
                    isCurrentUser: e === s,
                    currentUserPillarRef: e === s ? r : void 0,
                },
                e.user_id,
            ),
        ),
    });
}
function eG(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: s,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: o,
            currentUserPillarRef: u,
        } = e,
        m = eE(c, l.application_ids),
        h = eN(t, l),
        { primary: f } = ed(l, d),
        g = 1 === n ? U._3.SIZE_48 : U._3.SIZE_40,
        j = a.useRef(null),
        p = D()(eL.dR, { [eL.m$]: 1 === n, [eL.wd]: 2 === n, [eL.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eL.R3,
                    children: [
                        (0, i.jsx)(G.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, U.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: D()(eL.DX, r),
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eL.IY,
                            children: (0, i.jsx)(O.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(ek, {
                            played: m,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(x.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tabularNumbers: !0,
                                children: f,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: s,
        role: "listitem",
        ref: o ? u : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(ea.A, {
                      targetElementRef: j,
                      user: h.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(ei.D, { ...e, className: eL.fs, innerRef: j, children: v }),
                  })
                : (0, i.jsx)("div", { className: eL.fs, children: v }),
    });
}
var eU = l(652215),
    eO = l(219047);
function eW(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * X.A.Millis.SECOND >= X.A.Millis.WEEK,
        h = (0, k.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        f = a.useMemo(() => o.find((e) => e.user_id === h), [o, h]),
        g = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [o, f]),
        j = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, z.k6)(s, j);
    let p =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, ep.A)(t)),
            (n = (0, k.yK)([ej.A], () => t.map((e) => ej.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : e_(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        {
            scrollerRef: v,
            userRowRef: _,
            floatingRowPosition: A,
        } = (function () {
            let [e, t] = a.useState(null),
                [l, n] = a.useState(null),
                [i, s] = a.useState("unknown");
            return (
                a.useEffect(() => {
                    if (null == e || null == l) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            var t, l;
                            let n,
                                i,
                                [a] = e;
                            if (a?.rootBounds == null) return;
                            let { clippedPx: r, floatTo: d } =
                                ((t = a.boundingClientRect),
                                (n = Math.max(0, (l = a.rootBounds).top - t.top)),
                                {
                                    clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)),
                                    floatTo: n > i ? "top" : "bottom",
                                });
                            s(() => (r <= 1 ? "visible" : d));
                        },
                        { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
                    );
                    return (t.observe(l), () => t.disconnect());
                }, [e, l]),
                { scrollerRef: t, userRowRef: n, floatingRowPosition: "top" === i || "bottom" === i ? i : null }
            );
        })(),
        E = null != A,
        N = null == f && null != h,
        I = a.useCallback(
            (e) => {
                let t = e === f;
                return (0, i.jsx)(
                    eS,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && E,
                        rowRef: t ? _ : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [E, f, p, s, c, _],
        );
    if (J(r)) return (0, i.jsx)(en, {});
    let b = x ? g.slice(3) : g,
        S = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eO.SY,
                children: [
                    (0, i.jsxs)(M.d_, {
                        className: D()(eO.p_, { [eO.zE]: d }),
                        ref: v,
                        children: [
                            x &&
                                (0, i.jsx)(eP, {
                                    guildId: s,
                                    entries: S,
                                    stat: c,
                                    games: p,
                                    currentUserEntry: f,
                                    currentUserPillarRef: _,
                                }),
                            b.map(I),
                        ],
                    }),
                    null != f && null != A && (0, i.jsx)("div", { className: D()(eO.Dz, "top" === A ? eO.gN : eO.qV) }),
                    null != f &&
                        null != A &&
                        (0, i.jsx)("div", {
                            className: D()(eO.z$, "top" === A ? eO.aG : eO.Ie),
                            children: (0, i.jsx)(eS, {
                                guildId: s,
                                entry: f,
                                stat: c,
                                games: p,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                    N && (0, i.jsx)(ez, { guildId: s }),
                ],
            }),
            (0, i.jsx)(eB, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function eB(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eO.z8,
            children: [
                (0, i.jsx)(L.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: v.intl.string(et.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eO.qr, children: n })
        : (0, i.jsx)("div", {
              className: D()(eO.qr, { [eO.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(c.m, {
                  text: v.intl.formatToPlainString(et.default["1bt50t"], { timestamp: (0, $.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function ez(e) {
    let { guildId: t } = e,
        n = H.tz.useSetting(),
        a = H.JG.useSetting(),
        s = (0, k.bG)([q.A], () => q.A.hasConsented(eU.YAq.PERSONALIZATION)),
        r = v.intl.string(et.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = v.intl.string(et.default["8y885d"])), (d = !0)),
        s || ((r = v.intl.string(et.default.mTARYx)), (d = !0)));
    let c = (0, k.bG)([Y.default], () => Y.default.getCurrentUser()),
        o = V.Ay.useName(t, void 0, c),
        u = (0, k.bG)([K.Ay], () => K.Ay.getMember(t, c?.id ?? "")),
        m = (0, F.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eO.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eO.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eO.nk,
                              children: [
                                  (0, i.jsx)(P.A, { children: v.intl.string(et.default["oHdW+u"]) }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(G.eu, {
                              size: U._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, U.FT)(U._3.SIZE_32)) ?? void 0,
                              className: eO.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eO.ko,
                              children: [
                                  (0, i.jsx)(S.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eO.LF,
                                      children: (0, i.jsx)(x.E, {
                                          variant: "text-xs/medium",
                                          color: "text-subtle",
                                          children: r,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  d &&
                      (0, i.jsx)("div", {
                          className: eO.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: v.intl.string(et.default.fMbgeZ),
                              onClick: () => {
                                  var e;
                                  return (
                                      (e = t),
                                      void (0, B.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("120239"),
                                                  l.e("955410"),
                                                  l.e("812720"),
                                                  l.e("251400"),
                                                  l.e("203112"),
                                                  l.e("348567"),
                                                  l.e("264236"),
                                                  l.e("371482"),
                                                  l.e("463095"),
                                                  l.e("252264"),
                                                  l.e("143549"),
                                                  l.e("154630"),
                                                  l.e("610943"),
                                                  l.e("390213"),
                                                  l.e("759174"),
                                                  l.e("340346"),
                                                  l.e("421778"),
                                                  l.e("944602"),
                                                  l.e("863443"),
                                                  l.e("273084"),
                                                  l.e("821403"),
                                                  l.e("525416"),
                                                  l.e("210413"),
                                                  l.e("785888"),
                                                  l.e("758219"),
                                              ]).then(l.bind(l, 499334));
                                              return (l) => (0, i.jsx)(t, { ...l, guildId: e });
                                          },
                                          { modalKey: "guild-space-leaderboard-sharing" },
                                      )
                                  );
                              },
                          }),
                      }),
              ],
          });
}
var eF = l(224640),
    eH = l(20742),
    eq = l(515746);
function eK(e) {
    let { data: t } = e,
        l = (0, Z.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + X.A.Seconds.WEEK) * X.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / X.A.Millis.DAY) - 1) * X.A.Millis.DAY;
            return (
                (0, eg.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(et.default["J8r/7L"])
                            : v.intl.formatToPlainString(et.default["PuaR+2"], { days: Math.ceil(i / X.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = H.PZ.useSetting(),
        c = 2 > (0, $.m_)(s, new Date()) ? (0, $.mk)(s, !1, d) : (0, $.i$)(s, "L LT", d),
        o = n
            ? v.intl.format(et.default.kG9XmM, { endedAt: c, nextStatName: (0, Z.K)(t.next_stat).name })
            : v.intl.format(et.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ex.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eq.q,
            tabIndex: 0,
            children: (0, i.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eY = l(460614);
function e$(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eF.d, {
        size: "lg",
        "aria-label": ee(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: eY.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: eY.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eY.DD, children: ee(l) }),
                            (0, i.jsx)(eK, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(eH.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: eY.rf, children: (0, i.jsx)(eW, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eX = l(452027),
    eV = l(103557),
    eQ = l(825484),
    eZ = l(95477),
    eJ = l(241326),
    e0 = l(683071),
    e1 = l(2553),
    e8 = l(405810),
    e2 = l(967198),
    e3 = l(488428),
    e7 = l(776231);
let e4 = (0, l(676279).cy)();
function e6(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e4 ? "webp" : "gif") : e4 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eU.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e7.kr)(500 * (0, e7.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e3.stringify(c)}`)
    );
}
var e5 = l(868602),
    e9 = l(445187),
    te = l(28863),
    tt = l(109487),
    tl = l(272984),
    tn = l(279543);
function ti(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tn.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tn.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tn.Kk,
                        children: (0, i.jsx)(L.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(x.E, {
                        className: tn.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(et.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(te.Anchor, {
                className: tn.al,
                href: tl.RQ.WEB_HOME,
                "aria-label": v.intl.string(et.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tn.Kk,
                        children: (0, i.jsx)(tt.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(x.E, {
                            className: tn.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(et.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var ta = l(872351),
    ts = l(708988),
    tr = l(104171),
    td = l(628137);
let tc = "none",
    to = (e, t) => (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tu(e) {
    return e;
}
function tm(e) {
    return e?.direction ?? tc;
}
function tx(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: v.intl.formatToPlainString(et.default["h+LUpk"], { percent: l }) };
}
var th = l(633099);
function tf(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? ta.z : ts.M;
    return (0, i.jsxs)("span", {
        className: D()(th.GW, { [th.$J]: "up" === t.direction, [th.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tg(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, z.k6)(l, s);
    let r = (0, k.yK)([Y.default], () => s.map((e) => Y.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: th.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            v.intl.formatToPlainString(et.default.AzIhRB, { count: t, trend: tc, countHook: tu })),
        children: (0, i.jsx)(tr.Ay, {
            users: d,
            guildId: l,
            size: tr.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: th.ju,
                    children: (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: v.intl.formatToPlainString(et.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tj(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: D()(th.yp, { [th.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: th.QD,
                  children: [
                      null != l && (0, i.jsx)(x.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: th._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(x.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tf, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tp(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tx(s);
    return (0, i.jsxs)("div", {
        className: D()(th.yp, { [th.Fl]: n }),
        children: [
            a && (0, i.jsx)(td.A, { className: th.aF, resourceType: tl.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: th.QD,
                children: [
                    (0, i.jsx)(tg, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: th._0,
                        children: [
                            (0, i.jsx)(x.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    v.intl.format(et.default["7hHUIS"], { count: t, trend: tm(r), countHook: to })),
                            }),
                            null != r && (0, i.jsx)(tf, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tv = l(197935),
    t_ = l(915734);
function tA(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: D()(t_.Dk, { [t_.yI]: n }),
        children: (0, i.jsx)(tv.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: t_.o1,
            "aria-label": t,
        }),
    });
}
var tE = l(362704),
    tN = l(782134),
    tI = l(292801),
    tb = l(432017),
    tS = l(605810);
function ty(e) {
    let { src: t, children: l } = e,
        [n, s] = a.useState(t),
        [d, c] = a.useState(!1);
    return (
        n !== t && (s(t), c(!1)),
        (0, i.jsxs)("span", {
            className: tS.xX,
            children: [
                null == t || d
                    ? (0, i.jsx)("span", {
                          className: tS.zf,
                          children: (0, i.jsx)(tb.T, { size: "md", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                      })
                    : (0, i.jsx)("img", {
                          className: tS.wb,
                          src: t,
                          alt: "",
                          "aria-hidden": !0,
                          loading: "lazy",
                          onError: () => c(!0),
                      }),
                l,
            ],
        })
    );
}
function tT(e) {
    var t;
    let { song: l, isSelected: n, onSelect: a, itemProps: s } = e,
        r = null != l.cover_art_hash ? tl.RQ.IMAGE(l.cover_art_hash) : null;
    return (0, i.jsxs)("div", {
        className: tS.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: D()(tS.MT, { [tS.tY]: n }),
                "aria-pressed": n,
                onClick: () => a(l.track_external_id),
                children: [
                    (0, i.jsxs)(ty, {
                        src: r,
                        children: [
                            n &&
                                (0, i.jsx)("span", {
                                    className: D()(tS.Lw, tS.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tE.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: D()(tS.Lw, tS.vY),
                                children: [
                                    (0, i.jsx)(tN.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(x.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children:
                                            ((t = l.plays),
                                            v.intl.formatToPlainString(et.default["7X+3f8"], { count: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != l.track_title &&
                        (0, i.jsxs)("span", {
                            className: tS.Qq,
                            children: [
                                (0, i.jsx)(x.E, {
                                    className: tS.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: l.track_title,
                                }),
                                null != l.artist_name &&
                                    (0, i.jsx)(x.E, {
                                        className: tS.VA,
                                        tag: "span",
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: l.artist_name,
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(te.Anchor, {
                className: tS.ql,
                tabIndex: s.tabIndex,
                href: tl.RQ.WEB_OPEN(tl.M0.TRACK, l.track_external_id),
                "aria-label": v.intl.string(et.default["jUr+wF"]),
                useDefaultUnderlineStyles: !1,
                children: (0, i.jsx)(tI.t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
        ],
    });
}
var tC = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tw = ["top_songs", "top_artists", "top_listeners"];
function tR(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(et.default.KgeEtx);
        case "top_artists":
            return v.intl.string(et.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(et.default.KO73KB);
    }
}
function tD(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tk(e) {
    return `popular-music-panel-${e}`;
}
var tM = l(196765),
    tL = l(770178);
let tP = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    tG = (0, tM.v)(() => ({ byWidgetId: {} }));
function tU(e, t) {
    tG.setState((l) => {
        let n = l.byWidgetId[e] ?? tP;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function tO(e) {
    return tG((t) => t.byWidgetId[e]?.view ?? tP.view);
}
function tW(e) {
    return tG((t) => t.byWidgetId[e]?.isCompact ?? tP.isCompact);
}
function tB(e) {
    return tG((t) => t.byWidgetId[e]?.selectedTrackId ?? tP.selectedTrackId);
}
function tz(e, t) {
    (tG.getState().byWidgetId[e] ?? tP).view !== t && tU(e, { view: t, selectedTrackId: null });
}
var tF = l(742452);
function tH(e) {
    return e.track_external_id;
}
function tq(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = tB(s),
        o = tG((e) => e.byWidgetId[s]?.canShowEmbed ?? tP.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = tG.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void tU(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(tT, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tx(d.summary);
    return (0, i.jsxs)("div", {
        className: tF.U,
        children: [
            (0, i.jsx)(tA, {
                label: tR(tC.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: tH,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tp, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tj, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / X.A.Millis.MINUTE);
                          return l < 1 ? null : v.intl.formatToPlainString(et.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : v.intl.format(et.default.AzIhRB, { count: l, trend: tm(h), countHook: to })),
                      trend: h,
                  }),
        ],
    });
}
var tK = l(756936);
function tY(e) {
    let { view: t, data: l } = e;
    return (0, i.jsxs)("div", {
        className: tK.rv,
        children: [
            (0, i.jsx)(x.E, { variant: "text-sm/semibold", color: "text-default", children: tR(t) }),
            (function (e, t) {
                switch (e) {
                    case "top_songs":
                        return t.ranked_songs.map((e) => e.track_title ?? e.track_external_id);
                    case "top_artists":
                        return t.ranked_artists.map((e) => e.artist_name ?? e.artist_external_id);
                    case "top_listeners":
                        return t.top_listeners.map((e) => e.user_id);
                }
            })(t, l).map((e, t) =>
                (0, i.jsx)(
                    x.E,
                    { className: tK.tH, variant: "text-sm/normal", color: "text-muted", children: e },
                    `${e}-${t}`,
                ),
            ),
        ],
    });
}
var t$ = l(831544),
    tX = l(597601),
    tV = l(871107);
function tQ(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tC.TOP_ARTISTS:
            return (0, i.jsx)(t$.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tC.TOP_LISTENERS:
            return (0, i.jsx)(tX.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tC.TOP_SONGS:
            return (0, i.jsx)(tb.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function tZ(e) {
    let { widgetId: t, title: l } = e,
        n = tW(t),
        a = tO(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: tV.$,
            children: [
                (0, i.jsx)("span", {
                    className: tV.K,
                    children: (0, i.jsx)(tb.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = tw.map((e) => ({ id: e, label: tR(e), icon: (0, i.jsx)(tQ, { view: e }) }));
    return (0, i.jsx)(w, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(et.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(et.default["/sw0JL"], { widgetName: l, viewName: tR(a) }),
        onSelect: (e) => tz(t, e),
    });
}
var tJ = l(890497),
    t0 = l(734057),
    t1 = l(317525),
    t8 = l(576705),
    t2 = l(935208),
    t3 = l(44167);
l(321073);
var t7 = l(485845),
    t4 = l(136722),
    t6 = l(435183),
    t5 = l(155718),
    t9 = l(795816),
    le = l(933958),
    lt = l(574152),
    ll = l(627363),
    ln = l(712440),
    li = l(733110),
    la = l(488926),
    ls = l(818023);
async function lr(e) {
    null == ej.A.getApplication(ls.NW) && (await (0, ll.TA)(ls.NW));
    let t = le.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ls.NW);
    return await (0, t9.su)({
        channelId: e,
        applicationId: ls.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lt.A)(),
        renderInFramePool: !0,
    });
}
async function ld(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: t5.r2.ROLE, allow: la.x3, deny: eU.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: t5.r2.ROLE, allow: eU.xBc.USE_EMBEDDED_ACTIVITIES, deny: la.x3 });
    let i = await (0, t6.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lc = [];
var lo = l(344351),
    lu = l(256693),
    lm = l(812901),
    lx = l(317608),
    lh = l(953538);
let lf = {
    [s.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e6(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e9.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e9.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(x.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e9.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                r = t.config,
                [d, u] = a.useState(r.title ?? ""),
                [m, x] = a.useState(r.text ?? ""),
                [h, f] = a.useState(r.image),
                [g, j] = a.useState(null),
                p = (0, k.bG)([e2.A], () => e2.A.getGuildId()),
                _ = void 0 !== h ? h : null != r.image_hash && null != p ? e6(p, t.id, r.image_hash) : null;
            return (0, i.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eZ.k, {
                        label: v.intl.string(v.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eX.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(Q.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e5.B,
                            children: [
                                (0, i.jsxs)(Q.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e8.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e1.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(c.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: eJ.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": v.intl.string(v.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e5.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eV.f, {
                        label: v.intl.string(v.t.COGMNC),
                        value: m,
                        onChange: function (e) {
                            (j(null), x(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != g &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(e0.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eQ.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: v.intl.string(v.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != r.image_hash),
                                        0 === m.length && !e && (j(v.intl.string(et.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: s.a.IMAGE_TEXT,
                                        image_hash: r.image_hash,
                                        text: m.length > 0 ? m : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    (void 0 !== h && (t.image = h), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(m.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [s.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, i.jsx)(A, {})
                : "error" === t.status
                  ? (0, i.jsx)(E, {})
                  : (0, i.jsx)(eW, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(m.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(m.q, { children: ee(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || J(t.data) ? null : (0, i.jsx)(eK, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && J(n)
                ? null
                : (0, i.jsx)(c.m, {
                      text: v.intl.string(v.t.dcl9MQ),
                      children: (0, i.jsx)(o.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: u._,
                          "aria-label": v.intl.string(v.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(e$, { guildId: t, data: l, modalProps: e });
                                      (0, B.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: n });
                          },
                      }),
                  });
        },
    },
    [s.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                s,
                r,
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (n = a.useRef(null)),
                    (s = a.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            tU(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, tL.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            tG.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = tW(c.id),
                h = tO(c.id),
                f = tB(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success"
                        ? ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tl.RQ.IMAGE(r))
                        : null;
            return (0, i.jsxs)("div", {
                className: tK.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: tK.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: tK.Qs,
                        children: (0, i.jsx)("div", {
                            id: tk(c.id),
                            className: tK.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tR(h),
                            "aria-labelledby": g ? tD(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(A, {});
                                if ("error" === o.status) return (0, i.jsx)(E, {});
                                switch (h) {
                                    case tC.TOP_SONGS:
                                        return (0, i.jsx)(tq, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tC.TOP_ARTISTS:
                                    case tC.TOP_LISTENERS:
                                        return (0, i.jsx)(tY, { view: h, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(ti, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? v.intl.string(et.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(tZ, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = tW(t.id),
                a = tO(t.id);
            return n
                ? null
                : (0, i.jsx)(g, {
                      label: l,
                      tabs: tw.map((e) => ({ id: e, label: tR(e) })),
                      selectedId: a,
                      panelId: tk(t.id),
                      getTabId: (e) => tD(t.id, e),
                      onSelect: (e) => tz(t.id, e),
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, t3.n)(),
                s = (0, k.bG)(
                    [t0.A, t8.A],
                    () => {
                        let e = null != n ? t0.A.getChannel(n) : void 0;
                        return null != e && t8.A.can(eU.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, k.bG)(
                    [le.Ay],
                    () => {
                        let e = le.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== ls.NW ||
                            e.location.kind !== lo.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, k.bG)([le.Ay], () => le.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: o } =
                    ((t = (0, k.bG)(
                        [li.default],
                        () => li.default.getFetchStateForApplication(ls.NW) === li.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, k.bG)(
                        [li.default, ej.A],
                        () => {
                            let e = li.default.getNewestTokenForApplication(ls.NW);
                            if (null == e) return !1;
                            let t = ej.A.getApplication(ls.NW),
                                l = t?.integrationTypesConfig?.[t7.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (li.default.getFetchStateForApplication(ls.NW) === li.FetchState.NOT_FETCHED &&
                            ln.A.fetch([ls.NW]),
                            null == ej.A.getApplication(ls.NW) && (0, ll.TA)(ls.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && c && o && !u.current && ((u.current = !0), lr(n));
            }, [s, n, r, c, o]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), lr(n));
                }, [n]),
                h = null != n && c && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: lh.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(lx.A, {
                                  frameId: (0, lu.Ri)(r),
                                  level: lm.A.WithinAppContent,
                                  className: lh.t$,
                              }),
                          null == r &&
                              h &&
                              (0, i.jsx)("div", {
                                  className: lh.P5,
                                  children: (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: v.intl.string(et.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: lh.kL,
                      children: (0, i.jsx)("div", {
                          className: lh.m0,
                          children: (0, i.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(et.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, k.bG)([e2.A], () => e2.A.getGuildId()),
                n = t2.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, t3.n)(),
                r = (0, k.bG)([t0.A], () => (null != s ? t0.A.getChannel(s) : void 0), [s]),
                d = (0, k.bG)([t8.A], () => null != r && t8.A.can(eU.xBc.MANAGE_ROLES, r), [r]),
                c = (0, k.bG)([t1.A], () => (null == l ? lc : t1.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          t4.zy(e.deny, eU.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && t4.zy(t.allow, eU.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                [f, g] = a.useState(!1),
                j = u ?? o,
                p = a.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function _() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await ld({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(Q.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(tJ.Z, {
                              selectionMode: "multiple",
                              label: v.intl.string(et.default.XXLbfv),
                              description: v.intl.string(et.default.XrpYIG),
                              placeholder: v.intl.string(et.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e0.w, { type: "warning", children: v.intl.string(et.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e0.w, {
                                      type: "critical",
                                      children: v.intl.string(et.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eQ.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: v.intl.string(v.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(W.$, {
                                      variant: "primary",
                                      text: v.intl.string(v.t["R3BPH+"]),
                                      onClick: _,
                                      disabled: !d,
                                      loading: x,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: n, role: a, width: s = 288, height: r = 192 } = e;
            return (0, i.jsx)("img", {
                style: { width: s, height: r },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": n,
                role: a ?? "img",
            });
        },
    },
};
