t.r(n), t.d(n, { default: () => rQ }), t(321073);
var l,
    i = t(627968),
    s = t(64700),
    a = t(503698),
    r = t.n(a),
    d = t(284009),
    o = t.n(d),
    c = t(735438),
    u = t.n(c),
    h = t(873263),
    A = t(17928),
    m = t(554146),
    g = t(192308),
    x = t(289873),
    p = t(821609),
    f = t(43990),
    j = t(367513),
    I = t(442433);
t(183994);
var b = t(837381),
    C = t(887129),
    E = t(607399),
    y = t(834730),
    v = t(194261),
    N = t(312138),
    _ = t(475825),
    T = t(177953),
    S = t(534514),
    R = t(414798),
    L = t(775602),
    O = t(793574),
    M = t(688810),
    D = t(449582),
    P = t(485947),
    k = t(509536),
    G = t(201275),
    U = t(657048),
    w = t(361610),
    F = t(964486),
    H = t(36124),
    B = t(317525),
    V = t(219065),
    W = t(818348),
    Y = t(375708);
let z = [];
var q = t(342296),
    K = t(616356),
    X = t(696451),
    Q = t(290863),
    $ = t(461213),
    Z = t(741961),
    J = t(287809),
    ee = t(303727),
    en = t(174459),
    et = t(625494),
    el = t(488926),
    ei = t(427262),
    es = t(19575),
    ea = t(589158),
    er = t(652215),
    ed = t(784503),
    eo = t(540808);
