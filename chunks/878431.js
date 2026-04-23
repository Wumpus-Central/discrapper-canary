n.d(t, { A: () => a1 }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(284009),
    d = n.n(o),
    c = n(735438),
    u = n.n(c),
    h = n(873263),
    A = n(17928),
    _ = n(554146),
    g = n(192308),
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
    er = n(110574),
    ea = n(652215),
    eo = n(784503),
    ed = n(540808);
let ec = es.Ay.getEnableHardwareAcceleration(),
    eu = 44 + er.b,
    eh = s.memo(function (e) {
        let { channel: t, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, A.bG)([Z.A], () => Z.A.isTyping(t.id, r)),
            c = (0, A.bG)([X.Ay], () => X.Ay.getMember(t.guild_id, r)),
            u = (0, A.bG)(
                [H.A],
                () => (c?.colorRoleId != null ? H.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, A.bG)([$.default], () => $.default.getUser(r)),
            _ = (0, A.bG)([$.default], () => $.default.getCurrentUser()),
            g = h?.id === _?.id,
            m = (0, A.bG)([Q.A, J.A], () => (g ? J.A.getStatus() : Q.A.getStatus(r, t.guild_id))),
            p = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, A.yK)([Q.A, J.A], () => (g ? J.A.getActivities() : Q.A.getActivities(r, t.guild_id))),
            E = (0, A.bG)([q.A], () => q.A.getAnyStreamForUser(r)),
            I = (0, x.rm)(r),
            S = (0, A.bG)([F.A], () => F.A.canUserViewChannel(t.id, i, r)),
            N = h?.id != null && h.id === a,
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
                en._.dispatch(ea.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    en._.dispatchToLastSubscribed(ea.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    j.A.startTyping(t.id);
            }, [h, t]),
            y = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, U.K4)({
                            guildId: t.guild_id,
                            location: { section: ea.JJy.THREAD_MEMBER_LIST, object: ea.ZSU.BOOST_GEM_ICON },
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
                return (0, l.jsx)(er.A, {
                    ref: o,
                    onContextMenu: T,
                    shouldAnimateStatus: ec,
                    user: h,
                    currentUser: _,
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
            r = (0, P.$7)({ roleId: t, guildId: s, size: 16 });
        return t === ea.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ed.lL, children: (0, l.jsx)("div", { className: ed.k1 }) })
            : (0, l.jsxs)(D.A, {
                  className: ed.lL,
                  "aria-label": K.intl.formatToPlainString(K.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(w.A, { className: ed.UT, ...r }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", i] }),
                  ],
              });
    }),
    e_ = s.memo(function (e) {
        let { channel: t } = e;
        return t.type === ea.rbe.PRIVATE_THREAD
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
function eg(e) {
    var t, n;
    let i,
        r,
        o,
        d,
        c,
        { channel: h, guild: _ } = e,
        g = `members-${h.id}`,
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
                r = null == t,
                a = s.useMemo(() => {
                    if (r) return Y;
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
                }, [n, l, i, r]);
            return null != l ? a : Y;
        })(h.id, _),
        f = p.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: E, listRef: C } =
            ((t = g),
            (n = eu),
            (i = (0, A.bG)([L.A], () => L.A.keyboardModeEnabled)),
            (r = s.useRef(null)),
            (o = s.useCallback(
                (e, t) => {
                    let i = r.current;
                    if (null == i) return;
                    let l = parseInt(t, 10),
                        [s, a] = i.getSectionRowFromIndex(l),
                        o = 0 === s && 0 === a ? n : 0;
                    i.scrollToIndex({
                        section: s,
                        row: a,
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
                        let t = r.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (c = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = r.current;
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
                listRef: r,
            }),
        b = 0 === p.length || p.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(ea.HAw.MEMBER_LIST_VIEWED, {
                channel_id: h.id,
                channel_type: h.type,
                guild_id: h.guild_id,
            });
        }, [h.guild_id, h.id, h.type]),
        b)
    )
        return (0, l.jsx)(em, { channel: h });
    let S = u().omit(E.containerProps, ["ref"]),
        N = ei.wT(_);
    return (0, l.jsx)(G.f5, {
        value: m,
        children: (0, l.jsx)(x.hD, {
            navigator: E,
            children: (0, l.jsx)(T.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ed.yg, ed.ML, eo.kL),
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
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: _.id },
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
                                footerHeight: (e) => 80 * (p[e] === f && h.type === ea.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    p[e.section] === f ? (0, l.jsx)(e_, { channel: h }, "footer") : null,
                                innerAriaLabel: K.intl.string(K.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: p.map((e) => e.userIds.length),
                                fade: !0,
                                ...S,
                                ...e,
                            },
                            g,
                        ),
                    }),
            }),
        }),
    });
}
function em(e) {
    let { channel: t } = e;
    return (0, l.jsxs)("div", {
        className: a()(eo.p$, eo.kL, ed.yg, ed.ML, ed.ol),
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
        r = s.useRef(null),
        a = (0, A.bG)([ex.Ay], () => ex.Ay.getFocusedLayout() === e$.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? e$.E8.NO_CHAT : e$.E8.RESIZABLE;
            (0, ek.i5)(e);
        }, [a]),
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
            r.current?.focus();
        }, []);
    (0, eZ.Vo)({ event: ea.jej.FOCUS_CHAT_BUTTON, handler: h });
    let _ = a ? K.intl.string(K.t["5MstTl"]) : K.intl.string(K.t.kkKapG),
        g = [_];
    u > 0 && g.push(K.intl.formatToPlainString(K.t["3l1GOx"], { mentionCount: u })),
        d > 0 && g.push(K.intl.string(K.t.x5zAGZ));
    let m = (0, A.bG)([ex.Ay], () => ex.Ay.getFocusedLayout()),
        p = u > 0 ? u : d,
        f = p > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eM.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: _,
                "aria-label": g.join(", "),
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
let e6 = eW.DN.SIZE_32,
    e9 = { [e$.E8.NO_CHAT]: e2.Oo, [e$.E8.RESIZABLE]: e2.Ig };
