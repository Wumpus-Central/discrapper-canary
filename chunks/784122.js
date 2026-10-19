(n.r(t), n.d(t, { default: () => u4 }), n(321073));
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(284009),
    d = n.n(o),
    c = n(435558),
    u = n.n(c),
    h = n(806163),
    m = n(17928),
    A = n(554146),
    p = n(192308),
    g = n(289873),
    x = n(821609),
    f = n(43990),
    E = n(367513),
    I = n(604681),
    j = n(442433);
n(183994);
var C = n(837381),
    y = n(887129),
    b = n(607399),
    _ = n(834730),
    v = n(194261),
    N = n(312138),
    T = n(475825),
    S = n(177953),
    R = n(297264),
    M = n(414798),
    O = n(775602),
    L = n(793574),
    P = n(688810),
    D = n(449582),
    k = n(485947),
    w = n(878678),
    U = n(69282),
    G = n(657048),
    F = n(361610),
    H = n(964486),
    B = n(36124),
    V = n(317525),
    Y = n(219065),
    W = n(818348),
    z = n(105292);
let q = [];
var X = n(342296),
    K = n(616356),
    $ = n(696451),
    Q = n(290863),
    J = n(461213),
    Z = n(741961),
    ee = n(287809),
    et = n(303727),
    en = n(174459),
    ei = n(625494),
    el = n(488926),
    es = n(427262),
    er = n(19575),
    ea = n(589158),
    eo = n(652215),
    ed = n(162866),
    ec = n(4577);
