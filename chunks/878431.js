t.r(n), t.d(n, { default: () => r2 }), t(321073);
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
    eu = 44 + ea.b,
    eh = s.memo(function (e) {
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
                                t.e("39431"),
                                t.e("26132"),
                                t.e("46652"),
                                t.e("93190"),
                                t.e("60195"),
                                t.e("94000"),
                                t.e("91994"),
                                t.e("76665"),
                                t.e("24198"),
                                t.e("86169"),
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
    eA = s.memo(function (e) {
        let { id: n, label: t, count: l, guildId: s } = e,
            a = (0, G.$7)({ roleId: n, guildId: s, size: 16 });
        return n === er.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: eo.lL, children: (0, i.jsx)("div", { className: eo.k1 }) })
            : (0, i.jsxs)(P.A, {
                  className: eo.lL,
                  "aria-label": Y.intl.formatToPlainString(Y.t.Uaqbke, { title: t, count: l }),
                  children: [
                      null != a ? (0, i.jsx)(U.A, { className: eo.UT, ...a }) : null,
                      (0, i.jsxs)("span", { "aria-hidden": !0, children: [t, " — ", l] }),
                  ],
              });
    }),
    em = s.memo(function (e) {
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
    var n, t;
    let l,
        a,
        d,
        o,
        c,
        { channel: h, guild: m } = e,
        g = `members-${h.id}`,
        { analyticsLocations: x } = (0, M.Ay)(O.A.MEMBER_LIST),
        p = (function (e, n) {
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
        })(h.id, m),
        f = p.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: j, listRef: I } =
            ((n = g),
            (t = eu),
            (l = (0, A.bG)([L.A], () => L.A.keyboardModeEnabled)),
            (a = s.useRef(null)),
            (d = s.useCallback(
                (e, n) => {
                    let l = a.current;
                    if (null == l) return;
                    let i = parseInt(n, 10),
                        [s, r] = l.getSectionRowFromIndex(i),
                        d = 0 === s && 0 === r ? t : 0;
                    l.scrollToIndex({
                        section: s,
                        row: r,
                        padding: d,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [t],
            )),
            (o = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = a.current;
                        if (null == n) return e();
                        n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (c = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = a.current;
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
                navigator: (0, C.Ay)({ id: n, setFocus: d, isEnabled: l, scrollToStart: o, scrollToEnd: c }),
                listRef: a,
            }),
        E = 0 === p.length || p.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            en.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: h.id,
                channel_type: h.type,
                guild_id: h.guild_id,
            });
        }, [h.guild_id, h.id, h.type]),
        E)
    )
        return (0, i.jsx)(ex, { channel: h });
    let y = u().omit(j.containerProps, ["ref"]),
        v = el.wT(m);
    return (0, i.jsx)(M.f5, {
        value: x,
        children: (0, i.jsx)(b.hD, {
            navigator: j,
            children: (0, i.jsx)(N.sk, {
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: r()(eo.yg, eo.ML, ed.kL),
                        children: (0, i.jsx)(
                            _.OZ,
                            {
                                ref: I,
                                className: eo.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = p[n];
                                    return (0, i.jsx)(
                                        eA,
                                        { id: t.id, label: t.label, count: t.userIds.length, guildId: m.id },
                                        t.id,
                                    );
                                },
                                rowHeight: eu,
                                renderRow: (e) => {
                                    let { section: n, row: t } = e,
                                        { userIds: l, id: s } = p[n];
                                    return (0, i.jsx)(
                                        eh,
                                        { channel: h, sectionId: s, userId: l[t], guildOwnerId: v },
                                        l[t],
                                    );
                                },
                                footerHeight: (e) => 80 * (p[e] === f && h.type === er.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    p[e.section] === f ? (0, i.jsx)(em, { channel: h }, "footer") : null,
                                innerAriaLabel: Y.intl.string(Y.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: p.map((e) => e.userIds.length),
                                fade: !0,
                                ...y,
                                ...e,
                            },
                            g,
                        ),
                    }),
            }),
        }),
    });
}
function ex(e) {
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
var ep = t(738876),
    ef = t(456412),
    ej = t(432371),
    eI = t(475743),
    eb = t(933958),
    eC = t(702841),
    eE = t(567249),
    ey = t(811024),
    ev = t(969151),
    eN = t(108959),
    e_ = t(990078),
    eT = t(446576),
    eS = t(817281),
    eR = t(95561),
    eL = t(587837),
    eO = t(982484),
    eM = t(964404),
    eD = t(204651),
    eP = t(383831),
    ek = t(128286),
    eG = t(734057),
    eU = t(309010),
    ew = t(795816),
    eF = t(685399),
    eH = t(216418),
    eB = t(620148),
    eV = t(732637),
    eW = t(104171),
    eY = t(47294),
    ez = t(594007),
    eq = t(16961),
    eK = t(138017),
    eX = t(715482),
    eQ = t(315502),
    e$ = t(222823),
    eZ = t(234320),
    eJ = t(5867),
    e0 = t(702321);
function e1(e) {
    let { channelId: n, className: t, ...l } = e,
        a = s.useRef(null),
        r = (0, A.bG)([eb.Ay], () => eb.Ay.getFocusedLayout() === eJ.E8.RESIZABLE),
        d = s.useCallback(() => {
            let e = r ? eJ.E8.NO_CHAT : eJ.E8.RESIZABLE;
            (0, ew.i5)(e);
        }, [r]),
        { unreadCount: o, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: l } = (0, A.cf)(
                    [e$.Ay],
                    () => ({ unreadCount: e$.Ay.getUnreadCount(e), mentionCount: e$.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: l, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            a.current?.focus();
        }, []);
    (0, eZ.Vo)({ event: er.jej.FOCUS_CHAT_BUTTON, handler: h });
    let m = r ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        g = [m];
    u > 0 && g.push(Y.intl.formatToPlainString(Y.t["3l1GOx"], { mentionCount: u })),
        o > 0 && g.push(Y.intl.string(Y.t.x5zAGZ));
    let x = (0, A.bG)([eb.Ay], () => eb.Ay.getFocusedLayout()),
        p = u > 0 ? u : o,
        f = p > 0;
    return (0, i.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, i.jsx)(eD.l, {
                isTrayButton: !0,
                buttonRef: a,
                onClick: d,
                label: m,
                "aria-label": g.join(", "),
                tooltipPosition: "top",
                iconComponent: x === eJ.E8.NO_CHAT ? eK.j : eX.g,
                themeable: !0,
                className: t,
                ...l,
            }),
            f ? (0, i.jsx)(eQ.A, { hasMentions: u > 0, truncatedCount: p > 99 ? "99+" : p, className: e0.qS }) : null,
        ],
    });
}
var e2 = t(141160);
let e9 = eW.DN.SIZE_32,
    e3 = { [eJ.E8.NO_CHAT]: e2.Oo, [eJ.E8.RESIZABLE]: e2.Ig };
