(n.r(t), n.d(t, { default: () => uv }), n(321073));
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
    I = n(367513),
    j = n(604681),
    C = n(442433);
n(183994);
var E = n(837381),
    y = n(887129),
    b = n(607399),
    _ = n(834730),
    v = n(194261),
    N = n(312138),
    T = n(475825),
    S = n(177953),
    R = n(297264),
    O = n(414798),
    P = n(775602),
    M = n(793574),
    L = n(688810),
    D = n(449582),
    k = n(485947),
    w = n(878678),
    G = n(69282),
    U = n(657048),
    F = n(361610),
    H = n(964486),
    V = n(36124),
    B = n(317525),
    Y = n(219065),
    W = n(818348),
    z = n(375708);
let q = [];
var K = n(342296),
    $ = n(616356),
    X = n(696451),
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
            c = (0, m.bG)([X.Ay], () => X.Ay.getMember(t.guild_id, r)),
            u = (0, m.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, t.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, t.guild_id))),
            I = (0, m.bG)([$.A], () => $.A.getAnyStreamForUser(r)),
            j = (0, E.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(t.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
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
                    O.A.startTyping(t.id));
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
            [R, P] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(K.A, {
            targetElementRef: o,
            user: h,
            guildId: t.guild_id,
            channelId: t.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => P(!1),
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
                    applicationStream: I,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: j,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : P((e) => !e);
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
            r = (0, G.Xx)({ roleId: t, guildId: s, size: 16 });
        return t === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(U.A, { className: ec.UT, ...r }) : null,
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
        { analyticsLocations: p } = (0, L.Ay)(M.A.MEMBER_LIST),
        g = (function (e, t) {
            (0, H.Ay)(() => {
                t?.id != null && (0, F.Ey)(t.id, e, V.LD);
            });
            let n = (0, m.bG)([B.A], () => (null != t ? B.A.getSortedRoles(t.id) : [])),
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
        { navigator: f, listRef: I } =
            ((t = A),
            (n = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled)),
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
        j = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        j)
    )
        return (0, l.jsx)(eg, { channel: c });
    let C = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(L.f5, {
        value: p,
        children: (0, l.jsx)(E.hD, {
            navigator: f,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ec.yg, ec.ML, ed.kL),
                        children: (0, l.jsx)(
                            T.OZ,
                            {
                                ref: I,
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
                                ...C,
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
    eI = n(432371),
    ej = n(475743),
    eC = n(933958),
    eE = n(702841),
    ey = n(567249),
    eb = n(811024),
    e_ = n(969151),
    ev = n(108959),
    eN = n(866665),
    eT = n(446576),
    eS = n(817281),
    eR = n(95561),
    eO = n(587837),
    eP = n(850891),
    eM = n(742023),
    eL = n(204651),
    eD = n(383831),
    ek = n(128286),
    ew = n(734057),
    eG = n(309010),
    eU = n(795816),
    eF = n(685399),
    eH = n(216418),
    eV = n(620148),
    eB = n(732637),
    eY = n(104171),
    eW = n(47294),
    ez = n(594007),
    eq = n(16961),
    eK = n(138017),
    e$ = n(715482),
    eX = n(315502),
    eQ = n(573163),
    eJ = n(234320),
    eZ = n(5867),
    e0 = n(248310);
function e1(e) {
    let { channelId: t, className: n, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eU.i5)(e);
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
    let g = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = u > 0 ? u : d,
        f = x > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eL.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: A,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eK.j : e$.g,
                themeable: !0,
                className: n,
                ...i,
            }),
            f ? (0, l.jsx)(eX.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e0.qS }) : null,
        ],
    });
}
var e2 = n(538303);
let e3 = eY.DN.SIZE_32,
    e7 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e9(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        r = (0, eV.A)(),
        o = (0, m.yK)([eC.Ay], () => eC.Ay.getEmbeddedActivitiesForLocationIncludingHidden(n), [n]),
        d = (0, e_.H)(n),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [I, j] = s.useState(eM.Ay.activityPanelHeight ?? t ?? null),
        C = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        E = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == E.current) return;
        let e = new ResizeObserver(() => {
            b({ width: E.current?.clientWidth ?? 0, height: E.current?.clientHeight ?? 0 });
        });
        return (e.observe(E.current), () => e.disconnect());
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
        O = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
        M = (0, m.yK)(
            [X.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => X.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        L = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [M]),
        D = (function (e, t, n) {
            let i = (0, ej.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !P.Ay.useReducedMotion && (l || r);
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
        })(x, I, t),
        k = (0, eq.G)();
    if (null == r) return null;
    let w = [];
    function G(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let t = L.get(e.id),
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
                        (0, l.jsx)(eP.A, { type: "embedded-activity", applicationId: r.id }),
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
                                    ref: E,
                                    children: (0, l.jsx)(eB.A, { className: e2.pU, embedId: (0, ez.A)(n.id, r.id) }),
                                }),
                                null != O
                                    ? (0, l.jsxs)("div", {
                                          className: e2.qr,
                                          children: [
                                              (0, l.jsx)(eY.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e3,
                                                  max: 6,
                                                  renderUser: G,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: O }),
                                                              (0, l.jsx)(eL.l, {
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
                                                                            (await (0, eU.od)(r.id, d)),
                                                                            (0, eU.jp)());
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
                            ? (0, l.jsx)(eO.A, {
                                  minHeight: 480,
                                  maxHeight: t,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), j(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), C(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e5(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eE.cf)([eC.Ay], () => {
            let e = eC.Ay.getConnectedActivityLocation(),
                t = eC.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: t,
                activityPanelMode: eC.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eE.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e9, { maxHeight: t, connectedLocation: s.location, renderExternalHeader: n });
}
var e6 = n(90804),
    e8 = n(748975),
    e4 = n(323073),
    te = n(991690),
    tt = n(621466),
    tn = n(453903),
    ti = n(922016),
    tl = n(980707),
    ts = n(477782),
    tr = n(663417),
    ta = n(365199),
    to = n(342321),
    td = n(316768),
    tc = n(625180),
    tu = n(672929),
    th = n(58736),
    tm = n(165610);
function tA(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, to.A)(t, "app_channel_header"),
        o = s.useMemo(
            () => ({ type: te.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        d = (0, tu.A)(t.application_id ?? null, o),
        c = (0, tm.x1)(d) && d.data.proxyTicketRefreshing,
        u = (0, td.A)(t, d, "AppChannelHeaderOverflowMenu"),
        h = s.useCallback(() => {
            null == d || c || tc.A.refreshProxyTicket(d.id);
        }, [d, c]),
        m = z.intl.string(z.t["UKOtz+"]),
        A = (0, tm.x1)(d);
    return A || null != a || 0 !== u.length
        ? (0, l.jsx)(ti.Y, {
              targetElementRef: r,
              shouldShow: n,
              animation: ti.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: (e, t) => {
                  if ("user:escape" === t && (0, tt.vq)(document.activeElement, HTMLIFrameElement)) return tn.o;
                  i(!1);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(tl.W, {
                      "data-menu-migrated": !0,
                      navId: "app-channel-header-overflow",
                      onClose: t,
                      onSelect: t,
                      "aria-label": z.intl.string(z.t.Xm41aV),
                      children: (0, l.jsxs)(ts.rX, {
                          children: [
                              u,
                              A &&
                                  (0, l.jsx)(ts.Dr, {
                                      id: "reload-app",
                                      label: z.intl.string(z.t.kHie4V),
                                      action: h,
                                      icon: tr.RefreshIcon,
                                      leadingAccessory: { type: "icon", icon: tr.RefreshIcon },
                                      disabled: c,
                                  }),
                              a,
                          ],
                      }),
                  });
              },
              children: (e, t) => {
                  let { isShown: n } = t;
                  return (0, l.jsx)(th.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: n ? null : m,
                      icon: ta.MoreHorizontalIcon,
                      "aria-label": m,
                      selected: n,
                  });
              },
          })
        : null;
}
var tp = n(12470),
    tg = n(811893),
    tx = n(91242),
    tf = n(809871),
    tI = n(73153),
    tj = n(494126);
async function tC(e) {
    null == tx.A.getFrame(e) ||
        ((await (0, tj.refreshProxyTicket)(e)) &&
            ((0, tj.promoteFrame)(e),
            (0, tj.updateFramePanelMode)(e, eZ.Gd.ACTIVITY_POPOUT_WINDOW),
            tI.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var tE = n(869146);
function ty(e) {
    let { channel: t } = e,
        n = s.useMemo(
            () => ({ type: te.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id ?? void 0 }),
            [t.id, t.guild_id],
        ),
        i = (0, tu.A)(t.application_id ?? null, n),
        r = (0, eq.G)(),
        a = (0, m.bG)(
            [tE.A, tx.A],
            () => tE.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && null != i && tx.A.getMainFrame()?.id === i.id,
            [i],
        ),
        o = s.useCallback(() => {
            null != i && (0, eW.A)({ onConfirm: () => tC(i.id) });
        }, [i]),
        d = s.useCallback(() => {
            (0, eW.A)({ onConfirm: () => tf.A.popInFrame() });
        }, []);
    return (0, tm.x1)(i)
        ? a
            ? (0, l.jsx)(th.In, {
                  icon: tp._,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: d,
              })
            : r
              ? (0, l.jsx)(th.In, {
                    icon: tg.t,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: o,
                })
              : null
        : null;
}
var tb = n(568598),
    t_ = n(198052),
    tv = n(164617),
    tN = n(355622),
    tT = n(689874),
    tS = n(828488),
    tR = n(939249),
    tO = n(408278),
    tP = n(624479),
    tM = n(739187),
    tL = n(857250),
    tD = n(97483),
    tk = n(534890),
    tw = n(661531),
    tG = n(39623),
    tU = n(952270),
    tF = n(381849),
    tH = n(549973),
    tV = n(957565),
    tB = n(935208),
    tY = n(181041),
    tW = n(256331),
    tz = n(623562),
    tq = n(403862);
let tK = ["high", "medium", "low"],
    t$ = s.memo(function (e) {
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
                              tK.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: tq.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: tq.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: tq.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tq.a7,
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
                            className: tq.a7,
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
                            className: tq.a7,
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
    tX = s.memo(function (e) {
        let { conversation: t, onJump: n } = e,
            i = tB.default.extractTimestamp(t.startMessageId),
            s = tB.default.extractTimestamp(t.endMessageId),
            r = (0, tH.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, tF.WR)({ seconds: a, getFormatter: tF.i }),
            d = (0, m.bG)([tY.A], () => tY.A.getConversationColor(t.channelId, t.id) ?? void 0, [t.channelId, t.id]);
        return (0, l.jsxs)(tR.D, {
            className: tq.Nm,
            style: { backgroundColor: d },
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: tq.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: tq.So,
                            children: t.title,
                        }),
                        (0, l.jsx)(tO.K, {
                            icon: tP.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, tV.C)(JSON.stringify(t, null, 2), () =>
                                        (0, tM.P)((0, tL.o)("Copied conversation JSON", tD.Ck.SUCCESS)),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: tq.FR,
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
                        className: tq.g5,
                        children: t.briefSummary,
                    }),
                t.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: tq.JP,
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
                    className: tq.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: tq.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tq.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: tq.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: tq.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tq.a7,
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
                                    className: tq.a7,
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
                                    className: tq.a7,
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
                (0, l.jsx)(t$, { moderation: t.moderation ?? null }),
            ],
        });
    });
function tQ(e) {
    let { channel: t } = e,
        n = (0, m.bG)([tY.A], () => tY.A.getChannelConversations(t.id) ?? [], [t.id]),
        i = (0, m.bG)([tY.A], () => tY.A.isPendingFetch(t.id), [t.id]),
        r = (0, m.bG)([tW.A], () => tW.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, tz.xI)(t.id, e.id);
            },
            [t],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: tq.zr,
        children: [
            (0, l.jsxs)("div", {
                className: tq.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tq.gn,
                        children: [
                            (0, l.jsx)(tk.ChatIcon, { color: tw.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: tq.y6,
                        children: (0, l.jsx)(tO.K, {
                            icon: r ? tG.EyeIcon : tU.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: tz.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tq.Qs,
                children:
                    0 !== n.length || i
                        ? n.map((e) => (0, l.jsx)(tX, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: tq.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var tJ = n(268218),
    tZ = n(726249),
    t0 = n(334738),
    t1 = n(208882),
    t2 = n(938764),
    t3 = n(519480),
    t7 = n(352123),
    t9 = n(825244),
    t5 = n(130696);
let t6 = function (e) {
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
        className: t5.h2,
        children: [
            (0, l.jsx)("img", { className: t5.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(R.D, {
                className: t5._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: t5.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(t9.E, {
                      className: t5.c5,
                      iconUrl: n(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(t9.E, {
                className: t5.c5,
                iconUrl: n(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var t8 = n(683438),
    t4 = n(689175),
    ne = n(761508),
    nt = n(765671),
    nn = n(22231),
    ni = n(66834),
    nl = n(573435),
    ns = n(101555),
    nr = n(548118),
    na = n(714991),
    no = n(776231),
    nd = n(345942),
    nc = n(71393),
    nu = n(486020),
    nh = n(149790),
    nm = n(682557),
    nA = n(524058);
let np = s.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(tR.D, {
        onClick: t,
        className: nA.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: nA.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function ng(e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, t7.A)(t);
    return (0, l.jsx)("div", {
        className: a()(nA.fc, { [nA.QX]: i }),
        children: (0, l.jsxs)(ns.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(ns.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("533651"), n.e("988869")]).then(
                                          n.bind(n, 201700),
                                      );
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(nn.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: nA.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(nm.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(ns.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(ta.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: nA.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let nx = s.memo(function (e) {
    let { entry: t } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([nc.A], () => nc.A.getGuild(t.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, nd.u)(t.guildId) : await ni.A.joinGuild(t.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = nu.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, no.mZ)() }),
        c = nu.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: nA.Nr,
            onContextMenu: function (e) {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, l.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: nA.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: nA.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: nA.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: nA.$f,
                            children: (0, l.jsx)(nl.Ay, {
                                mask: nl.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: nA.SA,
                                    children: (0, l.jsx)(nr.Ay, {
                                        className: nA.rZ,
                                        iconSrc: c,
                                        guild: (0, nh.xi)(t),
                                        size: nr.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: nA.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nA.DD,
                            children: [
                                (0, l.jsx)(na.A, { className: nA.n2, guild: t }),
                                (0, l.jsx)(_.E, {
                                    className: nA.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: nA.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: nA.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: nA.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nA.JX }),
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
                                        className: nA.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: nA.Li }),
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
                            className: nA.PD,
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
                (0, l.jsx)(ng, { entry: t }),
            ],
        })
    );
});
var nf = n(946116),
    nI = n(844086),
    nj = n(770679);
function nC(e) {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, nt.Ay)(),
        d = null != o && o <= 800;
    return (0, l.jsxs)("div", {
        ref: r,
        className: nj.wx,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                className: nj.F0,
                src: d ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
            }),
            (0, l.jsx)("div", {
                className: nj.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(nj.VW, { [nj.eO]: d }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            className: nj.dc,
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            className: nj.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)(f.N, {
                            theme: W.NJ.LIGHT,
                            children: (e) =>
                                (0, l.jsx)("div", {
                                    className: a()(nj.MT, e),
                                    children: (0, l.jsx)(t8.I, {
                                        query: t,
                                        "aria-label": z.intl.string(z.t.nL2wKD),
                                        placeholder: z.intl.string(z.t.nL2wKD),
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
}
let nE = function (e) {
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
        className: nI.$$,
        children: (0, l.jsxs)(t4.Gt, {
            className: nI.XG,
            children: [
                (0, l.jsx)(nC, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(t4.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(ne.V, {
                        className: nj.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                ne.V.Item,
                                { className: nj.YU, id: nf.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                nf.mU.ALL,
                            ),
                            (0, nf.g2)(t.id).map((e) => {
                                let { value: t, label: n } = e;
                                return (0, l.jsx)(
                                    ne.V.Item,
                                    { className: nj.YU, id: t, children: `${n} ${null != h[t] ? `(${h[t]})` : ""}` },
                                    t,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == n
                    ? (0, l.jsx)(g.y, { className: nI.u1 })
                    : n?.map((e, t) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: nj.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: nI.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(nx, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(np, { onClick: i }) : null,
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
var ny = n(370876),
    nb = n(28863),
    n_ = n(364522),
    nv = n(792831),
    nN = n(211862);
let nT = function (e) {
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
    if (c) t = (0, l.jsx)("div", { className: nI.$$, children: (0, l.jsx)(g.y, { className: nI.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, l.jsx)(nb.Anchor, { onClick: o, children: e }, t);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        t = (0, l.jsxs)("div", {
            className: nN.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: nN.av, children: e }),
            ],
        });
    } else t = (0, l.jsx)("div", { className: nI.vY, children: d.map((e) => (0, l.jsx)(nx, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: nI.$$,
        children: (0, l.jsxs)(n_.Ar, {
            className: nI.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: nN.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: nN.Dr,
                            children: [
                                (0, l.jsx)(tR.D, {
                                    onClick: r,
                                    className: nN.UE,
                                    children: (0, l.jsx)(nv.A, { direction: nv.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: nN.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(t8.I, {
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
var nS = n(650583);
let nR = function (e) {
    let { channel: t, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([t3.A], () => {
            let e = t3.A.getCurrentCategoryId(t.id),
                n = t3.A.getDirectoryEntries(t.id, e === nf.mU.ALL ? null : e),
                i = t3.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: t3.A.getDirectoryAllEntriesCount(t.id),
                isLoading: t3.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(t.id);
            null != e &&
                tI.h.wait(() => {
                    (0, t0.ack)(
                        t.id,
                        {
                            object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                            objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
                          if (t !== nf.mU.ALL) return [{ entries: (0, ny._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, ny.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, ny.DN)(s)).length > 0 &&
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
        } = (0, m.cf)([t2.A], () => {
            let { mostRecentQuery: e, fetching: n } = t2.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: t2.A.getSearchResults(t.id, e) };
        }),
        [f, I] = s.useState(h),
        j = "" !== h,
        C = { mostRecentQuery: h },
        E = s.useRef(C);
    (s.useEffect(() => {
        E.current = C;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = E.current;
            (t1.Yc(t.id), t1.YS(t.id), I(e));
        }, [t.id]),
        s.useEffect(() => {
            en.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [t.id, i.id, r]));
    let y = (0, t7.b)(t),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("122326"),
                                  n.e("533651"),
                                  n.e("554970"),
                                  n.e("140606"),
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
                                      currentCategoryId: r === nf.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, t.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === nS.dh.ENTER &&
            (t1.Se(t.id, f),
            en.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: t.id, directory_guild_id: i.id }));
    }
    function v() {
        (I(""), t1.BA(t.id));
    }
    return j
        ? (0, l.jsx)(nT, {
              searchQuery: f,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: v,
              handleCreateOrAddGuild: b,
              searchResults: x,
              searchFetching: A,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: nI.$$, children: (0, l.jsx)(g.y, { className: nI.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: nI.$$, children: (0, l.jsx)(t6, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(nE, {
                  channel: t,
                  searchQuery: f,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      t1.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var nO = n(826673),
    nP = n(93055),
    nM = n(47167),
    nL = n(688438),
    nD = n(353428),
    nk = n(976860),
    nw = n(288254),
    nG = n(873614),
    nU = n(649852),
    nF = n.n(nU),
    nH = n(789645),
    nV = n(163126),
    nB = n(182061),
    nY = n(886393),
    nW = n(307623),
    nz = n(660273),
    nq = n(707792),
    nK = n(41402),
    n$ = n(271456),
    nX = n(200273),
    nQ = n(565846),
    nJ = n(57907),
    nZ = n(375500),
    n0 = n(707653),
    n1 = n(50268),
    n2 = n(378570),
    n3 = n(162199),
    n7 = n(713608),
    n9 = n(473503),
    n5 = n(901472),
    n6 = n(267102),
    n8 = n(474397),
    n4 = n(486974),
    ie = n(39470);
function it(e) {
    let { channel: t } = e,
        n = s.useContext(en.AnalyticsContext),
        i = (0, n6.aL)(),
        r = z.intl.string(ie.default["Beo/7v"]),
        { firstMessage: a } = (0, n9.OA)(t),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(th.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, n2.iN)(t.id),
                      (0, n8.A)(),
                      (0, n5.z)(t.guild_id, d, t.id, {
                          modViewPanel: n4.g.INFO,
                          sourceLocation: location ?? n.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: n7.q,
              "aria-label": r,
          })
        : null;
}
var ii = n(780338),
    il = n(782603),
    is = n(857071),
    ir = n(607508),
    ia = n(914703),
    io = n(37411);
function id(e) {
    let { channel: t } = e,
        n = (0, ir.X)(t),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([is.A], () => null != t.guild_id && is.A.isLurking(t.guild_id));
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
    return (0, l.jsx)(ti.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(ia.A, { ...e, channel: t, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: n === io.CP.NO_MESSAGES ? ii.BellSlashIcon : il.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var ic = n(747926);
function iu(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(ti.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(ih, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: ta.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function ih(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nz.A)(t, "Sidebar Overflow"),
        r = (0, nK.A)(t),
        a = (0, nJ.A)(t),
        o = (0, nZ.A)(t),
        d = (0, nB.A)(t),
        c = (0, nq.A)(t),
        u = (0, nQ.A)(t.id),
        h = (0, nX.A)(t),
        m = (0, nW.A)(t),
        A = (0, nY.A)(t),
        p = (0, n1.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, n0.A)(t),
        x = (0, n$.A)(t),
        f = (0, nV.$)(1e3);
    function I() {
        (0, n2.iN)(t.id);
    }
    function j(e) {
        let n = nF()(() => {
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
    return (0, l.jsxs)(tl.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ts.rX, {
                children: [s, (0, l.jsx)(ts.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: I })],
            }),
            (0, l.jsxs)(ts.rX, { children: [a, o] }),
            (0, l.jsxs)(ts.rX, { children: [h, r, u, x] }),
            (0, l.jsxs)(ts.rX, {
                children: [
                    (0, l.jsx)(ts.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: tg.t,
                        trailingIndicator: { type: "icon", icon: tg.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                I());
                        },
                    }),
                    (0, l.jsx)(ts.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: tg.t,
                        trailingIndicator: { type: "icon", icon: tg.t },
                        action: function () {
                            (j(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                I());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(ts.rX, { children: [g, d, c, m] }),
            (0, l.jsxs)(ts.rX, { children: [A, p] }),
        ],
    });
}
function im(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, l.jsx)(th.Ay.Icon, {
            icon: nH.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, ic.xu)((0, n3.j)(t), n ?? t.parent_id),
        });
    return t.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  t.isForumPost() ? null : (0, l.jsx)(id, { channel: t }),
                  t.isModeratorReportChannel() ? (0, l.jsx)(it, { channel: t }) : null,
                  (0, l.jsx)(iu, { channel: t }),
                  i,
              ],
          });
}
var iA = n(31717),
    ip = n(853742),
    ig = n(85190);
function ix(e) {
    let { channelId: t } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([nc.A], () => nc.A.getGuild(i?.getGuildId())),
        o = (0, nM.Ay)(i),
        d = (0, nw.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, ip.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(nG.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(im, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iA.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nD.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
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
                        null != i && (0, nk.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ig.T,
                children: (0, l.jsx)(nL.A, { channel: i, guild: a, chatInputType: tN.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var iI = n(925166),
    ij = n(605117),
    iC = n(857253),
    iE = n(872363);
let iy = function (e, t) {
    tI.h.wait(() => {
        tI.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
    });
};
var ib = n(561446),
    i_ = n(300233),
    iv = n(499211),
    iN = n(468689),
    iT = n(529942),
    iS = n(739455),
    iR = n(709017);
function iO(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: iR.t7,
        children: (0, l.jsxs)("div", {
            className: iR.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iR.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iR.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iR.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iT.rf)(t),
                                        iN.default.open(
                                            t,
                                            eo.BEX.ROLE_SUBSCRIPTIONS,
                                            void 0,
                                            eo.nd0.ROLE_SUBSCRIPTION_TIERS,
                                        ),
                                        (0, iS.Fx)(t));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iP = n(599941),
    iM = n(29385),
    iL = n(950344),
    iD = n(217530),
    ik = n(162093),
    iw = n(325348);
function iG(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, iM.e)({ guildId: t, channelId: n }),
        r = (0, iP.uk)(t),
        a = (0, iP.Tq)(t),
        o = (0, m.bG)([nc.A], () => nc.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        u = (0, nM.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let t of r) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [r]);
    return ((0, iL.A)({
        guildId: t,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iw.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iw.__invalid_spinner }),
          })
        : (0, l.jsxs)(n_.Ar, {
              className: iw.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iw.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iw.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iD.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  ik.A,
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
var iU = n(138298),
    iF = n(940382),
    iH = n(761640);
function iV(e) {
    let { channelId: t } = e,
        n = (function (e) {
            let { hasUnread: t, mentionCount: n } = (0, m.cf)(
                [eQ.Ay],
                () => ({ hasUnread: eQ.Ay.hasUnread(e), mentionCount: eQ.Ay.getMentionCount(e) }),
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
        i = (0, m.bG)([iH.Ay], () => iH.Ay.getCurrentSidebarChannelId(t) === t, [t]),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(t)?.getGuildId(), [t]);
    return (0, l.jsx)(th.In, {
        tooltip: i ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: tk.ChatIcon,
        iconSize: 20,
        onClick: () => {
            i
                ? iU.A.closeChannelSidebar(t)
                : iU.A.openChannelAsSidebar({
                      guildId: r,
                      channelId: t,
                      baseChannelId: t,
                      details: { type: iF.kk.CHAT },
                  });
        },
        selected: i,
        badge: n,
    });
}
var iB = n(284252);
function iY(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iH.Ay], () => iH.Ay.getSection(t), [t]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([tY.A], () => (tY.A.getChannelConversations(t)?.length ?? 0) > 0, [t]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(th.In, {
        onClick: j.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: tk.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iB.q : void 0,
        selected: n,
        badge: r,
    });
}
var iW = n(967198);
function iz(e) {
    let { channelId: t } = e,
        n = (0, m.bG)([iH.Ay], () => iH.Ay.getSection(t)),
        i = (0, m.bG)([iW.A], () => iW.A.getGuildId()),
        s = n === eo.YvQ.MEMBERS;
    return (0, l.jsx)(th.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !s }),
                j.A.toggleMembersSection());
        },
        selected: s,
    });
}
var iq = n(187360),
    iK = n(366605),
    i$ = n(945830);
let iX = function (e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        [i, r] = s.useState(!1),
        a = (0, n6.aL)(),
        o = s.useRef(null),
        d = s.useCallback(() => {
            n || r((e) => !e);
        }, [n]),
        c = (0, m.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(t.id), [t]),
        u = s.useMemo(() => (c ? { type: "unread", position: "bottom" } : void 0), [c]);
    function h(e) {
        e?.shiftKey || a.dispatch(eo.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                ei._.subscribe(eo.jej.TOGGLE_CHANNEL_PINS, d),
                () => {
                    ei._.unsubscribe(eo.jej.TOGGLE_CHANNEL_PINS, d);
                }
            ),
            [d],
        ),
        (0, l.jsx)(ti.Y, {
            targetElementRef: o,
            shouldShow: i,
            animation: ti.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => r(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(i$.A, { ...e, onJump: h, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, l.jsx)(th.In, {
                    ...e,
                    ref: o,
                    onClick: d,
                    tooltip: i ? null : z.intl.string(z.t["mp1N/2"]),
                    icon: iK.t,
                    iconSize: 20,
                    "aria-label": z.intl.string(z.t["mp1N/2"]),
                    disabled: n,
                    badge: u,
                    selected: i,
                });
            },
        })
    );
};
var iQ = n(306788),
    iJ = n(863922),
    iZ = n(822074),
    i0 = n(521732);
function i1(e) {
    let { channel: t } = e,
        n = (0, e4.ni)(t),
        i = (0, m.bG)([iZ.A], () => iZ.A.shouldShowTopicsBar());
    return (0, l.jsx)(th.Ay.Icon, {
        icon: iQ.K,
        onClick: function () {
            (en.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: i0.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, iJ.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var i2 = n(885574),
    i3 = n(947094),
    i7 = n(919577),
    i9 = n(207777),
    i5 = n(422844),
    i6 = n(435470),
    i8 = n(892110),
    i4 = n(45494);
function le(e) {
    let { channel: t } = e,
        n = (0, i6.S4)(t),
        i = (0, m.bG)([i3.A], () => i3.A.hasHidden(t.id)),
        s = (0, i8.l)(t.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, i5.R)(t.id),
        d = (0, m.bG)(
            [i9.A, i4.A],
            () => !!(i9.A.getThreadIds(t.id, r, a, o).length > 0) || !!(i4.A.getThreads(t.id, r, a, o).length > 0),
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
    return (0, l.jsx)(th.In, {
        tooltip: u,
        icon: i2.CircleInformationIcon,
        onClick: function () {
            return i7.A.hideAdminOnboarding(t.id, !i);
        },
        selected: !i,
    });
}
var lt = n(290136),
    ln = n(975571),
    li = n(490094);
function ll() {
    let e = z.intl.string(li.default.pdipXI);
    return (0, l.jsx)(th.In, {
        tooltip: e,
        icon: lt.CircleQuestionIcon,
        onClick: function () {
            window.open(ln.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var ls = n(742589),
    lr = n(43105),
    la = n(428689),
    lo = n(978940),
    ld = n(387755),
    lc = n(730852),
    lu = n(641703),
    lh = n(379848),
    lm = n(753727),
    lA = n(625075),
    lp = n(222692),
    lg = n(442353),
    lx = n(470710),
    lf = n(186111),
    lI = n(25578),
    lj = n(994500),
    lC = n(977997),
    lE = n(818023),
    ly = n(49999),
    lb = n(731854);
class l_ extends s.PureComponent {
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
                : lI.Ay.supports(lb.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : n && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lA.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(th.Ay.Icon, { icon: la.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(th.Ay.Icon, {
            ref: this.iconRef,
            icon: lo._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lh.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lr.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lE.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(ly.i.USER_DISMISS),
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
            return ld.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        }
        t ? (0, lg.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lc.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, nO.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: ly.i.AUTO }),
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
        (0, lg.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, lp.A)();
    };
}
function lv(e) {
    let { channel: t } = e,
        n = (0, lm.A)(),
        i = (0, m.bG)([t_.A], () => t_.A.getMode(t.id)),
        s = (0, m.bG)([lC.A], () => lC.A.isInChannel(t.id)),
        r = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lx.A], () => ({
            callActive: lx.A.isCallActive(t.id),
            callUnavailable: lx.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lj.A], () => ({
            notFriend: t.type === eo.rbe.DM && null != d && !lj.A.isFriend(d),
            isBlocked: t.type === eo.rbe.DM && null != d && lj.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, n6.Us)(),
        g = [],
        x = (0, lu.A)(t.id),
        f = (0, m.bG)([lf.A], () => lf.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(l_, {
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
var lN = n(452015),
    lT = n(765178),
    lS = n(231483),
    lR = n(544231),
    lO = n(338510),
    lP = n(151119),
    lM = n(278941),
    lL = n(665909),
    lD = n(327337);
let lk = s.memo(function (e) {
    let { channel: t } = e,
        i = (0, lO.u)(t.id),
        r = (0, lP.S)(t.id),
        a = (0, lM.e)(t.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lf.A], () => lf.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lT.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lR.xi)(t.id, [a.id]);
            }, 5e3),
            (0, lL.QF)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lL.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lT.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lR.bg)(t.id);
                }, 5e3)));
    }, [t, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lL.QF)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lL.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lR.xi)(t.id, [a.id]),
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
                    { modalKey: lD.V },
                ),
                (0, lL._$)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lL.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, t]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(th.Ay.Icon, {
                  icon: lS.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lw = n(262763),
    lG = n(406704),
    lU = n(576705);
let lF = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, lm.A)(),
        i = (0, m.bG)([lC.A], () => lC.A.isInChannel(t.id)),
        r = (0, m.bG)([lC.A], () => !u().isEmpty(lC.A.getVoiceStatesForChannel(t.id))),
        a = (0, m.bG)([lU.A], () => lU.A.can(eo.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, iv.A)(t.id),
        d = (0, lG.Id)(t),
        { enabled: c } = lG.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lw.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(th.Ay.Icon, {
              icon: lo._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lH = n(812991),
    lV = n(47675),
    lB = n(999291);
function lY() {
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
function lW(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, m.bG)([iH.Ay], () => iH.Ay.getSection(t.id, t?.isDM())),
        s = (0, lB.Ay)(t.getRecipientId()),
        r = lY(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(th.In, {
        disabled: !r || n,
        tooltip: !r || n ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lH.n,
        onClick: function () {
            ((0, lV.am)({ displayProfile: s, isProfileOpen: !a }), j.A.toggleUserProfileSidebarSection());
        },
        selected: a && !n,
    });
}
let lz = {};
class lq extends m.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            lz[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = lz[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return lz;
    }
}
let lK = new lq(tI.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = lz[n];
        return null == i ? ((lz[n] = new Set()), lz[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != lz[t.id] && !t.unavailable && (delete lz[t.id], !0);
    },
});
var l$ = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lX = n(376943),
    lQ = n(394953),
    lJ = n(683063),
    lZ = n(403581),
    l0 = n(241541),
    l1 = n(709066),
    l2 = n(87664),
    l3 = n(247676),
    l7 = n(695526);
n(667532);
var l9 = n(403362);
n(696101);
let l5 = [],
    l6 = er.Ay.getEnableHardwareAcceleration();
function l8(e) {
    let { user: t, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, m.bG)([lj.A], () => lj.A.getNickname(t.id)),
        h = (0, l2.A)(t.id),
        A = s.useRef(null);
    function p(e) {
        (0, C.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("463317"),
                n.e("926132"),
                n.e("146652"),
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
                n.e("309291"),
                n.e("307059"),
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
            O.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: t }),
        [f, I] = s.useState(!1);
    return (0, l.jsx)(K.A, {
        targetElementRef: A,
        user: t,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => I(!1),
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
                    shouldAnimateStatus: l6,
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
                        e.shiftKey ? g?.() : I((e) => !e);
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
function l4(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function se(e) {
    let { channel: t } = e,
        n = ee.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: r } = (0, L.Ay)(M.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lj.A, ee.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = ee.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(l9.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lj.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? l5,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: l5 });
                let s = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(t);
                }
                return { listItems: s };
            },
            [t],
            l4,
        );
    s.useEffect(() => {
        en.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, l3.A)({ useNitroCapExperiment: !0 }),
        h = (0, l7.qH)(),
        A = t.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(L.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(n_.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(lJ.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(lZ.t, {
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
                                o && (0, l.jsx)(l1.A, { type: l1.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                l8,
                                { user: e.user, status: e.status, activities: e.activities, channel: t },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lN.NE, {
                                      channel: t,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: l0.D,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lN.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var st = n(322338),
    sn = n(898029),
    si = n(36537);
function sl() {
    return (0, l.jsx)("div", {
        className: si.zt,
        children: (0, l.jsx)("header", {
            className: sn.wL,
            children: (0, l.jsxs)("div", {
                className: sn.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sn.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sn.u1,
                            itemClassName: sn.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var ss = n(747376),
    sr = n(163328),
    sa = n(425557),
    so = n(270003),
    sd = n(150934),
    sc = n(452027),
    su = n(95477),
    sh = n(281595),
    sm = n(465532),
    sA = n(579872),
    sp = n(119031),
    sg = n(408018),
    sx = n(479909),
    sf = n(822610),
    sI = n(915089),
    sj = n(314307),
    sC = n(636922),
    sE = n(931664),
    sy = n(631576),
    sb = n(885386),
    s_ = n(232835),
    sv = n(522602),
    sN = n(806150),
    sT = n(518960),
    sS = n(753738);
function sR(e, t) {
    return { type: e, message: t ?? null };
}
function sO(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var sP = n(659617),
    sM = n(474078),
    sL = n(636537),
    sD = n(152367),
    sk = n(147087);
async function sw(e) {
    try {
        let t = await sL.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, sL.fT)(),
        });
        return t.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var sG = n(55294),
    sU = n(143161),
    sF = n(909833);
let sH = tN.oU.THREAD_CREATION;
function sV(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        { analyticsLocations: r } = (0, L.Ay)(M.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(L.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sU.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iA.C.FirstThreadMessage }),
                          (0, l.jsx)(sB, { parentChannelId: t }),
                          (0, l.jsx)(sY, { parentChannel: s, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function sB(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = iA.A.getThreadSettings(t),
                n = iA.A.getDraft(t, iA.C.FirstThreadMessage).trim(),
                i = sv.A.getUploads(t, iA.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? sA.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ic.bA)(t);
                      },
                  })
                : (0, ic.bA)(t);
        }, [t]);
    return (0, l.jsxs)(th.Ay, {
        toolbar: (0, l.jsx)(th.Ay.Icon, { icon: nH.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(th.Ay.Icon, { icon: sr.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(th.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sY(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([P.Ay], () => P.Ay.messageGroupSpacing),
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
            let n = (0, m.bG)([iA.A], () => iA.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(n),
                r = s.useCallback(
                    (n) => {
                        (l((e) => ({ ...e, ...n })), sm.A.changeThreadSettings(e.id, { ...n, parentMessageId: t }));
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, t) {
            let [n, i] = s.useState((0, sg.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let l = iA.A.getDraft(e.id, iA.C.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && i((0, sg.ur)(l)), t(iA.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        n(!0),
                        iA.A.addChangeListener(n),
                        () => {
                            iA.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, u),
        g = (0, sP.EN)(n),
        {
            isGeneratingAI: x,
            enableAIFeatures: f,
            getThreadNameInputAccessory: I,
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
                h = (0, sk.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = s_.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let t = await sw(e);
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
                                icon: sD.D,
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
                                  children: (0, l.jsx)(tO.K, {
                                      icon: sD.D,
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
            nameError: j,
            messageError: C,
            submit: E,
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
                p = (0, sG.Ay)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ic.JA,
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
                                (l = sE.A.getStickerPreview(t.id, sH.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sv.A.getUploads(t.id, iA.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? sR(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? sR(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, sN.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: sH,
                            channel: null == n ? t : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), sR(1, (0, sS.cw)(x, t?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sR(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sy.x5)(t.id, sH.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
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
        b = (0, sP.Iy)(c, g) ? sa.t : sr.y;
    return (0, l.jsx)("div", {
        className: sU.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(sU.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), E());
                },
                className: sU.Zd,
                children: [
                    (0, l.jsx)(n_.Ip, {
                        className: sU.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sU.bv,
                            children: [
                                (0, l.jsxs)(sj.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(sF.P0, sU.P0),
                                            children: (0, l.jsx)(b, { className: sF.Kk }),
                                        }),
                                        (0, l.jsxs)(so.n, {
                                            children: [
                                                (0, l.jsx)(sz, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: j,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: I,
                                                }),
                                                (0, l.jsx)(sW, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sK, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sU.Eh,
                        children: [
                            (0, l.jsx)(sq, {
                                parentChannel: n,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: E,
                                error: C,
                            }),
                            (0, l.jsx)(sp.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: sU.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sW(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, sP.Iy)(n, s),
        a = (0, l.jsx)(sd.S, {
            disabled: s === sP.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return t || s === sP.jk.Disabled
        ? null
        : (0, l.jsx)(sc.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function sz(e) {
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
        h = sO(r, { content: u }),
        m = (0, sP.l1)(t, n),
        A = null != n && !d,
        p = (0, sI.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(su.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, sM.A)(e, !1) }), "" !== e ? O.A.startTyping(t.id) : O.A.stopTyping(t.id));
        },
        onBlur: function () {
            let e = (0, sM.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function sq(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, n, l) => {
                (sm.A.saveDraft(t.id, n, iA.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? O.A.startTyping(t.id) : "" === n && O.A.stopTyping(t.id),
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
    let x = (0, m.bG)([lU.A], () => lU.A.can(eo.xBc.ATTACH_FILES, t)),
        f = sO(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sf.A, { channelId: t.id, type: sH, canAttachFiles: x }),
            (0, l.jsx)("div", { className: sU.xN, children: (0, l.jsx)(sh.U, { error: f }) }),
            (0, l.jsx)(sx.Ay, {
                type: sH,
                channel: t,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: a()(sU.gM, sU.Yy),
                innerClassName: a()(sU.SL, { [sU.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: sT.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sK(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, m.bG)([s_.A], () => (null == n ? null : s_.A.getMessage(t.id, n))),
        s = sb.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sC.A, {
              className: sU.IL,
              message: i,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var s$ = n(305866),
    sX = n(707539),
    sQ = n(702513),
    sJ = n(272736);
function sZ(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, e4.ni)(t),
        o = s.useCallback(() => {
            i(!1);
        }, []),
        d = s.useCallback(() => {
            (n || (0, sX.D3)("Popout"), i(!n));
        }, [n]);
    return (0, l.jsx)(ti.Y, {
        targetElementRef: r,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: o,
        renderPopout: function () {
            return (0, l.jsx)(s$.l, {
                children: (0, l.jsx)(sQ.A, { className: sJ.T, channel: t, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(th.In, {
                ...e,
                ref: r,
                className: sJ.Kk,
                onClick: d,
                icon: sr.y,
                "aria-label": z.intl.string(z.t.B2panI),
                tooltip: n ? null : z.intl.string(z.t.B2panI),
                disabled: a,
                selected: n,
            });
        },
    });
}
var s0 = n(40389),
    s1 = n(148494),
    s2 = n(56562);
function s3(e) {
    let { channel: t } = e,
        [n, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(ti.Y, {
        targetElementRef: r,
        shouldShow: n,
        animation: ti.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(s7, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(th.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : o,
                icon: ta.MoreHorizontalIcon,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function s7(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        s = (0, nB.A)(t),
        r = (0, nq.A)(t),
        a = (0, nQ.A)(t.id),
        o = (0, nX.A)(t),
        d = (0, n1.A)({ id: t.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, nY.A)(t),
        h = (0, nW.A)(t),
        A = (0, nz.A)(t, "Toolbar Overflow"),
        p = (0, nK.A)(t),
        g = (0, s0.A)(t),
        x = (0, n0.A)(t),
        f = (0, n$.A)(t),
        I = t.isThread()
            ? (0, l.jsx)(ts.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      s1.A.jumpToMessage({ channelId: t.id, messageId: "0", jumpType: s2.vx.INSTANT });
                  },
              })
            : null,
        j = sb.SY.useSetting(),
        C = (0, m.bG)([lC.A], () => !u().isEmpty(lC.A.getVoiceStatesForChannel(t.id))),
        E = (0, m.bG)([ew.A], () => null != t.parent_id && ew.A.getChannel(t.parent_id)?.type === eo.rbe.GUILD_APP, [
            t.parent_id,
        ]);
    return (0, l.jsxs)(tl.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(ts.rX, { children: [A, g] }),
            (0, l.jsxs)(ts.rX, {
                children: [
                    I,
                    o,
                    p,
                    a,
                    !j || C || E
                        ? null
                        : (0, l.jsx)(ts.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, ic.JA)(t);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(ts.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(ts.rX, { children: [c, d] }),
        ],
    });
}
var s9 = n(332456),
    s5 = n(973854),
    s6 = n(62502);
function s8(e) {
    var t;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([nc.A], () => nc.A.getGuild(d?.getGuildId())),
        h = (0, nM.Ay)(d),
        A = (0, nw.Uf)(d);
    ((t = d),
        (i = (0, m.bG)([lC.A], () => null != t && !u().isEmpty(lC.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            i &&
                null != t &&
                (tI.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, n2.N9)(t, { source: io.H9.VOICE_AUTO_OPEN }));
        }, [i, t]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, s9.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(d.id), channel_view: o }),
                (0, s5.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(nG.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(im, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iA.C.ChannelMessage }),
            (0, l.jsx)(th.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, nD.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
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
                        null != d && (0, n2.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: s6.T,
                children: (0, l.jsx)(nL.A, { channel: d, guild: c, chatInputType: tN.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var s4 = n(210714),
    re = n(402860),
    rt = n(707554),
    rn = n(140735),
    ri = n(590180),
    rl = n(372320),
    rs = n(562153),
    rr = n(945810);
let ra = (0, rr.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ro(e) {
    return ra.useConfig({ location: e }).enabled;
}
var rd = n(215530),
    rc = n(454719),
    ru = n(736653),
    rh = n(311016),
    rm = n(480335),
    rA = n(713517),
    rp = n(397562),
    rg = n(183555),
    rx = n(718019),
    rf = n(365607),
    rI = n(915614),
    rj = n(308244),
    rC = n(743987),
    rE = n(900179),
    ry = n(946356),
    rb = n(465829),
    r_ = n(35241),
    rv = n(587168),
    rN = n(442228),
    rT = n(744808);
let rS = (0, rr.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var rR = n(827428);
function rO(e) {
    let { type: t, anchor: n } = e;
    return "staple" === t && "bottom" !== n;
}
function rP(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = rS.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lV.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: rR.lS,
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
              className: rR.qr,
              children: (0, l.jsx)(tR.D, {
                  onClick: o,
                  className: rR.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: rR.xQ, children: [(0, l.jsx)(rT.A, { frame: i, filterLayer: rO }), d] })
        : d;
}
var rM = n(518477),
    rL = n(996988),
    rD = n(207634),
    rk = n(561419),
    rw = n(396095);
function rG(e) {
    let { user: t, channel: n, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rh.A)(t.id),
        o = (0, lB.Ay)(t.id),
        d = (0, ru.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, L.Ay)(M.A.USER_PROFILE_SIDEBAR),
        h = (0, rg.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rp.A)(u, o, rM.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rA.A)(m);
    function g() {
        (0, re.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(L.f5, {
        value: u,
        children: (0, l.jsx)(rg.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(ry.A, {
                ref: m,
                user: t,
                displayProfile: o,
                themeType: rL.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(rk.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(n_.d_, {
                        className: i ? rk.BE : void 0,
                        children: [
                            (0, l.jsx)(rv.A, { children: (0, l.jsx)(r_.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: rk.wx,
                                children: [
                                    (0, l.jsx)(rI.A, {
                                        user: t,
                                        displayProfile: o,
                                        themeType: rL.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rx.A, {
                                        user: t,
                                        displayProfile: o,
                                        channelId: n.id,
                                        avatarSize: rD.T[rL.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: rw.rf,
                                children: [
                                    (0, l.jsx)(rb.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: rs.Ay.getName(null, n.id, t),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rf.A, {
                                            displayProfile: o,
                                            themeType: rL.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rN.A, {
                                                      userId: t.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rE.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rC.A, { userId: t.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(ry.A.Overlay, {
                                              className: rw.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rE.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rj.A, {
                                                              userBio: o?.bio,
                                                              userId: t.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rE.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rC.A, { userId: t.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(rP, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rm.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var rU = n(331322),
    rF = n(249790),
    rH = n(254828),
    rV = n(783123),
    rB = n(966430);
function rY(e) {
    let { user: t, channel: n, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lB.Ay)(t.id),
        o = (0, ru.Ay)(),
        d = (0, m.bG)([lj.A], () => lj.A.isBlocked(t.id)),
        { analyticsLocations: c } = (0, L.Ay)(d ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        u = (0, rg.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id });
    (0, rp.A)(c, a, rM.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(L.f5, {
        value: c,
        children: (0, l.jsx)(rg.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(ry.A, {
                ref: h,
                user: t,
                displayProfile: a,
                themeType: rL.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(n_.d_, {
                    children: (0, l.jsxs)("div", {
                        className: rB.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: rB.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: rB.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: rB.N1,
                                        children: [
                                            (0, l.jsx)(rF.A, { user: t }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rs.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(rU.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(rV.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lV.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(rH.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lV.Wn)({
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
var rW = n(202091),
    rz = n(717421),
    rq = n(31956),
    rK = n(673843),
    r$ = n(594832),
    rX = n(321191),
    rQ = n(679492),
    rJ = n(439053),
    rZ = n(312381),
    r0 = n(657538),
    r1 = n(984545),
    r2 = n(193738),
    r3 = n(211031),
    r7 = n(394816),
    r9 = n(695366),
    r5 = n(922590),
    r6 = n(821269),
    r8 = n(93246),
    r4 = n(351906),
    ae = n(383199),
    at = n(559506),
    an = n(361311),
    ai = n(931481),
    al = n(791556),
    as = n(501193),
    ar = n(383448),
    aa = n(646986),
    ao = n(243166),
    ad = n(812993),
    ac = n(123292),
    au = n(840411);
let ah = (0, rr.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var am = n(666810),
    aA = n(394300),
    ap = n(575593),
    ag = n(44120),
    ax = n(75678),
    af = n(317560),
    aI = n(99161),
    aj = n(827258),
    aC = n(661492),
    aE = n(146423),
    ay = n(662349),
    ab = n(479026),
    a_ = n(636374),
    av = n(699976),
    aN = n(202541),
    aT = n(733484),
    aS = n(880465);
function aR(e) {
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
        { trackUserProfileWishlistAction: g } = (0, rg.NJ)(),
        x = ro("DMSidePanelWishlistItemCard") ? av.y.SIZE_78 : av.y.SIZE_90,
        f = av.Z[x],
        I = s.useCallback(() => {
            (g({
                action: rM.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                h());
        }, [n, r, h, g]),
        j = s.useCallback(() => {
            (g({
                action: rM.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                m());
        }, [m, n.id, r, n.productLine, g]),
        {
            onBodyClick: C,
            onOverlayClick: E,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, a_.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: I, onPurchaseClick: j }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: aT.kL,
        children: (0, l.jsxs)(aE.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: n,
            user: i,
            spec: f,
            cardStyle: a()(aT.Nr, o),
            skuPreviewStyle: a()(aT.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: C,
            "aria-label":
                ((t = b ? (0, aC.T)(n) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, aC.T)(n) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: t }) : t),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(aj.A, { className: aT.Pf }),
                y &&
                    (0, l.jsx)(ay.A, {
                        spec: f,
                        onClick: E,
                        isHoveringOrFocusing: N,
                        label: _,
                        icon: _.length < 6 ? v : void 0,
                    }),
                A?.(y && N),
            ],
        }),
    });
}
function aO(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, L.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, aI.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: aN.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [t, n, a]),
        d = s.useCallback(() => {
            (0, af.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: aN.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.id, t.applicationId, n, a]);
    return (0, l.jsx)(aR, {
        sku: t,
        analyticsLocations: a,
        wishlistOwner: n,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function aP(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, ag.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: aN.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, ab.e)({ sku: t, giftRecipient: n, giftingOrigin: aN.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(aT.ML, {
                    [aT.M]: t?.tenantMetadata?.collectibles?.type === ap.R.AVATAR_DECORATION,
                    [aT.Hm]: t?.tenantMetadata?.collectibles?.type === ap.R.PROFILE_EFFECT,
                    [aT.hH]: t?.tenantMetadata?.collectibles?.type === ap.R.PROFILE_FRAME,
                    [aT.qF]: t?.tenantMetadata?.collectibles?.type === ap.R.NAMEPLATE,
                    [aT.l2]: t?.tenantMetadata?.collectibles?.type === ap.R.BUNDLE,
                }),
            [t?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(aR, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function aM(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = t.id;
            (0, ax.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: aN.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        u = r === r$.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(aR, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(aS.MO, { [aT.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(aT.fi, { [aT.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(aT.p7, { [aT.SW]: h.length >= 10, [aT.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function aL(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(aO, { sku: t, ...n });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(aP, { sku: t, ...n });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(aM, { sku: t, ...n });
        default:
            return null;
    }
}
var aD = n(158045),
    ak = n(249203),
    aw = n(419731),
    aG = n(695904),
    aU = n(116331),
    aF = n(713348),
    aH = n(535089),
    aV = n(815637);
function aB(e) {
    let { unownedWishlistItems: t, profileOwner: n, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, L.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rg.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, aU.A)(n),
        g = (0, m.bG)([ak.A], () => ak.A.getEntry(n.id)?.lastViewedAt ?? null, [n.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: rM.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => t ?? [], [t]),
        I = (0, s.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && c({ wishlistId: t, action: n, productLines: i });
            },
            [c],
        ),
        j = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: r$.uS.WISHLIST }));
            if (a && e.length < 3) {
                let t = f.some((e) => aD.Ay.isPremiumSku(e.skuId));
                if (!aD.Ay.isPremiumAtLeast(n.premiumType, aN.PremiumTypes.TIER_2) && !t) {
                    let t = aA.A.fromSKU((0, au.rI)());
                    null != t && e.push({ item: t, source: r$.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, n.premiumType]),
        C = (0, s.useMemo)(
            () =>
                new Set(
                    j.map((e) => {
                        let { item: t } = e;
                        return t.skuProductLine;
                    }),
                ),
            [j],
        ),
        E = (0, aH.A)({ wishlistId: r ?? null, onAction: I, productLines: C }),
        y = (0, s.useMemo)(
            () =>
                j
                    .map((e, t) => {
                        let { item: i, source: s } = e;
                        return null == i.sku
                            ? null
                            : (0, l.jsx)(
                                  aL,
                                  {
                                      sku: i.sku,
                                      index: t,
                                      wishlistOwner: n,
                                      wishlistId: r,
                                      analyticsLocations: o,
                                      onViewWishlist: x,
                                      source: s,
                                      isNew: h && (0, aw.f3)(i.addedAt, g),
                                  },
                                  i.skuId,
                              );
                    })
                    .filter(l9.Vq),
            [o, x, n, j, r, h, g],
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
              children: (0, l.jsxs)(ry.A.Overlay, {
                  ref: E,
                  className: aV.kL,
                  children: [
                      p && (0, l.jsx)(aG.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: aV.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: aV.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(ad.Lp, {
                                              text: z.intl.format(z.t.akCCqu, { count: A }),
                                              color: tw.A.colors.BADGE_BACKGROUND_BRAND.css,
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(ac.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rt.F, { children: (0, l.jsx)("div", { className: aV.vY, children: y }) }),
                  ],
              }),
          });
}
function aY(e) {
    let { isLoading: t, unownedWishlistItems: n, canSeeWishlist: i = !1, ...s } = e,
        r = ah.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, aF.A)(s.profileOwner), t || s.profileOwner.bot || ((null == n || 0 === n.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(am.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(aB, { ...s, unownedWishlistItems: n, isNitroRecEnabled: r }),
    });
}
function aW(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lj.A], () => ({
            relationshipType: lj.A.getRelationshipType(t.id),
            originApplicationId: lj.A.getOriginApplicationId(t.id),
        })),
        h = (0, r5.fi)(t.id),
        A = (0, r6.q)({ userId: t.id }),
        p = (0, m.bG)([r4.A], () => r4.A.hidePersonalInformation),
        g = (0, m.bG)([rX.A], () => rX.A.getUserProfile(t.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([rX.A], () => ({ defaultWishlistId: rX.A.getFirstWishlistId(t.id) })),
        { wishlist: I, isFetching: j } = (0, r$.fw)({ wishlistId: o ? f : void 0, userId: t.id });
    (0, rK.A)(I);
    let C = s.useMemo(() => I?.items.filter((e) => !e.isOwned) ?? null, [I]);
    return (0, l.jsxs)("div", {
        className: rw.rf,
        children: [
            (0, l.jsx)(at.A, { userId: t.id }),
            (0, l.jsxs)("div", {
                className: rw.pq,
                children: [
                    (0, l.jsx)(rb.Ay, {
                        user: t,
                        guildId: r.guild_id,
                        displayName: rs.Ay.getName(null, r.id, t),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(ao.A, { userId: t.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rf.A, {
                            displayProfile: i,
                            themeType: rL.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(al.A, { user: t, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(ry.A.Overlay, {
                    children: (0, l.jsx)(ai.A, { user: t, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    ry.A.Overlay,
                    {
                        children: (0, l.jsx)(ai.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(ar.A, { user: t }),
            i?.private &&
                (0, l.jsx)(ry.A.Overlay, { children: (0, l.jsx)(as.A, { username: rs.Ay.getName(null, r.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(ry.A.Overlay, {
                    className: rw.Lw,
                    children: (0, l.jsx)(rE.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: r9.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(r8.T, { userId: t.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rN.A, {
                            userId: t.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rE.A, {
                            heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rC.A, { userId: t.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: rw.kR,
                children: [
                    o && x && (0, l.jsx)(r0.A, { user: t, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aa.A, { user: t, currentUser: n, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(ae.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rE.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(an.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(ry.A.Overlay, {
                              className: rw.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rE.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rj.A, {
                                              userId: t.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(ae.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rE.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(an.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rE.A, {
                                              heading: t.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rC.A, { userId: t.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(aY, {
                            profileOwner: t,
                            unownedWishlistItems: C,
                            wishlistId: f,
                            isLoading: j,
                            onClick: () => {
                                d?.({ tabSection: rM.RP.WISHLIST });
                            },
                            canSeeWishlist: null != I,
                        }),
                ],
            }),
        ],
    });
}
var az = n(114212),
    aq = n(913453),
    aK = n(229187),
    a$ = n(21241),
    aX = n(503062),
    aQ = n(51943),
    aJ = n(847374),
    aZ = n(320448),
    a0 = n(723200);
function a1(e) {
    let { section: t, header: n, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rg.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? aJ.a : aZ._;
    return (0, l.jsxs)("section", {
        className: a0.uW,
        children: [
            (0, l.jsxs)(tR.D, {
                className: a()(a0.wx, a0.vk),
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
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(a0.p_, r), children: i }),
        ],
    });
}
var a2 = n(341278);
function a3(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, L.Ay)(),
        { context: s } = (0, rg.NJ)(),
        r = (0, nV.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, aq.A)(t),
        c = !t.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(ry.A.Overlay, {
              className: a2.Lw,
              children: [
                  u &&
                      (0, l.jsx)(a1, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: a2.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  aQ.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, nd.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(a$.A, { className: a2.yF }),
                  c &&
                      (0, l.jsx)(a1, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: a2.p_,
                          onExpand: () => (0, aK.A)(t.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: a2.nC,
                                                children: [
                                                    (0, l.jsx)(az.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(az.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            aX.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, re.openUserProfileModal)({
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
function a7(e) {
    let { user: t, currentUser: n, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lB.Ay)(t.id),
        c = (0, ru.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== t.id && ((h.current = t.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, L.Ay)(M.A.USER_PROFILE_SIDEBAR),
        p = (0, rg.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id });
    (0, rp.A)(A, d, rM.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rA.A)(g),
        I = (0, rQ.fC)(),
        j = (0, rl.A)(d?.profileFrame?.skuId);
    (0, rq.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let C = (0, rz.z)({ opacity: +(null != I.interactionType), config: { duration: 150 } });
    function E(e) {
        (0, re.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([rX.A], () => ({ defaultWishlistId: rX.A.getFirstWishlistId(t.id) })),
        { wishlist: _, isFetching: v } = (0, r$.fw)({ wishlistId: r ? void 0 : b, userId: t.id });
    (0, rK.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(L.f5, {
        value: A,
        children: (0, l.jsx)(rg.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(rQ.Hl, {
                value: I,
                children: (0, l.jsxs)(ry.A, {
                    ref: g,
                    user: t,
                    displayProfile: d,
                    themeType: rL.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(rk.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(rZ.A, {}),
                        null != I.interactionType && (0, l.jsx)(rW.animated.div, { style: C, className: rk.tB }),
                        (0, l.jsxs)(n_.d_, {
                            className: a()(r && rk.BE, !r && null != j && rk.It),
                            children: [
                                (0, l.jsxs)(rv.A, {
                                    children: [
                                        (0, l.jsx)(r2.A, { user: t, themeType: rL.d.SIDEBAR }),
                                        t.bot ? (0, l.jsx)(r1.A, { user: t }) : (0, l.jsx)(r3.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: rk.wx,
                                    children: [
                                        (0, l.jsx)(rI.A, {
                                            user: t,
                                            displayProfile: d,
                                            themeType: rL.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: rk.vK,
                                        }),
                                        (0, l.jsx)(rJ.A, { userId: t.id, className: rk.oR }),
                                        (0, l.jsx)(rx.A, {
                                            user: t,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: rD.T[rL.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : E,
                                        }),
                                        (0, l.jsx)(r7.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: rL.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(aW, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == I.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : E,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: rk.sJ,
                                        children: (0, l.jsx)(r0.A, {
                                            user: t,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: E,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: rk.vS,
                                        children: (0, l.jsx)(aY, {
                                            profileOwner: t,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                E?.({ tabSection: rM.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(a3, { user: t, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(rP, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: j,
                                handleOpenProfile: E,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rm.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != j && (0, l.jsx)(rT.A, { frame: j, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var a9 = n(901600);
function a5(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = lY(),
        [o, d] = (0, rd.A)(n),
        [c, u] = s.useState(!1),
        h = ro("UserProfileSidebarRenderer"),
        A = (0, lB.Ay)(n),
        p = A?.profileFrame?.skuId,
        g = (0, rl.A)(p),
        x = (0, m.bG)([ri.A], () => ri.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: t.id,
            };
            null != i ? (0, rc.A)(i, e) : (0, rc.A)(n, void 0, e);
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
        I = rs.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? a9.H : void 0,
        children: (0, l.jsx)(rt.F, {
            component: (0, l.jsx)(rn.A, {
                children: (0, l.jsx)(rt.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: I }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(rY, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(rG, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(a7, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var a6 = n(522556),
    a8 = n(225315),
    a4 = n(684407),
    oe = n(95701),
    ot = n(919638),
    on = n(763827),
    oi = n(812771),
    ol = n(506309),
    os = n(598748),
    or = n(681154),
    oa = n(975460),
    oo = n(587895),
    od = n(429913),
    oc = n(201718),
    ou = n(339580),
    oh = n(633075),
    om = n(903209),
    oA = n(382483),
    op = n(385113);
let og = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function ox(e) {
    let [t, n] = s.useState(new Set()),
        i = s.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)(og.Provider, {
        value: {
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
                        I,
                        { appsWithConfigs: j, isLoadingConfigs: C } =
                            ((n = sb.Q_.useSetting()),
                            s.useEffect(() => {
                                (0, oA.Wq)().catch(() => {});
                            }, []),
                            s.useEffect(() => {
                                n && (0, oA.i$)().catch(() => {});
                            }, [n]),
                            (i = (0, m.bG)([op.A], () => op.A.getFeaturedFetchState())),
                            (l = (0, m.bG)([op.A], () => op.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([op.A], () => op.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([op.A], () => op.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    i === op.e.NOT_FETCHED ||
                                    i === op.e.FETCHING ||
                                    (n && (l === op.e.NOT_FETCHED || l === op.e.FETCHING)),
                            }),
                        {
                            widgetApps: E,
                            userIdsWhoMightHaveWidgetData: y,
                            isFetchingApplications: b,
                        } = ((o = s.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === or.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        )),
                        (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [oo.A],
                            () =>
                                d.length > 0 &&
                                d.some(
                                    (e) =>
                                        oo.A.isFetchingApplication(e) ||
                                        (null == oo.A.getApplication(e) && !oo.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (u = (0, od.A)(d)),
                        (h = s.useMemo(
                            () =>
                                Object.fromEntries(
                                    u
                                        .filter(l9.Vq)
                                        .map((e) => [e.id, (0, oa.t)(e)])
                                        .filter(l9.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return j.has(n.id);
                                        }),
                                ),
                            [j, u],
                        )),
                        (A = s.useMemo(
                            () => [...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id))],
                            [o, h],
                        )),
                        { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                        { identitiesByUserId: _, isLoadingIdentities: v } =
                            ((p = (0, m.cf)([ou.A], () =>
                                Object.fromEntries(y.map((e) => [e, ou.A.getUserIdentities(e)]).filter(l9.QE)),
                            )),
                            (g = (0, m.bG)([ou.A], () =>
                                y.some((e) => ou.A.getFetchState(e) === ou.e.NOT_FETCHED || ou.A.isFetchingUser(e)),
                            )),
                            s.useEffect(() => {
                                y.length > 0 && oc.P.fetchMany(...y.map((e) => [e]));
                            }, [y]),
                            { identitiesByUserId: p, isLoadingIdentities: g }),
                        { profilesByUserId: N, isLoadingProfiles: T } =
                            ((x = (0, m.cf)([rX.A], () =>
                                Object.fromEntries(y.map((e) => [e, rX.A.getUserProfile(e) ?? null]).filter(l9.QE)),
                            )),
                            (f = (0, m.yK)([rX.A], () =>
                                y.filter((e) => null == rX.A.getUserProfile(e) && !rX.A.isFetchingProfile(e)),
                            )),
                            (I = (0, m.bG)([rX.A], () => y.some((e) => rX.A.isFetchingProfile(e)))),
                            s.useEffect(() => {
                                for (let e of f) (0, om.A)(e);
                            }, [f]),
                            { profilesByUserId: x, isLoadingProfiles: f.length > 0 || I }),
                        S = (0, m.cf)(
                            [op.A],
                            () => Object.fromEntries([...j].map((e) => [e, op.A.getConfig(e)]).filter(l9.QE)),
                            [j],
                        ),
                        R = C || b || v || T,
                        O = s.useMemo(() => {
                            if (!R && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== or.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let t = E[e.extra.application_id] ?? null;
                                    if (null == t) return e;
                                    let n = S[t.id] ?? null;
                                    if (null == n || null == n.surfaces[os.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = _[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let l = N[e.author_id]?.widgets?.some((e) => (0, oh.E)(e, t.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: l },
                                    };
                                });
                        }, [R, e, E, S, _, N]),
                        [P, M] = s.useState(O);
                    return (
                        s.useEffect(() => {
                            R || M(O);
                        }, [R, O]),
                        P
                    );
                })(e, t),
        },
        children: e.children,
    });
}
var of = n(900797),
    oI = n(180170),
    oj = n(435738),
    oC = n(38055);
let oE = "content-inventory-feed",
    oy = `${oE}-settings`,
    ob = `${oE}-toggle`;
var o_ = n(569709);
let ov = s.memo(function (e) {
        let t,
            { title: i, onToggleExpand: r, expanded: a, expandedCount: o } = e,
            d = (0, m.bG)([oj.A], () => oj.A.hidden),
            u = (0, c.omit)((0, E.rm)(oy), ["role", "tabIndex"]),
            h = (0, c.omit)((0, E.rm)(ob), ["role", "tabIndex"]),
            A = s.useCallback((e) => {
                (0, C.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: C.Z_ });
                });
            }, []),
            p = s.useCallback(() => (d ? (0, oI.Il)() : o > 3 ? r() : (0, eo.tEg)()), [d, o, r]);
        return (0, l.jsxs)(k.A, {
            className: ec.lL,
            children: [
                (0, l.jsx)(rn.A, { children: z.intl.format(z.t.Uaqbke, { title: i, count: o }) }),
                (0, l.jsxs)("div", {
                    className: o_.N1,
                    children: [
                        (0, l.jsx)(tR.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("span", { children: [i, " \u2014 ", o] }),
                        }),
                        (0, l.jsx)(oC.A, { ...u }),
                        (0, l.jsx)(tR.D, {
                            onClick: p,
                            onContextMenu: A,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: o_.AN,
                            children: (0, l.jsx)("span", {}),
                        }),
                        o <= 3 && !d
                            ? null
                            : ((t = d
                                  ? (0, l.jsx)(of.t, { className: o_.wT })
                                  : a
                                    ? (0, l.jsx)(aJ.a, { className: o_.wT })
                                    : (0, l.jsx)(aZ._, { className: o_.wT })),
                              (0, l.jsx)(tR.D, {
                                  ...h,
                                  onClick: p,
                                  tag: "span",
                                  "aria-label": z.intl.string(a && !d ? z.t.iTcuma : z.t.dcl9MQ),
                                  "aria-expanded": !d && a,
                                  className: o_.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    oN = function () {
        return null;
    };
var oT = n(963307),
    oS = n(424994);
let oR = en.default.track;
function oO(e, t) {
    oR(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: oS.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
var oP = n(468581),
    oM = n(808666),
    oL = n(414499),
    oD = n(323384),
    ok = n(55730),
    ow = n(765379),
    oG = n(146779),
    oU = n(284525),
    oF = n(482030),
    oH = n(627363),
    oV = n(583846),
    oB = n(506326);
n(333007);
var oY = n(342952),
    oW = n(315710),
    oz = n(276293),
    oq = n(935063),
    oK = n(778712),
    o$ = n(696986),
    oX = n(97808),
    oQ = n(738188),
    oJ = n(983851),
    oZ = n(31300),
    o0 = n(308528),
    o1 = n(401843),
    o2 = n(375499),
    o3 = n(429433),
    o7 = n(324688);
let o9 = (0, oe.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function o5(e) {
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
        [p, g] = s.useState((0, sg.x7)("")),
        x = tN.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sx.Ay, {
        ref: f,
        placeholder: t,
        editorClassName: h,
        className: a()(o7.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? o9,
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
                : (n(t), A(""), g((0, sg.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function o6(e) {
    var t;
    let { onSelectEmoji: n, onClick: i } = e,
        r = (0, ru.Ay)(),
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
        (0, l.jsx)(ti.Y, {
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
                            children: (0, l.jsx)(o3.C, {
                                messageId: eo.dJq,
                                channel: o9,
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
                        className: o7.mJ,
                        children: (0, l.jsx)(o2.A, {
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
var o8 = n(402216),
    o4 = n(822123),
    de = n(409626),
    dt = n(692969),
    dn = n(711589),
    di = n(607407),
    dl = n(832163),
    ds = n(533562),
    dr = n(805901),
    da = n(565645);
n(267889);
var dd = n(7584);
(n(850992), n(690521));
var dc = n(806931),
    du = n(307731),
    dh = n(866780);
function dm(e) {
    let { emoji: t, isDisabled: n = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rA.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tR.D, {
            onClick: i,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(dr.c, {
                config: o2.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(rW.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(da.A, {
                            className: a()(dh.Zg, r, { [dh.c4]: n }),
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
(du.EmojiIntention.CHAT,
    [
        dd.Ay.getByName("thumbsup"),
        dd.Ay.getByName("eyes"),
        dd.Ay.getByName("laughing"),
        dd.Ay.getByName("watermelon"),
        dd.Ay.getByName("fork_and_knife"),
        dd.Ay.getByName("yum"),
    ].filter(l9.Vq));
var dA = n(636585),
    dp = n(543465),
    dg = n(607567),
    dx = n(774926),
    df = n(20805),
    dI = n(22869),
    dj = n(623671),
    dC = n(428249),
    dE = n(327098),
    dy = n(576757),
    db = n(202195),
    d_ = n(140651),
    dv = n(131607),
    dN = n(345394);
let dT = function (e) {
    let { children: t } = e,
        [n, i] = (0, dv.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(ly.i.USER_DISMISS);
    }, [i]);
    return n !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(lr.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: dN.A },
                  }),
              ],
          });
};
var dS = n(315246),
    dR = n(866323),
    dO = n(339190),
    dP = n(655214);
function dM() {
    return (0, l.jsxs)("div", {
        className: dP.oR,
        children: [
            (0, l.jsx)(g.y, { type: g.t.SPINNING_CIRCLE_SIMPLE, className: dO.S }),
            (0, l.jsx)(_.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: z.intl.string(z.t["5z/hlE"]),
            }),
        ],
    });
}
let dL = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
        r = (0, dR.p)(
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
                (0, l.jsx)(rW.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(tL.y, {
                              message: z.intl.string(z.t.fjcCk5),
                              type: tD.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(tL.y, {
                              message: "",
                              type: tD.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(dM, {}) },
                          }),
                }),
        ),
    });
};
var dD = n(381941),
    dk = n(231188);
let dw = (0, tJ.Fe)({
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
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("656997"),
                n.e("412117"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("661630"),
                n.e("470126"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("674736"),
                n.e("925420"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("590088"),
                n.e("125298"),
                n.e("295570"),
                n.e("728824"),
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
                n.e("680431"),
                n.e("338332"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("612162"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
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
                n.e("77473"),
                n.e("863232"),
                n.e("25279"),
                n.e("364827"),
                n.e("517888"),
                n.e("811133"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("784569"),
                n.e("861060"),
                n.e("77333"),
                n.e("56366"),
                n.e("639161"),
                n.e("477175"),
                n.e("960235"),
                n.e("402368"),
                n.e("190779"),
                n.e("793716"),
                n.e("910486"),
                n.e("221856"),
                n.e("678157"),
                n.e("103053"),
                n.e("325675"),
                n.e("996481"),
                n.e("331988"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("217951"),
                n.e("293159"),
                n.e("755936"),
                n.e("209338"),
                n.e("434539"),
                n.e("927875"),
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
                n.e("99799"),
                n.e("576909"),
                n.e("27355"),
                n.e("407170"),
                n.e("756055"),
                n.e("255580"),
                n.e("608557"),
                n.e("631908"),
                n.e("114308"),
                n.e("895785"),
                n.e("73536"),
                n.e("147864"),
                n.e("241176"),
                n.e("93461"),
                n.e("437961"),
                n.e("604172"),
                n.e("949013"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    dG = s.createContext(void 0);
function dU(e) {
    let { children: t } = e,
        n = s.useRef(null),
        i = s.useId();
    return (
        (0, oW.tj)(n),
        (0, l.jsx)(dG.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: n,
                className: dk.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function dF(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, d_.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(dk.ZK, e, i), style: s, children: t }),
        })
    );
}
function dH(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: dk.$m, children: t });
}
function dV(e) {
    var t;
    let n,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [j, C] = s.useState(!1),
        [E, y] = s.useState(null),
        b = (0, m.bG)(
            [lU.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lU.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: O } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, db.A)(n),
                o = (0, nM.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iv.A)(t?.id),
                c = (0, m.bG)([nc.A], () => (null != a ? nc.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([dg.Ay], () => (null != a ? dg.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lC.A], () => lC.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let t = ew.A.getDMFromUserId(e.user.id),
                            n = null != t && dp.Ay.isChannelMuted(null, t),
                            i = lj.A.isBlockedOrIgnored(e.user.id);
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
                                  (0, l.jsx)(oQ.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: dk.vb,
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
                            className: dk.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(tR.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, n2.iN)(a.id), i?.(a));
                                        },
                                        className: dk.I3,
                                        children: [
                                            (0, l.jsx)(nr.Ay, {
                                                guild: c,
                                                size: nr.Ay.Sizes.SMOL,
                                                className: dk.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(aZ._, {
                                                size: "xxs",
                                                color: tw.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(oJ.H, { size: "xs", color: tw.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: dk.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dA.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(oX.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: oK._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: dk.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(o$.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
                              onClick: function () {
                                  null != a &&
                                      lw.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? oZ.k : oJ.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: P } = (0, dE.A)(h),
        M =
            ((t = P),
            (n = (0, m.bG)([nc.A], () => nc.A.getGuild((0, e_.D)(t?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(t?.location)))),
            (r = (0, m.yK)([ee.default], () => t?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, nM.Ay)(i)),
            null != t && null != n && null != i && oe.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: dk.kP,
                              children: [
                                  (0, l.jsxs)(tR.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, n2.iN)(i.id),
                                      className: dk.I3,
                                      children: [
                                          (0, l.jsx)(nr.Ay, {
                                              guild: n,
                                              size: nr.Ay.Sizes.SMOL,
                                              className: dk.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(aZ._, {
                                              size: "xxs",
                                              color: tw.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(oz.N, { size: "xs", color: tw.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: dk.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dA.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(oX.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: oK._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: dk.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(o$.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != O && 0 === p.length ? [O] : p,
        D = L.length > 0,
        k = L.length >= 2,
        [w, G] = s.useState(!D),
        U = rs.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, nM.Ay)(o, !0),
        H =
            null != o && j
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${U}` }),
        V = j ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function B(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (en.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: oS.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, nO.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                j)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
            else {
                let e = await o0.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: oS.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let t;
        if (((0, nO.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), j))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
        else {
            let e = await o0.A.openPrivateChannel({ recipientIds: c.id }),
                n = ew.A.getChannel(e);
            (d()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === eo.rbe.DM ? oS.PA.DM_REACTION_MESSAGE_SENT : oS.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: t, interactionType: n, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (E?.focus(),
            await (0, dC.d)({
                channel: n,
                content: t,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: dD.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, n));
    }
    let q = g ?? R ?? M;
    function K() {
        (C((e) => !e), w && E?.focus());
    }
    function $(e) {
        (G(e), e && E?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(dL, { sent: T, shown: v, className: dk.Jt }),
            q ??
                (0, l.jsx)(dT, {
                    children: (0, l.jsxs)("div", {
                        className: dk.T7,
                        children: [
                            (0, l.jsx)(dB, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(o6, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? dk.P2 : dk.VE,
                children: [
                    (0, l.jsx)(o5, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: j ? o : void 0,
                        showEmojiButton: null != q,
                        className: dk.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: V,
                                      children: (0, l.jsx)(tR.D, {
                                          className: dk.wD,
                                          onClick: K,
                                          children: j
                                              ? (0, l.jsx)(oz.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(oq.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tR.D, {
                            onClick: () => $(!1),
                            className: dk.i3,
                            children: (0, l.jsx)(nH.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: tw.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: dk.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => $(!0),
                                    size: "md",
                                    text: z.intl.string(z.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        L,
                    ],
                }),
        ],
    });
}
let dB = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!P.Ay.keyboardModeEnabled && !i,
        o = (0, o4.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, nu._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(dm, {
                                  emoji: t,
                                  isDisabled: !i,
                                  onClick: () => n({ emoji: t }),
                                  className: dk.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function dY(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = t?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, dy.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, db.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: dk.MH,
        children: [
            (0, l.jsxs)("div", {
                className: dk.WP,
                children: [
                    (0, l.jsx)(oY.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: oK._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(o$.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(dk.Xn, dk.zA),
                        children: z.intl.format(n, {
                            user0: rs.Ay.getName(o, t?.id, g[0]),
                            user1: rs.Ay.getName(o, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(dk.Mj, dk.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    dI.A,
                                    {
                                        textClassName: a()(dk.Mj, dk.nk),
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
                                    dI.A,
                                    {
                                        textClassName: a()(dk.Mj, dk.nk),
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
            null != p && (0, l.jsx)(o8.Ay, { size: o8.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(dS.A, { user: A, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function dW(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(tR.D, { className: dk.Zw, onClick: n, children: t });
}
function dz(e) {
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
        I = (0, df.zD)(f),
        j = I ? f.extra?.application_id : void 0,
        C = (0, ds.W)();
    null != C && (j = C);
    let E = (0, dt.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : j,
                source: de.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(oS.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, dx.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dl.A], () => dl.A.getDetectableIdsToApplicationIds()),
        N = I ? E : void 0,
        T = s.useContext(dG);
    return (0, l.jsxs)("div", {
        className: dk.au,
        children: [
            (0, l.jsx)(dY, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(dF, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: dk.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: dk.Fb,
                                children: (0, l.jsx)(dj.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dj.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: dk.iC,
                                children: [
                                    (0, l.jsx)(dW, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(dk.$2, { [dk.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(dW, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dk.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(o$.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: dk.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != j && null != v[j]
                ? (0, l.jsx)(dw, {
                      className: dk.zu,
                      applicationId: j,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: av.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function dq(e) {
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
        { actionString: p, canWatch: g } = (0, dn.K)(a),
        { entry: x } = A,
        f = (0, df.zD)(x),
        I = f ? x.extra?.application_id : void 0,
        j = (0, ds.W)();
    null != j && (I = j);
    let C = (0, dt.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: de.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(oS.PA.OPENED_GAME_PROFILE) },
        ),
        E = f ? C : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, dE.A)(x),
        { largeImage: N, smallImage: T } = (0, dx.D8)(y, b ?? v),
        { largeImage: S } = (0, dx.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        O = (0, m.bG)([dl.A], () => dl.A.getDetectableIdsToApplicationIds()),
        P = s.useContext(dG);
    return (0, l.jsxs)("div", {
        className: dk.au,
        children: [
            (0, l.jsx)(dY, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(dF, {
                backgroundImgSrc: S?.src,
                className: dk.uR,
                children: [
                    (0, l.jsx)(dW, {
                        onClick: g
                            ? () => {
                                  (lc.default.selectVoiceChannel(a.channelId), (0, o1.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: dk.nh,
                            children: [
                                (0, l.jsx)(di.A, { className: dk.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: dk.NE,
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
                        className: dk.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: dk.Fb,
                                    children: (0, l.jsx)(dj.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? E,
                                        size: dj.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: dk.gv,
                                children: [
                                    (0, l.jsx)(dW, {
                                        onClick: d ?? E,
                                        children: (0, l.jsx)(R.D, {
                                            id: P,
                                            variant: "heading-md/semibold",
                                            className: dk.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(dW, {
                                              onClick: c ?? E,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: dk.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(o$.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != O[I]
                ? (0, l.jsx)(dw, {
                      className: dk.zu,
                      applicationId: I,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: av.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var dK = n(299846);
let d$ = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, dK.u)(n);
    function u() {
        (0, oF.hg)(n.extra.application_id);
    }
    let { data: h } = (0, oH.YY)(n.extra.application_id),
        m = (0, oG.Ay)({ application: h, analyticsLocations: [M.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(oB.iT, { location: oB.N5.POPOUT, entry: n }),
        p = (0, l.jsx)(dz, {
            channel: t,
            userDescription: (0, oV.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, ok.A)(d, eo.jUm.JOIN) || (0, ow.A)(d),
        f = g
            ? (0, l.jsx)(oU.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: oM.I,
              })
            : null,
        I =
            null == m
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: m,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: oL.h,
                  }),
        j =
            null != I || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: oD.k,
                  }),
        C = [I, g && !r ? f : j].filter(l9.Vq);
    return (0, l.jsxs)(dU, {
        children: [
            p,
            (0, l.jsx)(dH, {
                children: (0, l.jsx)(dV, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: t,
                    entry: n,
                    buttons: C,
                }),
            }),
        ],
    });
};
var dX = n(322789),
    dQ = n(808380),
    dJ = n(687966),
    dZ = n(960076),
    d0 = n(544441),
    d1 = n(562708),
    d2 = n(139286);
function d3(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, L.Ay)(n),
        s = (0, oG.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, d2.A)({
            name: d1.ImpressionNames.CLOUD_PLAY_CTA,
            type: d1.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: oL.h,
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
var d7 = n(601007),
    d9 = n(648246),
    d5 = n(308335),
    d6 = n(790381),
    d8 = n(266080),
    d4 = n(968309),
    ce = n(30370);
function ct(e) {
    let t = (0, m.bG)([ce.A], () => ce.A.getAccounts().some((t) => t.type === e)),
        n = s.useCallback(() => {
            if (null == e) return null;
            (0, d4.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var cn = n(18282);
let ci = [...dX.n, oB.Yq],
    cl = {
        [dQ.Y.DESKTOP]: null,
        [dQ.Y.LINUX]: null,
        [dQ.Y.MACOS]: null,
        [dQ.Y.NINTENDO]: null,
        [dQ.Y.IOS]: null,
        [dQ.Y.ANDROID]: null,
        [dQ.Y.XBOX]: d8.A,
        [dQ.Y.PLAYSTATION]: d6.A,
    },
    cs = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, dK.u)(n),
            { streamPreviewUrl: A, stream: p } = (0, db.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            f = null != g ? cl[g] : null,
            I = ct(g === dQ.Y.XBOX ? eo.fg2.XBOX : g === dQ.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: j } = (0, oH.YY)(x),
            C = (0, d0.A)(x),
            { analyticsLocations: E } = (0, L.Ay)(M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, oG.JC)(j),
            b = (0, d5.o)(h?.application_id ?? m?.applicationId ?? j?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(oB.mG, {
                location: null == A ? oB.N5.POPOUT : oB.N5.STREAMING_POPOUT,
                children: ci.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(dz, {
                          channel: t,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cn.A, { onClick: I, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, oV.JM)(n) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(d7.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: E,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(dq, {
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
                              C.length > 0
                                  ? (0, l.jsx)(d7.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: x,
                                        analyticsLocations: E,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          d3,
                          { application: j, analyticsLocation: M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, ok.A)(h, eo.jUm.JOIN) || (0, ow.A)(h))
                    ? (0, l.jsx)(
                          oU.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: dJ.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, dZ.A)(h)
                    ? (0, l.jsx)(d9.A, { activity: h, size: "md", variant: "primary", icon: tG.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(l9.Vq);
        return (0, l.jsxs)(dU, {
            children: [
                v,
                (0, l.jsx)(dH, {
                    children: (0, l.jsx)(dV, {
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
    cr = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function ca(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e,
        { data: r } = (0, oH.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, L.Ay)(M.A.CLOUD_PLAY_POPOVER),
        o = (0, oG.Ay)({ application: r, analyticsLocations: a }),
        d = (0, nO.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && n,
        { activeEntryId: u, setActiveEntryId: h } = cr(),
        m = u === t.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, dv.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(t.id);
    }, [u, c, t.id, h]),
        s.useEffect(
            () => () => {
                f && (x(ly.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [I, j] = s.useState(!1);
    return (
        f && !I && j(!0),
        (0, d2.A)(
            {
                name: d1.ImpressionNames.CLOUD_PLAY_CTA,
                type: d1.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lr.A, {
            title: z.intl.string(z.t["+WNDtV"]),
            body: z.intl.string(z.t["5QKxGI"]),
            targetElementRef: i,
            shouldShow: f,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/912562ba9ec7f9f728ce5b336c9bed5f5195dcab1451d12b0e592b1a7389200c.svg",
            },
            actions: [
                {
                    icon: oL.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(ly.i.USER_DISMISS), h(null));
            },
        })
    );
}
let co = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(ca, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var cd = n(363670),
    cc = n(205327),
    cu = n(52133),
    ch = n(835723),
    cm = n(172710),
    cA = n(655116),
    cp = n(763758),
    cg = n(286617),
    cx = n(533207),
    cf = n(280450),
    cI = n(121090),
    cj = n(693879),
    cC = n(809854),
    cE = n(272984),
    cy = n(170699);
function cb(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, cC.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, i),
                s = n - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, oV.W6)({ start: 0 }, s) };
        }, [t, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cy.lu,
              children: [
                  (0, l.jsx)(cj.z, { entry: n }),
                  (0, l.jsx)("div", { className: cy.Lt, children: (0, l.jsx)("div", { className: cy.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cy.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function c_(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cd.u7)(r),
        g = ct(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [cA.A, cf.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cg.A)(cA.A, cf.default, p, c) : void 0),
            [c, p],
            cu.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        j = [];
    u.media.provider === cc.X.SPOTIFY &&
        ((n = () => {
            (0, cm.Mp)(c);
        }),
        (i = () => {
            (0, cm.QX)(c, p.id);
        }),
        (t = () => {
            null != g ? g() : (0, cm.Mp)(c);
        }),
        (I = (0, l.jsx)(cp.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: dk.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cm.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            j.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: ch.J,
                        onClick: function () {
                            null != f && ((0, cx.A)(f, cE.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let C = (0, l.jsx)(dz, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cc.X.SPOTIFY
                ? (0, l.jsx)(cn.A, { onClick: t, "aria-label": z.intl.string(z.t.rRffNz), Icon: cI.A })
                : null,
        userDescription: (0, oV.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: n,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cb, { activity: c }),
    });
    return (0, l.jsxs)(dU, {
        children: [
            C,
            (0, l.jsx)(dH, {
                children: (0, l.jsx)(dV, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: j,
                }),
            }),
        ],
    });
}
var cv = n(903134),
    cN = n(56121),
    cT = n(263577),
    cS = n(868065),
    cR = n(804779);
let cO = [oB.Y8],
    cP = [cN.j.WEEK],
    cM = s.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, dx.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, oV.TQ)(t);
        return null != r && (0, l9.S1)(r, cP)
            ? (0, l.jsxs)(cS.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(cS.UA, {
                          children: [
                              (0, l.jsx)(cS.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(cS.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(oB.mG, {
                                  location: oB.N5.CARD,
                                  children: cO.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(cT.V, { src: s?.src, size: 48, className: cR.xn }),
                  ],
              })
            : null;
    });
var cL = n(210528);
let cD = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        c = (0, oV.TQ)(n),
        u = ct(eo.fg2.SPOTIFY);
    if (null == d || !(0, l9.S1)(c, cP)) return null;
    function h() {
        let e = cE.M0.ALBUM,
            t = cL.A.isProtocolRegistered()
                ? cE.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : cE.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(dU, {
        children: [
            (0, l.jsx)(dz, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cE.M0.ARTIST,
                        t = cL.A.isProtocolRegistered()
                            ? cE.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : cE.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: h,
                channel: t,
                entry: n,
                headerIcons:
                    a === cc.X.SPOTIFY
                        ? (0, l.jsx)(cn.A, { onClick: u, Icon: cI.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(oB.mG, {
                    location: oB.N5.POPOUT,
                    children: cO.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(dH, {
                children: (0, l.jsx)(dV, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: t, entry: n }),
            }),
        ],
    });
};
var ck = n(977001);
let cw = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, dK.u)(n),
        c = (0, oV.ty)(n),
        u = (0, oV.TQ)(n);
    if (null == a || null == c || null == u || !(0, ck._E)(u)) return null;
    let h = null != n.extra.platform ? cl[n.extra.platform] : null;
    return (0, l.jsxs)(dU, {
        children: [
            (0, l.jsx)(dz, {
                channel: t,
                headerIcons: null == h ? null : (0, l.jsx)(cn.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: n,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(oB.mG, {
                    location: oB.N5.POPOUT,
                    children: ck.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(dH, {
                children: (0, l.jsx)(dV, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var cG = n(514243),
    cU = n(347306),
    cF = n(123917),
    cH = n(998218);
let cV = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(n.author_id)),
        a = ct(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == n.extra.url) return;
        let e = cH.A.safeParseWithQuery(n.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, cF.h)({ href: cH.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(dU, {
              children: [
                  (0, l.jsx)(dz, {
                      channel: t,
                      entry: n,
                      userDescription: (0, oV.JM)(n) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cn.A, {
                          onClick: a,
                          Icon: cU.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(oB.mG, {
                          location: oB.N5.POPOUT,
                          children: cG.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(dH, {
                      children: (0, l.jsx)(dV, {
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
function cB(e) {
    return e?.type === oT.S9.CONTENT_INVENTORY
        ? e.entry.content_type === or.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function cY(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case or.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(dX.A, { ...n, entry: t });
        case or.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(cG.A, { ...n, entry: t });
        case or.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ck.Ay, { ...n, entry: t });
        case or.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cM, { ...n, entry: t });
        case or.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cd.Ay, { ...n, entry: t });
        case or.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(oP.A, { ...n, entry: t });
        default:
            return null;
    }
}
function cW(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === or.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(co, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function cz(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(cq, {
        onReaction: (e, i) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(oS.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function cq(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case or.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cs, { ...n, entry: t });
        case or.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(cV, { ...n, entry: t });
        case or.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(cw, { ...n, entry: t });
        case or.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(cD, { ...n, entry: t });
        case or.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c_, { ...n, entry: t });
        case or.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(d$, { ...n, entry: t });
        default:
            return null;
    }
}
let cK = s.memo(function (e) {
    let { index: t, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, E.rm)(`${t}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, dK.u)(r.entry);
    !(function (e) {
        let { markAsVisible: t } = s.useContext(og);
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
        I = s.useRef(!1),
        [j, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        j && v && _(!0);
    }, [j, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, C.L3)(e, async () => {
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
                oO(e, { ...f, ...t });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        oO(oS.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        );
    function O() {
        ((I.current = !1),
            setTimeout(() => {
                I.current || (y(!1), _(v));
            }, 100));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(cW, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: O,
                children: (0, l.jsx)(ti.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(cv.J.Provider, {
                            value: O,
                            children: (0, l.jsx)(cz, {
                                closePopout: t,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: j,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && O();
                    },
                    spacing: 8,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.jsx)(tR.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                j || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(cY, {
                                ...r,
                                selected: n,
                                hovered: I.current,
                                trackRankingItemInteraction: S,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var c$ = n(531685),
    cX = n(99066),
    cQ = n(376261),
    cJ = n(99753),
    cZ = n(136722),
    c0 = n(860071);
let c1 = [],
    c2 = new Set(),
    c3 = new Set();
var c7 = n(808323);
let c9 = new Set([
    or.ContentInventoryEntryType.PLAYED_GAME,
    or.ContentInventoryEntryType.WATCHED_MEDIA,
    or.ContentInventoryEntryType.TOP_GAME,
    or.ContentInventoryEntryType.TOP_ARTIST,
    or.ContentInventoryEntryType.LISTENED_SESSION,
    or.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var c5 = n(728321),
    c6 = n(282006);
let c8 = er.Ay.getEnableHardwareAcceleration(),
    c4 = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    ue = s.memo(function (e) {
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
                isVROnline: I,
                premiumSince: j,
                nameplate: E,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != j ? new Date(j) : null,
            { analyticsLocations: S } = (0, L.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, C.L3)(e, async () => {
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
                                n.e("309291"),
                                n.e("307059"),
                                n.e("343116"),
                                n.e("139103"),
                                n.e("470314"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632)),
                            t = lC.A.isInChannel(eG.Ay.getVoiceChannelId(), c.id);
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
            P = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    O.A.startTyping(p.id));
            }, [c, p.id]),
            M = s.useCallback(
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
        return (0, l.jsx)(K.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: P,
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
                    shouldAnimateStatus: c8,
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
                    isVR: I,
                    onClickPremiumGuildIcon: M,
                    selected: v,
                    itemProps: y,
                    nameplate: E,
                    onClick: (e) => {
                        e.shiftKey ? P?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    ut = s.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, E.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([B.A], () => (null != t ? B.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(ue, { ...n, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function un(e) {
    let { index: t } = e,
        n = (0, E.rm)(`${t}`);
    return (0, l.jsx)(ea.A, { itemProps: n });
}
class ui extends s.Component {
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
        if (r?.id === oE) return (0, s.createElement)(ov, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                c5.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: c4,
                    children: (0, s.createElement)(c6.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, s.createElement)(c6.Y, { ...r, key: `section-${t}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != t && t.type === oT.S9.CONTENT_INVENTORY) {
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
            if (r.type === oT.S9.MEMBER && "user" in r) {
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
                    ut,
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
            if (r.type === oT.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    cK,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === oT.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(oN, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(un, { index: i }, `placeholder-${t}:${n}`);
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
        if (e?.id === oE) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? cB(n[i + 1 + l]) : t;
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
            .filter(l9.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== oT.S9.MEMBER ||
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
                (0, l.jsx)(sI.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rt.F, {
                                component: (0, l.jsx)(rn.A, {
                                    children: (0, l.jsx)(rt.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, nM.m1)(n, ee.default, lj.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(E.PR, {
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
function ul(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: i } = (0, L.Ay)(M.A.MEMBER_LIST),
        r = (0, m.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        o = (0, m.cf)([oT.Ay], () => oT.Ay.getProps(t.guild_id, t.id)),
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
                        l = (0, c7.A)({ id: oS.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return ((0, cu.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [t]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    c0.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [X.Ay],
                                () => {
                                    if (null == l) return c1;
                                    let e = [];
                                    for (let t of a) X.Ay.isMember(l, t) && e.push(t);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return c2;
                                let e = new Set();
                                for (let t of o) {
                                    let n = el.cc({ user: t, context: i });
                                    cZ.zy(n, W.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => t?.filter((e) => d.has(e.author_id)), [t, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((t = l = s.useMemo(() => l?.filter((e) => c9.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [oj.A, cJ.A],
                            () => {
                                let e = cJ.A.getDebugImpressionCappingDisabled();
                                return !(0, cX.sE)("useFilterImpressionCappedContent") || e
                                    ? c3
                                    : oj.A.getImpressionCappedItemIds();
                            },
                            [t],
                        )),
                        s.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: c3 };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, oV.JM)(t) || !i.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, i]));
                    l = r;
                    let o = (0, m.bG)([cJ.A], () => cJ.A.getFeedRequestId(oS.X1.GLOBAL_FEED));
                    return (
                        (n = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(og).useInjectEntriesWithPreviewData(n)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([oj.A], () => oj.A.hidden),
                A = (0, m.bG)([c$.A], () => c$.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([nc.A], () => nc.A.getGuild(r), [r]),
                x = ((0, cQ.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, I, j, C] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [t, n, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: oT.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: oT.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: oE,
                        type: oT.S9.CONTENT_INVENTORY_GROUP,
                        key: oE,
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
                        feedHeight: e.map(cB).reduce((e, t) => e + t, 0),
                    };
                    return [[m, ...t], [...n, m, ...e], Math.random(), e];
                }, [l, c, a, t, r, d, n, i, h, x]),
                E = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let t = Math.floor(e / 72),
                            n = Math.min(C?.length ?? 0, t);
                        E.current = Math.max(E.current, n);
                    },
                    [C],
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
                        (E.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, E.current);
                            !h &&
                                A &&
                                x &&
                                (oR(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: t,
                                    surface_type: oS.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, cX.sE)("useInjectContentInventoryFeed") &&
                                    tI.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: I, version: j, updateMaxRowSeen: v }
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
    let g = (0, ol.W)("lg") + (0, ol.W)("xxs"),
        x = s.useCallback(
            (e, t) => {
                let n = A.current;
                if (null == n) return;
                let i = t === oy || t === ob ? 0 : parseInt(t, 10),
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
        I = s.useCallback(
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
        j = (0, y.Ay)({ id: `members-${t.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: I });
    return (0, l.jsx)(L.f5, {
        value: i,
        children: (0, l.jsx)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, n),
            children: (0, l.jsx)(E.hD, {
                navigator: j,
                children: (0, l.jsx)(ui, {
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
        }),
    });
}
function us(e) {
    let { channel: t, className: n } = e,
        i = s.useDeferredValue(t);
    return s.useMemo(() => (0, l.jsx)(ox, { children: (0, l.jsx)(ul, { channel: i, className: n }) }), [i, n]);
}
var ur = n(888904);
let ua = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: ur.kL,
        children: [
            (0, l.jsxs)(ls.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(ls.A.Icon, { icon: oz.N, "aria-hidden": !0 }),
                    (0, l.jsx)(ls.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: ur.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: ur.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: ur.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uo = n(909735),
    ud = n(943712),
    uc = n(274541),
    uu = n(746080),
    uh = n(516607),
    um = n(999900);
function uA() {
    return (0, l.jsx)("div", { className: um.wG, children: (0, l.jsx)(g.y, {}) });
}
let up = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("229511"),
                n.e("908346"),
                n.e("808216"),
                n.e("202342"),
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
        renderLoader: uA,
        name: "ForumChannel",
    }),
    ug = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("770583"),
                n.e("355197"),
                n.e("979585"),
                n.e("87729"),
                n.e("889300"),
                n.e("344322"),
                n.e("998976"),
            ]).then(n.bind(n, 780611)),
        webpackId: 780611,
        renderLoader: uA,
        name: "AppChannel",
    });
function ux() {
    return Promise.all([
        n.e("651299"),
        n.e("426965"),
        n.e("256172"),
        n.e("859821"),
        n.e("113561"),
        n.e("368991"),
        n.e("223213"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("945210"),
        n.e("792818"),
        n.e("630279"),
        n.e("460582"),
        n.e("477751"),
        n.e("245851"),
        n.e("125466"),
        n.e("740705"),
        n.e("468617"),
        n.e("770583"),
        n.e("64097"),
        n.e("355197"),
        n.e("389187"),
        n.e("347285"),
        n.e("494653"),
        n.e("604456"),
        n.e("459397"),
        n.e("847810"),
        n.e("249727"),
        n.e("686047"),
        n.e("997708"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("437961"),
        n.e("139103"),
        n.e("949013"),
        n.e("33448"),
        n.e("79216"),
        n.e("815275"),
        n.e("544901"),
        n.e("704374"),
        n.e("986300"),
        n.e("874821"),
        n.e("426792"),
        n.e("815057"),
        n.e("654624"),
        n.e("322094"),
        n.e("45916"),
        n.e("726223"),
        n.e("979585"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("497306"),
        n.e("736793"),
        n.e("87729"),
        n.e("112733"),
        n.e("889300"),
        n.e("932011"),
        n.e("586546"),
        n.e("792461"),
    ]).then(n.bind(n, 540462));
}
let uf = (0, tJ.Fe)({ createPromise: ux, webpackId: 540462, name: "ChannelCall", renderLoader: uA });
function uI() {
    return Promise.all([
        n.e("770583"),
        n.e("998392"),
        n.e("703540"),
        n.e("368991"),
        n.e("256172"),
        n.e("223213"),
        n.e("656997"),
        n.e("828849"),
        n.e("944121"),
        n.e("655282"),
        n.e("945210"),
        n.e("792818"),
        n.e("630279"),
        n.e("494653"),
        n.e("668526"),
        n.e("125466"),
        n.e("460582"),
        n.e("477751"),
        n.e("740705"),
        n.e("468617"),
        n.e("805551"),
        n.e("700792"),
        n.e("592822"),
        n.e("309291"),
        n.e("93461"),
        n.e("437961"),
        n.e("949013"),
        n.e("33448"),
        n.e("79216"),
        n.e("815275"),
        n.e("256373"),
        n.e("544901"),
        n.e("704374"),
        n.e("420577"),
        n.e("874821"),
        n.e("426792"),
        n.e("464287"),
        n.e("360536"),
        n.e("654624"),
        n.e("322094"),
        n.e("45916"),
        n.e("979585"),
        n.e("606913"),
        n.e("291553"),
        n.e("61924"),
        n.e("215980"),
        n.e("842492"),
        n.e("230761"),
        n.e("497306"),
        n.e("678827"),
        n.e("407525"),
    ]).then(n.bind(n, 883396));
}
let uj = (0, tJ.Fe)({ createPromise: uI, webpackId: 883396, name: "StageChannelCall", renderLoader: uA }),
    uC = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("784993"),
                n.e("489217"),
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
            return (0, l.jsx)(sl, {});
        },
    }),
    uE = (0, tJ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("577154"),
                n.e("424216"),
                n.e("877730"),
                n.e("611899"),
                n.e("489217"),
                n.e("527552"),
                n.e("769266"),
                n.e("487873"),
                n.e("765626"),
                n.e("683302"),
                n.e("249681"),
                n.e("728136"),
                n.e("507775"),
                n.e("428235"),
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
    uy = (0, tJ.Fe)({
        createPromise: () => Promise.all([n.e("188547"), n.e("269178"), n.e("875746")]).then(n.bind(n, 155769)),
        webpackId: 155769,
        name: "FriendsSidebar",
    });
class ub extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, s4.d0)("guild_channel"), this.maybePreloadChannelCall());
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
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE ? ux() : e === eo.rbe.GUILD_STAGE_VOICE && uI();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, n2.iN)(e.id);
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
            (0, re.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [M.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
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
            (0, C.L3)(e, async () => {
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
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("463317"),
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("189673"),
                    n.e("955557"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("947502"),
                    n.e("245996"),
                    n.e("700792"),
                    n.e("965789"),
                    n.e("592822"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("198415"),
                    n.e("309291"),
                    n.e("307059"),
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
        return e?.hasFlag(uu.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ib.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tT.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== dc.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iE.A,
                  { size: o8.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
                break;
            case eo.rbe.DM:
                (a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lv, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iX, { channel: e }, "pins")),
                    a.push((0, l.jsx)(lN.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    a.push((0, l.jsx)(lW, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    a.push((0, l.jsx)(lk, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, l.jsx)(lv, { channel: e }, "calls")),
                    a.push((0, l.jsx)(iX, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, l.jsx)(lN.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    a.push((0, l.jsx)(iz, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && a.push((0, l.jsx)(it, { channel: e })),
                    null == t || t.isForumLikeChannel() || a.push((0, l.jsx)(sZ, { channel: t }, "browser")),
                    e.isVocalThread() && a.push((0, l.jsx)(lF, { channel: e }, "thread-call")),
                    a.push((0, l.jsx)(id, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iX, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, l.jsx)(iz, { channelId: e.id }, "members")),
                    null != t && (0, eI.pk)(e) && a.push((0, l.jsx)(i1, { channel: e }, "summaries")),
                    a.push((0, l.jsx)(s3, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (a.push((0, l.jsx)(sZ, { channel: e }, "browser")),
                    n || a.push((0, l.jsx)(iq.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iX, { channel: e }, "pins")),
                    (0, tS.PD)(e.guild_id, "channel_header") &&
                        a.push((0, l.jsx)(iY, { channelId: e.id }, "conversations")),
                    a.push((0, l.jsx)(iz, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && a.push((0, l.jsx)(i1, { channel: e }, "summaries")));
                break;
            case eo.rbe.GUILD_APP:
                (a.push((0, l.jsx)(ty, { channel: e }, "popout")),
                    a.push((0, l.jsx)(sZ, { channel: e }, "browser")),
                    n || a.push((0, l.jsx)(iq.A, { channel: e }, "notifications")),
                    a.push((0, l.jsx)(iX, { channel: e }, "pins")),
                    a.push((0, l.jsx)(iz, { channelId: e.id }, "members")),
                    a.push((0, l.jsx)(iV, { channelId: e.id }, "chat")),
                    a.push((0, l.jsx)(tA, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && a.push((0, l.jsx)(ll, {}, "game-invite-channel-learn-more")),
                    n ||
                        (a.push((0, l.jsx)(le, { channel: e }, "forum-onboarding")),
                        a.push((0, l.jsx)(iq.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, l.jsx)(iz, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                a.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
        }
        return a;
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
                t.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(iz, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: um.u8,
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
            showCall: r,
            showActivityPanel: o,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != t, "Should not be null if channel is not null."));
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, n2.iN)(e.id) : void 0,
            A = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            p = o || c,
            g = r || p;
        return (0, l.jsxs)("div", {
            className: um.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: u && r ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            ls.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(um.DD, r, { [um.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: c,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(nD.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, nD.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: i,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: A,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: um.u8,
                                              children: (0, l.jsx)(x.$, {
                                                  onClick: () => (0, nk.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: z.intl.string(z.t.k5WiPf),
                                              }),
                                          })
                                        : (0, nD.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(st.A, { channelId: e.id }),
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
            case eo.rbe.GUILD_STAGE_VOICE:
                return (0, l.jsx)(uj, { channel: e, popoutType: tv.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    uf,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: tv.N.NO_POPOUT,
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
        return (0, l.jsx)(e5, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(iO, { guildId: t.id })
                : (0, l.jsx)(i_.H, { guildId: t.id, children: (0, l.jsx)(iG, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(a6.A, { guild: t, channelId: e.id });
        if (null != s) return (0, l.jsx)(nG.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != t, "directory channels must exist within a guild"), (0, l.jsx)(nR, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            d()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(up, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return e.type === eo.rbe.GUILD_APP
            ? (0, l.jsx)(ug, { channel: e }, e.id)
            : (0, l.jsx)(nL.A, { channel: e, guild: t, chatInputType: tN.oU.NORMAL }, null != t ? t.id : "home");
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
            return (0, l.jsx)(a5, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(se, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(us, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(us, { channel: t }, `channel-members-${t.id}`);
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
                    return (0, l.jsx)(tQ, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(uC, { guildId: n?.id, channelId: e.id });
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
                        { onCloseCallback: () => iy(l$.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("99643"), n.e("510585")]).then(
                                n.bind(n, 954784),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, a8.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
                case iF.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sV, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case iF.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(s8, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case iF.PE.VIEW_CHANNEL: {
                    let n = ew.A.getChannel(i.channelId);
                    if (n?.isThread()) {
                        let n = t?.isForumLikeChannel() ? ix : s8;
                        e = (0, l.jsx)(n, { channelId: i.channelId });
                        break;
                    }
                    if (null != t && (0, oe.ZV)(t.type)) {
                        e = (0, l.jsx)(uc.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case iF.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iF.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: um.uC,
                    children: (0, l.jsx)(uE, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => iU.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(oi.A, {
                sidebarType:
                    t?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(t.type) ? oi.X.PostSidebar : oi.X.ThreadSidebar,
                maxWidth: c,
                capturePointer: t?.type === eo.rbe.GUILD_APP,
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
        if (i) return (0, l.jsx)(ua, {});
        if (null == e) return (0, l.jsx)(ud.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            j = (0, uo.UN)("Channel"),
            C = null != d && !I,
            E = (0, oe.nO)(e.type) && !o,
            y = t?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE,
                        className: a()(um.TE, {
                            [um.js]: (I && !j) || C,
                            [um.Rs]: I ? !j || g : C || x,
                            [um.jl]: I && g,
                        }),
                        children: [
                            E
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: I ? p : void 0 },
                                      className: um.x4,
                                      channel: e,
                                      draftType: iA.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(um.Qs, { [um.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tZ.HI, { location: y, subsection: n ?? void 0 }),
                u ? (0, l.jsx)("div", { className: um.zP, children: b }) : b,
                x && (0, l.jsx)(uy, {}),
            ],
        });
    }
}
let u_ = (0, ef.A)(ub),
    uv = s.memo(function (e) {
        var t, n;
        let i,
            { providedChannel: r } = e,
            [a, o] = s.useState(null),
            d = (0, m.bG)([eG.Ay], () => eG.Ay.getChannelId()),
            c = (0, m.bG)([eG.Ay], () => eG.Ay.getVoiceChannelId()),
            g = (0, m.bG)([ew.A], () => r ?? ew.A.getChannel(d), [d, r]),
            x = (0, nP.DZ)(),
            f = (0, nP.e4)(g, "ConnectedChannel"),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(c), [c]),
            E = f?.parent_id,
            y = (0, m.bG)([ew.A], () => ew.A.getChannel(E), [E]),
            b = (0, m.bG)([nc.A], () => nc.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: _ } = (0, iv.A)(f?.id ?? void 0),
            v = (0, m.bG)(
                [t_.A],
                () => {
                    let e = null != d ? t_.A.getParticipants(d) : [],
                        t = null != d ? t_.A.getActivityParticipants(d) : [];
                    return e.length - t.length > 0;
                },
                [d],
            ),
            N = (0, iC.A)(),
            T = (0, m.bG)([eG.Ay], () => (N?.channelId ?? eG.Ay.getVoiceChannelId()) === f?.id),
            S = (0, m.bG)([eC.Ay], () => (null != f ? eC.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            R = (0, m.bG)([on.A], () => on.A.isConnected()),
            O = (0, ej.Ay)(R),
            P = R && !1 === O;
        s.useEffect(() => {
            T &&
                P &&
                null != S &&
                null != f &&
                I.A.selectParticipant(
                    f.id,
                    (0, tb.Qt)({ applicationId: S.applicationId, instanceId: S.compositeInstanceId }),
                );
        }, [P, f, T, S]);
        let M = (0, m.bG)([eC.Ay], () => eC.Ay.getCurrentEmbeddedActivity()),
            L = (0, m.bG)([eC.Ay], () => eC.Ay.getActivityPanelMode()),
            D = null != M && !(0, ev.A)(f?.id) && L === eZ.Gd.PANEL,
            k = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: w, isUserInThisVoice: G } = (0, m.cf)([lC.A], () =>
                null != f && f.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lC.A.getVoiceStatesForChannel(f.id)),
                          isUserInThisVoice: lC.A.isInChannel(f.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            U = null != f && f.isPrivate() && !D && v,
            F = f?.isGuildVocal() || U || (w && (G || !k)),
            H = (0, m.bG)([tx.A], () => {
                let e = (0, tm.ny)(tx.A.getMainFrame());
                return e?.data.layoutMode === tm.y0.FOCUSED && e.intent === tm.sV.MAIN;
            }),
            { welcomeModalChannelId: V } = (0, h.zy)(),
            B = (0, m.bG)([is.A], () => null != f && is.A.isLurking(f.guild_id), [f]),
            Y = (0, m.bG)([a4.A], () => a4.A.hasSeen(f?.guild_id, B), [f, B]),
            W = (0, m.bG)(
                [t_.A, eC.Ay],
                () =>
                    null != eC.Ay.getConnectedActivityLocation() && eC.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eC.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != d
                          ? t_.A.getLayout(d)
                          : eo.DUB.NORMAL,
                [d],
            ),
            z =
                ((t = b?.id),
                (i = (0, m.bG)([nc.A, lK, ee.default, X.Ay], () => {
                    let e = nc.A.getGuild(t);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === lK.hasViewedPrompt(l$.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = ee.default.getCurrentUser();
                    if (null == n) return null;
                    let i = X.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != t && null != i && (i || iy(l$.REAL_NAME_PROMPT, t));
                }, [i, t]),
                !0 === i),
            q =
                ((n = b?.id),
                (0, m.bG)([ew.A, nc.A, eG.Ay], () => {
                    let e = nc.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = ew.A.getChannel(V);
                    return V === eG.Ay.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, oe.ke)(t.type);
                })),
            { section: K, channelSidebarState: $ } = (0, m.cf)(
                [iH.Ay],
                () => ({ section: iH.Ay.getSection(d, f?.isDM()), channelSidebarState: iH.Ay.getSidebarState(d) }),
                [d, f],
            ),
            J = b?.id,
            Z = (0, m.bG)([iH.Ay], () => iH.Ay.getGuildSidebarState(J), [J]),
            et = (0, lQ.lI)(),
            en = (0, nM.Ay)(f),
            el = (0, nM.Ay)(f, !0),
            es = (0, m.bG)([t_.A], () => (null != f ? t_.A.getSelectedParticipant(f.id) : null)),
            er = (0, e4.vL)(f),
            ea = (0, nw.Uf)(f),
            ed = null != f && c === f.id,
            ec = null != f && f.isGuildStageVoice(),
            { sidebarEnabled: eu, appBarToggleEnabled: eh } = iI.A.useConfig({ location: "Channel" }),
            em = (0, ij.c)(),
            eA = (0, m.bG)(
                [ot.A, iW.A],
                () => {
                    let e = f?.guild_id ?? iW.A.getGuildId();
                    return null != e && ot.A.isUnavailable(e);
                },
                [f],
            ),
            ep = eu && !__OVERLAY__ && null != f && !eA && !f.isGuildVocal();
        (s.useEffect(() => (j.A.setFriendsSidebarAvailable(ep), () => j.A.setFriendsSidebarAvailable(!1)), [ep]),
            (function (e) {
                let { onTransition: t } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: n } = e,
                            i = (0, e_.H)(n);
                        if (null == i || !(0, ev.A)(i)) return;
                        eG.Ay.getVoiceChannelId() !== i && (await (0, e6.A)({ channelId: i }));
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
                let e = (0, nk.JK)();
                if (e?.location?.state?.stageInviteKey === uh.J2) {
                    let { channelId: t } = (0, lX.vu)(e?.location?.pathname) ?? {};
                    null != t && o(t);
                }
            }, []));
        let eg = { channel: f, inCurrentVoiceChannel: ed },
            ex = s.useRef(eg);
        (s.useEffect(() => {
            ex.current = eg;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ex.current;
                null != a && null != e && ec && e.id === a && !t && ((0, ss.av)(e), o(null));
            }, [a, ec]));
        let ef = (0, eI.cI)(f),
            eE = null != f && f.isPrivate(),
            ey = (0, ej.Ay)(eE),
            eb = (0, ej.Ay)(f?.id);
        s.useEffect(() => {
            let e = ey && !eE,
                t = ey && eE && f?.id !== eb;
            (e || t) && (0, nO.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: ly.i.AUTO });
        }, [f?.id, eb, eE, ey]);
        let eN = (0, p.useHasAnyModalOpen)();
        return (0, l.jsx)(u_, {
            guildId: f?.guild_id,
            channelId: d,
            channel: f,
            channelName: en,
            formattedChannelName: el,
            parentChannel: y,
            voiceChannel: C,
            layout: W,
            needSubscriptionToAccess: _,
            isLurking: B,
            hasModalOpen: eN,
            section: K,
            channelSidebarState: $,
            guildSidebarState: Z,
            guild: b,
            showCall: !_ && F,
            showActivityPanel: D,
            showFramePanel: H,
            channelIsContentGated: er,
            spoilerGatingChannelId: ea,
            isMobile: (0, m.bG)([Q.A], () => f?.type === eo.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: eA,
            showRealNameModal: z,
            showWelcomeModal: !Y && q,
            showFollowButton: (f?.type === eo.rbe.GUILD_ANNOUNCEMENT && b?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lC.A], () => ({ hasVideo: null != f && lC.A.hasVideo(f.id) }), [f]),
            inCall: ed,
            selectedParticipant: es,
            showChannelSummaries: ef,
            showHeaderGuildBreadcrumb: x || et,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: M,
            friendsSidebarExperimentEnabled: eu,
            canShowFriendsSidebar: ep,
            friendsSidebarAppBarToggleEnabled: eh,
            friendsSidebarCollapsed: em,
        });
    });
