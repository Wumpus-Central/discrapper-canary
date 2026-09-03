t.r(n), t.d(n, { default: () => nv });
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
    P = t(658675),
    k = t(475825),
    H = t(442433),
    U = t(47167),
    B = t(499211),
    V = t(35275),
    F = t(166444),
    q = t(46054),
    W = t(454058),
    Z = t(976860),
    X = t(138298),
    z = t(790535),
    K = t(863005),
    Y = t(228366),
    J = t(914430),
    Q = t(924985),
    $ = t(543465),
    ee = t(816662),
    en = t(234053),
    et = t(652215);
function el(e) {
    Y.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
var ei = t(375708);
function es(e, n, t) {
    return (0, r.bG)([$.Ay], () => {
        var l;
        return n === t
            ? $.Ay.isChannelOptedIn(e, n, !0)
            : ((l = $.Ay),
              !!(0, en.cE)(e) || l.isChannelOptedIn(e, n, !0) || (null != t && $.Ay.isChannelOptedIn(e, t, !0)));
    });
}
function ea(e, n, t) {
    return (0, r.bG)([$.Ay], () => n !== t && null != t && $.Ay.isChannelOptedIn(e, t, !0));
}
var er = t(297264),
    ed = t(789645),
    ec = t(367727),
    eo = t(468689),
    eu = t(174998),
    eh = t(395504),
    ex = t(49999),
    em = t(734980);
function eC(e) {
    let { guild: n } = e,
        t = (0, eh.Xn)(n.id),
        i = (0, C.HX)(d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        s = t && !i ? d.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : d.M.CHANNEL_BROWSER_NUX;
    (0, ec.Vh)(s);
    let r = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(er.D, {
                              className: em.R_,
                              color: "text-overlay-light",
                              variant: "heading-lg/semibold",
                              children: ei.intl.string(ei.t.AalzkJ),
                          }),
                          (0, l.jsx)(D.E, {
                              className: em.h_,
                              variant: "text-md/normal",
                              color: "text-overlay-light",
                              children: ei.intl.string(ei.t.CXh95Z),
                          }),
                          (0, l.jsx)(p.$, {
                              variant: "overlay-primary",
                              onClick: function () {
                                  eo.A.open(n.id, et.BEX.ONBOARDING), (0, C.Dr)(s, { dismissAction: ex.i.PRIMARY });
                              },
                              text: ei.intl.string(ei.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(eu.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: em.FQ,
              children: [
                  (0, l.jsx)("img", {
                      width: 180,
                      className: em.Sl,
                      src: "/assets/b755a73425584e3c.svg",
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(er.D, {
                              className: em.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: ei.intl.string(ei.t.utqWEC),
                          }),
                          (0, l.jsx)(D.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: ei.intl.string(ei.t["+9etcM"]),
                          }),
                          (0, l.jsx)(D.E, {
                              className: em.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: ei.intl.format(ei.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: a()(em.kL, { [em.xY]: t }),
        children: [
            (0, l.jsx)(T.D, {
                className: em.b,
                onClick: function () {
                    (0, C.Dr)(s, { dismissAction: ex.i.DISMISS });
                },
                children: (0, l.jsx)(ed.P, { size: "md", color: "currentColor" }),
            }),
            r,
        ],
    });
}
var eg = t(746080),
    eA = t(650583),
    eN = t(326005),
    ef = t(165648);
let ep = new Set([et.rbe.GUILD_FORUM, et.rbe.GUILD_MEDIA]),
    ej = new Set([et.rbe.GUILD_VOICE, et.rbe.GUILD_STAGE_VOICE]);
function eE(e) {
    let { guild: n, channel: i, onCategoryClick: s } = e,
        r = es(n.id, i.id, i.id),
        d = ea(n.id, i.id, i.id),
        c = (0, U.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(eN.Fv, { [eN.d0]: "null" === i.id }),
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
                className: eN.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(L.d, {
                        label: ei.intl.string(ei.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(n.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let ev = i.memo(function () {
        return (0, l.jsx)("div", { className: eN.me });
    }),
    eI = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(D.E, { variant: "text-xs/normal", className: eN.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    eb = i.memo(function (e) {
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
            N = es(o.id, d.id, c.id),
            f = ea(o.id, d.id, c.id),
            j =
                ((n = o.id),
                (i = c.id),
                (0, r.bG)([$.Ay], () => {
                    if (null != i && $.Ay.isChannelOptedIn(n, i, !0)) return ei.intl.string(ei.t.Lz94y1);
                })),
            E = (0, U.Ay)(d),
            v = (0, r.bG)([K.A], () => K.A.getActiveThreadCount(o.id, d.id)),
            I = (0, r.bG)([W.A], () => W.A.shouldIndicateNewChannel(o.id, d.id)),
            b =
                ((s = []),
                et.kvI.GUILD_THREADS_ONLY.has(d.type) &&
                    v >= 1 &&
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            {
                                variant: "text-xs/normal",
                                className: eN.qy,
                                children: ei.intl.format(ei.t.z0qML2, { count: v }),
                            },
                            "thread-count",
                        ),
                    ),
                ej.has(d.type) ||
                    s.push(
                        (0, l.jsx)(
                            D.E,
                            { variant: "text-xs/normal", className: eN.qy, children: (0, A.YC)(d.id) },
                            "active",
                        ),
                    ),
                null != d.topic &&
                    d.topic.length > 0 &&
                    s.push(
                        (0, l.jsx)(
                            R.A,
                            {
                                className: ef.PT,
                                children: (0, l.jsx)(D.E, {
                                    className: eN.At,
                                    variant: "text-xs/normal",
                                    children: q.A.parseTruncatedTopic(d.topic, !0, { channelId: d.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [s.map((e, n) => [e, (0, l.jsx)(eI, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1));
        function S(e) {
            return (
                (e.stopPropagation(), ep.has(d.type) || e.shiftKey)
                    ? (0, Z.uh)(o.id, d.id)
                    : d.isGuildStageVoice() || d.isGuildVoice()
                      ? (0, z.av)(d)
                      : X.A.openChannelAsSidebar({
                            guildId: d.guild_id,
                            channelId: d.id,
                            baseChannelId: eg.VV.CHANNEL_BROWSER,
                        }),
                !0
            );
        }
        let _ = ei.intl.string(ei.t.vetGQs);
        d.isGuildStageVoice() || d.isGuildVoice()
            ? (_ = ei.intl.string(ei.t.VJlc0S))
            : d.isForumLikeChannel() && (_ = ei.intl.string(ei.t["3xjX0U"]));
        let y = f ? "text-muted" : "text-default",
            w = (0, G.r)(f ? O.A.colors.TEXT_MUTED : O.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(M.m, {
                    text: j,
                    delay: 500,
                    position: C,
                    children: (0, l.jsxs)(T.D, {
                        className: a()(eN.WG, { [eN.Qn]: u, [eN.wp]: x, [eN.r9]: f }),
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
                                className: eN.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eN.HA,
                                        children: [
                                            (0, l.jsx)(F.gm, { channel: d, guild: o }),
                                            (0, l.jsx)(R.A, {
                                                className: eN.__invalid_name,
                                                children: (0, l.jsx)(D.E, {
                                                    className: eN.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: y,
                                                    children: E,
                                                }),
                                            }),
                                            g ? (0, l.jsx)(V.A, { color: w, className: eN.PC }) : null,
                                            I
                                                ? (0, l.jsx)(h.Lp, {
                                                      text: ei.intl.string(ei.t.y2b7CA),
                                                      color: O.A.unsafe_rawColors.BRAND_260.css,
                                                      className: eN.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: eN.Ze, children: b }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: eN.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: eN.Kx,
                                        children: (0, l.jsx)(p.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: S,
                                            text: _,
                                            onKeyDown: function (e) {
                                                (e.key === eA.dh.ENTER || e.key === eA.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), S(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(P.P, { checked: N, disabled: f }),
                                ],
                            }),
                        ],
                    }),
                }),
                !x && (0, l.jsx)(ev, {}),
            ],
        });
    });
function eS(e) {
    var n, t;
    let s,
        { categories: c, guild: o, className: u, innerClassName: h, hasSidebar: x } = e,
        { onChannelClick: m } =
            ((n = o.id),
            (s = (0, r.bG)([$.Ay], () => $.Ay.getPendingChannelUpdates(n))),
            i.useEffect(() => (el(n), () => el(n)), [n]),
            i.useEffect(() => {
                null != s && (0, ee.hp)(n, s);
            }, [n, s]),
            {
                onChannelClick: i.useCallback((e, n, t) => {
                    let l = $.Ay.isChannelOptedIn(e, n),
                        i = n === t;
                    !l && Q.A.isCollapsed(t) && null != t && (0, J.fh)(t),
                        (0, en.cE)(e)
                            ? i
                                ? (0, en.le)(e, { include: new Set([n]) })
                                : (0, en.le)(e, { exclude: new Set([n]) })
                            : (0, ee.zk)(e, n, !l, { section: et.JJy.CHANNEL_BROWSER });
                }, []),
            }),
        g = (0, C.HX)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        N = i.useCallback(
            (e) => {
                let { section: n } = e;
                if (0 === n && -1 === g) return null;
                let t = c._categories[n + g];
                return (0, l.jsx)(eE, { channel: t.channel, guild: o, onCategoryClick: m }, t.channel.id);
            },
            [c, o, g, m],
        ),
        f = i.useCallback(
            (e) => {
                let { section: n, row: t } = e;
                if (0 === n && -1 === g) return (0, l.jsx)(eC, { guild: o });
                let i = c._categories[n + g],
                    s = c[i.channel.id][t];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          eb,
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
        p = ((t = o.id), (0, eh.Xn)(t) ? 250 : 152),
        j = (0, A.zH)(o.id, c, 64, p);
    return (0, l.jsx)(
        k.Ei,
        {
            className: u,
            innerClassName: a()(h, eN.bv),
            sectionHeight: 48,
            rowHeight: (e) => j[e].rowHeight,
            renderSection: N,
            renderRow: f,
            sections: j.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
var e_ = t(307805);
function ey(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(E.A, {
        sidebarType: E.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(v.A, { channelId: n, baseChannelId: eg.VV.CHANNEL_BROWSER }),
    });
}
function ew(e) {
    let { guildId: n } = e,
        [s, a] = i.useState(""),
        d = i.useRef(null),
        c = (0, r.bG)([_.A], () => _.A.getGuild(n)),
        o = (0, r.bG)([S.Ay], () => S.Ay.getChannels(n)),
        u = (0, r.bG)([b.A], () => b.A.getCategories(n)),
        h = (0, A.vh)(n, u, o, s),
        x = (0, r.bG)([y.A], () => y.A.canWithPartialContext(et.xBc.MANAGE_CHANNELS, { guildId: n })),
        m = (0, r.bG)([I.Ay], () => null != I.Ay.getCurrentSidebarChannelId(eg.VV.CHANNEL_BROWSER)),
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
                e.key === eA.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), "" !== s ? C() : d.current?.blur());
            },
            [s, C],
        );
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: e_.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: e_.wx,
                      children: [
                          (0, l.jsx)(f.I, {
                              ref: d,
                              query: s,
                              onChange: function (e) {
                                  "" === s &&
                                      "" !== e &&
                                      w.default.track(et.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      a(e.toLowerCase());
                              },
                              onClear: C,
                              onKeyDown: E,
                              placeholder: ei.intl.string(ei.t.s5MnmC),
                          }),
                          x ? (0, l.jsx)(p.$, { icon: j.j, onClick: g, text: ei.intl.string(ei.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(eS, { className: e_.T, channels: o, categories: h, guild: c, hasSidebar: m }),
              ],
          });
}
var eO = t(202776),
    eR = t(462887),
    eD = t(778712),
    eL = t(97808),
    eG = t(545442),
    eM = t(689175),
    eT = t(334738),
    eP = t(241524),
    ek = t(964486),
    eH = t(736653),
    eU = t(793574),
    eB = t(562819),
    eV = t(963977),
    eF = t(164956),
    eq = t(713804),
    eW = t(676608),
    eZ = t(999291),
    eX = t(62199),
    ez = t(903209),
    eK = t(696451),
    eY = t(317525),
    eJ = t(573163),
    eQ = t(287809),
    e$ = t(403362),
    e0 = t(427262),
    e1 = t(19575),
    e4 = t(669953),
    e5 = t(817818),
    e6 = t(591552),
    e9 = t(961973),
    e7 = t(435558),
    e2 = t.n(e7),
    e8 = t(665260),
    e3 = t(355097);
function ne(e) {
    Y.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let nn = {};
function nt(e) {
    let n = (0, r.bG)([e6.A], () => e6.A.getPendingResponseOptions(e) ?? nn, [e]);
    return (
        i.useEffect(() => (ne(e), () => ne(e)), [e]),
        i.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && e4.A.updateOnboardingResponses(e);
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
                                (i = e2().difference(n.roleIds ?? [], t?.roleIds ?? [])),
                                    (s = e2().difference(t?.roleIds ?? [], n.roleIds ?? []));
                            } else if (t) (i = n.roleIds ?? []), (s = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    a = t.filter((e) => n.id !== e.id),
                                    r = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(e$.Vq),
                                    d = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(e$.Vq);
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
                                        .filter(e$.Vq),
                                    d = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(e$.Vq);
                                (a = []), (r = e2().difference(i, d));
                            }
                            return (
                                (0, en.cE)(n) && a.push(...e6.A.getDefaultChannelIds(n)),
                                { addedChannelIds: a, removedChannelIds: r }
                            );
                        })({ guildId: e, prompt: n, option: t, selected: l, responses: i }),
                        c = r.reduce((n, t) => {
                            let l = $.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e8.lA)(l, e3.vv.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        o = d.reduce((n, t) => {
                            let l = $.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, e8.lA)(l, e3.vv.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        u = { ...c, ...o };
                    e4.A.selectOption(e, n.id, t.id, l),
                        Y.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: u }),
                        e4.A.updateRolesLocal(e, s, a);
                },
                [e],
            ),
        }
    );
}
var nl = t(218785),
    ni = t(702841),
    ns = t(155965),
    na = t(953727);
function nr(e) {
    let { width: n = 120, height: t = 80, backgroundColor: i, foregroundColor: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, na.A)(a),
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
var nd = t(164048),
    nc = t(839447),
    no = t(539916),
    nu = t(790782),
    nh = t(891927),
    nx = t(999900);
let nm = eD._3.SIZE_80,
    nC = "required";
function ng(e) {
    let { guild: n, user: t } = e,
        { avatarSrc: i, eventHandlers: s, isAvatarAnimating: d } = (0, eX.A)({ user: t, guildId: n.id, size: 120 }),
        { avatarDecorationSrc: c } = (0, eV.A)({ user: t, size: (0, eB.Te)(nm), onlyAnimateOnHoverOrFocus: !d }),
        o = (0, r.bG)([eK.Ay], () => eK.Ay.getSelfMember(n.id)),
        u = (0, r.yK)([eK.Ay], () => eK.Ay.getMemberRoleWithPendingUpdates(n.id, t.id)),
        h = (0, r.bG)([eY.A], () => eY.A.getSortedRoles(n.id)),
        x = (0, eW.Ay)(n.id, t.id),
        m = h.filter((e) => u.includes(e.id)),
        C = (0, eZ.Ay)(t.id, n.id);
    (0, ek.Ay)(() => {
        (0, ez.A)(t.id, t.getAvatarURL(n.id, (0, eD.FT)(nm)), { guildId: n.id });
    });
    let g = (0, eq.parseBioReact)(C?.bio),
        A = e1.Ay.getEnableHardwareAcceleration() ? eL.Js : eL.eu;
    return (0, l.jsxs)("div", {
        className: nh.ME,
        children: [
            (0, l.jsx)(er.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: ei.intl.string(ei.t.diTbF8),
            }),
            (0, l.jsx)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ei.intl.string(ei.t["+8um3M"]),
            }),
            (0, l.jsxs)("div", {
                className: nh.Kq,
                children: [
                    (0, l.jsx)("div", {
                        ...s,
                        children: (0, l.jsx)(A, { src: i, avatarDecoration: c, size: nm, "aria-label": t.username }),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        className: nh.Xh,
                        children: o?.nick ?? e0.Ay.getName(t),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: a()(ef.PT, nh.z3),
                        children: g,
                    }),
                    null != m &&
                        m.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: nh.me }),
                                (0, l.jsx)(D.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-muted",
                                    className: nh.DD,
                                    children: ei.intl.string(ei.t["LPJmL/"]),
                                }),
                                (0, l.jsx)("div", {
                                    className: nh.Ot,
                                    children: m?.map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: nh.JC,
                                                children: [
                                                    (0, l.jsx)(eG.R, {
                                                        color: e.colorString ?? et.TpD,
                                                        colors: x ? e.colorStrings : null,
                                                        className: nh.m4,
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
function nA(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [c, o] = i.useState(new Set()),
        u = n?.options?.filter((e) => c.has(e.id)),
        x = (0, e9.a)(u),
        m = (0, e9.vV)(u),
        C = (0, r.yK)([e6.A], () => e6.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nl.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = nt(t.id),
        f = n.options.map((e) => ({ value: e.id, ...e })),
        p = n.options.filter((e) => C.includes(e.id)).map((e) => e.id);
    return (0, l.jsxs)("div", {
        className: nh.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: O.A.unsafe_rawColors.BRAND_260.css,
                    text: ei.intl.string(ei.t.y2b7CA),
                    className: nh.Ad,
                }),
            (0, l.jsxs)(er.D, {
                className: nh.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nh.mw, { [nh.So]: s?.type === nC }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)(nc.A, {
                options: f,
                value: p,
                onChange: function (e) {
                    let t = e.find((e) => !C.includes(e.id)),
                        l = e.map((e) => e.id);
                    if (null != t) N(n, t, !0), n.singleSelect && n.options.forEach((e) => c.delete(e.id)), c.add(t.id);
                    else {
                        let e = C.filter((e) => !l.includes(e)),
                            t = n.options.filter((n) => e.includes(n.id));
                        if (C.length <= t.length && n.required) return void d({ type: nC });
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
                className: nh.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function nN(e) {
    let { guild: n } = e,
        t = (0, r.bG)([e6.A], () => e6.A.getConnections(n.id));
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: nh.J1,
              children: [
                  (0, l.jsx)(er.D, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: ei.intl.string(ei.t.eDVMrA),
                  }),
                  (0, l.jsx)(D.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ei.intl.string(ei.t.BozOXu),
                  }),
                  (0, l.jsx)("div", {
                      className: nh.lA,
                      children: t.map((e, t) =>
                          (0, l.jsx)(ns.A, { connection: e, guildId: n.id, location: eU.A.CHANNELS_AND_ROLES }, t),
                      ),
                  }),
              ],
          });
}
function nf(e) {
    let { prompt: n, guild: t } = e,
        [s, d] = i.useState(null),
        [c, o] = i.useState(new Set()),
        u = n?.options?.filter((e) => c.has(e.id)),
        x = (0, e9.a)(u),
        m = (0, e9.vV)(u),
        C = (0, r.yK)([e6.A], () => e6.A.getOnboardingResponsesForPrompt(t.id, n.id)),
        { helpText: g, helpTextAdditional: A } = (0, nl.W)({
            guild: t,
            prompt: n,
            selectedRoleIds: x,
            selectedChannelIds: m,
            itemHook: (e, n) => (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-strong", children: e }, n),
        }),
        { handleSelectOption: N } = nt(t.id);
    return (0, l.jsxs)("div", {
        className: nh.J1,
        "data-new": n.isNew,
        children: [
            n.isNew &&
                (0, l.jsx)(h.Lp, {
                    color: O.A.unsafe_rawColors.BRAND_260.css,
                    text: ei.intl.string(ei.t.y2b7CA),
                    className: nh.Ad,
                }),
            (0, l.jsxs)(er.D, {
                className: nh.Hi,
                variant: "heading-md/semibold",
                color: "text-strong",
                children: [
                    n.title,
                    n.required
                        ? (0, l.jsx)("span", { className: a()(nh.mw, { [nh.So]: s?.type === nC }), children: "*" })
                        : null,
                ],
            }),
            (0, l.jsx)("div", {
                className: nh.vS,
                children: n.options.map((e) =>
                    (0, l.jsx)(
                        nd.A,
                        {
                            hideMemberCount: !0,
                            guildId: t.id,
                            option: e,
                            onSelect: (t) => {
                                !t && 1 === C.length && n.required
                                    ? d({ type: nC })
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
                className: nh.BK,
                children: [g, " ", A],
            }),
        ],
    });
}
function np(e) {
    let n,
        { guildId: t, onBrowseChannels: s } = e,
        d = (0, eR.M)((0, eH.Ay)()),
        c = (0, r.bG)([_.A], () => _.A.getGuild(t)),
        o = (0, r.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        u = (0, eP.A)("(min-width: 1344px)") && null != o,
        h = i.useCallback(() => {
            (0, Z.pX)(et.BVt.CHANNEL(t, eg.VV.CHANNEL_BROWSER)), s?.();
        }, [t, s]),
        x = (0, r.bG)([eJ.Ay], () => eJ.Ay.hasUnread(t, nu.P.GUILD_ONBOARDING_QUESTION)),
        m = c?.latestOnboardingQuestionId,
        {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: A,
            newAnswersCount: N,
            onboardingPrompts: f,
        } = ((n = (0, ni.yK)([e6.A], () => e6.A.getEnabledOnboardingPrompts(t))),
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
        c?.id == null || (!eF.A.isFullServerPreview(c.id) && (e6.A.shouldFetchPrompts(c.id) || x) && (0, e5.jx)(c.id));
    }, [c?.id, x, m]),
        i.useEffect(() => {
            if (c?.id != null && !eF.A.isFullServerPreview(c.id))
                return () => {
                    (0, eT.hK)(c.id, nu.P.GUILD_ONBOARDING_QUESTION, e6.A.ackIdForGuild(c.id)),
                        e4.A.updateOnboardingResponses(c.id);
                };
        }, [c?.id]);
    let p = i.useCallback(
        (e) => {
            if (null == c) return null;
            switch (e.type) {
                case no.ME.MULTIPLE_CHOICE:
                    return (0, l.jsx)(nf, { prompt: e, guild: c }, e.id);
                case no.ME.DROPDOWN:
                    return (0, l.jsx)(nA, { prompt: e, guild: c }, e.id);
                default:
                    (0, e$.xb)(e.type);
            }
        },
        [c],
    );
    if (null == c) return null;
    if (0 === C.length) {
        let e = d ? O.A.unsafe_rawColors.PRIMARY_300.css : O.A.unsafe_rawColors.PRIMARY_500.css,
            n = d ? O.A.unsafe_rawColors.PRIMARY_700.css : O.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(nx.Qs, nh.Zc),
            children: (0, l.jsxs)("div", {
                className: nh.do,
                children: [
                    (0, l.jsx)(nr, { className: nh.Dw, foregroundColor: e, backgroundColor: n }),
                    (0, l.jsx)(er.D, {
                        className: nh.jU,
                        variant: "heading-md/semibold",
                        children: ei.intl.string(ei.t.leKHQz),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "text-sm/medium",
                        children: ei.intl.format(ei.t["jH+ktB"], { onBrowseChannels: h }),
                    }),
                ],
            }),
        });
    }
    return (0, l.jsxs)(eM.Ch, {
        className: nh.XG,
        fade: !0,
        children: [
            (0, l.jsxs)("div", {
                className: nh.kw,
                children: [
                    (g.length > 0 || A.length > 0) &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(er.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: ei.intl.format(ei.t.iB5Gqe, { count: g.length + N }),
                                    }),
                                }),
                                g.map(p),
                                A.map(p),
                                (0, l.jsx)("div", { className: nh.DY }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(er.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: ei.intl.format(ei.t["8IV8K9"], { count: f.length }),
                                        }),
                                        (0, l.jsx)(D.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ei.intl.string(ei.t.Ecz7T9),
                                        }),
                                    ],
                                }),
                                f.map(p),
                            ],
                        }),
                    (0, l.jsx)(nN, { guild: c }),
                ],
            }),
            u && (0, l.jsx)(ng, { guild: c, user: o }),
        ],
    });
}
var nj = t(675498);
function nE(e) {
    let { guild: n } = e,
        t = (0, eO.A)(n);
    i.useEffect(() => {
        (0, C.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: ex.i.DISMISS });
    });
    let s = t
            ? ei.intl.formatToPlainString(ei.t.uqZgYe, { guildName: n.name })
            : ei.intl.formatToPlainString(ei.t.velJea, { guildName: n.name }),
        a = t ? ei.intl.string(ei.t.h9mGOP) : ei.intl.string(ei.t.et6wav);
    return (
        (0, m.HU)({ location: s }),
        (0, l.jsxs)(g.A, {
            className: nj.wx,
            innerClassname: nj.MU,
            hideSearch: !0,
            channelId: eg.VV.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [(0, l.jsx)(g.A.Icon, { icon: c.k, "aria-hidden": !0 }), (0, l.jsx)(g.A.Title, { children: a })],
        })
    );
}
function nv(e) {
    let { guildId: n, selectedSection: t } = e,
        s = (0, r.bG)([_.A], () => _.A.getGuild(n)),
        d = (0, eO.A)(s),
        [c, m] = i.useState(t ?? no.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != t && m(t);
    }, [t]),
        i.useEffect(() => {
            d || c !== no.qC.CUSTOMIZE || m(no.qC.BROWSE);
        }, [d, c]);
    let C = (0, r.bG)([I.Ay], () => I.Ay.getCurrentSidebarChannelId(eg.VV.CHANNEL_BROWSER)),
        g = null != C && c === no.qC.BROWSE,
        N = (0, x.f4)("ChannelsAndRolesPage"),
        f = (0, r.bG)([W.A], () => W.A.getNewChannelIds(n).size > 0),
        p = (0, A.RD)(n);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(nx.TE, nj.TE, { [nx.js]: g && !N }),
                      children: [
                          (0, l.jsx)(nE, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(nx.Qs, nj.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(o.V, {
                                          className: nj.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: c,
                                          onItemSelect: (e) => m(e),
                                          children: [
                                              (0, l.jsx)(
                                                  o.V.Item,
                                                  {
                                                      className: nj.YU,
                                                      id: no.qC.CUSTOMIZE,
                                                      children: ei.intl.string(ei.t.H2cICW),
                                                  },
                                                  no.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  o.V.Item,
                                                  {
                                                      className: nj.YU,
                                                      id: no.qC.BROWSE,
                                                      "aria-label": ei.intl.string(ei.t.et6wav),
                                                      children: [
                                                          ei.intl.string(ei.t.et6wav),
                                                          f
                                                              ? (0, l.jsx)(u.E, { type: "new", variant: "brand" })
                                                              : (0, l.jsx)(h.hV, {
                                                                    count: p,
                                                                    disableColor: !0,
                                                                    className: nj.Do,
                                                                }),
                                                      ],
                                                  },
                                                  no.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (function () {
                                      switch (c) {
                                          case no.qC.CUSTOMIZE:
                                              return (0, l.jsx)(np, {
                                                  guildId: n,
                                                  onBrowseChannels: () => m(no.qC.BROWSE),
                                              });
                                          case no.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(ew, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  g && (0, l.jsx)(ey, { channelId: C }),
              ],
          });
}
