t.r(n), t.d(n, { default: () => rX }), t(321073);
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
    g = t(554146),
    m = t(192308),
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
            g = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
            m = h?.id === g?.id,
            x = (0, A.bG)([Q.A, $.A], () => (m ? $.A.getStatus() : Q.A.getStatus(a, n.guild_id))),
            p = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(a)),
            f = (0, A.yK)([Q.A, $.A], () => (m ? $.A.getActivities() : Q.A.getActivities(a, n.guild_id))),
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
                    currentUser: g,
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
function eg(e) {
    var n;
    let t,
        l,
        a,
        d,
        o,
        { channel: c, guild: h } = e,
        g = `members-${c.id}`,
        { analyticsLocations: m } = (0, M.Ay)(O.A.MEMBER_LIST),
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
            ((n = g),
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
        return (0, i.jsx)(em, { channel: c });
    let E = u().omit(f.containerProps, ["ref"]),
        y = el.wT(h);
    return (0, i.jsx)(M.f5, {
        value: m,
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
                            g,
                        ),
                    }),
            }),
        }),
    });
}
function em(e) {
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
    let g = r ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        m = [g];
    u > 0 && m.push(Y.intl.formatToPlainString(Y.t["3l1GOx"], { mentionCount: u })),
        o > 0 && m.push(Y.intl.string(Y.t.x5zAGZ));
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
                label: g,
                "aria-label": m.join(", "),
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
        g = s.useCallback(() => {
            (0, eU.gk)(eZ.Gd.PIP);
        }, []),
        m = s.useRef(null),
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
                ref: m,
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
                                                              onClick: g,
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
                              resizableNode: m,
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
    e8 = t(748975),
    e4 = t(323073),
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
    ng = t(835835),
    nm = t(381849),
    nx = t(927813),
    np = t(995273),
    nf = t(957565),
    nj = t(935208),
    nI = t(256331),
    nb = t(761259),
    nC = t(958720),
    nE = t(84593);
function ny(e, n) {
    if (e.length !== n.length) return !1;
    for (let t = 0; t < e.length; t++) if (e[t].conversation.id !== n[t].conversation.id) return !1;
    return !0;
}
let nv = ["high", "medium", "low"],
    nN = s.memo(function (e) {
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
                              nv.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            o = d?.severity ?? null,
            c = d?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: nE.UO,
            children: [
                (0, i.jsx)(y.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nE.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: nE.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: nE.a7,
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
                            className: nE.a7,
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
                            className: nE.a7,
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
    n_ = s.memo(function (e) {
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
            h = (0, nm.WR)({ seconds: u, getFormatter: nm.i });
        return (0, i.jsxs)(ns.D, {
            innerRef: r,
            className: nE.Nm,
            style: { backgroundColor: t },
            onClick: () => a(n),
            children: [
                (0, i.jsxs)("div", {
                    className: nE.PY,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: nE.So,
                            children: n.title,
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
                    className: nE.FR,
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
                null != n.briefSummary &&
                    (0, i.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: nE.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: nE.JP,
                        children: n.keyPoints.map((e, n) =>
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
                    className: nE.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: nE.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: nE.UO,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nE.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: nE.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: nE.a7,
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
                                    className: nE.a7,
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
                                    className: nE.a7,
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
                (0, i.jsx)(nN, { moderation: n.moderation }),
            ],
        });
    });
function nT(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nC.A], () => nC.A.getChannelConversations(n.id), [n.id], ny),
        l = (0, A.bG)([nC.A], () => nC.A.hasMoreConversations(n.id, "before"), [n.id]),
        a = (0, A.bG)([nC.A], () => nC.A.hasMoreConversations(n.id, "after"), [n.id]),
        r = (0, A.bG)([nC.A], () => nC.A.isPendingFetch(n.id), [n.id]),
        d = (0, A.bG)([nI.A], () => nI.A.isHighlightingEnabled(), []),
        o = (0, A.bG)([nC.A], () => nC.A.getScrollToConversation(n.id), [n.id]),
        c = s.useCallback(
            (e) => {
                let t = n.getGuildId();
                null != t && (0, nb.xI)(n.id, t, e.id);
            },
            [n],
        );
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nE.zr,
        children: [
            (0, i.jsx)(ng.Y9, {
                icon: nu.o,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: nE.y6,
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
                className: nE.Qs,
                children: [
                    l &&
                        (0, i.jsx)("div", {
                            className: nE.f,
                            children: (0, i.jsx)(ns.D, {
                                className: nE.Qf,
                                onClick: function () {
                                    let e = n.getGuildId();
                                    if (null == e || 0 === t.length || r) return;
                                    let l = t[0].conversation;
                                    (0, nb.WF)({ channelId: n.id, guildId: e, before: l.startMessageId });
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
                                  n_,
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
                              className: nE.BI,
                              children: "No conversations available.",
                          }),
                    a &&
                        (0, i.jsx)("div", {
                            className: nE.f,
                            children: (0, i.jsx)(ns.D, {
                                className: nE.Qf,
                                onClick: function () {
                                    let e = n.getGuildId();
                                    if (null == e || 0 === t.length || r) return;
                                    let l = t[t.length - 1].conversation;
                                    (0, nb.WF)({ channelId: n.id, guildId: e, after: l.endMessageId });
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
var nS = t(268218),
    nR = t(726249),
    nL = t(228366),
    nO = t(334738),
    nM = t(208882),
    nD = t(938764),
    nP = t(519480),
    nk = t(352123),
    nG = t(222983),
    nU = t(478927);
let nw = (e) => {
    let { guild: n, onAddGuild: l } = e,
        a = s.useCallback(() => {
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("44710"),
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
        className: nU.h2,
        children: [
            (0, i.jsx)("img", { className: nU.hd, alt: "", src: t(668778) }),
            (0, i.jsx)(S.D, {
                className: nU._U,
                variant: "heading-xl/semibold",
                children: Y.intl.format(Y.t.vyvrpC, { guildName: n.name }),
            }),
            (0, i.jsx)(y.E, { variant: "text-md/normal", className: nU.YI, children: Y.intl.string(Y.t.WypE0i) }),
            null != l
                ? (0, i.jsx)(nG.E, {
                      className: nU.c5,
                      iconUrl: t(928202),
                      header: Y.intl.string(Y.t.hyK15i),
                      completed: !1,
                      onClick: l,
                  })
                : null,
            (0, i.jsx)(nG.E, {
                className: nU.c5,
                iconUrl: t(799258),
                header: Y.intl.string(Y.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nF = t(892547),
    nH = t(689175),
    nB = t(761508),
    nV = t(765671),
    nW = t(22231),
    nY = t(365199),
    nz = t(66834),
    nq = t(573435),
    nK = t(101555),
    nX = t(548118),
    nQ = t(714991),
    n$ = t(776231),
    nZ = t(345942),
    nJ = t(71393),
    n0 = t(486020),
    n1 = t(860689),
    n2 = t(682557),
    n3 = t(253607);
let n9 = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, i.jsxs)(ns.D, {
        onClick: n,
        className: n3.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, i.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: n3.Kk,
                children: Y.intl.string(Y.t.H9jxS1),
            }),
        ],
    });
});
function n7(e) {
    let { entry: n } = e,
        [l, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nk.A)(n);
    return (0, i.jsx)("div", {
        className: r()(n3.fc, { [n3.QX]: l }),
        children: (0, i.jsxs)(nK.Ay, {
            children: [
                o
                    ? (0, i.jsx)(eN.m, {
                          text: Y.intl.string(Y.t.XnuOvN),
                          children: (0, i.jsx)(nK.$n, {
                              onClick: () => {
                                  (0, m.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("25226"), t.e("88869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, i.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": Y.intl.string(Y.t.XnuOvN),
                              children: (0, i.jsx)(nW.R, { size: "xs", color: "currentColor", className: n3.IQ }),
                          }),
                      })
                    : null,
                (0, i.jsx)(n2.A, {
                    targetElementRef: d,
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, i.jsx)(eN.m, {
                            text: Y.intl.string(Y.t["UKOtz+"]),
                            children: (0, i.jsx)(nK.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                                children: (0, i.jsx)(nY.j, { size: "md", color: "currentColor", className: n3.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let n5 = s.memo(function (e) {
    let { entry: n } = e,
        [l, a] = s.useState(!1),
        r = null != (0, A.bG)([nJ.A], () => nJ.A.getGuild(n.guildId)),
        d = async () => {
            a(!0);
            try {
                r ? (0, nZ.u)(n.guildId) : await nz.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        o = n0.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, n$.mZ)() }),
        c = n0.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = Y.intl.string(Y.t.VJlc0S);
    return (
        r && (u = Y.intl.string(Y.t.cqWE2Z)),
        (0, i.jsxs)("div", {
            className: n3.Nr,
            onContextMenu: (e) => {
                (0, I.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, i.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, i.jsxs)("div", {
                    className: n3.MY,
                    children: [
                        (0, i.jsx)("div", {
                            className: n3.Yi,
                            children: null != o && (0, i.jsx)("img", { src: o, alt: "", className: n3.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: n3.$f,
                            children: (0, i.jsx)(nq.Ay, {
                                mask: nq.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: n3.SA,
                                    children: (0, i.jsx)(nX.Ay, {
                                        className: n3.rZ,
                                        iconSrc: c,
                                        guild: (0, n1.xi)(n),
                                        size: nX.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: n3.OA,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n3.DD,
                            children: [
                                (0, i.jsx)(nQ.A, { className: n3.n2, guild: n }),
                                (0, i.jsx)(y.E, {
                                    className: n3.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(y.E, {
                            className: n3.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, i.jsxs)("div", {
                            className: n3.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, i.jsxs)("div", {
                                        className: n3.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: n3.JX }),
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
                                        className: n3.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: n3.Li }),
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
                            className: n3.PD,
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
                (0, i.jsx)(n7, { entry: n }),
            ],
        })
    );
});
var n8 = t(946116),
    n4 = t(562845),
    n6 = t(519094);
let te = (e) => {
        let { searchQuery: n, setSearchQuery: t, handleClearSearch: l, handleSearchKeyPress: s } = e,
            { ref: a, width: d } = (0, nV.Ay)(),
            o = null != d && d <= 800;
        return (0, i.jsxs)("div", {
            ref: a,
            className: n6.wx,
            children: [
                (0, i.jsx)("img", {
                    alt: "",
                    className: n6.F0,
                    src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
                }),
                (0, i.jsx)("div", {
                    className: n6.AZ,
                    children: (0, i.jsxs)("div", {
                        className: r()(n6.VW, { [n6.eO]: o }),
                        children: [
                            (0, i.jsx)(S.D, {
                                variant: "heading-xl/semibold",
                                className: n6.dc,
                                children: Y.intl.string(Y.t.IT7qoC),
                            }),
                            (0, i.jsx)(y.E, {
                                variant: "text-md/normal",
                                className: n6.R_,
                                children: Y.intl.string(Y.t["5PoYts"]),
                            }),
                            (0, i.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: r()(n6.MT, e),
                                        children: (0, i.jsx)(nF.I, {
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
    tn = (e) => {
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
            isLoading: g,
        } = e;
        return (0, i.jsx)("div", {
            className: n4.$$,
            children: (0, i.jsxs)(nH.Gt, {
                className: n4.XG,
                children: [
                    (0, i.jsx)(te, {
                        searchQuery: a,
                        setSearchQuery: r,
                        handleClearSearch: d,
                        handleSearchKeyPress: o,
                    }),
                    (0, i.jsx)(nH.Ch, {
                        orientation: "horizontal",
                        children: (0, i.jsxs)(nB.V, {
                            className: n6.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: (e) => {
                                u(e);
                            },
                            children: [
                                (0, i.jsx)(
                                    nB.V.Item,
                                    {
                                        className: n6.YU,
                                        id: n8.mU.ALL,
                                        children: `${Y.intl.string(Y.t.hEAa2a)} (${A})`,
                                    },
                                    n8.mU.ALL,
                                ),
                                (0, n8.g2)(n.id).map((e) => {
                                    let { value: n, label: t } = e;
                                    return (0, i.jsx)(
                                        nB.V.Item,
                                        {
                                            className: n6.YU,
                                            id: n,
                                            children: `${t} ${null != h[n] ? `(${h[n]})` : ""}`,
                                        },
                                        n,
                                    );
                                }),
                            ],
                        }),
                    }),
                    g && null == t
                        ? (0, i.jsx)(x.y, { className: n4.u1 })
                        : t?.map((e, n) =>
                              (0, i.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, i.jsx)(y.E, {
                                                    variant: "text-md/semibold",
                                                    className: n6.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, i.jsxs)("div", {
                                              className: n4.vY,
                                              children: [
                                                  e.entries.map((e) => (0, i.jsx)(n5, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != l ? (0, i.jsx)(n9, { onClick: l }) : null,
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
var tt = t(370876),
    tl = t(349288),
    ti = t(364522),
    ts = t(792831),
    ta = t(916815);
let tr = (e) => {
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
    if (c) n = (0, i.jsx)("div", { className: n4.$$, children: (0, i.jsx)(x.y, { className: n4.u1 }) });
    else if (0 === o.length) {
        let e =
            null != d
                ? Y.intl.format(Y.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, i.jsx)(tl.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : Y.intl.string(Y.t.vYyEnv);
        n = (0, i.jsxs)("div", {
            className: ta.Je,
            children: [
                (0, i.jsx)("img", { className: ta.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, i.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: ta.gR,
                    children: Y.intl.string(Y.t["6HXiuE"]),
                }),
                (0, i.jsx)(y.E, { variant: "text-md/normal", color: "text-default", className: ta.av, children: e }),
            ],
        });
    } else n = (0, i.jsx)("div", { className: n4.vY, children: o.map((e) => (0, i.jsx)(n5, { entry: e }, e.guildId)) });
    return (0, i.jsx)("div", {
        className: n4.$$,
        children: (0, i.jsxs)(ti.Ar, {
            className: n4.XG,
            children: [
                (0, i.jsxs)("div", {
                    className: ta.wL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ta.Dr,
                            children: [
                                (0, i.jsx)(ns.D, {
                                    onClick: a,
                                    className: ta.UE,
                                    children: (0, i.jsx)(ts.A, { direction: ts.A.Directions.LEFT }),
                                }),
                                (0, i.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    className: ta.s7,
                                    children: Y.intl.format(Y.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(nF.I, {
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
var td = t(650583);
let to = (e) => {
    let { channel: n, guild: l } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nP.A], () => {
            let e = nP.A.getCurrentCategoryId(n.id),
                t = nP.A.getDirectoryEntries(n.id, e === n8.mU.ALL ? null : e),
                l = nP.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: l,
                allEntriesCount: nP.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nP.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                nL.h.wait(() => {
                    (0, nO.ack)(
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
                          if (n !== n8.mU.ALL) return [{ entries: (0, tt._t)(e), appendEndCard: !0 }];
                          let t = [],
                              l = (0, tt.A3)(e),
                              i = new Set(l.map((e) => e.guildId));
                          l.length > 0 && t.push({ header: Y.intl.string(Y.t.CbaapP), entries: l, appendEndCard: !1 });
                          let s = e.filter((e) => !i.has(e.guildId));
                          return (
                              (s = (0, tt.DN)(s)).length > 0 &&
                                  t.push({ header: Y.intl.string(Y.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(r), a)
                    : null,
            [r, a],
        ),
        {
            mostRecentQuery: h,
            searchFetching: g,
            searchResults: p,
        } = (0, A.cf)([nD.A], () => {
            let { mostRecentQuery: e, fetching: t } = nD.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nD.A.getSearchResults(n.id, e) };
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
            nM.Yc(n.id), nM.YS(n.id), j(e);
        }, [n.id]),
        s.useEffect(() => {
            en.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: l.id,
                primary_category_id: a,
            });
        }, [n.id, l.id, a]);
    let E = (0, nk.b)(n),
        y = s.useMemo(
            () =>
                E
                    ? () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("63897"),
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
                e.key === td.dh.ENTER &&
                (nM.Se(n.id, f),
                en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: n.id,
                    directory_guild_id: l.id,
                }));
        },
        N = () => {
            j(""), nM.BA(n.id);
        };
    return I
        ? (0, i.jsx)(tr, {
              searchQuery: f,
              setSearchQuery: j,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: N,
              handleCreateOrAddGuild: y,
              searchResults: p,
              searchFetching: g,
          })
        : null == u && null == a
          ? (0, i.jsx)("div", { className: n4.$$, children: (0, i.jsx)(x.y, { className: n4.u1 }) })
          : u?.length === 0 && null == a
            ? (0, i.jsx)("div", { className: n4.$$, children: (0, i.jsx)(nw, { guild: l, onAddGuild: y }) })
            : (0, i.jsx)(tn, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: j,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: (e) => {
                      nM.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: d,
                  allEntriesCount: o,
                  isLoading: c,
              });
};
var tc = t(826673),
    tu = t(313281),
    th = t(47167),
    tA = t(806202),
    tg = t(58736),
    tm = t(353428),
    tx = t(976860),
    tp = t(111956),
    tf = t.n(tp),
    tj = t(922016),
    tI = t(980707),
    tb = t(477782),
    tC = t(811893),
    tE = t(789645),
    ty = t(163126),
    tv = t(182061),
    tN = t(886393),
    t_ = t(307623),
    tT = t(660273),
    tS = t(707792),
    tR = t(41402),
    tL = t(271456),
    tO = t(200273),
    tM = t(565846),
    tD = t(57907),
    tP = t(375500),
    tk = t(707653),
    tG = t(50268),
    tU = t(584682),
    tw = t(378570),
    tF = t(713608),
    tH = t(473503),
    tB = t(901472),
    tV = t(267102),
    tW = t(474397),
    tY = t(486974),
    tz = t(221314);
function tq(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        l = (0, tV.aL)(),
        a = Y.intl.string(tz.default["Beo/7v"]),
        { firstMessage: r } = (0, tH.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, i.jsx)(tg.Ay.Icon, {
              onClick: () => {
                  (0, tw.iN)(n.id),
                      (0, tW.A)(),
                      (0, tB.z)(n.guild_id, o, n.id, {
                          modViewPanel: tY.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      l.dispatch(er.jej.POPOUT_CLOSE);
              },
              tooltip: a,
              icon: tF.q,
              "aria-label": a,
          })
        : null;
}
var tK = t(780338),
    tX = t(782603),
    tQ = t(857071),
    t$ = t(607508),
    tZ = t(914703),
    tJ = t(37411);
function t0(e) {
    let { channel: n } = e,
        t = (0, t$.X)(n),
        [l, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, A.bG)([tQ.A], () => null != n.guild_id && tQ.A.isLurking(n.guild_id));
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
    return (0, i.jsx)(tj.Y, {
        targetElementRef: r,
        shouldShow: l,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, i.jsx)(tZ.A, { ...e, channel: n, navId: "thread-context", label: Y.intl.string(Y.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: l } = n;
            return (0, i.jsx)(tg.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: l ? null : o,
                icon: t === tJ.CP.NO_MESSAGES ? tK.a : tX.X,
                "aria-label": o,
                selected: l,
            });
        },
    });
}
var t1 = t(747926);
function t2(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        l((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, i.jsx)(tj.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(t3, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tg.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nY.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function t3(e) {
    let { channel: n, closePopout: t, onSelect: l } = e,
        s = (0, tT.A)(n, "Sidebar Overflow"),
        a = (0, tR.A)(n),
        r = (0, tD.A)(n),
        d = (0, tP.A)(n),
        o = (0, tv.A)(n),
        c = (0, tS.A)(n),
        u = (0, tM.A)(n.id),
        h = (0, tO.A)(n),
        A = (0, t_.A)(n),
        g = (0, tN.A)(n),
        m = (0, tG.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        x = (0, tk.A)(n),
        p = (0, tL.A)(n),
        f = (0, ty.$)(1e3);
    function j() {
        (0, tw.iN)(n.id);
    }
    function I(e) {
        let t = tf()(() => {
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
    return (0, i.jsxs)(tI.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(tb.rX, {
                children: [s, (0, i.jsx)(tb.Dr, { id: "open", label: Y.intl.string(Y.t.IxVmZi), action: j })],
            }),
            (0, i.jsxs)(tb.rX, { children: [r, d] }),
            (0, i.jsxs)(tb.rX, { children: [h, a, u, p] }),
            (0, i.jsxs)(tb.rX, {
                children: [
                    (0, i.jsx)(tb.Dr, {
                        id: "search",
                        label: Y.intl.string(Y.t["5h0QOP"]),
                        icon: tC.t,
                        trailingIndicator: { type: "icon", icon: tC.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                j();
                        },
                    }),
                    (0, i.jsx)(tb.Dr, {
                        id: "pins",
                        label: Y.intl.string(Y.t["2BSH7n"]),
                        icon: tC.t,
                        trailingIndicator: { type: "icon", icon: tC.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                j();
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(tb.rX, { children: [x, o, c, A] }),
            (0, i.jsxs)(tb.rX, { children: [g, m] }),
        ],
    });
}
function t9(e) {
    let { channel: n, baseChannelId: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.isForumPost() ? null : (0, i.jsx)(t0, { channel: n }),
            n.isModeratorReportChannel() ? (0, i.jsx)(tq, { channel: n }) : null,
            (0, i.jsx)(t2, { channel: n }),
            (0, i.jsx)(tg.Ay.Icon, {
                icon: tE.P,
                tooltip: Y.intl.string(Y.t.cpT0Cq),
                onClick: () => (0, t1.xu)((0, tU.j)(n), t ?? n.parent_id),
            }),
        ],
    });
}
var t7 = t(31717),
    t5 = t(853742),
    t8 = t(224517);
function t4(e) {
    let { channelId: n } = e,
        l = (0, A.bG)([ek.A], () => ek.A.getChannel(n)),
        a = (0, A.bG)([ek.A], () => ek.A.getChannel(l?.parent_id)),
        r = (0, A.bG)([nJ.A], () => nJ.A.getGuild(l?.getGuildId())),
        d = (0, th.Ay)(l),
        o = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == l || o.current || ((o.current = !0), (0, t5.rH)(l));
        }, [l]),
        null == l || null == r)
    )
        return null;
    let c = (0, i.jsx)(t9, { channel: l });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ex.A, { channel: l, draftType: t7.C.ChannelMessage }),
            (0, i.jsx)(tg.Ay, {
                toolbar: c,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tm.zF)({
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
                        null != l && (0, tx.uh)(l.guild_id, l.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: t8.T,
                children: (0, i.jsx)(tA.A, { channel: l, guild: r, chatInputType: nt.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var t6 = t(91242),
    le = t(857253),
    ln = t(872363);
let lt = function (e, n) {
    nL.h.wait(() => {
        nL.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var ll = t(561446),
    li = t(300233),
    ls = t(499211),
    la = t(468689),
    lr = t(529942),
    ld = t(739455),
    lo = t(328312);
function lc(e) {
    let { guildId: n } = e;
    return (0, i.jsx)("div", {
        className: lo.t7,
        children: (0, i.jsxs)("div", {
            className: lo.Zj,
            children: [
                (0, i.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, i.jsxs)("div", {
                    className: lo.xw,
                    children: [
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["8gJGPs"]) }),
                        (0, i.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: lo.G3,
                            children: Y.intl.string(Y.t.GpOWIi),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: lo.__invalid_button,
                            children: (0, i.jsx)(p.$, {
                                variant: "primary",
                                text: Y.intl.string(Y.t["I/XhUn"]),
                                onClick: () => {
                                    (0, lr.rf)(n),
                                        la.A.open(n, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, ld.Fx)(n);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var lu = t(599941),
    lh = t(251766),
    lA = t(950344),
    lg = t(217530),
    lm = t(817649),
    lx = t(601099);
function lp(e) {
    let { guildId: n, channelId: t } = e,
        l = (0, lh.e)({ guildId: n, channelId: t }),
        a = (0, lu.uk)(n),
        r = (0, lu.Tq)(n),
        d = (0, A.bG)([nJ.A], () => nJ.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([ek.A], () => ek.A.getChannel(t)),
        u = (0, th.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, lA.A)({
        guildId: n,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: l.map((e) => e.id),
    }),
    null == d)
        ? (0, i.jsx)("div", {
              className: lx.__invalid_spinnerContainer,
              children: (0, i.jsx)(x.y, { className: lx.__invalid_spinner }),
          })
        : (0, i.jsxs)(ti.Ar, {
              className: lx.$$,
              children: [
                  (0, i.jsx)(S.D, {
                      variant: "heading-xl/semibold",
                      className: lx.DX,
                      children: Y.intl.format(Y.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, i.jsx)(y.E, {
                      className: lx.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, i.jsx)(lg.A, {
                      children: l
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, i.jsx)(
                                  lm.A,
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
var lf = t(41e4),
    lj = t(18707),
    lI = t(604681),
    lb = t(761640),
    lC = t(678959);
function lE(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([lb.Ay], () => lb.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        l = (0, A.bG)([nC.A], () => nC.A.getChannelConversations(n).length > 0, [n]);
    return (0, i.jsx)(tg.In, {
        onClick: lI.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nu.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: l ? lC.q : void 0,
        selected: t,
        showBadge: l,
    });
}
var ly = t(967198);
function lv(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([lb.Ay], () => lb.Ay.getSection(n)),
        l = (0, A.bG)([ly.A], () => ly.A.getGuildId()),
        s = t === er.YvQ.MEMBERS;
    return (0, i.jsx)(tg.In, {
        tooltip: s ? Y.intl.string(Y.t.Axvx8c) : Y.intl.string(Y.t.gxChDx),
        icon: T.n,
        onClick: () => {
            eS.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: l, member_list_open: !s }),
                lI.A.toggleMembersSection();
        },
        selected: s,
    });
}
var lN = t(187360),
    l_ = t(366605),
    lT = t(945830);
let lS = function (e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        [l, a] = s.useState(!1),
        r = (0, A.bG)([eQ.Ay], () => eQ.Ay.hasUnreadPins(n.id), [n]),
        d = (0, tV.aL)(),
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
        (0, i.jsx)(tj.Y, {
            targetElementRef: o,
            shouldShow: l,
            animation: tj.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => a(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(lT.A, { ...e, onJump: u, channel: n });
            },
            clickTrap: !0,
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(tg.In, {
                    ...e,
                    ref: o,
                    onClick: c,
                    tooltip: l ? null : Y.intl.string(Y.t["mp1N/2"]),
                    icon: l_.t,
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
var lR = t(306788),
    lL = t(863922),
    lO = t(822074),
    lM = t(521732);
function lD(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        l = (0, A.bG)([lO.A], () => lO.A.shouldShowTopicsBar());
    return (0, i.jsx)(tg.Ay.Icon, {
        icon: lR.K,
        onClick: () => {
            en.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !l,
                source: lM.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, lL.Oz)();
        },
        tooltip: l ? Y.intl.string(Y.t.nGs3kO) : Y.intl.string(Y.t.bIm2sF),
        selected: l,
        "aria-expanded": l,
        disabled: t,
    });
}
var lP = t(885574),
    lk = t(947094),
    lG = t(919577),
    lU = t(207777),
    lw = t(422844),
    lF = t(435470),
    lH = t(892110),
    lB = t(45494);
function lV(e) {
    let { channel: n } = e,
        t = (0, lF.S4)(n),
        l = (0, A.bG)([lk.A], () => lk.A.hasHidden(n.id)),
        s = (0, lH.l)(n.id),
        { sortOrder: a, tagFilter: r, tagSetting: d } = (0, lw.R)(n.id),
        o = (0, A.bG)(
            [lU.A, lB.A],
            () => !!(lU.A.getThreadIds(n.id, a, r, d).length > 0) || !!(lB.A.getThreads(n.id, a, r, d).length > 0),
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
        icon: lP.m,
        onClick: () => lG.A.hideAdminOnboarding(n.id, !l),
        selected: !l,
    });
}
var lW = t(742589),
    lY = t(43105),
    lz = t(428689),
    lq = t(978940),
    lK = t(387755),
    lX = t(730852),
    lQ = t(641703),
    l$ = t(379848),
    lZ = t(753727),
    lJ = t(222692),
    l0 = t(442353),
    l1 = t(470710),
    l2 = t(186111),
    l3 = t(761853),
    l9 = t(994500),
    l7 = t(977997),
    l5 = t(360469),
    l8 = t(49999),
    l4 = t(731854);
class l6 extends s.PureComponent {
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
                : l3.Ay.supports(l4.O5.VIDEO)
                  ? s
                      ? ((c = Y.intl.string(Y.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = Y.intl.string(Y.t.UVpg3U))),
            (0, i.jsx)(tg.Ay.Icon, { icon: lz.n, onClick: e, disabled: u || l, tooltip: c })
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
            icon: lq._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u,
                (0, i.jsx)(l$.Ay, {
                    contentTypes: r,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === g.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, i.jsx)(lY.A, {
                                  targetElementRef: this.iconRef,
                                  title: Y.intl.string(Y.t.HOPqzR),
                                  body: Y.intl.format(Y.t.xAW71b, { helpdeskUrl: l5.DY }),
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
            a = () => lK.A.call(t.id, n, !l && !t.isManaged() && !e?.shiftKey, s);
        n ? (0, l0.A)(a, i) : a();
    };
    handleJoinCall = (e) => {
        lX.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: l } = this.props;
        if (
            (l.includes(g.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tc.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: l8.i.AUTO }),
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
        (0, l0.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lJ.A)();
    };
}
function ie(e) {
    let { channel: n } = e,
        t = (0, lZ.A)(),
        l = (0, A.bG)([ne.A], () => ne.A.getMode(n.id)),
        s = (0, A.bG)([l7.A], () => l7.A.isInChannel(n.id)),
        a = (0, A.bG)([L.A], () => L.A.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([l1.A], () => ({
            callActive: l1.A.isCallActive(n.id),
            callUnavailable: l1.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([l9.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !l9.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && l9.A.isBlocked(o),
        })),
        h = (0, A.bG)([J.default], () => J.default.getUser(o)),
        m = (0, tV.Us)(),
        x = [],
        p = (0, lQ.A)(n.id),
        f = (0, A.bG)([l2.A], () => l2.A.hasLayers());
    return (p && !f && x.push(g.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, i.jsx)(l6, {
              channel: n,
              mode: l,
              inCall: s,
              callActive: r,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: d,
              notFriend: c,
              isBlocked: u,
              appContext: m,
              dismissibleContentTypes: x,
              useReducedMotion: a,
          });
}
var it = t(880682),
    il = t(765178),
    ii = t(231483),
    is = t(544231),
    ia = t(338510),
    ir = t(151119),
    id = t(278941),
    io = t(665909),
    ic = t(327337);
let iu = s.memo(function (e) {
    let { channel: n } = e,
        l = (0, ia.u)(n.id),
        a = (0, ir.S)(n.id),
        r = (0, id.e)(n.id),
        d = (0, m.useHasAnyModalOpen)(),
        o = (0, A.bG)([l2.A], () => l2.A.hasLayers()),
        c = s.useCallback(
            () => (a ? Y.intl.string(Y.t["16QyDv"]) : null != r ? Y.intl.string(Y.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, g] = s.useState(c());
    s.useEffect(() => {
        null != r &&
            null != l &&
            (il.O.announce(Y.intl.string(Y.t.acsXuG)),
            setTimeout(() => {
                (0, is.xi)(n.id, [r.id]);
            }, 5e3),
            (0, io.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: r.id,
                warningType: r.type,
                isNudgeWarning: null != r,
                viewName: io.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            a &&
                (il.O.announce(Y.intl.string(Y.t["1dxCqG"])),
                setTimeout(() => {
                    (0, is.bg)(n.id);
                }, 5e3));
    }, [n, r, l, a]),
        (0, F.Ay)(() => {
            null != l &&
                (0, io.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: l.id,
                    warningType: l.type,
                    isNudgeWarning: null != r,
                    viewName: io.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && g(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, is.xi)(n.id, [r.id]),
            null != l &&
                ((0, m.openModalLazy)(
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
                    { modalKey: ic.V },
                ),
                (0, io._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: l.id,
                    warningType: l.type,
                    cta: io.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
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
                  icon: ii.l,
                  onClick: x,
                  tooltip: Y.intl.string(Y.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var ih = t(262763),
    iA = t(406704),
    ig = t(576705);
let im = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lZ.A)(),
        l = (0, A.bG)([l7.A], () => l7.A.isInChannel(n.id)),
        a = (0, A.bG)([l7.A], () => !u().isEmpty(l7.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([ig.A], () => ig.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, ls.A)(n.id),
        o = (0, iA.Id)(n),
        { enabled: c } = iA.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            ih.A.handleVoiceConnect({ channel: n, connected: l, needSubscriptionToAccess: d, locked: !1 });
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
              icon: lq._,
              onClick: h,
              tooltip: a ? Y.intl.string(Y.t.fdEeb5) : Y.intl.string(Y.t.focH1t),
          })
        : null;
});
var ix = t(812991),
    ip = t(47675),
    ij = t(999291);
function iI() {
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
function ib(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        l = (0, A.bG)([lb.Ay], () => lb.Ay.getSection(n.id, n?.isDM())),
        s = (0, ij.Ay)(n.getRecipientId()),
        a = iI(),
        r = l === er.YvQ.PROFILE && a;
    return (0, i.jsx)(tg.In, {
        disabled: !a || t,
        tooltip: !a || t ? Y.intl.string(Y.t.YneDgF) : r ? Y.intl.string(Y.t.niD64e) : Y.intl.string(Y.t["+FAsHq"]),
        icon: ix.n,
        onClick: () => {
            (0, ip.am)({ displayProfile: s, isProfileOpen: !r }), lI.A.toggleUserProfileSidebarSection();
        },
        selected: r && !t,
    });
}
let iC = {};
class iE extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            iC[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = iC[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return iC;
    }
}
let iy = new iE(nL.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            l = iC[t];
        return null == l ? ((iC[t] = new Set()), iC[t].add(n), !0) : !l.has(n) && (l.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != iC[n.id] && !n.unavailable && (delete iC[n.id], !0);
    },
});
var iv = (((l = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), l),
    iN = t(376943),
    i_ = t(394953),
    iT = t(709066),
    iS = t(87664);
t(667532);
var iR = t(403362);
let iL = [],
    iO = es.Ay.getEnableHardwareAcceleration();
function iM(e) {
    let { user: n, channel: l, status: a, activities: r } = e,
        d = (0, A.bG)([Z.A], () => null != Z.A.getTypingUsers(l.id)[n.id]),
        o = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, A.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, A.bG)([l9.A], () => l9.A.getNickname(n.id)),
        h = (0, iS.A)(n.id),
        g = s.useRef(null),
        m = (e) => {
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
        targetElementRef: g,
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
                    ref: g,
                    user: n,
                    currentUser: o,
                    isOwner: n.id === l.ownerId,
                    ownerTooltipText: Y.intl.string(Y.t["MRXZ+x"]),
                    shouldAnimateStatus: iO,
                    isTyping: d,
                    status: a,
                    activities: r,
                    applicationStream: h,
                    channel: l,
                    onContextMenu: m,
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
function iD(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let l = e.listItems[t],
            i = n.listItems[t];
        if (l.user !== i.user || l.status !== i.status || l.activities !== i.activities) return !1;
    }
    return !0;
}
function iP(e) {
    let { channel: n } = e,
        t = J.default.getCurrentUser(),
        l = t?.isStaff(),
        { analyticsLocations: a } = (0, M.Ay)(O.A.MEMBER_LIST),
        { listItems: r } = (0, A.bG)(
            [l9.A, J.default, Q.A],
            () => {
                var e, t;
                let l =
                        ((e = n.recipients),
                        (t = J.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(iR.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    i = {};
                for (let e of l)
                    l9.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (i[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? iL,
                          })
                        : (i[e.id] = { status: er.clD.OFFLINE, activities: iL });
                let s = [];
                for (let e of l) {
                    let n = { user: e, status: i[e.id].status, activities: i[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            iD,
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
                children: (0, i.jsxs)(ti.Ip, {
                    className: eo.ol,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(P.A, {
                            className: eo.lL,
                            children: [
                                `${Y.intl.string(Y.t["9Oq93m"])}\u{2014}${r.length} `,
                                d && (0, i.jsx)(iT.A, { type: iT.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, i.jsx)(
                                iM,
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
var ik = t(961974),
    iG = t(853279),
    iU = t(85942);
function iw() {
    return (0, i.jsx)("div", {
        className: iU.zt,
        children: (0, i.jsx)("header", {
            className: iG.wL,
            children: (0, i.jsxs)("div", {
                className: iG.TN,
                role: "status",
                children: [
                    (0, i.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: Y.intl.string(Y.t.uixzLf),
                    }),
                    (0, i.jsx)("div", {
                        className: iG.zp,
                        children: (0, i.jsx)(x.y, {
                            type: x.y.Type.SPINNING_CIRCLE,
                            className: iG.u1,
                            itemClassName: iG.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var iF = t(138298),
    iH = t(940382),
    iB = t(288254),
    iV = t(873614),
    iW = t(790535),
    iY = t(163328),
    iz = t(425557),
    iq = t(270003),
    iK = t(150934),
    iX = t(452027),
    iQ = t(292666),
    i$ = t(511274),
    iZ = t(465532),
    iJ = t(579872),
    i0 = t(119031),
    i1 = t(408018),
    i2 = t(201349),
    i3 = t(822610),
    i9 = t(915089),
    i7 = t(314307),
    i5 = t(636922),
    i8 = t(931664),
    i4 = t(631576),
    i6 = t(885386),
    se = t(232835),
    sn = t(522602),
    st = t(806150),
    sl = t(518960),
    si = t(753738);
function ss(e, n) {
    return { type: e, message: n ?? null };
}
function sa(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var sr = t(659617),
    sd = t(474078),
    so = t(636537),
    sc = t(152367),
    su = t(147087);
async function sh(e) {
    try {
        let n = await so.Bo.post({
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
var sA = t(55294),
    sg = t(790158),
    sm = t(415296);
let sx = nt.oU.THREAD_CREATION;
function sp(e) {
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
                          (0, i.jsx)(ex.A, { channel: s, draftType: t7.C.FirstThreadMessage }),
                          (0, i.jsx)(sf, { parentChannelId: n }),
                          (0, i.jsx)(sj, { parentChannel: s, parentMessageId: t, location: l }),
                      ],
                  }),
              }),
          });
}
function sf(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = t7.A.getThreadSettings(n),
                t = t7.A.getDraft(n, t7.C.FirstThreadMessage).trim(),
                l = sn.A.getUploads(n, t7.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== l.length
                ? iJ.A.show({
                      title: Y.intl.string(Y.t["6kDZh1"]),
                      body: Y.intl.string(Y.t.NgS9jX),
                      confirmText: Y.intl.string(Y.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Y.intl.string(Y.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t1.bA)(n);
                      },
                  })
                : (0, t1.bA)(n);
        }, [n]);
    return (0, i.jsxs)(tg.Ay, {
        toolbar: (0, i.jsx)(tg.Ay.Icon, { icon: tE.P, tooltip: Y.intl.string(Y.t.cpT0Cq), onClick: t }),
        children: [
            (0, i.jsx)(tg.Ay.Icon, { icon: iY.y, disabled: !0, "aria-label": Y.intl.string(Y.t["7Xm5QI"]) }),
            (0, i.jsx)(tg.Ay.Title, { children: Y.intl.string(Y.t["4WNcpu"]) }),
        ],
    });
}
function sj(e) {
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
            let t = (0, A.bG)([t7.A], () => t7.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [l, i] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        i((e) => ({ ...e, ...t })), iZ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: l, setThreadSettings: i, updateThreadSettings: a };
        })(t, l),
        { textAreaState: g, setTextAreaState: m } = (function (e, n) {
            let [t, l] = s.useState((0, i1.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let i = t7.A.getDraft(e.id, t7.C.FirstThreadMessage);
                        (0 === i.length || !0 === t) && l((0, i1.ur)(i)), n(t7.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        t7.A.addChangeListener(t),
                        () => {
                            t7.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: l }
            );
        })(t, u),
        x = (0, sr.EN)(t),
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
                h = (0, su.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        o(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let l = se.A.getMessage(n.id, t);
                                e = l?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let n = await sh(e);
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
            let g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: sc.D,
                                onClick: A,
                                "aria-label": Y.intl.string(Y.t.ZF2oBs),
                                disabled: e || d || (null == t && r.textValue.trim().length < 10),
                                tooltip: Y.intl.string(Y.t.ZF2oBs),
                                loading: d,
                            };
                    },
                    [h, A, d, t, r.textValue],
                ),
                m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, i.jsx)(eN.m, {
                                  text: Y.intl.string(Y.t.ZF2oBs),
                                  children: (0, i.jsx)(na.K, {
                                      icon: sc.D,
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
                renderAiGenerateButton: m,
                getThreadNameInputAccessory: g,
            };
        })({ parentChannel: t, parentMessageId: l, updateThreadSettings: h, threadSettings: c, textAreaState: g }),
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
                [A, g] = s.useState(!1),
                m = (0, sA.A)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: l,
                    privateThreadMode: i,
                    location: r,
                    onThreadCreated: t1.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: o,
                messageError: u,
                submit: s.useCallback(
                    async (e, i, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        g(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == i || 0 === i.length) &&
                                (i = i8.A.getStickerPreview(n.id, sx.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sn.A.getUploads(n.id, t7.C.FirstThreadMessage));
                        let r = (l.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == i || 0 === i.length) && 0 === s.length;
                        if (
                            (c(o ? ss(0, Y.intl.string(Y.t.uXA573)) : null),
                            h(u ? ss(0, Y.intl.string(Y.t.kesTVT)) : null),
                            o || u)
                        )
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, st.i)({
                            content: e,
                            stickers: i,
                            uploads: s,
                            type: sx,
                            channel: null == t ? n : null,
                        });
                        if (!x) return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, i, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), ss(1, (0, si.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(ss(2, Y.intl.string(Y.t.uXA573)));
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, i4.x5)(n.id, sx.drafts.type), g(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [m, a.textValue, l.name, t, n, A, d],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: l,
            threadSettings: c,
            privateThreadMode: x,
            textAreaState: g,
            location: a,
            enableAIFeatures: f,
        }),
        y = (0, sr.Iy)(c, x) ? iz.t : iY.y;
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
                    (0, i.jsx)(ti.Ip, {
                        className: sg.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: sg.bv,
                            children: [
                                (0, i.jsxs)(i7.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: r()(sm.P0, sg.P0),
                                            children: (0, i.jsx)(y, { className: sm.Kk }),
                                        }),
                                        (0, i.jsxs)(iq.n, {
                                            children: [
                                                (0, i.jsx)(sb, {
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
                                                    ? (0, i.jsx)(sI, {
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
                                (0, i.jsx)(sE, { parentChannel: t, parentMessageId: l }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: sg.Eh,
                        children: [
                            (0, i.jsx)(sC, {
                                parentChannel: t,
                                textAreaState: g,
                                setTextAreaState: m,
                                submit: C,
                                error: b,
                            }),
                            (0, i.jsx)(i0.Ay, {
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
function sI(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: l, privateThreadMode: s } = e,
        a = (0, sr.Iy)(t, s),
        r = (0, i.jsx)(iK.S, {
            disabled: s === sr.jk.PrivateOnly,
            checked: a,
            onChange: (e) => l({ isPrivate: e }),
            label: Y.intl.string(Y.t.TRPp3g),
        });
    return n || s === sr.jk.Disabled
        ? null
        : (0, i.jsx)(iX.D, {
              label: Y.intl.string(Y.t.F1zyvU),
              helperText: a ? Y.intl.string(Y.t.EWXycz) : void 0,
              children: r,
          });
}
function sb(e) {
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
        h = sa(a, { content: u }),
        A = (0, sr.l1)(n, t),
        g = null != t && !o,
        m = (0, i9.GV)(),
        x = o ? Y.intl.string(Y.t["Nb2/RE"]) : "" !== A ? A : Y.intl.string(Y.t["Nb2/RE"]);
    return (0, i.jsx)(iQ.k, {
        label: Y.intl.string(g ? Y.t.JPvIiL : Y.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: m,
        placeholder: x,
        maxLength: er.Ign,
        onChange: (e) => {
            s({ name: (0, sd.A)(e, !1) }), "" !== e ? R.A.startTyping(n.id) : R.A.stopTyping(n.id);
        },
        onBlur: () => {
            let e = (0, sd.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || d,
    });
}
function sC(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: l, submit: a, error: d } = e,
        [o, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        g = s.useCallback(() => c(!1), []),
        m = s.useCallback(
            (e, t, i) => {
                iZ.A.saveDraft(n.id, t, t7.C.FirstThreadMessage),
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
    (0, e$.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, e$.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: g });
    let p = (0, A.bG)([ig.A], () => ig.A.can(er.xBc.ATTACH_FILES, n)),
        f = sa(d, { content: t.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(i3.A, { channelId: n.id, type: sx, canAttachFiles: p }),
            (0, i.jsx)("div", { className: sg.xN, children: (0, i.jsx)(i$.U, { error: f }) }),
            (0, i.jsx)(i2.Ay, {
                type: sx,
                channel: n,
                placeholder: Y.intl.string(Y.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sg.gM, sg.Yy),
                innerClassName: r()(sg.SL, { [sg.cr]: null != f }),
                onFocus: h,
                onBlur: g,
                onChange: m,
                onSubmit: x,
                promptToUpload: sl.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sE(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        l = (0, A.bG)([se.A], () => (null == t ? null : se.A.getMessage(n.id, t))),
        s = i6.hH.useSetting();
    return null != l
        ? (0, i.jsx)(i5.A, {
              className: sg.IL,
              message: l,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sy = t(305866),
    sv = t(707539),
    sN = t(702513),
    s_ = t(614879);
function sT(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, e4.ni)(n),
        d = s.useCallback(() => {
            l(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sv.D3)("Popout"), l(!t);
        }, [t]);
    return (0, i.jsx)(tj.Y, {
        targetElementRef: a,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: t,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(sy.l, {
                children: (0, i.jsx)(sN.A, { className: s_.T, channel: n, onClose: d, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tg.In, {
                ...e,
                ref: a,
                className: s_.Kk,
                onClick: o,
                icon: iY.y,
                "aria-label": Y.intl.string(Y.t.B2panI),
                tooltip: t ? null : Y.intl.string(Y.t.B2panI),
                disabled: r,
                selected: t,
            });
        },
    });
}
var sS = t(40389);
function sR(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        l((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, i.jsx)(tj.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tj.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(sL, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tg.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nY.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sL(e) {
    let { channel: n, closePopout: t, onSelect: l } = e,
        s = (0, tv.A)(n),
        a = (0, tS.A)(n),
        r = (0, tM.A)(n.id),
        d = (0, tO.A)(n),
        o = (0, tG.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        c = (0, tN.A)(n),
        h = (0, t_.A)(n),
        g = (0, tT.A)(n, "Toolbar Overflow"),
        m = (0, tR.A)(n),
        x = (0, sS.A)(n),
        p = (0, tk.A)(n),
        f = (0, tL.A)(n),
        j = i6.SY.useSetting(),
        I = (0, A.bG)([l7.A], () => !u().isEmpty(l7.A.getVoiceStatesForChannel(n.id)));
    return (0, i.jsxs)(tI.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(tb.rX, { children: [g, x] }),
            (0, i.jsxs)(tb.rX, {
                children: [
                    d,
                    m,
                    r,
                    j && !I
                        ? (0, i.jsx)(tb.Dr, {
                              id: "open",
                              label: Y.intl.string(Y.t.bX7EaG),
                              action: function () {
                                  (0, t1.JA)(n);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, i.jsxs)(tb.rX, { children: [p, s, a, h] }),
            (0, i.jsxs)(tb.rX, { children: [c, o] }),
        ],
    });
}
var sO = t(332456),
    sM = t(973854),
    sD = t(248537);
function sP(e) {
    var n;
    let l,
        { channelId: a, baseChannelId: r, channelViewSource: d = "Split View" } = e,
        o = (0, A.bG)([ek.A], () => ek.A.getChannel(a)),
        c = (0, A.bG)([nJ.A], () => nJ.A.getGuild(o?.getGuildId())),
        h = (0, th.Ay)(o);
    (n = o),
        (l = (0, A.bG)([l7.A], () => null != n && !u().isEmpty(l7.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            l &&
                null != n &&
                (nL.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tw.N9)(n, { source: tJ.H9.VOICE_AUTO_OPEN }));
        }, [l, n]);
    let g = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || g.current) return;
            g.current = !0;
            let e = (0, sO.C)(ek.A.getChannel(o.id), !0);
            (0, eS.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eS.qL)(o.id), channel_view: d }),
                (0, sM.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    let m = (0, i.jsx)(t9, { channel: o, baseChannelId: r });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ex.A, { channel: o, draftType: t7.C.ChannelMessage }),
            (0, i.jsx)(tg.Ay, {
                toolbar: m,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tm.zF)({
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
                        null != o && (0, tw.iN)(o.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: sD.T,
                children: (0, i.jsx)(tA.A, { channel: o, guild: c, chatInputType: nt.oU.SIDEBAR }, a),
            }),
        ],
    });
}
var sk = t(210714),
    sG = t(975732),
    sU = t(707554),
    sw = t(140735),
    sF = t(562153),
    sH = t(215530),
    sB = t(454719),
    sV = t(736653),
    sW = t(311016),
    sY = t(480335),
    sz = t(713517),
    sq = t(183555),
    sK = t(718019),
    sX = t(694720),
    sQ = t(915614),
    s$ = t(308244),
    sZ = t(743987),
    sJ = t(900179),
    s0 = t(946356),
    s1 = t(878555),
    s2 = t(35241),
    s3 = t(587168),
    s9 = t(744808);
let s7 = (0, t(945810).mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var s5 = t(416497);
let s8 = (e) => {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
};
function s4(e) {
    let { context: n, analyticsLocations: t, profileFrame: l, handleOpenProfile: s } = e,
        { showButton: a } = s7.useConfig({ location: "UserProfileSidebarFooter" }),
        r = a
            ? (0, i.jsx)("div", {
                  className: s5.qr,
                  children: (0, i.jsx)(ns.D, {
                      onClick: () => {
                          s(), (0, ip.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
                      },
                      className: s5.wC,
                      children: (0, i.jsx)(y.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: Y.intl.string(Y.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != l
        ? (0, i.jsxs)("div", { className: s5.xQ, children: [(0, i.jsx)(s9.A, { frame: l, filterLayer: s8 }), r] })
        : r;
}
var s6 = t(996988),
    ae = t(556818),
    an = t(523802);
function at(e) {
    let { user: n, channel: t } = e,
        l = __OVERLAY__ || !(0, sW.A)(n.id),
        a = (0, ij.Ay)(n.id),
        r = (0, sV.Ay)(),
        d = s.useRef(Date.now()),
        { analyticsLocations: o } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        u = s.useRef(null),
        { isHoveringOrFocusing: h, isHovering: A } = (0, sz.A)(u),
        g = () => {
            (0, sG.openUserProfileModal)({ sourceAnalyticsLocations: o, hideRestrictedProfile: !0, ...c });
        };
    return (0, i.jsx)(M.f5, {
        value: o,
        children: (0, i.jsx)(sq.of, {
            value: c,
            openedAt: d.current,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, i.jsxs)(s0.A, {
                ref: u,
                user: n,
                displayProfile: a,
                themeType: s6.d.SIDEBAR,
                themeOverride: r,
                children: [
                    (0, i.jsxs)(ti.d_, {
                        children: [
                            (0, i.jsx)(s3.A, { children: (0, i.jsx)(s2.A, { user: n }) }),
                            (0, i.jsxs)("div", {
                                className: ae.wx,
                                children: [
                                    (0, i.jsx)(sQ.A, {
                                        user: n,
                                        displayProfile: a,
                                        themeType: s6.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !h,
                                    }),
                                    (0, i.jsx)(sK.A, {
                                        user: n,
                                        displayProfile: a,
                                        channelId: t.id,
                                        themeType: s6.d.SIDEBAR,
                                        onOpenProfile: l ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: an.rf,
                                children: [
                                    (0, i.jsx)(s1.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sF.Ay.getName(null, t.id, n),
                                        onClickName: l ? void 0 : g,
                                        pronouns: a?.pronouns,
                                        trailing: (0, i.jsx)(sX.A, { displayProfile: a, themeType: s6.d.SIDEBAR }),
                                    }),
                                    (0, i.jsxs)(s0.A.Overlay, {
                                        className: an.Lw,
                                        children: [
                                            (0, i.jsx)(sJ.A, {
                                                heading: Y.intl.string(Y.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(s$.A, {
                                                    userBio: a?.bio,
                                                    userId: n.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: h,
                                                }),
                                            }),
                                            (0, i.jsx)(sJ.A, {
                                                heading: Y.intl.string(Y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, i.jsx)(sZ.A, { userId: n.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !l && (0, i.jsx)(s4, { handleOpenProfile: g, analyticsLocations: o, context: c }),
                    a?.profileEffect != null && (0, i.jsx)(sY.A, { skuId: a?.profileEffect?.skuId, isHovering: A }),
                ],
            }),
        }),
    });
}
var al = t(331322),
    ai = t(249790),
    as = t(254828),
    aa = t(783123),
    ar = t(735103);
function ad(e) {
    let { user: n, channel: t, onHide: l } = e,
        a = (0, ij.Ay)(n.id),
        r = (0, sV.Ay)(),
        d = (0, A.bG)([l9.A], () => l9.A.isBlocked(n.id)),
        { analyticsLocations: o } = (0, M.Ay)(d ? O.A.BLOCKED_PROFILE_PANEL : O.A.IGNORED_PROFILE_PANEL),
        c = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id }),
        u = s.useRef(null);
    return (0, i.jsx)(M.f5, {
        value: o,
        children: (0, i.jsx)(sq.of, {
            value: c,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, i.jsx)(s0.A, {
                ref: u,
                user: n,
                displayProfile: a,
                themeType: s6.d.SIDEBAR,
                themeOverride: r,
                children: (0, i.jsx)(ti.d_, {
                    children: (0, i.jsxs)("div", {
                        className: ar.kL,
                        children: [
                            (0, i.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ar.VH,
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: ar.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ar.N1,
                                        children: [
                                            (0, i.jsx)(ai.A, { user: n }),
                                            (0, i.jsx)(S.D, {
                                                variant: "heading-lg/bold",
                                                children: Y.intl.string(Y.t.b33pLD),
                                            }),
                                            (0, i.jsx)(y.E, {
                                                variant: "text-sm/medium",
                                                children: Y.intl.format(d ? Y.t["8F+WNz"] : Y.t["/cZp5s"], {
                                                    username: sF.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(al.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(aa.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    l(),
                                                        (0, ip.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: o,
                                                            ...c,
                                                        });
                                                },
                                            }),
                                            (0, i.jsx)(as.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    l(),
                                                        (0, ip.Wn)({
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
var ao = t(873174),
    ac = t(717421),
    au = t(31956),
    ah = t(361628),
    aA = t(673843),
    ag = t(561794),
    am = t(841595),
    ax = t(679492),
    ap = t(439053),
    af = t(312381),
    aj = t(349419),
    aI = t(984545),
    ab = t(193738),
    aC = t(700174),
    aE = t(983495),
    ay = t(695366),
    av = t(661531),
    aN = t(922590),
    a_ = t(821269),
    aT = t(93246),
    aS = t(351906),
    aR = t(383199),
    aL = t(559506),
    aO = t(361311),
    aM = t(931481),
    aD = t(501193),
    aP = t(383448),
    ak = t(646986),
    aG = t(243166);
function aU(e) {
    let { user: n, currentUser: t, displayProfile: l, channel: s, isHoveringOrFocusing: a, onOpenProfile: r } = e,
        { relationshipType: d, originApplicationId: o } = (0, A.cf)([l9.A], () => ({
            relationshipType: l9.A.getRelationshipType(n.id),
            originApplicationId: l9.A.getOriginApplicationId(n.id),
        })),
        c = (0, aN.fi)(n.id),
        u = (0, a_.q)({ userId: n.id }),
        h = (0, A.bG)([aS.A], () => aS.A.hidePersonalInformation),
        g = (0, A.bG)([am.A], () => am.A.getUserProfile(n.id)?.application);
    return (0, i.jsxs)("div", {
        className: an.rf,
        children: [
            (0, i.jsx)(aL.A, { userId: n.id }),
            (0, i.jsx)(s1.Ay, {
                user: n,
                guildId: s.guild_id,
                displayName: sF.Ay.getName(null, s.id, n),
                onClickName: r,
                displayNameTrailing: h ? null : (0, i.jsx)(aG.A, { userId: n.id, isVisible: a, onOpenProfile: r }),
                pronouns: l?.pronouns,
                trailing: (0, i.jsx)(sX.A, { displayProfile: l, themeType: s6.d.SIDEBAR }),
            }),
            d === er.eA$.PENDING_INCOMING &&
                (0, i.jsx)(s0.A.Overlay, {
                    children: (0, i.jsx)(aM.A, { user: n, channelId: s.id, applicationId: o }),
                }),
            c.map((e) =>
                (0, i.jsx)(
                    s0.A.Overlay,
                    {
                        children: (0, i.jsx)(aM.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(aP.A, { user: n }),
            l?.private &&
                (0, i.jsx)(s0.A.Overlay, { children: (0, i.jsx)(aD.A, { username: sF.Ay.getName(null, s.id, n) }) }),
            n.isProvisional &&
                (0, i.jsx)(s0.A.Overlay, {
                    children: (0, i.jsx)(sJ.A, {
                        heading: Y.intl.string(Y.t.Iyka0U),
                        headingIcon: (0, i.jsx)(ay.E, { size: "xxs", color: av.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(aT.T, { userId: n.id }),
                    }),
                }),
            (0, i.jsx)(ak.A, { user: n, currentUser: t, onOpenUserProfileModal: r }),
            (0, i.jsxs)(s0.A.Overlay, {
                className: an.Lw,
                children: [
                    !h &&
                        l?.bio != null &&
                        l?.bio !== "" &&
                        (0, i.jsx)(sJ.A, {
                            heading: Y.intl.string(Y.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(s$.A, {
                                userId: n.id,
                                userBio: l.bio,
                                isHoveringOrFocusing: a,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    g?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(aR.A, {
                            applicationId: g.id,
                            commandIds: g.popularApplicationCommandIds,
                            channel: s,
                        }),
                    u.length > 0 &&
                        (0, i.jsx)(sJ.A, {
                            heading: Y.intl.string(Y.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(aO.A, { applicationIds: u }),
                        }),
                    (0, i.jsx)(sJ.A, {
                        heading: n.bot ? Y.intl.string(Y.t["A//N4k"]) : Y.intl.string(Y.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(sZ.A, { userId: n.id }),
                    }),
                ],
            }),
        ],
    });
}
var aw = t(114212),
    aF = t(913453),
    aH = t(229187),
    aB = t(21241),
    aV = t(201934),
    aW = t(51943),
    aY = t(847374),
    az = t(320448),
    aq = t(680391);
function aK(e) {
    let { section: n, header: t, items: l, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, sq.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? aY.a : az._;
    return (0, i.jsxs)("section", {
        className: aq.uW,
        children: [
            (0, i.jsxs)(ns.D, {
                className: r()(aq.wx, aq.vk),
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
            l.length > 0 && (0, i.jsx)("ul", { id: c, hidden: !u, className: r()(aq.p_, a), children: l }),
        ],
    });
}
var aX = t(54557);
function aQ(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: l } = (0, M.Ay)(),
        { context: s } = (0, sq.NJ)(),
        a = (0, ty.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, aF.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, i.jsxs)(s0.A.Overlay, {
              className: aX.Lw,
              children: [
                  u &&
                      (0, i.jsx)(aK, {
                          section: "MUTUAL_GUILDS",
                          header: Y.intl.string(Y.t["4lTDZq"]),
                          listClassName: aX.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: l } = e;
                              return (0, i.jsx)(
                                  aW.A,
                                  { user: n, guild: t, nick: l, onSelect: () => (0, nZ.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, i.jsx)(aB.A, { className: aX.yF }),
                  c &&
                      (0, i.jsx)(aK, {
                          section: "MUTUAL_FRIENDS",
                          header: Y.intl.string(Y.t["0mTJ3j"]),
                          listClassName: aX.p_,
                          onExpand: () => (0, aH.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: aX.nC,
                                                children: [
                                                    (0, i.jsx)(aw.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, i.jsx)(aw.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, i.jsx)(
                                            aV.A,
                                            {
                                                user: a,
                                                status: r,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, sG.openUserProfileModal)({
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
var a$ = t(123292),
    aZ = t(853735),
    aJ = t(131607),
    a0 = t(84511),
    a1 = t(575593),
    a2 = t(587895),
    a3 = t(44120),
    a9 = t(532794),
    a7 = t(317560),
    a5 = t(533406),
    a8 = t(661492),
    a4 = t(212387),
    a6 = t(662349),
    re = t(369005);
function rn(e) {
    let { title: n, description: t, onClick: l } = e;
    return (0, i.jsxs)("div", {
        className: re.S,
        children: [
            (0, i.jsx)(ns.D, {
                onClick: l,
                className: re.H,
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
var rt = t(479026),
    rl = t(699976),
    ri = t(788868),
    rs = t(518477),
    ra = t(80223),
    rr = t(997990);
let rd = rl.Z.SIZE_90;
function ro(e) {
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
            singleCardInfo: g,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, sq.NJ)(),
        x = s.useCallback(() => {
            m({
                action: rs.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: l,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, l, h, m]),
        p = s.useCallback(() => {
            m({
                action: rs.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: l,
                productLines: new Set([n.productLine]),
            }),
                A();
        }, [A, n.id, l, n.productLine, m]),
        { label: f, icon: j, isPromptingPurchase: I } = (0, a6.h)({ wishlistOwner: t, isOwned: !1, shortText: !0 }),
        [b, C] = s.useState(!1);
    return (0, i.jsxs)(al.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: ra.kL,
                children: (0, i.jsx)(a4.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: rd,
                    cardStyle: r()(ra.Nr, d),
                    skuPreviewStyle: r()(ra.ho, o),
                    skuAssetClassName: b ? c : void 0,
                    onClick: x,
                    "aria-label": Y.intl.formatToPlainString(Y.t.ZBB4Ty, { productName: (0, a8.TC)(n) }),
                    onHoverOrFocusChange: C,
                    children: (0, i.jsx)(a6.A, {
                        spec: rd,
                        onClick: I ? p : x,
                        isHoveringOrFocusing: b,
                        label: f,
                        icon: j,
                    }),
                }),
            }),
            a && (0, i.jsx)(rn, { title: g.title, description: g.description, onClick: x }),
        ],
    });
}
function rc(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        r = (0, eb.bG)([a2.A], () => a2.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(l ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a5.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        c = s.useCallback(() => {
            (0, a7.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        u = s.useMemo(
            () => ({ title: n.name, description: Y.intl.format(Y.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, i.jsx)(ro, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: c,
        onPurchaseClick: o,
        singleCardInfo: u,
        ...a,
    });
}
function ru(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        d = s.useCallback(() => {
            (0, a3.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, l]),
        o = (0, rt.e)({ sku: n, giftRecipient: t, giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST, analyticsLocations: l }),
        c = s.useMemo(() => {
            switch (n?.tenantMetadata?.collectibles?.type) {
                case a1.R.PROFILE_EFFECT:
                case a1.R.NAMEPLATE:
                    return;
                case a1.R.AVATAR_DECORATION:
                    return r()(ra.ML, ra._P);
                default:
                    return r()(ra.ML, ra.ZY);
            }
        }, [n?.tenantMetadata?.collectibles?.type]),
        u = s.useMemo(
            () => ({
                title: n.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return Y.intl.string(Y.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a1.R.AVATAR_DECORATION:
                            return Y.intl.string(Y.t["7v0T9P"]);
                        case a1.R.PROFILE_EFFECT:
                            return Y.intl.string(Y.t.wR5wOo);
                        case a1.R.NAMEPLATE:
                            return Y.intl.string(Y.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, i.jsx)(ro, {
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
function rh(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        r = s.useCallback(() => {
            (0, a9.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: ri.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: l ?? [],
            });
        }, [n.id, t, l]),
        d = s.useMemo(() => ({ title: n.name, description: Y.intl.string(Y.t.Ipxkog) }), [n.name]);
    return (0, i.jsx)(ro, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: l,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rr.MO,
        disableRiveHover: !0,
        singleCardInfo: d,
        ...a,
    });
}
function rA(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(rc, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, i.jsx)(ru, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, i.jsx)(rh, { sku: n, ...t });
        default:
            return null;
    }
}
var rg = t(535089),
    rm = t(617348);
function rx(e) {
    let { unownedWishlistItems: n = [], profileOwner: t, onClick: l, wishlistId: a, title: r } = e,
        { analyticsLocations: d } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: o } = (0, sq.NJ)(),
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
        m = (0, rg.A)({ wishlistId: a ?? null, onAction: u, productLines: A }),
        x = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, i.jsx)(
                                  rA,
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
                    .filter(iR.Vq),
            [d, l, t, n.length, h, a],
        ),
        [p, f] = (0, aJ.RF)(
            g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, aZ.c)(g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        j = p !== g.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === x.length
        ? null
        : (0, i.jsx)("section", {
              "aria-labelledby": c,
              children: (0, i.jsxs)(s0.A.Overlay, {
                  ref: m,
                  className: rm.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rm.wx,
                          children: [
                              (0, i.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? Y.intl.string(Y.t["7lZ31J"]),
                              }),
                              n.length > 3 &&
                                  (0, i.jsx)(a$.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: l,
                                      text: Y.intl.string(Y.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, i.jsxs)(sU.F, {
                          children: [
                              (0, i.jsx)("div", { className: rm.vY, children: x }),
                              !j &&
                                  A.has(er.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, i.jsx)(a0.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: rm.EK,
                                      onDismiss: () => f(l8.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function rp(e) {
    let { user: n, currentUser: t, channel: l } = e,
        a = __OVERLAY__,
        r = (0, ij.Ay)(n.id),
        d = (0, sV.Ay)(),
        o = s.useRef(Date.now()),
        { analyticsLocations: c } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        u = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: l.id }),
        h = s.useRef(null),
        { isHoveringOrFocusing: g, isHovering: m } = (0, sz.A)(h),
        x = (0, ax.fC)(),
        p = (0, ah.A)(r?.profileFrame?.skuId, "UserProfileSidebar");
    (0, au.A)({ skuId: r?.profileFrame?.skuId, openedAt: o.current, context: u, analyticsLocations: c });
    let f = (0, ac.z)({ opacity: +(null != x.interactionType), config: { duration: 150 } }),
        j = (e) => {
            (0, sG.openUserProfileModal)({ sourceAnalyticsLocations: c, hideRestrictedProfile: !0, ...u, ...e });
        },
        I = r?.widgets != null && r.widgets.length > 0,
        { defaultWishlistId: b } = (0, A.cf)([am.A], () => ({ defaultWishlistId: am.A.getFirstWishlistId(n.id) })),
        { wishlist: C } = (0, ag.fw)({ wishlistId: b, userId: n.id });
    (0, aA.A)(C);
    let E = s.useMemo(() => (null == C ? null : C.items.filter((e) => !e.isOwned)), [C]);
    return (0, i.jsx)(M.f5, {
        value: c,
        children: (0, i.jsx)(sq.of, {
            value: u,
            openedAt: o.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, i.jsx)(ax.Hl, {
                value: x,
                children: (0, i.jsxs)(s0.A, {
                    ref: h,
                    user: n,
                    displayProfile: r,
                    themeType: s6.d.SIDEBAR,
                    themeOverride: d,
                    isPrivate: r?.private === !0,
                    children: [
                        r?.private === !0 && (0, i.jsx)(af.A, {}),
                        null != x.interactionType && (0, i.jsx)(ao.animated.div, { style: f, className: ae.tB }),
                        (0, i.jsxs)(ti.d_, {
                            className: null != p ? ae.It : void 0,
                            children: [
                                (0, i.jsxs)(s3.A, {
                                    children: [
                                        (0, i.jsx)(ab.A, { user: n, themeType: s6.d.SIDEBAR }),
                                        n.bot ? (0, i.jsx)(aI.A, { user: n }) : (0, i.jsx)(aC.yo, { user: n }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: ae.wx,
                                    children: [
                                        (0, i.jsx)(sQ.A, {
                                            user: n,
                                            displayProfile: r,
                                            themeType: s6.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !g,
                                            className: ae.vK,
                                        }),
                                        (0, i.jsx)(ap.A, { userId: n.id, className: ae.oR }),
                                        (0, i.jsx)(sK.A, {
                                            user: n,
                                            displayProfile: r,
                                            channelId: l.id,
                                            themeType: s6.d.SIDEBAR,
                                            onOpenProfile: a ? void 0 : j,
                                        }),
                                        (0, i.jsx)(aE.A, {
                                            user: n,
                                            channelId: l.id,
                                            themeType: s6.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(aU, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: r,
                                    channel: l,
                                    isHoveringOrFocusing: null == x.interactionType && g,
                                    onOpenProfile: a ? void 0 : j,
                                }),
                                I &&
                                    (0, i.jsx)("div", {
                                        className: ae.sJ,
                                        children: (0, i.jsx)(aj.A, {
                                            user: n,
                                            widgets: r.widgets,
                                            onOpenUserProfileModal: j,
                                        }),
                                    }),
                                null != E &&
                                    E.length > 0 &&
                                    (0, i.jsx)("div", {
                                        className: ae.vS,
                                        children: (0, i.jsx)(rx, {
                                            profileOwner: n,
                                            unownedWishlistItems: E,
                                            wishlistId: b,
                                            title: Y.intl.string(Y.t["7lZ31J"]),
                                            onClick: () => {
                                                j?.({ tabSection: rs.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(aQ, { user: n, channelId: l.id }),
                            ],
                        }),
                        !a &&
                            (0, i.jsx)(s4, {
                                context: u,
                                analyticsLocations: c,
                                profileFrame: p,
                                handleOpenProfile: j,
                            }),
                        r?.profileEffect != null && (0, i.jsx)(sY.A, { skuId: r?.profileEffect?.skuId, isHovering: m }),
                    ],
                }),
            }),
        }),
    });
}
function rf(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        l = (0, A.bG)([J.default], () => J.default.getUser(t)),
        a = (0, A.bG)([J.default], () => J.default.getCurrentUser()),
        r = iI(),
        [d, o] = (0, sH.A)(t);
    if (
        (s.useEffect(() => {
            (0, sB.A)(l ?? t, {
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
        u = sF.Ay.getName(null, n.id, l);
    return (0, i.jsx)("aside", {
        "aria-labelledby": c,
        children: (0, i.jsx)(sU.F, {
            component: (0, i.jsx)(sw.A, {
                children: (0, i.jsx)(sU.H, { id: c, children: Y.intl.format(Y.t.KRe1Fk, { name: u }) }),
            }),
            children: d
                ? (0, i.jsx)(ad, { user: l, currentUser: a, onHide: o, ...e })
                : l.isNonUserBot()
                  ? (0, i.jsx)(at, { user: l, currentUser: a, ...e })
                  : (0, i.jsx)(rp, { user: l, currentUser: a, ...e }),
        }),
    });
}
var rj = t(522556),
    rI = t(225315),
    rb = t(684407),
    rC = t(95701),
    rE = t(919638),
    ry = t(763827),
    rv = t(812771),
    rN = t(946228),
    r_ = t(462887),
    rT = t(276293),
    rS = t(96361),
    rR = t(745652);
let rL = () => {
    let e = (0, sV.Ay)();
    s.useEffect(() => {
        eS.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, r_.M)(e) ? rR : "/assets/a51b44063e9d3bdb.svg";
    return (0, i.jsxs)("div", {
        className: rS.kL,
        children: [
            (0, i.jsxs)(lW.A, {
                toolbar: (0, i.jsx)(s.Fragment, {}),
                children: [
                    (0, i.jsx)(lW.A.Icon, { icon: rT.N, "aria-hidden": !0 }),
                    (0, i.jsx)(lW.A.Title, { children: Y.intl.string(Y.t["8LKchl"]) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: rS.Qs,
                children: [
                    (0, i.jsx)("img", { alt: "", className: rS.j0, src: n }),
                    (0, i.jsx)(S.D, {
                        className: rS.Zd,
                        variant: "heading-lg/medium",
                        children: Y.intl.string(Y.t.m9gRVN),
                    }),
                    (0, i.jsx)(y.E, {
                        className: rS.fh,
                        variant: "text-md/normal",
                        children: Y.intl.string(Y.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rO = t(943712),
    rM = t(402216),
    rD = t(746080),
    rP = t(806931),
    rk = t(165610),
    rG = t(516607),
    rU = t(964623);
let rw = () => (0, i.jsx)("div", { className: rU.wG, children: (0, i.jsx)(x.y, {}) }),
    rF = (0, nS.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("56386"),
                t.e("64801"),
                t.e("4352"),
                t.e("49681"),
                t.e("21044"),
                t.e("33097"),
                t.e("4374"),
                t.e("21225"),
                t.e("23685"),
                t.e("42516"),
                t.e("76241"),
            ]).then(t.bind(t, 563817)),
        webpackId: 563817,
        renderLoader: rw,
        name: "ForumChannel",
    }),
    rH = () =>
        Promise.all([
            t.e("82397"),
            t.e("15680"),
            t.e("5980"),
            t.e("54518"),
            t.e("67485"),
            t.e("9987"),
            t.e("95700"),
            t.e("64422"),
            t.e("56386"),
            t.e("19397"),
            t.e("8516"),
            t.e("11491"),
            t.e("95109"),
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
    rB = (0, nS.Fe)({ createPromise: rH, webpackId: 540462, name: "ChannelCall", renderLoader: rw }),
    rV = () =>
        Promise.all([
            t.e("56386"),
            t.e("81857"),
            t.e("54518"),
            t.e("67485"),
            t.e("9987"),
            t.e("95700"),
            t.e("64422"),
            t.e("82397"),
            t.e("15680"),
            t.e("5980"),
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
    rW = (0, nS.Fe)({ createPromise: rV, webpackId: 67319, name: "StageChannelCall", renderLoader: rw }),
    rY = (0, nS.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("4352"),
                t.e("11394"),
                t.e("4974"),
                t.e("25812"),
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
        renderLoader: () => (0, i.jsx)(iw, {}),
    }),
    rz = (0, nS.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("64422"),
                t.e("72888"),
                t.e("25812"),
                t.e("1472"),
                t.e("83852"),
                t.e("44710"),
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
class rq extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, sk.d)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? rH() : e === er.rbe.GUILD_STAGE_VOICE && rV();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tw.iN)(e.id);
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
            (0, sG.openUserProfileModal)({
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
        return e?.hasFlag(rD.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(ll.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, i.jsx)(nl.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== rP.lp.STREAM
            ? null
            : (0, i.jsx)(
                  ln.A,
                  { size: rM.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
            lj.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
                break;
            case er.rbe.DM:
                d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, i.jsx)(ie, { channel: e }, "calls")),
                    d.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    d.push(
                        (0, i.jsx)(
                            it.Ay,
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
                    d.push((0, i.jsx)(ib, { channel: e, showCallOrActivityPanel: l || s || a }, "profile")),
                    d.push((0, i.jsx)(iu, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                d.push(this.renderJoinRequestInterviewButtons()),
                    d.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    d.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    d.push((0, i.jsx)(ie, { channel: e }, "calls")),
                    d.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    e.isManaged() ||
                        d.push(
                            (0, i.jsx)(
                                it.Ay,
                                { channel: e, tooltip: c ? Y.intl.string(Y.t.FFxUQ0) : Y.intl.string(Y.t.AQAPts) },
                                "invite",
                            ),
                        ),
                    d.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && d.push((0, i.jsx)(tq, { channel: e })),
                    null == n || n.isForumLikeChannel() || d.push((0, i.jsx)(sT, { channel: n }, "browser")),
                    e.isVocalThread() && d.push((0, i.jsx)(im, { channel: e }, "thread-call")),
                    d.push((0, i.jsx)(t0, { channel: e }, "notifications")),
                    d.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    e.isArchivedThread() || d.push((0, i.jsx)(lv, { channelId: e.id }, "members")),
                    null != n && (0, ef.pk)(e) && d.push((0, i.jsx)(lD, { channel: e }, "summaries")),
                    d.push((0, i.jsx)(sR, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                d.push((0, i.jsx)(sT, { channel: e }, "browser")),
                    t || d.push((0, i.jsx)(lN.A, { channel: e }, "notifications")),
                    d.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    (0, ni.fw)("channel_header") && d.push((0, i.jsx)(lE, { channelId: e.id }, "conversations")),
                    d.push((0, i.jsx)(lv, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && d.push((0, i.jsx)(lD, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                t ||
                    (d.push((0, i.jsx)(lV, { channel: e }, "forum-onboarding")),
                    d.push((0, i.jsx)(lN.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || d.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                d.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
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
                n.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                n.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e
            ? (0, i.jsx)("div", {
                  className: rU.u8,
                  children: (0, i.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(Y.t["3aOv+h"]),
                      onClick: () =>
                          (0, m.openModalLazy)(async () => {
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
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tw.iN)(e.id) : void 0,
            g = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            m = d || c,
            x = a || m;
        return (0, i.jsxs)("div", {
            className: rU.SC,
            children: [
                (0, i.jsx)(f.N, {
                    theme: u && a ? er.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, i.jsxs)(
                            lW.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rU.DD, a, { [rU.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": Y.intl.string(Y.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(tm.i$, { channel: e, guild: l, caretPosition: "right" }),
                                    (0, tm.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: l,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: g,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: rU.u8,
                                              children: (0, i.jsx)(p.$, {
                                                  onClick: () => (0, tx.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: Y.intl.string(Y.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tm.EP)(e, l),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, i.jsx)(ik.A, { channelId: e.id }),
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
                return (0, i.jsx)(rW, { channel: e, popoutType: nn.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, i.jsx)(
                    rB,
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
                ? (0, i.jsx)(lc, { guildId: n.id })
                : (0, i.jsx)(li.H, { guildId: n.id, children: (0, i.jsx)(lp, { channelId: e.id, guildId: n.id }) });
        if (l) return (0, i.jsx)(rj.A, { guild: n, channelId: e.id });
        if (null != s) return (0, i.jsx)(iV.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (a && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, i.jsx)(to, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, i.jsx)(rF, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (0, i.jsx)(tA.A, { channel: e, guild: n, chatInputType: nt.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, i.jsx)(rf, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, i.jsx)(iP, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(rN.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(rN.A, { channel: n }, `channel-members-${n.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, i.jsx)(eg, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, i.jsx)(nT, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, i.jsx)(rY, { guildId: t?.id, channelId: e.id });
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
                    (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("38763").then(t.bind(t, 201510));
                            return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => lt(iv.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, m.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("71898"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, rI.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                case iH.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(sp, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location,
                    });
                    break;
                case iH.PE.VIEW_THREAD:
                    let t = n?.isForumLikeChannel() ? t4 : sP;
                    e = (0, i.jsx)(t, { channelId: l.channelId });
                    break;
                case iH.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(sP, { channelId: l.channelId, baseChannelId: l.baseChannelId });
                    break;
                case iH.PE.VIEW_CHANNEL:
                case iH.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== iH.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, i.jsx)("div", {
                    style: { width: er.da6 },
                    className: rU.uC,
                    children: (0, i.jsx)(rz, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => iF.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = a - er.MdR - o;
        return (
            (c += 375),
            (0, i.jsx)(rv.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rv.X.PostSidebar : rv.X.ThreadSidebar,
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
        if (l) return (0, i.jsx)(rL, {});
        if (null == e) return (0, i.jsx)(rO.A, { channelId: this.props.channelId });
        let g = a === er.YvQ.SIDEBAR_CHAT,
            m = null != o && !g,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nR.HI, { location: p, subsection: t ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rU.TE, { [rU.js]: g || m, [rU.jl]: g && h }),
                    children: [
                        x
                            ? (0, i.jsx)(ex.A, {
                                  style: { right: g ? u : void 0 },
                                  className: rU.x4,
                                  channel: e,
                                  draftType: t7.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: r()(rU.Qs, { [rU.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let rK = (0, ep.A)(rq),
    rX = s.memo(function (e) {
        var n, t;
        let l,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eG.A], () => eG.A.getChannelId()),
            c = (0, A.bG)([eG.A], () => eG.A.getVoiceChannelId()),
            x = (0, A.bG)([ek.A], () => a ?? ek.A.getChannel(o), [o, a]),
            p = (0, tu.DZ)(),
            f = (0, tu.e4)(x, "ConnectedChannel"),
            I = (0, A.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, A.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            E = (0, A.bG)([nJ.A], () => nJ.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, ls.A)(f?.id ?? void 0),
            v = (0, A.bG)([ne.A], () => {
                let e = null != o ? ne.A.getParticipants(o) : [],
                    n = null != o ? ne.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, le.A)(),
            _ = (0, A.bG)([eG.A], () => (N?.channelId ?? eG.A.getVoiceChannelId()) === f?.id),
            T = (0, A.bG)([eI.Ay], () => (null != f ? eI.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, A.bG)([ry.A], () => ry.A.isConnected()),
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
                [l7.A],
                () => null != f && f.isVocalThread() && !u().isEmpty(l7.A.getVoiceStatesForChannel(f.id)),
                [f],
            ),
            k = null != f && f.isPrivate() && !D && v,
            G = f?.isGuildVocal() || k || P,
            U = (0, A.bG)([t6.A], () => t6.A.getFrameLayoutMode() === rk.y.FOCUSED),
            { welcomeModalChannelId: w } = (0, h.zy)(),
            F = (0, A.bG)([tQ.A], () => null != f && tQ.A.isLurking(f.guild_id), [f]),
            H = (0, A.bG)([rb.A], () => rb.A.hasSeen(f?.guild_id, F), [f, F]),
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
                (l = (0, A.bG)([nJ.A, iy, J.default, X.Ay], () => {
                    let e = nJ.A.getGuild(n);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === iy.hasViewedPrompt(iv.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = J.default.getCurrentUser();
                    if (null == t) return null;
                    let l = X.Ay.getMember(e.id, t?.id);
                    return l?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != l && (l || lt(iv.REAL_NAME_PROMPT, n));
                }, [l, n]),
                !0 === l),
            W =
                ((t = E?.id),
                (0, A.bG)([ek.A, nJ.A, eG.A], () => {
                    let e = nJ.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ek.A.getChannel(w);
                    return w === eG.A.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rC.ke)(n.type);
                })),
            { section: Y, channelSidebarState: z } = (0, A.cf)(
                [lb.Ay],
                () => ({ section: lb.Ay.getSection(o, f?.isDM()), channelSidebarState: lb.Ay.getSidebarState(o) }),
                [o, f],
            ),
            q = E?.id,
            K = (0, A.bG)([lb.Ay], () => lb.Ay.getGuildSidebarState(q), [q]),
            $ = (0, i_.lI)(),
            Z = (0, th.Ay)(f),
            ee = (0, th.Ay)(f, !0),
            en = (0, A.bG)([ne.A], () => (null != f ? ne.A.getSelectedParticipant(f.id) : null)),
            el = (0, e4.vL)(f),
            ei = (0, iB.Uf)(f),
            es = null != f && c === f.id,
            ea = null != f && f.isGuildStageVoice(),
            { enabled: ed } = lf.A.useConfig({
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
                        (0, e8.A)(s, t), n?.();
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
                let e = (0, tx.JK)();
                if (e?.location?.state?.stageInviteKey === rG.J2) {
                    let { channelId: n } = (0, iN.vu)(e?.location?.pathname) ?? {};
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
                null != r && null != e && ea && e.id === r && !n && ((0, iW.av)(e), d(null));
            }, [r, ea]);
        let eu = (0, ef.cI)(f),
            eh = null != f && f.isPrivate(),
            eA = (0, ej.A)(eh),
            eg = (0, ej.A)(f?.id);
        s.useEffect(() => {
            let e = eA && !eh,
                n = eA && eh && f?.id !== eg;
            (e || n) && (0, tc.Dr)(g.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: l8.i.AUTO });
        }, [f?.id, eg, eh, eA]);
        let em = (0, m.useHasAnyModalOpen)();
        return (0, i.jsx)(rK, {
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
            hasModalOpen: em,
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
            isUnavailable: (0, A.bG)([rE.A], () => f?.guild_id != null && rE.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: V,
            showWelcomeModal: !H && W,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([l7.A], () => ({ hasVideo: null != f && l7.A.hasVideo(f.id) }), [f]),
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
