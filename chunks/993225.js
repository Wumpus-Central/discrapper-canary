"use strict";
n.d(t, { g: () => rv, A: () => rb }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    _ = n(451988),
    f = n(97808),
    h = n(778712),
    p = n(922016),
    E = n(939249),
    m = n(140735),
    g = n(312138),
    A = n(192308),
    I = n(442433),
    T = n(820284),
    S = n(717558),
    N = n(964486),
    y = n(220839),
    C = n(397244),
    v = n(394871),
    O = n(873174),
    R = n(866323),
    b = n(449450);
function D(e) {
    let { text: t } = e,
        n = (0, R.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(O.animated.div, { className: b.H, style: e, children: t })),
    });
}
var L = n(29160),
    w = n(793574),
    M = n(688810),
    P = n(521502),
    x = n(380610),
    U = n(313961),
    k = n(18235),
    G = n(183184),
    F = n(384059),
    V = n(480890),
    B = n(734066),
    H = n(710315),
    j = n(601255),
    Y = n(562819),
    W = n(449582),
    K = n(351952),
    z = n(88686),
    $ = n(174755),
    q = n(302223),
    Z = n(609425),
    X = n(922301),
    Q = n(368919),
    J = n(643501),
    ee = n(534514),
    et = n(834730),
    en = n(789645),
    ei = n(826673),
    er = n(750506),
    es = n(780964),
    ea = n(766075),
    eo = n(417146),
    el = n(552122),
    eu = n(717421),
    ec = n(775602),
    ed = n(993843);
