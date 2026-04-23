t.r(n), t.d(n, { default: () => nN });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(554146),
    c = t(661531),
    o = t(740426),
    u = t(761508),
    _ = t(777666),
    h = t(726249),
    m = t(826673),
    x = t(742589),
    C = t(419534),
    g = t(192308),
    A = t(892547),
    p = t(821609),
    f = t(307301),
    N = t(140130),
    j = t(274541),
    v = t(761640),
    b = t(769765),
    E = t(808728),
    I = t(71393),
    w = t(576705),
    S = t(954571);
t(321073);
var y = t(3026),
    D = t(990078),
    O = t(834730),
    L = t(243721),
    R = t(602853),
    M = t(939249),
    G = t(658675),
    B = t(475825),
    T = t(442433),
    k = t(47167),
    H = t(721592),
    P = t(35275),
    U = t(166444),
    V = t(46054),
    F = t(454058),
    q = t(976860),
    W = t(138298),
    K = t(790535),
    Z = t(695633),
    Y = t(228366),
    z = t(914430),
    J = t(924985),
    X = t(543465),
    Q = t(816662),
    $ = t(234053),
    ee = t(652215);
function en(e) {
    Y.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
var et = t(985018);
function el(e, n, t) {
    return (0, r.bG)([X.Ay], () => {
        var l;
        return n === t
            ? X.Ay.isChannelOptedIn(e, n, !0)
            : ((l = X.Ay),
              !!(0, $.cE)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && X.Ay.isChannelOptedIn(e, t, !0)));
    });
}
function ei(e, n, t) {
    return (0, r.bG)([X.Ay], () => n !== t && null != t && X.Ay.isChannelOptedIn(e, t, !0));
}
var es = t(534514),
    ea = t(789645),
    er = t(367727),
    ed = t(997509),
    ec = t(174998),
    eo = t(395504),
    eu = t(49999),
    e_ = t(176771);