function e5(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: l } = e,
        a = (0, eB.A)(),
        d = (0, A.yK)([eb.Ay], () => eb.Ay.getEmbeddedActivitiesForLocation(t), [t]),
        o = (0, ev.H)(t),
        c = (0, A.bG)([eG.A], () => eG.A.getChannel(o)),
        u = (0, eF.IQ)(d),
        h = (0, eF.Rz)(u),
        m = s.useCallback(() => {
            (0, ew.gk)(eJ.Gd.PIP);
        }, []),
        g = s.useRef(null),
        x = (0, A.bG)([eb.Ay], () => eb.Ay.getFocusedLayout()),
        p = x !== eJ.E8.NO_CHAT,
        [j, I] = s.useState(eM.Ay.activityPanelHeight ?? n ?? null),
        b = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
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
    let N = E.width / Math.max(E.height, 1) < eJ.B5,
        _ = 0,
        T = 0,
        S = (0, eH.A)(a?.id);
    if (!S) {
        let e = E.width,
            n = E.height;
        N
            ? ((n = E.width / eJ.B5) > E.height && (e = (n = E.height) * eJ.B5), (T = (E.height - n) / 2))
            : ((e = Math.min(E.height * eJ.B5)) > E.width && (n = (e = E.width) / eJ.B5), (_ = (E.width - e) / 2));
    }
    let R = h.get(a?.id ?? ""),
        O = (0, A.bG)([eU.A], () => eU.A.getChannelId()),
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
            let l = (0, eI.A)(e),
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
        k = (0, eq.G)();
    if (null == a) return null;
    let G = [];
    null != R &&
        (G = Array.from(R.embeddedActivity.userIds)
            .map((e) => J.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let U = (e) => {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let n = D.get(e.id),
            t = n?.nick ?? ei.Ay.getName(e);
        return (0, i.jsx)(
            e_.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e9), alt: t, className: e2.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(f.N, {
        theme: er.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(e2.iE, e3[x], e),
                ref: g,
                style: P,
                children: [
                    l?.(),
                    (0, i.jsx)(eO.A, { applicationId: a.id }),
                    (0, i.jsxs)("div", {
                        className: e2.lq,
                        children: [
                            p
                                ? null
                                : (0, i.jsx)("div", {
                                      className: e2.wx,
                                      children: (0, i.jsx)(y.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: e2.qd,
                                          children: a?.name,
                                      }),
                                  }),
                            (0, i.jsx)("div", {
                                className: r()(e2.ht, { [e2.kK]: S }),
                                style: { paddingLeft: _, paddingRight: _, paddingTop: T, paddingBottom: T },
                                ref: C,
                                children: (0, i.jsx)(eV.A, { className: e2.pU, embedId: (0, ez.A)(t.id, a.id) }),
                            }),
                            null != O
                                ? (0, i.jsxs)("div", {
                                      className: e2.qr,
                                      children: [
                                          (0, i.jsx)(eW.Ay, {
                                              renderIcon: !1,
                                              users: G,
                                              size: e9,
                                              max: 6,
                                              renderUser: U,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e2.Hq,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: e2.qi,
                                                      children: [
                                                          (0, i.jsx)(e1, { channelId: O }),
                                                          (0, i.jsx)(eD.l, {
                                                              isTrayButton: !0,
                                                              label: Y.intl.string(Y.t.brPQ5U),
                                                              onClick: m,
                                                              iconComponent: eT.g,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: e2.pt,
                                                      children: (0, i.jsx)(eP.A, {
                                                          applicationId: a.id,
                                                          location: t,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          k
                                              ? (0, i.jsx)(ek.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, eR.zV)(er.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, eY.A)({
                                                                onConfirm: async () => {
                                                                    a?.id != null &&
                                                                        null != o &&
                                                                        (await (0, ew.od)(a.id, o)),
                                                                        (0, ew.jp)();
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
                        ? (0, i.jsx)(eL.A, {
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
        } = (0, eC.cf)([eb.Ay], () => {
            let e = eb.Ay.getConnectedActivityLocation(),
                n = eb.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ev.H)(e),
                connectedActivity: n,
                activityPanelMode: eb.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eC.bG)([eE.A], () => eE.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, ey.Gp)(l)) return null;
    let d = s?.applicationId;
    return a !== eJ.Gd.PANEL || null == d || r || null == l || null == s || (0, eN.A)(l)
        ? null
        : (0, i.jsx)(e5, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e4 = t(90804),
    e8 = t(748975),
    e6 = t(323073),
    ne = t(568598),
    nn = t(313961),
    nt = t(164617),
    nl = t(355622),
    ni = t(689874),
    ns = t(828488),
    na = t(939249),
    nr = t(408278),
    nd = t(624479),
    no = t(691540),
    nc = t(857250),
    nu = t(97483),
    nh = t(534890),
    nA = t(39623),
    nm = t(952270),
    ng = t(835835),
    nx = t(381849),
    np = t(927813),
    nf = t(995273),
    nj = t(957565),
    nI = t(935208),
    nb = t(256331),
    nC = t(141850),
    nE = t(958720),
    ny = t(701952),
    nv = t(84593);
function nN(e, n) {
    if (e.length !== n.length) return !1;
    for (let t = 0; t < e.length; t++) if (e[t].conversation.id !== n[t].conversation.id) return !1;
    return !0;
}
let n_ = ["high", "medium", "low"],
    nT = s.memo(function (e) {
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
                              n_.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            o = d?.severity ?? null,
            c = d?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: nv.UO,
            children: [
                (0, i.jsx)(y.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: nv.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: nv.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: nv.a7,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : t ? "status-positive" : "status-danger",
                                    children: null == n ? "—" : t ? "✓" : "✗",
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
                            className: nv.a7,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : l ? "status-positive" : "status-danger",
                                    children: null == n ? "—" : l ? "✓" : "✗",
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
                            className: nv.a7,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == n || "unknown" === r
                                            ? "text-muted"
                                            : "passed" === r
                                              ? "status-positive"
                                              : "status-danger",
                                    children: null == n || "unknown" === r ? "—" : "passed" === r ? "✓" : "✗",
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
    nS = s.memo(function (e) {
        let { conversation: n, color: t, scrollTarget: l, onJump: a } = e,
            r = s.useRef(null);
        s.useEffect(() => {
            null != l && null != r.current && r.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [l]);
        let d = nI.default.extractTimestamp(n.startMessageId),
            o = nI.default.extractTimestamp(n.endMessageId),
            c = (function (e) {
                let { timestamp: n, abbreviated: t = !0 } = e,
                    [l, i] = s.useState(() => (0, nf.jb)(n, t));
                return (
                    s.useEffect(() => {
                        i((0, nf.jb)(n, t));
                        let e = Date.now() - n;
                        if (e > np.A.Millis.DAY) return;
                        let l = e >= np.A.Millis.HOUR ? np.A.Millis.HOUR : np.A.Millis.MINUTE,
                            s = setInterval(
                                () => {
                                    i((0, nf.jb)(n, t));
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
            h = (0, nx.WR)({ seconds: u, getFormatter: nx.i }),
            A = n.summaryMap?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summaryType),
            m = null != A ? (0, ny.i)(A.contentJson) : null;
        return (0, i.jsxs)(na.D, {
            innerRef: r,
            className: nv.Nm,
            style: { backgroundColor: t },
            onClick: () => a(n),
            children: [
                (0, i.jsxs)("div", {
                    className: nv.PY,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-md/medium",
                            color: null != m ? "text-default" : "text-muted",
                            className: nv.So,
                            children: m?.title ?? "Summary not available",
                        }),
                        (0, i.jsx)(nr.K, {
                            icon: nd.T,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, nj.C)(JSON.stringify(n, null, 2), () =>
                                        (0, no.P0)((0, nc.o)("Copied conversation JSON", nu.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, i.jsxs)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: nv.FR,
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
                        className: nv.g5,
                        children: m.brief_summary,
                    }),
                null != m &&
                    m.key_points.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: nv.JP,
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
                    className: nv.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: nv.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: nv.UO,
                    children: [
                        (0, i.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: nv.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: nv.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: nv.a7,
                                    children: [
                                        (0, i.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.substance?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: nv.a7,
                                    children: [
                                        (0, i.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.engagement?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: nv.a7,
                                    children: [
                                        (0, i.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.dynamics?.score?.toFixed(2) ?? "—",
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
                (0, i.jsx)(nT, { moderation: n.moderation }),
            ],
        });
    });
function nR(e) {
    let { channel: n } = e,
        t = (0, A.bG)([nE.A], () => nE.A.getChannelConversations(n.id), [n.id], nN),
        l = (0, A.bG)([nE.A], () => nE.A.hasMoreConversations(n.id, "before"), [n.id]),
        a = (0, A.bG)([nE.A], () => nE.A.hasMoreConversations(n.id, "after"), [n.id]),
        r = (0, A.bG)([nE.A], () => nE.A.isPendingFetch(n.id), [n.id]),
        d = (0, A.bG)([nb.A], () => nb.A.isHighlightingEnabled(), []),
        o = (0, A.bG)([nE.A], () => nE.A.getScrollToConversation(n.id), [n.id]),
        c = s.useCallback((e) => {
            (0, nC.xI)(e.channelId, e.id);
        }, []);
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: nv.zr,
        children: [
            (0, i.jsx)(ng.Y9, {
                icon: nh.o,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: nv.y6,
                    children: (0, i.jsx)(nr.K, {
                        icon: d ? nA.b : nm.G,
                        "aria-label": d ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: nC.Eg,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: nv.Qs,
                children: [
                    l &&
                        (0, i.jsx)("div", {
                            className: nv.f,
                            children: (0, i.jsx)(na.D, {
                                className: nv.Qf,
                                onClick: function () {
                                    if (0 === t.length || r) return;
                                    let e = t[0].conversation;
                                    (0, nC.WF)({ channelId: n.id, before: e.startMessageId });
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
                                  nS,
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
                              className: nv.BI,
                              children: "No conversations available.",
                          }),
                    a &&
                        (0, i.jsx)("div", {
                            className: nv.f,
                            children: (0, i.jsx)(na.D, {
                                className: nv.Qf,
                                onClick: function () {
                                    if (0 === t.length || r) return;
                                    let e = t[t.length - 1].conversation;
                                    (0, nC.WF)({ channelId: n.id, after: e.endMessageId });
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
var nL = t(268218),
    nO = t(726249),
    nM = t(228366),
    nD = t(334738),
    nP = t(208882),
    nk = t(938764),
    nG = t(519480),
    nU = t(352123),
    nw = t(222983),
    nF = t(478927);
let nH = (e) => {
    let { guild: n, onAddGuild: l } = e,
        a = s.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("99332"),
                    t.e("41884"),
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
        className: nF.h2,
        children: [
            (0, i.jsx)("img", { className: nF.hd, alt: "", src: t(668778) }),
            (0, i.jsx)(S.D, {
                className: nF._U,
                variant: "heading-xl/semibold",
                children: Y.intl.format(Y.t.vyvrpC, { guildName: n.name }),
            }),
            (0, i.jsx)(y.E, { variant: "text-md/normal", className: nF.YI, children: Y.intl.string(Y.t.WypE0i) }),
            null != l
                ? (0, i.jsx)(nw.E, {
                      className: nF.c5,
                      iconUrl: t(928202),
                      header: Y.intl.string(Y.t.hyK15i),
                      completed: !1,
                      onClick: l,
                  })
                : null,
            (0, i.jsx)(nw.E, {
                className: nF.c5,
                iconUrl: t(799258),
                header: Y.intl.string(Y.t.L4bwJ9),
                completed: !1,
                onClick: a,
            }),
        ],
    });
};
var nB = t(892547),
    nV = t(689175),
    nW = t(761508),
    nY = t(765671),
    nz = t(22231),
    nq = t(365199),
    nK = t(66834),
    nX = t(573435),
    nQ = t(101555),
    n$ = t(548118),
    nZ = t(714991),
    nJ = t(776231),
    n0 = t(345942),
    n1 = t(71393),
    n2 = t(486020),
    n9 = t(860689),
    n3 = t(682557),
    n5 = t(253607);
let n7 = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, i.jsxs)(na.D, {
        onClick: n,
        className: n5.Eo,
        children: [
            (0, i.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, i.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: n5.Kk,
                children: Y.intl.string(Y.t.H9jxS1),
            }),
        ],
    });
});
function n4(e) {
    let { entry: n } = e,
        [l, a] = s.useState(!1),
        d = s.useRef(null),
        { canEdit: o } = (0, nU.A)(n);
    return (0, i.jsx)("div", {
        className: r()(n5.fc, { [n5.QX]: l }),
        children: (0, i.jsxs)(nQ.Ay, {
            children: [
                o
                    ? (0, i.jsx)(e_.m, {
                          text: Y.intl.string(Y.t.XnuOvN),
                          children: (0, i.jsx)(nQ.$n, {
                              onClick: () => {
                                  (0, g.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("13754"), t.e("88869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, i.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": Y.intl.string(Y.t.XnuOvN),
                              children: (0, i.jsx)(nz.R, { size: "xs", color: "currentColor", className: n5.IQ }),
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
                        return (0, i.jsx)(e_.m, {
                            text: Y.intl.string(Y.t["UKOtz+"]),
                            children: (0, i.jsx)(nQ.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: d,
                                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                                children: (0, i.jsx)(nq.j, { size: "md", color: "currentColor", className: n5.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let n8 = s.memo(function (e) {
    let { entry: n } = e,
        [l, a] = s.useState(!1),
        r = null != (0, A.bG)([n1.A], () => n1.A.getGuild(n.guildId)),
        d = async () => {
            a(!0);
            try {
                r ? (0, n0.u)(n.guildId) : await nK.A.joinGuild(n.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
            } finally {
                a(!1);
            }
        },
        o = n2.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, nJ.mZ)() }),
        c = n2.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = Y.intl.string(Y.t.VJlc0S);
    return (
        r && (u = Y.intl.string(Y.t.cqWE2Z)),
        (0, i.jsxs)("div", {
            className: n5.Nr,
            onContextMenu: (e) => {
                (0, I.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, i.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, i.jsxs)("div", {
                    className: n5.MY,
                    children: [
                        (0, i.jsx)("div", {
                            className: n5.Yi,
                            children: null != o && (0, i.jsx)("img", { src: o, alt: "", className: n5.j0 }),
                        }),
                        (0, i.jsx)("div", {
                            className: n5.$f,
                            children: (0, i.jsx)(nX.Ay, {
                                mask: nX.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)("div", {
                                    className: n5.SA,
                                    children: (0, i.jsx)(n$.Ay, {
                                        className: n5.rZ,
                                        iconSrc: c,
                                        guild: (0, n9.xi)(n),
                                        size: n$.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: n5.OA,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n5.DD,
                            children: [
                                (0, i.jsx)(nZ.A, { className: n5.n2, guild: n }),
                                (0, i.jsx)(y.E, {
                                    className: n5.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(y.E, {
                            className: n5.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, i.jsxs)("div", {
                            className: n5.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, i.jsxs)("div", {
                                        className: n5.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: n5.JX }),
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
                                        className: n5.Kl,
                                        children: [
                                            (0, i.jsx)("div", { className: n5.Li }),
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
                            className: n5.PD,
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
                (0, i.jsx)(n4, { entry: n }),
            ],
        })
    );
});
var n6 = t(946116),
    te = t(562845),
    tn = t(519094);
let tt = (e) => {
        let { searchQuery: n, setSearchQuery: t, handleClearSearch: l, handleSearchKeyPress: s } = e,
            { ref: a, width: d } = (0, nY.Ay)(),
            o = null != d && d <= 800;
        return (0, i.jsxs)("div", {
            ref: a,
            className: tn.wx,
            children: [
                (0, i.jsx)("img", {
                    alt: "",
                    className: tn.F0,
                    src: o ? "/assets/4d020fd7fc4ea501.svg" : "/assets/8f5262bfaa479264.svg",
                }),
                (0, i.jsx)("div", {
                    className: tn.AZ,
                    children: (0, i.jsxs)("div", {
                        className: r()(tn.VW, { [tn.eO]: o }),
                        children: [
                            (0, i.jsx)(S.D, {
                                variant: "heading-xl/semibold",
                                className: tn.dc,
                                children: Y.intl.string(Y.t.IT7qoC),
                            }),
                            (0, i.jsx)(y.E, {
                                variant: "text-md/normal",
                                className: tn.R_,
                                children: Y.intl.string(Y.t["5PoYts"]),
                            }),
                            (0, i.jsx)(f.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: r()(tn.MT, e),
                                        children: (0, i.jsx)(nB.I, {
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
    tl = (e) => {
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
            className: te.$$,
            children: (0, i.jsxs)(nV.Gt, {
                className: te.XG,
                children: [
                    (0, i.jsx)(tt, {
                        searchQuery: a,
                        setSearchQuery: r,
                        handleClearSearch: d,
                        handleSearchKeyPress: o,
                    }),
                    (0, i.jsx)(nV.Ch, {
                        orientation: "horizontal",
                        children: (0, i.jsxs)(nW.V, {
                            className: tn.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: (e) => {
                                u(e);
                            },
                            children: [
                                (0, i.jsx)(
                                    nW.V.Item,
                                    {
                                        className: tn.YU,
                                        id: n6.mU.ALL,
                                        children: `${Y.intl.string(Y.t.hEAa2a)} (${A})`,
                                    },
                                    n6.mU.ALL,
                                ),
                                (0, n6.g2)(n.id).map((e) => {
                                    let { value: n, label: t } = e;
                                    return (0, i.jsx)(
                                        nW.V.Item,
                                        {
                                            className: tn.YU,
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
                        ? (0, i.jsx)(x.y, { className: te.u1 })
                        : t?.map((e, n) =>
                              (0, i.jsxs)(
                                  s.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, i.jsx)(y.E, {
                                                    variant: "text-md/semibold",
                                                    className: tn.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, i.jsxs)("div", {
                                              className: te.vY,
                                              children: [
                                                  e.entries.map((e) => (0, i.jsx)(n8, { entry: e }, e.guildId)),
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
var ti = t(370876),
    ts = t(349288),
    ta = t(364522),
    tr = t(792831),
    td = t(916815);
let to = (e) => {
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
    if (c) n = (0, i.jsx)("div", { className: te.$$, children: (0, i.jsx)(x.y, { className: te.u1 }) });
    else if (0 === o.length) {
        let e =
            null != d
                ? Y.intl.format(Y.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, i.jsx)(ts.Anchor, { onClick: d, children: e }, n);
                      },
                  })
                : Y.intl.string(Y.t.vYyEnv);
        n = (0, i.jsxs)("div", {
            className: td.Je,
            children: [
                (0, i.jsx)("img", { className: td.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, i.jsx)(S.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: td.gR,
                    children: Y.intl.string(Y.t["6HXiuE"]),
                }),
                (0, i.jsx)(y.E, { variant: "text-md/normal", color: "text-default", className: td.av, children: e }),
            ],
        });
    } else n = (0, i.jsx)("div", { className: te.vY, children: o.map((e) => (0, i.jsx)(n8, { entry: e }, e.guildId)) });
    return (0, i.jsx)("div", {
        className: te.$$,
        children: (0, i.jsxs)(ta.Ar, {
            className: te.XG,
            children: [
                (0, i.jsxs)("div", {
                    className: td.wL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: td.Dr,
                            children: [
                                (0, i.jsx)(na.D, {
                                    onClick: a,
                                    className: td.UE,
                                    children: (0, i.jsx)(tr.A, { direction: tr.A.Directions.LEFT }),
                                }),
                                (0, i.jsx)(S.D, {
                                    variant: "heading-xl/semibold",
                                    className: td.s7,
                                    children: Y.intl.format(Y.t.UkOHRd, { numResults: o.length, query: s }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(nB.I, {
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
var tc = t(650583);
let tu = (e) => {
    let { channel: n, guild: l } = e,
        {
            currentCategoryId: a,
            directoryEntries: r,
            categoryCounts: d,
            allEntriesCount: o,
            isLoading: c,
        } = (0, A.cf)([nG.A], () => {
            let e = nG.A.getCurrentCategoryId(n.id),
                t = nG.A.getDirectoryEntries(n.id, e === n6.mU.ALL ? null : e),
                l = nG.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: l,
                allEntriesCount: nG.A.getDirectoryAllEntriesCount(n.id),
                isLoading: nG.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e$.Ay.lastMessageId(n.id);
            null != e &&
                nM.h.wait(() => {
                    (0, nD.ack)(
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
                          if (n !== n6.mU.ALL) return [{ entries: (0, ti._t)(e), appendEndCard: !0 }];
                          let t = [],
                              l = (0, ti.A3)(e),
                              i = new Set(l.map((e) => e.guildId));
                          l.length > 0 && t.push({ header: Y.intl.string(Y.t.CbaapP), entries: l, appendEndCard: !1 });
                          let s = e.filter((e) => !i.has(e.guildId));
                          return (
                              (s = (0, ti.DN)(s)).length > 0 &&
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
        } = (0, A.cf)([nk.A], () => {
            let { mostRecentQuery: e, fetching: t } = nk.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: nk.A.getSearchResults(n.id, e) };
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
            nP.Yc(n.id), nP.YS(n.id), j(e);
        }, [n.id]),
        s.useEffect(() => {
            en.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: l.id,
                primary_category_id: a,
            });
        }, [n.id, l.id, a]);
    let E = (0, nU.b)(n),
        y = s.useMemo(
            () =>
                E
                    ? () => {
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("90261"),
                                  t.e("13754"),
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
                                      currentCategoryId: a === n6.mU.ALL ? null : a,
                                  });
                          });
                      }
                    : void 0,
            [E, l.name, l.id, n.id, a],
        ),
        v = (e) => {
            0 !== f.trim().length &&
                e.key === tc.dh.ENTER &&
                (nP.Se(n.id, f),
                en.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: n.id,
                    directory_guild_id: l.id,
                }));
        },
        N = () => {
            j(""), nP.BA(n.id);
        };
    return I
        ? (0, i.jsx)(to, {
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
          ? (0, i.jsx)("div", { className: te.$$, children: (0, i.jsx)(x.y, { className: te.u1 }) })
          : u?.length === 0 && null == a
            ? (0, i.jsx)("div", { className: te.$$, children: (0, i.jsx)(nH, { guild: l, onAddGuild: y }) })
            : (0, i.jsx)(tl, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: j,
                  handleSearchKeyPress: v,
                  handleClearSearch: N,
                  handleCreateOrAddGuild: y,
                  currentCategoryId: a,
                  handleSelectCategory: (e) => {
                      nP.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: d,
                  allEntriesCount: o,
                  isLoading: c,
              });
};
var th = t(826673),
    tA = t(313281),
    tm = t(47167),
    tg = t(806202),
    tx = t(58736),
    tp = t(353428),
    tf = t(976860),
    tj = t(111956),
    tI = t.n(tj),
    tb = t(922016),
    tC = t(980707),
    tE = t(477782),
    ty = t(811893),
    tv = t(789645),
    tN = t(163126),
    t_ = t(182061),
    tT = t(886393),
    tS = t(307623),
    tR = t(660273),
    tL = t(707792),
    tO = t(41402),
    tM = t(271456),
    tD = t(200273),
    tP = t(565846),
    tk = t(57907),
    tG = t(375500),
    tU = t(707653),
    tw = t(50268),
    tF = t(584682),
    tH = t(378570),
    tB = t(713608),
    tV = t(473503),
    tW = t(901472),
    tY = t(267102),
    tz = t(474397),
    tq = t(486974),
    tK = t(221314);
function tX(e) {
    let { channel: n } = e,
        t = s.useContext(en.AnalyticsContext),
        l = (0, tY.aL)(),
        a = Y.intl.string(tK.default["Beo/7v"]),
        { firstMessage: r } = (0, tV.OA)(n),
        d = r?.messageSnapshots?.[0],
        o = d?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != o
        ? (0, i.jsx)(tx.Ay.Icon, {
              onClick: () => {
                  (0, tH.iN)(n.id),
                      (0, tz.A)(),
                      (0, tW.z)(n.guild_id, o, n.id, {
                          modViewPanel: tq.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      l.dispatch(er.jej.POPOUT_CLOSE);
              },
              tooltip: a,
              icon: tB.q,
              "aria-label": a,
          })
        : null;
}
var tQ = t(780338),
    t$ = t(782603),
    tZ = t(857071),
    tJ = t(607508),
    t0 = t(914703),
    t1 = t(37411);
function t2(e) {
    let { channel: n } = e,
        t = (0, tJ.X)(n),
        [l, a] = s.useState(!1),
        r = s.useRef(null),
        d = (0, A.bG)([tZ.A], () => null != n.guild_id && tZ.A.isLurking(n.guild_id));
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
    return (0, i.jsx)(tb.Y, {
        targetElementRef: r,
        shouldShow: l,
        animation: tb.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: (e) =>
            (0, i.jsx)(t0.A, { ...e, channel: n, navId: "thread-context", label: Y.intl.string(Y.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: l } = n;
            return (0, i.jsx)(tx.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => a((e) => !e),
                tooltip: l ? null : o,
                icon: t === t1.CP.NO_MESSAGES ? tQ.a : t$.X,
                "aria-label": o,
                selected: l,
            });
        },
    });
}
var t9 = t(747926);
function t3(e) {
    let { channel: n } = e,
        [t, l] = s.useState(!1),
        a = s.useRef(null);
    function r() {
        l((e) => !e);
    }
    let d = Y.intl.string(Y.t["UKOtz+"]);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tb.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(t5, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tx.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nq.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function t5(e) {
    let { channel: n, closePopout: t, onSelect: l } = e,
        s = (0, tR.A)(n, "Sidebar Overflow"),
        a = (0, tO.A)(n),
        r = (0, tk.A)(n),
        d = (0, tG.A)(n),
        o = (0, t_.A)(n),
        c = (0, tL.A)(n),
        u = (0, tP.A)(n.id),
        h = (0, tD.A)(n),
        A = (0, tS.A)(n),
        m = (0, tT.A)(n),
        g = (0, tw.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        x = (0, tU.A)(n),
        p = (0, tM.A)(n),
        f = (0, tN.$)(1e3);
    function j() {
        (0, tH.iN)(n.id);
    }
    function I(e) {
        let t = tI()(() => {
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
    return (0, i.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(tE.rX, {
                children: [s, (0, i.jsx)(tE.Dr, { id: "open", label: Y.intl.string(Y.t.IxVmZi), action: j })],
            }),
            (0, i.jsxs)(tE.rX, { children: [r, d] }),
            (0, i.jsxs)(tE.rX, { children: [h, a, u, p] }),
            (0, i.jsxs)(tE.rX, {
                children: [
                    (0, i.jsx)(tE.Dr, {
                        id: "search",
                        label: Y.intl.string(Y.t["5h0QOP"]),
                        icon: ty.t,
                        trailingIndicator: { type: "icon", icon: ty.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                j();
                        },
                    }),
                    (0, i.jsx)(tE.Dr, {
                        id: "pins",
                        label: Y.intl.string(Y.t["2BSH7n"]),
                        icon: ty.t,
                        trailingIndicator: { type: "icon", icon: ty.t },
                        action: function () {
                            I(() => {
                                et._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                j();
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(tE.rX, { children: [x, o, c, A] }),
            (0, i.jsxs)(tE.rX, { children: [m, g] }),
        ],
    });
}
function t7(e) {
    let { channel: n, baseChannelId: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.isForumPost() ? null : (0, i.jsx)(t2, { channel: n }),
            n.isModeratorReportChannel() ? (0, i.jsx)(tX, { channel: n }) : null,
            (0, i.jsx)(t3, { channel: n }),
            (0, i.jsx)(tx.Ay.Icon, {
                icon: tv.P,
                tooltip: Y.intl.string(Y.t.cpT0Cq),
                onClick: () => (0, t9.xu)((0, tF.j)(n), t ?? n.parent_id),
            }),
        ],
    });
}
var t4 = t(31717),
    t8 = t(853742),
    t6 = t(224517);
function le(e) {
    let { channelId: n } = e,
        l = (0, A.bG)([eG.A], () => eG.A.getChannel(n)),
        a = (0, A.bG)([eG.A], () => eG.A.getChannel(l?.parent_id)),
        r = (0, A.bG)([n1.A], () => n1.A.getGuild(l?.getGuildId())),
        d = (0, tm.Ay)(l),
        o = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == l || o.current || ((o.current = !0), (0, t8.rH)(l));
        }, [l]),
        null == l || null == r)
    )
        return null;
    let c = (0, i.jsx)(t7, { channel: l });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ep.A, { channel: l, draftType: t4.C.ChannelMessage }),
            (0, i.jsx)(tx.Ay, {
                toolbar: c,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tp.zF)({
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
                        null != l && (0, tf.uh)(l.guild_id, l.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: t6.T,
                children: (0, i.jsx)(tg.A, { channel: l, guild: r, chatInputType: nl.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var ln = t(91242),
    lt = t(857253),
    ll = t(872363);
let li = function (e, n) {
    nM.h.wait(() => {
        nM.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
    });
};
var ls = t(561446),
    la = t(300233),
    lr = t(721592),
    ld = t(468689),
    lo = t(529942),
    lc = t(739455),
    lu = t(328312);
function lh(e) {
    let { guildId: n } = e;
    return (0, i.jsx)("div", {
        className: lu.t7,
        children: (0, i.jsxs)("div", {
            className: lu.Zj,
            children: [
                (0, i.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, i.jsxs)("div", {
                    className: lu.xw,
                    children: [
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["8gJGPs"]) }),
                        (0, i.jsx)(y.E, {
                            variant: "text-sm/normal",
                            className: lu.G3,
                            children: Y.intl.string(Y.t.GpOWIi),
                        }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: lu.__invalid_button,
                            children: (0, i.jsx)(p.$, {
                                variant: "primary",
                                text: Y.intl.string(Y.t["I/XhUn"]),
                                onClick: () => {
                                    (0, lo.rf)(n),
                                        ld.A.open(n, er.BEX.ROLE_SUBSCRIPTIONS, void 0, er.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, lc.Fx)(n);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var lA = t(599941),
    lm = t(251766),
    lg = t(950344),
    lx = t(217530),
    lp = t(817649),
    lf = t(601099);
function lj(e) {
    let { guildId: n, channelId: t } = e,
        l = (0, lm.e)({ guildId: n, channelId: t }),
        a = (0, lA.uk)(n),
        r = (0, lA.Tq)(n),
        d = (0, A.bG)([n1.A], () => n1.A.getGuild(n), [n]),
        o = d?.name,
        c = (0, A.bG)([eG.A], () => eG.A.getChannel(t)),
        u = (0, tm.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of a) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [a]);
    return ((0, lg.A)({
        guildId: n,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: l.map((e) => e.id),
    }),
    null == d)
        ? (0, i.jsx)("div", {
              className: lf.__invalid_spinnerContainer,
              children: (0, i.jsx)(x.y, { className: lf.__invalid_spinner }),
          })
        : (0, i.jsxs)(ta.Ar, {
              className: lf.$$,
              children: [
                  (0, i.jsx)(S.D, {
                      variant: "heading-xl/semibold",
                      className: lf.DX,
                      children: Y.intl.format(Y.t.xHMpym, { serverName: o, channelName: u }),
                  }),
                  (0, i.jsx)(y.E, {
                      className: lf.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, i.jsx)(lx.A, {
                      children: l
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, i.jsx)(
                                  lp.A,
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
var lI = t(604681),
    lb = t(761640),
    lC = t(678959);
function lE(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([lb.Ay], () => lb.Ay.getSection(n), [n]) === er.YvQ.CONVERSATIONS,
        l = (0, A.bG)([nE.A], () => nE.A.getChannelConversations(n).length > 0, [n]);
    return (0, i.jsx)(tx.In, {
        onClick: lI.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nh.o,
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
    return (0, i.jsx)(tx.In, {
        tooltip: s ? Y.intl.string(Y.t.Axvx8c) : Y.intl.string(Y.t.gxChDx),
        icon: T.n,
        onClick: () => {
            eR.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: l, member_list_open: !s }),
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
        t = (0, e6.ni)(n),
        [l, a] = s.useState(!1),
        r = (0, A.bG)([e$.Ay], () => e$.Ay.hasUnreadPins(n.id), [n]),
        d = (0, tY.aL)(),
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
        (0, i.jsx)(tb.Y, {
            targetElementRef: o,
            shouldShow: l,
            animation: tb.Y.Animation.NONE,
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
                return (0, i.jsx)(tx.In, {
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
        t = (0, e6.ni)(n),
        l = (0, A.bG)([lO.A], () => lO.A.shouldShowTopicsBar());
    return (0, i.jsx)(tx.Ay.Icon, {
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
    return (0, i.jsx)(tx.In, {
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
    l9 = t(51760),
    l3 = t(994500),
    l5 = t(977997),
    l7 = t(360469),
    l4 = t(49999),
    l8 = t(731854);
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
                : l9.Ay.supports(l8.O5.VIDEO)
                  ? s
                      ? ((c = Y.intl.string(Y.t.PHzjvX)), (u = !0))
                      : t && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = o ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = Y.intl.string(Y.t.UVpg3U))),
            (0, i.jsx)(tx.Ay.Icon, { icon: lz.n, onClick: e, disabled: u || l, tooltip: c })
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
        let u = (0, i.jsx)(tx.Ay.Icon, {
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
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, i.jsx)(lY.A, {
                                  targetElementRef: this.iconRef,
                                  title: Y.intl.string(Y.t.HOPqzR),
                                  body: Y.intl.format(Y.t.xAW71b, { helpdeskUrl: l7.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(l4.i.USER_DISMISS),
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
            (l.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, th.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: l4.i.AUTO }),
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
        l = (0, A.bG)([nn.A], () => nn.A.getMode(n.id)),
        s = (0, A.bG)([l5.A], () => l5.A.isInChannel(n.id)),
        a = (0, A.bG)([L.A], () => L.A.useReducedMotion),
        { callActive: r, callUnavailable: d } = (0, A.cf)([l1.A], () => ({
            callActive: l1.A.isCallActive(n.id),
            callUnavailable: l1.A.isCallUnavailable(n.id),
        })),
        o = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([l3.A], () => ({
            notFriend: n.type === er.rbe.DM && null != o && !l3.A.isFriend(o),
            isBlocked: n.type === er.rbe.DM && null != o && l3.A.isBlocked(o),
        })),
        h = (0, A.bG)([J.default], () => J.default.getUser(o)),
        g = (0, tY.Us)(),
        x = [],
        p = (0, lQ.A)(n.id),
        f = (0, A.bG)([l2.A], () => l2.A.hasLayers());
    return (p && !f && x.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
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
              appContext: g,
              dismissibleContentTypes: x,
              useReducedMotion: a,
          });
}
var it = t(72781),
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
        d = (0, g.useHasAnyModalOpen)(),
        o = (0, A.bG)([l2.A], () => l2.A.hasLayers()),
        c = s.useCallback(
            () => (a ? Y.intl.string(Y.t["16QyDv"]) : null != r ? Y.intl.string(Y.t.kCN9i0) : null),
            [a, r],
        ),
        u = s.useMemo(() => (a || null != r) && !d && !o, [a, r, d, o]),
        [h, m] = s.useState(c());
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
            null != e && m(e);
        }, [a, r, c]);
    let x = s.useCallback(() => {
        null != r && (0, is.xi)(n.id, [r.id]),
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
        : (0, i.jsx)(e_.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, i.jsx)(tx.Ay.Icon, {
                  icon: ii.l,
                  onClick: x,
                  tooltip: Y.intl.string(Y.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var ih = t(262763),
    iA = t(406704),
    im = t(576705);
let ig = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lZ.A)(),
        l = (0, A.bG)([l5.A], () => l5.A.isInChannel(n.id)),
        a = (0, A.bG)([l5.A], () => !u().isEmpty(l5.A.getVoiceStatesForChannel(n.id))),
        r = (0, A.bG)([im.A], () => im.A.can(er.xBc.CONNECT, n)),
        { needSubscriptionToAccess: d } = (0, lr.A)(n.id),
        o = (0, iA.Id)(n),
        c = s.useCallback(() => {
            ih.A.handleVoiceConnect({ channel: n, connected: l, needSubscriptionToAccess: d, locked: !1 });
        }, [n, l, d]);
    return (s.useEffect(
        () => (
            et._.subscribe(er.jej.CALL_START, c),
            () => {
                et._.unsubscribe(er.jej.CALL_START, c);
            }
        ),
        [c],
    ),
    iA.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !t &&
        !l &&
        r &&
        o &&
        n.isVocalThread())
        ? (0, i.jsx)(tx.Ay.Icon, {
              icon: lq._,
              onClick: c,
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
    return (0, i.jsx)(tx.In, {
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
let iy = new iE(nM.h, {
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
        u = (0, A.bG)([l3.A], () => l3.A.getNickname(n.id)),
        h = (0, iS.A)(n.id),
        m = s.useRef(null),
        g = (e) => {
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("39431"),
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
                    t.e("86169"),
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
                    shouldAnimateStatus: iO,
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
            [l3.A, J.default, Q.A],
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
                    l3.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
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
                children: (0, i.jsxs)(ta.Ip, {
                    className: eo.ol,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(P.A, {
                            className: eo.lL,
                            children: [
                                `${Y.intl.string(Y.t["9Oq93m"])}—${r.length} `,
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
var ik = t(59350),
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
    i0 = t(748934),
    i1 = t(408018),
    i2 = t(201349),
    i9 = t(822610),
    i3 = t(915089),
    i5 = t(314307),
    i7 = t(636922),
    i4 = t(931664),
    i8 = t(631576),
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
    sm = t(790158),
    sg = t(415296);
let sx = nl.oU.THREAD_CREATION;
function sp(e) {
    let { parentChannelId: n, parentMessageId: t, location: l } = e,
        s = (0, A.bG)([eG.A], () => eG.A.getChannel(n)),
        { analyticsLocations: a } = (0, M.Ay)(O.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, i.jsx)(M.f5, {
              value: a,
              children: (0, i.jsx)(eZ.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": Y.intl.string(Y.t.rBIGBL),
                      className: sm.kL,
                      children: [
                          (0, i.jsx)(ep.A, { channel: s, draftType: t4.C.FirstThreadMessage }),
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
            let e = t4.A.getThreadSettings(n),
                t = t4.A.getDraft(n, t4.C.FirstThreadMessage).trim(),
                l = sn.A.getUploads(n, t4.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== l.length
                ? iJ.A.show({
                      title: Y.intl.string(Y.t["6kDZh1"]),
                      body: Y.intl.string(Y.t.NgS9jX),
                      confirmText: Y.intl.string(Y.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Y.intl.string(Y.t["olcKd/"]),
                      onConfirm: () => {
                          (0, t9.bA)(n);
                      },
                  })
                : (0, t9.bA)(n);
        }, [n]);
    return (0, i.jsxs)(tx.Ay, {
        toolbar: (0, i.jsx)(tx.Ay.Icon, { icon: tv.P, tooltip: Y.intl.string(Y.t.cpT0Cq), onClick: t }),
        children: [
            (0, i.jsx)(tx.Ay.Icon, { icon: iY.y, disabled: !0, "aria-label": Y.intl.string(Y.t["7Xm5QI"]) }),
            (0, i.jsx)(tx.Ay.Title, { children: Y.intl.string(Y.t["4WNcpu"]) }),
        ],
    });
}
function sj(e) {
    let n,
        { parentChannel: t, parentMessageId: l, location: a } = e,
        d = (0, A.bG)([L.A], () => L.A.messageGroupSpacing),
        o =
            ((n = s.useContext(eZ.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([t4.A], () => t4.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [l, i] = s.useState(t),
                a = s.useCallback(
                    (t) => {
                        i((e) => ({ ...e, ...t })), iZ.A.changeThreadSettings(e.id, { ...t, parentMessageId: n });
                    },
                    [e.id, n],
                );
            return { threadSettings: l, setThreadSettings: i, updateThreadSettings: a };
        })(t, l),
        { textAreaState: m, setTextAreaState: g } = (function (e, n) {
            let [t, l] = s.useState((0, i1.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let i = t4.A.getDraft(e.id, t4.C.FirstThreadMessage);
                        (0 === i.length || !0 === t) && l((0, i1.ur)(i)), n(t4.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        t(!0),
                        t4.A.addChangeListener(t),
                        () => {
                            t4.A.removeChangeListener(t);
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
            let m = s.useCallback(
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
                g = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, i.jsx)(e_.m, {
                                  text: Y.intl.string(Y.t.ZF2oBs),
                                  children: (0, i.jsx)(nr.K, {
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
                g = (0, sA.A)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: l,
                    privateThreadMode: i,
                    location: r,
                    onThreadCreated: t9.JA,
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
                                (i = i4.A.getStickerPreview(n.id, sx.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = sn.A.getUploads(n.id, t4.C.FirstThreadMessage));
                        let r = (l.name ?? "").trim(),
                            o = (d || null == t) && 0 === r.length,
                            u = "" === e && (null == i || 0 === i.length) && 0 === s.length;
                        if (
                            (c(o ? ss(0, Y.intl.string(Y.t.uXA573)) : null),
                            h(u ? ss(0, Y.intl.string(Y.t.kesTVT)) : null),
                            o || u)
                        )
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: x } = await (0, st.i)({
                            content: e,
                            stickers: i,
                            uploads: s,
                            type: sx,
                            channel: null == t ? n : null,
                        });
                        if (!x) return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, i, s);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var p;
                                c(((p = e.body), ss(1, (0, si.cw)(p, n?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(ss(2, Y.intl.string(Y.t.uXA573)));
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, i8.x5)(n.id, sx.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 };
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
        y = (0, sr.Iy)(c, x) ? iz.t : iY.y;
    return (0, i.jsx)("div", {
        className: sm.TE,
        onMouseDown: o,
        onFocus: o,
        children: (0, i.jsx)("div", {
            className: r()(sm.Og, `group-spacing-${d}`),
            children: (0, i.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: sm.Zd,
                children: [
                    (0, i.jsx)(ta.Ip, {
                        className: sm.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: sm.bv,
                            children: [
                                (0, i.jsxs)(i5.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: r()(sg.P0, sm.P0),
                                            children: (0, i.jsx)(y, { className: sg.Kk }),
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
                        className: sm.Eh,
                        children: [
                            (0, i.jsx)(sC, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: g,
                                submit: C,
                                error: b,
                            }),
                            (0, i.jsx)(i0.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sm.RL,
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
        m = null != t && !o,
        g = (0, i3.GV)(),
        x = o ? Y.intl.string(Y.t["Nb2/RE"]) : "" !== A ? A : Y.intl.string(Y.t["Nb2/RE"]);
    return (0, i.jsx)(iQ.k, {
        label: Y.intl.string(m ? Y.t.JPvIiL : Y.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
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
        m = s.useCallback(() => c(!1), []),
        g = s.useCallback(
            (e, t, i) => {
                iZ.A.saveDraft(n.id, t, t4.C.FirstThreadMessage),
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
    (0, eZ.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, eZ.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: m });
    let p = (0, A.bG)([im.A], () => im.A.can(er.xBc.ATTACH_FILES, n)),
        f = sa(d, { content: t.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(i9.A, { channelId: n.id, type: sx, canAttachFiles: p }),
            (0, i.jsx)("div", { className: sm.xN, children: (0, i.jsx)(i$.U, { error: f }) }),
            (0, i.jsx)(i2.Ay, {
                type: sx,
                channel: n,
                placeholder: Y.intl.string(Y.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: o,
                className: r()(sm.gM, sm.Yy),
                innerClassName: r()(sm.SL, { [sm.cr]: null != f }),
                onFocus: h,
                onBlur: m,
                onChange: g,
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
        ? (0, i.jsx)(i7.A, {
              className: sm.IL,
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
        r = (0, e6.ni)(n),
        d = s.useCallback(() => {
            l(!1);
        }, []),
        o = s.useCallback(() => {
            t || (0, sv.D3)("Popout"), l(!t);
        }, [t]);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: a,
        animation: tb.Y.Animation.NONE,
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
            return (0, i.jsx)(tx.In, {
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
    return (0, i.jsx)(tb.Y, {
        targetElementRef: a,
        shouldShow: t,
        animation: tb.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(sL, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, i.jsx)(tx.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: t ? null : d,
                icon: nq.j,
                "aria-label": d,
                selected: t,
            });
        },
    });
}
function sL(e) {
    let { channel: n, closePopout: t, onSelect: l } = e,
        s = (0, t_.A)(n),
        a = (0, tL.A)(n),
        r = (0, tP.A)(n.id),
        d = (0, tD.A)(n),
        o = (0, tw.A)({ id: n.id, label: Y.intl.string(Y.t.DQ797g) }),
        c = (0, tT.A)(n),
        h = (0, tS.A)(n),
        m = (0, tR.A)(n, "Toolbar Overflow"),
        g = (0, tO.A)(n),
        x = (0, sS.A)(n),
        p = (0, tU.A)(n),
        f = (0, tM.A)(n),
        j = i6.SY.useSetting(),
        I = (0, A.bG)([l5.A], () => !u().isEmpty(l5.A.getVoiceStatesForChannel(n.id)));
    return (0, i.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(tE.rX, { children: [m, x] }),
            (0, i.jsxs)(tE.rX, {
                children: [
                    d,
                    g,
                    r,
                    j && !I
                        ? (0, i.jsx)(tE.Dr, {
                              id: "open",
                              label: Y.intl.string(Y.t.bX7EaG),
                              action: function () {
                                  (0, t9.JA)(n);
                              },
                          })
                        : null,
                    f,
                ],
            }),
            (0, i.jsxs)(tE.rX, { children: [p, s, a, h] }),
            (0, i.jsxs)(tE.rX, { children: [c, o] }),
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
        o = (0, A.bG)([eG.A], () => eG.A.getChannel(a)),
        c = (0, A.bG)([n1.A], () => n1.A.getGuild(o?.getGuildId())),
        h = (0, tm.Ay)(o);
    (n = o),
        (l = (0, A.bG)([l5.A], () => null != n && !u().isEmpty(l5.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            l &&
                null != n &&
                (nM.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, tH.N9)(n, { source: t1.H9.VOICE_AUTO_OPEN }));
        }, [l, n]);
    let m = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == o || m.current) return;
            m.current = !0;
            let e = (0, sO.C)(eG.A.getChannel(o.id), !0);
            (0, eR.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(o.id), channel_view: d }),
                (0, sM.A)({ channelId: o.id });
        }, [o, d]),
        null == o || null == c)
    )
        return null;
    let g = (0, i.jsx)(t7, { channel: o, baseChannelId: r });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ep.A, { channel: o, draftType: t4.C.ChannelMessage }),
            (0, i.jsx)(tx.Ay, {
                toolbar: g,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, tp.zF)({
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
                        null != o && (0, tH.iN)(o.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: sD.T,
                children: (0, i.jsx)(tg.A, { channel: o, guild: c, chatInputType: nl.oU.SIDEBAR }, a),
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
    s9 = t(587168),
    s3 = t(744808);
let s5 = (0, t(945810).mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var s7 = t(416497);
let s4 = (e) => {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
};
function s8(e) {
    let { context: n, analyticsLocations: t, profileFrame: l, handleOpenProfile: s } = e,
        { showButton: a } = s5.useConfig({ location: "UserProfileSidebarFooter" }),
        r = a
            ? (0, i.jsx)("div", {
                  className: s7.qr,
                  children: (0, i.jsx)(na.D, {
                      onClick: () => {
                          s(), (0, ip.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n });
                      },
                      className: s7.wC,
                      children: (0, i.jsx)(y.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: Y.intl.string(Y.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != l
        ? (0, i.jsxs)("div", { className: s7.xQ, children: [(0, i.jsx)(s3.A, { frame: l, filterLayer: s4 }), r] })
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
        m = () => {
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
                    (0, i.jsxs)(ta.d_, {
                        children: [
                            (0, i.jsx)(s9.A, { children: (0, i.jsx)(s2.A, { user: n }) }),
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
                                        onOpenProfile: l ? void 0 : m,
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
                                        onClickName: l ? void 0 : m,
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
                    !l && (0, i.jsx)(s8, { handleOpenProfile: m, analyticsLocations: o, context: c }),
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
        d = (0, A.bG)([l3.A], () => l3.A.isBlocked(n.id)),
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
                children: (0, i.jsx)(ta.d_, {
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
var ao = t(785651),
    ac = t(717421),
    au = t(31956),
    ah = t(361628),
    aA = t(673843),
    am = t(561794),
    ag = t(841595),
    ax = t(679492),
    ap = t(439053),
    af = t(312381),
    aj = t(349419),
    aI = t(984545),
    ab = t(193738),
    aC = t(597770),
    aE = t(751188),
    ay = t(746174),
    av = t(495544),
    aN = t(993401),
    a_ = t(518477);
function aT(e) {
    let { user: n } = e,
        { analyticsLocations: t } = (0, M.Ay)(),
        l = (0, A.bG)([av.default], () => av.default.getId() === n.id),
        s = (0, A.bG)([l3.A], () => l3.A.isBlockedOrIgnored(n.id) || l3.A.isSpam(n.id)),
        a = (0, ay.j)("UserProfileGiftingBannerButton"),
        { openGiftModal: r } = (0, aE.$)({
            giftRecipient: n,
            analyticsLocations: t,
            analyticsObject: {
                page: er.liQ.USER_PROFILE,
                section: er.JJy.USER_PROFILE,
                object: er.ZSU.BUTTON_ICON,
                objectType: er.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gifting-banner-button",
        });
    return null == n || n.bot || l || s || !a
        ? null
        : (0, i.jsx)(aN.br, { icon: aC.o, tooltipText: Y.intl.string(Y.t.PEjaCx), action: a_.pt.GIFT, onClick: r });
}
var aS = t(700174),
    aR = t(983495),
    aL = t(695366),
    aO = t(661531),
    aM = t(922590),
    aD = t(821269),
    aP = t(93246),
    ak = t(351906),
    aG = t(383199),
    aU = t(559506),
    aw = t(361311),
    aF = t(886891),
    aH = t(501193),
    aB = t(383448),
    aV = t(646986),
    aW = t(243166);
function aY(e) {
    let { user: n, currentUser: t, displayProfile: l, channel: s, isHoveringOrFocusing: a, onOpenProfile: r } = e,
        { relationshipType: d, originApplicationId: o } = (0, A.cf)([l3.A], () => ({
            relationshipType: l3.A.getRelationshipType(n.id),
            originApplicationId: l3.A.getOriginApplicationId(n.id),
        })),
        c = (0, aM.fi)(n.id),
        u = (0, aD.q)({ userId: n.id }),
        h = (0, A.bG)([ak.A], () => ak.A.hidePersonalInformation),
        m = (0, A.bG)([ag.A], () => ag.A.getUserProfile(n.id)?.application);
    return (0, i.jsxs)("div", {
        className: an.rf,
        children: [
            (0, i.jsx)(aU.A, { userId: n.id }),
            (0, i.jsx)(s1.Ay, {
                user: n,
                guildId: s.guild_id,
                displayName: sF.Ay.getName(null, s.id, n),
                onClickName: r,
                displayNameTrailing: h ? null : (0, i.jsx)(aW.A, { userId: n.id, isVisible: a, onOpenProfile: r }),
                pronouns: l?.pronouns,
                trailing: (0, i.jsx)(sX.A, { displayProfile: l, themeType: s6.d.SIDEBAR }),
            }),
            d === er.eA$.PENDING_INCOMING &&
                (0, i.jsx)(s0.A.Overlay, {
                    children: (0, i.jsx)(aF.A, { user: n, channelId: s.id, applicationId: o }),
                }),
            c.map((e) =>
                (0, i.jsx)(
                    s0.A.Overlay,
                    {
                        children: (0, i.jsx)(aF.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, i.jsx)(aB.A, { user: n }),
            l?.private &&
                (0, i.jsx)(s0.A.Overlay, { children: (0, i.jsx)(aH.A, { username: sF.Ay.getName(null, s.id, n) }) }),
            n.isProvisional &&
                (0, i.jsx)(s0.A.Overlay, {
                    children: (0, i.jsx)(sJ.A, {
                        heading: Y.intl.string(Y.t.Iyka0U),
                        headingIcon: (0, i.jsx)(aL.E, { size: "xxs", color: aO.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, i.jsx)(aP.T, { userId: n.id }),
                    }),
                }),
            (0, i.jsx)(aV.A, { user: n, currentUser: t, onOpenUserProfileModal: r }),
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
                    m?.popularApplicationCommandIds != null &&
                        (0, i.jsx)(aG.A, {
                            applicationId: m.id,
                            commandIds: m.popularApplicationCommandIds,
                            channel: s,
                        }),
                    u.length > 0 &&
                        (0, i.jsx)(sJ.A, {
                            heading: Y.intl.string(Y.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, i.jsx)(aw.A, { applicationIds: u }),
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
var az = t(114212),
    aq = t(913453),
    aK = t(229187),
    aX = t(21241),
    aQ = t(201934),
    a$ = t(51943),
    aZ = t(847374),
    aJ = t(320448),
    a0 = t(680391);
function a1(e) {
    let { section: n, header: t, items: l, listClassName: a, onExpand: d } = e,
        { trackUserProfileAction: o } = (0, sq.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        A = u ? aZ.a : aJ._;
    return (0, i.jsxs)("section", {
        className: a0.uW,
        children: [
            (0, i.jsxs)(na.D, {
                className: r()(a0.wx, a0.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    h(!u), u || (o({ action: "PRESS_SECTION", section: n }), d?.());
                },
                children: [
                    (0, i.jsxs)(S.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [t, " — ", l.length],
                    }),
                    (0, i.jsx)(A, { size: "md" }),
                ],
            }),
            l.length > 0 && (0, i.jsx)("ul", { id: c, hidden: !u, className: r()(a0.p_, a), children: l }),
        ],
    });
}
var a2 = t(54557);
function a9(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: l } = (0, M.Ay)(),
        { context: s } = (0, sq.NJ)(),
        a = (0, tN.A)(),
        { mutualFriendsCount: r, mutualFriends: d, mutualGuilds: o } = (0, aq.A)(n),
        c = !n.bot && null != r && r > 0,
        u = null != o && o.length > 0;
    return c || u
        ? (0, i.jsxs)(s0.A.Overlay, {
              className: a2.Lw,
              children: [
                  u &&
                      (0, i.jsx)(a1, {
                          section: "MUTUAL_GUILDS",
                          header: Y.intl.string(Y.t["4lTDZq"]),
                          listClassName: a2.p_,
                          items: o.map((e) => {
                              let { guild: t, nick: l } = e;
                              return (0, i.jsx)(
                                  a$.A,
                                  { user: n, guild: t, nick: l, onSelect: () => (0, n0.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, i.jsx)(aX.A, { className: a2.yF }),
                  c &&
                      (0, i.jsx)(a1, {
                          section: "MUTUAL_FRIENDS",
                          header: Y.intl.string(Y.t["0mTJ3j"]),
                          listClassName: a2.p_,
                          onExpand: () => (0, aK.A)(n.id, a),
                          items:
                              null == d
                                  ? Array.from({ length: r }).map((e, n) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className: a2.nC,
                                                children: [
                                                    (0, i.jsx)(az.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, i.jsx)(az.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : d.map((e) => {
                                        let { key: n, user: a, status: r } = e;
                                        return (0, i.jsx)(
                                            aQ.A,
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
var a3 = t(123292),
    a5 = t(853735),
    a7 = t(131607),
    a4 = t(84511),
    a8 = t(332772),
    a6 = t(575593),
    re = t(587895),
    rn = t(44120),
    rt = t(532794),
    rl = t(317560),
    ri = t(99161),
    rs = t(661492),
    ra = t(212387),
    rr = t(662349),
    rd = t(369005);
function ro(e) {
    let { title: n, description: t, onClick: l } = e;
    return (0, i.jsxs)("div", {
        className: rd.S,
        children: [
            (0, i.jsx)(na.D, {
                onClick: l,
                className: rd.H,
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
var rc = t(479026),
    ru = t(699976),
    rh = t(788868),
    rA = t(80223),
    rm = t(997990);
let rg = ru.Z.SIZE_90;
function rx(e) {
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
        { trackUserProfileWishlistAction: g } = (0, sq.NJ)(),
        x = s.useCallback(() => {
            g({
                action: a_.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: l,
                productLines: new Set([n.productLine]),
            }),
                h();
        }, [n, l, h, g]),
        p = s.useCallback(() => {
            g({
                action: a_.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: l,
                productLines: new Set([n.productLine]),
            }),
                A();
        }, [A, n.id, l, n.productLine, g]),
        { label: f, icon: j, isPromptingPurchase: I } = (0, rr.h)({ wishlistOwner: t, isOwned: !1, shortText: !0 }),
        [b, C] = s.useState(!1);
    return (0, i.jsxs)(al.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: rA.kL,
                children: (0, i.jsx)(ra.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: n,
                    user: t,
                    spec: rg,
                    cardStyle: r()(rA.Nr, d),
                    skuPreviewStyle: r()(rA.ho, o),
                    skuAssetClassName: b ? c : void 0,
                    onClick: x,
                    "aria-label": Y.intl.formatToPlainString(Y.t.ZBB4Ty, { productName: (0, rs.TC)(n) }),
                    onHoverOrFocusChange: C,
                    children: (0, i.jsx)(rr.A, {
                        spec: rg,
                        onClick: I ? p : x,
                        isHoveringOrFocusing: b,
                        label: f,
                        icon: j,
                    }),
                }),
            }),
            a && (0, i.jsx)(ro, { title: m.title, description: m.description, onClick: x }),
        ],
    });
}
function rp(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        r = (0, eC.bG)([re.A], () => re.A.getApplication(n.applicationId)),
        { analyticsLocations: d } = (0, M.Ay)(
            ...(l ?? []),
            O.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, ri.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: rh.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: d },
            );
        }, [n, t, d]),
        c = s.useCallback(() => {
            (0, rl.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: rh.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: d,
            });
        }, [n.id, n.applicationId, t, d]),
        u = s.useMemo(
            () => ({ title: n.name, description: Y.intl.format(Y.t["CqpEC+"], { applicationName: r?.name }) }),
            [n.name, r?.name],
        );
    return (0, i.jsx)(rx, {
        sku: n,
        analyticsLocations: d,
        wishlistOwner: t,
        onDetailsClick: c,
        onPurchaseClick: o,
        singleCardInfo: u,
        ...a,
    });
}
function rf(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        d = s.useCallback(() => {
            (0, rn.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: rh.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, l]),
        o = (0, rc.e)({ sku: n, giftRecipient: t, giftingOrigin: rh.vQ.USER_PROFILE_WISHLIST, analyticsLocations: l }),
        c = s.useMemo(() => {
            switch (n?.tenantMetadata?.collectibles?.type) {
                case a6.R.PROFILE_EFFECT:
                case a6.R.NAMEPLATE:
                    return;
                case a6.R.AVATAR_DECORATION:
                    return r()(rA.ML, rA._P);
                default:
                    return r()(rA.ML, rA.ZY);
            }
        }, [n?.tenantMetadata?.collectibles?.type]),
        u = s.useMemo(
            () => ({
                title: n.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return Y.intl.string(Y.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a6.R.AVATAR_DECORATION:
                            return Y.intl.string(Y.t["7v0T9P"]);
                        case a6.R.PROFILE_EFFECT:
                            return Y.intl.string(Y.t.wR5wOo);
                        case a6.R.NAMEPLATE:
                            return Y.intl.string(Y.t.x5CoXR);
                        default:
                            return "";
                    }
                })(n),
            }),
            [n],
        );
    return (0, i.jsx)(rx, {
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
function rj(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: l, ...a } = e,
        r = s.useCallback(() => {
            (0, rt.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: rh.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n.id,
                analyticsLocations: l ?? [],
            });
        }, [n.id, t, l]),
        d = s.useMemo(() => ({ title: n.name, description: Y.intl.string(Y.t.Ipxkog) }), [n.name]);
    return (0, i.jsx)(rx, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: l,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: rm.MO,
        disableRiveHover: !0,
        singleCardInfo: d,
        ...a,
    });
}
function rI(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(rp, { sku: n, ...t });
        case er.EZt.COLLECTIBLES:
            return (0, i.jsx)(rf, { sku: n, ...t });
        case er.EZt.PREMIUM:
            return (0, i.jsx)(rj, { sku: n, ...t });
        default:
            return null;
    }
}
var rb = t(535089),
    rC = t(617348);
function rE(e) {
    let { unownedWishlistItems: n = [], profileOwner: t, onClick: l, wishlistId: a, title: r } = e,
        { analyticsLocations: d } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: o } = (0, sq.NJ)(),
        c = (0, s.useId)();
    (0, a8.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let u = (0, s.useCallback)(
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
        g = (0, rb.A)({ wishlistId: a ?? null, onAction: u, productLines: A }),
        x = (0, s.useMemo)(
            () =>
                h
                    .map((e, s) =>
                        null == e.sku
                            ? null
                            : (0, i.jsx)(
                                  rI,
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
        [p, f] = (0, a7.RF)(
            m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, a5.c)(m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        j = p !== m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === x.length
        ? null
        : (0, i.jsx)("section", {
              "aria-labelledby": c,
              children: (0, i.jsxs)(s0.A.Overlay, {
                  ref: g,
                  className: rC.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rC.wx,
                          children: [
                              (0, i.jsx)(S.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? Y.intl.string(Y.t["7lZ31J"]),
                              }),
                              n.length > 3 &&
                                  (0, i.jsx)(a3.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: l,
                                      text: Y.intl.string(Y.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, i.jsxs)(sU.F, {
                          children: [
                              (0, i.jsx)("div", { className: rC.vY, children: x }),
                              !j &&
                                  A.has(er.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, i.jsx)(a4.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: rC.EK,
                                      onDismiss: () => f(l4.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function ry(e) {
    let { user: n, currentUser: t, channel: l } = e,
        a = __OVERLAY__,
        r = (0, ij.Ay)(n.id),
        d = (0, sV.Ay)(),
        o = s.useRef(Date.now()),
        { analyticsLocations: c } = (0, M.Ay)(O.A.USER_PROFILE_SIDEBAR),
        u = (0, sq.pb)({ layout: "SIDEBAR", userId: n.id, channelId: l.id }),
        h = s.useRef(null),
        { isHoveringOrFocusing: m, isHovering: g } = (0, sz.A)(h),
        x = (0, ax.fC)(),
        p = (0, ah.A)(r?.profileFrame?.skuId, "UserProfileSidebar");
    (0, au.A)({ skuId: r?.profileFrame?.skuId, openedAt: o.current, context: u, analyticsLocations: c });
    let f = (0, ac.z)({ opacity: +(null != x.interactionType), config: { duration: 150 } }),
        j = (e) => {
            (0, sG.openUserProfileModal)({ sourceAnalyticsLocations: c, hideRestrictedProfile: !0, ...u, ...e });
        },
        I = r?.widgets != null && r.widgets.length > 0,
        { defaultWishlistId: b } = (0, A.cf)([ag.A], () => ({ defaultWishlistId: ag.A.getFirstWishlistId(n.id) })),
        { wishlist: C } = (0, am.fw)({ wishlistId: b, userId: n.id });
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
                        (0, i.jsxs)(ta.d_, {
                            className: null != p ? ae.It : void 0,
                            children: [
                                (0, i.jsxs)(s9.A, {
                                    children: [
                                        (0, i.jsx)(ab.A, { user: n, themeType: s6.d.SIDEBAR }),
                                        (0, i.jsx)(aT, { user: n }),
                                        n.bot ? (0, i.jsx)(aI.A, { user: n }) : (0, i.jsx)(aS.yo, { user: n }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: ae.wx,
                                    children: [
                                        (0, i.jsx)(sQ.A, {
                                            user: n,
                                            displayProfile: r,
                                            themeType: s6.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !m,
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
                                        (0, i.jsx)(aR.A, {
                                            user: n,
                                            channelId: l.id,
                                            themeType: s6.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(aY, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: r,
                                    channel: l,
                                    isHoveringOrFocusing: null == x.interactionType && m,
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
                                        children: (0, i.jsx)(rE, {
                                            profileOwner: n,
                                            unownedWishlistItems: E,
                                            wishlistId: b,
                                            title: Y.intl.string(Y.t["7lZ31J"]),
                                            onClick: () => {
                                                j?.({ tabSection: a_.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, i.jsx)(a9, { user: n, channelId: l.id }),
                            ],
                        }),
                        !a &&
                            (0, i.jsx)(s8, {
                                context: u,
                                analyticsLocations: c,
                                profileFrame: p,
                                handleOpenProfile: j,
                            }),
                        r?.profileEffect != null && (0, i.jsx)(sY.A, { skuId: r?.profileEffect?.skuId, isHovering: g }),
                    ],
                }),
            }),
        }),
    });
}
function rv(e) {
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
                  : (0, i.jsx)(ry, { user: l, currentUser: a, ...e }),
        }),
    });
}
var rN = t(522556),
    r_ = t(225315),
    rT = t(684407),
    rS = t(95701),
    rR = t(919638),
    rL = t(763827),
    rO = t(812771),
    rM = t(946228),
    rD = t(462887),
    rP = t(276293),
    rk = t(96361),
    rG = t(745652);
let rU = () => {
    let e = (0, sV.Ay)();
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let n = (0, rD.M)(e) ? rG : "/assets/a51b44063e9d3bdb.svg";
    return (0, i.jsxs)("div", {
        className: rk.kL,
        children: [
            (0, i.jsxs)(lW.A, {
                toolbar: (0, i.jsx)(s.Fragment, {}),
                children: [
                    (0, i.jsx)(lW.A.Icon, { icon: rP.N, "aria-hidden": !0 }),
                    (0, i.jsx)(lW.A.Title, { children: Y.intl.string(Y.t["8LKchl"]) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: rk.Qs,
                children: [
                    (0, i.jsx)("img", { alt: "", className: rk.j0, src: n }),
                    (0, i.jsx)(S.D, {
                        className: rk.Zd,
                        variant: "heading-lg/medium",
                        children: Y.intl.string(Y.t.m9gRVN),
                    }),
                    (0, i.jsx)(y.E, {
                        className: rk.fh,
                        variant: "text-md/normal",
                        children: Y.intl.string(Y.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rw = t(943712),
    rF = t(402216),
    rH = t(746080),
    rB = t(806931),
    rV = t(165610),
    rW = t(516607),
    rY = t(964623);
let rz = () => (0, i.jsx)("div", { className: rY.wG, children: (0, i.jsx)(x.y, {}) }),
    rq = (0, nL.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("52046"),
                t.e("64801"),
                t.e("51703"),
                t.e("59980"),
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
        renderLoader: rz,
        name: "ForumChannel",
    }),
    rK = () =>
        Promise.all([
            t.e("59499"),
            t.e("15680"),
            t.e("67683"),
            t.e("65086"),
            t.e("4981"),
            t.e("25310"),
            t.e("19051"),
            t.e("74748"),
            t.e("36704"),
            t.e("41159"),
            t.e("80373"),
            t.e("17956"),
            t.e("6305"),
            t.e("52204"),
            t.e("90261"),
            t.e("11491"),
            t.e("32703"),
            t.e("57767"),
            t.e("52046"),
            t.e("68201"),
            t.e("85755"),
            t.e("792"),
            t.e("92822"),
            t.e("9291"),
            t.e("66783"),
            t.e("87317"),
            t.e("11617"),
            t.e("29260"),
            t.e("49013"),
            t.e("755"),
            t.e("33448"),
            t.e("15275"),
            t.e("31335"),
            t.e("86300"),
            t.e("74821"),
            t.e("15057"),
            t.e("26792"),
            t.e("43710"),
            t.e("4374"),
            t.e("84114"),
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
    rX = (0, nL.Fe)({ createPromise: rK, webpackId: 540462, name: "ChannelCall", renderLoader: rz }),
    rQ = () =>
        Promise.all([
            t.e("19051"),
            t.e("65086"),
            t.e("4981"),
            t.e("25310"),
            t.e("74748"),
            t.e("36704"),
            t.e("41159"),
            t.e("59499"),
            t.e("15680"),
            t.e("67683"),
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
            t.e("90274"),
            t.e("26792"),
            t.e("64287"),
            t.e("43710"),
            t.e("4374"),
            t.e("84114"),
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
    r$ = (0, nL.Fe)({ createPromise: rQ, webpackId: 67319, name: "StageChannelCall", renderLoader: rz }),
    rZ = (0, nL.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("41159"),
                t.e("59980"),
                t.e("11394"),
                t.e("52046"),
                t.e("71018"),
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
    rJ = (0, nL.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("52046"),
                t.e("7293"),
                t.e("71018"),
                t.e("56574"),
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
class r0 extends s.PureComponent {
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
        e === er.rbe.GUILD_VOICE ? rK() : e === er.rbe.GUILD_STAGE_VOICE && rQ();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, tH.iN)(e.id);
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
                    t.e("39431"),
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
                    t.e("86169"),
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
        return e?.hasFlag(rH.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(ls.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, i.jsx)(ni.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== rB.lp.STREAM
            ? null
            : (0, i.jsx)(
                  ll.A,
                  { size: rF.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let r = [];
        if (e.isSystemDM()) return r;
        switch (e.type) {
            case er.rbe.GUILD_STAGE_VOICE:
            case er.rbe.GUILD_VOICE:
                break;
            case er.rbe.DM:
                r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(ie, { channel: e }, "calls")),
                    r.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    r.push((0, i.jsx)(it.Ay, { channel: e, tooltip: Y.intl.string(Y.t.Xjlbvs) }, "invite")),
                    r.push((0, i.jsx)(ib, { channel: e, showCallOrActivityPanel: l || s || a }, "profile")),
                    r.push((0, i.jsx)(iu, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(ie, { channel: e }, "calls")),
                    r.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, i.jsx)(it.Ay, { channel: e, tooltip: Y.intl.string(Y.t.AQAPts) }, "invite")),
                    r.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, i.jsx)(tX, { channel: e })),
                    null == n || n.isForumLikeChannel() || r.push((0, i.jsx)(sT, { channel: n }, "browser")),
                    e.isVocalThread() && r.push((0, i.jsx)(ig, { channel: e }, "thread-call")),
                    r.push((0, i.jsx)(t2, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, i.jsx)(lv, { channelId: e.id }, "members")),
                    null != n && (0, ej.pk)(e) && r.push((0, i.jsx)(lD, { channel: e }, "summaries")),
                    r.push((0, i.jsx)(sR, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                r.push((0, i.jsx)(sT, { channel: e }, "browser")),
                    t || r.push((0, i.jsx)(lN.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(lS, { channel: e }, "pins")),
                    (0, ns.fw)("channel_header") && r.push((0, i.jsx)(lE, { channelId: e.id }, "conversations")),
                    r.push((0, i.jsx)(lv, { channelId: e.id }, "members")),
                    (0, ej.pk)(e) && r.push((0, i.jsx)(lD, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                t ||
                    (r.push((0, i.jsx)(lV, { channel: e }, "forum-onboarding")),
                    r.push((0, i.jsx)(lN.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                r.push((0, i.jsx)(lv, { channelId: e.id }, "members"));
        }
        return r;
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
                  className: rY.u8,
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
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, tH.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            g = d || c,
            x = a || g;
        return (0, i.jsxs)("div", {
            className: rY.SC,
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
                                className: r()(rY.DD, a, { [rY.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": Y.intl.string(Y.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(tp.i$, { channel: e, guild: l, caretPosition: "right" }),
                                    (0, tp.zF)({
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
                                              className: rY.u8,
                                              children: (0, i.jsx)(p.$, {
                                                  onClick: () => (0, tf.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: Y.intl.string(Y.t.k5WiPf),
                                              }),
                                          })
                                        : (0, tp.EP)(e, l),
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
                return (0, i.jsx)(r$, { channel: e, popoutType: nt.N.NO_POPOUT }, e.id);
            case er.rbe.GUILD_VOICE:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
                let n = this.props.height - 200;
                return (0, i.jsx)(
                    rX,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: n,
                        popoutType: nt.N.NO_POPOUT,
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
                ? (0, i.jsx)(lh, { guildId: n.id })
                : (0, i.jsx)(la.H, { guildId: n.id, children: (0, i.jsx)(lj, { channelId: e.id, guildId: n.id }) });
        if (l) return (0, i.jsx)(rN.A, { guild: n, channelId: e.id });
        if (null != s) return (0, i.jsx)(iV.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (a && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"), (0, i.jsx)(tu, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, i.jsx)(rq, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (0, i.jsx)(tg.A, { channel: e, guild: n, chatInputType: nl.oU.NORMAL }, null != n ? n.id : "home");
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
            return (0, i.jsx)(rv, { channel: e }, `private-channel-profile-${e.id}`);
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
                    return (0, i.jsx)(rM.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(rM.A, { channel: n }, `channel-members-${n.id}`);
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
                    return (0, i.jsx)(nR, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === er.YvQ.SEARCH) return (0, i.jsx)(rZ, { guildId: t?.id, channelId: e.id });
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
                        { onCloseCallback: () => li(iv.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("71898"), t.e("10585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, r_.ry)(n, a), modalKey: "Guild Welcome Screen Modal" },
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
                    let t = n?.isForumLikeChannel() ? le : sP;
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
                    className: rY.uC,
                    children: (0, i.jsx)(rJ, {
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
            (0, i.jsx)(rO.A, {
                sidebarType:
                    n?.type != null && er.kvI.GUILD_THREADS_ONLY.has(n.type) ? rO.X.PostSidebar : rO.X.ThreadSidebar,
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
        if (l) return (0, i.jsx)(rU, {});
        if (null == e) return (0, i.jsx)(rw.A, { channelId: this.props.channelId });
        let m = a === er.YvQ.SIDEBAR_CHAT,
            g = null != o && !m,
            x = !e.isForumLikeChannel() && !d,
            p = n?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nO.HI, { location: p, subsection: t ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rY.TE, { [rY.js]: m || g, [rY.jl]: m && h }),
                    children: [
                        x
                            ? (0, i.jsx)(ep.A, {
                                  style: { right: m ? u : void 0 },
                                  className: rY.x4,
                                  channel: e,
                                  draftType: t4.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: r()(rY.Qs, { [rY.Oo]: s === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r1 = (0, ef.A)(r0),
    r2 = s.memo(function (e) {
        var n, t;
        let l,
            { providedChannel: a } = e,
            [r, d] = s.useState(null),
            o = (0, A.bG)([eU.A], () => eU.A.getChannelId()),
            c = (0, A.bG)([eU.A], () => eU.A.getVoiceChannelId()),
            x = (0, A.bG)([eG.A], () => a ?? eG.A.getChannel(o), [o, a]),
            p = (0, tA.DZ)(),
            f = (0, tA.e4)(x, "ConnectedChannel"),
            I = (0, A.bG)([eG.A], () => eG.A.getChannel(c), [c]),
            b = f?.parent_id,
            C = (0, A.bG)([eG.A], () => eG.A.getChannel(b), [b]),
            E = (0, A.bG)([n1.A], () => n1.A.getGuild(f?.guild_id), [f]),
            { needSubscriptionToAccess: y } = (0, lr.A)(f?.id ?? void 0),
            v = (0, A.bG)([nn.A], () => {
                let e = null != o ? nn.A.getParticipants(o) : [],
                    n = null != o ? nn.A.getActivityParticipants(o) : [];
                return e.length - n.length > 0;
            }, [o]),
            N = (0, lt.A)(),
            _ = (0, A.bG)([eU.A], () => (N?.channelId ?? eU.A.getVoiceChannelId()) === f?.id),
            T = (0, A.bG)([eb.Ay], () => (null != f ? eb.Ay.getSelfEmbeddedActivityForChannel(f.id) : null), [f]),
            S = (0, A.bG)([rL.A], () => rL.A.isConnected()),
            R = (0, eI.A)(S),
            L = S && !1 === R;
        s.useEffect(() => {
            _ &&
                L &&
                null != T &&
                null != f &&
                j.A.selectParticipant(
                    f.id,
                    (0, ne.Qt)({ applicationId: T.applicationId, instanceId: T.compositeInstanceId }),
                );
        }, [L, f, _, T]);
        let O = (0, A.bG)([eb.Ay], () => eb.Ay.getCurrentEmbeddedActivity()),
            M = (0, A.bG)([eb.Ay], () => eb.Ay.getActivityPanelMode()),
            D = null != O && !(0, eN.A)(f?.id) && M === eJ.Gd.PANEL,
            P = (0, A.bG)(
                [l5.A],
                () => null != f && f.isVocalThread() && !u().isEmpty(l5.A.getVoiceStatesForChannel(f.id)),
                [f],
            ),
            k = null != f && f.isPrivate() && !D && v,
            G = f?.isGuildVocal() || k || P,
            U = (0, A.bG)([ln.A], () => ln.A.getFrameLayoutMode() === rV.y.FOCUSED),
            { welcomeModalChannelId: w } = (0, h.zy)(),
            F = (0, A.bG)([tZ.A], () => null != f && tZ.A.isLurking(f.guild_id), [f]),
            H = (0, A.bG)([rT.A], () => rT.A.hasSeen(f?.guild_id, F), [f, F]),
            B = (0, A.bG)(
                [nn.A, eb.Ay],
                () =>
                    null != eb.Ay.getConnectedActivityLocation() && eb.Ay.getActivityPanelMode() === eJ.Gd.PANEL
                        ? eb.Ay.getFocusedLayout() === eJ.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != o
                          ? nn.A.getLayout(o)
                          : er.DUB.NORMAL,
                [o],
            ),
            V =
                ((n = E?.id),
                (l = (0, A.bG)([n1.A, iy, J.default, X.Ay], () => {
                    let e = n1.A.getGuild(n);
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
                    null != n && null != l && (l || li(iv.REAL_NAME_PROMPT, n));
                }, [l, n]),
                !0 === l),
            W =
                ((t = E?.id),
                (0, A.bG)([eG.A, n1.A, eU.A], () => {
                    let e = n1.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = eG.A.getChannel(w);
                    return w === eU.A.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, rS.ke)(n.type);
                })),
            { section: Y, channelSidebarState: z } = (0, A.cf)(
                [lb.Ay],
                () => ({ section: lb.Ay.getSection(o, f?.isDM()), channelSidebarState: lb.Ay.getSidebarState(o) }),
                [o, f],
            ),
            q = E?.id,
            K = (0, A.bG)([lb.Ay], () => lb.Ay.getGuildSidebarState(q), [q]),
            $ = (0, i_.lI)(),
            Z = (0, tm.Ay)(f),
            ee = (0, tm.Ay)(f, !0),
            en = (0, A.bG)([nn.A], () => (null != f ? nn.A.getSelectedParticipant(f.id) : null)),
            el = (0, e6.vL)(f),
            ei = (0, iB.Uf)(f),
            es = null != f && c === f.id,
            ea = null != f && f.isGuildStageVoice();
        !(function (e) {
            let { onTransition: n } = e;
            s.useEffect(() => {
                async function e(e) {
                    let { location: t } = e,
                        l = (0, ev.H)(t);
                    if (null == l || !(0, eN.A)(l)) return;
                    eU.A.getVoiceChannelId() !== l && (await (0, e4.A)({ channelId: l }));
                    let i = eG.A.getChannel(l),
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
                let e = (0, tf.JK)();
                if (e?.location?.state?.stageInviteKey === rW.J2) {
                    let { channelId: n } = (0, iN.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []);
        let ed = { channel: f, inCurrentVoiceChannel: es },
            eo = s.useRef(ed);
        s.useEffect(() => {
            eo.current = ed;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eo.current;
                null != r && null != e && ea && e.id === r && !n && ((0, iW.av)(e), d(null));
            }, [r, ea]);
        let ec = (0, ej.cI)(f),
            eu = null != f && f.isPrivate(),
            eh = (0, eI.A)(eu),
            eA = (0, eI.A)(f?.id);
        s.useEffect(() => {
            let e = eh && !eu,
                n = eh && eu && f?.id !== eA;
            (e || n) && (0, th.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: l4.i.AUTO });
        }, [f?.id, eA, eu, eh]);
        let em = (0, g.useHasAnyModalOpen)();
        return (0, i.jsx)(r1, {
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
            isUnavailable: (0, A.bG)([rR.A], () => f?.guild_id != null && rR.A.isUnavailable(f.guild_id), [f]),
            showRealNameModal: V,
            showWelcomeModal: !H && W,
            showFollowButton: (f?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([l5.A], () => ({ hasVideo: null != f && l5.A.hasVideo(f.id) }), [f]),
            inCall: es,
            selectedParticipant: en,
            showChannelSummaries: ec,
            showHeaderGuildBreadcrumb: p || $,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: O,
        });
    });