let e_ = { mass: 10, tension: 550, friction: 140 };
function ef(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        [o, u] = r.useState({ x: 0, y: 0 }),
        d = r.useMemo(
            () =>
                l().throttle((e) => {
                    s || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    r.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [_, f] = (0, eu.z)(() => ({ x: 0, y: 0, config: e_ }));
    return (
        r.useEffect(() => {
            f({ x: o.x, y: o.y });
        }, [o.x, o.y, f]),
        (0, i.jsx)(O.animated.div, {
            style: { transform: (0, O.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ed.T, t),
        })
    );
}
var eh = n(49999),
    ep = n(375708),
    eE = n(275883);
function em(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        s = el.A.useIsEligible(),
        a = (0, ei.JZ)(t),
        o = null != n,
        l = null != r ? { color: r } : void 0,
        { analyticsLocations: u } = (0, M.Ay)(w.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, ei.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, ea.openUserSettings)(es.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(eh.i.TAKE_ACTION);
        };
    return s && !a
        ? (0, i.jsx)(er.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eE.iE,
                  style: { backgroundColor: o ? n : void 0 },
                  children: [
                      !o &&
                          (0, i.jsxs)("div", {
                              className: eE.o5,
                              children: [
                                  (0, i.jsx)(ef, { className: eE.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eE.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eE.c8 }),
                      (0, i.jsxs)("div", {
                          className: eE.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(ee.D, {
                                          variant: "heading-md/bold",
                                          color: null != l ? void 0 : "always-white",
                                          style: l,
                                          children: ep.intl.string(ep.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(et.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ep.intl.format(ep.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      E.D,
                                                      {
                                                          tag: "span",
                                                          className: eE.nf,
                                                          style: l,
                                                          onClick: d,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  className: eE.l2,
                                  onClick: () => c(eh.i.USER_DISMISS),
                                  children: (0, i.jsx)(en.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eg() {
    return null == eo.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(em, {
              dismissibleContent: eo.A.coachmarkDismissibleContent,
              backgroundColor: eo.A.coachmarkBackgroundColor,
              specialTextColor: eo.A.coachmarkSpecialTextColor,
          });
}
var eA = n(74848),
    eI = n(832248),
    eT = n(607399),
    eS = n(707554),
    eN = n(224640),
    ey = n(305866),
    eC = n(364522),
    ev = n(22231),
    eO = n(133171),
    eR = n(780338),
    eb = n(980707),
    eD = n(26137),
    eL = n(473935),
    ew = n(765671),
    eM = n(457965),
    eP = n(176781),
    ex = n(777666),
    eU = n(320448),
    ek = n(993401),
    eG = n(447349);
function eF(e) {
    return (0, i.jsx)("div", {
        className: eG.wE,
        children: (0, i.jsx)(eb.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eV(e) {
    let {
            action: t,
            onClick: n,
            icon: s,
            label: a,
            sublabel: o,
            trailing: l,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: _,
        } = e,
        f = null != n,
        h = (0, ek.rE)({ action: t, onClick: n }),
        [m, g] = r.useState(!1),
        I = r.useRef(null),
        T = c ?? I,
        S = null != u,
        N = S && f,
        y = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        C = r.useCallback(() => {
            g(!0);
        }, []),
        v = r.useCallback(() => {
            (0, A.hasAnyModalOpen)() || g(!1);
        }, []),
        O = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: eG.iA,
                        children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: eG.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(et.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eG.W1,
                                        children: a,
                                    }),
                                    (0, i.jsx)(et.E, { color: "currentColor", variant: "text-xs/medium", children: o }),
                                ],
                            }),
                            l,
                        ],
                    }),
                ],
            }),
        R = (e) => {
            let t;
            return (
                (t = N
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(E.D, {
                                  className: eG.ef,
                                  onClick: h,
                                  focusProps: { offset: { ...y.offset, right: 0 } },
                                  children: O(),
                              }),
                              (0, i.jsx)(E.D, {
                                  className: eG.ap,
                                  "aria-label": ep.intl.string(ep.t.PdRCRg),
                                  ...e,
                                  onClick: C,
                                  focusProps: y,
                                  children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : S
                      ? (0, i.jsxs)(E.D, {
                            className: eG.ef,
                            ...e,
                            onClick: C,
                            focusProps: y,
                            children: [
                                O(),
                                (0, i.jsx)("div", {
                                    className: eG.ap,
                                    children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(E.D, { className: eG.ef, onClick: h, focusProps: y, children: O() })),
                (0, i.jsx)("div", { ref: T, className: eG.jG, children: t })
            );
        };
    return S
        ? (0, i.jsx)("li", {
              className: eG.j$,
              onMouseEnter: C,
              onMouseLeave: v,
              children: (0, i.jsx)(p.Y, {
                  targetElementRef: d ?? T,
                  align: _,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: m,
                  onRequestClose: v,
                  children: R,
              }),
          })
        : (0, i.jsx)("li", { className: eG.j$, children: R() });
}
function eB(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eH = n(274372),
    ej = n(271597),
    eY = n(990078),
    eW = n(315710),
    eK = n(475358),
    ez = n(408278),
    e$ = n(625903),
    eq = n(404778),
    eZ = n(689175),
    eX = n(821609),
    eQ = n(532624),
    eJ = n(927813),
    e0 = n(879631),
    e1 = n(350535),
    e2 = n(372684),
    e3 = n(572164),
    e6 = n(953932),
    e4 = n(280483),
    e5 = n(890856),
    e7 = n(713517),
    e8 = n(609174),
    e9 = n(241326);
let te = (e) => {
        let { onBeforeDelete: t, onAfterDelete: s, variant: a = "overlay-secondary" } = e,
            o = (0, e8.Y_)(),
            l = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        ((e) => {
                            let { clips: t, onBeforeDelete: r, onAfterDelete: s } = e;
                            (0, A.openModalLazy)(
                                async () => {
                                    let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                                    return (n) =>
                                        (0, i.jsx)(e, {
                                            clips: t,
                                            ...n,
                                            onBeforeDelete: r,
                                            onAfterDelete: async () => {
                                                await n.onClose(), s?.();
                                            },
                                        });
                                },
                                { stackingBehavior: "stack" },
                            );
                        })({ clips: [o], onAfterDelete: s, onBeforeDelete: t });
                },
                [o, s, t],
            );
        return (0, i.jsx)(eY.m, {
            text: ep.intl.string(ep.t.oyYWHE),
            position: "top",
            children: (0, i.jsx)(ez.K, {
                onClick: l,
                icon: e9.u,
                "aria-label": ep.intl.string(ep.t.oyYWHE),
                variant: a,
                size: "sm",
            }),
        });
    },
    tt = (e) => {
        let { onBeforeEdit: t, variant: n = "primary" } = e,
            s = (0, e8.Y_)(),
            a = r.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), t?.(), (0, ej.p)({ initialEditingClipId: s.id });
                },
                [s, t],
            );
        return (0, i.jsx)(eX.$, {
            onClick: a,
            icon: ev.R,
            variant: n,
            size: "sm",
            text: ep.intl.string(ep.t.bt75uw),
            fullWidth: !0,
        });
    };
var tn = n(27232),
    ti = n(505930),
    tr = n(607814),
    ts = n(16590);
let ta = () => {
    let e = (0, e8.Y_)(),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, tr.XK)(e);
            },
            [e],
        );
    return (0, i.jsx)(
        eY.m,
        {
            text: ep.intl.string(e.isFavorite ? ts.default.IZsalP : ts.default.ihBfyA),
            position: "top",
            children: (0, i.jsx)(ez.K, {
                onClick: t,
                icon: e.isFavorite ? tn.G : ti.y,
                "aria-label": ep.intl.string(ep.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
};
var to = n(405433),
    tl = n(602902);
let tu = (e) => {
    let { variant: t = "primary" } = e,
        n = (0, e8.Y_)(),
        { analyticsLocations: s } = (0, M.Ay)(),
        a = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, tl.K)([n], { analyticsLocations: s });
            },
            [n, s],
        );
    return (0, i.jsx)(eX.$, {
        onClick: a,
        icon: to.l,
        variant: t,
        size: "sm",
        text: ep.intl.string(ep.t.RDE0Sc),
        fullWidth: !0,
    });
};
var tc = n(226870),
    td = n(780479);
let t_ = (e) => {
    let { children: t, className: n, isVisible: r = !0 } = e;
    return (0, i.jsx)("div", { className: a()(td.n, { [td.z]: r }, n), children: t });
};
var tf = n(316305);
let th = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: o } = e,
        l = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, e7.A)(l),
        c = r.useCallback(() => {
            s?.(), (0, ej.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e8.Cl, {
        clip: t,
        children: (0, i.jsx)(e5.s, {
            ref: l,
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: c,
            className: a()(tf.Z1, o),
            children: (0, i.jsxs)(tc.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ex.Lp, { className: tf.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
                    (0, i.jsxs)(t_, {
                        isVisible: u,
                        className: tf.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tf.mY,
                                children: [(0, i.jsx)(ta, {}), (0, i.jsx)(te, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tf.E_,
                                children: [(0, i.jsx)(tt, { onBeforeEdit: s }), (0, i.jsx)(tu, {})],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tp = n(652215),
    tE = n(753070),
    tm = n(550350);
function tg(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e4.A)();
    let o = (0, c.yK)([eH.A], () => eH.A.getClips()),
        l = (0, c.bG)([eH.A], () => eH.A.getPendingClips()),
        u = (0, c.bG)([eH.A], () => eH.A.getSettings()),
        d = (0, c.bG)([eH.A], () => eH.A.getNewClipIds()),
        _ = (0, c.bG)([eQ.Ay], () => eQ.Ay.getKeybindForAction(tp.hCu.SAVE_CLIP)),
        f = r.useRef(null),
        h = r.useMemo(() => {
            let e = [...l, ...o].filter((e) => e.type === e2.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, l]),
        p = r.useMemo(() => h.slice(0, 16), [h]),
        E = h.length > 16,
        m = null != _ ? e1.dI(_.shortcut, !0) : null;
    (0, eW.t)(f);
    let g = (0, e0.$)(u.clipsLength / eJ.A.Millis.SECOND),
        A = (0, tE.zr)(u.clipsQuality.resolution),
        I = ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (f.current = e), a?.(e);
        },
        className: tm.SW,
        role: "dialog",
        "aria-label": ep.intl.string(ep.t.z2jK6X),
        children: [
            (0, i.jsxs)("div", {
                className: tm.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: tm.$,
                        children: [
                            (0, i.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.z2jK6X),
                            }),
                            null != m && (0, i.jsx)(eK.e, { className: tm.P, shortcut: m }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.$s,
                        children: [
                            (0, i.jsx)(eY.m, {
                                text: ep.intl.string(ep.t["3D5yo/"]),
                                children: (0, i.jsx)(ez.K, {
                                    onClick: () => n(),
                                    icon: e$.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                }),
                            }),
                            (0, i.jsx)(eY.m, {
                                text: ep.intl.string(ts.default["55C2MH"]),
                                children: (0, i.jsx)(ez.K, {
                                    onClick: () => t(),
                                    icon: eP.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ts.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tm.P6,
                children: [g, A, I].join(" \u2022 "),
            }),
            (0, i.jsx)(eq.c, {}),
            p.length > 0
                ? (0, i.jsxs)(eZ.Ch, {
                      className: tm.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          p.map((e) => (0, i.jsx)(th, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                          E &&
                              (0, i.jsx)("div", {
                                  className: tm.qr,
                                  children: (0, i.jsx)(eX.$, {
                                      onClick: () => t(),
                                      text: ep.intl.string(ts.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)(tA, { keybindString: m }),
        ],
    });
}
function tA(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, i.jsxs)("div", {
        className: tm.p$,
        children: [
            (0, i.jsx)(et.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tm.qO,
                children: ep.intl.string(ts.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(et.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tm.CZ,
                      children: ep.intl.format(ts.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  et.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eK.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e6.A, {}),
        ],
    });
}
function tI(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, B.sw)(),
        { userStatusMenu: a } = H.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        o = (0, c.bG)([eH.A], () => eH.A.getNewClipIds().length),
        l = r.useCallback(
            (e) => {
                t(), (0, ej.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        u = r.useCallback(() => {
            t(), (0, ea.openUserSettings)(es.X.CLIPS_PANEL);
        }, [t]);
    return s && a
        ? (0, i.jsx)(eV, {
              action: "PRESS_CLIPS",
              icon: eP.x,
              label: ep.intl.string(ep.t.z2jK6X),
              trailing: o > 0 ? (0, i.jsx)(ex.hV, { count: o }) : null,
              onClick: () => l(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tg, { ...e, onOpenGallery: l, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tT = n(480335),
    tS = n(31956),
    tN = n(361628),
    ty = n(744808),
    tC = n(282389),
    tv = n(645507),
    tO = n(970931),
    tR = n(462887),
    tb = n(736653),
    tD = n(439174),
    tL = n(428262),
    tw = n(878784),
    tM = n(788868);
function tP() {
    let e = (0, tw.Xb)(),
        t = (0, tL.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tM.sp.length - 1; t >= 0; t--) {
        let i = tM.VD[tM.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tx = {
        [tM.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tM.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tM.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tM.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tM.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tM.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tM.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tM.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tU = {
        [tM.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tM.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tM.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tM.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tM.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tM.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tM.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tM.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tk = n(682165);
let tG = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tF() {
    let e = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        t = (0, eI.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tP(),
                t = (0, tR.M)((0, tb.Ay)());
            if (null == e) return null;
            let n = tx[e],
                i = tU[e],
                r = {
                    currentBadge: (0, tD.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tM.sp.indexOf(e);
            if (s > 0) {
                let e = tM.sp[s - 1],
                    n = tx[e];
                (r.prevBadge = (0, tD.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [s, a] = r.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tV, { levelUpData: s });
}
function tV(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
            eI.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(eW.O, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tk.i,
            children: [
                (0, i.jsx)("div", {
                    className: tk.b,
                    children: (0, i.jsx)(eY.m, {
                        text: ep.intl.string(ep.t.cpT0Cq),
                        children: (0, i.jsx)(ez.K, {
                            icon: en.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": ep.intl.string(ep.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tG, { levelUpData: t }) }),
            ],
        }),
    });
}
var tB = n(206835),
    tH = n(183555),
    tj = n(999291),
    tY = n(975732),
    tW = n(718019),
    tK = n(694720),
    tz = n(915614),
    t$ = n(744753),
    tq = n(559506),
    tZ = n(646986),
    tX = n(349419),
    tQ = n(946356),
    tJ = n(878555),
    t0 = n(624479),
    t1 = n(206845),
    t2 = n(957565),
    t3 = n(427262),
    t6 = n(962352);
function t4(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tH.NJ)();
    return t2.p5
        ? (0, i.jsx)(t1.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t3.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      className: a()(t6.c, { [t6.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(t0.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t5 = n(983495),
    t7 = n(442228),
    t8 = n(885386),
    t9 = n(290863),
    ne = n(351906),
    nt = n(562153),
    nn = n(661531),
    ni = n(477782),
    nr = n(628284),
    ns = n(695366),
    na = n(363195),
    no = n(889227),
    nl = n(287809),
    nu = n(174459),
    nc = n(429707),
    nd = n(274303),
    n_ = n(994125),
    nf = n(347853),
    nh = n(335020),
    np = n(43105),
    nE = n(704824),
    nm = n(46225),
    ng = n(429913),
    nA = n(379848),
    nI = n(633075),
    nT = n(735321),
    nS = n(667049),
    nN = n(606758),
    ny = n(495544),
    nC = n(403362),
    nv = n(518477);
function nO(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        { trackUserProfileEditAction: o } = (0, tH.NJ)(),
        l = (0, c.bG)([ny.default], () => ny.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([ny.default], () => ny.default.getId()),
                i = (0, nS.A)(n),
                s = r.useMemo(() => i.filter((e) => e instanceof nI.R), [i]),
                a =
                    ((e = (0, eM.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    r.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                o = r.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                l = ((t = (0, ng.A)(o)), r.useMemo(() => t.filter(nC.Vq), [t])),
                { tokens: u, fetched: d } = (0, nE.j)(o),
                _ = (0, nm.U9)(l);
            return r.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = u.find((e) => e.application.id === n.applicationId),
                        r = s.find((e) => e.applicationId === n.applicationId),
                        a = l.find((e) => e.id === n.applicationId),
                        o = _.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != i && null == r
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == i &&
                          o?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: o.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [a, u, d, s, l, _]);
        })(),
        { analyticsLocations: d } = (0, M.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, i.jsx)(nA.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: c } = e,
                      _ = u.find((e) => e.dismissibleContent === r);
                  if (null == _) return null;
                  let f = "linked" === _.type,
                      h = () =>
                          (0, tY.openUserProfileModal)({ userId: l, tabSection: nv.RP.WIDGETS }).then(() => {
                              c(eh.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(np.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != _.config.editProfileUpsellImage
                              ? { type: "image", src: _.config.editProfileUpsellImage }
                              : void 0,
                      title: ep.intl.format(ep.t.TXDztH, { applicationName: _.application.name }),
                      body: f ? ep.intl.string(ep.t["63Kso0"]) : ep.intl.string(ep.t.HwXoeC),
                      onRequestClose: () => c(eh.i.USER_DISMISS),
                      actions: [
                          f
                              ? {
                                    text: ep.intl.string(ep.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            h()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new nI.R({ applicationId: _.application.id })),
                                                        void ((0, nT.Y5)(e),
                                                        o({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, nN.XA)(nv.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: s,
                                }
                              : {
                                    text: ep.intl.string(ep.t["DSJi3+"]),
                                    onClick: () => {
                                        _.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), h().finally(() => a(!1));
                                            },
                                            analyticsLocations: d,
                                        });
                                    },
                                    loading: s,
                                },
                      ],
                  });
              },
          });
}
var nR = n(461213),
    nb = n(818348),
    nD = n(466573);
function nL() {
    let e = (0, c.bG)([nR.A], () => nR.A.getStatus()),
        t = (0, t3.MU)(e) ?? "",
        n = e === nb.cl.INVISIBLE || e === nb.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nD.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eY.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(ns.E, {
                        size: "xs",
                        color: nn.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nw = n(841595);
let nM = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nP = n(501838),
    nx = n(760716),
    nU = n(915089),
    nk = n(13808);
function nG(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nU.GV)(),
        _ = r.useRef(null),
        f = (0, eu.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: l },
            to: { transform: "translate3d(0, 0, 0)", height: l },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(O.animated.div, {
        className: a()(nk.kL, u),
        style: f,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nk.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nk.U1,
                    children: [
                        (0, i.jsx)(E.D, {
                            innerRef: _,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nk.b,
                            onClick: () => {
                                t(eh.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(en.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(ee.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eC.Ip, {
                    className: nk.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nk.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nF = n(973912),
    nV = n(871123),
    nB = n(44724),
    nH = n(501573);
function nj() {
    (0, nB.default)({ guildId: (0, nV.zf)() });
}
function nY(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, M.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nG, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: r,
              className: nH.Zj,
              contentClassName: nH.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nF.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nH.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nH.UD,
                      children: (0, i.jsx)(eX.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nj,
                      }),
                  }),
              ],
          });
}
function nW(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nM.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                s = (0, c.bG)([nw.A], () => (null != i ? nw.A.getFirstWishlistId(i.id) : null)),
                a = (0, nx.i)((e) => e.recommendationApplicationIds),
                l = (0, nP.rY)(),
                u = (0, nP.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nA.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nY, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nK = n(146901),
    nz = n(827827);
let n$ = [
        { duration: 15 * eJ.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: eJ.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * eJ.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: eJ.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * eJ.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    nq = "forever";
function nZ(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== tp.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: n$.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    ni.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
                        action: () => (0, nz.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? nq,
                );
            }),
        });
    return (0, i.jsx)(ni.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, t3.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eO.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nz.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nX(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nK._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var nQ = n(996988),
    nJ = n(656884);
function n0(e) {
    let t,
        n,
        s,
        o,
        l,
        u,
        d,
        _,
        p,
        { currentUser: E, onClose: g, setPopoutRef: I, highlightBadge: T, openedAt: S, className: N } = e,
        y = __OVERLAY__,
        C = (0, tj.Ay)(E.id, void 0),
        { analyticsLocations: v } = (0, M.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        O = (0, tH.pb)({ layout: "ACCOUNT_POPOUT", userId: E.id, guildId: void 0 }),
        { ref: R, height: b } = (0, ew.Ay)(),
        { isHoveringOrFocusing: D, isHovering: L } = (0, e7.A)(R);
    r.useEffect(() => {
        I?.(R.current);
    }, [R, I]),
        r.useEffect(
            () => (eI.A.setState({ isOpen: !0 }), () => eI.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let P = (0, c.bG)([t9.A], () => t9.A.getStatus(E.id)),
        x = nX(t8.CY.useSetting()),
        U = (0, c.bG)([ne.A], () => ne.A.hidePersonalInformation),
        k = (0, tO.kB)(),
        G = t8.Q_.useSetting(),
        F =
            ((t = t8.CY.useSetting()),
            (n = (0, tO.kB)()),
            (s = t8.Jr.useSetting()),
            (o = (e) => {
                let i = nX(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case tp.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case tp.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (l = (0, i.jsx)(i.Fragment, {
                children: n$.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        ni.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tO.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nq,
                    );
                }),
            })),
            (u = nZ({ status: tp.clD.ONLINE, currentStatus: P })),
            (d = nZ({ status: tp.clD.IDLE, currentStatus: P, description: o(tp.clD.IDLE) })),
            (_ = nZ({ status: tp.clD.DND, currentStatus: P, description: o(tp.clD.DND) })),
            (p = nZ({ status: tp.clD.INVISIBLE, currentStatus: P, description: o(tp.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(ni.bX, {}, "menu-separator-statuses"),
                    d,
                    _,
                    p,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(ni.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      ni.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ep.intl.string(ep.t.gJRnwK),
                                          iconLeft: eR.a,
                                          leadingAccessory: { type: "icon", icon: eR.a },
                                          badge: { text: ep.intl.string(ep.t.ApAu9f) },
                                          subtext:
                                              null != s && "0" !== s
                                                  ? ep.intl.format(ep.t.BWD8fs, {
                                                        endTime: new Date(Number(s)).toLocaleString(
                                                            ep.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ep.intl.string(ep.t["Br1q+x"]),
                                          action: () => {
                                              (0, tO.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: l,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            })),
        V = (function (e) {
            let t = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                n = (0, c.bG)([ne.A], () => ne.A.hidePersonalInformation),
                r = (0, c.bG)([na.A], () => (0, tR.M)(na.A.theme)),
                { multiAccountUsers: s } = (0, n_.K)(),
                a = s.map((s) => {
                    let a = new no.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === nd.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        ni.Dr,
                        {
                            id: a.id,
                            focusedClassName: nh.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nh.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nh.DD,
                                            children: [
                                                (0, i.jsx)(et.E, {
                                                    className: nh.gE,
                                                    variant: "text-sm/normal",
                                                    children: t3.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(et.E, {
                                                        className: nh.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        o &&
                                            (0, i.jsx)(nr.y, {
                                                size: "sm",
                                                color: t
                                                    ? nn.A.unsafe_rawColors.WHITE.css
                                                    : nn.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nn.A.unsafe_rawColors.BRAND_500.css
                                                        : nn.A.unsafe_rawColors.WHITE.css,
                                                className: nh.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(ns.E, {
                                                color: nn.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nn.A.unsafe_rawColors.BRAND_500.css
                                                        : nn.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nh.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, nf.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nu.default.track(tp.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tp.JJy.USER_PROFILE },
                                        }),
                                        nc.Mx(n));
                                }
                            },
                        },
                        a.id,
                    );
                });
            return (
                a.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ni.bX, {}),
                            (0, i.jsx)(ni.Dr, {
                                id: "manage-accounts",
                                label: ep.intl.string(ep.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nf.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(g),
        B = (0, tB.A)({ analyticsLocations: v }),
        H = (0, tL.TW)(E),
        j = r.useRef(null),
        Y = r.useRef(null),
        W = (0, tN.A)(C?.profileFrame?.skuId, "UserProfileAccountPopout"),
        K = (0, tC.A)(C?.profileFrame?.skuId);
    (0, tS.A)({ skuId: C?.profileFrame?.skuId, openedAt: S, context: O, analyticsLocations: v });
    let z = r.useRef((0, eI.A)((e) => e.shouldRenderTenureLevelUp)),
        $ = r.useMemo(() => (0, tv.A)(), []),
        [q, Z] = r.useState(() => eI.A.getState().shouldRenderTenureLevelUp);
    r.useEffect(() => {
        let e = setTimeout(() => {
            Z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let X = (e) => {
            g?.(), (0, tY.openUserProfileModal)({ customStatusPrompt: $, sourceAnalyticsLocations: v, ...O, ...e });
        },
        Q = C?.widgets != null && C.widgets.length > 0,
        J = r.useCallback(() => {
            g();
        }, [g]),
        ee = r.useCallback(() => {
            B(), J();
        }, [B, J]),
        en = (0, eM.QR)({ location: "UserProfileAccountPopout" }),
        ei = (0, eM.zd)({ location: "UserProfileAccountPopout" }),
        er = r.useId();
    return (0, i.jsx)(M.f5, {
        value: v,
        children: (0, i.jsx)(tH.of, {
            value: O,
            openedAt: S,
            fetchStartedAt: C?.fetchStartedAt,
            fetchEndedAt: C?.fetchEndedAt,
            isLoaded: C?.isLoaded,
            children: (0, i.jsxs)(ey.l, {
                ref: R,
                "aria-labelledby": er,
                className: a()(eG.jC, N),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(m.A, {
                        children: (0, i.jsx)(eS.H, { id: er, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eS.F, {
                        children: [
                            (0, i.jsx)(nW, { displayProfile: C, handleOpenUserProfileModal: X, height: b }),
                            (0, i.jsxs)(tQ.A, {
                                className: a()(eG.BK, K),
                                user: E,
                                displayProfile: C,
                                themeType: nQ.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nJ.wx,
                                        children: [
                                            (0, i.jsx)(tz.A, { user: E, displayProfile: C, themeType: nQ.d.POPOUT }),
                                            (0, i.jsx)(tW.A, {
                                                user: E,
                                                displayProfile: C,
                                                themeType: nQ.d.POPOUT,
                                                onOpenProfile: y ? void 0 : X,
                                            }),
                                            (0, i.jsx)(t5.A, {
                                                ref: j,
                                                user: E,
                                                themeType: nQ.d.POPOUT,
                                                onCloseProfile: g,
                                                prompt: $,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eC.Ip, {
                                        className: eG.rf,
                                        style: { pointerEvents: q ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tq.A, { userId: E.id }),
                                            (0, i.jsx)(tJ.Ay, {
                                                className: eG.eF,
                                                user: E,
                                                displayName: nt.Ay.getName(void 0, null, E),
                                                onClickName: y ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(t4, { user: E, isVisible: D }),
                                                pronouns: C?.pronouns,
                                                trailing: (0, i.jsx)(tK.A, {
                                                    displayProfile: C,
                                                    themeType: nQ.d.POPOUT,
                                                    onClose: g,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(t$.A, { isPremiumUser: H, onInteraction: g }),
                                            (0, i.jsx)(t7.A, {
                                                user: E,
                                                bio: C?.bio,
                                                hidePersonalInformation: U,
                                                onClose: g,
                                            }),
                                            Q &&
                                                (0, i.jsx)(tX.A, {
                                                    user: E,
                                                    widgets: C?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(tZ.A, {
                                                user: E,
                                                currentUser: E,
                                                onOpenUserProfileModal: X,
                                                onClose: g,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eG.T_,
                                                children: [
                                                    (0, i.jsx)(tQ.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eB, {
                                                            children: [
                                                                (0, i.jsx)(eV, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: ev.R,
                                                                    onClick: ee,
                                                                    ref: Y,
                                                                }),
                                                                (0, i.jsx)(eV, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nL, {}),
                                                                    sublabel: null != x && x,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eO.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (k || P === tp.clD.DND) &&
                                                                        (0, i.jsx)(eR.a, { size: "xxs" }),
                                                                    renderSubmenu: eT.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eF, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eG.hQ,
                                                                                  "aria-label": ep.intl.string(
                                                                                      ep.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eT.Fr
                                                                        ? () => {
                                                                              g(),
                                                                                  (0, A.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eN.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ep.intl.string(
                                                                                                                  ep.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eb.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ep.intl.string(
                                                                                                                      ep
                                                                                                                          .t
                                                                                                                          .E13trI,
                                                                                                                  ),
                                                                                                              hideScroller:
                                                                                                                  !0,
                                                                                                              onClose:
                                                                                                                  t,
                                                                                                              onSelect:
                                                                                                                  void 0,
                                                                                                              children:
                                                                                                                  F,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(tI, { onClose: g, popoutContainerRef: R }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tQ.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eB, {
                                                            children: [
                                                                (0, i.jsx)(eV, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eD.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        g(), (0, nf.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eF, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: V,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t2.p5 &&
                                                                    G &&
                                                                    (0, i.jsx)(eV, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eL.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t2.C)(E.id), g();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    C?.profileEffect != null &&
                                        !z.current &&
                                        (0, i.jsx)(tT.A, { skuId: C.profileEffect.skuId, isHovering: L }),
                                    null != W && (0, i.jsx)(ty.A, { frame: W }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(nO, { targetElementRef: Y, onClose: g }) : null,
                            (0, i.jsx)(tF, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n1 = n(371912),
    n2 = n(655116),
    n3 = n(21973),
    n6 = n(454719),
    n4 = n(342296),
    n5 = n(852712),
    n7 = n(167579),
    n8 = n(173660),
    n9 = n(761853),
    ie = n(763827),
    it = n(499156),
    ii = n(731854);
let ir = 2.5 * eJ.A.Millis.SECOND,
    is = +eJ.A.Millis.HOUR;
var ia = n(459838),
    io = n(485296);
let il = 3 * eJ.A.Millis.SECOND,
    iu = +eJ.A.Millis.DAY;
var ic = n(616356),
    id = n(734057),
    i_ = n(629016),
    ih = n(186111),
    ip = n(967198),
    iE = n(486020),
    im = n(625494),
    ig = n(536194),
    iA = n(19575),
    iI = n(994314),
    iT = n(485599),
    iS = n(537668),
    iN = n(626584),
    iy = n(531685),
    iC = n(259065),
    iv = n(864386);
let iO = new iN.A("DisplayNameStylesCoachmark");
function iR(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([iy.A], () => iy.A.isFocused()),
        u = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
                (0, ea.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iC.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            l && o.current?.paused ? o.current?.play().catch(iO.error) : l || o.current?.pause();
        }, [l]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(np.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: d,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: o,
                        src: "https://cdn.discordapp.com/assets/content/5d90dc1e412ad3aa0b39088fba382025e32b718d7bf5d797512be9701b5f53b4.webm",
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    title: ep.intl.string(iv.default["1AE464"]),
                    body: [ep.intl.string(iv.default.cNc1g9), ep.intl.string(ep.t["4JNXHG"])],
                    actions: [{ text: ep.intl.string(ep.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var ib = n(131607),
    iD = n(45780),
    iL = n(696451),
    iw = n(71393),
    iM = n(685073),
    iP = n(228366);
let ix = { lastSeenInfos: {} },
    iU = ix;
class ik extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iU = e ?? ix;
    }
    getState() {
        return iU;
    }
    getGuildLastSeenInfo(e) {
        return iU.lastSeenInfos[e] ?? null;
    }
}
let iG = new ik(iP.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iU.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iU = ix;
    },
});
var iF = n(116833),
    iV = n(514661);
let iB = new iN.A("GuildTagAvailableCoachmark");
function iH(e) {
    let t = (0, c.bG)([iw.A], () => iw.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iP.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iV.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iM.q0)(t))
        return iB.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(np.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iF.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t["m/Tc3n"], { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
function ij(e) {
    let t = (0, c.bG)([iw.A], () => iw.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iV.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iM.q0)(t))
        return iB.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(np.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iF.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t.VFqnyU, { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
var iY = n(843010),
    iW = n(764231),
    iK = n(425713);
function iz(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tP(),
        s = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        a = (0, eI.A)((e) => e.isOpen),
        o = (0, iY.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(nA.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(i$, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i$(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tM.sp.indexOf(t),
        l = (0, iK.I)(tM.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
                eI.A.setState({ shouldRenderTenureLevelUp: !0 }),
                im._.dispatch(tp.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(eh.i.USER_DISMISS);
        }, [n]),
        d = tM.VD[t],
        _ = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iW.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(np.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != l ? { type: "image", src: l, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ep.intl.string(ep.t.VoDxsV),
        body: _,
        actions: f,
    });
}
function iq(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n1.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iD.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tp.dJq),
                r = (0, c.bG)([iw.A, nl.default, iL.Ay], () => {
                    if (null === e) return !1;
                    let t = iw.A.getGuild(e);
                    if (void 0 === t || !(0, iM.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nl.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iL.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, ib.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tp.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([iG], () => (null === r ? null : iG.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([iw.A], () => iw.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, ib.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(ij, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iH, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iz, { groupName: eh.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nA.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eh.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, i.jsx)(iR, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iS.A, {
                                            markAsDismissed: r,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: ej.p,
                                            children: e.children,
                                        });
                                    default:
                                        return e.children;
                                }
                            },
                        }),
                    ],
                })
        : e.children;
}
var iZ = n(615675),
    iX = n(900797),
    iQ = n(847374),
    iJ = n(348858),
    i0 = n(617354),
    i1 = n(206018),
    i2 = n(42473),
    i3 = n(490704),
    i6 = n(967194);
function i4(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: o,
            iconForeground: l,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        _ = t || n,
        {
            Component: f,
            play: h,
            events: { onMouseEnter: E, onMouseLeave: m },
        } = (0, iJ.I)(_ ? "undeafen" : "deafen"),
        g = n ? iZ.T : f,
        { name: A } = (0, eA.x5)(ii.oh.AUDIO_OUTPUT),
        I = (0, i0.A)(t, n, s),
        { analyticsLocations: T } = (0, M.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => h(), [_, h]),
        (0, i.jsx)(M.f5, {
            value: T,
            children: (0, i.jsx)(p.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(M.f5, {
                            value: T,
                            children: (0, i.jsx)(i1.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: d } = t,
                        f = d ? iX.t : iQ.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(i3.Lh, { [i3.v8]: _, [i3.q6]: d }),
                        children: [
                            (0, i.jsx)(i2.A, {
                                "aria-checked": _,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: i3.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? nn.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? i6.o : void 0,
                                innerClassName: a()({ [i6.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: E,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(i2.A, {
                                className: a()(i3.UT, { [i3.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(f, {
                                    className: i3.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? nn.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != u,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: A })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ep.intl.format(ep.t["f+DDY/"], { outputDeviceName: A })
                                    : ep.intl.string(ep.t.aA4Vce),
                                "aria-label": c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: A })
                                    : ep.intl.string(ep.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i5 = n(666654),
    i7 = n(523875),
    i8 = n(993719);
let i9 = {};
class re extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i9[e] ?? !1;
    }
}
let rt = new re(iP.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i9[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i9[t] = !1;
    },
});
var rn = n(362823),
    ri = n(980923),
    rr = n(224585),
    rs = n(949341),
    ra = n(973324);
function ro(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: o,
            awaitingRemote: l,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: _,
            onClick: f,
            nameplate: h,
            shouldShowSpeakingWhileMutedTooltip: E,
            shouldShowSpeakingWhilePTTTooltip: m,
            shouldShowInputDeviceChangedTooltip: g,
            shouldShowPTTJoinTooltip: A,
            dismissTooltips: I,
            speaking: T,
        } = e,
        { showPTTIconIndicator: S } = it.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([n9.Ay], () => n9.Ay.getMode() === ii.TB.PUSH_TO_TALK),
        y = (0, c.bG)([n9.Ay], () => n9.Ay.getSettings().modeOptions.shortcut),
        C = (0, c.bG)([rt], () => rt.getIsTutorialActive(rn.v.MUTE_TUTORIAL)),
        v = (0, c.bG)([ie.A], () => null != ie.A.getChannelId()),
        { name: O } = (0, eA.x5)(ii.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, n5.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        D = n || o || s,
        L = (0, i7.L)(D ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, M.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: U, play: k } = L,
        G = s || o ? i5.O : x;
    r.useEffect(() => () => k(), [D, k]);
    let F = (0, ri.A)(n, s, o, l);
    t = E
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e1.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && N && v,
        H = D ? nn.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            f(), C && i8.N(rn.v.MUTE_TUTORIAL);
        }, [f, C]);
    return (0, i.jsxs)(M.f5, {
        value: P,
        children: [
            (0, i.jsx)(p.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        I(),
                        (0, i.jsx)(M.f5, {
                            value: P,
                            children: (0, i.jsx)(i1.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: R.length > 0,
                                renderInputDevices: !0,
                                maybeRenderInputMeter: !0,
                                renderInputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: r } = e,
                        { isShown: s } = n,
                        o = s ? iX.t : iQ.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(i3.Lh, { [i3.v8]: D, [i3.q6]: s }),
                        children: [
                            (0, i.jsx)(i2.A, {
                                "aria-checked": D,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: i3.eT,
                                disabled: l,
                                icon: (0, i.jsx)(G, { size: "custom", width: 20, height: 20, color: H, className: u }),
                                onClick: j,
                                onContextMenu: r,
                                onMouseEnter: () => {
                                    d(), U.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    _(), U.onMouseLeave();
                                },
                                plated: null != h,
                                redGlow: D,
                                role: "switch",
                                ...t,
                                children: B ? (0, i.jsx)("div", { className: a()(rs.U, { [rs.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(i2.A, {
                                "aria-label": g
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: O })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(i3.UT, { [i3.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: i3.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: H,
                                }),
                                onClick: r,
                                onContextMenu: r,
                                onMouseEnter: d,
                                onMouseLeave: _,
                                plated: null != h,
                                redGlow: D,
                                tooltipType: g ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: g,
                                tooltipPositionKey: g
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: O })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: g
                                    ? ep.intl.format(ep.t["18wnuD"], { inputDeviceName: O })
                                    : ep.intl.string(ep.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(np.A, {
                targetElementRef: b,
                shouldShow: C,
                graphic: { type: "image", src: ra.A },
                onRequestClose: () => {
                    i8.N(rn.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(rr.default.VG4zAf),
                body: ep.intl.string(rr.default["8VIRzR"]),
            }),
        ],
    });
}
var rl = n(935399),
    ru = n(505312),
    rc = n(848847),
    rd = n(88001),
    r_ = n(466919),
    rf = n(438705);
let rh = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(np.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rf },
        shouldShow: n,
        title: ep.intl.format(r_.default.bx8sR9, { premiumGroupProductName: (0, rd.DP)() }),
        body: ep.intl.format(r_.default.Pw4OFZ, { premiumGroupProductName: (0, rd.DP)() }),
        onRequestClose: s,
        actions: [{ text: ep.intl.string(r_.default.DD26QR), onClick: a }],
    });
};
var rp = n(873298),
    rE = n(840387);
function rm(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, rE.Z)(),
        a = t8.KP.useSetting(),
        o = s && a !== rp.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION), (0, ea.openUserSettings)(es.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === rp.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(np.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: u,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
        },
        title: ep.intl.string(ep.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ep.intl.string(ep.t.eOoTMX), variant: "primary", onClick: l }],
    });
}
function rg(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: a,
            onContextMenu: o,
            dismissibleContents: l,
            iconForeground: u,
            nameplate: c,
        } = e,
        _ = r.useRef(null),
        [f, h] = r.useState(!1);
    (0, rl.Ay)(() => {
        let e = () => h(!0);
        return (
            im._.subscribe(tp.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                im._.unsubscribe(tp.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = r.useCallback(() => {
        h(!1), a();
    }, [a]);
    t = null != s ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: s.id }) : ep.intl.string(ep.t.cduTBL);
    let E = e$.Z,
        m = (0, ru.w)();
    return (
        (E = null != s ? rc.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i2.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: o,
                    "aria-label": ep.intl.string(ep.t.cduTBL),
                    icon: (0, i.jsx)(E, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...m.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rh, { targetElementRef: _, shouldShow: f, onDismiss: () => h(!1) }),
                (0, i.jsx)(nA.Ay, {
                    contentTypes: l,
                    groupName: eh.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rm, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rA = n(489902);
let rI = iA.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    rT = 2.5 * eJ.A.Millis.SECOND,
    rS = 2 * eJ.A.Millis.MINUTE,
    rN = 2 * eJ.A.Millis.MINUTE,
    ry = 5 * eJ.A.Millis.SECOND;
function rC(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: l,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: _,
            nameplate: f,
            avatarDecoration: m,
            "data-jump-section": g,
        } = e,
        A = r.useRef(null),
        I = t ?? A,
        S = (0, iE.F_)({ avatarDecoration: m, size: (0, Y.Te)(h._3.SIZE_32) }),
        N = (0, Z.A)(),
        {
            updateOpenPopoutRef: C,
            highlightBadge: v,
            setHighlightBadge: O,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [s, a] = r.useState(!1);
            return (
                (0, y.A)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        im._.subscribe(tp.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            im._.unsubscribe(tp.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, K.K)(f);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              object: tp.ZSU.AVATAR,
              children: (0, i.jsx)(n4.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, n6.A)(l.id, l.getAvatarURL(void 0, n4.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(n0, {
                          currentUser: l,
                          highlightBadge: v,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rA.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), O(void 0);
                  },
                  children: (e) => {
                      C(e);
                      let { onMouseEnter: t, onMouseDown: r, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: I,
                          style: R,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(rA.Q9, { [rA.ZQ]: null != f }),
                          children: [
                              (0, i.jsx)(E.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: rA.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(rI, {
                                  size: h._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? tp.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: rA.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rA.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rv extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rN, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = r.createRef();
    avatarWithPopoutRef = r.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: r, occluded: s, speakingWhilePTTInactive: a } = this.props;
        s !== i && this.handleOccludedChanged(),
            r !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, G.A)(e, t, tp.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, tp.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ie.A.isConnected() ? (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("32033"),
                    n.e("3633"),
                    n.e("60134"),
                    n.e("63635"),
                    n.e("44190"),
                    n.e("23658"),
                    n.e("13114"),
                    n.e("427"),
                    n.e("50671"),
                    n.e("59611"),
                    n.e("56921"),
                    n.e("99961"),
                    n.e("94898"),
                    n.e("89833"),
                    n.e("77083"),
                    n.e("63106"),
                    n.e("15931"),
                    n.e("60221"),
                    n.e("35402"),
                    n.e("35316"),
                    n.e("45650"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("13533"),
                    n.e("79705"),
                    n.e("54081"),
                    n.e("60643"),
                    n.e("89534"),
                    n.e("76032"),
                    n.e("78220"),
                    n.e("24291"),
                    n.e("33957"),
                    n.e("5104"),
                    n.e("57872"),
                    n.e("57006"),
                    n.e("38839"),
                    n.e("38559"),
                    n.e("74748"),
                    n.e("61448"),
                    n.e("6619"),
                    n.e("49937"),
                    n.e("2925"),
                    n.e("2742"),
                    n.e("93735"),
                    n.e("79093"),
                    n.e("28510"),
                    n.e("88667"),
                    n.e("11055"),
                    n.e("3840"),
                    n.e("40008"),
                    n.e("40482"),
                    n.e("18869"),
                    n.e("4981"),
                    n.e("24685"),
                    n.e("66721"),
                    n.e("33198"),
                    n.e("84792"),
                    n.e("66969"),
                    n.e("23309"),
                    n.e("48042"),
                    n.e("10268"),
                    n.e("15086"),
                    n.e("92922"),
                    n.e("91157"),
                    n.e("57205"),
                    n.e("10441"),
                    n.e("85654"),
                    n.e("90979"),
                    n.e("94457"),
                    n.e("28217"),
                    n.e("30006"),
                    n.e("23924"),
                    n.e("42205"),
                    n.e("71091"),
                    n.e("19402"),
                    n.e("11704"),
                    n.e("13111"),
                    n.e("68201"),
                    n.e("38939"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("26132"),
                    n.e("28367"),
                    n.e("10471"),
                    n.e("35429"),
                    n.e("63232"),
                    n.e("11301"),
                    n.e("60235"),
                    n.e("64827"),
                    n.e("30938"),
                    n.e("96643"),
                    n.e("94493"),
                    n.e("92789"),
                    n.e("47834"),
                    n.e("74016"),
                    n.e("19551"),
                    n.e("84569"),
                    n.e("6338"),
                    n.e("3178"),
                    n.e("7743"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("8304"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("5812"),
                    n.e("26073"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("1368"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("31716"),
                    n.e("8751"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("50417"),
                    n.e("45679"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("91763"),
                    n.e("76602"),
                    n.e("9233"),
                    n.e("28229"),
                    n.e("21921"),
                    n.e("68403"),
                    n.e("76418"),
                    n.e("71210"),
                    n.e("42724"),
                    n.e("43437"),
                    n.e("40258"),
                    n.e("66495"),
                    n.e("88342"),
                    n.e("86127"),
                    n.e("39970"),
                    n.e("82263"),
                    n.e("6174"),
                    n.e("91146"),
                    n.e("8555"),
                    n.e("46070"),
                    n.e("42451"),
                    n.e("98965"),
                    n.e("72789"),
                    n.e("6949"),
                    n.e("86814"),
                    n.e("17249"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("35027"),
                    n.e("53917"),
                    n.e("62422"),
                    n.e("25949"),
                    n.e("90365"),
                    n.e("89088"),
                    n.e("71273"),
                    n.e("36863"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("9640"),
                    n.e("98765"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("52548"),
                    n.e("3589"),
                    n.e("20590"),
                    n.e("35313"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("28083"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("53984"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("90664"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("52617"),
                    n.e("2564"),
                    n.e("6353"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("14285"),
                    n.e("95752"),
                    n.e("35321"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("62875"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("5500"),
                    n.e("501"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("32209"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("17608"),
                    n.e("36564"),
                    n.e("50033"),
                    n.e("87478"),
                    n.e("63645"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("83952"),
                    n.e("44780"),
                    n.e("5636"),
                    n.e("87196"),
                    n.e("834"),
                    n.e("5557"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("26728"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("36624"),
                    n.e("59957"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("68763"),
                    n.e("29354"),
                    n.e("16767"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("69178"),
                    n.e("57458"),
                    n.e("36877"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("11617"),
                    n.e("19193"),
                    n.e("69747"),
                    n.e("97073"),
                    n.e("75133"),
                    n.e("1243"),
                    n.e("72847"),
                    n.e("96804"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("15920"),
                    n.e("37977"),
                    n.e("42234"),
                    n.e("58164"),
                    n.e("3930"),
                    n.e("44057"),
                    n.e("3663"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("10943"),
                    n.e("37490"),
                    n.e("81189"),
                    n.e("92077"),
                    n.e("66580"),
                    n.e("77467"),
                    n.e("80093"),
                    n.e("98972"),
                    n.e("33448"),
                    n.e("203"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("89523"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("29260"),
                    n.e("41701"),
                    n.e("17823"),
                    n.e("21930"),
                    n.e("39894"),
                    n.e("76290"),
                    n.e("21455"),
                    n.e("60989"),
                    n.e("79435"),
                    n.e("12682"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("51892"),
                    n.e("41838"),
                    n.e("45830"),
                    n.e("46045"),
                    n.e("755"),
                    n.e("3710"),
                    n.e("73122"),
                    n.e("42324"),
                    n.e("94607"),
                    n.e("33771"),
                    n.e("8979"),
                    n.e("77602"),
                    n.e("82921"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("5896"),
                    n.e("31335"),
                    n.e("29569"),
                    n.e("96480"),
                    n.e("82178"),
                    n.e("4736"),
                    n.e("34409"),
                    n.e("43114"),
                    n.e("79593"),
                    n.e("26938"),
                    n.e("39053"),
                    n.e("41706"),
                    n.e("62175"),
                    n.e("94888"),
                    n.e("89541"),
                    n.e("89545"),
                    n.e("46430"),
                    n.e("81202"),
                    n.e("46149"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("44727"),
                    n.e("10147"),
                    n.e("6627"),
                    n.e("60536"),
                    n.e("86546"),
                    n.e("84704"),
                    n.e("66380"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("15057"),
                    n.e("75284"),
                    n.e("62318"),
                    n.e("3590"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("20301"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("40114"),
                    n.e("61137"),
                    n.e("96817"),
                    n.e("73566"),
                    n.e("27687"),
                    n.e("45419"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("11883"),
                    n.e("24564"),
                    n.e("34428"),
                    n.e("35476"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("98660"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("43403"),
                    n.e("71811"),
                    n.e("39967"),
                    n.e("38249"),
                    n.e("88918"),
                    n.e("85216"),
                    n.e("26359"),
                    n.e("83774"),
                    n.e("83102"),
                    n.e("80890"),
                    n.e("2552"),
                    n.e("33314"),
                    n.e("89588"),
                    n.e("24084"),
                    n.e("44790"),
                    n.e("44264"),
                    n.e("74913"),
                    n.e("54876"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("31828"),
                    n.e("71790"),
                    n.e("81754"),
                    n.e("67220"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: I.Z_, onInteraction: (0, V.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n5.d)({ location: "Account" });
                    return (0, i.jsx)(M.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: I.Z_,
                            renderInputDevices: !0,
                            renderInputProfiles: n.length > 0,
                            renderInputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
                };
            });
    };
    handleOutputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(M.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: I.Z_,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
        }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop();
    };
    dismissSpeakingWhilePTTTooltip = () => {
        this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop();
    };
    dismissTooltips = () => {
        this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip();
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e &&
            this.setState({
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
            });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: i,
                occluded: r,
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: o } = this.state,
            l =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rS;
        i
            ? o ||
              !e ||
              t ||
              n ||
              r ||
              !l ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(rT, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleSpeakingWhilePTTChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhilePTTInactive: i,
                occluded: r,
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: o } = this.state,
            l =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? o ||
              e ||
              t ||
              n ||
              r ||
              !l ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(rT, () =>
                          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: r,
                status: s,
                userTag: a,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if ((0, C.A)({ activities: t, status: s, applicationStream: n, voiceChannel: o }))
            return (0, i.jsxs)(L.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(m.A, { children: t3.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(v.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: rA.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === tp.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(L.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: t3.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(q.A, { activity: l, emojiClassName: rA.Zg, className: rA.WO }),
                  ],
              })
            : null != s && s !== tp.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(L.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(D, { text: t3.Ay.humanizeStatus(s) }),
                })
              : a;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: rA.eW,
                          children: (0, i.jsx)(iT.A, {
                              className: a()({ [rA.e8]: null != e }),
                              children: (0, i.jsx)(Q.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? X.G.ANIMATED : X.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rA.XP,
                          children: (0, i.jsx)(iI.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iq, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(rC, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: s } = this.props,
            o = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(rA.kL, { [rA.UG]: null != n, [rA.bc]: !r, [rA.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)($.A, { nameplate: t, hovered: o, placement: z.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rO, {
                                          ...this.props,
                                          ...this.state,
                                          accountContainerRef: this.containerRef,
                                          handleMouseEnterMute: this.handleMouseEnterMute,
                                          handleMouseLeaveMute: this.handleMouseLeaveMute,
                                          handleToggleSelfMute: this.handleToggleSelfMute,
                                          handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                          handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                          handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                          handleOpenAccountSettings: this.handleOpenAccountSettings,
                                          handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                                          dismissTooltips: this.dismissTooltips,
                                      }),
                                  ],
                              }),
                      }),
                      (0, i.jsx)(eg, {}),
                  ],
              });
    }
}
function rO(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: s,
            serverDeaf: a,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: l,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: _,
            handleToggleSelfDeaf: f,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: E,
            handleOpenAccountSettings: m,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: A,
            nameplate: I,
            accountContainerRef: T,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: N = !1,
            dismissTooltips: y,
            speaking: C,
        } = e,
        v = (0, K.K)(I);
    return (0, i.jsxs)("div", {
        className: rA.Uo,
        style: v,
        children: [
            (0, i.jsx)(ro, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: h,
                onContextMenu: p,
                iconForeground: null != I ? rA.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: y,
                speaking: C,
            }),
            (0, i.jsx)(i4, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: f,
                onContextMenu: E,
                awaitingRemote: r,
                iconForeground: null != I ? rA.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: y,
            }),
            (0, i.jsx)(rg, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? rA.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rR(e) {
    let t = (0, c.bG)([ie.A], () => null != ie.A.getChannelId()),
        n = (0, eA.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(ry, () => {
                a(!1);
            }));
    }, [t, n]);
    let o = r.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, N.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: o }
    );
}
function rb() {
    let e = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
        t = (0, c.bG)([ny.default], () => ny.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nR.A], () => {
            let e = nR.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tp.$pd.STREAMING;
                    }),
                status: nR.A.getStatus(),
            };
        }),
        o = (0, c.bG)([ic.A], () => ic.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        f = (0, c.bG)([io.A], () => io.A.getVoiceVolume(t)),
        h = t3.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([ie.A, id.A], () => {
            let e = ie.A.getChannelId();
            return null != e ? id.A.getChannel(e) : null;
        }),
        { mute: E, selfMute: m, suppress: g } = (0, n8.A)(p),
        { selfDeaf: I, deaf: T } = (0, n7.A)(p),
        y = (0, c.bG)([P.A], () => ((0, x.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        C = (0, c.bG)([n9.Ay], () => n9.Ay.getSpeakingWhileMuted()),
        v = (0, c.bG)([U.A], () => U.A.isFullscreenInContext()),
        O = (0, c.bG)([ih.A], () => ih.A.hasLayers()),
        R = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || O || ig.P.isDisallowPopupsSet() || v,
        b = (0, B.sw)(),
        { userStatusMenu: D } = H.$.useConfig({ location: "Account" }),
        L = (0, eI.A)((e) => e.isOpen),
        k = (0, c.bG)([J.default], () => null != J.default.getAwaitingRemoteSessionInfo()),
        G = (0, c.bG)([ip.A], () => ip.A.getGuildId()),
        F = e?.avatarDecoration,
        V = (0, j.A)(F),
        Y = t3.Ay.useName(e) ?? "",
        { analyticsLocations: K } = (0, M.Ay)(w.A.ACCOUNT),
        z = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: $ } = (0, n1.c9)(),
        q = (0, c.bG)([n2.A, nl.default, i_.A], () => {
            let e,
                t = n2.A.getSyncingWith(),
                n = n2.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(i_.A.getParty(e) ?? []))
                        .map((e) => nl.default.getUser(e))
                        .filter(nC.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        X = (0, n3.lX)("AccountCoachmark");
    !R &&
        (Z.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        b && D && !L && Z.avatar.push(d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK),
        X && Z.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: ee } = rR(ii.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: en } = rR(ii.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ei, dismissTooltip: er } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([n9.Ay], () => n9.Ay.getMode() === ii.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ie.A],
                    () => null != ie.A.getChannelId() && (ie.A.getDuration() ?? Number.MAX_VALUE) < ir,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = it.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((it.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(is, () => {
                            t(!1);
                        }),
                        l.current.start(ir, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, o, e]);
            let d = r.useCallback(() => {
                a(!1), l.current.stop();
            }, []);
            return (
                (0, N.l0)(() => {
                    l.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: s, dismissTooltip: d }
            );
        })(),
        es = (function () {
            let { showPTTSpeakingIndicator: e } = it.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([n9.Ay], () => n9.Ay.getMode() === ii.TB.PUSH_TO_TALK),
                s = (0, c.bG)([ie.A], () => ie.A.getRTCConnectionId()),
                a = (0, c.bG)([n9.Ay], () => {
                    let e = n9.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < iu;
                }),
                o = r.useRef(new _.Ep());
            return (
                r.useEffect(() => {
                    n(!1);
                }, [s]),
                r.useEffect(() => {
                    let t = 0,
                        r = o.current;
                    function l(e, i) {
                        let s = (i & ii.ME.VOICE) === ii.ME.VOICE,
                            a = io.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(il, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && n9.Ay.getMediaEngine().on(ia.bg.VoiceActivity, l),
                        () => {
                            n9.Ay.getMediaEngine().removeListener(ia.bg.VoiceActivity, l), r.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        ea = r.useMemo(() => (Q ? "input" : et ? "output" : void 0), [Q, et]),
        eo = r.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ee();
                        break;
                    case "output":
                        en();
                }
            },
            [ee, en],
        );
    return (0, i.jsx)(M.f5, {
        value: K,
        children: (0, i.jsx)(rv, {
            currentUser: e,
            username: Y,
            activities: n,
            applicationStream: o,
            voiceChannel: p,
            dismissibleContents: Z,
            userTag: h,
            occluded: R,
            selfDeaf: I,
            selfMute: m,
            serverDeaf: T,
            serverMute: E,
            speaking: u,
            voiceDb: f,
            speakingWhileMuted: C,
            speakingWhilePTTInactive: es,
            status: a,
            streaming: s,
            suppress: g,
            webBuildOverride: y,
            awaitingRemote: k,
            nameplate: z,
            selectedGuildId: G,
            avatarDecoration: V,
            isQuestBarEmpty: $,
            isListenAlongVisible: q,
            deviceChangedTooltipType: ea,
            onDismissDeviceChangedTooltip: () => eo(ea),
            shouldShowPTTJoinTooltip: ei,
            dismissPTTJoinTooltip: er,
        }),
    });
}
