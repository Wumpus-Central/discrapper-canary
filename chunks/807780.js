t.r(n), t.d(n, { default: () => nI });
var l = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    d = t(554146),
    c = t(740426),
    o = t(761508),
    u = t(508770),
    h = t(812993),
    x = t(909735),
    m = t(726249),
    C = t(826673),
    g = t(742589),
    A = t(419534),
    N = t(192308),
    f = t(683438),
    p = t(821609),
    j = t(307301),
    E = t(812771),
    v = t(274541),
    I = t(761640),
    b = t(769765),
    S = t(808728),
    _ = t(71393),
    y = t(576705),
    w = t(174459);
t(321073);
var O = t(661531),
    R = t(3026),
    D = t(834730),
    L = t(243721),
    G = t(602853),
    M = t(866665),
    T = t(939249),
    k = t(658675),
    P = t(475825),
    H = t(442433),
    U = t(47167),
    B = t(499211),
    V = t(35275),
    F = t(166444),
    q = t(46054),
    W = t(454058),
    Z = t(976860),
    X = t(138298),
    z = t(940382),
    K = t(790535),
    Y = t(863005),
    J = t(228366),
    Q = t(914430),
    $ = t(924985),
    ee = t(543465),
    en = t(816662),
    et = t(234053),
    el = t(652215);
function ei(e) {
    J.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
var es = t(375708);
function ea(e, n, t) {
    return (0, r.bG)([ee.Ay], () => {
        var l;
        return n === t
            ? ee.Ay.isChannelOptedIn(e, n, !0)
            : ((l = ee.Ay),
              !!(0, et.cE)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && ee.Ay.isChannelOptedIn(e, t, !0)));
    });
}
function er(e, n, t) {
    return (0, r.bG)([ee.Ay], () => n !== t && null != t && ee.Ay.isChannelOptedIn(e, t, !0));
}
var ed = t(297264),
    ec = t(789645),
    eo = t(367727),
    eu = t(468689),
    eh = t(174998),
    ex = t(395504),
    em = t(49999),
    eC = t(734980);