let eu = er.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: t, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, m.bG)([Z.A], () => Z.A.isTyping(t.id, r)),
            c = (0, m.bG)([$.Ay], () => $.Ay.getMember(t.guild_id, r)),
            u = (0, m.bG)(
                [V.A],
                () => (c?.colorRoleId != null ? V.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, t.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, t.guild_id))),
            E = (0, m.bG)([K.A], () => K.A.getAnyStreamForUser(r)),
            I = (0, C.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(t.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("893190"),
                                n.e("146652"),
                                n.e("882073"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("823427"),
                                n.e("343116"),
                                n.e("70515"),
                                n.e("666939"),
                                n.e("424966"),
                            ]).then(n.bind(n, 175269));
                            return (n) => (0, l.jsx)(e, { ...n, user: h, guildId: t.guild_id, channel: t });
                        });
                },
                [h, t],
            ),
            N = s.useCallback(() => {
                if (null == h) return;
                let e = `@${es.Ay.getUserTag(h, { decoration: "never" })}`,
                    n = `<@${h.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    M.A.startTyping(t.id));
            }, [h, t]),
            T = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: t.guild_id,
                            location: { section: eo.JJy.THREAD_MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [t.guild_id],
            ),
            S = (0, D.r)({ user: h, guildId: t.guild_id }),
            [R, O] = s.useState(!1);
        if (null == h) return null;
        let L = c?.premiumSince;
        return (0, l.jsx)(X.A, {
            targetElementRef: o,
            user: h,
            guildId: t.guild_id,
            channelId: t.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(ea.A, {
                    ref: o,
                    onContextMenu: v,
                    shouldAnimateStatus: eu,
                    user: h,
                    currentUser: A,
                    nick: c?.nick,
                    status: g,
                    activities: f,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: d,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: x,
                    selected: R,
                    applicationStream: E,
                    premiumSince: null == L ? null : new Date(L),
                    onClickPremiumGuildIcon: T,
                    itemProps: I,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : i?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    em = s.memo(function (e) {
        let { id: t, label: n, count: i, guildId: s } = e,
            r = (0, U.Xx)({ roleId: t, guildId: s, size: 16 });
        return t === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(G.A, { className: ec.UT, ...r }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [n, " \u2014 ", i] }),
                  ],
              });
    }),
    eA = s.memo(function (e) {
        let { channel: t } = e;
        return t.type === eo.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: ed.yF }),
                      (0, l.jsxs)(_.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, l.jsx)(v.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: ed.GA,
                          children: z.intl.string(z.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function ep(e) {
    var t;
    let n,
        i,
        r,
        o,
        d,
        { channel: c, guild: h } = e,
        A = `members-${c.id}`,
        { analyticsLocations: p } = (0, P.Ay)(L.A.MEMBER_LIST),
        g = (function (e, t) {
            (0, H.Ay)(() => {
                t?.id != null && (0, F.Ey)(t.id, e, B.LD);
            });
            let n = (0, m.bG)([V.A], () => (null != t ? V.A.getSortedRoles(t.id) : [])),
                { version: i, members: l } = (0, m.cf)([Y.A], () => ({
                    version: Y.A.getMemberListVersion(e),
                    members: Y.A.getMemberListSections(e),
                })),
                r = null == t,
                a = s.useMemo(() => {
                    if (r) return q;
                    let e = n.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: z.intl.string(z.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: z.intl.string(z.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: t, label: n } = e;
                            return { label: n, userIds: l?.[t]?.userIds ?? [], id: t, roleId: t };
                        })
                    );
                }, [n, l, i, r]);
            return null != l ? a : q;
        })(c.id, h),
        x = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: E } =
            ((t = A),
            (n = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
            (i = s.useRef(null)),
            (r = s.useCallback(
                (e, t) => {
                    let n = i.current;
                    if (null == n) return;
                    let l = parseInt(t, 10),
                        [s, r] = n.getSectionRowFromIndex(l),
                        a = 42 * (0 === s && 0 === r);
                    n.scrollToIndex({
                        section: s,
                        row: r,
                        padding: a,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [42],
            )),
            (o = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = i.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let t = i.current;
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
                navigator: (0, y.Ay)({ id: t, setFocus: r, isEnabled: n, scrollToStart: o, scrollToEnd: d }),
                listRef: i,
            }),
        I = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        I)
    )
        return (0, l.jsx)(eg, { channel: c });
    let j = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(P.f5, {
        value: p,
        children: (0, l.jsx)(C.hD, {
            navigator: f,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ec.yg, ec.ML, ed.kL),
                        children: (0, l.jsx)(
                            T.OZ,
                            {
                                ref: E,
                                className: ec.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = g[t];
                                    return (0, l.jsx)(
                                        em,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: h.id },
                                        n.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: i, id: s } = g[t];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: c, sectionId: s, userId: i[n], guildOwnerId: b },
                                        i[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (g[e] === x && c.type === eo.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    g[e.section] === x ? (0, l.jsx)(eA, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: g.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            A,
                        ),
                    }),
            }),
        }),
    });
}
function eg(e) {
    let { channel: t } = e;
    return (0, l.jsxs)("div", {
        className: a()(ed.p$, ed.kL, ec.yg, ec.ML, ec.ol),
        children: [
            (0, l.jsx)(_.E, {
                className: ed.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: z.intl.string(z.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: ed.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: ed.AI,
                        children: (0, l.jsx)(S.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(et.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, l.jsx)(_.E, {
                className: ed.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: z.intl.string(z.t.emw8UP),
            }),
        ],
    });
}
var ex = n(738876),
    ef = n(456412),
    eE = n(432371),
    eI = n(475743),
    ej = n(933958),
    eC = n(702841),
    ey = n(567249),
    eb = n(811024),
    e_ = n(969151),
    ev = n(108959),
    eN = n(866665),
    eT = n(446576),
    eS = n(817281),
    eR = n(666860),
    eM = n(587837),
    eO = n(850891),
    eL = n(964404),
    eP = n(204651),
    eD = n(383831),
    ek = n(128286),
    ew = n(734057),
    eU = n(309010),
    eG = n(795816),
    eF = n(685399),
    eH = n(216418),
    eB = n(620148),
    eV = n(732637),
    eY = n(104171),
    eW = n(47294),
    ez = n(594007),
    eq = n(16961),
    eX = n(138017),
    eK = n(715482),
    e$ = n(315502),
    eQ = n(573163),
    eJ = n(234320),
    eZ = n(5867),
    e0 = n(248310);
function e1(e) {
    let { channelId: t, className: n, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let t = (0, m.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, m.cf)(
                    [eQ.Ay],
                    () => ({ unreadCount: eQ.Ay.getUnreadCount(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        h = s.useCallback(() => {
            r.current?.focus();
        }, []);
    (0, eJ.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: h });
    let A = a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        p = [A];
    (u > 0 && p.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        d > 0 && p.push(z.intl.string(z.t.x5zAGZ)));
    let g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = u > 0 ? u : d,
        f = x > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: A,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eX.j : eK.g,
                themeable: !0,
                className: n,
                ...i,
            }),
            f ? (0, l.jsx)(e$.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e0.qS }) : null,
        ],
    });
}
var e2 = n(538303);
let e3 = eY.DN.SIZE_32,
    e7 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e5(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        r = (0, eB.A)(),
        o = (0, m.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(n), [n]),
        d = (0, e_.H)(n),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [E, I] = s.useState(eL.Ay.activityPanelHeight ?? t ?? null),
        j = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            b({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return (e.observe(C.current), () => e.disconnect());
    }, []);
    let v = y.width / Math.max(y.height, 1) < eZ.B5,
        N = 0,
        T = 0,
        S = (0, eH.A)(r?.id);
    if (!S) {
        let e = y.width,
            t = y.height;
        v
            ? ((t = y.width / eZ.B5) > y.height && (e = (t = y.height) * eZ.B5), (T = (y.height - t) / 2))
            : ((e = Math.min(y.height * eZ.B5)) > y.width && (t = (e = y.width) / eZ.B5), (N = (y.width - e) / 2));
    }
    let R = h.get(r?.id ?? ""),
        M = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        L = (0, m.yK)(
            [$.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => $.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        P = s.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [L]),
        D = (function (e, t, n) {
            let i = (0, eI.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !O.Ay.useReducedMotion && (l || r);
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
        })(x, E, t),
        k = (0, eq.G)();
    if (null == r) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let t = P.get(e.id),
            n = t?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e3), alt: n, className: e2.my }, e.id),
            },
            e.id,
        );
    }
    return (
        null != R &&
            (w = Array.from(R.embeddedActivity.userIds)
                .map((e) => ee.default.getUser(e))
                .filter((e) => null != e && void 0 !== e)),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: a()(e2.iE, e7[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: r.id }),
                        (0, l.jsxs)("div", {
                            className: e2.lq,
                            children: [
                                x
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e2.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: e2.qd,
                                              children: r?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e2.ht, { [e2.kK]: S }),
                                    style: { paddingLeft: N, paddingRight: N, paddingTop: T, paddingBottom: T },
                                    ref: C,
                                    children: (0, l.jsx)(eV.A, { className: e2.pU, embedId: (0, ez.A)(n.id, r.id) }),
                                }),
                                null != M
                                    ? (0, l.jsxs)("div", {
                                          className: e2.qr,
                                          children: [
                                              (0, l.jsx)(eY.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e3,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: M }),
                                                              (0, l.jsx)(eP.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: A,
                                                                  iconComponent: eT.g,
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
                                              k
                                                  ? (0, l.jsx)(ek.A, {
                                                        popoutOpen: !1,
                                                        onOpenPopout: () => {
                                                            ((0, eR.zV)(eo.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                                (0, eW.A)({
                                                                    onConfirm: async () => {
                                                                        (r?.id != null &&
                                                                            null != d &&
                                                                            (await (0, eG.od)(r.id, d)),
                                                                            (0, eG.jp)());
                                                                    },
                                                                }));
                                                        },
                                                        onClosePopout: () => {},
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        x && null != t
                            ? (0, l.jsx)(eM.A, {
                                  minHeight: 480,
                                  maxHeight: t,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), I(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), j(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e6(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eC.cf)([ej.Ay], () => {
            let e = ej.Ay.getConnectedActivityLocation(),
                t = ej.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: t,
                activityPanelMode: ej.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eC.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e5, { maxHeight: t, connectedLocation: s.location, renderExternalHeader: n });
}
var e9 = n(90804),
    e8 = n(748975),
    e4 = n(323073),
    te = n(964167),
    tt = n(483510),
    tn = n(976860);
function ti(e) {
    let { channel: t } = e;
    return (0, l.jsx)(x.$, {
        onClick: function () {
            let e = t.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, tn.pX)(eo.BVt.CHANNEL(e, t.id)), (0, tt.ci)(e, t.id));
        },
        variant: "secondary",
        size: "sm",
        text: z.intl.string(z.t.vLgj1J),
    });
}
var tl = n(991690),
    ts = n(621466),
    tr = n(453903),
    ta = n(477782),
    to = n(729475),
    td = n(265872),
    tc = n(980707),
    tu = n(663417),
    th = n(365199),
    tm = n(146337),
    tA = n(316768),
    tp = n(625180),
    tg = n(91242),
    tx = n(672929),
    tf = n(156548),
    tE = n(58736),
    tI = n(869146),
    tj = n(475815),
    tC = n(165610);
function ty(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, tm.A)(t, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: tl.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        d = (0, tx.A)(t.application_id ?? null, o),
        c = (0, tC.x1)(d) && d.data.proxyTicketRefreshing,
        u = (0, tA.A)(t, d, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        h = (0, m.bG)(
            [tI.A, tg.A],
            () => null != d && tI.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && tg.A.getMainFrame()?.id === d.id,
            [d],
        ),
        A = s.useCallback(() => {
            null == d || c || tp.A.refreshProxyTicket(d.id);
        }, [d, c]),
        p = z.intl.string(z.t["UKOtz+"]),
        g = (0, tC.x1)(d);
    return g || null != a || 0 !== u.length
        ? (0, l.jsx)(td.Y, {
              targetElementRef: r,
              shouldShow: n,
              animation: td.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: (e, t) => {
                  if ("user:escape" === t && (0, ts.vq)(document.activeElement, HTMLIFrameElement)) return tr.oU;
                  i(!1);
              },
              renderPopout: (e) => {
                  let t,
                      { closePopout: n } = e;
                  return (0, l.jsxs)(tc.W, {
                      "data-menu-migrated": !0,
                      navId: "app-channel-header-overflow",
                      onClose: n,
                      onSelect: n,
                      "aria-label": z.intl.string(z.t.Xm41aV),
                      children: [
                          g
                              ? (0, l.jsxs)(ta.rX, {
                                    children: [
                                        null != (t = (0, tC.x1)(d) && !h ? (0, tf.fl)(d.id) : null) && (0, tj.Ub)(t)
                                            ? (0, l.jsx)(ta.Dr, {
                                                  id: "full-screen-app",
                                                  label: z.intl.string(z.t.OIDkcp),
                                                  icon: to.T,
                                                  leadingAccessory: { type: "icon", icon: to.T },
                                                  action: () => (0, tj.tl)(t),
                                              })
                                            : null,
                                        (0, l.jsx)(ta.Dr, {
                                            id: "reload-app",
                                            label: z.intl.string(z.t.kHie4V),
                                            action: A,
                                            icon: tu.RefreshIcon,
                                            leadingAccessory: { type: "icon", icon: tu.RefreshIcon },
                                            disabled: c,
                                        }),
                                    ],
                                })
                              : null,
                          u.length > 0 ? (0, l.jsx)(ta.rX, { children: u }) : null,
                          null != a ? (0, l.jsx)(ta.rX, { children: a }) : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, l.jsx)(tE.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: n ? null : p,
                      icon: th.MoreHorizontalIcon,
                      "aria-label": p,
                      selected: n,
                  });
              },
          })
        : null;
}
var tb = n(270593);
function t_(e) {
    let { channel: t } = e,
        n = s.useMemo(
            () => ({ type: tl.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        i = (0, tx.A)(t.application_id ?? null, n);
    return (0, l.jsx)(tb.A, { frame: i });
}
var tv = n(320989);
let tN = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var tT = n(568598),
    tS = n(198052),
    tR = n(164617),
    tM = n(355622),
    tO = n(689874),
    tL = n(631828),
    tP = n(70688),
    tD = n(627363),
    tk = n(71393),
    tw = n(793480),
    tU = n(577964),
    tG = n(261425);
function tF(e) {
    let { channel: t } = e,
        n = (0, m.bG)([tg.A], () => tg.A.getFramesForChannel(t.id).find((e) => (0, tC.x1)(e)), [t.id]),
        i = (0, tD.YY)(n?.applicationId).data,
        s = (0, m.bG)(
            [tk.A],
            () => tk.A.getGuild(t.guild_id)?.features.has(eo.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) === !0,
            [t.guild_id],
        ),
        r = (0, tw.m0)({ guildId: t.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == n || i?.conjureProjectId == null || !r || s) return null;
    let a = z.intl.string(tG.default["/TlGcK"]);
    return (0, l.jsx)(tE.Ay.Icon, {
        icon: tP.DoorExitIcon,
        tooltip: a,
        "aria-label": a,
        onClick: () => (0, tU.A)(n.id, t.guild_id ?? null, t.id),
    });
}
var tH = n(828488),
    tB = n(939249),
    tV = n(408278),
    tY = n(624479),
    tW = n(858899),
    tz = n(534890),
    tq = n(661531),
    tX = n(39623),
    tK = n(952270),
    t$ = n(381849),
    tQ = n(549973),
    tJ = n(957565),
    tZ = n(935208),
    t0 = n(181041),
    t1 = n(256331),
    t2 = n(623562),
    t3 = n(403862);
let t7 = ["high", "medium", "low"],
    t5 = s.memo(function (e) {
        let { moderation: t } = e,
            n = null != t && 1 === t.status,
            i = null != t && !t.flaggedTitle && !t.flaggedSummary && !t.flaggedKeyPoints,
            r = s.useMemo(() => {
                if (null == t) return { passed: 0, failed: 0, unknown: 0 };
                let e = t.flaggedMessageCount ?? t.flaggedMessageIds.length,
                    n = t.totalMessageCount ?? 0,
                    i = 0,
                    l = 0;
                return (
                    null == t.flaggedMessageCount && 0 === t.flaggedMessageIds.length
                        ? (l = n)
                        : null != t.flaggedMessageCount
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
                    ? (t.flaggedSummaryDetails.find((e) => {
                          var n;
                          return (
                              e.severity ===
                              ((n = t.flaggedSummaryDetails.map((e) => e.severity)),
                              t7.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: t3.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: t3.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: t3.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t3.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : n ? "status-positive" : "text-feedback-critical",
                                    children: null == t ? "\u2014" : n ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != t &&
                                    !n &&
                                    null != t.statusReason &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.statusReason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: t3.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : i ? "status-positive" : "text-feedback-critical",
                                    children: null == t ? "\u2014" : i ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !i &&
                                    (0, l.jsxs)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                t.flaggedTitle && "title",
                                                t.flaggedSummary && "summary",
                                                t.flaggedKeyPoints && "key points",
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
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: t3.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == t || "unknown" === a
                                            ? "text-muted"
                                            : "passed" === a
                                              ? "status-positive"
                                              : "text-feedback-critical",
                                    children:
                                        null == t || "unknown" === a ? "\u2014" : "passed" === a ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
                                    (r.passed > 0 || r.failed > 0 || r.unknown > 0) &&
                                    (0, l.jsx)(_.E, {
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
    t6 = s.memo(function (e) {
        let { conversation: t, onJump: n } = e,
            i = tZ.default.extractTimestamp(t.startMessageId),
            s = tZ.default.extractTimestamp(t.endMessageId),
            r = (0, tQ.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, t$.WR)({ seconds: a, getFormatter: t$.i }),
            d = (0, m.bG)([t0.A], () => t0.A.getConversationColor(t.channelId, t.id) ?? void 0, [t.channelId, t.id]);
        return (0, l.jsxs)(tB.D, {
            className: t3.Nm,
            style: { backgroundColor: d },
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: t3.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: t3.So,
                            children: t.title,
                        }),
                        (0, l.jsx)(tV.K, {
                            icon: tY.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, tJ.C)(JSON.stringify(t, null, 2), () =>
                                        (0, tW.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: t3.FR,
                    children: [
                        r,
                        " ago \xb7 ",
                        o,
                        " duration \xb7 ",
                        t.messageCount,
                        " messages \xb7 ",
                        t.userCount,
                        " users",
                    ],
                }),
                null != t.briefSummary &&
                    (0, l.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: t3.g5,
                        children: t.briefSummary,
                    }),
                t.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: t3.JP,
                        children: t.keyPoints.map((e, t) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                t,
                            ),
                        ),
                    }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: t3.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: t3.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: t3.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: t3.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: t3.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: t3.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: t3.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: t3.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.dynamics?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
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
                (0, l.jsx)(t5, { moderation: t.moderation ?? null }),
            ],
        });
    });
function t9(e) {
    let { channel: t } = e,
        n = (0, m.bG)([t0.A], () => t0.A.getChannelConversations(t.id) ?? [], [t.id]),
        i = (0, m.bG)([t0.A], () => t0.A.isPendingFetch(t.id), [t.id]),
        r = (0, m.bG)([t1.A], () => t1.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, t2.xI)(t.id, e.id, { cacheType: "channel" });
            },
            [t],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: t3.zr,
        children: [
            (0, l.jsxs)("div", {
                className: t3.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: t3.gn,
                        children: [
                            (0, l.jsx)(tz.ChatIcon, { color: tq.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: t3.y6,
                        children: (0, l.jsx)(tV.K, {
                            icon: r ? tX.EyeIcon : tK.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: t2.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: t3.Qs,
                children:
                    0 !== n.length || i
                        ? n.map((e) => (0, l.jsx)(t6, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: t3.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var t8 = n(268218),
    t4 = n(726249),
    ne = n(334738),
    nt = n(208882),
    nn = n(938764),
    ni = n(519480),
    nl = n(352123),
    ns = n(825244),
    nr = n(130696);
let na = function (e) {
    let { guild: t, onAddGuild: i } = e,
        r = s.useCallback(() => {
            (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("683621"),
                    n.e("711162"),
                    n.e("159957"),
                    n.e("728136"),
                    n.e("216084"),
                    n.e("284819"),
                ]).then(n.bind(n, 405342));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        guild: t,
                        source: eo.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: eo.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: nr.h2,
        children: [
            (0, l.jsx)("img", { className: nr.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(R.D, {
                className: nr._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: nr.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(ns.E, {
                      className: nr.c5,
                      iconUrl: n(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(ns.E, {
                className: nr.c5,
                iconUrl: n(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var no = n(683438),
    nd = n(689175),
    nc = n(761508),
    nu = n(765671),
    nh = n(902119),
    nm = n(22231),
    nA = n(66834),
    np = n(573435),
    ng = n(101555),
    nx = n(548118),
    nf = n(714991),
    nE = n(776231),
    nI = n(345942),
    nj = n(486020),
    nC = n(149790),
    ny = n(682557),
    nb = n(524058);
let n_ = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(tB.D, {
        onClick: t,
        className: nb.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: nb.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function nv(e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, nl.A)(t);
    return (0, l.jsx)("div", {
        className: a()(nb.fc, { [nb.QX]: i }),
        children: (0, l.jsxs)(ng.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(ng.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("533651"), n.e("988869")]).then(
                                          n.bind(n, 201700),
                                      );
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nm.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: nb.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(ny.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(ng.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(th.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: nb.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let nN = s.memo(function (e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([tk.A], () => tk.A.getGuild(t.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, nI.u)(t.guildId) : await nA.A.joinGuild(t.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = nj.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, nE.mZ)() }),
        c = nj.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: nb.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, l.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: nb.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: nb.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: nb.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: nb.$f,
                            children: (0, l.jsx)(np.Ay, {
                                mask: np.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: nb.SA,
                                    children: (0, l.jsx)(nx.Ay, {
                                        className: nb.rZ,
                                        iconSrc: c,
                                        guild: (0, nC.xi)(t),
                                        size: nx.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nb.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nb.DD,
                            children: [
                                (0, l.jsx)(nf.A, { className: nb.n2, guild: t }),
                                (0, l.jsx)(_.E, {
                                    className: nb.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: nb.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: nb.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: nb.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nb.JX }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t["LC+S+m"], {
                                                    membersOnline: t.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != t.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: nb.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nb.Li }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t.zRl6XR, {
                                                    count: t.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: nb.PD,
                            children: (0, l.jsx)(x.$, {
                                loading: i,
                                variant: a ? "secondary" : "active",
                                onClick: o,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(nv, { entry: t }),
            ],
        })
    );
});
var nT = n(946116),
    nS = n(844086),
    nR = n(770679);
function nM(e) {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, nu.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: nR.wx,
        children: [
            (0, l.jsx)("div", { className: nR.y2, children: (0, l.jsx)(nh.A, {}) }),
            (0, l.jsx)("div", {
                className: nR.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(nR.VW, { [nR.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: nR.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: nR.MT,
                            children: (0, l.jsx)(no.I, {
                                query: t,
                                "aria-label": z.intl.string(z.t.nL2wKD),
                                placeholder: z.intl.string(z.t.nL2wKD),
                                onChange: n,
                                onClear: i,
                                onKeyDown: s,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
let nO = function (e) {
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
        allEntriesCount: m,
        isLoading: A,
    } = e;
    return (0, l.jsx)("div", {
        className: nS.$$,
        children: (0, l.jsxs)(nd.Gt, {
            className: nS.XG,
            children: [
                (0, l.jsx)(nM, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(nd.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(nc.V, {
                        className: nR.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                nc.V.Item,
                                { className: nR.YU, id: nT.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                nT.mU.ALL,
                            ),
                            (0, nT.g2)(t.id).map((e) => {
                                let { value: t, label: n } = e;
                                return (0, l.jsx)(
                                    nc.V.Item,
                                    { className: nR.YU, id: t, children: `${n} ${null != h[t] ? `(${h[t]})` : ""}` },
                                    t,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == n
                    ? (0, l.jsx)(g.y, { className: nS.u1 })
                    : n?.map((e, t) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: nR.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: nS.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(nN, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(n_, { onClick: i }) : null,
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
var nL = n(370876),
    nP = n(28863),
    nD = n(364522),
    nk = n(792831),
    nw = n(211862);
let nU = function (e) {
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
    if (c) t = (0, l.jsx)("div", { className: nS.$$, children: (0, l.jsx)(g.y, { className: nS.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, l.jsx)(nP.Anchor, { onClick: o, children: e }, t);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        t = (0, l.jsxs)("div", {
            className: nw.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: nw.av, children: e }),
            ],
        });
    } else t = (0, l.jsx)("div", { className: nS.vY, children: d.map((e) => (0, l.jsx)(nN, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: nS.$$,
        children: (0, l.jsxs)(nD.Ar, {
            className: nS.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: nw.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nw.Dr,
                            children: [
                                (0, l.jsx)(tB.D, {
                                    onClick: r,
                                    className: nw.UE,
                                    children: (0, l.jsx)(nk.A, { direction: nk.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: nw.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(no.I, {
                            query: n,
                            "aria-label": z.intl.string(z.t.nL2wKD),
                            placeholder: z.intl.string(z.t.nL2wKD),
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
var nG = n(650583);
let nF = function (e) {
    let { channel: t, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([ni.A], () => {
            let e = ni.A.getCurrentCategoryId(t.id),
                n = ni.A.getDirectoryEntries(t.id, e === nT.mU.ALL ? null : e),
                i = ni.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: ni.A.getDirectoryAllEntriesCount(t.id),
                isLoading: ni.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(t.id);
            null != e &&
                (0, ne.ack)(
                    t.id,
                    {
                        object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                        objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    e,
                );
        },
        [t.id],
    );
    let u = s.useMemo(
            () =>
                null != a
                    ? (function (e, t) {
                          if (t !== nT.mU.ALL) return [{ entries: (0, nL._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, nL.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, nL.DN)(s)).length > 0 &&
                                  n.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              n
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: A,
            searchResults: x,
        } = (0, m.cf)([nn.A], () => {
            let { mostRecentQuery: e, fetching: n } = nn.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: nn.A.getSearchResults(t.id, e) };
        }),
        [f, E] = s.useState(h),
        I = "" !== h,
        j = { mostRecentQuery: h },
        C = s.useRef(j);
    (s.useEffect(() => {
        C.current = j;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            (nt.Yc(t.id), nt.YS(t.id), E(e));
        }, [t.id]),
        s.useEffect(() => {
            en.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [t.id, i.id, r]));
    let y = (0, nl.b)(t),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("122326"),
                                  n.e("533651"),
                                  n.e("538288"),
                                  n.e("419580"),
                                  n.e("197804"),
                                  n.e("756856"),
                                  n.e("796349"),
                              ]).then(n.bind(n, 579735));
                              return (n) =>
                                  (0, l.jsx)(e, {
                                      ...n,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: r === nT.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, t.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === nG.dh.ENTER &&
            (nt.Se(t.id, f),
            en.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: t.id, directory_guild_id: i.id }));
    }
    function v() {
        (E(""), nt.BA(t.id));
    }
    return I
        ? (0, l.jsx)(nU, {
              searchQuery: f,
              setSearchQuery: E,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: v,
              handleCreateOrAddGuild: b,
              searchResults: x,
              searchFetching: A,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: nS.$$, children: (0, l.jsx)(g.y, { className: nS.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: nS.$$, children: (0, l.jsx)(na, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(nO, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      nt.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var nH = n(826673),
    nB = n(93055),
    nV = n(47167),
    nY = n(688438),
    nW = n(353428),
    nz = n(288254),
    nq = n(873614),
    nX = n(649852),
    nK = n.n(nX),
    n$ = n(811893),
    nQ = n(789645),
    nJ = n(163126),
    nZ = n(182061),
    n0 = n(886393),
    n1 = n(307623),
    n2 = n(660273),
    n3 = n(707792),
    n7 = n(41402),
    n5 = n(271456),
    n6 = n(200273),
    n9 = n(565846),
    n8 = n(57907),
    n4 = n(375500),
    ie = n(707653),
    it = n(50268),
    ii = n(378570),
    il = n(162199),
    is = n(713608),
    ir = n(473503),
    ia = n(901472),
    io = n(267102),
    id = n(474397),
    ic = n(486974),
    iu = n(256416);
function ih(e) {
    let { channel: t } = e,
        n = s.useContext(en.AnalyticsContext),
        i = (0, io.aL)(),
        r = z.intl.string(iu.default["Beo/7v"]),
        { firstMessage: a } = (0, ir.OA)(t),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(tE.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, ii.iN)(t.id),
                      (0, id.A)(),
                      (0, ia.z)(t.guild_id, d, t.id, {
                          modViewPanel: ic.g.INFO,
                          sourceLocation: location ?? n.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: is.q,
              "aria-label": r,
          })
        : null;
}
var im = n(780338),
    iA = n(782603),
    ip = n(857071),
    ig = n(607508),
    ix = n(914703),
    iE = n(37411);
function iI(e) {
    let { channel: t } = e,
        n = (0, ig.X)(t),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([ip.A], () => null != t.guild_id && ip.A.isLurking(t.guild_id));
    if (
        (s.useEffect(() => {
            function e() {
                return r(!0);
            }
            return (
                ei._.subscribe(eo.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    ei._.unsubscribe(eo.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        o)
    )
        return null;
    let d = z.intl.string(z.t.h850Ss);
    return (0, l.jsx)(td.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: td.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(ix.A, { ...e, channel: t, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(tE.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: n === iE.CP.NO_MESSAGES ? im.BellSlashIcon : iA.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var ij = n(747926);
function iC(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(td.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: td.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iy, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(tE.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: th.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function iy(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, n2.A)(t, "Sidebar Overflow"),
        r = (0, n7.A)(t),
        a = (0, n8.A)(t),
        o = (0, n4.A)(t),
        d = (0, nZ.A)(t),
        c = (0, n3.A)(t),
        u = (0, n9.A)(t.id),
        h = (0, n6.A)(t),
        m = (0, n1.A)(t),
        A = (0, n0.A)(t),
        p = (0, it.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, ie.A)(t),
        x = (0, n5.A)(t),
        f = (0, nJ.$)(1e3);
    function E() {
        (0, ii.iN)(t.id);
    }
    function I(e) {
        let n = nK()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === t.id && n();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(tc.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ta.rX, {
                children: [s, (0, l.jsx)(ta.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(ta.rX, { children: [a, o] }),
            (0, l.jsxs)(ta.rX, { children: [h, r, u, x] }),
            (0, l.jsxs)(ta.rX, {
                children: [
                    (0, l.jsx)(ta.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: n$.t,
                        trailingIndicator: { type: "icon", icon: n$.t },
                        action: function () {
                            (I(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(ta.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: n$.t,
                        trailingIndicator: { type: "icon", icon: n$.t },
                        action: function () {
                            (I(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(ta.rX, { children: [g, d, c, m] }),
            (0, l.jsxs)(ta.rX, { children: [A, p] }),
        ],
    });
}
function ib(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, l.jsx)(tE.Ay.Icon, {
            icon: nQ.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, ij.xu)((0, il.j)(t), n ?? t.parent_id),
        });
    return t.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  t.isForumPost() ? null : (0, l.jsx)(iI, { channel: t }),
                  t.isModeratorReportChannel() ? (0, l.jsx)(ih, { channel: t }) : null,
                  (0, l.jsx)(iC, { channel: t }),
                  i,
              ],
          });
}
var i_ = n(31717),
    iv = n(853742),
    iN = n(85190);
function iT(e) {
    let { channelId: t } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([tk.A], () => tk.A.getGuild(i?.getGuildId())),
        o = (0, nV.Ay)(i),
        d = (0, nz.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iv.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(nq.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(ib, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: i_.C.ChannelMessage }),
            (0, l.jsx)(tE.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nW.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("955557"),
                                n.e("947502"),
                                n.e("965789"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, tn.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iN.T,
                children: (0, l.jsx)(nY.A, { channel: i, guild: a, chatInputType: tM.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var iS = n(925166),
    iR = n(605117),
    iM = n(857253),
    iO = n(872363),
    iL = n(73153);
let iP = function (e, t) {
    iL.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
};
var iD = n(561446),
    ik = n(300233),
    iw = n(499211),
    iU = n(468689),
    iG = n(529942),
    iF = n(739455),
    iH = n(709017);
function iB(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: iH.t7,
        children: (0, l.jsxs)("div", {
            className: iH.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iH.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iH.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iH.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iG.rf)(t),
                                        iU.A.open(t, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iF.Fx)(t));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iV = n(599941),
    iY = n(29385),
    iW = n(950344),
    iz = n(217530),
    iq = n(162093),
    iX = n(325348);
function iK(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, iY.e)({ guildId: t, channelId: n }),
        r = (0, iV.uk)(t),
        a = (0, iV.Tq)(t),
        o = (0, m.bG)([tk.A], () => tk.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        u = (0, nV.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of r) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [r]);
    return ((0, iW.A)({
        guildId: t,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iX.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iX.__invalid_spinner }),
          })
        : (0, l.jsxs)(nD.Ar, {
              className: iX.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iX.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iX.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iz.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iq.A,
                                  {
                                      guildId: t,
                                      listingId: e.id,
                                      groupListingId: h[e.id],
                                      analyticsLocation: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
function i$(e) {
    let { channelId: t } = e,
        n = (function (e) {
            let { hasUnread: t, mentionCount: n } = (0, m.cf)(
                [eQ.Ay],
                () => ({
                    hasUnread: null != e && eQ.Ay.hasUnread(e),
                    mentionCount: null != e ? eQ.Ay.getMentionCount(e) : 0,
                }),
                [e],
            );
            return s.useMemo(() => {
                if (0 === n) {
                    if (!t) return;
                    return { type: "unread", position: "bottom" };
                }
                return { type: "important", position: "bottom", text: String(n) };
            }, [n, t]);
        })(t),
        i = s.useRef(null),
        r = s.useCallback(() => i.current?.focus(), []);
    (0, eJ.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: r });
    let a = (0, tt.HP)(t),
        o = (0, m.bG)([ew.A], () => ew.A.getBasicChannel(t)?.guild_id, [t]);
    return (0, l.jsx)(tE.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: tz.ChatIcon,
        iconSize: 20,
        onClick: () => {
            a
                ? (0, tt.m)(t)
                : ((0, tt.ci)(o, t),
                  setTimeout(() => ei._.dispatch(eo.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t }), 0));
        },
        selected: a,
        badge: n,
    });
}
var iQ = n(358047),
    iJ = n(284252);
function iZ(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iQ.Ay], () => iQ.Ay.getSection(t), [t]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([t0.A], () => (t0.A.getChannelConversations(t)?.length ?? 0) > 0, [t]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(tE.In, {
        onClick: I.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: tz.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iJ.q : void 0,
        selected: n,
        badge: r,
    });
}
var i0 = n(967198);
function i1(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iQ.Ay], () => iQ.Ay.getSection(t)),
        i = (0, m.bG)([i0.A], () => i0.A.getGuildId()),
        s = n === eo.YvQ.MEMBERS;
    return (0, l.jsx)(tE.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
                I.A.toggleMembersSection());
        },
        selected: s,
    });
}
var i2 = n(187360),
    i3 = n(287074),
    i7 = n(306788),
    i5 = n(863922),
    i6 = n(822074),
    i9 = n(521732);
function i8(e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        i = (0, m.bG)([i6.A], () => i6.A.shouldShowTopicsBar());
    return (0, l.jsx)(tE.Ay.Icon, {
        icon: i7.K,
        onClick: function () {
            (en.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i9.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, i5.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var i4 = n(885574),
    le = n(947094),
    lt = n(919577),
    ln = n(207777),
    li = n(422844),
    ll = n(435470),
    ls = n(892110),
    lr = n(45494);
function la(e) {
    let { channel: t } = e,
        n = (0, ll.S4)(t),
        i = (0, m.bG)([le.A], () => le.A.hasHidden(t.id)),
        s = (0, ls.l)(t.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, li.R)(t.id),
        d = (0, m.bG)(
            [ln.A, lr.A],
            () => !!(ln.A.getThreadIds(t.id, r, a, o).length > 0) || !!(lr.A.getThreads(t.id, r, a, o).length > 0),
            [t.id, r, a, o],
        ),
        c = t.isMediaChannel();
    if (!n || s || (c && d)) return null;
    let u = i
        ? c
            ? z.intl.string(z.t["WP/IE1"])
            : z.intl.string(z.t.zfq9V4)
        : c
          ? z.intl.string(z.t.p60yF1)
          : z.intl.string(z.t.SNOqYC);
    return (0, l.jsx)(tE.In, {
        tooltip: u,
        icon: i4.CircleInformationIcon,
        onClick: function () {
            return lt.A.hideAdminOnboarding(t.id, !i);
        },
        selected: !i,
    });
}
var lo = n(290136),
    ld = n(975571),
    lc = n(670064);
function lu() {
    let e = z.intl.string(lc.default.pdipXI);
    return (0, l.jsx)(tE.In, {
        tooltip: e,
        icon: lo.CircleQuestionIcon,
        onClick: function () {
            window.open(ld.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lh = n(742589),
    lm = n(43105),
    lA = n(428689),
    lp = n(978940),
    lg = n(387755),
    lx = n(730852),
    lf = n(641703),
    lE = n(379848),
    lI = n(753727),
    lj = n(625075),
    lC = n(222692),
    ly = n(442353),
    lb = n(470710),
    l_ = n(186111),
    lv = n(192820),
    lN = n(994500),
    lT = n(977997),
    lS = n(818023),
    lR = n(49999),
    lM = n(731854);
class lO extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        ei._.subscribe(eo.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        ei._.unsubscribe(eo.jej.CALL_START, this.handleVoiceClick);
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
        if (t || (n && a === eo._Of.VOICE)) return null;
        let d = r.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = z.intl.string(z.t.izMR7o)))
                : lv.Ay.supports(lM.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : n && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lj.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(tE.Ay.Icon, { icon: lA.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
            ? ((c = !0), (e = z.intl.string(z.t.izMR7o)))
            : i
              ? ((e = d ? z.intl.string(z.t.LW2Ghr) : z.intl.string(z.t.rF7lN5)), (c = !0))
              : s
                ? ((e = z.intl.string(z.t.PHzjvX)), (c = !0))
                : (e = n
                      ? d
                          ? z.intl.string(z.t.S0W8Z5)
                          : z.intl.string(z.t.fdEeb5)
                      : d
                        ? z.intl.string(z.t.S0W8Z5)
                        : z.intl.string(z.t.focH1t));
        let u = (0, l.jsx)(tE.Ay.Icon, {
            ref: this.iconRef,
            icon: lp._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lE.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lm.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lS.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(lR.i.USER_DISMISS),
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
            s = i ? n.getRecipientId() : null;
        function r() {
            return lg.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        }
        t ? (0, ly.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lx.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, nH.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lR.i.AUTO }),
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
        (0, ly.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, lC.A)();
    };
}
function lL(e) {
    let { channel: t } = e,
        n = (0, lI.A)(),
        i = (0, m.bG)([tS.A], () => tS.A.getMode(t.id)),
        s = (0, m.bG)([lT.A], () => lT.A.isInChannel(t.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lb.A], () => ({
            callActive: lb.A.isCallActive(t.id),
            callUnavailable: lb.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lN.A], () => ({
            notFriend: t.type === eo.rbe.DM && null != d && !lN.A.isFriend(d),
            isBlocked: t.type === eo.rbe.DM && null != d && lN.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, io.Us)(),
        g = [],
        x = (0, lf.A)(t.id),
        f = (0, m.bG)([l_.A], () => l_.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(lO, {
              channel: t,
              mode: i,
              inCall: s,
              callActive: a,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: p,
              dismissibleContentTypes: g,
              useReducedMotion: r,
          });
}
var lP = n(452015),
    lD = n(765178),
    lk = n(231483),
    lw = n(544231),
    lU = n(338510),
    lG = n(151119),
    lF = n(278941),
    lH = n(665909),
    lB = n(327337);
let lV = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lU.u)(t.id),
        r = (0, lG.S)(t.id),
        a = (0, lF.e)(t.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([l_.A], () => l_.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lD.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lw.xi)(t.id, [a.id]);
            }, 5e3),
            (0, lH.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lH.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lD.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lw.bg)(t.id);
                }, 5e3)));
    }, [t, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lH.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lH.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lw.xi)(t.id, [a.id]),
            null != i &&
                ((0, p.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("456510"),
                            n.e("506627"),
                            n.e("770940"),
                            n.e("302033"),
                            n.e("623068"),
                        ]).then(n.bind(n, 516567));
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
                    { modalKey: lB.V },
                ),
                (0, lH._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lH.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(tE.Ay.Icon, {
                  icon: lk.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lY = n(262763),
    lW = n(406704),
    lz = n(576705);
let lq = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, lI.A)(),
        i = (0, m.bG)([lT.A], () => lT.A.isInChannel(t.id)),
        r = (0, m.bG)([lT.A], () => !u().isEmpty(lT.A.getVoiceStatesForChannel(t.id))),
        a = (0, m.bG)([lz.A], () => lz.A.can(eo.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, iw.A)(t.id),
        d = (0, lW.Id)(t),
        { enabled: c } = lW.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lY.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [t, i, o]);
    return (s.useEffect(() => {
        if (c)
            return (
                ei._.subscribe(eo.jej.CALL_START, h),
                () => {
                    ei._.unsubscribe(eo.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !n && !i && a && d && t.isVocalThread())
        ? (0, l.jsx)(tE.Ay.Icon, {
              icon: lp._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lX = n(812991),
    lK = n(47675),
    l$ = n(999291);
function lQ() {
    let [e, t] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            function e() {
                t(window.innerWidth >= 1132);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        e
    );
}
function lJ(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, m.bG)([iQ.Ay], () => iQ.Ay.getSection(t.id, t?.isDM())),
        s = (0, l$.Ay)(t.getRecipientId()),
        r = lQ(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(tE.In, {
        disabled: !r || n,
        tooltip: !r || n ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lX.n,
        onClick: function () {
            ((0, lK.am)({ displayProfile: s, isProfileOpen: !a }), I.A.toggleUserProfileSidebarSection());
        },
        selected: a && !n,
    });
}
let lZ = {};
class l0 extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            lZ[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = lZ[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return lZ;
    }
}
let l1 = new l0(iL.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = lZ[n];
        return null == i ? ((lZ[n] = new Set()), lZ[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != lZ[t.id] && !t.unavailable && (delete lZ[t.id], !0);
    },
});
var l2 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l3 = n(376943),
    l7 = n(394953),
    l5 = n(683063),
    l6 = n(403581),
    l9 = n(241541),
    l8 = n(709066),
    l4 = n(87664),
    se = n(247676),
    st = n(695526),
    sn = n(927813),
    si = n(427358),
    sl = n(945810);
let ss = (0, sl.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sr = n(280450),
    sa = n(851746),
    so = n(103411);
function sd() {
    let e = (0, so.m)(),
        t = (0, m.bG)([sa.A], () => sa.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != t && t > 0,
        currentUserId: (0, m.bG)([sr.default], () => sr.default.getId()),
    };
}
var sc = n(315629),
    su = n(744413),
    sh = n(303682),
    sm = n(224370),
    sA = n(544879);
function sp(e) {
    let {
            analyticsLocation: t,
            markAsDismissed: n,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
            ctaText: o = z.intl.string(z.t.Lm2nFc),
            onPrimaryAction: d,
        } = e,
        { analyticsLocations: c } = (0, P.Ay)(t);
    return (0, l.jsxs)(sc.h, {
        color: "nitro-pink",
        className: a()(sm.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sm.lj,
                children: [
                    (0, l.jsx)("img", { className: sm.Dp, src: sA.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sm.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: sm.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: sm.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(tB.D, {
                        className: sm.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            n(lR.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(nQ.P, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sm.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (n(lR.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, su.jM)({
                                  startingScreen: sh.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sg = n(349420);
let sx = { cooldownDurationMs: 60 * sn.A.Millis.DAY };
function sf(e) {
    let { channel: t } = e,
        n = (function (e) {
            let { isInTreatment: t } = {
                    isInTreatment: ss.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: n, currentUserId: i } = sd(),
                l = (0, m.bG)(
                    [si.A, lN.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i || lN.A.isBlockedOrIgnored(e)) return !1;
                            let t = si.A.getUserAffinity(e);
                            return null != t && null != t.communicationRank && t.communicationRank <= 20;
                        }),
                    [e.recipients, i],
                );
            return !!n && !!t && !!l;
        })(t);
    return (0, l.jsx)(lE.zJ, {
        contentType: n ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sx,
        groupName: lR.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sp, {
                      className: sg.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: n,
                  });
        },
    });
}
n(667532);
var sE = n(403362);
n(696101);
let sI = [],
    sj = er.Ay.getEnableHardwareAcceleration();
function sC(e) {
    let { user: t, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, m.bG)([lN.A], () => lN.A.getNickname(t.id)),
        h = (0, l4.A)(t.id),
        A = s.useRef(null);
    function p(e) {
        (0, j.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("463317"),
                n.e("926132"),
                n.e("893190"),
                n.e("146652"),
                n.e("189673"),
                n.e("882073"),
                n.e("797558"),
                n.e("691994"),
                n.e("576665"),
                n.e("624198"),
                n.e("245996"),
                n.e("700792"),
                n.e("592822"),
                n.e("529422"),
                n.e("823427"),
                n.e("307059"),
                n.e("309291"),
                n.e("528864"),
            ]).then(n.bind(n, 778595));
            return (n) => (0, l.jsx)(e, { ...n, user: t, channel: i });
        });
    }
    function g() {
        let e = `@${es.Ay.getUserTag(t, { decoration: "never" })}`,
            n = `<@${t.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
            M.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: t }),
        [f, E] = s.useState(!1);
    return (0, l.jsx)(X.A, {
        targetElementRef: A,
        user: t,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => E(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: s, ...m } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: A,
                    user: t,
                    currentUser: d,
                    isOwner: t.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: sj,
                    isTyping: o,
                    status: r,
                    activities: a,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: p,
                    selected: f,
                    isMobile: c,
                    nick: u,
                    nameplate: x,
                    onClick: (e) => {
                        e.shiftKey ? g?.() : E((e) => !e);
                    },
                    onMouseDown: (e) => {
                        f ? e.stopPropagation() : s?.(e);
                    },
                    ...m,
                },
                t.id,
            );
        },
    });
}
function sy(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sb(e) {
    let { channel: t } = e,
        n = ee.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lN.A, ee.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = ee.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(sE.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lN.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sI,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sI });
                let s = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(t);
                }
                return { listItems: s };
            },
            [t],
            sy,
        );
    s.useEffect(() => {
        en.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, se.A)({ useNitroCapExperiment: !0 }),
        h = (0, st.qH)(),
        A = t.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(nD.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sf, { channel: t }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(l5.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(l6.t, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                      className: ec.K4,
                                                      "aria-hidden": !0,
                                                  }),
                                                  `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length} `,
                                              ],
                                          }),
                                      })
                                    : `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length} `,
                                o && (0, l.jsx)(l8.A, { type: l8.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sC,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lP.NE, {
                                      channel: t,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: l9.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lP.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var s_ = n(322338),
    sv = n(898029),
    sN = n(36537);
function sT() {
    return (0, l.jsx)("div", {
        className: sN.zt,
        children: (0, l.jsx)("header", {
            className: sv.wL,
            children: (0, l.jsxs)("div", {
                className: sv.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sv.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sv.u1,
                            itemClassName: sv.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sS = n(138298),
    sR = n(940382),
    sM = n(747376),
    sO = n(718734),
    sL = n(163328),
    sP = n(425557),
    sD = n(270003),
    sk = n(150934),
    sw = n(452027),
    sU = n(95477),
    sG = n(281595),
    sF = n(465532),
    sH = n(579872),
    sB = n(119031),
    sV = n(408018),
    sY = n(845207),
    sW = n(822610),
    sz = n(915089),
    sq = n(314307),
    sX = n(636922),
    sK = n(931664),
    s$ = n(631576),
    sQ = n(885386),
    sJ = n(232835),
    sZ = n(522602),
    s0 = n(806150),
    s1 = n(518960),
    s2 = n(753738);
function s3(e, t) {
    return { type: e, message: t ?? null };
}
function s7(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var s5 = n(659617),
    s6 = n(474078),
    s9 = n(636537),
    s8 = n(152367),
    s4 = n(147087);
async function re(e) {
    try {
        let t = await s9.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, s9.fT)(),
        });
        return t.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var rt = n(55294),
    rn = n(143161),
    ri = n(909833);
let rl = tM.oU.THREAD_CREATION;
function rs(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        { analyticsLocations: r } = (0, P.Ay)(L.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: rn.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: i_.C.FirstThreadMessage }),
                          (0, l.jsx)(rr, { parentChannelId: t }),
                          (0, l.jsx)(ra, { parentChannel: s, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function rr(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = i_.A.getThreadSettings(t),
                n = i_.A.getDraft(t, i_.C.FirstThreadMessage).trim(),
                i = sZ.A.getUploads(t, i_.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? sH.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ij.bA)(t);
                      },
                  })
                : (0, ij.bA)(t);
        }, [t]);
    return (0, l.jsxs)(tE.Ay, {
        toolbar: (0, l.jsx)(tE.Ay.Icon, { icon: nQ.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(tE.Ay.Icon, { icon: sL.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(tE.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function ra(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((t = s.useContext(eJ.EH)),
            s.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, t) {
            let n = (0, m.bG)([i_.A], () => i_.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(n),
                r = s.useCallback(
                    (n) => {
                        (l((e) => ({ ...e, ...n })), sF.A.changeThreadSettings(e.id, { ...n, parentMessageId: t }));
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, t) {
            let [n, i] = s.useState((0, sV.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let l = i_.A.getDraft(e.id, i_.C.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && i((0, sV.ur)(l)), t(i_.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        n(!0),
                        i_.A.addChangeListener(n),
                        () => {
                            i_.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, u),
        g = (0, s5.EN)(n),
        {
            isGeneratingAI: x,
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
                h = (0, s4.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = sJ.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let t = await re(e);
                                null != t && "" !== t.trim() && i({ name: t });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [t.id, n, i, h, a.textValue]);
            (s.useEffect(() => {
                (u(!1), d(!1), t.id === r.parentChannelId && n !== r.parentMessageId && i({ name: "" }));
            }, [n, i, t.id, r.parentChannelId, r.parentMessageId]),
                s.useEffect(() => {
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != n && (u(!0), m()));
                }, [t.id, n, i, r.name, c, h, m]));
            let A = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: s8.D,
                                onClick: m,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == n && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, m, o, n, a.textValue],
                ),
                p = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(tV.K, {
                                      icon: s8.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: m,
                                      disabled: e || o || (null == n && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, n, a.textValue, m],
                );
            return {
                isGeneratingAI: o,
                generateAIName: m,
                enableAIFeatures: h,
                renderAiGenerateButton: p,
                getThreadNameInputAccessory: A,
            };
        })({ parentChannel: n, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: A }),
        {
            nameError: I,
            messageError: j,
            submit: C,
            submitting: y,
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
                [m, A] = s.useState(!1),
                p = (0, rt.Ay)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ij.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (m) return { shouldClear: !1, shouldRefocus: !1 };
                        (A(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = sK.A.getStickerPreview(t.id, rl.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sZ.A.getUploads(t.id, i_.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? s3(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? s3(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, s0.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: rl,
                            channel: null == n ? t : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), s3(1, (0, s2.cw)(x, t?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(s3(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, s$.x5)(t.id, rl.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, r.textValue, i.name, n, t, m, o],
                ),
                submitting: m,
            };
        })({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: A,
            location: r,
            enableAIFeatures: f,
        }),
        b = (0, s5.Iy)(c, g) ? sP.t : sL.y;
    return (0, l.jsx)("div", {
        className: rn.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(rn.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: rn.Zd,
                children: [
                    (0, l.jsx)(nD.Ip, {
                        className: rn.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: rn.bv,
                            children: [
                                (0, l.jsxs)(sq.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(ri.P0, rn.P0),
                                            children: (0, l.jsx)(b, { className: ri.Kk }),
                                        }),
                                        (0, l.jsxs)(sD.n, {
                                            children: [
                                                (0, l.jsx)(rd, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: I,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: E,
                                                }),
                                                (0, l.jsx)(ro, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ru, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: rn.Eh,
                        children: [
                            (0, l.jsx)(rc, {
                                parentChannel: n,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sB.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: rn.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function ro(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, s5.Iy)(n, s),
        a = (0, l.jsx)(sk.S, {
            disabled: s === s5.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return t || s === s5.jk.Disabled
        ? null
        : (0, l.jsx)(sw.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rd(e) {
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
        h = s7(r, { content: u }),
        m = (0, s5.l1)(t, n),
        A = null != n && !d,
        p = (0, sz.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sU.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, s6.A)(e, !1) }), "" !== e ? M.A.startTyping(t.id) : M.A.stopTyping(t.id));
        },
        onBlur: function () {
            let e = (0, s6.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rc(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, n, l) => {
                (sF.A.saveDraft(t.id, n, i_.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? M.A.startTyping(t.id) : "" === n && M.A.stopTyping(t.id),
                            { textValue: n, richValue: l }
                        ),
                    ));
            },
            [t.id, i],
        ),
        g = s.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return r(t, i, n);
            },
            [r],
        );
    ((0, eJ.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, eJ.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: A }));
    let x = (0, m.bG)([lz.A], () => lz.A.can(eo.xBc.ATTACH_FILES, t)),
        f = s7(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sW.A, { channelId: t.id, type: rl, canAttachFiles: x }),
            (0, l.jsx)("div", { className: rn.xN, children: (0, l.jsx)(sG.U, { error: f }) }),
            (0, l.jsx)(sY.Ay, {
                type: rl,
                channel: t,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: a()(rn.gM, rn.Yy),
                innerClassName: a()(rn.SL, { [rn.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: s1.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function ru(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, m.bG)([sJ.A], () => (null == n ? null : sJ.A.getMessage(t.id, n))),
        s = sQ.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sX.A, {
              className: rn.IL,
              message: i,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rh = n(494208),
    rm = n(40389),
    rA = n(148494),
    rp = n(56562);
function rg(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(td.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: td.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rx, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(tE.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: th.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function rx(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nZ.A)(t),
        r = (0, n3.A)(t),
        a = (0, n9.A)(t.id),
        o = (0, n6.A)(t),
        d = (0, it.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, n0.A)(t),
        h = (0, n1.A)(t),
        A = (0, n2.A)(t, "Toolbar Overflow"),
        p = (0, n7.A)(t),
        g = (0, rm.A)(t),
        x = (0, ie.A)(t),
        f = (0, n5.A)(t),
        E = t.isThread()
            ? (0, l.jsx)(ta.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rA.A.jumpToMessage({ channelId: t.id, messageId: "0", jumpType: rp.vx.INSTANT });
                  },
              })
            : null,
        I = sQ.SY.useSetting(),
        j = (0, m.bG)([lT.A], () => !u().isEmpty(lT.A.getVoiceStatesForChannel(t.id))),
        C = (0, m.bG)([ew.A], () => null != t.parent_id && ew.A.getChannel(t.parent_id)?.type === eo.rbe.GUILD_APP, [
            t.parent_id,
        ]);
    return (0, l.jsxs)(tc.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ta.rX, { children: [A, g] }),
            (0, l.jsxs)(ta.rX, {
                children: [
                    E,
                    o,
                    p,
                    a,
                    !I || j || C
                        ? null
                        : (0, l.jsx)(ta.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, ij.JA)(t);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(ta.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(ta.rX, { children: [c, d] }),
        ],
    });
}
var rf = n(332456),
    rE = n(806411),
    rI = n(973854),
    rj = n(62502);
function rC(e) {
    var t;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([tk.A], () => tk.A.getGuild(d?.getGuildId())),
        h = (0, nV.Ay)(d),
        A = (0, nz.Uf)(d);
    ((t = d),
        (i = (0, m.bG)([lT.A], () => null != t && !u().isEmpty(lT.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (iL.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, ii.N9)(t, { source: iE.H9.VOICE_AUTO_OPEN }));
        }, [i, t]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rf.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rE.q)(d.id), channel_view: o }),
                (0, rI.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(nq.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(ib, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: i_.C.ChannelMessage }),
            (0, l.jsx)(tE.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nW.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("955557"),
                                n.e("947502"),
                                n.e("965789"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, ii.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rj.T,
                children: (0, l.jsx)(nY.A, { channel: d, guild: c, chatInputType: tM.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var ry = n(210714),
    rb = n(402860),
    r_ = n(707554),
    rv = n(140735),
    rN = n(590180),
    rT = n(372320),
    rS = n(562153);
let rR = (0, sl.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rM(e) {
    return rR.useConfig({ location: e }).enabled;
}
var rO = n(215530),
    rL = n(454719),
    rP = n(736653),
    rD = n(311016),
    rk = n(480335),
    rw = n(713517),
    rU = n(397562),
    rG = n(183555),
    rF = n(718019),
    rH = n(977059),
    rB = n(915614),
    rV = n(308244),
    rY = n(743987),
    rW = n(900179),
    rz = n(946356),
    rq = n(465829),
    rX = n(35241),
    rK = n(587168),
    r$ = n(442228),
    rQ = n(744808);
let rJ = (0, sl.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rZ = n(827428);
function r0(e) {
    let { type: t, anchor: n } = e;
    return "staple" === t && "bottom" !== n;
}
function r1(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rJ.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lK.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rZ.lS,
            children: (0, l.jsx)(x.$, {
                variant: "secondary",
                size: "md",
                fullWidth: !0,
                text: z.intl.string(z.t["+Xp3hq"]),
                onClick: o,
            }),
        });
    let d = a
        ? (0, l.jsx)("div", {
              className: rZ.qr,
              children: (0, l.jsx)(tB.D, {
                  onClick: o,
                  className: rZ.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rZ.xQ, children: [(0, l.jsx)(rQ.A, { frame: i, filterLayer: r0 }), d] })
        : d;
}
var r2 = n(518477),
    r3 = n(996988),
    r7 = n(207634),
    r5 = n(561419),
    r6 = n(396095);
function r9(e) {
    let { user: t, channel: n, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rD.A)(t.id),
        o = (0, l$.Ay)(t.id),
        d = (0, rP.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, rG.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rU.A)(u, o, r2.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rw.A)(m);
    function g() {
        (0, rb.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(rG.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rz.A, {
                ref: m,
                user: t,
                displayProfile: o,
                themeType: r3.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r5.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(nD.d_, {
                        className: i ? r5.BE : void 0,
                        children: [
                            (0, l.jsx)(rK.A, { children: (0, l.jsx)(rX.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: r5.wx,
                                children: [
                                    (0, l.jsx)(rB.A, {
                                        user: t,
                                        displayProfile: o,
                                        themeType: r3.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rF.A, {
                                        user: t,
                                        displayProfile: o,
                                        channelId: n.id,
                                        avatarSize: r7.T[r3.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r6.rf,
                                children: [
                                    (0, l.jsx)(rq.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: rS.Ay.getName(null, n.id, t),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rH.A, {
                                            displayProfile: o,
                                            themeType: r3.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r$.A, {
                                                      userId: t.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rW.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rY.A, { userId: t.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rz.A.Overlay, {
                                              className: r6.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rW.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rV.A, {
                                                              userBio: o?.bio,
                                                              userId: t.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rW.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rY.A, { userId: t.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(r1, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rk.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var r8 = n(331322),
    r4 = n(249790),
    ae = n(254828),
    at = n(783123),
    an = n(966430);
function ai(e) {
    let { user: t, channel: n, isRedesignEnabled: i, onHide: r } = e,
        a = (0, l$.Ay)(t.id),
        o = (0, rP.Ay)(),
        d = (0, m.bG)([lN.A], () => lN.A.isBlocked(t.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, rG.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rU.A)(c, a, r2.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(rG.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rz.A, {
                ref: h,
                user: t,
                displayProfile: a,
                themeType: r3.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(nD.d_, {
                    children: (0, l.jsxs)("div", {
                        className: an.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: an.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: an.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: an.N1,
                                        children: [
                                            (0, l.jsx)(r4.A, { user: t }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rS.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r8.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(at.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lK.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(ae.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lK.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
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
var al = n(941143),
    as = n(717421),
    ar = n(31956),
    aa = n(673843),
    ao = n(594832),
    ad = n(321191),
    ac = n(679492),
    au = n(439053),
    ah = n(312381),
    am = n(657538),
    aA = n(984545),
    ap = n(193738),
    ag = n(413737),
    ax = n(394816),
    af = n(695366),
    aE = n(922590),
    aI = n(821269),
    aj = n(131607),
    aC = n(326084),
    ay = n(834708),
    ab = n(154486);
let a_ = (0, sl.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var av = n(158390),
    aN = n(906573);
let aT = new av.A(30 * sn.A.Millis.SECOND, 5 * sn.A.Millis.MINUTE, !0),
    aS = 0;
async function aR() {
    if (aN.A.shouldFetch() && !(Date.now() < aS)) {
        iL.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await s9.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (aT.succeed(),
                (aS = 0),
                iL.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aS = Date.now() + aT.fail()),
                iL.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aM = n(504492);
function aO(e) {
    let { targetUserId: t } = e,
        { isInTreatment: n } = {
            isInTreatment: a_.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t) ?? null, [t]),
        r = (0, ay.d)(i),
        a = n && r,
        {
            isDismissed: o,
            hasFetched: d,
            version: c,
            dismiss: u,
        } = (function (e) {
            let {
                isDismissed: t,
                hasFetched: n,
                version: i,
            } = (0, m.cf)([aN.A], () => {
                let t = Number(aN.A.getVersion());
                return {
                    isDismissed: null != e && aN.A.isDismissedFor(e),
                    hasFetched: aN.A.hasFetched(),
                    version: Number.isFinite(t) ? t : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && aR();
                }, [e]),
                {
                    isDismissed: t,
                    hasFetched: n,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aN.A.isDismissedFor(e) ||
                                (iL.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                s9.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? t : null);
    return a && d && !o && null != i ? (0, l.jsx)(aL, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aL(e) {
    let { targetUser: t, version: i, onDismiss: r } = e,
        a = (0, ab.p)(t.id),
        [o, d] = (0, aj.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lR.m.SIDEBAR, !0),
        c = s.useCallback(
            (e) => {
                (d(e), r());
            },
            [d, r],
        ),
        u = s.useCallback(
            (e) => {
                (en.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.openModalLazy)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(n.bind(n, 809813)),
                                (0, aC.xm)([t.id]),
                            ]),
                            s = i.get(t.id) ?? aC.o.FAIL;
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                results: [{ recipient: t, status: s }],
                                isReminderConfirmation: !1,
                                showRecipientList: !1,
                                recipientName: es.Ay.getName(t),
                            });
                    }));
            },
            [t],
        );
    if (null == o) return null;
    let h = es.Ay.getName(t);
    return (0, l.jsx)(sp, {
        className: aM.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var aP = n(93246),
    aD = n(351906),
    ak = n(383199),
    aw = n(559506),
    aU = n(361311),
    aG = n(931481),
    aF = n(791556),
    aH = n(501193),
    aB = n(383448),
    aV = n(646986),
    aY = n(243166),
    aW = n(812993),
    az = n(123292),
    aq = n(840411);
let aX = (0, sl.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aK = n(666810),
    a$ = n(394300),
    aQ = n(575593),
    aJ = n(498032),
    aZ = n(44120),
    a0 = n(75678),
    a1 = n(317560),
    a2 = n(99161),
    a3 = n(661492),
    a7 = n(146423),
    a5 = n(662349),
    a6 = n(479026),
    a9 = n(636374),
    a8 = n(699976),
    a4 = n(202541),
    oe = n(733484),
    ot = n(880465);
function on(e) {
    let t,
        {
            sku: n,
            wishlistOwner: i,
            wishlistId: r,
            style: o,
            skuPreviewStyle: d,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: m,
            renderChildren: A,
            isNew: p,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, rG.NJ)(),
        x = rM("DMSidePanelWishlistItemCard") ? a8.y.SIZE_78 : a8.y.SIZE_90,
        f = a8.Z[x],
        E = s.useCallback(() => {
            (g({
                action: r2.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                h());
        }, [n, r, h, g]),
        I = s.useCallback(() => {
            (g({
                action: r2.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                m());
        }, [m, n.id, r, n.productLine, g]),
        {
            onBodyClick: j,
            onOverlayClick: C,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, a9.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: I }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: oe.kL,
        children: (0, l.jsxs)(a7.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: n,
            user: i,
            spec: f,
            cardStyle: a()(oe.Nr, o),
            skuPreviewStyle: a()(oe.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((t = b ? (0, a3.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a3.T)(n) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: t }) : t),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aJ.N, { className: oe.Pf }),
                y &&
                    (0, l.jsx)(a5.A, {
                        spec: f,
                        onClick: C,
                        isHoveringOrFocusing: N,
                        label: _,
                        icon: _.length < 6 ? v : void 0,
                    }),
                A?.(y && N),
            ],
        }),
    });
}
function oi(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a2.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: a4.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [t, n, a]),
        d = s.useCallback(() => {
            (0, a1.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: a4.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.id, t.applicationId, n, a]);
    return (0, l.jsx)(on, {
        sku: t,
        analyticsLocations: a,
        wishlistOwner: n,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function ol(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, aZ.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: a4.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, a6.e)({ sku: t, giftRecipient: n, giftingOrigin: a4.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(oe.ML, {
                    [oe.M]: t?.tenantMetadata?.collectibles?.type === aQ.R.AVATAR_DECORATION,
                    [oe.Hm]: t?.tenantMetadata?.collectibles?.type === aQ.R.PROFILE_EFFECT,
                    [oe.hH]: t?.tenantMetadata?.collectibles?.type === aQ.R.PROFILE_FRAME,
                    [oe.qF]: t?.tenantMetadata?.collectibles?.type === aQ.R.NAMEPLATE,
                    [oe.l2]: t?.tenantMetadata?.collectibles?.type === aQ.R.BUNDLE,
                }),
            [t?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(on, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function os(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = t.id;
            (0, a0.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: a4.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        u = r === ao.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(on, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(ot.MO, { [oe.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(oe.fi, { [oe.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(oe.p7, { [oe.SW]: h.length >= 10, [oe.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function or(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(oi, { sku: t, ...n });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(ol, { sku: t, ...n });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(os, { sku: t, ...n });
        default:
            return null;
    }
}
var oa = n(158045),
    oo = n(249203),
    od = n(419731),
    oc = n(695904),
    ou = n(116331),
    oh = n(713348),
    om = n(535089),
    oA = n(815637);
function op(e) {
    let { unownedWishlistItems: t, profileOwner: n, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rG.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, ou.A)(n),
        g = (0, m.bG)([oo.A], () => oo.A.getEntry(n.id)?.lastViewedAt ?? null, [n.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r2.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => t ?? [], [t]),
        E = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && c({ wishlistId: t, action: n, productLines: i });
            },
            [c],
        ),
        I = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: ao.uS.WISHLIST }));
            if (a && e.length < 3) {
                let t = f.some((e) => oa.Ay.isPremiumSku(e.skuId));
                if (!oa.Ay.isPremiumAtLeast(n.premiumType, a4.PremiumTypes.TIER_2) && !t) {
                    let t = a$.A.fromSKU((0, aq.rI)());
                    null != t && e.push({ item: t, source: ao.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, n.premiumType]),
        j = (0, s.useMemo)(
            () =>
                new Set(
                    I.map((e) => {
                        let { item: t } = e;
                        return t.skuProductLine;
                    }),
                ),
            [I],
        ),
        C = (0, om.A)({ wishlistId: r ?? null, onAction: E, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                I.map((e, t) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              or,
                              {
                                  sku: i.sku,
                                  index: t,
                                  wishlistOwner: n,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, od.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sE.Vq),
            [o, x, n, I, r, h, g],
        ),
        b = h && y.length > 0,
        _ = (0, s.useRef)(!1);
    return ((0, s.useEffect)(() => {
        b && !_.current && ((_.current = !0), d({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [b, d]),
    0 === y.length)
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(rz.A.Overlay, {
                  ref: C,
                  className: oA.kL,
                  children: [
                      p && (0, l.jsx)(oc.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: oA.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: oA.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aW.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: tq.A.colors.BADGE_PRIMARY_BACKGROUND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(az.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(r_.F, { children: (0, l.jsx)("div", { className: oA.vY, children: y }) }),
                  ],
              }),
          });
}
function og(e) {
    let { isLoading: t, unownedWishlistItems: n, canSeeWishlist: i = !1, ...s } = e,
        r = aX.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, oh.A)(s.profileOwner), t || s.profileOwner.bot || ((null == n || 0 === n.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aK.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(op, { ...s, unownedWishlistItems: n, isNitroRecEnabled: r }),
    });
}
function ox(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lN.A], () => ({
            relationshipType: lN.A.getRelationshipType(t.id),
            originApplicationId: lN.A.getOriginApplicationId(t.id),
        })),
        h = (0, aE.fi)(t.id),
        A = (0, aI.q)({ userId: t.id }),
        p = (0, m.bG)([aD.A], () => aD.A.hidePersonalInformation),
        g = (0, m.bG)([ad.A], () => ad.A.getUserProfile(t.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([ad.A], () => ({ defaultWishlistId: ad.A.getFirstWishlistId(t.id) })),
        { wishlist: E, isFetching: I } = (0, ao.fw)({ wishlistId: o ? f : void 0, userId: t.id });
    (0, aa.A)(E);
    let j = s.useMemo(() => E?.items.filter((e) => !e.isOwned) ?? null, [E]);
    return (0, l.jsxs)("div", {
        className: r6.rf,
        children: [
            (0, l.jsx)(aw.A, { userId: t.id }),
            (0, l.jsxs)("div", {
                className: r6.pq,
                children: [
                    (0, l.jsx)(rq.Ay, {
                        user: t,
                        guildId: r.guild_id,
                        displayName: rS.Ay.getName(null, r.id, t),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aY.A, { userId: t.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rH.A, {
                            displayProfile: i,
                            themeType: r3.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aF.A, { user: t, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rz.A.Overlay, {
                    children: (0, l.jsx)(aG.A, { user: t, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rz.A.Overlay,
                    {
                        children: (0, l.jsx)(aG.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aB.A, { user: t }),
            i?.private &&
                (0, l.jsx)(rz.A.Overlay, { children: (0, l.jsx)(aH.A, { username: rS.Ay.getName(null, r.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(rz.A.Overlay, {
                    className: r6.Lw,
                    children: (0, l.jsx)(rW.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: af.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aP.T, { userId: t.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r$.A, {
                            userId: t.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rW.A, {
                            heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rY.A, { userId: t.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r6.kR,
                children: [
                    o && x && (0, l.jsx)(am.A, { user: t, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aV.A, { user: t, currentUser: n, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(ak.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rW.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aU.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rz.A.Overlay, {
                              className: r6.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rW.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rV.A, {
                                              userId: t.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(ak.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rW.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aU.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rW.A, {
                                              heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rY.A, { userId: t.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(og, {
                            profileOwner: t,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                d?.({ tabSection: r2.RP.WISHLIST });
                            },
                            canSeeWishlist: null != E,
                        }),
                    r.isDM() && (0, l.jsx)(aO, { targetUserId: t.id }),
                ],
            }),
        ],
    });
}
var of = n(114212),
    oE = n(913453),
    oI = n(229187),
    oj = n(21241),
    oC = n(503062),
    oy = n(51943),
    ob = n(847374),
    o_ = n(320448),
    ov = n(723200);
function oN(e) {
    let { section: t, header: n, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rG.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? ob.a : o_._;
    return (0, l.jsxs)("section", {
        className: ov.uW,
        children: [
            (0, l.jsxs)(tB.D, {
                className: a()(ov.wx, ov.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    (h(!u), u || (d({ action: "PRESS_SECTION", section: t }), o?.()));
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(m, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(ov.p_, r), children: i }),
        ],
    });
}
var oT = n(341278);
function oS(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, rG.NJ)(),
        r = (0, nJ.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, oE.A)(t),
        c = !t.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rz.A.Overlay, {
              className: oT.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oN, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oT.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  oy.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, nI.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oj.A, { className: oT.yF }),
                  c &&
                      (0, l.jsx)(oN, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oT.p_,
                          onExpand: () => (0, oI.A)(t.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oT.nC,
                                                children: [
                                                    (0, l.jsx)(of.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(of.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            oC.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, rb.openUserProfileModal)({
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
function oR(e) {
    let { user: t, currentUser: n, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, l$.Ay)(t.id),
        c = (0, rP.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== t.id && ((h.current = t.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, rG.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id });
    (0, rU.A)(A, d, r2.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rw.A)(g),
        E = (0, ac.fC)(),
        I = (0, rT.A)(d?.profileFrame?.skuId);
    (0, ar.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, as.z)({ opacity: +(null != E.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, rb.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([ad.A], () => ({ defaultWishlistId: ad.A.getFirstWishlistId(t.id) })),
        { wishlist: _, isFetching: v } = (0, ao.fw)({ wishlistId: r ? void 0 : b, userId: t.id });
    (0, aa.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(rG.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(ac.Hl, {
                value: E,
                children: (0, l.jsxs)(rz.A, {
                    ref: g,
                    user: t,
                    displayProfile: d,
                    themeType: r3.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r5.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(ah.A, {}),
                        null != E.interactionType && (0, l.jsx)(al.animated.div, { style: j, className: r5.tB }),
                        (0, l.jsxs)(nD.d_, {
                            className: a()(r && r5.BE, !r && null != I && r5.It),
                            children: [
                                (0, l.jsxs)(rK.A, {
                                    children: [
                                        (0, l.jsx)(ap.A, { user: t, themeType: r3.d.SIDEBAR }),
                                        t.bot ? (0, l.jsx)(aA.A, { user: t }) : (0, l.jsx)(ag.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r5.wx,
                                    children: [
                                        (0, l.jsx)(rB.A, {
                                            user: t,
                                            displayProfile: d,
                                            themeType: r3.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r5.vK,
                                        }),
                                        (0, l.jsx)(au.A, { className: r5.oR }),
                                        (0, l.jsx)(rF.A, {
                                            user: t,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r7.T[r3.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(ax.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: r3.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ox, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == E.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : C,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: r5.sJ,
                                        children: (0, l.jsx)(am.A, {
                                            user: t,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r5.vS,
                                        children: (0, l.jsx)(og, {
                                            profileOwner: t,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: r2.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oS, { user: t, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(r1, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rk.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != I && (0, l.jsx)(rQ.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oM = n(901600);
function oO(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lQ(),
        [o, d] = (0, rO.A)(n),
        [c, u] = s.useState(!1),
        h = rM("UserProfileSidebarRenderer"),
        A = (0, l$.Ay)(n),
        p = A?.profileFrame?.skuId,
        g = (0, rT.A)(p),
        x = (0, m.bG)([rN.A], () => rN.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: t.id,
            };
            null != i ? (0, rL.A)(i, e) : (0, rL.A)(n, void 0, e);
        }, [i, n, t.id, h]),
        null == i ||
            null == r ||
            !a ||
            (h && !c && A?.isLoaded !== !0) ||
            (h && !c && null != p && p !== g?.skuId && x?.state !== "success" && x?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        E = rS.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oM.H : void 0,
        children: (0, l.jsx)(r_.F, {
            component: (0, l.jsx)(rv.A, {
                children: (0, l.jsx)(r_.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: E }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(ai, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r9, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oR, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oL = n(522556),
    oP = n(225315),
    oD = n(684407),
    ok = n(95701),
    ow = n(919638),
    oU = n(763827),
    oG = n(812771),
    oF = n(506309),
    oH = n(598748),
    oB = n(681154),
    oV = n(975460),
    oY = n(587895),
    oW = n(429913),
    oz = n(201718),
    oq = n(339580),
    oX = n(633075),
    oK = n(903209),
    o$ = n(382483),
    oQ = n(385113);
let oJ = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oZ(e) {
    let [t, n] = s.useState(new Set()),
        i = s.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []),
        r = s.useMemo(
            () => ({
                markAsVisible: i,
                useInjectEntriesWithPreviewData: (e) =>
                    (function (e, t) {
                        let n,
                            i,
                            l,
                            r,
                            a,
                            o,
                            d,
                            c,
                            u,
                            h,
                            A,
                            p,
                            g,
                            x,
                            f,
                            E,
                            { appsWithConfigs: I, isLoadingConfigs: j } =
                                ((n = sQ.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, o$.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    n && (0, o$.i$)().catch(() => {});
                                }, [n]),
                                (i = (0, m.bG)([oQ.A], () => oQ.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([oQ.A], () => oQ.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([oQ.A], () => oQ.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([oQ.A], () => oQ.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === oQ.e.NOT_FETCHED ||
                                        i === oQ.e.FETCHING ||
                                        (n && (l === oQ.e.NOT_FETCHED || l === oQ.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oB.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => t.has(e.id)) ?? [],
                                [e, t],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [oY.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            oY.A.isFetchingApplication(e) ||
                                            (null == oY.A.getApplication(e) && !oY.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, oW.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sE.Vq)
                                            .map((e) => [e.id, (0, oV.t)(e)])
                                            .filter(sE.QE)
                                            .filter((e) => {
                                                let [t, n] = e;
                                                return I.has(n.id);
                                            }),
                                    ),
                                [I, u],
                            )),
                            (A = s.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: v } =
                                ((p = (0, m.cf)([oq.A], () =>
                                    Object.fromEntries(y.map((e) => [e, oq.A.getUserIdentities(e)]).filter(sE.QE)),
                                )),
                                (g = (0, m.bG)([oq.A], () =>
                                    y.some((e) => oq.A.getFetchState(e) === oq.e.NOT_FETCHED || oq.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && oz.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([ad.A], () =>
                                    Object.fromEntries(y.map((e) => [e, ad.A.getUserProfile(e) ?? null]).filter(sE.QE)),
                                )),
                                (f = (0, m.yK)([ad.A], () =>
                                    y.filter((e) => null == ad.A.getUserProfile(e) && !ad.A.isFetchingProfile(e)),
                                )),
                                (E = (0, m.bG)([ad.A], () => y.some((e) => ad.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, oK.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || E }),
                            S = (0, m.cf)(
                                [oQ.A],
                                () => Object.fromEntries([...I].map((e) => [e, oQ.A.getConfig(e)]).filter(sE.QE)),
                                [I],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oB.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let t = C[e.extra.application_id] ?? null;
                                        if (null == t) return e;
                                        let n = S[t.id] ?? null;
                                        if (null == n || null == n.surfaces[oH.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, oX.E)(e, t.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: l },
                                        };
                                    });
                            }, [R, e, C, S, _, N]),
                            [O, L] = s.useState(M);
                        return (
                            s.useEffect(() => {
                                R || L(M);
                            }, [R, M]),
                            O
                        );
                    })(e, t),
            }),
            [i, t],
        );
    return (0, l.jsx)(oJ.Provider, { value: r, children: e.children });
}
var o0 = n(900797),
    o1 = n(890856),
    o2 = n(180170),
    o3 = n(435738),
    o7 = n(38055);
let o5 = "content-inventory-feed",
    o6 = `${o5}-settings`,
    o9 = `${o5}-toggle`;
var o8 = n(569709);
let o4 = s.memo(function (e) {
        let t,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([o3.A], () => o3.A.hidden),
            h = (0, c.omit)((0, C.rm)(o6), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(o9), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                (0, j.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                });
            }, []),
            x = s.useCallback(() => (u ? (0, o2.Il)() : r()), [u, r]),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(o7.A, { ...h }),
                    (0, l.jsx)("span", { className: o8.AN }),
                    p
                        ? ((t = u
                              ? (0, l.jsx)(o0.t, { className: o8.wT })
                              : o
                                ? (0, l.jsx)(ob.a, { className: o8.wT })
                                : (0, l.jsx)(o_._, { className: o8.wT })),
                          (0, l.jsx)("span", { className: o8.wT, children: t }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(o1.s, {
                      ...A,
                      className: a()(o8.N1, { [o8.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: o8.N1, onContextMenu: g, children: f }),
        });
    }),
    de = function () {
        return null;
    };
var dt = n(963307),
    dn = n(424994);
let di = en.default.track;
function dl(e, t) {
    di(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: dn.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
var ds = n(468581),
    dr = n(808666),
    da = n(414499),
    dd = n(323384),
    dc = n(55730),
    du = n(765379),
    dh = n(359549),
    dm = n(284525),
    dA = n(482030),
    dp = n(583846),
    dg = n(506326);
n(333007);
var dx = n(342952),
    df = n(315710),
    dE = n(276293),
    dI = n(935063),
    dj = n(778712),
    dC = n(696986),
    dy = n(97808),
    db = n(738188),
    d_ = n(983851),
    dv = n(31300),
    dN = n(308528),
    dT = n(401843),
    dS = n(375499),
    dR = n(429433),
    dM = n(324688);
let dO = (0, ok.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dL(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: i,
            showEmojiButton: r = !1,
            renderAttachButton: o,
            autoFocus: d = !0,
            onFocus: c,
            channel: u,
            className: h,
        } = e,
        [m, A] = s.useState(""),
        [p, g] = s.useState((0, sV.x7)("")),
        x = tM.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sY.Ay, {
        ref: f,
        placeholder: t,
        editorClassName: h,
        className: a()(dM.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dO,
        onChange: (e, t, n) => {
            (A(t), g(n));
        },
        type: r ? { ...x, emojis: { button: !0 } } : x,
        textValue: m,
        richValue: p,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), A(""), g((0, sV.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: i,
        focused: d,
        onFocus: c,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == f.current) return "top";
            let e = f.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function dP(e) {
    var t;
    let { onSelectEmoji: n, onClick: i } = e,
        r = (0, rP.Ay)(),
        [a, o] = s.useState(!1),
        d = s.useRef(null),
        c = s.useRef(null);
    return (
        (t = () => o(!1)),
        s.useEffect(() => {
            function e(e) {
                "Escape" === e.key && t();
            }
            function n(e) {
                null != e.target && (d?.current?.contains(e?.target) || t());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    (document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n));
                }
            );
        }, [t, d]),
        (0, l.jsx)(td.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(f.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, l.jsx)(dR.C, {
                                messageId: eo.dJq,
                                channel: dO,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: i, isBurst: l } = e;
                                    null != t && (n({ emoji: t, willClose: i, isBurst: l }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(eN.m, {
                    text: z.intl.string(z.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: c,
                        className: dM.mJ,
                        children: (0, l.jsx)(dS.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                (i?.(), o(!0));
                            },
                        }),
                    }),
                }),
        })
    );
}
var dD = n(402216),
    dk = n(822123),
    dw = n(409626),
    dU = n(692969),
    dG = n(711589),
    dF = n(607407),
    dH = n(832163),
    dB = n(533562),
    dV = n(805901),
    dY = n(565645);
n(90295);
var dW = n(7584);
(n(850992), n(690521));
var dz = n(806931),
    dq = n(307731),
    dX = n(866780);
function dK(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rw.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tB.D, {
            onClick: i,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(dV.c, {
                config: dS.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(al.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dY.A, {
                            className: a()(dX.Zg, r, { [dX.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
(dq.EmojiIntention.CHAT,
    [
        dW.Ay.getByName("thumbsup"),
        dW.Ay.getByName("eyes"),
        dW.Ay.getByName("laughing"),
        dW.Ay.getByName("watermelon"),
        dW.Ay.getByName("fork_and_knife"),
        dW.Ay.getByName("yum"),
    ].filter(sE.Vq));
var d$ = n(636585),
    dQ = n(543465),
    dJ = n(607567),
    dZ = n(774926),
    d0 = n(20805),
    d1 = n(22869),
    d2 = n(623671),
    d3 = n(428249),
    d7 = n(327098),
    d5 = n(576757),
    d6 = n(202195),
    d9 = n(140651),
    d8 = n(345394);
let d4 = function (e) {
    let { children: t } = e,
        [n, i] = (0, aj.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lR.i.USER_DISMISS);
    }, [i]);
    return n !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(lm.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: d8.A },
                  }),
              ],
          });
};
var ce = n(315246),
    ct = n(866323),
    cn = n(252392);
let ci = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, ct.p)(
            t,
            {
                from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: r(
            (e, t) =>
                t &&
                (0, l.jsx)(al.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(cn.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(cn.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cl = n(381941),
    cs = n(231188);
let cr = (0, t8.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("419121"),
                n.e("162775"),
                n.e("60882"),
                n.e("489020"),
                n.e("919789"),
                n.e("669130"),
                n.e("70866"),
                n.e("802890"),
                n.e("232960"),
                n.e("74886"),
                n.e("713273"),
                n.e("656997"),
                n.e("101105"),
                n.e("263406"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("833292"),
                n.e("222969"),
                n.e("515363"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("795854"),
                n.e("870088"),
                n.e("300641"),
                n.e("571163"),
                n.e("586662"),
                n.e("831377"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("279774"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("590088"),
                n.e("807003"),
                n.e("46083"),
                n.e("152133"),
                n.e("747802"),
                n.e("626353"),
                n.e("71169"),
                n.e("906470"),
                n.e("736663"),
                n.e("82937"),
                n.e("987221"),
                n.e("157064"),
                n.e("156957"),
                n.e("918786"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("261868"),
                n.e("84978"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("307107"),
                n.e("896622"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("440727"),
                n.e("387970"),
                n.e("847445"),
                n.e("547510"),
                n.e("966366"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("156422"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("905581"),
                n.e("76428"),
                n.e("863232"),
                n.e("517888"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("811133"),
                n.e("861060"),
                n.e("364827"),
                n.e("77333"),
                n.e("264572"),
                n.e("217229"),
                n.e("477175"),
                n.e("960235"),
                n.e("716460"),
                n.e("198329"),
                n.e("678157"),
                n.e("942374"),
                n.e("147134"),
                n.e("331988"),
                n.e("10866"),
                n.e("236850"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("190779"),
                n.e("373122"),
                n.e("724285"),
                n.e("221856"),
                n.e("755936"),
                n.e("609705"),
                n.e("899843"),
                n.e("904448"),
                n.e("833703"),
                n.e("256274"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("811939"),
                n.e("630267"),
                n.e("576909"),
                n.e("27355"),
                n.e("407170"),
                n.e("255580"),
                n.e("299854"),
                n.e("608557"),
                n.e("247660"),
                n.e("506620"),
                n.e("649362"),
                n.e("773534"),
                n.e("153535"),
                n.e("147864"),
                n.e("276177"),
                n.e("93461"),
                n.e("437961"),
                n.e("604172"),
                n.e("949013"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    ca = s.createContext(void 0);
function co(e) {
    let { children: t } = e,
        n = s.useRef(null),
        i = s.useId();
    return (
        (0, df.tj)(n),
        (0, l.jsx)(ca.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: n,
                className: cs.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function cd(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, d9.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cs.ZK, e, i), style: s, children: t }),
        })
    );
}
function cc(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: cs.$m, children: t });
}
function cu(e) {
    var t;
    let n,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [I, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lz.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lz.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, d6.A)(n),
                o = (0, nV.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iw.A)(t?.id),
                c = (0, m.bG)([tk.A], () => (null != a ? tk.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dJ.Ay], () => (null != a ? dJ.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lT.A], () => lT.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let t = ew.A.getDMFromUserId(e.user.id),
                            n = null != t && dQ.Ay.isChannelMuted(null, t),
                            i = lN.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [u]);
            if (null == a || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != r;
            function g(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(db.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cs.vb,
                                  }),
                                  z.intl.string(z.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, l.jsx)(
                    eN.m,
                    {
                        "aria-label": i ? z.intl.string(z.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: t,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: cs.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(tB.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (E.A.updateChatOpen(a.id, !0), (0, ii.iN)(a.id), i?.(a));
                                        },
                                        className: cs.I3,
                                        children: [
                                            (0, l.jsx)(nx.Ay, {
                                                guild: c,
                                                size: nx.Ay.Sizes.SMOL,
                                                className: cs.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(o_._, {
                                                size: "xxs",
                                                color: tq.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(d_.H, { size: "xs", color: tq.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: cs.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(d$.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(dy.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dj._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cs.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dC.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lY.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dv.k : d_.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, d7.A)(h),
        L =
            ((t = O),
            (n = (0, m.bG)([tk.A], () => tk.A.getGuild((0, e_.D)(t?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(t?.location)))),
            (r = (0, m.yK)([ee.default], () => t?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, nV.Ay)(i)),
            null != t && null != n && null != i && ok.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cs.kP,
                              children: [
                                  (0, l.jsxs)(tB.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, ii.iN)(i.id),
                                      className: cs.I3,
                                      children: [
                                          (0, l.jsx)(nx.Ay, {
                                              guild: n,
                                              size: nx.Ay.Sizes.SMOL,
                                              className: cs.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(o_._, {
                                              size: "xxs",
                                              color: tq.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dE.N, { size: "xs", color: tq.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: cs.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(d$.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(dy.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: dj._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cs.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dC.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rS.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, nV.Ay)(o, !0),
        H =
            null != o && I
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        B = I ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (en.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: dn.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, nH.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                I)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
            else {
                let e = await dN.A.getOrEnsurePrivateChannel(c.id);
                t = ew.A.getChannel(e) ?? null;
            }
            return (
                d()(null != t, "Send channel must be defined"),
                W({
                    reply: `:${n.name}:`,
                    sendToChannel: t,
                    onComplete: (e, t) => {
                        (S(!0),
                            setTimeout(() => {
                                (N(!1), u(e, t));
                            }, 600));
                    },
                    interactionType: dn.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let t;
        if (((0, nH.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
        else {
            let e = await dN.A.openPrivateChannel({ recipientIds: c.id }),
                n = ew.A.getChannel(e);
            (d()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === eo.rbe.DM ? dn.PA.DM_REACTION_MESSAGE_SENT : dn.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: t, interactionType: n, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, d3.d)({
                channel: n,
                content: t,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: cl.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, n));
    }
    let q = g ?? R ?? L;
    function X() {
        (j((e) => !e), w && C?.focus());
    }
    function K(e) {
        (U(e), e && C?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(ci, { sent: T, shown: v, className: cs.Jt }),
            q ??
                (0, l.jsx)(d4, {
                    children: (0, l.jsxs)("div", {
                        className: cs.T7,
                        children: [
                            (0, l.jsx)(ch, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dP, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cs.P2 : cs.VE,
                children: [
                    (0, l.jsx)(dL, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: I ? o : void 0,
                        showEmojiButton: null != q,
                        className: cs.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(tB.D, {
                                          className: cs.wD,
                                          onClick: X,
                                          children: I
                                              ? (0, l.jsx)(dE.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dI.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tB.D, {
                            onClick: () => K(!1),
                            className: cs.i3,
                            children: (0, l.jsx)(nQ.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: tq.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cs.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => K(!0),
                                    size: "md",
                                    text: z.intl.string(z.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        P,
                    ],
                }),
        ],
    });
}
let ch = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dk.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, nj._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: s } = e;
            return null != s
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eN.m, {
                              asContainer: !0,
                              text: z.intl.formatToPlainString(z.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": z.intl.formatToPlainString(z.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(dK, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n({ emoji: t }),
                                  className: cs.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function cm(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = t?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, d5.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, d6.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cs.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cs.WP,
                children: [
                    (0, l.jsx)(dx.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dj._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dC.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(cs.Xn, cs.zA),
                        children: z.intl.format(n, {
                            user0: rS.Ay.getName(o, t?.id, g[0]),
                            user1: rS.Ay.getName(o, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(cs.Mj, cs.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    d1.A,
                                    {
                                        textClassName: a()(cs.Mj, cs.nk),
                                        text: e,
                                        user: g[0],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    d1.A,
                                    {
                                        textClassName: a()(cs.Mj, cs.nk),
                                        text: e,
                                        user: g[1],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != p && (0, l.jsx)(dD.Ay, { size: dD.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(ce.A, { user: A, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cA(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(tB.D, { className: cs.Zw, onClick: n, children: t });
}
function cp(e) {
    let {
            title: t,
            subtitle: n,
            badges: i,
            children: r,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            headerIcons: u,
            disableGameProfileLinks: h = !1,
            showCoverImage: A = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: g,
            ...x
        } = e,
        { entry: f } = x,
        E = (0, d0.zD)(f),
        I = E ? f.extra?.application_id : void 0,
        j = (0, dB.W)();
    null != j && (I = j);
    let C = (0, dU.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : I,
                source: dw.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(dn.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dZ.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dH.A], () => dH.A.getDetectableIdsToApplicationIds()),
        N = E ? C : void 0,
        T = s.useContext(ca);
    return (0, l.jsxs)("div", {
        className: cs.au,
        children: [
            (0, l.jsx)(cm, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(cd, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cs.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cs.Fb,
                                children: (0, l.jsx)(d2.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: d2.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cs.iC,
                                children: [
                                    (0, l.jsx)(cA, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(cs.$2, { [cs.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(cA, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cs.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dC.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cs.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != v[I]
                ? (0, l.jsx)(cr, {
                      className: cs.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: a8.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cg(e) {
    let {
            title: t,
            subtitle: n,
            badges: i,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            onUserPopoutClosed: u,
            trackRankingItemInteraction: h,
            ...A
        } = e,
        { actionString: p, canWatch: g } = (0, dG.K)(a),
        { entry: x } = A,
        f = (0, d0.zD)(x),
        E = f ? x.extra?.application_id : void 0,
        I = (0, dB.W)();
    null != I && (E = I);
    let j = (0, dU.A)(
            {
                location: "ContentPopout",
                applicationId: E,
                source: dw.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(dn.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, d7.A)(x),
        { largeImage: N, smallImage: T } = (0, dZ.D8)(y, b ?? v),
        { largeImage: S } = (0, dZ.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([dH.A], () => dH.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(ca);
    return (0, l.jsxs)("div", {
        className: cs.au,
        children: [
            (0, l.jsx)(cm, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(cd, {
                backgroundImgSrc: S?.src,
                className: cs.uR,
                children: [
                    (0, l.jsx)(cA, {
                        onClick: g
                            ? () => {
                                  (lx.default.selectVoiceChannel(a.channelId), (0, dT.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cs.nh,
                            children: [
                                (0, l.jsx)(dF.A, { className: cs.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cs.NE,
                                        children: (0, l.jsx)(_.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: p,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: cs.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: cs.Fb,
                                    children: (0, l.jsx)(d2.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: d2.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cs.gv,
                                children: [
                                    (0, l.jsx)(cA, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: cs.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(cA, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cs.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dC.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != M[E]
                ? (0, l.jsx)(cr, {
                      className: cs.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: a8.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cx = n(299846);
let cf = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cx.u)(n);
    function u() {
        (0, dA.hg)(n.extra.application_id);
    }
    let { data: h } = (0, tD.YY)(n.extra.application_id),
        m = (0, dh.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dg.iT, { location: dg.N5.POPOUT, entry: n }),
        p = (0, l.jsx)(cp, {
            channel: t,
            userDescription: (0, dp.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dc.A)(d, eo.jUm.JOIN) || (0, du.A)(d),
        f = g
            ? (0, l.jsx)(dm.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dr.I,
              })
            : null,
        E =
            null == m
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: m,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: da.h,
                  }),
        I =
            null != E || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: dd.k,
                  }),
        j = [E, g && !r ? f : I].filter(sE.Vq);
    return (0, l.jsxs)(co, {
        children: [
            p,
            (0, l.jsx)(cc, {
                children: (0, l.jsx)(cu, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: t,
                    entry: n,
                    buttons: j,
                }),
            }),
        ],
    });
};
var cE = n(322789),
    cI = n(808380),
    cj = n(687966),
    cC = n(960076),
    cy = n(544441),
    cb = n(562708),
    c_ = n(139286);
function cv(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(n),
        s = (0, dh.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, c_.A)({
            name: cb.ImpressionNames.CLOUD_PLAY_CTA,
            type: cb.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: da.h,
                text: z.intl.string(z.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var cN = n(601007),
    cT = n(648246),
    cS = n(308335),
    cR = n(790381),
    cM = n(266080),
    cO = n(968309),
    cL = n(30370);
function cP(e) {
    let t = (0, m.bG)([cL.A], () => cL.A.getAccounts().some((t) => t.type === e)),
        n = s.useCallback(() => {
            if (null == e) return null;
            (0, cO.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var cD = n(18282);
let ck = [...cE.n, dg.Yq],
    cw = {
        [cI.Y.DESKTOP]: null,
        [cI.Y.LINUX]: null,
        [cI.Y.MACOS]: null,
        [cI.Y.NINTENDO]: null,
        [cI.Y.IOS]: null,
        [cI.Y.ANDROID]: null,
        [cI.Y.XBOX]: cM.A,
        [cI.Y.PLAYSTATION]: cR.A,
    },
    cU = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cx.u)(n),
            { streamPreviewUrl: A, stream: p } = (0, d6.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            f = null != g ? cw[g] : null,
            E = cP(g === cI.Y.XBOX ? eo.fg2.XBOX : g === cI.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: I } = (0, tD.YY)(x),
            j = (0, cy.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dh.JC)(I),
            b = (0, cS.o)(h?.application_id ?? m?.applicationId ?? I?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dg.mG, {
                location: null == A ? dg.N5.POPOUT : dg.N5.STREAMING_POPOUT,
                children: ck.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(cp, {
                          channel: t,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cD.A, { onClick: E, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dp.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cN.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cg, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: c,
                          badges: _,
                          userDescription: z.t["6oWFUN"],
                          entry: n,
                          stream: p,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cN.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          cv,
                          { application: I, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, dc.A)(h, eo.jUm.JOIN) || (0, du.A)(h))
                    ? (0, l.jsx)(
                          dm.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cj.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cC.A)(h)
                    ? (0, l.jsx)(cT.A, { activity: h, size: "md", variant: "primary", icon: tX.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sE.Vq);
        return (0, l.jsxs)(co, {
            children: [
                v,
                (0, l.jsx)(cc, {
                    children: (0, l.jsx)(cu, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: d,
                        channel: t,
                        entry: n,
                        buttons: T,
                    }),
                }),
            ],
        });
    },
    cG = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function cF(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e,
        { data: r } = (0, tD.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, dh.Ay)({ application: r, analyticsLocations: a }),
        d = (0, nH.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && n,
        { activeEntryId: u, setActiveEntryId: h } = cG(),
        m = u === t.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, aj.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(t.id);
    }, [u, c, t.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lR.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [E, I] = s.useState(!1);
    return (
        f && !E && I(!0),
        (0, c_.A)(
            {
                name: cb.ImpressionNames.CLOUD_PLAY_CTA,
                type: cb.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !E },
            [E],
        ),
        (0, l.jsx)(lm.A, {
            title: z.intl.string(z.t["+WNDtV"]),
            body: z.intl.string(z.t["5QKxGI"]),
            targetElementRef: i,
            shouldShow: f,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/5915cd247ac6483ec4affbfd6004c9f0379475a4de474e3d2021fc013022a823.svg",
            },
            actions: [
                {
                    icon: da.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lR.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cH = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(cF, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var cB = n(363670),
    cV = n(205327),
    cY = n(52133),
    cW = n(835723),
    cz = n(172710),
    cq = n(655116),
    cX = n(763758),
    cK = n(286617),
    c$ = n(533207),
    cQ = n(121090),
    cJ = n(693879),
    cZ = n(809854),
    c0 = n(272984),
    c1 = n(170699);
function c2(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, cZ.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, i),
                s = n - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dp.W6)({ start: 0 }, s) };
        }, [t, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: c1.lu,
              children: [
                  (0, l.jsx)(cJ.z, { entry: n }),
                  (0, l.jsx)("div", { className: c1.Lt, children: (0, l.jsx)("div", { className: c1.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: c1.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function c3(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cB.u7)(r),
        g = cP(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cq.A, sr.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cK.A)(cq.A, sr.default, p, c) : void 0),
            [c, p],
            cY.A,
        );
    if (null == c || null == u) return null;
    let E = h,
        I = [];
    u.media.provider === cV.X.SPOTIFY &&
        ((n = () => {
            (0, cz.Mp)(c);
        }),
        (i = () => {
            (0, cz.QX)(c, p.id);
        }),
        (t = () => {
            null != g ? g() : (0, cz.Mp)(c);
        }),
        (E = (0, l.jsx)(cX.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cs.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cz.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            I.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: cW.J,
                        onClick: function () {
                            null != f && ((0, c$.A)(f, c0.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(cp, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cV.X.SPOTIFY
                ? (0, l.jsx)(cD.A, { onClick: t, "aria-label": z.intl.string(z.t.rRffNz), Icon: cQ.A })
                : null,
        userDescription: (0, dp.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: n,
        subtitle: E,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(c2, { activity: c }),
    });
    return (0, l.jsxs)(co, {
        children: [
            j,
            (0, l.jsx)(cc, {
                children: (0, l.jsx)(cu, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: I,
                }),
            }),
        ],
    });
}
var c7 = n(903134),
    c5 = n(56121),
    c6 = n(263577),
    c9 = n(868065),
    c8 = n(804779);
let c4 = [dg.Y8],
    ue = [c5.j.WEEK],
    ut = s.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, dZ.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dp.TQ)(t);
        return null != r && (0, sE.S1)(r, ue)
            ? (0, l.jsxs)(c9.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(c9.UA, {
                          children: [
                              (0, l.jsx)(c9.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(c9.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(dg.mG, {
                                  location: dg.N5.CARD,
                                  children: c4.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(c6.V, { src: s?.src, size: 48, className: c8.xn }),
                  ],
              })
            : null;
    });
var un = n(210528);
let ui = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        c = (0, dp.TQ)(n),
        u = cP(eo.fg2.SPOTIFY);
    if (null == d || !(0, sE.S1)(c, ue)) return null;
    function h() {
        let e = c0.M0.ALBUM,
            t = un.A.isProtocolRegistered()
                ? c0.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : c0.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(co, {
        children: [
            (0, l.jsx)(cp, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = c0.M0.ARTIST,
                        t = un.A.isProtocolRegistered()
                            ? c0.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : c0.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: h,
                channel: t,
                entry: n,
                headerIcons:
                    a === cV.X.SPOTIFY
                        ? (0, l.jsx)(cD.A, { onClick: u, Icon: cQ.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dg.mG, {
                    location: dg.N5.POPOUT,
                    children: c4.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(cc, {
                children: (0, l.jsx)(cu, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: t, entry: n }),
            }),
        ],
    });
};
var ul = n(977001);
let us = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cx.u)(n),
        c = (0, dp.ty)(n),
        u = (0, dp.TQ)(n);
    if (null == a || null == c || null == u || !(0, ul._E)(u)) return null;
    let h = null != n.extra.platform ? cw[n.extra.platform] : null;
    return (0, l.jsxs)(co, {
        children: [
            (0, l.jsx)(cp, {
                channel: t,
                headerIcons: null == h ? null : (0, l.jsx)(cD.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: n,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dg.mG, {
                    location: dg.N5.POPOUT,
                    children: ul.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cc, {
                children: (0, l.jsx)(cu, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var ur = n(514243),
    ua = n(347306),
    uo = n(123917),
    ud = n(998218);
let uc = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        a = cP(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == n.extra.url) return;
        let e = ud.A.safeParseWithQuery(n.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, uo.h)({ href: ud.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(co, {
              children: [
                  (0, l.jsx)(cp, {
                      channel: t,
                      entry: n,
                      userDescription: (0, dp.JM)(n) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cD.A, {
                          onClick: a,
                          Icon: ua.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dg.mG, {
                          location: dg.N5.POPOUT,
                          children: ur.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cc, {
                      children: (0, l.jsx)(cu, {
                          onReaction: i,
                          onVoiceChannelPreview: s,
                          user: r,
                          channel: t,
                          entry: n,
                      }),
                  }),
              ],
          });
};
function uu(e) {
    return e?.type === dt.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oB.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function uh(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case oB.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cE.A, { ...n, entry: t });
        case oB.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ur.A, { ...n, entry: t });
        case oB.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ul.Ay, { ...n, entry: t });
        case oB.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ut, { ...n, entry: t });
        case oB.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cB.Ay, { ...n, entry: t });
        case oB.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(ds.A, { ...n, entry: t });
        default:
            return null;
    }
}
function um(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === oB.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cH, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uA(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(up, {
        onReaction: (e, i) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(dn.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function up(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case oB.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cU, { ...n, entry: t });
        case oB.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uc, { ...n, entry: t });
        case oB.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(us, { ...n, entry: t });
        case oB.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ui, { ...n, entry: t });
        case oB.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c3, { ...n, entry: t });
        case oB.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cf, { ...n, entry: t });
        default:
            return null;
    }
}
let ug = s.memo(function (e) {
    let { index: t, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${t}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cx.u)(r.entry);
    !(function (e) {
        let { markAsVisible: t } = s.useContext(oJ);
        s.useEffect(() => t(e), [t, e]);
    })(r.entry.id);
    let f = s.useMemo(
            () => ({
                entry: r.entry,
                channelId: r.channel.id,
                guildId: r.channel.guild_id,
                requestId: r.requestId,
                richPresenceName: g ? x : void 0,
            }),
            [x, r.channel.guild_id, r.channel.id, r.entry, r.requestId, g],
        ),
        E = s.useRef(!1),
        [I, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        I && v && _(!0);
    }, [I, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, j.L3)(e, async () => {
                        let { default: e } = await n.e("789346").then(n.bind(n, 949881));
                        return () => (0, l.jsx)(e, { entry: r.entry, requestId: r.requestId });
                    });
            },
            [r, p],
        ),
        T = s.useCallback(() => {
            d(String(Date.now()));
        }, []),
        S = s.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                dl(e, { ...f, ...t });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        dl(dn.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(() => {
            ((E.current = !1),
                setTimeout(() => {
                    E.current || (y(!1), _(v));
                }, 100));
        }, [v]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(um, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((E.current = !0),
                        setTimeout(() => {
                            (E.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: M,
                children: (0, l.jsx)(td.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(c7.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(uA, {
                                closePopout: t,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: I,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && M();
                    },
                    spacing: 8,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.jsx)(tB.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                I || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(uh, {
                                ...r,
                                selected: n,
                                hovered: E.current,
                                trackRankingItemInteraction: S,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var ux = n(531685),
    uf = n(99066),
    uE = n(376261),
    uI = n(99753),
    uj = n(136722),
    uC = n(860071);
let uy = [],
    ub = new Set(),
    u_ = new Set();
var uv = n(808323);
let uN = new Set([
    oB.ContentInventoryEntryType.PLAYED_GAME,
    oB.ContentInventoryEntryType.WATCHED_MEDIA,
    oB.ContentInventoryEntryType.TOP_GAME,
    oB.ContentInventoryEntryType.TOP_ARTIST,
    oB.ContentInventoryEntryType.LISTENED_SESSION,
    oB.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uT = n(498642);
let uS = (0, sl.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uR = n(293860);
let uM = { cooldownDurationMs: 60 * sn.A.Millis.DAY };
function uO(e) {
    let { guildId: t } = e,
        n = (function (e) {
            let { isInTreatment: t } = {
                    isInTreatment: uS.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: n } = sd(),
                i = (0, m.bG)([uT.A], () => uT.A.getMemberCount(e), [e]);
            return null != e && !!n && !!t && null != i && !(i >= 200);
        })(t);
    return (0, l.jsx)(lE.zJ, {
        contentType: n ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uM,
        groupName: lR.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sp, {
                      className: uR.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: n,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uL = n(728321),
    uP = n(282006);
let uD = er.Ay.getEnableHardwareAcceleration(),
    uk = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uw = s.memo(function (e) {
        let {
                colorString: t,
                colorStrings: i,
                colorRoleName: r,
                colorRoleId: a,
                isOwner: o,
                nick: d,
                user: c,
                currentUser: u,
                activities: h,
                applicationStream: m,
                status: A,
                channel: p,
                guildId: g,
                isTyping: x,
                isMobileOnline: f,
                isVROnline: E,
                premiumSince: I,
                nameplate: C,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != I ? new Date(I) : null,
            { analyticsLocations: S } = (0, P.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, j.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("463317"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("245996"),
                                n.e("700792"),
                                n.e("592822"),
                                n.e("529422"),
                                n.e("823427"),
                                n.e("307059"),
                                n.e("309291"),
                                n.e("343116"),
                                n.e("711617"),
                                n.e("470314"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632)),
                            t = lT.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                user: c,
                                guildId: g,
                                channel: p,
                                showMediaItems: t,
                                analyticsLocations: S,
                            });
                    });
                },
                [c, g, p, S],
            ),
            O = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    M.A.startTyping(p.id));
            }, [c, p.id]),
            L = s.useCallback(
                (e) => {
                    null != g &&
                        (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: g,
                            location: { section: eo.JJy.MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [g],
            );
        return (0, l.jsx)(X.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: O,
            shouldShow: v,
            onRequestClose: () => {
                N(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: s, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uD,
                    user: c,
                    currentUser: u,
                    nick: d,
                    status: A,
                    activities: h,
                    applicationStream: m,
                    isOwner: o,
                    premiumSince: T,
                    colorString: t,
                    colorStrings: i,
                    colorRoleName: r,
                    isTyping: x,
                    channel: p,
                    guildId: g,
                    isMobile: f,
                    isVR: E,
                    onClickPremiumGuildIcon: L,
                    selected: v,
                    itemProps: y,
                    nameplate: C,
                    onClick: (e) => {
                        e.shiftKey ? O?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    uU = s.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != t ? V.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uw, { ...n, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uG(e) {
    let { index: t } = e,
        n = (0, C.rm)(`${t}`);
    return (0, l.jsx)(ea.A, { itemProps: n });
}
class uF extends s.Component {
    _list = null;
    _firstApplicationIdOccurrences = null;
    _lastRowsVersion;
    lastReportedAnalyticsChannel;
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        (this.updateSubscription(), this.trackMemberListViewed());
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen());
    }
    setList = (e) => {
        ((this._list = e), (this.props.listRef.current = e));
    };
    renderSection = (e) => {
        let { section: t } = e,
            { groups: n, channel: i } = this.props,
            r = n[t];
        if (r?.id === o5) return (0, s.createElement)(o4, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                uL.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uk,
                    children: (0, s.createElement)(uP.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, s.createElement)(uP.Y, { ...r, key: `section-${t}`, guildId: i.guild_id, className: ec.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            i = t[e.section];
        if (null == i) return null;
        let { index: l } = i;
        return null == l || "row" !== e.type ? null : n[l + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            i = new Set();
        for (let t of e)
            if (null != t && t.type === dt.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), i.add(e.id));
                }
            }
        return ((this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = t), i);
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: i } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === dt.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: a,
                    status: o,
                    isOwner: d,
                    isMobileOnline: c,
                    isVROnline: u,
                    nick: h,
                    activities: m,
                    applicationStream: A,
                    premiumSince: p,
                } = r;
                return (0, l.jsx)(
                    uU,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: a,
                        status: o,
                        isOwner: d,
                        nick: h,
                        activities: m,
                        applicationStream: A,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: u,
                        index: i,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === dt.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    ug,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === dt.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(de, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uG, { index: i }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
    };
    updateMaxContentFeedRowSeen = u().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === o5) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uu(n[i + 1 + l]) : t;
            };
        }
        return t;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, l - i)),
            r = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: r, y: Math.max(0, i - l) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: l, y: n });
    }
    updateSubscription = u().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
        (0, F.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: i, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(sE.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== dt.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === eo.$pd.PLAYING) &&
                            e.num_users_visible_with_game_activity++),
                    null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    t.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
                e
            ),
            {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0,
                num_users_visible_with_nameplate: 0,
            },
        );
        ((this.lastReportedAnalyticsChannel = this.props.channel.id),
            eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_VIEWED, { ...i }));
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, l.jsx)(N.sk, {
            children: (s) =>
                (0, l.jsx)(sz.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(r_.F, {
                                component: (0, l.jsx)(rv.A, {
                                    children: (0, l.jsx)(r_.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, nV.m1)(n, ee.default, lN.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(C.PR, {
                                    children: (n) => {
                                        let { ref: r, role: o, ...d } = n;
                                        return (0, l.jsx)(
                                            T.OZ,
                                            {
                                                role: o,
                                                "aria-label": z.intl.string(z.t["9Oq93m"]),
                                                ref: (e) => {
                                                    ((this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (r.current = e?.getScrollerNode() ?? null));
                                                },
                                                className: a()(ec.ol, { [ec.Ij]: b.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...d,
                                                ...s,
                                            },
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function uH(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([dt.Ay], () => dt.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: c,
            version: u,
            updateMaxRowSeen: h,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: i },
                    channelId: l,
                    guildId: r,
                } = e,
                [a, o] = s.useState(!1),
                {
                    requestId: d,
                    entries: c,
                    impressionCappedEntryIds: u,
                } = (function (e) {
                    var t, n;
                    let i,
                        l = (0, uv.A)({ id: dn.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return ((0, cY.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [t]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uC.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uy;
                                    let e = [];
                                    for (let t of a) $.Ay.isMember(l, t) && e.push(t);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return ub;
                                let e = new Set();
                                for (let t of o) {
                                    let n = el.cc({ user: t, context: i });
                                    uj.zy(n, W.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => t?.filter((e) => d.has(e.author_id)), [t, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((t = l = s.useMemo(() => l?.filter((e) => uN.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [o3.A, uI.A],
                            () => {
                                let e = uI.A.getDebugImpressionCappingDisabled();
                                return !(0, uf.sE)("useFilterImpressionCappedContent") || e
                                    ? u_
                                    : o3.A.getImpressionCappedItemIds();
                            },
                            [t],
                        )),
                        s.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: u_ };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, dp.JM)(t) || !i.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, i]));
                    l = r;
                    let o = (0, m.bG)([uI.A], () => uI.A.getFeedRequestId(dn.X1.GLOBAL_FEED));
                    return (
                        (n = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oJ).useInjectEntriesWithPreviewData(n)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([o3.A], () => o3.A.hidden),
                A = (0, m.bG)([ux.A], () => ux.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([tk.A], () => tk.A.getGuild(r), [r]),
                x = ((0, uE.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, E, I, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [t, n, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dt.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dt.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: o5,
                        type: dt.S9.CONTENT_INVENTORY_GROUP,
                        key: o5,
                        count: e.length,
                        index: n.length,
                        title: z.intl.string(z.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let t = !e;
                                return (
                                    en.default.track(eo.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: l,
                                        guild_id: r,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(uu).reduce((e, t) => e + t, 0),
                    };
                    return [[m, ...t], [...n, m, ...e], Math.random(), e];
                }, [l, c, a, t, r, d, n, i, h, x]),
                C = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let t = Math.floor(e / 72),
                            n = Math.min(j?.length ?? 0, t);
                        C.current = Math.max(C.current, n);
                    },
                    [j],
                );
            return (
                s.useEffect(() => {
                    y.current = c;
                }, [c]),
                s.useEffect(() => {
                    _.current = { impressionCappedEntryIds: u };
                }, [u]),
                s.useEffect(
                    () => (
                        (C.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, C.current);
                            !h &&
                                A &&
                                x &&
                                (di(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: t,
                                    surface_type: dn.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, uf.sE)("useInjectContentInventoryFeed") &&
                                    iL.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: E, version: I, updateMaxRowSeen: v }
            );
        })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        A = s.useRef(null),
        p = s.useRef(null);
    s.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, oF.W)("lg") + (0, oF.W)("xxs"),
        x = s.useCallback(
            (e, t) => {
                let n = A.current;
                if (null == n) return;
                let i = t === o6 || t === o9 ? 0 : parseInt(t, 10),
                    [l, s] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
                    section: l,
                    row: s,
                    padding: 42 * (0 === l && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        f = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        E = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        I = (0, y.Ay)({ id: `members-${t.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: E });
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, n),
            children: [
                (0, l.jsx)(uO, { guildId: t.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: I,
                    children: (0, l.jsx)(uF, {
                        ...e,
                        ...o,
                        version: u,
                        groups: c,
                        rows: d,
                        listRef: A,
                        updateMaxContentFeedRowSeen: h,
                        sectionHeight: 18 + g,
                        rowHeight: 42,
                    }),
                }),
            ],
        }),
    });
}
function uB(e) {
    let { channel: t, className: n } = e,
        i = s.useDeferredValue(t);
    return s.useMemo(() => (0, l.jsx)(oZ, { children: (0, l.jsx)(uH, { channel: i, className: n }) }), [i, n]);
}
var uV = n(888904);
let uY = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uV.kL,
        children: [
            (0, l.jsxs)(lh.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lh.A.Icon, { icon: dE.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lh.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uV.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uV.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uV.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uW = n(909735),
    uz = n(943712),
    uq = n(321255),
    uX = n(746080),
    uK = n(516607),
    u$ = n(999900);
function uQ() {
    return (0, l.jsx)("div", { className: u$.wG, children: (0, l.jsx)(g.y, {}) });
}
let uJ = (0, t8.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("229511"),
                n.e("599660"),
                n.e("452880"),
                n.e("726399"),
                n.e("500194"),
                n.e("207309"),
                n.e("430877"),
                n.e("302800"),
                n.e("249681"),
                n.e("666140"),
                n.e("333097"),
                n.e("704374"),
                n.e("777848"),
                n.e("689160"),
                n.e("623685"),
                n.e("842516"),
                n.e("421225"),
                n.e("822070"),
            ]).then(n.bind(n, 559296)),
        webpackId: 559296,
        renderLoader: uQ,
        name: "ForumChannel",
    }),
    uZ = (0, t8.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("770583"),
                n.e("43853"),
                n.e("537832"),
                n.e("116694"),
                n.e("815852"),
                n.e("154168"),
                n.e("800775"),
                n.e("979585"),
                n.e("357718"),
                n.e("30750"),
            ]).then(n.bind(n, 422445)),
        webpackId: 422445,
        renderLoader: uQ,
        name: "AppChannel",
    });
function u0() {
    return Promise.all([
        n.e("651299"),
        n.e("426965"),
        n.e("256172"),
        n.e("859821"),
        n.e("113561"),
        n.e("368991"),
        n.e("688508"),
        n.e("422037"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("375971"),
        n.e("792818"),
        n.e("630279"),
        n.e("460582"),
        n.e("477751"),
        n.e("245851"),
        n.e("998392"),
        n.e("703540"),
        n.e("728723"),
        n.e("794188"),
        n.e("740705"),
        n.e("730227"),
        n.e("374962"),
        n.e("770583"),
        n.e("907467"),
        n.e("43853"),
        n.e("529659"),
        n.e("371547"),
        n.e("559131"),
        n.e("389684"),
        n.e("45646"),
        n.e("604456"),
        n.e("459397"),
        n.e("847810"),
        n.e("249727"),
        n.e("784573"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("437961"),
        n.e("711617"),
        n.e("829260"),
        n.e("25212"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("256373"),
        n.e("33448"),
        n.e("420577"),
        n.e("79216"),
        n.e("537832"),
        n.e("815275"),
        n.e("116694"),
        n.e("636516"),
        n.e("360536"),
        n.e("704374"),
        n.e("986300"),
        n.e("815852"),
        n.e("932011"),
        n.e("465694"),
        n.e("874821"),
        n.e("426792"),
        n.e("769014"),
        n.e("154168"),
        n.e("815057"),
        n.e("654624"),
        n.e("322094"),
        n.e("800775"),
        n.e("45916"),
        n.e("726223"),
        n.e("979585"),
        n.e("678827"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("923283"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("975076"),
        n.e("736793"),
        n.e("760971"),
        n.e("357718"),
        n.e("586546"),
        n.e("792461"),
    ]).then(n.bind(n, 540462));
}
let u1 = (0, t8.Fe)({ createPromise: u0, webpackId: 540462, name: "ChannelCall", renderLoader: uQ });
function u2() {
    return Promise.all([
        n.e("770583"),
        n.e("998392"),
        n.e("703540"),
        n.e("368991"),
        n.e("256172"),
        n.e("688508"),
        n.e("422037"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("375971"),
        n.e("792818"),
        n.e("630279"),
        n.e("45646"),
        n.e("389684"),
        n.e("728723"),
        n.e("794188"),
        n.e("460582"),
        n.e("477751"),
        n.e("740705"),
        n.e("730227"),
        n.e("153965"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("437961"),
        n.e("829260"),
        n.e("25212"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("256373"),
        n.e("33448"),
        n.e("420577"),
        n.e("79216"),
        n.e("815275"),
        n.e("636516"),
        n.e("360536"),
        n.e("704374"),
        n.e("465694"),
        n.e("874821"),
        n.e("426792"),
        n.e("769014"),
        n.e("654624"),
        n.e("322094"),
        n.e("45916"),
        n.e("979585"),
        n.e("678827"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("923283"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("975076"),
        n.e("580372"),
    ]).then(n.bind(n, 507007));
}
let u3 = (0, t8.Fe)({ createPromise: u2, webpackId: 507007, name: "StageChannelCall", renderLoader: uQ }),
    u7 = (0, t8.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("804510"),
                n.e("527552"),
                n.e("769266"),
                n.e("193845"),
                n.e("249681"),
                n.e("428235"),
                n.e("369501"),
                n.e("161058"),
                n.e("333097"),
                n.e("359702"),
                n.e("220803"),
                n.e("79171"),
                n.e("417664"),
                n.e("662368"),
            ]).then(n.bind(n, 320704)),
        webpackId: 320704,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sT, {});
        },
    }),
    u5 = (0, t8.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("577154"),
                n.e("424216"),
                n.e("877730"),
                n.e("611899"),
                n.e("804510"),
                n.e("527552"),
                n.e("769266"),
                n.e("487873"),
                n.e("765626"),
                n.e("683302"),
                n.e("249681"),
                n.e("728136"),
                n.e("428235"),
                n.e("507775"),
                n.e("369501"),
                n.e("161058"),
                n.e("333097"),
                n.e("636002"),
                n.e("359702"),
                n.e("466913"),
                n.e("71719"),
                n.e("213848"),
            ]).then(n.bind(n, 754744)),
        webpackId: 754744,
        name: "GuildMemberModViewSidebar",
    }),
    u6 = (0, t8.Fe)({
        createPromise: () => Promise.all([n.e("386345"), n.e("269178"), n.e("177718")]).then(n.bind(n, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class u9 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, ry.d0)("guild_channel"), this.maybePreloadChannelCall());
    }
    componentDidUpdate(e) {
        (null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.props.channel?.type !== e.channel?.type && this.maybePreloadChannelCall(),
            this.openChannelModal());
    }
    isChatInSidebar() {
        let { channel: e, dmAppChannelApplicationId: t } = this.props;
        return null != e && ((0, ok.ZV)(e.type) || null != t);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? u0()
            : e === eo.rbe.GUILD_STAGE_VOICE && u2();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, ii.iN)(e.id);
    };
    _handleContextMenu = (e, t) => {
        switch (t.type) {
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_APP:
                this.openChannelContextMenu(e, t);
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case eo.rbe.DM:
                this.openDMContextMenu(e, t);
        }
    };
    handleContextMenu = (e) => {
        (d()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel));
    };
    handleParentContextMenu = (e) => {
        (d()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel));
    };
    handleThreadSidebarResize = (e, t) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: t });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        (d()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, rb.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [L.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("947502"),
                    n.e("309004"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("359545"),
                ]).then(n.bind(n, 22496));
                return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i });
            }));
    }
    openThreadContextMenu(e, t) {
        (d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("965789"),
                    n.e("584615"),
                ]).then(n.bind(n, 612826));
                return (n) => (0, l.jsx)(e, { ...n, channel: t });
            }));
    }
    openDMContextMenu(e, t) {
        d()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(t.getRecipientId());
        (d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("463317"),
                    n.e("926132"),
                    n.e("893190"),
                    n.e("146652"),
                    n.e("189673"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("955557"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("947502"),
                    n.e("245996"),
                    n.e("700792"),
                    n.e("965789"),
                    n.e("592822"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("307059"),
                    n.e("309291"),
                    n.e("198415"),
                    n.e("935483"),
                    n.e("17244"),
                    n.e("298199"),
                    n.e("864464"),
                    n.e("439778"),
                ]).then(n.bind(n, 385913));
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(uX.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iD.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tO.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== dz.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iO.A,
                  { size: dD.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
            dmAppChannelApplicationId: a,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let o = [];
        if (e.isSystemDM()) return o;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
                break;
            case eo.rbe.DM:
                (o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lL, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i3.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lP.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(i$, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(lJ, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(lV, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lL, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i3.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lP.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(i1, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(ih, { channel: e })),
                    null == t || t.isForumLikeChannel() || o.push((0, l.jsx)(rh.A, { channel: t }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(lq, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iI, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i3.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(i1, { channelId: e.id }, "members")),
                    null != t && (0, eE.pk)(e) && o.push((0, l.jsx)(i8, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rg, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rh.A, { channel: e }, "browser")),
                    n || o.push((0, l.jsx)(i2.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i3.A, { channel: e }, "pins")),
                    (0, tH.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(iZ, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(i1, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && o.push((0, l.jsx)(i8, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(tF, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rh.A, { channel: e }, "browser")),
                        n || o.push((0, l.jsx)(i2.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(i3.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(i1, { channelId: e.id }, "members")));
                    break;
                }
                (o.push((0, l.jsx)(t_, { channel: e }, "popout")),
                    n || o.push((0, l.jsx)(i2.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i1, { channelId: e.id }, "members")),
                    o.push((0, l.jsx)(i$, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(ty, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lu, {}, "game-invite-channel-learn-more")),
                    n ||
                        (o.push((0, l.jsx)(la, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(i2.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(i1, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(i1, { channelId: e.id }, "members"));
        }
        return o;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let t = [];
        if (e.isSystemDM()) return t;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
                break;
            case eo.rbe.GROUP_DM:
                t.push((0, l.jsx)(i1, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(i1, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(i1, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e && null != t
            ? (0, l.jsx)("div", {
                  className: u$.u8,
                  children: (0, l.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("836178"), n.e("670774")]).then(
                                  n.bind(n, 464035),
                              );
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
            showActivityPanel: r,
            showFramePanel: o,
            hasVideo: c,
            showHeaderGuildBreadcrumb: u,
            isAppChannelChatExpanded: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != t, "Should not be null if channel is not null."));
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, ii.iN)(e.id) : void 0,
            A = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            E = p || g;
        return (0, l.jsxs)("div", {
            className: u$.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lh.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(u$.DD, r, { [u$.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: E,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(nW.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, nW.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: i,
                                        hasVideo: c,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: A,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: u$.u8,
                                              children: (0, l.jsx)(ti, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: u$.u8,
                                                children: (0, l.jsx)(x.$, {
                                                    onClick: () => (0, tn.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : (0, nW.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(s_.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t, spoilerGatingChannelId: n } = this.props;
        return !t && null == n && e;
    }
    renderCall() {
        let { channel: e, isStageUnifiedCall: t } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
                if (!t) return (0, l.jsx)(u3, { channel: e, popoutType: tR.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    u1,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: tR.N.NO_POPOUT,
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
        return (0, l.jsx)(e6, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: t,
            needSubscriptionToAccess: n,
            channelIsContentGated: i,
            spoilerGatingChannelId: s,
            showCall: r,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), n))
            return (d()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(iB, { guildId: t.id })
                : (0, l.jsx)(ik.H, { guildId: t.id, children: (0, l.jsx)(iK, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(oL.A, { guild: t, channelId: e.id });
        if (null != s) return (0, l.jsx)(nq.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != t, "directory channels must exist within a guild"), (0, l.jsx)(nF, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            d()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(uJ, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(nY.A, { channel: e, guild: t, chatInputType: tM.oU.NORMAL }, null != t ? t.id : "home")
            : (0, l.jsx)(uZ, { channel: e }, e.id);
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
        else if (s === eo.YvQ.PROFILE && e.isPrivate() && !r && !a && !o)
            return (0, l.jsx)(oO, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sb, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uB, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(uB, { channel: t }, `channel-members-${t.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, l.jsx)(ep, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (s === eo.YvQ.CONVERSATIONS)
            switch (e.type) {
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(t9, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(u7, { guildId: n?.id, channelId: e.id });
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
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("638763").then(n.bind(n, 201510));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => iP(l2.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("99643"), n.e("510585")]).then(
                                n.bind(n, 954784),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, oP.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
        if (n === eo.YvQ.SIDEBAR_CHAT && null != i) {
            if (a || null != o) return null;
            switch (i.type) {
                case sR.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rs, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sR.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rC, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sR.PE.VIEW_CHANNEL: {
                    let n = ew.A.getChannel(i.channelId);
                    if (n?.isThread()) {
                        let n = t?.isForumLikeChannel() ? iT : rC;
                        e = (0, l.jsx)(n, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(uq.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sR.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sR.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: u$.uC,
                    children: (0, l.jsx)(u5, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => sS.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(oG.A, {
                sidebarType:
                    t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? oG.X.PostSidebar : oG.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: this.isChatInSidebar(),
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
                friendsSidebarExperimentEnabled: u,
                canShowFriendsSidebar: h,
                friendsSidebarAppBarToggleEnabled: m,
                friendsSidebarCollapsed: A,
            } = this.props,
            { threadSidebarWidth: p, isThreadSidebarFloating: g } = this.state,
            x = h && (!m || !A),
            f = this.shouldRenderCall();
        if (i) return (0, l.jsx)(uY, {});
        if (null == e) return (0, l.jsx)(uz.A, { channelId: this.props.channelId });
        let E = r === eo.YvQ.SIDEBAR_CHAT,
            I = (0, uW.UN)("Channel"),
            j = null != d && !E,
            C =
                ((0, ok.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = t?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(u$.TE, {
                            [u$.js]: (E && !I) || j,
                            [u$.Rs]: E ? !I || g : j || x,
                            [u$.jl]: E && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: E ? p : void 0 },
                                      className: u$.x4,
                                      channel: e,
                                      draftType: i_.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(u$.Qs, { [u$.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(t4.HI, { location: y, subsection: n ?? void 0 }),
                u ? (0, l.jsx)("div", { className: u$.zP, children: b }) : b,
                x && (0, l.jsx)(u6, {}),
            ],
        });
    }
}
let u8 = (0, ef.A)(u9),
    u4 = s.memo(function (e) {
        var t, n, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, m.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, m.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            f = (0, nB.DZ)(),
            j = (0, nB.e4)(x),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            y = j?.parent_id,
            b = (0, m.bG)([ew.A], () => ew.A.getChannel(y), [y]),
            _ = (0, m.bG)([tk.A], () => tk.A.getGuild(j?.guild_id), [j]),
            { needSubscriptionToAccess: v } = (0, iw.A)(j?.id ?? void 0),
            N = (0, m.bG)(
                [tS.A],
                () => {
                    let e = null != c ? tS.A.getParticipants(c) : [],
                        t = null != c ? tS.A.getActivityParticipants(c) : [];
                    return e.length - t.length > 0;
                },
                [c],
            ),
            T = (0, iM.A)(),
            S = (0, m.bG)([eU.Ay], () => (T?.channelId ?? eU.Ay.getVoiceChannelId()) === j?.id),
            R = (0, m.bG)([ej.Ay], () => (null != j ? ej.Ay.getSelfEmbeddedActivityForChannel(j.id) : null), [j]),
            M = (0, m.bG)([oU.A], () => oU.A.isConnected()),
            O = (0, eI.Ay)(M),
            L = M && !1 === O;
        s.useEffect(() => {
            S &&
                L &&
                null != R &&
                null != j &&
                E.A.selectParticipant(
                    j.id,
                    (0, tT.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [L, j, S, R]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            D = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            k = null != P && !(0, ev.A)(j?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, m.cf)([lT.A], () =>
                null != j && j.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lT.A.getVoiceStatesForChannel(j.id)),
                          isUserInThisVoice: lT.A.isInChannel(j.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != j && j.isPrivate() && !k && N,
            H = j?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sO.e)(j, "channel"),
            V = (0, m.bG)([tg.A], () => {
                let e = (0, tC.ny)(tg.A.getMainFrame());
                return e?.data.layoutMode === tC.y0.FOCUSED && e.intent === tC.sV.MAIN;
            }),
            { welcomeModalChannelId: Y } = (0, h.zy)(),
            W = (0, m.bG)([ip.A], () => null != j && ip.A.isLurking(j.guild_id), [j]),
            z = (0, m.bG)([oD.A], () => oD.A.hasSeen(j?.guild_id, W), [j, W]),
            q = (0, m.bG)(
                [tS.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? tS.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            X =
                ((t = _?.id),
                (r = (0, m.bG)([tk.A, l1, ee.default, $.Ay], () => {
                    let e = tk.A.getGuild(t);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l1.hasViewedPrompt(l2.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = ee.default.getCurrentUser();
                    if (null == n) return null;
                    let i = $.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != r && (r || iP(l2.REAL_NAME_PROMPT, t));
                }, [r, t]),
                !0 === r),
            K =
                ((n = _?.id),
                (0, m.bG)([ew.A, tk.A, eU.Ay], () => {
                    let e = tk.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = ew.A.getChannel(Y);
                    return Y === eU.Ay.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, ok.ke)(t.type);
                })),
            { section: J, channelSidebarState: Z } = (0, m.cf)(
                [iQ.Ay],
                () => ({ section: iQ.Ay.getSection(c, j?.isDM()), channelSidebarState: iQ.Ay.getSidebarState(c) }),
                [c, j],
            ),
            et = _?.id,
            en = (0, m.bG)([iQ.Ay], () => iQ.Ay.getGuildSidebarState(et), [et]),
            el = (0, l7.lI)(),
            es = (0, te.qz)() && j?.type === eo.rbe.GUILD_APP;
        ((i = j?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return tv.A.addRouteRewriter((e, t) => {
                        let { pathname: n, search: l, state: s } = e;
                        return "POP" === t || (0, te.Dw)(l) || tN.exec(n)?.[1] !== i
                            ? null
                            : { path: (0, te.gu)(n), state: s };
                    });
            }, [i, es]));
        let er = es && Z?.type === sR.PE.VIEW_CHANNEL && Z.channelId === j.id,
            ea = (0, nV.Ay)(j),
            ed = (0, nV.Ay)(j, !0),
            ec = (0, m.bG)([tS.A], () => (null != j ? tS.A.getSelectedParticipant(j.id) : null)),
            eu = (0, e4.vL)(j),
            eh = (0, nz.Uf)(j),
            em = null != j && g === j.id,
            eA = null != j && j.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iS.A.useConfig({ location: "Channel" }),
            ex = (0, iR.c)(),
            ef = (0, m.bG)(
                [ow.A, i0.A],
                () => {
                    let e = j?.guild_id ?? i0.A.getGuildId();
                    return null != e && ow.A.isUnavailable(e);
                },
                [j],
            ),
            eC = ep && !__OVERLAY__ && null != j && !ef && !j.isGuildVocal();
        (s.useEffect(() => (I.A.setFriendsSidebarAvailable(eC), () => I.A.setFriendsSidebarAvailable(!1)), [eC]),
            (function (e) {
                let { onTransition: t } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: n } = e,
                            i = (0, e_.H)(n);
                        if (null == i || !(0, ev.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, e9.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, e8.A)(s, n), t?.());
                        }, 0);
                    }
                    return (
                        ei._.subscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e),
                        () => {
                            ei._.unsubscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e);
                        }
                    );
                }, [t]);
            })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, tn.JK)();
                if (e?.location?.state?.stageInviteKey === uK.J2) {
                    let { channelId: t } = (0, l3.vu)(e?.location?.pathname) ?? {};
                    null != t && d(t);
                }
            }, []));
        let ey = { channel: j, inCurrentVoiceChannel: em },
            eb = s.useRef(ey);
        (s.useEffect(() => {
            eb.current = ey;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eb.current;
                null != o && null != e && eA && e.id === o && !t && ((0, sM.av)(e), d(null));
            }, [o, eA]));
        let eN = (0, eE.cI)(j),
            eT = null != j && j.isPrivate(),
            eS = (0, eI.Ay)(eT),
            eR = (0, eI.Ay)(j?.id);
        s.useEffect(() => {
            let e = eS && !eT,
                t = eS && eT && j?.id !== eR;
            (e || t) && (0, nH.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lR.i.AUTO });
        }, [j?.id, eR, eT, eS]);
        let eM = (0, p.useHasAnyModalOpen)(),
            eO = (0, tL.a)(j);
        return (0, l.jsx)(u8, {
            guildId: j?.guild_id,
            channelId: c,
            channel: j,
            channelName: ea,
            formattedChannelName: ed,
            parentChannel: b,
            voiceChannel: C,
            layout: q,
            needSubscriptionToAccess: v,
            isLurking: W,
            hasModalOpen: eM,
            section: J,
            channelSidebarState: er ? void 0 : Z,
            guildSidebarState: en,
            guild: _,
            showCall: !v && H,
            isStageUnifiedCall: B,
            showActivityPanel: k,
            showFramePanel: V,
            channelIsContentGated: eu,
            spoilerGatingChannelId: eh,
            isMobile: (0, m.bG)([Q.A], () => j?.type === eo.rbe.DM && Q.A.isMobileOnline(j.getRecipientId()), [j]),
            isUnavailable: ef,
            showRealNameModal: X,
            showWelcomeModal: !z && K,
            showFollowButton: (j?.type === eo.rbe.GUILD_ANNOUNCEMENT && _?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lT.A], () => ({ hasVideo: null != j && lT.A.hasVideo(j.id) }), [j]),
            inCall: em,
            selectedParticipant: ec,
            showChannelSummaries: eN,
            showHeaderGuildBreadcrumb: f || el,
            isAppChannelChatExpanded: es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: ep,
            canShowFriendsSidebar: eC,
            friendsSidebarAppBarToggleEnabled: eg,
            friendsSidebarCollapsed: ex,
            dmAppChannelApplicationId: eO,
        });
    });
