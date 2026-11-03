n.d(t, { A: () => mz });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(503698),
    o = n.n(u),
    c = n(17928),
    d = n(821609),
    f = n(478016),
    m = n(22231),
    h = n(604525),
    g = n(663417),
    p = n(70688),
    x = n(534514),
    v = n(834730),
    j = n(289873),
    b = n(534890),
    y = n(646270),
    k = n(31300),
    w = n(831453),
    A = n(646973),
    N = n(742589),
    S = n(723702),
    C = n(171691),
    I = n(314116),
    E = n(858899),
    _ = n(949757),
    M = n(800202),
    T = n(809526),
    R = n(105292),
    P = n(766367);
let L = new Set(),
    $ = null;
function q(e, t) {
    let n = i.useRef(t);
    (i.useLayoutEffect(() => {
        n.current = t;
    }),
        i.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                L.add(t),
                () => {
                    L.delete(t);
                }
            );
        }, [e]));
}
var D = n(253932);
function F() {
    return D.Q_.useSetting() || !1;
}
var O = n(573083),
    G = n(57570),
    z = n(971079),
    U = n(61577),
    B = n(686507),
    K = n(192308),
    H = n(128761),
    V = n(12177),
    W = n(967008),
    Q = n(227007),
    Z = n(398773),
    X = n(735769),
    Y = n(513845),
    J = n(802905),
    ee = n(951178);
let et = { width: 320, height: 240 };
function en(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : et;
}
function el(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function er(e) {
    return en(e?.preview_overlay_widget ?? null);
}
var ea = n(855859),
    ei = n(238490),
    es = n(991690),
    eu = n(696645);
function eo(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ec(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eu.X)(e.surface)
                : R.intl.formatToPlainString(T.default["6xVl+N"], {
                      surface: (0, eu.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return R.intl.string(T.default.y5GiL1);
        case "overlay":
            return R.intl.string(T.default["2940LX"]);
        case "bot":
            return R.intl.string(T.default.tjpaGN);
    }
}
var ed = n(939398),
    ef = n(86147),
    em = n(729475),
    eh = n(91242),
    eg = n(156548),
    ep = n(869146),
    ex = n(475815),
    ev = n(652215),
    ej = n(165610);
function eb(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, eg.cR)(t?.id ?? null),
        r = (0, O.Zv)(n),
        i = (0, c.bG)(
            [ep.A, eh.A],
            () => null != t && ep.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT) && eh.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, ej.x1)(t) || i || r) return null;
    let s = (0, eg.fl)(t.id);
    if (null == s || !(0, ex.Ub)(s)) return null;
    let u = R.intl.string(l ? R.t.Z7MyNB : R.t.OIDkcp);
    return (0, a.jsx)(N.A.Icon, {
        tooltip: u,
        icon: l ? ef.z : em.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, eg.U8)(t.id),
    });
}
var ey = n(265872),
    ek = n(980707),
    ew = n(477782),
    eA = n(559106),
    eN = n(847374),
    eS = n(704745);