function eg(e) {
    let { guild: n } = e,
        t = (0, ex.Xn)(n.id),
        i = (0, C.HX)(d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        s = t && !i ? d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : d.M.CHANNEL_BROWSER_NUX;
    (0, eo.Vh)(s);
    let r = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(ed.D, {
                              className: eC.R_,
                              color: "text-overlay-light",
                              variant: "heading-lg/semibold",
                              children: es.intl.string(es.t.AalzkJ),
                          }),
                          (0, l.jsx)(D.E, {
                              className: eC.h_,
                              variant: "text-md/normal",
                              color: "text-overlay-light",
                              children: es.intl.string(es.t.CXh95Z),
                          }),
                          (0, l.jsx)(p.$, {
                              variant: "overlay-primary",
                              onClick: function () {
                                  eu.A.open(n.id, el.BEX.ONBOARDING), (0, C.Dr)(s, { dismissAction: em.i.PRIMARY });
                              },
                              text: es.intl.string(es.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(eh.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: eC.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: eC.Sl,
                      src: "/assets/b755a73425584e3c.svg",
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(ed.D, {
                              className: eC.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: es.intl.string(es.t.utqWEC),
                          }),
                          (0, l.jsx)(D.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: es.intl.string(es.t["+9etcM"]),
                          }),
                          (0, l.jsx)(D.E, {
                              className: eC.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: es.intl.format(es.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: a()(eC.kL, { [eC.xY]: t }),
        children: [
            (0, l.jsx)(T.D, {
                className: eC.b,
                onClick: function () {
                    (0, C.Dr)(s, { dismissAction: em.i.DISMISS });
                },
                children: (0, l.jsx)(ec.P, { size: "md", color: "currentColor" }),
            }),
            r,
        ],
    });
}
var eA = t(746080),
    eN = t(650583),
    ef = t(326005),
    ep = t(165648);
let ej = new Set([el.rbe.GUILD_FORUM, el.rbe.GUILD_MEDIA]),
    eE = new Set([el.rbe.GUILD_VOICE, el.rbe.GUILD_STAGE_VOICE]);
function ev(e) {
    let { guild: n, channel: i, onCategoryClick: s } = e,
        r = ea(n.id, i.id, i.id),
        d = er(n.id, i.id, i.id),
        c = (0, U.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(ef.Fv, { [ef.d0]: "null" === i.id }),
        onContextMenu: function (e) {
            (0, H.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("955557"),
                    t.e("412255"),
                    t.e("63340"),
                    t.e("430997"),
                    t.e("379995"),
                    t.e("591377"),
                    t.e("35723"),
                    t.e("566378"),
                    t.e("732100"),
                    t.e("515398"),
                    t.e("715675"),
                ]).then(t.bind(t, 740438));
                return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: n });
            });
        },
        children: [
            (0, l.jsx)(D.E, {
                className: ef.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(L.d, {
                        label: es.intl.string(es.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(n.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let eI = i.memo(function () {
        return (0, l.jsx)("div", { className: ef.me });
    }),
    eb = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(D.E, { variant: "text-xs/normal", className: ef.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    eS = i.memo(function (e) {
        var n, i;
        let s,
            {
                channel: d,
                category: c,
                guild: o,
                isFirstChannel: u,
                isLastChannel: x,
                onChannelClick: m,
                tooltipDirection: C = "right",
            } = e,
            { isSubscriptionGated: g } = (0, B.A)(d.id),
            N = ea(o.id, d.id, c.id),
            f = er(o.id, d.id, c.id),
            j =
                ((n = o.id),
                (i = c.id),
                (0, r.bG)([ee.Ay], () => {
                    if (null != i && ee.Ay.isChannelOptedIn(n, i, !0)) return es.intl.string(es.t.Lz94y1);
                })),
            E = (0, U.Ay)(d),
            v = (0, r.bG)([Y.A], () => Y.A.getActiveThreadCount(o.id, d.id)),
            I = (0, r.bG)([W.A], () => W.A.shouldIndicateNewChannel(o.id, d.id)),
            b =
                ((s = []),
                el.kvI.GUILD_THREADS_ONLY.has(d.type) &&
                    v >= 1 &&
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            {
                                variant: "text-xs/normal",
                                className: ef.qy,
                                children: es.intl.format(es.t.z0qML2, { count: v }),
                            },
                            "thread-count",
                        ),
                    ),
                eE.has(d.type) ||
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            { variant: "text-xs/normal", className: ef.qy, children: (0, A.YC)(d.id) },
                            "active",
                        ),
                    ),
                null != d.topic &&
                    d.topic.length > 0 &&
                    s.push(
                        (0, l.jsx)(
                            R.A,
                            {
                                className: ep.PT,
                                children: (0, l.jsx)(D.E, {
                                    className: ef.At,
                                    variant: "text-xs/normal",
                                    children: q.A.parseTruncatedTopic(d.topic, !0, { channelId: d.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [s.map((e, n) => [e, (0, l.jsx)(eb, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1));
        function S(e) {
            return (
                (e.stopPropagation(), ej.has(d.type) || e.shiftKey)
                    ? (0, Z.uh)(o.id, d.id)
                    : d.isGuildStageVoice() || d.isGuildVoice()
                      ? (0, K.av)(d)
                      : X.A.openChannelAsSidebar({
                            guildId: d.guild_id,
                            channelId: d.id,
                            baseChannelId: eA.VV.CHANNEL_BROWSER,
                            details: { type: z.kk.CHAT },
                        }),
                !0
            );
        }
        let _ = es.intl.string(es.t.vetGQs);
        d.isGuildStageVoice() || d.isGuildVoice()
            ? (_ = es.intl.string(es.t.VJlc0S))
            : d.isForumLikeChannel() && (_ = es.intl.string(es.t["3xjX0U"]));
        let y = f ? "text-muted" : "text-default",
            w = (0, G.r)(f ? O.A.colors.TEXT_MUTED : O.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(M.m, {
                    text: j,
                    delay: 500,
                    position: C,
                    children: (0, l.jsxs)(T.D, {
                        className: a()(ef.WG, { [ef.Qn]: u, [ef.wp]: x, [ef.r9]: f }),
                        onClick: function (e) {
                            if (!f) return e.stopPropagation(), m(o.id, d.id, c.id), !0;
                        },
                        onContextMenu: function (e) {
                            d.isGuildVocal()
                                ? (0, H.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("926132"),
                                          t.e("146652"),
                                          t.e("893190"),
                                          t.e("955557"),
                                          t.e("947502"),
                                          t.e("343266"),
                                          t.e("309004"),
                                          t.e("965789"),
                                          t.e("412255"),
                                          t.e("63340"),
                                          t.e("430997"),
                                          t.e("379995"),
                                          t.e("187048"),
                                          t.e("544058"),
                                          t.e("591377"),
                                          t.e("35723"),
                                          t.e("566378"),
                                          t.e("256372"),
                                          t.e("29542"),
                                          t.e("419690"),
                                          t.e("426792"),
                                          t.e("248804"),
                                          t.e("318663"),
                                          t.e("599990"),
                                          t.e("599854"),
                                      ]).then(t.bind(t, 119357));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: d, guild: o });
                                  })
                                : (0, H.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("926132"),
                                          t.e("146652"),
                                          t.e("893190"),
                                          t.e("955557"),
                                          t.e("947502"),
                                          t.e("343266"),
                                          t.e("309004"),
                                          t.e("965789"),
                                          t.e("412255"),
                                          t.e("63340"),
                                          t.e("430997"),
                                          t.e("379995"),
                                          t.e("187048"),
                                          t.e("544058"),
                                          t.e("65200"),
                                          t.e("591377"),
                                          t.e("35723"),
                                          t.e("566378"),
                                          t.e("256372"),
                                          t.e("29542"),
                                          t.e("248804"),
                                          t.e("25173"),
                                      ]).then(t.bind(t, 468916));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: d, guild: o });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: ef.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ef.HA,
                                        children: [
                                            (0, l.jsx)(F.gm, { channel: d, guild: o }),
                                            (0, l.jsx)(R.A, {
                                                className: ef.__invalid_name,
                                                children: (0, l.jsx)(D.E, {
                                                    className: ef.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: y,
                                                    children: E,
                                                }),
                                            }),
                                            g ? (0, l.jsx)(V.A, { color: w, className: ef.PC }) : null,
                                            I
                                                ? (0, l.jsx)(h.Lp, {
                                                      text: es.intl.string(es.t.y2b7CA),
                                                      color: O.A.unsafe_rawColors.BRAND_260.css,
                                                      className: ef.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: ef.Ze, children: b }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: ef.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: ef.Kx,
                                        children: (0, l.jsx)(p.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: S,
                                            text: _,
                                            onKeyDown: function (e) {
                                                (e.key === eN.dh.ENTER || e.key === eN.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), S(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(k.P, { checked: N, disabled: f }),
                                ],
                            }),
                        ],
                    }),
                }),
                !x && (0, l.jsx)(eI, {}),
            ],
        });
    });
function e_(e) {
    var n, t;
    let s,
        { categories: c, guild: o, className: u, innerClassName: h, hasSidebar: x } = e,
        { onChannelClick: m } =
            ((n = o.id),
            (s = (0, r.bG)([ee.Ay], () => ee.Ay.getPendingChannelUpdates(n))),
            i.useEffect(() => (ei(n), () => ei(n)), [n]),
            i.useEffect(() => {
                null != s && (0, en.hp)(n, s);
            }, [n, s]),
            {
                onChannelClick: i.useCallback((e, n, t) => {
                    let l = ee.Ay.isChannelOptedIn(e, n),
                        i = n === t;
                    !l && $.A.isCollapsed(t) && null != t && (0, Q.fh)(t),
                        (0, et.cE)(e)
                            ? i
                                ? (0, et.le)(e, { include: new Set([n]) })
                                : (0, et.le)(e, { exclude: new Set([n]) })
                            : (0, en.zk)(e, n, !l, { section: el.JJy.CHANNEL_BROWSER });
                }, []),
            }),
        g = (0, C.HX)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        N = i.useCallback(
            (e) => {
                let { section: n } = e;
                if (0 === n && -1 === g) return null;
                let t = c._categories[n + g];
                return (0, l.jsx)(ev, { channel: t.channel, guild: o, onCategoryClick: m }, t.channel.id);
            },
            [c, o, g, m],
        ),
        f = i.useCallback(
            (e) => {
                let { section: n, row: t } = e;
                if (0 === n && -1 === g) return (0, l.jsx)(eg, { guild: o });
                let i = c._categories[n + g],
                    s = c[i.channel.id][t];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          eS,
                          {
                              category: i.channel,
                              channel: s.channel,
                              guild: o,
                              isFirstChannel: 0 === t,
                              isLastChannel: c[i.channel.id].length - 1 === t,
                              tooltipDirection: x ? "right" : "top",
                              onChannelClick: m,
                          },
                          s.channel.id,
                      );
            },
            [c, o, g, x, m],
        ),
        p = ((t = o.id), (0, ex.Xn)(t) ? 250 : 152),
        j = (0, A.zH)(o.id, c, 64, p);
    return (0, l.jsx)(
        P.Ei,
        {
            className: u,
            innerClassName: a()(h, ef.bv),
            sectionHeight: 48,
            rowHeight: (e) => j[e].rowHeight,
            renderSection: N,
            renderRow: f,
            sections: j.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
var ey = t(307805);
function ew(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(E.A, {
        sidebarType: E.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(v.A, { channelId: n, baseChannelId: eA.VV.CHANNEL_BROWSER }),
    });
}
function eO(e) {
    let { guildId: n } = e,
        [s, a] = i.useState(""),
        d = i.useRef(null),
        c = (0, r.bG)([_.A], () => _.A.getGuild(n)),
        o = (0, r.bG)([S.Ay], () => S.Ay.getChannels(n)),
        u = (0, r.bG)([b.A], () => b.A.getCategories(n)),
        h = (0, A.vh)(n, u, o, s),
        x = (0, r.bG)([y.A], () => y.A.canWithPartialContext(el.xBc.MANAGE_CHANNELS, { guildId: n })),
        m = (0, r.bG)([I.Ay], () => null != I.Ay.getCurrentSidebarChannelId(eA.VV.CHANNEL_BROWSER)),
        C = i.useCallback(() => a(""), [a]),
        g = i.useCallback(() => {
            (0, N.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("778799"),
                    t.e("507775"),
                    t.e("662068"),
                    t.e("358608"),
                    t.e("221500"),
                ]).then(t.bind(t, 684343));
                return (t) => (0, l.jsx)(e, { ...t, channelType: null, guildId: n });
            });
        }, [n]),
        E = i.useCallback(
            (e) => {
                e.key === eN.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), "" !== s ? C() : d.current?.blur());
            },
            [s, C],
        );
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: ey.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: ey.wx,
                      children: [
                          (0, l.jsx)(f.I, {
                              ref: d,
                              query: s,
                              onChange: function (e) {
                                  "" === s &&
                                      "" !== e &&
                                      w.default.track(el.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      a(e.toLowerCase());
                              },
                              onClear: C,
                              onKeyDown: E,
                              placeholder: es.intl.string(es.t.s5MnmC),
                          }),
                          x ? (0, l.jsx)(p.$, { icon: j.j, onClick: g, text: es.intl.string(es.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(e_, { className: ey.T, channels: o, categories: h, guild: c, hasSidebar: m }),
              ],
          });
}
var eR = t(202776),
    eD = t(462887),
    eL = t(778712),
    eG = t(97808),
    eM = t(545442),
    eT = t(689175),
    ek = t(334738),
    eP = t(241524),
    eH = t(964486),
    eU = t(736653),
    eB = t(793574),
    eV = t(562819),
    eF = t(963977),
    eq = t(164956),
    eW = t(713804),
    eZ = t(676608),
    eX = t(999291),
    ez = t(62199),
    eK = t(903209),
    eY = t(696451),
    eJ = t(317525),
    eQ = t(573163),
    e$ = t(287809),
    e0 = t(403362),
    e1 = t(427262),
    e4 = t(19575),
    e5 = t(669953),
    e6 = t(817818),
    e9 = t(591552),
    e2 = t(961973),
    e7 = t(435558),
    e8 = t.n(e7),
    e3 = t(665260),
    ne = t(355097);
function nn(e) {
    J.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let nt = {};
function nl(e) {
    let n = (0, r.bG)([e9.A], () => e9.A.getPendingResponseOptions(e) ?? nt, [e]);
    return (
        i.useEffect(() => (nn(e), () => nn(e)), [e]),
        i.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && e5.A.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: i.useCallback(
                (n, t, l) => {
                    let i = e9.A.getOnboardingResponses(e),
                        { addedRoleIds: s, removedRoleIds: a } = (function (e, n, t, l) {
                            let i = [],
                                s = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => l.includes(e.id));
                                (i = e8().difference(n.roleIds ?? [], t?.roleIds ?? [])),
                                    (s = e8().difference(t?.roleIds ?? [], n.roleIds ?? []));
                            } else if (t) (i = n.roleIds ?? []), (s = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    a = t.filter((e) => n.id !== e.id),
                                    r = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(e0.Vq),
                                    d = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(e0.Vq);
                                (i = []), (s = e8().difference(r, d));
                            }
                            return { addedRoleIds: i, removedRoleIds: s };
                        })(n, t, l, i),
                        { addedChannelIds: r, removedChannelIds: d } = (function (e) {
                            let { guildId: n, prompt: t, option: l, selected: i, responses: s } = e,
                                a = [],
                                r = [];
                            if (t.singleSelect && i) {
                                let e = t.options.find((e) => s.includes(e.id));
                                (a = e8().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (r = e8().difference(e?.channelIds ?? [], l.channelIds ?? []));
                            } else if (i) (a = l.channelIds ?? []), (r = []);
                            else {
                                let e = t.options.filter((e) => s.includes(e.id)),
                                    n = e.filter((e) => l.id !== e.id),
                                    i = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(e0.Vq),
                                    d = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(e0.Vq);
                                (a = []), (r = e8().difference(i, d));
                            }
                            return (
                                (0, et.cE)(n) && a.push(...e9.A.getDefaultChannelIds(n)),
                                { addedChannelIds: a, removedChannelIds: r }
                            );
                        })({ guildId: e, prompt: n, option: t, selected: l, responses: i }),
                        c = r.reduce((n, t) => {
                            let l = ee.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e3.lA)(l, ne.vv.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        o = d.reduce((n, t) => {
                            let l = ee.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e3.lA)(l, ne.vv.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        u = { ...c, ...o };
                    e5.A.selectOption(e, n.id, t.id, l),
                        J.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: u }),
                        e5.A.updateRolesLocal(e, s, a);
                },
                [e],
            ),
        }
    );
}
var ni = t(218785),
    ns = t(702841),
    na = t(155965),
    nr = t(953727);
function nd(e) {
    let { width: n = 120, height: t = 80, backgroundColor: i, foregroundColor: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nr.A)(a),
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
var nc = t(164048),
    no = t(839447),
    nu = t(539916),
    nh = t(790782),
    nx = t(891927),
    nm = t(999900);
let nC = eL._3.SIZE_80,
    ng = "required";
function nA(e) {
    let { guild: n, user: t } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, ez.A)({ user: t, guildId: n.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, eF.A)({ user: t, size: (0, eV.Te)(nC), onlyAnimateOnHoverOrFocus: !d }),
        o = (0, r.bG)([eY.Ay], () => eY.Ay.getSelfMember(n.id)),
        u = (0, r.yK)([eY.Ay], () => eY.Ay.getMemberRoleWithPendingUpdates(n.id, t.id)),
        h = (0, r.bG)([eJ.A], () => eJ.A.getSortedRoles(n.id)),
        x = (0, eZ.Ay)(n.id, t.id),
        m = h.filter((e) => u.includes(e.id)),
        C = (0, eX.Ay)(t.id, n.id);
    (0, eH.Ay)(() => {
        (0, eK.A)(t.id, t.getAvatarURL(n.id, (0, eL.FT)(nC)), { guildId: n.id });
    });
    let g = (0, eW.parseBioReact)(C?.bio),
        A = e4.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
    return (0, l.jsxs)("div", {
        className: nx.ME,
        children: [
            (0, l.jsx)(ed.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: es.intl.string(es.t.diTbF8),
            }),
            (0, l.jsx)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: es.intl.string(es.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: nx.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(A, { src: i, avatarDecoration: c, size: nC, "aria-label": t.username }),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: nx.Xh,
                        children: o?.nick ?? e1.Ay.getName(t),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(ep.PT, nx.z3),
                        children: g,
                    }),
                    null != m &&
                        m.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: nx.me }),
                                (0, l.jsx)(D.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: nx.DD,
                                    children: es.intl.string(es.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: nx.Ot,
                                    children: m?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: nx.JC,
                                                children: [
                                                    (0, l.jsx)(eM.R, {
                                                        color: e.colorString ?? el.TpD,
                                                        colors: x ? e.colorStrings : null,
                                                        className: nx.m4,
                                                    }),
                                                    (0, l.jsx)(D.E, {
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
function nN(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [c, o] = i.useState(new Set()),
        u = n?.options?.filter((e) => c.has(e.id)),
        x = (0, e2.a)(u),
        m = (0, e2.vV)(u),
        C = (0, r.yK)([e9.A], () => e9.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, ni.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = nl(t.id),
        f = n.options.map((e) => ({ value: e.id, ...e })),
        p = n.options.filter((e) => C.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: nx.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: O.A.unsafe_rawColors.BRAND_260.css,
                    text: es.intl.string(es.t.y2b7CA),
                    className: nx.Ad,
                }),
            (0, l.jsxs)(ed.D, {
                className: nx.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nx.mw, { [nx.So]: s?.type === ng }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(no.A, {
                options: f,
                value: p,
                onChange: function (e) {
                    let t = e.find((e) => !C.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) N(n, t, !0), n.singleSelect && n.options.forEach((e) => c.delete(e.id)), c.add(t.id);
                    else {
                        let e = C.filter((e) => !l.includes(e)),
                            t = n.options.filter((n) => e.includes(n.id));
                        if (C.length <= t.length && n.required) return void d({ type: ng });
                        t.forEach((e) => {
                            N(n, e, !1), c.delete(e.id);
                        });
                    }
                    o(new Set(c)), d(null);
                },
                canBeNew: !n.isNew,
            }),
            (0, l.jsxs)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: nx.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nf(e) {
    let { guild: n } = e,
        t = (0, r.bG)([e9.A], () => e9.A.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: nx.J1,
              children: [
                  (0, l.jsx)(ed.D, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: es.intl.string(es.t.eDVMrA),
                  }),
                  (0, l.jsx)(D.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: es.intl.string(es.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: nx.lA,
                      children: t.map((e, t) =>
                          (0, l.jsx)(na.A, { connection: e, guildId: n.id, location: eB.A.CHANNELS_AND_ROLES }, t),
                      ),
                  }),
              ],
          });
}
function np(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [c, o] = i.useState(new Set()),
        u = n?.options?.filter((e) => c.has(e.id)),
        x = (0, e2.a)(u),
        m = (0, e2.vV)(u),
        C = (0, r.yK)([e9.A], () => e9.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, ni.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = nl(t.id);
    return (0, l.jsxs)("div", {
        className: nx.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: O.A.unsafe_rawColors.BRAND_260.css,
                    text: es.intl.string(es.t.y2b7CA),
                    className: nx.Ad,
                }),
            (0, l.jsxs)(ed.D, {
                className: nx.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nx.mw, { [nx.So]: s?.type === ng }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: nx.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        nc.A,
                        {
                            hideMemberCount: !0,
                            guildId: t.id,
                            option: e,
                            onSelect: (t) => {
                                !t && 1 === C.length && n.required
                                    ? d({ type: ng })
                                    : (N(n, e, t ?? !1),
                                      n.singleSelect && t && n.options.forEach((e) => c.delete(e.id)),
                                      t ? c.add(e.id) : c.delete(e.id),
                                      o(new Set(c)),
                                      d(null));
                            },
                            selected: C.includes(e.id),
                            canBeNew: !n.isNew,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsxs)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: nx.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nj(e) {
    let n,
        { guildId: t, onBrowseChannels: s } = e,
        d = (0, eD.M)((0, eU.Ay)()),
        c = (0, r.bG)([_.A], () => _.A.getGuild(t)),
        o = (0, r.bG)([e$.default], () => e$.default.getCurrentUser()),
        u = (0, eP.A)("(min-width: 1344px)") && null != o,
        h = i.useCallback(() => {
            (0, Z.pX)(el.BVt.CHANNEL(t, eA.VV.CHANNEL_BROWSER)), s?.();
        }, [t, s]),
        x = (0, r.bG)([eQ.Ay], () => eQ.Ay.hasUnread(t, nh.P.GUILD_ONBOARDING_QUESTION)),
        m = c?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: A,
            newAnswersCount: N,
            onboardingPrompts: f,
        } = ((n = (0, ns.yK)([e9.A], () => e9.A.getEnabledOnboardingPrompts(t))),
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
        c?.id == null || (!eq.A.isFullServerPreview(c.id) && (e9.A.shouldFetchPrompts(c.id) || x) && (0, e6.jx)(c.id));
    }, [c?.id, x, m]),
        i.useEffect(() => {
            if (c?.id != null && !eq.A.isFullServerPreview(c.id))
                return () => {
                    (0, ek.hK)(c.id, nh.P.GUILD_ONBOARDING_QUESTION, e9.A.ackIdForGuild(c.id)),
                        e5.A.updateOnboardingResponses(c.id);
                };
        }, [c?.id]);
    let p = i.useCallback(
        (e) => {
            if (null == c) return null;
            switch (e.type) {
                case nu.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(np, { prompt: e, guild: c }, e.id);
                case nu.ME.DROPDOWN:
                    return (0, l.jsx)(nN, { prompt: e, guild: c }, e.id);
                default:
                    (0, e0.xb)(e.type);
            }
        },
        [c],
    );
    if (null == c) return null;
    if (0 === C.length) {
        let e = d ? O.A.unsafe_rawColors.PRIMARY_300.css : O.A.unsafe_rawColors.PRIMARY_500.css,
            n = d ? O.A.unsafe_rawColors.PRIMARY_700.css : O.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(nm.Qs, nx.Zc),
            children: (0, l.jsxs)("div", {
                className: nx.do,
                children: [
                    (0, l.jsx)(nd, { className: nx.Dw, foregroundColor: e, backgroundColor: n }),
                    (0, l.jsx)(ed.D, {
                        className: nx.jU,
                        variant: "heading-md/semibold",
                        children: es.intl.string(es.t.leKHQz),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-sm/medium",
                        children: es.intl.format(es.t["jH+ktB"], { onBrowseChannels: h }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(eT.Ch, {
        className: nx.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: nx.kw,
                children: [
                    (g.length > 0 || A.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(ed.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: es.intl.format(es.t.iB5Gqe, { count: g.length + N }),
                                    }),
                                }),
                                g.map(p),
                                A.map(p),
                                (0, l.jsx)("div", { className: nx.DY }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(ed.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: es.intl.format(es.t["8IV8K9"], { count: f.length }),
                                        }),
                                        (0, l.jsx)(D.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: es.intl.string(es.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                f.map(p),
                            ],
                        }),
                    (0, l.jsx)(nf, { guild: c }),
                ],
            }),
            u && (0, l.jsx)(nA, { guild: c, user: o }),
        ],
    });
}
var nE = t(675498);
function nv(e) {
    let { guild: n } = e,
        t = (0, eR.A)(n);
    i.useEffect(() => {
        (0, C.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: em.i.DISMISS });
    });
    let s = t
            ? es.intl.formatToPlainString(es.t.uqZgYe, { guildName: n.name })
            : es.intl.formatToPlainString(es.t.velJea, { guildName: n.name }),
        a = t ? es.intl.string(es.t.h9mGOP) : es.intl.string(es.t.et6wav);
    return (
        (0, m.HU)({ location: s }),
        (0, l.jsxs)(g.A, {
            className: nE.wx,
            innerClassname: nE.MU,
            hideSearch: !0,
            channelId: eA.VV.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [(0, l.jsx)(g.A.Icon, { icon: c.k, "aria-hidden": !0 }), (0, l.jsx)(g.A.Title, { children: a })],
        })
    );
}
function nI(e) {
    let { guildId: n, selectedSection: t } = e,
        s = (0, r.bG)([_.A], () => _.A.getGuild(n)),
        d = (0, eR.A)(s),
        [c, m] = i.useState(t ?? nu.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != t && m(t);
    }, [t]),
        i.useEffect(() => {
            d || c !== nu.qC.CUSTOMIZE || m(nu.qC.BROWSE);
        }, [d, c]);
    let C = (0, r.bG)([I.Ay], () => I.Ay.getCurrentSidebarChannelId(eA.VV.CHANNEL_BROWSER)),
        g = null != C && c === nu.qC.BROWSE,
        N = (0, x.f4)("ChannelsAndRolesPage"),
        f = (0, r.bG)([W.A], () => W.A.getNewChannelIds(n).size > 0),
        p = (0, A.RD)(n);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(nm.TE, nE.TE, { [nm.js]: g && !N }),
                      children: [
                          (0, l.jsx)(nv, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(nm.Qs, nE.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(o.V, {
                                          className: nE.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: c,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  o.V.Item,
                                                  {
                                                      className: nE.YU,
                                                      id: nu.qC.CUSTOMIZE,
                                                      children: es.intl.string(es.t.H2cICW),
                                                  },
                                                  nu.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  o.V.Item,
                                                  {
                                                      className: nE.YU,
                                                      id: nu.qC.BROWSE,
                                                      "aria-label": es.intl.string(es.t.et6wav),
                                                      children: [
                                                          es.intl.string(es.t.et6wav),
                                                          f
                                                              ? (0, l.jsx)(u.E, { type: "new", variant: "brand" })
                                                              : (0, l.jsx)(h.hV, {
                                                                    count: p,
                                                                    disableColor: !0,
                                                                    className: nE.Do,
                                                                }),
                                                      ],
                                                  },
                                                  nu.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (function () {
                                      switch (c) {
                                          case nu.qC.CUSTOMIZE:
                                              return (0, l.jsx)(nj, {
                                                  guildId: n,
                                                  onBrowseChannels: () => m(nu.qC.BROWSE),
                                              });
                                          case nu.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(eO, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  g && (0, l.jsx)(ew, { channelId: C }),
              ],
          });
}
