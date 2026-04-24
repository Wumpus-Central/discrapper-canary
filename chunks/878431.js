n.r(t), n.d(t, { default: () => r1 }), n(321073);
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(284009),
    d = n.n(o),
    c = n(735438),
    u = n.n(c),
    h = n(873263),
    _ = n(17928),
    m = n(554146),
    g = n(192308),
    p = n(289873),
    A = n(821609),
    x = n(43990),
    f = n(367513),
    b = n(442433);
n(183994);
var I = n(837381),
    C = n(887129),
    E = n(607399),
    j = n(834730),
    v = n(194261),
    y = n(312138),
    S = n(475825),
    T = n(177953),
    N = n(534514),
    R = n(414798),
    O = n(775602),
    L = n(793574),
    M = n(688810),
    D = n(449582),
    P = n(485947),
    w = n(509536),
    k = n(201275),
    U = n(657048),
    G = n(361610),
    F = n(964486),
    H = n(36124),
    B = n(317525),
    V = n(219065),
    W = n(818348),
    Y = n(985018);
let z = [];
var q = n(342296),
    K = n(616356),
    $ = n(696451),
    Q = n(290863),
    X = n(461213),
    Z = n(741961),
    J = n(287809),
    ee = n(303727),
    et = n(954571),
    en = n(625494),
    ei = n(488926),
    el = n(427262),
    ea = n(19575),
    es = n(110574),
    er = n(652215),
    eo = n(784503),
    ed = n(540808);
