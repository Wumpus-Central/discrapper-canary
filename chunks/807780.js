t.r(n), t.d(n, { default: () => nE });
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
    x = t(726249),
    m = t(826673),
    C = t(742589),
    g = t(419534),
    A = t(192308),
    N = t(683438),
    f = t(821609),
    p = t(307301),
    j = t(812771),
    E = t(274541),
    v = t(761640),
    I = t(769765),
    b = t(808728),
    S = t(71393),
    _ = t(576705),
    y = t(174459);
t(321073);
var w = t(661531),
    O = t(3026),
    D = t(834730),
    R = t(243721),
    L = t(602853),
    G = t(866665),
    M = t(939249),
    T = t(658675),
    P = t(475825),
    k = t(442433),
    H = t(47167),
    U = t(499211),
    B = t(35275),
    V = t(166444),
    F = t(46054),
    q = t(454058),
    W = t(976860),
    Z = t(138298),
    X = t(790535),
    z = t(863005),
    K = t(228366),
    Y = t(914430),
    J = t(924985),
    Q = t(543465),
    $ = t(816662),
    ee = t(234053),
    en = t(652215);
function et(e) {
    K.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
var el = t(375708);
function ei(e, n, t) {
    return (0, r.bG)([Q.Ay], () => {
        var l;
        return n === t
            ? Q.Ay.isChannelOptedIn(e, n, !0)
            : ((l = Q.Ay),
              !!(0, ee.cE)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && Q.Ay.isChannelOptedIn(e, t, !0)));
    });
}
function es(e, n, t) {
    return (0, r.bG)([Q.Ay], () => n !== t && null != t && Q.Ay.isChannelOptedIn(e, t, !0));
}
var ea = t(297264),
    er = t(789645),
    ed = t(367727),
    ec = t(468689),
    eo = t(174998),
    eu = t(395504),
    eh = t(49999),
    ex = t(734980);