let ec = es.Ay.getEnableHardwareAcceleration(),
    eu = s.memo(function (e) {
        let { channel: n, sectionId: l, userId: a, guildOwnerId: r } = e,
            d = s.useRef(null),
            o = (0, A.bG)([Z.A], () => Z.A.isTyping(n.id, a)),
            c = (0, A.bG)([X.Ay], () => X.Ay.getMember(n.guild_id, a)),
            u = (0, A.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([J.default], () => J.default.getUser(a)),
            m = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
            g = h?.id === m?.id,
            x = (0, A.bG)([Q.A, $.A], () => (g ? $.A.getStatus() : Q.A.getStatus(a, n.guild_id))),
            p = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(a)),
            f = (0, A.yK)([Q.A, $.A], () => (g ? $.A.getActivities() : Q.A.getActivities(a, n.guild_id))),
            j = (0, A.bG)([K.A], () => K.A.getAnyStreamForUser(a)),
            C = (0, b.rm)(a),
            y = (0, A.bG)([V.A], () => V.A.canUserViewChannel(n.id, l, a)),
            v = h?.id != null && h.id === r,
            N = s.useCallback(
                (e) => {
                    null != h &&
                        (0, I.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("94881"),
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("60195"),
                                t.e("94000"),
                                t.e("91994"),
                                t.e("76665"),
                                t.e("24198"),
                                t.e("23427"),
                                t.e("43116"),
                                t.e("70515"),
                                t.e("66939"),
                                t.e("24966"),
                            ]).then(t.bind(t, 175269));
                            return (t) => (0, i.jsx)(e, { ...t, user: h, guildId: n.guild_id, channel: n });
                        });
                },
                [h, n],
            ),
            _ = s.useCallback(() => {
                if (null == h) return;
                let e = `@${ei.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                et._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    et._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    R.A.startTyping(n.id);
            }, [h, n]),
            T = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, k.K4)({
                            guildId: n.guild_id,
                            location: { section: er.JJy.THREAD_MEMBER_LIST, object: er.ZSU.BOOST_GEM_ICON },
                        });
                },
                [n.guild_id],
            ),
            S = (0, D.r)({ user: h, guildId: n.guild_id }),
            [L, O] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, i.jsx)(q.A, {
            targetElementRef: d,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: E.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: _,
            shouldShow: L,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: t, onMouseDown: l, ...s } = e;
                return (0, i.jsx)(ea.A, {
                    ref: d,
                    onContextMenu: N,
                    shouldAnimateStatus: ec,
                    user: h,
                    currentUser: m,
                    nick: c?.nick,
                    status: x,
                    activities: f,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: o,
                    channel: n,
                    guildId: n.guild_id,
                    isMobile: p,
                    selected: L,
                    applicationStream: j,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: C,
                    lostPermissionTooltipText: y ? void 0 : Y.intl.string(Y.t["/QcoTz"]),
                    isOwner: v,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? _?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        L ? e.stopPropagation() : l?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    eh = s.memo(function (e) {
        let { id: n, label: t, count: l, guildId: s } = e,
            a = (0, G.$7)({ roleId: n, guildId: s, size: 16 });
        return n === er.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: eo.lL, children: (0, i.jsx)("div", { className: eo.k1 }) })
            : (0, i.jsxs)(P.A, {
                  className: eo.lL,
                  "aria-label": Y.intl.formatToPlainString(Y.t.Uaqbke, { title: t, count: l }),
                  children: [
                      null != a ? (0, i.jsx)(U.A, { className: eo.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", l] }),
                  ],
              });
    }),
    eA = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === er.rbe.PRIVATE_THREAD
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: ed.yF }),
                      (0, i.jsxs)(y.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, i.jsx)(v.X, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              Y.intl.string(Y.t.BTLTAs),
                          ],
                      }),
                      (0, i.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: ed.GA,
                          children: Y.intl.string(Y.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function em(e) {
    var n;
    let t,
        l,
        a,
        d,
        o,
        { channel: c, guild: h } = e,
        m = `members-${c.id}`,
        { analyticsLocations: g } = (0, M.Ay)(O.A.MEMBER_LIST),
        x = (function (e, n) {
            (0, F.Ay)(() => {
                n?.id != null && (0, w.Ey)(n.id, e, H.LD);
            });
            let t = (0, A.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: l, members: i } = (0, A.cf)([V.A], () => ({
                    version: V.A.getMemberListVersion(e),
                    members: V.A.getMemberListSections(e),
                })),
                a = null == n,
                r = s.useMemo(() => {
                    if (a) return z;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: Y.intl.string(Y.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: Y.intl.string(Y.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: i?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, i, l, a]);
            return null != i ? r : z;
        })(c.id, h),
        p = x.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: j } =
            ((n = m),
            (t = (0, A.bG)([L.A], () => L.A.keyboardModeEnabled)),
            (l = s.useRef(null)),
            (a = s.useCallback(
                (e, n) => {
                    let t = l.current;
                    if (null == t) return;
                    let i = parseInt(n, 10),
                        [s, a] = t.getSectionRowFromIndex(i),
                        r = 42 * (0 === s && 0 === a);
                    t.scrollToIndex({
                        section: s,
                        row: a,
                        padding: r,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [42],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = l.current;
                        if (null == n) return e();
                        n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (o = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = l.current;
                        if (null == n) return e();
                        n.scrollToBottom({
                            callback() {
                                requestAnimationFrame(() => setTimeout(e, 100));
                            },
                        });
                    }),
                [],
            )),
            {
                navigator: (0, C.Ay)({ id: n, setFocus: a, isEnabled: t, scrollToStart: d, scrollToEnd: o }),
                listRef: l,
            }),
        I = 0 === x.length || x.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        I)
    )
        return (0, i.jsx)(eg, { channel: c });
    let E = u().omit(f.containerProps, ["ref"]),
        y = el.wT(h);
    return (0, i.jsx)(M.f5, {
        value: g,
        children: (0, i.jsx)(b.hD, {
            navigator: f,
            children: (0, i.jsx)(N.sk, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: r()(eo.yg, eo.ML, ed.kL),
                        children: (0, i.jsx)(
                            _.OZ,
                            {
                                ref: j,
                                className: eo.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = x[n];
                                    return (0, i.jsx)(
                                        eh,
                                        { id: t.id, label: t.label, count: t.userIds.length, guildId: h.id },
                                        t.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: n, row: t } = e,
                                        { userIds: l, id: s } = x[n];
                                    return (0, i.jsx)(
                                        eu,
                                        { channel: c, sectionId: s, userId: l[t], guildOwnerId: y },
                                        l[t],
                                    );
                                },
                                footerHeight: (e) => 80 * (x[e] === p && c.type === er.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    x[e.section] === p ? (0, i.jsx)(eA, { channel: c }, "footer") : null,
                                innerAriaLabel: Y.intl.string(Y.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: x.map((e) => e.userIds.length),
                                fade: !0,
                                ...E,
                                ...e,
                            },
                            m,
                        ),
                    }),
            }),
        }),
    });
}
function eg(e) {
    let { channel: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(ed.p$, ed.kL, eo.yg, eo.ML, eo.ol),
        children: [
            (0, i.jsx)(y.E, {
                className: ed.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: Y.intl.string(Y.t["9Oq93m"]),
            }),
            (0, i.jsxs)("div", {
                className: ed.hs,
                children: [
                    (0, i.jsx)("div", {
                        className: ed.AI,
                        children: (0, i.jsx)(T.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, i.jsx)(ee.A, { className: ed.WA }),
                ],
            }),
            (0, i.jsx)(S.D, {
                variant: "heading-md/semibold",
                children: n.isForumPost() ? Y.intl.string(Y.t.p0UgNQ) : Y.intl.string(Y.t["9/n5vz"]),
            }),
            (0, i.jsx)(y.E, {
                className: ed.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: Y.intl.string(Y.t.emw8UP),
            }),
        ],
    });
}
var ex = t(738876),
    ep = t(456412),
    ef = t(432371),
    ej = t(475743),
    eI = t(933958),
    eb = t(702841),
    eC = t(567249),
    eE = t(811024),
    ey = t(969151),
    ev = t(108959),
    eN = t(990078),
    e_ = t(446576),
    eT = t(817281),
    eS = t(95561),
    eR = t(587837),
    eL = t(982484),
    eO = t(742023),
    eM = t(204651),
    eD = t(383831),
    eP = t(128286),
    ek = t(734057),
    eG = t(309010),
    eU = t(795816),
    ew = t(685399),
    eF = t(216418),
    eH = t(620148),
    eB = t(732637),
    eV = t(104171),
    eW = t(47294),
    eY = t(594007),
    ez = t(16961),
    eq = t(138017),
    eK = t(715482),
    eX = t(315502),
    eQ = t(222823),
    e$ = t(234320),
    eZ = t(5867),
    eJ = t(702321);
function e0(e) {
    let { channelId: n, className: t, ...l } = e,
        a = s.useRef(null),
        r = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eU.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: l } = (0, A.cf)(
                    [eQ.Ay],
                    () => ({ unreadCount: eQ.Ay.getUnreadCount(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: l, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            a.current?.focus();
        }, []);
    (0, e$.Vo)({ event: er.jej.FOCUS_CHAT_BUTTON, handler: h });
    let m = r ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        g = [m];
    u > 0 && g.push(Y.intl.formatToPlainString(Y.t["3l1GOx"], { mentionCount: u })),
        o > 0 && g.push(Y.intl.string(Y.t.x5zAGZ));
    let x = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        p = u > 0 ? u : o,
        f = p > 0;
    return (0, i.jsxs)("div", {
        className: eJ.iE,
        children: [
            (0, i.jsx)(eM.l, {
                isTrayButton: !0,
                buttonRef: a,
                onClick: d,
                label: m,
                "aria-label": g.join(", "),
                tooltipPosition: "top",
                iconComponent: x === eZ.E8.NO_CHAT ? eq.j : eK.g,
                themeable: !0,
                className: t,
                ...l,
            }),
            f ? (0, i.jsx)(eX.A, { hasMentions: u > 0, truncatedCount: p > 99 ? "99+" : p, className: eJ.qS }) : null,
        ],
    });
}
var e1 = t(141160);
let e2 = eV.DN.SIZE_32,
    e3 = { [eZ.E8.NO_CHAT]: e1.Oo, [eZ.E8.RESIZABLE]: e1.Ig };
function e9(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: l } = e,
        a = (0, eH.A)(),
        d = (0, A.yK)([eI.Ay], () => eI.Ay.getEmbeddedActivitiesForLocation(t), [t]),
        o = (0, ey.H)(t),
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(o)),
        u = (0, ew.IQ)(d),
        h = (0, ew.Rz)(u),
        m = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        g = s.useRef(null),
        x = (0, A.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        p = x !== eZ.E8.NO_CHAT,
        [j, I] = s.useState(eO.Ay.activityPanelHeight ?? n ?? null),
        b = s.useCallback((e) => {
            eT.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = s.useRef(null),
        [E, v] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            v({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return e.observe(C.current), () => e.disconnect();
    }, []);
    let N = E.width / Math.max(E.height, 1) < eZ.B5,
        _ = 0,
        T = 0,
        S = (0, eF.A)(a?.id);
    if (!S) {
        let e = E.width,
            n = E.height;
        N
            ? ((n = E.width / eZ.B5) > E.height && (e = (n = E.height) * eZ.B5), (T = (E.height - n) / 2))
            : ((e = Math.min(E.height * eZ.B5)) > E.width && (n = (e = E.width) / eZ.B5), (_ = (E.width - e) / 2));
    }
    let R = h.get(a?.id ?? ""),
        O = (0, A.bG)([eG.A], () => eG.A.getChannelId()),
        M = (0, A.yK)(
            [X.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => X.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        D = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
        P = (function (e, n, t) {
            let l = (0, ej.A)(e),
                i = e !== l,
                [a, r] = s.useState(!1);
            s.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let d = !L.A.useReducedMotion && (i || a);
            return s.useMemo(() => {
                let l = d
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != n && null != t ? { ...l, minHeight: 200, maxHeight: t, height: n } : l;
            }, [d, e, t, n]);
        })(p, j, n),
        k = (0, ez.G)();
    if (null == a) return null;
    let G = [];
    null != R &&
        (G = Array.from(R.embeddedActivity.userIds)
            .map((e) => J.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let U = (e) => {
        if (null == e || void 0 === e || e === eV.mt) return null;
        let n = D.get(e.id),
            t = n?.nick ?? ei.Ay.getName(e);
        return (0, i.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e2), alt: t, className: e1.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(f.N, {
        theme: er.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(e1.iE, e3[x], e),
                ref: g,
                style: P,
                children: [
                    l?.(),
                    (0, i.jsx)(eL.A, { applicationId: a.id }),
                    (0, i.jsxs)("div", {
                        className: e1.lq,
                        children: [
                            p
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e1.wx,
                                      children: (0, i.jsx)(y.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: e1.qd,
                                          children: a?.name,
                                      }),
                                  }),
                            (0, i.jsx)("div", {
                                className: r()(e1.ht, { [e1.kK]: S }),
                                style: { paddingLeft: _, paddingRight: _, paddingTop: T, paddingBottom: T },
                                ref: C,
                                children: (0, i.jsx)(eB.A, { className: e1.pU, embedId: (0, eY.A)(t.id, a.id) }),
                            }),
                            null != O
                                ? (0, i.jsxs)("div", {
                                      className: e1.qr,
                                      children: [
                                          (0, i.jsx)(eV.Ay, {
                                              renderIcon: !1,
                                              users: G,
                                              size: e2,
                                              max: 6,
                                              renderUser: U,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e1.Hq,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e1.qi,
                                                      children: [
                                                          (0, i.jsx)(e0, { channelId: O }),
                                                          (0, i.jsx)(eM.l, {
                                                              isTrayButton: !0,
                                                              label: Y.intl.string(Y.t.brPQ5U),
                                                              onClick: m,
                                                              iconComponent: e_.g,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e1.pt,
                                                      children: (0, i.jsx)(eD.A, {
                                                          applicationId: a.id,
                                                          location: t,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          k
                                              ? (0, i.jsx)(eP.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, eS.zV)(er.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, eW.A)({
                                                                onConfirm: async () => {
                                                                    a?.id != null &&
                                                                        null != o &&
                                                                        (await (0, eU.od)(a.id, o)),
                                                                        (0, eU.jp)();
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
                    p && null != n
                        ? (0, i.jsx)(eR.A, {
                              minHeight: 480,
                              maxHeight: n,
                              resizableNode: g,
                              onResize: (e) => {
                                  et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), I(e);
                              },
                              onResizeEnd: (e) => {
                                  et._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), b(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
function e7(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: l,
            connectedActivity: s,
            activityPanelMode: a,
        } = (0, eb.cf)([eI.Ay], () => {
            let e = eI.Ay.getConnectedActivityLocation(),
                n = eI.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ey.H)(e),
                connectedActivity: n,
                activityPanelMode: eI.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eb.bG)([eC.A], () => eC.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, eE.Gp)(l)) return null;
    let d = s?.applicationId;
    return a !== eZ.Gd.PANEL || null == d || r || null == l || null == s || (0, ev.A)(l)
        ? null
        : (0, i.jsx)(e9, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e5 = t(90804),
    e4 = t(748975),
    e8 = t(323073),
    e6 = t(568598),
    ne = t(313961),
    nn = t(164617),
    nt = t(355622),
    nl = t(689874),
    ni = t(828488),
    ns = t(939249),
    na = t(408278),
    nr = t(624479),
    nd = t(691540),
    no = t(857250),
    nc = t(97483),
    nu = t(534890),
    nh = t(39623),
    nA = t(952270),
    nm = t(835835),
    ng = t(381849),
    nx = t(927813),
    np = t(995273),
    nf = t(957565),
    nj = t(935208),
    nI = t(256331),
    nb = t(141850),
    nC = t(958720),
    nE = t(701952),
    ny = t(84593);
function nv(e, n) {
    if (e.length !== n.length) return !1;
    for (let t = 0; t < e.length; t++) if (e[t].conversation.id !== n[t].conversation.id) return !1;
    return !0;
}
let nN = ["high", "medium", "low"],
    n_ = s.memo(function (e) {
        let { moderation: n } = e,
            t = null != n && 1 === n.status,
            l = null != n && !n.flaggedTitle && !n.flaggedSummary && !n.flaggedKeyPoints,
            a = s.useMemo(() => {
                if (null == n) return { passed: 0, failed: 0, unknown: 0 };
                let e = n.flaggedMessageCount ?? n.flaggedMessageIds.length,
                    t = n.totalMessageCount ?? 0,
                    l = 0,
                    i = 0;
                return (
                    null == n.flaggedMessageCount && 0 === n.flaggedMessageIds.length
                        ? (i = t)
                        : null != n.flaggedMessageCount
                          ? (l = Math.max(0, t - e))
                          : (i = Math.max(0, t - e)),
                    { passed: l, failed: e, unknown: i }
                );
            }, [n]),
            r =
                null == n
                    ? "unknown"
                    : a.failed > 0
                      ? "failed"
                      : a.unknown > 0
                        ? "unknown"
                        : a.passed > 0
                          ? "passed"
                          : "unknown",
            d =
                null != n
                    ? (n.flaggedSummaryDetails.find((e) => {
                          var t;
                          return (
                              e.severity ===
                              ((t = n.flaggedSummaryDetails.map((e) => e.severity)),
                              nN.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            o = d?.severity ?? null,
            c = d?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: ny.UO,
            children: [
                (0, i.jsx)(y.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: ny.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: ny.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ny.a7,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : t ? "status-positive" : "status-danger",
                                    children: null == n ? "\u2014" : t ? "\u2713" : "\u2717",
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != n &&
                                    !t &&
                                    null != n.statusReason &&
                                    (0, i.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: n.statusReason,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ny.a7,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : l ? "status-positive" : "status-danger",
                                    children: null == n ? "\u2014" : l ? "\u2713" : "\u2717",
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != n &&
                                    !l &&
                                    (0, i.jsxs)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                n.flaggedTitle && "title",
                                                n.flaggedSummary && "summary",
                                                n.flaggedKeyPoints && "key points",
                                            ]
                                                .filter(Boolean)
                                                .join(", "),
                                            " ",
                                            "flagged",
                                        ],
                                    }),
                                null != n &&
                                    !l &&
                                    (null != o || null != c) &&
                                    (0, i.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [o, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ny.a7,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == n || "unknown" === r
                                            ? "text-muted"
                                            : "passed" === r
                                              ? "status-positive"
                                              : "status-danger",
                                    children:
                                        null == n || "unknown" === r ? "\u2014" : "passed" === r ? "\u2713" : "\u2717",
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != n &&
                                    (a.passed > 0 || a.failed > 0 || a.unknown > 0) &&
                                    (0, i.jsx)(y.E, {
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
    nT = s.memo(function (e) {
        let { conversation: n, color: t, scrollTarget: l, onJump: a } = e,
            r = s.useRef(null);
        s.useEffect(() => {
            null != l && null != r.current && r.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [l]);
        let d = nj.default.extractTimestamp(n.startMessageId),
            o = nj.default.extractTimestamp(n.endMessageId),
            c = (function (e) {
                let { timestamp: n, abbreviated: t = !0 } = e,
                    [l, i] = s.useState(() => (0, np.jb)(n, t));
                return (
                    s.useEffect(() => {
                        i((0, np.jb)(n, t));
                        let e = Date.now() - n;
                        if (e > nx.A.Millis.DAY) return;
                        let l = e >= nx.A.Millis.HOUR ? nx.A.Millis.HOUR : nx.A.Millis.MINUTE,
                            s = setInterval(
                                () => {
                                    i((0, np.jb)(n, t));
                                },
                                l,
                                l - (e % l),
                            );
                        return () => clearInterval(s);
                    }, [n, t]),
                    l
                );
            })({ timestamp: d }),
            u = Math.max(1, Math.round((o - d) / 1e3)),
            h = (0, ng.WR)({ seconds: u, getFormatter: ng.i }),
            A = n.summaryMap?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summaryType),
            m = null != A ? (0, nE.i)(A.contentJson) : null;
        return (0, i.jsxs)(ns.D, {
            innerRef: r,
            className: ny.Nm,
            style: { backgroundColor: t },
            onClick: () => a(n),
            children: [
                (0, i.jsxs)("div", {
                    className: ny.PY,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: null != m ? "text-default" : "text-muted",
                            className: ny.So,
                            children: m?.title ?? "Summary not available",
                        }),
                        (0, i.jsx)(na.K, {
                            icon: nr.T,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, nf.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nd.P0)((0, no.o)("Copied conversation JSON", nc.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, i.jsxs)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: ny.FR,
                    children: [
                        c,
                        " ago \xb7 ",
                        h,
                        " duration \xb7 ",
                        n.messageCount,
                        " messages \xb7 ",
                        n.userCount,
                        " users",
                    ],
                }),
                m?.brief_summary != null &&
                    (0, i.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: ny.g5,
                        children: m.brief_summary,
                    }),
                null != m &&
                    m.key_points.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: ny.JP,
                        children: m.key_points.map((e, n) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    children: (0, i.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                n,
                            ),
                        ),
                    }),
                (0, i.jsxs)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: ny.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: ny.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ny.UO,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: ny.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: ny.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ny.a7,
                                    children: [
                                        (0, i.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, i.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: ny.a7,
                                    children: [
                                        (0, i.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, i.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: ny.a7,
                                    children: [
                                        (0, i.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.dynamics?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, i.jsx)(y.E, {
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
                (0, i.jsx)(n_, { moderation: n.moderation }),
            ],
        });
    });
function nS(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nC.A], () => nC.A.getChannelConversations(n.id), [n.id], nv),
        l = (0, A.bG)([nC.A], () => nC.A.hasMoreConversations(n.id, "before"), [n.id]),
        a = (0, A.bG)([nC.A], () => nC.A.hasMoreConversations(n.id, "after"), [n.id]),
        r = (0, A.bG)([nC.A], () => nC.A.isPendingFetch(n.id), [n.id]),
        d = (0, A.bG)([nI.A], () => nI.A.isHighlightingEnabled(), []),
        o = (0, A.bG)([nC.A], () => nC.A.getScrollToConversation(n.id), [n.id]),
        c = s.useCallback((e) => {
            (0, nb.xI)(e.channelId, e.id);
        }, []);
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: ny.zr,
        children: [
            (0, i.jsx)(nm.Y9, {
                icon: nu.o,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: ny.y6,
                    children: (0, i.jsx)(na.K, {
                        icon: d ? nh.b : nA.G,
                        "aria-label": d ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: nb.Eg,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ny.Qs,
                children: [
                    l &&
                        (0, i.jsx)("div", {
                            className: ny.f,
                            children: (0, i.jsx)(ns.D, {
                                className: ny.Qf,
                                onClick: function () {
                                    if (0 === t.length || r) return;
                                    let e = t[0].conversation;
                                    (0, nb.WF)({ channelId: n.id, before: e.startMessageId });
                                },
                                children: (0, i.jsx)(y.E, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: r ? "Loading..." : "Load previous conversations",
                                }),
                            }),
                        }),
                    0 !== t.length || r
                        ? t.map((e) => {
                              let { conversation: n, color: t } = e;
                              return (0, i.jsx)(
                                  nT,
                                  {
                                      conversation: n,
                                      color: t,
                                      scrollTarget: o?.conversationId === n.id ? o.seq : null,
                                      onJump: c,
                                  },
                                  n.id,
                              );
                          })
                        : (0, i.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: ny.BI,
                              children: "No conversations available.",
                          }),
                    a &&
                        (0, i.jsx)("div", {
                            className: ny.f,
                            children: (0, i.jsx)(ns.D, {
                                className: ny.Qf,
                                onClick: function () {
                                    if (0 === t.length || r) return;
                                    let e = t[t.length - 1].conversation;
                                    (0, nb.WF)({ channelId: n.id, after: e.endMessageId });
                                },
                                children: (0, i.jsx)(y.E, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: r ? "Loading..." : "Load newer conversations",
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
var nR = t(268218),
    nL = t(726249),
    nO = t(228366),
    nM = t(334738),
    nD = t(208882),
    nP = t(938764),
    nk = t(519480),
    nG = t(352123),
    nU = t(222983),
    nw = t(478927);
let nF = (e) => {
    let { guild: n, onAddGuild: l } = e,
        a = s.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("38057"),
                    t.e("59957"),
                    t.e("28136"),
                    t.e("16084"),
                    t.e("87317"),
                    t.e("22547"),
                ]).then(t.bind(t, 1310));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guild: n,
                        source: er.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: er.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [n]);
    return (0, i.jsxs)("div", {
        className: nw.h2,
        children: [
            (0, i.jsx)("img", { className: nw.hd, alt: "", src: t(668778) }),
            (0, i.jsx)(S.D, {
                className: nw._U,
                variant: "heading-xl/semibold",
                children: Y.intl.format(Y.t.vyvrpC, { guildName: n.name }),
            }),
            (0, i.jsx)(y.E, { variant: "text-md/normal", className: nw.YI, children: Y.intl.string(Y.t.WypE0i) }),
            null != l
                ? (0, i.jsx)(nU.E, {
                      className: nw.c5,
                      iconUrl: t(928202),
                      header: Y.intl.string(Y.t.hyK15i),
                      completed: !1,
                      onClick: l,
                  })
                : null,
            (0, i.jsx)(nU.E, {
                className: nw.c5,
                iconUrl: t(799258),
                header: Y.intl.string(Y.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nH = t(892547),
    nB = t(689175),
    nV = t(761508),
    nW = t(765671),
    nY = t(22231),
    nz = t(365199),
    nq = t(66834),
    nK = t(573435),
    nX = t(101555),
    nQ = t(548118),
    n$ = t(714991),
    nZ = t(776231),
    nJ = t(345942),
    n0 = t(71393),
    n1 = t(486020),
    n2 = t(860689),
    n3 = t(682557),
    n9 = t(253607);
let n7 = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, i.jsxs)(ns.D, {
        onClick: n,
        className: n9.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, i.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: n9.Kk,
                children: Y.intl.string(Y.t.H9jxS1),
            }),
        ],
    });
});
function n5(e) {
    let { entry: n } = e,
        [l, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nG.A)(n);
    return (0, i.jsx)("div", {
        className: r()(n9.fc, { [n9.QX]: l }),
        children: (0, i.jsxs)(nX.Ay, {
            children: [
                o
                    ? (0, i.jsx)(eN.m, {
                          text: Y.intl.string(Y.t.XnuOvN),
                          children: (0, i.jsx)(nX.$n, {
                              onClick: () => {
                                  (0, g.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("25226"), t.e("88869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, i.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": Y.intl.string(Y.t.XnuOvN),
                              children: (0, i.jsx)(nY.R, { size: "xs", color: "currentColor", className: n9.IQ }),
                          }),
                      })
                    : null,
                (0, i.jsx)(n3.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, i.jsx)(eN.m, {
                            text: Y.intl.string(Y.t["UKOtz+"]),
                            children: (0, i.jsx)(nX.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                                children: (0, i.jsx)(nz.j, { size: "md", color: "currentColor", className: n9.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let n4 = s.memo(function (e) {
    let { entry: n } = e,
        [l, a] = s.useState(!1),
        r = null != (0, A.bG)([n0.A], () => n0.A.getGuild(n.guildId)),
        d = async () => {
            a(!0);
            try {
                r ? (0, nJ.u)(n.guildId) : await nq.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        o = n1.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, nZ.mZ)() }),
        c = n1.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = Y.intl.string(Y.t.VJlc0S);
    return (
        r && (u = Y.intl.string(Y.t.cqWE2Z)),
        (0, i.jsxs)("div", {
            className: n9.Nr,
            onContextMenu: (e) => {
                (0, I.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, i.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, i.jsxs)("div", {
                    className: n9.MY,
                    children: [
                        (0, i.jsx)("div", {
                            className: n9.Yi,
                            children: null != o && (0, i.jsx)("img", { src: o, alt: "", className: n9.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: n9.$f,
                            children: (0, i.jsx)(nK.Ay, {
                                mask: nK.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: n9.SA,
                                    children: (0, i.jsx)(nQ.Ay, {
                                        className: n9.rZ,
                                        iconSrc: c,
                                        guild: (0, n2.xi)(n),
                                        size: nQ.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: n9.OA,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n9.DD,
                            children: [
                                (0, i.jsx)(n$.A, { className: n9.n2, guild: n }),
                                (0, i.jsx)(y.E, {
                                    className: n9.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(y.E, {
                            className: n9.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, i.jsxs)("div", {
                            className: n9.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, i.jsxs)("div", {
                                        className: n9.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: n9.JX }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Y.intl.format(Y.t["LC+S+m"], {
                                                    membersOnline: n.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != n.approximateMemberCount &&
                                    (0, i.jsxs)("div", {
                                        className: n9.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: n9.Li }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Y.intl.format(Y.t.zRl6XR, {
                                                    count: n.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: n9.PD,
                            children: (0, i.jsx)(p.$, {
                                loading: l,
                                variant: r ? "secondary" : "active",
                                onClick: d,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(n5, { entry: n }),
            ],
        })
    );
});
var n8 = t(946116),
    n6 = t(562845),
    te = t(519094);
let tn = (e) => {
        let { searchQuery: n, setSearchQuery: t, handleClearSearch: l, handleSearchKeyPress: s } = e,
            { ref: a, width: d } = (0, nW.Ay)(),
            o = null != d && d <= 800;
        return (0, i.jsxs)("div", {
            ref: a,
            className: te.wx,
            children: [
                (0, i.jsx)("img", {
                    alt: "",
                    className: te.F0,
                    src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
                }),
                (0, i.jsx)("div", {
                    className: te.AZ,
                    children: (0, i.jsxs)("div", {
                        className: r()(te.VW, { [te.eO]: o }),
                        children: [
                            (0, i.jsx)(S.D, {
                                variant: "heading-xl/semibold",
                                className: te.dc,
                                children: Y.intl.string(Y.t.IT7qoC),
                            }),
                            (0, i.jsx)(y.E, {
                                variant: "text-md/normal",
                                className: te.R_,
                                children: Y.intl.string(Y.t["5PoYts"]),
                            }),
                            (0, i.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: r()(te.MT, e),
                                        children: (0, i.jsx)(nH.I, {
                                            query: n,
                                            "aria-label": Y.intl.string(Y.t.nL2wKD),
                                            placeholder: Y.intl.string(Y.t.nL2wKD),
                                            onChange: t,
                                            onClear: l,
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
    tt = (e) => {
        let {
            channel: n,
            directoryEntries: t,
            handleCreateOrAddGuild: l,
            searchQuery: a,
            setSearchQuery: r,
            handleClearSearch: d,
            handleSearchKeyPress: o,
            currentCategoryId: c,
            handleSelectCategory: u,
            categoryCounts: h,
            allEntriesCount: A,
            isLoading: m,
        } = e;
        return (0, i.jsx)("div", {
            className: n6.$$,
            children: (0, i.jsxs)(nB.Gt, {
                className: n6.XG,
                children: [
                    (0, i.jsx)(tn, {
                        searchQuery: a,
                        setSearchQuery: r,
                        handleClearSearch: d,
                        handleSearchKeyPress: o,
                    }),
                    (0, i.jsx)(nB.Ch, {
                        orientation: "horizontal",
                        children: (0, i.jsxs)(nV.V, {
                            className: te.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: (e) => {
                                u(e);
                            },
                            children: [
                                (0, i.jsx)(
                                    nV.V.Item,
                                    {
                                        className: te.YU,
                                        id: n8.mU.ALL,
                                        children: `${Y.intl.string(Y.t.hEAa2a)} (${A})`,
                                    },
                                    n8.mU.ALL,
                                ),
                                (0, n8.g2)(n.id).map((e) => {
                                    let { value: n, label: t } = e;
                                    return (0, i.jsx)(
                                        nV.V.Item,
                                        {
                                            className: te.YU,
                                            id: n,
                                            children: `${t} ${null != h[n] ? `(${h[n]})` : ""}`,
                                        },
                                        n,
                                    );
                                }),
                            ],
                        }),
                    }),
                    m && null == t
                        ? (0, i.jsx)(x.y, { className: n6.u1 })
                        : t?.map((e, n) =>
                              (0, i.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, i.jsx)(y.E, {
                                                    variant: "text-md/semibold",
                                                    className: te.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, i.jsxs)("div", {
                                              className: n6.vY,
                                              children: [
                                                  e.entries.map((e) => (0, i.jsx)(n4, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != l ? (0, i.jsx)(n7, { onClick: l }) : null,
                                              ],
                                          }),
                                      ],
                                  },
                                  n,
                              ),
                          ),
                ],
            }),
        });
    };
var tl = t(370876),
    ti = t(349288),
    ts = t(364522),
    ta = t(792831),
    tr = t(916815);
let td = (e) => {
    let n,
        {
            searchQuery: t,
            setSearchQuery: l,
            mostRecentQuery: s,
            handleClearSearch: a,
            handleSearchKeyPress: r,
            handleCreateOrAddGuild: d,
            searchResults: o,
            searchFetching: c,
        } = e;
    if (c) n = (0, i.jsx)("div", { className: n6.$$, children: (0, i.jsx)(x.y, { className: n6.u1 }) });
    else if (0 === o.length) {
        let e =
            null != d
                ? Y.intl.format(Y.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, i.jsx)(ti.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : Y.intl.string(Y.t.vYyEnv);
        n = (0, i.jsxs)("div", {
            className: tr.Je,
            children: [
                (0, i.jsx)("img", { className: tr.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, i.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: tr.gR,
                    children: Y.intl.string(Y.t["6HXiuE"]),
                }),
                (0, i.jsx)(y.E, { variant: "text-md/normal", color: "text-default", className: tr.av, children: e }),
            ],
        });
    } else n = (0, i.jsx)("div", { className: n6.vY, children: o.map((e) => (0, i.jsx)(n4, { entry: e }, e.guildId)) });
    return (0, i.jsx)("div", {
        className: n6.$$,
        children: (0, i.jsxs)(ts.Ar, {
            className: n6.XG,
            children: [
                (0, i.jsxs)("div", {
                    className: tr.wL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tr.Dr,
                            children: [
                                (0, i.jsx)(ns.D, {
                                    onClick: a,
                                    className: tr.UE,
                                    children: (0, i.jsx)(ta.A, { direction: ta.A.Directions.LEFT }),
                                }),
                                (0, i.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    className: tr.s7,
                                    children: Y.intl.format(Y.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(nH.I, {
                            query: t,
                            "aria-label": Y.intl.string(Y.t.nL2wKD),
                            placeholder: Y.intl.string(Y.t.nL2wKD),
                            onChange: l,
                            onClear: a,
                            onKeyDown: r,
                        }),
                    ],
                }),
                n,
            ],
        }),
    });
};
var to = t(650583);
let tc = (e) => {
    let { channel: n, guild: l } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nk.A], () => {
            let e = nk.A.getCurrentCategoryId(n.id),
                t = nk.A.getDirectoryEntries(n.id, e === n8.mU.ALL ? null : e),
                l = nk.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: l,
                allEntriesCount: nk.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nk.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                nO.h.wait(() => {
                    (0, nM.ack)(
                        n.id,
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
        [n.id],
    );
    let u = s.useMemo(
            () =>
                null != r
                    ? (function (e, n) {
                          if (n !== n8.mU.ALL) return [{ entries: (0, tl._t)(e), appendEndCard: !0 }];
                          let t = [],
                              l = (0, tl.A3)(e),
                              i = new Set(l.map((e) => e.guildId));
                          l.length > 0 && t.push({ header: Y.intl.string(Y.t.CbaapP), entries: l, appendEndCard: !1 });
                          let s = e.filter((e) => !i.has(e.guildId));
                          return (
                              (s = (0, tl.DN)(s)).length > 0 &&
                                  t.push({ header: Y.intl.string(Y.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(r), a)
                    : null,
            [r, a],
        ),
        {
            mostRecentQuery: h,
            searchFetching: m,
            searchResults: p,
        } = (0, A.cf)([nP.A], () => {
            let { mostRecentQuery: e, fetching: t } = nP.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nP.A.getSearchResults(n.id, e) };
        }),
        [f, j] = s.useState(h),
        I = "" !== h,
        b = { mostRecentQuery: h },
        C = s.useRef(b);
    s.useEffect(() => {
        C.current = b;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            nD.Yc(n.id), nD.YS(n.id), j(e);
        }, [n.id]),
        s.useEffect(() => {
            en.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: l.id,
                primary_category_id: a,
            });
        }, [n.id, l.id, a]);
    let E = (0, nG.b)(n),
        y = s.useMemo(
            () =>
                E
                    ? () => {
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("79924"),
                                  t.e("25226"),
                                  t.e("72891"),
                                  t.e("54046"),
                                  t.e("19580"),
                                  t.e("97804"),
                                  t.e("56856"),
                                  t.e("96349"),
                              ]).then(t.bind(t, 579735));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      directoryGuildName: l.name,
                                      directoryGuildId: l.id,
                                      directoryChannelId: n.id,
                                      currentCategoryId: a === n8.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [E, l.name, l.id, n.id, a],
        ),
        v = (e) => {
            0 !== f.trim().length &&
                e.key === to.dh.ENTER &&
                (nD.Se(n.id, f),
                en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: n.id,
                    directory_guild_id: l.id,
                }));
        },
        N = () => {
            j(""), nD.BA(n.id);
        };
    return I
        ? (0, i.jsx)(td, {
              searchQuery: f,
              setSearchQuery: j,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: m,
          })
        : null == u && null == a
          ? (0, i.jsx)("div", { className: n6.$$, children: (0, i.jsx)(x.y, { className: n6.u1 }) })
          : u?.length === 0 && null == a
            ? (0, i.jsx)("div", { className: n6.$$, children: (0, i.jsx)(nF, { guild: l, onAddGuild: y }) })
            : (0, i.jsx)(tt, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: j,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: (e) => {
                      nD.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: d,
                  allEntriesCount: o,
                  isLoading: c,
              });
};
var tu = t(826673),
    th = t(313281),
    tA = t(47167),
    tm = t(806202),
    tg = t(58736),
    tx = t(353428),
    tp = t(976860),
    tf = t(111956),
    tj = t.n(tf),
    tI = t(922016),
    tb = t(980707),
    tC = t(477782),
    tE = t(811893),
    ty = t(789645),
    tv = t(163126),
    tN = t(182061),
    t_ = t(886393),
    tT = t(307623),
    tS = t(660273),
    tR = t(707792),
    tL = t(41402),
    tO = t(271456),
    tM = t(200273),
    tD = t(565846),
    tP = t(57907),
    tk = t(375500),
    tG = t(707653),
    tU = t(50268),
    tw = t(584682),
    tF = t(378570),
    tH = t(713608),
    tB = t(473503),
    tV = t(901472),
    tW = t(267102),
    tY = t(474397),
    tz = t(486974),
    tq = t(221314);
function tK(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        l = (0, tW.aL)(),
        a = Y.intl.string(tq.default["Beo/7v"]),
        { firstMessage: r } = (0, tB.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, i.jsx)(tg.Ay.Icon, {
              onClick: () => {
                  (0, tF.iN)(n.id),
                      (0, tY.A)(),
                      (0, tV.z)(n.guild_id, o, n.id, {
                          modViewPanel: tz.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      l.dispatch(er.jej.POPOUT_CLOSE);
              },
              tooltip: a,
              icon: tH.q,
              "aria-label": a,
          })
        : null;
}
var tX = t(780338),
    tQ = t(782603),
    t$ = t(857071),
    tZ = t(607508),
    tJ = t(914703),
    t0 = t(37411);
function t1(e) {
    let { channel: n } = e,
        t = (0, tZ.X)(n),
        [l, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, A.bG)([t$.A], () => null != n.guild_id && t$.A.isLurking(n.guild_id));
    if (
        (s.useEffect(() => {
            let e = () => a(!0);
            return (
                et._.subscribe(er.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    et._.unsubscribe(er.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        d)
    )
        return null;
    let o = Y.intl.string(Y.t.h850Ss);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: r,
        shouldShow: l,
        animation: tI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, i.jsx)(tJ.A, { ...e, channel: n, navId: "thread-context", label: Y.intl.string(Y.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: l } = n;
            return (0, i.jsx)(tg.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: l ? null : o,
                icon: t === t0.CP.NO_MESSAGES ? tX.a : tQ.X,
                "aria-label": o,
                selected: l,
            });
        },
    });
}
var t2 = t(747926);
function t3(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        l((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(t9, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tg.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nz.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function t9(e) {
    let { channel: n, closePopout: t, onSelect: l } = e,
        s = (0, tS.A)(n, "Sidebar Overflow"),
        a = (0, tL.A)(n),
        r = (0, tP.A)(n),
        d = (0, tk.A)(n),
        o = (0, tN.A)(n),
        c = (0, tR.A)(n),
        u = (0, tD.A)(n.id),
        h = (0, tM.A)(n),
        A = (0, tT.A)(n),
        m = (0, t_.A)(n),
        g = (0, tU.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        x = (0, tG.A)(n),
        p = (0, tO.A)(n),
        f = (0, tv.$)(1e3);
    function j() {
        (0, tF.iN)(n.id);
    }
    function I(e) {
        let t = tj()(() => {
                et._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, l), e();
            }, 250),
            l = (e) => {
                e.channelId === n.id && t();
            };
        et._.subscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, l),
            f.addEventListener("abort", () => {
                et._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, l);
            });
    }
    return (0, i.jsxs)(tb.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(tC.rX, {
                children: [s, (0, i.jsx)(tC.Dr, { id: "open", label: Y.intl.string(Y.t.IxVmZi), action: j })],
            }),
            (0, i.jsxs)(tC.rX, { children: [r, d] }),
            (0, i.jsxs)(tC.rX, { children: [h, a, u, p] }),
            (0, i.jsxs)(tC.rX, {
                children: [
                    (0, i.jsx)(tC.Dr, {
                        id: "search",
                        label: Y.intl.string(Y.t["5h0QOP"]),
                        icon: tE.t,
                        trailingIndicator: { type: "icon", icon: tE.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                j();
                        },
                    }),
                    (0, i.jsx)(tC.Dr, {
                        id: "pins",
                        label: Y.intl.string(Y.t["2BSH7n"]),
                        icon: tE.t,
                        trailingIndicator: { type: "icon", icon: tE.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                j();
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(tC.rX, { children: [x, o, c, A] }),
            (0, i.jsxs)(tC.rX, { children: [m, g] }),
        ],
    });
}
function t7(e) {
    let { channel: n, baseChannelId: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.isForumPost() ? null : (0, i.jsx)(t1, { channel: n }),
            n.isModeratorReportChannel() ? (0, i.jsx)(tK, { channel: n }) : null,
            (0, i.jsx)(t3, { channel: n }),
            (0, i.jsx)(tg.Ay.Icon, {
                icon: ty.P,
                tooltip: Y.intl.string(Y.t.cpT0Cq),
                onClick: () => (0, t2.xu)((0, tw.j)(n), t ?? n.parent_id),
            }),
        ],
    });
}
var t5 = t(31717),
    t4 = t(853742),
    t8 = t(224517);
function t6(e) {
    let { channelId: n } = e,
        l = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, A.bG)([ek.A], () => ek.A.getChannel(l?.parent_id)),
        r = (0, A.bG)([n0.A], () => n0.A.getGuild(l?.getGuildId())),
        d = (0, tA.Ay)(l),
        o = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == l || o.current || ((o.current = !0), (0, t4.rH)(l));
        }, [l]),
        null == l || null == r)
    )
        return null;
    let c = (0, i.jsx)(t7, { channel: l });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ex.A, { channel: l, draftType: t5.C.ChannelMessage }),
            (0, i.jsx)(tg.Ay, {
                toolbar: c,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tx.zF)({
                    channel: l,
                    parentChannel: a,
                    channelName: d,
                    guild: r,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, I.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("26132"),
                                t.e("38730"),
                                t.e("34971"),
                                t.e("84615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, i.jsx)(e, { ...n, channel: l });
                        });
                    },
                    handleClick: function () {
                        null != l && (0, tp.uh)(l.guild_id, l.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: t8.T,
                children: (0, i.jsx)(tm.A, { channel: l, guild: r, chatInputType: nt.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var le = t(91242),
    ln = t(857253),
    lt = t(872363);
let ll = function (e, n) {
    nO.h.wait(() => {
        nO.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var li = t(561446),
    ls = t(300233),
    la = t(499211),
    lr = t(468689),
    ld = t(529942),
    lo = t(739455),
    lc = t(328312);
function lu(e) {
    let { guildId: n } = e;
    return (0, i.jsx)("div", {
        className: lc.t7,
        children: (0, i.jsxs)("div", {
            className: lc.Zj,
            children: [
                (0, i.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, i.jsxs)("div", {
                    className: lc.xw,
                    children: [
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["8gJGPs"]) }),
                        (0, i.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: lc.G3,
                            children: Y.intl.string(Y.t.GpOWIi),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: lc.__invalid_button,
                            children: (0, i.jsx)(p.$, {
                                variant: "primary",
                                text: Y.intl.string(Y.t["I/XhUn"]),
                                onClick: () => {
                                    (0, ld.rf)(n),
                                        lr.A.open(n, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, lo.Fx)(n);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var lh = t(599941),
    lA = t(251766),
    lm = t(950344),
    lg = t(217530),
    lx = t(817649),
    lp = t(601099);
function lf(e) {
    let { guildId: n, channelId: t } = e,
        l = (0, lA.e)({ guildId: n, channelId: t }),
        a = (0, lh.uk)(n),
        r = (0, lh.Tq)(n),
        d = (0, A.bG)([n0.A], () => n0.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(t)),
        u = (0, tA.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, lm.A)({
        guildId: n,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: l.map((e) => e.id),
    }),
    null == d)
        ? (0, i.jsx)("div", {
              className: lp.__invalid_spinnerContainer,
              children: (0, i.jsx)(x.y, { className: lp.__invalid_spinner }),
          })
        : (0, i.jsxs)(ts.Ar, {
              className: lp.$$,
              children: [
                  (0, i.jsx)(S.D, {
                      variant: "heading-xl/semibold",
                      className: lp.DX,
                      children: Y.intl.format(Y.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, i.jsx)(y.E, {
                      className: lp.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, i.jsx)(lg.A, {
                      children: l
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, i.jsx)(
                                  lx.A,
                                  {
                                      guildId: n,
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
var lj = t(41e4),
    lI = t(18707),
    lb = t(604681),
    lC = t(761640),
    lE = t(678959);
function ly(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([lC.Ay], () => lC.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        l = (0, A.bG)([nC.A], () => nC.A.getChannelConversations(n).length > 0, [n]);
    return (0, i.jsx)(tg.In, {
        onClick: lb.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nu.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: l ? lE.q : void 0,
        selected: t,
        showBadge: l,
    });
}
var lv = t(967198);
function lN(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([lC.Ay], () => lC.Ay.getSection(n)),
        l = (0, A.bG)([lv.A], () => lv.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, i.jsx)(tg.In, {
        tooltip: s ? Y.intl.string(Y.t.Axvx8c) : Y.intl.string(Y.t.gxChDx),
        icon: T.n,
        onClick: () => {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: l, member_list_open: !s }),
                lb.A.toggleMembersSection();
        },
        selected: s,
    });
}
var l_ = t(187360),
    lT = t(366605),
    lS = t(945830);
let lR = function (e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        [l, a] = s.useState(!1),
        r = (0, A.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(n.id), [n]),
        d = (0, tW.aL)(),
        o = s.useRef(null),
        c = s.useCallback(() => {
            t || a((e) => !e);
        }, [t]);
    function u(e) {
        e?.shiftKey || d.dispatch(er.jej.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                et._.subscribe(er.jej.TOGGLE_CHANNEL_PINS, c),
                () => {
                    et._.unsubscribe(er.jej.TOGGLE_CHANNEL_PINS, c);
                }
            ),
            [c],
        ),
        (0, i.jsx)(tI.Y, {
            targetElementRef: o,
            shouldShow: l,
            animation: tI.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => a(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(lS.A, { ...e, onJump: u, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(tg.In, {
                    ...e,
                    ref: o,
                    onClick: c,
                    tooltip: l ? null : Y.intl.string(Y.t["mp1N/2"]),
                    icon: lT.t,
                    iconSize: 20,
                    "aria-label": Y.intl.string(Y.t["mp1N/2"]),
                    disabled: t,
                    showBadge: r,
                    selected: l,
                });
            },
        })
    );
};
var lL = t(306788),
    lO = t(863922),
    lM = t(822074),
    lD = t(521732);
function lP(e) {
    let { channel: n } = e,
        t = (0, e8.ni)(n),
        l = (0, A.bG)([lM.A], () => lM.A.shouldShowTopicsBar());
    return (0, i.jsx)(tg.Ay.Icon, {
        icon: lL.K,
        onClick: () => {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !l,
                source: lD.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, lO.Oz)();
        },
        tooltip: l ? Y.intl.string(Y.t.nGs3kO) : Y.intl.string(Y.t.bIm2sF),
        selected: l,
        "aria-expanded": l,
        disabled: t,
    });
}
var lk = t(885574),
    lG = t(947094),
    lU = t(919577),
    lw = t(207777),
    lF = t(422844),
    lH = t(435470),
    lB = t(892110),
    lV = t(45494);
function lW(e) {
    let { channel: n } = e,
        t = (0, lH.S4)(n),
        l = (0, A.bG)([lG.A], () => lG.A.hasHidden(n.id)),
        s = (0, lB.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, lF.R)(n.id),
        o = (0, A.bG)(
            [lw.A, lV.A],
            () => !!(lw.A.getThreadIds(n.id, a, r, d).length > 0) || !!(lV.A.getThreads(n.id, a, r, d).length > 0),
            [n.id, a, r, d],
        ),
        c = n.isMediaChannel();
    if (!t || s || (c && o)) return null;
    let u = l
        ? c
            ? Y.intl.string(Y.t["WP/IE1"])
            : Y.intl.string(Y.t.zfq9V4)
        : c
          ? Y.intl.string(Y.t.p60yF1)
          : Y.intl.string(Y.t.SNOqYC);
    return (0, i.jsx)(tg.In, {
        tooltip: u,
        icon: lk.m,
        onClick: () => lU.A.hideAdminOnboarding(n.id, !l),
        selected: !l,
    });
}
var lY = t(742589),
    lz = t(43105),
    lq = t(428689),
    lK = t(978940),
    lX = t(387755),
    lQ = t(730852),
    l$ = t(641703),
    lZ = t(379848),
    lJ = t(753727),
    l0 = t(222692),
    l1 = t(442353),
    l2 = t(470710),
    l3 = t(186111),
    l9 = t(761853),
    l7 = t(994500),
    l5 = t(977997),
    l4 = t(360469),
    l8 = t(49999),
    l6 = t(731854);
class ie extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        et._.subscribe(er.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        et._.unsubscribe(er.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: l,
                isBlocked: s,
                channel: a,
                mode: r,
                isProvisional: d,
            } = this.props;
        if (n || (t && r === er._Of.VOICE)) return null;
        let o = a.isManaged(),
            c = null,
            u = !1;
        return (
            d
                ? ((u = !0), (c = Y.intl.string(Y.t.izMR7o)))
                : l9.Ay.supports(l6.O5.VIDEO)
                  ? s
                      ? ((c = Y.intl.string(Y.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = Y.intl.string(Y.t.UVpg3U))),
            (0, i.jsx)(tg.Ay.Icon, { icon: lq.n, onClick: e, disabled: u || l, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: l,
                isBlocked: s,
                channel: a,
                dismissibleContentTypes: r,
                isProvisional: d,
            } = this.props;
        if (n) return null;
        let o = a.isManaged(),
            c = !1;
        d
            ? ((c = !0), (e = Y.intl.string(Y.t.izMR7o)))
            : l
              ? ((e = o ? Y.intl.string(Y.t.LW2Ghr) : Y.intl.string(Y.t.rF7lN5)), (c = !0))
              : s
                ? ((e = Y.intl.string(Y.t.PHzjvX)), (c = !0))
                : (e = t
                      ? o
                          ? Y.intl.string(Y.t.S0W8Z5)
                          : Y.intl.string(Y.t.fdEeb5)
                      : o
                        ? Y.intl.string(Y.t.S0W8Z5)
                        : Y.intl.string(Y.t.focH1t));
        let u = (0, i.jsx)(tg.Ay.Icon, {
            ref: this.iconRef,
            icon: lK._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u,
                (0, i.jsx)(lZ.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, i.jsx)(lz.A, {
                                  targetElementRef: this.iconRef,
                                  title: Y.intl.string(Y.t.HOPqzR),
                                  body: Y.intl.format(Y.t.xAW71b, { helpdeskUrl: l4.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(l8.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, i.jsxs)(s.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, n) => {
        let { channel: t, notFriend: l, appContext: i } = this.props,
            s = l ? t.getRecipientId() : null,
            a = () => lX.A.call(t.id, n, !l && !t.isManaged() && !e?.shiftKey, s);
        n ? (0, l1.A)(a, i) : a();
    };
    handleJoinCall = (e) => {
        lQ.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: l } = this.props;
        if (
            (l.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tu.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: l8.i.AUTO }),
            n)
        );
        else if (t) return this.handleJoinCall(!1);
        else return this.handleStartCall(e, !1);
    };
    handleStartVideoCall = (e) => {
        this.handleStartCall(e, !0);
    };
    handleJoinVideoCall = () => {
        let { appContext: e } = this.props,
            n = () => this.handleJoinCall(!0);
        (0, l1.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, l0.A)();
    };
}
function it(e) {
    let { channel: n } = e,
        t = (0, lJ.A)(),
        l = (0, A.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, A.bG)([l5.A], () => l5.A.isInChannel(n.id)),
        a = (0, A.bG)([L.A], () => L.A.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([l2.A], () => ({
            callActive: l2.A.isCallActive(n.id),
            callUnavailable: l2.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([l7.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !l7.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && l7.A.isBlocked(o),
        })),
        h = (0, A.bG)([J.default], () => J.default.getUser(o)),
        g = (0, tW.Us)(),
        x = [],
        p = (0, l$.A)(n.id),
        f = (0, A.bG)([l3.A], () => l3.A.hasLayers());
    return (p && !f && x.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, i.jsx)(ie, {
              channel: n,
              mode: l,
              inCall: s,
              callActive: r,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: d,
              notFriend: c,
              isBlocked: u,
              appContext: g,
              dismissibleContentTypes: x,
              useReducedMotion: a,
          });
}
var il = t(880682),
    ii = t(765178),
    is = t(231483),
    ia = t(544231),
    ir = t(338510),
    id = t(151119),
    io = t(278941),
    ic = t(665909),
    iu = t(327337);
let ih = s.memo(function (e) {
    let { channel: n } = e,
        l = (0, ir.u)(n.id),
        a = (0, id.S)(n.id),
        r = (0, io.e)(n.id),
        d = (0, g.useHasAnyModalOpen)(),
        o = (0, A.bG)([l3.A], () => l3.A.hasLayers()),
        c = s.useCallback(
            () => (a ? Y.intl.string(Y.t["16QyDv"]) : null != r ? Y.intl.string(Y.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, m] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != l &&
            (ii.O.announce(Y.intl.string(Y.t.acsXuG)),
            setTimeout(() => {
                (0, ia.xi)(n.id, [r.id]);
            }, 5e3),
            (0, ic.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: ic.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (ii.O.announce(Y.intl.string(Y.t["1dxCqG"])),
                setTimeout(() => {
                    (0, ia.bg)(n.id);
                }, 5e3));
    }, [n, r, l, a]),
        (0, F.Ay)(() => {
            null != l &&
                (0, ic.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: l.id,
                    warningType: l.type,
                    isNudgeWarning: null != r,
                    viewName: ic.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, ia.xi)(n.id, [r.id]),
            null != l &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("25028"),
                            t.e("6627"),
                            t.e("70940"),
                            t.e("2033"),
                            t.e("19959"),
                        ]).then(t.bind(t, 131882));
                        return (t) => {
                            let { onClose: s, transitionState: a } = t;
                            return (0, i.jsx)(e, {
                                otherUserId: n.getRecipientId(),
                                channelId: n.id,
                                warningId: l.id,
                                warningType: l.type,
                                onClose: s,
                                transitionState: a,
                            });
                        };
                    },
                    { modalKey: iu.V },
                ),
                (0, ic._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: l.id,
                    warningType: l.type,
                    cta: ic.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != r,
                }));
    }, [r, l, n]);
    return null == l
        ? null
        : (0, i.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, i.jsx)(tg.Ay.Icon, {
                  icon: is.l,
                  onClick: x,
                  tooltip: Y.intl.string(Y.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var iA = t(262763),
    im = t(406704),
    ig = t(576705);
let ix = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lJ.A)(),
        l = (0, A.bG)([l5.A], () => l5.A.isInChannel(n.id)),
        a = (0, A.bG)([l5.A], () => !u().isEmpty(l5.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([ig.A], () => ig.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, la.A)(n.id),
        o = (0, im.Id)(n),
        { enabled: c } = im.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            iA.A.handleVoiceConnect({ channel: n, connected: l, needSubscriptionToAccess: d, locked: !1 });
        }, [n, l, d]);
    return (s.useEffect(() => {
        if (c)
            return (
                et._.subscribe(er.jej.CALL_START, h),
                () => {
                    et._.unsubscribe(er.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !t && !l && r && o && n.isVocalThread())
        ? (0, i.jsx)(tg.Ay.Icon, {
              icon: lK._,
              onClick: h,
              tooltip: a ? Y.intl.string(Y.t.fdEeb5) : Y.intl.string(Y.t.focH1t),
          })
        : null;
});
var ip = t(812991),
    ij = t(47675),
    iI = t(999291);
function ib() {
    let [e, n] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            let e = () => {
                n(window.innerWidth >= 1132);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
function iC(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        l = (0, A.bG)([lC.Ay], () => lC.Ay.getSection(n.id, n?.isDM())),
        s = (0, iI.Ay)(n.getRecipientId()),
        a = ib(),
        r = l === er.YvQ.PROFILE && a;
    return (0, i.jsx)(tg.In, {
        disabled: !a || t,
        tooltip: !a || t ? Y.intl.string(Y.t.YneDgF) : r ? Y.intl.string(Y.t.niD64e) : Y.intl.string(Y.t["+FAsHq"]),
        icon: ip.n,
        onClick: () => {
            (0, ij.am)({ displayProfile: s, isProfileOpen: !r }), lb.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let iE = {};
class iy extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            iE[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = iE[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return iE;
    }
}
let iv = new iy(nO.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            l = iE[t];
        return null == l ? ((iE[t] = new Set()), iE[t].add(n), !0) : !l.has(n) && (l.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != iE[n.id] && !n.unavailable && (delete iE[n.id], !0);
    },
});
var iN = (((l = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), l),
    i_ = t(376943),
    iT = t(394953),
    iS = t(709066),
    iR = t(87664);
t(667532);
var iL = t(403362);
let iO = [],
    iM = es.Ay.getEnableHardwareAcceleration();
function iD(e) {
    let { user: n, channel: l, status: a, activities: r } = e,
        d = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(l.id)[n.id]),
        o = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, A.bG)([l7.A], () => l7.A.getNickname(n.id)),
        h = (0, iR.A)(n.id),
        m = s.useRef(null),
        g = (e) => {
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("94881"),
                    t.e("26132"),
                    t.e("46652"),
                    t.e("93190"),
                    t.e("89673"),
                    t.e("60195"),
                    t.e("97558"),
                    t.e("94000"),
                    t.e("91994"),
                    t.e("76665"),
                    t.e("24198"),
                    t.e("45996"),
                    t.e("792"),
                    t.e("92822"),
                    t.e("23427"),
                    t.e("29422"),
                    t.e("9291"),
                    t.e("7059"),
                    t.e("28864"),
                ]).then(t.bind(t, 778595));
                return (t) => (0, i.jsx)(e, { ...t, user: n, channel: l });
            });
        },
        x = () => {
            let e = `@${ei.Ay.getUserTag(n, { decoration: "never" })}`,
                t = `<@${n.id}>`;
            et._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: l.id }),
                et._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                R.A.startTyping(l.id);
        },
        p = (0, D.r)({ user: n }),
        [f, j] = s.useState(!1);
    return (0, i.jsx)(q.A, {
        targetElementRef: m,
        user: n,
        channelId: l.id,
        position: E.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: x,
        shouldShow: f,
        onRequestClose: () => j(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...A } = e;
            return (0, i.jsx)(
                ea.A,
                {
                    ref: m,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === l.ownerId,
                    ownerTooltipText: Y.intl.string(Y.t["MRXZ+x"]),
                    shouldAnimateStatus: iM,
                    isTyping: d,
                    status: a,
                    activities: r,
                    applicationStream: h,
                    channel: l,
                    onContextMenu: g,
                    selected: f,
                    isMobile: c,
                    nick: u,
                    nameplate: p,
                    onClick: (e) => {
                        e.shiftKey ? x?.() : j((e) => !e);
                    },
                    onMouseDown: (e) => {
                        f ? e.stopPropagation() : s?.(e);
                    },
                    ...A,
                },
                n.id,
            );
        },
    });
}
function iP(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let l = e.listItems[t],
            i = n.listItems[t];
        if (l.user !== i.user || l.status !== i.status || l.activities !== i.activities) return !1;
    }
    return !0;
}
function ik(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        l = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, A.bG)(
            [l7.A, J.default, Q.A],
            () => {
                var e, t;
                let l =
                        ((e = n.recipients),
                        (t = J.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(iL.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    i = {};
                for (let e of l)
                    l7.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (i[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? iO,
                          })
                        : (i[e.id] = { status: er.clD.OFFLINE, activities: iO });
                let s = [];
                for (let e of l) {
                    let n = { user: e, status: i[e.id].status, activities: i[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            iP,
        );
    s.useEffect(() => {
        en.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let d = l && r.every((e) => e.user.isStaff());
    return (0, i.jsx)(M.f5, {
        value: a,
        children: (0, i.jsx)("div", {
            className: eo.kL,
            children: (0, i.jsx)("aside", {
                className: eo.yg,
                children: (0, i.jsxs)(ts.Ip, {
                    className: eo.ol,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(P.A, {
                            className: eo.lL,
                            children: [
                                `${Y.intl.string(Y.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, i.jsx)(iS.A, { type: iS.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, i.jsx)(
                                iD,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                    ],
                }),
            }),
        }),
    });
}
var iG = t(961974),
    iU = t(853279),
    iw = t(85942);
