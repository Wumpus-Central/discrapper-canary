n.r(t), n.d(t, { default: () => tf });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    d = n(554146),
    c = n(661531),
    o = n(740426),
    u = n(761508),
    h = n(777666),
    m = n(726249),
    x = n(826673),
    C = n(742589),
    A = n(419534),
    g = n(192308),
    N = n(892547),
    p = n(821609),
    j = n(307301),
    f = n(812771),
    E = n(274541),
    v = n(761640),
    I = n(769765),
    _ = n(808728),
    b = n(71393),
    S = n(576705),
    y = n(174459);
n(321073);
var w = n(780645),
    O = n(990078),
    R = n(834730),
    D = n(243721),
    L = n(602853),
    G = n(939249),
    M = n(658675),
    T = n(475825),
    U = n(442433),
    H = n(47167),
    P = n(499211),
    k = n(35275),
    B = n(166444),
    V = n(46054),
    F = n(454058),
    q = n(976860),
    W = n(138298),
    Z = n(790535),
    z = n(695633),
    K = n(228366),
    X = n(914430),
    Y = n(924985),
    J = n(543465),
    Q = n(816662),
    $ = n(234053),
    ee = n(652215);
function et(e) {
    K.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
var en = n(375708);
function el(e, t, n) {
    return (0, r.bG)([J.Ay], () => {
        var l;
        return t === n
            ? J.Ay.isChannelOptedIn(e, t, !0)
            : ((l = J.Ay),
              !!(0, $.cE)(e) || l.isChannelOptedIn(e, t, !0) || (null != n && J.Ay.isChannelOptedIn(e, n, !0)));
    });
}
function ei(e, t, n) {
    return (0, r.bG)([J.Ay], () => t !== n && null != n && J.Ay.isChannelOptedIn(e, n, !0));
}
var es = n(534514),
    ea = n(789645),
    er = n(367727),
    ed = n(468689),
    ec = n(174998),
    eo = n(395504),
    eu = n(49999),
    eh = n(176771);
function em(e) {
    let { guild: t } = e,
        n = (0, eo.Xn)(t.id),
        i = (0, x.JZ)(d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        s = n && !i ? d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : d.M.CHANNEL_BROWSER_NUX;
    (0, er.Vh)(s);
    let r = n
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(es.D, {
                              className: eh.R_,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: en.intl.string(en.t.AalzkJ),
                          }),
                          (0, l.jsx)(R.E, {
                              className: eh.h_,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: en.intl.string(en.t.CXh95Z),
                          }),
                          (0, l.jsx)(p.$, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  ed.A.open(t.id, ee.BEX.ONBOARDING), (0, x.Dr)(s, { dismissAction: eu.i.PRIMARY });
                              },
                              text: en.intl.string(en.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(ec.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: eh.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: eh.Sl,
                      src: "/assets/b755a73425584e3c.svg",
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(es.D, {
                              className: eh.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: en.intl.string(en.t.utqWEC),
                          }),
                          (0, l.jsx)(R.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: en.intl.string(en.t["+9etcM"]),
                          }),
                          (0, l.jsx)(R.E, {
                              className: eh.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: en.intl.format(en.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: a()(eh.kL, { [eh.xY]: n }),
        children: [
            (0, l.jsx)(G.D, {
                className: eh.b,
                onClick: () => {
                    (0, x.Dr)(s, { dismissAction: eu.i.DISMISS });
                },
                children: (0, l.jsx)(ea.P, { size: "md", color: "currentColor" }),
            }),
            r,
        ],
    });
}
var ex = n(746080),
    eC = n(650583),
    eA = n(540864),
    eg = n(992595);
let eN = new Set([ee.rbe.GUILD_FORUM, ee.rbe.GUILD_MEDIA]),
    ep = new Set([ee.rbe.GUILD_VOICE, ee.rbe.GUILD_STAGE_VOICE]);
function ej(e) {
    let { guild: t, channel: i, onCategoryClick: s } = e,
        r = el(t.id, i.id, i.id),
        d = ei(t.id, i.id, i.id),
        c = (0, H.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(eA.Fv, { [eA.d0]: "null" === i.id }),
        onContextMenu: (e) => {
            (0, U.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("38730"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("18733"),
                ]).then(n.bind(n, 71132));
                return (n) => (0, l.jsx)(e, { ...n, channel: i, guild: t });
            });
        },
        children: [
            (0, l.jsx)(R.E, {
                className: eA.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(D.d, {
                        label: en.intl.string(en.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(t.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let ef = i.memo(function () {
        return (0, l.jsx)("div", { className: eA.me });
    }),
    eE = i.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(R.E, { variant: "text-xs/normal", className: eA.Ks, children: "\xb7" }, `separator-${t}`);
    }),
    ev = i.memo(function (e) {
        var t, i;
        let s,
            {
                channel: d,
                category: o,
                guild: u,
                isFirstChannel: m,
                isLastChannel: x,
                onChannelClick: C,
                tooltipDirection: g = "right",
            } = e,
            { isSubscriptionGated: N } = (0, P.A)(d.id),
            j = el(u.id, d.id, o.id),
            f = ei(u.id, d.id, o.id),
            E =
                ((t = u.id),
                (i = o.id),
                (0, r.bG)([J.Ay], () => {
                    if (null != i && J.Ay.isChannelOptedIn(t, i, !0)) return en.intl.string(en.t.Lz94y1);
                })),
            v = (0, H.Ay)(d),
            I = (0, r.bG)([z.A], () => z.A.getActiveThreadCount(u.id, d.id)),
            _ = (0, r.bG)([F.A], () => F.A.shouldIndicateNewChannel(u.id, d.id)),
            b =
                ((s = []),
                ee.kvI.GUILD_THREADS_ONLY.has(d.type) &&
                    I >= 1 &&
                    s.push(
                        (0, l.jsx)(
                            R.E,
                            {
                                variant: "text-xs/normal",
                                className: eA.qy,
                                children: en.intl.format(en.t.z0qML2, { count: I }),
                            },
                            "thread-count",
                        ),
                    ),
                ep.has(d.type) ||
                    s.push(
                        (0, l.jsx)(
                            R.E,
                            { variant: "text-xs/normal", className: eA.qy, children: (0, A.YC)(d.id) },
                            "active",
                        ),
                    ),
                null != d.topic &&
                    d.topic.length > 0 &&
                    s.push(
                        (0, l.jsx)(
                            w.A,
                            {
                                className: eg.PT,
                                children: (0, l.jsx)(R.E, {
                                    className: eA.At,
                                    variant: "text-xs/normal",
                                    children: V.A.parseTopic(d.topic, !0, { channelId: d.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [s.map((e, t) => [e, (0, l.jsx)(eE, { index: t }, `subtitle-separator-${t}`)])].flat(2).slice(0, -1)),
            S = (e) => (
                (e.stopPropagation(), eN.has(d.type) || e.shiftKey)
                    ? (0, q.uh)(u.id, d.id)
                    : d.isGuildStageVoice() || d.isGuildVoice()
                      ? (0, Z.av)(d)
                      : W.A.openChannelAsSidebar({
                            guildId: d.guild_id,
                            channelId: d.id,
                            baseChannelId: ex.VV.CHANNEL_BROWSER,
                        }),
                !0
            ),
            y = en.intl.string(en.t.vetGQs);
        d.isGuildStageVoice() || d.isGuildVoice()
            ? (y = en.intl.string(en.t.VJlc0S))
            : d.isForumLikeChannel() && (y = en.intl.string(en.t["3xjX0U"]));
        let D = f ? "text-muted" : "text-default",
            T = (0, L.r)(f ? c.A.colors.TEXT_MUTED : c.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(O.m, {
                    text: E,
                    delay: 500,
                    position: g,
                    children: (0, l.jsxs)(G.D, {
                        className: a()(eA.WG, { [eA.Qn]: m, [eA.wp]: x, [eA.r9]: f }),
                        onClick: (e) => {
                            if (!f) return e.stopPropagation(), C(u.id, d.id, o.id), !0;
                        },
                        onContextMenu: (e) => {
                            d.isGuildVocal()
                                ? (0, U.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("93190"),
                                          n.e("38730"),
                                          n.e("34971"),
                                          n.e("43266"),
                                          n.e("9004"),
                                          n.e("30997"),
                                          n.e("12255"),
                                          n.e("40959"),
                                          n.e("79995"),
                                          n.e("42339"),
                                          n.e("44058"),
                                          n.e("91377"),
                                          n.e("35723"),
                                          n.e("12520"),
                                          n.e("66540"),
                                          n.e("29542"),
                                          n.e("19690"),
                                          n.e("26792"),
                                          n.e("12052"),
                                          n.e("18663"),
                                          n.e("99990"),
                                          n.e("99854"),
                                      ]).then(n.bind(n, 119357));
                                      return (t) => (0, l.jsx)(e, { ...t, channel: d, guild: u });
                                  })
                                : (0, U.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("26132"),
                                          n.e("46652"),
                                          n.e("93190"),
                                          n.e("38730"),
                                          n.e("34971"),
                                          n.e("43266"),
                                          n.e("9004"),
                                          n.e("30997"),
                                          n.e("12255"),
                                          n.e("40959"),
                                          n.e("79995"),
                                          n.e("42339"),
                                          n.e("44058"),
                                          n.e("91377"),
                                          n.e("35723"),
                                          n.e("12520"),
                                          n.e("66540"),
                                          n.e("29542"),
                                          n.e("12052"),
                                          n.e("25173"),
                                      ]).then(n.bind(n, 468916));
                                      return (t) => (0, l.jsx)(e, { ...t, channel: d, guild: u });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: eA.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eA.HA,
                                        children: [
                                            (0, l.jsx)(B.gm, { channel: d, guild: u }),
                                            (0, l.jsx)(w.A, {
                                                className: eA.__invalid_name,
                                                children: (0, l.jsx)(R.E, {
                                                    className: eA.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: D,
                                                    children: v,
                                                }),
                                            }),
                                            N ? (0, l.jsx)(k.A, { color: T, className: eA.PC }) : null,
                                            _
                                                ? (0, l.jsx)(h.Lp, {
                                                      text: en.intl.string(en.t.y2b7CA),
                                                      color: c.A.unsafe_rawColors.BRAND_260.css,
                                                      className: eA.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: eA.Ze, children: b }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eA.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: eA.Kx,
                                        children: (0, l.jsx)(p.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: S,
                                            text: y,
                                            onKeyDown: (e) => {
                                                (e.key === eC.dh.ENTER || e.key === eC.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), S(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(M.P, { checked: j, disabled: f }),
                                ],
                            }),
                        ],
                    }),
                }),
                !x && (0, l.jsx)(ef, {}),
            ],
        });
    });
function eI(e) {
    var t, n;
    let s,
        { categories: c, guild: o, className: u, innerClassName: h, hasSidebar: m } = e,
        { onChannelClick: C } =
            ((t = o.id),
            (s = (0, r.bG)([J.Ay], () => J.Ay.getPendingChannelUpdates(t))),
            i.useEffect(() => (et(t), () => et(t)), [t]),
            i.useEffect(() => {
                null != s && (0, Q.hp)(t, s);
            }, [t, s]),
            {
                onChannelClick: i.useCallback((e, t, n) => {
                    let l = J.Ay.isChannelOptedIn(e, t),
                        i = t === n;
                    !l && Y.A.isCollapsed(n) && null != n && (0, X.fh)(n),
                        (0, $.cE)(e)
                            ? i
                                ? (0, $.le)(e, { include: new Set([t]) })
                                : (0, $.le)(e, { exclude: new Set([t]) })
                            : (0, Q.zk)(e, t, !l, { section: ee.JJy.CHANNEL_BROWSER });
                }, []),
            }),
        g = (0, x.JZ)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        N = i.useCallback(
            (e) => {
                let { section: t } = e;
                if (0 === t && -1 === g) return null;
                let n = c._categories[t + g];
                return (0, l.jsx)(ej, { channel: n.channel, guild: o, onCategoryClick: C }, n.channel.id);
            },
            [c, o, g, C],
        ),
        p = i.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (0 === t && -1 === g) return (0, l.jsx)(em, { guild: o });
                let i = c._categories[t + g],
                    s = c[i.channel.id][n];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          ev,
                          {
                              category: i.channel,
                              channel: s.channel,
                              guild: o,
                              isFirstChannel: 0 === n,
                              isLastChannel: c[i.channel.id].length - 1 === n,
                              tooltipDirection: m ? "right" : "top",
                              onChannelClick: C,
                          },
                          s.channel.id,
                      );
            },
            [c, o, g, m, C],
        ),
        j = ((n = o.id), (0, eo.Xn)(n) ? 250 : 152),
        f = (0, A.zH)(o.id, c, 64, j);
    return (0, l.jsx)(
        T.Ei,
        {
            className: u,
            innerClassName: a()(h, eA.bv),
            sectionHeight: 48,
            rowHeight: (e) => f[e].rowHeight,
            renderSection: N,
            renderRow: p,
            sections: f.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
var e_ = n(551348);
function eb(e) {
    let { channelId: t } = e;
    return (0, l.jsx)(f.A, {
        sidebarType: f.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(E.A, { channelId: t, baseChannelId: ex.VV.CHANNEL_BROWSER }),
    });
}
function eS(e) {
    let { guildId: t } = e,
        [s, a] = i.useState(""),
        d = (0, r.bG)([b.A], () => b.A.getGuild(t)),
        c = (0, r.bG)([_.Ay], () => _.Ay.getChannels(t)),
        o = (0, r.bG)([I.A], () => I.A.getCategories(t)),
        u = (0, A.vh)(t, o, c, s),
        h = (0, r.bG)([S.A], () => S.A.canWithPartialContext(ee.xBc.MANAGE_CHANNELS, { guildId: t })),
        m = (0, r.bG)([v.Ay], () => null != v.Ay.getCurrentSidebarChannelId(ex.VV.CHANNEL_BROWSER)),
        x = i.useCallback(() => a(""), [a]),
        C = i.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("11585"), n.e("7775"), n.e("58608"), n.e("70195")]).then(
                    n.bind(n, 946430),
                );
                return (n) => (0, l.jsx)(e, { ...n, channelType: null, guildId: t });
            });
        }, [t]);
    return null == d
        ? null
        : (0, l.jsxs)("div", {
              className: e_.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: e_.wx,
                      children: [
                          (0, l.jsx)(N.I, {
                              query: s,
                              onChange: (e) => {
                                  "" === s &&
                                      "" !== e &&
                                      y.default.track(ee.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      a(e.toLowerCase());
                              },
                              onClear: x,
                              placeholder: en.intl.string(en.t.s5MnmC),
                          }),
                          h ? (0, l.jsx)(p.$, { icon: j.j, onClick: C, text: en.intl.string(en.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(eI, { className: e_.T, channels: c, categories: u, guild: d, hasSidebar: m }),
              ],
          });
}
var ey = n(202776),
    ew = n(462887),
    eO = n(778712),
    eR = n(97808),
    eD = n(545442),
    eL = n(689175),
    eG = n(334738),
    eM = n(241524),
    eT = n(964486),
    eU = n(736653),
    eH = n(793574),
    eP = n(562819),
    ek = n(963977),
    eB = n(164956),
    eV = n(713804),
    eF = n(676608),
    eq = n(999291),
    eW = n(62199),
    eZ = n(903209),
    ez = n(696451),
    eK = n(317525),
    eX = n(222823),
    eY = n(287809),
    eJ = n(403362),
    eQ = n(427262),
    e$ = n(19575),
    e0 = n(669953),
    e1 = n(817818),
    e4 = n(591552),
    e6 = n(961973),
    e5 = n(735438),
    e9 = n.n(e5),
    e2 = n(665260),
    e7 = n(355097);
function e8(e) {
    K.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let e3 = {};
function te(e) {
    let t = (0, r.bG)([e4.A], () => e4.A.getPendingResponseOptions(e) ?? e3, [e]);
    return (
        i.useEffect(() => (e8(e), () => e8(e)), [e]),
        i.useEffect(() => {
            null != t && 0 !== Object.keys(t).length && e0.A.updateOnboardingResponses(e);
        }, [e, t]),
        {
            handleSelectOption: i.useCallback(
                (t, n, l) => {
                    let i = e4.A.getOnboardingResponses(e),
                        { addedRoleIds: s, removedRoleIds: a } = (function (e, t, n, l) {
                            let i = [],
                                s = [];
                            if (e.singleSelect && n) {
                                let n = e.options.find((e) => l.includes(e.id));
                                (i = e9().difference(t.roleIds ?? [], n?.roleIds ?? [])),
                                    (s = e9().difference(n?.roleIds ?? [], t.roleIds ?? []));
                            } else if (n) (i = t.roleIds ?? []), (s = []);
                            else {
                                let n = e.options.filter((e) => l.includes(e.id)),
                                    a = n.filter((e) => t.id !== e.id),
                                    r = n
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(eJ.Vq),
                                    d = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(eJ.Vq);
                                (i = []), (s = e9().difference(r, d));
                            }
                            return { addedRoleIds: i, removedRoleIds: s };
                        })(t, n, l, i),
                        { addedChannelIds: r, removedChannelIds: d } = (function (e) {
                            let { guildId: t, prompt: n, option: l, selected: i, responses: s } = e,
                                a = [],
                                r = [];
                            if (n.singleSelect && i) {
                                let e = n.options.find((e) => s.includes(e.id));
                                (a = e9().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (r = e9().difference(e?.channelIds ?? [], l.channelIds ?? []));
                            } else if (i) (a = l.channelIds ?? []), (r = []);
                            else {
                                let e = n.options.filter((e) => s.includes(e.id)),
                                    t = e.filter((e) => l.id !== e.id),
                                    i = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(eJ.Vq),
                                    d = t
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(eJ.Vq);
                                (a = []), (r = e9().difference(i, d));
                            }
                            return (
                                (0, $.cE)(t) && a.push(...e4.A.getDefaultChannelIds(t)),
                                { addedChannelIds: a, removedChannelIds: r }
                            );
                        })({ guildId: e, prompt: t, option: n, selected: l, responses: i }),
                        c = r.reduce((t, n) => {
                            let l = J.Ay.getChannelIdFlags(e, n);
                            return (t[n] = { flags: (0, e2.lA)(l, e7.vv.OPT_IN_ENABLED, !0) }), t;
                        }, {}),
                        o = d.reduce((t, n) => {
                            let l = J.Ay.getChannelIdFlags(e, n);
                            return (t[n] = { flags: (0, e2.lA)(l, e7.vv.OPT_IN_ENABLED, !1) }), t;
                        }, {}),
                        u = { ...c, ...o };
                    e0.A.selectOption(e, t.id, n.id, l),
                        K.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: u }),
                        e0.A.updateRolesLocal(e, s, a);
                },
                [e],
            ),
        }
    );
}
var tt = n(218785),
    tn = n(702841),
    tl = n(875150),
    ti = n(953727);
function ts(e) {
    let { width: t = 120, height: n = 80, backgroundColor: i, foregroundColor: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, ti.A)(a),
        width: t,
        height: n,
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
var ta = n(164048),
    tr = n(839447),
    td = n(539916),
    tc = n(790782),
    to = n(275196),
    tu = n(964623);
let th = eO._3.SIZE_80,
    tm = "required";
function tx(e) {
    let { guild: t, user: n } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, eW.A)({ user: n, guildId: t.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, ek.A)({ user: n, size: (0, eP.Te)(th), onlyAnimateOnHoverOrFocus: !d }),
        o = (0, r.bG)([ez.Ay], () => ez.Ay.getSelfMember(t.id)),
        u = (0, r.yK)([ez.Ay], () => ez.Ay.getMemberRoleWithPendingUpdates(t.id, n.id)),
        h = (0, r.bG)([eK.A], () => eK.A.getSortedRoles(t.id)),
        m = (0, eF.Ay)(t.id, n.id),
        x = h.filter((e) => u.includes(e.id)),
        C = (0, eq.Ay)(n.id, t.id);
    (0, eT.Ay)(() => {
        (0, eZ.A)(n.id, n.getAvatarURL(t.id, (0, eO.FT)(th)), { guildId: t.id });
    });
    let A = (0, eV.parseBioReact)(C?.bio),
        g = e$.Ay.getEnableHardwareAcceleration() ? eR.Js : eR.eu;
    return (0, l.jsxs)("div", {
        className: to.ME,
        children: [
            (0, l.jsx)(es.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: en.intl.string(en.t.diTbF8),
            }),
            (0, l.jsx)(R.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: en.intl.string(en.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: to.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(g, { src: i, avatarDecoration: c, size: th, "aria-label": n.username }),
                    }),
                    (0, l.jsx)(R.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: to.Xh,
                        children: o?.nick ?? eQ.Ay.getName(n),
                    }),
                    (0, l.jsx)(R.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(eg.PT, to.z3),
                        children: A,
                    }),
                    null != x &&
                        x.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: to.me }),
                                (0, l.jsx)(R.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: to.DD,
                                    children: en.intl.string(en.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: to.Ot,
                                    children: x?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: to.JC,
                                                children: [
                                                    (0, l.jsx)(eD.R, {
                                                        color: e.colorString ?? ee.TpD,
                                                        colors: m ? e.colorStrings : null,
                                                        className: to.m4,
                                                    }),
                                                    (0, l.jsx)(R.E, {
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
function tC(e) {
    let { prompt: t, guild: n } = e,
        [s, d] = i.useState(null),
        [o, u] = i.useState(new Set()),
        m = t?.options?.filter((e) => o.has(e.id)),
        x = (0, e6.a)(m),
        C = (0, e6.vV)(m),
        A = (0, r.yK)([e4.A], () => e4.A.getOnboardingResponsesForPrompt(n.id, t.id)),
        { helpText: g, helpTextAdditional: N } = (0, tt.W)({
            guild: n,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: C,
            itemHook: (e, t) => (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-strong", children: e }, t),
        }),
        { handleSelectOption: p } = te(n.id),
        j = t.options.map((e) => ({ value: e.id, ...e })),
        f = t.options.filter((e) => A.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: to.J1,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: en.intl.string(en.t.y2b7CA),
                    className: to.Ad,
                }),
            (0, l.jsxs)(es.D, {
                className: to.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)("span", { className: a()(to.mw, { [to.So]: s?.type === tm }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(tr.A, {
                options: j,
                value: f,
                onChange: (e) => {
                    let n = e.find((e) => !A.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != n) p(t, n, !0), t.singleSelect && t.options.forEach((e) => o.delete(e.id)), o.add(n.id);
                    else {
                        let e = A.filter((e) => !l.includes(e)),
                            n = t.options.filter((t) => e.includes(t.id));
                        if (A.length <= n.length && t.required) return void d({ type: tm });
                        n.forEach((e) => {
                            p(t, e, !1), o.delete(e.id);
                        });
                    }
                    u(new Set(o)), d(null);
                },
                canBeNew: !t.isNew,
            }),
            (0, l.jsxs)(R.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: to.BK,
                children: [g, " ", N],
            }),
        ],
    });
}
function tA(e) {
    let { guild: t } = e,
        n = (0, r.bG)([e4.A], () => e4.A.getConnections(t.id));
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: to.J1,
              children: [
                  (0, l.jsx)(es.D, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: en.intl.string(en.t.eDVMrA),
                  }),
                  (0, l.jsx)(R.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: en.intl.string(en.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: to.lA,
                      children: n.map((e, n) =>
                          (0, l.jsx)(tl.A, { connection: e, guildId: t.id, location: eH.A.CHANNELS_AND_ROLES }, n),
                      ),
                  }),
              ],
          });
}
function tg(e) {
    let { prompt: t, guild: n } = e,
        [s, d] = i.useState(null),
        [o, u] = i.useState(new Set()),
        m = t?.options?.filter((e) => o.has(e.id)),
        x = (0, e6.a)(m),
        C = (0, e6.vV)(m),
        A = (0, r.yK)([e4.A], () => e4.A.getOnboardingResponsesForPrompt(n.id, t.id)),
        { helpText: g, helpTextAdditional: N } = (0, tt.W)({
            guild: n,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: C,
            itemHook: (e, t) => (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-strong", children: e }, t),
        }),
        { handleSelectOption: p } = te(n.id);
    return (0, l.jsxs)("div", {
        className: to.J1,
        "data-new": t.isNew,
        children: [
            t.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: en.intl.string(en.t.y2b7CA),
                    className: to.Ad,
                }),
            (0, l.jsxs)(es.D, {
                className: to.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    t.title,
                    t.required
                        ? (0, l.jsx)("span", { className: a()(to.mw, { [to.So]: s?.type === tm }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: to.vS,
                children: t.options.map((e) =>
                    (0, l.jsx)(
                        ta.A,
                        {
                            hideMemberCount: !0,
                            guildId: n.id,
                            option: e,
                            onSelect: (n) => {
                                !n && 1 === A.length && t.required
                                    ? d({ type: tm })
                                    : (p(t, e, n ?? !1),
                                      t.singleSelect && n && t.options.forEach((e) => o.delete(e.id)),
                                      n ? o.add(e.id) : o.delete(e.id),
                                      u(new Set(o)),
                                      d(null));
                            },
                            selected: A.includes(e.id),
                            canBeNew: !t.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(R.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: to.BK,
                children: [g, " ", N],
            }),
        ],
    });
}
function tN(e) {
    let t,
        { guildId: n, onBrowseChannels: s } = e,
        d = (0, ew.M)((0, eU.Ay)()),
        o = (0, r.bG)([b.A], () => b.A.getGuild(n)),
        u = (0, r.bG)([eY.default], () => eY.default.getCurrentUser()),
        h = (0, eM.A)("(min-width: 1344px)") && null != u,
        m = i.useCallback(() => {
            (0, q.pX)(ee.BVt.CHANNEL(n, ex.VV.CHANNEL_BROWSER)), s?.();
        }, [n, s]),
        x = (0, r.bG)([eX.Ay], () => eX.Ay.hasUnread(n, tc.P.GUILD_ONBOARDING_QUESTION)),
        C = o?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: A,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: N,
            newAnswersCount: p,
            onboardingPrompts: j,
        } = ((t = (0, tn.yK)([e4.A], () => e4.A.getEnabledOnboardingPrompts(n))),
        i.useMemo(() => {
            let e = 0,
                n = [],
                l = [],
                i = [],
                s = [];
            for (var a = 0; a < t.length; a++) {
                let r = t[a];
                r.isNew
                    ? n.push(r)
                    : r.hasNewAnswers
                      ? (l.push(r), (e += r.options.filter((e) => e.isUnseen).length))
                      : r.inOnboarding
                        ? s.push(r)
                        : i.push(r);
            }
            return {
                onboardingPromptsRaw: t,
                newOnboardingPrompts: n,
                onboardingPromptsWithNewAnswers: l,
                newAnswersCount: e,
                onboardingPrompts: i.concat(s),
            };
        }, [t]));
    i.useEffect(() => {
        o?.id == null || (!eB.A.isFullServerPreview(o.id) && (e4.A.shouldFetchPrompts(o.id) || x) && (0, e1.jx)(o.id));
    }, [o?.id, x, C]),
        i.useEffect(() => {
            if (o?.id != null && !eB.A.isFullServerPreview(o.id))
                return () => {
                    (0, eG.hK)(o.id, tc.P.GUILD_ONBOARDING_QUESTION, e4.A.ackIdForGuild(o.id)),
                        e0.A.updateOnboardingResponses(o.id);
                };
        }, [o?.id]);
    let f = i.useCallback(
        (e) => {
            if (null == o) return null;
            switch (e.type) {
                case td.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(tg, { prompt: e, guild: o }, e.id);
                case td.ME.DROPDOWN:
                    return (0, l.jsx)(tC, { prompt: e, guild: o }, e.id);
                default:
                    (0, eJ.xb)(e.type);
            }
        },
        [o],
    );
    if (null == o) return null;
    if (0 === A.length) {
        let e = d ? c.A.unsafe_rawColors.PRIMARY_300.css : c.A.unsafe_rawColors.PRIMARY_500.css,
            t = d ? c.A.unsafe_rawColors.PRIMARY_700.css : c.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(tu.Qs, to.Zc),
            children: (0, l.jsxs)("div", {
                className: to.do,
                children: [
                    (0, l.jsx)(ts, { className: to.Dw, foregroundColor: e, backgroundColor: t }),
                    (0, l.jsx)(es.D, {
                        className: to.jU,
                        variant: "heading-md/semibold",
                        children: en.intl.string(en.t.leKHQz),
                    }),
                    (0, l.jsx)(R.E, {
                        variant: "text-sm/medium",
                        children: en.intl.format(en.t["jH+ktB"], { onBrowseChannels: m }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(eL.Ch, {
        className: to.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: to.kw,
                children: [
                    (g.length > 0 || N.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(es.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: en.intl.format(en.t.iB5Gqe, { count: g.length + p }),
                                    }),
                                }),
                                g.map(f),
                                N.map(f),
                                (0, l.jsx)("div", { className: to.DY }),
                            ],
                        }),
                    j.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(es.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: en.intl.format(en.t["8IV8K9"], { count: j.length }),
                                        }),
                                        (0, l.jsx)(R.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: en.intl.string(en.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                j.map(f),
                            ],
                        }),
                    (0, l.jsx)(tA, { guild: o }),
                ],
            }),
            h && (0, l.jsx)(tx, { guild: o, user: u }),
        ],
    });
}
var tp = n(397882);
function tj(e) {
    let { guild: t } = e,
        n = (0, ey.A)(t);
    i.useEffect(() => {
        (0, x.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: eu.i.DISMISS });
    });
    let s = n
            ? en.intl.formatToPlainString(en.t.uqZgYe, { guildName: t.name })
            : en.intl.formatToPlainString(en.t.velJea, { guildName: t.name }),
        a = n ? en.intl.string(en.t.h9mGOP) : en.intl.string(en.t.et6wav);
    return (
        (0, m.HU)({ location: s }),
        (0, l.jsxs)(C.A, {
            className: tp.wx,
            innerClassname: tp.MU,
            hideSearch: !0,
            channelId: ex.VV.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            children: [(0, l.jsx)(C.A.Icon, { icon: o.k, "aria-hidden": !0 }), (0, l.jsx)(C.A.Title, { children: a })],
        })
    );
}
function tf(e) {
    let { guildId: t, selectedSection: n } = e,
        s = (0, r.bG)([b.A], () => b.A.getGuild(t)),
        d = (0, ey.A)(s),
        [o, m] = i.useState(n ?? td.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != n && m(n);
    }, [n]),
        i.useEffect(() => {
            d || o !== td.qC.CUSTOMIZE || m(td.qC.BROWSE);
        }, [d, o]);
    let x = (0, r.bG)([v.Ay], () => v.Ay.getCurrentSidebarChannelId(ex.VV.CHANNEL_BROWSER)),
        C = null != x && o === td.qC.BROWSE,
        g = (0, r.bG)([F.A], () => F.A.getNewChannelIds(t).size > 0),
        N = (0, A.RD)(t);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(tu.TE, tp.TE, { [tu.js]: C }),
                      children: [
                          (0, l.jsx)(tj, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(tu.Qs, tp.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(u.V, {
                                          className: tp.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: o,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  u.V.Item,
                                                  {
                                                      className: tp.YU,
                                                      id: td.qC.CUSTOMIZE,
                                                      children: en.intl.string(en.t.H2cICW),
                                                  },
                                                  td.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  u.V.Item,
                                                  {
                                                      className: tp.YU,
                                                      id: td.qC.BROWSE,
                                                      "aria-label": en.intl.string(en.t.et6wav),
                                                      children: [
                                                          en.intl.string(en.t.et6wav),
                                                          (0, l.jsx)(h.Lp, {
                                                              text: g ? en.intl.string(en.t.psHMa6) : N,
                                                              color: g
                                                                  ? c.A.unsafe_rawColors.BRAND_260.css
                                                                  : c.A.colors.BACKGROUND_MOD_STRONG.css,
                                                              className: a()({ [tp.Ad]: g }),
                                                          }),
                                                      ],
                                                  },
                                                  td.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (o) {
                                          case td.qC.CUSTOMIZE:
                                              return (0, l.jsx)(tN, {
                                                  guildId: t,
                                                  onBrowseChannels: () => m(td.qC.BROWSE),
                                              });
                                          case td.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(eS, { guildId: t });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  C && (0, l.jsx)(eb, { channelId: x }),
              ],
          });
}