function em(e) {
    let { guild: n } = e,
        t = (0, eu.Xn)(n.id),
        i = (0, m.HX)(d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        s = t && !i ? d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : d.M.CHANNEL_BROWSER_NUX;
    (0, ed.Vh)(s);
    let r = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(ea.D, {
                              className: ex.R_,
                              color: "text-overlay-light",
                              variant: "heading-lg/semibold",
                              children: el.intl.string(el.t.AalzkJ),
                          }),
                          (0, l.jsx)(D.E, {
                              className: ex.h_,
                              variant: "text-md/normal",
                              color: "text-overlay-light",
                              children: el.intl.string(el.t.CXh95Z),
                          }),
                          (0, l.jsx)(f.$, {
                              variant: "overlay-primary",
                              onClick: function () {
                                  ec.A.open(n.id, en.BEX.ONBOARDING), (0, m.Dr)(s, { dismissAction: eh.i.PRIMARY });
                              },
                              text: el.intl.string(el.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(eo.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: ex.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: ex.Sl,
                      src: "/assets/b755a73425584e3c.svg",
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(ea.D, {
                              className: ex.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: el.intl.string(el.t.utqWEC),
                          }),
                          (0, l.jsx)(D.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: el.intl.string(el.t["+9etcM"]),
                          }),
                          (0, l.jsx)(D.E, {
                              className: ex.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: el.intl.format(el.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: a()(ex.kL, { [ex.xY]: t }),
        children: [
            (0, l.jsx)(M.D, {
                className: ex.b,
                onClick: function () {
                    (0, m.Dr)(s, { dismissAction: eh.i.DISMISS });
                },
                children: (0, l.jsx)(er.P, { size: "md", color: "currentColor" }),
            }),
            r,
        ],
    });
}
var eC = t(746080),
    eg = t(650583),
    eA = t(326005),
    eN = t(165648);
let ef = new Set([en.rbe.GUILD_FORUM, en.rbe.GUILD_MEDIA]),
    ep = new Set([en.rbe.GUILD_VOICE, en.rbe.GUILD_STAGE_VOICE]);
function ej(e) {
    let { guild: n, channel: i, onCategoryClick: s } = e,
        r = ei(n.id, i.id, i.id),
        d = es(n.id, i.id, i.id),
        c = (0, H.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(eA.Fv, { [eA.d0]: "null" === i.id }),
        onContextMenu: function (e) {
            (0, k.L3)(e, async () => {
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
                className: eA.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(R.d, {
                        label: el.intl.string(el.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(n.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let eE = i.memo(function () {
        return (0, l.jsx)("div", { className: eA.me });
    }),
    ev = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(D.E, { variant: "text-xs/normal", className: eA.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    eI = i.memo(function (e) {
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
            { isSubscriptionGated: A } = (0, U.A)(d.id),
            N = ei(o.id, d.id, c.id),
            p = es(o.id, d.id, c.id),
            j =
                ((n = o.id),
                (i = c.id),
                (0, r.bG)([Q.Ay], () => {
                    if (null != i && Q.Ay.isChannelOptedIn(n, i, !0)) return el.intl.string(el.t.Lz94y1);
                })),
            E = (0, H.Ay)(d),
            v = (0, r.bG)([z.A], () => z.A.getActiveThreadCount(o.id, d.id)),
            I = (0, r.bG)([q.A], () => q.A.shouldIndicateNewChannel(o.id, d.id)),
            b =
                ((s = []),
                en.kvI.GUILD_THREADS_ONLY.has(d.type) &&
                    v >= 1 &&
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            {
                                variant: "text-xs/normal",
                                className: eA.qy,
                                children: el.intl.format(el.t.z0qML2, { count: v }),
                            },
                            "thread-count",
                        ),
                    ),
                ep.has(d.type) ||
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            { variant: "text-xs/normal", className: eA.qy, children: (0, g.YC)(d.id) },
                            "active",
                        ),
                    ),
                null != d.topic &&
                    d.topic.length > 0 &&
                    s.push(
                        (0, l.jsx)(
                            O.A,
                            {
                                className: eN.PT,
                                children: (0, l.jsx)(D.E, {
                                    className: eA.At,
                                    variant: "text-xs/normal",
                                    children: F.A.parseTruncatedTopic(d.topic, !0, { channelId: d.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [s.map((e, n) => [e, (0, l.jsx)(ev, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1));
        function S(e) {
            return (
                (e.stopPropagation(), ef.has(d.type) || e.shiftKey)
                    ? (0, W.uh)(o.id, d.id)
                    : d.isGuildStageVoice() || d.isGuildVoice()
                      ? (0, X.av)(d)
                      : Z.A.openChannelAsSidebar({
                            guildId: d.guild_id,
                            channelId: d.id,
                            baseChannelId: eC.VV.CHANNEL_BROWSER,
                        }),
                !0
            );
        }
        let _ = el.intl.string(el.t.vetGQs);
        d.isGuildStageVoice() || d.isGuildVoice()
            ? (_ = el.intl.string(el.t.VJlc0S))
            : d.isForumLikeChannel() && (_ = el.intl.string(el.t["3xjX0U"]));
        let y = p ? "text-muted" : "text-default",
            R = (0, L.r)(p ? w.A.colors.TEXT_MUTED : w.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(G.m, {
                    text: j,
                    delay: 500,
                    position: C,
                    children: (0, l.jsxs)(M.D, {
                        className: a()(eA.WG, { [eA.Qn]: u, [eA.wp]: x, [eA.r9]: p }),
                        onClick: function (e) {
                            if (!p) return e.stopPropagation(), m(o.id, d.id, c.id), !0;
                        },
                        onContextMenu: function (e) {
                            d.isGuildVocal()
                                ? (0, k.L3)(e, async () => {
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
                                : (0, k.L3)(e, async () => {
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
                                className: eA.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eA.HA,
                                        children: [
                                            (0, l.jsx)(V.gm, { channel: d, guild: o }),
                                            (0, l.jsx)(O.A, {
                                                className: eA.__invalid_name,
                                                children: (0, l.jsx)(D.E, {
                                                    className: eA.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: y,
                                                    children: E,
                                                }),
                                            }),
                                            A ? (0, l.jsx)(B.A, { color: R, className: eA.PC }) : null,
                                            I
                                                ? (0, l.jsx)(h.Lp, {
                                                      text: el.intl.string(el.t.y2b7CA),
                                                      color: w.A.unsafe_rawColors.BRAND_260.css,
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
                                        children: (0, l.jsx)(f.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: S,
                                            text: _,
                                            onKeyDown: function (e) {
                                                (e.key === eg.dh.ENTER || e.key === eg.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), S(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(T.P, { checked: N, disabled: p }),
                                ],
                            }),
                        ],
                    }),
                }),
                !x && (0, l.jsx)(eE, {}),
            ],
        });
    });
function eb(e) {
    var n, t;
    let s,
        { categories: c, guild: o, className: u, innerClassName: h, hasSidebar: x } = e,
        { onChannelClick: C } =
            ((n = o.id),
            (s = (0, r.bG)([Q.Ay], () => Q.Ay.getPendingChannelUpdates(n))),
            i.useEffect(() => (et(n), () => et(n)), [n]),
            i.useEffect(() => {
                null != s && (0, $.hp)(n, s);
            }, [n, s]),
            {
                onChannelClick: i.useCallback((e, n, t) => {
                    let l = Q.Ay.isChannelOptedIn(e, n),
                        i = n === t;
                    !l && J.A.isCollapsed(t) && null != t && (0, Y.fh)(t),
                        (0, ee.cE)(e)
                            ? i
                                ? (0, ee.le)(e, { include: new Set([n]) })
                                : (0, ee.le)(e, { exclude: new Set([n]) })
                            : (0, $.zk)(e, n, !l, { section: en.JJy.CHANNEL_BROWSER });
                }, []),
            }),
        A = (0, m.HX)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        N = i.useCallback(
            (e) => {
                let { section: n } = e;
                if (0 === n && -1 === A) return null;
                let t = c._categories[n + A];
                return (0, l.jsx)(ej, { channel: t.channel, guild: o, onCategoryClick: C }, t.channel.id);
            },
            [c, o, A, C],
        ),
        f = i.useCallback(
            (e) => {
                let { section: n, row: t } = e;
                if (0 === n && -1 === A) return (0, l.jsx)(em, { guild: o });
                let i = c._categories[n + A],
                    s = c[i.channel.id][t];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          eI,
                          {
                              category: i.channel,
                              channel: s.channel,
                              guild: o,
                              isFirstChannel: 0 === t,
                              isLastChannel: c[i.channel.id].length - 1 === t,
                              tooltipDirection: x ? "right" : "top",
                              onChannelClick: C,
                          },
                          s.channel.id,
                      );
            },
            [c, o, A, x, C],
        ),
        p = ((t = o.id), (0, eu.Xn)(t) ? 250 : 152),
        j = (0, g.zH)(o.id, c, 64, p);
    return (0, l.jsx)(
        P.Ei,
        {
            className: u,
            innerClassName: a()(h, eA.bv),
            sectionHeight: 48,
            rowHeight: (e) => j[e].rowHeight,
            renderSection: N,
            renderRow: f,
            sections: j.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
var eS = t(307805);
function e_(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(j.A, {
        sidebarType: j.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(E.A, { channelId: n, baseChannelId: eC.VV.CHANNEL_BROWSER }),
    });
}
function ey(e) {
    let { guildId: n } = e,
        [s, a] = i.useState(""),
        d = i.useRef(null),
        c = (0, r.bG)([S.A], () => S.A.getGuild(n)),
        o = (0, r.bG)([b.Ay], () => b.Ay.getChannels(n)),
        u = (0, r.bG)([I.A], () => I.A.getCategories(n)),
        h = (0, g.vh)(n, u, o, s),
        x = (0, r.bG)([_.A], () => _.A.canWithPartialContext(en.xBc.MANAGE_CHANNELS, { guildId: n })),
        m = (0, r.bG)([v.Ay], () => null != v.Ay.getCurrentSidebarChannelId(eC.VV.CHANNEL_BROWSER)),
        C = i.useCallback(() => a(""), [a]),
        j = i.useCallback(() => {
            (0, A.openModalLazy)(async () => {
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
                e.key === eg.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), "" !== s ? C() : d.current?.blur());
            },
            [s, C],
        );
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: eS.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: eS.wx,
                      children: [
                          (0, l.jsx)(N.I, {
                              ref: d,
                              query: s,
                              onChange: function (e) {
                                  "" === s &&
                                      "" !== e &&
                                      y.default.track(en.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      a(e.toLowerCase());
                              },
                              onClear: C,
                              onKeyDown: E,
                              placeholder: el.intl.string(el.t.s5MnmC),
                          }),
                          x ? (0, l.jsx)(f.$, { icon: p.j, onClick: j, text: el.intl.string(el.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(eb, { className: eS.T, channels: o, categories: h, guild: c, hasSidebar: m }),
              ],
          });
}
var ew = t(202776),
    eO = t(462887),
    eD = t(778712),
    eR = t(97808),
    eL = t(545442),
    eG = t(689175),
    eM = t(334738),
    eT = t(241524),
    eP = t(964486),
    ek = t(736653),
    eH = t(793574),
    eU = t(562819),
    eB = t(963977),
    eV = t(164956),
    eF = t(713804),
    eq = t(676608),
    eW = t(999291),
    eZ = t(62199),
    eX = t(903209),
    ez = t(696451),
    eK = t(317525),
    eY = t(573163),
    eJ = t(287809),
    eQ = t(403362),
    e$ = t(427262),
    e0 = t(19575),
    e1 = t(669953),
    e4 = t(817818),
    e5 = t(591552),
    e6 = t(961973),
    e9 = t(435558),
    e2 = t.n(e9),
    e7 = t(665260),
    e8 = t(355097);
function e3(e) {
    K.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let ne = {};
function nn(e) {
    let n = (0, r.bG)([e5.A], () => e5.A.getPendingResponseOptions(e) ?? ne, [e]);
    return (
        i.useEffect(() => (e3(e), () => e3(e)), [e]),
        i.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && e1.A.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: i.useCallback(
                (n, t, l) => {
                    let i = e5.A.getOnboardingResponses(e),
                        { addedRoleIds: s, removedRoleIds: a } = (function (e, n, t, l) {
                            let i = [],
                                s = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => l.includes(e.id));
                                (i = e2().difference(n.roleIds ?? [], t?.roleIds ?? [])),
                                    (s = e2().difference(t?.roleIds ?? [], n.roleIds ?? []));
                            } else if (t) (i = n.roleIds ?? []), (s = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    a = t.filter((e) => n.id !== e.id),
                                    r = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(eQ.Vq),
                                    d = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(eQ.Vq);
                                (i = []), (s = e2().difference(r, d));
                            }
                            return { addedRoleIds: i, removedRoleIds: s };
                        })(n, t, l, i),
                        { addedChannelIds: r, removedChannelIds: d } = (function (e) {
                            let { guildId: n, prompt: t, option: l, selected: i, responses: s } = e,
                                a = [],
                                r = [];
                            if (t.singleSelect && i) {
                                let e = t.options.find((e) => s.includes(e.id));
                                (a = e2().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (r = e2().difference(e?.channelIds ?? [], l.channelIds ?? []));
                            } else if (i) (a = l.channelIds ?? []), (r = []);
                            else {
                                let e = t.options.filter((e) => s.includes(e.id)),
                                    n = e.filter((e) => l.id !== e.id),
                                    i = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(eQ.Vq),
                                    d = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(eQ.Vq);
                                (a = []), (r = e2().difference(i, d));
                            }
                            return (
                                (0, ee.cE)(n) && a.push(...e5.A.getDefaultChannelIds(n)),
                                { addedChannelIds: a, removedChannelIds: r }
                            );
                        })({ guildId: e, prompt: n, option: t, selected: l, responses: i }),
                        c = r.reduce((n, t) => {
                            let l = Q.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e7.lA)(l, e8.vv.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        o = d.reduce((n, t) => {
                            let l = Q.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e7.lA)(l, e8.vv.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        u = { ...c, ...o };
                    e1.A.selectOption(e, n.id, t.id, l),
                        K.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: u }),
                        e1.A.updateRolesLocal(e, s, a);
                },
                [e],
            ),
        }
    );
}
var nt = t(218785),
    nl = t(702841),
    ni = t(155965),
    ns = t(953727);
function na(e) {
    let { width: n = 120, height: t = 80, backgroundColor: i, foregroundColor: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, ns.A)(a),
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
var nr = t(164048),
    nd = t(839447),
    nc = t(539916),
    no = t(790782),
    nu = t(891927),
    nh = t(999900);
let nx = eD._3.SIZE_80,
    nm = "required";
function nC(e) {
    let { guild: n, user: t } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, eZ.A)({ user: t, guildId: n.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, eB.A)({ user: t, size: (0, eU.Te)(nx), onlyAnimateOnHoverOrFocus: !d }),
        o = (0, r.bG)([ez.Ay], () => ez.Ay.getSelfMember(n.id)),
        u = (0, r.yK)([ez.Ay], () => ez.Ay.getMemberRoleWithPendingUpdates(n.id, t.id)),
        h = (0, r.bG)([eK.A], () => eK.A.getSortedRoles(n.id)),
        x = (0, eq.Ay)(n.id, t.id),
        m = h.filter((e) => u.includes(e.id)),
        C = (0, eW.Ay)(t.id, n.id);
    (0, eP.Ay)(() => {
        (0, eX.A)(t.id, t.getAvatarURL(n.id, (0, eD.FT)(nx)), { guildId: n.id });
    });
    let g = (0, eF.parseBioReact)(C?.bio),
        A = e0.Ay.getEnableHardwareAcceleration() ? eR.Js : eR.eu;
    return (0, l.jsxs)("div", {
        className: nu.ME,
        children: [
            (0, l.jsx)(ea.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: el.intl.string(el.t.diTbF8),
            }),
            (0, l.jsx)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: el.intl.string(el.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: nu.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(A, { src: i, avatarDecoration: c, size: nx, "aria-label": t.username }),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: nu.Xh,
                        children: o?.nick ?? e$.Ay.getName(t),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(eN.PT, nu.z3),
                        children: g,
                    }),
                    null != m &&
                        m.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: nu.me }),
                                (0, l.jsx)(D.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: nu.DD,
                                    children: el.intl.string(el.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: nu.Ot,
                                    children: m?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: nu.JC,
                                                children: [
                                                    (0, l.jsx)(eL.R, {
                                                        color: e.colorString ?? en.TpD,
                                                        colors: x ? e.colorStrings : null,
                                                        className: nu.m4,
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
function ng(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [c, o] = i.useState(new Set()),
        u = n?.options?.filter((e) => c.has(e.id)),
        x = (0, e6.a)(u),
        m = (0, e6.vV)(u),
        C = (0, r.yK)([e5.A], () => e5.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nt.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = nn(t.id),
        f = n.options.map((e) => ({ value: e.id, ...e })),
        p = n.options.filter((e) => C.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: nu.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: w.A.unsafe_rawColors.BRAND_260.css,
                    text: el.intl.string(el.t.y2b7CA),
                    className: nu.Ad,
                }),
            (0, l.jsxs)(ea.D, {
                className: nu.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nu.mw, { [nu.So]: s?.type === nm }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(nd.A, {
                options: f,
                value: p,
                onChange: function (e) {
                    let t = e.find((e) => !C.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) N(n, t, !0), n.singleSelect && n.options.forEach((e) => c.delete(e.id)), c.add(t.id);
                    else {
                        let e = C.filter((e) => !l.includes(e)),
                            t = n.options.filter((n) => e.includes(n.id));
                        if (C.length <= t.length && n.required) return void d({ type: nm });
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
                className: nu.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nA(e) {
    let { guild: n } = e,
        t = (0, r.bG)([e5.A], () => e5.A.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: nu.J1,
              children: [
                  (0, l.jsx)(ea.D, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: el.intl.string(el.t.eDVMrA),
                  }),
                  (0, l.jsx)(D.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: el.intl.string(el.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: nu.lA,
                      children: t.map((e, t) =>
                          (0, l.jsx)(ni.A, { connection: e, guildId: n.id, location: eH.A.CHANNELS_AND_ROLES }, t),
                      ),
                  }),
              ],
          });
}
function nN(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [c, o] = i.useState(new Set()),
        u = n?.options?.filter((e) => c.has(e.id)),
        x = (0, e6.a)(u),
        m = (0, e6.vV)(u),
        C = (0, r.yK)([e5.A], () => e5.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nt.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = nn(t.id);
    return (0, l.jsxs)("div", {
        className: nu.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: w.A.unsafe_rawColors.BRAND_260.css,
                    text: el.intl.string(el.t.y2b7CA),
                    className: nu.Ad,
                }),
            (0, l.jsxs)(ea.D, {
                className: nu.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nu.mw, { [nu.So]: s?.type === nm }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: nu.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        nr.A,
                        {
                            hideMemberCount: !0,
                            guildId: t.id,
                            option: e,
                            onSelect: (t) => {
                                !t && 1 === C.length && n.required
                                    ? d({ type: nm })
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
                className: nu.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nf(e) {
    let n,
        { guildId: t, onBrowseChannels: s } = e,
        d = (0, eO.M)((0, ek.Ay)()),
        c = (0, r.bG)([S.A], () => S.A.getGuild(t)),
        o = (0, r.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        u = (0, eT.A)("(min-width: 1344px)") && null != o,
        h = i.useCallback(() => {
            (0, W.pX)(en.BVt.CHANNEL(t, eC.VV.CHANNEL_BROWSER)), s?.();
        }, [t, s]),
        x = (0, r.bG)([eY.Ay], () => eY.Ay.hasUnread(t, no.P.GUILD_ONBOARDING_QUESTION)),
        m = c?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: A,
            newAnswersCount: N,
            onboardingPrompts: f,
        } = ((n = (0, nl.yK)([e5.A], () => e5.A.getEnabledOnboardingPrompts(t))),
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
        c?.id == null || (!eV.A.isFullServerPreview(c.id) && (e5.A.shouldFetchPrompts(c.id) || x) && (0, e4.jx)(c.id));
    }, [c?.id, x, m]),
        i.useEffect(() => {
            if (c?.id != null && !eV.A.isFullServerPreview(c.id))
                return () => {
                    (0, eM.hK)(c.id, no.P.GUILD_ONBOARDING_QUESTION, e5.A.ackIdForGuild(c.id)),
                        e1.A.updateOnboardingResponses(c.id);
                };
        }, [c?.id]);
    let p = i.useCallback(
        (e) => {
            if (null == c) return null;
            switch (e.type) {
                case nc.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(nN, { prompt: e, guild: c }, e.id);
                case nc.ME.DROPDOWN:
                    return (0, l.jsx)(ng, { prompt: e, guild: c }, e.id);
                default:
                    (0, eQ.xb)(e.type);
            }
        },
        [c],
    );
    if (null == c) return null;
    if (0 === C.length) {
        let e = d ? w.A.unsafe_rawColors.PRIMARY_300.css : w.A.unsafe_rawColors.PRIMARY_500.css,
            n = d ? w.A.unsafe_rawColors.PRIMARY_700.css : w.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(nh.Qs, nu.Zc),
            children: (0, l.jsxs)("div", {
                className: nu.do,
                children: [
                    (0, l.jsx)(na, { className: nu.Dw, foregroundColor: e, backgroundColor: n }),
                    (0, l.jsx)(ea.D, {
                        className: nu.jU,
                        variant: "heading-md/semibold",
                        children: el.intl.string(el.t.leKHQz),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-sm/medium",
                        children: el.intl.format(el.t["jH+ktB"], { onBrowseChannels: h }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(eG.Ch, {
        className: nu.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: nu.kw,
                children: [
                    (g.length > 0 || A.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(ea.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: el.intl.format(el.t.iB5Gqe, { count: g.length + N }),
                                    }),
                                }),
                                g.map(p),
                                A.map(p),
                                (0, l.jsx)("div", { className: nu.DY }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(ea.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: el.intl.format(el.t["8IV8K9"], { count: f.length }),
                                        }),
                                        (0, l.jsx)(D.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: el.intl.string(el.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                f.map(p),
                            ],
                        }),
                    (0, l.jsx)(nA, { guild: c }),
                ],
            }),
            u && (0, l.jsx)(nC, { guild: c, user: o }),
        ],
    });
}
var np = t(675498);
function nj(e) {
    let { guild: n } = e,
        t = (0, ew.A)(n);
    i.useEffect(() => {
        (0, m.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: eh.i.DISMISS });
    });
    let s = t
            ? el.intl.formatToPlainString(el.t.uqZgYe, { guildName: n.name })
            : el.intl.formatToPlainString(el.t.velJea, { guildName: n.name }),
        a = t ? el.intl.string(el.t.h9mGOP) : el.intl.string(el.t.et6wav);
    return (
        (0, x.HU)({ location: s }),
        (0, l.jsxs)(C.A, {
            className: np.wx,
            innerClassname: np.MU,
            hideSearch: !0,
            channelId: eC.VV.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [(0, l.jsx)(C.A.Icon, { icon: c.k, "aria-hidden": !0 }), (0, l.jsx)(C.A.Title, { children: a })],
        })
    );
}
function nE(e) {
    let { guildId: n, selectedSection: t } = e,
        s = (0, r.bG)([S.A], () => S.A.getGuild(n)),
        d = (0, ew.A)(s),
        [c, x] = i.useState(t ?? nc.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != t && x(t);
    }, [t]),
        i.useEffect(() => {
            d || c !== nc.qC.CUSTOMIZE || x(nc.qC.BROWSE);
        }, [d, c]);
    let m = (0, r.bG)([v.Ay], () => v.Ay.getCurrentSidebarChannelId(eC.VV.CHANNEL_BROWSER)),
        C = null != m && c === nc.qC.BROWSE,
        A = (0, r.bG)([q.A], () => q.A.getNewChannelIds(n).size > 0),
        N = (0, g.RD)(n);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(nh.TE, np.TE, { [nh.js]: C }),
                      children: [
                          (0, l.jsx)(nj, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(nh.Qs, np.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(o.V, {
                                          className: np.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: c,
                                          onItemSelect: (e) => x(e),
                                          children: [
                                              (0, l.jsx)(
                                                  o.V.Item,
                                                  {
                                                      className: np.YU,
                                                      id: nc.qC.CUSTOMIZE,
                                                      children: el.intl.string(el.t.H2cICW),
                                                  },
                                                  nc.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  o.V.Item,
                                                  {
                                                      className: np.YU,
                                                      id: nc.qC.BROWSE,
                                                      "aria-label": el.intl.string(el.t.et6wav),
                                                      children: [
                                                          el.intl.string(el.t.et6wav),
                                                          A
                                                              ? (0, l.jsx)(u.E, { type: "new", variant: "brand" })
                                                              : (0, l.jsx)(h.hV, {
                                                                    count: N,
                                                                    disableColor: !0,
                                                                    className: np.Do,
                                                                }),
                                                      ],
                                                  },
                                                  nc.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (function () {
                                      switch (c) {
                                          case nc.qC.CUSTOMIZE:
                                              return (0, l.jsx)(nf, {
                                                  guildId: n,
                                                  onBrowseChannels: () => x(nc.qC.BROWSE),
                                              });
                                          case nc.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(ey, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  C && (0, l.jsx)(e_, { channelId: m }),
              ],
          });
}