function e3(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        r = (0, eH.A)(),
        o = (0, A.yK)([ex.Ay], () => ex.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        d = (0, eN.H)(n),
        c = (0, A.bG)([eP.A], () => eP.A.getChannel(d)),
        u = (0, eV.IQ)(o),
        h = (0, eV.Rz)(u),
        _ = s.useCallback(() => {
            (0, ek.gk)(e$.Gd.PIP);
        }, []),
        g = s.useRef(null),
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
        R = (0, eB.A)(r?.id);
    if (!R) {
        let e = b.width,
            t = b.height;
        T
            ? ((t = b.width / e$.B5) > b.height && (e = (t = b.height) * e$.B5), (y = (b.height - t) / 2))
            : ((e = Math.min(b.height * e$.B5)) > b.width && (t = (e = b.width) / e$.B5), (v = (b.width - e) / 2));
    }
    let j = h.get(r?.id ?? ""),
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
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !L.A.useReducedMotion && (l || r);
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
    if (null == r) return null;
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
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e6), alt: n, className: e2.my }, e.id),
            },
            e.id,
        );
    };
    return (0, l.jsx)(f.N, {
        theme: ea.NJ8.DARK,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: a()(e2.iE, e9[m], e),
                ref: g,
                style: D,
                children: [
                    i?.(),
                    (0, l.jsx)(eO.A, { applicationId: r.id }),
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
                                          children: r?.name,
                                      }),
                                  }),
                            (0, l.jsx)("div", {
                                className: a()(e2.ht, { [e2.kK]: R }),
                                style: { paddingLeft: v, paddingRight: v, paddingTop: y, paddingBottom: y },
                                ref: I,
                                children: (0, l.jsx)(eF.A, { className: e2.pU, embedId: (0, eY.A)(n.id, r.id) }),
                            }),
                            null != O
                                ? (0, l.jsxs)("div", {
                                      className: e2.qr,
                                      children: [
                                          (0, l.jsx)(eW.Ay, {
                                              renderIcon: !1,
                                              users: P,
                                              size: e6,
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
                                                              onClick: _,
                                                              iconComponent: ey.g,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: e2.pt,
                                                      children: (0, l.jsx)(eD.A, {
                                                          applicationId: r.id,
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
                                                        (0, ej.zV)(ea.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, eK.A)({
                                                                onConfirm: async () => {
                                                                    r?.id != null &&
                                                                        null != d &&
                                                                        (await (0, ek.od)(r.id, d)),
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
                              resizableNode: g,
                              onResize: (e) => {
                                  en._.dispatch(ea.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), C(e);
                              },
                              onResizeEnd: (e) => {
                                  en._.dispatch(ea.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), x(e);
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
            activityPanelMode: r,
        } = (0, eI.cf)([ex.Ay], () => {
            let e = ex.Ay.getConnectedActivityLocation(),
                t = ex.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, eN.H)(e),
                connectedActivity: t,
                activityPanelMode: ex.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eI.bG)([eb.A], () => eb.A.getWindowOpen(ea.MLl.ACTIVITY_POPOUT));
    if (!(0, eS.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== e$.Gd.PANEL || null == o || a || null == i || null == s || (0, eT.A)(i)
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
    tr = n(939249),
    ta = n(408278),
    to = n(624479),
    td = n(691540),
    tc = n(857250),
    tu = n(97483),
    th = n(534890),
    tA = n(39623),
    t_ = n(952270),
    tg = n(835835),
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
            r = s.useMemo(() => {
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
            a =
                null == t
                    ? "unknown"
                    : r.failed > 0
                      ? "failed"
                      : r.unknown > 0
                        ? "unknown"
                        : r.passed > 0
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
                                        null == t || "unknown" === a
                                            ? "text-muted"
                                            : "passed" === a
                                              ? "status-positive"
                                              : "status-danger",
                                    children: null == t || "unknown" === a ? "—" : "passed" === a ? "✓" : "✗",
                                }),
                                (0, l.jsx)(S.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
                                    (r.passed > 0 || r.failed > 0 || r.unknown > 0) &&
                                    (0, l.jsx)(S.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            r.passed > 0 && `${r.passed} passed`,
                                            r.failed > 0 && `${r.failed} failed`,
                                            r.unknown > 0 && `${r.unknown} unknown`,
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
                scrollTarget: r,
                onJump: a,
                onHoverStart: o,
                onHoverEnd: d,
            } = e,
            c = s.useRef(null);
        s.useEffect(() => {
            null != r && null != c.current && c.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [r]);
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
            _ = Math.max(1, Math.round((h - u) / 1e3)),
            g = (0, tm.WR)({ seconds: _, getFormatter: tm.i }),
            m = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            p = null != m ? (0, tN.i)(m.content_json) : null;
        return (0, l.jsxs)(tr.D, {
            innerRef: c,
            className: `${tT.Nm}${i ? ` ${tT.Sk}` : ""}`,
            style: { backgroundColor: i ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => a(t),
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
                        (0, l.jsx)(ta.K, {
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
                        g,
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
        r = (0, A.bG)([tS.A], () => tS.A.hasMoreConversations(t.id, "before"), [t.id]),
        a = (0, A.bG)([tS.A], () => tS.A.hasMoreConversations(t.id, "after"), [t.id]),
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
        _ = s.useCallback((e) => {
            (0, tb.xI)(e.channel_id, e.id), (0, tE.pX)(ea.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tT.zr,
        children: [
            (0, l.jsx)(tg.Y9, {
                icon: th.o,
                title: "Conversations",
                children: (0, l.jsx)("div", {
                    className: tT.y6,
                    children: (0, l.jsx)(ta.K, {
                        icon: d ? tA.b : t_.G,
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
                    r &&
                        (0, l.jsx)("div", {
                            className: tT.f,
                            children: (0, l.jsx)(tr.D, {
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
                                      onJump: _,
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
                    a &&
                        (0, l.jsx)("div", {
                            className: tT.f,
                            children: (0, l.jsx)(tr.D, {
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
        r = s.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                    n.bind(n, 1310),
                );
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        guild: t,
                        source: ea.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: ea.JJy.HUB_WELCOME_CTA },
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
                onClick: r,
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
    t6 = n(71393),
    t9 = n(486020),
    t3 = n(860689),
    t7 = n(682557),
    t4 = n(253607);
let t5 = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(tr.D, {
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
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tV.A)(t);
    return (0, l.jsx)("div", {
        className: a()(t4.fc, { [t4.QX]: i }),
        children: (0, l.jsxs)(tZ.Ay, {
            children: [
                d
                    ? (0, l.jsx)(ev.m, {
                          text: K.intl.string(K.t.XnuOvN),
                          children: (0, l.jsx)(tZ.$n, {
                              onClick: () => {
                                  (0, g.openModalLazy)(async () => {
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
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
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
        [i, r] = s.useState(!1),
        a = null != (0, A.bG)([t6.A], () => t6.A.getGuild(t.guildId)),
        o = async () => {
            r(!0);
            try {
                a ? (0, t2.u)(t.guildId) : await tQ.A.joinGuild(t.guildId, { source: ea.Q4z.DIRECTORY_ENTRY });
            } finally {
                r(!1);
            }
        },
        d = t9.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, t1.mZ)() }),
        c = t9.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = K.intl.string(K.t.VJlc0S);
    return (
        a && (u = K.intl.string(K.t.cqWE2Z)),
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
                                variant: a ? "secondary" : "active",
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
            { ref: r, width: o } = (0, tz.Ay)(),
            d = null != o && o <= 800;
        return (0, l.jsxs)("div", {
            ref: r,
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
                        className: a()(ni.VW, { [ni.eO]: d }),
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
                                        className: a()(ni.MT, e),
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
            searchQuery: r,
            setSearchQuery: a,
            handleClearSearch: o,
            handleSearchKeyPress: d,
            currentCategoryId: c,
            handleSelectCategory: u,
            categoryCounts: h,
            allEntriesCount: A,
            isLoading: _,
        } = e;
        return (0, l.jsx)("div", {
            className: nn.$$,
            children: (0, l.jsxs)(tK.Gt, {
                className: nn.XG,
                children: [
                    (0, l.jsx)(nl, {
                        searchQuery: r,
                        setSearchQuery: a,
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
                    _ && null == n
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
var nr = n(370876),
    na = n(349288),
    no = n(364522),
    nd = n(792831),
    nc = n(916815);
let nu = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: i,
            mostRecentQuery: s,
            handleClearSearch: r,
            handleSearchKeyPress: a,
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
                          return (0, l.jsx)(na.Anchor, { onClick: o, children: e }, t);
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
                                (0, l.jsx)(tr.D, {
                                    onClick: r,
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
                            onClear: r,
                            onKeyDown: a,
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
            currentCategoryId: r,
            directoryEntries: a,
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
                            object: ea.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: ea.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
                null != a
                    ? (function (e, t) {
                          if (t !== nt.mU.ALL) return [{ entries: (0, nr._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, nr.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: K.intl.string(K.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, nr.DN)(s)).length > 0 &&
                                  n.push({ header: K.intl.string(K.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              n
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: _,
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
            et.default.track(ea.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [t.id, i.id, r]);
    let b = (0, tV.b)(t),
        S = s.useMemo(
            () =>
                b
                    ? () => {
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await n.e("96349").then(n.bind(n, 579735));
                              return (n) =>
                                  (0, l.jsx)(e, {
                                      ...n,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: r === nt.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [b, i.name, i.id, t.id, r],
        ),
        N = (e) => {
            0 !== f.trim().length &&
                e.key === nh.dh.ENTER &&
                (tP.Se(t.id, f),
                et.default.track(ea.HAw.GUILD_DIRECTORY_SEARCH, {
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
              searchFetching: _,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(m.y, { className: nn.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(tF, { guild: i, onAddGuild: S }) })
            : (0, l.jsx)(ns, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: N,
                  handleClearSearch: T,
                  handleCreateOrAddGuild: S,
                  currentCategoryId: r,
                  handleSelectCategory: (e) => {
                      tP.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var n_ = n(826673),
    ng = n(313281),
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
        r = K.intl.string(nX.default["Beo/7v"]),
        { firstMessage: a } = (0, nW.OA)(t),
        o = a?.messageSnapshots?.[0],
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
                      i.dispatch(ea.jej.POPOUT_CLOSE);
              },
              tooltip: r,
              icon: nF.q,
              "aria-label": r,
          })
        : null;
}
var nJ = n(780338),
    nZ = n(782603),
    n$ = n(857071),
    n0 = n(607508),
    n1 = n(914703),
    n2 = n(37411);
function n6(e) {
    let { channel: t } = e,
        n = (0, n0.X)(t),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, A.bG)([n$.A], () => null != t.guild_id && n$.A.isLurking(t.guild_id));
    if (
        (s.useEffect(() => {
            let e = () => r(!0);
            return (
                en._.subscribe(ea.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    en._.unsubscribe(ea.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        o)
    )
        return null;
    let d = K.intl.string(K.t.h850Ss);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(n1.A, { ...e, channel: t, navId: "thread-context", label: K.intl.string(K.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(nf.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: n === n2.CP.NO_MESSAGES ? nJ.a : nZ.X,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var n9 = n(747926);
function n3(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = K.intl.string(K.t["UKOtz+"]);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: r,
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
                ref: r,
                onClick: a,
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
        r = (0, nG.A)(t),
        a = (0, nP.A)(t),
        o = (0, nw.A)(t),
        d = (0, ny.A)(t),
        c = (0, nO.A)(t),
        u = (0, nU.A)(t.id),
        h = (0, nD.A)(t),
        A = (0, nj.A)(t),
        _ = (0, nR.A)(t),
        g = (0, nV.A)({ id: t.id, label: K.intl.string(K.t.DQ797g) }),
        m = (0, nk.A)(t),
        p = (0, nM.A)(t),
        f = (0, nv.$)(1e3);
    function E() {
        (0, nH.iN)(t.id);
    }
    function C(e) {
        let n = nx()(() => {
                en._.unsubscribe(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
            }, 250),
            i = (e) => {
                e.channelId === t.id && n();
            };
        en._.subscribe(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                en._.unsubscribe(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
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
            (0, l.jsxs)(nS.rX, { children: [a, o] }),
            (0, l.jsxs)(nS.rX, { children: [h, r, u, p] }),
            (0, l.jsxs)(nS.rX, {
                children: [
                    (0, l.jsx)(nS.Dr, {
                        id: "search",
                        label: K.intl.string(K.t["5h0QOP"]),
                        icon: nN.t,
                        trailingIndicator: { type: "icon", icon: nN.t },
                        action: function () {
                            C(() => {
                                en._.dispatch(ea.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
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
                                en._.dispatch(ea.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nS.rX, { children: [m, d, c, A] }),
            (0, l.jsxs)(nS.rX, { children: [_, g] }),
        ],
    });
}
function n4(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t.isForumPost() ? null : (0, l.jsx)(n6, { channel: t }),
            t.isModeratorReportChannel() ? (0, l.jsx)(nQ, { channel: t }) : null,
            (0, l.jsx)(n3, { channel: t }),
            (0, l.jsx)(nf.Ay.Icon, {
                icon: nT.P,
                tooltip: K.intl.string(K.t.cpT0Cq),
                onClick: () => (0, n9.xu)((0, nB.j)(t), n ?? t.parent_id),
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
        r = (0, A.bG)([eP.A], () => eP.A.getChannel(i?.parent_id)),
        a = (0, A.bG)([t6.A], () => t6.A.getGuild(i?.getGuildId())),
        o = (0, nm.Ay)(i),
        d = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || d.current || ((d.current = !0), (0, n8.rH)(i));
        }, [i]),
        null == i || null == a)
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
                    parentChannel: r,
                    channelName: o,
                    guild: a,
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
                children: (0, l.jsx)(np.A, { channel: i, guild: a, chatInputType: ti.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var ii = n(91242),
    il = n(857253),
    is = n(872363);
let ir = function (e, t) {
    tD.h.wait(() => {
        tD.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
    });
};
var ia = n(561446),
    io = n(300233),
    id = n(721592),
    ic = n(997509),
    iu = n(529942),
    ih = n(739455),
    iA = n(328312);
function i_(e) {
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
                                        ic.A.open(t, ea.BEX.ROLE_SUBSCRIPTIONS, void 0, ea.nd0.ROLE_SUBSCRIPTION_TIERS),
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
var ig = n(599941),
    im = n(251766),
    ip = n(950344),
    iE = n(217530),
    iC = n(817649),
    ix = n(601099);
function iI(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, im.e)({ guildId: t, channelId: n }),
        r = (0, ig.uk)(t),
        a = (0, ig.Tq)(t),
        o = (0, A.bG)([t6.A], () => t6.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, A.bG)([eP.A], () => eP.A.getChannel(n)),
        u = (0, nm.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of r) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [r]);
    return ((0, ip.A)({
        guildId: t,
        location: ea.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
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
                      children: a?.description,
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
                                      analyticsLocation: ea.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
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
        n = (0, A.bG)([iS.Ay], () => iS.Ay.getSection(t), [t]) === ea.YvQ.CONVERSATIONS,
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
        s = n === ea.YvQ.MEMBERS;
    return (0, l.jsx)(nf.In, {
        tooltip: s ? K.intl.string(K.t.Axvx8c) : K.intl.string(K.t.gxChDx),
        icon: y.n,
        onClick: () => {
            ej.Ay.trackWithMetadata(ea.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
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
        [i, r] = s.useState(!1),
        a = (0, A.bG)([eJ.Ay], () => eJ.Ay.hasUnreadPins(t.id), [t]),
        o = (0, nY.aL)(),
        d = s.useRef(null),
        c = s.useCallback(() => {
            n || r((e) => !e);
        }, [n]);
    function u(e) {
        e?.shiftKey || o.dispatch(ea.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                en._.subscribe(ea.jej.TOGGLE_CHANNEL_PINS, c),
                () => {
                    en._.unsubscribe(ea.jej.TOGGLE_CHANNEL_PINS, c);
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
            onRequestClose: () => r(!1),
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
                    showBadge: a,
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
            et.default.track(ea.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
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
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, iH.R)(t.id),
        d = (0, A.bG)(
            [iB.A, iK.A],
            () => !!(iB.A.getThreadIds(t.id, r, a, o).length > 0) || !!(iK.A.getThreads(t.id, r, a, o).length > 0),
            [t.id, r, a, o],
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
    i6 = n(442353),
    i9 = n(470710),
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
        en._.subscribe(ea.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        en._.unsubscribe(ea.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                mode: a,
                isProvisional: o,
            } = this.props;
        if (t || (n && a === ea._Of.VOICE)) return null;
        let d = r.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = K.intl.string(K.t.izMR7o)))
                : i7.Ay.supports(lt.O5.VIDEO)
                  ? s
                      ? ((c = K.intl.string(K.t.PHzjvX)), (u = !0))
                      : n && a === ea._Of.VIDEO
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
                channel: r,
                dismissibleContentTypes: a,
                isProvisional: o,
            } = this.props;
        if (t) return null;
        let d = r.isManaged(),
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
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === _.M.ACTIVITY_GDM_CALL_TOOLTIP
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
            r = () => iJ.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        t ? (0, i6.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        iZ.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(_.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, n_.Dr)(_.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: le.i.AUTO }),
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
        (0, i6.A)(t, e);
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
        r = (0, A.bG)([L.A], () => L.A.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, A.cf)([i9.A], () => ({
            callActive: i9.A.isCallActive(t.id),
            callUnavailable: i9.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([i4.A], () => ({
            notFriend: t.type === ea.rbe.DM && null != d && !i4.A.isFriend(d),
            isBlocked: t.type === ea.rbe.DM && null != d && i4.A.isBlocked(d),
        })),
        h = (0, A.bG)([$.default], () => $.default.getUser(d)),
        g = (0, nY.Us)(),
        m = [],
        p = (0, i$.A)(t.id),
        f = (0, A.bG)([i3.A], () => i3.A.hasLayers());
    return (p && !f && m.push(_.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(ln, {
              channel: t,
              mode: i,
              inCall: s,
              callActive: a,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: g,
              dismissibleContentTypes: m,
              useReducedMotion: r,
          });
}
var ll = n(95550),
    ls = n(765178),
    lr = n(231483),
    la = n(544231),
    lo = n(338510),
    ld = n(151119),
    lc = n(278941),
    lu = n(665909),
    lh = n(327337);
let lA = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lo.u)(t.id),
        r = (0, ld.S)(t.id),
        a = (0, lc.e)(t.id),
        o = (0, g.useHasAnyModalOpen)(),
        d = (0, A.bG)([i3.A], () => i3.A.hasLayers()),
        c = s.useCallback(
            () => (r ? K.intl.string(K.t["16QyDv"]) : null != a ? K.intl.string(K.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, _] = s.useState(c());
    s.useEffect(() => {
        null != a &&
            null != i &&
            (ls.O.announce(K.intl.string(K.t.acsXuG)),
            setTimeout(() => {
                (0, la.xi)(t.id, [a.id]);
            }, 5e3),
            (0, lu.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lu.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (ls.O.announce(K.intl.string(K.t["1dxCqG"])),
                setTimeout(() => {
                    (0, la.bg)(t.id);
                }, 5e3));
    }, [t, a, i, r]),
        (0, V.Ay)(() => {
            null != i &&
                (0, lu.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lu.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && _(e);
        }, [r, a, c]);
    let m = s.useCallback(() => {
        null != a && (0, la.xi)(t.id, [a.id]),
            null != i &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("19959"), n.e("12115")]).then(
                            n.bind(n, 131882),
                        );
                        return (n) => {
                            let { onClose: s, transitionState: r } = n;
                            return (0, l.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: s,
                                transitionState: r,
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
                    isNudgeWarning: null != a,
                }));
    }, [a, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(ev.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nf.Ay.Icon, {
                  icon: lr.l,
                  onClick: m,
                  tooltip: K.intl.string(K.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var l_ = n(262763),
    lg = n(406704),
    lm = n(576705);
let lp = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, i1.A)(),
        i = (0, A.bG)([i5.A], () => i5.A.isInChannel(t.id)),
        r = (0, A.bG)([i5.A], () => !u().isEmpty(i5.A.getVoiceStatesForChannel(t.id))),
        a = (0, A.bG)([lm.A], () => lm.A.can(ea.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, id.A)(t.id),
        d = (0, lg.Id)(t),
        c = s.useCallback(() => {
            l_.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [t, i, o]);
    return (s.useEffect(
        () => (
            en._.subscribe(ea.jej.CALL_START, c),
            () => {
                en._.unsubscribe(ea.jej.CALL_START, c);
            }
        ),
        [c],
    ),
    lg.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !n &&
        !i &&
        a &&
        d &&
        t.isVocalThread())
        ? (0, l.jsx)(nf.Ay.Icon, {
              icon: iQ._,
              onClick: c,
              tooltip: r ? K.intl.string(K.t.fdEeb5) : K.intl.string(K.t.focH1t),
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
        r = lx(),
        a = i === ea.YvQ.PROFILE && r;
    return (0, l.jsx)(nf.In, {
        disabled: !r || n,
        tooltip: !r || n ? K.intl.string(K.t.YneDgF) : a ? K.intl.string(K.t.niD64e) : K.intl.string(K.t["+FAsHq"]),
        icon: lf.n,
        onClick: () => {
            (0, lE.am)({ displayProfile: s, isProfileOpen: !a }), ib.A.toggleUserProfileSidebarSection();
        },
        selected: a && !n,
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
    let { user: t, channel: i, status: r, activities: a } = e,
        o = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, A.bG)([$.default], () => $.default.getCurrentUser()),
        c = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, A.bG)([i4.A], () => i4.A.getNickname(t.id)),
        h = (0, lj.A)(t.id),
        _ = s.useRef(null),
        g = (e) => {
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
            en._.dispatch(ea.jej.TEXTAREA_FOCUS, { channelId: i.id }),
                en._.dispatchToLastSubscribed(ea.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                j.A.startTyping(i.id);
        },
        p = (0, M.r)({ user: t }),
        [f, E] = s.useState(!1);
    return (0, l.jsx)(z.A, {
        targetElementRef: _,
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
                er.A,
                {
                    ref: _,
                    user: t,
                    currentUser: d,
                    isOwner: t.id === i.ownerId,
                    ownerTooltipText: K.intl.string(K.t["MRXZ+x"]),
                    shouldAnimateStatus: lG,
                    isTyping: o,
                    status: r,
                    activities: a,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: g,
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
        { analyticsLocations: r } = (0, G.Ay)(O.A.MEMBER_LIST),
        { listItems: a } = (0, A.bG)(
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
                              status: Q.A.getStatus(e.id) ?? ea.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? lO,
                          })
                        : (l[e.id] = { status: ea.clD.OFFLINE, activities: lO });
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
        et.default.track(ea.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && a.every((e) => e.user.isStaff());
    return (0, l.jsx)(G.f5, {
        value: r,
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
                                `${K.intl.string(K.t["9Oq93m"])}—${a.length} `,
                                o && (0, l.jsx)(lR.A, { type: lR.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
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
    l6 = n(201349),
    l9 = n(822610),
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
function sr(e, t) {
    return { type: e, message: t ?? null };
}
function sa(e, t) {
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
            url: ea.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return t.ok ? (t.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
var s_ = n(55294),
    sg = n(790158),
    sm = n(415296);
let sp = ti.oU.THREAD_CREATION;
function sf(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        s = (0, A.bG)([eP.A], () => eP.A.getChannel(t)),
        { analyticsLocations: r } = (0, G.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(G.f5, {
              value: r,
              children: (0, l.jsx)(eZ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": K.intl.string(K.t.rBIGBL),
                      className: sg.kL,
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
                          (0, n9.bA)(t);
                      },
                  })
                : (0, n9.bA)(t);
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
        { parentChannel: n, parentMessageId: i, location: r } = e,
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
                r = s.useCallback(
                    (n) => {
                        l((e) => ({ ...e, ...n })), l$.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, i),
        { textAreaState: _, setTextAreaState: g } = (function (e, t) {
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
                    threadSettings: r,
                    textAreaState: a,
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
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let t = await sA(e);
                                null != t && "" !== t.trim() && i({ name: t });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [t.id, n, i, h, a.textValue]);
            s.useEffect(() => {
                u(!1), d(!1), t.id === r.parentChannelId && n !== r.parentMessageId && i({ name: "" });
            }, [n, i, t.id, r.parentChannelId, r.parentMessageId]),
                s.useEffect(() => {
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != n && (u(!0), A()));
                }, [t.id, n, i, r.name, c, h, A]);
            let _ = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: su.D,
                                onClick: A,
                                "aria-label": K.intl.string(K.t.ZF2oBs),
                                disabled: e || o || (null == n && a.textValue.trim().length < 10),
                                tooltip: K.intl.string(K.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, A, o, n, a.textValue],
                ),
                g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(ev.m, {
                                  text: K.intl.string(K.t.ZF2oBs),
                                  children: (0, l.jsx)(ta.K, {
                                      icon: su.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": K.intl.string(K.t.ZF2oBs),
                                      onClick: A,
                                      disabled: e || o || (null == n && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, n, a.textValue, A],
                );
            return {
                isGeneratingAI: o,
                generateAIName: A,
                enableAIFeatures: h,
                renderAiGenerateButton: g,
                getThreadNameInputAccessory: _,
            };
        })({ parentChannel: n, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: _ }),
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
                    textAreaState: r,
                    location: a,
                    enableAIFeatures: o,
                } = e,
                [d, c] = s.useState(null),
                [u, h] = s.useState(null),
                [A, _] = s.useState(!1),
                g = (0, s_.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: n9.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        _(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = l5.A.getStickerPreview(t.id, sp.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sn.A.getUploads(t.id, n5.C.FirstThreadMessage));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sr(0, K.intl.string(K.t.uXA573)) : null),
                            h(u ? sr(0, K.intl.string(K.t.kesTVT)) : null),
                            d || u)
                        )
                            return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: m } = await (0, si.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: sp,
                            channel: null == n ? t : null,
                        });
                        if (!m) return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, l, s);
                        } catch (e) {
                            if (e.body?.code === ea.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sr(1, (0, ss.cw)(p, t?.id))));
                            } else
                                e.body?.code === ea.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sr(2, K.intl.string(K.t.uXA573)));
                            return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, l8.x5)(t.id, sp.drafts.type), _(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [g, r.textValue, i.name, n, t, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: m,
            textAreaState: _,
            location: r,
            enableAIFeatures: f,
        }),
        S = (0, so.Iy)(c, m) ? lz.t : lY.y;
    return (0, l.jsx)("div", {
        className: sg.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(sg.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), I();
                },
                className: sg.Zd,
                children: [
                    (0, l.jsx)(no.Ip, {
                        className: sg.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sg.bv,
                            children: [
                                (0, l.jsxs)(l7.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(sm.P0, sg.P0),
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
                                                n.type === ea.rbe.GUILD_TEXT
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
                        className: sg.Eh,
                        children: [
                            (0, l.jsx)(sb, {
                                parentChannel: n,
                                textAreaState: _,
                                setTextAreaState: g,
                                submit: I,
                                error: x,
                            }),
                            (0, l.jsx)(l1.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: sg.RL,
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
        r = (0, so.Iy)(n, s),
        a = (0, l.jsx)(lX.S, {
            disabled: s === so.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: K.intl.string(K.t.TRPp3g),
        });
    return t || s === so.jk.Disabled
        ? null
        : (0, l.jsx)(lQ.D, {
              label: K.intl.string(K.t.F1zyvU),
              helperText: r ? K.intl.string(K.t.EWXycz) : void 0,
              children: a,
          });
}
function sI(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            updateThreadSettings: s,
            error: r,
            disabled: a,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = sa(r, { content: u }),
        A = (0, so.l1)(t, n),
        _ = null != n && !d,
        g = (0, l3.GV)(),
        m = d ? K.intl.string(K.t["Nb2/RE"]) : "" !== A ? A : K.intl.string(K.t["Nb2/RE"]);
    return (0, l.jsx)(lJ.k, {
        label: K.intl.string(_ ? K.t.JPvIiL : K.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: g,
        placeholder: m,
        maxLength: ea.Ign,
        onChange: (e) => {
            s({ name: (0, sd.A)(e, !1) }), "" !== e ? j.A.startTyping(t.id) : j.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, sd.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function sb(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        _ = s.useCallback(() => c(!1), []),
        g = s.useCallback(
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
                return r(t, i, n);
            },
            [r],
        );
    (0, eZ.Vo)({ event: ea.jej.TEXTAREA_FOCUS, handler: h }), (0, eZ.Vo)({ event: ea.jej.TEXTAREA_BLUR, handler: _ });
    let p = (0, A.bG)([lm.A], () => lm.A.can(ea.xBc.ATTACH_FILES, t)),
        f = sa(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l9.A, { channelId: t.id, type: sp, canAttachFiles: p }),
            (0, l.jsx)("div", { className: sg.xN, children: (0, l.jsx)(lZ.U, { error: f }) }),
            (0, l.jsx)(l6.Ay, {
                type: sp,
                channel: t,
                placeholder: K.intl.string(K.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: a()(sg.gM, sg.Yy),
                innerClassName: a()(sg.SL, { [sg.cr]: null != f }),
                onFocus: h,
                onBlur: _,
                onChange: g,
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
              className: sg.IL,
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
        r = s.useRef(null),
        a = (0, e8.ni)(t),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            n || (0, sT.D3)("Popout"), i(!n);
        }, [n]);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: r,
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
                ref: r,
                className: sy.Kk,
                onClick: d,
                icon: lY.y,
                "aria-label": K.intl.string(K.t.B2panI),
                tooltip: n ? null : K.intl.string(K.t.B2panI),
                disabled: a,
                selected: n,
            });
        },
    });
}
var sj = n(40389);
function sL(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = K.intl.string(K.t["UKOtz+"]);
    return (0, l.jsx)(nI.Y, {
        targetElementRef: r,
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
                ref: r,
                onClick: a,
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
        r = (0, nO.A)(t),
        a = (0, nU.A)(t.id),
        o = (0, nD.A)(t),
        d = (0, nV.A)({ id: t.id, label: K.intl.string(K.t.DQ797g) }),
        c = (0, nR.A)(t),
        h = (0, nj.A)(t),
        _ = (0, nL.A)(t, "Toolbar Overflow"),
        g = (0, nG.A)(t),
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
            (0, l.jsxs)(nS.rX, { children: [_, m] }),
            (0, l.jsxs)(nS.rX, {
                children: [
                    o,
                    g,
                    a,
                    E && !C
                        ? (0, l.jsx)(nS.Dr, {
                              id: "open",
                              label: K.intl.string(K.t.bX7EaG),
                              action: function () {
                                  (0, n9.JA)(t);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, l.jsxs)(nS.rX, { children: [p, s, r, h] }),
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
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, A.bG)([eP.A], () => eP.A.getChannel(r)),
        c = (0, A.bG)([t6.A], () => t6.A.getGuild(d?.getGuildId())),
        h = (0, nm.Ay)(d);
    (t = d),
        (i = (0, A.bG)([i5.A], () => null != t && !u().isEmpty(i5.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (tD.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, nH.N9)(t, { source: n2.H9.VOICE_AUTO_OPEN }));
        }, [i, t]);
    let _ = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || _.current) return;
            _.current = !0;
            let e = (0, sG.C)(eP.A.getChannel(d.id), !0);
            (0, ej.zV)(ea.HAw.CHANNEL_OPENED, { ...e, ...(0, ej.qL)(d.id), channel_view: o }),
                (0, sM.A)({ channelId: d.id });
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    let g = (0, l.jsx)(n4, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep.A, { channel: d, draftType: n5.C.ChannelMessage }),
            (0, l.jsx)(nf.Ay, {
                toolbar: g,
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
                children: (0, l.jsx)(np.A, { channel: d, guild: c, chatInputType: ti.oU.SIDEBAR }, r),
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
    s2 = n(586644),
    s6 = n(35241),
    s9 = n(587168),
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
        { showButton: r } = s7.useConfig({ location: "UserProfileSidebarFooter" }),
        a = r
            ? (0, l.jsx)("div", {
                  className: s4.qr,
                  children: (0, l.jsx)(tr.D, {
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
        ? (0, l.jsxs)("div", { className: s4.xQ, children: [(0, l.jsx)(s3.A, { frame: i, layout: "SIDEBAR" }), a] })
        : a;
}
var s8 = n(996988),
    re = n(556818),
    rt = n(523802);
function rn(e) {
    let { user: t, channel: n } = e,
        i = __OVERLAY__ || !(0, sK.A)(t.id),
        r = (0, lC.Ay)(t.id),
        a = (0, sW.Ay)(),
        o = s.useRef(Date.now()),
        { analyticsLocations: d } = (0, G.Ay)(O.A.USER_PROFILE_SIDEBAR),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        u = s.useRef(null),
        { isHoveringOrFocusing: h, isHovering: A } = (0, sz.A)(u),
        _ = () => {
            (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: d, hideRestrictedProfile: !0, ...c });
        };
    return (0, l.jsx)(G.f5, {
        value: d,
        children: (0, l.jsx)(sq.of, {
            value: c,
            openedAt: o.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsxs)(s1.A, {
                ref: u,
                user: t,
                displayProfile: r,
                themeType: s8.d.SIDEBAR,
                themeOverride: a,
                children: [
                    (0, l.jsxs)(no.d_, {
                        children: [
                            (0, l.jsx)(s9.A, { children: (0, l.jsx)(s6.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: re.wx,
                                children: [
                                    (0, l.jsx)(sJ.A, {
                                        user: t,
                                        displayProfile: r,
                                        themeType: s8.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !h,
                                    }),
                                    (0, l.jsx)(sX.A, {
                                        user: t,
                                        displayProfile: r,
                                        channelId: n.id,
                                        themeType: s8.d.SIDEBAR,
                                        onOpenProfile: i ? void 0 : _,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: rt.rf,
                                children: [
                                    (0, l.jsx)(s2.A, {
                                        user: t,
                                        guildId: n.guild_id,
                                        nickname: sB.Ay.getName(null, n.id, t),
                                        pronouns: r?.pronouns,
                                        onOpenProfile: i ? void 0 : _,
                                        tags: (0, l.jsx)(sQ.A, { displayProfile: r, themeType: s8.d.SIDEBAR }),
                                    }),
                                    (0, l.jsxs)(s1.A.Overlay, {
                                        className: rt.Lw,
                                        children: [
                                            (0, l.jsx)(s0.A, {
                                                heading: K.intl.string(K.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(sZ.A, {
                                                    userBio: r?.bio,
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
                    !i && (0, l.jsx)(s5, { handleOpenProfile: _, analyticsLocations: d, context: c }),
                    r?.profileEffect != null && (0, l.jsx)(sY.A, { skuId: r?.profileEffect?.skuId, isHovering: A }),
                ],
            }),
        }),
    });
}
var ri = n(331322),
    rl = n(249790),
    rs = n(254828),
    rr = n(783123),
    ra = n(735103);
function ro(e) {
    let { user: t, channel: n, onHide: i } = e,
        r = (0, lC.Ay)(t.id),
        a = (0, sW.Ay)(),
        o = (0, A.bG)([i4.A], () => i4.A.isBlocked(t.id)),
        { analyticsLocations: d } = (0, G.Ay)(o ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        u = s.useRef(null);
    return (0, l.jsx)(G.f5, {
        value: d,
        children: (0, l.jsx)(sq.of, {
            value: c,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(s1.A, {
                ref: u,
                user: t,
                displayProfile: r,
                themeType: s8.d.SIDEBAR,
                themeOverride: a,
                children: (0, l.jsx)(no.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ra.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ra.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ra.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ra.N1,
                                        children: [
                                            (0, l.jsx)(rl.A, { user: t }),
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
                                    (0, l.jsxs)(ri.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(rr.A, {
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
                                            (0, l.jsx)(rs.A, {
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
var rd = n(419354),
    rc = n(717421),
    ru = n(361628),
    rh = n(673843),
    rA = n(594832),
    r_ = n(841595),
    rg = n(679492),
    rm = n(439053),
    rp = n(312381),
    rf = n(349419),
    rE = n(984545),
    rC = n(193738),
    rx = n(597770),
    rI = n(751188),
    rb = n(746174),
    rS = n(495544),
    rN = n(993401),
    rT = n(518477);
function rv(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, G.Ay)(),
        i = (0, A.bG)([rS.default], () => rS.default.getId() === t.id),
        s = (0, A.bG)([i4.A], () => i4.A.isBlockedOrIgnored(t.id) || i4.A.isSpam(t.id)),
        r = (0, rb.j)("UserProfileGiftingBannerButton"),
        { openGiftModal: a } = (0, rI.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: ea.liQ.USER_PROFILE,
                section: ea.JJy.USER_PROFILE,
                object: ea.ZSU.BUTTON_ICON,
                objectType: ea.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gifting-banner-button",
        });
    return null == t || t.bot || i || s || !r
        ? null
        : (0, l.jsx)(rN.br, { icon: rx.o, tooltipText: K.intl.string(K.t.PEjaCx), action: rT.pt.GIFT, onClick: a });
}
var ry = n(700174),
    rR = n(983495),
    rj = n(695366),
    rL = n(661531),
    rO = n(922590),
    rG = n(821269),
    rM = n(93246),
    rD = n(351906),
    rU = n(383199),
    rP = n(559506),
    rw = n(361311),
    rk = n(886891),
    rV = n(501193),
    rB = n(383448),
    rH = n(646986),
    rF = n(243166);
function rW(e) {
    let { user: t, currentUser: n, displayProfile: i, channel: s, isHoveringOrFocusing: r, onOpenProfile: a } = e,
        { relationshipType: o, originApplicationId: d } = (0, A.cf)([i4.A], () => ({
            relationshipType: i4.A.getRelationshipType(t.id),
            originApplicationId: i4.A.getOriginApplicationId(t.id),
        })),
        c = (0, rO.fi)(t.id),
        u = (0, rG.q)({ userId: t.id }),
        h = (0, A.bG)([rD.A], () => rD.A.hidePersonalInformation),
        _ = (0, A.bG)([r_.A], () => r_.A.getUserProfile(t.id)?.application);
    return (0, l.jsxs)("div", {
        className: rt.rf,
        children: [
            (0, l.jsx)(rP.A, { userId: t.id }),
            (0, l.jsx)(s2.A, {
                user: t,
                guildId: s.guild_id,
                nickname: sB.Ay.getName(null, s.id, t),
                pronouns: i?.pronouns,
                onOpenProfile: a,
                tags: (0, l.jsx)(sQ.A, { displayProfile: i, themeType: s8.d.SIDEBAR }),
                nicknameIcons: h ? null : (0, l.jsx)(rF.A, { userId: t.id, isVisible: r, onOpenProfile: a }),
            }),
            o === ea.eA$.PENDING_INCOMING &&
                (0, l.jsx)(s1.A.Overlay, {
                    children: (0, l.jsx)(rk.A, { user: t, channelId: s.id, applicationId: d }),
                }),
            c.map((e) =>
                (0, l.jsx)(
                    s1.A.Overlay,
                    {
                        children: (0, l.jsx)(rk.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(rB.A, { user: t }),
            i?.private &&
                (0, l.jsx)(s1.A.Overlay, { children: (0, l.jsx)(rV.A, { username: sB.Ay.getName(null, s.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(s1.A.Overlay, {
                    children: (0, l.jsx)(s0.A, {
                        heading: K.intl.string(K.t.Iyka0U),
                        headingIcon: (0, l.jsx)(rj.E, { size: "xxs", color: rL.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(rM.T, { userId: t.id }),
                    }),
                }),
            (0, l.jsx)(rH.A, { user: t, currentUser: n, onOpenUserProfileModal: a }),
            (0, l.jsxs)(s1.A.Overlay, {
                className: rt.Lw,
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
                                isHoveringOrFocusing: r,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    _?.popularApplicationCommandIds != null &&
                        (0, l.jsx)(rU.A, {
                            applicationId: _.id,
                            commandIds: _.popularApplicationCommandIds,
                            channel: s,
                        }),
                    u.length > 0 &&
                        (0, l.jsx)(s0.A, {
                            heading: K.intl.string(K.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rw.A, { applicationIds: u }),
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
var rK = n(114212),
    rY = n(913453),
    rz = n(229187),
    rq = n(21241),
    rX = n(503062),
    rQ = n(51943),
    rJ = n(847374),
    rZ = n(320448),
    r$ = n(680391);
function r0(e) {
    let { section: t, header: n, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, sq.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? rJ.a : rZ._;
    return (0, l.jsxs)("section", {
        className: r$.uW,
        children: [
            (0, l.jsxs)(tr.D, {
                className: a()(r$.wx, r$.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(r$.p_, r), children: i }),
        ],
    });
}
var r1 = n(54557);
function r2(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, G.Ay)(),
        { context: s } = (0, sq.NJ)(),
        r = (0, nv.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, rY.A)(t),
        c = !t.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(s1.A.Overlay, {
              className: r1.Lw,
              children: [
                  u &&
                      (0, l.jsx)(r0, {
                          section: "MUTUAL_GUILDS",
                          header: K.intl.string(K.t["4lTDZq"]),
                          listClassName: r1.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  rQ.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, t2.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(rq.A, { className: r1.yF }),
                  c &&
                      (0, l.jsx)(r0, {
                          section: "MUTUAL_FRIENDS",
                          header: K.intl.string(K.t["0mTJ3j"]),
                          listClassName: r1.p_,
                          onExpand: () => (0, rz.A)(t.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: r1.nC,
                                                children: [
                                                    (0, l.jsx)(rK.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(rK.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            rX.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, sw.openUserProfileModal)({
                                                        ...s,
                                                        userId: r.id,
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
var r6 = n(123292),
    r9 = n(853735),
    r3 = n(932001),
    r7 = n(84511),
    r4 = n(332772),
    r5 = n(575593),
    r8 = n(587895),
    ae = n(44120),
    at = n(532794),
    an = n(317560),
    ai = n(533406),
    al = n(661492),
    as = n(212387),
    ar = n(662349),
    aa = n(369005);
function ao(e) {
    let { title: t, description: n, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: aa.S,
        children: [
            (0, l.jsx)(tr.D, {
                onClick: i,
                className: aa.H,
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
var ad = n(479026),
    ac = n(699976),
    au = n(788868),
    ah = n(80223),
    aA = n(997990);
let a_ = ac.Z.SIZE_90;
function ag(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: i,
            isSingleCard: r,
            style: o,
            skuPreviewStyle: d,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: A,
            singleCardInfo: _,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, sq.NJ)(),
        m = s.useCallback(() => {
            g({
                action: rT.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: i,
                productLines: new Set([t.productLine]),
            }),
                h();
        }, [t, i, h, g]),
        p = s.useCallback(() => {
            g({
                action: rT.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: i,
                productLines: new Set([t.productLine]),
            }),
                A();
        }, [A, t.id, i, t.productLine, g]),
        { label: f, icon: E, isPromptingPurchase: C } = (0, ar.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 }),
        [x, I] = s.useState(!1);
    return (0, l.jsxs)(ri.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: ah.kL,
                children: (0, l.jsx)(as.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: t,
                    user: n,
                    spec: a_,
                    cardStyle: a()(ah.Nr, o),
                    skuPreviewStyle: a()(ah.ho, d),
                    skuAssetClassName: x ? c : void 0,
                    onClick: m,
                    "aria-label": K.intl.formatToPlainString(K.t.ZBB4Ty, { productName: (0, al.TC)(t) }),
                    onHoverOrFocusChange: I,
                    children: (0, l.jsx)(ar.A, {
                        spec: a_,
                        onClick: C ? p : m,
                        isHoveringOrFocusing: x,
                        label: f,
                        icon: E,
                    }),
                }),
            }),
            r && (0, l.jsx)(ao, { title: _.title, description: _.description, onClick: m }),
        ],
    });
}
function am(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        a = (0, eI.bG)([r8.A], () => r8.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, G.Ay)(
            ...(i ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        d = s.useCallback(() => {
            (0, ai.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: au.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        c = s.useCallback(() => {
            (0, an.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: au.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: o,
            });
        }, [t.id, t.applicationId, n, o]),
        u = s.useMemo(
            () => ({ title: t.name, description: K.intl.format(K.t["CqpEC+"], { applicationName: a?.name }) }),
            [t.name, a?.name],
        );
    return (0, l.jsx)(ag, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: c,
        onPurchaseClick: d,
        singleCardInfo: u,
        ...r,
    });
}
function ap(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, ae.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: au.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, ad.e)({ sku: t, giftRecipient: n, giftingOrigin: au.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r5.R.PROFILE_EFFECT:
                case r5.R.NAMEPLATE:
                    return;
                case r5.R.AVATAR_DECORATION:
                    return a()(ah.ML, ah._P);
                default:
                    return a()(ah.ML, ah.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        u = s.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return K.intl.string(K.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case r5.R.AVATAR_DECORATION:
                            return K.intl.string(K.t["7v0T9P"]);
                        case r5.R.PROFILE_EFFECT:
                            return K.intl.string(K.t.wR5wOo);
                        case r5.R.NAMEPLATE:
                            return K.intl.string(K.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, l.jsx)(ag, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        singleCardInfo: u,
        ...r,
    });
}
function af(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        a = s.useCallback(() => {
            (0, at.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: au.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.id,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        o = s.useMemo(() => ({ title: t.name, description: K.intl.string(K.t.Ipxkog) }), [t.name]);
    return (0, l.jsx)(ag, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: a,
        onPurchaseClick: a,
        skuPreviewStyle: aA.MO,
        disableRiveHover: !0,
        singleCardInfo: o,
        ...r,
    });
}
function aE(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case ea.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(am, { sku: t, ...n });
        case ea.EZt.COLLECTIBLES:
            return (0, l.jsx)(ap, { sku: t, ...n });
        case ea.EZt.PREMIUM:
            return (0, l.jsx)(af, { sku: t, ...n });
        default:
            return null;
    }
}
var aC = n(535089),
    ax = n(617348);
function aI(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: i, wishlistId: r, title: a } = e,
        { analyticsLocations: o } = (0, G.Ay)(),
        { trackUserProfileWishlistAction: d } = (0, sq.NJ)(),
        c = (0, s.useId)();
    (0, r4.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
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
        g = (0, aC.A)({ wishlistId: r ?? null, onAction: u, productLines: A }),
        m = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, l.jsx)(
                                  aE,
                                  {
                                      sku: e.sku,
                                      index: s,
                                      wishlistOwner: n,
                                      wishlistId: r,
                                      analyticsLocations: o,
                                      onViewWishlist: i,
                                      isSingleCard: 1 === t.length,
                                  },
                                  e.skuId,
                              ),
                    )
                    .filter(lL.Vq),
            [o, i, n, t.length, h, r],
        ),
        [p, f] = (0, r3.RF)(
            _.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, r9.c)(_.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        E = p !== _.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === m.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": c,
              children: (0, l.jsxs)(s1.A.Overlay, {
                  ref: g,
                  className: ax.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: ax.wx,
                          children: [
                              (0, l.jsx)(R.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: a ?? K.intl.string(K.t["7lZ31J"]),
                              }),
                              t.length > 3 &&
                                  (0, l.jsx)(r6.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: K.intl.string(K.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsxs)(sk.F, {
                          children: [
                              (0, l.jsx)("div", { className: ax.vY, children: m }),
                              !E &&
                                  A.has(ea.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, l.jsx)(r7.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: ax.EK,
                                      onDismiss: () => f(le.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function ab(e) {
    let { user: t, currentUser: n, channel: i } = e,
        r = __OVERLAY__,
        a = (0, lC.Ay)(t.id),
        o = (0, ru.A)(a?.profileFrame?.skuId, "UserProfileSidebar"),
        d = (0, sW.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, G.Ay)(O.A.USER_PROFILE_SIDEBAR),
        h = (0, sq.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id }),
        _ = s.useRef(null),
        { isHoveringOrFocusing: g, isHovering: m } = (0, sz.A)(_),
        p = (0, rg.fC)(),
        f = (0, rc.z)({ opacity: +(null != p.interactionType), config: { duration: 150 } }),
        E = (e) => {
            (0, sw.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h, ...e });
        },
        C = a?.widgets != null && a.widgets.length > 0,
        { defaultWishlistId: x } = (0, A.cf)([r_.A], () => ({ defaultWishlistId: r_.A.getFirstWishlistId(t.id) })),
        { wishlist: I } = (0, rA.fw)({ wishlistId: x, userId: t.id });
    (0, rh.A)(I);
    let b = s.useMemo(() => (null == I ? null : I.items.filter((e) => !e.isOwned)), [I]);
    return (0, l.jsx)(G.f5, {
        value: u,
        children: (0, l.jsx)(sq.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rg.Hl, {
                value: p,
                children: (0, l.jsxs)(s1.A, {
                    ref: _,
                    user: t,
                    displayProfile: a,
                    themeType: s8.d.SIDEBAR,
                    themeOverride: d,
                    privateBanner: a?.private === !0 ? (0, l.jsx)(rp.A, {}) : void 0,
                    children: [
                        null != p.interactionType && (0, l.jsx)(rd.animated.div, { style: f, className: re.tB }),
                        (0, l.jsxs)(no.d_, {
                            className: null != o ? re.It : void 0,
                            children: [
                                (0, l.jsxs)(s9.A, {
                                    children: [
                                        (0, l.jsx)(rC.A, { user: t, themeType: s8.d.SIDEBAR }),
                                        (0, l.jsx)(rv, { user: t }),
                                        t.bot ? (0, l.jsx)(rE.A, { user: t }) : (0, l.jsx)(ry.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: re.wx,
                                    children: [
                                        (0, l.jsx)(sJ.A, {
                                            user: t,
                                            displayProfile: a,
                                            themeType: s8.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !g,
                                            className: re.vK,
                                        }),
                                        (0, l.jsx)(rm.A, { userId: t.id, className: re.oR }),
                                        (0, l.jsx)(sX.A, {
                                            user: t,
                                            displayProfile: a,
                                            channelId: i.id,
                                            themeType: s8.d.SIDEBAR,
                                            onOpenProfile: r ? void 0 : E,
                                        }),
                                        (0, l.jsx)(rR.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: s8.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rW, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: a,
                                    channel: i,
                                    isHoveringOrFocusing: null == p.interactionType && g,
                                    onOpenProfile: r ? void 0 : E,
                                }),
                                C &&
                                    (0, l.jsx)("div", {
                                        className: re.sJ,
                                        children: (0, l.jsx)(rf.A, {
                                            user: t,
                                            widgets: a.widgets,
                                            onOpenUserProfileModal: E,
                                        }),
                                    }),
                                null != b &&
                                    b.length > 0 &&
                                    (0, l.jsx)("div", {
                                        className: re.vS,
                                        children: (0, l.jsx)(aI, {
                                            profileOwner: t,
                                            unownedWishlistItems: b,
                                            wishlistId: x,
                                            title: K.intl.string(K.t["7lZ31J"]),
                                            onClick: () => {
                                                E?.({ tabSection: rT.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, l.jsx)(r2, { user: t, channelId: i.id }),
                            ],
                        }),
                        !r &&
                            (0, l.jsx)(s5, {
                                context: h,
                                analyticsLocations: u,
                                profileFrame: o,
                                handleOpenProfile: E,
                            }),
                        a?.profileEffect != null && (0, l.jsx)(sY.A, { skuId: a?.profileEffect?.skuId, isHovering: m }),
                    ],
                }),
            }),
        }),
    });
}
function aS(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, A.bG)([$.default], () => $.default.getUser(n)),
        r = (0, A.bG)([$.default], () => $.default.getCurrentUser()),
        a = lx(),
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
        null == i || null == r || !a)
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
                ? (0, l.jsx)(ro, { user: i, currentUser: r, onHide: d, ...e })
                : i.isNonUserBot()
                  ? (0, l.jsx)(rn, { user: i, currentUser: r, ...e })
                  : (0, l.jsx)(ab, { user: i, currentUser: r, ...e }),
        }),
    });
}
var aN = n(522556),
    aT = n(447696),
    av = n(684407),
    ay = n(95701),
    aR = n(919638),
    aj = n(763827),
    aL = n(140130),
    aO = n(726509),
    aG = n(462887),
    aM = n(276293),
    aD = n(96361),
    aU = n(745652);
let aP = () => {
    let e = (0, sW.Ay)();
    s.useEffect(() => {
        ej.Ay.trackWithMetadata(ea.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, aG.M)(e) ? aU : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: aD.kL,
        children: [
            (0, l.jsxs)(iz.A, {
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(iz.A.Icon, { icon: aM.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iz.A.Title, { children: K.intl.string(K.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: aD.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: aD.j0, src: t }),
                    (0, l.jsx)(R.D, {
                        className: aD.Zd,
                        variant: "heading-lg/medium",
                        children: K.intl.string(K.t.m9gRVN),
                    }),
                    (0, l.jsx)(S.E, {
                        className: aD.fh,
                        variant: "text-md/normal",
                        children: K.intl.string(K.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var aw = n(943712),
    ak = n(402216),
    aV = n(746080),
    aB = n(806931),
    aH = n(165610),
    aF = n(516607),
    aW = n(964623);
let aK = () => (0, l.jsx)("div", { className: aW.wG, children: (0, l.jsx)(m.y, {}) }),
    aY = (0, tG.Fe)({
        createPromise: () => Promise.all([n.e("49681"), n.e("42516"), n.e("18771")]).then(n.bind(n, 189996)),
        webpackId: 189996,
        renderLoader: aK,
        name: "ForumChannel",
    }),
    az = () =>
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
    aq = (0, tG.Fe)({ createPromise: az, webpackId: 540462, name: "ChannelCall", renderLoader: aK }),
    aX = () =>
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
    aQ = (0, tG.Fe)({ createPromise: aX, webpackId: 67319, name: "StageChannelCall", renderLoader: aK }),
    aJ = (0, tG.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("30501"), n.e("47810"), n.e("62368")]).then(n.bind(n, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: () => (0, l.jsx)(lV, {}),
    }),
    aZ = (0, tG.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("28136"), n.e("15373"), n.e("30501"), n.e("13848")]).then(n.bind(n, 538409)),
        webpackId: 538409,
        name: "GuildMemberModViewSidebar",
    });
class a$ extends s.PureComponent {
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
        e === ea.rbe.GUILD_VOICE ? az() : e === ea.rbe.GUILD_STAGE_VOICE && aX();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, nH.iN)(e.id);
    };
    _handleContextMenu = (e, t) => {
        switch (t.type) {
            case ea.rbe.GUILD_VOICE:
            case ea.rbe.GUILD_ANNOUNCEMENT:
            case ea.rbe.GUILD_TEXT:
            case ea.rbe.GUILD_FORUM:
            case ea.rbe.GUILD_MEDIA:
                this.openChannelContextMenu(e, t);
                break;
            case ea.rbe.ANNOUNCEMENT_THREAD:
            case ea.rbe.PUBLIC_THREAD:
            case ea.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case ea.rbe.DM:
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
        return e?.hasFlag(aV.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ia.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tl.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== aB.lp.STREAM
            ? null
            : (0, l.jsx)(
                  is.A,
                  { size: ak.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
            showFramePanel: r,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let a = [];
        if (e.isSystemDM()) return a;
        switch (e.type) {
            case ea.rbe.GUILD_STAGE_VOICE:
            case ea.rbe.GUILD_VOICE:
                break;
            case ea.rbe.DM:
                a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(li, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    a.push((0, l.jsx)(ll.Ay, { channel: e, tooltip: K.intl.string(K.t.Xjlbvs) }, "invite")),
                    a.push((0, l.jsx)(lI, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(lA, { channel: e }, "safety_tools"));
                break;
            case ea.rbe.GROUP_DM:
                a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(li, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(ll.Ay, { channel: e, tooltip: K.intl.string(K.t.AQAPts) }, "invite")),
                    a.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case ea.rbe.ANNOUNCEMENT_THREAD:
            case ea.rbe.PRIVATE_THREAD:
            case ea.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && a.push((0, l.jsx)(nQ, { channel: e })),
                    null == t || t.isForumLikeChannel() || a.push((0, l.jsx)(sR, { channel: t }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lp, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(n6, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(iy, { channelId: e.id }, "members")),
                    null != t && (0, eE.pk)(e) && a.push((0, l.jsx)(iP, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(sL, { channel: e }, "threads-overflow"));
                break;
            case ea.rbe.GUILD_ANNOUNCEMENT:
            case ea.rbe.GUILD_TEXT:
                a.push((0, l.jsx)(sR, { channel: e }, "browser")),
                    n || a.push((0, l.jsx)(iR.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iO, { channel: e }, "pins")),
                    (0, ts.f)("channel_header") && a.push((0, l.jsx)(iT, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(iy, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && a.push((0, l.jsx)(iP, { channel: e }, "summaries"));
                break;
            case ea.rbe.GUILD_FORUM:
            case ea.rbe.GUILD_MEDIA:
                n ||
                    (a.push((0, l.jsx)(iY, { channel: e }, "forum-onboarding")),
                    a.push((0, l.jsx)(iR.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case ea.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
        }
        return a;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let t = [];
        if (e.isSystemDM()) return t;
        switch (e.type) {
            case ea.rbe.GUILD_STAGE_VOICE:
            case ea.rbe.GUILD_VOICE:
            case ea.rbe.DM:
                break;
            case ea.rbe.GROUP_DM:
                t.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case ea.rbe.ANNOUNCEMENT_THREAD:
            case ea.rbe.PRIVATE_THREAD:
            case ea.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
                break;
            case ea.rbe.GUILD_ANNOUNCEMENT:
            case ea.rbe.GUILD_TEXT:
            case ea.rbe.GUILD_FORUM:
            case ea.rbe.GUILD_MEDIA:
            case ea.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(iy, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: aW.u8,
                  children: (0, l.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: K.intl.string(K.t["3aOv+h"]),
                      onClick: () =>
                          (0, g.openModalLazy)(async () => {
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
            showCall: r,
            showActivityPanel: o,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != t, "Should not be null if channel is not null.");
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, nH.iN)(e.id) : void 0,
            _ = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            g = o || c,
            m = r || g;
        return (0, l.jsxs)("div", {
            className: aW.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? ea.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            iz.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(aW.DD, r, { [aW.zh]: e.type === ea.rbe.GROUP_DM }),
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
                                        handleParentClick: _,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: aW.u8,
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
            case ea.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(aQ, { channel: e, popoutType: tn.N.NO_POPOUT }, e.id);
            case ea.rbe.GUILD_VOICE:
            case ea.rbe.DM:
            case ea.rbe.GROUP_DM:
            case ea.rbe.PUBLIC_THREAD:
            case ea.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    aq,
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
            inCall: r,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), n))
            return (d()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(i_, { guildId: t.id })
                : (0, l.jsx)(io.H, { guildId: t.id, children: (0, l.jsx)(iI, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(aN.A, { guild: t, channelId: e.id });
        if (null != s) return (0, l.jsx)(lW.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (r && e.isVocalThread())) return null;
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
            return (0, l.jsx)(aY, { channel: e, guild: t, sidebarState: n }, e.id);
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
            showCall: r,
            showActivityPanel: a,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (s === ea.YvQ.PROFILE && e.isPrivate() && !r && !a && !o)
            return (0, l.jsx)(aS, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === ea.YvQ.MEMBERS)
            switch (e.type) {
                case ea.rbe.GROUP_DM:
                    return (0, l.jsx)(lU, { channel: e }, `private-channel-recipients-${e.id}`);
                case ea.rbe.GUILD_DIRECTORY:
                case ea.rbe.GUILD_FORUM:
                case ea.rbe.GUILD_MEDIA:
                case ea.rbe.GUILD_ANNOUNCEMENT:
                case ea.rbe.GUILD_TEXT:
                    let c = !0 === ea.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(aO.A, { channel: e }, `channel-members-${c}`);
                case ea.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(aO.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case ea.rbe.PUBLIC_THREAD:
                case ea.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, l.jsx)(eg, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (s === ea.YvQ.CONVERSATIONS)
            switch (e.type) {
                case ea.rbe.GUILD_TEXT:
                case ea.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(tO, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === ea.YvQ.SEARCH) return (0, l.jsx)(aJ, { guildId: n?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: i,
            showWelcomeModal: s,
            isLurking: r,
            isUnavailable: a,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                a ||
                i ||
                (o &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => ir(lT.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("10585").then(n.bind(n, 954784));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, aT.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
                width: r,
                channelIsContentGated: a,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == s && null == i) return null;
        if (n === ea.YvQ.SIDEBAR_CHAT && null != i) {
            if (a || null != o) return null;
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
                    style: { width: ea.da6 },
                    className: aW.uC,
                    children: (0, l.jsx)(aZ, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => lB.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && ea.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - ea.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(aL.A, {
                sidebarType:
                    t?.type != null && ea.kvI.GUILD_THREADS_ONLY.has(t.type) ? aL.X.PostSidebar : aL.X.ThreadSidebar,
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
                section: r,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (i) return (0, l.jsx)(aP, {});
        if (null == e) return (0, l.jsx)(aw.A, { channelId: this.props.channelId });
        let _ = r === ea.YvQ.SIDEBAR_CHAT,
            g = null != d && !_,
            m = !e.isForumLikeChannel() && !o,
            p = t?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tM.HI, { location: p, subsection: n ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== ea.rbe.GUILD_VOICE,
                    className: a()(aW.TE, { [aW.js]: _ || g, [aW.jl]: _ && h }),
                    children: [
                        m
                            ? (0, l.jsx)(ep.A, {
                                  style: { right: _ ? u : void 0 },
                                  className: aW.x4,
                                  channel: e,
                                  draftType: n5.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: a()(aW.Qs, { [aW.Oo]: s === ea.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let a0 = (0, ef.A)(a$),
    a1 = s.memo(function (e) {
        var t, n;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, A.bG)([ew.A], () => ew.A.getChannelId()),
            c = (0, A.bG)([ew.A], () => ew.A.getVoiceChannelId()),
            m = (0, A.bG)([eP.A], () => r ?? eP.A.getChannel(d), [d, r]),
            p = (0, ng.DZ)(),
            f = (0, ng.e4)(m, "ConnectedChannel"),
            C = (0, A.bG)([eP.A], () => eP.A.getChannel(c), [c]),
            x = f?.parent_id,
            I = (0, A.bG)([eP.A], () => eP.A.getChannel(x), [x]),
            b = (0, A.bG)([t6.A], () => t6.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: S } = (0, id.A)(f?.id ?? void 0),
            N = (0, A.bG)([tt.A], () => {
                let e = null != d ? tt.A.getParticipants(d) : [],
                    t = null != d ? tt.A.getActivityParticipants(d) : [];
                return e.length - t.length > 0;
            }, [d]),
            T = (0, il.A)(),
            v = (0, A.bG)([ew.A], () => (T?.channelId ?? ew.A.getVoiceChannelId()) === f?.id),
            y = (0, A.bG)([ex.Ay], () => (null != f ? ex.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, A.bG)([aj.A], () => aj.A.isConnected()),
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
            w = (0, A.bG)([ii.A], () => ii.A.getFrameLayoutMode() === aH.y.FOCUSED),
            { welcomeModalChannelId: k } = (0, h.zy)(),
            V = (0, A.bG)([n$.A], () => null != f && n$.A.isLurking(f.guild_id), [f]),
            B = (0, A.bG)([av.A], () => av.A.hasSeen(f?.guild_id, V), [f, V]),
            H = (0, A.bG)(
                [tt.A, ex.Ay],
                () =>
                    null != ex.Ay.getConnectedActivityLocation() && ex.Ay.getActivityPanelMode() === e$.Gd.PANEL
                        ? ex.Ay.getFocusedLayout() === e$.E8.NO_CHAT
                            ? ea.DUB.NO_CHAT
                            : ea.DUB.NORMAL
                        : null != d
                          ? tt.A.getLayout(d)
                          : ea.DUB.NORMAL,
                [d],
            ),
            F =
                ((t = b?.id),
                (i = (0, A.bG)([t6.A, lN, $.default, X.Ay], () => {
                    let e = t6.A.getGuild(t);
                    if (
                        e?.features.has(ea.GuildFeatures.HUB) !== !0 ||
                        !0 === lN.hasViewedPrompt(lT.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = $.default.getCurrentUser();
                    if (null == n) return null;
                    let i = X.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != i && (i || ir(lT.REAL_NAME_PROMPT, t));
                }, [i, t]),
                !0 === i),
            W =
                ((n = b?.id),
                (0, A.bG)([eP.A, t6.A, ew.A], () => {
                    let e = t6.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(ea.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(ea.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(ea.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = eP.A.getChannel(k);
                    return k === ew.A.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, ay.ke)(t.type);
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
            er = null != f && f.isGuildStageVoice();
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
                    en._.subscribe(ea.jej.OPEN_EMBEDDED_ACTIVITY, e),
                    () => {
                        en._.unsubscribe(ea.jej.OPEN_EMBEDDED_ACTIVITY, e);
                    }
                );
            }, [t]);
        })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, tE.JK)();
                if (e?.location?.state?.stageInviteKey === aF.J2) {
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
                null != a && null != e && er && e.id === a && !t && ((0, lK.av)(e), o(null));
            }, [a, er]);
        let ec = (0, eE.cI)(f),
            eu = null != f && f.isPrivate(),
            eh = (0, eC.A)(eu),
            eA = (0, eC.A)(f?.id);
        s.useEffect(() => {
            let e = eh && !eu,
                t = eh && eu && f?.id !== eA;
            (e || t) && (0, n_.Dr)(_.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: le.i.AUTO });
        }, [f?.id, eA, eu, eh]);
        let e_ = (0, g.useHasAnyModalOpen)();
        return (0, l.jsx)(a0, {
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
            hasModalOpen: e_,
            section: K,
            channelSidebarState: Y,
            guildSidebarState: q,
            guild: b,
            showCall: !S && P,
            showActivityPanel: M,
            showFramePanel: w,
            channelIsContentGated: ei,
            spoilerGatingChannelId: el,
            isMobile: (0, A.bG)([Q.A], () => f?.type === ea.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, A.bG)([aR.A], () => f?.guild_id != null && aR.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: F,
            showWelcomeModal: !B && W,
            showFollowButton: (f?.type === ea.rbe.GUILD_ANNOUNCEMENT && b?.features.has(ea.GuildFeatures.NEWS)) || !1,
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