let ec = ea.Ay.getEnableHardwareAcceleration(),
    eu = 44 + es.b,
    eh = a.memo(function (e) {
        let { channel: t, sectionId: i, userId: s, guildOwnerId: r } = e,
            o = a.useRef(null),
            d = (0, _.bG)([Z.A], () => Z.A.isTyping(t.id, s)),
            c = (0, _.bG)([$.Ay], () => $.Ay.getMember(t.guild_id, s)),
            u = (0, _.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(t.guild_id, c.colorRoleId)?.name : void 0),
                [t.guild_id, c],
            ),
            h = (0, _.bG)([J.default], () => J.default.getUser(s)),
            m = (0, _.bG)([J.default], () => J.default.getCurrentUser()),
            g = h?.id === m?.id,
            p = (0, _.bG)([Q.A, X.A], () => (g ? X.A.getStatus() : Q.A.getStatus(s, t.guild_id))),
            A = (0, _.bG)([Q.A], () => Q.A.isMobileOnline(s)),
            x = (0, _.yK)([Q.A, X.A], () => (g ? X.A.getActivities() : Q.A.getActivities(s, t.guild_id))),
            f = (0, _.bG)([K.A], () => K.A.getAnyStreamForUser(s)),
            C = (0, I.rm)(s),
            j = (0, _.bG)([V.A], () => V.A.canUserViewChannel(t.id, i, s)),
            v = h?.id != null && h.id === r,
            y = a.useCallback(
                (e) => {
                    null != h &&
                        (0, b.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("24966"), n.e("43840")]).then(
                                n.bind(n, 175269),
                            );
                            return (n) => (0, l.jsx)(e, { ...n, user: h, guildId: t.guild_id, channel: t });
                        });
                },
                [h, t],
            ),
            S = a.useCallback(() => {
                if (null == h) return;
                let e = `@${el.Ay.getUserTag(h, { decoration: "never" })}`,
                    n = `<@${h.id}>`;
                en._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: t.id }),
                    en._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    R.A.startTyping(t.id);
            }, [h, t]),
            T = a.useCallback(
                (e) => {
                    e.stopPropagation(),
                        (0, w.K4)({
                            guildId: t.guild_id,
                            location: { section: er.JJy.THREAD_MEMBER_LIST, object: er.ZSU.BOOST_GEM_ICON },
                        });
                },
                [t.guild_id],
            ),
            N = (0, D.r)({ user: h, guildId: t.guild_id }),
            [O, L] = a.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(q.A, {
            targetElementRef: o,
            user: h,
            guildId: t.guild_id,
            channelId: t.id,
            position: E.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: S,
            shouldShow: O,
            onRequestClose: () => L(!1),
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...a } = e;
                return (0, l.jsx)(es.A, {
                    ref: o,
                    onContextMenu: y,
                    shouldAnimateStatus: ec,
                    user: h,
                    currentUser: m,
                    nick: c?.nick,
                    status: p,
                    activities: x,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: d,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: A,
                    selected: O,
                    applicationStream: f,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: T,
                    itemProps: C,
                    lostPermissionTooltipText: j ? void 0 : Y.intl.string(Y.t["/QcoTz"]),
                    isOwner: v,
                    nameplate: N,
                    onClick: (e) => {
                        e.shiftKey ? S?.() : L((e) => !e);
                    },
                    onMouseDown: (e) => {
                        O ? e.stopPropagation() : i?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    e_ = a.memo(function (e) {
        let { id: t, label: n, count: i, guildId: a } = e,
            s = (0, k.$7)({ roleId: t, guildId: a, size: 16 });
        return t === er.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ed.lL, children: (0, l.jsx)("div", { className: ed.k1 }) })
            : (0, l.jsxs)(P.A, {
                  className: ed.lL,
                  "aria-label": Y.intl.formatToPlainString(Y.t.Uaqbke, { title: n, count: i }),
                  children: [
                      null != s ? (0, l.jsx)(U.A, { className: ed.UT, ...s }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [n, " — ", i] }),
                  ],
              });
    }),
    em = a.memo(function (e) {
        let { channel: t } = e;
        return t.type === er.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: eo.yF }),
                      (0, l.jsxs)(j.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: eo.Uz,
                          children: [
                              (0, l.jsx)(v.X, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              Y.intl.string(Y.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          className: eo.GA,
                          children: Y.intl.string(Y.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function eg(e) {
    var t, n;
    let i,
        s,
        o,
        d,
        c,
        { channel: h, guild: m } = e,
        g = `members-${h.id}`,
        { analyticsLocations: p } = (0, M.Ay)(L.A.MEMBER_LIST),
        A = (function (e, t) {
            (0, F.Ay)(() => {
                t?.id != null && (0, G.Ey)(t.id, e, H.LD);
            });
            let n = (0, _.bG)([B.A], () => (null != t ? B.A.getSortedRoles(t.id) : [])),
                { version: i, members: l } = (0, _.cf)([V.A], () => ({
                    version: V.A.getMemberListVersion(e),
                    members: V.A.getMemberListSections(e),
                })),
                s = null == t,
                r = a.useMemo(() => {
                    if (s) return z;
                    let e = n.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: Y.intl.string(Y.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: Y.intl.string(Y.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: t, label: n } = e;
                            return { label: n, userIds: l?.[t]?.userIds ?? [], id: t, roleId: t };
                        })
                    );
                }, [n, l, i, s]);
            return null != l ? r : z;
        })(h.id, m),
        x = A.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: b } =
            ((t = g),
            (n = eu),
            (i = (0, _.bG)([O.A], () => O.A.keyboardModeEnabled)),
            (s = a.useRef(null)),
            (o = a.useCallback(
                (e, t) => {
                    let i = s.current;
                    if (null == i) return;
                    let l = parseInt(t, 10),
                        [a, r] = i.getSectionRowFromIndex(l),
                        o = 0 === a && 0 === r ? n : 0;
                    i.scrollToIndex({
                        section: a,
                        row: r,
                        padding: o,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [n],
            )),
            (d = a.useCallback(
                () =>
                    new Promise((e) => {
                        let t = s.current;
                        if (null == t) return e();
                        t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (c = a.useCallback(
                () =>
                    new Promise((e) => {
                        let t = s.current;
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
                navigator: (0, C.Ay)({ id: t, setFocus: o, isEnabled: i, scrollToStart: d, scrollToEnd: c }),
                listRef: s,
            }),
        E = 0 === A.length || A.every((e) => 0 === e.userIds.length);
    if (
        (a.useEffect(() => {
            et.default.track(er.HAw.MEMBER_LIST_VIEWED, {
                channel_id: h.id,
                channel_type: h.type,
                guild_id: h.guild_id,
            });
        }, [h.guild_id, h.id, h.type]),
        E)
    )
        return (0, l.jsx)(ep, { channel: h });
    let j = u().omit(f.containerProps, ["ref"]),
        v = ei.wT(m);
    return (0, l.jsx)(M.f5, {
        value: p,
        children: (0, l.jsx)(I.hD, {
            navigator: f,
            children: (0, l.jsx)(y.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: r()(ed.yg, ed.ML, eo.kL),
                        children: (0, l.jsx)(
                            S.OZ,
                            {
                                ref: b,
                                className: ed.ol,
                                paddingTop: 0,
                                sectionHeight: 40,
                                renderSection: (e) => {
                                    let { section: t } = e,
                                        n = A[t];
                                    return (0, l.jsx)(
                                        e_,
                                        { id: n.id, label: n.label, count: n.userIds.length, guildId: m.id },
                                        n.id,
                                    );
                                },
                                rowHeight: eu,
                                renderRow: (e) => {
                                    let { section: t, row: n } = e,
                                        { userIds: i, id: a } = A[t];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: h, sectionId: a, userId: i[n], guildOwnerId: v },
                                        i[n],
                                    );
                                },
                                footerHeight: (e) => 80 * (A[e] === x && h.type === er.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    A[e.section] === x ? (0, l.jsx)(em, { channel: h }, "footer") : null,
                                innerAriaLabel: Y.intl.string(Y.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: A.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            g,
                        ),
                    }),
            }),
        }),
    });
}
function ep(e) {
    let { channel: t } = e;
    return (0, l.jsxs)("div", {
        className: r()(eo.p$, eo.kL, ed.yg, ed.ML, ed.ol),
        children: [
            (0, l.jsx)(j.E, {
                className: eo.ks,
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: Y.intl.string(Y.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: eo.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: eo.AI,
                        children: (0, l.jsx)(T.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(ee.A, { className: eo.WA }),
                ],
            }),
            (0, l.jsx)(N.D, {
                variant: "heading-md/semibold",
                children: t.isForumPost() ? Y.intl.string(Y.t.p0UgNQ) : Y.intl.string(Y.t["9/n5vz"]),
            }),
            (0, l.jsx)(j.E, {
                className: eo.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: Y.intl.string(Y.t.emw8UP),
            }),
        ],
    });
}
var eA = n(738876),
    ex = n(456412),
    ef = n(432371),
    eb = n(475743),
    eI = n(933958),
    eC = n(702841),
    eE = n(567249),
    ej = n(811024),
    ev = n(969151),
    ey = n(108959),
    eS = n(990078),
    eT = n(446576),
    eN = n(817281),
    eR = n(58149),
    eO = n(587837),
    eL = n(982484),
    eM = n(964404),
    eD = n(709562),
    eP = n(383831),
    ew = n(128286),
    ek = n(734057),
    eU = n(309010),
    eG = n(795816),
    eF = n(685399),
    eH = n(216418),
    eB = n(620148),
    eV = n(732637),
    eW = n(104171),
    eY = n(47294),
    ez = n(594007),
    eq = n(16961),
    eK = n(138017),
    e$ = n(715482),
    eQ = n(315502),
    eX = n(222823),
    eZ = n(234320),
    eJ = n(5867),
    e0 = n(702321);
function e1(e) {
    let { channelId: t, className: n, ...i } = e,
        s = a.useRef(null),
        r = (0, _.bG)([eI.Ay], () => eI.Ay.getFocusedLayout() === eJ.E8.RESIZABLE),
        o = a.useCallback(() => {
            let e = r ? eJ.E8.NO_CHAT : eJ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [r]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let t = (0, _.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, _.cf)(
                    [eX.Ay],
                    () => ({ unreadCount: eX.Ay.getUnreadCount(e), mentionCount: eX.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        h = a.useCallback(() => {
            s.current?.focus();
        }, []);
    (0, eZ.Vo)({ event: er.jej.FOCUS_CHAT_BUTTON, handler: h });
    let m = r ? Y.intl.string(Y.t["5MstTl"]) : Y.intl.string(Y.t.kkKapG),
        g = [m];
    u > 0 && g.push(Y.intl.formatToPlainString(Y.t["3l1GOx"], { mentionCount: u })),
        d > 0 && g.push(Y.intl.string(Y.t.x5zAGZ));
    let p = (0, _.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        A = u > 0 ? u : d,
        x = A > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eD.l, {
                isTrayButton: !0,
                buttonRef: s,
                onClick: o,
                label: m,
                "aria-label": g.join(", "),
                tooltipPosition: "top",
                iconComponent: p === eJ.E8.NO_CHAT ? eK.j : e$.g,
                themeable: !0,
                className: n,
                ...i,
            }),
            x ? (0, l.jsx)(eQ.A, { hasMentions: u > 0, truncatedCount: A > 99 ? "99+" : A, className: e0.qS }) : null,
        ],
    });
}
var e4 = n(141160);
let e8 = eW.DN.SIZE_32,
    e2 = { [eJ.E8.NO_CHAT]: e4.Oo, [eJ.E8.RESIZABLE]: e4.Ig };
function e9(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: i } = e,
        s = (0, eB.A)(),
        o = (0, _.yK)([eI.Ay], () => eI.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        d = (0, ev.H)(n),
        c = (0, _.bG)([ek.A], () => ek.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        m = a.useCallback(() => {
            (0, eG.gk)(eJ.Gd.PIP);
        }, []),
        g = a.useRef(null),
        p = (0, _.bG)([eI.Ay], () => eI.Ay.getFocusedLayout()),
        A = p !== eJ.E8.NO_CHAT,
        [f, b] = a.useState(eM.Ay.activityPanelHeight ?? t ?? null),
        I = a.useCallback((e) => {
            eN.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = a.useRef(null),
        [E, v] = a.useState({ width: 0, height: 0 });
    a.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            v({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return e.observe(C.current), () => e.disconnect();
    }, []);
    let y = E.width / Math.max(E.height, 1) < eJ.B5,
        S = 0,
        T = 0,
        N = (0, eH.A)(s?.id);
    if (!N) {
        let e = E.width,
            t = E.height;
        y
            ? ((t = E.width / eJ.B5) > E.height && (e = (t = E.height) * eJ.B5), (T = (E.height - t) / 2))
            : ((e = Math.min(E.height * eJ.B5)) > E.width && (t = (e = E.width) / eJ.B5), (S = (E.width - e) / 2));
    }
    let R = h.get(s?.id ?? ""),
        L = (0, _.bG)([eU.A], () => eU.A.getChannelId()),
        M = (0, _.yK)(
            [$.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => $.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        D = a.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [M]),
        P = (function (e, t, n) {
            let i = (0, eb.A)(e),
                l = e !== i,
                [s, r] = a.useState(!1);
            a.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !O.A.useReducedMotion && (l || s);
            return a.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != t && null != n ? { ...i, minHeight: 200, maxHeight: n, height: t } : i;
            }, [o, e, n, t]);
        })(A, f, t),
        w = (0, eq.G)();
    if (null == s) return null;
    let k = [];
    null != R &&
        (k = Array.from(R.embeddedActivity.userIds)
            .map((e) => J.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let U = (e) => {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let t = D.get(e.id),
            n = t?.nick ?? el.Ay.getName(e);
        return (0, l.jsx)(
            eS.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e8), alt: n, className: e4.my }, e.id),
            },
            e.id,
        );
    };
    return (0, l.jsx)(x.N, {
        theme: er.NJ8.DARK,
        children: (e) =>
            (0, l.jsxs)("div", {
                className: r()(e4.iE, e2[p], e),
                ref: g,
                style: P,
                children: [
                    i?.(),
                    (0, l.jsx)(eL.A, { applicationId: s.id }),
                    (0, l.jsxs)("div", {
                        className: e4.lq,
                        children: [
                            A
                                ? null
                                : (0, l.jsx)("div", {
                                      className: e4.wx,
                                      children: (0, l.jsx)(j.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: e4.qd,
                                          children: s?.name,
                                      }),
                                  }),
                            (0, l.jsx)("div", {
                                className: r()(e4.ht, { [e4.kK]: N }),
                                style: { paddingLeft: S, paddingRight: S, paddingTop: T, paddingBottom: T },
                                ref: C,
                                children: (0, l.jsx)(eV.A, { className: e4.pU, embedId: (0, ez.A)(n.id, s.id) }),
                            }),
                            null != L
                                ? (0, l.jsxs)("div", {
                                      className: e4.qr,
                                      children: [
                                          (0, l.jsx)(eW.Ay, {
                                              renderIcon: !1,
                                              users: k,
                                              size: e8,
                                              max: 6,
                                              renderUser: U,
                                          }),
                                          (0, l.jsxs)("div", {
                                              className: e4.Hq,
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: e4.qi,
                                                      children: [
                                                          (0, l.jsx)(e1, { channelId: L }),
                                                          (0, l.jsx)(eD.l, {
                                                              isTrayButton: !0,
                                                              label: Y.intl.string(Y.t.brPQ5U),
                                                              onClick: m,
                                                              iconComponent: eT.g,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: e4.pt,
                                                      children: (0, l.jsx)(eP.A, {
                                                          applicationId: s.id,
                                                          location: n,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          w
                                              ? (0, l.jsx)(ew.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, eR.zV)(er.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, eY.A)({
                                                                onConfirm: async () => {
                                                                    s?.id != null &&
                                                                        null != d &&
                                                                        (await (0, eG.od)(s.id, d)),
                                                                        (0, eG.jp)();
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
                    A && null != t
                        ? (0, l.jsx)(eO.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: g,
                              onResize: (e) => {
                                  en._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), b(e);
                              },
                              onResizeEnd: (e) => {
                                  en._.dispatch(er.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), I(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
function e3(e) {
    let { maxHeight: t, renderExternalHeader: n } = e,
        {
            connectedChannelId: i,
            connectedActivity: a,
            activityPanelMode: s,
        } = (0, eC.cf)([eI.Ay], () => {
            let e = eI.Ay.getConnectedActivityLocation(),
                t = eI.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, ev.H)(e),
                connectedActivity: t,
                activityPanelMode: eI.Ay.getActivityPanelMode(),
            };
        }),
        r = (0, eC.bG)([eE.A], () => eE.A.getWindowOpen(er.MLl.ACTIVITY_POPOUT));
    if (!(0, ej.Gp)(i)) return null;
    let o = a?.applicationId;
    return s !== eJ.Gd.PANEL || null == o || r || null == i || null == a || (0, ey.A)(i)
        ? null
        : (0, l.jsx)(e9, { maxHeight: t, connectedLocation: a.location, renderExternalHeader: n });
}
var e5 = n(90804),
    e7 = n(748975),
    e6 = n(323073),
    te = n(568598),
    tt = n(313961),
    tn = n(164617),
    ti = n(355622),
    tl = n(689874),
    ta = n(17447),
    ts = n(939249),
    tr = n(408278),
    to = n(624479),
    td = n(691540),
    tc = n(857250),
    tu = n(97483),
    th = n(534890),
    t_ = n(39623),
    tm = n(952270),
    tg = n(835835),
    tp = n(381849),
    tA = n(927813),
    tx = n(995273),
    tf = n(976860),
    tb = n(957565),
    tI = n(935208),
    tC = n(256331),
    tE = n(141850),
    tj = n(736339),
    tv = n(701952),
    ty = n(84593);
function tS(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].conversation.id !== t[n].conversation.id) return !1;
    return !0;
}
function tT(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
let tN = ["high", "medium", "low"],
    tR = a.memo(function (e) {
        let { moderation: t } = e,
            n = null != t && 1 === t.status,
            i = null != t && !t.flagged_title && !t.flagged_summary && !t.flagged_key_points,
            s = a.useMemo(() => {
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
                    : s.failed > 0
                      ? "failed"
                      : s.unknown > 0
                        ? "unknown"
                        : s.passed > 0
                          ? "passed"
                          : "unknown",
            o =
                null != t
                    ? (t.flagged_summary_details.find((e) => {
                          var n;
                          return (
                              e.severity ===
                              ((n = t.flagged_summary_details.map((e) => e.severity)),
                              tN.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: ty.UO,
            children: [
                (0, l.jsx)(j.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: ty.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: ty.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ty.a7,
                            children: [
                                (0, l.jsx)(j.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : n ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : n ? "✓" : "✗",
                                }),
                                (0, l.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != t &&
                                    !n &&
                                    null != t.status_reason &&
                                    (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.status_reason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: ty.a7,
                            children: [
                                (0, l.jsx)(j.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : i ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : i ? "✓" : "✗",
                                }),
                                (0, l.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !i &&
                                    (0, l.jsxs)(j.E, {
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
                                    (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: ty.a7,
                            children: [
                                (0, l.jsx)(j.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == t || "unknown" === r
                                            ? "text-muted"
                                            : "passed" === r
                                              ? "status-positive"
                                              : "status-danger",
                                    children: null == t || "unknown" === r ? "—" : "passed" === r ? "✓" : "✗",
                                }),
                                (0, l.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
                                    (s.passed > 0 || s.failed > 0 || s.unknown > 0) &&
                                    (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            s.passed > 0 && `${s.passed} passed`,
                                            s.failed > 0 && `${s.failed} failed`,
                                            s.unknown > 0 && `${s.unknown} unknown`,
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
    tO = a.memo(function (e) {
        let {
                conversation: t,
                color: n,
                isInViewport: i,
                scrollTarget: s,
                onJump: r,
                onHoverStart: o,
                onHoverEnd: d,
            } = e,
            c = a.useRef(null);
        a.useEffect(() => {
            null != s && null != c.current && c.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [s]);
        let u = tI.default.extractTimestamp(t.start_message_id),
            h = tI.default.extractTimestamp(t.end_message_id),
            _ = (function (e) {
                let { timestamp: t, abbreviated: n = !0 } = e,
                    [i, l] = a.useState(() => (0, tx.jb)(t, n));
                return (
                    a.useEffect(() => {
                        l((0, tx.jb)(t, n));
                        let e = Date.now() - t;
                        if (e > tA.A.Millis.DAY) return;
                        let i = e >= tA.A.Millis.HOUR ? tA.A.Millis.HOUR : tA.A.Millis.MINUTE,
                            a = setInterval(
                                () => {
                                    l((0, tx.jb)(t, n));
                                },
                                i,
                                i - (e % i),
                            );
                        return () => clearInterval(a);
                    }, [t, n]),
                    i
                );
            })({ timestamp: u }),
            m = Math.max(1, Math.round((h - u) / 1e3)),
            g = (0, tp.WR)({ seconds: m, getFormatter: tp.i }),
            p = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            A = null != p ? (0, tv.i)(p.content_json) : null;
        return (0, l.jsxs)(ts.D, {
            innerRef: c,
            className: `${ty.Nm}${i ? ` ${ty.Sk}` : ""}`,
            style: { backgroundColor: i ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => r(t),
            onMouseEnter: () => o(t.id),
            onMouseLeave: d,
            children: [
                (0, l.jsxs)("div", {
                    className: ty.PY,
                    children: [
                        (0, l.jsx)(j.E, {
                            variant: "text-md/medium",
                            color: null != A ? "text-default" : "text-muted",
                            className: ty.So,
                            children: A?.title ?? "Summary not available",
                        }),
                        (0, l.jsx)(tr.K, {
                            icon: to.T,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, tb.C)(JSON.stringify(t, null, 2), () =>
                                        (0, td.P0)((0, tc.o)("Copied conversation JSON", tu.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(j.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: ty.FR,
                    children: [
                        _,
                        " ago \xb7 ",
                        g,
                        " duration \xb7 ",
                        t.message_count,
                        " messages \xb7 ",
                        t.user_count,
                        " users",
                    ],
                }),
                A?.brief_summary != null &&
                    (0, l.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: ty.g5,
                        children: A.brief_summary,
                    }),
                null != A &&
                    A.key_points.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: ty.JP,
                        children: A.key_points.map((e, t) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                t,
                            ),
                        ),
                    }),
                (0, l.jsxs)(j.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: ty.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: ty.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: ty.UO,
                    children: [
                        (0, l.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: ty.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: ty.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ty.a7,
                                    children: [
                                        (0, l.jsx)(j.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.substance?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, l.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ty.a7,
                                    children: [
                                        (0, l.jsx)(j.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.engagement?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, l.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ty.a7,
                                    children: [
                                        (0, l.jsx)(j.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.dynamics?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, l.jsx)(j.E, {
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
                (0, l.jsx)(tR, { moderation: t.moderation }),
            ],
        });
    });
function tL(e) {
    let { channel: t } = e,
        n = (0, _.bG)([tj.A], () => tj.A.getChannelConversations(t.id), [t.id], tS),
        i = (0, _.bG)([tj.A], () => tj.A.getVisibleConversationIds(t.id), [t.id], tT),
        s = (0, _.bG)([tj.A], () => tj.A.hasMoreConversations(t.id, "before"), [t.id]),
        r = (0, _.bG)([tj.A], () => tj.A.hasMoreConversations(t.id, "after"), [t.id]),
        o = (0, _.bG)([tj.A], () => tj.A.isPendingFetch(t.id), [t.id]),
        d = (0, _.bG)([tC.A], () => tC.A.isHighlightingEnabled(), []),
        c = (0, _.bG)([tj.A], () => tj.A.getScrollToConversation(t.id), [t.id]),
        u = a.useCallback(
            (e) => {
                (0, tE.UA)(t.id, e);
            },
            [t.id],
        ),
        h = a.useCallback(() => {
            (0, tE.UA)(null, null);
        }, []),
        m = a.useCallback((e) => {
            (0, tE.xI)(e.channel_id, e.id), (0, tf.pX)(er.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: ty.zr,
        children: [
            (0, l.jsx)(tg.Y9, {
                icon: th.o,
                title: "Conversations",
                children: (0, l.jsx)("div", {
                    className: ty.y6,
                    children: (0, l.jsx)(tr.K, {
                        icon: d ? t_.b : tm.G,
                        "aria-label": d ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: tE.Eg,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: ty.Qs,
                children: [
                    s &&
                        (0, l.jsx)("div", {
                            className: ty.f,
                            children: (0, l.jsx)(ts.D, {
                                className: ty.Qf,
                                onClick: function () {
                                    if (0 === n.length || o) return;
                                    let e = n[0].conversation;
                                    (0, tE.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, l.jsx)(j.E, {
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
                                  tO,
                                  {
                                      conversation: t,
                                      color: n,
                                      isInViewport: i.has(t.id),
                                      scrollTarget: c?.conversationId === t.id ? c.seq : null,
                                      onJump: m,
                                      onHoverStart: u,
                                      onHoverEnd: h,
                                  },
                                  t.id,
                              );
                          })
                        : (0, l.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: ty.BI,
                              children: "No conversations available.",
                          }),
                    r &&
                        (0, l.jsx)("div", {
                            className: ty.f,
                            children: (0, l.jsx)(ts.D, {
                                className: ty.Qf,
                                onClick: function () {
                                    if (0 === n.length || o) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, tE.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, l.jsx)(j.E, {
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
var tM = n(268218),
    tD = n(726249),
    tP = n(228366),
    tw = n(334738),
    tk = n(208882),
    tU = n(938764),
    tG = n(519480),
    tF = n(352123),
    tH = n(603968),
    tB = n(478927);
let tV = (e) => {
    let { guild: t, onAddGuild: i } = e,
        s = a.useCallback(() => {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("85905")]).then(
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
        className: tB.h2,
        children: [
            (0, l.jsx)("img", { className: tB.hd, alt: "", src: n(668778) }),
            (0, l.jsx)(N.D, {
                className: tB._U,
                variant: "heading-xl/semibold",
                children: Y.intl.format(Y.t.vyvrpC, { guildName: t.name }),
            }),
            (0, l.jsx)(j.E, { variant: "text-md/normal", className: tB.YI, children: Y.intl.string(Y.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(tH.E, {
                      className: tB.c5,
                      iconUrl: n(928202),
                      header: Y.intl.string(Y.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(tH.E, {
                className: tB.c5,
                iconUrl: n(799258),
                header: Y.intl.string(Y.t.L4bwJ9),
                completed: !1,
                onClick: s,
            }),
        ],
    });
};
var tW = n(892547),
    tY = n(689175),
    tz = n(761508),
    tq = n(765671),
    tK = n(22231),
    t$ = n(365199),
    tQ = n(686956),
    tX = n(573435),
    tZ = n(101555),
    tJ = n(548118),
    t0 = n(714991),
    t1 = n(776231),
    t4 = n(345942),
    t8 = n(71393),
    t2 = n(486020),
    t9 = n(860689),
    t3 = n(682557),
    t5 = n(253607);
let t7 = a.memo(function (e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(ts.D, {
        onClick: t,
        className: t5.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(j.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: t5.Kk,
                children: Y.intl.string(Y.t.H9jxS1),
            }),
        ],
    });
});
function t6(e) {
    let { entry: t } = e,
        [i, s] = a.useState(!1),
        o = a.useRef(null),
        { canEdit: d } = (0, tF.A)(t);
    return (0, l.jsx)("div", {
        className: r()(t5.fc, { [t5.QX]: i }),
        children: (0, l.jsxs)(tZ.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eS.m, {
                          text: Y.intl.string(Y.t.XnuOvN),
                          children: (0, l.jsx)(tZ.$n, {
                              onClick: () => {
                                  (0, g.openModalLazy)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, l.jsx)(e, { ...n, entry: t });
                                  });
                              },
                              "aria-label": Y.intl.string(Y.t.XnuOvN),
                              children: (0, l.jsx)(tK.R, { size: "xs", color: "currentColor", className: t5.IQ }),
                          }),
                      })
                    : null,
                (0, l.jsx)(t3.A, {
                    targetElementRef: o,
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(eS.m, {
                            text: Y.intl.string(Y.t["UKOtz+"]),
                            children: (0, l.jsx)(tZ.$n, {
                                ...n,
                                onClick: (e) => {
                                    t(e);
                                },
                                ref: o,
                                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                                children: (0, l.jsx)(t$.j, { size: "md", color: "currentColor", className: t5.IQ }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let ne = a.memo(function (e) {
    let { entry: t } = e,
        [i, s] = a.useState(!1),
        r = null != (0, _.bG)([t8.A], () => t8.A.getGuild(t.guildId)),
        o = async () => {
            s(!0);
            try {
                r ? (0, t4.u)(t.guildId) : await tQ.A.joinGuild(t.guildId, { source: er.Q4z.DIRECTORY_ENTRY });
            } finally {
                s(!1);
            }
        },
        d = t2.Ay.getGuildSplashURL({ id: t.guildId, splash: t.splash, size: 300 * (0, t1.mZ)() }),
        c = t2.Ay.getGuildIconURL({ id: t.guildId, icon: t.icon, size: 40 }) ?? void 0,
        u = Y.intl.string(Y.t.VJlc0S);
    return (
        r && (u = Y.intl.string(Y.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: t5.Nr,
            onContextMenu: (e) => {
                (0, b.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 283354));
                    return (n) => (0, l.jsx)(e, { ...n, entry: t });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: t5.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: t5.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: t5.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: t5.$f,
                            children: (0, l.jsx)(tX.Ay, {
                                mask: tX.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: t5.SA,
                                    children: (0, l.jsx)(tJ.Ay, {
                                        className: t5.rZ,
                                        iconSrc: c,
                                        guild: (0, t9.xi)(t),
                                        size: tJ.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: t5.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t5.DD,
                            children: [
                                (0, l.jsx)(t0.A, { className: t5.n2, guild: t }),
                                (0, l.jsx)(j.E, {
                                    className: t5.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: t.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(j.E, {
                            className: t5.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: t.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: t5.Fj,
                            children: [
                                null != t.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: t5.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: t5.JX }),
                                            (0, l.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Y.intl.format(Y.t["LC+S+m"], {
                                                    membersOnline: t.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != t.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: t5.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: t5.Li }),
                                            (0, l.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: Y.intl.format(Y.t.zRl6XR, {
                                                    count: t.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: t5.PD,
                            children: (0, l.jsx)(A.$, {
                                loading: i,
                                variant: r ? "secondary" : "active",
                                onClick: o,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(t6, { entry: t }),
            ],
        })
    );
});
var nt = n(946116),
    nn = n(562845),
    ni = n(519094);
let nl = (e) => {
        let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: a } = e,
            { ref: s, width: o } = (0, tq.Ay)(),
            d = null != o && o <= 800;
        return (0, l.jsxs)("div", {
            ref: s,
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
                            (0, l.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: ni.dc,
                                children: Y.intl.string(Y.t.IT7qoC),
                            }),
                            (0, l.jsx)(j.E, {
                                variant: "text-md/normal",
                                className: ni.R_,
                                children: Y.intl.string(Y.t["5PoYts"]),
                            }),
                            (0, l.jsx)(x.N, {
                                theme: W.NJ.LIGHT,
                                children: (e) =>
                                    (0, l.jsx)("div", {
                                        className: r()(ni.MT, e),
                                        children: (0, l.jsx)(tW.I, {
                                            query: t,
                                            "aria-label": Y.intl.string(Y.t.nL2wKD),
                                            placeholder: Y.intl.string(Y.t.nL2wKD),
                                            onChange: n,
                                            onClear: i,
                                            onKeyDown: a,
                                        }),
                                    }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    na = (e) => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: i,
            searchQuery: s,
            setSearchQuery: r,
            handleClearSearch: o,
            handleSearchKeyPress: d,
            currentCategoryId: c,
            handleSelectCategory: u,
            categoryCounts: h,
            allEntriesCount: _,
            isLoading: m,
        } = e;
        return (0, l.jsx)("div", {
            className: nn.$$,
            children: (0, l.jsxs)(tY.Gt, {
                className: nn.XG,
                children: [
                    (0, l.jsx)(nl, {
                        searchQuery: s,
                        setSearchQuery: r,
                        handleClearSearch: o,
                        handleSearchKeyPress: d,
                    }),
                    (0, l.jsx)(tY.Ch, {
                        orientation: "horizontal",
                        children: (0, l.jsxs)(tz.V, {
                            className: ni.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: c,
                            onItemSelect: (e) => {
                                u(e);
                            },
                            children: [
                                (0, l.jsx)(
                                    tz.V.Item,
                                    {
                                        className: ni.YU,
                                        id: nt.mU.ALL,
                                        children: `${Y.intl.string(Y.t.hEAa2a)} (${_})`,
                                    },
                                    nt.mU.ALL,
                                ),
                                (0, nt.g2)(t.id).map((e) => {
                                    let { value: t, label: n } = e;
                                    return (0, l.jsx)(
                                        tz.V.Item,
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
                    m && null == n
                        ? (0, l.jsx)(p.y, { className: nn.u1 })
                        : n?.map((e, t) =>
                              (0, l.jsxs)(
                                  a.Fragment,
                                  {
                                      children: [
                                          void 0 !== e.header
                                              ? (0, l.jsx)(j.E, {
                                                    variant: "text-md/semibold",
                                                    className: ni.bV,
                                                    children: e.header,
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: nn.vY,
                                              children: [
                                                  e.entries.map((e) => (0, l.jsx)(ne, { entry: e }, e.guildId)),
                                                  e.appendEndCard && null != i ? (0, l.jsx)(t7, { onClick: i }) : null,
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
var ns = n(370876),
    nr = n(349288),
    no = n(364522),
    nd = n(792831),
    nc = n(916815);
let nu = (e) => {
    let t,
        {
            searchQuery: n,
            setSearchQuery: i,
            mostRecentQuery: a,
            handleClearSearch: s,
            handleSearchKeyPress: r,
            handleCreateOrAddGuild: o,
            searchResults: d,
            searchFetching: c,
        } = e;
    if (c) t = (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(p.y, { className: nn.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? Y.intl.format(Y.t.qWFupn, {
                      addServerHook: function (e, t) {
                          return (0, l.jsx)(nr.Anchor, { onClick: o, children: e }, t);
                      },
                  })
                : Y.intl.string(Y.t.vYyEnv);
        t = (0, l.jsxs)("div", {
            className: nc.Je,
            children: [
                (0, l.jsx)("img", { className: nc.Tc, alt: "", src: "/assets/e4f29c32b2c213bd.svg" }),
                (0, l.jsx)(N.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    className: nc.gR,
                    children: Y.intl.string(Y.t["6HXiuE"]),
                }),
                (0, l.jsx)(j.E, { variant: "text-md/normal", color: "text-default", className: nc.av, children: e }),
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
                                (0, l.jsx)(ts.D, {
                                    onClick: s,
                                    className: nc.UE,
                                    children: (0, l.jsx)(nd.A, { direction: nd.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(N.D, {
                                    variant: "heading-xl/semibold",
                                    className: nc.s7,
                                    children: Y.intl.format(Y.t.UkOHRd, { numResults: d.length, query: a }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tW.I, {
                            query: n,
                            "aria-label": Y.intl.string(Y.t.nL2wKD),
                            placeholder: Y.intl.string(Y.t.nL2wKD),
                            onChange: i,
                            onClear: s,
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
let n_ = (e) => {
    let { channel: t, guild: i } = e,
        {
            currentCategoryId: s,
            directoryEntries: r,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, _.cf)([tG.A], () => {
            let e = tG.A.getCurrentCategoryId(t.id),
                n = tG.A.getDirectoryEntries(t.id, e === nt.mU.ALL ? null : e),
                i = tG.A.getDirectoryCategoryCounts(t.id);
            return {
                currentCategoryId: e,
                directoryEntries: n,
                categoryCounts: i,
                allEntriesCount: tG.A.getDirectoryAllEntriesCount(t.id),
                isLoading: tG.A.isFetching(),
            };
        });
    a.useEffect(
        () => () => {
            let e = eX.Ay.lastMessageId(t.id);
            null != e &&
                tP.h.wait(() => {
                    (0, tw.ack)(
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
    let u = a.useMemo(
            () =>
                null != r
                    ? (function (e, t) {
                          if (t !== nt.mU.ALL) return [{ entries: (0, ns._t)(e), appendEndCard: !0 }];
                          let n = [],
                              i = (0, ns.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && n.push({ header: Y.intl.string(Y.t.CbaapP), entries: i, appendEndCard: !1 });
                          let a = e.filter((e) => !l.has(e.guildId));
                          return (
                              (a = (0, ns.DN)(a)).length > 0 &&
                                  n.push({ header: Y.intl.string(Y.t.wxbhEe), entries: a, appendEndCard: !0 }),
                              n
                          );
                      })(Object.values(r), s)
                    : null,
            [r, s],
        ),
        {
            mostRecentQuery: h,
            searchFetching: m,
            searchResults: A,
        } = (0, _.cf)([tU.A], () => {
            let { mostRecentQuery: e, fetching: n } = tU.A.getSearchState(t.id);
            return { mostRecentQuery: e, searchFetching: n, searchResults: tU.A.getSearchResults(t.id, e) };
        }),
        [x, f] = a.useState(h),
        b = "" !== h,
        I = { mostRecentQuery: h },
        C = a.useRef(I);
    a.useEffect(() => {
        C.current = I;
    }),
        a.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            tk.Yc(t.id), tk.YS(t.id), f(e);
        }, [t.id]),
        a.useEffect(() => {
            et.default.track(er.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: t.id,
                directory_guild_id: i.id,
                primary_category_id: s,
            });
        }, [t.id, i.id, s]);
    let E = (0, tF.b)(t),
        j = a.useMemo(
            () =>
                E
                    ? () => {
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("96349"), n.e("95544")]).then(
                                  n.bind(n, 579735),
                              );
                              return (n) =>
                                  (0, l.jsx)(e, {
                                      ...n,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: t.id,
                                      currentCategoryId: s === nt.mU.ALL ? null : s,
                                  });
                          });
                      }
                    : void 0,
            [E, i.name, i.id, t.id, s],
        ),
        v = (e) => {
            0 !== x.trim().length &&
                e.key === nh.dh.ENTER &&
                (tk.Se(t.id, x),
                et.default.track(er.HAw.GUILD_DIRECTORY_SEARCH, {
                    directory_channel_id: t.id,
                    directory_guild_id: i.id,
                }));
        },
        y = () => {
            f(""), tk.BA(t.id);
        };
    return b
        ? (0, l.jsx)(nu, {
              searchQuery: x,
              setSearchQuery: f,
              mostRecentQuery: h,
              handleSearchKeyPress: v,
              handleClearSearch: y,
              handleCreateOrAddGuild: j,
              searchResults: A,
              searchFetching: m,
          })
        : null == u && null == s
          ? (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(p.y, { className: nn.u1 }) })
          : u?.length === 0 && null == s
            ? (0, l.jsx)("div", { className: nn.$$, children: (0, l.jsx)(tV, { guild: i, onAddGuild: j }) })
            : (0, l.jsx)(na, {
                  channel: t,
                  searchQuery: x,
                  setSearchQuery: f,
                  handleSearchKeyPress: v,
                  handleClearSearch: y,
                  handleCreateOrAddGuild: j,
                  currentCategoryId: s,
                  handleSelectCategory: (e) => {
                      tk.uU(t.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var nm = n(826673),
    ng = n(313281),
    np = n(47167),
    nA = n(806202),
    nx = n(58736),
    nf = n(683442),
    nb = n(111956),
    nI = n.n(nb),
    nC = n(922016),
    nE = n(550079),
    nj = n(477782),
    nv = n(811893),
    ny = n(789645),
    nS = n(163126),
    nT = n(182061),
    nN = n(886393),
    nR = n(307623),
    nO = n(660273),
    nL = n(707792),
    nM = n(41402),
    nD = n(271456),
    nP = n(200273),
    nw = n(565846),
    nk = n(57907),
    nU = n(375500),
    nG = n(707653),
    nF = n(50268),
    nH = n(584682),
    nB = n(378570),
    nV = n(713608),
    nW = n(473503),
    nY = n(901472),
    nz = n(267102),
    nq = n(474397),
    nK = n(486974),
    n$ = n(221314);
function nQ(e) {
    let { channel: t } = e,
        n = a.useContext(et.AnalyticsContext),
        i = (0, nz.aL)(),
        s = Y.intl.string(n$.default["Beo/7v"]),
        { firstMessage: r } = (0, nW.OA)(t),
        o = r?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nx.Ay.Icon, {
              onClick: () => {
                  (0, nB.iN)(t.id),
                      (0, nq.A)(),
                      (0, nY.z)(t.guild_id, d, t.id, {
                          modViewPanel: nK.g.INFO,
                          sourceLocation: location ?? n.location,
                      }),
                      i.dispatch(er.jej.POPOUT_CLOSE);
              },
              tooltip: s,
              icon: nV.q,
              "aria-label": s,
          })
        : null;
}
var nX = n(780338),
    nZ = n(782603),
    nJ = n(857071),
    n0 = n(607508),
    n1 = n(914703),
    n4 = n(37411);
function n8(e) {
    let { channel: t } = e,
        n = (0, n0.X)(t),
        [i, s] = a.useState(!1),
        r = a.useRef(null),
        o = (0, _.bG)([nJ.A], () => null != t.guild_id && nJ.A.isLurking(t.guild_id));
    if (
        (a.useEffect(() => {
            let e = () => s(!0);
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
    let d = Y.intl.string(Y.t.h850Ss);
    return (0, l.jsx)(nC.Y, {
        targetElementRef: r,
        shouldShow: i,
        animation: nC.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: (e) =>
            (0, l.jsx)(n1.A, { ...e, channel: t, navId: "thread-context", label: Y.intl.string(Y.t["1NBjqb"]) }),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(nx.Ay.Icon, {
                ...e,
                ref: r,
                onClick: () => s((e) => !e),
                tooltip: i ? null : d,
                icon: n === n4.CP.NO_MESSAGES ? nX.a : nZ.X,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var n2 = n(747926);
function n9(e) {
    let { channel: t } = e,
        [n, i] = a.useState(!1),
        s = a.useRef(null);
    function r() {
        i((e) => !e);
    }
    let o = Y.intl.string(Y.t["UKOtz+"]);
    return (0, l.jsx)(nC.Y, {
        targetElementRef: s,
        shouldShow: n,
        animation: nC.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(n3, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(nx.Ay.Icon, {
                ...e,
                ref: s,
                onClick: r,
                tooltip: n ? null : o,
                icon: t$.j,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function n3(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        a = (0, nO.A)(t, "Sidebar Overflow"),
        s = (0, nM.A)(t),
        r = (0, nk.A)(t),
        o = (0, nU.A)(t),
        d = (0, nT.A)(t),
        c = (0, nL.A)(t),
        u = (0, nw.A)(t.id),
        h = (0, nP.A)(t),
        _ = (0, nR.A)(t),
        m = (0, nN.A)(t),
        g = (0, nF.A)({ id: t.id, label: Y.intl.string(Y.t.DQ797g) }),
        p = (0, nG.A)(t),
        A = (0, nD.A)(t),
        x = (0, nS.$)(1e3);
    function f() {
        (0, nB.iN)(t.id);
    }
    function b(e) {
        let n = nI()(() => {
                en._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
            }, 250),
            i = (e) => {
                e.channelId === t.id && n();
            };
        en._.subscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            x.addEventListener("abort", () => {
                en._.unsubscribe(er.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            });
    }
    return (0, l.jsxs)(nE.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nj.rX, {
                children: [a, (0, l.jsx)(nj.Dr, { id: "open", label: Y.intl.string(Y.t.IxVmZi), action: f })],
            }),
            (0, l.jsxs)(nj.rX, { children: [r, o] }),
            (0, l.jsxs)(nj.rX, { children: [h, s, u, A] }),
            (0, l.jsxs)(nj.rX, {
                children: [
                    (0, l.jsx)(nj.Dr, {
                        id: "search",
                        label: Y.intl.string(Y.t["5h0QOP"]),
                        icon: nv.t,
                        trailingIndicator: { type: "icon", icon: nv.t },
                        action: function () {
                            b(() => {
                                en._.dispatch(er.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                f();
                        },
                    }),
                    (0, l.jsx)(nj.Dr, {
                        id: "pins",
                        label: Y.intl.string(Y.t["2BSH7n"]),
                        icon: nv.t,
                        trailingIndicator: { type: "icon", icon: nv.t },
                        action: function () {
                            b(() => {
                                en._.dispatch(er.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                f();
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nj.rX, { children: [p, d, c, _] }),
            (0, l.jsxs)(nj.rX, { children: [m, g] }),
        ],
    });
}
function n5(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t.isForumPost() ? null : (0, l.jsx)(n8, { channel: t }),
            t.isModeratorReportChannel() ? (0, l.jsx)(nQ, { channel: t }) : null,
            (0, l.jsx)(n9, { channel: t }),
            (0, l.jsx)(nx.Ay.Icon, {
                icon: ny.P,
                tooltip: Y.intl.string(Y.t.cpT0Cq),
                onClick: () => (0, n2.xu)((0, nH.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
var n7 = n(31717),
    n6 = n(853742),
    ie = n(224517);
function it(e) {
    let { channelId: t } = e,
        i = (0, _.bG)([ek.A], () => ek.A.getChannel(t)),
        s = (0, _.bG)([ek.A], () => ek.A.getChannel(i?.parent_id)),
        r = (0, _.bG)([t8.A], () => t8.A.getGuild(i?.getGuildId())),
        o = (0, np.Ay)(i),
        d = a.useRef(!1);
    if (
        (a.useEffect(() => {
            null == i || d.current || ((d.current = !0), (0, n6.rH)(i));
        }, [i]),
        null == i || null == r)
    )
        return null;
    let c = (0, l.jsx)(n5, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA.A, { channel: i, draftType: n7.C.ChannelMessage }),
            (0, l.jsx)(nx.Ay, {
                toolbar: c,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, nf.zF)({
                    channel: i,
                    parentChannel: s,
                    channelName: o,
                    guild: r,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, b.L3)(e, async () => {
                            let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, tf.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: ie.T,
                children: (0, l.jsx)(nA.A, { channel: i, guild: r, chatInputType: ti.oU.SIDEBAR }, t),
            }),
        ],
    });
}
var ii = n(91242),
    il = n(857253),
    ia = n(872363);
let is = function (e, t) {
    tP.h.wait(() => {
        tP.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: t });
    });
};
var ir = n(561446),
    io = n(300233),
    id = n(721592),
    ic = n(997509),
    iu = n(529942),
    ih = n(739455),
    i_ = n(328312);
function im(e) {
    let { guildId: t } = e;
    return (0, l.jsx)("div", {
        className: i_.t7,
        children: (0, l.jsxs)("div", {
            className: i_.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: i_.xw,
                    children: [
                        (0, l.jsx)(N.D, { variant: "heading-xl/semibold", children: Y.intl.string(Y.t["8gJGPs"]) }),
                        (0, l.jsx)(j.E, {
                            variant: "text-sm/normal",
                            className: i_.G3,
                            children: Y.intl.string(Y.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: i_.__invalid_button,
                            children: (0, l.jsx)(A.$, {
                                variant: "primary",
                                text: Y.intl.string(Y.t["I/XhUn"]),
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
var ig = n(599941),
    ip = n(251766),
    iA = n(950344),
    ix = n(217530),
    ib = n(817649),
    iI = n(601099);
function iC(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, ip.e)({ guildId: t, channelId: n }),
        s = (0, ig.uk)(t),
        r = (0, ig.Tq)(t),
        o = (0, _.bG)([t8.A], () => t8.A.getGuild(t), [t]),
        d = o?.name,
        c = (0, _.bG)([ek.A], () => ek.A.getChannel(n)),
        u = (0, np.Ay)(c),
        h = a.useMemo(() => {
            let e = {};
            for (let t of s) for (let n of t.subscription_listings_ids) e[n] = t.id;
            return e;
        }, [s]);
    return ((0, iA.A)({
        guildId: t,
        location: er.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iI.__invalid_spinnerContainer,
              children: (0, l.jsx)(p.y, { className: iI.__invalid_spinner }),
          })
        : (0, l.jsxs)(no.Ar, {
              className: iI.$$,
              children: [
                  (0, l.jsx)(N.D, {
                      variant: "heading-xl/semibold",
                      className: iI.DX,
                      children: Y.intl.format(Y.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(j.E, {
                      className: iI.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: r?.description,
                  }),
                  (0, l.jsx)(ix.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  ib.A,
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
var iE = n(604681),
    ij = n(761640),
    iv = n(678959);
function iy(e) {
    let { channelId: t } = e,
        n = (0, _.bG)([ij.Ay], () => ij.Ay.getSection(t), [t]) === er.YvQ.CONVERSATIONS,
        i = (0, _.bG)([tj.A], () => tj.A.getChannelConversations(t).length > 0, [t]);
    return (0, l.jsx)(nx.In, {
        onClick: iE.A.toggleConversationsSection,
        tooltip: n ? null : "Conversations",
        icon: th.o,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? iv.q : void 0,
        selected: n,
        showBadge: i,
    });
}
var iS = n(967198);
function iT(e) {
    let { channelId: t } = e,
        n = (0, _.bG)([ij.Ay], () => ij.Ay.getSection(t)),
        i = (0, _.bG)([iS.A], () => iS.A.getGuildId()),
        a = n === er.YvQ.MEMBERS;
    return (0, l.jsx)(nx.In, {
        tooltip: a ? Y.intl.string(Y.t.Axvx8c) : Y.intl.string(Y.t.gxChDx),
        icon: T.n,
        onClick: () => {
            eR.Ay.trackWithMetadata(er.HAw.MEMBER_LIST_TOGGLED, { channel_id: t, guild_id: i, member_list_open: !a }),
                iE.A.toggleMembersSection();
        },
        selected: a,
    });
}
var iN = n(187360),
    iR = n(366605),
    iO = n(945830);
let iL = function (e) {
    let { channel: t } = e,
        n = (0, e6.ni)(t),
        [i, s] = a.useState(!1),
        r = (0, _.bG)([eX.Ay], () => eX.Ay.hasUnreadPins(t.id), [t]),
        o = (0, nz.aL)(),
        d = a.useRef(null),
        c = a.useCallback(() => {
            n || s((e) => !e);
        }, [n]);
    function u(e) {
        e?.shiftKey || o.dispatch(er.jej.POPOUT_CLOSE);
    }
    return (
        a.useEffect(
            () => (
                en._.subscribe(er.jej.TOGGLE_CHANNEL_PINS, c),
                () => {
                    en._.unsubscribe(er.jej.TOGGLE_CHANNEL_PINS, c);
                }
            ),
            [c],
        ),
        (0, l.jsx)(nC.Y, {
            targetElementRef: d,
            shouldShow: i,
            animation: nC.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => s(!1),
            renderPopout: function (e) {
                return (0, l.jsx)(iO.A, { ...e, onJump: u, channel: t });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: i } = t;
                return (0, l.jsx)(nx.In, {
                    ...e,
                    ref: d,
                    onClick: c,
                    tooltip: i ? null : Y.intl.string(Y.t["mp1N/2"]),
                    icon: iR.t,
                    iconSize: 20,
                    "aria-label": Y.intl.string(Y.t["mp1N/2"]),
                    disabled: n,
                    showBadge: r,
                    selected: i,
                });
            },
        })
    );
};
var iM = n(306788),
    iD = n(863922),
    iP = n(822074),
    iw = n(521732);
function ik(e) {
    let { channel: t } = e,
        n = (0, e6.ni)(t),
        i = (0, _.bG)([iP.A], () => iP.A.shouldShowTopicsBar());
    return (0, l.jsx)(nx.Ay.Icon, {
        icon: iM.K,
        onClick: () => {
            et.default.track(er.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: iw.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, iD.Oz)();
        },
        tooltip: i ? Y.intl.string(Y.t.nGs3kO) : Y.intl.string(Y.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: n,
    });
}
var iU = n(885574),
    iG = n(947094),
    iF = n(919577),
    iH = n(207777),
    iB = n(422844),
    iV = n(435470),
    iW = n(892110),
    iY = n(45494);
function iz(e) {
    let { channel: t } = e,
        n = (0, iV.S4)(t),
        i = (0, _.bG)([iG.A], () => iG.A.hasHidden(t.id)),
        a = (0, iW.l)(t.id),
        { sortOrder: s, tagFilter: r, tagSetting: o } = (0, iB.R)(t.id),
        d = (0, _.bG)(
            [iH.A, iY.A],
            () => !!(iH.A.getThreadIds(t.id, s, r, o).length > 0) || !!(iY.A.getThreads(t.id, s, r, o).length > 0),
            [t.id, s, r, o],
        ),
        c = t.isMediaChannel();
    if (!n || a || (c && d)) return null;
    let u = i
        ? c
            ? Y.intl.string(Y.t["WP/IE1"])
            : Y.intl.string(Y.t.zfq9V4)
        : c
          ? Y.intl.string(Y.t.p60yF1)
          : Y.intl.string(Y.t.SNOqYC);
    return (0, l.jsx)(nx.In, {
        tooltip: u,
        icon: iU.m,
        onClick: () => iF.A.hideAdminOnboarding(t.id, !i),
        selected: !i,
    });
}
var iq = n(742589),
    iK = n(43105),
    i$ = n(428689),
    iQ = n(978940),
    iX = n(387755),
    iZ = n(956793),
    iJ = n(641703),
    i0 = n(379848),
    i1 = n(753727),
    i4 = n(222692),
    i8 = n(442353),
    i2 = n(470710),
    i9 = n(186111),
    i3 = n(969341),
    i5 = n(994500),
    i7 = n(977997),
    i6 = n(360469),
    le = n(49999),
    lt = n(731854);
class ln extends a.PureComponent {
    iconRef = a.createRef();
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
                isBlocked: a,
                channel: s,
                mode: r,
                isProvisional: o,
            } = this.props;
        if (t || (n && r === er._Of.VOICE)) return null;
        let d = s.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = Y.intl.string(Y.t.izMR7o)))
                : i3.Ay.supports(lt.O5.VIDEO)
                  ? a
                      ? ((c = Y.intl.string(Y.t.PHzjvX)), (u = !0))
                      : n && r === er._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? Y.intl.string(Y.t.S0W8Z5) : Y.intl.string(Y.t.oCqlGG)))
                  : ((u = !0), (e = this.handleBrowserNotSupported), (c = Y.intl.string(Y.t.UVpg3U))),
            (0, l.jsx)(nx.Ay.Icon, { icon: i$.n, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: i,
                isBlocked: a,
                channel: s,
                dismissibleContentTypes: r,
                isProvisional: o,
            } = this.props;
        if (t) return null;
        let d = s.isManaged(),
            c = !1;
        o
            ? ((c = !0), (e = Y.intl.string(Y.t.izMR7o)))
            : i
              ? ((e = d ? Y.intl.string(Y.t.LW2Ghr) : Y.intl.string(Y.t.rF7lN5)), (c = !0))
              : a
                ? ((e = Y.intl.string(Y.t.PHzjvX)), (c = !0))
                : (e = n
                      ? d
                          ? Y.intl.string(Y.t.S0W8Z5)
                          : Y.intl.string(Y.t.fdEeb5)
                      : d
                        ? Y.intl.string(Y.t.S0W8Z5)
                        : Y.intl.string(Y.t.focH1t));
        let u = (0, l.jsx)(nx.Ay.Icon, {
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
                        return t === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(iK.A, {
                                  targetElementRef: this.iconRef,
                                  title: Y.intl.string(Y.t.HOPqzR),
                                  body: Y.intl.format(Y.t.xAW71b, { helpdeskUrl: i6.DY }),
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
        return (0, l.jsxs)(a.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, t) => {
        let { channel: n, notFriend: i, appContext: l } = this.props,
            a = i ? n.getRecipientId() : null,
            s = () => iX.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, a);
        t ? (0, i8.A)(s, l) : s();
    };
    handleJoinCall = (e) => {
        iZ.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, nm.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: le.i.AUTO }),
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
        (0, i8.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, i4.A)();
    };
}
function li(e) {
    let { channel: t } = e,
        n = (0, i1.A)(),
        i = (0, _.bG)([tt.A], () => tt.A.getMode(t.id)),
        a = (0, _.bG)([i7.A], () => i7.A.isInChannel(t.id)),
        s = (0, _.bG)([O.A], () => O.A.useReducedMotion),
        { callActive: r, callUnavailable: o } = (0, _.cf)([i2.A], () => ({
            callActive: i2.A.isCallActive(t.id),
            callUnavailable: i2.A.isCallUnavailable(t.id),
        })),
        d = t.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, _.cf)([i5.A], () => ({
            notFriend: t.type === er.rbe.DM && null != d && !i5.A.isFriend(d),
            isBlocked: t.type === er.rbe.DM && null != d && i5.A.isBlocked(d),
        })),
        h = (0, _.bG)([J.default], () => J.default.getUser(d)),
        g = (0, nz.Us)(),
        p = [],
        A = (0, iJ.A)(t.id),
        x = (0, _.bG)([i9.A], () => i9.A.hasLayers());
    return (A && !x && p.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), n || h?.bot)
        ? null
        : (0, l.jsx)(ln, {
              channel: t,
              mode: i,
              inCall: a,
              callActive: r,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: g,
              dismissibleContentTypes: p,
              useReducedMotion: s,
          });
}
var ll = n(95550),
    la = n(765178),
    ls = n(231483),
    lr = n(544231),
    lo = n(338510),
    ld = n(151119),
    lc = n(278941),
    lu = n(665909),
    lh = n(327337);
let l_ = a.memo(function (e) {
    let { channel: t } = e,
        i = (0, lo.u)(t.id),
        s = (0, ld.S)(t.id),
        r = (0, lc.e)(t.id),
        o = (0, g.useHasAnyModalOpen)(),
        d = (0, _.bG)([i9.A], () => i9.A.hasLayers()),
        c = a.useCallback(
            () => (s ? Y.intl.string(Y.t["16QyDv"]) : null != r ? Y.intl.string(Y.t.kCN9i0) : null),
            [s, r],
        ),
        u = a.useMemo(() => (s || null != r) && !o && !d, [s, r, o, d]),
        [h, m] = a.useState(c());
    a.useEffect(() => {
        null != r &&
            null != i &&
            (la.O.announce(Y.intl.string(Y.t.acsXuG)),
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
            s &&
                (la.O.announce(Y.intl.string(Y.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lr.bg)(t.id);
                }, 5e3));
    }, [t, r, i, s]),
        (0, F.Ay)(() => {
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
        a.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [s, r, c]);
    let p = a.useCallback(() => {
        null != r && (0, lr.xi)(t.id, [r.id]),
            null != i &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("45033"), n.e("19959"), n.e("12115")]).then(
                            n.bind(n, 131882),
                        );
                        return (n) => {
                            let { onClose: a, transitionState: s } = n;
                            return (0, l.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: a,
                                transitionState: s,
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
        : (0, l.jsx)(eS.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nx.Ay.Icon, {
                  icon: ls.l,
                  onClick: p,
                  tooltip: Y.intl.string(Y.t.rpc2qv),
                  tooltipDisabled: null != r,
              }),
          });
});
var lm = n(262763),
    lg = n(406704),
    lp = n(576705);
let lA = a.memo(function (e) {
    let { channel: t } = e,
        n = (0, i1.A)(),
        i = (0, _.bG)([i7.A], () => i7.A.isInChannel(t.id)),
        s = (0, _.bG)([i7.A], () => !u().isEmpty(i7.A.getVoiceStatesForChannel(t.id))),
        r = (0, _.bG)([lp.A], () => lp.A.can(er.xBc.CONNECT, t)),
        { needSubscriptionToAccess: o } = (0, id.A)(t.id),
        d = (0, lg.Id)(t),
        c = a.useCallback(() => {
            lm.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [t, i, o]);
    return (a.useEffect(
        () => (
            en._.subscribe(er.jej.CALL_START, c),
            () => {
                en._.unsubscribe(er.jej.CALL_START, c);
            }
        ),
        [c],
    ),
    lg.io.useExperiment({ guildId: t.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }).enabled &&
        !n &&
        !i &&
        r &&
        d &&
        t.isVocalThread())
        ? (0, l.jsx)(nx.Ay.Icon, {
              icon: iQ._,
              onClick: c,
              tooltip: s ? Y.intl.string(Y.t.fdEeb5) : Y.intl.string(Y.t.focH1t),
          })
        : null;
});
var lx = n(812991),
    lf = n(47675),
    lb = n(999291);
function lI() {
    let [e, t] = (0, a.useState)(window.innerWidth >= 1132);
    return (
        (0, a.useEffect)(() => {
            let e = () => {
                t(window.innerWidth >= 1132);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        e
    );
}
function lC(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        i = (0, _.bG)([ij.Ay], () => ij.Ay.getSection(t.id, t?.isDM())),
        a = (0, lb.Ay)(t.getRecipientId()),
        s = lI(),
        r = i === er.YvQ.PROFILE && s;
    return (0, l.jsx)(nx.In, {
        disabled: !s || n,
        tooltip: !s || n ? Y.intl.string(Y.t.YneDgF) : r ? Y.intl.string(Y.t.niD64e) : Y.intl.string(Y.t["+FAsHq"]),
        icon: lx.n,
        onClick: () => {
            (0, lf.am)({ displayProfile: a, isProfileOpen: !r }), iE.A.toggleUserProfileSidebarSection();
        },
        selected: r && !n,
    });
}
let lE = {};
class lj extends _.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            lE[t] = new Set(n);
        }
    }
    hasViewedPrompt(e, t) {
        let n = lE[t];
        return null != n && !!n.has(e);
    }
    getState() {
        return lE;
    }
}
let lv = new lj(tP.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: t, guildId: n } = e,
            i = lE[n];
        return null == i ? ((lE[n] = new Set()), lE[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != lE[t.id] && !t.unavailable && (delete lE[t.id], !0);
    },
});
var ly = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    lS = n(376943),
    lT = n(394953),
    lN = n(709066),
    lR = n(87664);
n(667532);
var lO = n(403362);
let lL = [],
    lM = ea.Ay.getEnableHardwareAcceleration();
function lD(e) {
    let { user: t, channel: i, status: s, activities: r } = e,
        o = (0, _.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[t.id]),
        d = (0, _.bG)([J.default], () => J.default.getCurrentUser()),
        c = (0, _.bG)([Q.A], () => Q.A.isMobileOnline(t.id)),
        u = (0, _.bG)([i5.A], () => i5.A.getNickname(t.id)),
        h = (0, lR.A)(t.id),
        m = a.useRef(null),
        g = (e) => {
            (0, b.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("28864"), n.e("31206")]).then(
                    n.bind(n, 778595),
                );
                return (n) => (0, l.jsx)(e, { ...n, user: t, channel: i });
            });
        },
        p = () => {
            let e = `@${el.Ay.getUserTag(t, { decoration: "never" })}`,
                n = `<@${t.id}>`;
            en._.dispatch(er.jej.TEXTAREA_FOCUS, { channelId: i.id }),
                en._.dispatchToLastSubscribed(er.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                R.A.startTyping(i.id);
        },
        A = (0, D.r)({ user: t }),
        [x, f] = a.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: m,
        user: t,
        channelId: i.id,
        position: E.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: p,
        shouldShow: x,
        onRequestClose: () => f(!1),
        children: (e) => {
            let { onClick: n, onMouseDown: a, ..._ } = e;
            return (0, l.jsx)(
                es.A,
                {
                    ref: m,
                    user: t,
                    currentUser: d,
                    isOwner: t.id === i.ownerId,
                    ownerTooltipText: Y.intl.string(Y.t["MRXZ+x"]),
                    shouldAnimateStatus: lM,
                    isTyping: o,
                    status: s,
                    activities: r,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: g,
                    selected: x,
                    isMobile: c,
                    nick: u,
                    nameplate: A,
                    onClick: (e) => {
                        e.shiftKey ? p?.() : f((e) => !e);
                    },
                    onMouseDown: (e) => {
                        x ? e.stopPropagation() : a?.(e);
                    },
                    ..._,
                },
                t.id,
            );
        },
    });
}
function lP(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function lw(e) {
    let { channel: t } = e,
        n = J.default.getCurrentUser(),
        i = n?.isStaff(),
        { analyticsLocations: s } = (0, M.Ay)(L.A.MEMBER_LIST),
        { listItems: r } = (0, _.bG)(
            [i5.A, J.default, Q.A],
            () => {
                var e, n;
                let i =
                        ((e = t.recipients),
                        (n = J.default),
                        u()(e)
                            .map(n.getUser)
                            .unshift(n.getCurrentUser())
                            .filter(lO.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    i5.A.isFriend(e.id) || e.id === J.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? er.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? lL,
                          })
                        : (l[e.id] = { status: er.clD.OFFLINE, activities: lL });
                let a = [];
                for (let e of i) {
                    let t = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    a.push(t);
                }
                return { listItems: a };
            },
            [t],
            lP,
        );
    a.useEffect(() => {
        et.default.track(er.HAw.MEMBER_LIST_VIEWED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }, [t.guild_id, t.id, t.type]);
    let o = i && r.every((e) => e.user.isStaff());
    return (0, l.jsx)(M.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            className: ed.kL,
            children: (0, l.jsx)("aside", {
                className: ed.yg,
                children: (0, l.jsxs)(no.Ip, {
                    className: ed.ol,
                    fade: !0,
                    children: [
                        (0, l.jsxs)(P.A, {
                            className: ed.lL,
                            children: [
                                `${Y.intl.string(Y.t["9Oq93m"])}—${r.length} `,
                                o && (0, l.jsx)(lN.A, { type: lN.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        r.map((e) =>
                            (0, l.jsx)(
                                lD,
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
var lk = n(59350),
    lU = n(853279),
    lG = n(85942);
function lF() {
    return (0, l.jsx)("div", {
        className: lG.zt,
        children: (0, l.jsx)("header", {
            className: lU.wL,
            children: (0, l.jsxs)("div", {
                className: lU.TN,
                role: "status",
                children: [
                    (0, l.jsx)(j.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: Y.intl.string(Y.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: lU.zp,
                        children: (0, l.jsx)(p.y, {
                            type: p.y.Type.SPINNING_CIRCLE,
                            className: lU.u1,
                            itemClassName: lU.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var lH = n(138298),
    lB = n(940382),
    lV = n(288254),
    lW = n(873614),
    lY = n(790535),
    lz = n(163328),
    lq = n(425557),
    lK = n(270003),
    l$ = n(150934),
    lQ = n(452027),
    lX = n(292666),
    lZ = n(511274),
    lJ = n(465532),
    l0 = n(579872),
    l1 = n(748934),
    l4 = n(408018),
    l8 = n(201349),
    l2 = n(822610),
    l9 = n(915089),
    l3 = n(314307),
    l5 = n(636922),
    l7 = n(931664),
    l6 = n(631576),
    ae = n(253932),
    at = n(232835),
    an = n(522602),
    ai = n(806150),
    al = n(518960),
    aa = n(753738);
function as(e, t) {
    return { type: e, message: t ?? null };
}
function ar(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
var ao = n(393309),
    ad = n(474078),
    ac = n(636537),
    au = n(152367),
    ah = n(147087);
async function a_(e) {
    try {
        let t = await ac.Bo.post({
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
var am = n(55294),
    ag = n(790158),
    ap = n(415296);
let aA = ti.oU.THREAD_CREATION;
function ax(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        a = (0, _.bG)([ek.A], () => ek.A.getChannel(t)),
        { analyticsLocations: s } = (0, M.Ay)(L.A.CREATE_THREAD);
    return null == a
        ? null
        : (0, l.jsx)(M.f5, {
              value: s,
              children: (0, l.jsx)(eZ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": Y.intl.string(Y.t.rBIGBL),
                      className: ag.kL,
                      children: [
                          (0, l.jsx)(eA.A, { channel: a, draftType: n7.C.FirstThreadMessage }),
                          (0, l.jsx)(af, { parentChannelId: t }),
                          (0, l.jsx)(ab, { parentChannel: a, parentMessageId: n, location: i }),
                      ],
                  }),
              }),
          });
}
function af(e) {
    let { parentChannelId: t } = e,
        n = a.useCallback(() => {
            let e = n7.A.getThreadSettings(t),
                n = n7.A.getDraft(t, n7.C.FirstThreadMessage).trim(),
                i = an.A.getUploads(t, n7.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? l0.A.show({
                      title: Y.intl.string(Y.t["6kDZh1"]),
                      body: Y.intl.string(Y.t.NgS9jX),
                      confirmText: Y.intl.string(Y.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Y.intl.string(Y.t["olcKd/"]),
                      onConfirm: () => {
                          (0, n2.bA)(t);
                      },
                  })
                : (0, n2.bA)(t);
        }, [t]);
    return (0, l.jsxs)(nx.Ay, {
        toolbar: (0, l.jsx)(nx.Ay.Icon, { icon: ny.P, tooltip: Y.intl.string(Y.t.cpT0Cq), onClick: n }),
        children: [
            (0, l.jsx)(nx.Ay.Icon, { icon: lz.y, disabled: !0, "aria-label": Y.intl.string(Y.t["7Xm5QI"]) }),
            (0, l.jsx)(nx.Ay.Title, { children: Y.intl.string(Y.t["4WNcpu"]) }),
        ],
    });
}
function ab(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: s } = e,
        o = (0, _.bG)([O.A], () => O.A.messageGroupSpacing),
        d =
            ((t = a.useContext(eZ.EH)),
            a.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, t) {
            let n = (0, _.bG)([n7.A], () => n7.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = a.useState(n),
                s = a.useCallback(
                    (n) => {
                        l((e) => ({ ...e, ...n })), lJ.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: s };
        })(n, i),
        { textAreaState: m, setTextAreaState: g } = (function (e, t) {
            let [n, i] = a.useState((0, l4.N3)());
            return (
                a.useEffect(() => {
                    function n(n) {
                        let l = n7.A.getDraft(e.id, n7.C.FirstThreadMessage);
                        (0 === l.length || !0 === n) && i((0, l4.ur)(l)), t(n7.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        n(!0),
                        n7.A.addChangeListener(n),
                        () => {
                            n7.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, u),
        p = (0, ao.EN)(n),
        {
            isGeneratingAI: A,
            enableAIFeatures: x,
            getThreadNameInputAccessory: f,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    updateThreadSettings: i,
                    threadSettings: s,
                    textAreaState: r,
                } = e,
                [o, d] = a.useState(!1),
                [c, u] = a.useState(!1),
                h = (0, ah.b)(),
                _ = a.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != n) {
                                let i = at.A.getMessage(t.id, n);
                                e = i?.getContentMessage()?.content ?? null;
                            } else r.textValue.trim().length >= 10 && (e = r.textValue);
                            if (null != e) {
                                let t = await a_(e);
                                null != t && "" !== t.trim() && i({ name: t });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [t.id, n, i, h, r.textValue]);
            a.useEffect(() => {
                u(!1), d(!1), t.id === s.parentChannelId && n !== s.parentMessageId && i({ name: "" });
            }, [n, i, t.id, s.parentChannelId, s.parentMessageId]),
                a.useEffect(() => {
                    (null != s.name && "" !== s.name.trim()) || c || (h && null != n && (u(!0), _()));
                }, [t.id, n, i, s.name, c, h, _]);
            let m = a.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: au.D,
                                onClick: _,
                                "aria-label": Y.intl.string(Y.t.ZF2oBs),
                                disabled: e || o || (null == n && r.textValue.trim().length < 10),
                                tooltip: Y.intl.string(Y.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, _, o, n, r.textValue],
                ),
                g = a.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eS.m, {
                                  text: Y.intl.string(Y.t.ZF2oBs),
                                  children: (0, l.jsx)(tr.K, {
                                      icon: au.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": Y.intl.string(Y.t.ZF2oBs),
                                      onClick: _,
                                      disabled: e || o || (null == n && r.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, n, r.textValue, _],
                );
            return {
                isGeneratingAI: o,
                generateAIName: _,
                enableAIFeatures: h,
                renderAiGenerateButton: g,
                getThreadNameInputAccessory: m,
            };
        })({ parentChannel: n, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: m }),
        {
            nameError: b,
            messageError: I,
            submit: C,
            submitting: E,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: s,
                    location: r,
                    enableAIFeatures: o,
                } = e,
                [d, c] = a.useState(null),
                [u, h] = a.useState(null),
                [_, m] = a.useState(!1),
                g = (0, am.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: r,
                    onThreadCreated: n2.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: a.useCallback(
                    async (e, l, a) => {
                        if (_) return { shouldClear: !1, shouldRefocus: !1 };
                        m(!0),
                            null == e && (e = s.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = l7.A.getStickerPreview(t.id, aA.drafts.type)?.map((e) => e.id)),
                            (null == a || 0 === a.length) && (a = an.A.getUploads(t.id, n7.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === a.length;
                        if (
                            (c(d ? as(0, Y.intl.string(Y.t.uXA573)) : null),
                            h(u ? as(0, Y.intl.string(Y.t.kesTVT)) : null),
                            d || u)
                        )
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: p } = await (0, ai.i)({
                            content: e,
                            stickers: l,
                            uploads: a,
                            type: aA,
                            channel: null == n ? t : null,
                        });
                        if (!p) return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, l, a);
                        } catch (e) {
                            if (e.body?.code === er.t02.AUTOMOD_TITLE_BLOCKED) {
                                var A;
                                c(((A = e.body), as(1, (0, aa.cw)(A, t?.id))));
                            } else
                                e.body?.code === er.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(as(2, Y.intl.string(Y.t.uXA573)));
                            return m(!1), { shouldClear: !1, shouldRefocus: !0 };
                        }
                        return (0, l6.x5)(t.id, aA.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [g, s.textValue, i.name, n, t, _, o],
                ),
                submitting: _,
            };
        })({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: p,
            textAreaState: m,
            location: s,
            enableAIFeatures: x,
        }),
        j = (0, ao.Iy)(c, p) ? lq.t : lz.y;
    return (0, l.jsx)("div", {
        className: ag.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: r()(ag.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), C();
                },
                className: ag.Zd,
                children: [
                    (0, l.jsx)(no.Ip, {
                        className: ag.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: ag.bv,
                            children: [
                                (0, l.jsxs)(l3.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: r()(ap.P0, ag.P0),
                                            children: (0, l.jsx)(j, { className: ap.Kk }),
                                        }),
                                        (0, l.jsxs)(lK.n, {
                                            children: [
                                                (0, l.jsx)(aC, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: b,
                                                    disabled: E,
                                                    isGeneratingAI: A,
                                                    enableAIFeatures: x,
                                                    getThreadNameInputAccessory: f,
                                                }),
                                                n.type === er.rbe.GUILD_TEXT
                                                    ? (0, l.jsx)(aI, {
                                                          startedFromMessage: null != i,
                                                          threadSettings: c,
                                                          updateThreadSettings: h,
                                                          privateThreadMode: p,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(aj, { parentChannel: n, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ag.Eh,
                        children: [
                            (0, l.jsx)(aE, {
                                parentChannel: n,
                                textAreaState: m,
                                setTextAreaState: g,
                                submit: C,
                                error: I,
                            }),
                            (0, l.jsx)(l1.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: ag.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function aI(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: a } = e,
        s = (0, ao.Iy)(n, a),
        r = (0, l.jsx)(l$.S, {
            disabled: a === ao.jk.PrivateOnly,
            checked: s,
            onChange: (e) => i({ isPrivate: e }),
            label: Y.intl.string(Y.t.TRPp3g),
        });
    return t || a === ao.jk.Disabled
        ? null
        : (0, l.jsx)(lQ.D, {
              label: Y.intl.string(Y.t.F1zyvU),
              helperText: s ? Y.intl.string(Y.t.EWXycz) : void 0,
              children: r,
          });
}
function aC(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            updateThreadSettings: a,
            error: s,
            disabled: r,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = ar(s, { content: u }),
        _ = (0, ao.l1)(t, n),
        m = null != n && !d,
        g = (0, l9.GV)(),
        p = d ? Y.intl.string(Y.t["Nb2/RE"]) : "" !== _ ? _ : Y.intl.string(Y.t["Nb2/RE"]);
    return (0, l.jsx)(lX.k, {
        label: Y.intl.string(m ? Y.t.JPvIiL : Y.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
        placeholder: p,
        maxLength: er.Ign,
        onChange: (e) => {
            a({ name: (0, ad.A)(e, !1) }), "" !== e ? R.A.startTyping(t.id) : R.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, ad.A)(u, !0);
            e !== u && a({ name: e });
        },
        error: h,
        disabled: r || o,
    });
}
function aE(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: s, error: o } = e,
        [d, c] = a.useState(!0),
        u = a.useRef(null),
        h = a.useCallback((e) => {
            c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit());
        }, []),
        m = a.useCallback(() => c(!1), []),
        g = a.useCallback(
            (e, n, l) => {
                lJ.A.saveDraft(t.id, n, n7.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? R.A.startTyping(t.id) : "" === n && R.A.stopTyping(t.id),
                            { textValue: n, richValue: l }
                        ),
                    );
            },
            [t.id, i],
        ),
        p = a.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return s(t, i, n);
            },
            [s],
        );
    (0, eZ.Vo)({ event: er.jej.TEXTAREA_FOCUS, handler: h }), (0, eZ.Vo)({ event: er.jej.TEXTAREA_BLUR, handler: m });
    let A = (0, _.bG)([lp.A], () => lp.A.can(er.xBc.ATTACH_FILES, t)),
        x = ar(o, { content: n.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(l2.A, { channelId: t.id, type: aA, canAttachFiles: A }),
            (0, l.jsx)("div", { className: ag.xN, children: (0, l.jsx)(lZ.U, { error: x }) }),
            (0, l.jsx)(l8.Ay, {
                type: aA,
                channel: t,
                placeholder: Y.intl.string(Y.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: d,
                className: r()(ag.gM, ag.Yy),
                innerClassName: r()(ag.SL, { [ag.cr]: null != x }),
                onFocus: h,
                onBlur: m,
                onChange: g,
                onSubmit: p,
                promptToUpload: al.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function aj(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, _.bG)([at.A], () => (null == n ? null : at.A.getMessage(t.id, n))),
        a = ae.hH.useSetting();
    return null != i
        ? (0, l.jsx)(l5.A, {
              className: ag.IL,
              message: i,
              channel: t,
              compact: a,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var av = n(305866),
    ay = n(707539),
    aS = n(702513),
    aT = n(614879);
function aN(e) {
    let { channel: t } = e,
        [n, i] = a.useState(!1),
        s = a.useRef(null),
        r = (0, e6.ni)(t),
        o = a.useCallback(() => {
            i(!1);
        }, []),
        d = a.useCallback(() => {
            n || (0, ay.D3)("Popout"), i(!n);
        }, [n]);
    return (0, l.jsx)(nC.Y, {
        targetElementRef: s,
        animation: nC.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: o,
        renderPopout: function () {
            return (0, l.jsx)(av.l, {
                children: (0, l.jsx)(aS.A, { className: aT.T, channel: t, onClose: o, context: "popout" }),
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(nx.In, {
                ...e,
                ref: s,
                className: aT.Kk,
                onClick: d,
                icon: lz.y,
                "aria-label": Y.intl.string(Y.t.B2panI),
                tooltip: n ? null : Y.intl.string(Y.t.B2panI),
                disabled: r,
                selected: n,
            });
        },
    });
}
var aR = n(40389);
function aO(e) {
    let { channel: t } = e,
        [n, i] = a.useState(!1),
        s = a.useRef(null);
    function r() {
        i((e) => !e);
    }
    let o = Y.intl.string(Y.t["UKOtz+"]);
    return (0, l.jsx)(nC.Y, {
        targetElementRef: s,
        shouldShow: n,
        animation: nC.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(aL, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(nx.Ay.Icon, {
                ...e,
                ref: s,
                onClick: r,
                tooltip: n ? null : o,
                icon: t$.j,
                "aria-label": o,
                selected: n,
            });
        },
    });
}
function aL(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        a = (0, nT.A)(t),
        s = (0, nL.A)(t),
        r = (0, nw.A)(t.id),
        o = (0, nP.A)(t),
        d = (0, nF.A)({ id: t.id, label: Y.intl.string(Y.t.DQ797g) }),
        c = (0, nN.A)(t),
        h = (0, nR.A)(t),
        m = (0, nO.A)(t, "Toolbar Overflow"),
        g = (0, nM.A)(t),
        p = (0, aR.A)(t),
        A = (0, nG.A)(t),
        x = (0, nD.A)(t),
        f = ae.SY.useSetting(),
        b = (0, _.bG)([i7.A], () => !u().isEmpty(i7.A.getVoiceStatesForChannel(t.id)));
    return (0, l.jsxs)(nE.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": Y.intl.string(Y.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nj.rX, { children: [m, p] }),
            (0, l.jsxs)(nj.rX, {
                children: [
                    o,
                    g,
                    r,
                    f && !b
                        ? (0, l.jsx)(nj.Dr, {
                              id: "open",
                              label: Y.intl.string(Y.t.bX7EaG),
                              action: function () {
                                  (0, n2.JA)(t);
                              },
                          })
                        : null,
                    x,
                ],
            }),
            (0, l.jsxs)(nj.rX, { children: [A, a, s, h] }),
            (0, l.jsxs)(nj.rX, { children: [c, d] }),
        ],
    });
}
var aM = n(332456),
    aD = n(973854),
    aP = n(248537);
function aw(e) {
    var t;
    let i,
        { channelId: s, baseChannelId: r, channelViewSource: o = "Split View" } = e,
        d = (0, _.bG)([ek.A], () => ek.A.getChannel(s)),
        c = (0, _.bG)([t8.A], () => t8.A.getGuild(d?.getGuildId())),
        h = (0, np.Ay)(d);
    (t = d),
        (i = (0, _.bG)([i7.A], () => null != t && !u().isEmpty(i7.A.getVoiceStatesForChannel(t.id)))),
        a.useEffect(() => {
            i &&
                null != t &&
                (tP.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, nB.N9)(t, { source: n4.H9.VOICE_AUTO_OPEN }));
        }, [i, t]);
    let m = a.useRef(!1);
    if (
        (a.useEffect(() => {
            if (null == d || m.current) return;
            m.current = !0;
            let e = (0, aM.C)(ek.A.getChannel(d.id), !0);
            (0, eR.zV)(er.HAw.CHANNEL_OPENED, { ...e, ...(0, eR.qL)(d.id), channel_view: o }),
                (0, aD.A)({ channelId: d.id });
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    let g = (0, l.jsx)(n5, { channel: d, baseChannelId: r });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA.A, { channel: d, draftType: n7.C.ChannelMessage }),
            (0, l.jsx)(nx.Ay, {
                toolbar: g,
                "aria-label": Y.intl.string(Y.t.Pwe8tN),
                children: (0, nf.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, b.L3)(e, async () => {
                            let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                            return (t) => (0, l.jsx)(e, { ...t, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, nB.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: aP.T,
                children: (0, l.jsx)(nA.A, { channel: d, guild: c, chatInputType: ti.oU.SIDEBAR }, s),
            }),
        ],
    });
}
var ak = n(210714),
    aU = n(975732),
    aG = n(707554),
    aF = n(140735),
    aH = n(562153),
    aB = n(215530),
    aV = n(454719),
    aW = n(736653),
    aY = n(311016),
    az = n(480335),
    aq = n(713517),
    aK = n(183555),
    a$ = n(718019),
    aQ = n(694720),
    aX = n(915614),
    aZ = n(308244),
    aJ = n(743987),
    a0 = n(900179),
    a1 = n(946356),
    a4 = n(878555),
    a8 = n(35241),
    a2 = n(587168),
    a9 = n(744808);
let a3 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var a5 = n(416497);
function a7(e) {
    let { context: t, analyticsLocations: n, profileFrame: i, handleOpenProfile: a } = e,
        { showButton: s } = a3.useConfig({ location: "UserProfileSidebarFooter" }),
        r = s
            ? (0, l.jsx)("div", {
                  className: a5.qr,
                  children: (0, l.jsx)(ts.D, {
                      onClick: () => {
                          a(), (0, lf.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...t });
                      },
                      className: a5.wC,
                      children: (0, l.jsx)(j.E, {
                          color: "text-strong",
                          variant: "text-sm/normal",
                          children: Y.intl.string(Y.t["+Xp3hq"]),
                      }),
                  }),
              })
            : null;
    return null != i
        ? (0, l.jsxs)("div", { className: a5.xQ, children: [(0, l.jsx)(a9.A, { frame: i, layout: "SIDEBAR" }), r] })
        : r;
}
var a6 = n(996988),
    se = n(556818),
    st = n(523802);
function sn(e) {
    let { user: t, channel: n } = e,
        i = __OVERLAY__ || !(0, aY.A)(t.id),
        s = (0, lb.Ay)(t.id),
        r = (0, aW.Ay)(),
        o = a.useRef(Date.now()),
        { analyticsLocations: d } = (0, M.Ay)(L.A.USER_PROFILE_SIDEBAR),
        c = (0, aK.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        u = a.useRef(null),
        { isHoveringOrFocusing: h, isHovering: _ } = (0, aq.A)(u),
        m = () => {
            (0, aU.openUserProfileModal)({ sourceAnalyticsLocations: d, hideRestrictedProfile: !0, ...c });
        };
    return (0, l.jsx)(M.f5, {
        value: d,
        children: (0, l.jsx)(aK.of, {
            value: c,
            openedAt: o.current,
            fetchStartedAt: s?.fetchStartedAt,
            fetchEndedAt: s?.fetchEndedAt,
            isLoaded: s?.isLoaded,
            children: (0, l.jsxs)(a1.A, {
                ref: u,
                user: t,
                displayProfile: s,
                themeType: a6.d.SIDEBAR,
                themeOverride: r,
                children: [
                    (0, l.jsxs)(no.d_, {
                        children: [
                            (0, l.jsx)(a2.A, { children: (0, l.jsx)(a8.A, { user: t }) }),
                            (0, l.jsxs)("div", {
                                className: se.wx,
                                children: [
                                    (0, l.jsx)(aX.A, {
                                        user: t,
                                        displayProfile: s,
                                        themeType: a6.d.SIDEBAR,
                                        animateOnHoverOrFocusOnly: !h,
                                    }),
                                    (0, l.jsx)(a$.A, {
                                        user: t,
                                        displayProfile: s,
                                        channelId: n.id,
                                        themeType: a6.d.SIDEBAR,
                                        onOpenProfile: i ? void 0 : m,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: st.rf,
                                children: [
                                    (0, l.jsx)(a4.Ay, {
                                        user: t,
                                        guildId: n.guild_id,
                                        displayName: aH.Ay.getName(null, n.id, t),
                                        onClickName: i ? void 0 : m,
                                        pronouns: s?.pronouns,
                                        trailing: (0, l.jsx)(aQ.A, { displayProfile: s, themeType: a6.d.SIDEBAR }),
                                    }),
                                    (0, l.jsxs)(a1.A.Overlay, {
                                        className: st.Lw,
                                        children: [
                                            (0, l.jsx)(a0.A, {
                                                heading: Y.intl.string(Y.t.ZzAR2Y),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(aZ.A, {
                                                    userBio: s?.bio,
                                                    userId: t.id,
                                                    animateOnHoverOrFocusOnly: !0,
                                                    isHoveringOrFocusing: h,
                                                }),
                                            }),
                                            (0, l.jsx)(a0.A, {
                                                heading: Y.intl.string(Y.t["A//N4k"]),
                                                headingColor: "text-strong",
                                                children: (0, l.jsx)(aJ.A, { userId: t.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !i && (0, l.jsx)(a7, { handleOpenProfile: m, analyticsLocations: d, context: c }),
                    s?.profileEffect != null && (0, l.jsx)(az.A, { skuId: s?.profileEffect?.skuId, isHovering: _ }),
                ],
            }),
        }),
    });
}
var si = n(331322),
    sl = n(249790),
    sa = n(254828),
    ss = n(783123),
    sr = n(735103);
function so(e) {
    let { user: t, channel: n, onHide: i } = e,
        s = (0, lb.Ay)(t.id),
        r = (0, aW.Ay)(),
        o = (0, _.bG)([i5.A], () => i5.A.isBlocked(t.id)),
        { analyticsLocations: d } = (0, M.Ay)(o ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        c = (0, aK.pb)({ layout: "SIDEBAR", userId: t.id, channelId: n.id }),
        u = a.useRef(null);
    return (0, l.jsx)(M.f5, {
        value: d,
        children: (0, l.jsx)(aK.of, {
            value: c,
            fetchStartedAt: s?.fetchStartedAt,
            fetchEndedAt: s?.fetchEndedAt,
            isLoaded: s?.isLoaded,
            children: (0, l.jsx)(a1.A, {
                ref: u,
                user: t,
                displayProfile: s,
                themeType: a6.d.SIDEBAR,
                themeOverride: r,
                children: (0, l.jsx)(no.d_, {
                    children: (0, l.jsxs)("div", {
                        className: sr.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: sr.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: sr.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: sr.N1,
                                        children: [
                                            (0, l.jsx)(sl.A, { user: t }),
                                            (0, l.jsx)(N.D, {
                                                variant: "heading-lg/bold",
                                                children: Y.intl.string(Y.t.b33pLD),
                                            }),
                                            (0, l.jsx)(j.E, {
                                                variant: "text-sm/medium",
                                                children: Y.intl.format(o ? Y.t["8F+WNz"] : Y.t["/cZp5s"], {
                                                    username: aH.Ay.getName(n.guild_id, n.id, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(si.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ss.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    i(),
                                                        (0, lf.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: d,
                                                            ...c,
                                                        });
                                                },
                                            }),
                                            (0, l.jsx)(sa.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    i(),
                                                        (0, lf.Wn)({
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
var sd = n(419354),
    sc = n(717421),
    su = n(361628),
    sh = n(673843),
    s_ = n(594832),
    sm = n(841595),
    sg = n(679492),
    sp = n(439053),
    sA = n(312381),
    sx = n(349419),
    sf = n(984545),
    sb = n(193738),
    sI = n(597770),
    sC = n(751188),
    sE = n(746174),
    sj = n(495544),
    sv = n(993401),
    sy = n(518477);
function sS(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, M.Ay)(),
        i = (0, _.bG)([sj.default], () => sj.default.getId() === t.id),
        a = (0, _.bG)([i5.A], () => i5.A.isBlockedOrIgnored(t.id) || i5.A.isSpam(t.id)),
        s = (0, sE.j)("UserProfileGiftingBannerButton"),
        { openGiftModal: r } = (0, sC.$)({
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
    return null == t || t.bot || i || a || !s
        ? null
        : (0, l.jsx)(sv.br, { icon: sI.o, tooltipText: Y.intl.string(Y.t.PEjaCx), action: sy.pt.GIFT, onClick: r });
}
var sT = n(700174),
    sN = n(983495),
    sR = n(695366),
    sO = n(661531),
    sL = n(922590),
    sM = n(821269),
    sD = n(93246),
    sP = n(351906),
    sw = n(383199),
    sk = n(559506),
    sU = n(361311),
    sG = n(886891),
    sF = n(501193),
    sH = n(383448),
    sB = n(646986),
    sV = n(243166);
function sW(e) {
    let { user: t, currentUser: n, displayProfile: i, channel: a, isHoveringOrFocusing: s, onOpenProfile: r } = e,
        { relationshipType: o, originApplicationId: d } = (0, _.cf)([i5.A], () => ({
            relationshipType: i5.A.getRelationshipType(t.id),
            originApplicationId: i5.A.getOriginApplicationId(t.id),
        })),
        c = (0, sL.fi)(t.id),
        u = (0, sM.q)({ userId: t.id }),
        h = (0, _.bG)([sP.A], () => sP.A.hidePersonalInformation),
        m = (0, _.bG)([sm.A], () => sm.A.getUserProfile(t.id)?.application);
    return (0, l.jsxs)("div", {
        className: st.rf,
        children: [
            (0, l.jsx)(sk.A, { userId: t.id }),
            (0, l.jsx)(a4.Ay, {
                user: t,
                guildId: a.guild_id,
                displayName: aH.Ay.getName(null, a.id, t),
                onClickName: r,
                displayNameTrailing: h ? null : (0, l.jsx)(sV.A, { userId: t.id, isVisible: s, onOpenProfile: r }),
                pronouns: i?.pronouns,
                trailing: (0, l.jsx)(aQ.A, { displayProfile: i, themeType: a6.d.SIDEBAR }),
            }),
            o === er.eA$.PENDING_INCOMING &&
                (0, l.jsx)(a1.A.Overlay, {
                    children: (0, l.jsx)(sG.A, { user: t, channelId: a.id, applicationId: d }),
                }),
            c.map((e) =>
                (0, l.jsx)(
                    a1.A.Overlay,
                    {
                        children: (0, l.jsx)(sG.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(sH.A, { user: t }),
            i?.private &&
                (0, l.jsx)(a1.A.Overlay, { children: (0, l.jsx)(sF.A, { username: aH.Ay.getName(null, a.id, t) }) }),
            t.isProvisional &&
                (0, l.jsx)(a1.A.Overlay, {
                    children: (0, l.jsx)(a0.A, {
                        heading: Y.intl.string(Y.t.Iyka0U),
                        headingIcon: (0, l.jsx)(sR.E, { size: "xxs", color: sO.A.colors.TEXT_STRONG }),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(sD.T, { userId: t.id }),
                    }),
                }),
            (0, l.jsx)(sB.A, { user: t, currentUser: n, onOpenUserProfileModal: r }),
            (0, l.jsxs)(a1.A.Overlay, {
                className: st.Lw,
                children: [
                    !h &&
                        i?.bio != null &&
                        i?.bio !== "" &&
                        (0, l.jsx)(a0.A, {
                            heading: Y.intl.string(Y.t.ZzAR2Y),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(aZ.A, {
                                userId: t.id,
                                userBio: i.bio,
                                isHoveringOrFocusing: s,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    m?.popularApplicationCommandIds != null &&
                        (0, l.jsx)(sw.A, {
                            applicationId: m.id,
                            commandIds: m.popularApplicationCommandIds,
                            channel: a,
                        }),
                    u.length > 0 &&
                        (0, l.jsx)(a0.A, {
                            heading: Y.intl.string(Y.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(sU.A, { applicationIds: u }),
                        }),
                    (0, l.jsx)(a0.A, {
                        heading: t.bot ? Y.intl.string(Y.t["A//N4k"]) : Y.intl.string(Y.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aJ.A, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}
var sY = n(114212),
    sz = n(913453),
    sq = n(229187),
    sK = n(21241),
    s$ = n(201934),
    sQ = n(51943),
    sX = n(847374),
    sZ = n(320448),
    sJ = n(680391);
function s0(e) {
    let { section: t, header: n, items: i, listClassName: s, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, aK.NJ)(),
        c = a.useId(),
        [u, h] = a.useState(!1),
        _ = u ? sX.a : sZ._;
    return (0, l.jsxs)("section", {
        className: sJ.uW,
        children: [
            (0, l.jsxs)(ts.D, {
                className: r()(sJ.wx, sJ.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    h(!u), u || (d({ action: "PRESS_SECTION", section: t }), o?.());
                },
                children: [
                    (0, l.jsxs)(N.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [n, " — ", i.length],
                    }),
                    (0, l.jsx)(_, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: r()(sJ.p_, s), children: i }),
        ],
    });
}
var s1 = n(54557);
function s4(e) {
    let { user: t, channelId: n } = e,
        { analyticsLocations: i } = (0, M.Ay)(),
        { context: a } = (0, aK.NJ)(),
        s = (0, nS.A)(),
        { mutualFriendsCount: r, mutualFriends: o, mutualGuilds: d } = (0, sz.A)(t),
        c = !t.bot && null != r && r > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(a1.A.Overlay, {
              className: s1.Lw,
              children: [
                  u &&
                      (0, l.jsx)(s0, {
                          section: "MUTUAL_GUILDS",
                          header: Y.intl.string(Y.t["4lTDZq"]),
                          listClassName: s1.p_,
                          items: d.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, l.jsx)(
                                  sQ.A,
                                  { user: t, guild: n, nick: i, onSelect: () => (0, t4.u)(n.id) },
                                  n.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(sK.A, { className: s1.yF }),
                  c &&
                      (0, l.jsx)(s0, {
                          section: "MUTUAL_FRIENDS",
                          header: Y.intl.string(Y.t["0mTJ3j"]),
                          listClassName: s1.p_,
                          onExpand: () => (0, sq.A)(t.id, s),
                          items:
                              null == o
                                  ? Array.from({ length: r }).map((e, t) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: s1.nC,
                                                children: [
                                                    (0, l.jsx)(sY.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(sY.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: t, user: s, status: r } = e;
                                        return (0, l.jsx)(
                                            s$.A,
                                            {
                                                user: s,
                                                status: r,
                                                channelId: n,
                                                onSelect: () => {
                                                    (0, aU.openUserProfileModal)({
                                                        ...a,
                                                        userId: s.id,
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
var s8 = n(123292),
    s2 = n(853735),
    s9 = n(932001),
    s3 = n(84511),
    s5 = n(332772),
    s7 = n(575593),
    s6 = n(587895),
    re = n(44120),
    rt = n(532794),
    rn = n(317560),
    ri = n(99161),
    rl = n(661492),
    ra = n(212387),
    rs = n(662349),
    rr = n(369005);
function ro(e) {
    let { title: t, description: n, onClick: i } = e;
    return (0, l.jsxs)("div", {
        className: rr.S,
        children: [
            (0, l.jsx)(ts.D, {
                onClick: i,
                className: rr.H,
                children: (0, l.jsx)(j.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t,
                }),
            }),
            (0, l.jsx)(j.E, { variant: "text-xs/medium", color: "text-default", children: n }),
        ],
    });
}
var rd = n(479026),
    rc = n(699976),
    ru = n(788868),
    rh = n(80223),
    r_ = n(997990);
let rm = rc.Z.SIZE_90;
function rg(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: i,
            isSingleCard: s,
            style: o,
            skuPreviewStyle: d,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: _,
            singleCardInfo: m,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, aK.NJ)(),
        p = a.useCallback(() => {
            g({
                action: sy.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: i,
                productLines: new Set([t.productLine]),
            }),
                h();
        }, [t, i, h, g]),
        A = a.useCallback(() => {
            g({
                action: sy.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: i,
                productLines: new Set([t.productLine]),
            }),
                _();
        }, [_, t.id, i, t.productLine, g]),
        { label: x, icon: f, isPromptingPurchase: b } = (0, rs.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 }),
        [I, C] = a.useState(!1);
    return (0, l.jsxs)(si.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", {
                className: rh.kL,
                children: (0, l.jsx)(ra.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: u,
                    sku: t,
                    user: n,
                    spec: rm,
                    cardStyle: r()(rh.Nr, o),
                    skuPreviewStyle: r()(rh.ho, d),
                    skuAssetClassName: I ? c : void 0,
                    onClick: p,
                    "aria-label": Y.intl.formatToPlainString(Y.t.ZBB4Ty, { productName: (0, rl.TC)(t) }),
                    onHoverOrFocusChange: C,
                    children: (0, l.jsx)(rs.A, {
                        spec: rm,
                        onClick: b ? A : p,
                        isHoveringOrFocusing: I,
                        label: x,
                        icon: f,
                    }),
                }),
            }),
            s && (0, l.jsx)(ro, { title: m.title, description: m.description, onClick: p }),
        ],
    });
}
function rp(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...s } = e,
        r = (0, eC.bG)([s6.A], () => s6.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, M.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        d = a.useCallback(() => {
            (0, ri.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        c = a.useCallback(() => {
            (0, rn.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: o,
            });
        }, [t.id, t.applicationId, n, o]),
        u = a.useMemo(
            () => ({ title: t.name, description: Y.intl.format(Y.t["CqpEC+"], { applicationName: r?.name }) }),
            [t.name, r?.name],
        );
    return (0, l.jsx)(rg, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: c,
        onPurchaseClick: d,
        singleCardInfo: u,
        ...s,
    });
}
function rA(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...s } = e,
        o = a.useCallback(() => {
            (0, re.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, i]),
        d = (0, rd.e)({ sku: t, giftRecipient: n, giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = a.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case s7.R.PROFILE_EFFECT:
                case s7.R.NAMEPLATE:
                    return;
                case s7.R.AVATAR_DECORATION:
                    return r()(rh.ML, rh._P);
                default:
                    return r()(rh.ML, rh.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        u = a.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return Y.intl.string(Y.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case s7.R.AVATAR_DECORATION:
                            return Y.intl.string(Y.t["7v0T9P"]);
                        case s7.R.PROFILE_EFFECT:
                            return Y.intl.string(Y.t.wR5wOo);
                        case s7.R.NAMEPLATE:
                            return Y.intl.string(Y.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, l.jsx)(rg, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        singleCardInfo: u,
        ...s,
    });
}
function rx(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: i, ...s } = e,
        r = a.useCallback(() => {
            (0, rt.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: ru.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.id,
                analyticsLocations: i ?? [],
            });
        }, [t.id, n, i]),
        o = a.useMemo(() => ({ title: t.name, description: Y.intl.string(Y.t.Ipxkog) }), [t.name]);
    return (0, l.jsx)(rg, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: i,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: r_.MO,
        disableRiveHover: !0,
        singleCardInfo: o,
        ...s,
    });
}
function rf(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case er.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(rp, { sku: t, ...n });
        case er.EZt.COLLECTIBLES:
            return (0, l.jsx)(rA, { sku: t, ...n });
        case er.EZt.PREMIUM:
            return (0, l.jsx)(rx, { sku: t, ...n });
        default:
            return null;
    }
}
var rb = n(535089),
    rI = n(617348);
function rC(e) {
    let { unownedWishlistItems: t = [], profileOwner: n, onClick: i, wishlistId: s, title: r } = e,
        { analyticsLocations: o } = (0, M.Ay)(),
        { trackUserProfileWishlistAction: d } = (0, aK.NJ)(),
        c = (0, a.useId)();
    (0, s5.T)({ location: "user_profile_sidebar_wishlist_breadcrumb" });
    let u = (0, a.useCallback)(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && d({ wishlistId: t, action: n, productLines: i });
            },
            [d],
        ),
        h = (0, a.useMemo)(() => {
            let e = [];
            for (let n = 0; n < t.length && e.length < 3; n++) {
                let i = t[n];
                e.push(i);
            }
            return e;
        }, [t]),
        _ = (0, a.useMemo)(() => new Set(h.map((e) => e.skuProductLine)), [h]),
        g = (0, rb.A)({ wishlistId: s ?? null, onAction: u, productLines: _ }),
        p = (0, a.useMemo)(
            () =>
                h
                    .map((e, a) =>
                        null == e.sku
                            ? null
                            : (0, l.jsx)(
                                  rf,
                                  {
                                      sku: e.sku,
                                      index: a,
                                      wishlistOwner: n,
                                      wishlistId: s,
                                      analyticsLocations: o,
                                      onViewWishlist: i,
                                      isSingleCard: 1 === t.length,
                                  },
                                  e.skuId,
                              ),
                    )
                    .filter(lO.Vq),
            [o, i, n, t.length, h, s],
        ),
        [A, x] = (0, s9.RF)(
            m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
            (0, s2.c)(m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL),
            void 0,
            !0,
        ),
        f = A !== m.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL;
    return 0 === p.length
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": c,
              children: (0, l.jsxs)(a1.A.Overlay, {
                  ref: g,
                  className: rI.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: rI.wx,
                          children: [
                              (0, l.jsx)(N.D, {
                                  variant: "text-sm/medium",
                                  id: c,
                                  children: r ?? Y.intl.string(Y.t["7lZ31J"]),
                              }),
                              t.length > 3 &&
                                  (0, l.jsx)(s8.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: i,
                                      text: Y.intl.string(Y.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsxs)(aG.F, {
                          children: [
                              (0, l.jsx)("div", { className: rI.vY, children: p }),
                              !f &&
                                  _.has(er.EZt.SOCIAL_LAYER_GAME_ITEM) &&
                                  (0, l.jsx)(s3.A, {
                                      location: "user_profile_sidebar_wishlist_breadcrumb",
                                      className: rI.EK,
                                      onDismiss: () => x(le.i.USER_DISMISS),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
function rE(e) {
    let { user: t, currentUser: n, channel: i } = e,
        s = __OVERLAY__,
        r = (0, lb.Ay)(t.id),
        o = (0, su.A)(r?.profileFrame?.skuId, "UserProfileSidebar"),
        d = (0, aW.Ay)(),
        c = a.useRef(Date.now()),
        { analyticsLocations: u } = (0, M.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, aK.pb)({ layout: "SIDEBAR", userId: t.id, channelId: i.id }),
        m = a.useRef(null),
        { isHoveringOrFocusing: g, isHovering: p } = (0, aq.A)(m),
        A = (0, sg.fC)(),
        x = (0, sc.z)({ opacity: +(null != A.interactionType), config: { duration: 150 } }),
        f = (e) => {
            (0, aU.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h, ...e });
        },
        b = r?.widgets != null && r.widgets.length > 0,
        { defaultWishlistId: I } = (0, _.cf)([sm.A], () => ({ defaultWishlistId: sm.A.getFirstWishlistId(t.id) })),
        { wishlist: C } = (0, s_.fw)({ wishlistId: I, userId: t.id });
    (0, sh.A)(C);
    let E = a.useMemo(() => (null == C ? null : C.items.filter((e) => !e.isOwned)), [C]);
    return (0, l.jsx)(M.f5, {
        value: u,
        children: (0, l.jsx)(aK.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(sg.Hl, {
                value: A,
                children: (0, l.jsxs)(a1.A, {
                    ref: m,
                    user: t,
                    displayProfile: r,
                    themeType: a6.d.SIDEBAR,
                    themeOverride: d,
                    isPrivate: r?.private === !0,
                    children: [
                        r?.private === !0 && (0, l.jsx)(sA.A, {}),
                        null != A.interactionType && (0, l.jsx)(sd.animated.div, { style: x, className: se.tB }),
                        (0, l.jsxs)(no.d_, {
                            className: null != o ? se.It : void 0,
                            children: [
                                (0, l.jsxs)(a2.A, {
                                    children: [
                                        (0, l.jsx)(sb.A, { user: t, themeType: a6.d.SIDEBAR }),
                                        (0, l.jsx)(sS, { user: t }),
                                        t.bot ? (0, l.jsx)(sf.A, { user: t }) : (0, l.jsx)(sT.yo, { user: t }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: se.wx,
                                    children: [
                                        (0, l.jsx)(aX.A, {
                                            user: t,
                                            displayProfile: r,
                                            themeType: a6.d.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !g,
                                            className: se.vK,
                                        }),
                                        (0, l.jsx)(sp.A, { userId: t.id, className: se.oR }),
                                        (0, l.jsx)(a$.A, {
                                            user: t,
                                            displayProfile: r,
                                            channelId: i.id,
                                            themeType: a6.d.SIDEBAR,
                                            onOpenProfile: s ? void 0 : f,
                                        }),
                                        (0, l.jsx)(sN.A, {
                                            user: t,
                                            channelId: i.id,
                                            themeType: a6.d.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sW, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: r,
                                    channel: i,
                                    isHoveringOrFocusing: null == A.interactionType && g,
                                    onOpenProfile: s ? void 0 : f,
                                }),
                                b &&
                                    (0, l.jsx)("div", {
                                        className: se.sJ,
                                        children: (0, l.jsx)(sx.A, {
                                            user: t,
                                            widgets: r.widgets,
                                            onOpenUserProfileModal: f,
                                        }),
                                    }),
                                null != E &&
                                    E.length > 0 &&
                                    (0, l.jsx)("div", {
                                        className: se.vS,
                                        children: (0, l.jsx)(rC, {
                                            profileOwner: t,
                                            unownedWishlistItems: E,
                                            wishlistId: I,
                                            title: Y.intl.string(Y.t["7lZ31J"]),
                                            onClick: () => {
                                                f?.({ tabSection: sy.RP.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, l.jsx)(s4, { user: t, channelId: i.id }),
                            ],
                        }),
                        !s &&
                            (0, l.jsx)(a7, {
                                context: h,
                                analyticsLocations: u,
                                profileFrame: o,
                                handleOpenProfile: f,
                            }),
                        r?.profileEffect != null && (0, l.jsx)(az.A, { skuId: r?.profileEffect?.skuId, isHovering: p }),
                    ],
                }),
            }),
        }),
    });
}
function rj(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        i = (0, _.bG)([J.default], () => J.default.getUser(n)),
        s = (0, _.bG)([J.default], () => J.default.getCurrentUser()),
        r = lI(),
        [o, d] = (0, aB.A)(n);
    if (
        (a.useEffect(() => {
            (0, aV.A)(i ?? n, {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id,
            });
        }, [i, n, t.id]),
        null == i || null == s || !r)
    )
        return null;
    let c = `user-profile-sidebar-heading-${i.id}`,
        u = aH.Ay.getName(null, t.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": c,
        children: (0, l.jsx)(aG.F, {
            component: (0, l.jsx)(aF.A, {
                children: (0, l.jsx)(aG.H, { id: c, children: Y.intl.format(Y.t.KRe1Fk, { name: u }) }),
            }),
            children: o
                ? (0, l.jsx)(so, { user: i, currentUser: s, onHide: d, ...e })
                : i.isNonUserBot()
                  ? (0, l.jsx)(sn, { user: i, currentUser: s, ...e })
                  : (0, l.jsx)(rE, { user: i, currentUser: s, ...e }),
        }),
    });
}
var rv = n(522556),
    ry = n(225315),
    rS = n(684407),
    rT = n(95701),
    rN = n(919638),
    rR = n(763827),
    rO = n(140130),
    rL = n(458990),
    rM = n(462887),
    rD = n(276293),
    rP = n(96361),
    rw = n(745652);
let rk = () => {
    let e = (0, aW.Ay)();
    a.useEffect(() => {
        eR.Ay.trackWithMetadata(er.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, rM.M)(e) ? rw : "/assets/a51b44063e9d3bdb.svg";
    return (0, l.jsxs)("div", {
        className: rP.kL,
        children: [
            (0, l.jsxs)(iq.A, {
                toolbar: (0, l.jsx)(a.Fragment, {}),
                children: [
                    (0, l.jsx)(iq.A.Icon, { icon: rD.N, "aria-hidden": !0 }),
                    (0, l.jsx)(iq.A.Title, { children: Y.intl.string(Y.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: rP.Qs,
                children: [
                    (0, l.jsx)("img", { alt: "", className: rP.j0, src: t }),
                    (0, l.jsx)(N.D, {
                        className: rP.Zd,
                        variant: "heading-lg/medium",
                        children: Y.intl.string(Y.t.m9gRVN),
                    }),
                    (0, l.jsx)(j.E, {
                        className: rP.fh,
                        variant: "text-md/normal",
                        children: Y.intl.string(Y.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
var rU = n(943712),
    rG = n(402216),
    rF = n(746080),
    rH = n(806931),
    rB = n(165610),
    rV = n(516607),
    rW = n(964623);
let rY = () => (0, l.jsx)("div", { className: rW.wG, children: (0, l.jsx)(p.y, {}) }),
    rz = (0, tM.Fe)({
        createPromise: () => Promise.all([n.e("49681"), n.e("42516"), n.e("18771")]).then(n.bind(n, 189996)),
        webpackId: 189996,
        renderLoader: rY,
        name: "ForumChannel",
    }),
    rq = () =>
        Promise.all([
            n.e("74968"),
            n.e("40393"),
            n.e("33773"),
            n.e("88808"),
            n.e("86300"),
            n.e("84114"),
            n.e("16310"),
            n.e("26223"),
            n.e("1009"),
            n.e("92539"),
            n.e("92030"),
            n.e("64919"),
            n.e("93117"),
            n.e("85352"),
            n.e("14842"),
        ]).then(n.bind(n, 540462)),
    rK = (0, tM.Fe)({ createPromise: rq, webpackId: 540462, name: "ChannelCall", renderLoader: rY }),
    r$ = () =>
        Promise.all([
            n.e("40393"),
            n.e("33773"),
            n.e("88808"),
            n.e("84114"),
            n.e("16310"),
            n.e("1009"),
            n.e("92030"),
            n.e("64919"),
            n.e("28220"),
            n.e("90571"),
        ]).then(n.bind(n, 67319)),
    rQ = (0, tM.Fe)({ createPromise: r$, webpackId: 67319, name: "StageChannelCall", renderLoader: rY }),
    rX = (0, tM.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("49681"),
                n.e("38939"),
                n.e("46411"),
                n.e("62890"),
                n.e("20803"),
                n.e("12549"),
                n.e("62368"),
            ]).then(n.bind(n, 104731)),
        webpackId: 104731,
        name: "SearchResults",
        renderLoader: () => (0, l.jsx)(lF, {}),
    }),
    rZ = (0, tM.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("28136"), n.e("15373"), n.e("46411"), n.e("13848")]).then(n.bind(n, 538409)),
        webpackId: 538409,
        name: "GuildMemberModViewSidebar",
    });
class rJ extends a.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, ak.d)("guild_channel"), this.maybePreloadChannelCall();
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
        e === er.rbe.GUILD_VOICE ? rq() : e === er.rbe.GUILD_STAGE_VOICE && r$();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, nB.iN)(e.id);
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
            (0, aU.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [L.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, b.L3)(e, async () => {
                let { default: e } = await n.e("59545").then(n.bind(n, 22496));
                return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i });
            });
    }
    openThreadContextMenu(e, t) {
        d()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, b.L3)(e, async () => {
                let { default: e } = await n.e("6996").then(n.bind(n, 612826));
                return (n) => (0, l.jsx)(e, { ...n, channel: t });
            });
    }
    openDMContextMenu(e, t) {
        d()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = J.default.getUser(t.getRecipientId());
        d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, b.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("39778"), n.e("44031")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(rF.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(ir.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, l.jsx)(tl.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== rH.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ia.A,
                  { size: rG.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: t,
            isLurking: n,
            showCall: i,
            showActivityPanel: a,
            showFramePanel: s,
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
                    r.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    r.push((0, l.jsx)(ll.Ay, { channel: e, tooltip: Y.intl.string(Y.t.Xjlbvs) }, "invite")),
                    r.push((0, l.jsx)(lC, { channel: e, showCallOrActivityPanel: i || a || s }, "profile")),
                    r.push((0, l.jsx)(l_, { channel: e }, "safety_tools"));
                break;
            case er.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, l.jsx)(li, { channel: e }, "calls")),
                    r.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, l.jsx)(ll.Ay, { channel: e, tooltip: Y.intl.string(Y.t.AQAPts) }, "invite")),
                    r.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, l.jsx)(nQ, { channel: e })),
                    null == t || t.isForumLikeChannel() || r.push((0, l.jsx)(aN, { channel: t }, "browser")),
                    e.isVocalThread() && r.push((0, l.jsx)(lA, { channel: e }, "thread-call")),
                    r.push((0, l.jsx)(n8, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, l.jsx)(iT, { channelId: e.id }, "members")),
                    null != t && (0, ef.pk)(e) && r.push((0, l.jsx)(ik, { channel: e }, "summaries")),
                    r.push((0, l.jsx)(aO, { channel: e }, "threads-overflow"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
                r.push((0, l.jsx)(aN, { channel: e }, "browser")),
                    n || r.push((0, l.jsx)(iN.A, { channel: e }, "notifications")),
                    r.push((0, l.jsx)(iL, { channel: e }, "pins")),
                    (0, ta.f)("channel_header") && r.push((0, l.jsx)(iy, { channelId: e.id }, "conversations")),
                    r.push((0, l.jsx)(iT, { channelId: e.id }, "members")),
                    (0, ef.pk)(e) && r.push((0, l.jsx)(ik, { channel: e }, "summaries"));
                break;
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
                n ||
                    (r.push((0, l.jsx)(iz, { channel: e }, "forum-onboarding")),
                    r.push((0, l.jsx)(iN.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_DIRECTORY:
                r.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
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
                t.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.ANNOUNCEMENT_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
                break;
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.GUILD_DIRECTORY:
                t.push((0, l.jsx)(iT, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, l.jsx)("div", {
                  className: rW.u8,
                  children: (0, l.jsx)(A.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(Y.t["3aOv+h"]),
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
            guildId: a,
            showCall: s,
            showActivityPanel: o,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != t, "Should not be null if channel is not null.");
        let _ = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, nB.iN)(e.id) : void 0,
            m = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            g = o || c,
            p = s || g;
        return (0, l.jsxs)("div", {
            className: rW.SC,
            children: [
                (0, l.jsx)(x.N, {
                    theme: u && s ? er.NJ8.DARK : void 0,
                    children: (s) =>
                        (0, l.jsxs)(
                            iq.A,
                            {
                                guildId: a,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(rW.DD, s, { [rW.zh]: e.type === er.rbe.GROUP_DM }),
                                transparent: p,
                                hidden: c,
                                "aria-label": Y.intl.string(Y.t.BIYAqa),
                                children: [
                                    h && (0, l.jsx)(nf.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, nf.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: i,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: _,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: rW.u8,
                                              children: (0, l.jsx)(A.$, {
                                                  onClick: () => (0, tf.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: Y.intl.string(Y.t.k5WiPf),
                                              }),
                                          })
                                        : (0, nf.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(lk.A, { channelId: e.id }),
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
                    rK,
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
        return (0, l.jsx)(e3, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: t,
            needSubscriptionToAccess: n,
            channelIsContentGated: i,
            spoilerGatingChannelId: a,
            inCall: s,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), n))
            return (d()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(im, { guildId: t.id })
                : (0, l.jsx)(io.H, { guildId: t.id, children: (0, l.jsx)(iC, { channelId: e.id, guildId: t.id }) });
        if (i) return (0, l.jsx)(rv.A, { guild: t, channelId: e.id });
        if (null != a) return (0, l.jsx)(lW.A, { guild: t, channelId: a });
        if (e.isGuildVocal() || (s && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                d()(null != t, "directory channels must exist within a guild"), (0, l.jsx)(n_, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            d()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(rz, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (0, l.jsx)(nA.A, { channel: e, guild: t, chatInputType: ti.oU.NORMAL }, null != t ? t.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: i,
            section: a,
            showCall: s,
            showActivityPanel: r,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (a === er.YvQ.PROFILE && e.isPrivate() && !s && !r && !o)
            return (0, l.jsx)(rj, { channel: e }, `private-channel-profile-${e.id}`);
        else if (a === er.YvQ.MEMBERS)
            switch (e.type) {
                case er.rbe.GROUP_DM:
                    return (0, l.jsx)(lw, { channel: e }, `private-channel-recipients-${e.id}`);
                case er.rbe.GUILD_DIRECTORY:
                case er.rbe.GUILD_FORUM:
                case er.rbe.GUILD_MEDIA:
                case er.rbe.GUILD_ANNOUNCEMENT:
                case er.rbe.GUILD_TEXT:
                    let c = !0 === er.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(rL.A, { channel: e }, `channel-members-${c}`);
                case er.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, l.jsx)(rL.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case er.rbe.PUBLIC_THREAD:
                case er.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, l.jsx)(eg, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (a === er.YvQ.CONVERSATIONS)
            switch (e.type) {
                case er.rbe.GUILD_TEXT:
                case er.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(tL, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (a === er.YvQ.SEARCH) return (0, l.jsx)(rX, { guildId: n?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: i,
            showWelcomeModal: a,
            isLurking: s,
            isUnavailable: r,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                r ||
                i ||
                (o &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => is(ly.REAL_NAME_PROMPT, t), modalKey: "Guild Hub Real Name Modal" },
                    ),
                a &&
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("10585").then(n.bind(n, 954784));
                            return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, ry.ry)(t, s), modalKey: "Guild Welcome Screen Modal" },
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
                guildSidebarState: a,
                width: s,
                channelIsContentGated: r,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == a && null == i) return null;
        if (n === er.YvQ.SIDEBAR_CHAT && null != i) {
            if (r || null != o) return null;
            switch (i.type) {
                case lB.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(ax, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case lB.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? it : aw;
                    e = (0, l.jsx)(n, { channelId: i.channelId });
                    break;
                case lB.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(aw, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case lB.PE.VIEW_CHANNEL:
                case lB.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != a && null == e)
            if (a.type !== lB.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = a.details;
                return (0, l.jsx)("div", {
                    style: { width: er.da6 },
                    className: rW.uC,
                    children: (0, l.jsx)(rZ, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => lH.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && er.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = s - er.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(rO.A, {
                sidebarType:
                    t?.type != null && er.kvI.GUILD_THREADS_ONLY.has(t.type) ? rO.X.PostSidebar : rO.X.ThreadSidebar,
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
                layout: a,
                section: s,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            _ = this.shouldRenderCall();
        if (i) return (0, l.jsx)(rk, {});
        if (null == e) return (0, l.jsx)(rU.A, { channelId: this.props.channelId });
        let m = s === er.YvQ.SIDEBAR_CHAT,
            g = null != d && !m,
            p = !e.isForumLikeChannel() && !o,
            A = t?.name;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tD.HI, { location: A, subsection: n ?? void 0 }),
                (0, l.jsxs)("div", {
                    "data-has-border": e.type !== er.rbe.GUILD_VOICE,
                    className: r()(rW.TE, { [rW.js]: m || g, [rW.jl]: m && h }),
                    children: [
                        p
                            ? (0, l.jsx)(eA.A, {
                                  style: { right: m ? u : void 0 },
                                  className: rW.x4,
                                  channel: e,
                                  draftType: n7.C.ChannelMessage,
                              })
                            : null,
                        _ || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, l.jsxs)("div", {
                            className: r()(rW.Qs, { [rW.Oo]: a === er.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let r0 = (0, ex.A)(rJ),
    r1 = a.memo(function (e) {
        var t, n;
        let i,
            { providedChannel: s } = e,
            [r, o] = a.useState(null),
            d = (0, _.bG)([eU.A], () => eU.A.getChannelId()),
            c = (0, _.bG)([eU.A], () => eU.A.getVoiceChannelId()),
            p = (0, _.bG)([ek.A], () => s ?? ek.A.getChannel(d), [d, s]),
            A = (0, ng.DZ)(),
            x = (0, ng.e4)(p, "ConnectedChannel"),
            b = (0, _.bG)([ek.A], () => ek.A.getChannel(c), [c]),
            I = x?.parent_id,
            C = (0, _.bG)([ek.A], () => ek.A.getChannel(I), [I]),
            E = (0, _.bG)([t8.A], () => t8.A.getGuild(x?.guild_id), [x]),
            { needSubscriptionToAccess: j } = (0, id.A)(x?.id ?? void 0),
            v = (0, _.bG)([tt.A], () => {
                let e = null != d ? tt.A.getParticipants(d) : [],
                    t = null != d ? tt.A.getActivityParticipants(d) : [];
                return e.length - t.length > 0;
            }, [d]),
            y = (0, il.A)(),
            S = (0, _.bG)([eU.A], () => (y?.channelId ?? eU.A.getVoiceChannelId()) === x?.id),
            T = (0, _.bG)([eI.Ay], () => (null != x ? eI.Ay.getSelfEmbeddedActivityForChannel(x.id) : null), [x]),
            N = (0, _.bG)([rR.A], () => rR.A.isConnected()),
            R = (0, eb.A)(N),
            O = N && !1 === R;
        a.useEffect(() => {
            S &&
                O &&
                null != T &&
                null != x &&
                f.A.selectParticipant(
                    x.id,
                    (0, te.Qt)({ applicationId: T.applicationId, instanceId: T.compositeInstanceId }),
                );
        }, [O, x, S, T]);
        let L = (0, _.bG)([eI.Ay], () => eI.Ay.getCurrentEmbeddedActivity()),
            M = (0, _.bG)([eI.Ay], () => eI.Ay.getActivityPanelMode()),
            D = null != L && !(0, ey.A)(x?.id) && M === eJ.Gd.PANEL,
            P = (0, _.bG)(
                [i7.A],
                () => null != x && x.isVocalThread() && !u().isEmpty(i7.A.getVoiceStatesForChannel(x.id)),
                [x],
            ),
            w = null != x && x.isPrivate() && !D && v,
            k = x?.isGuildVocal() || w || P,
            U = (0, _.bG)([ii.A], () => ii.A.getFrameLayoutMode() === rB.y.FOCUSED),
            { welcomeModalChannelId: G } = (0, h.zy)(),
            F = (0, _.bG)([nJ.A], () => null != x && nJ.A.isLurking(x.guild_id), [x]),
            H = (0, _.bG)([rS.A], () => rS.A.hasSeen(x?.guild_id, F), [x, F]),
            B = (0, _.bG)(
                [tt.A, eI.Ay],
                () =>
                    null != eI.Ay.getConnectedActivityLocation() && eI.Ay.getActivityPanelMode() === eJ.Gd.PANEL
                        ? eI.Ay.getFocusedLayout() === eJ.E8.NO_CHAT
                            ? er.DUB.NO_CHAT
                            : er.DUB.NORMAL
                        : null != d
                          ? tt.A.getLayout(d)
                          : er.DUB.NORMAL,
                [d],
            ),
            V =
                ((t = E?.id),
                (i = (0, _.bG)([t8.A, lv, J.default, $.Ay], () => {
                    let e = t8.A.getGuild(t);
                    if (
                        e?.features.has(er.GuildFeatures.HUB) !== !0 ||
                        !0 === lv.hasViewedPrompt(ly.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let n = J.default.getCurrentUser();
                    if (null == n) return null;
                    let i = $.Ay.getMember(e.id, n?.id);
                    return i?.nick == null;
                })),
                a.useEffect(() => {
                    null != t && null != i && (i || is(ly.REAL_NAME_PROMPT, t));
                }, [i, t]),
                !0 === i),
            W =
                ((n = E?.id),
                (0, _.bG)([ek.A, t8.A, eU.A], () => {
                    let e = t8.A.getGuild(n);
                    if (
                        !(
                            e?.features.has(er.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(er.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(er.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let t = ek.A.getChannel(G);
                    return G === eU.A.getChannelId(n) && null != t && t.getGuildId() === e.id && (0, rT.ke)(t.type);
                })),
            { section: Y, channelSidebarState: z } = (0, _.cf)(
                [ij.Ay],
                () => ({ section: ij.Ay.getSection(d, x?.isDM()), channelSidebarState: ij.Ay.getSidebarState(d) }),
                [d, x],
            ),
            q = E?.id,
            K = (0, _.bG)([ij.Ay], () => ij.Ay.getGuildSidebarState(q), [q]),
            X = (0, lT.lI)(),
            Z = (0, np.Ay)(x),
            ee = (0, np.Ay)(x, !0),
            et = (0, _.bG)([tt.A], () => (null != x ? tt.A.getSelectedParticipant(x.id) : null)),
            ei = (0, e6.vL)(x),
            el = (0, lV.Uf)(x),
            ea = null != x && c === x.id,
            es = null != x && x.isGuildStageVoice();
        !(function (e) {
            let { onTransition: t } = e;
            a.useEffect(() => {
                async function e(e) {
                    let { location: n } = e,
                        i = (0, ev.H)(n);
                    if (null == i || !(0, ey.A)(i)) return;
                    eU.A.getVoiceChannelId() !== i && (await (0, e5.A)({ channelId: i }));
                    let l = ek.A.getChannel(i),
                        a = l?.guild_id;
                    setTimeout(() => {
                        (0, e7.A)(a, n), t?.();
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
            a.useEffect(() => {
                let e = (0, tf.JK)();
                if (e?.location?.state?.stageInviteKey === rV.J2) {
                    let { channelId: t } = (0, lS.vu)(e?.location?.pathname) ?? {};
                    null != t && o(t);
                }
            }, []);
        let eo = { channel: x, inCurrentVoiceChannel: ea },
            ed = a.useRef(eo);
        a.useEffect(() => {
            ed.current = eo;
        }),
            a.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ed.current;
                null != r && null != e && es && e.id === r && !t && ((0, lY.av)(e), o(null));
            }, [r, es]);
        let ec = (0, ef.cI)(x),
            eu = null != x && x.isPrivate(),
            eh = (0, eb.A)(eu),
            e_ = (0, eb.A)(x?.id);
        a.useEffect(() => {
            let e = eh && !eu,
                t = eh && eu && x?.id !== e_;
            (e || t) && (0, nm.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: le.i.AUTO });
        }, [x?.id, e_, eu, eh]);
        let em = (0, g.useHasAnyModalOpen)();
        return (0, l.jsx)(r0, {
            guildId: x?.guild_id,
            channelId: d,
            channel: x,
            channelName: Z,
            formattedChannelName: ee,
            parentChannel: C,
            voiceChannel: b,
            layout: B,
            needSubscriptionToAccess: j,
            isLurking: F,
            hasModalOpen: em,
            section: Y,
            channelSidebarState: z,
            guildSidebarState: K,
            guild: E,
            showCall: !j && k,
            showActivityPanel: D,
            showFramePanel: U,
            channelIsContentGated: ei,
            spoilerGatingChannelId: el,
            isMobile: (0, _.bG)([Q.A], () => x?.type === er.rbe.DM && Q.A.isMobileOnline(x.getRecipientId()), [x]),
            isUnavailable: (0, _.bG)([rN.A], () => x?.guild_id != null && rN.A.isUnavailable(x.guild_id), [x]),
            showRealNameModal: V,
            showWelcomeModal: !H && W,
            showFollowButton: (x?.type === er.rbe.GUILD_ANNOUNCEMENT && E?.features.has(er.GuildFeatures.NEWS)) || !1,
            ...(0, _.cf)([i7.A], () => ({ hasVideo: null != x && i7.A.hasVideo(x.id) }), [x]),
            inCall: ea,
            selectedParticipant: et,
            showChannelSummaries: ec,
            showHeaderGuildBreadcrumb: A || X,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: D,
            embeddedActivity: L,
        });
    });
