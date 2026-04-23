n.d(t, { A: () => r1 }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(284009),
    d = n.n(o),
    c = n(735438),
    u = n.n(c),
    h = n(873263),
    A = n(17928),
    g = n(554146),
    _ = n(192308),
    m = n(289873),
    p = n(821609),
    f = n(43990),
    E = n(367513),
    C = n(442433);
n(183994);
var x = n(837381),
    I = n(887129),
    b = n(607399),
    S = n(834730),
    N = n(194261),
    T = n(312138),
    v = n(475825),
    y = n(177953),
    R = n(534514),
    j = n(414798),
    L = n(775602),
    O = n(793574),
    G = n(688810),
    M = n(449582),
    D = n(485947),
    U = n(509536),
    P = n(201275),
    w = n(657048),
    k = n(361610),
    V = n(964486),
    B = n(36124),
    H = n(317525),
    F = n(219065),
    W = n(818348),
    K = n(985018);
let Y = [];
var z = n(342296),
    q = n(616356),
    X = n(696451),
    Q = n(290863),
    J = n(461213),
    Z = n(741961),
    $ = n(287809),
    ee = n(303727),
    et = n(954571),
    en = n(625494),
    ei = n(488926),
    el = n(427262),
    es = n(19575),
    ea = n(110574),
    er = n(652215),
    eo = n(784503),
    ed = n(540808);
let ec = es.Ay.getEnableHardwareAcceleration(),
    eu = 44 + ea.b,
    eh = s.memo(function (e) {
        let { channel: t, sectionId: i, userId: a, guildOwnerId: r } = e,
            o = s.useRef(null),
            d = (0, A.bG)([Z.A], () => Z.A.isTyping(t.id, a)),
            c = (0, A.bG)([X.Ay], () => X.Ay.getMember(t.guild_id, a)),
            u = (0, A.bG)(
                [H.A],
                () => (c?.colorRoleId != null ? H.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, A.bG)([$.default], () => $.default.getUser(a)),
            g = (0, A.bG)([$.default], () => $.default.getCurrentUser()),
            _ = h?.id === g?.id,
            m = (0, A.bG)([Q.A, J.A], () => (_ ? J.A.getStatus() : Q.A.getStatus(a, t.guild_id))),
            p = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(a)),
            f = (0, A.yK)([Q.A, J.A], () => (_ ? J.A.getActivities() : Q.A.getActivities(a, t.guild_id))),
            E = (0, A.bG)([q.A], () => q.A.getAnyStreamForUser(a)),
            I = (0, x.rm)(a),
            S = (0, A.bG)([F.A], () => F.A.canUserViewChannel(t.id, i, a)),
            N = h?.id != null && h.id === r,
            T = s.useCallback(
                (e) => {
                    null != h &&
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("24966"), n.e("43840")]).then(
                                n.bind(n, 175269),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, user: h, guildId: t.guild_id, channel: t });
                        });
                },
                [h, t],
            ),
            v = s.useCallback(() => {
                if (null == h) return;
                let e = `@${el.Ay.getUserTag(h, { decoration: "never" })}`,
                    n = `<@${h.id}>`;
                en._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    en._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    j.A.startTyping(t.id);
            }, [h, t]),
            y = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, U.K4)({
                            guildId: t.guild_id,
                            location: { section: er.JJy.THREAD_MEMBER_LIST, object: er.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            R = (0, M.r)({ user: h, guildId: t.guild_id }),
            [L, O] = s.useState(!1);
        if (null == h) return null;
        let G = c?.premiumSince;
        return (0, l.jsx)(z.A, {
            targetElementRef: o,
            user: h,
            guildId: t.guild_id,
            channelId: t.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: v,
            shouldShow: L,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(ea.A, {
                    ref: o,
                    onContextMenu: T,
                    shouldAnimateStatus: ec,
                    user: h,
                    currentUser: g,
                    nick: c?.nick,
                    status: m,
                    activities: f,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: d,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: p,
                    selected: L,
                    applicationStream: E,
                    premiumSince: null == G ? null : new Date(G),
                    onClickPremiumGuildIcon: y,
                    itemProps: I,
                    lostPermissionTooltipText: S ? void 0 : K.intl.string(K.t["/QcoTz"]),
                    isOwner: N,
                    nameplate: R,
                    onClick: (e) => {
                        e.shiftKey ? v?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        L ? e.stopPropagation() : i?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    eA = s.memo(function (e) {
        let { id: t, label: n, count: i, guildId: s } = e,
            a = (0, P.$7)({ roleId: t, guildId: s, size: 16 });
        return t === er.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ed.lL, children: (0, l.jsx)("div", { className: ed.k1 }) })
            : (0, l.jsxs)(D.A, {
                  className: ed.lL,
                  "aria-label": K.intl.formatToPlainString(K.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != a ? (0, l.jsx)(w.A, { className: ed.UT, ...a }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", i] }),
                  ],
              });
    }),
    eg = s.memo(function (e) {
        let { channel: t } = e;
        return t.type === er.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: eo.yF }),
                      (0, l.jsxs)(S.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: eo.Uz,
                          children: [
                              (0, l.jsx)(N.X, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              K.intl.string(K.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(S.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: eo.GA,
                          children: K.intl.string(K.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function e_(e) {
    var t, n;
    let i,
        a,
        o,
        d,
        c,
        { channel: h, guild: g } = e,
        _ = `members-${h.id}`,
        { analyticsLocations: m } = (0, G.Ay)(O.A.MEMBER_LIST),
        p = (function (e, t) {
            (0, V.Ay)(() => {
                t?.id != null && (0, k.Ey)(t.id, e, B.LD);
            });
            let n = (0, A.bG)([H.A], () => (null != t ? H.A.getSortedRoles(t.id) : [])),
                { version: i, members: l } = (0, A.cf)([F.A], () => ({
                    version: F.A.getMemberListVersion(e),
                    members: F.A.getMemberListSections(e),
                })),
                a = null == t,
                r = s.useMemo(() => {
                    if (a) return Y;
                    let e = n.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: K.intl.string(K.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: K.intl.string(K.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: t, label: n } = e;
                            return { label: n, userIds: l?.[t]?.userIds ?? [], id: t, roleId: t };
                        })
                    );
                }, [n, l, i, a]);
            return null != l ? r : Y;
        })(h.id, g),
        f = p.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: E, listRef: C } =
            ((t = _),
            (n = eu),
            (i = (0, A.bG)([L.A], () => L.A.keyboardModeEnabled)),
            (a = s.useRef(null)),
            (o = s.useCallback(
                (e, t) => {
                    let i = a.current;
                    if (null == i) return;
                    let l = parseInt(t, 10),
                        [s, r] = i.getSectionRowFromIndex(l),
                        o = 0 === s && 0 === r ? n : 0;
                    i.scrollToIndex({
                        section: s,
                        row: r,
                        padding: o,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [n],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = a.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (c = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = a.current;
                        if (null == t) return e();
                        t.scrollToBottom({
                            callback() {
                                requestAnimationFrame(() => setTimeout(e, 100));
                            },
                        });
                    }),
                [],
            )),
            {
                navigator: (0, I.Ay)({ id: t, setFocus: o, isEnabled: i, scrollToStart: d, scrollToEnd: c }),
                listRef: a,
            }),
        b = 0 === p.length || p.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: h.id,
                channel_type: h.type,
                guild_id: h.guild_id,
            });
        }, [h.guild_id, h.id, h.type]),
        b)
    )
        return (0, l.jsx)(em, { channel: h });
    let S = u().omit(E.containerProps, ["ref"]),
        N = ei.wT(g);
    return (0, l.jsx)(G.f5, {
        value: m,
        children: (0, l.jsx)(x.hD, {
            navigator: E,
            children: (0, l.jsx)(T.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: r()(ed.yg, ed.ML, eo.kL),
                        children: (0, l.jsx)(
                            v.OZ,
                            {
                                ref: C,
                                className: ed.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = p[t];
                                    return (0, l.jsx)(
                                        eA,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: g.id },
                                        n.id,
                                    );
                                },
                                rowHeight: eu,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: i, id: s } = p[t];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: h, sectionId: s, userId: i[n], guildOwnerId: N },
                                        i[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (p[e] === f && h.type === er.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    p[e.section] === f ? (0, l.jsx)(eg, { channel: h }, "footer") : null,
                                innerAriaLabel: K.intl.string(K.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: p.map((e) => e.userIds.length),
                                fade: !0,
                                ...S,
                                ...e,
                            },
                            _,
                        ),
                    }),
            }),
        }),
    });
}
function em(e) {
    let { channel: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(eo.p$, eo.kL, ed.yg, ed.ML, ed.ol),
        children: [
            (0, l.jsx)(S.E, {
                className: eo.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: K.intl.string(K.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: eo.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: eo.AI,
                        children: (0, l.jsx)(y.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(ee.A, { className: eo.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? K.intl.string(K.t.p0UgNQ) : K.intl.string(K.t["9/n5vz"]),
            }),
            (0, l.jsx)(S.E, {
                className: eo.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: K.intl.string(K.t.emw8UP),
            }),
        ],
    });
}
var ep = n(738876),
    ef = n(456412),
    eE = n(432371),
    eC = n(475743),
    ex = n(933958),
    eI = n(702841),
    eb = n(567249),
    eS = n(811024),
    eN = n(969151),
    eT = n(108959),
    ev = n(990078),
    ey = n(446576),
    eR = n(817281),
    ej = n(58149),
    eL = n(587837),
    eO = n(982484),
    eG = n(964404),
    eM = n(709562),
    eD = n(383831),
    eU = n(128286),
    eP = n(734057),
    ew = n(309010),
    ek = n(795816),
    eV = n(685399),
    eB = n(216418),
    eH = n(620148),
    eF = n(732637),
    eW = n(104171),
    eK = n(47294),
    eY = n(594007),
    ez = n(16961),
    eq = n(138017),
    eX = n(715482),
    eQ = n(315502),
    eJ = n(222823),
    eZ = n(234320),
    e$ = n(5867),
    e0 = n(702321);
function e1(e) {
    let { channelId: t, className: n, ...i } = e,
        a = s.useRef(null),
        r = (0, A.bG)([ex.Ay], () => ex.Ay.getFocusedLayout() === e$.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = r ? e$.E8.NO_CHAT : e$.E8.RESIZABLE;
            (0, ek.i5)(e);
        }, [r]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let t = (0, A.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, A.cf)(
                    [eJ.Ay],
                    () => ({ unreadCount: eJ.Ay.getUnreadCount(e), mentionCount: eJ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        h = s.useCallback(() => {
            a.current?.focus();
        }, []);
    (0, eZ.Vo)({ event: er.jej.FOCUS_CHAT_BUTTON, handler: h });
    let g = r ? K.intl.string(K.t["5MstTl"]) : K.intl.string(K.t.kkKapG),
        _ = [g];
    u > 0 && _.push(K.intl.formatToPlainString(K.t["3l1GOx"], { mentionCount: u })),
        d > 0 && _.push(K.intl.string(K.t.x5zAGZ));
    let m = (0, A.bG)([ex.Ay], () => ex.Ay.getFocusedLayout()),
        p = u > 0 ? u : d,
        f = p > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eM.l, {
                isTrayButton: !0,
                buttonRef: a,
                onClick: o,
                label: g,
                "aria-label": _.join(", "),
                tooltipPosition: "top",
                iconComponent: m === e$.E8.NO_CHAT ? eq.j : eX.g,
                themeable: !0,
                className: n,
                ...i,
            }),
            f ? (0, l.jsx)(eQ.A, { hasMentions: u > 0, truncatedCount: p > 99 ? "99+" : p, className: e0.qS }) : null,
        ],
    });
}
var e2 = n(141160);
let e9 = eW.DN.SIZE_32,
    e6 = { [e$.E8.NO_CHAT]: e2.Oo, [e$.E8.RESIZABLE]: e2.Ig };
function e3(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        a = (0, eH.A)(),
        o = (0, A.yK)([ex.Ay], () => ex.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        d = (0, eN.H)(n),
        c = (0, A.bG)([eP.A], () => eP.A.getChannel(d)),
        u = (0, eV.IQ)(o),
        h = (0, eV.Rz)(u),
        g = s.useCallback(() => {
            (0, ek.gk)(e$.Gd.PIP);
        }, []),
        _ = s.useRef(null),
        m = (0, A.bG)([ex.Ay], () => ex.Ay.getFocusedLayout()),
        p = m !== e$.E8.NO_CHAT,
        [E, C] = s.useState(eG.Ay.activityPanelHeight ?? t ?? null),
        x = s.useCallback((e) => {
            eR.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        I = s.useRef(null),
        [b, N] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == I.current) return;
        let e = new ResizeObserver(() => {
            N({ width: I.current?.clientWidth ?? 0, height: I.current?.clientHeight ?? 0 });
        });
        return e.observe(I.current), () => e.disconnect();
    }, []);
    let T = b.width / Math.max(b.height, 1) < e$.B5,
        v = 0,
        y = 0,
        R = (0, eB.A)(a?.id);
    if (!R) {
        let e = b.width,
            t = b.height;
        T
            ? ((t = b.width / e$.B5) > b.height && (e = (t = b.height) * e$.B5), (y = (b.height - t) / 2))
            : ((e = Math.min(b.height * e$.B5)) > b.width && (t = (e = b.width) / e$.B5), (v = (b.width - e) / 2));
    }
    let j = h.get(a?.id ?? ""),
        O = (0, A.bG)([ew.A], () => ew.A.getChannelId()),
        G = (0, A.yK)(
            [X.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(j?.embeddedActivity.userIds ?? []).map((e) => X.Ay.getMember(c.guild_id, e)),
            [j, c],
        ),
        M = s.useMemo(() => {
            let e = new Map();
            return (
                G.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [G]),
        D = (function (e, t, n) {
            let i = (0, eC.A)(e),
                l = e !== i,
                [a, r] = s.useState(!1);
            s.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !L.A.useReducedMotion && (l || a);
            return s.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != t && null != n ? { ...i, minHeight: 200, maxHeight: n, height: t } : i;
            }, [o, e, n, t]);
        })(p, E, t),
        U = (0, ez.G)();
    if (null == a) return null;
    let P = [];
    null != j &&
        (P = Array.from(j.embeddedActivity.userIds)
            .map((e) => $.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let w = (e) => {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let t = M.get(e.id),
            n = t?.nick ?? el.Ay.getName(e);
        return (0, l.jsx)(
            ev.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e9), alt: n, className: e2.my }, e.id),
            },
            e.id,
        );
    };
    return (0, l.jsx)(f.N, {
        theme: er.NJ8.DARK,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: r()(e2.iE, e6[m], e),
                ref: _,
                style: D,
                children: [
                    i?.(),
                    (0, l.jsx)(eO.A, { applicationId: a.id }),
                    (0, l.jsxs)("div", {
                        className: e2.lq,
                        children: [
                            p
                                ? null
                                : (0, l.jsx)("div", {
                                      className: e2.wx,
                                      children: (0, l.jsx)(S.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: e2.qd,
                                          children: a?.name,
                                      }),
                                  }),
                            (0, l.jsx)("div", {
                                className: r()(e2.ht, { [e2.kK]: R }),
                                style: { paddingLeft: v, paddingRight: v, paddingTop: y, paddingBottom: y },
                                ref: I,
                                children: (0, l.jsx)(eF.A, { className: e2.pU, embedId: (0, eY.A)(n.id, a.id) }),
                            }),
                            null != O
                                ? (0, l.jsxs)("div", {
                                      className: e2.qr,
                                      children: [
                                          (0, l.jsx)(eW.Ay, {
                                              renderIcon: !1,
                                              users: P,
                                              size: e9,
                                              max: 6,
                                              renderUser: w,
                                          }),
                                          (0, l.jsxs)("div", {
                                              className: e2.Hq,
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: e2.qi,
                                                      children: [
                                                          (0, l.jsx)(e1, { channelId: O }),
                                                          (0, l.jsx)(eM.l, {
                                                              isTrayButton: !0,
                                                              label: K.intl.string(K.t.brPQ5U),
                                                              onClick: g,
                                                              iconComponent: ey.g,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: e2.pt,
                                                      children: (0, l.jsx)(eD.A, {
                                                          applicationId: a.id,
                                                          location: n,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          U
                                              ? (0, l.jsx)(eU.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, ej.zV)(er.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, eK.A)({
                                                                onConfirm: async () => {
                                                                    a?.id != null &&
                                                                        null != d &&
                                                                        (await (0, ek.od)(a.id, d)),
                                                                        (0, ek.jp)();
                                                                },
                                                            });
                                                    },
                                                    onClosePopout: () => {},
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    p && null != t
                        ? (0, l.jsx)(eL.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: _,
                              onResize: (e) => {
                                  en._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), C(e);
                              },
                              onResizeEnd: (e) => {
                                  en._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), x(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
function e7(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: a,
        } = (0, eI.cf)([ex.Ay], () => {
            let e = ex.Ay.getConnectedActivityLocation(),
                t = ex.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, eN.H)(e),
                connectedActivity: t,
                activityPanelMode: ex.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eI.bG)([eb.A], () => eb.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, eS.Gp)(i)) return null;
    let o = s?.applicationId;
    return a !== e$.Gd.PANEL || null == o || r || null == i || null == s || (0, eT.A)(i)
        ? null
        : (0, l.jsx)(e3, { maxHeight: t, connectedLocation: s.location, renderExternalHeader: n });
}
var e4 = n(90804),
    e5 = n(748975),
    e8 = n(323073),
    te = n(568598),
    tt = n(313961),
    tn = n(164617),
    ti = n(355622),
    tl = n(689874),
    ts = n(17447),
    ta = n(939249),
    tr = n(408278),
    to = n(624479),
    td = n(691540),
    tc = n(857250),
    tu = n(97483),
    th = n(534890),
    tA = n(39623),
    tg = n(952270),
    t_ = n(835835),
    tm = n(381849),
    tp = n(927813),
    tf = n(995273),
    tE = n(976860),
    tC = n(957565),
    tx = n(935208),
    tI = n(256331),
    tb = n(141850),
    tS = n(736339),
    tN = n(701952),
    tT = n(84593);
function tv(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].conversation.id !== t[n].conversation.id) return !1;
    return !0;
}
function ty(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
let tR = ["high", "medium", "low"],
    tj = s.memo(function (e) {
        let { moderation: t } = e,
            n = null != t && 1 === t.status,
            i = null != t && !t.flagged_title && !t.flagged_summary && !t.flagged_key_points,
            a = s.useMemo(() => {
                if (null == t) return { passed: 0, failed: 0, unknown: 0 };
                let e = t.flagged_message_count ?? t.flagged_message_ids.length,
                    n = t.total_message_count ?? 0,
                    i = 0,
                    l = 0;
                return (
                    null == t.flagged_message_count && 0 === t.flagged_message_ids.length
                        ? (l = n)
                        : null != t.flagged_message_count
                          ? (i = Math.max(0, n - e))
                          : (l = Math.max(0, n - e)),
                    { passed: i, failed: e, unknown: l }
                );
            }, [t]),
            r =
                null == t
                    ? "unknown"
                    : a.failed > 0
                      ? "failed"
                      : a.unknown > 0
                        ? "unknown"
                        : a.passed > 0
                          ? "passed"
                          : "unknown",
            o =
                null != t
                    ? (t.flagged_summary_details.find((e) => {
                          var n;
                          return (
                              e.severity ===
                              ((n = t.flagged_summary_details.map((e) => e.severity)),
                              tR.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tT.UO,
            children: [
                (0, l.jsx)(S.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tT.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tT.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tT.a7,
                            children: [
                                (0, l.jsx)(S.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : n ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : n ? "✓" : "✗",
                                }),
                                (0, l.jsx)(S.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != t &&
                                    !n &&
                                    null != t.status_reason &&
                                    (0, l.jsx)(S.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.status_reason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tT.a7,
                            children: [
                                (0, l.jsx)(S.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : i ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : i ? "✓" : "✗",
                                }),
                                (0, l.jsx)(S.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !i &&
                                    (0, l.jsxs)(S.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                t.flagged_title && "title",
                                                t.flagged_summary && "summary",
                                                t.flagged_key_points && "key points",
                                            ]
                                                .filter(Boolean)
                                                .join(", "),
                                            " ",
                                            "flagged",
                                        ],
                                    }),
                                null != t &&
                                    !i &&
                                    (null != d || null != c) &&
                                    (0, l.jsx)(S.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tT.a7,
                            children: [
                                (0, l.jsx)(S.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == t || "unknown" === r
                                            ? "text-muted"
                                            : "passed" === r
                                              ? "status-positive"
                                              : "status-danger",
                                    children: null == t || "unknown" === r ? "—" : "passed" === r ? "✓" : "✗",
                                }),
                                (0, l.jsx)(S.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
                                    (a.passed > 0 || a.failed > 0 || a.unknown > 0) &&
                                    (0, l.jsx)(S.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            a.passed > 0 && `${a.passed} passed`,
                                            a.failed > 0 && `${a.failed} failed`,
                                            a.unknown > 0 && `${a.unknown} unknown`,
                                        ]
                                            .filter(Boolean)
                                            .join(", "),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    tL = s.memo(function (e) {
        let {
                conversation: t,
                color: n,
                isInViewport: i,
                scrollTarget: a,
                onJump: r,
                onHoverStart: o,
                onHoverEnd: d,
            } = e,
            c = s.useRef(null);
        s.useEffect(() => {
            null != a && null != c.current && c.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [a]);
        let u = tx.default.extractTimestamp(t.start_message_id),
            h = tx.default.extractTimestamp(t.end_message_id),
            A = (function (e) {
                let { timestamp: t, abbreviated: n = !0 } = e,
                    [i, l] = s.useState(() => (0, tf.jb)(t, n));
                return (
                    s.useEffect(() => {
                        l((0, tf.jb)(t, n));
                        let e = Date.now() - t;
                        if (e > tp.A.Millis.DAY) return;
                        let i = e >= tp.A.Millis.HOUR ? tp.A.Millis.HOUR : tp.A.Millis.MINUTE,
                            s = setInterval(
                                () => {
                                    l((0, tf.jb)(t, n));
                                },
                                i,
                                i - (e % i),
                            );
                        return () => clearInterval(s);
                    }, [t, n]),
                    i
                );
            })({ timestamp: u }),
            g = Math.max(1, Math.round((h - u) / 1e3)),
            _ = (0, tm.WR)({ seconds: g, getFormatter: tm.i }),
            m = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            p = null != m ? (0, tN.i)(m.content_json) : null;
        return (0, l.jsxs)(ta.D, {
            innerRef: c,
            className: `${tT.Nm}${i ? ` ${tT.Sk}` : ""}`,
            style: { backgroundColor: i ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => r(t),
            onMouseEnter: () => o(t.id),
            onMouseLeave: d,
            children: [
                (0, l.jsxs)("div", {
                    className: tT.PY,
                    children: [
                        (0, l.jsx)(S.E, {
                            variant: "text-md/medium",
                            color: null != p ? "text-default" : "text-muted",
                            className: tT.So,
                            children: p?.title ?? "Summary not available",
                        }),
                        (0, l.jsx)(tr.K, {
                            icon: to.T,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, tC.C)(JSON.stringify(t, null, 2), () =>
                                        (0, td.P0)((0, tc.o)("Copied conversation JSON", tu.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(S.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tT.FR,
                    children: [
                        A,
                        " ago \xb7 ",
                        _,
                        " duration \xb7 ",
                        t.message_count,
                        " messages \xb7 ",
                        t.user_count,
                        " users",
                    ],
                }),
                p?.brief_summary != null &&
                    (0, l.jsx)(S.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: tT.g5,
                        children: p.brief_summary,
                    }),
                null != p &&
                    p.key_points.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tT.JP,
                        children: p.key_points.map((e, t) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(S.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                t,
                            ),
                        ),
                    }),
                (0, l.jsxs)(S.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: tT.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tT.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tT.UO,
                    children: [
                        (0, l.jsx)(S.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tT.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tT.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tT.a7,
                                    children: [
                                        (0, l.jsx)(S.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.substance?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, l.jsx)(S.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: tT.a7,
                                    children: [
                                        (0, l.jsx)(S.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.engagement?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, l.jsx)(S.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: tT.a7,
                                    children: [
                                        (0, l.jsx)(S.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.dynamics?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, l.jsx)(S.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Dynamics",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(tj, { moderation: t.moderation }),
            ],
        });
    });
function tO(e) {
    let { channel: t } = e,
        n = (0, A.bG)([tS.A], () => tS.A.getChannelConversations(t.id), [t.id], tv),
        i = (0, A.bG)([tS.A], () => tS.A.getVisibleConversationIds(t.id), [t.id], ty),
        a = (0, A.bG)([tS.A], () => tS.A.hasMoreConversations(t.id, "before"), [t.id]),
        r = (0, A.bG)([tS.A], () => tS.A.hasMoreConversations(t.id, "after"), [t.id]),
        o = (0, A.bG)([tS.A], () => tS.A.isPendingFetch(t.id), [t.id]),
        d = (0, A.bG)([tI.A], () => tI.A.isHighlightingEnabled(), []),
        c = (0, A.bG)([tS.A], () => tS.A.getScrollToConversation(t.id), [t.id]),
        u = s.useCallback(
            (e) => {
                (0, tb.UA)(t.id, e);
            },
            [t.id],
        ),
        h = s.useCallback(() => {
            (0, tb.UA)(null, null);
        }, []),
        g = s.useCallback((e) => {
            (0, tb.xI)(e.channel_id, e.id), (0, tE.pX)(er.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tT.zr,
        children: [
            (0, l.jsx)(t_.Y9, {
                icon: th.o,
                title: "Conversations",
                children: (0, l.jsx)("div", {
                    className: tT.y6,
                    children: (0, l.jsx)(tr.K, {
                        icon: d ? tA.b : tg.G,
                        "aria-label": d ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: tb.Eg,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: tT.Qs,
                children: [
                    a &&
                        (0, l.jsx)("div", {
                            className: tT.f,
                            children: (0, l.jsx)(ta.D, {
                                className: tT.Qf,
                                onClick: function () {
                                    if (0 === n.length || o) return;
                                    let e = n[0].conversation;
                                    (0, tb.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, l.jsx)(S.E, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: o ? "Loading..." : "Load previous conversations",
                                }),
                            }),
                        }),
                    0 !== n.length || o
                        ? n.map((e) => {
                              let { conversation: t, color: n } = e;
                              return (0, l.jsx)(
                                  tL,
                                  {
                                      conversation: t,
                                      color: n,
                                      isInViewport: i.has(t.id),
                                      scrollTarget: c?.conversationId === t.id ? c.seq : null,
                                      onJump: g,
                                      onHoverStart: u,
                                      onHoverEnd: h,
                                  },
                                  t.id,
                              );
                          })
                        : (0, l.jsx)(S.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tT.BI,
                              children: "No conversations available.",
                          }),
                    r &&
                        (0, l.jsx)("div", {
                            className: tT.f,
                            children: (0, l.jsx)(ta.D, {
                                className: tT.Qf,
                                onClick: function () {
                                    if (0 === n.length || o) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, tb.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, l.jsx)(S.E, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: o ? "Loading..." : "Load newer conversations",
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
var tG = n(268218),
    tM = n(726249),
    tD = n(228366),
    tU = n(334738),
    tP = n(208882),
    tw = n(938764),
    tk = n(519480),
    tV = n(352123),
    tB = n(603968),
    tH = n(478927);
let tF = (e) => {
    let { guild: t, onAddGuild: i } = e,
        a = s.useCallback(() => {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                    n.bind(n, 1310),
                );
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        guild: t,
                        source: er.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: er.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: tH.h2,
        children: [
            (0, l.jsx)("img", { className: tH.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(R.D, {
                className: tH._U,
                variant: "heading-xl/semibold",
                children: K.intl.format(K.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(S.E, { variant: "text-md/normal", className: tH.YI, children: K.intl.string(K.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(tB.E, {
                      className: tH.c5,
                      iconUrl: n(928202),
                      header: K.intl.string(K.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(tB.E, {
                className: tH.c5,
                iconUrl: n(799258),
                header: K.intl.string(K.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var tW = n(892547),
    tK = n(689175),
    tY = n(761508),
    tz = n(765671),
    tq = n(22231),
    tX = n(365199),
    tQ = n(686956),
    tJ = n(573435),
    tZ = n(101555),
    t$ = n(548118),
    t0 = n(714991),
    t1 = n(776231),
    t2 = n(345942),
    t9 = n(71393),
    t6 = n(486020),
    t3 = n(860689),
    t7 = n(682557),
    t4 = n(253607);
let t5 = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(ta.D, {
        onClick: t,
        className: t4.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(S.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: t4.Kk,
                children: K.intl.string(K.t.H9jxS1),
            }),
        ],
    });
});
function t8(e) {
    let { entry: t } = e,
        [i, a] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tV.A)(t);
    return (0, l.jsx)("div", {
        className: r()(t4.fc, { [t4.QX]: i }),
        children: (0, l.jsxs)(tZ.Ay, {
            children: [
                d
                    ? (0, l.jsx)(ev.m, {
                          text: K.intl.string(K.t.XnuOvN),
                          children: (0, l.jsx)(tZ.$n, {
                              onClick: () => {
                                  (0, _.openModalLazy)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": K.intl.string(K.t.XnuOvN),
                              children: (0, l.jsx)(tq.R, { size: "xs", color: "currentColor", className: t4.IQ }),
                          }),
                      })
                    : null,
                (0, l.jsx)(t7.A, {
                    targetElementRef: o,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(ev.m, {
                            text: K.intl.string(K.t["UKOtz+"]),
                            children: (0, l.jsx)(tZ.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": K.intl.string(K.t["UKOtz+"]),
                                children: (0, l.jsx)(tX.j, { size: "md", color: "currentColor", className: t4.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let ne = s.memo(function (e) {
    let { entry: t } = e,
        [i, a] = s.useState(!1),
        r = null != (0, A.bG)([t9.A], () => t9.A.getGuild(t.guildId)),
        o = async () => {
            a(!0);
            try {
                r ? (0, t2.u)(t.guildId) : await tQ.A.joinGuild(t.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        d = t6.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, t1.mZ)() }),
        c = t6.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = K.intl.string(K.t.VJlc0S);
    return (
        r && (u = K.intl.string(K.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: t4.Nr,
            onContextMenu: (e) => {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, l.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: t4.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: t4.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: t4.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: t4.$f,
                            children: (0, l.jsx)(tJ.Ay, {
                                mask: tJ.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: t4.SA,
                                    children: (0, l.jsx)(t$.Ay, {
                                        className: t4.rZ,
                                        iconSrc: c,
                                        guild: (0, t3.xi)(t),
                                        size: t$.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: t4.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t4.DD,
                            children: [
                                (0, l.jsx)(t0.A, { className: t4.n2, guild: t }),
                                (0, l.jsx)(S.E, {
                                    className: t4.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(S.E, {
                            className: t4.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: t4.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: t4.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: t4.JX }),
                                            (0, l.jsx)(S.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: K.intl.format(K.t["LC+S+m"], {
                                                    membersOnline: t.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != t.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: t4.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: t4.Li }),
                                            (0, l.jsx)(S.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: K.intl.format(K.t.zRl6XR, {
                                                    count: t.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: t4.PD,
                            children: (0, l.jsx)(p.$, {
                                loading: i,
                                variant: r ? "secondary" : "active",
                                onClick: o,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(t8, { entry: t }),
            ],
        })
    );
});
var nt = n(946116),
    nn = n(562845),
    ni = n(519094);
let nl = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: s } = e,
            { ref: a, width: o } = (0, tz.Ay)(),
            d = null != o && o <= 800;
        return (0, l.jsxs)("div", {
            ref: a,
            className: ni.wx,
            children: [
                (0, l.jsx)("img", {
                    alt: "",
                    className: ni.F0,
                    src: d ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
                }),
                (0, l.jsx)("div", {
                    className: ni.AZ,
                    children: (0, l.jsxs)("div", {
                        className: r()(ni.VW, { [ni.eO]: d }),
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-xl/semibold",
                                className: ni.dc,
                                children: K.intl.string(K.t.IT7qoC),
                            }),
                            (0, l.jsx)(S.E, {
                                variant: "text-md/normal",
                                className: ni.R_,
                                children: K.intl.string(K.t["5PoYts"]),
                            }),
                            (0, l.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, l.jsx)("div", {
                                        className: r()(ni.MT, e),
                                        children: (0, l.jsx)(tW.I, {
                                            query: t,
                                            "aria-label": K.intl.string(K.t.nL2wKD),
                                            placeholder: K.intl.string(K.t.nL2wKD),
                                            onChange: n,
                                            onClear: i,
                                            onKeyDown: s,
                                        }),
                                    }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    ns = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: i,
            searchQuery: a,
            setSearchQuery: r,
            handleClearSearch: o,
            handleSearchKeyPress: d,
            currentCategoryId: c,
            handleSelectCategory: u,
            categoryCounts: h,
            allEntriesCount: A,
            isLoading: g,
        } = e;
        return (0, l.jsx)("div", {
            className: nn.$$,
            children: (0, l.jsxs)(tK.Gt, {
                className: nn.XG,
                children: [
                    (0, l.jsx)(nl, {
                        searchQuery: a,
                        setSearchQuery: r,
                        handleClearSearch: o,
                        handleSearchKeyPress: d,
                    }),
                    (0, l.jsx)(tK.Ch, {
                        orientation: "horizontal",
                        children: (0, l.jsxs)(tY.V, {
                            className: ni.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: (e) => {
                                u(e);
                            },
                            children: [
                                (0, l.jsx)(
                                    tY.V.Item,
                                    {
                                        className: ni.YU,
                                        id: nt.mU.ALL,
                                        children: `${K.intl.string(K.t.hEAa2a)} (${A})`,
                                    },
                                    nt.mU.ALL,
                                ),
                                (0, nt.g2)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, l.jsx)(
                                        tY.V.Item,
                                        {
                                            className: ni.YU,
                                            id: t,
                                            children: `${n} ${null != h[t] ? `(${h[t]})` : ""}`,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    }),
                    g && null == n
                        ? (0, l.jsx)(m.y, { className: nn.u1 })
                        : n?.map((e, t) =>
                              (0, l.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, l.jsx)(S.E, {
                                                    variant: "text-md/semibold",
                                                    className: ni.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: nn.vY,
                                              children: [
                                                  e.entries.map((e) => (0, l.jsx)(ne, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != i ? (0, l.jsx)(t5, { onClick: i }) : null,
                                              ],
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                ],
            }),
        });
    };
var na = n(370876),
    nr = n(349288),
    no = n(364522),
    nd = n(792831),
    nc = n(916815);
let nu = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: i,
            mostRecentQuery: s,
            handleClearSearch: a,
            handleSearchKeyPress: r,
            handleCreateOrAddGuild: o,
            searchResults: d,
            searchFetching: c,
        } = e;
    if (c) t = (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(m.y, { className: nn.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? K.intl.format(K.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, l.jsx)(nr.Anchor, { onClick: o, children: e }, t);
                      },
                  })
                : K.intl.string(K.t.vYyEnv);
        t = (0, l.jsxs)("div", {
            className: nc.Je,
            children: [
                (0, l.jsx)("img", { className: nc.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: nc.gR,
                    children: K.intl.string(K.t["6HXiuE"]),
                }),
                (0, l.jsx)(S.E, { variant: "text-md/normal", color: "text-default", className: nc.av, children: e }),
            ],
        });
    } else t = (0, l.jsx)("div", { className: nn.vY, children: d.map((e) => (0, l.jsx)(ne, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: nn.$$,
        children: (0, l.jsxs)(no.Ar, {
            className: nn.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: nc.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nc.Dr,
                            children: [
                                (0, l.jsx)(ta.D, {
                                    onClick: a,
                                    className: nc.UE,
                                    children: (0, l.jsx)(nd.A, { direction: nd.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: nc.s7,
                                    children: K.intl.format(K.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tW.I, {
                            query: n,
                            "aria-label": K.intl.string(K.t.nL2wKD),
                            placeholder: K.intl.string(K.t.nL2wKD),
                            onChange: i,
                            onClear: a,
                            onKeyDown: r,
                        }),
                    ],
                }),
                t,
            ],
        }),
    });
};
var nh = n(650583);
let nA = (e) => {
    let { channel: t, guild: i } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, A.cf)([tk.A], () => {
            let e = tk.A.getCurrentCategoryId(t.id),
                n = tk.A.getDirectoryEntries(t.id, e === nt.mU.ALL ? null : e),
                i = tk.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: tk.A.getDirectoryAllEntriesCount(t.id),
                isLoading: tk.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eJ.Ay.lastMessageId(t.id);
            null != e &&
                tD.h.wait(() => {
                    (0, tU.ack)(
                        t.id,
                        {
                            object: er.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: er.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        !0,
                        e,
                    );
                });
        },
        [t.id],
    );
    let u = s.useMemo(
            () =>
                null != r
                    ? (function (e, t) {
                          if (t !== nt.mU.ALL) return [{ entries: (0, na._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, na.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: K.intl.string(K.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, na.DN)(s)).length > 0 &&
                                  n.push({ header: K.intl.string(K.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              n
                          );
                      })(Object.values(r), a)
                    : null,
            [r, a],
        ),
        {
            mostRecentQuery: h,
            searchFetching: g,
            searchResults: p,
        } = (0, A.cf)([tw.A], () => {
            let { mostRecentQuery: e, fetching: n } = tw.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: tw.A.getSearchResults(t.id, e) };
        }),
        [f, E] = s.useState(h),
        C = "" !== h,
        x = { mostRecentQuery: h },
        I = s.useRef(x);
    s.useEffect(() => {
        I.current = x;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = I.current;
            tP.Yc(t.id), tP.YS(t.id), E(e);
        }, [t.id]),
        s.useEffect(() => {
            et.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: a,
            });
        }, [t.id, i.id, a]);
    let b = (0, tV.b)(t),
        S = s.useMemo(
            () =>
                b
                    ? () => {
                          (0, _.openModalLazy)(async () => {
                              let { default: e } = await n.e("96349").then(n.bind(n, 579735));
                              return (n) =>
                                  (0, l.jsx)(e, {
                                      ...n,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: a === nt.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [b, i.name, i.id, t.id, a],
        ),
        N = (e) => {
            0 !== f.trim().length &&
                e.key === nh.dh.ENTER &&
                (tP.Se(t.id, f),
                et.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: i.id,
                }));
        },
        T = () => {
            E(""), tP.BA(t.id);
        };
    return C
        ? (0, l.jsx)(nu, {
              searchQuery: f,
              setSearchQuery: E,
              mostRecentQuery: h,
              handleSearchKeyPress: N,
              handleClearSearch: T,
              handleCreateOrAddGuild: S,
              searchResults: p,
              searchFetching: g,
          })
        : null == u && null == a
          ? (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(m.y, { className: nn.u1 }) })
          : u?.length === 0 && null == a
            ? (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(tF, { guild: i, onAddGuild: S }) })
            : (0, l.jsx)(ns, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: N,
                  handleClearSearch: T,
                  handleCreateOrAddGuild: S,
                  currentCategoryId: a,
                  handleSelectCategory: (e) => {
                      tP.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var ng = n(826673),
    n_ = n(313281),
    nm = n(47167),
    np = n(806202),
    nf = n(58736),
    nE = n(683442),
    nC = n(111956),
    nx = n.n(nC),
    nI = n(922016),
    nb = n(550079),
    nS = n(477782),
    nN = n(811893),
    nT = n(789645),
    nv = n(163126),
    ny = n(182061),
    nR = n(886393),
    nj = n(307623),
    nL = n(660273),
    nO = n(707792),
    nG = n(41402),
    nM = n(271456),
    nD = n(200273),
    nU = n(565846),
    nP = n(57907),
    nw = n(375500),
    nk = n(707653),
    nV = n(50268),
    nB = n(584682),
    nH = n(378570),
    nF = n(713608),
    nW = n(473503),
    nK = n(901472),
    nY = n(267102),
    nz = n(474397),
    nq = n(486974),
    nX = n(221314);
function nQ(e) {
    let { channel: t } = e,
        n = s.useContext(et.AnalyticsContext),
        i = (0, nY.aL)(),
        a = K.intl.string(nX.default["Beo/7v"]),
        { firstMessage: r } = (0, nW.OA)(t),
        o = r?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nf.Ay.Icon, {
              onClick: () => {
                  (0, nH.iN)(t.id),
                      (0, nz.A)(),
                      (0, nK.z)(t.guild_id, d, t.id, {
                          modViewPanel: nq.g.INFO,
                          sourceLocation: location ?? n.location,
                      }),
                      i.dispatch(er.jej.POPOUT_CLOSE);
              },
              tooltip: a,
              icon: nF.q,
              "aria-label": a,
          })
        : null;
}
var nJ = n(780338),
    nZ = n(782603),
    n$ = n(857071),
    n0 = n(607508),
    n1 = n(914703),
    n2 = n(37411);
function n9(e) {
    let { channel: t } = e,
        n = (0, n0.X)(t),
        [i, a] = s.useState(!1),
        r = s.useRef(null),
        o = (0, A.bG)([n$.A], () => null != t.guild_id && n$.A.isLurking(t.guild_id));
    if (
        (s.useEffect(() => {
            let e = () => a(!0);
            return (
                en._.subscribe(er.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    en._.unsubscribe(er.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        o)
    )
        return null;
    let d = K.intl.string(K.t.h850Ss);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: nI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, l.jsx)(n1.A, { ...e, channel: t, navId: "thread-context", label: K.intl.string(K.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(nf.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: i ? null : d,
                icon: n === n2.CP.NO_MESSAGES ? nJ.a : nZ.X,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var n6 = n(747926);
function n3(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let o = K.intl.string(K.t["UKOtz+"]);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: a,
        shouldShow: n,
        animation: nI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(n7, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(nf.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: n ? null : o,
                icon: tX.j,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function n7(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nL.A)(t, "Sidebar Overflow"),
        a = (0, nG.A)(t),
        r = (0, nP.A)(t),
        o = (0, nw.A)(t),
        d = (0, ny.A)(t),
        c = (0, nO.A)(t),
        u = (0, nU.A)(t.id),
        h = (0, nD.A)(t),
        A = (0, nj.A)(t),
        g = (0, nR.A)(t),
        _ = (0, nV.A)({ id: t.id, label: K.intl.string(K.t.DQ797g) }),
        m = (0, nk.A)(t),
        p = (0, nM.A)(t),
        f = (0, nv.$)(1e3);
    function E() {
        (0, nH.iN)(t.id);
    }
    function C(e) {
        let n = nx()(() => {
                en._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
            }, 250),
            i = (e) => {
                e.channelId === t.id && n();
            };
        en._.subscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                en._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            });
    }
    return (0, l.jsxs)(nb.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": K.intl.string(K.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nS.rX, {
                children: [s, (0, l.jsx)(nS.Dr, { id: "open", label: K.intl.string(K.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(nS.rX, { children: [r, o] }),
            (0, l.jsxs)(nS.rX, { children: [h, a, u, p] }),
            (0, l.jsxs)(nS.rX, {
                children: [
                    (0, l.jsx)(nS.Dr, {
                        id: "search",
                        label: K.intl.string(K.t["5h0QOP"]),
                        icon: nN.t,
                        trailingIndicator: { type: "icon", icon: nN.t },
                        action: function () {
                            C(() => {
                                en._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E();
                        },
                    }),
                    (0, l.jsx)(nS.Dr, {
                        id: "pins",
                        label: K.intl.string(K.t["2BSH7n"]),
                        icon: nN.t,
                        trailingIndicator: { type: "icon", icon: nN.t },
                        action: function () {
                            C(() => {
                                en._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nS.rX, { children: [m, d, c, A] }),
            (0, l.jsxs)(nS.rX, { children: [g, _] }),
        ],
    });
}
function n4(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t.isForumPost() ? null : (0, l.jsx)(n9, { channel: t }),
            t.isModeratorReportChannel() ? (0, l.jsx)(nQ, { channel: t }) : null,
            (0, l.jsx)(n3, { channel: t }),
            (0, l.jsx)(nf.Ay.Icon, {
                icon: nT.P,
                tooltip: K.intl.string(K.t.cpT0Cq),
                onClick: () => (0, n6.xu)((0, nB.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
var n5 = n(31717),
    n8 = n(853742),
    ie = n(224517);
function it(e) {
    let { channelId: t } = e,
        i = (0, A.bG)([eP.A], () => eP.A.getChannel(t)),
        a = (0, A.bG)([eP.A], () => eP.A.getChannel(i?.parent_id)),
        r = (0, A.bG)([t9.A], () => t9.A.getGuild(i?.getGuildId())),
        o = (0, nm.Ay)(i),
        d = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || d.current || ((d.current = !0), (0, n8.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    let c = (0, l.jsx)(n4, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep.A, { channel: i, draftType: n5.C.ChannelMessage }),
            (0, l.jsx)(nf.Ay, {
                toolbar: c,
                "aria-label": K.intl.string(K.t.Pwe8tN),
                children: (0, nE.zF)({
                    channel: i,
                    parentChannel: a,
                    channelName: o,
                    guild: r,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, tE.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ie.T,
                children: (0, l.jsx)(np.A, { channel: i, guild: r, chatInputType: ti.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var ii = n(91242),
    il = n(857253),
    is = n(872363);
let ia = function (e, t) {
    tD.h.wait(() => {
        tD.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
    });
};
var ir = n(561446),
    io = n(300233),
    id = n(721592),
    ic = n(997509),
    iu = n(529942),
    ih = n(739455),
    iA = n(328312);
function ig(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: iA.t7,
        children: (0, l.jsxs)("div", {
            className: iA.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iA.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: K.intl.string(K.t["8gJGPs"]) }),
                        (0, l.jsx)(S.E, {
                            variant: "text-sm/normal",
                            className: iA.G3,
                            children: K.intl.string(K.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iA.__invalid_button,
                            children: (0, l.jsx)(p.$, {
                                variant: "primary",
                                text: K.intl.string(K.t["I/XhUn"]),
                                onClick: () => {
                                    (0, iu.rf)(t),
                                        ic.A.open(t, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, ih.Fx)(t);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var i_ = n(599941),
    im = n(251766),
    ip = n(950344),
    iE = n(217530),
    iC = n(817649),
    ix = n(601099);
function iI(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, im.e)({ guildId: t, channelId: n }),
        a = (0, i_.uk)(t),
        r = (0, i_.Tq)(t),
        o = (0, A.bG)([t9.A], () => t9.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, A.bG)([eP.A], () => eP.A.getChannel(n)),
        u = (0, nm.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of a) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [a]);
    return ((0, ip.A)({
        guildId: t,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: ix.__invalid_spinnerContainer,
              children: (0, l.jsx)(m.y, { className: ix.__invalid_spinner }),
          })
        : (0, l.jsxs)(no.Ar, {
              className: ix.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: ix.DX,
                      children: K.intl.format(K.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(S.E, {
                      className: ix.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, l.jsx)(iE.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iC.A,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: h[e.id],
                                      analyticsLocation: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
var ib = n(604681),
    iS = n(761640),
    iN = n(678959);
function iT(e) {
    let { channelId: t } = e,
        n = (0, A.bG)([iS.Ay], () => iS.Ay.getSection(t), [t]) === er.YvQ.CONVERSATIONS,
        i = (0, A.bG)([tS.A], () => tS.A.getChannelConversations(t).length > 0, [t]);
    return (0, l.jsx)(nf.In, {
        onClick: ib.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: th.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iN.q : void 0,
        selected: n,
        showBadge: i,
    });
}
var iv = n(967198);
function iy(e) {
    let { channelId: t } = e,
        n = (0, A.bG)([iS.Ay], () => iS.Ay.getSection(t)),
        i = (0, A.bG)([iv.A], () => iv.A.getGuildId()),
        s = n === er.YvQ.MEMBERS;
    return (0, l.jsx)(nf.In, {
        tooltip: s ? K.intl.string(K.t.Axvx8c) : K.intl.string(K.t.gxChDx),
        icon: y.n,
        onClick: () => {
            ej.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
                ib.A.toggleMembersSection();
        },
        selected: s,
    });
}
var iR = n(187360),
    ij = n(366605),
    iL = n(945830);
let iO = function (e) {
    let { channel: t } = e,
        n = (0, e8.ni)(t),
        [i, a] = s.useState(!1),
        r = (0, A.bG)([eJ.Ay], () => eJ.Ay.hasUnreadPins(t.id), [t]),
        o = (0, nY.aL)(),
        d = s.useRef(null),
        c = s.useCallback(() => {
            n || a((e) => !e);
        }, [n]);
    function u(e) {
        e?.shiftKey || o.dispatch(er.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                en._.subscribe(er.jej.TOGGLE_CHANNEL_PINS, c),
                () => {
                    en._.unsubscribe(er.jej.TOGGLE_CHANNEL_PINS, c);
                }
            ),
            [c],
        ),
        (0, l.jsx)(nI.Y, {
            targetElementRef: d,
            shouldShow: i,
            animation: nI.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => a(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(iL.A, { ...e, onJump: u, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, l.jsx)(nf.In, {
                    ...e,
                    ref: d,
                    onClick: c,
                    tooltip: i ? null : K.intl.string(K.t["mp1N/2"]),
                    icon: ij.t,
                    iconSize: 20,
                    "aria-label": K.intl.string(K.t["mp1N/2"]),
                    disabled: n,
                    showBadge: r,
                    selected: i,
                });
            },
        })
    );
};
var iG = n(306788),
    iM = n(863922),
    iD = n(822074),
    iU = n(521732);
function iP(e) {
    let { channel: t } = e,
        n = (0, e8.ni)(t),
        i = (0, A.bG)([iD.A], () => iD.A.shouldShowTopicsBar());
    return (0, l.jsx)(nf.Ay.Icon, {
        icon: iG.K,
        onClick: () => {
            et.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iU.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, iM.Oz)();
        },
        tooltip: i ? K.intl.string(K.t.nGs3kO) : K.intl.string(K.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var iw = n(885574),
    ik = n(947094),
    iV = n(919577),
    iB = n(207777),
    iH = n(422844),
    iF = n(435470),
    iW = n(892110),
    iK = n(45494);
function iY(e) {
    let { channel: t } = e,
        n = (0, iF.S4)(t),
        i = (0, A.bG)([ik.A], () => ik.A.hasHidden(t.id)),
        s = (0, iW.l)(t.id),
        { sortOrder: a, tagFilter: r, tagSetting: o } = (0, iH.R)(t.id),
        d = (0, A.bG)(
            [iB.A, iK.A],
            () => !!(iB.A.getThreadIds(t.id, a, r, o).length > 0) || !!(iK.A.getThreads(t.id, a, r, o).length > 0),
            [t.id, a, r, o],
        ),
        c = t.isMediaChannel();
    if (!n || s || (c && d)) return null;
    let u = i
        ? c
            ? K.intl.string(K.t["WP/IE1"])
            : K.intl.string(K.t.zfq9V4)
        : c
          ? K.intl.string(K.t.p60yF1)
          : K.intl.string(K.t.SNOqYC);
    return (0, l.jsx)(nf.In, {
        tooltip: u,
        icon: iw.m,
        onClick: () => iV.A.hideAdminOnboarding(t.id, !i),
        selected: !i,
    });
}
var iz = n(742589),
    iq = n(43105),
    iX = n(428689),
    iQ = n(978940),
    iJ = n(387755),
    iZ = n(956793),
    i$ = n(641703),
    i0 = n(379848),
    i1 = n(753727),
    i2 = n(222692),
    i9 = n(442353),
    i6 = n(470710),
    i3 = n(186111),
    i7 = n(969341),
    i4 = n(994500),
    i5 = n(977997),
    i8 = n(360469),
    le = n(49999),
    lt = n(731854);
class ln extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        en._.subscribe(er.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        en._.unsubscribe(er.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: s,
                channel: a,
                mode: r,
                isProvisional: o,
            } = this.props;
        if (t || (n && r === er._Of.VOICE)) return null;
        let d = a.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = K.intl.string(K.t.izMR7o)))
                : i7.Ay.supports(lt.O5.VIDEO)
                  ? s
                      ? ((c = K.intl.string(K.t.PHzjvX)), (u = !0))
                      : n && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? K.intl.string(K.t.S0W8Z5) : K.intl.string(K.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? K.intl.string(K.t.S0W8Z5) : K.intl.string(K.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = K.intl.string(K.t.UVpg3U))),
            (0, l.jsx)(nf.Ay.Icon, { icon: iX.n, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: s,
                channel: a,
                dismissibleContentTypes: r,
                isProvisional: o,
            } = this.props;
        if (t) return null;
        let d = a.isManaged(),
            c = !1;
        o
            ? ((c = !0), (e = K.intl.string(K.t.izMR7o)))
            : i
              ? ((e = d ? K.intl.string(K.t.LW2Ghr) : K.intl.string(K.t.rF7lN5)), (c = !0))
              : s
                ? ((e = K.intl.string(K.t.PHzjvX)), (c = !0))
                : (e = n
                      ? d
                          ? K.intl.string(K.t.S0W8Z5)
                          : K.intl.string(K.t.fdEeb5)
                      : d
                        ? K.intl.string(K.t.S0W8Z5)
                        : K.intl.string(K.t.focH1t));
        let u = (0, l.jsx)(nf.Ay.Icon, {
            ref: this.iconRef,
            icon: iQ._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(i0.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === g.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(iq.A, {
                                  targetElementRef: this.iconRef,
                                  title: K.intl.string(K.t.HOPqzR),
                                  body: K.intl.format(K.t.xAW71b, { helpdeskUrl: i8.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(le.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, l.jsxs)(s.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, t) => {
        let { channel: n, notFriend: i, appContext: l } = this.props,
            s = i ? n.getRecipientId() : null,
            a = () => iJ.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        t ? (0, i9.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        iZ.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(g.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, ng.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: le.i.AUTO }),
            t)
        );
        else if (n) return this.handleJoinCall(!1);
        else return this.handleStartCall(e, !1);
    };
    handleStartVideoCall = (e) => {
        this.handleStartCall(e, !0);
    };
    handleJoinVideoCall = () => {
        let { appContext: e } = this.props,
            t = () => this.handleJoinCall(!0);
        (0, i9.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, i2.A)();
    };
}
function li(e) {
    let { channel: t } = e,
        n = (0, i1.A)(),
        i = (0, A.bG)([tt.A], () => tt.A.getMode(t.id)),
        s = (0, A.bG)([i5.A], () => i5.A.isInChannel(t.id)),
        a = (0, A.bG)([L.A], () => L.A.useReducedMotion),
        { callActive: r, callUnavailable: o } = (0, A.cf)([i6.A], () => ({
            callActive: i6.A.isCallActive(t.id),
            callUnavailable: i6.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([i4.A], () => ({
            notFriend: t.type === er.rbe.DM && null != d && !i4.A.isFriend(d),
            isBlocked: t.type === er.rbe.DM && null != d && i4.A.isBlocked(d),
        })),
        h = (0, A.bG)([$.default], () => $.default.getUser(d)),
        _ = (0, nY.Us)(),
        m = [],
        p = (0, i$.A)(t.id),
        f = (0, A.bG)([i3.A], () => i3.A.hasLayers());
    return (p && !f && m.push(g.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(ln, {
              channel: t,
              mode: i,
              inCall: s,
              callActive: r,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: _,
              dismissibleContentTypes: m,
              useReducedMotion: a,
          });
}
var ll = n(95550),
    ls = n(765178),
    la = n(231483),
    lr = n(544231),
    lo = n(338510),
    ld = n(151119),
    lc = n(278941),
    lu = n(665909),
    lh = n(327337);
let lA = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lo.u)(t.id),
        a = (0, ld.S)(t.id),
        r = (0, lc.e)(t.id),
        o = (0, _.useHasAnyModalOpen)(),
        d = (0, A.bG)([i3.A], () => i3.A.hasLayers()),
        c = s.useCallback(
            () => (a ? K.intl.string(K.t["16QyDv"]) : null != r ? K.intl.string(K.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !o && !d, [a, r, o, d]),
        [h, g] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != i &&
            (ls.O.announce(K.intl.string(K.t.acsXuG)),
            setTimeout(() => {
                (0, lr.xi)(t.id, [r.id]);
            }, 5e3),
            (0, lu.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: lu.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (ls.O.announce(K.intl.string(K.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lr.bg)(t.id);
                }, 5e3));
    }, [t, r, i, a]),
        (0, V.Ay)(() => {
            null != i &&
                (0, lu.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != r,
                    viewName: lu.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && g(e);
        }, [a, r, c]);
    let m = s.useCallback(() => {
        null != r && (0, lr.xi)(t.id, [r.id]),
            null != i &&
                ((0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("19959"), n.e("12115")]).then(
                            n.bind(n, 131882),
                        );
                        return (n) => {
                            let { onClose: s, transitionState: a } = n;
                            return (0, l.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: s,
                                transitionState: a,
                            });
                        };
                    },
                    { modalKey: lh.V },
                ),
                (0, lu._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lu.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                }));
    }, [r, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(ev.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nf.Ay.Icon, {
                  icon: la.l,
                  onClick: m,
                  tooltip: K.intl.string(K.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lg = n(262763),
    l_ = n(406704),
    lm = n(576705);
let lp = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, i1.A)(),
        i = (0, A.bG)([i5.A], () => i5.A.isInChannel(t.id)),
        a = (0, A.bG)([i5.A], () => !u().isEmpty(i5.A.getVoiceStatesForChannel(t.id))),
        r = (0, A.bG)([lm.A], () => lm.A.can(er.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, id.A)(t.id),
        d = (0, l_.Id)(t),
        c = s.useCallback(() => {
            lg.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [t, i, o]);
    return (s.useEffect(
        () => (
            en._.subscribe(er.jej.CALL_START, c),
            () => {
                en._.unsubscribe(er.jej.CALL_START, c);
            }
        ),
        [c],
    ),
    l_.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !n &&
        !i &&
        r &&
        d &&
        t.isVocalThread())
        ? (0, l.jsx)(nf.Ay.Icon, {
              icon: iQ._,
              onClick: c,
              tooltip: a ? K.intl.string(K.t.fdEeb5) : K.intl.string(K.t.focH1t),
          })
        : null;
});
var lf = n(812991),
    lE = n(47675),
    lC = n(999291);
function lx() {
    let [e, t] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            let e = () => {
                t(window.innerWidth >= 1132);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
function lI(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, A.bG)([iS.Ay], () => iS.Ay.getSection(t.id, t?.isDM())),
        s = (0, lC.Ay)(t.getRecipientId()),
        a = lx(),
        r = i === er.YvQ.PROFILE && a;
    return (0, l.jsx)(nf.In, {
        disabled: !a || n,
        tooltip: !a || n ? K.intl.string(K.t.YneDgF) : r ? K.intl.string(K.t.niD64e) : K.intl.string(K.t["+FAsHq"]),
        icon: lf.n,
        onClick: () => {
            (0, lE.am)({ displayProfile: s, isProfileOpen: !r }), ib.A.toggleUserProfileSidebarSection();
        },
        selected: r && !n,
    });
}
let lb = {};
class lS extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            lb[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = lb[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return lb;
    }
}
let lN = new lS(tD.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = lb[n];
        return null == i ? ((lb[n] = new Set()), lb[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != lb[t.id] && !t.unavailable && (delete lb[t.id], !0);
    },
});
var lT = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lv = n(376943),
    ly = n(394953),
    lR = n(709066),
    lj = n(87664);
n(667532);
var lL = n(403362);
let lO = [],
    lG = es.Ay.getEnableHardwareAcceleration();
function lM(e) {
    let { user: t, channel: i, status: a, activities: r } = e,
        o = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, A.bG)([$.default], () => $.default.getCurrentUser()),
        c = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, A.bG)([i4.A], () => i4.A.getNickname(t.id)),
        h = (0, lj.A)(t.id),
        g = s.useRef(null),
        _ = (e) => {
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("28864"), n.e("31206")]).then(
                    n.bind(n, 778595),
                );
                return (n) => (0, l.jsx)(e, { ...n, user: t, channel: i });
            });
        },
        m = () => {
            let e = `@${el.Ay.getUserTag(t, { decoration: "never" })}`,
                n = `<@${t.id}>`;
            en._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: i.id }),
                en._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                j.A.startTyping(i.id);
        },
        p = (0, M.r)({ user: t }),
        [f, E] = s.useState(!1);
    return (0, l.jsx)(z.A, {
        targetElementRef: g,
        user: t,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: m,
        shouldShow: f,
        onRequestClose: () => E(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: s, ...A } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: g,
                    user: t,
                    currentUser: d,
                    isOwner: t.id === i.ownerId,
                    ownerTooltipText: K.intl.string(K.t["MRXZ+x"]),
                    shouldAnimateStatus: lG,
                    isTyping: o,
                    status: a,
                    activities: r,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: _,
                    selected: f,
                    isMobile: c,
                    nick: u,
                    nameplate: p,
                    onClick: (e) => {
                        e.shiftKey ? m?.() : E((e) => !e);
                    },
                    onMouseDown: (e) => {
                        f ? e.stopPropagation() : s?.(e);
                    },
                    ...A,
                },
                t.id,
            );
        },
    });
}
function lD(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function lU(e) {
    let { channel: t } = e,
        n = $.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: a } = (0, G.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, A.bG)(
            [i4.A, $.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = $.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(lL.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    i4.A.isFriend(e.id) || e.id === $.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? lO,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lO });
                let s = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(t);
                }
                return { listItems: s };
            },
            [t],
            lD,
        );
    s.useEffect(() => {
        et.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && r.every((e) => e.user.isStaff());
    return (0, l.jsx)(G.f5, {
        value: a,
        children: (0, l.jsx)("div", {
            className: ed.kL,
            children: (0, l.jsx)("aside", {
                className: ed.yg,
                children: (0, l.jsxs)(no.Ip, {
                    className: ed.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(D.A, {
                            className: ed.lL,
                            children: [
                                `${K.intl.string(K.t["9Oq93m"])}—${r.length} `,
                                o && (0, l.jsx)(lR.A, { type: lR.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lM,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                    ],
                }),
            }),
        }),
    });
}
var lP = n(59350),
    lw = n(853279),
    lk = n(85942);
function lV() {
    return (0, l.jsx)("div", {
        className: lk.zt,
        children: (0, l.jsx)("header", {
            className: lw.wL,
            children: (0, l.jsxs)("div", {
                className: lw.TN,
                role: "status",
                children: [
                    (0, l.jsx)(S.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: K.intl.string(K.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: lw.zp,
                        children: (0, l.jsx)(m.y, {
                            type: m.y.Type.SPINNING_CIRCLE,
                            className: lw.u1,
                            itemClassName: lw.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var lB = n(138298),
    lH = n(940382),
    lF = n(288254),
    lW = n(873614),
    lK = n(790535),
    lY = n(163328),
    lz = n(425557),
    lq = n(270003),
    lX = n(150934),
    lQ = n(452027),
    lJ = n(292666),
    lZ = n(511274),
    l$ = n(465532),
    l0 = n(579872),
    l1 = n(748934),
    l2 = n(408018),
    l9 = n(201349),
    l6 = n(822610),
    l3 = n(915089),
    l7 = n(314307),
    l4 = n(636922),
    l5 = n(931664),
    l8 = n(631576),
    se = n(253932),
    st = n(232835),
    sn = n(522602),
    si = n(806150),
    sl = n(518960),
    ss = n(753738);
function sa(e, t) {
    return { type: e, message: t ?? null };
}
function sr(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var so = n(393309),
    sd = n(474078),
    sc = n(636537),
    su = n(152367),
    sh = n(147087);
async function sA(e) {
    try {
        let t = await sc.Bo.post({
            url: er.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return t.ok ? (t.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
var sg = n(55294),
    s_ = n(790158),
    sm = n(415296);
let sp = ti.oU.THREAD_CREATION;
function sf(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        s = (0, A.bG)([eP.A], () => eP.A.getChannel(t)),
        { analyticsLocations: a } = (0, G.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(G.f5, {
              value: a,
              children: (0, l.jsx)(eZ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": K.intl.string(K.t.rBIGBL),
                      className: s_.kL,
                      children: [
                          (0, l.jsx)(ep.A, { channel: s, draftType: n5.C.FirstThreadMessage }),
                          (0, l.jsx)(sE, { parentChannelId: t }),
                          (0, l.jsx)(sC, { parentChannel: s, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function sE(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = n5.A.getThreadSettings(t),
                n = n5.A.getDraft(t, n5.C.FirstThreadMessage).trim(),
                i = sn.A.getUploads(t, n5.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? l0.A.show({
                      title: K.intl.string(K.t["6kDZh1"]),
                      body: K.intl.string(K.t.NgS9jX),
                      confirmText: K.intl.string(K.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: K.intl.string(K.t["olcKd/"]),
                      onConfirm: () => {
                          (0, n6.bA)(t);
                      },
                  })
                : (0, n6.bA)(t);
        }, [t]);
    return (0, l.jsxs)(nf.Ay, {
        toolbar: (0, l.jsx)(nf.Ay.Icon, { icon: nT.P, tooltip: K.intl.string(K.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(nf.Ay.Icon, { icon: lY.y, disabled: !0, "aria-label": K.intl.string(K.t["7Xm5QI"]) }),
            (0, l.jsx)(nf.Ay.Title, { children: K.intl.string(K.t["4WNcpu"]) }),
        ],
    });
}
function sC(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: a } = e,
        o = (0, A.bG)([L.A], () => L.A.messageGroupSpacing),
        d =
            ((t = s.useContext(eZ.EH)),
            s.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, t) {
            let n = (0, A.bG)([n5.A], () => n5.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(n),
                a = s.useCallback(
                    (n) => {
                        l((e) => ({ ...e, ...n })), l$.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: a };
        })(n, i),
        { textAreaState: g, setTextAreaState: _ } = (function (e, t) {
            let [n, i] = s.useState((0, l2.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let l = n5.A.getDraft(e.id, n5.C.FirstThreadMessage);
                        (0 === l.length || !0 === n) && i((0, l2.ur)(l)), t(n5.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        n(!0),
                        n5.A.addChangeListener(n),
                        () => {
                            n5.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, u),
        m = (0, so.EN)(n),
        {
            isGeneratingAI: p,
            enableAIFeatures: f,
            getThreadNameInputAccessory: E,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    updateThreadSettings: i,
                    threadSettings: a,
                    textAreaState: r,
                } = e,
                [o, d] = s.useState(!1),
                [c, u] = s.useState(!1),
                h = (0, sh.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = st.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let t = await sA(e);
                                null != t && "" !== t.trim() && i({ name: t });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [t.id, n, i, h, r.textValue]);
            s.useEffect(() => {
                u(!1), d(!1), t.id === a.parentChannelId && n !== a.parentMessageId && i({ name: "" });
            }, [n, i, t.id, a.parentChannelId, a.parentMessageId]),
                s.useEffect(() => {
                    (null != a.name && "" !== a.name.trim()) || c || (h && null != n && (u(!0), A()));
                }, [t.id, n, i, a.name, c, h, A]);
            let g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: su.D,
                                onClick: A,
                                "aria-label": K.intl.string(K.t.ZF2oBs),
                                disabled: e || o || (null == n && r.textValue.trim().length < 10),
                                tooltip: K.intl.string(K.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, A, o, n, r.textValue],
                ),
                _ = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(ev.m, {
                                  text: K.intl.string(K.t.ZF2oBs),
                                  children: (0, l.jsx)(tr.K, {
                                      icon: su.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": K.intl.string(K.t.ZF2oBs),
                                      onClick: A,
                                      disabled: e || o || (null == n && r.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, n, r.textValue, A],
                );
            return {
                isGeneratingAI: o,
                generateAIName: A,
                enableAIFeatures: h,
                renderAiGenerateButton: _,
                getThreadNameInputAccessory: g,
            };
        })({ parentChannel: n, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: g }),
        {
            nameError: C,
            messageError: x,
            submit: I,
            submitting: b,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: a,
                    location: r,
                    enableAIFeatures: o,
                } = e,
                [d, c] = s.useState(null),
                [u, h] = s.useState(null),
                [A, g] = s.useState(!1),
                _ = (0, sg.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: n6.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        g(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = l5.A.getStickerPreview(t.id, sp.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sn.A.getUploads(t.id, n5.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sa(0, K.intl.string(K.t.uXA573)) : null),
                            h(u ? sa(0, K.intl.string(K.t.kesTVT)) : null),
                            d || u)
                        )
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: m } = await (0, si.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: sp,
                            channel: null == n ? t : null,
                        });
                        if (!m) return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await _(e, l, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sa(1, (0, ss.cw)(p, t?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sa(2, K.intl.string(K.t.uXA573)));
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, l8.x5)(t.id, sp.drafts.type), g(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [_, a.textValue, i.name, n, t, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: m,
            textAreaState: g,
            location: a,
            enableAIFeatures: f,
        }),
        S = (0, so.Iy)(c, m) ? lz.t : lY.y;
    return (0, l.jsx)("div", {
        className: s_.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: r()(s_.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), I();
                },
                className: s_.Zd,
                children: [
                    (0, l.jsx)(no.Ip, {
                        className: s_.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: s_.bv,
                            children: [
                                (0, l.jsxs)(l7.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(sm.P0, s_.P0),
                                            children: (0, l.jsx)(S, { className: sm.Kk }),
                                        }),
                                        (0, l.jsxs)(lq.n, {
                                            children: [
                                                (0, l.jsx)(sI, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: C,
                                                    disabled: b,
                                                    isGeneratingAI: p,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: E,
                                                }),
                                                n.type === er.rbe.GUILD_TEXT
                                                    ? (0, l.jsx)(sx, {
                                                          startedFromMessage: null != i,
                                                          threadSettings: c,
                                                          updateThreadSettings: h,
                                                          privateThreadMode: m,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sS, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: s_.Eh,
                        children: [
                            (0, l.jsx)(sb, {
                                parentChannel: n,
                                textAreaState: g,
                                setTextAreaState: _,
                                submit: I,
                                error: x,
                            }),
                            (0, l.jsx)(l1.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: s_.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sx(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: s } = e,
        a = (0, so.Iy)(n, s),
        r = (0, l.jsx)(lX.S, {
            disabled: s === so.jk.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: K.intl.string(K.t.TRPp3g),
        });
    return t || s === so.jk.Disabled
        ? null
        : (0, l.jsx)(lQ.D, {
              label: K.intl.string(K.t.F1zyvU),
              helperText: a ? K.intl.string(K.t.EWXycz) : void 0,
              children: r,
          });
}
function sI(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            updateThreadSettings: s,
            error: a,
            disabled: r,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = sr(a, { content: u }),
        A = (0, so.l1)(t, n),
        g = null != n && !d,
        _ = (0, l3.GV)(),
        m = d ? K.intl.string(K.t["Nb2/RE"]) : "" !== A ? A : K.intl.string(K.t["Nb2/RE"]);
    return (0, l.jsx)(lJ.k, {
        label: K.intl.string(g ? K.t.JPvIiL : K.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: _,
        placeholder: m,
        maxLength: er.Ign,
        onChange: (e) => {
            s({ name: (0, sd.A)(e, !1) }), "" !== e ? j.A.startTyping(t.id) : j.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, sd.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || o,
    });
}
function sb(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: a, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        g = s.useCallback(() => c(!1), []),
        _ = s.useCallback(
            (e, n, l) => {
                l$.A.saveDraft(t.id, n, n5.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? j.A.startTyping(t.id) : "" === n && j.A.stopTyping(t.id),
                            { textValue: n, richValue: l }
                        ),
                    );
            },
            [t.id, i],
        ),
        m = s.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return a(t, i, n);
            },
            [a],
        );
    (0, eZ.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, eZ.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: g });
    let p = (0, A.bG)([lm.A], () => lm.A.can(er.xBc.ATTACH_FILES, t)),
        f = sr(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l6.A, { channelId: t.id, type: sp, canAttachFiles: p }),
            (0, l.jsx)("div", { className: s_.xN, children: (0, l.jsx)(lZ.U, { error: f }) }),
            (0, l.jsx)(l9.Ay, {
                type: sp,
                channel: t,
                placeholder: K.intl.string(K.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: r()(s_.gM, s_.Yy),
                innerClassName: r()(s_.SL, { [s_.cr]: null != f }),
                onFocus: h,
                onBlur: g,
                onChange: _,
                onSubmit: m,
                promptToUpload: sl.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sS(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, A.bG)([st.A], () => (null == n ? null : st.A.getMessage(t.id, n))),
        s = se.hH.useSetting();
    return null != i
        ? (0, l.jsx)(l4.A, {
              className: s_.IL,
              message: i,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sN = n(305866),
    sT = n(707539),
    sv = n(702513),
    sy = n(614879);
function sR(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e8.ni)(t),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            n || (0, sT.D3)("Popout"), i(!n);
        }, [n]);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: a,
        animation: nI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: o,
        renderPopout: function () {
            return (0, l.jsx)(sN.l, {
                children: (0, l.jsx)(sv.A, { className: sy.T, channel: t, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(nf.In, {
                ...e,
                ref: a,
                className: sy.Kk,
                onClick: d,
                icon: lY.y,
                "aria-label": K.intl.string(K.t.B2panI),
                tooltip: n ? null : K.intl.string(K.t.B2panI),
                disabled: r,
                selected: n,
            });
        },
    });
}
var sj = n(40389);
function sL(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        i((e) => !e);
    }
    let o = K.intl.string(K.t["UKOtz+"]);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: a,
        shouldShow: n,
        animation: nI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sO, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(nf.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: n ? null : o,
                icon: tX.j,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function sO(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, ny.A)(t),
        a = (0, nO.A)(t),
        r = (0, nU.A)(t.id),
        o = (0, nD.A)(t),
        d = (0, nV.A)({ id: t.id, label: K.intl.string(K.t.DQ797g) }),
        c = (0, nR.A)(t),
        h = (0, nj.A)(t),
        g = (0, nL.A)(t, "Toolbar Overflow"),
        _ = (0, nG.A)(t),
        m = (0, sj.A)(t),
        p = (0, nk.A)(t),
        f = (0, nM.A)(t),
        E = se.SY.useSetting(),
        C = (0, A.bG)([i5.A], () => !u().isEmpty(i5.A.getVoiceStatesForChannel(t.id)));
    return (0, l.jsxs)(nb.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": K.intl.string(K.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nS.rX, { children: [g, m] }),
            (0, l.jsxs)(nS.rX, {
                children: [
                    o,
                    _,
                    r,
                    E && !C
                        ? (0, l.jsx)(nS.Dr, {
                              id: "open",
                              label: K.intl.string(K.t.bX7EaG),
                              action: function () {
                                  (0, n6.JA)(t);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, l.jsxs)(nS.rX, { children: [p, s, a, h] }),
            (0, l.jsxs)(nS.rX, { children: [c, d] }),
        ],
    });
}
var sG = n(332456),
    sM = n(973854),
    sD = n(248537);
function sU(e) {
    var t;
    let i,
        { channelId: a, baseChannelId: r, channelViewSource: o = "Split View" } = e,
        d = (0, A.bG)([eP.A], () => eP.A.getChannel(a)),
        c = (0, A.bG)([t9.A], () => t9.A.getGuild(d?.getGuildId())),
        h = (0, nm.Ay)(d);
    (t = d),
        (i = (0, A.bG)([i5.A], () => null != t && !u().isEmpty(i5.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (tD.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, nH.N9)(t, { source: n2.H9.VOICE_AUTO_OPEN }));
        }, [i, t]);
    let g = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || g.current) return;
            g.current = !0;
            let e = (0, sG.C)(eP.A.getChannel(d.id), !0);
            (0, ej.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, ej.qL)(d.id), channel_view: o }),
                (0, sM.A)({ channelId: d.id });
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    let _ = (0, l.jsx)(n4, { channel: d, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep.A, { channel: d, draftType: n5.C.ChannelMessage }),
            (0, l.jsx)(nf.Ay, {
                toolbar: _,
                "aria-label": K.intl.string(K.t.Pwe8tN),
                children: (0, nE.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, nH.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: sD.T,
                children: (0, l.jsx)(np.A, { channel: d, guild: c, chatInputType: ti.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sP = n(210714),
    sw = n(975732),
    sk = n(707554),
    sV = n(140735),
    sB = n(562153),
    sH = n(215530),
    sF = n(454719),
    sW = n(736653),
    sK = n(311016),
    sY = n(480335),
    sz = n(713517),
    sq = n(183555),
    sX = n(718019),
    sQ = n(694720),
    sJ = n(915614),
    sZ = n(308244),
    s$ = n(743987),
    s0 = n(900179),
    s1 = n(946356),
    s2 = n(878555),
    s9 = n(35241),
    s6 = n(587168),
    s3 = n(744808);
let s7 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var s4 = n(416497);
function s5(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, handleOpenProfile: s } = e,
        { showButton: a } = s7.useConfig({ location: "UserProfileSidebarFooter" }),
        r = a
            ? (0, l.jsx)("div", {
                  className: s4.qr,
                  children: (0, l.jsx)(ta.D, {
                      onClick: () => {
                          s(), (0, lE.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t });
                      },
                      className: s4.wC,
                      children: (0, l.jsx)(S.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: K.intl.string(K.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != i
        ? (0, l.jsxs)("div", { className: s4.xQ, children: [(0, l.jsx)(s3.A, { frame: i, layout: "SIDEBAR" }), r] })
        : r;
}
var s8 = n(996988),
    ae = n(556818),
    at = n(523802);
function an(e) {
    let { user: t, channel: n } = e,
        i = __OVERLAY__ || !(0, sK.A)(t.id),
        a = (0, lC.Ay)(t.id),
        r = (0, sW.Ay)(),
        o = s.useRef(Date.now()),
        { analyticsLocations: d } = (0, G.Ay)(O.A.USER_PROFILE_SIDEBAR),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        u = s.useRef(null),
        { isHoveringOrFocusing: h, isHovering: A } = (0, sz.A)(u),
        g = () => {
            (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: d, hideRestrictedProfile: !0, ...c });
        };
    return (0, l.jsx)(G.f5, {
        value: d,
        children: (0, l.jsx)(sq.of, {
            value: c,
            openedAt: o.current,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsxs)(s1.A, {
                ref: u,
                user: t,
                displayProfile: a,
                themeType: s8.d.SIDEBAR,
                themeOverride: r,
                children: [
                    (0, l.jsxs)(no.d_, {
                        children: [
                            (0, l.jsx)(s6.A, { children: (0, l.jsx)(s9.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: ae.wx,
                                children: [
                                    (0, l.jsx)(sJ.A, {
                                        user: t,
                                        displayProfile: a,
                                        themeType: s8.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !h,
                                    }),
                                    (0, l.jsx)(sX.A, {
                                        user: t,
                                        displayProfile: a,
                                        channelId: n.id,
                                        themeType: s8.d.SIDEBAR,
                                        onOpenProfile: i ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: at.rf,
                                children: [
                                    (0, l.jsx)(s2.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: sB.Ay.getName(null, n.id, t),
                                        onClickName: i ? void 0 : g,
                                        pronouns: a?.pronouns,
                                        trailing: (0, l.jsx)(sQ.A, { displayProfile: a, themeType: s8.d.SIDEBAR }),
                                    }),
                                    (0, l.jsxs)(s1.A.Overlay, {
                                        className: at.Lw,
                                        children: [
                                            (0, l.jsx)(s0.A, {
                                                heading: K.intl.string(K.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(sZ.A, {
                                                    userBio: a?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: h,
                                                }),
                                            }),
                                            (0, l.jsx)(s0.A, {
                                                heading: K.intl.string(K.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(s$.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !i && (0, l.jsx)(s5, { handleOpenProfile: g, analyticsLocations: d, context: c }),
                    a?.profileEffect != null && (0, l.jsx)(sY.A, { skuId: a?.profileEffect?.skuId, isHovering: A }),
                ],
            }),
        }),
    });
}
var ai = n(331322),
    al = n(249790),
    as = n(254828),
    aa = n(783123),
    ar = n(735103);
function ao(e) {
    let { user: t, channel: n, onHide: i } = e,
        a = (0, lC.Ay)(t.id),
        r = (0, sW.Ay)(),
        o = (0, A.bG)([i4.A], () => i4.A.isBlocked(t.id)),
        { analyticsLocations: d } = (0, G.Ay)(o ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        u = s.useRef(null);
    return (0, l.jsx)(G.f5, {
        value: d,
        children: (0, l.jsx)(sq.of, {
            value: c,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(s1.A, {
                ref: u,
                user: t,
                displayProfile: a,
                themeType: s8.d.SIDEBAR,
                themeOverride: r,
                children: (0, l.jsx)(no.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ar.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ar.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ar.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ar.N1,
                                        children: [
                                            (0, l.jsx)(al.A, { user: t }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: K.intl.string(K.t.b33pLD),
                                            }),
                                            (0, l.jsx)(S.E, {
                                                variant: "text-sm/medium",
                                                children: K.intl.format(o ? K.t["8F+WNz"] : K.t["/cZp5s"], {
                                                    username: sB.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ai.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(aa.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    i(),
                                                        (0, lE.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: d,
                                                            ...c,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(as.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    i(),
                                                        (0, lE.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: d,
                                                            ...c,
                                                        });
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var ad = n(419354),
    ac = n(717421),
    au = n(361628),
    ah = n(673843),
    aA = n(594832),
    ag = n(841595),
    a_ = n(679492),
    am = n(439053),
    ap = n(312381),
    af = n(349419),
    aE = n(984545),
    aC = n(193738),
    ax = n(597770),
    aI = n(751188),
    ab = n(746174),
    aS = n(495544),
    aN = n(993401),
    aT = n(518477);
function av(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, G.Ay)(),
        i = (0, A.bG)([aS.default], () => aS.default.getId() === t.id),
        s = (0, A.bG)([i4.A], () => i4.A.isBlockedOrIgnored(t.id) || i4.A.isSpam(t.id)),
        a = (0, ab.j)("UserProfileGiftingBannerButton"),
        { openGiftModal: r } = (0, aI.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: er.liQ.USER_PROFILE,
                section: er.JJy.USER_PROFILE,
                object: er.ZSU.BUTTON_ICON,
                objectType: er.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gifting-banner-button",
        });
    return null == t || t.bot || i || s || !a
        ? null
        : (0, l.jsx)(aN.br, { icon: ax.o, tooltipText: K.intl.string(K.t.PEjaCx), action: aT.pt.GIFT, onClick: r });
}
var ay = n(700174),
    aR = n(983495),
    aj = n(695366),
    aL = n(661531),
    aO = n(922590),
    aG = n(821269),
    aM = n(93246),
    aD = n(351906),
    aU = n(383199),
    aP = n(559506),
    aw = n(361311),
    ak = n(886891),
    aV = n(501193),
    aB = n(383448),
    aH = n(646986),
    aF = n(243166);
function aW(e) {
    let { user: t, currentUser: n, displayProfile: i, channel: s, isHoveringOrFocusing: a, onOpenProfile: r } = e,
        { relationshipType: o, originApplicationId: d } = (0, A.cf)([i4.A], () => ({
            relationshipType: i4.A.getRelationshipType(t.id),
            originApplicationId: i4.A.getOriginApplicationId(t.id),
        })),
        c = (0, aO.fi)(t.id),
        u = (0, aG.q)({ userId: t.id }),
        h = (0, A.bG)([aD.A], () => aD.A.hidePersonalInformation),
        g = (0, A.bG)([ag.A], () => ag.A.getUserProfile(t.id)?.application);
    return (0, l.jsxs)("div", {
        className: at.rf,
        children: [
            (0, l.jsx)(aP.A, { userId: t.id }),
            (0, l.jsx)(s2.Ay, {
                user: t,
                guildId: s.guild_id,
                displayName: sB.Ay.getName(null, s.id, t),
                onClickName: r,
                displayNameTrailing: h ? null : (0, l.jsx)(aF.A, { userId: t.id, isVisible: a, onOpenProfile: r }),
                pronouns: i?.pronouns,
                trailing: (0, l.jsx)(sQ.A, { displayProfile: i, themeType: s8.d.SIDEBAR }),
            }),
            o === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(s1.A.Overlay, {
                    children: (0, l.jsx)(ak.A, { user: t, channelId: s.id, applicationId: d }),
                }),
            c.map((e) =>
                (0, l.jsx)(
                    s1.A.Overlay,
                    {
                        children: (0, l.jsx)(ak.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aB.A, { user: t }),
            i?.private &&
                (0, l.jsx)(s1.A.Overlay, { children: (0, l.jsx)(aV.A, { username: sB.Ay.getName(null, s.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(s1.A.Overlay, {
                    children: (0, l.jsx)(s0.A, {
                        heading: K.intl.string(K.t.Iyka0U),
                        headingIcon: (0, l.jsx)(aj.E, { size: "xxs", color: aL.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aM.T, { userId: t.id }),
                    }),
                }),
            (0, l.jsx)(aH.A, { user: t, currentUser: n, onOpenUserProfileModal: r }),
            (0, l.jsxs)(s1.A.Overlay, {
                className: at.Lw,
                children: [
                    !h &&
                        i?.bio != null &&
                        i?.bio !== "" &&
                        (0, l.jsx)(s0.A, {
                            heading: K.intl.string(K.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(sZ.A, {
                                userId: t.id,
                                userBio: i.bio,
                                isHoveringOrFocusing: a,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    g?.popularApplicationCommandIds != null &&
                        (0, l.jsx)(aU.A, {
                            applicationId: g.id,
                            commandIds: g.popularApplicationCommandIds,
                            channel: s,
                        }),
                    u.length > 0 &&
                        (0, l.jsx)(s0.A, {
                            heading: K.intl.string(K.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(aw.A, { applicationIds: u }),
                        }),
                    (0, l.jsx)(s0.A, {
                        heading: t.bot ? K.intl.string(K.t["A//N4k"]) : K.intl.string(K.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(s$.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}
var aK = n(114212),
    aY = n(913453),
    az = n(229187),
    aq = n(21241),
    aX = n(503062),
    aQ = n(51943),
    aJ = n(847374),
    aZ = n(320448),
    a$ = n(680391);
function a0(e) {
    let { section: t, header: n, items: i, listClassName: a, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, sq.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? aJ.a : aZ._;
    return (0, l.jsxs)("section", {
        className: a$.uW,
        children: [
            (0, l.jsxs)(ta.D, {
                className: r()(a$.wx, a$.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    h(!u), u || (d({ action: "PRESS_SECTION", section: t }), o?.());
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " — ", i.length],
                    }),
                    (0, l.jsx)(A, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(a$.p_, a), children: i }),
        ],
    });
}
var a1 = n(54557);
function a2(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, G.Ay)(),
        { context: s } = (0, sq.NJ)(),
        a = (0, nv.A)(),
        { mutualFriendsCount: r, mutualFriends: o, mutualGuilds: d } = (0, aY.A)(t),
        c = !t.bot && null != r && r > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(s1.A.Overlay, {
              className: a1.Lw,
              children: [
                  u &&
                      (0, l.jsx)(a0, {
                          section: "MUTUAL_GUILDS",
                          header: K.intl.string(K.t["4lTDZq"]),
                          listClassName: a1.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  aQ.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, t2.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(aq.A, { className: a1.yF }),
                  c &&
                      (0, l.jsx)(a0, {
                          section: "MUTUAL_FRIENDS",
                          header: K.intl.string(K.t["0mTJ3j"]),
                          listClassName: a1.p_,
                          onExpand: () => (0, az.A)(t.id, a),
                          items:
                              null == o
                                  ? Array.from({ length: r }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: a1.nC,
                                                children: [
                                                    (0, l.jsx)(aK.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(aK.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: a, status: r } = e;
                                        return (0, l.jsx)(
                                            aX.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, sw.openUserProfileModal)({
                                                        ...s,
                                                        userId: a.id,
                                                        sourceAnalyticsLocations: i,
                                                    });
                                                },
                                            },
                                            t,
                                        );
                                    }),
                      }),
              ],
          })
        : null;
}
var a9 = n(123292),
    a6 = n(853735),
    a3 = n(932001),
    a7 = n(84511),
    a4 = n(332772),
    a5 = n(575593),
    a8 = n(587895),
    re = n(44120),
    rt = n(532794),
    rn = n(317560),
    ri = n(533406),
    rl = n(661492),
    rs = n(212387),
    ra = n(662349),
    rr = n(369005);
function ro(e) {
    let { title: t, description: n, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: rr.S,
        children: [
            (0, l.jsx)(ta.D, {
                onClick: i,
                className: rr.H,
                children: (0, l.jsx)(S.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t,
                }),
            }),
            (0, l.jsx)(S.E, { variant: "text-xs/medium", color: "text-default", children: n }),
        ],
    });
}
var rd = n(479026),
    rc = n(699976),
    ru = n(788868),
    rh = n(80223),
    rA = n(997990);
let rg = rc.Z.SIZE_90;
function r_(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: i,
            isSingleCard: a,
            style: o,
            skuPreviewStyle: d,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: A,
            singleCardInfo: g,
        } = e,
        { trackUserProfileWishlistAction: _ } = (0, sq.NJ)(),
        m = s.useCallback(() => {
            _({
                action: aT.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: i,
                productLines: new Set([t.productLine]),
            }),
                h();
        }, [t, i, h, _]),
        p = s.useCallback(() => {
            _({
                action: aT.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: i,
                productLines: new Set([t.productLine]),
            }),
                A();
        }, [A, t.id, i, t.productLine, _]),
        { label: f, icon: E, isPromptingPurchase: C } = (0, ra.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 }),
        [x, I] = s.useState(!1);
    return (0, l.jsxs)(ai.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: rh.kL,
                children: (0, l.jsx)(rs.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: t,
                    user: n,
                    spec: rg,
                    cardStyle: r()(rh.Nr, o),
                    skuPreviewStyle: r()(rh.ho, d),
                    skuAssetClassName: x ? c : void 0,
                    onClick: m,
                    "aria-label": K.intl.formatToPlainString(K.t.ZBB4Ty, { productName: (0, rl.TC)(t) }),
                    onHoverOrFocusChange: I,
                    children: (0, l.jsx)(ra.A, {
                        spec: rg,
                        onClick: C ? p : m,
                        isHoveringOrFocusing: x,
                        label: f,
                        icon: E,
                    }),
                }),
            }),
            a && (0, l.jsx)(ro, { title: g.title, description: g.description, onClick: m }),
        ],
    });
}
function rm(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...a } = e,
        r = (0, eI.bG)([a8.A], () => a8.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, G.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        d = s.useCallback(() => {
            (0, ri.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        c = s.useCallback(() => {
            (0, rn.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: o,
            });
        }, [t.id, t.applicationId, n, o]),
        u = s.useMemo(
            () => ({ title: t.name, description: K.intl.format(K.t["CqpEC+"], { applicationName: r?.name }) }),
            [t.name, r?.name],
        );
    return (0, l.jsx)(r_, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: c,
        onPurchaseClick: d,
        singleCardInfo: u,
        ...a,
    });
}
function rp(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...a } = e,
        o = s.useCallback(() => {
            (0, re.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, rd.e)({ sku: t, giftRecipient: n, giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a5.R.PROFILE_EFFECT:
                case a5.R.NAMEPLATE:
                    return;
                case a5.R.AVATAR_DECORATION:
                    return r()(rh.ML, rh._P);
                default:
                    return r()(rh.ML, rh.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        u = s.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return K.intl.string(K.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a5.R.AVATAR_DECORATION:
                            return K.intl.string(K.t["7v0T9P"]);
                        case a5.R.PROFILE_EFFECT:
                            return K.intl.string(K.t.wR5wOo);
                        case a5.R.NAMEPLATE:
                            return K.intl.string(K.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, l.jsx)(r_, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        singleCardInfo: u,
        ...a,
    });
}
function rf(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...a } = e,
        r = s.useCallback(() => {
            (0, rt.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.id,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        o = s.useMemo(() => ({ title: t.name, description: K.intl.string(K.t.Ipxkog) }), [t.name]);
    return (0, l.jsx)(r_, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rA.MO,
        disableRiveHover: !0,
        singleCardInfo: o,
        ...a,
    });
}
function rE(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rm, { sku: t, ...n });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rp, { sku: t, ...n });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rf, { sku: t, ...n });
        default:
            return null;
    }
}
var rC = n(535089),
    rx = n(617348);
function rI(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: i, wishlistId: a, title: r } = e,
        { analyticsLocations: o } = (0, G.Ay)(),
        { trackUserProfileWishlistAction: d } = (0, sq.NJ)(),
        c = (0, s.useId)();
    (0, a4.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let u = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && d({ wishlistId: t, action: n, productLines: i });
            },
            [d],
        ),
        h = (0, s.useMemo)(() => {
            let e = [];
            for (let n = 0; n < t.length && e.length < 3; n++) {
                let i = t[n];
                e.push(i);
            }
            return e;
        }, [t]),
        A = (0, s.useMemo)(() => new Set(h.map((e) => e.skuProductLine)), [h]),
        _ = (0, rC.A)({ wishlistId: a ?? null, onAction: u, productLines: A }),
        m = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, l.jsx)(
                                  rE,
                                  {
                                      sku: e.sku,
                                      index: s,
                                      wishlistOwner: n,
                                      wishlistId: a,
                                      analyticsLocations: o,
                                      onViewWishlist: i,
                                      isSingleCard: 1 === t.length,
                                  },
                                  e.skuId,
                              ),
                    )
                    .filter(lL.Vq),
            [o, i, n, t.length, h, a],
        ),
        [p, f] = (0, a3.RF)(
            g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, a6.c)(g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        E = p !== g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === m.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": c,
              children: (0, l.jsxs)(s1.A.Overlay, {
                  ref: _,
                  className: rx.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rx.wx,
                          children: [
                              (0, l.jsx)(R.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? K.intl.string(K.t["7lZ31J"]),
                              }),
                              t.length > 3 &&
                                  (0, l.jsx)(a9.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: K.intl.string(K.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsxs)(sk.F, {
                          children: [
                              (0, l.jsx)("div", { className: rx.vY, children: m }),
                              !E &&
                                  A.has(er.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, l.jsx)(a7.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: rx.EK,
                                      onDismiss: () => f(le.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function rb(e) {
    let { user: t, currentUser: n, channel: i } = e,
        a = __OVERLAY__,
        r = (0, lC.Ay)(t.id),
        o = (0, au.A)(r?.profileFrame?.skuId, "UserProfileSidebar"),
        d = (0, sW.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, G.Ay)(O.A.USER_PROFILE_SIDEBAR),
        h = (0, sq.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id }),
        g = s.useRef(null),
        { isHoveringOrFocusing: _, isHovering: m } = (0, sz.A)(g),
        p = (0, a_.fC)(),
        f = (0, ac.z)({ opacity: +(null != p.interactionType), config: { duration: 150 } }),
        E = (e) => {
            (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h, ...e });
        },
        C = r?.widgets != null && r.widgets.length > 0,
        { defaultWishlistId: x } = (0, A.cf)([ag.A], () => ({ defaultWishlistId: ag.A.getFirstWishlistId(t.id) })),
        { wishlist: I } = (0, aA.fw)({ wishlistId: x, userId: t.id });
    (0, ah.A)(I);
    let b = s.useMemo(() => (null == I ? null : I.items.filter((e) => !e.isOwned)), [I]);
    return (0, l.jsx)(G.f5, {
        value: u,
        children: (0, l.jsx)(sq.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(a_.Hl, {
                value: p,
                children: (0, l.jsxs)(s1.A, {
                    ref: g,
                    user: t,
                    displayProfile: r,
                    themeType: s8.d.SIDEBAR,
                    themeOverride: d,
                    privateBanner: r?.private === !0 ? (0, l.jsx)(ap.A, {}) : void 0,
                    children: [
                        null != p.interactionType && (0, l.jsx)(ad.animated.div, { style: f, className: ae.tB }),
                        (0, l.jsxs)(no.d_, {
                            className: null != o ? ae.It : void 0,
                            children: [
                                (0, l.jsxs)(s6.A, {
                                    children: [
                                        (0, l.jsx)(aC.A, { user: t, themeType: s8.d.SIDEBAR }),
                                        (0, l.jsx)(av, { user: t }),
                                        t.bot ? (0, l.jsx)(aE.A, { user: t }) : (0, l.jsx)(ay.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ae.wx,
                                    children: [
                                        (0, l.jsx)(sJ.A, {
                                            user: t,
                                            displayProfile: r,
                                            themeType: s8.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !_,
                                            className: ae.vK,
                                        }),
                                        (0, l.jsx)(am.A, { userId: t.id, className: ae.oR }),
                                        (0, l.jsx)(sX.A, {
                                            user: t,
                                            displayProfile: r,
                                            channelId: i.id,
                                            themeType: s8.d.SIDEBAR,
                                            onOpenProfile: a ? void 0 : E,
                                        }),
                                        (0, l.jsx)(aR.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: s8.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(aW, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: r,
                                    channel: i,
                                    isHoveringOrFocusing: null == p.interactionType && _,
                                    onOpenProfile: a ? void 0 : E,
                                }),
                                C &&
                                    (0, l.jsx)("div", {
                                        className: ae.sJ,
                                        children: (0, l.jsx)(af.A, {
                                            user: t,
                                            widgets: r.widgets,
                                            onOpenUserProfileModal: E,
                                        }),
                                    }),
                                null != b &&
                                    b.length > 0 &&
                                    (0, l.jsx)("div", {
                                        className: ae.vS,
                                        children: (0, l.jsx)(rI, {
                                            profileOwner: t,
                                            unownedWishlistItems: b,
                                            wishlistId: x,
                                            title: K.intl.string(K.t["7lZ31J"]),
                                            onClick: () => {
                                                E?.({ tabSection: aT.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, l.jsx)(a2, { user: t, channelId: i.id }),
                            ],
                        }),
                        !a &&
                            (0, l.jsx)(s5, {
                                context: h,
                                analyticsLocations: u,
                                profileFrame: o,
                                handleOpenProfile: E,
                            }),
                        r?.profileEffect != null && (0, l.jsx)(sY.A, { skuId: r?.profileEffect?.skuId, isHovering: m }),
                    ],
                }),
            }),
        }),
    });
}
function rS(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, A.bG)([$.default], () => $.default.getUser(n)),
        a = (0, A.bG)([$.default], () => $.default.getCurrentUser()),
        r = lx(),
        [o, d] = (0, sH.A)(n);
    if (
        (s.useEffect(() => {
            (0, sF.A)(i ?? n, {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [i, n, t.id]),
        null == i || null == a || !r)
    )
        return null;
    let c = `user-profile-sidebar-heading-${i.id}`,
        u = sB.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": c,
        children: (0, l.jsx)(sk.F, {
            component: (0, l.jsx)(sV.A, {
                children: (0, l.jsx)(sk.H, { id: c, children: K.intl.format(K.t.KRe1Fk, { name: u }) }),
            }),
            children: o
                ? (0, l.jsx)(ao, { user: i, currentUser: a, onHide: d, ...e })
                : i.isNonUserBot()
                  ? (0, l.jsx)(an, { user: i, currentUser: a, ...e })
                  : (0, l.jsx)(rb, { user: i, currentUser: a, ...e }),
        }),
    });
}
var rN = n(522556),
    rT = n(447696),
    rv = n(684407),
    ry = n(95701),
    rR = n(919638),
    rj = n(763827),
    rL = n(140130),
    rO = n(726509),
    rG = n(462887),
    rM = n(276293),
    rD = n(96361),
    rU = n(745652);
let rP = () => {
    let e = (0, sW.Ay)();
    s.useEffect(() => {
        ej.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, rG.M)(e) ? rU : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rD.kL,
        children: [
            (0, l.jsxs)(iz.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iz.A.Icon, { icon: rM.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iz.A.Title, { children: K.intl.string(K.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rD.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rD.j0, src: t }),
                    (0, l.jsx)(R.D, {
                        className: rD.Zd,
                        variant: "heading-lg/medium",
                        children: K.intl.string(K.t.m9gRVN),
                    }),
                    (0, l.jsx)(S.E, {
                        className: rD.fh,
                        variant: "text-md/normal",
                        children: K.intl.string(K.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rw = n(943712),
    rk = n(402216),
    rV = n(746080),
    rB = n(806931),
    rH = n(165610),
    rF = n(516607),
    rW = n(964623);
let rK = () => (0, l.jsx)("div", { className: rW.wG, children: (0, l.jsx)(m.y, {}) }),
    rY = (0, tG.Fe)({
        createPromise: () => Promise.all([n.e("49681"), n.e("42516"), n.e("18771")]).then(n.bind(n, 189996)),
        webpackId: 189996,
        renderLoader: rK,
        name: "ForumChannel",
    }),
    rz = () =>
        Promise.all([
            n.e("40393"),
            n.e("33773"),
            n.e("53668"),
            n.e("84114"),
            n.e("6214"),
            n.e("41054"),
            n.e("52125"),
            n.e("67196"),
            n.e("21485"),
            n.e("63139"),
            n.e("92461"),
        ]).then(n.bind(n, 540462)),
    rq = (0, tG.Fe)({ createPromise: rz, webpackId: 540462, name: "ChannelCall", renderLoader: rK }),
    rX = () =>
        Promise.all([
            n.e("40393"),
            n.e("33773"),
            n.e("53668"),
            n.e("84114"),
            n.e("6214"),
            n.e("41054"),
            n.e("52125"),
            n.e("67196"),
            n.e("66308"),
            n.e("97085"),
        ]).then(n.bind(n, 67319)),
    rQ = (0, tG.Fe)({ createPromise: rX, webpackId: 67319, name: "StageChannelCall", renderLoader: rK }),
    rJ = (0, tG.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("30501"), n.e("47810"), n.e("62368")]).then(n.bind(n, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: () => (0, l.jsx)(lV, {}),
    }),
    rZ = (0, tG.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("28136"), n.e("15373"), n.e("30501"), n.e("13848")]).then(n.bind(n, 538409)),
        webpackId: 538409,
        name: "GuildMemberModViewSidebar",
    });
class r$ extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sP.d)("guild_channel"), this.maybePreloadChannelCall();
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.props.channel?.type !== e.channel?.type && this.maybePreloadChannelCall(),
            this.openChannelModal();
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === er.rbe.GUILD_VOICE ? rz() : e === er.rbe.GUILD_STAGE_VOICE && rX();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, nH.iN)(e.id);
    };
    _handleContextMenu = (e, t) => {
        switch (t.type) {
            case er.rbe.GUILD_VOICE:
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                this.openChannelContextMenu(e, t);
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case er.rbe.DM:
                this.openDMContextMenu(e, t);
        }
    };
    handleContextMenu = (e) => {
        d()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel);
    };
    handleParentContextMenu = (e) => {
        d()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel);
    };
    handleThreadSidebarResize = (e, t) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: t });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        d()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, sw.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [O.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await n.e("59545").then(n.bind(n, 22496));
                return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i });
            });
    }
    openThreadContextMenu(e, t) {
        d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                return (n) => (0, l.jsx)(e, { ...n, channel: t });
            });
    }
    openDMContextMenu(e, t) {
        d()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = $.default.getUser(t.getRecipientId());
        d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("39778"), n.e("44031")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(rV.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ir.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tl.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== rB.lp.STREAM
            ? null
            : (0, l.jsx)(
                  is.A,
                  { size: rk.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: t,
            isLurking: n,
            showCall: i,
            showActivityPanel: s,
            showFramePanel: a,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let r = [];
        if (e.isSystemDM()) return r;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
                break;
            case er.rbe.DM:
                r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(li, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    r.push((0, l.jsx)(ll.Ay, { channel: e, tooltip: K.intl.string(K.t.Xjlbvs) }, "invite")),
                    r.push((0, l.jsx)(lI, { channel: e, showCallOrActivityPanel: i || s || a }, "profile")),
                    r.push((0, l.jsx)(lA, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(li, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, l.jsx)(ll.Ay, { channel: e, tooltip: K.intl.string(K.t.AQAPts) }, "invite")),
                    r.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, l.jsx)(nQ, { channel: e })),
                    null == t || t.isForumLikeChannel() || r.push((0, l.jsx)(sR, { channel: t }, "browser")),
                    e.isVocalThread() && r.push((0, l.jsx)(lp, { channel: e }, "thread-call")),
                    r.push((0, l.jsx)(n9, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, l.jsx)(iy, { channelId: e.id }, "members")),
                    null != t && (0, eE.pk)(e) && r.push((0, l.jsx)(iP, { channel: e }, "summaries")),
                    r.push((0, l.jsx)(sL, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                r.push((0, l.jsx)(sR, { channel: e }, "browser")),
                    n || r.push((0, l.jsx)(iR.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    (0, ts.f)("channel_header") && r.push((0, l.jsx)(iT, { channelId: e.id }, "conversations")),
                    r.push((0, l.jsx)(iy, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && r.push((0, l.jsx)(iP, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                n ||
                    (r.push((0, l.jsx)(iY, { channel: e }, "forum-onboarding")),
                    r.push((0, l.jsx)(iR.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                r.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
        }
        return r;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let t = [];
        if (e.isSystemDM()) return t;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
                break;
            case er.rbe.GROUP_DM:
                t.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: rW.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: K.intl.string(K.t["3aOv+h"]),
                      onClick: () =>
                          (0, _.openModalLazy)(async () => {
                              let { default: e } = await n.e("66464").then(n.bind(n, 464035));
                              return (n) => (0, l.jsx)(e, { channel: t, ...n });
                          }),
                  }),
              })
            : null;
    };
    renderHeaderBar = () => {
        let {
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: i,
            guildId: s,
            showCall: a,
            showActivityPanel: o,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != t, "Should not be null if channel is not null.");
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, nH.iN)(e.id) : void 0,
            g = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            _ = o || c,
            m = a || _;
        return (0, l.jsxs)("div", {
            className: rW.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, l.jsxs)(
                            iz.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rW.DD, a, { [rW.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: m,
                                hidden: c,
                                "aria-label": K.intl.string(K.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(nE.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, nE.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: i,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: g,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: rW.u8,
                                              children: (0, l.jsx)(p.$, {
                                                  onClick: () => (0, tE.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: K.intl.string(K.t.k5WiPf),
                                              }),
                                          })
                                        : (0, nE.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(lP.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t, spoilerGatingChannelId: n } = this.props;
        return !t && null == n && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(rQ, { channel: e, popoutType: tn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    rq,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: tn.N.NO_POPOUT,
                    },
                    `call-${e.id}`,
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((d()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, l.jsx)(e7, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: t,
            needSubscriptionToAccess: n,
            channelIsContentGated: i,
            spoilerGatingChannelId: s,
            inCall: a,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), n))
            return (d()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(ig, { guildId: t.id })
                : (0, l.jsx)(io.H, { guildId: t.id, children: (0, l.jsx)(iI, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(rN.A, { guild: t, channelId: e.id });
        if (null != s) return (0, l.jsx)(lW.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (a && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                d()(null != t, "directory channels must exist within a guild"), (0, l.jsx)(nA, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            d()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(rY, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (0, l.jsx)(np.A, { channel: e, guild: t, chatInputType: ti.oU.NORMAL }, null != t ? t.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: i,
            section: s,
            showCall: a,
            showActivityPanel: r,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (s === er.YvQ.PROFILE && e.isPrivate() && !a && !r && !o)
            return (0, l.jsx)(rS, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(lU, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rO.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(rO.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, l.jsx)(e_, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (s === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(tO, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, l.jsx)(rJ, { guildId: n?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: i,
            showWelcomeModal: s,
            isLurking: a,
            isUnavailable: r,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                r ||
                i ||
                (o &&
                    (0, _.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => ia(lT.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, _.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("10585").then(n.bind(n, 954784));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, rT.ry)(t, a), modalKey: "Guild Welcome Screen Modal" },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: t,
                section: n,
                channelSidebarState: i,
                guildSidebarState: s,
                width: a,
                channelIsContentGated: r,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == s && null == i) return null;
        if (n === er.YvQ.SIDEBAR_CHAT && null != i) {
            if (r || null != o) return null;
            switch (i.type) {
                case lH.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sf, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lH.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? it : sU;
                    e = (0, l.jsx)(n, { channelId: i.channelId });
                    break;
                case lH.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sU, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case lH.PE.VIEW_CHANNEL:
                case lH.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== lH.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: rW.uC,
                    children: (0, l.jsx)(rZ, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => lB.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && er.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - er.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(rL.A, {
                sidebarType:
                    t?.type != null && er.kvI.GUILD_THREADS_ONLY.has(t.type) ? rL.X.PostSidebar : rL.X.ThreadSidebar,
                maxWidth: c,
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: t,
                formattedChannelName: n,
                isUnavailable: i,
                layout: s,
                section: a,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (i) return (0, l.jsx)(rP, {});
        if (null == e) return (0, l.jsx)(rw.A, { channelId: this.props.channelId });
        let g = a === er.YvQ.SIDEBAR_CHAT,
            _ = null != d && !g,
            m = !e.isForumLikeChannel() && !o,
            p = t?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tM.HI, { location: p, subsection: n ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rW.TE, { [rW.js]: g || _, [rW.jl]: g && h }),
                    children: [
                        m
                            ? (0, l.jsx)(ep.A, {
                                  style: { right: g ? u : void 0 },
                                  className: rW.x4,
                                  channel: e,
                                  draftType: n5.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(rW.Qs, { [rW.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r0 = (0, ef.A)(r$),
    r1 = s.memo(function (e) {
        var t, n;
        let i,
            { providedChannel: a } = e,
            [r, o] = s.useState(null),
            d = (0, A.bG)([ew.A], () => ew.A.getChannelId()),
            c = (0, A.bG)([ew.A], () => ew.A.getVoiceChannelId()),
            m = (0, A.bG)([eP.A], () => a ?? eP.A.getChannel(d), [d, a]),
            p = (0, n_.DZ)(),
            f = (0, n_.e4)(m, "ConnectedChannel"),
            C = (0, A.bG)([eP.A], () => eP.A.getChannel(c), [c]),
            x = f?.parent_id,
            I = (0, A.bG)([eP.A], () => eP.A.getChannel(x), [x]),
            b = (0, A.bG)([t9.A], () => t9.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: S } = (0, id.A)(f?.id ?? void 0),
            N = (0, A.bG)([tt.A], () => {
                let e = null != d ? tt.A.getParticipants(d) : [],
                    t = null != d ? tt.A.getActivityParticipants(d) : [];
                return e.length - t.length > 0;
            }, [d]),
            T = (0, il.A)(),
            v = (0, A.bG)([ew.A], () => (T?.channelId ?? ew.A.getVoiceChannelId()) === f?.id),
            y = (0, A.bG)([ex.Ay], () => (null != f ? ex.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, A.bG)([rj.A], () => rj.A.isConnected()),
            j = (0, eC.A)(R),
            L = R && !1 === j;
        s.useEffect(() => {
            v &&
                L &&
                null != y &&
                null != f &&
                E.A.selectParticipant(
                    f.id,
                    (0, te.Qt)({ applicationId: y.applicationId, instanceId: y.compositeInstanceId }),
                );
        }, [L, f, v, y]);
        let O = (0, A.bG)([ex.Ay], () => ex.Ay.getCurrentEmbeddedActivity()),
            G = (0, A.bG)([ex.Ay], () => ex.Ay.getActivityPanelMode()),
            M = null != O && !(0, eT.A)(f?.id) && G === e$.Gd.PANEL,
            D = (0, A.bG)(
                [i5.A],
                () => null != f && f.isVocalThread() && !u().isEmpty(i5.A.getVoiceStatesForChannel(f.id)),
                [f],
            ),
            U = null != f && f.isPrivate() && !M && N,
            P = f?.isGuildVocal() || U || D,
            w = (0, A.bG)([ii.A], () => ii.A.getFrameLayoutMode() === rH.y.FOCUSED),
            { welcomeModalChannelId: k } = (0, h.zy)(),
            V = (0, A.bG)([n$.A], () => null != f && n$.A.isLurking(f.guild_id), [f]),
            B = (0, A.bG)([rv.A], () => rv.A.hasSeen(f?.guild_id, V), [f, V]),
            H = (0, A.bG)(
                [tt.A, ex.Ay],
                () =>
                    null != ex.Ay.getConnectedActivityLocation() && ex.Ay.getActivityPanelMode() === e$.Gd.PANEL
                        ? ex.Ay.getFocusedLayout() === e$.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != d
                          ? tt.A.getLayout(d)
                          : er.DUB.NORMAL,
                [d],
            ),
            F =
                ((t = b?.id),
                (i = (0, A.bG)([t9.A, lN, $.default, X.Ay], () => {
                    let e = t9.A.getGuild(t);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === lN.hasViewedPrompt(lT.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = $.default.getCurrentUser();
                    if (null == n) return null;
                    let i = X.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != i && (i || ia(lT.REAL_NAME_PROMPT, t));
                }, [i, t]),
                !0 === i),
            W =
                ((n = b?.id),
                (0, A.bG)([eP.A, t9.A, ew.A], () => {
                    let e = t9.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = eP.A.getChannel(k);
                    return k === ew.A.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, ry.ke)(t.type);
                })),
            { section: K, channelSidebarState: Y } = (0, A.cf)(
                [iS.Ay],
                () => ({ section: iS.Ay.getSection(d, f?.isDM()), channelSidebarState: iS.Ay.getSidebarState(d) }),
                [d, f],
            ),
            z = b?.id,
            q = (0, A.bG)([iS.Ay], () => iS.Ay.getGuildSidebarState(z), [z]),
            J = (0, ly.lI)(),
            Z = (0, nm.Ay)(f),
            ee = (0, nm.Ay)(f, !0),
            et = (0, A.bG)([tt.A], () => (null != f ? tt.A.getSelectedParticipant(f.id) : null)),
            ei = (0, e8.vL)(f),
            el = (0, lF.Uf)(f),
            es = null != f && c === f.id,
            ea = null != f && f.isGuildStageVoice();
        !(function (e) {
            let { onTransition: t } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: n } = e,
                        i = (0, eN.H)(n);
                    if (null == i || !(0, eT.A)(i)) return;
                    ew.A.getVoiceChannelId() !== i && (await (0, e4.A)({ channelId: i }));
                    let l = eP.A.getChannel(i),
                        s = l?.guild_id;
                    setTimeout(() => {
                        (0, e5.A)(s, n), t?.();
                    }, 0);
                }
                return (
                    en._.subscribe(er.jej.OPEN_EMBEDDED_ACTIVITY, e),
                    () => {
                        en._.unsubscribe(er.jej.OPEN_EMBEDDED_ACTIVITY, e);
                    }
                );
            }, [t]);
        })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, tE.JK)();
                if (e?.location?.state?.stageInviteKey === rF.J2) {
                    let { channelId: t } = (0, lv.vu)(e?.location?.pathname) ?? {};
                    null != t && o(t);
                }
            }, []);
        let eo = { channel: f, inCurrentVoiceChannel: es },
            ed = s.useRef(eo);
        s.useEffect(() => {
            ed.current = eo;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ed.current;
                null != r && null != e && ea && e.id === r && !t && ((0, lK.av)(e), o(null));
            }, [r, ea]);
        let ec = (0, eE.cI)(f),
            eu = null != f && f.isPrivate(),
            eh = (0, eC.A)(eu),
            eA = (0, eC.A)(f?.id);
        s.useEffect(() => {
            let e = eh && !eu,
                t = eh && eu && f?.id !== eA;
            (e || t) && (0, ng.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: le.i.AUTO });
        }, [f?.id, eA, eu, eh]);
        let eg = (0, _.useHasAnyModalOpen)();
        return (0, l.jsx)(r0, {
            guildId: f?.guild_id,
            channelId: d,
            channel: f,
            channelName: Z,
            formattedChannelName: ee,
            parentChannel: I,
            voiceChannel: C,
            layout: H,
            needSubscriptionToAccess: S,
            isLurking: V,
            hasModalOpen: eg,
            section: K,
            channelSidebarState: Y,
            guildSidebarState: q,
            guild: b,
            showCall: !S && P,
            showActivityPanel: M,
            showFramePanel: w,
            channelIsContentGated: ei,
            spoilerGatingChannelId: el,
            isMobile: (0, A.bG)([Q.A], () => f?.type === er.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, A.bG)([rR.A], () => f?.guild_id != null && rR.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: F,
            showWelcomeModal: !B && W,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && b?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([i5.A], () => ({ hasVideo: null != f && i5.A.hasVideo(f.id) }), [f]),
            inCall: es,
            selectedParticipant: et,
            showChannelSummaries: ec,
            showHeaderGuildBreadcrumb: p || J,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: M,
            embeddedActivity: O,
        });
    });