function iF() {
    return (0, i.jsx)("div", {
        className: iw.zt,
        children: (0, i.jsx)("header", {
            className: iU.wL,
            children: (0, i.jsxs)("div", {
                className: iU.TN,
                role: "status",
                children: [
                    (0, i.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: Y.intl.string(Y.t.uixzLf),
                    }),
                    (0, i.jsx)("div", {
                        className: iU.zp,
                        children: (0, i.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: iU.u1,
                            itemClassName: iU.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var iH = t(138298),
    iB = t(940382),
    iV = t(288254),
    iW = t(873614),
    iY = t(790535),
    iz = t(163328),
    iq = t(425557),
    iK = t(270003),
    iX = t(150934),
    iQ = t(452027),
    i$ = t(292666),
    iZ = t(511274),
    iJ = t(465532),
    i0 = t(579872),
    i1 = t(119031),
    i2 = t(408018),
    i3 = t(201349),
    i9 = t(822610),
    i7 = t(915089),
    i5 = t(314307),
    i4 = t(636922),
    i8 = t(931664),
    i6 = t(631576),
    se = t(885386),
    sn = t(232835),
    st = t(522602),
    sl = t(806150),
    si = t(518960),
    ss = t(753738);
function sa(e, n) {
    return { type: e, message: n ?? null };
}
function sr(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sd = t(659617),
    so = t(474078),
    sc = t(636537),
    su = t(152367),
    sh = t(147087);
async function sA(e) {
    try {
        let n = await sc.Bo.post({
            url: er.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return n.ok ? (n.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
var sm = t(55294),
    sg = t(790158),
    sx = t(415296);
let sp = nt.oU.THREAD_CREATION;
function sf(e) {
    let { parentChannelId: n, parentMessageId: t, location: l } = e,
        s = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        { analyticsLocations: a } = (0, M.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, i.jsx)(M.f5, {
              value: a,
              children: (0, i.jsx)(e$.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": Y.intl.string(Y.t.rBIGBL),
                      className: sg.kL,
                      children: [
                          (0, i.jsx)(ex.A, { channel: s, draftType: t5.C.FirstThreadMessage }),
                          (0, i.jsx)(sj, { parentChannelId: n }),
                          (0, i.jsx)(sI, { parentChannel: s, parentMessageId: t, location: l }),
                      ],
                  }),
              }),
          });
}
function sj(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = t5.A.getThreadSettings(n),
                t = t5.A.getDraft(n, t5.C.FirstThreadMessage).trim(),
                l = st.A.getUploads(n, t5.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== l.length
                ? i0.A.show({
                      title: Y.intl.string(Y.t["6kDZh1"]),
                      body: Y.intl.string(Y.t.NgS9jX),
                      confirmText: Y.intl.string(Y.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Y.intl.string(Y.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t2.bA)(n);
                      },
                  })
                : (0, t2.bA)(n);
        }, [n]);
    return (0, i.jsxs)(tg.Ay, {
        toolbar: (0, i.jsx)(tg.Ay.Icon, { icon: ty.P, tooltip: Y.intl.string(Y.t.cpT0Cq), onClick: t }),
        children: [
            (0, i.jsx)(tg.Ay.Icon, { icon: iz.y, disabled: !0, "aria-label": Y.intl.string(Y.t["7Xm5QI"]) }),
            (0, i.jsx)(tg.Ay.Title, { children: Y.intl.string(Y.t["4WNcpu"]) }),
        ],
    });
}
function sI(e) {
    let n,
        { parentChannel: t, parentMessageId: l, location: a } = e,
        d = (0, A.bG)([L.A], () => L.A.messageGroupSpacing),
        o =
            ((n = s.useContext(e$.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([t5.A], () => t5.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [l, i] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        i((e) => ({ ...e, ...t })), iJ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: l, setThreadSettings: i, updateThreadSettings: a };
        })(t, l),
        { textAreaState: m, setTextAreaState: g } = (function (e, n) {
            let [t, l] = s.useState((0, i2.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let i = t5.A.getDraft(e.id, t5.C.FirstThreadMessage);
                        (0 === i.length || !0 === t) && l((0, i2.ur)(i)), n(t5.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        t5.A.addChangeListener(t),
                        () => {
                            t5.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: l }
            );
        })(t, u),
        x = (0, sd.EN)(t),
        {
            isGeneratingAI: p,
            enableAIFeatures: f,
            getThreadNameInputAccessory: j,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    updateThreadSettings: l,
                    threadSettings: a,
                    textAreaState: r,
                } = e,
                [d, o] = s.useState(!1),
                [c, u] = s.useState(!1),
                h = (0, sh.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let l = sn.A.getMessage(n.id, t);
                                e = l?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sA(e);
                                null != n && "" !== n.trim() && l({ name: n });
                            }
                        } finally {
                            o(!1);
                        }
                    }
                }, [n.id, t, l, h, r.textValue]);
            s.useEffect(() => {
                u(!1), o(!1), n.id === a.parentChannelId && t !== a.parentMessageId && l({ name: "" });
            }, [t, l, n.id, a.parentChannelId, a.parentMessageId]),
                s.useEffect(() => {
                    (null != a.name && "" !== a.name.trim()) || c || (h && null != t && (u(!0), A()));
                }, [n.id, t, l, a.name, c, h, A]);
            let m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: su.D,
                                onClick: A,
                                "aria-label": Y.intl.string(Y.t.ZF2oBs),
                                disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                tooltip: Y.intl.string(Y.t.ZF2oBs),
                                loading: d,
                            };
                    },
                    [h, A, d, t, r.textValue],
                ),
                g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, i.jsx)(eN.m, {
                                  text: Y.intl.string(Y.t.ZF2oBs),
                                  children: (0, i.jsx)(na.K, {
                                      icon: su.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": Y.intl.string(Y.t.ZF2oBs),
                                      onClick: A,
                                      disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                      loading: d,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, d, t, r.textValue, A],
                );
            return {
                isGeneratingAI: d,
                generateAIName: A,
                enableAIFeatures: h,
                renderAiGenerateButton: g,
                getThreadNameInputAccessory: m,
            };
        })({ parentChannel: t, parentMessageId: l, updateThreadSettings: h, threadSettings: c, textAreaState: m }),
        {
            nameError: I,
            messageError: b,
            submit: C,
            submitting: E,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: l,
                    privateThreadMode: i,
                    textAreaState: a,
                    location: r,
                    enableAIFeatures: d,
                } = e,
                [o, c] = s.useState(null),
                [u, h] = s.useState(null),
                [A, m] = s.useState(!1),
                g = (0, sm.A)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: l,
                    privateThreadMode: i,
                    location: r,
                    onThreadCreated: t2.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: o,
                messageError: u,
                submit: s.useCallback(
                    async (e, i, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        m(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == i || 0 === i.length) &&
                                (i = i8.A.getStickerPreview(n.id, sp.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = st.A.getUploads(n.id, t5.C.FirstThreadMessage));
                        let r = (l.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == i || 0 === i.length) && 0 === s.length;
                        if (
                            (c(o ? sa(0, Y.intl.string(Y.t.uXA573)) : null),
                            h(u ? sa(0, Y.intl.string(Y.t.kesTVT)) : null),
                            o || u)
                        )
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, sl.i)({
                            content: e,
                            stickers: i,
                            uploads: s,
                            type: sp,
                            channel: null == t ? n : null,
                        });
                        if (!x) return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, i, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), sa(1, (0, ss.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(sa(2, Y.intl.string(Y.t.uXA573)));
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, i6.x5)(n.id, sp.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [g, a.textValue, l.name, t, n, A, d],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: l,
            threadSettings: c,
            privateThreadMode: x,
            textAreaState: m,
            location: a,
            enableAIFeatures: f,
        }),
        y = (0, sd.Iy)(c, x) ? iq.t : iz.y;
    return (0, i.jsx)("div", {
        className: sg.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, i.jsx)("div", {
            className: r()(sg.Og, `group-spacing-${d}`),
            children: (0, i.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sg.Zd,
                children: [
                    (0, i.jsx)(ts.Ip, {
                        className: sg.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: sg.bv,
                            children: [
                                (0, i.jsxs)(i5.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: r()(sx.P0, sg.P0),
                                            children: (0, i.jsx)(y, { className: sx.Kk }),
                                        }),
                                        (0, i.jsxs)(iK.n, {
                                            children: [
                                                (0, i.jsx)(sC, {
                                                    parentChannel: t,
                                                    parentMessageId: l,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: I,
                                                    disabled: E,
                                                    isGeneratingAI: p,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: j,
                                                }),
                                                t.type === er.rbe.GUILD_TEXT
                                                    ? (0, i.jsx)(sb, {
                                                          startedFromMessage: null != l,
                                                          threadSettings: c,
                                                          updateThreadSettings: h,
                                                          privateThreadMode: x,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(sy, { parentChannel: t, parentMessageId: l }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: sg.Eh,
                        children: [
                            (0, i.jsx)(sE, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: g,
                                submit: C,
                                error: b,
                            }),
                            (0, i.jsx)(i1.Ay, {
                                channel: t,
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
function sb(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: l, privateThreadMode: s } = e,
        a = (0, sd.Iy)(t, s),
        r = (0, i.jsx)(iX.S, {
            disabled: s === sd.jk.PrivateOnly,
            checked: a,
            onChange: (e) => l({ isPrivate: e }),
            label: Y.intl.string(Y.t.TRPp3g),
        });
    return n || s === sd.jk.Disabled
        ? null
        : (0, i.jsx)(iQ.D, {
              label: Y.intl.string(Y.t.F1zyvU),
              helperText: a ? Y.intl.string(Y.t.EWXycz) : void 0,
              children: r,
          });
}
function sC(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: l,
            updateThreadSettings: s,
            error: a,
            disabled: r,
            isGeneratingAI: d,
            enableAIFeatures: o,
            getThreadNameInputAccessory: c,
        } = e,
        u = l.name ?? "",
        h = sr(a, { content: u }),
        A = (0, sd.l1)(n, t),
        m = null != t && !o,
        g = (0, i7.GV)(),
        x = o ? Y.intl.string(Y.t["Nb2/RE"]) : "" !== A ? A : Y.intl.string(Y.t["Nb2/RE"]);
    return (0, i.jsx)(i$.k, {
        label: Y.intl.string(m ? Y.t.JPvIiL : Y.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
        placeholder: x,
        maxLength: er.Ign,
        onChange: (e) => {
            s({ name: (0, so.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: () => {
            let e = (0, so.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sE(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: l, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        m = s.useCallback(() => c(!1), []),
        g = s.useCallback(
            (e, t, i) => {
                iJ.A.saveDraft(n.id, t, t5.C.FirstThreadMessage),
                    l(
                        (e) => (
                            "" !== t && e.textValue !== t ? R.A.startTyping(n.id) : "" === t && R.A.stopTyping(n.id),
                            { textValue: t, richValue: i }
                        ),
                    );
            },
            [n.id, l],
        ),
        x = s.useCallback(
            (e) => {
                let { value: n, uploads: t, stickers: l } = e;
                return a(n, l, t);
            },
            [a],
        );
    (0, e$.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, e$.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: m });
    let p = (0, A.bG)([ig.A], () => ig.A.can(er.xBc.ATTACH_FILES, n)),
        f = sr(d, { content: t.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(i9.A, { channelId: n.id, type: sp, canAttachFiles: p }),
            (0, i.jsx)("div", { className: sg.xN, children: (0, i.jsx)(iZ.U, { error: f }) }),
            (0, i.jsx)(i3.Ay, {
                type: sp,
                channel: n,
                placeholder: Y.intl.string(Y.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sg.gM, sg.Yy),
                innerClassName: r()(sg.SL, { [sg.cr]: null != f }),
                onFocus: h,
                onBlur: m,
                onChange: g,
                onSubmit: x,
                promptToUpload: si.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sy(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        l = (0, A.bG)([sn.A], () => (null == t ? null : sn.A.getMessage(n.id, t))),
        s = se.hH.useSetting();
    return null != l
        ? (0, i.jsx)(i4.A, {
              className: sg.IL,
              message: l,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sv = t(305866),
    sN = t(707539),
    s_ = t(702513),
    sT = t(614879);
function sS(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e8.ni)(n),
        d = s.useCallback(() => {
            l(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sN.D3)("Popout"), l(!t);
        }, [t]);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: a,
        animation: tI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(sv.l, {
                children: (0, i.jsx)(s_.A, { className: sT.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tg.In, {
                ...e,
                ref: a,
                className: sT.Kk,
                onClick: o,
                icon: iz.y,
                "aria-label": Y.intl.string(Y.t.B2panI),
                tooltip: t ? null : Y.intl.string(Y.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sR = t(40389);
function sL(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        l((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(sO, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tg.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nz.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sO(e) {
    let { channel: n, closePopout: t, onSelect: l } = e,
        s = (0, tN.A)(n),
        a = (0, tR.A)(n),
        r = (0, tD.A)(n.id),
        d = (0, tM.A)(n),
        o = (0, tU.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        c = (0, t_.A)(n),
        h = (0, tT.A)(n),
        m = (0, tS.A)(n, "Toolbar Overflow"),
        g = (0, tL.A)(n),
        x = (0, sR.A)(n),
        p = (0, tG.A)(n),
        f = (0, tO.A)(n),
        j = se.SY.useSetting(),
        I = (0, A.bG)([l5.A], () => !u().isEmpty(l5.A.getVoiceStatesForChannel(n.id)));
    return (0, i.jsxs)(tb.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(tC.rX, { children: [m, x] }),
            (0, i.jsxs)(tC.rX, {
                children: [
                    d,
                    g,
                    r,
                    j && !I
                        ? (0, i.jsx)(tC.Dr, {
                              id: "open",
                              label: Y.intl.string(Y.t.bX7EaG),
                              action: function () {
                                  (0, t2.JA)(n);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, i.jsxs)(tC.rX, { children: [p, s, a, h] }),
            (0, i.jsxs)(tC.rX, { children: [c, o] }),
        ],
    });
}
var sM = t(332456),
    sD = t(973854),
    sP = t(248537);
function sk(e) {
    var n;
    let l,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, A.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, A.bG)([n0.A], () => n0.A.getGuild(o?.getGuildId())),
        h = (0, tA.Ay)(o);
    (n = o),
        (l = (0, A.bG)([l5.A], () => null != n && !u().isEmpty(l5.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            l &&
                null != n &&
                (nO.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tF.N9)(n, { source: t0.H9.VOICE_AUTO_OPEN }));
        }, [l, n]);
    let m = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || m.current) return;
            m.current = !0;
            let e = (0, sM.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sD.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    let g = (0, i.jsx)(t7, { channel: o, baseChannelId: r });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ex.A, { channel: o, draftType: t5.C.ChannelMessage }),
            (0, i.jsx)(tg.Ay, {
                toolbar: g,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tx.zF)({
                    channel: o,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, I.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("26132"),
                                t.e("38730"),
                                t.e("34971"),
                                t.e("84615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, i.jsx)(e, { ...n, channel: o });
                        });
                    },
                    handleClick: function () {
                        null != o && (0, tF.iN)(o.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: sP.T,
                children: (0, i.jsx)(tm.A, { channel: o, guild: c, chatInputType: nt.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sG = t(210714),
    sU = t(975732),
    sw = t(707554),
    sF = t(140735),
    sH = t(562153),
    sB = t(215530),
    sV = t(454719),
    sW = t(736653),
    sY = t(311016),
    sz = t(480335),
    sq = t(713517),
    sK = t(183555),
    sX = t(718019),
    sQ = t(694720),
    s$ = t(915614),
    sZ = t(308244),
    sJ = t(743987),
    s0 = t(900179),
    s1 = t(946356),
    s2 = t(878555),
    s3 = t(35241),
    s9 = t(587168),
    s7 = t(744808);
let s5 = (0, t(945810).mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var s4 = t(416497);
let s8 = (e) => {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
};
function s6(e) {
    let { context: n, analyticsLocations: t, profileFrame: l, handleOpenProfile: s } = e,
        { showButton: a } = s5.useConfig({ location: "UserProfileSidebarFooter" }),
        r = a
            ? (0, i.jsx)("div", {
                  className: s4.qr,
                  children: (0, i.jsx)(ns.D, {
                      onClick: () => {
                          s(), (0, ij.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
                      },
                      className: s4.wC,
                      children: (0, i.jsx)(y.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: Y.intl.string(Y.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != l
        ? (0, i.jsxs)("div", { className: s4.xQ, children: [(0, i.jsx)(s7.A, { frame: l, filterLayer: s8 }), r] })
        : r;
}
var ae = t(996988),
    an = t(556818),
    at = t(523802);
function al(e) {
    let { user: n, channel: t } = e,
        l = __OVERLAY__ || !(0, sY.A)(n.id),
        a = (0, iI.Ay)(n.id),
        r = (0, sW.Ay)(),
        d = s.useRef(Date.now()),
        { analyticsLocations: o } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        c = (0, sK.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        u = s.useRef(null),
        { isHoveringOrFocusing: h, isHovering: A } = (0, sq.A)(u),
        m = () => {
            (0, sU.openUserProfileModal)({ sourceAnalyticsLocations: o, hideRestrictedProfile: !0, ...c });
        };
    return (0, i.jsx)(M.f5, {
        value: o,
        children: (0, i.jsx)(sK.of, {
            value: c,
            openedAt: d.current,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, i.jsxs)(s1.A, {
                ref: u,
                user: n,
                displayProfile: a,
                themeType: ae.d.SIDEBAR,
                themeOverride: r,
                children: [
                    (0, i.jsxs)(ts.d_, {
                        children: [
                            (0, i.jsx)(s9.A, { children: (0, i.jsx)(s3.A, { user: n }) }),
                            (0, i.jsxs)("div", {
                                className: an.wx,
                                children: [
                                    (0, i.jsx)(s$.A, {
                                        user: n,
                                        displayProfile: a,
                                        themeType: ae.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !h,
                                    }),
                                    (0, i.jsx)(sX.A, {
                                        user: n,
                                        displayProfile: a,
                                        channelId: t.id,
                                        themeType: ae.d.SIDEBAR,
                                        onOpenProfile: l ? void 0 : m,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: at.rf,
                                children: [
                                    (0, i.jsx)(s2.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sH.Ay.getName(null, t.id, n),
                                        onClickName: l ? void 0 : m,
                                        pronouns: a?.pronouns,
                                        trailing: (0, i.jsx)(sQ.A, { displayProfile: a, themeType: ae.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(s1.A.Overlay, {
                                        className: at.Lw,
                                        children: [
                                            (0, i.jsx)(s0.A, {
                                                heading: Y.intl.string(Y.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(sZ.A, {
                                                    userBio: a?.bio,
                                                    userId: n.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: h,
                                                }),
                                            }),
                                            (0, i.jsx)(s0.A, {
                                                heading: Y.intl.string(Y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(sJ.A, { userId: n.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !l && (0, i.jsx)(s6, { handleOpenProfile: m, analyticsLocations: o, context: c }),
                    a?.profileEffect != null && (0, i.jsx)(sz.A, { skuId: a?.profileEffect?.skuId, isHovering: A }),
                ],
            }),
        }),
    });
}
var ai = t(331322),
    as = t(249790),
    aa = t(254828),
    ar = t(783123),
    ad = t(735103);
function ao(e) {
    let { user: n, channel: t, onHide: l } = e,
        a = (0, iI.Ay)(n.id),
        r = (0, sW.Ay)(),
        d = (0, A.bG)([l7.A], () => l7.A.isBlocked(n.id)),
        { analyticsLocations: o } = (0, M.Ay)(d ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        c = (0, sK.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        u = s.useRef(null);
    return (0, i.jsx)(M.f5, {
        value: o,
        children: (0, i.jsx)(sK.of, {
            value: c,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, i.jsx)(s1.A, {
                ref: u,
                user: n,
                displayProfile: a,
                themeType: ae.d.SIDEBAR,
                themeOverride: r,
                children: (0, i.jsx)(ts.d_, {
                    children: (0, i.jsxs)("div", {
                        className: ad.kL,
                        children: [
                            (0, i.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ad.VH,
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: ad.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ad.N1,
                                        children: [
                                            (0, i.jsx)(as.A, { user: n }),
                                            (0, i.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: Y.intl.string(Y.t.b33pLD),
                                            }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: Y.intl.format(d ? Y.t["8F+WNz"] : Y.t["/cZp5s"], {
                                                    username: sH.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ai.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(ar.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    l(),
                                                        (0, ij.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: o,
                                                            ...c,
                                                        });
                                                },
                                            }),
                                            (0, i.jsx)(aa.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    l(),
                                                        (0, ij.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: o,
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
var ac = t(873174),
    au = t(717421),
    ah = t(31956),
    aA = t(361628),
    am = t(673843),
    ag = t(561794),
    ax = t(841595),
    ap = t(679492),
    af = t(439053),
    aj = t(312381),
    aI = t(349419),
    ab = t(984545),
    aC = t(193738),
    aE = t(700174),
    ay = t(983495),
    av = t(695366),
    aN = t(661531),
    a_ = t(922590),
    aT = t(821269),
    aS = t(93246),
    aR = t(351906),
    aL = t(383199),
    aO = t(559506),
    aM = t(361311),
    aD = t(931481),
    aP = t(501193),
    ak = t(383448),
    aG = t(646986),
    aU = t(243166);
function aw(e) {
    let { user: n, currentUser: t, displayProfile: l, channel: s, isHoveringOrFocusing: a, onOpenProfile: r } = e,
        { relationshipType: d, originApplicationId: o } = (0, A.cf)([l7.A], () => ({
            relationshipType: l7.A.getRelationshipType(n.id),
            originApplicationId: l7.A.getOriginApplicationId(n.id),
        })),
        c = (0, a_.fi)(n.id),
        u = (0, aT.q)({ userId: n.id }),
        h = (0, A.bG)([aR.A], () => aR.A.hidePersonalInformation),
        m = (0, A.bG)([ax.A], () => ax.A.getUserProfile(n.id)?.application);
    return (0, i.jsxs)("div", {
        className: at.rf,
        children: [
            (0, i.jsx)(aO.A, { userId: n.id }),
            (0, i.jsx)(s2.Ay, {
                user: n,
                guildId: s.guild_id,
                displayName: sH.Ay.getName(null, s.id, n),
                onClickName: r,
                displayNameTrailing: h ? null : (0, i.jsx)(aU.A, { userId: n.id, isVisible: a, onOpenProfile: r }),
                pronouns: l?.pronouns,
                trailing: (0, i.jsx)(sQ.A, { displayProfile: l, themeType: ae.d.SIDEBAR }),
            }),
            d === er.eA$.PENDING_INCOMING &&
                (0, i.jsx)(s1.A.Overlay, {
                    children: (0, i.jsx)(aD.A, { user: n, channelId: s.id, applicationId: o }),
                }),
            c.map((e) =>
                (0, i.jsx)(
                    s1.A.Overlay,
                    {
                        children: (0, i.jsx)(aD.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(ak.A, { user: n }),
            l?.private &&
                (0, i.jsx)(s1.A.Overlay, { children: (0, i.jsx)(aP.A, { username: sH.Ay.getName(null, s.id, n) }) }),
            n.isProvisional &&
                (0, i.jsx)(s1.A.Overlay, {
                    children: (0, i.jsx)(s0.A, {
                        heading: Y.intl.string(Y.t.Iyka0U),
                        headingIcon: (0, i.jsx)(av.E, { size: "xxs", color: aN.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(aS.T, { userId: n.id }),
                    }),
                }),
            (0, i.jsx)(aG.A, { user: n, currentUser: t, onOpenUserProfileModal: r }),
            (0, i.jsxs)(s1.A.Overlay, {
                className: at.Lw,
                children: [
                    !h &&
                        l?.bio != null &&
                        l?.bio !== "" &&
                        (0, i.jsx)(s0.A, {
                            heading: Y.intl.string(Y.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(sZ.A, {
                                userId: n.id,
                                userBio: l.bio,
                                isHoveringOrFocusing: a,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    m?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(aL.A, {
                            applicationId: m.id,
                            commandIds: m.popularApplicationCommandIds,
                            channel: s,
                        }),
                    u.length > 0 &&
                        (0, i.jsx)(s0.A, {
                            heading: Y.intl.string(Y.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(aM.A, { applicationIds: u }),
                        }),
                    (0, i.jsx)(s0.A, {
                        heading: n.bot ? Y.intl.string(Y.t["A//N4k"]) : Y.intl.string(Y.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(sJ.A, { userId: n.id }),
                    }),
                ],
            }),
        ],
    });
}
var aF = t(114212),
    aH = t(913453),
    aB = t(229187),
    aV = t(21241),
    aW = t(201934),
    aY = t(51943),
    az = t(847374),
    aq = t(320448),
    aK = t(680391);
function aX(e) {
    let { section: n, header: t, items: l, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, sK.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? az.a : aq._;
    return (0, i.jsxs)("section", {
        className: aK.uW,
        children: [
            (0, i.jsxs)(ns.D, {
                className: r()(aK.wx, aK.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    h(!u), u || (o({ action: "PRESS_SECTION", section: n }), d?.());
                },
                children: [
                    (0, i.jsxs)(S.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [t, " \u2014 ", l.length],
                    }),
                    (0, i.jsx)(A, { size: "md" }),
                ],
            }),
            l.length > 0 && (0, i.jsx)("ul", { id: c, hidden: !u, className: r()(aK.p_, a), children: l }),
        ],
    });
}
var aQ = t(54557);
function a$(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: l } = (0, M.Ay)(),
        { context: s } = (0, sK.NJ)(),
        a = (0, tv.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, aH.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, i.jsxs)(s1.A.Overlay, {
              className: aQ.Lw,
              children: [
                  u &&
                      (0, i.jsx)(aX, {
                          section: "MUTUAL_GUILDS",
                          header: Y.intl.string(Y.t["4lTDZq"]),
                          listClassName: aQ.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: l } = e;
                              return (0, i.jsx)(
                                  aY.A,
                                  { user: n, guild: t, nick: l, onSelect: () => (0, nJ.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, i.jsx)(aV.A, { className: aQ.yF }),
                  c &&
                      (0, i.jsx)(aX, {
                          section: "MUTUAL_FRIENDS",
                          header: Y.intl.string(Y.t["0mTJ3j"]),
                          listClassName: aQ.p_,
                          onExpand: () => (0, aB.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: aQ.nC,
                                                children: [
                                                    (0, i.jsx)(aF.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, i.jsx)(aF.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, i.jsx)(
                                            aW.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, sU.openUserProfileModal)({
                                                        ...s,
                                                        userId: a.id,
                                                        sourceAnalyticsLocations: l,
                                                    });
                                                },
                                            },
                                            n,
                                        );
                                    }),
                      }),
              ],
          })
        : null;
}
var aZ = t(123292),
    aJ = t(853735),
    a0 = t(131607),
    a1 = t(84511),
    a2 = t(575593),
    a3 = t(587895),
    a9 = t(44120),
    a7 = t(532794),
    a5 = t(317560),
    a4 = t(533406),
    a8 = t(661492),
    a6 = t(212387),
    re = t(662349),
    rn = t(369005);
function rt(e) {
    let { title: n, description: t, onClick: l } = e;
    return (0, i.jsxs)("div", {
        className: rn.S,
        children: [
            (0, i.jsx)(ns.D, {
                onClick: l,
                className: rn.H,
                children: (0, i.jsx)(y.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: n,
                }),
            }),
            (0, i.jsx)(y.E, { variant: "text-xs/medium", color: "text-default", children: t }),
        ],
    });
}
var rl = t(479026),
    ri = t(699976),
    rs = t(788868),
    ra = t(518477),
    rr = t(80223),
    rd = t(997990);
let ro = ri.Z.SIZE_90;
function rc(e) {
    let {
            sku: n,
            wishlistOwner: t,
            wishlistId: l,
            isSingleCard: a,
            style: d,
            skuPreviewStyle: o,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: A,
            singleCardInfo: m,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, sK.NJ)(),
        x = s.useCallback(() => {
            g({
                action: ra.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: l,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, l, h, g]),
        p = s.useCallback(() => {
            g({
                action: ra.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: l,
                productLines: new Set([n.productLine]),
            }),
                A();
        }, [A, n.id, l, n.productLine, g]),
        { label: f, icon: j, isPromptingPurchase: I } = (0, re.h)({ wishlistOwner: t, isOwned: !1, shortText: !0 }),
        [b, C] = s.useState(!1);
    return (0, i.jsxs)(ai.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: rr.kL,
                children: (0, i.jsx)(a6.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: ro,
                    cardStyle: r()(rr.Nr, d),
                    skuPreviewStyle: r()(rr.ho, o),
                    skuAssetClassName: b ? c : void 0,
                    onClick: x,
                    "aria-label": Y.intl.formatToPlainString(Y.t.ZBB4Ty, { productName: (0, a8.TC)(n) }),
                    onHoverOrFocusChange: C,
                    children: (0, i.jsx)(re.A, {
                        spec: ro,
                        onClick: I ? p : x,
                        isHoveringOrFocusing: b,
                        label: f,
                        icon: j,
                    }),
                }),
            }),
            a && (0, i.jsx)(rt, { title: m.title, description: m.description, onClick: x }),
        ],
    });
}
function ru(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        r = (0, eb.bG)([a3.A], () => a3.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(l ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a4.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rs.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        c = s.useCallback(() => {
            (0, a5.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rs.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        u = s.useMemo(
            () => ({ title: n.name, description: Y.intl.format(Y.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, i.jsx)(rc, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: c,
        onPurchaseClick: o,
        singleCardInfo: u,
        ...a,
    });
}
function rh(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        d = s.useCallback(() => {
            (0, a9.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rs.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, l]),
        o = (0, rl.e)({ sku: n, giftRecipient: t, giftingOrigin: rs.vQ.USER_PROFILE_WISHLIST, analyticsLocations: l }),
        c = s.useMemo(() => {
            switch (n?.tenantMetadata?.collectibles?.type) {
                case a2.R.PROFILE_EFFECT:
                case a2.R.NAMEPLATE:
                    return;
                case a2.R.AVATAR_DECORATION:
                    return r()(rr.ML, rr._P);
                default:
                    return r()(rr.ML, rr.ZY);
            }
        }, [n?.tenantMetadata?.collectibles?.type]),
        u = s.useMemo(
            () => ({
                title: n.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return Y.intl.string(Y.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a2.R.AVATAR_DECORATION:
                            return Y.intl.string(Y.t["7v0T9P"]);
                        case a2.R.PROFILE_EFFECT:
                            return Y.intl.string(Y.t.wR5wOo);
                        case a2.R.NAMEPLATE:
                            return Y.intl.string(Y.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, i.jsx)(rc, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: l,
        onDetailsClick: o,
        onPurchaseClick: d,
        skuPreviewStyle: c,
        singleCardInfo: u,
        ...a,
    });
}
function rA(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        r = s.useCallback(() => {
            (0, a7.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rs.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: l ?? [],
            });
        }, [n.id, t, l]),
        d = s.useMemo(() => ({ title: n.name, description: Y.intl.string(Y.t.Ipxkog) }), [n.name]);
    return (0, i.jsx)(rc, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: l,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rd.MO,
        disableRiveHover: !0,
        singleCardInfo: d,
        ...a,
    });
}
function rm(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ru, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, i.jsx)(rh, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, i.jsx)(rA, { sku: n, ...t });
        default:
            return null;
    }
}
var rg = t(535089),
    rx = t(617348);
function rp(e) {
    let { unownedWishlistItems: n = [], profileOwner: t, onClick: l, wishlistId: a, title: r } = e,
        { analyticsLocations: d } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: o } = (0, sK.NJ)(),
        c = (0, s.useId)(),
        u = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: l } = e;
                null != n && o({ wishlistId: n, action: t, productLines: l });
            },
            [o],
        ),
        h = (0, s.useMemo)(() => {
            let e = [];
            for (let t = 0; t < n.length && e.length < 3; t++) {
                let l = n[t];
                e.push(l);
            }
            return e;
        }, [n]),
        A = (0, s.useMemo)(() => new Set(h.map((e) => e.skuProductLine)), [h]),
        g = (0, rg.A)({ wishlistId: a ?? null, onAction: u, productLines: A }),
        x = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, i.jsx)(
                                  rm,
                                  {
                                      sku: e.sku,
                                      index: s,
                                      wishlistOwner: t,
                                      wishlistId: a,
                                      analyticsLocations: d,
                                      onViewWishlist: l,
                                      isSingleCard: 1 === n.length,
                                  },
                                  e.skuId,
                              ),
                    )
                    .filter(iL.Vq),
            [d, l, t, n.length, h, a],
        ),
        [p, f] = (0, a0.RF)(
            m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, aJ.c)(m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        j = p !== m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === x.length
        ? null
        : (0, i.jsx)("section", {
              "aria-labelledby": c,
              children: (0, i.jsxs)(s1.A.Overlay, {
                  ref: g,
                  className: rx.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rx.wx,
                          children: [
                              (0, i.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? Y.intl.string(Y.t["7lZ31J"]),
                              }),
                              n.length > 3 &&
                                  (0, i.jsx)(aZ.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: l,
                                      text: Y.intl.string(Y.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, i.jsxs)(sw.F, {
                          children: [
                              (0, i.jsx)("div", { className: rx.vY, children: x }),
                              !j &&
                                  A.has(er.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, i.jsx)(a1.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: rx.EK,
                                      onDismiss: () => f(l8.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function rf(e) {
    let { user: n, currentUser: t, channel: l } = e,
        a = __OVERLAY__,
        r = (0, iI.Ay)(n.id),
        d = (0, sW.Ay)(),
        o = s.useRef(Date.now()),
        { analyticsLocations: c } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        u = (0, sK.pb)({ layout: "SIDEBAR", userId: n.id, channelId: l.id }),
        h = s.useRef(null),
        { isHoveringOrFocusing: m, isHovering: g } = (0, sq.A)(h),
        x = (0, ap.fC)(),
        p = (0, aA.A)(r?.profileFrame?.skuId, "UserProfileSidebar");
    (0, ah.A)({ skuId: r?.profileFrame?.skuId, openedAt: o.current, context: u, analyticsLocations: c });
    let f = (0, au.z)({ opacity: +(null != x.interactionType), config: { duration: 150 } }),
        j = (e) => {
            (0, sU.openUserProfileModal)({ sourceAnalyticsLocations: c, hideRestrictedProfile: !0, ...u, ...e });
        },
        I = r?.widgets != null && r.widgets.length > 0,
        { defaultWishlistId: b } = (0, A.cf)([ax.A], () => ({ defaultWishlistId: ax.A.getFirstWishlistId(n.id) })),
        { wishlist: C } = (0, ag.fw)({ wishlistId: b, userId: n.id });
    (0, am.A)(C);
    let E = s.useMemo(() => (null == C ? null : C.items.filter((e) => !e.isOwned)), [C]);
    return (0, i.jsx)(M.f5, {
        value: c,
        children: (0, i.jsx)(sK.of, {
            value: u,
            openedAt: o.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, i.jsx)(ap.Hl, {
                value: x,
                children: (0, i.jsxs)(s1.A, {
                    ref: h,
                    user: n,
                    displayProfile: r,
                    themeType: ae.d.SIDEBAR,
                    themeOverride: d,
                    isPrivate: r?.private === !0,
                    children: [
                        r?.private === !0 && (0, i.jsx)(aj.A, {}),
                        null != x.interactionType && (0, i.jsx)(ac.animated.div, { style: f, className: an.tB }),
                        (0, i.jsxs)(ts.d_, {
                            className: null != p ? an.It : void 0,
                            children: [
                                (0, i.jsxs)(s9.A, {
                                    children: [
                                        (0, i.jsx)(aC.A, { user: n, themeType: ae.d.SIDEBAR }),
                                        n.bot ? (0, i.jsx)(ab.A, { user: n }) : (0, i.jsx)(aE.yo, { user: n }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: an.wx,
                                    children: [
                                        (0, i.jsx)(s$.A, {
                                            user: n,
                                            displayProfile: r,
                                            themeType: ae.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !m,
                                            className: an.vK,
                                        }),
                                        (0, i.jsx)(af.A, { userId: n.id, className: an.oR }),
                                        (0, i.jsx)(sX.A, {
                                            user: n,
                                            displayProfile: r,
                                            channelId: l.id,
                                            themeType: ae.d.SIDEBAR,
                                            onOpenProfile: a ? void 0 : j,
                                        }),
                                        (0, i.jsx)(ay.A, {
                                            user: n,
                                            channelId: l.id,
                                            themeType: ae.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(aw, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: r,
                                    channel: l,
                                    isHoveringOrFocusing: null == x.interactionType && m,
                                    onOpenProfile: a ? void 0 : j,
                                }),
                                I &&
                                    (0, i.jsx)("div", {
                                        className: an.sJ,
                                        children: (0, i.jsx)(aI.A, {
                                            user: n,
                                            widgets: r.widgets,
                                            onOpenUserProfileModal: j,
                                        }),
                                    }),
                                null != E &&
                                    E.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: an.vS,
                                        children: (0, i.jsx)(rp, {
                                            profileOwner: n,
                                            unownedWishlistItems: E,
                                            wishlistId: b,
                                            title: Y.intl.string(Y.t["7lZ31J"]),
                                            onClick: () => {
                                                j?.({ tabSection: ra.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(a$, { user: n, channelId: l.id }),
                            ],
                        }),
                        !a &&
                            (0, i.jsx)(s6, {
                                context: u,
                                analyticsLocations: c,
                                profileFrame: p,
                                handleOpenProfile: j,
                            }),
                        r?.profileEffect != null && (0, i.jsx)(sz.A, { skuId: r?.profileEffect?.skuId, isHovering: g }),
                    ],
                }),
            }),
        }),
    });
}
function rj(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        l = (0, A.bG)([J.default], () => J.default.getUser(t)),
        a = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        r = ib(),
        [d, o] = (0, sB.A)(t);
    if (
        (s.useEffect(() => {
            (0, sV.A)(l ?? t, {
                type: "sidebar",
                withMutualFriendsCount: l?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: n.id,
            });
        }, [l, t, n.id]),
        null == l || null == a || !r)
    )
        return null;
    let c = `user-profile-sidebar-heading-${l.id}`,
        u = sH.Ay.getName(null, n.id, l);
    return (0, i.jsx)("aside", {
        "aria-labelledby": c,
        children: (0, i.jsx)(sw.F, {
            component: (0, i.jsx)(sF.A, {
                children: (0, i.jsx)(sw.H, { id: c, children: Y.intl.format(Y.t.KRe1Fk, { name: u }) }),
            }),
            children: d
                ? (0, i.jsx)(ao, { user: l, currentUser: a, onHide: o, ...e })
                : l.isNonUserBot()
                  ? (0, i.jsx)(al, { user: l, currentUser: a, ...e })
                  : (0, i.jsx)(rf, { user: l, currentUser: a, ...e }),
        }),
    });
}
var rI = t(522556),
    rb = t(225315),
    rC = t(684407),
    rE = t(95701),
    ry = t(919638),
    rv = t(763827),
    rN = t(812771),
    r_ = t(946228),
    rT = t(462887),
    rS = t(276293),
    rR = t(96361),
    rL = t(745652);
let rO = () => {
    let e = (0, sW.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rT.M)(e) ? rL : "/assets/a51b44063e9d3bdb.svg";
    return (0, i.jsxs)("div", {
        className: rR.kL,
        children: [
            (0, i.jsxs)(lY.A, {
                toolbar: (0, i.jsx)(s.Fragment, {}),
                children: [
                    (0, i.jsx)(lY.A.Icon, { icon: rS.N, "aria-hidden": !0 }),
                    (0, i.jsx)(lY.A.Title, { children: Y.intl.string(Y.t["8LKchl"]) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: rR.Qs,
                children: [
                    (0, i.jsx)("img", { alt: "", className: rR.j0, src: n }),
                    (0, i.jsx)(S.D, {
                        className: rR.Zd,
                        variant: "heading-lg/medium",
                        children: Y.intl.string(Y.t.m9gRVN),
                    }),
                    (0, i.jsx)(y.E, {
                        className: rR.fh,
                        variant: "text-md/normal",
                        children: Y.intl.string(Y.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rM = t(943712),
    rD = t(402216),
    rP = t(746080),
    rk = t(806931),
    rG = t(165610),
    rU = t(516607),
    rw = t(964623);
let rF = () => (0, i.jsx)("div", { className: rw.wG, children: (0, i.jsx)(x.y, {}) }),
    rH = (0, nR.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("99830"),
                t.e("64801"),
                t.e("53316"),
                t.e("49681"),
                t.e("21044"),
                t.e("33097"),
                t.e("4374"),
                t.e("21225"),
                t.e("23685"),
                t.e("42516"),
                t.e("3766"),
            ]).then(t.bind(t, 189996)),
        webpackId: 189996,
        renderLoader: rF,
        name: "ForumChannel",
    }),
    rB = () =>
        Promise.all([
            t.e("79924"),
            t.e("34524"),
            t.e("35769"),
            t.e("1128"),
            t.e("46279"),
            t.e("99830"),
            t.e("54266"),
            t.e("5677"),
            t.e("80203"),
            t.e("11491"),
            t.e("32703"),
            t.e("35774"),
            t.e("60774"),
            t.e("68201"),
            t.e("85755"),
            t.e("792"),
            t.e("92822"),
            t.e("9291"),
            t.e("87317"),
            t.e("11617"),
            t.e("29260"),
            t.e("49013"),
            t.e("755"),
            t.e("33448"),
            t.e("69178"),
            t.e("15275"),
            t.e("31335"),
            t.e("73611"),
            t.e("72847"),
            t.e("74821"),
            t.e("4374"),
            t.e("15057"),
            t.e("26792"),
            t.e("43710"),
            t.e("88109"),
            t.e("22094"),
            t.e("45916"),
            t.e("26223"),
            t.e("70011"),
            t.e("91553"),
            t.e("61924"),
            t.e("15980"),
            t.e("42492"),
            t.e("30761"),
            t.e("97306"),
            t.e("36793"),
            t.e("14842"),
        ]).then(t.bind(t, 540462)),
    rV = (0, nR.Fe)({ createPromise: rB, webpackId: 540462, name: "ChannelCall", renderLoader: rF }),
    rW = () =>
        Promise.all([
            t.e("99830"),
            t.e("34524"),
            t.e("35769"),
            t.e("1128"),
            t.e("46279"),
            t.e("85222"),
            t.e("79924"),
            t.e("2146"),
            t.e("68201"),
            t.e("792"),
            t.e("92822"),
            t.e("9291"),
            t.e("29260"),
            t.e("49013"),
            t.e("755"),
            t.e("33448"),
            t.e("15275"),
            t.e("31335"),
            t.e("56373"),
            t.e("20577"),
            t.e("74821"),
            t.e("60536"),
            t.e("4374"),
            t.e("26792"),
            t.e("64287"),
            t.e("43710"),
            t.e("88109"),
            t.e("22094"),
            t.e("45916"),
            t.e("70011"),
            t.e("91553"),
            t.e("61924"),
            t.e("15980"),
            t.e("42492"),
            t.e("30761"),
            t.e("97306"),
            t.e("78827"),
            t.e("28732"),
        ]).then(t.bind(t, 67319)),
    rY = (0, nR.Fe)({ createPromise: rW, webpackId: 67319, name: "StageChannelCall", renderLoader: rF }),
    rz = (0, nR.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("53316"),
                t.e("11394"),
                t.e("4974"),
                t.e("43908"),
                t.e("1472"),
                t.e("63982"),
                t.e("49681"),
                t.e("38939"),
                t.e("61058"),
                t.e("33097"),
                t.e("30501"),
                t.e("39214"),
                t.e("20803"),
                t.e("21225"),
                t.e("12549"),
                t.e("62368"),
            ]).then(t.bind(t, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: () => (0, i.jsx)(iF, {}),
    }),
    rq = (0, nR.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("46279"),
                t.e("80387"),
                t.e("43908"),
                t.e("1472"),
                t.e("70534"),
                t.e("33982"),
                t.e("38057"),
                t.e("49681"),
                t.e("28136"),
                t.e("7775"),
                t.e("61058"),
                t.e("33097"),
                t.e("36002"),
                t.e("30501"),
                t.e("66913"),
                t.e("71719"),
                t.e("13848"),
            ]).then(t.bind(t, 538409)),
        webpackId: 538409,
        name: "GuildMemberModViewSidebar",
    });
class rK extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sG.d)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? rB() : e === er.rbe.GUILD_STAGE_VOICE && rW();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tF.iN)(e.id);
    };
    _handleContextMenu = (e, n) => {
        switch (n.type) {
            case er.rbe.GUILD_VOICE:
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                this.openChannelContextMenu(e, n);
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, n);
                break;
            case er.rbe.DM:
                this.openDMContextMenu(e, n);
        }
    };
    handleContextMenu = (e) => {
        o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel);
    };
    handleParentContextMenu = (e) => {
        o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel);
    };
    handleThreadSidebarResize = (e, n) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: n });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        o()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, sU.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [O.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, n) {
        let { guild: l } = this.props;
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != l, "Missing guild in Channel.openChannelContextMenu"),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("26132"),
                    t.e("34971"),
                    t.e("9004"),
                    t.e("30997"),
                    t.e("79995"),
                    t.e("44058"),
                    t.e("91377"),
                    t.e("35723"),
                    t.e("66540"),
                    t.e("29542"),
                    t.e("59545"),
                ]).then(t.bind(t, 22496));
                return (t) => (0, i.jsx)(e, { ...t, channel: n, guild: l });
            });
    }
    openThreadContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e("26132"), t.e("38730"), t.e("34971"), t.e("84615")]).then(
                    t.bind(t, 612826),
                );
                return (t) => (0, i.jsx)(e, { ...t, channel: n });
            });
    }
    openDMContextMenu(e, n) {
        o()(null != n, "Missing channel in Channel.openDMContextMenu");
        let l = J.default.getUser(n.getRecipientId());
        o()(null != l, "Missing user in Channel.openDMContextMenu"),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("94881"),
                    t.e("26132"),
                    t.e("46652"),
                    t.e("93190"),
                    t.e("89673"),
                    t.e("60195"),
                    t.e("97558"),
                    t.e("94000"),
                    t.e("91994"),
                    t.e("38730"),
                    t.e("76665"),
                    t.e("34971"),
                    t.e("45996"),
                    t.e("792"),
                    t.e("92822"),
                    t.e("23427"),
                    t.e("29422"),
                    t.e("9291"),
                    t.e("7059"),
                    t.e("42339"),
                    t.e("98199"),
                    t.e("41175"),
                    t.e("39778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, i.jsx)(e, { ...t, user: l, channelSelected: !0, channel: n });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(rP.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(li.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, i.jsx)(nl.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== rk.lp.STREAM
            ? null
            : (0, i.jsx)(
                  lt.A,
                  { size: rD.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: n,
            isLurking: t,
            showCall: l,
            showActivityPanel: s,
            showFramePanel: a,
            addToDMUpdatesEnabled: r,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let d = [];
        if (e.isSystemDM()) return d;
        let c =
            (e.type === er.rbe.DM || e.type === er.rbe.GROUP_DM) &&
            lI.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
                break;
            case er.rbe.DM:
                d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, i.jsx)(it, { channel: e }, "calls")),
                    d.push((0, i.jsx)(lR, { channel: e }, "pins")),
                    d.push(
                        (0, i.jsx)(
                            il.Ay,
                            {
                                channel: e,
                                tooltip: r
                                    ? Y.intl.string(Y.t.IIOxgV)
                                    : c
                                      ? Y.intl.string(Y.t["PWkO7+"])
                                      : Y.intl.string(Y.t.Xjlbvs),
                            },
                            "invite",
                        ),
                    ),
                    d.push((0, i.jsx)(iC, { channel: e, showCallOrActivityPanel: l || s || a }, "profile")),
                    d.push((0, i.jsx)(ih, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                d.push(this.renderJoinRequestInterviewButtons()),
                    d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, i.jsx)(it, { channel: e }, "calls")),
                    d.push((0, i.jsx)(lR, { channel: e }, "pins")),
                    e.isManaged() ||
                        d.push(
                            (0, i.jsx)(
                                il.Ay,
                                { channel: e, tooltip: c ? Y.intl.string(Y.t.FFxUQ0) : Y.intl.string(Y.t.AQAPts) },
                                "invite",
                            ),
                        ),
                    d.push((0, i.jsx)(lN, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && d.push((0, i.jsx)(tK, { channel: e })),
                    null == n || n.isForumLikeChannel() || d.push((0, i.jsx)(sS, { channel: n }, "browser")),
                    e.isVocalThread() && d.push((0, i.jsx)(ix, { channel: e }, "thread-call")),
                    d.push((0, i.jsx)(t1, { channel: e }, "notifications")),
                    d.push((0, i.jsx)(lR, { channel: e }, "pins")),
                    e.isArchivedThread() || d.push((0, i.jsx)(lN, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && d.push((0, i.jsx)(lP, { channel: e }, "summaries")),
                    d.push((0, i.jsx)(sL, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                d.push((0, i.jsx)(sS, { channel: e }, "browser")),
                    t || d.push((0, i.jsx)(l_.A, { channel: e }, "notifications")),
                    d.push((0, i.jsx)(lR, { channel: e }, "pins")),
                    (0, ni.fw)("channel_header") && d.push((0, i.jsx)(ly, { channelId: e.id }, "conversations")),
                    d.push((0, i.jsx)(lN, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && d.push((0, i.jsx)(lP, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                t ||
                    (d.push((0, i.jsx)(lW, { channel: e }, "forum-onboarding")),
                    d.push((0, i.jsx)(l_.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || d.push((0, i.jsx)(lN, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                d.push((0, i.jsx)(lN, { channelId: e.id }, "members"));
        }
        return d;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let n = [];
        if (e.isSystemDM()) return n;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
                break;
            case er.rbe.GROUP_DM:
                n.push((0, i.jsx)(lN, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, i.jsx)(lN, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, i.jsx)(lN, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, i.jsx)("div", {
                  className: rw.u8,
                  children: (0, i.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(Y.t["3aOv+h"]),
                      onClick: () =>
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("21315"), t.e("70774")]).then(
                                  t.bind(t, 464035),
                              );
                              return (t) => (0, i.jsx)(e, { channel: n, ...t });
                          }),
                  }),
              })
            : null;
    };
    renderHeaderBar = () => {
        let {
            channel: e,
            channelName: n,
            parentChannel: t,
            guild: l,
            guildId: s,
            showCall: a,
            showActivityPanel: d,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != n, "Should not be null if channel is not null.");
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tF.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            g = d || c,
            x = a || g;
        return (0, i.jsxs)("div", {
            className: rw.SC,
            children: [
                (0, i.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, i.jsxs)(
                            lY.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rw.DD, a, { [rw.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": Y.intl.string(Y.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(tx.i$, { channel: e, guild: l, caretPosition: "right" }),
                                    (0, tx.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: l,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: rw.u8,
                                              children: (0, i.jsx)(p.$, {
                                                  onClick: () => (0, tp.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: Y.intl.string(Y.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tx.EP)(e, l),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, i.jsx)(iG.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: n, spoilerGatingChannelId: t } = this.props;
        return !n && null == t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(rY, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, i.jsx)(
                    rV,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nn.N.NO_POPOUT,
                    },
                    `call-${e.id}`,
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            n = this.shouldRenderCall();
        if ((o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), n)) return null;
        let t = this.props.height - 200;
        return (0, i.jsx)(e7, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: n,
            needSubscriptionToAccess: t,
            channelIsContentGated: l,
            spoilerGatingChannelId: s,
            inCall: a,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), t))
            return (o()(null != n, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(lu, { guildId: n.id })
                : (0, i.jsx)(ls.H, { guildId: n.id, children: (0, i.jsx)(lf, { channelId: e.id, guildId: n.id }) });
        if (l) return (0, i.jsx)(rI.A, { guild: n, channelId: e.id });
        if (null != s) return (0, i.jsx)(iW.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (a && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, i.jsx)(tc, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, i.jsx)(rH, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (0, i.jsx)(tm.A, { channel: e, guild: n, chatInputType: nt.oU.NORMAL }, null != n ? n.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: n,
            guild: t,
            needSubscriptionToAccess: l,
            section: s,
            showCall: a,
            showActivityPanel: r,
            showFramePanel: d,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || l));
        else if (s === er.YvQ.PROFILE && e.isPrivate() && !a && !r && !d)
            return (0, i.jsx)(rj, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, i.jsx)(ik, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(r_.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(r_.A, { channel: n }, `channel-members-${n.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, i.jsx)(em, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, i.jsx)(nS, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, i.jsx)(rz, { guildId: t?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: n,
            hasModalOpen: l,
            showWelcomeModal: s,
            isLurking: a,
            isUnavailable: r,
            showRealNameModal: d,
        } = this.props;
        return (
            null == e ||
                null == n ||
                r ||
                l ||
                (d &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("38763").then(t.bind(t, 201510));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => ll(iN.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("71898"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rb.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: n,
                section: t,
                channelSidebarState: l,
                guildSidebarState: s,
                width: a,
                channelIsContentGated: r,
                spoilerGatingChannelId: d,
            } = this.props;
        if (null == s && null == l) return null;
        if (t === er.YvQ.SIDEBAR_CHAT && null != l) {
            if (r || null != d) return null;
            switch (l.type) {
                case iB.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(sf, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location,
                    });
                    break;
                case iB.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t6 : sk;
                    e = (0, i.jsx)(t, { channelId: l.channelId });
                    break;
                case iB.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(sk, { channelId: l.channelId, baseChannelId: l.baseChannelId });
                    break;
                case iB.PE.VIEW_CHANNEL:
                case iB.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iB.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, i.jsx)("div", {
                    style: { width: er.da6 },
                    className: rw.uC,
                    children: (0, i.jsx)(rq, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iH.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, i.jsx)(rN.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rN.X.PostSidebar : rN.X.ThreadSidebar,
                maxWidth: c,
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: n,
                formattedChannelName: t,
                isUnavailable: l,
                layout: s,
                section: a,
                hasModalOpen: d,
                guildSidebarState: o,
                hasTextActivityInPanelMode: c,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (l) return (0, i.jsx)(rO, {});
        if (null == e) return (0, i.jsx)(rM.A, { channelId: this.props.channelId });
        let m = a === er.YvQ.SIDEBAR_CHAT,
            g = null != o && !m,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nL.HI, { location: p, subsection: t ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rw.TE, { [rw.js]: m || g, [rw.jl]: m && h }),
                    children: [
                        x
                            ? (0, i.jsx)(ex.A, {
                                  style: { right: m ? u : void 0 },
                                  className: rw.x4,
                                  channel: e,
                                  draftType: t5.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: r()(rw.Qs, { [rw.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let rX = (0, ep.A)(rK),
    rQ = s.memo(function (e) {
        var n, t;
        let l,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eG.A], () => eG.A.getChannelId()),
            c = (0, A.bG)([eG.A], () => eG.A.getVoiceChannelId()),
            x = (0, A.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, th.DZ)(),
            f = (0, th.e4)(x, "ConnectedChannel"),
            I = (0, A.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, A.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            E = (0, A.bG)([n0.A], () => n0.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, la.A)(f?.id ?? void 0),
            v = (0, A.bG)([ne.A], () => {
                let e = null != o ? ne.A.getParticipants(o) : [],
                    n = null != o ? ne.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, ln.A)(),
            _ = (0, A.bG)([eG.A], () => (N?.channelId ?? eG.A.getVoiceChannelId()) === f?.id),
            T = (0, A.bG)([eI.Ay], () => (null != f ? eI.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, A.bG)([rv.A], () => rv.A.isConnected()),
            R = (0, ej.A)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            _ &&
                L &&
                null != T &&
                null != f &&
                j.A.selectParticipant(
                    f.id,
                    (0, e6.Qt)({ applicationId: T.applicationId, instanceId: T.compositeInstanceId }),
                );
        }, [L, f, _, T]);
        let O = (0, A.bG)([eI.Ay], () => eI.Ay.getCurrentEmbeddedActivity()),
            M = (0, A.bG)([eI.Ay], () => eI.Ay.getActivityPanelMode()),
            D = null != O && !(0, ev.A)(f?.id) && M === eZ.Gd.PANEL,
            P = (0, A.bG)(
                [l5.A],
                () => null != f && f.isVocalThread() && !u().isEmpty(l5.A.getVoiceStatesForChannel(f.id)),
                [f],
            ),
            k = null != f && f.isPrivate() && !D && v,
            G = f?.isGuildVocal() || k || P,
            U = (0, A.bG)([le.A], () => le.A.getFrameLayoutMode() === rG.y.FOCUSED),
            { welcomeModalChannelId: w } = (0, h.zy)(),
            F = (0, A.bG)([t$.A], () => null != f && t$.A.isLurking(f.guild_id), [f]),
            H = (0, A.bG)([rC.A], () => rC.A.hasSeen(f?.guild_id, F), [f, F]),
            B = (0, A.bG)(
                [ne.A, eI.Ay],
                () =>
                    null != eI.Ay.getConnectedActivityLocation() && eI.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eI.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != o
                          ? ne.A.getLayout(o)
                          : er.DUB.NORMAL,
                [o],
            ),
            V =
                ((n = E?.id),
                (l = (0, A.bG)([n0.A, iv, J.default, X.Ay], () => {
                    let e = n0.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === iv.hasViewedPrompt(iN.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let l = X.Ay.getMember(e.id, t?.id);
                    return l?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != l && (l || ll(iN.REAL_NAME_PROMPT, n));
                }, [l, n]),
                !0 === l),
            W =
                ((t = E?.id),
                (0, A.bG)([ek.A, n0.A, eG.A], () => {
                    let e = n0.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(w);
                    return w === eG.A.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rE.ke)(n.type);
                })),
            { section: Y, channelSidebarState: z } = (0, A.cf)(
                [lC.Ay],
                () => ({ section: lC.Ay.getSection(o, f?.isDM()), channelSidebarState: lC.Ay.getSidebarState(o) }),
                [o, f],
            ),
            q = E?.id,
            K = (0, A.bG)([lC.Ay], () => lC.Ay.getGuildSidebarState(q), [q]),
            $ = (0, iT.lI)(),
            Z = (0, tA.Ay)(f),
            ee = (0, tA.Ay)(f, !0),
            en = (0, A.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            el = (0, e8.vL)(f),
            ei = (0, iV.Uf)(f),
            es = null != f && c === f.id,
            ea = null != f && f.isGuildStageVoice(),
            { enabled: ed } = lj.A.useConfig({
                location: f?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
            });
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        l = (0, ey.H)(t);
                    if (null == l || !(0, ev.A)(l)) return;
                    eG.A.getVoiceChannelId() !== l && (await (0, e5.A)({ channelId: l }));
                    let i = ek.A.getChannel(l),
                        s = i?.guild_id;
                    setTimeout(() => {
                        (0, e4.A)(s, t), n?.();
                    }, 0);
                }
                return (
                    et._.subscribe(er.jej.OPEN_EMBEDDED_ACTIVITY, e),
                    () => {
                        et._.unsubscribe(er.jej.OPEN_EMBEDDED_ACTIVITY, e);
                    }
                );
            }, [n]);
        })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, tp.JK)();
                if (e?.location?.state?.stageInviteKey === rU.J2) {
                    let { channelId: n } = (0, i_.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []);
        let eo = { channel: f, inCurrentVoiceChannel: es },
            ec = s.useRef(eo);
        s.useEffect(() => {
            ec.current = eo;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = ec.current;
                null != r && null != e && ea && e.id === r && !n && ((0, iY.av)(e), d(null));
            }, [r, ea]);
        let eu = (0, ef.cI)(f),
            eh = null != f && f.isPrivate(),
            eA = (0, ej.A)(eh),
            em = (0, ej.A)(f?.id);
        s.useEffect(() => {
            let e = eA && !eh,
                n = eA && eh && f?.id !== em;
            (e || n) && (0, tu.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: l8.i.AUTO });
        }, [f?.id, em, eh, eA]);
        let eg = (0, g.useHasAnyModalOpen)();
        return (0, i.jsx)(rX, {
            guildId: f?.guild_id,
            channelId: o,
            channel: f,
            channelName: Z,
            formattedChannelName: ee,
            parentChannel: C,
            voiceChannel: I,
            layout: B,
            needSubscriptionToAccess: y,
            isLurking: F,
            hasModalOpen: eg,
            section: Y,
            channelSidebarState: z,
            guildSidebarState: K,
            guild: E,
            showCall: !y && G,
            showActivityPanel: D,
            showFramePanel: U,
            channelIsContentGated: el,
            spoilerGatingChannelId: ei,
            isMobile: (0, A.bG)([Q.A], () => f?.type === er.rbe.DM && Q.A.isMobileOnline(f.getRecipientId()), [f]),
            isUnavailable: (0, A.bG)([ry.A], () => f?.guild_id != null && ry.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: V,
            showWelcomeModal: !H && W,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([l5.A], () => ({ hasVideo: null != f && l5.A.hasVideo(f.id) }), [f]),
            inCall: es,
            selectedParticipant: en,
            showChannelSummaries: eu,
            showHeaderGuildBreadcrumb: p || $,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: O,
            addToDMUpdatesEnabled: ed,
        });
    });