function eC(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let f = R.intl.string(T.default.I2ucou);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: ey.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ek.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ew.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = eo(e);
                        return (0, a.jsx)(
                            ew.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ec(e),
                                checked: t === eo(n),
                                action: () => {
                                    (l(e), o());
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: l, ...r } = e,
                { isShown: i } = t;
            return (0, a.jsx)(eA.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eS.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(T.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ec(n),
                        }),
                        (0, a.jsx)(eN.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var eI = n(324641),
    eE = n(627363),
    e_ = n(371169),
    eM = n(153207),
    eT = n(260498),
    eR = n(625180),
    eP = n(672929),
    eL = n(111534),
    e$ = n(754027),
    eq = n(174865),
    eD = n(193072),
    eF = n(457827),
    eO = n(322227),
    eG = n(722701),
    ez = n(962998),
    eU = n(79733),
    eB = n(857315),
    eK = n(955260),
    eH = n(95264),
    eV = n(616334),
    eW = n(789645),
    eQ = n(812771),
    eZ = n(58736);
(n(743898), n(134528), n(947204));
var eX = n(333007),
    eY = n(621466),
    eJ = n(775121),
    e0 = n(989145),
    e1 = n(866665),
    e2 = n(81369),
    e3 = n(826745),
    e7 = n(34595),
    e4 = n(470779);
function e5(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
            anchor: g = "chip",
            allowAttachments: p = !0,
            placeholder: x,
            label: v,
        } = e,
        {
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: A,
        } = (0, e7.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        N = i.useRef(null),
        S = (f || j.length > 0) && w && !m,
        C = i.useCallback(() => {
            if (!S) return;
            let e = A();
            c(e.length > 0 ? e : void 0);
        }, [S, A, c]),
        [I, E] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => E(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let _ = i.useRef(null),
        [M, P] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => P({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let L = M?.height ?? 44,
        $ = l.left + 8,
        q = l.top + 8,
        D = Math.max(n.x, $),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, q), Math.max(q, l.top + l.height - L - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: o()(e4.M0, { [e4.ho]: I && !m, [e4.ET]: m }),
        style: { left: D, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: N,
                              type: "file",
                              multiple: !0,
                              className: e4.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(e1.m, {
                              position: "bottom",
                              text: R.intl.string(T.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: e4.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": R.intl.string(T.default.lgvqSB),
                                  children: (0, a.jsx)(e2.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e4.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e3.y, {
                autoFocus: !0,
                rows: 1,
                className: e4.hF,
                value: s,
                placeholder: x ?? ("" === r ? R.intl.string(T.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? R.intl.string(T.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: e4.ZO,
                      children: j.map((e) => (0, a.jsx)(e7.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function e8(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function e6(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function e9(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? e8(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = e8(e());
                l((e) => (e6(e, t) ? e : t));
            }
            n();
            let r = window.setInterval(n, 250);
            return (
                window.addEventListener("resize", n),
                () => {
                    (window.clearInterval(r), window.removeEventListener("resize", n));
                }
            );
        }, [t, e]),
        n
    );
}
var te = n(46676),
    tt = n(876798),
    tn = n(408278),
    tl = n(48507),
    tr = n(193885),
    ta = n(744898),
    ti = n(803656),
    ts = n(241326),
    tu = n(972213),
    to = n(661531);
function tc(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function td(e, t, n) {
    return {
        id: e,
        value: t,
        label: n,
        icon: function (e) {
            let { colorClass: n } = e;
            return (0, a.jsx)("svg", {
                className: n,
                width: 20,
                height: 20,
                viewBox: "0 0 24 24",
                "aria-hidden": !0,
                children: (0, a.jsx)("circle", {
                    cx: 12,
                    cy: 12,
                    r: 8,
                    fill: t,
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                }),
            });
        },
    };
}
let tf = td("red", tc(to.A.unsafe_rawColors.RED_400), () => R.intl.string(T.default.tvXfjt)),
    tm = [
        tf,
        td("yellow", tc(to.A.unsafe_rawColors.YELLOW_300), () => R.intl.string(T.default.FYuaJ1)),
        td("green", tc(to.A.unsafe_rawColors.GREEN_360), () => R.intl.string(T.default["Vv+paS"])),
        td("blue", tc(to.A.unsafe_rawColors.BLUE_345), () => R.intl.string(T.default.k9b1QJ)),
        td("white", tc(to.A.unsafe_rawColors.WHITE), () => R.intl.string(T.default["1sOXwH"])),
    ];
function th(e) {
    return tm.find((t) => t.id === e) ?? tf;
}
var tg = n(39416);
function tp(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function tx(e) {
    let { colorClass: t } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: [
            (0, a.jsx)("path", {
                d: "M10 4H5.5A1.5 1.5 0 0 0 4 5.5V10M4 14v4.5A1.5 1.5 0 0 0 5.5 20H10M14 4h4.5A1.5 1.5 0 0 1 20 5.5V10",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
            }),
            (0, a.jsx)("path", { d: "M13 13v8l2.3-2.2 1.6 3.2 1.6-.8-1.6-3.1 3.1-.1L13 13Z", fill: "currentColor" }),
        ],
    });
}
function tv(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function tj(e) {
    return function (t) {
        let { colorClass: n } = t;
        return (0, a.jsx)("svg", {
            className: n,
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            "aria-hidden": !0,
            children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: e / 2, fill: "currentColor" }),
        });
    };
}
let tb = C.ck.map((e) => tj(Math.min(16, e + 3))),
    ty = C.Cw.map((e) => tj(Math.min(16, e / 2.5))),
    tk = [T.default.jZtZUr, T.default.cTQdD0, T.default.J3ucEg],
    tw = {
        circle: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeWidth: 2 }),
                });
            },
            label: () => R.intl.string(T.default.oIZQbm),
        },
        square: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("rect", {
                        x: 5,
                        y: 5,
                        width: 14,
                        height: 14,
                        rx: 1.5,
                        stroke: "currentColor",
                        strokeWidth: 2,
                    }),
                });
            },
            label: () => R.intl.string(T.default.ARNVr7),
        },
    };
function tA(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(e1.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tg.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tt.k, {
                icon: t,
                size: "sm",
                variant: "icon-only",
                pressed: l,
                "aria-label": n,
                onClick: r,
            }),
        }),
    });
}
function tN(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(e1.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tn.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tS(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tg.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tg.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function tC(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = th(n.colorId);
    function h(e) {
        return (0, C.rC)(t, e);
    }
    let g = tw[o],
        p = R.intl.string(T.default.hUm825),
        x = R.intl.string(T.default.n5IA3a),
        v = R.intl.string(T.default.r5dX6t),
        j = R.intl.string(T.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tg.t$,
        children: [
            (0, a.jsx)("div", {
                className: tg.NT,
                children: (0, a.jsx)(tA, {
                    icon: tx,
                    label: R.intl.string(T.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tg.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": R.intl.string(T.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tA, {
                        icon: tp,
                        label: R.intl.string(T.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tA, {
                        icon: tl.x,
                        label: R.intl.string(T.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tS, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tA, {
                                icon: tr.V,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tb.map((n, l) =>
                                (0, a.jsx)(
                                    tA,
                                    {
                                        icon: n,
                                        label: R.intl.string(tk[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, C.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tS, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tA, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tw).map((t) =>
                                (0, a.jsx)(
                                    tA,
                                    {
                                        icon: tw[t].icon,
                                        label: tw[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tS, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tA, {
                                icon: tv,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            ty.map((n, l) =>
                                (0, a.jsx)(
                                    tA,
                                    {
                                        icon: n,
                                        label: R.intl.string(tk[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, C._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tS, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tN, { icon: m.icon, label: j, onClick: e }),
                        children: (e) =>
                            tm.map((n) =>
                                (0, a.jsx)(
                                    tA,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            ((0, C.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: tg.Gz, role: "separator" }),
                    (0, a.jsx)(tN, {
                        icon: ta.e,
                        label: R.intl.string((0, S.isMac)() ? T.default["j/XmBQ"] : T.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tN, {
                        icon: ti.U,
                        label: R.intl.string((0, S.isMac)() ? T.default.C7jhpn : T.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tN, {
                        icon: ts.TrashIcon,
                        label: R.intl.string(T.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tg.Gz, role: "separator" }),
                    (0, a.jsx)(tN, { icon: tu.XLargeIcon, label: R.intl.string(T.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tI = to.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tE = to.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    t_ = to.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tM(e, t, n) {
    function l(e) {
        return e * n.width;
    }
    function r(e) {
        return e * n.height;
    }
    for (let n of ((e.lineCap = "round"), (e.lineJoin = "round"), t))
        switch (
            ((e.globalCompositeOperation = "erase" === n.kind ? "destination-out" : "source-over"),
            "erase" !== n.kind && ((e.strokeStyle = n.color), (e.fillStyle = n.color)),
            n.kind)
        ) {
            case "marker":
            case "erase": {
                let [t, ...a] = n.points;
                if (null == t) break;
                for (let i of ((e.lineWidth = l(n.width)),
                e.beginPath(),
                e.moveTo(l(t.x), r(t.y)),
                0 === a.length && e.lineTo(l(t.x), r(t.y)),
                a))
                    e.lineTo(l(i.x), r(i.y));
                e.stroke();
                break;
            }
            case "square":
                ((e.lineWidth = l(n.width)),
                    e.strokeRect(
                        l(Math.min(n.from.x, n.to.x)),
                        r(Math.min(n.from.y, n.to.y)),
                        l(Math.abs(n.to.x - n.from.x)),
                        r(Math.abs(n.to.y - n.from.y)),
                    ));
                break;
            case "circle":
                ((e.lineWidth = l(n.width)),
                    e.beginPath(),
                    e.ellipse(
                        l((n.from.x + n.to.x) / 2),
                        r((n.from.y + n.to.y) / 2),
                        l(Math.abs(n.to.x - n.from.x) / 2),
                        r(Math.abs(n.to.y - n.from.y) / 2),
                        0,
                        0,
                        2 * Math.PI,
                    ),
                    e.stroke());
                break;
            case "text": {
                let t = l(n.size);
                ((e.font = `600 ${t}px sans-serif`),
                    (e.textBaseline = "top"),
                    (e.lineWidth = 0.18 * t),
                    (e.strokeStyle = t_),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tT(e) {
    if ("u" > typeof OffscreenCanvas) {
        let t = new OffscreenCanvas(e.width, e.height),
            n = t.getContext("2d");
        return null == n
            ? null
            : { canvas: t, ctx: n, toBlob: () => t.convertToBlob({ type: "image/webp", quality: 0.92 }) };
    }
    let t = document.createElement("canvas");
    ((t.width = e.width), (t.height = e.height));
    let n = t.getContext("2d");
    return null == n ? null : { canvas: t, ctx: n, toBlob: () => new Promise((e) => t.toBlob(e, "image/webp", 0.92)) };
}
async function tR(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = tT(e),
            r = tT(e);
        if (null == l || null == r) return null;
        return (tM(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let tP = { dx: 0, dy: 0 },
    tL = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    t$ = 1;
function tq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, C.d5)(s),
        { active: o } = (0, G.rt)(s),
        c = (0, K.useHasAnyModalOpen)(),
        [d, f] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                (0, C.K7)(s)?.active === !0 && (0, C.It)(s);
            };
    }, [s]);
    let m = u?.active === !0 && "pick" === u.tool;
    i.useEffect(() => {
        null != s && m && !o && (0, G.w4)(s);
    }, [s, m, o]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, eI.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, eX.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eI.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, C.j5)(s, h), () => (0, C.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, a.jsx)(tD, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function tD(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = e9(r),
        [u, o] = i.useState(null),
        [c, d] = i.useState(0),
        [f, m] = i.useState(null),
        [h, g] = i.useState(tP),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        w = th(n.colorId),
        A = "pick" !== y,
        N = (0, C.Qq)(n),
        S = "eraser" === y ? null : w.value,
        I = i.useMemo(
            () =>
                null == N
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              a = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              i = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  a(n, `fill="none" stroke="${tE}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${tI}" stroke-width="2"`),
                                  a(3, `fill="${t ?? tI}" stroke="${tE}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(N, S),
            [N, S],
        ),
        E = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        _ = null != s;
    (i.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [_]),
        i.useLayoutEffect(() => {
            b.current = u;
        }, [u]));
    let M = i.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let a = j.current,
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, te.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tM(r, null == u ? i : [...i, u], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    i.useLayoutEffect(M, [M]);
    let P = i.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        L = i.useCallback(() => {
            let e = b.current;
            if (null == e || null == s) return;
            b.current = null;
            let n = {
                id: `mark-${t$++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, te.oy)(n, s) && (0, C.tD)(t, { type: "commit", shape: n }), o(null), (0, C.QP)(t));
        }, [t, w, s]),
        $ = i.useCallback(() => {
            ((b.current = null), o(null), (0, C.QP)(t));
        }, [t]),
        q = i.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != b.current) return void L();
                let t = P(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == E ? null : (0, te.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, te.WF)(k.present, t, s, 6);
                        if ((m(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (j.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!(0, te.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t$++}`,
                                kind: "erase",
                                width: C.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t$++}`,
                                kind: "marker",
                                color: w.value,
                                width: C.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t$++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                M();
            },
            [s, y, w, E, k.present, n.markerSize, n.eraserSize, P, L, M],
        ),
        D = i.useCallback(
            (e) => {
                let t = P(e),
                    n = j.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    M());
            },
            [P, M],
        ),
        F = i.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = j.current;
            if (null != e) {
                ((j.current = null), g(tP), (0, C.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, te.oy)(n, s)
                    ? ((0, C.tD)(t, { type: "commit", shape: n }), (0, C.QP)(t))
                    : M());
        }, [t, s, h, M]),
        O = i.useCallback(() => (0, C.V9)(t), [t]),
        G = i.useCallback(() => (0, C.tD)(t, { type: "undo" }), [t]),
        z = i.useCallback(() => (0, C.tD)(t, { type: "redo" }), [t]),
        U = i.useCallback(() => (0, C.tD)(t, { type: "clear" }), [t]),
        B = i.useRef({ tool: y, selected: E, exit: O, undo: G, redo: z });
    if (
        (i.useLayoutEffect(() => {
            B.current = { tool: y, selected: E, exit: O, undo: G, redo: z };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eY.Cw)((0, eY.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != b.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = B.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? m(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), (0, C.tD)(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = tL[s];
                null != u && (e.preventDefault(), (0, C.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (A) return (eJ.A.disable(), () => eJ.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, te.k_)(null == j.current ? E : (0, te.y)(E, h.dx, h.dy), s);
    return (0, eX.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tg.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tg.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tg.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": R.intl.string(T.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : I },
                            onPointerDown: q,
                            onPointerMove: D,
                            onPointerUp: F,
                            onPointerCancel: F,
                        }),
                        null == H
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: tg.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, a.jsx)(e5, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + u.at.x * s.width, y: s.top + u.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: R.intl.string(T.default["8gX1lw"]),
                          label: R.intl.string(T.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: u.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e0.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tg.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tC, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tF = n(308081),
    tO = n(689175),
    tG = n(683071),
    tz = n(65593),
    tU = n(218394),
    tB = n(115982),
    tK = n(886540);
function tH(e) {
    return !(0, tK.BL)(e) && !0 !== e.stopRequested;
}
var tV = n(104317),
    tW = n(939249),
    tQ = n(643278),
    tZ = n(566424),
    tX = n(683063),
    tY = n(140735),
    tJ = n(320448),
    t0 = n(138212);
function t1(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(t0.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(t0.wx, null != n && t0.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t2 = n(148590);
function t3(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t7(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? eN.a : tJ._,
        b = null != n || l;
    return (0, a.jsxs)(t1, {
        ...f,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t2.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(tW.D, {
                                className: t2.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : t2.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: o()(t2.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var t4 = n(883646);
let t5 = [];
function t8(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: o()(t4.xL, {
            [t4.Vb]: "in_progress" === t,
            [t4.cT]: "completed" === t,
            [t4.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return R.intl.string(T.default.KvBdun);
                case "in_progress":
                    return R.intl.string(T.default["m5G9+S"]);
                case "unfinished":
                    return R.intl.string(T.default.lRpwhD);
                default:
                    return R.intl.string(T.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(j.y, {
                type: j.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t4.Qd,
                itemClassName: t4.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: t4.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: t4.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function t6(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : t5), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
    let h = u.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        p = u.length - g.length;
    return (0, a.jsxs)("span", {
        className: t4.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    tX.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: t4.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: t4.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function t9(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, u] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), u(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? t5).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            if (null == n.todoId || "" === n.todoId) continue;
                            let e = t.get(n.todoId);
                            null != e ? e.push(n) : t.set(n.todoId, [n]);
                        }
                        return t;
                    })(r ?? t5),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: t4.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(t4.AS, { [t4.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(t8, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t4.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: t4.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(t6, { agents: c.get(e.id) ?? t5, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: t4.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t8, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t4.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: t4.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ne(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = R.intl.formatToPlainString(T.default["P/I+JW"], { completed: u, total: o }),
        d = R.intl.formatToPlainString(T.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(t7, {
        title: R.intl.string(T.default.RtzECX),
        meta: (0, a.jsx)(t3, { children: c }),
        superseded: s,
        showLabel: R.intl.string(T.default.RKyN9q),
        hideLabel: R.intl.string(T.default.xydHoj),
        className: t4.Nr,
        bodyClassName: t4.rf,
        beforeBody: r && !s ? (0, a.jsx)(tY.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(t9, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nt = n(308665),
    nn = n(59678),
    nl = n(903847);
function nr(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [k, w] = i.useState(!1),
        [A, N] = i.useState(!1),
        [S, C] = i.useState(v);
    (S !== v && (C(v), v ? w(!0) : N(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nl.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(nl.vK, { [nl.ho]: p && d, [nl.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(nl.Rk, nn.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(tZ.A, {
                                        glyph: (0, a.jsx)(nt.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(tW.D, {
                                    className: nl.pZ,
                                    onClick: c,
                                    "aria-label": R.intl.string(T.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(nl.Rk, nn.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(tZ.A, {
                                            glyph: (0, a.jsx)(nt.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(e1.m, {
                                    text: R.intl.string(T.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(tW.D, {
                                        className: nl.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": R.intl.string(T.default.RtzECX),
                                        children: (0, a.jsx)(tQ.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  k && I
                      ? (0, a.jsx)("div", {
                            className: o()(nl.vB, { [nl.pg]: v && A, [nl.ui]: !v }),
                            children: (0, a.jsx)(ne, {
                                todos: l,
                                provisional: s,
                                agents: u,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
(n(323874), n(14289), n(35956));
var na = n(839214),
    ni = n(78564);
let ns = new Map(),
    nu = (0, na.D)(() => ({ byMessageKey: {} }));
function no(e, t) {
    let { [e]: n, ...l } = nu.getState().byMessageKey;
    nu.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nc = n(195880),
    nd = n(287111),
    nf = n(16619);
function nm(e) {
    let t = (0, nf.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nh = n(736553),
    ng = n(642785);
async function np(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, ng.dv)(e),
        i = new nh.u();
    try {
        await new Promise((e, s) => {
            ((l = setTimeout(() => s(Error("Timed out sending the message")), 2e4)),
                i.open({
                    url: a,
                    ticket: r,
                    onEvent: (l) => {
                        if ("hello" === l.type)
                            try {
                                i.sendUserMessage(t, n);
                            } catch (e) {
                                s(e);
                            }
                        else
                            "user_message" === l.type && l.nonce === n
                                ? e()
                                : "step" === l.type &&
                                  "turn_result" === l.kind &&
                                  "error" === l.result &&
                                  null == l.turn_id &&
                                  s(Error(l.summary ?? "The message was refused"));
                    },
                    onClose: () => s(Error("Connection closed before the message was stored")),
                }));
        });
    } finally {
        (clearTimeout(l), i.close());
    }
}
var nx = n(890497),
    nv = n(103557),
    nj = n(29073),
    nb = n(590077);
function ny(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = nm(e),
                [s, u] = i.useState(null),
                [o, c] = i.useState([]),
                [d, f] = i.useState(t.prompt),
                [m, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                j = i.useRef(!1),
                b = i.useMemo(() => a.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [a, o]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = i.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                A = i.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                N = d.trim(),
                S = n && !m && (w.length > 0 ? "" !== N : o.length > 0),
                C = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nd.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          R.intl.formatToPlainString(T.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = R.intl.formatToPlainString(T.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                I = i.useCallback(() => {
                    let t, n;
                    if (!S) return;
                    if (0 === w.length) return void C(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = eT.Ay.getProject(e)?.name ?? e),
                        (n = R.intl.formatToPlainString(T.default.ScoZLp, { name: t, projectId: e })),
                        `${N}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nc.m)() }), x.current.set(e.projectId, t)),
                                np(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: N }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && C(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [S, C, o, e, w, N]),
                E = i.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && C(o), l());
                }, [C, o, l, m]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: S,
                submit: I,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = i.useMemo(
            () =>
                u.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [u.projects],
        ),
        f = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: o()(nj.nd, nj.jx),
        "aria-labelledby": f,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nj.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: f,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nj.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tn.K, {
                        icon: eW.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": R.intl.string(T.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nb.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: R.intl.string(T.default.TbbzW5),
                          })
                        : (0, a.jsx)(nx.Z, {
                              label: R.intl.string(T.default["29gr8j"]),
                              placeholder: R.intl.string(T.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(nv.f, {
                        label: R.intl.string(T.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? R.intl.string(T.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nj.qr,
                children: (0, a.jsx)("div", {
                    className: nj.zt,
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(T.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var nk = n(47167),
    nw = n(734057),
    nA = n(994500),
    nN = n(287809),
    nS = n(360047);
function nC(e) {
    return 0 === e.options.length && null == e.input;
}
function nI(e, t, n, l) {
    let r = n.trim(),
        a = e.options.filter((e) => t.includes(e.id)).map((e) => e.label);
    return {
        kind: "multi",
        optionIds: t,
        ...("" === r ? {} : { custom: r }),
        ...(null == l ? {} : { attachment: l.attachment }),
        text: [...a, ...(null == l ? [] : [l.text]), ...("" === r ? [] : [r])].join(", "),
    };
}
let nE = {
    [ev.rbe.GUILD_TEXT]: "text",
    [ev.rbe.GUILD_VOICE]: "voice",
    [ev.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ev.rbe.GUILD_STAGE_VOICE]: "stage",
    [ev.rbe.GUILD_FORUM]: "forum",
    [ev.rbe.GUILD_MEDIA]: "media",
};
function n_(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nw.A.getChannel(t)?.type) ? void 0 : nE[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nN.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nM = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nT = {
        channel: [T.default["9+dfPT"], T.default.pGSJqE],
        role: [T.default["2VkCoD"], T.default.c8YlX8],
        user: [T.default.GZIAxl, T.default["4bptbQ"]],
        project: [T.default.twlOb6, T.default.twlOb6],
        server: [T.default.ZWXDeI, T.default.ZWXDeI],
    };
function nR(e, t) {
    return R.intl.string(nT[e][+!!t]);
}
var nP = n(658675),
    nL = n(123292),
    n$ = n(900797),
    nq = n(691885);
function nD(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => nS.Hi.map((e) => ({ id: e, value: e, label: (0, nS.hU)(e) })), []);
    return (0, a.jsx)(nq.l, {
        label: t,
        hideLabel: n,
        autoFocus: l,
        options: o,
        value: r,
        selectionMode: "single",
        fullWidth: !0,
        disabled: s,
        onSelectionChange: u,
    });
}
var nF = n(344587),
    nO = n(155078);
function nG(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nz = [];
function nU(e) {
    return !0 !== e.upload ? null : R.intl.string(e.options.length > 0 ? T.default.dkzChE : T.default.ZZ641e);
}
function nB(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function nK(e, t) {
    return {
        image: e,
        selected: t,
        busy: null,
        error: null,
        onPick: () => void 0,
        onRemove: () => void 0,
        onUpload: () => void 0,
        onLink: () => Promise.resolve(!1),
    };
}
var nH = n(548118),
    nV = n(300344),
    nW = n(614733),
    nQ = n(904363),
    nZ = n(950902),
    nX = n(136722),
    nY = n(66834),
    nJ = n(808728),
    n0 = n(696451),
    n1 = n(71393),
    n2 = n(488926),
    n3 = n(426035),
    n7 = n(246338);
let n4 = nX.kg(ev.xBc.VIEW_CHANNEL, ev.xBc.SEND_MESSAGES);
var n5 = n(384017);
function n8(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
            onFocus: s,
            onBlur: u,
            options: o,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return n_(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: o,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: u,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: n5.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(nx.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(nx.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function n6(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, nV.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eT.Ay],
                    () => {
                        let e = t ? eT.Ay.getProject(l) : null;
                        return null == e ? null : (0, n3.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || n0.Ay.isMember(r, n) || nY.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [nJ.Ay, n0.Ay, n1.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = n1.A.getGuild(r)?.safetyAlertsChannelId,
                            l = nJ.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, n7.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && n0.Ay.isMember(r, n))
                            return n2.$3({ permission: n4, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? nX.BY;
                        return nX.X8(s, n4) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            f = i.useRef(null),
            m = i.useRef(!1);
        i.useEffect(() => {
            if (!m.current && !u && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            o(((e = []), n_("channel", [d.id], () => (0, nk.m1)(d, nN.default, nA.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(n8, { ...r, guildId: n, options: s, placeholder: nR("channel", !0 === r.question.multi_select) });
}
function n9(e) {
    let { guildId: t, ...n } = e,
        l = (0, nQ.A)(t);
    return (0, a.jsx)(n8, { ...n, guildId: t, options: l, placeholder: nR("role", !0 === n.question.multi_select) });
}
function le(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, nW.A)(t);
    return (0, a.jsx)(n8, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: nR("user", !0 === n.question.multi_select),
    });
}
function lt(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nm(t),
        s = i.useMemo(
            () =>
                r.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [r],
        );
    return 0 === s.length ? n : (0, a.jsx)(n8, { ...l, options: s, placeholder: nR("project", !1) });
}
function ln(e) {
    let t = e.target;
    (0, eY.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function ll(e) {
    let { fallback: t, ...n } = e,
        l = (0, nf.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(nH.Ay, { guild: e, size: nH.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: ln,
              onMouseUp: ln,
              children: (0, a.jsx)(n8, { ...n, options: r, placeholder: nR("server", !1) }),
          });
}
function lr(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, nZ.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lt, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(ll, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(n6, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(n9, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(le, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var la = n(87221),
    li = n(144228),
    ls = n(26430),
    lu = n(750943),
    lo = n(173936),
    lc = n(95477),
    ld = n(256905),
    lf = n(490707),
    lm = n(907702);
function lh(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lf._)(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(lm.Gt, lm.b6),
              children: [
                  (0, a.jsx)(la.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: R.intl.string(T.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(lm.Gt, { [lm.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lm.Sl,
                            onLoad: (e) => {
                                f(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function lg(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = R.intl.formatToPlainString(T.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: o()(lm.Vs, { [lm.Q9]: s, [lm.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(tW.D, {
                className: o()(lm.Up, { [lm.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": R.intl.formatToPlainString(T.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lm.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lh, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lm.Gt }),
                            (0, a.jsx)("span", {
                                className: lm.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nP.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(li.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lm.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nO.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          r = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(r ? -3 : -2).join(".");
                                  })(n)
                                : r.label,
                    }),
                ],
            }),
            null != p
                ? (0, a.jsx)("span", {
                      className: lm.B4,
                      children: (0, a.jsx)(e1.m, {
                          text: R.intl.string(T.default.HQEXJM),
                          children: (0, a.jsx)(tn.K, {
                              icon: ts.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": R.intl.string(T.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lm.B4,
                        children: (0, a.jsx)(e1.m, {
                            text: R.intl.string(T.default["4/eeDD"]),
                            children: (0, a.jsx)(tn.K, {
                                icon: ls._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function lp(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        j = i.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: R.intl.string(T.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? f : [...f, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e0.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, ld.R)({
                                items: e.map((e, t) => {
                                    let l,
                                        r = g.current.get(n[t].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: n[t].label,
                                        ...(null != r
                                            ? ((l = Math.max(1, 480 / Math.max(r.width, r.height))),
                                              { width: Math.round(r.width * l), height: Math.round(r.height * l) })
                                            : {}),
                                    };
                                }),
                                startingIndex: l,
                                shouldHideMediaOptions: !0,
                                location: "ConjureClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [f, j, t],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, f],
        );
    return (0, a.jsxs)("div", {
        className: lm.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: o()(lm.fF, "gallery" === m ? lm.nV : lm.nM, { [lm.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, a.jsx)(
                                  lg,
                                  {
                                      projectId: t,
                                      option: e,
                                      multi: d,
                                      selected: l.includes(e.id),
                                      disabled: r,
                                      reachable: s,
                                      tabbable: d || e.id === v,
                                      onPick: (e) => {
                                          (x(e.id), u(e));
                                      },
                                      onView: b,
                                      onArrow: y,
                                      onMeasured: (t) => g.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != j
                              ? (0, a.jsx)(
                                    lg,
                                    {
                                        projectId: t,
                                        option: j,
                                        multi: d,
                                        selected: c.selected,
                                        disabled: r,
                                        reachable: s,
                                        tabbable: !0,
                                        onPick: c.onPick,
                                        onView: b,
                                        onArrow: () => void 0,
                                        onMeasured: (e) => g.current.set(j.id, e),
                                        onRemove: c.onRemove,
                                    },
                                    j.id,
                                )
                              : null,
                      ],
                  }),
            (0, a.jsx)(lx, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: R.intl.string(/\bicons?\b/i.test(n.question) ? T.default.qU4WN6 : T.default.cbMDDB),
            }),
        ],
    });
}
function lx(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [o, c] = i.useState(!1),
        [f, m] = i.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== f.trim() &&
            null == g &&
            n.onLink(f.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: lm.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lm.QJ,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lu.X,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lo.LinkIcon,
                              text: R.intl.string(T.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lm.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nd.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, a.jsxs)("div", {
                      className: lm.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lm.Hs,
                              children: (0, a.jsx)(lc.k, {
                                  label: R.intl.string(T.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: R.intl.string(T.default.AVhvn8),
                                  value: f,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == g && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: lm.gd,
                              children: [
                                  (0, a.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: R.intl.string(T.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(nL.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: R.intl.string(T.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function lv(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(tW.D, {
        className: o()(n5.uK, { [n5.ue]: l, [n5.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": R.intl.formatToPlainString(d ? T.default["2p6UFz"] : T.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: n5.dy, children: (0, a.jsx)(nP.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: n5.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: n5.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: n5.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: n5.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: c,
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: n5.rM,
                      children: R.intl.string(T.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lj(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return nG(n)
        ? (0, a.jsx)(lp, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lv,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: o ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let lb = [],
    ly = [];
function lk(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select ? R.intl.string(T.default.tE8qbz) : nU(n);
    return (0, a.jsxs)("div", {
        className: o()(n5.Ge, n5.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: n5.aK,
                      children: f,
                  }),
            (0, a.jsx)(lj, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nK(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nG(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: n5.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: n5.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(n5.Pu, n5.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: n5.$0,
                      children: (0, a.jsx)(nL.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: R.intl.string(T.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function lw(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: f,
            hideSubmit: h = !1,
            headingLines: g = 5,
        } = e,
        [p, x] = i.useState({}),
        [j, b] = i.useState({}),
        [y, k] = i.useState({}),
        [w, A] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [N, S] = i.useState({}),
        [C, I] = i.useState({}),
        [E, _] = i.useState(!1),
        [M, P] = i.useState(0),
        [L, $] = i.useState(null),
        [q, D] = i.useState(null),
        [F, O] = i.useState(null),
        [G, z] = i.useState(!1),
        U = i.useRef(null),
        [B, K] = i.useState(null),
        H = i.useRef(null),
        V = i.useRef(0),
        W = null == r,
        Q = l.questions.length,
        Z = Math.min(M, Q - 1),
        X = l.questions[Z],
        [Y, J] = i.useState({ id: X.id, expanded: !1 }),
        ee = Y.id === X.id && Y.expanded,
        [et, en] = i.useState(null),
        el = j[X.id] ?? "",
        er = !0 === X.multi_select,
        ea = nG(X),
        ei = er ? R.intl.string(T.default.tE8qbz) : nU(X),
        es = er
            ? (y[X.id] ?? lb)
            : ((t = p[X.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nz),
        eu = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = R.intl.string(T.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : nB(t[e.id])),
                    [t, l, u],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = i.useCallback(
                    (i, u) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (u) return nK(h, f(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function p(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, e0.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, e0.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !nB(e[d])) return e;
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (g({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? g({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            g({
                                                busy: null,
                                                error: { source: "upload", text: R.intl.string(T.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, e0.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : R.intl.string(T.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, f, n, a],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, p, x),
        eo = eu.imageFor(X.id),
        ec = eu.selectedFor(X),
        { text: ed, phase: ef } = (0, nF.Q)(X.question),
        em = ed === X.question,
        eh = em && et?.id === X.id && et.truncated;
    i.useLayoutEffect(() => {
        if (null == B || ee || !em) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === X.id && t.truncated === e ? t : { id: X.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [em, B, X.id, ee]);
    let eg = R.intl.string(ee ? R.t.iTcuma : R.t.dcl9MQ),
        ep = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        var a;
                        let i = t.questions
                            .map((e, t) => ({ question: e, index: t, answer: n[e.id] }))
                            .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                            .map((e) => {
                                let { question: t, index: n, answer: l } = e;
                                return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                            })
                            .join("\n");
                        if ("" !== i) {
                            let s;
                            ((a = () => {
                                let e;
                                return r(
                                    i,
                                    (e = t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        if (null == t || "" === t.text.trim()) return [];
                                        let l =
                                                "option" === t.kind
                                                    ? [t.optionId]
                                                    : "multi" === t.kind
                                                      ? t.optionIds
                                                      : [],
                                            r =
                                                "custom" === t.kind
                                                    ? t.text.trim()
                                                    : "multi" === t.kind || "entities" === t.kind
                                                      ? t.custom
                                                      : void 0,
                                            a = "entities" === t.kind ? t.entities : [],
                                            i = "entities" === t.kind && a.length > 0 ? t.guildId : void 0,
                                            s = "image" === t.kind || "multi" === t.kind ? t.attachment : void 0;
                                        return [
                                            {
                                                question_id: e.id,
                                                option_ids: l,
                                                ...(null != r && "" !== r ? { custom: r } : {}),
                                                ...(null != s ? { attachment_id: s.id } : {}),
                                                ...(a.length > 0 ? { entities: a } : {}),
                                                ...(null != i ? { guild_id: i } : {}),
                                            },
                                        ];
                                    })).length > 0
                                        ? { clarification_id: t.id, answers: e }
                                        : null,
                                    t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        return null == t || "" === t.text.trim()
                                            ? []
                                            : "image" === t.kind || ("multi" === t.kind && null != t.attachment)
                                              ? [t.attachment]
                                              : [];
                                    }),
                                );
                            }),
                                0 ===
                                (s = t.questions.flatMap((e) => {
                                    let t = n[e.id];
                                    return !0 === e.link && t?.kind === "entities"
                                        ? t.entities.map((t) => ({ target: t.id, build: l[e.id] }))
                                        : [];
                                })).length
                                    ? a()
                                    : Promise.allSettled(
                                          s.map((t) => {
                                              let { target: n, build: l } = t;
                                              return (0, nS.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, C, r);
            },
            [l, C, r, n],
        ),
        ex = i.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    D({ question: X, draft: el, selected: es, ownImage: eo, ownSelected: ec, direction: t, moves: n }),
                    z(!0),
                    P(e));
            },
            [el, eo, ec, X, es],
        ),
        ev = i.useCallback(() => {
            let e = U.current,
                t = H.current;
            null != e && null != t && O({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = U.current,
            t = H.current;
        if (null == e || null == t) return;
        ev();
        let n = new ResizeObserver(ev);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ev]);
    let ej = L?.moves;
    i.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => z(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let eb = i.useCallback(
            (e) => {
                if (W) return;
                let t = { ...p, [X.id]: e };
                x(t);
                let n =
                    Z < l.questions.length - 1
                        ? Z + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, Z);
                null == n ? ep(t) : ex(n, n < Z ? "back" : "forward");
            },
            [p, l, W, Z, X.id, ep, ex],
        ),
        ey = i.useCallback(() => {
            W || 0 === Z || ex(Z - 1, "back");
        }, [W, Z, ex]),
        ek = 0 !== Z || W ? void 0 : c,
        ew = (Z > 0 && !W) || null != ek,
        eA = i.useCallback(
            (e) => {
                b((e) => ({ ...e, [X.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ea ? W || x((e) => ({ ...e, [X.id]: t })) : eb(t);
            },
            [W, ea, X.id, eb],
        ),
        eS = i.useCallback(() => {
            (b((e) => ({ ...e, [X.id]: "" })), eb({ kind: "custom", text: R.intl.string(T.default.zxSq2q) }));
        }, [X.id, eb]),
        { multiPartFor: eC } = eu,
        eI = i.useMemo(() => (er ? nI(X, es, el, eC(X)) : null), [el, er, eC, X, es]),
        eE = w[X.id] ?? ly,
        e_ = i.useMemo(() => {
            var e, t;
            let n;
            return null != X.input
                ? ((e = X.input),
                  (t = N[X.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: eE,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eE.map((t) => (t.name.startsWith(nM[e]) ? t.name : `${nM[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, N, eE, X.id, X.input]),
        eM = i.useCallback(
            (e, t) => {
                (A((t) => ({ ...t, [X.id]: e })), S((e) => ({ ...e, [X.id]: t })));
            },
            [X.id],
        ),
        eT = i.useCallback(() => _(!0), []),
        eR = i.useCallback(() => _(!1), []),
        eP = eu.controlsFor(X, W),
        eL = i.useMemo(() => {
            var e;
            let t;
            return (
                (e = p[X.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: R.intl.string(T.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(X, e))
                    ? null
                    : "" === el.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? nI(X, [t.optionId], el)
                        : nI(X, [], el, t)
            );
        }, [p, el, X]),
        e$ = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(e_, eI ?? eL, el),
            [el, eI, eL, e_],
        ),
        eq = i.useCallback(() => {
            null != e$ && eb(e$);
        }, [e$, eb]),
        [eD, eF] = i.useState(!1),
        [eO, eG] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eF(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ez = i.useCallback(() => {
            null != s && (eG(!0), setTimeout(s, 150));
        }, [s]),
        eU = e$ ?? (null == e_ && null == eI ? (p[X.id] ?? null) : null),
        eB = null != eU && !W,
        eK = Z === Q - 1,
        eH = i.useCallback(() => {
            null == eU || W || eb(eU);
        }, [W, eU, eb]),
        eV = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eY.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eY.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eY.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ew
                            ? (e.preventDefault(), (ek ?? ey)())
                            : "ArrowRight" === e.key && eB && (e.preventDefault(), eH())));
            },
            [ek, ew, eB, ey, eH],
        ),
        eQ =
            ea && !0 !== X.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: n5.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: n5.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(e3.y, {
                              value: el,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  b((e) => ({ ...e, [X.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eq());
                              },
                              placeholder: R.intl.string(nC(X) ? T.default.yLN1x6 : T.default["tOC+tn"]),
                              "aria-label": R.intl.formatToPlainString(T.default["4JeYPB"], { question: X.question }),
                              disabled: W,
                              rows: 1,
                              className: n5.Pu,
                              "data-conjure-clarification-other": X.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: o()(n5.$O, { [n5.fI]: eD && !eO, [n5.Oh]: eO }),
        role: "dialog",
        "aria-label": X.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": E && !G ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: eV,
        children: [
            (0, a.jsxs)("div", {
                className: n5.rf,
                style: null == F ? void 0 : { height: F.heading + F.rows },
                "data-moving": G ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: U,
                        className: n5.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${X.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : g,
                                className: o()(nj.TK, n5.R_, { [n5.TB]: "exit" === ef, [n5.JU]: "enter" === ef }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, a.jsx)("div", {
                                      className: nj.Q7,
                                      children: (0, a.jsx)(e1.m, {
                                          text: eg,
                                          children: (0, a.jsx)(tn.K, {
                                              icon: ee ? n$.t : eN.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => J({ id: X.id, expanded: !ee }),
                                              "aria-label": eg,
                                              "aria-controls": `${X.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(tW.D, {
                                      className: o()(nj.gb, nj.Q7),
                                      onClick: ez,
                                      "aria-label": R.intl.string(T.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: n5.Cg,
                        style: null == F ? void 0 : { insetBlockStart: F.heading },
                        children: (0, a.jsxs)("div", {
                            className: n5.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: H,
                                    className: n5.Ge,
                                    role: "group",
                                    "aria-labelledby": `${X.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        null == ei
                                            ? null
                                            : (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: n5.aK,
                                                  children: ei,
                                              }),
                                        (0, a.jsx)(lj, {
                                            projectId: n,
                                            question: X,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? k((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [X.id]:
                                                                  ((n = t[X.id] ?? lb),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  X.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eA(e),
                                            own: eP,
                                        }),
                                        null != X.input
                                            ? (0, a.jsx)(lr, {
                                                  projectId: n,
                                                  question: X,
                                                  value: eE,
                                                  disabled: W,
                                                  onChange: eM,
                                                  onFocus: eT,
                                                  onBlur: eR,
                                                  fallback: !1 === X.allow_custom ? eQ : null,
                                              })
                                            : null,
                                        !0 === X.link && eE.length > 0 && null == C[X.id]
                                            ? (0, a.jsx)("div", {
                                                  className: n5.X_,
                                                  children: (0, a.jsx)(nL.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: R.intl.string(T.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => I((e) => ({ ...e, [X.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === X.link && eE.length > 0 && null != C[X.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: n5.$y,
                                                  onFocus: eT,
                                                  onBlur: eR,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: R.intl.string(T.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(nD, {
                                                          label: R.intl.string(T.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: C[X.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => I((t) => ({ ...t, [X.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != X.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: n5.aK,
                                                  children: X.note,
                                              })
                                            : null,
                                        !1 === X.allow_custom ? null : eQ,
                                        !0 === X.upload
                                            ? (0, a.jsx)("div", {
                                                  className: n5.$0,
                                                  children: (0, a.jsx)(nL.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: R.intl.string(T.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eS,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == q
                                    ? null
                                    : (0, a.jsx)(
                                          lk,
                                          {
                                              projectId: n,
                                              question: q.question,
                                              draft: q.draft,
                                              selected: q.selected,
                                              ownImage: q.ownImage,
                                              ownSelected: q.ownSelected,
                                              direction: q.direction,
                                              disabled: W,
                                          },
                                          q.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            Q > 1 || er || ea || null != X.input || null != c || nC(X)
                ? (0, a.jsxs)("div", {
                      className: nj.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  Q > 1
                                      ? R.intl.formatToPlainString(T.default.yzYUjq, { index: Z + 1, total: Q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: nj.zt,
                              children: [
                                  ew
                                      ? (0, a.jsx)(nL.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: f ?? R.intl.string(T.default.Pk5lfA),
                                            onClick: ek ?? ey,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  h
                                      ? null
                                      : (0, a.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eK
                                                ? (u ?? R.intl.string(R.t.geKm7t))
                                                : R.intl.string(T.default.w1nRmT),
                                            disabled: !eB,
                                            onClick: eH,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eK ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lA = n(71637),
    lN = n(557744),
    lS = n(223347),
    lC = n(894443),
    lI = n(525530),
    lE = n(805942),
    l_ = n(708679);
function lM(e) {
    return (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let lT = "scope-setup:q0",
    lR = `${lT}:0`,
    lP = `${lT}:1`;
var lL = n(715924);
let l$ = [];
function lq() {}
function lD(e) {
    let { projectId: t, card: n } = e,
        l = i.useId(),
        [r] = n.clarification.questions,
        [s, u] = i.useState(r.default_entities ?? l$),
        { onPickServer: c, onBack: f } = n,
        m = s[0]?.id;
    return (0, a.jsxs)("section", {
        className: o()(nj.nd, nj.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lL.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: l,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: R.intl.string(T.default.ickKBI),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default.OyM4SV),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: lL.Qs,
                children: [
                    (0, a.jsx)(lr, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: lq,
                        onBlur: lq,
                    }),
                    null != r.note
                        ? (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: lL.qr,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(T.default.PTIP7V),
                        disabled: null == m || null == c,
                        onClick: () => {
                            null != m && c?.(m);
                        },
                    }),
                    null != f
                        ? (0, a.jsx)(nL.Q, {
                              variant: "secondary",
                              textVariant: "body-sm/medium",
                              text: R.intl.string(R.t["ETE/oC"]),
                              onClick: f,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function lF(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                n = (0, nf.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                d = t?.install_scope_setup,
                f = "server" === l || (null == l && "choose_server" === d),
                m = t?.guild_id,
                h = i.useMemo(() => {
                    var t;
                    return f
                        ? ((t = m ?? (0, l_.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: R.intl.string(n.length > 0 ? T.default.ZWXDeI : T.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: n.length > 0 ? [] : [{ id: lR, label: R.intl.string(T.default.qLYOpH) }],
                                      ...(0, l_.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: lT,
                                      question: R.intl.string(T.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: lR,
                                              label: R.intl.string(T.default.qLYOpH),
                                              detail: R.intl.string(T.default.QSKvUE),
                                          },
                                          {
                                              id: lP,
                                              label: R.intl.string(T.default.QV5C7b),
                                              detail: R.intl.string(T.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [f, n, m, e]);
            if (null == d) return null;
            if (null == t || !(0, eT.PV)(t))
                return { clarification: (0, l_.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, l_.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: h,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          null != n && (n.option_ids.includes(lP) ? r("server") : g("user", null));
                      },
                submitText: R.intl.string(R.t["cY+Oob"]),
                onBack: f && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: f && n.length > 0,
                onPickServer: a ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : R.intl.string("server" === u ? T.default["XXKd+7"] : T.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(lw, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, a.jsx)(lD, { projectId: t, card: n }, n.clarification.id)
                        : (0, a.jsx)(
                              lw,
                              {
                                  projectId: t,
                                  clarification: n.clarification,
                                  onSubmit: n.onSubmit,
                                  submitText: n.submitText,
                                  onBack: n.onBack,
                              },
                              n.clarification.id,
                          ),
                    null != n.failure
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function lO(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(t), [t]),
                o = (0, nf.z9)("ConjureScopeSwitchCard"),
                [d, f] = i.useState(!1),
                [m, h] = i.useState(null),
                g = u?.guild_id,
                p = i.useMemo(() => {
                    let [e] = n.questions,
                        t = R.intl.formatToPlainString("guild" === a ? T.default["jh/iy+"] : T.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...(0, l_.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: R.intl.string(T.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, a]);
            if (null == u || !(0, eT.PV)(u))
                return { clarification: (0, l_.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (f(!0), h(null));
                try {
                    await (0, l_.yN)(t, n.id, a, e);
                } catch (e) {
                    (f(!1), h(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: p,
                readOnly: !1,
                onSubmit: d
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === a ? x(null) : null != n && x(n.id);
                      },
                submitText: R.intl.string("guild" === a ? T.default.Ua7yKM : T.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, l_.RW)(t) ? r() : h("failed"));
                      },
                backText: R.intl.string("guild" === a ? T.default["4WnIqd"] : T.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == m ? null : R.intl.string("locked" === m ? T.default.irUT0N : T.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              lw,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      lw,
                      {
                          projectId: t,
                          clarification: n.clarification,
                          headingLines: 1,
                          onSubmit: n.onSubmit,
                          submitText: n.submitText,
                          onBack: n.onBack,
                          hideSubmit: n.hideSubmit,
                          backText: n.backText,
                      },
                      n.clarification.id,
                  ),
                  null != n.failure
                      ? (0, a.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var lG = n(442331),
    lz = n(564963);
let lU = new Set(["select", "channel", "role", "user"]);
function lB(e, t) {
    return (
        null != t &&
        (e.keys ?? []).some((e) => {
            let n = t.schema.find((t) => t.key === e);
            if (null == n) return !1;
            if ("secret" === n.type) return t.secrets.find((t) => t.name === e)?.set !== !0;
            let l = t.values[e];
            return null == l || "" === l;
        })
    );
}
function lK(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let lH = new Set(),
    lV = new Set();
function lW(e) {
    return (
        lV.add(e),
        () => {
            lV.delete(e);
        }
    );
}
function lQ() {
    return i.useSyncExternalStore(lW, () => lH);
}
function lZ(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tK.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function lX(e, t, n) {
    if (!n || null == t) return !1;
    let l = lK(e, t);
    return l.length > 0 && !lB({ keys: l }, t);
}
var lY = n(628284),
    lJ = n(782973),
    l0 = n(1665),
    l1 = n(11120),
    l2 = n(411236);
function l3(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: f,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = lQ(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!lH.has(n)) for (let e of ((lH = new Set([...lH, n])), lV)) e();
                    } else a(!0);
                }, [n]),
                o = (0, c.bG)([lG.A], () => lX(t, lG.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([lE.A], () => null != n && lZ(lE.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [lG.A, nw.A],
                    () => {
                        var n;
                        let l = lG.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nw.A.getChannel(e)?.name ?? null),
                              lK(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: R.intl.formatToPlainString(T.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return R.intl.string(T.default.CJq1rY);
                                                      case "checkbox":
                                                          return R.intl.string(
                                                              !0 === t ? T.default.nXtpn3 : T.default["0vfaMW"],
                                                          );
                                                      case "select":
                                                          return l
                                                              .map(
                                                                  (t) =>
                                                                      e.options?.find((e) => e.value === t)?.label ?? t,
                                                              )
                                                              .join(", ");
                                                      case "channel":
                                                          return l
                                                              .map((e) => {
                                                                  let t = n(e);
                                                                  return null != t
                                                                      ? `#${t}`
                                                                      : R.intl.string(T.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? R.intl.string(T.default.nEv677)
                                                              : R.intl.string(T.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return R.intl.string(T.default.Fw9G9A);
                                                      default:
                                                          return l.join(", ");
                                                  }
                                              })(t, r, n),
                                          }),
                                      },
                                  ];
                              })).map((e) => e.text);
                    },
                    [e, t],
                ),
                markSaved: u,
            };
        })(t, n, l),
        g = null == r && u;
    if (f && !g)
        return (0, a.jsx)("article", {
            className: l2.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: R.intl.string(T.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: l2.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: l2.Ol,
                    children: [
                        (0, a.jsx)(lY.y, { size: "xs", color: to.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: R.intl.string(T.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === lJ.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : R.intl.string(T.default.XuOf5s);
    return (0, a.jsx)(l1.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: h,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let u = (0, a.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: R.intl.string(T.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: l2.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(l0.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: l2.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(nj.nd, nj.jx),
                      "aria-label": R.intl.string(T.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nj.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nj.TK,
                                      children: R.intl.string(T.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(tW.D, {
                                      className: o()(nj.gb, nj.Q7),
                                      onClick: r,
                                      "aria-label": R.intl.string(T.default["iq+Pte"]),
                                      children: (0, a.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: l2.DQ,
                              children: [
                                  null != x
                                      ? (0, a.jsx)(l0.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nj.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: l2.xE,
                                      children: R.intl.string(T.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nj.zt,
                                      children: [
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: R.intl.string(T.default["9J3OG8"]),
                                          }),
                                          u,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    });
}
var l7 = n(975571),
    l4 = n(427123);
let l5 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var l8 = n(874421),
    l6 = n(932111),
    l9 = n(940874),
    re = n(404373),
    rt = n(89222);
function rn(e) {
    return "" !== rt.A.getDraft(e).trim();
}
var rl = n(29080);
function rr(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, tB.B4)(r),
        c = o.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = o.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, tB.Lf)(r) }),
    };
}
var ra = n(62617),
    ri = n(780171);
let rs = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ru = {
        snail: () => T.default.ABeVsS,
        goat: () => T.default.dhXay8,
        frog: () => T.default.SHeweG,
        bunny: () => T.default.FytFE1,
        cat: () => T.default["5c+sHs"],
        caterpillar: () => T.default["/FYcne"],
        butterfly: () => T.default["Ib/AxK"],
        dog: () => T.default.zDjBR1,
        spider: () => T.default["6sxyrN"],
        bee: () => T.default.cVtefg,
        bot: () => T.default.MjCw0v,
    },
    ro = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, ra.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, ra.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: ri.u, tint: "var(--illo-purple-40)" },
    };
function rc(e) {
    return { ...ro[e], name: R.intl.string(ru[e]()) };
}
function rd(e) {
    return rs.includes(e) ? rc(e) : void 0;
}
function rf(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rs.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rs[(t + n) % rs.length]);
            }),
            l
        );
    })(e))
        t.set(n, rc(l));
    return t;
}
var rm = n(615839);
function rh(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : R.intl.string(T.default.KcFvbo);
}
var rg = n(60160),
    rp = n(16634);
function rx(e) {
    let t = (0, tB.SY)(e.steps);
    return null != t ? (0, tB.WQ)(t) : rh(e.task);
}
function rv(e) {
    let t = rf(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rd(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rh(e.task),
                      todoId: e.task.todoId,
                      line: rx(e),
                  },
              ];
    });
}
function rj(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, tB.SY)(n.steps),
        d = o
            ? rx(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rh(e));
                  switch (e.status) {
                      case "failed":
                          return R.intl.formatToPlainString(T.default.YrVgOf, { task: t });
                      case "cancelled":
                          return R.intl.formatToPlainString(T.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return R.intl.formatToPlainString(T.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rm.MB)(e.durationMs),
                              });
                          return R.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                      default:
                          return R.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                  }
              })(u),
        f = o ? c : void 0,
        m =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: nn.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rp.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: nn.iq,
                                      children: (0, a.jsx)(rg.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(tZ.A, {
        glyph: (0, a.jsx)(tX.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rh(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nn.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var rb = n(998445),
    ry = n(643210),
    rk = n(648127),
    rw = n(372795),
    rA = n(163897);
let rN = "conjure-browser-viewer";
function rS(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [ry.A],
            () =>
                n.flatMap((e) => {
                    let n = ry.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, a.jsx)("ul", {
        className: rA.kR,
        "aria-label": R.intl.string(T.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rC, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rC(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, u] = (function () {
            let [e, t] = i.useState(null),
                [n, l] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return l(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, n]
            );
        })(),
        c = (0, K.useHasModalOpen)(rN),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, rk.i)(l.session);
    return (0, a.jsxs)(tW.D, {
        innerRef: s,
        className: o()(rA.Nr, h && rA.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, K.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rN },
                )
            );
        },
        "aria-label": R.intl.formatToPlainString(T.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rA.Gt,
                children: [
                    (0, a.jsx)(rw.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rA.Ji,
                        "aria-label": R.intl.formatToPlainString(T.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rA.qf,
                              children: (0, a.jsx)(rb.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rA.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: R.intl.string(T.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rA.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(rA.W9, h && rA.oM) }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var rI = n(268409);
let rE = new WeakMap(),
    r_ = new WeakMap();
function rM(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = i.useMemo(
            () =>
                (function (e, t) {
                    let n = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) n.has(e) || n.set(e, t.segment);
                    return [...n]
                        .filter((e) => {
                            let [, n] = e;
                            return null == t || n === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(l, r),
            [l, r],
        ),
        u = (0, c.yK)(
            [lE.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rE.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = r_.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), r_.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rE.set(e, n), n);
                })(lE.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: rI.h, children: (0, a.jsx)(rS, { projectId: t, sessionIds: u }) });
}
var rT = n(469393);
function rR(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, H.lG)(t.authored_at);
    return (0, a.jsx)(t1, {
        title: R.intl.string(T.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rT.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rT.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: R.intl.string(T.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rP = n(493490),
    rL = n(17742);
let r$ = [];
function rq(e) {
    let t = (0, c.bG)([rP.A], () => (null != e ? rP.A.getCaptures(e) : r$)),
        n = (0, c.bG)([rP.A], () => (null != e ? rP.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, rL._F)(e, n);
                        t || r({ key: a, url: l });
                    } catch {}
                })(),
                () => {
                    t = !0;
                }
            );
        }, [e, n, a]),
        { captures: t, selected: n, src: null != l && l.key === a ? l.url : null }
    );
}
var rD = n(714917),
    rF = n(463660),
    rO = n(970211);
function rG(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([rD.A], () => (null != e ? rD.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, u] = i.useState(null),
                [o, d] = i.useState(!1);
            (i.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => d(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        (async function (e, l) {
                            let r;
                            try {
                                r = await (0, rF.Mg)(e, l);
                            } catch {
                                r = t;
                            }
                            n || a(r);
                        })(e, l),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, l, t]));
            let f = null != l ? r : null,
                m = null == l || (null != f && f === s) ? t : f,
                h = i.useCallback(() => {
                    m === f && u(f);
                }, [m, f]);
            return { src: null == e || null != n || o ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = rq(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, a.jsx)("img", { className: rO.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: o()(rO.LO, { [rO.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var rz = n(155718);
function rU(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let rB = ["command", "user_command", "message_command", "message"],
    rK = new Set([rz.kc.CHAT, rz.kc.USER, rz.kc.MESSAGE]);
function rH(e) {
    return e.type ?? rz.kc.CHAT;
}
function rV(e) {
    return rK.has(rH(e));
}
function rW(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function rQ(e, t) {
    let n = rB.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !rW(e)), ...n.filter(rW)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || rW(r) || l.push(r);
    }
    return rB.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function rZ(e, t, n) {
    let l = e.bot?.example_exchanges ?? [],
        r = { kind: "event", user: "", bot: n.event };
    if ("events" === t) {
        let e = l.slice(0, 3).map((e) => {
            let { bot: t } = e;
            return "" !== t.trim() ? { ...r, bot: t } : r;
        });
        return e.length > 0 ? e : [r];
    }
    let a = l.flatMap((e) => {
            let { user: n, bot: l } = e;
            return "" === n.trim()
                ? []
                : [
                      {
                          kind: "messages" !== t && n.trimStart().startsWith("/") ? "command" : "message",
                          user: n,
                          bot: l,
                      },
                  ];
        }),
        i = { kind: "message", user: n.message, bot: n.reply };
    if ("messages" === t && 0 === a.length) return [i];
    let s = e.commands.filter(rV).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (rH(e)) {
                    case rz.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case rz.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(rW),
        o = a.length > 0 ? rQ([...a, ...u], !0) : rQ("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var rX = n(377941),
    rY = n.n(rX);
function rJ(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function r0(e) {
    return e.type === rz.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === rz.kc.USER || e.type === rz.kc.MESSAGE
          ? ""
          : "/";
}
let r1 = {
        [ee.q7.APP_CHANNEL]: T.default["3/aHX6"],
        [ee.q7.VOICE_CHANNEL]: T.default["3/aHX6"],
        [ee.q7.ACTIVITY]: T.default["3/aHX6"],
        [ee.q7.OVERLAY]: T.default["rPpf5/"],
        [ee.q7.PROFILE_WIDGET]: null,
        [ee.q7.AUTOMOD]: null,
        [ee.q7.BOT]: null,
        [ee.q7.APPLICATION_COMMANDS]: null,
    },
    r2 = [ee.q7.ACTIVITY, ee.q7.APP_CHANNEL, ee.q7.VOICE_CHANNEL, ee.q7.OVERLAY];
function r3(e) {
    return r2.find((t) => rU(e, t)) ?? null;
}
let r7 = 1920 / 1018;
function r4(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let r5 = r4(24, 1018),
    r8 = r4(24, 1920);
function r6(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var r9 = n(176999),
    ae = (((l = {}).IMAGE = "image"), l),
    at = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    an = n(598748),
    al = n(773669);
let ar = [],
    aa = {},
    ai = {};
function as(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function au(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: ae.IMAGE,
        visibility: at.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ao = n(127258),
    ac = n(803306),
    ad = n(587895),
    af = n(320095),
    am = n(963852),
    ah = n(95701),
    ag = n(889227),
    ap = n(427262);
let ax = new ah.nA({ id: "1337", guild_id: "1337", type: ev.rbe.GUILD_TEXT, name: "preview" });
function av(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nN.default], () => nN.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, ac.nj)(new ag.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aj = /^@\S+/;
var ab = n(775602);
let ay = [T.default["3eTjcV"], T.default.l3j5nS];
var ak = n(97808),
    aw = n(778712),
    aA = n(486020),
    aN = n(46054),
    aS = n(200700);
let aC = {
        alert: { label: () => R.intl.string(T.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => R.intl.string(T.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => R.intl.string(T.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => R.intl.string(T.default.RGzFNK), blockedStyle: !1 },
    },
    aI = {
        blocked: { label: () => R.intl.string(T.default.YdnZ8q), tone: "red" },
        alert: { label: () => R.intl.string(T.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => R.intl.string(T.default.RGzFNK), tone: "green" },
    },
    aE = ["blocked", "alert", "allowed"],
    a_ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aM(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : R.intl.formatToPlainString(R.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aS.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? R.intl.formatToPlainString(R.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? R.intl.formatToPlainString(R.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? R.intl.formatToPlainString(R.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? R.intl.formatToPlainString(R.t.opVZ9q, { mins: n / 60 })
                                      : R.intl.formatToPlainString(R.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aT = n(984097),
    aR = n(13673);
let aP = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aL(e) {
    let { example: t } = e,
        n = aM(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let a$ = ["glazedgamer", "sprinkles", "donutking"];
function aq(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aC[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(aT.nM, { [o()(aT.HV, aR.DX)]: s }),
        children: [
            (0, a.jsx)(tY.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: aT.my,
                children: (0, a.jsx)(ak.eu, {
                    src: (0, aA.AE)(void 0, void 0),
                    size: aw._3.SIZE_24,
                    "aria-label": R.intl.string(T.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aT.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aN.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(aL, { example: n }) : null,
                ],
            }),
        ],
    });
}
function aD(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = aI[t.section],
        s = new Set(t.examples.map(aM)),
        u = 1 === s.size ? t.examples.map(aM)[0] : null;
    return (0, a.jsxs)("div", {
        className: aT.UO,
        children: [
            (0, a.jsxs)("div", {
                className: aT.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: aP[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aT.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: u,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("ul", {
                className: aT.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(aq, { example: e, username: a$[(n + t) % a$.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function aF(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aE
                .map((e) => ({ section: e, examples: t.filter((t) => a_[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: aT.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: aT.hk,
                      children: (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    aD,
                    {
                        group: e,
                        firstIndex: l.slice(0, t).reduce((e, t) => {
                            let { examples: n } = t;
                            return e + n.length;
                        }, 0),
                    },
                    e.section,
                ),
            ),
        ],
    });
}
var aO = n(276293),
    aG = n(460905),
    az = n(110384),
    aU = n(365199),
    aB = n(633018),
    aK = n(763754),
    aH = n(217424),
    aV = n(194085),
    aW = n(20851),
    aQ = n(692508),
    aZ = n(798819);
function aX(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(aZ.item, aZ.labelContainer, aZ.colorDefault, {
            [aZ.focused]: !0 === t.highlighted,
            [aZ.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: aZ.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: aZ.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(aZ.label, aQ.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: aZ.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: aZ.icon }),
                  })
                : null,
        ],
    });
}
function aY(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, aQ.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: R.intl.string(R.t["5IEsGx"]), icon: az.W, muted: !0 }
                : { label: R.intl.string(R.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(aZ.menu, aQ.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: aZ.scroller,
            children: [
                (0, a.jsx)(aX, { item: s }),
                (0, a.jsx)("div", { className: aZ.separator }),
                (0, a.jsx)(aX, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var aJ = n(381941);
function a0() {}
function a1(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        d,
        f,
        m,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nN.default], () => nN.default.getCurrentUser())),
        (n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, c.bG)([ad.A], () => ad.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? R.intl.string(T.default.JEYq8M)),
        (u = (0, c.bG)([nN.default], () => (null != l ? nN.default.getUser(l) : void 0), [l])),
        (f = av("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (m = d ? u : f),
        (h = av("31338", R.intl.string(T.default["9iAOsw"]), { discriminator: "0003" })),
        (g = av("31339", (0, ap.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: u, member: o } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, af.rh)({
                                          ...(0, am.Ay)({
                                              channelId: ax.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ev.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: ev.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: ao.G.APPLICATION_COMMAND,
                                                        user: (0, am.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: a, record: i, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: ev.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: ev.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aj, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: R.intl.string(T.default["y+QYes"]),
                                  memberMessage: R.intl.string(T.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = ax.name;
    return (0, a.jsxs)("div", {
        className: aQ.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: aQ.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aO.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: o()(aQ.TE, `group-spacing-${aJ.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? aQ.Rz : void 0,
                            children: [
                                (0, a.jsx)(aW.A, {
                                    message: n,
                                    channel: ax,
                                    author: (0, aK.FT)(n.author, ax),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(aH.A, { message: n, channel: ax }) : void 0,
                                    usernameClassName: r?.target === "user" ? aQ.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: aQ.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(aV.Ay, {
                                              children: [
                                                  (0, a.jsx)(aV.qv, {
                                                      label: R.intl.string(R.t.lfIHs4),
                                                      icon: aG.n,
                                                      onClick: a0,
                                                  }),
                                                  (0, a.jsx)(aV.qv, {
                                                      label: R.intl.string(R.t["5IEsGx"]),
                                                      icon: az.W,
                                                      onClick: a0,
                                                  }),
                                                  (0, a.jsx)(aV.qv, {
                                                      label: R.intl.string(R.t["UKOtz+"]),
                                                      icon: aU.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: a0,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? aQ.ET : aQ.je,
                                          inert: !0,
                                          children: (0, a.jsx)(aY, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: y,
                                          }),
                                      })
                                    : null,
                            ],
                        },
                        t,
                    );
                }),
            }),
            (0, a.jsxs)("div", {
                className: aQ.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aB.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: R.intl.formatToPlainString(R.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
var a2 = n(332173);
function a3(e) {
    let { name: t } = e;
    return (0, a.jsxs)(a2.A, { children: ["/", t] });
}
function a7(e) {
    let { text: t, commandNames: n } = e,
        l = (function (e, t) {
            if (null == t) return null;
            let n = [],
                l = 0;
            for (let r of e.matchAll(t)) {
                let t = (r.index ?? 0) + r[1].length;
                (t > l && n.push({ kind: "text", text: e.slice(l, t), start: l }),
                    n.push({ kind: "command", name: r[2], start: t }),
                    (l = t + 1 + r[2].length));
            }
            return 0 === n.length ? null : (l < e.length && n.push({ kind: "text", text: e.slice(l), start: l }), n);
        })(
            t,
            i.useMemo(
                () =>
                    (function (e) {
                        if (0 === e.length) return null;
                        let t = [...e].sort((e, t) => t.length - e.length).map(rY());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(a3, { name: e.name }, e.start) : e.text));
}
n(827669);
var a4 = n(687966),
    a5 = n(757789),
    a8 = n(26137),
    a6 = n(430392),
    a9 = n(231483),
    ie = n(323384);
let it = {
    frame: T.default.Z2bt4u,
    overlay_widget: T.default["0mGHfU"],
    user_widget: T.default.Jipr29,
    bot: T.default.EbvC13,
    commands: T.default.EbvC13,
    automod: T.default.tiMvei,
};
var il = n(573634);
let ir = {
    frame: a4.GameControllerIcon,
    overlay_widget: a5.V,
    user_widget: a8.r,
    bot: a6.RobotIcon,
    commands: a6.RobotIcon,
    automod: a9.ShieldIcon,
};
function ia(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: o()(il.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function ii(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: il.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: il.jw,
                    children: (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        tag: "span",
                        children: e,
                    }),
                },
                e,
            ),
        ),
    });
}
function is(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: il.lj,
        children: [
            (0, a.jsx)("span", {
                className: o()(il.Vo, il.G),
                children: (0, a.jsx)(ie.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: il.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iu(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: il.wZ,
        children: t.map((e, t) => {
            let n = r0(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(a3, { name: e.name })
                                : (0, a.jsx)(a2.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function io(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: il.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: il.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(a7, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ic(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? ie.k : ir[t.kind],
        o = R.intl.string(s ? T.default.BM4Ymz : it[t.kind]);
    return (0, a.jsxs)("section", {
        className: il.s9,
        "aria-label": o,
        children: [
            (0, a.jsxs)("div", {
                className: il.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: il.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: il.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(a7, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(io, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: il.PG, children: r }) : null,
        ],
    });
}
function id(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, intro: u, proposal: o, renderPreview: c, commandNames: d } = e,
        f =
            ((t = o.experiences ?? []),
            (n = t
                .filter((e) => {
                    let { kind: t } = e;
                    return "commands" === t;
                })
                .flatMap((e) => {
                    let { changes: t } = e;
                    return t.filter(
                        (e) =>
                            !(function (e, t) {
                                if (0 === t.length) return !1;
                                let n = t.map(rY()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, d),
                    );
                })),
            (l = t.find((e) => {
                let { kind: t } = e;
                return "bot" === t;
            })),
            t.flatMap((e) =>
                "commands" === e.kind
                    ? null != l
                        ? []
                        : [{ experience: e, bullets: n }]
                    : e === l
                      ? [{ experience: e, bullets: [...e.changes, ...n] }]
                      : [{ experience: e, bullets: e.changes }],
            )),
        m =
            ((r =
                f.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? f[0]),
            r?.experience.id);
    return (0, a.jsxs)("div", {
        className: il.aN,
        children: [
            (0, a.jsxs)("div", {
                className: il.Lv,
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: il.yF, role: "separator" }),
                            (0, a.jsx)(ic, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: T.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: T.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: R.intl.string(n), labels: l.map(rJ) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      ia,
                                                      { caption: n, children: (0, a.jsx)(ii, { labels: l }) },
                                                      t,
                                                  );
                                              })
                                        : [];
                                    switch (t.kind) {
                                        case "frame":
                                            return [
                                                ...(function (e, t) {
                                                    let n = (function (e, t) {
                                                        if ("frame" !== t.kind) return null;
                                                        let n = R.intl.string(T.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(ee.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [
                                                                            {
                                                                                name: t.name
                                                                                    .toLowerCase()
                                                                                    .replace(/[^\p{L}\p{N}]+/gu, "-")
                                                                                    .replace(/^-+|-+$/g, ""),
                                                                            },
                                                                        ]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(ee.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(ee.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                ia,
                                                                {
                                                                    className: il.Iw,
                                                                    caption: R.intl.formatToPlainString(
                                                                        T.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: il.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                is,
                                                                                { name: t, description: n },
                                                                                t,
                                                                            );
                                                                        }),
                                                                    }),
                                                                },
                                                                "channels",
                                                            ),
                                                        );
                                                    let r = [
                                                        ...(n.usableInVoice
                                                            ? [R.intl.string(T.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [R.intl.string(T.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    ia,
                                                                    {
                                                                        caption: R.intl.string(T.default.MY6UGJ),
                                                                        children: (0, a.jsx)(ii, { labels: r }),
                                                                    },
                                                                    "features",
                                                                ),
                                                            ),
                                                        l
                                                    );
                                                })(e, t),
                                                ...l,
                                            ];
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, a.jsx)(
                                                              ia,
                                                              {
                                                                  caption: R.intl.string(R.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iu, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...l,
                                            ];
                                        default:
                                            return l;
                                    }
                                })(o, t, t.id === m),
                                commandNames: d,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var im = n(633075),
    ih = n(58216),
    ig = n(27399);
function ip(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()),
        r = i.useMemo(() => new im.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: ig.H,
              children: (0, a.jsx)(ih.A, {
                  user: l,
                  widget: r,
                  allowEditing: !1,
                  disableInteraction: !0,
                  interactiveLinks: !0,
                  disableCTA: !0,
                  rendererProps: n,
              }),
          });
}
var ix = n(443863);
function iv(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: r4(i.width * t, 1920), height: r4(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(rG, { projectId: n }),
            (0, a.jsx)("div", {
                className: ix.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": r5,
                    "--custom-conjure-plan-overlay-widget-end": r8,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: ix.M7, onError: s }),
            }),
        ],
    });
}
function ij(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e0.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, ld.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function ib(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, lf._)(t, r);
    return s
        ? null
        : (0, a.jsx)(tW.D, {
              className: ix.xX,
              onClick: () => ij(t, [{ id: r, alt: l }], 0),
              "aria-label": R.intl.string(T.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: ix.sN, onError: u }),
          });
}
function iy(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lf._)(t, r),
        [f, m] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([ab.Ay], () => ab.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % ay.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let f = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                m = i.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: ay.map((e) => R.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h });
    if (u) return null;
    let b = R.intl.string(T.default.mjryK4),
        y = R.intl.string(T.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: ix.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(tW.D, {
                className: o()(ix.xX, ix.nj, { [ix.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(r7) },
                onClick: () => ij(t, [{ id: r, alt: b }], 0),
                "aria-label": R.intl.string(T.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: ix.Ac, onError: d })
                          : (0, a.jsx)(iv, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: ix._4,
                role: "group",
                "aria-label": R.intl.string(T.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        tW.D,
                        {
                            className: o()(ix.c, { [ix.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(v.E, {
                                variant: "body-xs/medium",
                                color: "none",
                                tag: "span",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function ik(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, lf._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(tW.D, {
                  className: ix.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: ix.rA, onError: u }),
              }),
          });
}
function iw(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: R.intl.formatToPlainString(T.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: ix.Op,
              children: (0, a.jsxs)("div", {
                  className: ix.uW,
                  children: [
                      (0, a.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: R.intl.string(T.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: ix.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(ik, { projectId: t, id: r, alt: i, onOpen: () => ij(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function iA(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        f,
        m,
        h,
        g,
        { projectId: p, proposal: x, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = rU(x, ee.q7.APPLICATION_COMMANDS)),
            (l =
                rU(x, ee.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(rV)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : rZ(x, l, {
                              message: R.intl.string(T.default.J7qggf),
                              reply: R.intl.string(T.default.nqYtiy),
                              event: R.intl.string(T.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = ai } = t,
                r = (0, c.bG)([al.default], () => al.default.locale),
                a = (0, c.bG)([eT.Ay], () => {
                    let t = eT.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aa);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e0.PK)(e, l.id).then(
                                            (e) => [n, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        r || l(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    r = !0;
                                }
                            );
                        }, [e, t]),
                        n
                    );
                })(e, l.images),
                u = i.useMemo(
                    () =>
                        null == n
                            ? null
                            : (function (e, t, n, l) {
                                  let r = {};
                                  for (let [t, n] of Object.entries(e.surfaces))
                                      null != n &&
                                          (r[t] = (function (e) {
                                              let t = {};
                                              for (let [n, l] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, n] of Object.entries(l.fields))
                                                      e[t] = {
                                                          ...as(n),
                                                          ...(null != n.fallback ? { fallback: as(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = r9.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[an.m.WIDGET_TOP] || null == i[an.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: i,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, n) {
                                                    let l = (function (e) {
                                                            let t = new Map();
                                                            for (let n of Object.values(e.surfaces))
                                                                for (let e of Object.values(n?.components ?? {}))
                                                                    for (let n of Object.values(e.fields))
                                                                        "data" !== n.value_type ||
                                                                            t.has(n.value) ||
                                                                            t.set(n.value, n.presentation_type);
                                                            return t;
                                                        })(e),
                                                        r = {};
                                                    for (let [e, a] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(a)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: r9.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: r9.oG.NUMBER, value: a })
                                                                : (r[e] = { type: r9.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(au),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: ar,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(p, x),
        w = j?.superseded === !0,
        A = x.what_changed?.trim() ?? "",
        N =
            ((t = x.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === r0(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        S =
            ((u =
                null == (s = r3(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (f = null != (o = x.design_image) && o.id !== r6(x)?.id ? o : null),
            (m = r6(x)),
            (h =
                x.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? u),
            (g =
                x.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? u),
            {
                ui: null != f && null != h ? { experienceId: h, design: f } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: en(x.overlay_widget ?? null) } : null,
            }),
        C = i.useMemo(
            () =>
                x.commands.some(rV)
                    ? rZ({ ...x, bot: void 0 }, "commands", {
                          message: R.intl.string(T.default.J7qggf),
                          reply: R.intl.string(T.default.nqYtiy),
                          event: R.intl.string(T.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(p)?.name, [p]),
        E =
            w && null != j
                ? R.intl.formatToPlainString(T.default.YZ3qJs, { version: j.version })
                : R.intl.string(T.default["3b6e7o"]),
        _ = w ? (0, a.jsx)(t3, { children: R.intl.string(T.default.hF2c41) }) : null;
    return (0, a.jsxs)(t7, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: R.intl.string(T.default.yD8EJS),
        hideLabel: R.intl.string(T.default.nSPGNb),
        bodyClassName: ix.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: ix.Qs,
                children: (0, a.jsx)(id, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(a7, { text: x.summary, commandNames: N }),
                            }),
                            (0, a.jsx)(iw, { projectId: p, proposal: x }),
                            "" !== A
                                ? (0, a.jsxs)("section", {
                                      className: ix.uW,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: R.intl.string(T.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(a7, { text: A, commandNames: N }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: x,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === S.ui?.experienceId
                                            ? (0, a.jsx)(ib, {
                                                  projectId: p,
                                                  design: S.ui.design,
                                                  alt: R.intl.string(null == (t = r3(x)) ? T.default["3/aHX6"] : r1[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === S.overlay?.experienceId
                                            ? (0, a.jsx)(iy, {
                                                  projectId: p,
                                                  design: S.overlay.design,
                                                  size: S.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(ip, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(aF, { automod: x.automod })
                                    : null;
                            case "commands":
                            case "bot": {
                                let t = (function (e, t, n) {
                                    var l;
                                    let r;
                                    if ("commands" === e.kind) return n;
                                    let a = (e.example_exchanges ?? [])
                                        .filter((e) => {
                                            let { bot: t } = e;
                                            return "" !== t.trim();
                                        })
                                        .slice(0, 3)
                                        .map((e) => {
                                            let { user: t, bot: n } = e,
                                                l = t.trim();
                                            return "" === l
                                                ? { kind: "event", user: "", bot: n }
                                                : { kind: l.startsWith("/") ? "command" : "message", user: l, bot: n };
                                        });
                                    return (
                                        (l = a.length > 0 ? a : t),
                                        (r = l.some((e) => "command" === e.kind || rW(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, C);
                                return t.length > 0 ? (0, a.jsx)(a1, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: N,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: ix.qr,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: R.intl.string(T.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: R.intl.string(T.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var iN = n(331322),
    iS = n(289565);
function iC(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iS.m, children: n })
        : (0, a.jsxs)("div", {
              className: iS.Z,
              children: [
                  n,
                  (0, a.jsx)(e1.m, {
                      text: R.intl.string(R.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tn.K, {
                          "aria-label": R.intl.string(R.t.WAI6xu),
                          icon: eW.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iI(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function iE(e, t) {
    return null != e && iI(t, e.status);
}
let i_ = new WeakMap();
var iM = n(175841),
    iT = n(27232),
    iR = n(505930),
    iP = n(506774),
    iL = n(385081);
let i$ = "conjurePublishRatings",
    iq = [1, 2, 3, 4, 5],
    iD = { 1: T.default.GhbsGA, 2: T.default.cm0nwU, 3: T.default.kGvlh2, 4: T.default.dVBSUg, 5: T.default.DKlgF7 };
function iF(e) {
    return R.intl.string(iD[e]);
}
let iO = new Set(),
    iG = 0;
function iz() {
    return iP.w.get(i$) ?? {};
}
function iU(e, t) {
    return iz()[e]?.[t] ?? null;
}
function iB(e) {
    return (iO.add(e), () => iO.delete(e));
}
var iK = n(189213);
function iH(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: u,
        } = (function (e) {
            let [t, n] = i.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, iL.Fz)(e, n);
                },
            };
        })(t),
        o = R.intl.string(T.default.IqkF07);
    return (0, a.jsx)(iK.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: R.intl.string(T.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(nv.f, {
            label: o,
            hideLabel: !0,
            placeholder: R.intl.string(T.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var iV = n(54100);
function iW(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: iV.mo,
        role: "status",
        children: [
            (0, a.jsx)(iM.SparklesIcon, { size: "xs", color: "currentColor", className: iV.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? R.intl.string(T.default["nIc9/M"])
                        : 3 === t
                          ? R.intl.string(T.default.ausj8U)
                          : R.intl.string(T.default.HilSjw),
            }),
        ],
    });
}
function iQ(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: u } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(iB, () => iG),
                {
                    rating: iU(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != iU(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, iL.gw)(i);
                            let s = iz();
                            return (iP.w.set(i$, { ...s, [t]: { ...s[t], [n]: l } }), iG++, iO.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [c, d] = i.useState(null),
        [f, m] = i.useState(null),
        [h, g] = i.useState(!1),
        p = i.useId(),
        x = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => g(!1), 420);
            return () => clearTimeout(e);
        }, [h]),
        null != s && !h)
    )
        return (0, a.jsx)(iW, { rating: s });
    let b = null != s,
        y = b ? s : (f ?? c),
        k = b || (null == f && null != c);
    function w(e) {
        if (b) return;
        (d(e), m(null), g(!0));
        let t = u(e);
        null != t && (0, K.openModal)((e) => (0, a.jsx)(iH, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: iV.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: iV.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(iV.Pf, { [iV.KH]: null == y }),
                        children: R.intl.string(T.default.mTV326),
                    }),
                    iq.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(iV.Pf, { [iV.KH]: y === e }),
                                children: iF(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: iV.uf,
                children: iq.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? iT.StarIcon : iR.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: iV.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: p,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        j.current ? d(e) : w(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), w(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: iV.hF,
                                    "aria-label": R.intl.formatToPlainString(T.default.NU7Dex, {
                                        rating: e,
                                        label: iF(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: o()(iV.d4, { [iV.cO]: t, [iV.Ng]: t && k }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && k ? `picked-${y}` : "idle",
                                ),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function iZ(e) {
    let { projectId: t, publish: n } = e,
        l = (0, eK.A)(t, n);
    return (0, a.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function iX(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eU.Ay)(t);
    return null != r && iE(r, l)
        ? (0, a.jsx)(iC, {
              children: (0, a.jsxs)(iN.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(iZ, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(iQ, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var iY = n(303345),
    iJ = n(44255),
    i0 = n(416473),
    i1 = n(289830);
function i2(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eT.Ay],
                    () => {
                        let t = eT.Ay.getProject(e);
                        return null != t && (0, eT.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, i0.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof iY.A ? e.message : R.intl.string(T.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? R.intl.formatToPlainString(T.default.orZDqY, { time: (0, iJ.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, iJ.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t1, {
        title: R.intl.string(T.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: i1.r,
            children: [
                (0, a.jsxs)("div", {
                    className: i1.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(T.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: R.intl.string(T.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: R.intl.string(T.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var i3 = n(989271);
function i7(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(tW.D, {
        className: o()(i3.nM, { [i3.f1]: s, [i3.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": R.intl.formatToPlainString(T.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: i3.jo,
                children: [
                    n
                        ? (0, a.jsx)(f.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: i3.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: i3.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function i4(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t1, {
        title: R.intl.string(T.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                i7,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var i5 = n(530557),
    i8 = n(872162),
    i6 = n(202723);
function i9(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, K.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: i5.R })), [r.fields]),
        m = (0, lz.bB)(l, s),
        h = o()(i6.Lo, { [i6.jY]: m });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: h,
                  children: (0, a.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: R.intl.string(T.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: h,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: R.intl.string(T.default.HCQvpO),
                        }),
                        (0, a.jsx)(i8.C, { label: R.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: i6.Lo,
                      children: (0, a.jsx)(i8.C, { label: R.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: h,
                        children: [
                            (0, a.jsxs)("div", {
                                className: i6.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: i6.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(lY.y, {
                                            size: "xs",
                                            color: to.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: R.intl.string(T.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        R.intl.formatToPlainString(T.default["Z+FC3j"], {
                                            label: e,
                                            value: R.intl.string(T.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: i6.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: R.intl.string(null != u ? T.default.O0QIqj : T.default.HCQvpO),
                        }),
                        (0, a.jsx)(l0.A, {
                            text: null != r.note && "" !== r.note ? r.note : R.intl.string(T.default.MPGSHL),
                            variant: "body-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(i8.C, { label: R.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                        (0, a.jsx)("div", {
                            className: i6.sq,
                            children: (0, a.jsx)(d.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: R.intl.string(T.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var se = n(919790),
    st = n(908492),
    sn = n(971824),
    sl = n(162052),
    sr = n(165648);
function sa(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: c,
            provisionalTodo: d,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, tB.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == f
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === f),
                          tasks: x.tasks.filter((e) => e.task.segment === f),
                      },
            [x, f],
        );
    if (o)
        return (0, a.jsx)("ol", {
            className: nn.pj,
            "data-live": !1,
            children: (0, a.jsx)(tZ.A, {
                glyph: (0, a.jsx)(rl.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: R.intl.string(T.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, tB.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rf(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        N = rv(k);
    return (0, a.jsxs)("ol", {
        className: nn.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(tV.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? rd(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rj,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(rM, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nn.YO,
                      children: (0, a.jsx)(ne, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function si(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: A,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = i.useMemo(
            () => rr({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: P, lastStreamedMessage: L, showsClosingMessage: $, closingContent: q } = M,
        D = (N ? S : void 0) ?? M.attachmentsHost,
        F = $ && !N,
        O = null == c ? null : (0, a.jsx)(se.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, a.jsx)("div", { className: nn.MT, children: O }),
        z = w
            ? (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return R.intl.string(T.default.Mv5OmK);
                          case "queued":
                              return R.intl.string(T.default["Po/2mi"]);
                          case "restarting":
                              return R.intl.string(T.default.Vj0woh);
                          default:
                              return R.intl.string(T.default.gY3L8p);
                      }
                  })(A),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nn.ue,
        children: [
            P.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: nn.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nn.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sr.PT,
                                          children: (0, st.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === D && e === L ? G : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(iA, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, a.jsxs)("div", {
                        className: o()(nn.ky, sl.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(sr.PT, nn.cW),
                                children: (0, st.U)(q, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(nn.ky, nn.k1, sl.XR, { [sn.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(i9, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: o()(nn.ky, nn.k1, sl.XR),
                      children: (0, a.jsx)(l3, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || F) ? null : O,
            null != x ? (0, a.jsx)(iX, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(i4, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != C ? (0, a.jsx)(rR, { proposal: C, onRestore: I }) : null,
            null != E ? (0, a.jsx)(i2, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var ss = n(864970),
    su = n(146806),
    so = n(475358),
    sc = n(783977),
    sd = n(559647),
    sf = n(655098),
    sm = n(820066),
    sh = n(234320),
    sg = n(191023),
    sp = n(285796),
    sx = n(922329),
    sv = n(153171);
function sj(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sx.p, {
        name: R.intl.string(T.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tg.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sg.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tg.OY,
                    children: (0, a.jsx)(m.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(v.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: R.intl.string(T.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sv.o1,
            onClick: () => (0, C.xU)(t),
            "aria-label": R.intl.string(T.default.N852dj),
            children: (0, a.jsx)(sp.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sb(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sx.p, {
        compact: !0,
        name: R.intl.string(T.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: R.intl.string(T.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: sv.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nL.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: R.intl.string(T.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sy = n(587157),
    sk = n(347111),
    sw = n(120234),
    sA = n(901173),
    sN = n(161431),
    sS = n(280450),
    sC = n(695184),
    sI = n(935208),
    sE = n(503275),
    s_ = n(957071),
    sM = n(659280),
    sT = n(351906),
    sR = n(407653),
    sP = n(322915);
function sL(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, c.bG)([sT.A], () => sT.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      sM.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: u,
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, a.jsx)(
                      sM.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sR.A, { projectId: n, file: e.file, className: sP.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? f : f.slice(0, m),
        g = -1 === m ? [] : f.slice(m);
    return (0, a.jsx)(sM.Ay, {
        id: t,
        className: sP.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": R.intl.string(T.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(s$, { titleId: o, title: R.intl.string(T.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(s$, { titleId: d, title: R.intl.string(T.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function s$(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sP.Gf, children: n }),
            l,
        ],
    });
}
var sq = n(719442),
    sD = n(355622),
    sF = n(408018),
    sO = n(186306),
    sG = n(323350),
    sz = n(35277),
    sU = n(683167),
    sB = n(267102),
    sK = n(259691);
let sH = (0, ah.createChannelRecord)({ id: "1", type: ev.rbe.DM });
function sV(e) {
    let t = sm.VW.end(e, []);
    return { anchor: t, focus: t };
}
function sW(e) {
    return (0, sG.WO)(sm.VW.richValue(e), { mode: "raw" });
}
function sQ(e, t) {
    ((e.children = (0, sF.x7)(t)), (e.selection = sV(e)), e.onChange());
}
function sZ(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(l6.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(sK.A, { attachmentId: r }), n] });
}
var sX = n(497437),
    sY = n(465410);
let sJ = "body-md/normal",
    s0 = null;
function s1(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        f = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let o = s + i,
                c = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, su._R)(f),
                frontTo: 1e3 * (0, su._R)(m),
                backFrom: 1e3 * (0, su.T)(f),
                backTo: 1e3 * (0, su.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        A = i.useRef(!1),
        N = i.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let S = "in" === k ? x.backFrom : x.frontFrom,
        C = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([ab.Ay], () => ab.Ay.useReducedMotion),
        E = t === R.intl.string(T.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(sX.VT, { [sX.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(so.e, { shortcut: "tab", className: sX.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ss.o, {
                text: t,
                variant: sJ,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(sX.xM, { [sX.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            M(sX.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: d,
                className: sX.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: sJ, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: sX.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: sJ, tag: "span", className: sX.xM, children: t }),
                          M(sX.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let s2 = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: d,
                onInterrupt: f,
                escapeScopeRef: m,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: j = !1,
                hasPendingContext: b = !1,
                onDraftHasTextChange: y,
                modelSettings: k,
                onModelSettingsChange: w,
            } = e,
            A = n && !l && !r,
            N = (function (e) {
                let t = i.useContext(sB.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sq.ie)();
                        return (
                            (n.children = (0, sF.x7)(e)),
                            (n.selection = sV(n)),
                            (0, sU.a)({
                                editor: n,
                                chatInputType: sD.oU.GENERIC_RICH_TEXTAREA,
                                channel: sH,
                                windowContext: t,
                                previewMarkdown: !0,
                                updateState: (e, t, n) => {
                                    let { value: l, selection: r } = n;
                                    (void 0 !== l && (e.children = l), null != r && (e.selection = r), e.onChange());
                                },
                            }),
                            (function (e) {
                                let { onChange: t } = e;
                                e.onChange = () => {
                                    let n = [];
                                    for (let [t, l] of sm.VW.nodes(e, { at: [], match: sm.l5.isText }))
                                        for (let e of t.text.matchAll(l6.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sO.o.withMergedEntry(e, () =>
                                            sm.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    sz.b.textToVoid(
                                                        e,
                                                        { type: "hostInlineVoid", raw: t, children: [{ text: "" }] },
                                                        {
                                                            anchor: { path: l, offset: r },
                                                            focus: { path: l, offset: a },
                                                        },
                                                    );
                                            }),
                                        ),
                                        t());
                                };
                            })(n),
                            n
                        );
                    });
                return (i.useLayoutEffect(() => n.onChange(), [n]), n);
            })(rt.A.getDraft(t)),
            [S, I] = i.useState(() => sW(N));
        (0, sw.N$)(S);
        let E = i.useRef(S),
            [_, M] = i.useState(null),
            P = i.useCallback(() => {
                let e = sW(N);
                (e !== E.current && ((E.current = e), (0, sk.I)(t, e), I(e)),
                    M(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sm.ZF.isCollapsed(t)) return null;
                            let [n] = sm.VW.node(e, t.anchor.path);
                            return sm.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            L = i.useCallback((e) => sQ(N, e), [N]),
            $ = "" !== S.trim();
        i.useEffect(() => y?.($), [$, y]);
        let q = i.useRef(t);
        i.useLayoutEffect(() => {
            q.current !== t && ((q.current = t), sQ(N, rt.A.getDraft(t)));
        }, [N, t]);
        let D = (0, c.bG)([ab.Ay], () => ab.Ay.isSubmitButtonEnabled),
            [F, O] = i.useState(!1);
        i.useEffect(() => {
            s || O(!1);
        }, [s]);
        let {
                drafts: z,
                addFiles: U,
                pasteFiles: B,
                removeDraft: K,
                settled: H,
                takeRefs: V,
            } = (0, e7.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            W = (0, C.fc)(t),
            Q = (0, C.bE)(t),
            Z = i.useRef(Q);
        i.useEffect(() => {
            let e = Z.current;
            ((Z.current = Q), A && null != e && null != Q && Q !== e && sm.VW.focus(N));
        }, [Q, A, N]);
        let X = "" !== S.trim() || z.length > 0 || b || W,
            Y = A && X && H,
            [J, et] = i.useState(null);
        i.useEffect(() => {
            if (null == J) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => et(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [J]);
        let en = (0, sN.rU)(t),
            [el, er] = i.useState(null),
            [ea, ei] = i.useState(0),
            es = i.useMemo(() => (null != _ && A ? (0, sA.OG)(_, _.length) : null), [_, A]),
            eu = es?.start ?? null;
        i.useEffect(() => {
            null == eu ? er(null) : (0, sN.IP)(t);
        }, [eu, t]);
        let eo = eu === el ? null : es,
            ec = (function (e, t) {
                let n,
                    l,
                    r,
                    a,
                    s,
                    u = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                    { creator: o, collaborators: d } =
                        ((n = u?.id),
                        (l = u?.owner_user_id),
                        (r = (0, c.yK)(
                            [lE.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              lE.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, sE.Y_)(l), r.forEach(sE.Y_));
                        }, [l, r]),
                        (a = (0, c.bG)([nN.default], () => (null == l ? null : nN.default.getUser(l)), [l])),
                        (s = (0, c.yK)(
                            [nN.default],
                            () => r.map((e) => nN.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    f = (0, c.bG)([sS.default], () => sS.default.getId()),
                    m = null != u && (0, ee.pL)(u) ? u.guild_id : void 0,
                    h = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != m && null != h && sC.A.requestMembers(m, h, 100);
                    }, [m, h]),
                    (0, c.yK)(
                        [n0.Ay, n1.A, nN.default],
                        () => {
                            if (null == h) return [];
                            let e = null != m ? n1.A.getGuild(m) : null,
                                t = (t) => (0, sA.mO)(t, h, null != e ? n0.Ay.getNick(e.id, t.id) : null),
                                n = new Set(u?.collaborator_role_ids ?? []),
                                l = null != e && n.has(sI.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                r =
                                    null == e
                                        ? []
                                        : n0.Ay.getMemberIds(e.id)
                                              .map((e) => nN.default.getUser(e))
                                              .filter(
                                                  (r) =>
                                                      null != r &&
                                                      t(r) &&
                                                      (l ||
                                                          (n0.Ay.getMember(e.id, r.id)?.roles ?? []).some((e) =>
                                                              n.has(e),
                                                          ) ||
                                                          n2.$3({
                                                              permission: ev.xBc.MANAGE_GUILD,
                                                              user: r,
                                                              context: e,
                                                          })),
                                              ),
                                a = new Set();
                            return [...[...(null != o ? [o] : []), ...d].filter(t), ...r].filter(
                                (e) => !(e.id === f || e.bot || a.has(e.id)) && (a.add(e.id), !0),
                            );
                        },
                        [u, m, h, o, d, f],
                    )
                );
            })(t, eo?.text ?? null),
            ed = i.useMemo(() => (null == eo ? [] : (0, sA.l$)(ec, en, eo.text)), [eo, ec, en]),
            ef = eo?.text;
        i.useEffect(() => ei(0), [ef]);
        let em = ed.length > 0,
            eh = Math.min(ea, Math.max(0, ed.length - 1)),
            eg = i.useId(),
            ep = i.useCallback(
                (e) => {
                    let t = ed[e];
                    null != eo &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (sz.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                sz.b.insertText(e, `${n} `));
                        })(N, eo.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ed, eo, N],
            ),
            ex = i.useCallback(() => {
                if (!Y) return;
                let e = V(),
                    n = W
                        ? (function (e) {
                              let t = (0, C.K7)(e);
                              if (null == t || !(0, ni.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, C.C)(e);
                              return (
                                  (0, C.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eO.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (ns.set(i, s),
                                          (s.job = (0, ni.B)({
                                              capture: (t) => (0 === t ? l : (0, C.C)(e)),
                                              composite: (e) => tR(e, n),
                                              upload: (t) =>
                                                  (0, e0.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e0.n6)(e, t.id),
                                              send: (n) => (0, eO.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      no(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (ns.delete(i),
                                                          window.setTimeout(() => {
                                                              (no(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                d(S, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == s0 && (s0 = document.createElement("canvas").getContext("2d"));
                    let i = s0;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let u =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (u <= 0 || i.measureText(a).width <= u) return a;
                    let o = 0,
                        c = a.length;
                    for (; o < c;) {
                        let e = Math.ceil((o + c) / 2);
                        i.measureText(a.slice(0, e)).width <= u ? (o = e) : (c = e - 1);
                    }
                    let d = a.slice(0, o),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(s7(eA.current), eP.current, (0, sA.Lj)(S));
                ("" !== l && et(l), L(""), er(null));
            }, [Y, W, t, S, d, V, L]),
            ej = i.useCallback(
                (e) => {
                    (e.preventDefault(), ex());
                },
                [ex],
            ),
            eb = i.useCallback(() => {
                null == f || F || (O(!0), f());
            }, [f, F]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (t)
                        return (
                            window.addEventListener("keydown", e, !0),
                            () => window.removeEventListener("keydown", e, !0)
                        );
                    function e(e) {
                        var t, r;
                        "Escape" === e.key &&
                            !e.isComposing &&
                            (0, C.K7)(n)?.active !== !0 &&
                            !(0, G._c)(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, eY.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), a.current()));
                    }
                }, [t, n, l]));
        })({ active: s && null != f, projectId: t, scopeRef: m, onEscape: eb });
        let ey = null == v || "" !== S || !A || u || b ? null : v,
            ek = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ed.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), ei((eh + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ep(eh));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), er(eo?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, C.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, C.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && s && null != f) {
                        (e.preventDefault(), e.stopPropagation(), eb());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ey) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), L(ey));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ex());
                },
                [ex, g, s, f, eb, ey, L, em, ed.length, eh, ep, eo, t],
            ),
            ew = i.useCallback(
                (e) => {
                    A && B(e);
                },
                [A, B],
            );
        (0, sh.Vo)({
            event: ev.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ew(t);
            },
        });
        let eA = i.useRef(null),
            eN = i.useCallback(() => {
                let e = E.current;
                x?.((0, sA.Lj)(e), () => {
                    E.current === e && L("");
                });
            }, [x, L]),
            [eS, eC] = i.useState(0),
            [eI, eE] = i.useState(!1);
        i.useEffect(() => {
            if (0 === S.length) return void eE(!1);
            let e = s7(eA.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eC(t);
            }
            eE(!0);
            let t = setTimeout(() => eE(!1), s3);
            return () => clearTimeout(t);
        }, [S]);
        let e_ = i.useMemo(() => ({ "--custom-glow-x": `${eS}px` }), [eS]),
            eM = eI ? ` ${sX.EB}` : "",
            eR = u
                ? R.intl.string(T.default.qqlUiW)
                : r
                  ? R.intl.string(T.default.Z0hyNL)
                  : l
                    ? R.intl.string(T.default.GcFRaY)
                    : A
                      ? b
                          ? R.intl.string(T.default.knUjL3)
                          : W
                            ? R.intl.string(T.default["6rXxwa"])
                            : j
                              ? R.intl.string(T.default.IevBEw)
                              : R.intl.string(s ? T.default["0BJa/0"] : T.default.TEeU7z)
                      : R.intl.string(T.default.zZ9NgM),
            eP = i.useRef(0),
            eL = i.useRef(null),
            e$ = i.useCallback((e) => {
                if ((eL.current?.disconnect(), null == e)) return;
                eP.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eP.current = e.clientWidth;
                });
                (t.observe(e), (eL.current = t));
            }, []),
            eq = i.useId(),
            eD = i.useId(),
            eF = null != ey,
            eG = J ?? ey ?? eR,
            ez = "" === S && "" !== eG;
        return (0, a.jsxs)("form", {
            onSubmit: ej,
            className: sX.DA,
            children: [
                em
                    ? (0, a.jsx)(sL, {
                          id: eg,
                          projectId: t,
                          suggestions: ed,
                          selectedIndex: eh,
                          onHover: ei,
                          onSelect: ep,
                      })
                    : null,
                z.length > 0 || W
                    ? (0, a.jsxs)("div", {
                          className: sX.lN,
                          children: [
                              z.map((e) => (0, a.jsx)(e7.Nl, { draft: e, onRemove: K }, e.localId)),
                              W ? (0, a.jsx)(sj, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${sX.wg} ${sX.LP}${eM}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${sX.wg} ${sX.L3}${eM}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: sX.VA,
                    ref: eA,
                    children: [
                        (0, a.jsx)(s_.A, {
                            navId: "conjure-composer-attach",
                            disabled: !A,
                            buttonClassName: `${sX.Y0} ${sX.nu}`,
                            iconClassName: sX.Qu,
                            onAddFiles: U,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eN : void 0,
                        }),
                        ez
                            ? (0, a.jsx)("div", {
                                  ref: e$,
                                  className: sX.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(s1, { text: eG, offering: eF && null == J, typed: null != J }),
                              })
                            : null,
                        (0, a.jsx)(tY.A, { id: eD, children: R.intl.string(T.default.ldNl9x) }),
                        (0, a.jsx)(l6.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sf.A, {
                                editor: N,
                                containerClassName: o()(sX.sq, sY.dv),
                                className: sX.jp,
                                readOnly: !A,
                                canFocus: A,
                                onChange: P,
                                onBlur: () => M(null),
                                onKeyDown: ek,
                                onPaste: ew,
                                renderExtraElement: sZ,
                                "aria-labelledby": eD,
                                "aria-describedby": ez ? eq : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? eg : void 0,
                                "aria-activedescendant": em ? ((0, sM.aI)(eh) ?? void 0) : void 0,
                            }),
                        }),
                        ez ? (0, a.jsx)(tY.A, { id: eq, children: eR }) : null,
                        (0, a.jsx)("div", {
                            className: sX.Sz,
                            children:
                                s && null != f
                                    ? (0, a.jsx)(e1.m, {
                                          text: R.intl.string(T.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${sX.Y0} ${sX.$E}`,
                                              disabled: F,
                                              onClick: eb,
                                              "aria-label": R.intl.string(T.default.wiguT0),
                                              children: (0, a.jsx)(rl.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : k?.tierSettings != null && null != w
                                      ? (0, a.jsx)(sy.A, {
                                            settings: k.tierSettings,
                                            tiers: k.tiers,
                                            choices: k.choices,
                                            disabled: !A,
                                            onChange: w,
                                            className: `${sX.Y0} ${sX.$E}`,
                                            icon: (0, a.jsx)(sc.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        D
                            ? (0, a.jsxs)("div", {
                                  className: sX.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: sX.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: sX.rt,
                                          disabled: !Y,
                                          "aria-label": R.intl.string(T.default.rxW2cl),
                                          children: (0, a.jsx)(sd.SendMessageIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            ],
        });
    }),
    s3 = 1500;
function s7(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var s4 = n(709753),
    s5 = n(540338);
function s8(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tK.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var s6 = n(986109);
let s9 = i.createContext(null);
function ue(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(s9),
        [f, m] = i.useState(() => ab.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: f ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(s6.xk, { [s6.g5]: f, [s6.Qo]: s, [s6.q3]: u }),
        children: n,
    });
}
let ut = new Map();
function un(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let ul = "live_behind",
    ur = "conjureTipDismissals",
    ua = new Set(),
    ui = new Set(),
    us = 0;
function uu() {
    let e = iP.w.get(ur);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return ua.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uu().anchor[t]?.[e.id] === n;
        case "app":
            return uu().app[t]?.includes(e.id) === !0;
        case "forever":
            return uu().forever.includes(e.id);
    }
}
function uc(e) {
    return (ui.add(e), () => ui.delete(e));
}
function ud(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([lG.A], () => null != n && n.length > 0 && lB({ keys: n }, lG.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: R.intl.string(T.default.F2yVHg) }
        : null;
}
function uf(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0 ||
        null != e.clarification ||
        null != e.appBuildRequest ||
        null != e.restoreProposal ||
        null != e.publishScheduleProposal
    );
}
let um = [12e4];
var uh = n(292771);
function ug(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([ab.Ay], () => ab.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = f.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = o));
        let g = h.current !== u;
        if (((h.current = u), !g || l || null == s || null == i || null == a || null == c)) return;
        let p = i.width / Math.max(1, c.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - c.left}px, ${i.top - c.top}px) scale(${p})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${o}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let g = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, a.jsx)("div", {
            ref: d,
            className: uh.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uh.qd, e.leaving ? uh.dv : uh.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function up(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var ux = n(247171);
function uv(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: o()(ux.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(ux.gutter, ux[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: ux.content, children: i }),
        ],
    });
}
var uj = n(830205);
function ub(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uv, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: uj.aK,
        children: (0, a.jsxs)("div", {
            className: uj.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: uj.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uj.X8,
                          children: (0, a.jsx)(e1.m, {
                              text: R.intl.string(R.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tn.K, {
                                  "aria-label": R.intl.string(R.t.WAI6xu),
                                  icon: eW.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function uy(e) {
    let { projectId: t } = e,
        n = i.useContext(eU.bI);
    return (0, a.jsx)(ub, {
        icon: a9.ShieldIcon,
        children: R.intl.format(T.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eU.vL)(t, n.guildId));
            },
        }),
    });
}
var uk = n(443865),
    uw = n(716502);
function uA(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uv, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uw.Nr,
        children: (0, a.jsxs)("section", {
            className: uw.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uw.X8,
                          children: (0, a.jsx)(e1.m, {
                              text: R.intl.string(R.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tn.K, {
                                  "aria-label": R.intl.string(R.t.WAI6xu),
                                  icon: eW.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function uN(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uw.DD,
        children: t,
    });
}
function uS(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uw.rf,
        children: t,
    });
}
function uC(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uw.o1, children: t });
}
var uI = n(95635);
function uE(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eK.A)(t, n);
    return (0, a.jsx)(ub, {
        icon: uI.UploadIcon,
        onDismiss: l,
        children: R.intl.format(T.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let u_ = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && up(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(uy, { projectId: n });
        },
    },
    {
        id: ul,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: a } = e;
            return null == n ||
                r ||
                null == l ||
                l.publishing ||
                !l.isUpdate ||
                null != l.disabledReason ||
                a < 12e4 ||
                (null != n.publishCta && iE(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(ul)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(uE, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || up(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(uA, {
                icon: uk.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(uN, { children: R.intl.string(T.default.OJlbhX) }),
                    (0, a.jsx)(uS, { children: R.intl.string(T.default["3vJBni"]) }),
                    (0, a.jsx)(uC, {
                        children: (0, a.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: R.intl.string(T.default["U/bLzU"]),
                            disabled: null == n,
                            onClick: () => {
                                (l?.(), n?.());
                            },
                        }),
                    }),
                ],
            });
        },
    },
];
var uM = n(817921);
function uT(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eU.Ay)(e),
                    u = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    f = (function (e, t) {
                        let [n, l] = i.useState(() => Date.now());
                        return (
                            i.useEffect(() => {
                                if (null == e) return;
                                let r = (function (e, t, n, l) {
                                    let r = t.map((t) => e + t);
                                    if (r.some((e) => e > n && e <= l)) return 0;
                                    let a = r.filter((e) => e > l);
                                    return a.length > 0 ? Math.min(...a) - l : null;
                                })(e, t, n, Date.now());
                                if (null == r) return;
                                let a = setTimeout(() => l(Date.now()), r);
                                return () => clearTimeout(a);
                            }, [e, t, n]),
                            n
                        );
                    })(d, r),
                    m = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, tK.BL)(n)) return n;
                                if (!(0, tK.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || uf(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === un(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = ud(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([lG.A], () => b > 0 && null == lG.A.getSettings(e), [b, e]),
                    k = (0, s4.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tK.Ji)(t)) || !!(0, tK.B0)(t, t.lastIndexOf(a))) &&
                        (null == m || !uf(m)) &&
                        null == s8(t) &&
                        null == j &&
                        !y &&
                        0 === k.length,
                    idleMs: null != d ? Math.max(0, f - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = ut.get(`${e}:${n}`);
                        return null != l ? un(t, l, u) : null;
                    },
                    isDismissed: (t) => uo(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, um);
            i.useSyncExternalStore(uc, () => us);
            let { callout: s, hint: u } = (function (e, t, n) {
                    let l = { callout: null, hint: null };
                    for (let r of [...e].sort((e, t) => t.priority - e.priority)) {
                        if (null != l.callout && null != l.hint) break;
                        if (n(r)) continue;
                        let e = r.resolve(t);
                        null != e &&
                            ("hint" === e
                                ? (l.hint ??= { tip: r, presentation: e })
                                : (l.callout ??= { tip: r, presentation: e }));
                    }
                    return l;
                })(e, a, a.isDismissed),
                o = [s, u].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of o)
                        0 !== a.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                ut.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                o.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || uo(e, t, n)) return;
                                          let l = uu();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  ua.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  iP.w.set(ur, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  iP.w.set(ur, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  iP.w.set(ur, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (us++, ui.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(u_, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(ue, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: uM.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(ug, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uR = n(52133),
    uP = n(732159),
    uL = n(888366),
    u$ = n(862026),
    uq = n(291192);
function uD(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, u$.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uq.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uq.Sp,
                children: [
                    (0, a.jsx)("span", { className: uq.q3 }),
                    (0, a.jsxs)("span", {
                        className: uq.g8,
                        children: [
                            (0, a.jsx)(uL.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uq.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uq.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(nL.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, K.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uP.u, {
                                                                    ...t,
                                                                    title: R.intl.string(T.default["i+xjZM"]),
                                                                    subtitle: R.intl.string(T.default.fMBZmD),
                                                                    confirmText: R.intl.string(T.default.i5f3Uo),
                                                                    onConfirm: e,
                                                                }),
                                                            ),
                                                        ))
                                                      : s.onPress();
                                              },
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    null != r.note
                        ? (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var uF = n(345942),
    uO = n(468689),
    uG = n(576705);
function uz(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            R.intl.format(n ? T.default.esEGL5 : T.default["XrN+Bg"], {
                onOpen: () => uO.A.open(t, ev.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uU = n(976860);
function uB(e) {
    return (0, c.bG)([eT.Ay, ad.A], () => {
        let t = eT.Ay.getProject(e);
        return null == t ? "" : (ad.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uK = n(951465),
    uH = n(369455);
function uV(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: u } = e,
        o = uB(s),
        d =
            null ==
            (i = (0, c.bG)([eT.Ay, n1.A], () => {
                let e = eT.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (n1.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        f = (0, c.cf)([eT.Ay, eG.A, n1.A, uG.A], () => {
            let e = eT.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(ee.q7.AUTOMOD) === !0 ||
                    eG.A.getPublishStatus(s)?.surface === "automod",
                n = n1.A.getGuild(e.guild_id),
                l = null != n && uG.A.can(ev.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(v.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            R.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? T.default.ESu5eZ
                        : T.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? T.default.ZnQW4S
                          : T.default.ev23Cw
                      : t.update
                        ? r
                            ? T.default["LuS8a/"]
                            : T.default.gQzuLC
                        : l
                          ? T.default.KORRGl
                          : r
                            ? T.default["/npn7F"]
                            : T.default.MOrR29),
                {
                    name: o,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, uF.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, a.jsx)(uz, { guildId: f.guildId, update: u.update })
                : !f.automod && u.update && null != u.published_revision
                  ? (0, a.jsx)(uW, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function uW(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eU.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [eG.A, eT.Ay],
                    () => {
                        let r = eG.A.getPublishStatus(e),
                            a = eT.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "guild" === a.install_scope &&
                                (0, eT.jf)(a),
                        };
                    },
                    [e, l, t.update, n],
                );
            return null != r
                ? { state: "sent", sent: r }
                : a && null != l && null != n
                  ? { state: "offer", publishedRevision: l, fallbackGuildId: n }
                  : null;
        })(t, n);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  " ",
                  "sent" === l.state
                      ? R.intl.format(T.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    tW.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uH.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uU.pX)(ev.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : R.intl.format(T.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eT.Ay.getProject(e),
                                        a = null == r ? null : (0, eU.KL)(r, l);
                                    return null == r || null == a
                                        ? null
                                        : {
                                              projectId: e,
                                              guildId: a,
                                              applicationId: r.application_id,
                                              projectName: r.name,
                                              publishedRevision: n,
                                          };
                                })(t, l);
                                null != e && (0, uK.A)(e);
                            },
                        }),
              ],
          });
}
var uQ = n(73153),
    uZ = n(505527),
    uX = n(930390),
    uY = n(521981),
    uJ = n(491182),
    u0 = n(438729),
    u1 = n(895597),
    u2 = n(448368),
    u3 = n(837528),
    u7 = n(941308),
    u4 = n(715628),
    u5 = n(752636),
    u8 = n(9842),
    u6 = n(589022),
    u9 = n(967198),
    oe = n(531685);
let ot = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function on(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function ol(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function or(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = ol(e, t),
        a = e.codePointAt(t);
    if (
        (null != a &&
            (8205 === a ||
                (a >= 65024 && a <= 65039) ||
                (a >= 127995 && a <= 127999) ||
                (a >= 768 && a <= 879) ||
                (a >= 8400 && a <= 8447) ||
                (a >= 65056 && a <= 65071) ||
                (a >= 917536 && a <= 917631))) ||
        8205 === r
    )
        return !0;
    if (on(r) && on(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && on(ol(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oa(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([ab.Ay], () => ab.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        u = a;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && or(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let o = r && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (m.current = 0),
                (f.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    r = Math.min(Math.max(n, 0), t.length),
                                    a = t.length - r;
                                if (a <= 0) return r;
                                if (a > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, a / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && ot.has(e.charAt(l - 1));) l--;
                                    return ot.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && or(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
            );
    }, [o]),
        i.useEffect(() => {
            if (o)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var oi = n(624479),
    os = n(890377),
    ou = n(92446),
    oo = n(957565),
    oc = n(180227);
function od(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: o()(oc.QE, { [oc.Rn]: t }),
              children: (0, a.jsx)(aV.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          aV.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function of(e) {
    return oo.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: R.intl.string(R.t.JrGD7E), icon: oi.CopyIcon, onClick: () => (0, oo.C)(e) }]
        : [];
}
function om(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: R.intl.string(T.default.CXtLD2),
                          tooltip: R.intl.string(T.default.DOb1HM),
                          icon: os.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: R.intl.string(T.default.urZwpN),
                          icon: eW.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(od, { groupStart: n, actions: [...r, ...of(t)] });
}
function oh(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: R.intl.string(T.default.H8Jfhu), icon: ta.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: ou.BugIcon, onClick: r }];
    return (0, a.jsx)(od, { groupStart: n, actions: [...i, ...of(t), ...s] });
}
let og = (0, ah.createChannelRecord)({ id: "conjure-builder", type: ev.rbe.DM }),
    op = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ox(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: o()(oc.Yq, { [oc.x1]: t }), children: e });
}
function ov(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oj = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function ob(e, t, n) {
    let { content: l } = (0, u7.A)(e, oj),
        r = i.useMemo(() => ((0, l6.aW)(e.content) ? (0, uY.z2)(st.U, e, oj).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: og, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(u0.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, u4.A)(s, r);
}
function oy(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, u3.m)(e, og, t.usernameProfile, l),
        u = (0, u3.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([u9.A], () => u9.A.getGuildId()),
        d = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = nN.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(u6.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: o ?? void 0,
    };
}
function ok(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, l6.aW)(n.content)
                          ? (0, uY.z2)(st.U, n, e).content
                          : (0, uY.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oc.GV,
                              children: [
                                  (0, a.jsx)(h.x, {
                                      className: oc.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          t,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, c.cf)(
            [nA.A],
            () => ({
                isReplyAuthorBlocked: nA.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nA.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, aK.X4)(n),
        f = (0, aK.X4)(t),
        m = oy(n);
    return (0, a.jsx)(u2.A, {
        repliedAuthor: d,
        baseAuthor: f,
        baseMessage: t,
        channel: og,
        referencedMessage: { state: u8.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function ow(e) {
    let { message: t, author: n } = e,
        l = oy(t);
    return (0, a.jsx)(u1.Ay, {
        message: t,
        channel: og,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function oA(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, sE.vm)(l),
        c = i.useMemo(() => (0, aK.FT)(o, null), [o]),
        d = i.useMemo(() => (0, lA.W1)(t), [t]),
        f = d?.body ?? t,
        m = (0, sA.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, am.Ay)({ channelId: og.id, content: f, author: o });
            return (0, af.rh)({ ...e, timestamp: ov(n, e.timestamp), state: ev.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              oN,
              {
                  message: h,
                  author: c,
                  content: f,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: u,
              },
              m,
          );
}
function oN(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = ob(t, l);
    return (0, a.jsx)(uJ.A, {
        className: oc.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(ow, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, a.jsxs)("div", {
                      className: oc.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oc.GV,
                              children: [
                                  (0, a.jsx)(h.x, {
                                      className: oc.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oc.WO, children: o }),
                      ],
                  }),
        childrenAccessories: ox(i, "" !== l),
        childrenButtons: (0, a.jsx)(om, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oS(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: d,
        } = e,
        { text: f, revealing: m } = oa(t, { streaming: (0, c.bG)([oe.A], () => o && oe.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, aK.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, sE.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lA.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, am.Ay)({ channelId: og.id, content: v?.body ?? r.content, author: x });
            return (0, af.rh)({ ...e, id: r.id, timestamp: ov(r.createdAt, e.timestamp), state: ev.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: og.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, am.Ay)({ channelId: og.id, content: "", author: op })),
        k = i.useMemo(
            () =>
                (0, af.rh)({
                    ...y,
                    timestamp: ov(n, y.timestamp),
                    state: ev.cmJ.SENT,
                    ...(null != b ? { type: ev.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        A = i.useMemo(
            () => (0, u5.A)({ message: k, channel: og, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = ob(w, f, oc.OS);
    return (0, a.jsxs)("div", {
        className: oc.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(uJ.A, {
                className: oc.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(ok, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: ox(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: oc.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var oC = n(981879);
function oI(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, af.rh)(
                    { ...(0, am.Ay)({ channelId: og.id, content: "" }), id: `conjure:${t}`, state: ev.cmJ.SENT },
                    {
                        reactions: [
                            {
                                emoji: { id: n.emojiId, name: n.emoji, animated: !0 === n.animated },
                                me: !1,
                                me_burst: !1,
                                count: 1,
                                burst_count: 0,
                            },
                        ],
                    },
                ),
            [t, n],
        );
    return (
        i.useEffect(() => {
            let e = { id: n.emojiId, name: n.emoji };
            function t() {
                (uQ.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: og.id,
                    messageId: l.id,
                    users: [op],
                    emoji: e,
                    reactionType: uZ.v.NORMAL,
                }),
                    uQ.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: og.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: uZ.v.NORMAL,
                    }));
            }
            return (
                t(),
                uQ.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    uQ.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: oC.H,
            children: (0, a.jsx)(uX.A, {
                message: l,
                channel: og,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oE = n(442433);
n(775443);
var o_ = n(616e3),
    oM = n(155899);
function oT(e) {
    let { onSelect: t, onClose: n = oE.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": R.intl.string(R.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(ew.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(ew.Dr, {
                          id: "restore-version",
                          label: R.intl.string(T.default.H8Jfhu),
                          icon: ta.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(ew.Dr, { id: "view-trace", label: "View Trace", icon: ou.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oR(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: o,
            secretRequestStatus: d,
            settingsFloating: f = !1,
            isNewest: m = !1,
            onPickIdea: h,
            onApprovePlan: g,
            onRestoreVersion: p,
        } = e,
        x = n.message,
        v =
            null != p
                ? "assistant" !== x.role || null == x.sourceSha
                    ? null
                    : {
                          sha: x.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(x.created_at).toISOString(),
                          subject: x.content,
                      }
                : null,
        j = null != v && null != p ? () => oP(v, p) : void 0,
        b =
            ((t =
                F() && "assistant" === x.role && (0, tK.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [o_.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : o_.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != b
                ? () =>
                      (function (e, t) {
                          for (let n of (($ = { projectId: e, traceId: t }), [...L])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(ue, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = j),
                          (l = y),
                          void (0, oE.jA)(t, (e) => (0, a.jsx)(oT, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(oS, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oh, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(si, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: s,
                interrupted: !0 === x.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: x.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : x.ideas,
                pickedIdeaIds: null == x.ideas ? void 0 : u,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: d,
                settingsRequest: n.active || f ? void 0 : x.settingsRequest,
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, tK.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: m,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              oP(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function oP(e, t) {
    (0, oM.F)({ onConfirm: () => t(e) });
}
var oL = n(288539),
    o$ = n(677683),
    oq = n(677690),
    oD = n(159711);
function oF(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([o$.A], () => o$.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nw.A, nN.default, nA.A],
                () => {
                    let e = t?.status === "pinned" ? nw.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nk.m1)(e, nN.default, nA.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = R.intl.string(T.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t1, {
              title: s,
              children: (0, a.jsx)(v.E, {
                  className: oD.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? R.intl.formatToPlainString(T.default.gKe6Lw, { channelName: i ?? "" })
                          : R.intl.string(T.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t1, { title: s, children: (0, a.jsx)(oO, { projectId: l }) });
}
function oO(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: o,
            pin: f,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [nJ.Ay, uG.A],
                        () =>
                            null == t
                                ? []
                                : nJ.Ay.getChannels(t)
                                      [nJ.vM].map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ev.rbe.GUILD_VOICE && uG.A.can(ev.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, u] = i.useState(!1),
                [o, d] = i.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == f || null == m) return;
                    (u(!0), d(!1));
                    let t = await (0, oq.pk)(f.id, m);
                    (u(!1), t ? (0, oq.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = i.useCallback(() => (0, oq.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: a,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, nV.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: oD.r,
        children: (0, a.jsxs)(iN.B, {
            gap: 12,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: R.intl.string(T.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(nx.Z, {
                          selectionMode: "single",
                          label: R.intl.string(T.default.peOi1H),
                          placeholder: R.intl.string(T.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? R.intl.string(T.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: R.intl.string(T.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: oD.o,
                    children: [
                        (0, a.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: R.intl.string(T.default.Iw0l8o),
                            disabled: u,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: R.intl.string(T.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: f,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function oG(e, t, n) {
    return (0, a.jsx)(oL.A, { userId: e, content: `@${t}` }, n);
}
function oz(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, sE.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nN.default], () => (null == l ? null : nN.default.getUser(l)), [l]),
                a = (0, ap.tx)(r),
                s = uB(e),
                u =
                    (0, c.bG)([n1.A], () => (null == t.guild_id ? null : n1.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? R.intl.string(T.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? R.intl.format(T.default.Lwsrhg, { app: s, server: u })
                        : R.intl.format(T.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? R.intl.format(T.default.mT7EQG, { app: s, server: u })
                        : R.intl.format(T.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? R.intl.format(T.default["4LVIeo"], { app: s, server: u })
                        : R.intl.format(T.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? R.intl.format(T.default["4VQfid"], { channel: e, server: u })
                        : R.intl.format(T.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return R.intl.format(T.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return R.intl.string(T.default.UGAfl9);
            }
        })(t, n, oG),
        r = ud(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(oF, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(l3, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let oU = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nu.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, l6.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oA, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(se.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(sb, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(oI, { messageId: u.id, reaction: u.agentReaction })
                                                  : null,
                                          ],
                                      })
                                    : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, l9.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oS, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(se.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sa, {
                            projectId: l,
                            steps: u.steps,
                            segment: n.segment,
                            active: n.active,
                            closed: n.closed,
                            segmentDurationMs: n.segmentDurationMs,
                            reportsDuration: n.reportsDuration,
                            hostsChecklist: n.hostsChecklist,
                            turnActive: n.turnActive,
                            checklistSuperseded: n.checklistSuperseded,
                            durationMs: null != u.finished_at ? u.finished_at - u.created_at : void 0,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oS, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(uV, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oS, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(oz, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(uD, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sa, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(ue, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sa, {
                            projectId: l,
                            steps: oB,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(oR, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uR.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uR.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, n) {
                    if (t === n) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === n.id &&
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.user_id === n.user_id &&
                                t.agentReaction === n.agentReaction &&
                                t.attachments === n.attachments &&
                                t.disposition === n.disposition
                            );
                        case "prose":
                            return t.created_at === n.created_at && t.attachments === n.attachments;
                        case "publishNotice":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.publishNotice === n.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.projectEvent === n.projectEvent
                            );
                        case "contextBoundary":
                            return t.contextSwitch === n.contextSwitch;
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, uR.A)(e.replyTo, t.replyTo) &&
                (0, uR.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oB = [],
    oK = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    oH = new WeakMap();
function oV(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function oW(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let oQ = ["wheel", "touchstart", "pointerdown", "keydown"];
function oZ(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let oX = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            liveClarificationId: m,
            onRestoreVersion: h,
            scrollerRef: g,
            stickToBottomRef: p,
            pinned: x,
            onUnpin: b,
            handleRef: y,
            onShowsLatestChange: k,
        } = e,
        w = i.useRef(null),
        [A, N] = i.useState(null),
        S = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [C, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let _ = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        M = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)),
        P = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()?.id),
        L = i.useMemo(() => {
            let e;
            return (function (e, t) {
                let n = [],
                    l = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let r = e[l];
                            null != r &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, tB.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = oH.get(r);
                    if (null != i && i.superseded === e && i.liveCard === a) {
                        n.push(...i.planned);
                        continue;
                    }
                    let s = (function (e, t, n) {
                        let l = [];
                        function r(e, t) {
                            l.push({ row: e, groupable: { key: e.key, ...t } });
                        }
                        if ("user" === e.role)
                            return (
                                r(
                                    { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                    { actor: "user", authorId: e.user_id, boundary: void 0 },
                                ),
                                l
                            );
                        if ("publish_notice" === e.kind) {
                            let t = `${e.render_id}:publish`;
                            return (
                                r(
                                    { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        if ("context_boundary" === e.kind) {
                            let t = `${e.render_id}:contextBoundary`;
                            return (
                                r(
                                    { kind: "contextBoundary", key: t, message: e, groupStart: !1 },
                                    { actor: null, boundary: t },
                                ),
                                l
                            );
                        }
                        if ("project_event" === e.kind) {
                            let t = `${e.render_id}:projectEvent`;
                            return (
                                r(
                                    { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        let a = !(0, tK.BL)(e),
                            i = rr({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, tB.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, tB.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && oK.test(n.prose.content)) f = !0;
                            else if (null != n.prose && n.prose.key !== i.replyKey) {
                                let t = `${e.render_id}:${n.key}`;
                                r(
                                    {
                                        kind: "prose",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        content: n.prose.content,
                                        hostsAttachments:
                                            "streamed" === i.attachmentsHost &&
                                            n.prose.key === s &&
                                            null != e.attachments,
                                        streaming: a && n.index === d && !n.hasWork,
                                    },
                                    { actor: "assistant", boundary: t },
                                );
                            }
                            (n.hasWork || n.hasTodos) &&
                                r(
                                    {
                                        kind: "activity",
                                        key: `${e.render_id}:work-${n.index}`,
                                        message: e,
                                        groupStart: !1,
                                        segment: n.index,
                                        active: n.index === c,
                                        closed: n.index !== c,
                                        ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                        reportsDuration: n.index === o,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: tH(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = oK.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || f || m
                                ? r(
                                      {
                                          kind: "interrupted",
                                          key: `${e.render_id}:interrupted`,
                                          message: e,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : u.every((e) => !e.hasTodos) &&
                                  (e.todos?.length ?? 0) > 0 &&
                                  r(
                                      {
                                          kind: "legacyTodos",
                                          key: `${e.render_id}:todos`,
                                          message: e,
                                          groupStart: !1,
                                          checklistSuperseded: t,
                                      },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (i.showsClosingMessage && !m) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!a &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest)) ||
                                "standalone" === i.attachmentsHost)
                        ) {
                            let t = `${e.render_id}:closing`;
                            r(
                                {
                                    kind: "closing",
                                    key: t,
                                    message: e,
                                    groupStart: !1,
                                    active: a,
                                    attachmentsHost: i.attachmentsHost,
                                    content: i.closingContent,
                                    sideReply: "side_reply" === e.kind,
                                },
                                {
                                    actor: "assistant",
                                    boundary: t,
                                    separate: null != e.proposal || null != e.clarification || "side_reply" === e.kind,
                                },
                            );
                        }
                        return l;
                    })(r, e, a);
                    (oH.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
                }
                let r = (function (e) {
                    let t,
                        n,
                        l = [],
                        r = null,
                        a = !1,
                        i = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (r = null), (t = void 0), (a = !1), (i = !1), (n = void 0));
                            continue;
                        }
                        let e = !a || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                        (e && ((r = s.actor), (t = s.authorId), (a = !0), (i = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(n.map((e) => e.groupable));
                return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        let l = e[n].publishCta;
                        if (null != l) return iI(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, M)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = i_.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), i_.set(t, n)), n);
                      })),
                m,
            );
        }, [n, M, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [q, D] = i.useState(null),
        F = (function (e, t, n) {
            if (null == t) return oV(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : oW(e, t.endKey, t.end - 1) + 1,
                a = oW(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), oV(e, a, r));
        })($, q, x),
        O = i.useRef(F),
        G = i.useRef($),
        z = i.useRef(L),
        U = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useRef(null),
        V = i.useRef(!1),
        W = i.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = V.current ? oZ(w.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [g]);
    i.useLayoutEffect(() => {
        let e = g.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            V.current = !1;
        };
        for (let n of oQ) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of oQ) e.removeEventListener(n, t);
        };
    }, [g]);
    let Q = i.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = w.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect().top,
                l = t.querySelectorAll("[data-conjure-row-key]"),
                r = 0,
                a = l.length - 1,
                i = null;
            for (; r <= a;) {
                let e = (r + a) >> 1;
                l[e].getBoundingClientRect().bottom > n ? ((i = l[e]), (a = e - 1)) : (r = e + 1);
            }
            let s = i?.dataset.conjureRowKey;
            U.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [g]),
        Z = i.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), oV(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), oV(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? oV(e, i, t.end) : null;
            })(G.current, O.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, eO.loadOlderHistory)(t) : null != n && D(n);
        }, [g, p, t]);
    i.useImperativeHandle(
        y,
        () => ({
            handleScroll() {
                (Q(),
                    D((e) => {
                        let t = O.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Z());
            },
            recordAnchor: Q,
            showLatest(e) {
                ((V.current = !1), (B.current = e ?? null), D(null));
            },
            snapshot() {
                let e = U.current;
                return null == e ? null : { window: O.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!G.current.includes(n.key)) return !1;
                (b(), (U.current = n));
                let l = O.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = g.current?.getScrollerNode(),
                        t = w.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else D(t);
                return !0;
            },
        }),
        [Q, Z, b, g],
    );
    let X = i.useRef(null),
        Y = i.useCallback(
            (e) => {
                var n;
                let l;
                ((X.current = null), (V.current = !1));
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (b(), D(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let a = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, eO.loadOlderHistory)(t) && (X.current = e);
                    return;
                }
                (b(),
                    (B.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    D(((n = G.current), oV(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [_, b, t],
        );
    (i.useEffect(() => {
        let e = X.current;
        null != e && Y(e);
    }, [L, Y]),
        i.useLayoutEffect(() => {
            if (null == A) return;
            let e = A.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), p.current)) return void g.current?.scrollToBottom();
                        (W(), Q());
                    }
                });
            return (t.observe(A), () => t.disconnect());
        }, [A, W, Q, g, p]));
    let J = null == F.endKey;
    (i.useEffect(() => k?.(J), [J, k]),
        i.useLayoutEffect(() => {
            ((O.current = F), (G.current = $), (z.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                l = w.current,
                r =
                    null !=
                    (function (e, t, n) {
                        if (0 === n.length) return null;
                        let l = n[n.length - 1],
                            r = "assistant" === l.role && null != l.proposal ? l.render_id : null,
                            a = e.current;
                        return (
                            (e.current = { projectId: t, planId: r }),
                            a?.projectId === t && null != r && r !== a.planId ? r : null
                        );
                    })(H, t, n);
            if (null != e && null != l) {
                let t = U.current;
                if (r && p.current && null != oZ(l)) (b(), D(O.current), (V.current = !0), W());
                else if (p.current) g.current?.scrollToBottom();
                else if (V.current) W();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = B.current;
                ((B.current = null), n?.(), Q(), Z());
            }
            K.current = new Set($);
        }, [t, n, L, $, F.start, F.end, g, p, b, W, Q, Z]));
    let ee = i.useMemo(() => s8(n), [n]),
        et = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let r of e)
                        if ("assistant" === r.role) {
                            if ("plan_implemented" === r.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != r.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(r.render_id, { version: l, superseded: !1 }),
                                (n = r.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        en = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = new Set();
                    for (let l = e.length - 1; l >= 0; l--) {
                        let r = e[l];
                        if ("user" === r.role) {
                            n.add(r.content.trim());
                            continue;
                        }
                        if (null == r.ideas) continue;
                        let a = new Set();
                        for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && a.add(e.id);
                        t.set(r.render_id, a);
                    }
                    return t;
                })(n),
            [n],
        ),
        el = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map();
                    for (let n of e)
                        "user" !== n.role ||
                            t.has(n.id) ||
                            t.set(n.id, {
                                id: n.id,
                                content: n.content,
                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                createdAt: n.created_at,
                            });
                    return t;
                })(n),
            [n],
        ),
        er = n.at(-1),
        ea =
            (er?.role !== "assistant" || null == er.awaitingUser || null == er.secretRequest
                ? null
                : (0, tK.BL)(er)
                  ? er.awaitingUser
                  : null) ?? void 0,
        ei = (0, c.bG)([lG.A], () => lG.A.getSettings(t)?.secrets, [t]),
        es = (0, s4.WT)(t),
        eu = i.useMemo(() => (0, lz.Mv)(n, ei), [n, ei]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: o()(s6.x7, s6.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: s6.Ub, children: (0, a.jsx)(j.y, {}) }),
            });
        let e = "unavailable" === l ? T.default.Td4Sf4 : T.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: s6.x7,
            children: (0, a.jsx)(ue, { role: "assistant", children: (0, a.jsx)(oS, { content: R.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(s9.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: S,
            className: s6.x7,
            children: [
                L.slice(F.start, F.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            oU,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && C === n.id,
                                currentUserId: "user" === e.kind ? P : void 0,
                            },
                            e.key,
                        );
                    let l = n === er;
                    return (0, a.jsx)(
                        oU,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? el.get(n.in_reply_to) : void 0,
                            onJumpTo: Y,
                            planVersion: et.get(n.render_id),
                            pickedIdeaIds: en.get(n.render_id),
                            secretRequestAwaiting: l ? ea : void 0,
                            secretRequestStatus: eu.get(n.render_id),
                            settingsFloating: n.id === f,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === ee ? d : void 0,
                            onRestoreVersion: h,
                        },
                        e.key,
                    );
                }),
                J
                    ? es.map((e) =>
                          (0, a.jsx)(
                              ue,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(oS, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(s5.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ea && J
                    ? (0, a.jsx)(ue, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(oS, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: R.intl.string(T.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, a.jsx)(uT, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var oY = n(731084),
    oJ = n(823376),
    o0 = n(187447);
function o1(e) {
    let { activity: t, id: n } = e,
        l = (0, tU.j)(),
        { text: r, revealing: s } = oa(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: o0.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tO.Ch, {
                ref: u,
                className: o0.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(sr.PT, o0.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aN.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var o2 = n(53659);
function o3(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: u = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: f = !1,
            spoken: m,
            onSpokenChange: h,
        } = e,
        g = i.useRef(null),
        p = i.useId(),
        [x, j] = i.useState(null),
        b = (0, oY.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: u,
            controlling: c,
            publishPending: d,
            publishing: f,
        }),
        y = R.intl.string(b),
        k = b === oY.kx["0"],
        [w, A] = i.useState(m ?? y),
        N = (0, tU.j)();
    (l || (0, oY.E4)(y, w) || (!N && !k)) && w !== y && A(y);
    let S = i.useRef(y);
    (i.useEffect(() => {
        S.current = y;
    }, [y]),
        i.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let C = i.useRef(null),
        I = i.useRef(w);
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = i.useRef(k),
        _ = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, oY.E8)(I.current) && A(S.current));
    }, [k]),
        i.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, oY.E8)(I.current) ? _.current + 1 : 0), A((0, oY.Ov)(_.current)))
                    : S.current !== I.current
                      ? A(S.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, oY.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [N]));
    let M = null != t && "" !== t.text,
        P = t?.session ?? null,
        L = M && null != P && x === P,
        $ = i.useCallback(() => {
            M && null != P && j((e) => (e === P ? null : P));
        }, [M, P]),
        q = i.useCallback(() => j(null), []);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: q,
        renderPopout: () => (0, a.jsx)(o1, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(tW.D, {
                innerRef: g,
                className: o()(o2.hF, M && o2.Xd),
                "aria-label": R.intl.string(
                    r
                        ? T.default.qqlUiW
                        : b === T.default.j8tmjK
                          ? T.default.j8tmjK
                          : k
                            ? oY.kx["0"]
                            : T.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": R.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: o2.bl,
                        children: (0, a.jsx)(oJ.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: o2.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: N
                            ? (0, a.jsx)(ss.o, {
                                  ref: C,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: oY.vg,
                                  delay: null,
                                  className: o2.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: o2.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let o7 = { second: 1e3, minute: 6e4 };
function o4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = o7[t];
            return (
                !(function t() {
                    let a = Date.now();
                    (l(a), (n = setTimeout(t, r - ((((a - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var o5 = n(719374);
function o8(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = o4(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: o5.$,
        "data-conjure-turn-timer": !0,
        children: (0, rm.C7)(l),
    });
}
function o6(e) {
    let { startedAt: t } = e,
        n = o4(t, "minute");
    return (0, a.jsx)(tY.A, { role: "timer", children: (0, rm.Us)(n) });
}
var o9 = n(885574),
    ce = n(242779),
    ct = n(436804);
function cn(e) {
    return e.toLocaleString();
}
function cl(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: ct.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ct.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cn((0, ce.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cn(n.input_tokens),
                    " in \xb7 ",
                    cn(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cn(n.cache_creation_input_tokens)} cache write \xb7 ${cn(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cr(e) {
    let { project: t } = e,
        n = (0, ce.wU)(t.compaction),
        l = (0, ce.wU)(t.classifier),
        r = (0, ce.wU)(t.image),
        i = (0, ce.wV)(t.orchestrator, t.codegen),
        s = (0, ce.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: ct.si,
        role: "dialog",
        "aria-label": R.intl.string(T.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: ct.Q$,
                children: (0, a.jsxs)("div", {
                    className: ct.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cn((0, ce.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cl, { label: R.intl.string(T.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cl, { label: R.intl.string(T.default.ANCEo3), usage: n }),
            (0, a.jsx)(cl, { label: R.intl.string(T.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cl, { label: R.intl.string(T.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ct.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ce.sj)(s) ? "\u2014" : `${Math.round(100 * (0, ce.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ca(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cr, { project: t }),
        children: (e) =>
            (0, a.jsx)(tW.D, {
                innerRef: n,
                className: ct.Y$,
                "aria-label": R.intl.string(T.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(o9.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ci = n(990250);
function cs(e) {
    let { queued: t } = e,
        n = R.intl.string(T.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: ci.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: ci.wx,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tO.Ch, {
                className: ci.XG,
                children: (0, a.jsx)("ul", {
                    className: ci.p_,
                    children: t.map((e) => (0, a.jsx)(cu, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cu(e) {
    let { content: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1),
        [s, u] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || u(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, a.jsx)("li", {
              className: ci.AS,
              children: (0, a.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: R.intl.string(T.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: ci.AS,
              children: [
                  (0, a.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: ci.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nL.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: R.intl.string(l ? T.default.nEMoeN : T.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function co(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cs, { queued: t }),
        children: (e) =>
            (0, a.jsx)(tW.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: R.intl.formatToPlainString(T.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cc = n(997421);
function cd(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: d,
            compacting: f,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: p,
        } = e,
        x = (0, O.Zv)(t),
        j = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, oY.E8)(e) || e === R.intl.string(T.default.mKK6wB) || e === R.intl.string(T.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, oY.uc)(h),
        A = null != s,
        N = s ?? (n ? l : void 0),
        S = n || r || A || !0 === m;
    return (0, a.jsxs)("div", {
        className: cc.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cc.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || u || x || j
                        ? (0, a.jsx)(o3, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: A,
                              recalling: u,
                              controlling: x,
                              publishPending: j && S,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != N ? (0, a.jsx)(o8, { startedAt: N }) : null,
                ],
            }),
            null != N ? (0, a.jsx)(o6, { startedAt: N }) : null,
            0 === p.length ? null : (0, a.jsx)(co, { queued: p, className: o()(cc.BP, cc.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cc.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(ca, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": R.intl.formatToPlainString(T.default["tCo+ZM"], { status: (0, oY.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cc.XF,
                      children: (0, oY.Db)(g),
                  }),
        ],
    });
}
var cf = n(698638),
    cm = n(608711);
let ch = [R.intl.string(T.default["9w+Chc"]), R.intl.string(T.default.WAvmdq), R.intl.string(T.default.SKsrzl)];
function cg(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        { projectId: f, restoreState: m, onRestoreVersion: h, onImportProject: g, escapeScopeRef: p } = e,
        x = (0, c.bG)([lE.A], () => lE.A.getMessages(f), [f]),
        j = (0, c.bG)([eO.default], () => eO.default.getConnState(f), [f]),
        b = (0, c.bG)([lE.A], () => lE.A.getProjectUsage(f), [f]),
        y = (0, c.bG)([lE.A], () => lE.A.getThinkingActivity(f), [f]),
        k = (0, c.bG)([lE.A], () => lE.A.isCompacting(f), [f]),
        w = (0, c.bG)([lE.A], () => lE.A.isSaving(f), [f]),
        A = lM(f),
        N = (0, c.bG)([lN.A], () => lN.A.getModelSettings(f), [f]),
        S = i.useRef(null),
        C = i.useRef(null),
        I = i.useRef(null),
        _ = i.useRef(null),
        {
            stickToBottomRef: M,
            pinned: P,
            atBottom: L,
            unpin: $,
            releasePinHold: q,
            showsLatest: D,
            showsLatestRef: F,
            handleShowsLatestChange: O,
            updatePin: z,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [r, a] = i.useState(!0),
                s = i.useRef(!1),
                u = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                o = i.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = i.useState(!0),
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of oQ) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of oQ) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let u = r > 1 || !f.current;
                (a((e) => (!u === e ? e : !u)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: u,
                releasePinHold: o,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(C),
        U = i.useCallback(() => {
            function e() {
                let e = S.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (q(), F.current ? e() : I.current?.showLatest(e));
        }, [q, F]),
        B = i.useCallback(() => {
            (z(), I.current?.handleScroll());
            let e = _.current;
            null != e && (e.position = M.current ? null : (I.current?.snapshot() ?? null));
        }, [z, M]),
        K = i.useContext(Q.A) === f;
    i.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: X.A.getProjectView(f).chatScroll };
        return ((_.current = e), () => (0, Z.g7)(f, { chatScroll: e.position }));
    }, [K, f]);
    let H = i.useRef(!K);
    (i.useLayoutEffect(() => {
        if (H.current || 0 === x.length) return;
        H.current = !0;
        let e = X.A.getProjectView(f).chatScroll;
        null != e && I.current?.restore(e) !== !0 && null != _.current && (_.current.position = null);
    }, [x, f]),
        i.useLayoutEffect(() => {
            let e = S.current;
            if (null == e) return;
            let t = C.current?.getScrollerNode(),
                n = e.getBoundingClientRect().width,
                l = t?.getBoundingClientRect().height,
                r = new ResizeObserver((t) => {
                    let r = !1;
                    for (let a of t)
                        if (a.target === e) {
                            let e = a.contentRect.width;
                            if (e === n) continue;
                            ((n = e), (r = !0));
                        } else {
                            let e = a.contentRect.height;
                            if (e === l) continue;
                            ((l = e), (r = !0));
                        }
                    r && (M.current ? C.current?.scrollToBottom() : I.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [M]),
        i.useEffect(() => {
            (0, eO.ensureConnection)(f);
        }, [f]),
        (0, re.E1)(f, (0, tU.j)()));
    let V = (0, G.rt)(f),
        W = (function (e) {
            let t = (0, eU.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([n1.A], () => (null == n ? null : (n1.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: R.intl.format("channel" === s ? T.default["1cm4fj"] : T.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(f),
        Y = (function (e) {
            let t = (0, c.bG)([l4.A], () => l4.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : l5.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = l7.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? R.intl.format(T.default["bw/n4C"], { helpdeskURL: e })
                            : R.intl.format(T.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: R.intl.formatToPlainString(T.default.GHgG2B, { percent: l, limit: n }) };
        })(f),
        J =
            ((l = (0, c.bG)([lC.A], () => lC.A.getFailure(f))),
            (r = i.useCallback(() => (0, lI.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: R.intl.format(T.default.Up6Ssw, { reason: l }),
                      retry: { text: R.intl.string(T.default["ywA+ET"]), onClick: r },
                  }),
        ee = (0, c.bG)([lC.A], () => lC.A.getSetupStartedAt(f), [f]),
        et = i.useCallback(
            (e, t) => {
                (0, eO.sendUserMessage)(f, e, t);
            },
            [f],
        ),
        en = i.useCallback(
            (e, t, n) => {
                let l = n ?? et;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l((0, lA.BL)({ annotations: V.annotations, metaComment: e, context: V.context }), t),
                      (0, G.mB)(f));
            },
            [V, et, f],
        ),
        el = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ns)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eO.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = ns.get(e);
                            (ns.delete(e), no(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                lE.A.isThinking(f)) &&
                (0, eO.interruptTurn)(f);
        }, [f]),
        er = i.useCallback((e) => (0, nd.RQ)(f, e.implementation_prompt), [f]),
        [ea, ei] = (function (e) {
            let [t, n] = i.useState(() => rn(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rn(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        es = i.useCallback(() => et(R.intl.string(T.default["t5CN3+"])), [et]),
        eu = i.useCallback((e, t, n) => (0, nd.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        eo = i.useCallback((e) => (0, lS.X)(f, e), [f]),
        ec = i.useCallback((e) => (0, e0.vX)(f, e), [f]),
        ed = i.useCallback((e) => (0, e7.gn)(f, "chat", Array.from(e), ec), [f, ec]),
        ef = i.useCallback(() => (0, nd.RQ)(f, R.intl.string(T.default.Zc7gML)), [f]),
        em = m?.status === "restoring",
        eh = "open" === j && !em,
        eg = x[x.length - 1],
        ep = null != eg && "assistant" === eg.role && null != eg.proposal,
        [ex, ev] = i.useState(null),
        ej = i.useMemo(
            () =>
                (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (null == n.clarification || 0 === n.clarification.questions.length) continue;
                        let l = n.clarificationAt ?? n.settled_at;
                        for (let n = t + 1; n < e.length; n++)
                            if ("user" === e[n].role && (null == l || e[n].created_at > l)) return null;
                        return n.clarification;
                    }
                    return null;
                })(x),
            [x],
        ),
        eb = null != ej && ej.id !== ex ? ej : null,
        ey = i.useCallback(() => {
            null != eb && ev(eb.id);
        }, [eb]),
        [ek, ew] = i.useState(null),
        eA = (function (e) {
            let [t, n] = i.useState(null),
                l = i.useRef(null),
                r = i.useCallback((e) => {
                    ((l.current = e), n(e));
                }, []),
                a = t?.projectId === e ? t : null,
                s = i.useCallback(
                    (t, n) =>
                        r({
                            projectId: e,
                            request: {
                                id: `manual:${e}:${Date.now()}`,
                                summary: R.intl.string(T.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                u = i.useCallback(() => r(null), [r]),
                o = i.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: a?.request ?? null, open: s, close: u, sent: o };
        })(f),
        eN = eg?.appBuildRequest != null && (0, tK.BL)(eg) && eg.appBuildRequest.id !== ek ? eg.appBuildRequest : null,
        eS = eA.request ?? (null == eb ? eN : null),
        eC = null == eA.request ? eb : null,
        eI = null != eS && eS === eA.request,
        { close: eE, sent: e_ } = eA,
        eM = eA.request?.id,
        eR = i.useCallback(() => {
            eI ? eE() : null != eS && ew(eS.id);
        }, [eS, eI, eE]),
        eP = i.useCallback(
            (e) => {
                (null != eM && e_(eM),
                    (0, E.P0)({
                        text: R.intl.formatToPlainString(T.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eM, e_],
        ),
        eL = (0, c.bG)([lG.A], () => lG.A.getSettings(f), [f]),
        [e$, eq] = i.useState(null),
        eD = lQ(),
        eF =
            null != eg &&
            ((t = eg.id),
            (s = (0, lz.Mv)(x, eL?.secrets)),
            (u = lZ(x)),
            x.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tK.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !lX(e.settingsRequest, eL, eD.has(e.id)))),
            )),
        eG =
            null != eg &&
            "assistant" === eg.role &&
            null != eg.settingsRequest &&
            null == eg.secretRequest &&
            (0, tK.BL)(eg) &&
            eg.id !== e$ &&
            ((n = eg.settingsRequest),
            (o = n.keys ?? []),
            null != eL &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eL.schema.find((t) => t.key === e);
                    return null != t && lU.has(t.type);
                })) &&
            lB(eg.settingsRequest, eL) &&
            !eF
                ? eg
                : null,
        ez = null == eA.request ? eG : null,
        eB = ez?.settingsRequest ?? null,
        eK = i.useCallback(() => {
            null != eG && eq(eG.id);
        }, [eG]),
        eH = null != eB,
        [eV, eQ] = i.useState(null),
        eZ = eC?.id ?? eS?.id ?? ez?.id ?? (A ? "scope-setup" : void 0),
        eX = null != eb || null != eS || null != eG || A;
    i.useLayoutEffect(() => {
        let e = C.current?.getScrollerNode(),
            t = eV?.firstElementChild;
        if (null == eV || null == e || !(0, eY.vq)(t, HTMLElement) || null == eZ) return;
        function n() {
            M.current && C.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eV.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eV, eZ, C, M]);
    let eJ = (0, c.bG)([lE.A], () => lE.A.hasLoadedHistory(f), [f]),
        e2 = (function (e) {
            let t = lM(e),
                n = (0, c.bG)([eT.Ay], () => null != eT.Ay.getProject(e), [e]),
                l = (0, c.bG)([lE.A], () => lE.A.hasLoadedHistory(e), [e]),
                r = (0, c.bG)([lE.A], () => lE.A.getMessages(e), [e]),
                a = (0, c.bG)([eO.default], () => eO.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, l_.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(f),
        e3 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eJ,
            historyUnavailable: (0, c.bG)([lE.A], () => lE.A.isHistoryUnavailable(f), [f]),
            connState: j,
        }),
        e4 = "loading" === e3 && 0 === x.length,
        e5 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return ch[e % ch.length];
        }, [f]),
        e8 = ep ? R.intl.string(T.default.Zc7gML) : "greeting" === e3 && 0 === x.length ? e5 : null,
        e6 = i.useMemo(() => {
            for (let e = x.length - 1; e >= 0; e--) {
                let t = x[e];
                if ("assistant" === t.role && !(0, tK.BL)(t)) return t;
            }
        }, [x]),
        e9 = null != e6,
        te = i.useMemo(() => x.filter((e) => "user" === e.role && "queued" === e.disposition), [x]),
        tt = null != e6 ? (0, l8.S)(e6) : void 0,
        tl = ep && eh ? ef : void 0,
        tr = i.useCallback(() => (0, nd.RQ)(f, R.intl.string(T.default.EMgIuY)), [f]),
        [ta, ti] = i.useState(null),
        [ts, tu] = i.useState(e9);
    (ts !== e9 && (tu(e9), e9 || ti(null)),
        i.useEffect(() => {
            if (!e9) return;
            let e = C.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ti(null)
                        : ti(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e9, e6?.steps, D]));
    let to = D ? ta : "bottom",
        tc = i.useMemo(() => (null != e6 ? (0, tV.b9)(e6.steps) : ""), [e6]),
        td = i.useMemo(() => (null != e6 ? ((0, tB.lt)(e6.steps) ?? e6.todos) : void 0), [e6]),
        tf = e6?.provisionalTodo,
        tm = null != e6 && tH(e6),
        th = i.useMemo(() => {
            var e;
            return null != e6 ? ((e = e6.steps), rv((0, tB.Jf)(e, !0).tasks)) : void 0;
        }, [e6]);
    return (0, a.jsxs)("section", {
        ref: S,
        "data-conjure-chat": !0,
        className: cm.TE,
        children: [
            eh
                ? (0, a.jsx)(tz.A, {
                      title: R.intl.string(T.default.gy7byi),
                      description: R.intl.string(T.default["dkv/WO"]),
                      icons: cf.ir,
                      onDrop: ed,
                  })
                : null,
            (0, a.jsx)(nr, {
                onJumpToActivity: U,
                line: tc,
                placement: e9 && "top" === to ? "top" : null,
                todos: td,
                todosLive: tm,
                provisionalTodo: tf,
                agents: th,
            }),
            (0, a.jsxs)("div", {
                className: cm.JX,
                children: [
                    (0, a.jsx)(tO.Ch, {
                        ref: C,
                        onScroll: B,
                        scrollbarGutter: e4 ? "both-edges" : "stable",
                        className: [cm.N$, L ? null : cm.hB, eH ? cm.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(l6.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(oX, {
                                projectId: f,
                                messages: x,
                                emptyState: e3,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eC?.id,
                                onPickIdea: eh ? er : void 0,
                                onAskForIdeas: eh ? es : void 0,
                                draftHasText: ea,
                                onApprovePlan: eh ? tr : void 0,
                                onRestoreVersion: em || e9 ? void 0 : h,
                                scrollerRef: C,
                                stickToBottomRef: M,
                                pinned: P,
                                onUnpin: $,
                                handleRef: I,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cm.NJ,
                        children: (0, a.jsx)(cd, {
                            projectId: f,
                            thinking: e9,
                            turnStartedAt: tt,
                            restoring: em,
                            remixStartedAt: ee,
                            recalling: e4,
                            thinkingActivity: y,
                            compacting: k,
                            saving: w,
                            projectUsage: b,
                            connState: j,
                            queued: te,
                        }),
                    }),
                    A
                        ? (0, a.jsx)("div", { ref: eQ, className: cm.B5, children: (0, a.jsx)(lF, { projectId: f }) })
                        : null,
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eQ,
                              className: eH ? `${cm.B5} ${cm.J9}` : cm.B5,
                              children:
                                  null != eC.install_scope_switch
                                      ? (0, a.jsx)(
                                            lO,
                                            {
                                                projectId: f,
                                                clarification: eC,
                                                offer: eC.install_scope_switch,
                                                onKept: ey,
                                            },
                                            eC.id,
                                        )
                                      : (0, a.jsx)(
                                            lw,
                                            {
                                                projectId: f,
                                                clarification: eC,
                                                onSubmit: eh ? eu : void 0,
                                                onDismiss: ey,
                                            },
                                            eC.id,
                                        ),
                          }),
                    null == eS
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eQ,
                              className: cm.B5,
                              children: (0, a.jsx)(
                                  ny,
                                  { projectId: f, request: eS, canSend: eh, onDismiss: eR, onSent: eI ? eP : void 0 },
                                  eS.id,
                              ),
                          }),
                    null == eB
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eC && null == eS ? eQ : void 0,
                              className: cm.B5,
                              children: (0, a.jsx)(
                                  l3,
                                  { askId: ez?.id, projectId: f, request: eB, onDismiss: eK },
                                  ez?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cm.Jx,
                children: [
                    (0, a.jsx)(nr, {
                        onJumpToActivity: U,
                        line: tc,
                        placement: e9 && "bottom" === to ? "bottom" : null,
                        todos: td,
                        todosLive: tm,
                        provisionalTodo: tf,
                        agents: th,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cm.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: R.intl.formatToPlainString(T.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: R.intl.string(T.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(T.default["/zOv9+"]),
                                      onClick: () => (0, G.mB)(f),
                                  }),
                              ],
                          }),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: cm.qB,
                              children: (0, a.jsx)(tG.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: J.message,
                                  action: J.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cm.Db,
                              children: [
                                  (0, a.jsx)(tG.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: cm.jU,
                                      children: (0, a.jsx)(e1.m, {
                                          text: R.intl.string(R.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tn.K, {
                                              "aria-label": R.intl.string(R.t.WAI6xu),
                                              icon: eW.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: W.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: cm.qB,
                              children: (0, a.jsx)(tG.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, a.jsx)(
                        s2,
                        {
                            projectId: f,
                            escapeScopeRef: p,
                            canSend: eh,
                            running: e9,
                            restoring: em,
                            onSend: en,
                            hasPendingContext: V.annotations.length > 0,
                            onInterrupt: eh ? el : void 0,
                            onUploadFile: ec,
                            onImport: g,
                            onSendToOtherProjects: eX ? void 0 : eA.open,
                            onApprove: tl,
                            suggestion: e8,
                            questionOpen: eX,
                            modelSettings: N,
                            onModelSettingsChange: eo,
                            onDraftHasTextChange: ei,
                            inputLocked: A,
                            aiPaused: Y?.blocked === !0,
                        },
                        e2,
                    ),
                ],
            }),
        ],
    });
}
var cp = n(761508),
    cx = n(933294),
    cv = n(207438),
    cj = n(683438),
    cb = n(721507);
function cy(e, t) {
    return String(e).padStart(t, "0");
}
function ck(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cy(l.getHours(), 2)}:${cy(l.getMinutes(), 2)}:${cy(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cy(l.getMilliseconds(), 3)}` : r;
}
var cw = n(667931);
let cA = {
        op: "Operation",
        model: "Model",
        tool: "Tool",
        setup: "Setup",
        worktree: "Git worktree",
        sandbox: "Sandbox",
        build: "Build",
        platform: "Platform",
        other: "Other",
    },
    cN = { running: "Running", ok: "Done", error: "Failed" };
function cS(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cC(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cE(e) {
    return cC(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c_ = ["Arguments", "Result", "Usage", "Details"];
function cM(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cT(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cR(e) {
    let t = (0, cw.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cw.lp)(e) ? "interrupted" : "still running";
}
function cP(e) {
    return [ck(new Date(e.started_at).toISOString()) ?? "", cI(e.spans.length), (0, cw.Sj)((0, cw.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cL(e) {
    let t = (0, cw.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cw.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c$(r, "in")),
                (l.output += c$(r, "out")),
                (l.cacheRead += c$(r, "cache_read")),
                (l.cacheWrite += c$(r, "cache_write")),
                (l.costUsd += c$(r, "cost_usd"))));
    }
    let r = cw.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c$(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cq = n(738188),
    cD = n(430993),
    cF = n(364840),
    cO = n(224640),
    cG = n(20742);
let cz = { collapsed: new Set(), revealed: new Set() };
var cU = n(872892);
let cB = {
    op: cU.Q,
    model: cU.i3,
    tool: cU.dH,
    setup: cU.kc,
    worktree: cU.Qx,
    sandbox: cU.QH,
    build: cU.F1,
    platform: cU.Op,
    other: cU.fv,
};
function cK(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cI(t.calls, "model call"),
                      `${cS(t.input)} in`,
                      `${cS(t.output)} out`,
                      `${cS(t.cacheRead)} cache read`,
                      `${cS(t.cacheWrite)} cache write`,
                      cT(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: cU.M1,
        children: [
            (0, a.jsx)("div", {
                className: cU.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${cU.DJ} ${cB[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: cU.o1,
                children: cw.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cC(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: cU.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${cU.nf} ${cB[e]}` }),
                                (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cA[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "body-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: l,
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            null == n
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function cH(e) {
    return `conjure-perf-trace-${e}`;
}
function cV(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: cU.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${cU.p0} ${s + u > 85 ? cU.EU : cU.jh}`,
                children: i,
            }),
        ],
    });
}
function cW(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? tJ._ : eN.a,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, a.jsxs)(tW.D, {
        tag: "div",
        role: "treeitem",
        id: cH(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${cU.$y} ${r ? cU.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: cU.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(tW.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: cU.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: cU.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: cU.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${cU.nf} ${cB[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: cU.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: cU.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: cU.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(cq.WarningIcon, { size: "xs", color: "currentColor", className: cU.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(cV, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${cU.M0} ${cU.Nh}`
                    : t.running
                      ? `${cU.M0} ${cU.rF}`
                      : `${cU.M0} ${cB[t.category]}`,
                duration: cE(t),
            }),
        ],
    });
}
function cQ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(tW.D, {
        tag: "div",
        role: "treeitem",
        id: cH(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${cU.$y} ${l ? cU.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: cU.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: cU.ai,
                        children: (0, a.jsx)(tJ._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: cU.U9 }),
                    (0, a.jsx)("span", { className: `${cU.nf} ${cU.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: cU.MQ,
                        children: cI(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(cV, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${cU.M0} ${cU.ab} ${cU.dL}`,
                duration: cC(t.totalMs),
            }),
        ],
    });
}
function cZ(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: cU._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: cU.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${cU.nf} ${cB[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cM("Start", `+${cC(e.start)}`), cM("Duration", cE(e))];
                      e.count > 1
                          ? t.push(
                                cM("Calls", String(e.count)),
                                cM("Longest call", cC(e.maxMs)),
                                cM("Spread over", cC(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cM("Self time", cC(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cM("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cM("Notes", l.join(", "))),
                          null != e.span.error && t.push(cM("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var a, i;
                          let l =
                                  ((a = e),
                                  "args" === (i = t) || i.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === i || "result_chars" === i
                                        ? "Result"
                                        : "model" === a.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? cT(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cM(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c_.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, a.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, a.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: cU.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(v.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(v.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: cU.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(v.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            tabularNumbers: !0,
                                                            selectable: !0,
                                                            children: n,
                                                        }),
                                              ],
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          },
                          t ?? "timing",
                      );
                  }),
              ],
          });
}
function cX(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cL(t), [t]);
    return (0, a.jsx)(cK, { stats: n });
}
function cY(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cw.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? cz : (0, cw.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cw.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cw.x7)(t)), l((n) => (0, cw._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, cw.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cw.IE)(t, e);
                        null != n && l((e) => (0, cw.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cw.IE)(t, e);
                        null != n && l((e) => (0, cw.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, cw.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, cw.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cw.hB)(t));
                }, [t]),
                g = u.find((e) => e.key === r);
            return {
                rows: u,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
                toggle: o,
                reveal: c,
                expandSubtree: d,
                select: a,
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: f, expandSubtree: m } = n,
        h = (0, cw.dj)(t),
        g = i.useMemo(() => (0, cw.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) f(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(cH(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, o, u, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(cD.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: cU.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cR(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cP(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${cI(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(cX, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: cU.KE,
                        children: [
                            (0, a.jsx)(d.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : cH(u),
                        className: cU.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: cU.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: cU.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: cU.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${cU.io} ${(e / h) * 100 > 85 ? cU.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cC(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, a.jsx)(
                                          cW,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(cQ, { row: e, extent: h, selected: e.key === u, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(cF.j, { children: (0, a.jsx)(cZ, { node: s }) }),
        ],
    });
}
function cJ(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([o_.A], () => o_.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(cO.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(cG.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(cD.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(cY, { trace: i }),
        ],
    });
}
let c0 = { running: cU.Vf, ok: cU.mo, error: cU.Sr };
function c1(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${cU.Om} ${c0[t]}`, role: "img", "aria-label": cN[t] });
}
function c2(e, t) {
    (0, K.openModal)((n) => (0, a.jsx)(cJ, { ...n, projectId: e, traceId: t }));
}
function c3(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => c2(t, n.id), [t, n.id]);
    return (0, a.jsxs)(tW.D, {
        className: cU.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: cU.sU,
                children: [
                    (0, a.jsx)(c1, { status: (0, cw.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: cU._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cR(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cP(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function c7(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            let e = JSON.stringify({
                kind: "conjure.timing_traces",
                version: 1,
                project_id: t,
                exported_at: new Date().toISOString(),
                traces: n,
            });
            (0, cb.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ey.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ek.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ew.rX, {
                    children: (0, a.jsx)(ew.Dr, {
                        id: "export",
                        label: "Export as JSON",
                        disabled: 0 === n.length,
                        action: r,
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(tn.K, {
                ...e,
                buttonRef: l,
                icon: aU.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function c4(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([o_.A], () => o_.A.getTimingTraces(t), [t]),
        [l, r] = i.useState(""),
        s = i.useMemo(() => {
            let e;
            return "" === (e = l.trim().toLowerCase())
                ? n
                : n.filter((t) =>
                      (function (e) {
                          let t = [e.name];
                          for (let n of e.spans)
                              for (let e of (t.push(n.name, n.error ?? ""),
                              [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                                  t.push(String(e));
                          return t.join(" ").toLowerCase();
                      })(t).includes(e),
                  );
        }, [n, l]),
        u = i.useMemo(() => [...s].reverse(), [s]),
        o = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(cL);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cw.BF.map((e) => ({
                            category: e,
                            ms: n((t) => t.categories.find((t) => t.category === e)?.ms ?? 0),
                        })),
                        busyMs: n((e) => e.busyMs),
                        model: {
                            calls: n((e) => e.model.calls),
                            input: n((e) => e.model.input),
                            output: n((e) => e.model.output),
                            cacheRead: n((e) => e.model.cacheRead),
                            cacheWrite: n((e) => e.model.cacheWrite),
                            costUsd: n((e) => e.model.costUsd),
                        },
                    };
                })(s),
            [s],
        );
    return 0 === n.length
        ? (0, a.jsxs)("div", {
              className: cU.Ie,
              children: [
                  (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: cU.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: cU.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: cU.fH,
                              children: (0, a.jsx)(cj.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(c7, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tO.Ch, {
                      className: cU.XG,
                      children: [
                          (0, a.jsx)(cK, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: cU.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(c3, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function c5(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function c8(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function c6(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function c9(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function de(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dt(e) {
    return R.intl.string("preview" === e ? T.default["2yLYlG"] : T.default.eiAi57);
}
let dn = ["all", "preview", "stable", "web"];
function dl(e) {
    switch (e.reason) {
        case "local":
            return R.intl.string(T.default.mUeKML);
        case "unconfigured":
            return R.intl.string(T.default.bGefb5);
        case "unauthorized":
            return R.intl.string(T.default.KLx6Bb);
        default:
            return null != e.detail
                ? R.intl.formatToPlainString(T.default.t09Q6q, { detail: e.detail })
                : R.intl.string(T.default["t+tG59"]);
    }
}
function dr(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : R.intl.formatToPlainString(T.default["XO/bN4"], {
              p50: c5(e.memory_p50_bytes ?? 0),
              p999: c5(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let da = {
    db: () => T.default["7l+DFG"],
    db_preview: () => T.default.FAuffi,
    runtime: () => T.default["Gkl+ab"],
    runtime_preview: () => T.default.ynpJzv,
    bot: () => T.default["5/i0cj"],
    bot_preview: () => T.default.m2jsnw,
};
var di = n(911608),
    ds = n(177427);
function du(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: ds.KE,
        children: [
            (0, a.jsx)("div", {
                className: ds.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(j.y, { type: j.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: R.intl.string(T.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: R.intl.formatToPlainString(T.default.INVO50, { time: c9(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: R.intl.string(T.default.oKEgiu), onClick: l }),
        ],
    });
}
function dc(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: ds.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: ds.Gf, children: t }),
            n,
        ],
    });
}
function dd(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: ds.N8,
        children: [
            (0, a.jsxs)("div", {
                className: ds.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: ds.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: ds.kS,
                        children: [
                            s,
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function df(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: ds.N8,
        children: [
            (0, a.jsxs)("div", {
                className: ds.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(di.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? ds.dh : void 0,
            }),
        ],
    });
}
function dm(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dd, {
            label: R.intl.string(T.default.SXP7pD),
            value: R.intl.string(T.default.E5hKVi),
            hint: dl(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dd, {
            label: R.intl.string(T.default.SXP7pD),
            value: "\u2014",
            hint: R.intl.string(T.default.AGvoMJ),
        });
    let l = dr(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dd, { label: R.intl.string(T.default["H/X+FI"]), value: c8(n.cpu_ms) }),
            null != l && (0, a.jsx)(dd, { label: R.intl.string(T.default.lmFmMO), value: l }),
        ],
    });
}
function dh(e) {
    let { analytics: t } = e,
        n = R.intl.string(T.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dc, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: dl(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? da[t] : null) ? R.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dc, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: R.intl.string(T.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dd,
                          {
                              label: n,
                              value: R.intl.formatToPlainString(T.default["w/2voO"], { cpu: c8(t.cpu_ms) }),
                              hint: dr(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dg = n(678708),
    dp = n(414499),
    dx = n(714800),
    dv = n(81466),
    dj = n(424383),
    db = n(664121),
    dy = n(816943),
    dk = n(268791),
    dw = n(514042),
    dA = n(872351),
    dN = n(708988),
    dS = n(150934),
    dC = n(417270);
let dI = "Restart Agent",
    dE = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function d_(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dM(e, t) {
    return { label: e, value: null != t && "" !== t ? c9(t) : "Unknown", icon: "calendar" };
}
function dT(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dR(e, t, n, l) {
    let [r, a] = dE[n.status];
    return { label: e, value: `${dT(n.bytes)} of ${dT(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dP(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = c9(e.at);
    return e.ok
        ? { label: "Last Save", value: `OK (${e.status ?? "saved"})`, hint: t, icon: "save", state: "ok" }
        : {
              label: "Last Save",
              value: "Failed",
              hint: null != e.error ? `${t} \xb7 ${e.error}` : t,
              icon: "save",
              state: "error",
          };
}
let dL = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d$(e) {
    let t = `container ${d_(e.local)} \xb7 remote ${d_(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dL[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${c6(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${c6(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${c6(n)} Ahead, ${c6(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dq = ["main", "wip"];
var dD = n(400154);
let dF = {
        checkout: dg.FolderIcon,
        edit: m.PencilIcon,
        remote: dp.h,
        commits: dx.e,
        calendar: dv.CalendarIcon,
        save: dj.L,
        objects: db.R,
        download: dy.$,
        size: dk.$,
        file: dw.FileIcon,
    },
    dO = {
        ok: [lY.y, to.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cq.WarningIcon, to.A.colors.ICON_FEEDBACK_WARNING],
        error: [sp.a, to.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dA.z, to.A.colors.ICON_MUTED],
        behind: [dN.M, to.A.colors.ICON_MUTED],
    };
function dG(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([o_.A], () => o_.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cv.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let a = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? a.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && a.push(["Read stopped early; some rows were not read", !0])
                    : a.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && a.push(["Remote repository missing", !0]),
                    "error" === e && a.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && a.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${c9(r)}`,
                    ...a.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: a.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, a.jsxs)(dc, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: dD.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [dP(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dP(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : c6(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dq.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d$))
                        : l.push(
                              { label: "Main", value: d_(e.heads.main), icon: "remote" },
                              { label: "WIP", value: d_(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? c6(e.commits) : "Unknown", icon: "commits" },
                            dM("Oldest Commit", e.oldest),
                            dM("Newest Commit", e.newest),
                            dP(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${c6(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${c6(t.loose)} loose (${c5(t.looseBytes)}) \xb7 ${c6(t.packed)} packed in ${n} (${c5(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${c6(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let a = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${c6(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dR(
                                    "Repository Size",
                                    "size",
                                    e.localBytes,
                                    "Local copy: every commit, but only the file versions this container has read.",
                                ),
                            ),
                        null === e.largestFile
                            ? l.push({
                                  label: "Largest File",
                                  value: "Unknown",
                                  hint: "The scan for it didn't finish in time.",
                                  icon: "file",
                              })
                            : null != e.largestFile &&
                              l.push(
                                  dR("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = dF[r],
                        [u, o] = null != i ? dO[i] : [null, void 0];
                    return (0, a.jsx)(
                        dd,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: to.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function dz(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([o_.A], () => o_.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cv.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = o_.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cv.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                uQ.h.dispatch({
                                    type: "CONJURE_RESTART_AGENT_RESULT",
                                    projectId: e,
                                    outcome: "timed_out",
                                    reason: "No new agent instance answered within 60 s",
                                    observedAt: new Date().toISOString(),
                                }),
                            Math.max(5e3, r + 6e4 - Date.now()),
                        );
                    return () => {
                        (clearInterval(n), clearTimeout(l));
                    };
                }, [e, r]));
            let u = i.useCallback(() => (0, cv.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dI,
                },
                restart: u,
            };
        })(t),
        f = i.useCallback(() => {
            (0, I.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, a.jsxs)("div", {
        className: dD.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: dD.nM,
                children: [
                    (0, a.jsx)(dS.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dC.RetryIcon,
                        text: dI,
                        loading: l,
                        disabled: l,
                        onClick: f,
                    }),
                ],
            }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/normal",
                role: "status",
                color: "failed" === n.phase ? "text-feedback-critical" : "text-muted",
                children: (function (e) {
                    switch (e.phase) {
                        case "idle":
                            return "Starts a new agent instance; the container keeps running.";
                        case "pending":
                            return "Asking the worker to restart.";
                        case "restarting":
                            return "Restarting; waiting for a new instance to answer.";
                        case "restarted":
                            return `Restarted \xb7 new instance since ${c9(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${c9(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function dU(e, t) {
    return (0, a.jsx)(dd, {
        label: e,
        value: R.intl.formatToPlainString(T.default.yHJxuP, { count: c6((0, ce.aM)(t)) }),
        hint: `${c6(t.input_tokens)} in \xb7 ${c6(t.output_tokens)} out \xb7 ${c6(t.cache_read_input_tokens)} cache read`,
    });
}
function dB(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        f,
        m,
        h,
        { projectId: g, status: p, fetchState: x, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: A,
            turnRunning: N,
            handleForceCompaction: S,
            handleForceCompactionOverride: C,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: P,
        } = ((t = (0, c.bG)([o_.A], () => o_.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([o_.A], () => o_.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([o_.A], () => o_.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([o_.A], () => o_.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([o_.A], () => o_.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([lE.A], () => lE.A.isThinking(g), [g])),
        (o = i.useCallback(() => (0, cv.Lj)(g), [g])),
        (f = i.useCallback(() => (0, cv.Lj)(g, !0), [g])),
        (m = i.useCallback(() => (0, cv.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: o,
            handleForceCompactionOverride: f,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: dD.Mf,
        children: [
            (0, a.jsx)(du, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, a.jsx)(dc, {
                title: R.intl.string(T.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: R.intl.string(T.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dd, {
                                      label: R.intl.string(T.default["9nqym2"]),
                                      value: c6((0, ce.a7)(E.cost_usd)),
                                      hint: R.intl.formatToPlainString(T.default.NCdUIh, { count: c6(E.turns) }),
                                  }),
                                  dU(R.intl.string(T.default.xtxP0e), E.orchestrator),
                                  dU(R.intl.string(T.default["9Sj3SX"]), E.codegen),
                                  dU(R.intl.string(T.default.ANCEo3), (0, ce.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dd, {
                                          label: R.intl.string(T.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${c6(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dc, {
                title: R.intl.string(T.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: R.intl.string(T.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  dU(R.intl.string(T.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dd, {
                                      label: R.intl.string(T.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, ce.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dc, {
                title: R.intl.string(T.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(df, {
                                      label: R.intl.string(T.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: c6,
                                  }),
                                  (0, a.jsx)(dd, {
                                      label: R.intl.string(T.default.mRbSns),
                                      value: `${c6(y.tokensBefore)} \u{2192} ${c6(y.tokensAfter)}`,
                                      hint: R.intl.formatToPlainString(T.default.Vq3skS, {
                                          count: c6(y.retainedMessages),
                                          time: c9(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? R.intl.formatToPlainString(T.default.GMLCNv, { ceiling: c6(P) })
                                      : R.intl.string(T.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dd, {
                            label: R.intl.string(T.default["4BX5KK"]),
                            value: `${c6(k.projected)} / ${c6(k.threshold)}`,
                            critical: !0,
                            hint: R.intl.formatToPlainString(T.default["6ngCax"], { time: c9(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: dD.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: R.intl.string(T.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: S,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return R.intl.string(T.default.wox6Ev);
                                    if ("pending" === e) return R.intl.string(T.default.OcPHQ1);
                                    let t = c9(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return R.intl.formatToPlainString(T.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? T.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? T.default.YZb4hK
                                              : T.default.ZoUSVK;
                                    return R.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(d.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: R.intl.string(T.default.ZxG2AI),
                                            onClick: C,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: R.intl.string(T.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: dD.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: R.intl.string(T.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || N,
                                onClick: I,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return R.intl.string(T.default.mlok8D);
                                    if ("pending" === e) return R.intl.string(T.default["1ugSyK"]);
                                    let t = c9(e.observedAt);
                                    return R.intl.formatToPlainString(
                                        "restarted" === e.outcome ? T.default["76mfqO"] : T.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, a.jsx)(dz, { projectId: g }),
                ],
            }),
            (0, a.jsx)(dG, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, a.jsxs)(dc, {
                    title: R.intl.string(T.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dd, {
                                        label: R.intl.string(T.default.CLXHAs),
                                        value: c9(M.instance_since),
                                        hint: R.intl.string(T.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dd, { label: R.intl.string(T.default["8V8e1Z"]), value: c6(M.sockets) }),
                                    (0, a.jsx)(dd, {
                                        label: R.intl.string(T.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? R.intl.string(T.default.Wv025I)
                                            : R.intl.string(T.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dd, {
                                            label: R.intl.string(T.default["3oUYnv"]),
                                            value: c6(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dm, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dc, {
                    title: R.intl.string(T.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dd, {
                            label: R.intl.string(T.default.IlDBN3),
                            value: c6(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dd, {
                            label: R.intl.string(T.default["ZdzKR+"]),
                            value: R.intl.formatToPlainString(T.default.yHJxuP, { count: c6(_.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dd, {
                            label: R.intl.string(T.default.cIhN2W),
                            value: R.intl.formatToPlainString(T.default.yHJxuP, {
                                count: c6(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dd, {
                            label: R.intl.string(T.default["+fOn/q"]),
                            value: c6(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dd, { label: R.intl.string(T.default.kIHga0), value: c6(_.max_build_attempts) }),
                        (0, a.jsx)(dd, { label: R.intl.string(T.default.Iw03yW), value: c6(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var dK = n(237528),
    dH = n(629584),
    dV = n(531893);
function dW(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: dV.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: R.intl.string(T.default.h1SE6R),
              }),
          });
}
function dQ(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: dV.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: R.intl.string(T.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: R.intl.string(T.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dV.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function dZ(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: dV.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: R.intl.string(T.default.V7Ri8H),
              }),
          })
        : null;
}
var dX = n(109079);
let dY = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        u = i.useId(),
        o = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let a = e.slice(r).trim();
                    if (a.length < 2) return null;
                    try {
                        t = JSON.parse(a);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: dX.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: dX.Mt,
                selectable: !0,
                children: ck(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: dX.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: dX.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: dX.Cq, children: (0, a.jsx)(dK.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: dX.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(dK.v, { text: R.intl.string(T.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, a.jsxs)(tW.D, {
                                      className: dX.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": R.intl.string(T.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(eN.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tJ._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  R.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? T.default.kUhyUv : T.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: dX.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function dJ(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cx.A], () => cx.A.getLogs(t), [t]),
        l = (0, c.bG)([cx.A], () => cx.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, o] = i.useState(""),
        d = i.useMemo(() => {
            let e;
            return (
                (e = u.trim().toLowerCase()),
                n.filter((t) => {
                    var n;
                    let { log: l } = t;
                    return (
                        "string" == typeof l.message &&
                        "string" == typeof l.level &&
                        "string" == typeof l.ts &&
                        ("all" === r ||
                            ("preview" === (n = l.source) || "stable" === n || "web" === n ? n : "other") === r) &&
                        ("" === e ||
                            l.message.toLowerCase().includes(e) ||
                            l.level.includes(e) ||
                            (l.source?.toLowerCase().includes(e) ?? !1))
                    );
                })
            );
        }, [n, r, u]),
        f = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                dn.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dt(e);
                            case "web":
                                return R.intl.string(T.default.IVzfVV);
                            default:
                                return R.intl.string(T.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: dX.$F,
        children: [
            (0, a.jsxs)("div", {
                className: dX.y4,
                children: [
                    (0, a.jsx)(dH.I, {
                        look: "pill",
                        "aria-label": R.intl.string(T.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: dX.KT,
                        children: (0, a.jsx)(cj.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: R.intl.string(T.default["m2+37Y"]),
                            "aria-label": R.intl.string(T.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(dW, { state: l }),
            (0, a.jsxs)(tO.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: dX.sx,
                children: [
                    (0, a.jsx)(dZ, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(dQ, {
                              state: l,
                              emptyTitle: R.intl.string(T.default.S7qlPG),
                              emptyBody: R.intl.string(T.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: R.intl.string(T.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(dY, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function d0(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dc, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: R.intl.string(T.default.umcjif),
                      }),
        })
    );
}
function d1(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dd, {
                      label: R.intl.formatToPlainString(T.default["01ZMS4"], { env: dt(n) }),
                      value: ((t = l.connected), R.intl.string(t ? T.default.Wv025I : T.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dd, {
                      label: R.intl.string(T.default["z1dh+F"]),
                      value: c6(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${c9(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dd, { label: R.intl.string(T.default.Iz5GnJ), value: c6(l.guild_count) }),
                  (0, a.jsx)(dd, {
                      label: R.intl.string(T.default["7UqtNv"]),
                      value: c6(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? R.intl.formatToPlainString(T.default.MasSly, {
                                    code: l.last_close_code,
                                    time: c9(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dd, {
                          label: R.intl.string(T.default["x3+JXJ"]),
                          value: c6(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dd, { label: dt(n), value: R.intl.string(T.default.lTHQss) });
}
function d2(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dd, {
        label: dt(t),
        value: R.intl.formatToPlainString(T.default["Xq+wHT"], {
            requests: c6(n.requests),
            failures: c6(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? R.intl.formatToPlainString(T.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: c9(n.last_failure.at),
                  })
                : R.intl.formatToPlainString(T.default["7KlGT6"], { time: c9(n.since) }),
    });
}
function d3(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dd, {
                label: R.intl.formatToPlainString(T.default["92gVTm"], { env: dt(t) }),
                value: c6(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dd,
                    {
                        label: R.intl.formatToPlainString(T.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? R.intl.formatToPlainString(T.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? R.intl.formatToPlainString(T.default.wxAWNv, { time: c9(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function d7(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dd, {
        label: dt(t),
        value: R.intl.formatToPlainString(T.default.suAOj9, { calls: c6(n.calls), errors: c6(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function d4(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dc, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: R.intl.string(T.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dc, {
        title: t,
        children: [
            (0, a.jsx)(dd, {
                label: R.intl.string(T.default.xtD4Zp),
                value: c6(n.requests),
                hint: R.intl.formatToPlainString(T.default["7KlGT6"], { time: c9(n.since) }),
            }),
            (0, a.jsx)(dd, { label: R.intl.string(T.default.gfRhR3), value: c6(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(df, {
                              label: R.intl.string(T.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: c8,
                          }),
                          (0, a.jsx)(dd, {
                              label: R.intl.string(T.default.mSKImM),
                              value: c8(r),
                              hint: R.intl.formatToPlainString(T.default.JqMU05, {
                                  total: c8(n.cpu_ms_total),
                                  wall: c8(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dd, {
                      label: R.intl.string(T.default.LEJ5r3),
                      value: R.intl.string(T.default["2Ekb2b"]),
                      hint: R.intl.string(T.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dd, { label: R.intl.string(T.default.xvmL1D), value: c8(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dd, { label: R.intl.string(T.default["4sQYwH"]), value: c6(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dd, {
                label: R.intl.string(T.default.bQenOy),
                value: c6(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: R.intl.formatToPlainString(T.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dd, { label: R.intl.string(T.default.xgpn4Y), value: de(n.build) }),
        ],
    });
}
function d5(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: R.intl.string(T.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: R.intl.string(T.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: R.intl.string(T.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dc, {
        title: R.intl.string(T.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dd, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dd, {
                                  label: R.intl.formatToPlainString(T.default.u7kJJ4, { env: n }),
                                  value: c5(l.r2_bytes),
                                  hint: R.intl.formatToPlainString(
                                      l.r2_truncated ? T.default.lH0oQw : T.default.m9h02S,
                                      { count: c6(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(df, {
                                      label: R.intl.formatToPlainString(T.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: c5,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function d8(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dD.Mf,
        children: [
            (0, a.jsx)(du, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d4, {
                            title: R.intl.string(T.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(d4, {
                            title: R.intl.string(T.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(d5, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(d0, {
                                title: R.intl.string(T.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(d1, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(d0, {
                                title: R.intl.string(T.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(d2, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(d0, {
                                title: R.intl.string(T.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(d3, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(d0, {
                                title: R.intl.string(T.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(d7, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dh, { analytics: t.analytics }),
                        (0, a.jsxs)(dc, {
                            title: R.intl.string(T.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dd, {
                                    label: R.intl.string(T.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? de(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dd, {
                                    label: R.intl.string(T.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? de(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var d6 = n(592465);
function d9(e) {
    let { projectId: t, onClose: n } = e,
        l = F(),
        [r, s] = i.useState(() => (l && $?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([o_.A], () => o_.A.getStatus(t), [t]),
        o = (0, c.bG)([o_.A], () => o_.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, cv.R7)(t), (0, cv.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, eO.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == $ || $.projectId !== e) return null;
            let { traceId: t } = $;
            return (($ = null), t);
        })(t);
        return null != e && (c2(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        q(t, () => {
            f() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, oo.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: o_.A.getStatus(t),
                        last_turn_usage: o_.A.getLastTurnUsage(t),
                        last_compaction: o_.A.getLastCompaction(t),
                        last_compaction_decline: o_.A.getLastCompactionDecline(t),
                        timing_traces: o_.A.getTimingTraces(t),
                        logs: cx.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, E.P0)({ text: R.intl.string(T.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = R.intl.string(T.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: d6.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(eZ.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(eZ.Ay.Icon, {
                            icon: oi.CopyIcon,
                            tooltip: R.intl.string(T.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(eZ.Ay.Icon, { icon: eW.P, tooltip: R.intl.string(R.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(eZ.Ay.ChannelIcon, { icon: ou.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(eZ.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: d6.rf,
                children: [
                    (0, a.jsxs)(cp.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": R.intl.string(T.default.RvvWIh),
                        className: d6.vR,
                        children: [
                            (0, a.jsx)(cp.V.Item, { id: "logs", children: R.intl.string(T.default["+VRYCm"]) }),
                            (0, a.jsx)(cp.V.Item, { id: "worker", children: R.intl.string(T.default["50D0FZ"]) }),
                            (0, a.jsx)(cp.V.Item, { id: "agent", children: R.intl.string(T.default.UkbTK1) }),
                            l ? (0, a.jsx)(cp.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(dJ, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(d8, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(c4, { projectId: t })
                            : (0, a.jsx)(dB, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fe = n(365912),
    ft = n(873715);
function fn(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        "string" == typeof e.marker && (n.marker = e.marker),
        n
    );
}
n(884868);
let fl = Object.freeze({ x: -1, y: -1 });
function fr(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fn(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fa = n(192888);
function fi(e, t) {
    return (0, fa.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fr, () => ({ status: "failed" }));
}
var fs = n(108308);
let fu = { x: 25, y: 21 };
function fo(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fc(e, t, n, l) {
    let r = fo(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fd(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function ff(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function fm(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: f } = (0, G.rt)(u),
        m = (0, O.Zv)(u),
        h = (0, K.useHasAnyModalOpen)(),
        g = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [A, N] = i.useState(null),
        [S, I] = i.useState(!1),
        E = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        [P, L] = i.useState(null),
        [$, q] = i.useState(!1),
        [D, F] = i.useState(null),
        [z, U] = i.useState(null),
        B = i.useRef(!1),
        [H, V] = i.useState(!1),
        [W, Q] = i.useState(null),
        Z = o && !m && !h;
    null == D || (Z && D.projectId === u) || F(null);
    let X = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != X) return () => (0, nd.xJ)(X, "design");
    }, [X]);
    let Y = e9(r, Z);
    i.useEffect(() => {
        if (!Z || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, ft.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? ff(t.response) : null;
                    null == n ? w(!0) : (j(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [Z, r, u]);
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!Z || null == Y || null == u) return;
        if (null == x) {
            J.current = Y;
            return;
        }
        if (e6(J.current, Y)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = Y;
            let t = [];
            for (let e = 0; e < f.length; e += 24) t.push(f.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, ft.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = ff(e.response);
                        null != n && (j(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = fn(e.element);
                            null != a && l.set(r.id, a);
                        }),
                            (0, G.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Z, Y, x, f, u, r]),
        i.useEffect(() => {
            if (!Z)
                return () => {
                    (N(null), F(null), Q(null), j(null));
                };
        }, [Z]));
    let ee = i.useRef(null),
        et = i.useRef(null),
        en = i.useRef(!1),
        el = i.useRef(!1);
    i.useEffect(() => {
        ((el.current = Z), Z || ((ee.current = null), (et.current = null), (M.current = null), I(!1)));
    }, [Z]);
    let er = i.useCallback(
            function e() {
                if (en.current) return;
                let t = ee.current;
                if (null == t) return;
                ee.current = null;
                let n = r();
                null != n &&
                    ((en.current = !0),
                    fi(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || fj(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && q(!0);
                            else {
                                let e = (0, lA.Sk)(t.target);
                                (L((t) => (fv(t, e) ? t : e)),
                                    N((e) => {
                                        var n;
                                        return ((n = t.target),
                                        null == e || null == n
                                            ? e === n
                                            : e.ref === n.ref &&
                                              e.rect.x === n.rect.x &&
                                              e.rect.y === n.rect.y &&
                                              e.rect.width === n.rect.width &&
                                              e.rect.height === n.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [r],
        ),
        ea = i.useCallback(() => {
            if (null == D) return;
            let e = !B.current;
            (U({ at: D.at, label: D.label, draft: D.draft, instant: e }), V(e), F(null));
        }, [D]);
    (i.useEffect(() => {
        if (!H) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [H]),
        i.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => U(null), fp);
            return () => clearTimeout(e);
        }, [z]));
    let ei = null == x || null == Y || x.viewport.width < 1 ? 1 : Y.width / x.viewport.width,
        es = null != x || k,
        eu = i.useMemo(() => x?.elements ?? [], [x]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: Y, scale: ei };
    }, [Y, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, nd.xJ)(u, "design"),
                    Q(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lA.Sk)(e) }));
            },
            [u],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        ef = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ef);
    let em = i.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), ef(), I(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fx || Math.abs(e.clientY - D.at.y) > fx) && (B.current = !0);
                    return;
                }
                if (!es) return void N(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lA.CZ)(eu, t.x, t.y),
                        n = null != e && fj(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lA.Sk)(n);
                        L((t) => (fv(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ei, es, ed, $, eu, D, W, ef, er],
        ),
        eh = null == W ? null : f.find((e) => e.id === W.id),
        eg = Z && (S || D?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && fi(e, fl);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (I(!1), N(null), (et.current = null), (ee.current = null));
    }, []);
    i.useEffect(() => {
        if (!Z || !S || !es || $ || null != D || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Z, S, es, $, D, W, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != D || null != W) {
                    (ea(), Q(null));
                    return;
                }
                if (null == A || null == Y) return;
                let t = ed(e, Y);
                ec(A, (0, lA.Hm)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, Y, ed, D, W, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (N(null), (0, C.K7)(u)?.active === !0 ? (0, C.V9)(u) : (0, G.mB)(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != D
                    ? ea()
                    : W?.confirmingRemove === !0
                      ? Q({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? Q(null)
                        : ev());
        }, [u, D, W, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(u),
        ek = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = u), (ek.current = ev));
    });
    let ew = i.useRef(null);
    i.useEffect(() => {
        if (Z)
            return (
                eJ.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        eJ.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eY.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fe.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, C.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Z, s]);
    let eA = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != D || null != W || 0 === eu.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == A ? -1 : eu.findIndex((e) => e.ref === A.ref);
                    N(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    ec(A, lA.QU, { x: (Y?.left ?? 0) + A.rect.x * ei, y: (Y?.top ?? 0) + A.rect.y * ei }));
            },
            [u, D, W, eu, A, ec, ej, Y, ei],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    (((0, lA.Ch)(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eO.sendUserMessage)(u, (0, lA.Q9)(D.target, D.draft), e), ea(), N(null)));
            },
            [u, D, ea],
        ),
        eS = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, e0.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lA.Ch)(W.draft) && ((0, G.pV)(u, p, W.id, W.draft.trim()), Q({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = i.useCallback(() => {
            null != u && null != W && null != p && ((0, G.aC)(u, p, W.id), Q(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? R.intl.string(T.default["Eb/YV9"])
                : k
                  ? R.intl.string(T.default.FD30bh)
                  : R.intl.formatToPlainString(T.default.dTSqLF, { count: f.length })
            : "",
        e_ = Z && null != Y,
        eM = S && null == W,
        eT = D?.target ?? eh?.target ?? null,
        eR = D ?? z,
        eP = D ?? (z?.instant === !0 ? null : z),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = fd(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fc(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            fi(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, eX.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: fs.Li,
                children: [
                    (0, a.jsx)(tY.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    e_
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fs.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": R.intl.string(T.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eA,
                                  }),
                                  null != A && null == A.marker && null == D && null == W
                                      ? (0, a.jsx)(fb, { box: fo(A, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: fs.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fs.xz,
                                          "data-shown": null != A && null == W && null == D ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: fs.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fs.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fs.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: fs.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fs.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fs.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fs.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: fs.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fs.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fs.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eT && null == eT.marker
                                      ? (0, a.jsx)("div", { className: fs.D0, style: fo(eT, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  f.map((e, t) => {
                                      let n = fc(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fs.xL,
                                              style: { ...fd(n, Y), width: 24, height: 24 },
                                              "aria-label": R.intl.formatToPlainString(T.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lA.Bx)(e.target),
                                              }),
                                              "aria-expanded": W?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && Q(l);
                                              },
                                              onFocus: () => {
                                                  null == D && Q(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), Q(l));
                                              },
                                              children: (0, a.jsx)(fh, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eR || null == u
                                      ? null
                                      : (0, a.jsx)(e5, {
                                            projectId: u,
                                            at: { x: eR.at.x + 20, y: eR.at.y + 20 },
                                            bounds: Y,
                                            kind: eR.label.kind,
                                            value: eR.draft,
                                            canSubmit: null != D && (0, lA.Ch)(eR.draft),
                                            onChange: (e) => {
                                                null != D && F({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: ea,
                                            onUploadFile: eS,
                                            closing: null == D,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, a.jsxs)(fg, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lA.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? Q({ ...W, confirmingRemove: !1 }) : Q(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || Q(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, a.jsx)(nv.f, {
                                                          autoFocus: !0,
                                                          label: R.intl.string(T.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: W.draft,
                                                          maxLength: lA.N,
                                                          rows: 3,
                                                          onChange: (e) => Q({ ...W, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fs.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, G.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fs.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fs.nv,
                                                                            children: R.intl.string(T.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: R.intl.string(T.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                Q({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: R.intl.string(T.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eI,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: R.intl.string(T.default.friIzR),
                                                                            onClick: () =>
                                                                                Q({
                                                                                    ...W,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        W.editing
                                                                            ? (0, a.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !(0, lA.Ch)(W.draft),
                                                                                  text: R.intl.string(T.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: R.intl.string(
                                                                                      T.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      Q({
                                                                                          ...W,
                                                                                          editing: !0,
                                                                                          draft: eh.comment,
                                                                                      }),
                                                                              }),
                                                                    ],
                                                                }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                ],
            }),
            document.body,
        )
    );
}
function fh(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nN.default], () => nN.default.getUser(t), [t]);
    return (0, a.jsx)(ak.eu, {
        src: null == n ? null : aA.Ay.getUserAvatarURL(n),
        size: aw._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fg(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fu);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: A,
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: fs.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fs.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fs.ip, children: (0, a.jsx)(fh, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fs.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fs.zI, children: p }),
        ],
    });
}
let fp = 300,
    fx = 2;
function fv(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fj(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fb(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fs.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fy = n(659723),
    fk = n(697744),
    fw = n(130324);
function fA(e) {
    let t = (0, fk.c)(),
        { events: n, getDuration: l } = t;
    i.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function r() {
                ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(r));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [n, l]);
    let r = (0, tU.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fN(e) {
    let { className: t } = e,
        { Component: n, events: l } = fA(3e4);
    return (0, a.jsxs)("div", {
        className: o()(t, fw.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: fw.ol,
                children: R.intl.string(T.default.AyiQEp),
            }),
        ],
    });
}
var fS = n(251363),
    fC = n(944142),
    fI = n(532247),
    fE = n(501628);
function f_(e) {
    let { progress: t } = e,
        { Component: n } = fA(1500),
        l = D.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fE.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: fE.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fM(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([fC.A], () => (s ? fC.A.getLiveReload(t) : null), [s, t]),
        o = (0, eP.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, fI.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || o ? null : (0, fI.QP)(e, s)));
            let f = (0, c.bG)(
                    [eh.A],
                    () => {
                        let e = eh.A.getFrame(n);
                        return (0, ej.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = i.useRef(f),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((m.current = f), f && (h.current = !0));
                }, [f]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fS.ow)(null, n) && e();
                    }
                    ((h.current = m.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            h.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(i));
                    };
                }, [r, n]),
                r
            );
        })(d, f, o),
        h = f ? null : (0, fI.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tY.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: fE.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(f_, { progress: h }),
                  })
                : null,
        ],
    });
}
let fT = 0;
var fR = n(782134),
    fP = n(357858),
    fL = n(343030),
    f$ = n(317608),
    fq = n(35367),
    fD = n(228946);
let fF = { width: 1 / 0, height: 1 / 0 };
function fO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fF;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var fG = n(702083);
function fz(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let d = null != s && s.width > 0 ? s : null,
        f = n ? fO(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(fG.dw, { [fG.PQ]: null != f }),
        children: (0, a.jsx)("div", { className: o()(fG.R9, { [fG.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var fU = n(347927);
function fB(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(fU.Bf, l && fU.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fU.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var fK = n(957272);
function fH(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, fq.A)({ applicationId: t, surface: n, launch: l });
    if (((0, fD.A)(t, n), s === fq.n.Launched)) {
        let e = (0, a.jsx)(f$.A, { frameId: i.id, level: fL.A.WithinAppContent, className: fK.Z7, overlay: r });
        return (0, e$.Q5)(n) ? (0, a.jsx)(fz, { children: e }) : e;
    }
    return (0, a.jsx)(fV, { state: s });
}
function fV(e) {
    let { state: t } = e;
    switch (t) {
        case fq.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fK.qs,
                children: (0, a.jsx)(fB, {
                    title: R.intl.string(T.default["9kpdo7"]),
                    body: R.intl.string(T.default.iIA8Nj),
                }),
            });
        case fq.n.NoApplication:
            return (0, a.jsx)(fN, { className: fK.qs });
        case fq.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fK.qs,
                children: (0, a.jsx)(fB, {
                    title: R.intl.string(T.default["7k4GyN"]),
                    body: R.intl.string(T.default.zdIy3R),
                }),
            });
        case fq.n.Error:
            return (0, a.jsxs)("div", {
                className: fK.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: R.intl.string(T.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: fK.tj,
                        children: R.intl.string(T.default.e6GiAZ),
                    }),
                ],
            });
        case fq.n.AwaitingLaunch:
        case fq.n.Loading:
            return (0, a.jsx)("div", { className: fK.qs, children: (0, a.jsx)(j.y, {}) });
    }
}
var fW = n(308528),
    fQ = n(334738),
    fZ = n(688606),
    fX = n(365971),
    fY = n(703462);
function fJ(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fY.f,
        children: [
            (0, a.jsx)(ie.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function f0() {
    return (0, a.jsx)("div", { className: fY.f, children: (0, a.jsx)(j.y, {}) });
}
function f1(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nw.A], () => (null != o ? nw.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && fW.A.preload(ev.ME, t);
        }, [t]),
        (n = (0, c.bG)([oe.A], () => oe.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fX.Xg)();
            return (
                (0, fQ.yl)(t, e),
                () => {
                    (0, fQ.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = i.useState(null),
        h = f === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, Y.CN)(l).then(
                (t) => {
                    e || u({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || m(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, a.jsx)(fJ, { message: R.intl.string(T.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(f0, {})
          : (0, a.jsx)("div", {
                className: fY.g,
                children: (0, a.jsx)(fZ.A, { channel: d, guild: null, chatInputType: sD.oU.SIDEBAR }, d.id),
            });
}
var f2 = n(765671),
    f3 = n(596977),
    f7 = n(921853),
    f4 = n(582063);
function f5(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, Y.vX)(t, n?.id ?? null);
    }
    let u = R.intl.string(T.default.Gl3XtE),
        o = R.intl.string(T.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: f4.aF,
        children: [
            (0, a.jsx)(e1.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tn.K, {
                    icon: f7.n,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: f4.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: R.intl.formatToPlainString(T.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: R.intl.string(T.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(e1.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tn.K, {
                    icon: tJ._,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var f8 = n(625903),
    f6 = n(666476);
let f9 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function me() {
    (0, E.P0)({ text: R.intl.string(T.default.jj3abP), variant: "critical" });
}
function mt(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = R.intl.string(T.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mn, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: f4.m2,
                        children: (0, a.jsx)(e1.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tn.K, {
                                "aria-label": r,
                                icon: f8.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, a.jsx)("input", {
                ref: l,
                type: "file",
                accept: f9.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (f9.includes(n.type)
                                ? n.size > f6.aI
                                    ? (0, E.P0)({ text: R.intl.string(T.default.T8Spiu), variant: "critical" })
                                    : (0, rF.M$)(t, n).catch(me)
                                : (0, E.P0)({ text: R.intl.string(T.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mn(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([rD.A], () => rD.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": R.intl.string(T.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(ew.rX, {
                children: [
                    (0, a.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: R.intl.string(T.default.uQpDky),
                        icon: lu.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: R.intl.string(T.default.AiAz8J),
                        icon: dC.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, rF.Og)(t).catch(me));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(ew.rX, {
                children: (0, a.jsx)(ew.fP, {
                    id: "conjure-overlay-background-blur",
                    label: R.intl.string(T.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, rF.Y1)(t, !i) || me();
                    },
                }),
            }),
        ],
    });
}
function ml(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, f2.Ay)(),
        { captures: c, selected: d } = rq(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: el({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                u = el({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        i.useEffect(() => (0, f3.L0)(), []),
        (0, a.jsxs)("div", {
            className: f4.JH,
            children: [
                (0, a.jsx)(rG, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: f4.dw,
                    children: (0, a.jsx)("div", {
                        className: f4.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, a.jsx)(fH, { applicationId: t, surface: ej.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(mt, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(f5, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function mr(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(fB, {
        title: R.intl.string(T.default.xlEjZ8),
        body: R.intl.string(T.default["4ByPbd"]),
        children: (0, a.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: R.intl.string(T.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var ma = n(409478),
    mi = n(652227);
function ms(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: o,
            widgetApplicationId: d,
            overlayWidgetSize: f = et,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lC.A], () => null != m && null != lC.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mi.qs, children: (0, a.jsx)(j.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: mi.qs,
                children: (0, a.jsx)(mr, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mi.RG,
                      children: [
                          (0, ei.yf)(u, o)
                              ? g
                                  ? (0, a.jsx)(mu, { projectId: m, onResume: p })
                                  : (0, a.jsx)(fH, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mi.qs,
                                        children: (0, a.jsx)(fB, {
                                            wide: !0,
                                            title: R.intl.string(T.default["08U+YO"]),
                                            body: R.intl.string(T.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(ma.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(ml, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(ej.ZN) })
                              : null,
                          "bot" === o && null != n && null != m
                              ? (0, a.jsx)(f1, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: mi.qs, children: (0, a.jsx)(j.y, {}) })
              : (0, a.jsx)(fN, { className: mi.qs });
}
function mu(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, fP.Pu)(t),
        (0, a.jsx)("div", {
            className: mi.qs,
            children: (0, a.jsx)(fB, {
                wide: !0,
                title: R.intl.string(T.default.MMWEH2),
                body: R.intl.string(T.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: fR.PlayIcon,
                              text: R.intl.string(T.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mo = n(750506),
    mc = n(867193),
    md = n(539197),
    mf = n(977020);
function mm(e) {
    let { projectId: t } = e,
        n = (0, md.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, md.Ie)(e);
                        n((e) =>
                            null != e &&
                            e.left === t.left &&
                            e.top === t.top &&
                            e.width === t.width &&
                            e.height === t.height
                                ? e
                                : t,
                        );
                    }
                    t();
                    let l = window.setInterval(t, 250);
                    return (
                        window.addEventListener("resize", t),
                        () => {
                            (window.clearInterval(l), window.removeEventListener("resize", t));
                        }
                    );
                }, [e]),
                null == e ? null : t
            );
        })(n?.iframe ?? null);
    if (null == n || null == l) return null;
    let { left: r, top: s, width: u, height: c, scale: d } = l;
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, a.jsxs)("div", {
        className: mf.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [md.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: o()(mf.hN, mf.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: o()(mf.hN, mf.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: o()(mf.UE, { [mf.SP]: n.shown, [mf.Vq]: n.pressed, [mf.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mh = n(417760);
function mg(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([lE.A], () => null != e && lE.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, eO.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, O.CU)(n),
        f = "controlling" === t,
        m = R.intl.string(f ? (u ? T.default["VJW/5P"] : T.default["+hD2Iz"]) : T.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: R.intl.string(T.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: o()(mh.M0, mh.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, a.jsx)(oJ.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(iM.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: mh.ID, children: m }),
                  f ? (0, a.jsx)(tY.A, { children: R.intl.string(T.default.fg1sor) }) : null,
                  f ? (0, a.jsx)("div", { className: mh.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mh.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mh.sp,
                      children: [
                          (0, a.jsx)(iM.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, a.jsx)(oJ.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mh.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: mh.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, a.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: mh.Rb,
                                            children: R.intl.string(T.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, a.jsx)("div", { className: mh.lC, children: h }) : null,
              ],
          });
}
function mp(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, O.Zv)(null != n && n === l ? t : null),
        o = (function (e) {
            let [t, n] = i.useState(e),
                [l, r] = i.useState(!1);
            return (e !== t && (n(e), r(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(u),
        c = (0, K.useHasAnyModalOpen)(),
        d = (0, eg.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, eg.BL)(s);
    }, [u, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== o;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = e8(r());
            m((t) => (e6(t, e) ? t : e));
            let t = null == h ? null : e8(h);
            (x((e) => (e6(e, t) ? e : t)), null != h && (0, mc.C)(h.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == h ? null : new ResizeObserver(e);
        return (
            null != h && n?.observe(h),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != h && (0, mc.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== o && null != f,
        b = j && "controlling" === o && !c,
        y = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        w =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(f, p),
        A = (function () {
            let [e] = i.useContext(mo.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: mh.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: mh.QF,
                          children: (0, a.jsx)(mg, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, eX.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(tY.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? R.intl.string(T.default.oWcemF)
                                : "handoff" === o
                                  ? R.intl.string(T.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, eX.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: mh.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mh.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mm, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var mx = n(399503),
    mv = n(853555),
    mj = n(271982),
    mb = n(327152),
    my = n(187645);
let mk = { width: 1280, height: 720 },
    mw = new Map(),
    mA = !1;
function mN() {
    let e = new Map();
    for (let t of new Set([...lE.A.getActivityOrderedProjectIds(), ...(0, O.T7)()])) {
        if (!(lE.A.isThinking(t) || (0, O.wK)(t)) || J.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eT.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, e$.Rc)(t), (0, e$.Th)(t)].find(ej.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mw]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mw.delete(t),
            n.unregisterLookup(),
            mj.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mb.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mw.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = my.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mS(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mw.set(e, l),
                    (l.unregisterLookup = (0, mv.Ng)(e, () => (0, fS.n5)(n, t))),
                    mj.A.registerFrameTarget(t, n, fL.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mw) mS(t.element, e, t.frameId);
}
function mS(e, t, n) {
    if (eh.A.getFrame(n)?.surface.type === es.U.OVERLAY) {
        let l = er(eT.Ay.getProject(t));
        (e.classList.remove(my.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mb.Pn)(n, l));
        return;
    }
    let l = eL.A.isBuilderPreviewMobile();
    e.classList.toggle(my.L, !l);
    let r = l ? fO(eL.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mb.Pn)(n, r ?? mk));
}
var mC = n(873727),
    mI = n(147248),
    mE = n(418842),
    m_ = n(363195);
let mM = 0;
var mT = n(818023);
let mR = null;
var mP = n(949621);
function mL(e) {
    let { projectId: t } = e,
        n = (0, c.bG)(
            [eT.Ay],
            () => {
                let e = eT.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = R.intl.string(l ? T.default.cAExE8 : T.default["15Y/Yz"]);
    return (0, a.jsx)(tX.u, {
        title: r,
        body: R.intl.string(l ? T.default.r8rVq1 : T.default.IZMyda),
        position: "bottom",
        children: (0, a.jsx)("span", { className: mP.I, tabIndex: 0, children: (0, a.jsx)(dK.v, { text: r }) }),
    });
}
var m$ = n(541940);
function mq(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: f,
            sidebar: m,
            showsFrame: h,
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, eP.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([m_.A], () => (0, mC.x4)(m_.A.theme)),
            l = (0, c.bG)([mI.A], () => mI.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([ab.Ay], () => ({
                reducedMotion: ab.Ay.useReducedMotion,
                fontScale: (0, mC.U0)(),
                highContrast: ab.Ay.isHighContrastModeEnabled,
                forcedColors: ab.Ay.useForcedColors,
                underlineLinks: ab.Ay.alwaysShowLinkDecorations,
            })),
            d = D.hH.useSetting(),
            f = (0, mE.C)(),
            m = (0, c.bG)(
                [eh.A, eL.A],
                () =>
                    eL.A.isBuilderPreviewMobile() &&
                    eh.A.getFrame(t)?.applicationId === eL.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, fS.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++mM,
                    baseTheme: n,
                    customTheme: (0, mC.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fa.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, m, t, s, d, e, r, f, o]),
            v = i.useRef(x);
        i.useLayoutEffect(() => {
            v.current = x;
        });
        let j = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), g.current || v.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            i.useLayoutEffect(() => {
                let n = (0, fS.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fS.n5)(e, t) && ((p.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, mv.Ng)(t, () => (0, fS.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, fS.ow)(p, j), [p, j]),
        y = i.useCallback(() => (h ? (0, fS.ow)(p, j) : p), [h, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(m$.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(mp, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: m$.fm, children: f }),
                ],
            }),
            m,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fm, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tq, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function mD(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            frameLaunchParams: d,
            header: f,
            chatOpen: m,
            onCloseChat: h,
            chatHeaderAction: g,
            onRestoreVersion: p,
            onImportProject: x,
            debugOpen: v = !1,
            onCloseDebug: j,
            restoreState: b,
            previewReady: y,
            previewGate: k,
            availability: w,
            activeMode: A,
            widgetApplicationId: N,
            overlayWidgetSize: S,
            previewPaused: C = !1,
            onResumePreview: I,
        } = e;
    (0, mx.k)(n, N);
    let E = u.type === es.U.MAIN || (0, e$.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? mT.aX.LANDSCAPE : mT.aX.PORTRAIT), (mR = e));
                else {
                    if (mR !== e) return;
                    ((l = mT.aX.UNHANDLED), (mR = null));
                }
                uQ.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let _ = i.useRef(null),
        [M, P] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tF.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tF.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            E && ((t.current = ++fT), (0, Y.HV)(r));
        }, [r, E]),
        i.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === fT && (0, Y.HV)(null);
            };
        }, [r, E]),
        i.useEffect(() => {
            null != n &&
                ((0, eO.ensureConnection)(n),
                mA ||
                    ((mA = !0),
                    lE.A.addChangeListener(mN),
                    eT.Ay.addChangeListener(mN),
                    eh.A.addChangeListener(mN),
                    eL.A.addChangeListener(mN),
                    J.A.addChangeListener(mN),
                    (0, O.W3)(mN),
                    mN()));
        }, [n]),
        i.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && P(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, M - 320),
        $ = m || E;
    return (0, a.jsx)("div", {
        ref: _,
        className: m$.LB,
        children: (0, a.jsx)(mq, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: f,
            showsFrame: (0, ei.yf)(w, A),
            paused: C,
            mainClassName: null == f ? void 0 : o()(m$.ez, { [m$.zt]: m }),
            content: (0, a.jsx)(ms, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: d,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: A,
                widgetApplicationId: N,
                overlayWidgetSize: S,
                projectId: n,
                paused: C,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(fM, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && $
                    ? (0, a.jsx)("div", {
                          className: m ? m$.v7 : m$.LL,
                          children: (0, a.jsx)(eQ.A, {
                              sidebarType: eQ.X.CallChatSidebar,
                              maxWidth: L,
                              capturePointer: !0,
                              children: (0, a.jsx)("div", {
                                  className: m$.cO,
                                  children: v
                                      ? (0, a.jsx)(d9, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(fy.Ay, { projectId: n }),
                                                (0, a.jsxs)(eZ.Ay, {
                                                    "aria-label": R.intl.string(R.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, a.jsx)(eZ.Ay.Icon, {
                                                                      icon: eW.P,
                                                                      tooltip: R.intl.string(T.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, a.jsx)(eZ.Ay.Title, {
                                                            children: R.intl.string(R.t["/VQax8"]),
                                                        }),
                                                        (0, a.jsx)(mL, { projectId: n }),
                                                    ],
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: m$.cb,
                                                    children: (0, a.jsx)(
                                                        cg,
                                                        {
                                                            projectId: n,
                                                            restoreState: b,
                                                            onRestoreVersion: p,
                                                            onImportProject: x,
                                                            escapeScopeRef: _,
                                                        },
                                                        n,
                                                    ),
                                                }),
                                            ],
                                        }),
                              }),
                          }),
                      })
                    : null,
        }),
    });
}
var mF = n(705427),
    mO = n(606128),
    mG = n(323140);
function mz(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: j, guildId: b, onBackToServer: y } = e,
        k = i.useContext(Q.A),
        [w] = i.useState(() => (null != k ? X.A.getProjectView(k) : null)),
        [L, $] = i.useState(w?.chatOpen ?? !0),
        [D, et] = i.useState(w?.debugOpen ?? !1);
    i.useEffect(() => {
        null != k && (0, Z.g7)(k, { chatOpen: L, debugOpen: D });
    }, [k, L, D]);
    let en = i.useCallback(
            (e) => {
                null != k && (0, Z.g7)(k, { previewSelection: e });
            },
            [k],
        ),
        el = F(),
        eu = (0, z.f)("ConjureSelectedProjectScreen"),
        eo = i.useCallback(() => $(!0), []),
        ec = i.useCallback(() => {
            (et(!1), $(!0));
        }, []),
        { restoreState: ef, handleRestoreVersion: em } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(!0),
                u = i.useRef(!1);
            return (
                (a.current = r),
                i.useEffect(
                    () => (
                        (s.current = !0),
                        () => {
                            s.current = !1;
                        }
                    ),
                    [],
                ),
                {
                    restoreState: n,
                    handleRestoreVersion: i.useCallback(
                        function (n) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (null == e || u.current) return;
                            let o = e.id;
                            function c() {
                                return s.current && a.current === o;
                            }
                            ((u.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, V.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, E.P0)({
                                                        text: R.intl.formatToPlainString(T.default.Z4n6LX, {
                                                            title: (0, H.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, W.c)(o, r);
                                                null != e && (0, E.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, E.P0)({
                                                    text: R.intl.string(T.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        c() && (u.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(s, ec),
        eh = s?.id ?? null,
        {
            integrationStatus: eg,
            isPreviewApplicationLoading: ep,
            checkingIntegration: ex,
            previewReady: ev,
            hasFrame: ey,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eT.Ay, eM.A],
                    () => (null == l ? null : (eT.Ay.getIntegrationStatus(l) ?? eM.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, eE.YY)(u ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, ei.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            i.useEffect(() => {
                g && !d && null != u && e(u);
                async function e(e) {
                    try {
                        await (0, eE.TA)(e);
                    } catch {}
                }
            }, [h, d, g, u]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, e_.CG)(l)?.catch(() => (0, e_.U1)(l, e.signal)) ?? (0, e_.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || a.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                i.useEffect(
                    () => (
                        p(),
                        () => {
                            (a.current?.abort(), (a.current = null));
                        }
                    ),
                    [p],
                ),
                {
                    integrationStatus: s,
                    isPreviewApplicationLoading: o,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        ek =
            (0, c.bG)([eG.A], () => (null == eh ? void 0 : eG.A.getPublishStatus(eh)?.previewAppChannels), [eh]) ??
            eg?.preview_app_channels,
        {
            availability: ew,
            activeMode: eA,
            setMode: eN,
            frameSurface: eS,
            frameSurfaceOptions: eW,
            setFrameSurface: eQ,
            appChannel: eZ,
            setAppChannel: eX,
            frameLaunchParams: eY,
            widgetApplicationId: eJ,
        } = (0, ed.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ey,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: eg?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(ee.q7.OVERLAY) === !0,
            previewAppChannels: ek,
            initialSelection: w?.previewSelection,
            onSelectionChange: en,
        }),
        e0 = er(s);
    ((0, ea.x)(eh, (e) => {
        ew.modes.includes(e) && eN(e);
    }),
        q(eh, () => {
            ($(!0), et(!0));
        }));
    let e1 = ew.modes.includes("frame"),
        e2 = (0, c.bG)([J.A], () => J.A.isPaused(eh), [eh]),
        e3 = e1 && !e2,
        {
            previewTargetOptions: e7,
            handleSelectPreviewTarget: e4,
            mobilePreview: e5,
            mobilePreviewLabel: e8,
            handleToggleMobilePreview: e6,
            landscapePreview: e9,
            rotatePreviewLabel: te,
            handleRotatePreview: tt,
            previewSurface: tn,
            previewFrame: tl,
            refreshFrame: tr,
            isRefreshing: ta,
            handleRefresh: ti,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: u,
                    setFrameSurface: o,
                    setAppChannel: d,
                } = e,
                f = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === es.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, a, s),
                    [n, a, s],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, o, u],
                ),
                h = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewMobile()),
                g = R.intl.string(h ? T.default.tKGF0Q : T.default.peqEOY),
                p = i.useCallback(() => (0, Y.GG)(!h), [h]),
                x = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewLandscape()),
                v = R.intl.string(x ? T.default.tunI2l : T.default.DoNdjA),
                j = i.useCallback(() => (0, Y.Lw)(!x), [x]),
                b = (0, e$.jS)(t),
                y = i.useMemo(() => (0, e$.Op)(b, r), [b, r]),
                k = (0, eP.A)(t?.preview_application_id ?? null, y),
                w = (0, eP.A)(t?.preview_application_id ?? null, ej.ZN),
                A = "overlay" === l ? w : k,
                N = (0, ej.x1)(A) && A.data.proxyTicketRefreshing,
                S = i.useCallback(() => {
                    null == A || N || eR.A.refreshProxyTicket(A.id);
                }, [A, N]);
            return {
                previewTargetOptions: f,
                handleSelectPreviewTarget: m,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: A,
                isRefreshing: N,
                handleRefresh: S,
            };
        })({
            project: s,
            modes: ew.modes,
            activeMode: eA,
            frameSurface: eS,
            frameSurfaceOptions: eW,
            previewAppChannels: ek,
            setMode: eN,
            setFrameSurface: eQ,
            setAppChannel: eX,
        }),
        ts = L && !D,
        tu = R.intl.string(ts ? T.default.JD6Oit : T.default.xjJAQm),
        to = i.useCallback(() => {
            if (D) {
                (et(!1), $(!0));
                return;
            }
            $((e) => !e);
        }, [D]),
        tc = i.useCallback(() => $(!1), []),
        {
            designFeedbackActive: td,
            designFeedbackToggleRef: tf,
            agentDrivingPreview: tm,
            designFeedbackLabel: th,
            handleToggleDesignFeedback: tg,
        } = (function (e, t, n) {
            let { active: l } = (0, G.rt)(e);
            i.useEffect(() => {
                null != e && l && !t && (0, G.mB)(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, O.Zv)(e),
                s = R.intl.string(a ? T.default.Sme0T0 : l ? T.default.vn5Rzu : T.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, G.mB)(e);
                        (n(), (0, G.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(eh, e3, ec),
        [tp] = i.useState(() => S.isPlatformEmbedded && (0, eI.qM)()),
        tx = (0, C.lQ)(eh);
    i.useEffect(() => {
        null != eh && tx && !e3 && (0, C.It)(eh);
    }, [eh, tx, e3]);
    let tv = i.useCallback(() => {
            null != eh && (ec(), (0, C.c$)(eh), (0, C.rC)(eh, "marker"));
        }, [eh, ec]),
        tj = i.useCallback(() => {
            null != eh && (0, C.V9)(eh);
        }, [eh]),
        tb = R.intl.string(tx ? T.default.tuQ5f3 : tm ? T.default.agwlrD : T.default["XWU+XF"]),
        ty = i.useCallback(() => {
            et((e) => !e && ($(!0), !0));
        }, []),
        tk = i.useCallback(() => et(!1), []),
        tw = i.useCallback(() => {
            null != eh && (0, Y._j)(eh);
        }, [eh]),
        tA = i.useCallback(() => {
            null != eh && (e2 ? (0, Y._j)(eh) : (0, Y.di)(eh, tl?.id));
        }, [eh, e2, tl?.id]),
        tN = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = tl?.id), (0, eO.closeConnection)(e), (0, eF.r)(t)), j());
        }, [s, tl?.id, j]),
        tS =
            ((t = (0, M.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, _.vt)(e);
                    null != n
                        ? (0, E.P0)({ text: n, variant: "critical" })
                        : (0, I.A)({
                              title: R.intl.formatToPlainString(T.default["Gm+u1+"], { name: s.name }),
                              subtitle: R.intl.string(T.default.M7H3sJ),
                              confirmText: R.intl.string(T.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  eo();
                                  try {
                                      await (0, _.Hj)(t, e, R.intl.string(T.default.Owerd3));
                                  } catch {
                                      (0, E.P0)({ text: R.intl.string(T.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, eo],
            )),
            { onExport: t, onImport: (r = (0, _.yN)(l)).open, importInput: r.input }),
        tC = i.useCallback(() => {
            null != s && (0, eH.A)(s, b);
        }, [s, b]),
        tI = i.useCallback(async () => {
            null != eh && (await (0, eU.vL)(eh, b));
        }, [b, eh]),
        tE = (0, ei.aN)(eA, {
            installScope: s?.install_scope ?? null,
            previewReady: ev,
            integrationInstalled: eg?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tI, loading: ep }
            : ex && null == eg
              ? { type: "checking" }
              : void 0,
        t_ = (0, c.bG)([eT.Ay], () => null != eh && eT.Ay.isProjectDeleting(eh), [eh]);
    i.useEffect(() => {
        ((null == s && u) || t_) && j();
    }, [s, u, t_, j]);
    let {
            publishOptions: tM,
            publish: tT,
            publishing: tR,
            confirmation: tP,
            variant: tL,
            text: t$,
        } = (0, eB.A)(eh, b, ex || ep),
        tq = (0, eK.A)(eh, tT, tM),
        tD = (0, A.A)(tl),
        tF = "frame" === eA && !e2 && (0, ej.x1)(tl) && (tD.isPoppedOut || tD.canPopout),
        tO = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    installScope: s.install_scope,
                    restoreDisabled: ef?.status === "restoring",
                    onRestoreVersion: (e, t) => em(e, t, !0),
                }),
                    (0, K.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([
                            n.e("323079"),
                            n.e("437655"),
                            n.e("420238"),
                            n.e("334179"),
                            n.e("231782"),
                            n.e("526192"),
                            n.e("437578"),
                        ]).then(n.bind(n, 209233));
                        return (n) => (0, a.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, ef?.status, em]);
    (0, B.z)(eh, tO);
    let tG = null == s ? void 0 : () => (0, eV.A)(s.id, { guildId: b, isPreview: !0, publishOptions: tM }),
        tz =
            null == s
                ? null
                : (0, a.jsx)(eD.A, {
                      ...(0, eq.A)(s, b),
                      onOpenProjectSettings: tG,
                      onTogglePreviewPaused: "frame" === eA ? tA : void 0,
                      previewPaused: e2,
                      previewPauseDisabled: !e2 && tm,
                      onTogglePopout: tF ? (tD.isPoppedOut ? tD.popIn : tD.popOut) : void 0,
                      poppedOut: tD.isPoppedOut,
                      onToggleDebug: el ? ty : void 0,
                      debugOpen: D,
                      onExport: tS.onExport,
                      onImport: tS.onImport,
                      onRemix: tC,
                      onConnectTool: eu ? () => (0, U.A)(s.id) : void 0,
                      onHistory: tO,
                      refreshApplicationId:
                          ew.modes.includes("widget") && "unavailable-authorization-revoked" !== ew.profileState
                              ? eJ
                              : null,
                      previewProjectId: s.id,
                  }),
        tU =
            null == tT || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: mG.As,
                      onMouseDown:
                          null == eh || tT.disabled || tR
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, ez.dx)(eh);
                                },
                      children: (0, a.jsx)(d.$, {
                          size: "sm",
                          variant: tL,
                          icon: tR ? mU : null != tP ? f.U : void 0,
                          text: t$,
                          onClick: () => tq("header"),
                      }),
                  }),
        tB = (0, a.jsx)(mF.A, {
            title: s?.name ?? R.intl.string(T.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tG,
            onBack: y,
            hideShareTarget: null != y,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: mG.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: mG.QQ,
                                  children: [
                                      (0, a.jsx)(eC, {
                                          targets: e7,
                                          target: (function (e, t) {
                                              let n =
                                                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                              return null == e
                                                  ? null
                                                  : "frame" !== e
                                                    ? { mode: e }
                                                    : null == n
                                                      ? { mode: e, surface: t }
                                                      : { mode: e, surface: t, appChannel: n };
                                          })(eA, eS, eZ),
                                          onChange: e4,
                                      }),
                                      e1
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === eA
                                                        ? (0, a.jsx)(N.A.Icon, {
                                                              icon: e5 ? mH : mK,
                                                              tooltip: e8,
                                                              "aria-label": e8,
                                                              selected: e5,
                                                              onClick: e6,
                                                          })
                                                        : null,
                                                    e5 && "frame" === eA
                                                        ? (0, a.jsx)(N.A.Icon, {
                                                              icon: mV,
                                                              tooltip: te,
                                                              "aria-label": te,
                                                              selected: e9,
                                                              onClick: tt,
                                                          })
                                                        : null,
                                                    tp
                                                        ? (0, a.jsx)(N.A.Icon, {
                                                              icon: m.PencilIcon,
                                                              tooltip: tb,
                                                              "aria-label": tb,
                                                              selected: tx,
                                                              disabled: e2 || (tm && !tx),
                                                              onClick: tx ? tj : tv,
                                                          })
                                                        : (0, a.jsx)(N.A.Icon, {
                                                              ref: tf,
                                                              icon: h.x,
                                                              iconClassName: mG.D8,
                                                              tooltip: th,
                                                              "aria-label": th,
                                                              selected: td,
                                                              disabled: e2 || tm,
                                                              onClick: tg,
                                                          }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eA || e2
                                          ? null
                                          : (0, a.jsx)(eb, { frame: tl, controlProjectId: s.id }),
                                      (0, ej.x1)(tr)
                                          ? (0, a.jsx)(N.A.Icon, {
                                                icon: g.RefreshIcon,
                                                tooltip: R.intl.string(T.default.FZIHQN),
                                                "aria-label": R.intl.string(T.default.FZIHQN),
                                                disabled: ta,
                                                onClick: ti,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: mG.YJ }),
                              (0, a.jsx)(P.A, { frame: tl }),
                              (0, a.jsx)(N.A.Icon, {
                                  icon: p.DoorExitIcon,
                                  tooltip: R.intl.string(T.default["/TlGcK"]),
                                  "aria-label": R.intl.string(T.default["/TlGcK"]),
                                  onClick: tN,
                              }),
                              (0, a.jsx)(N.A.Icon, {
                                  icon: mB,
                                  tooltip: tu,
                                  "aria-label": tu,
                                  selected: ts,
                                  onClick: to,
                              }),
                              tz,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(mG.nj, mO.T),
        children: [
            tS.importInput,
            (0, a.jsx)("main", {
                className: mG.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: mG.j5,
                              children: [
                                  tB,
                                  (0, a.jsxs)("div", {
                                      className: mG.sD,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: R.intl.string(T.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: R.intl.string(T.default.fINulo),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: R.intl.string(T.default["WFJ/vb"]),
                                              onClick: () => (0, e_.listProjects)(b),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eU.bI.Provider, {
                              value: tM,
                              children: (0, a.jsx)(
                                  mD,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: tf,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: tn,
                                      frameLaunchParams: eY,
                                      header: tB,
                                      chatOpen: L,
                                      onCloseChat: tc,
                                      chatHeaderAction: tU,
                                      debugOpen: el && D,
                                      onCloseDebug: tk,
                                      onRestoreVersion: em,
                                      onImportProject: (0, eT.PV)(s) ? tS.onImport : void 0,
                                      restoreState: ef,
                                      previewReady: ev,
                                      previewGate: tE,
                                      availability: ew,
                                      activeMode: eA,
                                      widgetApplicationId: eJ,
                                      overlayWidgetSize: e0,
                                      previewPaused: e2,
                                      onResumePreview: tw,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function mU() {
    return (0, a.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: mG.Hv, itemClassName: mG.C5 });
}
function mB(e) {
    return (0, a.jsx)(b.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function mK(e) {
    return (0, a.jsx)(y.u, { ...e, size: "custom", width: 20, height: 20 });
}
function mH(e) {
    return (0, a.jsx)(k.k, { ...e, size: "custom", width: 20, height: 20 });
}
function mV(e) {
    return (0, a.jsx)(w.H, { ...e, size: "custom", width: 20, height: 20 });
}
