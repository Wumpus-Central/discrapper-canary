(n.r(t), n.d(t, { default: () => he }), n(321073));
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
function e9(e) {
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
var e6 = n(90804),
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
    th = n(70688),
    tm = n(365199),
    tA = n(146337),
    tp = n(316768),
    tg = n(625180),
    tx = n(91242),
    tf = n(545691),
    tE = n(672929),
    tI = n(156548),
    tj = n(58736),
    tC = n(869146),
    ty = n(475815),
    tb = n(165610);
function t_(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, tA.A)(t, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: tl.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        d = (0, tE.A)(t.application_id ?? null, o),
        c = (0, tb.x1)(d) && d.data.proxyTicketRefreshing,
        u = (0, tp.A)(t, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        h = (0, m.bG)(
            [tC.A, tx.A],
            () => null != d && tC.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && tx.A.getMainFrame()?.id === d.id,
            [d],
        ),
        A = s.useCallback(() => {
            null == d || c || tg.A.refreshProxyTicket(d.id);
        }, [d, c]),
        p = z.intl.string(z.t["UKOtz+"]),
        g = (0, tb.x1)(d);
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
                                        null != (t = (0, tb.x1)(d) && !h ? (0, tI.fl)(d.id) : null) && (0, ty.Ub)(t)
                                            ? (0, l.jsx)(ta.Dr, {
                                                  id: "full-screen-app",
                                                  label: z.intl.string(z.t.OIDkcp),
                                                  icon: to.T,
                                                  leadingAccessory: { type: "icon", icon: to.T },
                                                  action: () => (0, ty.tl)(t),
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
                                        (0, l.jsx)(ta.Dr, {
                                            id: "close-app",
                                            label: z.intl.string(z.t.VkMnR2),
                                            action: () => (0, tf.A)(d.id),
                                            icon: th.DoorExitIcon,
                                            leadingAccessory: { type: "icon", icon: th.DoorExitIcon },
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
                  return (0, l.jsx)(tj.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: n ? null : p,
                      icon: tm.MoreHorizontalIcon,
                      "aria-label": p,
                      selected: n,
                  });
              },
          })
        : null;
}
var tv = n(270593);
function tN(e) {
    let { channel: t } = e,
        n = s.useMemo(
            () => ({ type: tl.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        i = (0, tE.A)(t.application_id ?? null, n);
    return (0, l.jsx)(tv.A, { frame: i });
}
var tT = n(320989);
let tS = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var tR = n(568598),
    tM = n(198052),
    tO = n(164617),
    tL = n(355622),
    tP = n(689874),
    tD = n(631828),
    tk = n(627363),
    tw = n(793480),
    tU = n(248675);
function tG(e) {
    let { channel: t } = e,
        n = (0, m.bG)([tx.A], () => tx.A.getFramesForChannel(t.id).find((e) => (0, tb.x1)(e)), [t.id]),
        i = (0, tk.YY)(n?.applicationId).data,
        s = (0, tw.m0)({ guildId: t.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == n || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(tU.default["/TlGcK"]);
    return (0, l.jsx)(tj.Ay.Icon, {
        icon: th.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, tf.A)(n.id),
    });
}
var tF = n(828488),
    tH = n(939249),
    tB = n(408278),
    tV = n(624479),
    tY = n(858899),
    tW = n(534890),
    tz = n(661531),
    tq = n(39623),
    tX = n(952270),
    tK = n(381849),
    t$ = n(549973),
    tQ = n(957565),
    tJ = n(935208),
    tZ = n(181041),
    t0 = n(256331),
    t1 = n(623562),
    t2 = n(403862);
let t3 = ["high", "medium", "low"],
    t7 = s.memo(function (e) {
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
                              t3.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: t2.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: t2.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: t2.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t2.a7,
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
                            className: t2.a7,
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
                            className: t2.a7,
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
    t5 = s.memo(function (e) {
        let { conversation: t, onJump: n } = e,
            i = tJ.default.extractTimestamp(t.startMessageId),
            s = tJ.default.extractTimestamp(t.endMessageId),
            r = (0, t$.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, tK.WR)({ seconds: a, getFormatter: tK.i }),
            d = (0, m.bG)([tZ.A], () => tZ.A.getConversationColor(t.channelId, t.id) ?? void 0, [t.channelId, t.id]);
        return (0, l.jsxs)(tH.D, {
            className: t2.Nm,
            style: { backgroundColor: d },
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: t2.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: t2.So,
                            children: t.title,
                        }),
                        (0, l.jsx)(tB.K, {
                            icon: tV.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, tQ.C)(JSON.stringify(t, null, 2), () =>
                                        (0, tY.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: t2.FR,
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
                        className: t2.g5,
                        children: t.briefSummary,
                    }),
                t.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: t2.JP,
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
                    className: t2.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: t2.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: t2.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: t2.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: t2.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: t2.a7,
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
                                    className: t2.a7,
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
                                    className: t2.a7,
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
                (0, l.jsx)(t7, { moderation: t.moderation ?? null }),
            ],
        });
    });
function t9(e) {
    let { channel: t } = e,
        n = (0, m.bG)([tZ.A], () => tZ.A.getChannelConversations(t.id) ?? [], [t.id]),
        i = (0, m.bG)([tZ.A], () => tZ.A.isPendingFetch(t.id), [t.id]),
        r = (0, m.bG)([t0.A], () => t0.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, t1.xI)(t.id, e.id, { cacheType: "channel" });
            },
            [t],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: t2.zr,
        children: [
            (0, l.jsxs)("div", {
                className: t2.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: t2.gn,
                        children: [
                            (0, l.jsx)(tW.ChatIcon, { color: tz.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: t2.y6,
                        children: (0, l.jsx)(tB.K, {
                            icon: r ? tq.EyeIcon : tX.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: t1.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: t2.Qs,
                children:
                    0 !== n.length || i
                        ? n.map((e) => (0, l.jsx)(t5, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: t2.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var t6 = n(268218),
    t8 = n(726249),
    t4 = n(334738),
    ne = n(208882),
    nt = n(938764),
    nn = n(519480),
    ni = n(352123),
    nl = n(825244),
    ns = n(130696);
let nr = function (e) {
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
        className: ns.h2,
        children: [
            (0, l.jsx)("img", { className: ns.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(R.D, {
                className: ns._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: ns.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(nl.E, {
                      className: ns.c5,
                      iconUrl: n(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(nl.E, {
                className: ns.c5,
                iconUrl: n(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var na = n(683438),
    no = n(689175),
    nd = n(761508),
    nc = n(765671),
    nu = n(902119),
    nh = n(22231),
    nm = n(66834),
    nA = n(573435),
    np = n(101555),
    ng = n(548118),
    nx = n(714991),
    nf = n(776231),
    nE = n(345942),
    nI = n(71393),
    nj = n(486020),
    nC = n(149790),
    ny = n(682557),
    nb = n(524058);
let n_ = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(tH.D, {
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
        { canEdit: d } = (0, ni.A)(t);
    return (0, l.jsx)("div", {
        className: a()(nb.fc, { [nb.QX]: i }),
        children: (0, l.jsxs)(np.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(np.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("533651"), n.e("988869")]).then(
                                          n.bind(n, 201700),
                                      );
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nh.PencilIcon, {
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
                            children: (0, l.jsx)(np.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(tm.MoreHorizontalIcon, {
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
        a = null != (0, m.bG)([nI.A], () => nI.A.getGuild(t.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, nE.u)(t.guildId) : await nm.A.joinGuild(t.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = nj.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, nf.mZ)() }),
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
                            children: (0, l.jsx)(nA.Ay, {
                                mask: nA.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: nb.SA,
                                    children: (0, l.jsx)(ng.Ay, {
                                        className: nb.rZ,
                                        iconSrc: c,
                                        guild: (0, nC.xi)(t),
                                        size: ng.Ay.Sizes.MEDIUM,
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
                                (0, l.jsx)(nx.A, { className: nb.n2, guild: t }),
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
        { ref: r, width: o } = (0, nc.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: nR.wx,
        children: [
            (0, l.jsx)("div", { className: nR.y2, children: (0, l.jsx)(nu.A, {}) }),
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
                            children: (0, l.jsx)(na.I, {
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
        children: (0, l.jsxs)(no.Gt, {
            className: nS.XG,
            children: [
                (0, l.jsx)(nM, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(no.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(nd.V, {
                        className: nR.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                nd.V.Item,
                                { className: nR.YU, id: nT.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                nT.mU.ALL,
                            ),
                            (0, nT.g2)(t.id).map((e) => {
                                let { value: t, label: n } = e;
                                return (0, l.jsx)(
                                    nd.V.Item,
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
                                (0, l.jsx)(tH.D, {
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
                        (0, l.jsx)(na.I, {
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
        } = (0, m.cf)([nn.A], () => {
            let e = nn.A.getCurrentCategoryId(t.id),
                n = nn.A.getDirectoryEntries(t.id, e === nT.mU.ALL ? null : e),
                i = nn.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: nn.A.getDirectoryAllEntriesCount(t.id),
                isLoading: nn.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(t.id);
            null != e &&
                (0, t4.ack)(
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
        } = (0, m.cf)([nt.A], () => {
            let { mostRecentQuery: e, fetching: n } = nt.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: nt.A.getSearchResults(t.id, e) };
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
            (ne.Yc(t.id), ne.YS(t.id), E(e));
        }, [t.id]),
        s.useEffect(() => {
            en.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [t.id, i.id, r]));
    let y = (0, ni.b)(t),
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
            (ne.Se(t.id, f),
            en.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: t.id, directory_guild_id: i.id }));
    }
    function v() {
        (E(""), ne.BA(t.id));
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
            ? (0, l.jsx)("div", { className: nS.$$, children: (0, l.jsx)(nr, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(nO, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      ne.uU(t.id, e);
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
    n9 = n(200273),
    n6 = n(565846),
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
    iu = n(39470);
function ih(e) {
    let { channel: t } = e,
        n = s.useContext(en.AnalyticsContext),
        i = (0, io.aL)(),
        r = z.intl.string(iu.default["Beo/7v"]),
        { firstMessage: a } = (0, ir.OA)(t),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(tj.Ay.Icon, {
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
            return (0, l.jsx)(tj.Ay.Icon, {
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
            return (0, l.jsx)(tj.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: tm.MoreHorizontalIcon,
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
        u = (0, n6.A)(t.id),
        h = (0, n9.A)(t),
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
        i = (0, l.jsx)(tj.Ay.Icon, {
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
        a = (0, m.bG)([nI.A], () => nI.A.getGuild(i?.getGuildId())),
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
            (0, l.jsx)(tj.Ay, {
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
                children: (0, l.jsx)(nY.A, { channel: i, guild: a, chatInputType: tL.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var iS = n(925166),
    iR = n(76268),
    iM = n(605117),
    iO = n(857253),
    iL = n(872363),
    iP = n(73153);
let iD = function (e, t) {
    iP.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
};
var ik = n(561446),
    iw = n(300233),
    iU = n(499211),
    iG = n(468689),
    iF = n(529942),
    iH = n(739455),
    iB = n(709017);
function iV(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: iB.t7,
        children: (0, l.jsxs)("div", {
            className: iB.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iB.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iB.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iB.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iF.rf)(t),
                                        iG.A.open(t, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iH.Fx)(t));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iY = n(599941),
    iW = n(29385),
    iz = n(950344),
    iq = n(217530),
    iX = n(162093),
    iK = n(325348);
function i$(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, iW.e)({ guildId: t, channelId: n }),
        r = (0, iY.uk)(t),
        a = (0, iY.Tq)(t),
        o = (0, m.bG)([nI.A], () => nI.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        u = (0, nV.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of r) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [r]);
    return ((0, iz.A)({
        guildId: t,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iK.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iK.__invalid_spinner }),
          })
        : (0, l.jsxs)(nD.Ar, {
              className: iK.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iK.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iK.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iq.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iX.A,
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
function iQ(e) {
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
    return (0, l.jsx)(tj.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: tW.ChatIcon,
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
var iJ = n(358047),
    iZ = n(284252);
function i0(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iJ.Ay], () => iJ.Ay.getSection(t), [t]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([tZ.A], () => (tZ.A.getChannelConversations(t)?.length ?? 0) > 0, [t]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(tj.In, {
        onClick: I.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: tW.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iZ.q : void 0,
        selected: n,
        badge: r,
    });
}
var i1 = n(967198);
function i2(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iJ.Ay], () => iJ.Ay.getSection(t)),
        i = (0, m.bG)([i1.A], () => i1.A.getGuildId()),
        s = n === eo.YvQ.MEMBERS;
    return (0, l.jsx)(tj.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
                I.A.toggleMembersSection());
        },
        selected: s,
    });
}
var i3 = n(187360),
    i7 = n(287074),
    i5 = n(306788),
    i9 = n(863922),
    i6 = n(822074),
    i8 = n(521732);
function i4(e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        i = (0, m.bG)([i6.A], () => i6.A.shouldShowTopicsBar());
    return (0, l.jsx)(tj.Ay.Icon, {
        icon: i5.K,
        onClick: function () {
            (en.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i8.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, i9.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var le = n(885574),
    lt = n(947094),
    ln = n(919577),
    li = n(207777),
    ll = n(422844),
    ls = n(435470),
    lr = n(892110),
    la = n(45494);
function lo(e) {
    let { channel: t } = e,
        n = (0, ls.S4)(t),
        i = (0, m.bG)([lt.A], () => lt.A.hasHidden(t.id)),
        s = (0, lr.l)(t.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, ll.R)(t.id),
        d = (0, m.bG)(
            [li.A, la.A],
            () => !!(li.A.getThreadIds(t.id, r, a, o).length > 0) || !!(la.A.getThreads(t.id, r, a, o).length > 0),
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
    return (0, l.jsx)(tj.In, {
        tooltip: u,
        icon: le.CircleInformationIcon,
        onClick: function () {
            return ln.A.hideAdminOnboarding(t.id, !i);
        },
        selected: !i,
    });
}
var ld = n(290136),
    lc = n(975571),
    lu = n(490094);
function lh() {
    let e = z.intl.string(lu.default.pdipXI);
    return (0, l.jsx)(tj.In, {
        tooltip: e,
        icon: ld.CircleQuestionIcon,
        onClick: function () {
            window.open(lc.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lm = n(742589),
    lA = n(43105),
    lp = n(428689),
    lg = n(978940),
    lx = n(387755),
    lf = n(730852),
    lE = n(641703),
    lI = n(379848),
    lj = n(753727),
    lC = n(625075),
    ly = n(222692),
    lb = n(442353),
    l_ = n(470710),
    lv = n(186111),
    lN = n(360906),
    lT = n(994500),
    lS = n(977997),
    lR = n(818023),
    lM = n(49999),
    lO = n(731854);
class lL extends s.PureComponent {
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
                : lN.Ay.supports(lO.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : n && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lC.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(tj.Ay.Icon, { icon: lp.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(tj.Ay.Icon, {
            ref: this.iconRef,
            icon: lg._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lI.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lA.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lR.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(lM.i.USER_DISMISS),
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
            return lx.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        }
        t ? (0, lb.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lf.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, nH.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lM.i.AUTO }),
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
        (0, lb.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, ly.A)();
    };
}
function lP(e) {
    let { channel: t } = e,
        n = (0, lj.A)(),
        i = (0, m.bG)([tM.A], () => tM.A.getMode(t.id)),
        s = (0, m.bG)([lS.A], () => lS.A.isInChannel(t.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([l_.A], () => ({
            callActive: l_.A.isCallActive(t.id),
            callUnavailable: l_.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lT.A], () => ({
            notFriend: t.type === eo.rbe.DM && null != d && !lT.A.isFriend(d),
            isBlocked: t.type === eo.rbe.DM && null != d && lT.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, io.Us)(),
        g = [],
        x = (0, lE.A)(t.id),
        f = (0, m.bG)([lv.A], () => lv.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(lL, {
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
var lD = n(452015),
    lk = n(765178),
    lw = n(231483),
    lU = n(544231),
    lG = n(338510),
    lF = n(151119),
    lH = n(278941),
    lB = n(665909),
    lV = n(327337);
let lY = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lG.u)(t.id),
        r = (0, lF.S)(t.id),
        a = (0, lH.e)(t.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lv.A], () => lv.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lk.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lU.xi)(t.id, [a.id]);
            }, 5e3),
            (0, lB.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lB.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lk.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lU.bg)(t.id);
                }, 5e3)));
    }, [t, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lB.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lB.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lU.xi)(t.id, [a.id]),
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
                    { modalKey: lV.V },
                ),
                (0, lB._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lB.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(tj.Ay.Icon, {
                  icon: lw.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lW = n(262763),
    lz = n(406704),
    lq = n(576705);
let lX = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, lj.A)(),
        i = (0, m.bG)([lS.A], () => lS.A.isInChannel(t.id)),
        r = (0, m.bG)([lS.A], () => !u().isEmpty(lS.A.getVoiceStatesForChannel(t.id))),
        a = (0, m.bG)([lq.A], () => lq.A.can(eo.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, iU.A)(t.id),
        d = (0, lz.Id)(t),
        { enabled: c } = lz.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lW.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(tj.Ay.Icon, {
              icon: lg._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lK = n(812991),
    l$ = n(47675),
    lQ = n(999291);
function lJ() {
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
function lZ(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, m.bG)([iJ.Ay], () => iJ.Ay.getSection(t.id, t?.isDM())),
        s = (0, lQ.Ay)(t.getRecipientId()),
        r = lJ(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(tj.In, {
        disabled: !r || n,
        tooltip: !r || n ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lK.n,
        onClick: function () {
            ((0, l$.am)({ displayProfile: s, isProfileOpen: !a }), I.A.toggleUserProfileSidebarSection());
        },
        selected: a && !n,
    });
}
let l0 = {};
class l1 extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            l0[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = l0[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return l0;
    }
}
let l2 = new l1(iP.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = l0[n];
        return null == i ? ((l0[n] = new Set()), l0[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != l0[t.id] && !t.unavailable && (delete l0[t.id], !0);
    },
});
var l3 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l7 = n(376943),
    l5 = n(394953),
    l9 = n(683063),
    l6 = n(403581),
    l8 = n(241541),
    l4 = n(709066),
    se = n(87664),
    st = n(247676),
    sn = n(695526),
    si = n(927813),
    sl = n(427358),
    ss = n(945810);
let sr = (0, ss.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sa = n(280450),
    so = n(851746),
    sd = n(103411);
function sc() {
    let e = (0, sd.m)(),
        t = (0, m.bG)([so.A], () => so.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != t && t > 0,
        currentUserId: (0, m.bG)([sa.default], () => sa.default.getId()),
    };
}
var su = n(315629),
    sh = n(744413),
    sm = n(303682),
    sA = n(224370),
    sp = n(544879);
function sg(e) {
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
    return (0, l.jsxs)(su.h, {
        color: "nitro-pink",
        className: a()(sA.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sA.lj,
                children: [
                    (0, l.jsx)("img", { className: sA.Dp, src: sp.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sA.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: sA.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: sA.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(tH.D, {
                        className: sA.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            n(lM.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(nQ.P, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sA.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (n(lM.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sh.jM)({
                                  startingScreen: sm.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sx = n(349420);
let sf = { cooldownDurationMs: 60 * si.A.Millis.DAY };
function sE(e) {
    let { channel: t } = e,
        n = (function (e) {
            let { isInTreatment: t } = {
                    isInTreatment: sr.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: n, currentUserId: i } = sc(),
                l = (0, m.bG)(
                    [sl.A, lT.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i || lT.A.isBlockedOrIgnored(e)) return !1;
                            let t = sl.A.getUserAffinity(e);
                            return null != t && null != t.communicationRank && t.communicationRank <= 20;
                        }),
                    [e.recipients, i],
                );
            return !!n && !!t && !!l;
        })(t);
    return (0, l.jsx)(lI.zJ, {
        contentType: n ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sf,
        groupName: lM.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sg, {
                      className: sx.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: n,
                  });
        },
    });
}
n(667532);
var sI = n(403362);
n(696101);
let sj = [],
    sC = er.Ay.getEnableHardwareAcceleration();
function sy(e) {
    let { user: t, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, m.bG)([lT.A], () => lT.A.getNickname(t.id)),
        h = (0, se.A)(t.id),
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
                    shouldAnimateStatus: sC,
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
function sb(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function s_(e) {
    let { channel: t } = e,
        n = ee.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lT.A, ee.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = ee.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(sI.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lT.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sj,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sj });
                let s = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(t);
                }
                return { listItems: s };
            },
            [t],
            sb,
        );
    s.useEffect(() => {
        en.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, st.A)({ useNitroCapExperiment: !0 }),
        h = (0, sn.qH)(),
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
                        (0, l.jsx)(sE, { channel: t }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(l9.u, {
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
                                o && (0, l.jsx)(l4.A, { type: l4.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sy,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lD.NE, {
                                      channel: t,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: l8.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lD.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sv = n(322338),
    sN = n(898029),
    sT = n(36537);
function sS() {
    return (0, l.jsx)("div", {
        className: sT.zt,
        children: (0, l.jsx)("header", {
            className: sN.wL,
            children: (0, l.jsxs)("div", {
                className: sN.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sN.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sN.u1,
                            itemClassName: sN.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sR = n(138298),
    sM = n(940382),
    sO = n(747376),
    sL = n(718734),
    sP = n(163328),
    sD = n(425557),
    sk = n(270003),
    sw = n(150934),
    sU = n(452027),
    sG = n(95477),
    sF = n(281595),
    sH = n(465532),
    sB = n(579872),
    sV = n(119031),
    sY = n(408018),
    sW = n(845207),
    sz = n(822610),
    sq = n(915089),
    sX = n(314307),
    sK = n(636922),
    s$ = n(931664),
    sQ = n(631576),
    sJ = n(885386),
    sZ = n(232835),
    s0 = n(522602),
    s1 = n(806150),
    s2 = n(518960),
    s3 = n(753738);
function s7(e, t) {
    return { type: e, message: t ?? null };
}
function s5(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var s9 = n(659617),
    s6 = n(474078),
    s8 = n(636537),
    s4 = n(152367),
    re = n(147087);
async function rt(e) {
    try {
        let t = await s8.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, s8.fT)(),
        });
        return t.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var rn = n(55294),
    ri = n(143161),
    rl = n(909833);
let rs = tL.oU.THREAD_CREATION;
function rr(e) {
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
                      className: ri.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: i_.C.FirstThreadMessage }),
                          (0, l.jsx)(ra, { parentChannelId: t }),
                          (0, l.jsx)(ro, { parentChannel: s, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function ra(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = i_.A.getThreadSettings(t),
                n = i_.A.getDraft(t, i_.C.FirstThreadMessage).trim(),
                i = s0.A.getUploads(t, i_.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? sB.A.show({
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
    return (0, l.jsxs)(tj.Ay, {
        toolbar: (0, l.jsx)(tj.Ay.Icon, { icon: nQ.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(tj.Ay.Icon, { icon: sP.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(tj.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function ro(e) {
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
                        (l((e) => ({ ...e, ...n })), sH.A.changeThreadSettings(e.id, { ...n, parentMessageId: t }));
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, t) {
            let [n, i] = s.useState((0, sY.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let l = i_.A.getDraft(e.id, i_.C.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && i((0, sY.ur)(l)), t(i_.A.getThreadSettings(e.id) ?? {}));
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
        g = (0, s9.EN)(n),
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
                h = (0, re.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = sZ.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let t = await rt(e);
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
                                icon: s4.D,
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
                                  children: (0, l.jsx)(tB.K, {
                                      icon: s4.D,
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
                p = (0, rn.Ay)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ij.GS,
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
                                (l = s$.A.getStickerPreview(t.id, rs.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = s0.A.getUploads(t.id, i_.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? s7(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? s7(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, s1.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: rs,
                            channel: null == n ? t : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), s7(1, (0, s3.cw)(x, t?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(s7(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sQ.x5)(t.id, rs.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, s9.Iy)(c, g) ? sD.t : sP.y;
    return (0, l.jsx)("div", {
        className: ri.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(ri.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: ri.Zd,
                children: [
                    (0, l.jsx)(nD.Ip, {
                        className: ri.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: ri.bv,
                            children: [
                                (0, l.jsxs)(sX.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(rl.P0, ri.P0),
                                            children: (0, l.jsx)(b, { className: rl.Kk }),
                                        }),
                                        (0, l.jsxs)(sk.n, {
                                            children: [
                                                (0, l.jsx)(rc, {
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
                                                (0, l.jsx)(rd, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rh, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ri.Eh,
                        children: [
                            (0, l.jsx)(ru, {
                                parentChannel: n,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sV.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: ri.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rd(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, s9.Iy)(n, s),
        a = (0, l.jsx)(sw.S, {
            disabled: s === s9.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return t || s === s9.jk.Disabled
        ? null
        : (0, l.jsx)(sU.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rc(e) {
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
        h = s5(r, { content: u }),
        m = (0, s9.l1)(t, n),
        A = null != n && !d,
        p = (0, sq.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sG.k, {
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
function ru(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, n, l) => {
                (sH.A.saveDraft(t.id, n, i_.C.FirstThreadMessage),
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
    let x = (0, m.bG)([lq.A], () => lq.A.can(eo.xBc.ATTACH_FILES, t)),
        f = s5(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sz.A, { channelId: t.id, type: rs, canAttachFiles: x }),
            (0, l.jsx)("div", { className: ri.xN, children: (0, l.jsx)(sF.U, { error: f }) }),
            (0, l.jsx)(sW.Ay, {
                type: rs,
                channel: t,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: a()(ri.gM, ri.Yy),
                innerClassName: a()(ri.SL, { [ri.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: s2.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rh(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, m.bG)([sZ.A], () => (null == n ? null : sZ.A.getMessage(t.id, n))),
        s = sJ.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sK.A, {
              className: ri.IL,
              message: i,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rm = n(494208),
    rA = n(40389),
    rp = n(148494),
    rg = n(56562);
function rx(e) {
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
            return (0, l.jsx)(rf, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(tj.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: tm.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function rf(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nZ.A)(t),
        r = (0, n3.A)(t),
        a = (0, n6.A)(t.id),
        o = (0, n9.A)(t),
        d = (0, it.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, n0.A)(t),
        h = (0, n1.A)(t),
        A = (0, n2.A)(t, "Toolbar Overflow"),
        p = (0, n7.A)(t),
        g = (0, rA.A)(t),
        x = (0, ie.A)(t),
        f = (0, n5.A)(t),
        E = t.isThread()
            ? (0, l.jsx)(ta.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rp.A.jumpToMessage({ channelId: t.id, messageId: "0", jumpType: rg.vx.INSTANT });
                  },
              })
            : null,
        I = sJ.SY.useSetting(),
        j = (0, m.bG)([lS.A], () => !u().isEmpty(lS.A.getVoiceStatesForChannel(t.id))),
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
var rE = n(332456),
    rI = n(806411),
    rj = n(973854),
    rC = n(62502);
function ry(e) {
    var t;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([nI.A], () => nI.A.getGuild(d?.getGuildId())),
        h = (0, nV.Ay)(d),
        A = (0, nz.Uf)(d);
    ((t = d),
        (i = (0, m.bG)([lS.A], () => null != t && !u().isEmpty(lS.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (iP.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, ii.N9)(t, { source: iE.H9.VOICE_AUTO_OPEN }));
        }, [i, t]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rE.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rI.q)(d.id), channel_view: o }),
                (0, rj.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(nq.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(ib, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: i_.C.ChannelMessage }),
            (0, l.jsx)(tj.Ay, {
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
                className: rC.T,
                children: (0, l.jsx)(nY.A, { channel: d, guild: c, chatInputType: tL.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rb = n(210714),
    r_ = n(402860),
    rv = n(707554),
    rN = n(140735),
    rT = n(590180),
    rS = n(372320),
    rR = n(562153);
let rM = (0, ss.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rO(e) {
    return rM.useConfig({ location: e }).enabled;
}
var rL = n(215530),
    rP = n(454719),
    rD = n(736653),
    rk = n(311016),
    rw = n(480335),
    rU = n(713517),
    rG = n(397562),
    rF = n(183555),
    rH = n(718019),
    rB = n(977059),
    rV = n(915614),
    rY = n(308244),
    rW = n(743987),
    rz = n(900179),
    rq = n(946356),
    rX = n(465829),
    rK = n(35241),
    r$ = n(587168),
    rQ = n(442228),
    rJ = n(744808);
let rZ = (0, ss.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var r0 = n(827428);
function r1(e) {
    let { type: t, anchor: n } = e;
    return "staple" === t && "bottom" !== n;
}
function r2(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rZ.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, l$.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: r0.lS,
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
              className: r0.qr,
              children: (0, l.jsx)(tH.D, {
                  onClick: o,
                  className: r0.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: r0.xQ, children: [(0, l.jsx)(rJ.A, { frame: i, filterLayer: r1 }), d] })
        : d;
}
var r3 = n(518477),
    r7 = n(996988),
    r5 = n(207634),
    r9 = n(561419),
    r6 = n(396095);
function r8(e) {
    let { user: t, channel: n, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rk.A)(t.id),
        o = (0, lQ.Ay)(t.id),
        d = (0, rD.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, rF.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rG.A)(u, o, r3.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rU.A)(m);
    function g() {
        (0, r_.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(rF.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rq.A, {
                ref: m,
                user: t,
                displayProfile: o,
                themeType: r7.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r9.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(nD.d_, {
                        className: i ? r9.BE : void 0,
                        children: [
                            (0, l.jsx)(r$.A, { children: (0, l.jsx)(rK.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: r9.wx,
                                children: [
                                    (0, l.jsx)(rV.A, {
                                        user: t,
                                        displayProfile: o,
                                        themeType: r7.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rH.A, {
                                        user: t,
                                        displayProfile: o,
                                        channelId: n.id,
                                        avatarSize: r5.T[r7.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r6.rf,
                                children: [
                                    (0, l.jsx)(rX.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: rR.Ay.getName(null, n.id, t),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rB.A, {
                                            displayProfile: o,
                                            themeType: r7.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rQ.A, {
                                                      userId: t.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rz.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rW.A, { userId: t.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rq.A.Overlay, {
                                              className: r6.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rz.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rY.A, {
                                                              userBio: o?.bio,
                                                              userId: t.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rz.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rW.A, { userId: t.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(r2, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rw.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var r4 = n(331322),
    ae = n(249790),
    at = n(254828),
    an = n(783123),
    ai = n(966430);
function al(e) {
    let { user: t, channel: n, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lQ.Ay)(t.id),
        o = (0, rD.Ay)(),
        d = (0, m.bG)([lT.A], () => lT.A.isBlocked(t.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, rF.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rG.A)(c, a, r3.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(rF.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rq.A, {
                ref: h,
                user: t,
                displayProfile: a,
                themeType: r7.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(nD.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ai.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ai.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ai.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ai.N1,
                                        children: [
                                            (0, l.jsx)(ae.A, { user: t }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rR.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r4.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(an.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, l$.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(at.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, l$.Wn)({
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
var as = n(941143),
    ar = n(717421),
    aa = n(31956),
    ao = n(673843),
    ad = n(594832),
    ac = n(321191),
    au = n(679492),
    ah = n(439053),
    am = n(312381),
    aA = n(657538),
    ap = n(984545),
    ag = n(193738),
    ax = n(413737),
    af = n(394816),
    aE = n(695366),
    aI = n(922590),
    aj = n(821269),
    aC = n(131607),
    ay = n(326084),
    ab = n(834708),
    a_ = n(154486);
let av = (0, ss.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var aN = n(158390),
    aT = n(906573);
let aS = new aN.A(30 * si.A.Millis.SECOND, 5 * si.A.Millis.MINUTE, !0),
    aR = 0;
async function aM() {
    if (aT.A.shouldFetch() && !(Date.now() < aR)) {
        iP.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await s8.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (aS.succeed(),
                (aR = 0),
                iP.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aR = Date.now() + aS.fail()),
                iP.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aO = n(504492);
function aL(e) {
    let { targetUserId: t } = e,
        { isInTreatment: n } = {
            isInTreatment: av.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t) ?? null, [t]),
        r = (0, ab.d)(i),
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
            } = (0, m.cf)([aT.A], () => {
                let t = Number(aT.A.getVersion());
                return {
                    isDismissed: null != e && aT.A.isDismissedFor(e),
                    hasFetched: aT.A.hasFetched(),
                    version: Number.isFinite(t) ? t : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && aM();
                }, [e]),
                {
                    isDismissed: t,
                    hasFetched: n,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aT.A.isDismissedFor(e) ||
                                (iP.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                s8.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? t : null);
    return a && d && !o && null != i ? (0, l.jsx)(aP, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aP(e) {
    let { targetUser: t, version: i, onDismiss: r } = e,
        a = (0, a_.p)(t.id),
        [o, d] = (0, aC.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lM.m.SIDEBAR, !0),
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
                                (0, ay.xm)([t.id]),
                            ]),
                            s = i.get(t.id) ?? ay.o.FAIL;
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
    return (0, l.jsx)(sg, {
        className: aO.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var aD = n(93246),
    ak = n(351906),
    aw = n(383199),
    aU = n(559506),
    aG = n(361311),
    aF = n(931481),
    aH = n(791556),
    aB = n(501193),
    aV = n(383448),
    aY = n(646986),
    aW = n(243166),
    az = n(62010),
    aq = n(123292),
    aX = n(840411);
let aK = (0, ss.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var a$ = n(666810),
    aQ = n(394300),
    aJ = n(575593),
    aZ = n(498032),
    a0 = n(44120),
    a1 = n(75678),
    a2 = n(317560),
    a3 = n(99161),
    a7 = n(661492),
    a5 = n(146423),
    a9 = n(662349),
    a6 = n(479026),
    a8 = n(636374),
    a4 = n(699976),
    oe = n(202541),
    ot = n(733484),
    on = n(880465);
function oi(e) {
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
        { trackUserProfileWishlistAction: g } = (0, rF.NJ)(),
        x = rO("DMSidePanelWishlistItemCard") ? a4.y.SIZE_78 : a4.y.SIZE_90,
        f = a4.Z[x],
        E = s.useCallback(() => {
            (g({
                action: r3.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                h());
        }, [n, r, h, g]),
        I = s.useCallback(() => {
            (g({
                action: r3.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
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
        } = (0, a8.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: I }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: ot.kL,
        children: (0, l.jsxs)(a5.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: n,
            user: i,
            spec: f,
            cardStyle: a()(ot.Nr, o),
            skuPreviewStyle: a()(ot.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((t = b ? (0, a7.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a7.T)(n) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: t }) : t),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aZ.N, { className: ot.Pf }),
                y &&
                    (0, l.jsx)(a9.A, {
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
function ol(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a3.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: oe.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [t, n, a]),
        d = s.useCallback(() => {
            (0, a2.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: oe.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.id, t.applicationId, n, a]);
    return (0, l.jsx)(oi, {
        sku: t,
        analyticsLocations: a,
        wishlistOwner: n,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function os(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, a0.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: oe.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, a6.e)({ sku: t, giftRecipient: n, giftingOrigin: oe.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(ot.ML, {
                    [ot.M]: t?.tenantMetadata?.collectibles?.type === aJ.R.AVATAR_DECORATION,
                    [ot.Hm]: t?.tenantMetadata?.collectibles?.type === aJ.R.PROFILE_EFFECT,
                    [ot.hH]: t?.tenantMetadata?.collectibles?.type === aJ.R.PROFILE_FRAME,
                    [ot.qF]: t?.tenantMetadata?.collectibles?.type === aJ.R.NAMEPLATE,
                    [ot.l2]: t?.tenantMetadata?.collectibles?.type === aJ.R.BUNDLE,
                }),
            [t?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(oi, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function or(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = t.id;
            (0, a1.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: oe.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        u = r === ad.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(oi, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(on.MO, { [ot.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(ot.fi, { [ot.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(ot.p7, { [ot.SW]: h.length >= 10, [ot.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function oa(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(ol, { sku: t, ...n });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(os, { sku: t, ...n });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(or, { sku: t, ...n });
        default:
            return null;
    }
}
var oo = n(158045),
    od = n(249203),
    oc = n(919769),
    ou = n(695904),
    oh = n(116331),
    om = n(713348),
    oA = n(535089),
    op = n(815637);
function og(e) {
    let { unownedWishlistItems: t, profileOwner: n, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rF.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, oh.A)(n),
        g = (0, m.bG)([od.A], () => od.A.getEntry(n.id)?.lastViewedAt ?? null, [n.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r3.RP.WISHLIST }), i());
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
            let e = f.slice(0, 3).map((e) => ({ item: e, source: ad.uS.WISHLIST }));
            if (a && e.length < 3) {
                let t = f.some((e) => oo.Ay.isPremiumSku(e.skuId));
                if (!oo.Ay.isPremiumAtLeast(n.premiumType, oe.PremiumTypes.TIER_2) && !t) {
                    let t = aQ.A.fromSKU((0, aX.rI)());
                    null != t && e.push({ item: t, source: ad.uS.POPULAR });
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
        C = (0, oA.A)({ wishlistId: r ?? null, onAction: E, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                I.map((e, t) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              oa,
                              {
                                  sku: i.sku,
                                  index: t,
                                  wishlistOwner: n,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, oc.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sI.Vq),
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
              children: (0, l.jsxs)(rq.A.Overlay, {
                  ref: C,
                  className: op.kL,
                  children: [
                      p && (0, l.jsx)(ou.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: op.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: op.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(az.E, {
                                              type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: A }) },
                                              variant: "primary",
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(aq.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rv.F, { children: (0, l.jsx)("div", { className: op.vY, children: y }) }),
                  ],
              }),
          });
}
function ox(e) {
    let { isLoading: t, unownedWishlistItems: n, canSeeWishlist: i = !1, ...s } = e,
        r = aK.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, om.A)(s.profileOwner), t || s.profileOwner.bot || ((null == n || 0 === n.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(a$.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(og, { ...s, unownedWishlistItems: n, isNitroRecEnabled: r }),
    });
}
function of(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lT.A], () => ({
            relationshipType: lT.A.getRelationshipType(t.id),
            originApplicationId: lT.A.getOriginApplicationId(t.id),
        })),
        h = (0, aI.fi)(t.id),
        A = (0, aj.q)({ userId: t.id }),
        p = (0, m.bG)([ak.A], () => ak.A.hidePersonalInformation),
        g = (0, m.bG)([ac.A], () => ac.A.getUserProfile(t.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([ac.A], () => ({ defaultWishlistId: ac.A.getFirstWishlistId(t.id) })),
        { wishlist: E, isFetching: I } = (0, ad.fw)({ wishlistId: o ? f : void 0, userId: t.id });
    (0, ao.A)(E);
    let j = s.useMemo(() => E?.items.filter((e) => !e.isOwned) ?? null, [E]);
    return (0, l.jsxs)("div", {
        className: r6.rf,
        children: [
            (0, l.jsx)(aU.A, { userId: t.id }),
            (0, l.jsxs)("div", {
                className: r6.pq,
                children: [
                    (0, l.jsx)(rX.Ay, {
                        user: t,
                        guildId: r.guild_id,
                        displayName: rR.Ay.getName(null, r.id, t),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(aW.A, { userId: t.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rB.A, {
                            displayProfile: i,
                            themeType: r7.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aH.A, { user: t, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rq.A.Overlay, {
                    children: (0, l.jsx)(aF.A, { user: t, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rq.A.Overlay,
                    {
                        children: (0, l.jsx)(aF.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aV.A, { user: t }),
            i?.private &&
                (0, l.jsx)(rq.A.Overlay, { children: (0, l.jsx)(aB.A, { username: rR.Ay.getName(null, r.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(rq.A.Overlay, {
                    className: r6.Lw,
                    children: (0, l.jsx)(rz.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aE.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aD.T, { userId: t.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rQ.A, {
                            userId: t.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rz.A, {
                            heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rW.A, { userId: t.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r6.kR,
                children: [
                    o && x && (0, l.jsx)(aA.A, { user: t, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aY.A, { user: t, currentUser: n, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aw.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rz.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aG.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rq.A.Overlay, {
                              className: r6.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rz.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rY.A, {
                                              userId: t.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aw.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rz.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aG.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rz.A, {
                                              heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rW.A, { userId: t.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(ox, {
                            profileOwner: t,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                d?.({ tabSection: r3.RP.WISHLIST });
                            },
                            canSeeWishlist: null != E,
                        }),
                    r.isDM() && (0, l.jsx)(aL, { targetUserId: t.id }),
                ],
            }),
        ],
    });
}
var oE = n(114212),
    oI = n(913453),
    oj = n(229187),
    oC = n(21241),
    oy = n(503062),
    ob = n(51943),
    o_ = n(847374),
    ov = n(320448),
    oN = n(723200);
function oT(e) {
    let { section: t, header: n, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rF.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? o_.a : ov._;
    return (0, l.jsxs)("section", {
        className: oN.uW,
        children: [
            (0, l.jsxs)(tH.D, {
                className: a()(oN.wx, oN.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(oN.p_, r), children: i }),
        ],
    });
}
var oS = n(341278);
function oR(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, rF.NJ)(),
        r = (0, nJ.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, oI.A)(t),
        c = !t.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rq.A.Overlay, {
              className: oS.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oT, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oS.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  ob.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, nE.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oC.A, { className: oS.yF }),
                  c &&
                      (0, l.jsx)(oT, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oS.p_,
                          onExpand: () => (0, oj.A)(t.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oS.nC,
                                                children: [
                                                    (0, l.jsx)(oE.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(oE.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            oy.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, r_.openUserProfileModal)({
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
function oM(e) {
    let { user: t, currentUser: n, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lQ.Ay)(t.id),
        c = (0, rD.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== t.id && ((h.current = t.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, rF.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id });
    (0, rG.A)(A, d, r3.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rU.A)(g),
        E = (0, au.fC)(),
        I = (0, rS.A)(d?.profileFrame?.skuId);
    (0, aa.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, ar.z)({ opacity: +(null != E.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, r_.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([ac.A], () => ({ defaultWishlistId: ac.A.getFirstWishlistId(t.id) })),
        { wishlist: _, isFetching: v } = (0, ad.fw)({ wishlistId: r ? void 0 : b, userId: t.id });
    (0, ao.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(rF.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(au.Hl, {
                value: E,
                children: (0, l.jsxs)(rq.A, {
                    ref: g,
                    user: t,
                    displayProfile: d,
                    themeType: r7.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r9.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(am.A, {}),
                        null != E.interactionType && (0, l.jsx)(as.animated.div, { style: j, className: r9.tB }),
                        (0, l.jsxs)(nD.d_, {
                            className: a()(r && r9.BE, !r && null != I && r9.It),
                            children: [
                                (0, l.jsxs)(r$.A, {
                                    children: [
                                        (0, l.jsx)(ag.A, { user: t, themeType: r7.d.SIDEBAR }),
                                        t.bot ? (0, l.jsx)(ap.A, { user: t }) : (0, l.jsx)(ax.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r9.wx,
                                    children: [
                                        (0, l.jsx)(rV.A, {
                                            user: t,
                                            displayProfile: d,
                                            themeType: r7.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r9.vK,
                                        }),
                                        (0, l.jsx)(ah.A, { className: r9.oR }),
                                        (0, l.jsx)(rH.A, {
                                            user: t,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r5.T[r7.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(af.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: r7.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(of, {
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
                                        className: r9.sJ,
                                        children: (0, l.jsx)(aA.A, {
                                            user: t,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r9.vS,
                                        children: (0, l.jsx)(ox, {
                                            profileOwner: t,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: r3.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oR, { user: t, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(r2, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rw.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != I && (0, l.jsx)(rJ.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oO = n(901600);
function oL(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lJ(),
        [o, d] = (0, rL.A)(n),
        [c, u] = s.useState(!1),
        h = rO("UserProfileSidebarRenderer"),
        A = (0, lQ.Ay)(n),
        p = A?.profileFrame?.skuId,
        g = (0, rS.A)(p),
        x = (0, m.bG)([rT.A], () => rT.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: t.id,
            };
            null != i ? (0, rP.A)(i, e) : (0, rP.A)(n, void 0, e);
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
        E = rR.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oO.H : void 0,
        children: (0, l.jsx)(rv.F, {
            component: (0, l.jsx)(rN.A, {
                children: (0, l.jsx)(rv.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: E }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(al, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r8, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oM, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oP = n(522556),
    oD = n(225315),
    ok = n(684407),
    ow = n(95701),
    oU = n(919638),
    oG = n(763827),
    oF = n(812771),
    oH = n(506309),
    oB = n(598748),
    oV = n(681154),
    oY = n(975460),
    oW = n(587895),
    oz = n(429913),
    oq = n(201718),
    oX = n(339580),
    oK = n(633075),
    o$ = n(903209),
    oQ = n(382483),
    oJ = n(385113);
let oZ = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function o0(e) {
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
                                ((n = sJ.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, oQ.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    n && (0, oQ.i$)().catch(() => {});
                                }, [n]),
                                (i = (0, m.bG)([oJ.A], () => oJ.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([oJ.A], () => oJ.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([oJ.A], () => oJ.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([oJ.A], () => oJ.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === oJ.e.NOT_FETCHED ||
                                        i === oJ.e.FETCHING ||
                                        (n && (l === oJ.e.NOT_FETCHED || l === oJ.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oV.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => t.has(e.id)) ?? [],
                                [e, t],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [oW.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            oW.A.isFetchingApplication(e) ||
                                            (null == oW.A.getApplication(e) && !oW.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, oz.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sI.Vq)
                                            .map((e) => [e.id, (0, oY.t)(e)])
                                            .filter(sI.QE)
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
                                ((p = (0, m.cf)([oX.A], () =>
                                    Object.fromEntries(y.map((e) => [e, oX.A.getUserIdentities(e)]).filter(sI.QE)),
                                )),
                                (g = (0, m.bG)([oX.A], () =>
                                    y.some((e) => oX.A.getFetchState(e) === oX.e.NOT_FETCHED || oX.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && oq.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([ac.A], () =>
                                    Object.fromEntries(y.map((e) => [e, ac.A.getUserProfile(e) ?? null]).filter(sI.QE)),
                                )),
                                (f = (0, m.yK)([ac.A], () =>
                                    y.filter((e) => null == ac.A.getUserProfile(e) && !ac.A.isFetchingProfile(e)),
                                )),
                                (E = (0, m.bG)([ac.A], () => y.some((e) => ac.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, o$.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || E }),
                            S = (0, m.cf)(
                                [oJ.A],
                                () => Object.fromEntries([...I].map((e) => [e, oJ.A.getConfig(e)]).filter(sI.QE)),
                                [I],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oV.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let t = C[e.extra.application_id] ?? null;
                                        if (null == t) return e;
                                        let n = S[t.id] ?? null;
                                        if (null == n || null == n.surfaces[oB.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, oK.E)(e, t.id)) ?? !1;
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
    return (0, l.jsx)(oZ.Provider, { value: r, children: e.children });
}
var o1 = n(900797),
    o2 = n(890856),
    o3 = n(180170),
    o7 = n(435738),
    o5 = n(38055);
let o9 = "content-inventory-feed",
    o6 = `${o9}-settings`,
    o8 = `${o9}-toggle`;
var o4 = n(569709);
let de = s.memo(function (e) {
        let t,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([o7.A], () => o7.A.hidden),
            h = (0, c.omit)((0, C.rm)(o6), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(o8), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                (0, j.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                });
            }, []),
            x = s.useCallback(() => (u ? (0, o3.Il)() : r()), [u, r]),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(o5.A, { ...h }),
                    (0, l.jsx)("span", { className: o4.AN }),
                    p
                        ? ((t = u
                              ? (0, l.jsx)(o1.t, { className: o4.wT })
                              : o
                                ? (0, l.jsx)(o_.a, { className: o4.wT })
                                : (0, l.jsx)(ov._, { className: o4.wT })),
                          (0, l.jsx)("span", { className: o4.wT, children: t }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(o2.s, {
                      ...A,
                      className: a()(o4.N1, { [o4.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: o4.N1, onContextMenu: g, children: f }),
        });
    }),
    dt = function () {
        return null;
    };
var dn = n(963307),
    di = n(424994);
let dl = en.default.track;
function ds(e, t) {
    dl(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: di.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
var dr = n(468581),
    da = n(808666),
    dd = n(414499),
    dc = n(323384),
    du = n(55730),
    dh = n(765379),
    dm = n(359549),
    dA = n(284525),
    dp = n(482030),
    dg = n(583846),
    dx = n(506326);
n(333007);
var df = n(342952),
    dE = n(315710),
    dI = n(276293),
    dj = n(935063),
    dC = n(778712),
    dy = n(696986),
    db = n(97808),
    d_ = n(738188),
    dv = n(983851),
    dN = n(31300),
    dT = n(308528),
    dS = n(401843),
    dR = n(375499),
    dM = n(429433),
    dO = n(324688);
let dL = (0, ow.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dP(e) {
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
        [p, g] = s.useState((0, sY.x7)("")),
        x = tL.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sW.Ay, {
        ref: f,
        placeholder: t,
        editorClassName: h,
        className: a()(dO.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dL,
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
                : (n(t), A(""), g((0, sY.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dD(e) {
    var t;
    let { onSelectEmoji: n, onClick: i } = e,
        r = (0, rD.Ay)(),
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
                            children: (0, l.jsx)(dM.C, {
                                messageId: eo.dJq,
                                channel: dL,
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
                        className: dO.mJ,
                        children: (0, l.jsx)(dR.A, {
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
var dk = n(402216),
    dw = n(822123),
    dU = n(409626),
    dG = n(692969),
    dF = n(711589),
    dH = n(607407),
    dB = n(832163),
    dV = n(533562),
    dY = n(805901),
    dW = n(565645);
n(90295);
var dz = n(7584);
(n(850992), n(690521));
var dq = n(806931),
    dX = n(307731),
    dK = n(866780);
function d$(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rU.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tH.D, {
            onClick: i,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(dY.c, {
                config: dR.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(as.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dW.A, {
                            className: a()(dK.Zg, r, { [dK.c4]: n }),
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
(dX.EmojiIntention.CHAT,
    [
        dz.Ay.getByName("thumbsup"),
        dz.Ay.getByName("eyes"),
        dz.Ay.getByName("laughing"),
        dz.Ay.getByName("watermelon"),
        dz.Ay.getByName("fork_and_knife"),
        dz.Ay.getByName("yum"),
    ].filter(sI.Vq));
var dQ = n(636585),
    dJ = n(543465),
    dZ = n(607567),
    d0 = n(774926),
    d1 = n(20805),
    d2 = n(22869),
    d3 = n(623671),
    d7 = n(428249),
    d5 = n(327098),
    d9 = n(576757),
    d6 = n(202195),
    d8 = n(140651),
    d4 = n(345394);
let ce = function (e) {
    let { children: t } = e,
        [n, i] = (0, aC.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lM.i.USER_DISMISS);
    }, [i]);
    return n !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(lA.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: d4.A },
                  }),
              ],
          });
};
var ct = n(315246),
    cn = n(866323),
    ci = n(252392);
let cl = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, cn.p)(
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
                (0, l.jsx)(as.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(ci.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(ci.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cs = n(381941),
    cr = n(231188);
let ca = (0, t6.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("419121"),
                n.e("149697"),
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
                n.e("412117"),
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
                n.e("700181"),
                n.e("804439"),
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
                n.e("56366"),
                n.e("217229"),
                n.e("477175"),
                n.e("960235"),
                n.e("910486"),
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
                n.e("217951"),
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
                n.e("178565"),
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
    co = s.createContext(void 0);
function cd(e) {
    let { children: t } = e,
        n = s.useRef(null),
        i = s.useId();
    return (
        (0, dE.tj)(n),
        (0, l.jsx)(co.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: n,
                className: cr.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function cc(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, d8.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cr.ZK, e, i), style: s, children: t }),
        })
    );
}
function cu(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: cr.$m, children: t });
}
function ch(e) {
    var t;
    let n,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [I, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lq.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lq.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, d6.A)(n),
                o = (0, nV.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iU.A)(t?.id),
                c = (0, m.bG)([nI.A], () => (null != a ? nI.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dZ.Ay], () => (null != a ? dZ.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lS.A], () => lS.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let t = ew.A.getDMFromUserId(e.user.id),
                            n = null != t && dJ.Ay.isChannelMuted(null, t),
                            i = lT.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(d_.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cr.vb,
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
                            className: cr.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(tH.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (E.A.updateChatOpen(a.id, !0), (0, ii.iN)(a.id), i?.(a));
                                        },
                                        className: cr.I3,
                                        children: [
                                            (0, l.jsx)(ng.Ay, {
                                                guild: c,
                                                size: ng.Ay.Sizes.SMOL,
                                                className: cr.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(ov._, {
                                                size: "xxs",
                                                color: tz.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dv.H, { size: "xs", color: tz.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: cr.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dQ.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(db.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dC._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cr.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dy.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lW.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dN.k : dv.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, d5.A)(h),
        L =
            ((t = O),
            (n = (0, m.bG)([nI.A], () => nI.A.getGuild((0, e_.D)(t?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(t?.location)))),
            (r = (0, m.yK)([ee.default], () => t?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, nV.Ay)(i)),
            null != t && null != n && null != i && ow.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cr.kP,
                              children: [
                                  (0, l.jsxs)(tH.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, ii.iN)(i.id),
                                      className: cr.I3,
                                      children: [
                                          (0, l.jsx)(ng.Ay, {
                                              guild: n,
                                              size: ng.Ay.Sizes.SMOL,
                                              className: cr.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(ov._, {
                                              size: "xxs",
                                              color: tz.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dI.N, { size: "xs", color: tz.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: cr.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dQ.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(db.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: dC._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cr.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dy.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rR.Ay.getName(o?.guild_id, o?.id, c),
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
                    surface_type: di.UG.GUILD_MEMBER_LIST,
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
                let e = await dT.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: di.PA.REACTION_EMOJI_REACT_SENT,
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
            let e = await dT.A.openPrivateChannel({ recipientIds: c.id }),
                n = ew.A.getChannel(e);
            (d()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === eo.rbe.DM ? di.PA.DM_REACTION_MESSAGE_SENT : di.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: t, interactionType: n, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, d7.d)({
                channel: n,
                content: t,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: cs.Hx.CONTENT_INVENTORY_MEMBERLIST,
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
            (0, l.jsx)(cl, { sent: T, shown: v, className: cr.Jt }),
            q ??
                (0, l.jsx)(ce, {
                    children: (0, l.jsxs)("div", {
                        className: cr.T7,
                        children: [
                            (0, l.jsx)(cm, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dD, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cr.P2 : cr.VE,
                children: [
                    (0, l.jsx)(dP, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: I ? o : void 0,
                        showEmojiButton: null != q,
                        className: cr.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(tH.D, {
                                          className: cr.wD,
                                          onClick: X,
                                          children: I
                                              ? (0, l.jsx)(dI.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dj.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tH.D, {
                            onClick: () => K(!1),
                            className: cr.i3,
                            children: (0, l.jsx)(nQ.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: tz.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cr.fh,
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
let cm = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dw.Fj)(t?.guild_id)
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
                              children: (0, l.jsx)(d$, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n({ emoji: t }),
                                  className: cr.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function cA(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = t?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, d9.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, d6.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cr.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cr.WP,
                children: [
                    (0, l.jsx)(df.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dC._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dy.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(cr.Xn, cr.zA),
                        children: z.intl.format(n, {
                            user0: rR.Ay.getName(o, t?.id, g[0]),
                            user1: rR.Ay.getName(o, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(cr.Mj, cr.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    d2.A,
                                    {
                                        textClassName: a()(cr.Mj, cr.nk),
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
                                    d2.A,
                                    {
                                        textClassName: a()(cr.Mj, cr.nk),
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
            null != p && (0, l.jsx)(dk.Ay, { size: dk.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(ct.A, { user: A, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cp(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(tH.D, { className: cr.Zw, onClick: n, children: t });
}
function cg(e) {
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
        E = (0, d1.zD)(f),
        I = E ? f.extra?.application_id : void 0,
        j = (0, dV.W)();
    null != j && (I = j);
    let C = (0, dG.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : I,
                source: dU.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(di.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, d0.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dB.A], () => dB.A.getDetectableIdsToApplicationIds()),
        N = E ? C : void 0,
        T = s.useContext(co);
    return (0, l.jsxs)("div", {
        className: cr.au,
        children: [
            (0, l.jsx)(cA, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(cc, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cr.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cr.Fb,
                                children: (0, l.jsx)(d3.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: d3.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cr.iC,
                                children: [
                                    (0, l.jsx)(cp, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(cr.$2, { [cr.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(cp, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cr.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dy.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cr.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != v[I]
                ? (0, l.jsx)(ca, {
                      className: cr.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: a4.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cx(e) {
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
        { actionString: p, canWatch: g } = (0, dF.K)(a),
        { entry: x } = A,
        f = (0, d1.zD)(x),
        E = f ? x.extra?.application_id : void 0,
        I = (0, dV.W)();
    null != I && (E = I);
    let j = (0, dG.A)(
            {
                location: "ContentPopout",
                applicationId: E,
                source: dU.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(di.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, d5.A)(x),
        { largeImage: N, smallImage: T } = (0, d0.D8)(y, b ?? v),
        { largeImage: S } = (0, d0.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([dB.A], () => dB.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(co);
    return (0, l.jsxs)("div", {
        className: cr.au,
        children: [
            (0, l.jsx)(cA, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(cc, {
                backgroundImgSrc: S?.src,
                className: cr.uR,
                children: [
                    (0, l.jsx)(cp, {
                        onClick: g
                            ? () => {
                                  (lf.default.selectVoiceChannel(a.channelId), (0, dS.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cr.nh,
                            children: [
                                (0, l.jsx)(dH.A, { className: cr.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cr.NE,
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
                        className: cr.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: cr.Fb,
                                    children: (0, l.jsx)(d3.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: d3.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cr.gv,
                                children: [
                                    (0, l.jsx)(cp, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: cr.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(cp, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: cr.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dy.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != M[E]
                ? (0, l.jsx)(ca, {
                      className: cr.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: a4.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cf = n(299846);
let cE = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cf.u)(n);
    function u() {
        (0, dp.hg)(n.extra.application_id);
    }
    let { data: h } = (0, tk.YY)(n.extra.application_id),
        m = (0, dm.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dx.iT, { location: dx.N5.POPOUT, entry: n }),
        p = (0, l.jsx)(cg, {
            channel: t,
            userDescription: (0, dg.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, du.A)(d, eo.jUm.JOIN) || (0, dh.A)(d),
        f = g
            ? (0, l.jsx)(dA.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: da.I,
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
                      icon: dd.h,
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
                      icon: dc.k,
                  }),
        j = [E, g && !r ? f : I].filter(sI.Vq);
    return (0, l.jsxs)(cd, {
        children: [
            p,
            (0, l.jsx)(cu, {
                children: (0, l.jsx)(ch, {
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
var cI = n(322789),
    cj = n(808380),
    cC = n(687966),
    cy = n(960076),
    cb = n(544441),
    c_ = n(562708),
    cv = n(139286);
function cN(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(n),
        s = (0, dm.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, cv.A)({
            name: c_.ImpressionNames.CLOUD_PLAY_CTA,
            type: c_.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: dd.h,
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
var cT = n(601007),
    cS = n(648246),
    cR = n(308335),
    cM = n(790381),
    cO = n(266080),
    cL = n(968309),
    cP = n(30370);
function cD(e) {
    let t = (0, m.bG)([cP.A], () => cP.A.getAccounts().some((t) => t.type === e)),
        n = s.useCallback(() => {
            if (null == e) return null;
            (0, cL.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var ck = n(18282);
let cw = [...cI.n, dx.Yq],
    cU = {
        [cj.Y.DESKTOP]: null,
        [cj.Y.LINUX]: null,
        [cj.Y.MACOS]: null,
        [cj.Y.NINTENDO]: null,
        [cj.Y.IOS]: null,
        [cj.Y.ANDROID]: null,
        [cj.Y.XBOX]: cO.A,
        [cj.Y.PLAYSTATION]: cM.A,
    },
    cG = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cf.u)(n),
            { streamPreviewUrl: A, stream: p } = (0, d6.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            f = null != g ? cU[g] : null,
            E = cD(g === cj.Y.XBOX ? eo.fg2.XBOX : g === cj.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: I } = (0, tk.YY)(x),
            j = (0, cb.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dm.JC)(I),
            b = (0, cR.o)(h?.application_id ?? m?.applicationId ?? I?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dx.mG, {
                location: null == A ? dx.N5.POPOUT : dx.N5.STREAMING_POPOUT,
                children: cw.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(cg, {
                          channel: t,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(ck.A, { onClick: E, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dg.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cT.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cx, {
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
                                  ? (0, l.jsx)(cT.A, {
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
                          cN,
                          { application: I, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, du.A)(h, eo.jUm.JOIN) || (0, dh.A)(h))
                    ? (0, l.jsx)(
                          dA.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cC.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cy.A)(h)
                    ? (0, l.jsx)(cS.A, { activity: h, size: "md", variant: "primary", icon: tq.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sI.Vq);
        return (0, l.jsxs)(cd, {
            children: [
                v,
                (0, l.jsx)(cu, {
                    children: (0, l.jsx)(ch, {
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
    cF = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function cH(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e,
        { data: r } = (0, tk.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, dm.Ay)({ application: r, analyticsLocations: a }),
        d = (0, nH.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && n,
        { activeEntryId: u, setActiveEntryId: h } = cF(),
        m = u === t.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, aC.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(t.id);
    }, [u, c, t.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lM.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [E, I] = s.useState(!1);
    return (
        f && !E && I(!0),
        (0, cv.A)(
            {
                name: c_.ImpressionNames.CLOUD_PLAY_CTA,
                type: c_.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !E },
            [E],
        ),
        (0, l.jsx)(lA.A, {
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
                    icon: dd.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lM.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cB = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(cH, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var cV = n(363670),
    cY = n(205327),
    cW = n(52133),
    cz = n(835723),
    cq = n(172710),
    cX = n(655116),
    cK = n(763758),
    c$ = n(286617),
    cQ = n(533207),
    cJ = n(121090),
    cZ = n(693879),
    c0 = n(809854),
    c1 = n(272984),
    c2 = n(170699);
function c3(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, c0.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, i),
                s = n - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dg.W6)({ start: 0 }, s) };
        }, [t, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: c2.lu,
              children: [
                  (0, l.jsx)(cZ.z, { entry: n }),
                  (0, l.jsx)("div", { className: c2.Lt, children: (0, l.jsx)("div", { className: c2.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: c2.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function c7(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cV.u7)(r),
        g = cD(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cX.A, sa.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, c$.A)(cX.A, sa.default, p, c) : void 0),
            [c, p],
            cW.A,
        );
    if (null == c || null == u) return null;
    let E = h,
        I = [];
    u.media.provider === cY.X.SPOTIFY &&
        ((n = () => {
            (0, cq.Mp)(c);
        }),
        (i = () => {
            (0, cq.QX)(c, p.id);
        }),
        (t = () => {
            null != g ? g() : (0, cq.Mp)(c);
        }),
        (E = (0, l.jsx)(cK.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cr.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cq.mN)(c, p.id, e);
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
                        icon: cz.J,
                        onClick: function () {
                            null != f && ((0, cQ.A)(f, c1.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(cg, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cY.X.SPOTIFY
                ? (0, l.jsx)(ck.A, { onClick: t, "aria-label": z.intl.string(z.t.rRffNz), Icon: cJ.A })
                : null,
        userDescription: (0, dg.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: n,
        subtitle: E,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(c3, { activity: c }),
    });
    return (0, l.jsxs)(cd, {
        children: [
            j,
            (0, l.jsx)(cu, {
                children: (0, l.jsx)(ch, {
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
var c5 = n(903134),
    c9 = n(56121),
    c6 = n(263577),
    c8 = n(868065),
    c4 = n(804779);
let ue = [dx.Y8],
    ut = [c9.j.WEEK],
    un = s.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, d0.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dg.TQ)(t);
        return null != r && (0, sI.S1)(r, ut)
            ? (0, l.jsxs)(c8.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(c8.UA, {
                          children: [
                              (0, l.jsx)(c8.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(c8.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(dx.mG, {
                                  location: dx.N5.CARD,
                                  children: ue.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(c6.V, { src: s?.src, size: 48, className: c4.xn }),
                  ],
              })
            : null;
    });
var ui = n(210528);
let ul = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        c = (0, dg.TQ)(n),
        u = cD(eo.fg2.SPOTIFY);
    if (null == d || !(0, sI.S1)(c, ut)) return null;
    function h() {
        let e = c1.M0.ALBUM,
            t = ui.A.isProtocolRegistered()
                ? c1.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : c1.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(cd, {
        children: [
            (0, l.jsx)(cg, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = c1.M0.ARTIST,
                        t = ui.A.isProtocolRegistered()
                            ? c1.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : c1.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: h,
                channel: t,
                entry: n,
                headerIcons:
                    a === cY.X.SPOTIFY
                        ? (0, l.jsx)(ck.A, { onClick: u, Icon: cJ.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dx.mG, {
                    location: dx.N5.POPOUT,
                    children: ue.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(cu, {
                children: (0, l.jsx)(ch, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: t, entry: n }),
            }),
        ],
    });
};
var us = n(977001);
let ur = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cf.u)(n),
        c = (0, dg.ty)(n),
        u = (0, dg.TQ)(n);
    if (null == a || null == c || null == u || !(0, us._E)(u)) return null;
    let h = null != n.extra.platform ? cU[n.extra.platform] : null;
    return (0, l.jsxs)(cd, {
        children: [
            (0, l.jsx)(cg, {
                channel: t,
                headerIcons: null == h ? null : (0, l.jsx)(ck.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: n,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dx.mG, {
                    location: dx.N5.POPOUT,
                    children: us.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cu, {
                children: (0, l.jsx)(ch, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var ua = n(514243),
    uo = n(347306),
    ud = n(123917),
    uc = n(998218);
let uu = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        a = cD(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == n.extra.url) return;
        let e = uc.A.safeParseWithQuery(n.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, ud.h)({ href: uc.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cd, {
              children: [
                  (0, l.jsx)(cg, {
                      channel: t,
                      entry: n,
                      userDescription: (0, dg.JM)(n) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(ck.A, {
                          onClick: a,
                          Icon: uo.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dx.mG, {
                          location: dx.N5.POPOUT,
                          children: ua.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cu, {
                      children: (0, l.jsx)(ch, {
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
function uh(e) {
    return e?.type === dn.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oV.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function um(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case oV.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cI.A, { ...n, entry: t });
        case oV.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ua.A, { ...n, entry: t });
        case oV.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(us.Ay, { ...n, entry: t });
        case oV.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(un, { ...n, entry: t });
        case oV.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cV.Ay, { ...n, entry: t });
        case oV.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(dr.A, { ...n, entry: t });
        default:
            return null;
    }
}
function uA(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === oV.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cB, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function up(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(ug, {
        onReaction: (e, i) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(di.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function ug(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case oV.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cG, { ...n, entry: t });
        case oV.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uu, { ...n, entry: t });
        case oV.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ur, { ...n, entry: t });
        case oV.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ul, { ...n, entry: t });
        case oV.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c7, { ...n, entry: t });
        case oV.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cE, { ...n, entry: t });
        default:
            return null;
    }
}
let ux = s.memo(function (e) {
    let { index: t, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${t}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cf.u)(r.entry);
    !(function (e) {
        let { markAsVisible: t } = s.useContext(oZ);
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
                ds(e, { ...f, ...t });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        ds(di.PA.CARD_POPOUT_OPEN, e);
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
            c && (0, l.jsx)(uA, { ...r, targetElementRef: a }),
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
                        return (0, l.jsx)(c5.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(up, {
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
                        return (0, l.jsx)(tH.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                I || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(um, {
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
var uf = n(531685),
    uE = n(99066),
    uI = n(376261),
    uj = n(99753),
    uC = n(136722),
    uy = n(860071);
let ub = [],
    u_ = new Set(),
    uv = new Set();
var uN = n(808323);
let uT = new Set([
    oV.ContentInventoryEntryType.PLAYED_GAME,
    oV.ContentInventoryEntryType.WATCHED_MEDIA,
    oV.ContentInventoryEntryType.TOP_GAME,
    oV.ContentInventoryEntryType.TOP_ARTIST,
    oV.ContentInventoryEntryType.LISTENED_SESSION,
    oV.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uS = n(498642);
let uR = (0, ss.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uM = n(293860);
let uO = { cooldownDurationMs: 60 * si.A.Millis.DAY };
function uL(e) {
    let { guildId: t } = e,
        n = (function (e) {
            let { isInTreatment: t } = {
                    isInTreatment: uR.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: n } = sc(),
                i = (0, m.bG)([uS.A], () => uS.A.getMemberCount(e), [e]);
            return null != e && !!n && !!t && null != i && !(i >= 200);
        })(t);
    return (0, l.jsx)(lI.zJ, {
        contentType: n ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uO,
        groupName: lM.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sg, {
                      className: uM.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: n,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uP = n(728321),
    uD = n(282006);
let uk = er.Ay.getEnableHardwareAcceleration(),
    uw = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uU = s.memo(function (e) {
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
                            t = lS.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
                    shouldAnimateStatus: uk,
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
    uG = s.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != t ? V.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uU, { ...n, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uF(e) {
    let { index: t } = e,
        n = (0, C.rm)(`${t}`);
    return (0, l.jsx)(ea.A, { itemProps: n });
}
class uH extends s.Component {
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
        if (r?.id === o9) return (0, s.createElement)(de, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                uP.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uw,
                    children: (0, s.createElement)(uD.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, s.createElement)(uD.Y, { ...r, key: `section-${t}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != t && t.type === dn.S9.CONTENT_INVENTORY) {
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
            if (r.type === dn.S9.MEMBER && "user" in r) {
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
                    uG,
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
            if (r.type === dn.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    ux,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === dn.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(dt, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uF, { index: i }, `placeholder-${t}:${n}`);
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
        if (e?.id === o9) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uh(n[i + 1 + l]) : t;
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
            .filter(sI.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== dn.S9.MEMBER ||
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
                (0, l.jsx)(sq.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rv.F, {
                                component: (0, l.jsx)(rN.A, {
                                    children: (0, l.jsx)(rv.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, nV.m1)(n, ee.default, lT.A),
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
function uB(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([dn.Ay], () => dn.Ay.getProps(t.guild_id, t.id)),
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
                        l = (0, uN.A)({ id: di.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return ((0, cW.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [t]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uy.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return ub;
                                    let e = [];
                                    for (let t of a) $.Ay.isMember(l, t) && e.push(t);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return u_;
                                let e = new Set();
                                for (let t of o) {
                                    let n = el.cc({ user: t, context: i });
                                    uC.zy(n, W.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => t?.filter((e) => d.has(e.author_id)), [t, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((t = l = s.useMemo(() => l?.filter((e) => uT.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [o7.A, uj.A],
                            () => {
                                let e = uj.A.getDebugImpressionCappingDisabled();
                                return !(0, uE.sE)("useFilterImpressionCappedContent") || e
                                    ? uv
                                    : o7.A.getImpressionCappedItemIds();
                            },
                            [t],
                        )),
                        s.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: uv };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, dg.JM)(t) || !i.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, i]));
                    l = r;
                    let o = (0, m.bG)([uj.A], () => uj.A.getFeedRequestId(di.X1.GLOBAL_FEED));
                    return (
                        (n = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oZ).useInjectEntriesWithPreviewData(n)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([o7.A], () => o7.A.hidden),
                A = (0, m.bG)([uf.A], () => uf.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([nI.A], () => nI.A.getGuild(r), [r]),
                x = ((0, uI.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, E, I, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [t, n, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dn.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dn.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: o9,
                        type: dn.S9.CONTENT_INVENTORY_GROUP,
                        key: o9,
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
                        feedHeight: e.map(uh).reduce((e, t) => e + t, 0),
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
                                (dl(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: t,
                                    surface_type: di.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, uE.sE)("useInjectContentInventoryFeed") &&
                                    iP.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
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
    let g = (0, oH.W)("lg") + (0, oH.W)("xxs"),
        x = s.useCallback(
            (e, t) => {
                let n = A.current;
                if (null == n) return;
                let i = t === o6 || t === o8 ? 0 : parseInt(t, 10),
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
                (0, l.jsx)(uL, { guildId: t.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: I,
                    children: (0, l.jsx)(uH, {
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
function uV(e) {
    let { channel: t, className: n } = e,
        i = s.useDeferredValue(t);
    return s.useMemo(() => (0, l.jsx)(o0, { children: (0, l.jsx)(uB, { channel: i, className: n }) }), [i, n]);
}
var uY = n(888904);
let uW = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uY.kL,
        children: [
            (0, l.jsxs)(lm.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lm.A.Icon, { icon: dI.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lm.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uY.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uY.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uY.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uz = n(909735),
    uq = n(943712),
    uX = n(321255),
    uK = n(746080),
    u$ = n(516607),
    uQ = n(999900);
function uJ() {
    return (0, l.jsx)("div", { className: uQ.wG, children: (0, l.jsx)(g.y, {}) });
}
let uZ = (0, t6.Fe)({
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
        renderLoader: uJ,
        name: "ForumChannel",
    }),
    u0 = (0, t6.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("770583"),
                n.e("43853"),
                n.e("116694"),
                n.e("815852"),
                n.e("154168"),
                n.e("108168"),
                n.e("28047"),
                n.e("979585"),
                n.e("357718"),
                n.e("563600"),
            ]).then(n.bind(n, 203859)),
        webpackId: 203859,
        renderLoader: uJ,
        name: "AppChannel",
    });
function u1() {
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
        n.e("17094"),
        n.e("305210"),
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
        n.e("673950"),
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
        n.e("327198"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("256373"),
        n.e("33448"),
        n.e("79216"),
        n.e("420577"),
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
        n.e("154168"),
        n.e("769014"),
        n.e("108168"),
        n.e("815057"),
        n.e("654624"),
        n.e("322094"),
        n.e("28047"),
        n.e("45916"),
        n.e("726223"),
        n.e("979585"),
        n.e("678827"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("60701"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("975076"),
        n.e("736793"),
        n.e("112733"),
        n.e("357718"),
        n.e("586546"),
        n.e("792461"),
    ]).then(n.bind(n, 540462));
}
let u2 = (0, t6.Fe)({ createPromise: u1, webpackId: 540462, name: "ChannelCall", renderLoader: uJ });
function u3() {
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
        n.e("17094"),
        n.e("305210"),
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
        n.e("327198"),
        n.e("504098"),
        n.e("920593"),
        n.e("949013"),
        n.e("256373"),
        n.e("33448"),
        n.e("79216"),
        n.e("420577"),
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
        n.e("60701"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("975076"),
        n.e("580372"),
    ]).then(n.bind(n, 507007));
}
let u7 = (0, t6.Fe)({ createPromise: u3, webpackId: 507007, name: "StageChannelCall", renderLoader: uJ }),
    u5 = (0, t6.Fe)({
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
            return (0, l.jsx)(sS, {});
        },
    }),
    u9 = (0, t6.Fe)({
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
    u6 = (0, t6.Fe)({
        createPromise: () => Promise.all([n.e("386345"), n.e("269178"), n.e("177718")]).then(n.bind(n, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class u8 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rb.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        return null != e && ((0, ow.ZV)(e.type) || null != t);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? u1()
            : e === eo.rbe.GUILD_STAGE_VOICE && u3();
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
            (0, r_.openUserProfileModal)({
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
        return e?.hasFlag(uK.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ik.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tP.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== dq.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iL.A,
                  { size: dk.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
                    o.push((0, l.jsx)(lP, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i7.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lD.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(iQ, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(lZ, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(lY, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lP, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i7.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lD.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(i2, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(ih, { channel: e })),
                    null == t || t.isForumLikeChannel() || o.push((0, l.jsx)(rm.A, { channel: t }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(lX, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iI, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i7.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(i2, { channelId: e.id }, "members")),
                    null != t && (0, eE.pk)(e) && o.push((0, l.jsx)(i4, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rx, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rm.A, { channel: e }, "browser")),
                    n || o.push((0, l.jsx)(i3.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i7.A, { channel: e }, "pins")),
                    (0, tF.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(i0, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(i2, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && o.push((0, l.jsx)(i4, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(tG, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rm.A, { channel: e }, "browser")),
                        n || o.push((0, l.jsx)(i3.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(i7.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(i2, { channelId: e.id }, "members")));
                    break;
                }
                (o.push((0, l.jsx)(tN, { channel: e }, "popout")),
                    n || o.push((0, l.jsx)(i3.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i2, { channelId: e.id }, "members")),
                    o.push((0, l.jsx)(iQ, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(t_, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lh, {}, "game-invite-channel-learn-more")),
                    n ||
                        (o.push((0, l.jsx)(lo, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(i3.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(i2, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(i2, { channelId: e.id }, "members"));
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
                t.push((0, l.jsx)(i2, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(i2, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(i2, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e && null != t
            ? (0, l.jsx)("div", {
                  className: uQ.u8,
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
            className: uQ.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lm.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uQ.DD, r, { [uQ.zh]: e.type === eo.rbe.GROUP_DM }),
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
                                              className: uQ.u8,
                                              children: (0, l.jsx)(ti, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: uQ.u8,
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
                (0, l.jsx)(sv.A, { channelId: e.id }),
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
                if (!t) return (0, l.jsx)(u7, { channel: e, popoutType: tO.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, l.jsx)(
                    u2,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: tO.N.NO_POPOUT,
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
        return (0, l.jsx)(e9, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(iV, { guildId: t.id })
                : (0, l.jsx)(iw.H, { guildId: t.id, children: (0, l.jsx)(i$, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(oP.A, { guild: t, channelId: e.id });
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
            return (0, l.jsx)(uZ, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(nY.A, { channel: e, guild: t, chatInputType: tL.oU.NORMAL }, null != t ? t.id : "home")
            : (0, l.jsx)(u0, { channel: e }, e.id);
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
            return (0, l.jsx)(oL, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(s_, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uV, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(uV, { channel: t }, `channel-members-${t.id}`);
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
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(u5, { guildId: n?.id, channelId: e.id });
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
                        { onCloseCallback: () => iD(l3.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("99643"), n.e("510585")]).then(
                                n.bind(n, 954784),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, oD.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
                case sM.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rr, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sM.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(ry, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sM.PE.VIEW_CHANNEL: {
                    let n = ew.A.getChannel(i.channelId);
                    if (n?.isThread()) {
                        let n = t?.isForumLikeChannel() ? iT : ry;
                        e = (0, l.jsx)(n, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(uX.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sM.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sM.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: uQ.uC,
                    children: (0, l.jsx)(u9, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => sR.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(oF.A, {
                sidebarType:
                    t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? oF.X.PostSidebar : oF.X.ThreadSidebar,
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
        if (i) return (0, l.jsx)(uW, {});
        if (null == e) return (0, l.jsx)(uq.A, { channelId: this.props.channelId });
        let E = r === eo.YvQ.SIDEBAR_CHAT,
            I = (0, uz.UN)("Channel"),
            j = null != d && !E,
            C =
                ((0, ow.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = t?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(uQ.TE, {
                            [uQ.js]: (E && !I) || j,
                            [uQ.Rs]: E ? !I || g : j || x,
                            [uQ.jl]: E && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: E ? p : void 0 },
                                      className: uQ.x4,
                                      channel: e,
                                      draftType: i_.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uQ.Qs, { [uQ.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(t8.HI, { location: y, subsection: n ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uQ.zP, children: b }) : b,
                x && (0, l.jsx)(u6, {}),
            ],
        });
    }
}
let u4 = (0, ef.A)(u8),
    he = s.memo(function (e) {
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
            _ = (0, m.bG)([nI.A], () => nI.A.getGuild(j?.guild_id), [j]),
            { needSubscriptionToAccess: v } = (0, iU.A)(j?.id ?? void 0),
            N = (0, m.bG)(
                [tM.A],
                () => {
                    let e = null != c ? tM.A.getParticipants(c) : [],
                        t = null != c ? tM.A.getActivityParticipants(c) : [];
                    return e.length - t.length > 0;
                },
                [c],
            ),
            T = (0, iO.A)(),
            S = (0, m.bG)([eU.Ay], () => (T?.channelId ?? eU.Ay.getVoiceChannelId()) === j?.id),
            R = (0, m.bG)([ej.Ay], () => (null != j ? ej.Ay.getSelfEmbeddedActivityForChannel(j.id) : null), [j]),
            M = (0, m.bG)([oG.A], () => oG.A.isConnected()),
            O = (0, eI.Ay)(M),
            L = M && !1 === O;
        s.useEffect(() => {
            S &&
                L &&
                null != R &&
                null != j &&
                E.A.selectParticipant(
                    j.id,
                    (0, tR.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [L, j, S, R]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            D = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            k = null != P && !(0, ev.A)(j?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, m.cf)([lS.A], () =>
                null != j && j.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lS.A.getVoiceStatesForChannel(j.id)),
                          isUserInThisVoice: lS.A.isInChannel(j.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != j && j.isPrivate() && !k && N,
            H = j?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sL.e)(j, "channel"),
            V = (0, m.bG)([tx.A], () => {
                let e = (0, tb.ny)(tx.A.getMainFrame());
                return e?.data.layoutMode === tb.y0.FOCUSED && e.intent === tb.sV.MAIN;
            }),
            { welcomeModalChannelId: Y } = (0, h.zy)(),
            W = (0, m.bG)([ip.A], () => null != j && ip.A.isLurking(j.guild_id), [j]),
            z = (0, m.bG)([ok.A], () => ok.A.hasSeen(j?.guild_id, W), [j, W]),
            q = (0, m.bG)(
                [tM.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? tM.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            X =
                ((t = _?.id),
                (r = (0, m.bG)([nI.A, l2, ee.default, $.Ay], () => {
                    let e = nI.A.getGuild(t);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l2.hasViewedPrompt(l3.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = ee.default.getCurrentUser();
                    if (null == n) return null;
                    let i = $.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != r && (r || iD(l3.REAL_NAME_PROMPT, t));
                }, [r, t]),
                !0 === r),
            K =
                ((n = _?.id),
                (0, m.bG)([ew.A, nI.A, eU.Ay], () => {
                    let e = nI.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = ew.A.getChannel(Y);
                    return Y === eU.Ay.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, ow.ke)(t.type);
                })),
            { section: J, channelSidebarState: Z } = (0, m.cf)(
                [iJ.Ay],
                () => ({ section: iJ.Ay.getSection(c, j?.isDM()), channelSidebarState: iJ.Ay.getSidebarState(c) }),
                [c, j],
            ),
            et = _?.id,
            en = (0, m.bG)([iJ.Ay], () => iJ.Ay.getGuildSidebarState(et), [et]),
            el = (0, l5.lI)(),
            es = (0, te.qz)() && j?.type === eo.rbe.GUILD_APP;
        ((i = j?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return tT.A.addRouteRewriter((e, t) => {
                        let { pathname: n, search: l, state: s } = e;
                        return "POP" === t || (0, te.Dw)(l) || tS.exec(n)?.[1] !== i
                            ? null
                            : { path: (0, te.gu)(n), state: s };
                    });
            }, [i, es]));
        let er = es && Z?.type === sM.PE.VIEW_CHANNEL && Z.channelId === j.id,
            ea = (0, nV.Ay)(j),
            ed = (0, nV.Ay)(j, !0),
            ec = (0, m.bG)([tM.A], () => (null != j ? tM.A.getSelectedParticipant(j.id) : null)),
            eu = (0, e4.vL)(j),
            eh = (0, nz.Uf)(j),
            em = null != j && g === j.id,
            eA = null != j && j.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iS.A.useConfig({ location: "Channel" }),
            ex = (0, iM.c)(),
            ef = (0, m.bG)(
                [oU.A, i1.A],
                () => {
                    let e = j?.guild_id ?? i1.A.getGuildId();
                    return null != e && oU.A.isUnavailable(e);
                },
                [j],
            ),
            eC = ep && (0, iR.A)() && null != j && !ef && !j.isGuildVocal();
        (s.useEffect(() => (I.A.setFriendsSidebarAvailable(eC), () => I.A.setFriendsSidebarAvailable(!1)), [eC]),
            (function (e) {
                let { onTransition: t } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: n } = e,
                            i = (0, e_.H)(n);
                        if (null == i || !(0, ev.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, e6.A)({ channelId: i }));
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
                if (e?.location?.state?.stageInviteKey === u$.J2) {
                    let { channelId: t } = (0, l7.vu)(e?.location?.pathname) ?? {};
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
                null != o && null != e && eA && e.id === o && !t && ((0, sO.av)(e), d(null));
            }, [o, eA]));
        let eN = (0, eE.cI)(j),
            eT = null != j && j.isPrivate(),
            eS = (0, eI.Ay)(eT),
            eR = (0, eI.Ay)(j?.id);
        s.useEffect(() => {
            let e = eS && !eT,
                t = eS && eT && j?.id !== eR;
            (e || t) && (0, nH.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lM.i.AUTO });
        }, [j?.id, eR, eT, eS]);
        let eM = (0, p.useHasAnyModalOpen)(),
            eO = (0, tD.a)(j);
        return (0, l.jsx)(u4, {
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
            ...(0, m.cf)([lS.A], () => ({ hasVideo: null != j && lS.A.hasVideo(j.id) }), [j]),
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