function eh(e) {
    let { guild: n } = e,
        t = (0, eo.Xn)(n.id),
        i = (0, m.JZ)(d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        s = t && !i ? d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : d.M.CHANNEL_BROWSER_NUX;
    (0, er.Vh)(s);
    let r = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(es.D, {
                              className: e_.R_,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: et.intl.string(et.t.AalzkJ),
                          }),
                          (0, l.jsx)(O.E, {
                              className: e_.h_,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: et.intl.string(et.t.CXh95Z),
                          }),
                          (0, l.jsx)(p.$, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  ed.A.open(n.id, ee.BEX.ONBOARDING), (0, m.Dr)(s, { dismissAction: eu.i.PRIMARY });
                              },
                              text: et.intl.string(et.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(ec.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: e_.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: e_.Sl,
                      src: "/assets/b755a73425584e3c.svg",
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(es.D, {
                              className: e_.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: et.intl.string(et.t.utqWEC),
                          }),
                          (0, l.jsx)(O.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: et.intl.string(et.t["+9etcM"]),
                          }),
                          (0, l.jsx)(O.E, {
                              className: e_.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: et.intl.format(et.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: a()(e_.kL, { [e_.xY]: t }),
        children: [
            (0, l.jsx)(M.D, {
                className: e_.b,
                onClick: () => {
                    (0, m.Dr)(s, { dismissAction: eu.i.DISMISS });
                },
                children: (0, l.jsx)(ea.P, { size: "md", color: "currentColor" }),
            }),
            r,
        ],
    });
}
var em = t(746080),
    ex = t(650583),
    eC = t(540864),
    eg = t(992595);
let eA = new Set([ee.rbe.GUILD_FORUM, ee.rbe.GUILD_MEDIA]),
    ep = new Set([ee.rbe.GUILD_VOICE, ee.rbe.GUILD_STAGE_VOICE]);
function ef(e) {
    let { guild: n, channel: i, onCategoryClick: s } = e,
        r = el(n.id, i.id, i.id),
        d = ei(n.id, i.id, i.id),
        c = (0, k.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(eC.Fv, { [eC.d0]: "null" === i.id }),
        onContextMenu: (e) => {
            (0, T.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e("18733"), t.e("30997")]).then(t.bind(t, 71132));
                return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: n });
            });
        },
        children: [
            (0, l.jsx)(O.E, {
                className: eC.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(L.d, {
                        label: et.intl.string(et.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(n.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let eN = i.memo(function () {
        return (0, l.jsx)("div", { className: eC.me });
    }),
    ej = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(O.E, { variant: "text-xs/normal", className: eC.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    ev = i.memo(function (e) {
        var n, i;
        let s,
            {
                channel: d,
                category: o,
                guild: u,
                isFirstChannel: h,
                isLastChannel: m,
                onChannelClick: x,
                tooltipDirection: g = "right",
            } = e,
            { isSubscriptionGated: A } = (0, H.A)(d.id),
            f = el(u.id, d.id, o.id),
            N = ei(u.id, d.id, o.id),
            j =
                ((n = u.id),
                (i = o.id),
                (0, r.bG)([X.Ay], () => {
                    if (null != i && X.Ay.isChannelOptedIn(n, i, !0)) return et.intl.string(et.t.Lz94y1);
                })),
            v = (0, k.Ay)(d),
            b = (0, r.bG)([Z.A], () => Z.A.getActiveThreadCount(u.id, d.id)),
            E = (0, r.bG)([F.A], () => F.A.shouldIndicateNewChannel(u.id, d.id)),
            I =
                ((s = []),
                ee.kvI.GUILD_THREADS_ONLY.has(d.type) &&
                    b >= 1 &&
                    s.push(
                        (0, l.jsx)(
                            O.E,
                            {
                                variant: "text-xs/normal",
                                className: eC.qy,
                                children: et.intl.format(et.t.z0qML2, { count: b }),
                            },
                            "thread-count",
                        ),
                    ),
                ep.has(d.type) ||
                    s.push(
                        (0, l.jsx)(
                            O.E,
                            { variant: "text-xs/normal", className: eC.qy, children: (0, C.YC)(d.id) },
                            "active",
                        ),
                    ),
                null != d.topic &&
                    d.topic.length > 0 &&
                    s.push(
                        (0, l.jsx)(
                            y.A,
                            {
                                className: eg.PT,
                                children: (0, l.jsx)(O.E, {
                                    className: eC.At,
                                    variant: "text-xs/normal",
                                    children: V.A.parseTopic(d.topic, !0, { channelId: d.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [s.map((e, n) => [e, (0, l.jsx)(ej, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1)),
            w = (e) => (
                (e.stopPropagation(), eA.has(d.type) || e.shiftKey)
                    ? (0, q.uh)(u.id, d.id)
                    : d.isGuildStageVoice() || d.isGuildVoice()
                      ? (0, K.av)(d)
                      : W.A.openChannelAsSidebar({
                            guildId: d.guild_id,
                            channelId: d.id,
                            baseChannelId: em.VV.CHANNEL_BROWSER,
                        }),
                !0
            ),
            S = et.intl.string(et.t.vetGQs);
        d.isGuildStageVoice() || d.isGuildVoice()
            ? (S = et.intl.string(et.t.VJlc0S))
            : d.isForumLikeChannel() && (S = et.intl.string(et.t["3xjX0U"]));
        let L = N ? "text-muted" : "text-default",
            B = (0, R.r)(N ? c.A.colors.TEXT_MUTED : c.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(D.m, {
                    text: j,
                    delay: 500,
                    position: g,
                    children: (0, l.jsxs)(M.D, {
                        className: a()(eC.WG, { [eC.Qn]: h, [eC.wp]: m, [eC.r9]: N }),
                        onClick: (e) => {
                            if (!N) return e.stopPropagation(), x(u.id, d.id, o.id), !0;
                        },
                        onContextMenu: (e) => {
                            d.isGuildVocal()
                                ? (0, T.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("97262"),
                                          t.e("38727"),
                                          t.e("99854"),
                                          t.e("53378"),
                                      ]).then(t.bind(t, 119357));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: d, guild: u });
                                  })
                                : (0, T.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("97262"),
                                          t.e("38727"),
                                          t.e("85298"),
                                      ]).then(t.bind(t, 468916));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: d, guild: u });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: eC.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eC.HA,
                                        children: [
                                            (0, l.jsx)(U.gm, { channel: d, guild: u }),
                                            (0, l.jsx)(y.A, {
                                                className: eC.__invalid_name,
                                                children: (0, l.jsx)(O.E, {
                                                    className: eC.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: L,
                                                    children: v,
                                                }),
                                            }),
                                            A ? (0, l.jsx)(P.A, { color: B, className: eC.PC }) : null,
                                            E
                                                ? (0, l.jsx)(_.Lp, {
                                                      text: et.intl.string(et.t.y2b7CA),
                                                      color: c.A.unsafe_rawColors.BRAND_260.css,
                                                      className: eC.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: eC.Ze, children: I }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eC.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: eC.Kx,
                                        children: (0, l.jsx)(p.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: w,
                                            text: S,
                                            onKeyDown: (e) => {
                                                (e.key === ex.dh.ENTER || e.key === ex.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), w(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(G.P, { checked: f, disabled: N }),
                                ],
                            }),
                        ],
                    }),
                }),
                !m && (0, l.jsx)(eN, {}),
            ],
        });
    });
function eb(e) {
    var n, t;
    let s,
        { categories: c, guild: o, className: u, innerClassName: _, hasSidebar: h } = e,
        { onChannelClick: x } =
            ((n = o.id),
            (s = (0, r.bG)([X.Ay], () => X.Ay.getPendingChannelUpdates(n))),
            i.useEffect(() => (en(n), () => en(n)), [n]),
            i.useEffect(() => {
                null != s && (0, Q.hp)(n, s);
            }, [n, s]),
            {
                onChannelClick: i.useCallback((e, n, t) => {
                    let l = X.Ay.isChannelOptedIn(e, n),
                        i = n === t;
                    !l && J.A.isCollapsed(t) && null != t && (0, z.fh)(t),
                        (0, $.cE)(e)
                            ? i
                                ? (0, $.le)(e, { include: new Set([n]) })
                                : (0, $.le)(e, { exclude: new Set([n]) })
                            : (0, Q.zk)(e, n, !l, { section: ee.JJy.CHANNEL_BROWSER });
                }, []),
            }),
        g = (0, m.JZ)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        A = i.useCallback(
            (e) => {
                let { section: n } = e;
                if (0 === n && -1 === g) return null;
                let t = c._categories[n + g];
                return (0, l.jsx)(ef, { channel: t.channel, guild: o, onCategoryClick: x }, t.channel.id);
            },
            [c, o, g, x],
        ),
        p = i.useCallback(
            (e) => {
                let { section: n, row: t } = e;
                if (0 === n && -1 === g) return (0, l.jsx)(eh, { guild: o });
                let i = c._categories[n + g],
                    s = c[i.channel.id][t];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          ev,
                          {
                              category: i.channel,
                              channel: s.channel,
                              guild: o,
                              isFirstChannel: 0 === t,
                              isLastChannel: c[i.channel.id].length - 1 === t,
                              tooltipDirection: h ? "right" : "top",
                              onChannelClick: x,
                          },
                          s.channel.id,
                      );
            },
            [c, o, g, h, x],
        ),
        f = ((t = o.id), (0, eo.Xn)(t) ? 250 : 152),
        N = (0, C.zH)(o.id, c, 64, f);
    return (0, l.jsx)(
        B.Ei,
        {
            className: u,
            innerClassName: a()(_, eC.bv),
            sectionHeight: 48,
            rowHeight: (e) => N[e].rowHeight,
            renderSection: A,
            renderRow: p,
            sections: N.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
var eE = t(551348);
function eI(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(N.A, {
        sidebarType: N.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(j.A, { channelId: n, baseChannelId: em.VV.CHANNEL_BROWSER }),
    });
}
function ew(e) {
    let { guildId: n } = e,
        [s, a] = i.useState(""),
        d = (0, r.bG)([I.A], () => I.A.getGuild(n)),
        c = (0, r.bG)([E.Ay], () => E.Ay.getChannels(n)),
        o = (0, r.bG)([b.A], () => b.A.getCategories(n)),
        u = (0, C.vh)(n, o, c, s),
        _ = (0, r.bG)([w.A], () => w.A.canWithPartialContext(ee.xBc.MANAGE_CHANNELS, { guildId: n })),
        h = (0, r.bG)([v.Ay], () => null != v.Ay.getCurrentSidebarChannelId(em.VV.CHANNEL_BROWSER)),
        m = i.useCallback(() => a(""), [a]),
        x = i.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e("9431"), t.e("40988")]).then(t.bind(t, 113194));
                return (t) => (0, l.jsx)(e, { ...t, channelType: null, guildId: n });
            });
        }, [n]);
    return null == d
        ? null
        : (0, l.jsxs)("div", {
              className: eE.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: eE.wx,
                      children: [
                          (0, l.jsx)(A.I, {
                              query: s,
                              onChange: (e) => {
                                  "" === s &&
                                      "" !== e &&
                                      S.default.track(ee.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      a(e.toLowerCase());
                              },
                              onClear: m,
                              placeholder: et.intl.string(et.t.s5MnmC),
                          }),
                          _ ? (0, l.jsx)(p.$, { icon: f.j, onClick: x, text: et.intl.string(et.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(eb, { className: eE.T, channels: c, categories: u, guild: d, hasSidebar: h }),
              ],
          });
}
var eS = t(202776),
    ey = t(462887),
    eD = t(778712),
    eO = t(97808),
    eL = t(545442),
    eR = t(689175),
    eM = t(334738),
    eG = t(241524),
    eB = t(964486),
    eT = t(736653),
    ek = t(793574),
    eH = t(562819),
    eP = t(963977),
    eU = t(164956),
    eV = t(713804),
    eF = t(676608),
    eq = t(999291),
    eW = t(62199),
    eK = t(576622),
    eZ = t(696451),
    eY = t(317525),
    ez = t(222823),
    eJ = t(287809),
    eX = t(403362),
    eQ = t(427262),
    e$ = t(19575),
    e0 = t(669953),
    e1 = t(817818),
    e6 = t(591552),
    e5 = t(961973),
    e4 = t(735438),
    e7 = t.n(e4),
    e2 = t(665260),
    e9 = t(355097);
function e3(e) {
    Y.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let e8 = {};
function ne(e) {
    let n = (0, r.bG)([e6.A], () => e6.A.getPendingResponseOptions(e) ?? e8, [e]);
    return (
        i.useEffect(() => (e3(e), () => e3(e)), [e]),
        i.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && e0.A.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: i.useCallback(
                (n, t, l) => {
                    let i = e6.A.getOnboardingResponses(e),
                        { addedRoleIds: s, removedRoleIds: a } = (function (e, n, t, l) {
                            let i = [],
                                s = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => l.includes(e.id));
                                (i = e7().difference(n.roleIds ?? [], t?.roleIds ?? [])),
                                    (s = e7().difference(t?.roleIds ?? [], n.roleIds ?? []));
                            } else if (t) (i = n.roleIds ?? []), (s = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    a = t.filter((e) => n.id !== e.id),
                                    r = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(eX.Vq),
                                    d = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(eX.Vq);
                                (i = []), (s = e7().difference(r, d));
                            }
                            return { addedRoleIds: i, removedRoleIds: s };
                        })(n, t, l, i),
                        { addedChannelIds: r, removedChannelIds: d } = (function (e) {
                            let { guildId: n, prompt: t, option: l, selected: i, responses: s } = e,
                                a = [],
                                r = [];
                            if (t.singleSelect && i) {
                                let e = t.options.find((e) => s.includes(e.id));
                                (a = e7().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (r = e7().difference(e?.channelIds ?? [], l.channelIds ?? []));
                            } else if (i) (a = l.channelIds ?? []), (r = []);
                            else {
                                let e = t.options.filter((e) => s.includes(e.id)),
                                    n = e.filter((e) => l.id !== e.id),
                                    i = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(eX.Vq),
                                    d = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(eX.Vq);
                                (a = []), (r = e7().difference(i, d));
                            }
                            return (
                                (0, $.cE)(n) && a.push(...e6.A.getDefaultChannelIds(n)),
                                { addedChannelIds: a, removedChannelIds: r }
                            );
                        })({ guildId: e, prompt: n, option: t, selected: l, responses: i }),
                        c = r.reduce((n, t) => {
                            let l = X.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e2.lA)(l, e9.vv.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        o = d.reduce((n, t) => {
                            let l = X.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e2.lA)(l, e9.vv.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        u = { ...c, ...o };
                    e0.A.selectOption(e, n.id, t.id, l),
                        Y.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: u }),
                        e0.A.updateRolesLocal(e, s, a);
                },
                [e],
            ),
        }
    );
}
var nn = t(218785),
    nt = t(702841),
    nl = t(875150),
    ni = t(953727);
function ns(e) {
    let { width: n = 120, height: t = 80, backgroundColor: i, foregroundColor: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, ni.A)(a),
        width: n,
        height: t,
        viewBox: "0 0 120 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, l.jsx)("circle", { cx: "60", cy: "40", r: "32", fill: i }),
            (0, l.jsx)("path", {
                d: "M75.0832 29.8546L75.0835 29.8548C75.1362 29.884 75.1683 29.9391 75.1683 29.9983C75.1683 30.5369 75.1197 37.4409 73.0784 44.1629C71.005 50.9907 67.1615 56.8317 60.0016 56.8317C52.8418 56.8317 48.9982 50.9907 46.9248 44.1629C44.8836 37.4409 44.835 30.5369 44.835 29.9983C44.835 29.9391 44.8671 29.884 44.9197 29.8548L44.9201 29.8546L59.919 21.5218C59.9191 21.5218 59.9193 21.5217 59.9194 21.5216C59.9718 21.4928 60.0316 21.4928 60.0839 21.5217C60.084 21.5217 60.0842 21.5218 60.0843 21.5218L75.0832 29.8546ZM52.2516 46.6667V48.1667H53.7516H66.2516H67.7516V46.6667C67.7516 44.43 67.0409 42.4584 65.6254 41.0429C64.7687 40.1861 63.7082 39.5876 62.5086 39.2485C64.3809 38.3237 65.6683 36.3949 65.6683 34.165C65.6683 31.0349 63.1317 28.4983 60.0016 28.4983C56.8715 28.4983 54.335 31.0349 54.335 34.165C54.335 36.3949 55.6224 38.3237 57.4947 39.2485C56.295 39.5876 55.2346 40.1861 54.3778 41.0429C52.9623 42.4584 52.2516 44.43 52.2516 46.6667Z",
                fill: s,
                stroke: s,
                strokeWidth: "3",
            }),
            (0, l.jsx)("path", {
                d: "M103.67 1.80634C103.67 0.808724 102.862 0 101.864 0C100.866 0 100.058 0.808724 100.058 1.80634V3.64278C100.058 4.64039 100.866 5.44911 101.864 5.44911C102.862 5.44911 103.67 4.64039 103.67 3.64278V1.80634Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M103.67 16.3574C103.67 15.3597 102.862 14.551 101.864 14.551C100.866 14.551 100.058 15.3597 100.058 16.3574V18.1938C100.058 19.1914 100.866 20.0001 101.864 20.0001C102.862 20.0001 103.67 19.1914 103.67 18.1938V16.3574Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M110.194 11.8412C111.191 11.8412 112 11.0325 112 10.0349C112 9.03724 111.191 8.22852 110.194 8.22852H108.357C107.36 8.22852 106.551 9.03724 106.551 10.0349C106.551 11.0325 107.36 11.8412 108.357 11.8412H110.194Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M95.6429 11.7413C96.6405 11.7413 97.4492 10.9326 97.4492 9.935C97.4492 8.93739 96.6405 8.12866 95.6429 8.12866H93.8064C92.8088 8.12866 92.0001 8.93739 92.0001 9.935C92.0001 10.9326 92.8088 11.7413 93.8064 11.7413H95.6429Z",
                fill: "#58F287",
            }),
            (0, l.jsx)("path", {
                d: "M19.1501 74.4573L23.3147 73.0684C23.5192 72.9747 23.6925 72.8241 23.814 72.6347C23.9354 72.4454 24 72.225 24 72C24 71.775 23.9354 71.5546 23.814 71.3653C23.6925 71.1759 23.5192 71.0253 23.3147 70.9316L19.1501 69.5427C18.8657 69.4142 18.6378 69.1862 18.5094 68.9016L17.0145 64.7348C16.9442 64.521 16.8083 64.3349 16.6262 64.203C16.444 64.071 16.2249 64 16 64C15.7751 64 15.556 64.071 15.3738 64.203C15.1917 64.3349 15.0558 64.521 14.9855 64.7348L13.4906 68.9016C13.3622 69.1862 13.1343 69.4142 12.8499 69.5427L8.68528 70.9316C8.4808 71.0253 8.30752 71.1759 8.18604 71.3653C8.06457 71.5546 8 71.775 8 72C8 72.225 8.06457 72.4454 8.18604 72.6347C8.30752 72.8241 8.4808 72.9747 8.68528 73.0684L12.8499 74.4573C13.0011 74.5032 13.1387 74.5858 13.2505 74.6976C13.3622 74.8094 13.4447 74.9471 13.4906 75.0984L14.9855 79.2652C15.0558 79.479 15.1917 79.6651 15.3738 79.797C15.556 79.929 15.7751 80 16 80C16.2249 80 16.444 79.929 16.6262 79.797C16.8083 79.6651 16.9442 79.479 17.0145 79.2652L18.5094 75.0984C18.5553 74.9471 18.6378 74.8094 18.7495 74.6976C18.8613 74.5858 18.9989 74.5032 19.1501 74.4573Z",
                fill: "#FFD01A",
            }),
        ],
    });
}
var na = t(164048),
    nr = t(839447),
    nd = t(539916),
    nc = t(790782),
    no = t(275196),
    nu = t(964623);
let n_ = eD._3.SIZE_80,
    nh = "required";
function nm(e) {
    let { guild: n, user: t } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, eW.A)({ user: t, guildId: n.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, eP.A)({ user: t, size: (0, eH.Te)(n_), onlyAnimateOnHoverOrFocus: !d }),
        o = (0, r.bG)([eZ.Ay], () => eZ.Ay.getSelfMember(n.id)),
        u = (0, r.yK)([eZ.Ay], () => eZ.Ay.getMemberRoleWithPendingUpdates(n.id, t.id)),
        _ = (0, r.bG)([eY.A], () => eY.A.getSortedRoles(n.id)),
        h = (0, eF.Ay)(n.id, t.id),
        m = _.filter((e) => u.includes(e.id)),
        x = (0, eq.Ay)(t.id, n.id);
    (0, eB.Ay)(() => {
        (0, eK.A)(t.id, t.getAvatarURL(n.id, (0, eD.FT)(n_)), { guildId: n.id });
    });
    let C = (0, eV.parseBioReact)(x?.bio),
        g = e$.Ay.getEnableHardwareAcceleration() ? eO.Js : eO.eu;
    return (0, l.jsxs)("div", {
        className: no.ME,
        children: [
            (0, l.jsx)(es.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: et.intl.string(et.t.diTbF8),
            }),
            (0, l.jsx)(O.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: et.intl.string(et.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: no.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(g, { src: i, avatarDecoration: c, size: n_, "aria-label": t.username }),
                    }),
                    (0, l.jsx)(O.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: no.Xh,
                        children: o?.nick ?? eQ.Ay.getName(t),
                    }),
                    (0, l.jsx)(O.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(eg.PT, no.z3),
                        children: C,
                    }),
                    null != m &&
                        m.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: no.me }),
                                (0, l.jsx)(O.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: no.DD,
                                    children: et.intl.string(et.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: no.Ot,
                                    children: m?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: no.JC,
                                                children: [
                                                    (0, l.jsx)(eL.R, {
                                                        color: e.colorString ?? ee.TpD,
                                                        colors: h ? e.colorStrings : null,
                                                        className: no.m4,
                                                    }),
                                                    (0, l.jsx)(O.E, {
                                                        variant: "text-xs/medium",
                                                        color: "text-strong",
                                                        children: e.name,
                                                    }),
                                                ],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function nx(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [o, u] = i.useState(new Set()),
        h = n?.options?.filter((e) => o.has(e.id)),
        m = (0, e5.a)(h),
        x = (0, e5.vV)(h),
        C = (0, r.yK)([e6.A], () => e6.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nn.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: x,
            itemHook: (e, n) => (0, l.jsx)(O.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: p } = ne(t.id),
        f = n.options.map((e) => ({ value: e.id, ...e })),
        N = n.options.filter((e) => C.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: no.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(_.Lp, {
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: et.intl.string(et.t.y2b7CA),
                    className: no.Ad,
                }),
            (0, l.jsxs)(es.D, {
                className: no.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(no.mw, { [no.So]: s?.type === nh }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(nr.A, {
                options: f,
                value: N,
                onChange: (e) => {
                    let t = e.find((e) => !C.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) p(n, t, !0), n.singleSelect && n.options.forEach((e) => o.delete(e.id)), o.add(t.id);
                    else {
                        let e = C.filter((e) => !l.includes(e)),
                            t = n.options.filter((n) => e.includes(n.id));
                        if (C.length <= t.length && n.required) return void d({ type: nh });
                        t.forEach((e) => {
                            p(n, e, !1), o.delete(e.id);
                        });
                    }
                    u(new Set(o)), d(null);
                },
                canBeNew: !n.isNew,
            }),
            (0, l.jsxs)(O.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: no.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nC(e) {
    let { guild: n } = e,
        t = (0, r.bG)([e6.A], () => e6.A.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: no.J1,
              children: [
                  (0, l.jsx)(es.D, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: et.intl.string(et.t.eDVMrA),
                  }),
                  (0, l.jsx)(O.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: et.intl.string(et.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: no.lA,
                      children: t.map((e, t) =>
                          (0, l.jsx)(nl.A, { connection: e, guildId: n.id, location: ek.A.CHANNELS_AND_ROLES }, t),
                      ),
                  }),
              ],
          });
}
function ng(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [o, u] = i.useState(new Set()),
        h = n?.options?.filter((e) => o.has(e.id)),
        m = (0, e5.a)(h),
        x = (0, e5.vV)(h),
        C = (0, r.yK)([e6.A], () => e6.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nn.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: x,
            itemHook: (e, n) => (0, l.jsx)(O.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: p } = ne(t.id);
    return (0, l.jsxs)("div", {
        className: no.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(_.Lp, {
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: et.intl.string(et.t.y2b7CA),
                    className: no.Ad,
                }),
            (0, l.jsxs)(es.D, {
                className: no.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(no.mw, { [no.So]: s?.type === nh }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: no.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        na.A,
                        {
                            hideMemberCount: !0,
                            guildId: t.id,
                            option: e,
                            onSelect: (t) => {
                                !t && 1 === C.length && n.required
                                    ? d({ type: nh })
                                    : (p(n, e, t ?? !1),
                                      n.singleSelect && t && n.options.forEach((e) => o.delete(e.id)),
                                      t ? o.add(e.id) : o.delete(e.id),
                                      u(new Set(o)),
                                      d(null));
                            },
                            selected: C.includes(e.id),
                            canBeNew: !n.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(O.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: no.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nA(e) {
    let n,
        { guildId: t, onBrowseChannels: s } = e,
        d = (0, ey.M)((0, eT.Ay)()),
        o = (0, r.bG)([I.A], () => I.A.getGuild(t)),
        u = (0, r.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        _ = (0, eG.A)("(min-width: 1344px)") && null != u,
        h = i.useCallback(() => {
            (0, q.pX)(ee.BVt.CHANNEL(t, em.VV.CHANNEL_BROWSER)), s?.();
        }, [t, s]),
        m = (0, r.bG)([ez.Ay], () => ez.Ay.hasUnread(t, nc.P.GUILD_ONBOARDING_QUESTION)),
        x = o?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: A,
            newAnswersCount: p,
            onboardingPrompts: f,
        } = ((n = (0, nt.yK)([e6.A], () => e6.A.getEnabledOnboardingPrompts(t))),
        i.useMemo(() => {
            let e = 0,
                t = [],
                l = [],
                i = [],
                s = [];
            for (var a = 0; a < n.length; a++) {
                let r = n[a];
                r.isNew
                    ? t.push(r)
                    : r.hasNewAnswers
                      ? (l.push(r), (e += r.options.filter((e) => e.isUnseen).length))
                      : r.inOnboarding
                        ? s.push(r)
                        : i.push(r);
            }
            return {
                onboardingPromptsRaw: n,
                newOnboardingPrompts: t,
                onboardingPromptsWithNewAnswers: l,
                newAnswersCount: e,
                onboardingPrompts: i.concat(s),
            };
        }, [n]));
    i.useEffect(() => {
        o?.id == null || (!eU.A.isFullServerPreview(o.id) && (e6.A.shouldFetchPrompts(o.id) || m) && (0, e1.jx)(o.id));
    }, [o?.id, m, x]),
        i.useEffect(() => {
            if (o?.id != null && !eU.A.isFullServerPreview(o.id))
                return () => {
                    (0, eM.hK)(o.id, nc.P.GUILD_ONBOARDING_QUESTION, e6.A.ackIdForGuild(o.id)),
                        e0.A.updateOnboardingResponses(o.id);
                };
        }, [o?.id]);
    let N = i.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case nd.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(ng, { prompt: e, guild: o }, e.id);
                case nd.ME.DROPDOWN:
                    return (0, l.jsx)(nx, { prompt: e, guild: o }, e.id);
                default:
                    (0, eX.xb)(e.type);
            }
        },
        [o],
    );
    if (null == o) return null;
    if (0 === C.length) {
        let e = d ? c.A.unsafe_rawColors.PRIMARY_300.css : c.A.unsafe_rawColors.PRIMARY_500.css,
            n = d ? c.A.unsafe_rawColors.PRIMARY_700.css : c.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(nu.Qs, no.Zc),
            children: (0, l.jsxs)("div", {
                className: no.do,
                children: [
                    (0, l.jsx)(ns, { className: no.Dw, foregroundColor: e, backgroundColor: n }),
                    (0, l.jsx)(es.D, {
                        className: no.jU,
                        variant: "heading-md/semibold",
                        children: et.intl.string(et.t.leKHQz),
                    }),
                    (0, l.jsx)(O.E, {
                        variant: "text-sm/medium",
                        children: et.intl.format(et.t["jH+ktB"], { onBrowseChannels: h }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(eR.Ch, {
        className: no.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: no.kw,
                children: [
                    (g.length > 0 || A.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(es.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: et.intl.format(et.t.iB5Gqe, { count: g.length + p }),
                                    }),
                                }),
                                g.map(N),
                                A.map(N),
                                (0, l.jsx)("div", { className: no.DY }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(es.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: et.intl.format(et.t["8IV8K9"], { count: f.length }),
                                        }),
                                        (0, l.jsx)(O.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: et.intl.string(et.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                f.map(N),
                            ],
                        }),
                    (0, l.jsx)(nC, { guild: o }),
                ],
            }),
            _ && (0, l.jsx)(nm, { guild: o, user: u }),
        ],
    });
}
var np = t(397882);
function nf(e) {
    let { guild: n } = e,
        t = (0, eS.A)(n);
    i.useEffect(() => {
        (0, m.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: eu.i.DISMISS });
    });
    let s = t
            ? et.intl.formatToPlainString(et.t.uqZgYe, { guildName: n.name })
            : et.intl.formatToPlainString(et.t.velJea, { guildName: n.name }),
        a = t ? et.intl.string(et.t.h9mGOP) : et.intl.string(et.t.et6wav);
    return (
        (0, h.HU)({ location: s }),
        (0, l.jsxs)(x.A, {
            className: np.wx,
            innerClassname: np.MU,
            hideSearch: !0,
            channelId: em.VV.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [(0, l.jsx)(x.A.Icon, { icon: o.k, "aria-hidden": !0 }), (0, l.jsx)(x.A.Title, { children: a })],
        })
    );
}
function nN(e) {
    let { guildId: n, selectedSection: t } = e,
        s = (0, r.bG)([I.A], () => I.A.getGuild(n)),
        d = (0, eS.A)(s),
        [o, h] = i.useState(t ?? nd.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != t && h(t);
    }, [t]),
        i.useEffect(() => {
            d || o !== nd.qC.CUSTOMIZE || h(nd.qC.BROWSE);
        }, [d, o]);
    let m = (0, r.bG)([v.Ay], () => v.Ay.getCurrentSidebarChannelId(em.VV.CHANNEL_BROWSER)),
        x = null != m && o === nd.qC.BROWSE,
        g = (0, r.bG)([F.A], () => F.A.getNewChannelIds(n).size > 0),
        A = (0, C.RD)(n);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(nu.TE, { [nu.js]: x }),
                      children: [
                          (0, l.jsx)(nf, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(nu.Qs, np.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(u.V, {
                                          className: np.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: o,
                                          onItemSelect: (e) => h(e),
                                          children: [
                                              (0, l.jsx)(
                                                  u.V.Item,
                                                  {
                                                      className: np.YU,
                                                      id: nd.qC.CUSTOMIZE,
                                                      children: et.intl.string(et.t.H2cICW),
                                                  },
                                                  nd.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  u.V.Item,
                                                  {
                                                      className: np.YU,
                                                      id: nd.qC.BROWSE,
                                                      "aria-label": et.intl.string(et.t.et6wav),
                                                      children: [
                                                          et.intl.string(et.t.et6wav),
                                                          (0, l.jsx)(_.Lp, {
                                                              text: g ? et.intl.string(et.t.psHMa6) : A,
                                                              color: g
                                                                  ? c.A.unsafe_rawColors.BRAND_260.css
                                                                  : c.A.colors.BACKGROUND_MOD_STRONG.css,
                                                              className: a()({ [np.Ad]: g }),
                                                          }),
                                                      ],
                                                  },
                                                  nd.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (o) {
                                          case nd.qC.CUSTOMIZE:
                                              return (0, l.jsx)(nA, {
                                                  guildId: n,
                                                  onBrowseChannels: () => h(nd.qC.BROWSE),
                                              });
                                          case nd.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(ew, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  x && (0, l.jsx)(eI, { channelId: m }),
              ],
          });
}
