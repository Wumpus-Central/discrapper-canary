n.d(t, { A: () => m7 });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    u = n(503698),
    o = n.n(u),
    c = n(855986),
    d = n(821609),
    f = n(478016),
    m = n(22231),
    h = n(604525),
    g = n(663417),
    p = n(70688),
    x = n(534514),
    v = n(834730),
    j = n(331322),
    b = n(289873),
    y = n(534890),
    k = n(646270),
    w = n(31300),
    S = n(831453),
    A = n(646973),
    C = n(742589),
    N = n(723702),
    I = n(171691),
    E = n(314116),
    _ = n(858899),
    M = n(949757),
    R = n(800202),
    T = n(191850),
    P = n(792996),
    L = n(766367);
let $ = new Set(),
    q = null;
function D(e, t) {
    let n = a.useRef(t);
    (a.useLayoutEffect(() => {
        n.current = t;
    }),
        a.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                $.add(t),
                () => {
                    $.delete(t);
                }
            );
        }, [e]));
}
var F = n(253932);
function O() {
    return F.Q_.useSetting() || !1;
}
var G = n(573083),
    z = n(57570),
    U = n(971079),
    B = n(61577),
    K = n(686507),
    H = n(192308),
    V = n(128761),
    W = n(503922),
    X = n(967008),
    Q = n(60498),
    Z = n(227007),
    Y = n(398773),
    J = n(735769),
    ee = n(513845),
    et = n(802905),
    en = n(951178);
let el = { width: 320, height: 240 };
function er(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : el;
}
function ei(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function ea(e) {
    return er(e?.preview_overlay_widget ?? null);
}
var es = n(855859),
    eu = n(238490),
    eo = n(991690),
    ec = n(696645);
function ed(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ef(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, ec.X)(e.surface)
                : P.intl.formatToPlainString(T.default["6xVl+N"], {
                      surface: (0, ec.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return P.intl.string(T.default.y5GiL1);
        case "overlay":
            return P.intl.string(T.default["2940LX"]);
        case "bot":
            return P.intl.string(T.default.tjpaGN);
    }
}
var em = n(939398),
    eh = n(86147),
    eg = n(729475),
    ep = n(91242),
    ex = n(156548),
    ev = n(869146),
    ej = n(475815),
    eb = n(652215),
    ey = n(165610);
function ek(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, ex.cR)(t?.id ?? null),
        r = (0, G.Zv)(n),
        a = (0, c.bG)(
            [ev.A, ep.A],
            () => null != t && ev.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && ep.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, ey.x1)(t) || a || r) return null;
    let s = (0, ex.fl)(t.id);
    if (null == s || !(0, ej.Ub)(s)) return null;
    let u = P.intl.string(l ? P.t.Z7MyNB : P.t.OIDkcp);
    return (0, i.jsx)(C.A.Icon, {
        tooltip: u,
        icon: l ? eh.FullscreenExitIcon : eg.FullscreenEnterIcon,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, ex.U8)(t.id),
    });
}
var ew = n(265872),
    eS = n(165862),
    eA = n(477782),
    eC = n(559106),
    eN = n(847374),
    eI = n(704745);
function eE(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = a.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = a.useCallback(() => s(!1), []),
        c = a.useCallback(() => s((e) => !e), []),
        d = a.useRef(null);
    if (!u) return null;
    let f = P.intl.string(T.default.I2ucou);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: ew.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(eS.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, i.jsx)(eA.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = ed(e);
                        return (0, i.jsx)(
                            eA.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ef(e),
                                checked: t === ed(n),
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
                { isShown: a } = t;
            return (0, i.jsx)(eC.vN, {
                children: (0, i.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eI.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": a,
                    onClick: c,
                    children: [
                        (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: P.intl.string(T.default["N+VA1J"]),
                        }),
                        (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ef(n),
                        }),
                        (0, i.jsx)(eN.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var e_ = n(27184),
    eM = n(627363),
    eR = n(233470),
    eT = n(153207),
    eP = n(260498),
    eL = n(625180),
    e$ = n(672929),
    eq = n(111534),
    eD = n(754027),
    eF = n(174865),
    eO = n(898178),
    eG = n(457827),
    ez = n(540665),
    eU = n(722701),
    eB = n(962998),
    eK = n(826058),
    eH = n(719593),
    eV = n(536468),
    eW = n(95264),
    eX = n(576705),
    eQ = n(122393),
    eZ = n(16619),
    eY = n(811587);
let eJ = [en.q7.PROFILE_WIDGET, en.q7.OVERLAY];
function e0(e, t, n) {
    let l = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
        r = (0, c.bG)([eP.Ay], () => eP.Ay.getIntegrationStatus(e)?.preview_ready === !0, [e]),
        i = (0, eZ.z9)("ConjureShareToServer"),
        s = null != l && "user" === l.install_scope && null == l.install_scope_setup && (0, eP.PV)(l),
        u = (0, c.yK)([eX.A], () => i.filter((e) => eX.A.can(eb.xBc.MANAGE_GUILD, e)), [i]),
        [o, d] = a.useState(null),
        f = [o, l?.guild_id, t].map((e) => u.find((t) => t.id === e)).find((e) => null != e) ?? u[0] ?? null,
        m =
            null != l &&
            [...(l.supported_surfaces ?? []), ...(l.preview_supported_surfaces ?? [])].some((e) => eJ.includes(e))
                ? P.intl.string(T.default["/Ow58q"])
                : null,
        [h, g] = a.useState(!1),
        [p, x] = a.useState(null),
        v = a.useCallback((e) => {
            (d(e), x(null));
        }, []),
        j = a.useCallback(async () => {
            let t = P.intl.string(T.default.qDjkvv);
            if (null == f) return { shared: !1, error: t };
            (g(!0), x(null));
            let n = (0, eQ.v)(e, 3e4);
            try {
                await (0, eR.fh)(e, f.id);
            } catch (r) {
                n.cancel();
                let e = r?.body?.message,
                    l = "string" == typeof e ? e : t;
                return (x(l), g(!1), { shared: !1, error: l });
            }
            let l = eP.Ay.getProject(e);
            if (null != l && !(0, en._7)(l)) {
                (n.cancel(), g(!1));
                let t = eU.A.getPublishStatus(e)?.publishState === "not_live";
                return (
                    t ||
                        (function e(t, n) {
                            setTimeout(() => {
                                eP.Ay.getIntegrationStatus(t)?.integration_installed !== !0 &&
                                    ((0, eR.GO)(t), n > 1 && e(t, n - 1));
                            }, 1500);
                        })(e, 6),
                    { shared: !0, next: t ? "publish" : "added" }
                );
            }
            let r =
                (await n.published) &&
                (await (async function (e) {
                    let t = Date.now() + 5e3;
                    for (; !e1(e) && Date.now() < t;) await new Promise((e) => setTimeout(e, 250));
                    return e1(e);
                })(e));
            return (g(!1), { shared: !0, next: r ? "publish" : "await_test_app" });
        }, [f, e]),
        b = a.useCallback(async () => {
            if (null != n && null != f)
                try {
                    await (0, eK.FZ)(e, "share", { platform: n.platform, guildId: f.id });
                } catch {}
        }, [f, e, n]);
    return {
        available: s && r && u.length > 0,
        guilds: u,
        guild: f,
        pickGuild: v,
        blockedReason: m,
        sharing: h,
        error: p,
        share: j,
        publish: b,
    };
}
function e1(e) {
    let t = eU.A.getPublishStatus(e)?.publishState;
    return null != t && (0, eY.Uh)(t);
}
var e2 = n(189213),
    e3 = n(691885),
    e4 = n(680032),
    e5 = n(653036);
function e7(e) {
    let { projectId: t, guildId: n, publishOptions: l, transitionState: r, onClose: s } = e,
        u = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(t), [t]),
        o = u?.name ?? "",
        d = e0(t, n, l),
        { guilds: f, guild: m, blockedReason: h, sharing: g, error: p } = d,
        x = a.useMemo(() => f.map((e) => ({ id: e.id, value: e.id, label: e.name })), [f]),
        v = a.useRef(!1);
    return (
        a.useEffect(
            () => (
                (v.current = !1),
                () => {
                    v.current = !0;
                }
            ),
            [],
        ),
        (0, i.jsx)(e2.a, {
            transitionState: r,
            onClose: s,
            title: P.intl.formatToPlainString(T.default.N3Ryqz, { app: o }),
            size: "sm",
            notice:
                null != p
                    ? { type: "critical", message: p, role: "alert" }
                    : null != h
                      ? { type: "warning", message: h, role: "status" }
                      : void 0,
            actions: [
                { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: s, disabled: g },
                {
                    text: P.intl.string(T.default["+ysSG7"]),
                    variant: "primary",
                    onClick: async function () {
                        let e = await d.share();
                        e.shared &&
                            !v.current &&
                            (s(),
                            "publish" === e.next
                                ? await d.publish()
                                : (0, _.P0)({
                                      text: P.intl.formatToPlainString(
                                          "added" === e.next ? T.default["4WtS+v"] : T.default.o2xHEb,
                                          { app: o, server: m?.name ?? "" },
                                      ),
                                      variant: "success",
                                  }));
                    },
                    loading: g,
                    disabled: null == m || g || null != h,
                },
            ],
            children: (0, i.jsxs)(j.B, {
                gap: 16,
                children: [
                    null != m && x.length > 1
                        ? (0, i.jsx)(e3.l, {
                              label: P.intl.string(T.default.Uq5hU9),
                              options: x,
                              value: m.id,
                              onSelectionChange: d.pickGuild,
                              selectionMode: "single",
                              disabled: g,
                              fullWidth: !0,
                          })
                        : null,
                    (0, i.jsx)(e5.A, { rows: (0, e4.d)(u) }),
                ],
            }),
        })
    );
}
function e8(e) {
    let { projectId: t, guildId: n, publishOptions: l } = e,
        { available: r } = e0(t, n, null);
    return r
        ? (0, i.jsx)(d.$, {
              size: "sm",
              variant: "secondary",
              text: P.intl.string(T.default["+uQwxA"]),
              onClick: () => {
                  var e;
                  return (
                      (e = { projectId: t, guildId: n, publishOptions: l }),
                      void (0, H.qf)((t) => (0, i.jsx)(e7, { ...t, ...e }))
                  );
              },
          })
        : null;
}
var e9 = n(616334),
    e6 = n(405433),
    te = n(58736);
function tt(e) {
    let { projectId: t } = e;
    return (0, c.bG)(
        [eU.A],
        () => {
            let e = eU.A.getPublishStatus(t)?.publishState;
            return null != e && (0, eY.lE)(e);
        },
        [t],
    )
        ? (0, i.jsx)(te.Ay.Icon, {
              icon: e6.ShareIcon,
              tooltip: P.intl.string(P.t.RDE0Sc),
              onClick: () => {
                  (0, H.mM)(async () => {
                      let { default: e } = await Promise.all([n.e(806117), n.e(648695)]).then(n.bind(n, 9514));
                      return (n) => (0, i.jsx)(e, { ...n, projectId: t });
                  });
              },
          })
        : null;
}
var tn = n(789645),
    tl = n(812771);
(n(743898), n(134528), n(947204));
var tr = n(333007),
    ti = n(621466),
    ta = n(775121),
    ts = n(989145),
    tu = n(866665),
    to = n(81369),
    tc = n(826745),
    td = n(34595),
    tf = n(470779);
function tm(e) {
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
            takeRefs: S,
        } = (0, td.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = a.useRef(null),
        C = (f || j.length > 0) && w && !m,
        N = a.useCallback(() => {
            if (!C) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [C, S, c]),
        [I, E] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => E(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let _ = a.useRef(null),
        [M, R] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => R({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let L = M?.height ?? 44,
        $ = l.left + 8,
        q = l.top + 8,
        D = Math.max(n.x, $),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, q), Math.max(q, l.top + l.height - L - 8));
    return (0, i.jsxs)("div", {
        ref: _,
        className: o()(tf.M0, { [tf.ho]: I && !m, [tf.ET]: m }),
        style: { left: D, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: tf.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(tu.m, {
                              position: "bottom",
                              text: P.intl.string(T.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: tf.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": P.intl.string(T.default.lgvqSB),
                                  children: (0, i.jsx)(to.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tf.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(tc.y, {
                autoFocus: !0,
                rows: 1,
                className: tf.hF,
                value: s,
                placeholder: x ?? ("" === r ? P.intl.string(T.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? P.intl.string(T.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            j.length > 0
                ? (0, i.jsx)("div", {
                      className: tf.ZO,
                      children: j.map((e) => (0, i.jsx)(td.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function th(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tg(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tp(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? th(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = th(e());
                l((e) => (tg(e, t) ? e : t));
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
var tx = n(46676),
    tv = n(876798),
    tj = n(408278),
    tb = n(48507),
    ty = n(193885),
    tk = n(744898),
    tw = n(803656),
    tS = n(241326),
    tA = n(972213),
    tC = n(646514);
function tN(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function tI(e, t, n) {
    return {
        id: e,
        value: t,
        label: n,
        icon: function (e) {
            let { colorClass: n } = e;
            return (0, i.jsx)("svg", {
                className: n,
                width: 20,
                height: 20,
                viewBox: "0 0 24 24",
                "aria-hidden": !0,
                children: (0, i.jsx)("circle", {
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
let tE = tI("red", tN(tC.A.unsafe_rawColors.RED_400), () => P.intl.string(T.default.tvXfjt)),
    t_ = [
        tE,
        tI("yellow", tN(tC.A.unsafe_rawColors.YELLOW_300), () => P.intl.string(T.default.FYuaJ1)),
        tI("green", tN(tC.A.unsafe_rawColors.GREEN_360), () => P.intl.string(T.default["Vv+paS"])),
        tI("blue", tN(tC.A.unsafe_rawColors.BLUE_345), () => P.intl.string(T.default.k9b1QJ)),
        tI("white", tN(tC.A.unsafe_rawColors.WHITE), () => P.intl.string(T.default["1sOXwH"])),
    ];
function tM(e) {
    return t_.find((t) => t.id === e) ?? tE;
}
var tR = n(39416);
function tT(e) {
    let { colorClass: t } = e;
    return (0, i.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function tP(e) {
    let { colorClass: t } = e;
    return (0, i.jsxs)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("path", {
                d: "M10 4H5.5A1.5 1.5 0 0 0 4 5.5V10M4 14v4.5A1.5 1.5 0 0 0 5.5 20H10M14 4h4.5A1.5 1.5 0 0 1 20 5.5V10",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
            }),
            (0, i.jsx)("path", { d: "M13 13v8l2.3-2.2 1.6 3.2 1.6-.8-1.6-3.1 3.1-.1L13 13Z", fill: "currentColor" }),
        ],
    });
}
function tL(e) {
    let { colorClass: t } = e;
    return (0, i.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function t$(e) {
    return function (t) {
        let { colorClass: n } = t;
        return (0, i.jsx)("svg", {
            className: n,
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            "aria-hidden": !0,
            children: (0, i.jsx)("circle", { cx: 12, cy: 12, r: e / 2, fill: "currentColor" }),
        });
    };
}
let tq = I.ck.map((e) => t$(Math.min(16, e + 3))),
    tD = I.Cw.map((e) => t$(Math.min(16, e / 2.5))),
    tF = [T.default.jZtZUr, T.default.cTQdD0, T.default.J3ucEg],
    tO = {
        circle: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, i.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, i.jsx)("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeWidth: 2 }),
                });
            },
            label: () => P.intl.string(T.default.oIZQbm),
        },
        square: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, i.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, i.jsx)("rect", {
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
            label: () => P.intl.string(T.default.ARNVr7),
        },
    };
function tG(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(tu.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: tR.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tv.k, {
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
function tz(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(tu.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(tj.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tU(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = a.useState(!1),
        o = a.useCallback(() => u(!1), []),
        c = a.useCallback(() => u((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: tR.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: tR.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function tB(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = tM(n.colorId);
    function h(e) {
        return (0, I.rC)(t, e);
    }
    let g = tO[o],
        p = P.intl.string(T.default.hUm825),
        x = P.intl.string(T.default.n5IA3a),
        v = P.intl.string(T.default.r5dX6t),
        j = P.intl.string(T.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: tR.t$,
        children: [
            (0, i.jsx)("div", {
                className: tR.NT,
                children: (0, i.jsx)(tG, {
                    icon: tP,
                    label: P.intl.string(T.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tR.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": P.intl.string(T.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(tG, {
                        icon: tT,
                        label: P.intl.string(T.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, i.jsx)(tG, {
                        icon: tb.LettersIcon,
                        label: P.intl.string(T.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, i.jsx)(tU, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tG, {
                                icon: ty.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tq.map((n, l) =>
                                (0, i.jsx)(
                                    tG,
                                    {
                                        icon: n,
                                        label: P.intl.string(tF[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, I.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tU, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(tG, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tO).map((t) =>
                                (0, i.jsx)(
                                    tG,
                                    {
                                        icon: tO[t].icon,
                                        label: tO[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tU, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tG, {
                                icon: tL,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tD.map((n, l) =>
                                (0, i.jsx)(
                                    tG,
                                    {
                                        icon: n,
                                        label: P.intl.string(tF[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, I._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tU, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(tz, { icon: m.icon, label: j, onClick: e }),
                        children: (e) =>
                            t_.map((n) =>
                                (0, i.jsx)(
                                    tG,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            ((0, I.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: tR.Gz, role: "separator" }),
                    (0, i.jsx)(tz, {
                        icon: tk.UndoIcon,
                        label: P.intl.string((0, N.cX)() ? T.default["j/XmBQ"] : T.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(tz, {
                        icon: tw.RedoIcon,
                        label: P.intl.string((0, N.cX)() ? T.default.C7jhpn : T.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(tz, {
                        icon: tS.TrashIcon,
                        label: P.intl.string(T.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: tR.Gz, role: "separator" }),
                    (0, i.jsx)(tz, { icon: tA.XLargeIcon, label: P.intl.string(T.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tK = tC.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tH = tC.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tV = tC.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tW(e, t, n) {
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
                let [t, ...i] = n.points;
                if (null == t) break;
                for (let a of ((e.lineWidth = l(n.width)),
                e.beginPath(),
                e.moveTo(l(t.x), r(t.y)),
                0 === i.length && e.lineTo(l(t.x), r(t.y)),
                i))
                    e.lineTo(l(a.x), r(a.y));
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
                    (e.strokeStyle = tV),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tX(e) {
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
let tQ = { dx: 0, dy: 0 },
    tZ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tY = 1;
function tJ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, I.d5)(s),
        { active: o } = (0, z.rt)(s),
        c = (0, H.Rv)(),
        [d, f] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                (0, I.K7)(s)?.active === !0 && (0, I.It)(s);
            };
    }, [s]);
    let m = u?.active === !0 && "pick" === u.tool;
    a.useEffect(() => {
        null != s && m && !o && (0, z.w4)(s);
    }, [s, m, o]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, e_.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, tr.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, e_.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return ((0, I.j5)(s, h), () => (0, I.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, i.jsx)(t0, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function t0(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tp(r),
        [u, o] = a.useState(null),
        [c, d] = a.useState(0),
        [f, m] = a.useState(null),
        [h, g] = a.useState(tQ),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        j = a.useRef(null),
        b = a.useRef(null),
        { tool: y, history: k } = n,
        w = tM(n.colorId),
        S = "pick" !== y,
        A = (0, I.Qq)(n),
        C = "eraser" === y ? null : w.value,
        N = a.useMemo(
            () =>
                null == A
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              i = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              a = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  i(n, `fill="none" stroke="${tH}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${tK}" stroke-width="2"`),
                                  i(3, `fill="${t ?? tK}" stroke="${tH}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(A, C),
            [A, C],
        ),
        E = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        _ = null != s;
    (a.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [_]),
        a.useLayoutEffect(() => {
            b.current = u;
        }, [u]));
    let M = a.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let i = j.current,
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? (0, tx.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tW(r, null == u ? a : [...a, u], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    a.useLayoutEffect(M, [M]);
    let R = a.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        L = a.useCallback(() => {
            let e = b.current;
            if (null == e || null == s) return;
            b.current = null;
            let n = {
                id: `mark-${tY++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tx.oy)(n, s) && (0, I.tD)(t, { type: "commit", shape: n }), o(null), (0, I.QP)(t));
        }, [t, w, s]),
        $ = a.useCallback(() => {
            ((b.current = null), o(null), (0, I.QP)(t));
        }, [t]),
        q = a.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != b.current) return void L();
                let t = R(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == E ? null : (0, tx.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, tx.WF)(k.present, t, s, 6);
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
                        if (!(0, tx.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tY++}`,
                                kind: "erase",
                                width: I.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tY++}`,
                                kind: "marker",
                                color: w.value,
                                width: I.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tY++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                M();
            },
            [s, y, w, E, k.present, n.markerSize, n.eraserSize, R, L, M],
        ),
        D = a.useCallback(
            (e) => {
                let t = R(e),
                    n = j.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    M());
            },
            [R, M],
        ),
        F = a.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = j.current;
            if (null != e) {
                ((j.current = null), g(tQ), (0, I.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tx.oy)(n, s)
                    ? ((0, I.tD)(t, { type: "commit", shape: n }), (0, I.QP)(t))
                    : M());
        }, [t, s, h, M]),
        O = a.useCallback(() => (0, I.V9)(t), [t]),
        G = a.useCallback(() => (0, I.tD)(t, { type: "undo" }), [t]),
        z = a.useCallback(() => (0, I.tD)(t, { type: "redo" }), [t]),
        U = a.useCallback(() => (0, I.tD)(t, { type: "clear" }), [t]),
        B = a.useRef({ tool: y, selected: E, exit: O, undo: G, redo: z });
    if (
        (a.useLayoutEffect(() => {
            B.current = { tool: y, selected: E, exit: O, undo: G, redo: z };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, ti.Cw)((0, ti.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != b.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: i, redo: a } = B.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? a() : i());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? m(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), (0, I.tD)(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = tZ[s];
                null != u && (e.preventDefault(), (0, I.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (S) return (ta.A.disable(), () => ta.A.enable());
        }, [S]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, tx.k_)(null == j.current ? E : (0, tx.y)(E, h.dx, h.dy), s);
    return (0, tr.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: tR.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: tR.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: tR.Ji,
                            "data-tool": y,
                            "data-interactive": S && !l ? "" : void 0,
                            "aria-label": P.intl.string(T.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : N },
                            onPointerDown: q,
                            onPointerMove: D,
                            onPointerUp: F,
                            onPointerCancel: F,
                        }),
                        null == H
                            ? null
                            : (0, i.jsxs)("div", {
                                  className: tR.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: tR.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: tR.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: tR.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: tR.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, i.jsx)(tm, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + u.at.x * s.width, y: s.top + u.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: P.intl.string(T.default["8gX1lw"]),
                          label: P.intl.string(T.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: u.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, ts.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: tR.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(tB, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var t1 = n(308081),
    t2 = n(516521),
    t3 = n(683071),
    t4 = n(65593),
    t5 = n(218394),
    t7 = n(115982),
    t8 = n(886540);
function t9(e) {
    return !(0, t8.BL)(e) && !0 !== e.stopRequested;
}
var t6 = n(104317),
    ne = n(939249),
    nt = n(643278),
    nn = n(566424),
    nl = n(683063),
    nr = n(140735),
    ni = n(320448),
    na = n(138212);
function ns(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: o()(na.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: o()(na.wx, null != n && na.o5, a),
                children: [
                    (0, i.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nu = n(148590);
function no(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nc(e) {
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
        m = a.useId(),
        [h, g] = a.useState(!l),
        [p, x] = a.useState(l);
    p !== l && (x(l), g(!l));
    let v = a.useCallback(() => g((e) => !e), []),
        j = h ? eN.ChevronSmallDownIcon : ni.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, i.jsxs)(ns, {
        ...f,
        title: t,
        trailing: b
            ? (0, i.jsxs)("span", {
                  className: nu.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(ne.D, {
                                className: nu.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, i.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nu.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: m, className: o()(nu.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var nd = n(883646);
let nf = [];
function nm(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: o()(nd.xL, {
            [nd.Vb]: "in_progress" === t,
            [nd.cT]: "completed" === t,
            [nd.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(T.default.KvBdun);
                case "in_progress":
                    return P.intl.string(T.default["m5G9+S"]);
                case "unfinished":
                    return P.intl.string(T.default.lRpwhD);
                default:
                    return P.intl.string(T.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(b.y, {
                type: b.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nd.Qd,
                itemClassName: nd.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: nd.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: nd.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nh(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : nf), [n, t]),
        r = a.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = a.useState(l),
        [c, d] = a.useState(s),
        [f, m] = a.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
    let h = u.some((e) => !r.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        a.useEffect(() => {
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
    return (0, i.jsxs)("span", {
        className: nd.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    nl.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: nd.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, i.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: nd.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function ng(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, u] = a.useState(() => new Set());
            return (
                r !== t && (i(t), l(new Set(e)), u(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                a.useEffect(() => {
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
        })(a.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? nf).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            if (null == n.todoId || "" === n.todoId) continue;
                            let e = t.get(n.todoId);
                            null != e ? e.push(n) : t.set(n.todoId, [n]);
                        }
                        return t;
                    })(r ?? nf),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: nd.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: o()(nd.AS, { [nd.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(nm, { status: n }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nd.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: nd.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(nh, { agents: c.get(e.id) ?? nf, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: nd.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(nm, { status: "pending" }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nd.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: nd.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function np(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = P.intl.formatToPlainString(T.default["P/I+JW"], { completed: u, total: o }),
        d = P.intl.formatToPlainString(T.default["7tzwKB"], { completed: u, total: o });
    return (0, i.jsx)(nc, {
        title: P.intl.string(T.default.RtzECX),
        meta: (0, i.jsx)(no, { children: c }),
        superseded: s,
        showLabel: P.intl.string(T.default.RKyN9q),
        hideLabel: P.intl.string(T.default.xydHoj),
        className: nd.Nr,
        bodyClassName: nd.rf,
        beforeBody: r && !s ? (0, i.jsx)(nr.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(ng, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nx = n(308665),
    nv = n(59678),
    nj = n(903847);
function nb(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = a.useState(n ?? "top"),
        [h, g] = a.useState(d),
        [p, x] = a.useState(!1),
        [v, j] = a.useState(!1),
        [b, y] = a.useState(d);
    (b !== d && (y(d), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        a.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        a.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [k, w] = a.useState(!1),
        [S, A] = a.useState(!1),
        [C, N] = a.useState(v);
    (C !== v && (N(v), v ? w(!0) : A(!1)),
        a.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        a.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = a.useCallback(() => j((e) => !e), []);
    return h
        ? (0, i.jsxs)("div", {
              className: nj.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: o()(nj.vK, { [nj.ho]: p && d, [nj.ET]: !d }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: o()(nj.Rk, nv.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(nn.A, {
                                        glyph: (0, i.jsx)(nx.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(ne.D, {
                                    className: nj.pZ,
                                    onClick: c,
                                    "aria-label": P.intl.string(T.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: o()(nj.Rk, nv.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(nn.A, {
                                            glyph: (0, i.jsx)(nx.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, i.jsx)(tu.m, {
                                    text: P.intl.string(T.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(ne.D, {
                                        className: nj.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": P.intl.string(T.default.RtzECX),
                                        children: (0, i.jsx)(nt.ClipboardListIcon, {
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
                      ? (0, i.jsx)("div", {
                            className: o()(nj.vB, { [nj.pg]: v && S, [nj.ui]: !v }),
                            children: (0, i.jsx)(np, {
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
var ny = n(839214),
    nk = n(78564);
let nw = new Map(),
    nS = (0, ny.D)(() => ({ byMessageKey: {} }));
function nA(e, t) {
    let { [e]: n, ...l } = nS.getState().byMessageKey;
    nS.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nC = n(195880),
    nN = n(287111);
function nI(e) {
    let t = (0, eZ.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nE = n(736553),
    n_ = n(382541),
    nM = n(890497),
    nR = n(103557),
    nT = n(29073),
    nP = n(590077);
function nL(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let i = nI(e),
                [s, u] = a.useState(null),
                [o, c] = a.useState([]),
                [d, f] = a.useState(t.prompt),
                [m, h] = a.useState(!1),
                [g, p] = a.useState(!1),
                x = a.useRef(new Map()),
                v = a.useRef(!1),
                j = a.useRef(!1),
                b = a.useMemo(() => i.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [i, o]),
                y = a.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = a.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = a.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                S = a.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                A = d.trim(),
                C = n && !m && (w.length > 0 ? "" !== A : o.length > 0),
                N = a.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nN.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          P.intl.formatToPlainString(T.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = P.intl.formatToPlainString(T.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                I = a.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === w.length) return void N(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = eP.Ay.getProject(e)?.name ?? e),
                        (n = P.intl.formatToPlainString(T.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nC.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: i } = await (0, n_.dv)(e),
                                        a = new nE.u();
                                    try {
                                        await new Promise((e, s) => {
                                            ((l = setTimeout(() => s(Error("Timed out sending the message")), 2e4)),
                                                a.open({
                                                    url: i,
                                                    ticket: r,
                                                    onEvent: (l) => {
                                                        if ("hello" === l.type)
                                                            try {
                                                                a.sendUserMessage(t, n);
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
                                                    onClose: () =>
                                                        s(Error("Connection closed before the message was stored")),
                                                }));
                                        });
                                    } finally {
                                        (clearTimeout(l), a.close());
                                    }
                                })(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, N, o, e, w, A]),
                E = a.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && N(o), l());
                }, [N, o, l, m]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: S,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: C,
                submit: I,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = a.useMemo(
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
    return (0, i.jsxs)("section", {
        className: o()(nT.nd, nT.jx),
        "aria-labelledby": f,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: nT.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: f,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nT.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(tj.K, {
                        icon: tn.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": P.intl.string(T.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nP.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.TbbzW5),
                          })
                        : (0, i.jsx)(nM.Z, {
                              label: P.intl.string(T.default["29gr8j"]),
                              placeholder: P.intl.string(T.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(nR.f, {
                        label: P.intl.string(T.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? P.intl.string(T.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nT.qr,
                children: (0, i.jsx)("div", {
                    className: nT.zt,
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: P.intl.string(T.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var n$ = n(47167),
    nq = n(734057),
    nD = n(994500),
    nF = n(287809),
    nO = n(360047);
function nG(e) {
    return 0 === e.options.length && null == e.input;
}
function nz(e, t, n) {
    return n < e.questions.length - 1
        ? n + 1
        : (function (e, t, n) {
              let { questions: l } = e;
              for (let e = 1; e <= l.length; e++) {
                  var r, i;
                  let a = (n + e) % l.length;
                  if (((r = l[a]), (i = t[l[a].id]), !0 !== r.optional && (null == i || "" === i.text.trim())))
                      return a;
              }
              return null;
          })(e, t, n);
}
function nU(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nB(e, t, n, l) {
    let r = n.trim(),
        i = e.options.filter((e) => t.includes(e.id)).map((e) => e.label);
    return {
        kind: "multi",
        optionIds: t,
        ...("" === r ? {} : { custom: r }),
        ...(null == l ? {} : { attachment: l.attachment }),
        text: [...i, ...(null == l ? [] : [l.text]), ...("" === r ? [] : [r])].join(", "),
    };
}
let nK = {
    [eb.rbe.GUILD_TEXT]: "text",
    [eb.rbe.GUILD_VOICE]: "voice",
    [eb.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [eb.rbe.GUILD_STAGE_VOICE]: "stage",
    [eb.rbe.GUILD_FORUM]: "forum",
    [eb.rbe.GUILD_MEDIA]: "media",
};
function nH(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nq.A.getChannel(t)?.type) ? void 0 : nK[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nF.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nV = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nW = {
        channel: [T.default["9+dfPT"], T.default.pGSJqE],
        role: [T.default["2VkCoD"], T.default.c8YlX8],
        user: [T.default.GZIAxl, T.default["4bptbQ"]],
        project: [T.default.twlOb6, T.default.twlOb6],
        server: [T.default.ZWXDeI, T.default.ZWXDeI],
    };
function nX(e, t) {
    return P.intl.string(nW[e][+!!t]);
}
var nQ = n(658675),
    nZ = n(123292),
    nY = n(900797);
function nJ(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = a.useMemo(() => nO.Hi.map((e) => ({ id: e, value: e, label: (0, nO.hU)(e) })), []);
    return (0, i.jsx)(e3.l, {
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
var n0 = n(344587),
    n1 = n(155078);
function n2(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let n3 = [];
function n4(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? P.intl.string(T.default.ZZ641e)
          : P.intl.string(1 === e.options.length ? T.default["2g3gk9"] : T.default.dkzChE);
}
function n5(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n7(e, t) {
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
var n8 = n(682163),
    n9 = n(300344),
    n6 = n(614733),
    le = n(904363),
    lt = n(950902),
    ln = n(136722),
    ll = n(778858),
    lr = n(808728),
    li = n(696451),
    la = n(71393),
    ls = n(488926),
    lu = n(426035),
    lo = n(246338);
let lc = ln.kg(eb.xBc.VIEW_CHANNEL, eb.xBc.SEND_MESSAGES);
var ld = n(384017);
function lf(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: a,
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
        return nH(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
    return (0, i.jsx)("div", {
        className: ld.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, i.jsx)(nM.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(nM.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lm(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n9.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: i, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === i.input && "safety_alerts_channel" === i.default),
                (n = (0, c.bG)(
                    [eP.Ay],
                    () => {
                        let e = t ? eP.Ay.getProject(l) : null;
                        return null == e ? null : (0, lu.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || li.Ay.isMember(r, n) || ll.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lr.A, li.Ay, la.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = la.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lr.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, lo.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && li.Ay.isMember(r, n))
                            return ls.$3({ permission: lc, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? ln.BY;
                        return ln.X8(s, lc) ? null : a;
                    },
                    [r, n, t, i.channel_filter],
                )),
            f = a.useRef(null),
            m = a.useRef(!1);
        a.useEffect(() => {
            if (!m.current && !u && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            o(((e = []), nH("channel", [d.id], () => (0, n$.m1)(d, nF.default, nD.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(lf, { ...r, guildId: n, options: s, placeholder: nX("channel", !0 === r.question.multi_select) });
}
function lh(e) {
    let { guildId: t, ...n } = e,
        l = (0, le.A)(t);
    return (0, i.jsx)(lf, { ...n, guildId: t, options: l, placeholder: nX("role", !0 === n.question.multi_select) });
}
function lg(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, n6.A)(t);
    return (0, i.jsx)(lf, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: nX("user", !0 === n.question.multi_select),
    });
}
function lp(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nI(t),
        s = a.useMemo(
            () =>
                r.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [r],
        );
    return 0 === s.length ? n : (0, i.jsx)(lf, { ...l, options: s, placeholder: nX("project", !1) });
}
function lx(e) {
    let t = e.target;
    (0, ti.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lv(e) {
    let { fallback: t, ...n } = e,
        l = (0, eZ.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(n8.Ay, { guild: e, size: n8.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: lx,
              onMouseUp: lx,
              children: (0, i.jsx)(lf, { ...n, options: r, placeholder: nX("server", !1) }),
          });
}
function lj(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lt.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(lp, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(lv, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lm, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(lh, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(lg, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lb = n(87221),
    ly = n(771871),
    lk = n(26430),
    lw = n(750943),
    lS = n(173936),
    lA = n(95477),
    lC = n(256905),
    lN = n(490707),
    lI = n(907702);
function lE(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lN._)(t, n),
        [d, f] = a.useState(null),
        m = null != s && d === s;
    return u
        ? (0, i.jsxs)("span", {
              className: o()(lI.Gt, lI.b6),
              children: [
                  (0, i.jsx)(lb.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: P.intl.string(T.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: o()(lI.Gt, { [lI.iP]: !m }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lI.Sl,
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
function l_(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: a,
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
        x = P.intl.formatToPlainString(T.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: o()(lI.Vs, { [lI.Q9]: s, [lI.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(ne.D, {
                className: o()(lI.Up, { [lI.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": P.intl.formatToPlainString(T.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: lI.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(lE, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, i.jsx)("span", { className: lI.Gt }),
                            (0, i.jsx)("span", {
                                className: lI.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(nQ.P, { checked: s, disabled: u })
                                    : (0, i.jsx)(ly.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lI.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, n1.E)(t) : "")
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
                ? (0, i.jsx)("span", {
                      className: lI.B4,
                      children: (0, i.jsx)(tu.m, {
                          text: P.intl.string(T.default.HQEXJM),
                          children: (0, i.jsx)(tj.K, {
                              icon: tS.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": P.intl.string(T.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: lI.B4,
                        children: (0, i.jsx)(tu.m, {
                            text: P.intl.string(T.default["4/eeDD"]),
                            children: (0, i.jsx)(tj.K, {
                                icon: lk.MaximizeIcon,
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
function lM(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = a.useRef(null),
        g = a.useRef(new Map()),
        [p, x] = a.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        j = a.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: P.intl.string(T.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = a.useCallback(
            (e) => {
                let n = (null == j ? f : [...f, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, ts.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lC.R)({
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
        y = a.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, f],
        );
    return (0, i.jsxs)("div", {
        className: lI.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == j
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: o()(lI.fF, "gallery" === m ? lI.nV : lI.nM, { [lI.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, i.jsx)(
                                  l_,
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
                              ? (0, i.jsx)(
                                    l_,
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
            (0, i.jsx)(lR, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: P.intl.string(/\bicons?\b/i.test(n.question) ? T.default.qU4WN6 : T.default.cbMDDB),
            }),
        ],
    });
}
function lR(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = a.useRef(null),
        [o, c] = a.useState(!1),
        [f, m] = a.useState(""),
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
    return (0, i.jsxs)("div", {
        className: lI.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: lI.QJ,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lw.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, i.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lS.LinkIcon,
                              text: P.intl.string(T.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lI.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nN.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, i.jsxs)("div", {
                      className: lI.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: lI.Hs,
                              children: (0, i.jsx)(lA.k, {
                                  label: P.intl.string(T.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: P.intl.string(T.default.AVhvn8),
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
                          (0, i.jsxs)("div", {
                              className: lI.gd,
                              children: [
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: P.intl.string(T.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(nZ.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: P.intl.string(T.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, i.jsx)(v.E, {
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
function lT(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(ne.D, {
        className: o()(ld.uK, { [ld.ue]: l, [ld.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(d ? T.default["2p6UFz"] : T.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, i.jsx)("span", { className: ld.dy, children: (0, i.jsx)(nQ.P, { checked: u, disabled: l }) })
                : (0, i.jsx)("span", { className: ld.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: ld.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: ld.l8,
                        children: (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: ld.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, i.jsx)(v.E, {
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
                ? (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: ld.rM,
                      children: P.intl.string(T.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lP(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return n2(n)
        ? (0, i.jsx)(lM, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: u })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      lT,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: o ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: a,
                      },
                      e.id,
                  ),
              ),
          });
}
let lL = [],
    l$ = [];
function lq(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: a,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select ? P.intl.string(T.default.tE8qbz) : n4(n);
    return (0, i.jsxs)("div", {
        className: o()(ld.Ge, ld.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: ld.aK,
                      children: f,
                  }),
            (0, i.jsx)(lP, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n7(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && n2(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: ld.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: ld.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: o()(ld.Pu, ld.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: ld.$0,
                      children: (0, i.jsx)(nZ.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: P.intl.string(T.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function lD(e) {
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
        [p, x] = a.useState({}),
        [j, b] = a.useState({}),
        [y, k] = a.useState({}),
        [w, S] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [A, C] = a.useState({}),
        [N, I] = a.useState({}),
        [E, _] = a.useState(!1),
        [M, R] = a.useState(0),
        [L, $] = a.useState(null),
        [q, D] = a.useState(null),
        [F, O] = a.useState(null),
        [G, z] = a.useState(!1),
        U = a.useRef(null),
        [B, K] = a.useState(null),
        H = a.useRef(null),
        V = a.useRef(0),
        W = null == r,
        X = l.questions.length,
        Q = Math.min(M, X - 1),
        Z = l.questions[Q],
        [Y, J] = a.useState({ id: Z.id, expanded: !1 }),
        ee = Y.id === Z.id && Y.expanded,
        [et, en] = a.useState(null),
        el = j[Z.id] ?? "",
        er = !0 === Z.multi_select,
        ei = n2(Z),
        ea = er ? P.intl.string(T.default.tE8qbz) : n4(Z),
        es = er
            ? (y[Z.id] ?? lL)
            : ((t = p[Z.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : n3),
        eu = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [u, o] = a.useState({}),
                c = P.intl.string(T.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                f = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : n5(t[e.id])),
                    [t, l, u],
                ),
                m = a.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = a.useCallback(
                    (a, u) => {
                        let d = a.id,
                            m = !0 === a.multi_select,
                            h = l[d] ?? null;
                        if (u) return n7(h, f(a));
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
                                    null != l && (0, ts.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(a),
                            busy: i[d]?.busy ?? null,
                            error: i[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, ts.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !n5(e[d])) return e;
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
                                                error: { source: "upload", text: P.intl.string(T.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, ts.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : P.intl.string(T.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, f, n, i],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, p, x),
        eo = eu.imageFor(Z.id),
        ec = eu.selectedFor(Z),
        { text: ed, phase: ef } = (0, n0.Q)(Z.question),
        em = ed === Z.question,
        eh = em && et?.id === Z.id && et.truncated;
    a.useLayoutEffect(() => {
        if (null == B || ee || !em) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Z.id && t.truncated === e ? t : { id: Z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [em, B, Z.id, ee]);
    let eg = P.intl.string(ee ? P.t.iTcuma : P.t.dcl9MQ),
        ep = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = nU(t, n);
                        if ("" !== i) {
                            var a;
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
                                            i = "entities" === t.kind ? t.entities : [],
                                            a = "entities" === t.kind && i.length > 0 ? t.guildId : void 0,
                                            s = "image" === t.kind || "multi" === t.kind ? t.attachment : void 0;
                                        return [
                                            {
                                                question_id: e.id,
                                                option_ids: l,
                                                ...(null != r && "" !== r ? { custom: r } : {}),
                                                ...(null != s ? { attachment_id: s.id } : {}),
                                                ...(i.length > 0 ? { entities: i } : {}),
                                                ...(null != a ? { guild_id: a } : {}),
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
                                              return (0, nO.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
        ),
        ex = a.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    D({ question: Z, draft: el, selected: es, ownImage: eo, ownSelected: ec, direction: t, moves: n }),
                    z(!0),
                    R(e));
            },
            [el, eo, ec, Z, es],
        ),
        ev = a.useCallback(() => {
            let e = U.current,
                t = H.current;
            null != e && null != t && O({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = U.current,
            t = H.current;
        if (null == e || null == t) return;
        ev();
        let n = new ResizeObserver(ev);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ev]);
    let ej = L?.moves;
    a.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => z(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let eb = a.useCallback(
            (e) => {
                let t = nz(l, e, Q);
                null == t ? ep(e) : ex(t, t < Q ? "back" : "forward");
            },
            [l, Q, ep, ex],
        ),
        ey = a.useCallback(
            (e) => {
                if (W) return;
                let t = { ...p, [Z.id]: e };
                (x(t), eb(t));
            },
            [eb, p, W, Z.id],
        ),
        ek = a.useCallback(() => {
            W || 0 === Q || ex(Q - 1, "back");
        }, [W, Q, ex]),
        ew = 0 !== Q || W ? void 0 : c,
        eS = (Q > 0 && !W) || null != ew,
        eA = a.useCallback(
            (e) => {
                b((e) => ({ ...e, [Z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ei ? W || x((e) => ({ ...e, [Z.id]: t })) : ey(t);
            },
            [W, ei, Z.id, ey],
        ),
        eC = a.useCallback(() => {
            (b((e) => ({ ...e, [Z.id]: "" })), ey({ kind: "custom", text: P.intl.string(T.default.zxSq2q) }));
        }, [Z.id, ey]),
        { multiPartFor: eI } = eu,
        eE = a.useMemo(() => (er ? nB(Z, es, el, eI(Z)) : null), [el, er, eI, Z, es]),
        e_ = w[Z.id] ?? l$,
        eM = a.useMemo(() => {
            var e, t;
            let n;
            return null != Z.input
                ? ((e = Z.input),
                  (t = A[Z.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: e_,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...e_.map((t) => (t.name.startsWith(nV[e]) ? t.name : `${nV[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, A, e_, Z.id, Z.input]),
        eR = a.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Z.id]: e })), C((e) => ({ ...e, [Z.id]: t })));
            },
            [Z.id],
        ),
        eT = a.useCallback(() => _(!0), []),
        eP = a.useCallback(() => _(!1), []),
        eL = eu.controlsFor(Z, W),
        e$ = a.useMemo(() => {
            var e;
            let t;
            return (
                (e = p[Z.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: P.intl.string(T.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(Z, e))
                    ? null
                    : "" === el.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? nB(Z, [t.optionId], el)
                        : nB(Z, [], el, t)
            );
        }, [p, el, Z]),
        eq = a.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eM, eE ?? e$, el),
            [el, eE, e$, eM],
        ),
        eD = a.useCallback(() => {
            null != eq && ey(eq);
        }, [eq, ey]),
        [eF, eO] = a.useState(!1),
        [eG, ez] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eO(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eU = a.useCallback(() => {
            null != s && (ez(!0), setTimeout(s, 150));
        }, [s]),
        eB = eq ?? (null == eM && null == eE ? (p[Z.id] ?? null) : null),
        eK = a.useMemo(
            () =>
                null == eB
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == nz(e, r, n) && "" === nU(e, r) ? null : r;
                      })(l, p, Q)
                    : null,
            [p, l, Q, eB],
        ),
        eH = null != eK,
        eV = (null != eB || eH) && !W,
        eW = Q === X - 1,
        eX = a.useCallback(() => {
            W || (null != eB ? ey(eB) : null != eK && (x(eK), eb(eK)));
        }, [eb, W, eB, ey, eK]),
        eQ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, ti.vq)(e.target, HTMLTextAreaElement) ||
                    (0, ti.vq)(e.target, HTMLInputElement) ||
                    ((!(0, ti.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (ew ?? ek)())
                            : "ArrowRight" === e.key && eV && (e.preventDefault(), eX())));
            },
            [ew, eS, eV, ek, eX],
        ),
        eZ =
            ei && !0 !== Z.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: ld.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: ld.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(tc.y, {
                              value: el,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  b((e) => ({ ...e, [Z.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eD());
                              },
                              placeholder: P.intl.string(nG(Z) ? T.default.yLN1x6 : T.default["tOC+tn"]),
                              "aria-label": P.intl.formatToPlainString(T.default["4JeYPB"], { question: Z.question }),
                              disabled: W,
                              rows: 1,
                              className: ld.Pu,
                              "data-conjure-clarification-other": Z.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: o()(ld.$O, { [ld.fI]: eF && !eG, [ld.Oh]: eG }),
        role: "dialog",
        "aria-label": Z.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": E && !G ? "true" : void 0,
        "data-step": Q,
        tabIndex: -1,
        onKeyDown: eQ,
        children: [
            (0, i.jsxs)("div", {
                className: ld.rf,
                style: null == F ? void 0 : { height: F.heading + F.rows },
                "data-moving": G ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: U,
                        className: ld.wx,
                        children: [
                            (0, i.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${Z.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : g,
                                className: o()(nT.TK, ld.R_, { [ld.TB]: "exit" === ef, [ld.JU]: "enter" === ef }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, i.jsx)("div", {
                                      className: nT.Q7,
                                      children: (0, i.jsx)(tu.m, {
                                          text: eg,
                                          children: (0, i.jsx)(tj.K, {
                                              icon: ee ? nY.ChevronSmallUpIcon : eN.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => J({ id: Z.id, expanded: !ee }),
                                              "aria-label": eg,
                                              "aria-controls": `${Z.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, i.jsx)(ne.D, {
                                      className: o()(nT.gb, nT.Q7),
                                      onClick: eU,
                                      "aria-label": P.intl.string(T.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, i.jsx)(tn.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: ld.Cg,
                        style: null == F ? void 0 : { insetBlockStart: F.heading },
                        children: (0, i.jsxs)("div", {
                            className: ld.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: H,
                                    className: ld.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Z.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        null == ea
                                            ? null
                                            : (0, i.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: ld.aK,
                                                  children: ea,
                                              }),
                                        (0, i.jsx)(lP, {
                                            projectId: n,
                                            question: Z,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? k((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Z.id]:
                                                                  ((n = t[Z.id] ?? lL),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Z.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eA(e),
                                            own: eL,
                                        }),
                                        null != Z.input
                                            ? (0, i.jsx)(lj, {
                                                  projectId: n,
                                                  question: Z,
                                                  value: e_,
                                                  disabled: W,
                                                  onChange: eR,
                                                  onFocus: eT,
                                                  onBlur: eP,
                                                  fallback: !1 === Z.allow_custom ? eZ : null,
                                              })
                                            : null,
                                        !0 === Z.link && e_.length > 0 && null == N[Z.id]
                                            ? (0, i.jsx)("div", {
                                                  className: ld.X_,
                                                  children: (0, i.jsx)(nZ.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: P.intl.string(T.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => I((e) => ({ ...e, [Z.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === Z.link && e_.length > 0 && null != N[Z.id]
                                            ? (0, i.jsxs)("div", {
                                                  className: ld.$y,
                                                  onFocus: eT,
                                                  onBlur: eP,
                                                  children: [
                                                      (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: P.intl.string(T.default.Odrcmq),
                                                      }),
                                                      (0, i.jsx)(nJ, {
                                                          label: P.intl.string(T.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: N[Z.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => I((t) => ({ ...t, [Z.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != Z.note
                                            ? (0, i.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: ld.aK,
                                                  children: Z.note,
                                              })
                                            : null,
                                        !1 === Z.allow_custom ? null : eZ,
                                        !0 === Z.upload
                                            ? (0, i.jsx)("div", {
                                                  className: ld.$0,
                                                  children: (0, i.jsx)(nZ.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: P.intl.string(T.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eC,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == q
                                    ? null
                                    : (0, i.jsx)(
                                          lq,
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
            X > 1 || er || ei || null != Z.input || null != c || !0 === Z.optional || nG(Z)
                ? (0, i.jsxs)("div", {
                      className: nT.qr,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  X > 1
                                      ? P.intl.formatToPlainString(T.default.yzYUjq, { index: Q + 1, total: X })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: nT.zt,
                              children: [
                                  eS
                                      ? (0, i.jsx)(nZ.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: f ?? P.intl.string(T.default.Pk5lfA),
                                            onClick: ew ?? ek,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  h
                                      ? null
                                      : (0, i.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eW
                                                ? (u ?? P.intl.string(P.t.geKm7t))
                                                : P.intl.string(eH ? T.default.ZcrbKz : T.default.w1nRmT),
                                            disabled: !eV,
                                            onClick: eX,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eW ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lF = n(71637),
    lO = n(77135);
let lG = { guildId: null, channelId: null };
function lz(e) {
    let { projectId: t } = e,
        n = (0, Q.Ay)(t),
        l = n?.sourceApplicationId ?? null,
        r = a.useMemo(
            () =>
                null == l ? void 0 : { text: P.intl.string(T.default.Zlbwxc), onClick: () => (0, lO.default)(l, lG) },
            [l],
        );
    return null == n
        ? null
        : (0, i.jsx)(t3.w, { type: "info", role: "none", message: P.intl.format(T.default.PTo2Qf, {}), action: r });
}
var lU = n(557744),
    lB = n(223347),
    lK = n(894443),
    lH = n(525530),
    lV = n(513425),
    lW = n(708679);
function lX(e) {
    return (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let lQ = "scope-setup:q0",
    lZ = `${lQ}:0`,
    lY = `${lQ}:1`;
var lJ = n(715924);
let l0 = [];
function l1() {}
function l2(e) {
    let { projectId: t, card: n } = e,
        l = a.useId(),
        [r] = n.clarification.questions,
        [s, u] = a.useState(r.default_entities ?? l0),
        { onPickServer: c, onBack: f } = n,
        m = s[0]?.id;
    return (0, i.jsxs)("section", {
        className: o()(nT.nd, nT.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, i.jsxs)("div", {
                className: lJ.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: l,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: P.intl.string(T.default.ickKBI),
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: P.intl.string(T.default.OyM4SV),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lJ.Qs,
                children: [
                    (0, i.jsx)(lj, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: l1,
                        onBlur: l1,
                    }),
                    null != r.note
                        ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: lJ.qr,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: P.intl.string(T.default.PTIP7V),
                        disabled: null == m || null == c,
                        onClick: () => {
                            null != m && c?.(m);
                        },
                    }),
                    null != f
                        ? (0, i.jsx)(nZ.Q, {
                              variant: "secondary",
                              textVariant: "body-sm/medium",
                              text: P.intl.string(P.t["ETE/oC"]),
                              onClick: f,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function l3(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                n = (0, eZ.z9)("ConjureScopeSetupCard"),
                [l, r] = a.useState(null),
                [i, s] = a.useState(!1),
                [u, o] = a.useState(null),
                d = t?.install_scope_setup,
                f = "server" === l || (null == l && "choose_server" === d),
                m = t?.guild_id,
                h = a.useMemo(() => {
                    var t;
                    return f
                        ? ((t = m ?? (0, lW.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: P.intl.string(n.length > 0 ? T.default.ZWXDeI : T.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: n.length > 0 ? [] : [{ id: lZ, label: P.intl.string(T.default.qLYOpH) }],
                                      ...(0, lW.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: lQ,
                                      question: P.intl.string(T.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: lZ,
                                              label: P.intl.string(T.default.qLYOpH),
                                              detail: P.intl.string(T.default.QSKvUE),
                                          },
                                          {
                                              id: lY,
                                              label: P.intl.string(T.default.QV5C7b),
                                              detail: P.intl.string(T.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [f, n, m, e]);
            if (null == d) return null;
            if (null == t || !(0, eP.PV)(t))
                return { clarification: (0, lW.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, lW.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: h,
                readOnly: !1,
                onSubmit: i
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          null != n && (n.option_ids.includes(lY) ? r("server") : g("user", null));
                      },
                submitText: P.intl.string(P.t["cY+Oob"]),
                onBack: f && !i ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: f && n.length > 0,
                onPickServer: i ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : P.intl.string("server" === u ? T.default["XXKd+7"] : T.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, i.jsx)(lD, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, i.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, i.jsx)(l2, { projectId: t, card: n }, n.clarification.id)
                        : (0, i.jsx)(
                              lD,
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
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function l4(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: i, feature: s } = l,
                u = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(t), [t]),
                o = (0, eZ.z9)("ConjureScopeSwitchCard"),
                [d, f] = a.useState(!1),
                [m, h] = a.useState(null),
                g = u?.guild_id,
                p = a.useMemo(() => {
                    let [e] = n.questions,
                        t = P.intl.formatToPlainString("guild" === i ? T.default["jh/iy+"] : T.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === i
                                ? { ...e, question: t, allow_custom: !1, ...(0, lW.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: P.intl.string(T.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, i]);
            if (null == u || !(0, eP.PV)(u))
                return { clarification: (0, lW.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (f(!0), h(null));
                try {
                    await (0, lW.yN)(t, n.id, i, e);
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
                          "user" === i ? x(null) : null != n && x(n.id);
                      },
                submitText: P.intl.string("guild" === i ? T.default.Ua7yKM : T.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, lW.RW)(t) ? r() : h("failed"));
                      },
                backText: P.intl.string("guild" === i ? T.default["4WnIqd"] : T.default["am+p7p"]),
                hideSubmit: "user" === i,
                failure: null == m ? null : P.intl.string("locked" === m ? T.default.irUT0N : T.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, i.jsx)(
              lD,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(
                      lD,
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
                      ? (0, i.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var l5 = n(564963),
    l7 = n(530557),
    l8 = n(431527),
    l9 = n(628284);
let l6 = new Set(["select", "channel", "role", "user"]);
function re(e, t) {
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
function rt(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rn = n(914250),
    rl = n(202723);
function rr(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        f = a.useCallback(() => {
            (0, H.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        m = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: l7.KeyIcon })), [r.fields]),
        h = (0, l5.bB)(l, s),
        g = o()(rl.Lo, { [rl.jY]: h });
    if ("superseded" === s)
        return (0, i.jsx)(
            "article",
            {
                className: g,
                children: (0, i.jsx)(v.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: P.intl.string(T.default.CTxtdV),
                }),
            },
            s,
        );
    if ("inactive" === s)
        return (0, i.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: P.intl.string(T.default.HCQvpO),
                    }),
                    (0, i.jsx)(l8.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: m }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, i.jsx)(
            "article",
            {
                className: rl.Lo,
                children: (0, i.jsx)(l8.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: m }),
            },
            s,
        );
    if ("received" === s)
        return (0, i.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, i.jsxs)("div", {
                        className: rl.$h,
                        children: [
                            (0, i.jsx)("span", {
                                className: rl.c9,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(l9.CircleCheckIcon, {
                                    size: "xs",
                                    color: tC.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: P.intl.string(T.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                P.intl.formatToPlainString(T.default["Z+FC3j"], {
                                    label: e,
                                    value: P.intl.string(T.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : P.intl.string(T.default.MPGSHL),
        x = (0, i.jsx)(d.$, { variant: "primary", size: "sm", onClick: f, text: P.intl.string(T.default.EK8tKY) });
    return null != c
        ? (0, i.jsxs)("section", {
              className: o()(nT.nd, rl.fw),
              "aria-label": P.intl.string(T.default.O0QIqj),
              children: [
                  (0, i.jsxs)("div", {
                      className: nT.wx,
                      children: [
                          (0, i.jsx)(l7.KeyIcon, { size: "xs", color: tC.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nT.TK,
                              children: P.intl.string(T.default.O0QIqj),
                          }),
                          (0, i.jsx)(ne.D, {
                              className: o()(nT.gb, nT.Q7),
                              onClick: c,
                              "aria-label": P.intl.string(T.default.Hl7rif),
                              children: (0, i.jsx)(tn.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: rl.DQ,
                      children: [
                          (0, i.jsx)(rn.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, i.jsx)(l8.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: m }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: nT.qr,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rl.xE,
                              children: P.intl.string(T.default["2OdXdn"]),
                          }),
                          (0, i.jsx)("div", { className: nT.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("article", {
              className: rl.Lo,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: P.intl.string(null != u ? T.default.O0QIqj : T.default.HCQvpO),
                  }),
                  (0, i.jsx)(rn.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, i.jsx)(l8.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: m }),
                  (0, i.jsx)("div", { className: rl.sq, children: x }),
              ],
          });
}
var ri = n(442331);
let ra = new Set(),
    rs = new Set();
function ru(e) {
    return (
        rs.add(e),
        () => {
            rs.delete(e);
        }
    );
}
function ro() {
    return a.useSyncExternalStore(ru, () => ra);
}
function rc(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, t8.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rd(e, t, n) {
    if (!n || null == t) return !1;
    let l = rt(e, t);
    return l.length > 0 && !re({ keys: l }, t);
}
var rf = n(782973),
    rm = n(290713),
    rh = n(411236);
function rg(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: f,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = ro(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                u = a.useCallback(() => {
                    if (null != n) {
                        if (!ra.has(n)) for (let e of ((ra = new Set([...ra, n])), rs)) e();
                    } else i(!0);
                }, [n]),
                o = (0, c.bG)([ri.A], () => rd(t, ri.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([lV.A], () => null != n && rc(lV.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [ri.A, nq.A],
                    () => {
                        var n;
                        let l = ri.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nq.A.getChannel(e)?.name ?? null),
                              rt(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: P.intl.formatToPlainString(T.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return P.intl.string(T.default.CJq1rY);
                                                      case "checkbox":
                                                          return P.intl.string(
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
                                                                      : P.intl.string(T.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? P.intl.string(T.default.nEv677)
                                                              : P.intl.string(T.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return P.intl.string(T.default.Fw9G9A);
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
        return (0, i.jsx)("article", {
            className: rh.Mk,
            children: (0, i.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(T.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: rh.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: rh.Ol,
                    children: [
                        (0, i.jsx)(l9.CircleCheckIcon, {
                            size: "xs",
                            color: tC.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: P.intl.string(T.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === rf.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : P.intl.string(T.default.XuOf5s);
    return (0, i.jsx)(rm.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: h,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: a } = e;
            async function s(e) {
                (e.preventDefault(), await a());
            }
            let u = (0, i.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: P.intl.string(T.default.A7dQd9),
            });
            return null == r
                ? (0, i.jsxs)("form", {
                      className: rh.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(T.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, i.jsx)(rn.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: rh.p0, children: u }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: o()(nT.nd, nT.jx),
                      "aria-label": P.intl.string(T.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: nT.wx,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nT.TK,
                                      children: P.intl.string(T.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(ne.D, {
                                      className: o()(nT.gb, nT.Q7),
                                      onClick: r,
                                      "aria-label": P.intl.string(T.default["iq+Pte"]),
                                      children: (0, i.jsx)(tn.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: rh.DQ,
                              children: [
                                  null != x
                                      ? (0, i.jsx)(rn.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: nT.qr,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rh.xE,
                                      children: P.intl.string(T.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: nT.zt,
                                      children: [
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: P.intl.string(T.default["9J3OG8"]),
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
var rp = n(975571),
    rx = n(427123);
let rv = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rj = n(874421),
    rb = n(932111),
    ry = n(940874),
    rk = n(404373),
    rw = n(89222);
function rS(e) {
    return "" !== rw.A.getDraft(e).trim();
}
var rA = n(29080);
function rC(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, t7.B4)(r),
        c = o.filter((e) => "message" === e.type).at(-1),
        d =
            !a &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = o.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !a && !s && "" !== i.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, t7.Lf)(r) }),
    };
}
var rN = n(62617),
    rI = n(182368);
let rE = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r_ = {
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
    rM = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rN.Z)(),
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
                    u = a.useMemo(
                        () => (0, rN.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rN.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rI.u, tint: "var(--illo-purple-40)" },
    };
function rR(e) {
    return { ...rM[e], name: P.intl.string(r_[e]()) };
}
function rT(e) {
    return rE.includes(e) ? rR(e) : void 0;
}
function rP(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rE.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rE[(t + n) % rE.length]);
            }),
            l
        );
    })(e))
        t.set(n, rR(l));
    return t;
}
var rL = n(615839);
function r$(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(T.default.KcFvbo);
}
var rq = n(60160),
    rD = n(101147);
function rF(e) {
    let t = (0, t7.SY)(e.steps);
    return null != t ? (0, t7.WQ)(t) : r$(e.task);
}
function rO(e) {
    let t = rP(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rT(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r$(e.task),
                      todoId: e.task.todoId,
                      line: rF(e),
                  },
              ];
    });
}
function rG(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, t7.SY)(n.steps),
        d = o
            ? rF(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r$(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(T.default.YrVgOf, { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(T.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(T.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rL.MB)(e.durationMs),
                              });
                          return P.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                      default:
                          return P.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                  }
              })(u),
        f = o ? c : void 0,
        m =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, i.jsx)("ol", {
                                    className: nv.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            rD.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, i.jsx)(
                                  "div",
                                  {
                                      className: nv.iq,
                                      children: (0, i.jsx)(rq.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(nn.A, {
        glyph: (0, i.jsx)(nl.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: r$(u),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nv.nC,
                children: (0, i.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
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
var rz = n(998445),
    rU = n(643210),
    rB = n(648127),
    rK = n(372795),
    rH = n(163897);
let rV = "conjure-browser-viewer";
function rW(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rU.A],
            () =>
                n.flatMap((e) => {
                    let n = rU.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, i.jsx)("ul", {
        className: rH.kR,
        "aria-label": P.intl.string(T.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(rX, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rX(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, u] = (function () {
            let [e, t] = a.useState(null),
                [n, l] = a.useState(!1);
            return (
                a.useEffect(() => {
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
        c = (0, H.Ry)(rV),
        [d, f] = a.useState(!1),
        m = a.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, rB.i)(l.session);
    return (0, i.jsxs)(ne.D, {
        innerRef: s,
        className: o()(rH.Nr, h && rH.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, H.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(459368),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, i.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rV },
                )
            );
        },
        "aria-label": P.intl.formatToPlainString(T.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: rH.Gt,
                children: [
                    (0, i.jsx)(rK.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rH.Ji,
                        "aria-label": P.intl.formatToPlainString(T.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: rH.qf,
                              children: (0, i.jsx)(rz.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: rH.HS,
                              children: (0, i.jsx)(v.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: P.intl.string(T.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: rH.pG,
                children: [
                    (0, i.jsx)("span", { className: o()(rH.W9, h && rH.oM) }),
                    (0, i.jsx)(v.E, {
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
var rQ = n(268409);
let rZ = new WeakMap(),
    rY = new WeakMap();
function rJ(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = a.useMemo(
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
            [lV.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rZ.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rY.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rY.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rZ.set(e, n), n);
                })(lV.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, i.jsx)("li", { className: rQ.h, children: (0, i.jsx)(rW, { projectId: t, sessionIds: u }) });
}
var r0 = n(469393);
function r1(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, V.lG)(t.authored_at);
    return (0, i.jsx)(ns, {
        title: P.intl.string(T.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: r0.r,
            children: [
                (0, i.jsxs)("div", {
                    className: r0.z,
                    children: [
                        (0, i.jsx)(v.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, i.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: P.intl.string(T.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var r2 = n(493490),
    r3 = n(17742);
let r4 = [];
function r5(e) {
    let t = (0, c.bG)([r2.A], () => (null != e ? r2.A.getCaptures(e) : r4)),
        n = (0, c.bG)([r2.A], () => (null != e ? r2.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, r3._F)(e, n);
                        t || r({ key: i, url: l });
                    } catch {}
                })(),
                () => {
                    t = !0;
                }
            );
        }, [e, n, i]),
        { captures: t, selected: n, src: null != l && l.key === i ? l.url : null }
    );
}
var r7 = n(714917),
    r8 = n(463660),
    r9 = n(970211);
function r6(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([r7.A], () => (null != e ? r7.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, i] = a.useState(null),
                [s, u] = a.useState(null),
                [o, d] = a.useState(!1);
            (a.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => d(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                a.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        !(async function (e, l) {
                            let r;
                            try {
                                r = await (0, r8.Mg)(e, l);
                            } catch {
                                r = t;
                            }
                            n || i(r);
                        })(e, l),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, l, t]));
            let f = null != l ? r : null,
                m = null == l || (null != f && f === s) ? t : f,
                h = a.useCallback(() => {
                    m === f && u(f);
                }, [m, f]);
            return { src: null == e || null != n || o ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = r5(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, i.jsx)("img", { className: r9.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: o()(r9.LO, { [r9.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var ie = n(155718);
function it(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let il = ["command", "user_command", "message_command", "message"],
    ir = new Set([ie.kc.CHAT, ie.kc.USER, ie.kc.MESSAGE]);
function ii(e) {
    return e.type ?? ie.kc.CHAT;
}
function ia(e) {
    return ir.has(ii(e));
}
function is(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iu(e, t) {
    let n = il.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !is(e)), ...n.filter(is)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || is(r) || l.push(r);
    }
    return il.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function io(e, t, n) {
    let l = e.bot?.example_exchanges ?? [],
        r = { kind: "event", user: "", bot: n.event };
    if ("events" === t) {
        let e = l.slice(0, 3).map((e) => {
            let { bot: t } = e;
            return "" !== t.trim() ? { ...r, bot: t } : r;
        });
        return e.length > 0 ? e : [r];
    }
    let i = l.flatMap((e) => {
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
        a = { kind: "message", user: n.message, bot: n.reply };
    if ("messages" === t && 0 === i.length) return [a];
    let s = e.commands.filter(ia).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (ii(e)) {
                    case ie.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case ie.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(is),
        o = i.length > 0 ? iu([...i, ...u], !0) : iu("both" === t ? [...s, a] : s, !1);
    return o.length > 0 ? o : [r];
}
var ic = n(377941),
    id = n.n(ic);
function im(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function ih(e) {
    return e.type === ie.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === ie.kc.USER || e.type === ie.kc.MESSAGE
          ? ""
          : "/";
}
let ig = {
        [en.q7.APP_CHANNEL]: T.default["3/aHX6"],
        [en.q7.VOICE_CHANNEL]: T.default["3/aHX6"],
        [en.q7.ACTIVITY]: T.default["3/aHX6"],
        [en.q7.OVERLAY]: T.default["rPpf5/"],
        [en.q7.PROFILE_WIDGET]: null,
        [en.q7.AUTOMOD]: null,
        [en.q7.BOT]: null,
        [en.q7.APPLICATION_COMMANDS]: null,
    },
    ip = [en.q7.ACTIVITY, en.q7.APP_CHANNEL, en.q7.VOICE_CHANNEL, en.q7.OVERLAY];
function ix(e) {
    return ip.find((t) => it(e, t)) ?? null;
}
let iv = 1920 / 1018;
function ij(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ib = ij(24, 1018),
    iy = ij(24, 1920);
function ik(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var iw = n(90947),
    iS = (((l = {}).IMAGE = "image"), l),
    iA = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    iC = n(598748),
    iN = n(773669);
let iI = [],
    iE = {},
    i_ = {};
function iM(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function iR(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: iS.IMAGE,
        visibility: iA.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var iT = n(127258),
    iP = n(803306),
    iL = n(587895),
    i$ = n(432005),
    iq = n(963852),
    iD = n(95701),
    iF = n(619019),
    iO = n(427262);
let iG = new iD.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function iz(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([nF.default], () => nF.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, iP.nj)(new iF.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let iU = /^@\S+/;
var iB = n(775602);
let iK = [T.default["3eTjcV"], T.default.l3j5nS];
var iH = n(97808),
    iV = n(778712),
    iW = n(486020),
    iX = n(46054),
    iQ = n(200700);
let iZ = {
        alert: { label: () => P.intl.string(T.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => P.intl.string(T.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => P.intl.string(T.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => P.intl.string(T.default.RGzFNK), blockedStyle: !1 },
    },
    iY = {
        blocked: { label: () => P.intl.string(T.default.YdnZ8q), tone: "red" },
        alert: { label: () => P.intl.string(T.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => P.intl.string(T.default.RGzFNK), tone: "green" },
    },
    iJ = ["blocked", "alert", "allowed"],
    i0 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function i1(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : P.intl.formatToPlainString(P.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iQ.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? P.intl.formatToPlainString(P.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? P.intl.formatToPlainString(P.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? P.intl.formatToPlainString(P.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? P.intl.formatToPlainString(P.t.opVZ9q, { mins: n / 60 })
                                      : P.intl.formatToPlainString(P.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var i2 = n(984097),
    i3 = n(13673);
let i4 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function i5(e) {
    let { example: t } = e,
        n = i1(t);
    return null == n
        ? null
        : (0, i.jsx)(v.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let i7 = ["glazedgamer", "sprinkles", "donutking"];
function i8(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = iZ[n.outcome];
    return (0, i.jsxs)("li", {
        className: o()(i2.nM, { [o()(i2.HV, i3.DX)]: s }),
        children: [
            (0, i.jsx)(nr.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: i2.my,
                children: (0, i.jsx)(iH.eu, {
                    src: (0, iW.AE)(void 0, void 0),
                    size: iV._3.SIZE_24,
                    "aria-label": P.intl.string(T.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: i2.fw,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), iX.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(i5, { example: n }) : null,
                ],
            }),
        ],
    });
}
function i9(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = iY[t.section],
        s = new Set(t.examples.map(i1)),
        u = 1 === s.size ? t.examples.map(i1)[0] : null;
    return (0, i.jsxs)("div", {
        className: i2.UO,
        children: [
            (0, i.jsxs)("div", {
                className: i2.RZ,
                children: [
                    (0, i.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: i4[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: i2.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, i.jsx)(v.E, {
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
            (0, i.jsx)("ul", {
                className: i2.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(i8, { example: e, username: i7[(n + t) % i7.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function i6(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            iJ
                .map((e) => ({ section: e, examples: t.filter((t) => i0[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: i2.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: i2.hk,
                      children: (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, i.jsx)(
                    i9,
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
var ae = n(276293),
    at = n(460905),
    an = n(110384),
    al = n(365199),
    ar = n(633018),
    ai = n(763754),
    aa = n(267508),
    as = n(194085),
    au = n(20851),
    ao = n(692508),
    ac = n(798819);
function ad(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: o()(ac.item, ac.labelContainer, ac.colorDefault, {
            [ac.focused]: !0 === t.highlighted,
            [ac.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: ac.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: ac.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: o()(ac.label, ao.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: ac.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: ac.icon }),
                  })
                : null,
        ],
    });
}
function af(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: o()(t, ao.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: P.intl.string(P.t["5IEsGx"]), icon: an.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: P.intl.string(P.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: o()(ac.menu, ao.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: ac.scroller,
            children: [
                (0, i.jsx)(ad, { item: s }),
                (0, i.jsx)("div", { className: ac.separator }),
                (0, i.jsx)(ad, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function am() {}
function ah(e) {
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
        } = ((t = (0, c.bG)([nF.default], () => nF.default.getCurrentUser())),
        (n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([iL.A], () => iL.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? P.intl.string(T.default.JEYq8M)),
        (u = (0, c.bG)([nF.default], () => (null != l ? nF.default.getUser(l) : void 0), [l])),
        (f = iz("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (m = d ? u : f),
        (h = iz("31338", P.intl.string(T.default["9iAOsw"]), { discriminator: "0003" })),
        (g = iz("31339", (0, iO.mG)(t) ?? "", { enabled: null != t })),
        {
            items: a.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, i;
                              let { bot: a, currentUser: s, viewer: u, member: o } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      i = String(c.length + 1),
                                      a = (0, i$.rh)({
                                          ...(0, iq.Ay)({
                                              channelId: iG.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eb.lAJ.DEFAULT,
                                          }),
                                          id: i,
                                          state: eb.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: i,
                                                        name: n,
                                                        type: iT.G.APPLICATION_COMMAND,
                                                        user: (0, iq.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: i, record: a, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, a, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: eb.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, a, {
                                                  interactionName: t.user,
                                                  messageType: eb.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(iU, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${o.username}`).join(`<@${o.id}>`)), a);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: P.intl.string(T.default["y+QYes"]),
                                  memberMessage: P.intl.string(T.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = iG.name;
    return (0, i.jsxs)("div", {
        className: ao.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: ao.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ae.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: o()(ao.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? ao.Rz : void 0,
                            children: [
                                (0, i.jsx)(au.A, {
                                    message: n,
                                    channel: iG,
                                    author: (0, ai.FT)(n.author, iG),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(aa.A, { message: n, channel: iG }) : void 0,
                                    usernameClassName: r?.target === "user" ? ao.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: ao.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(as.Ay, {
                                              children: [
                                                  (0, i.jsx)(as.qv, {
                                                      label: P.intl.string(P.t.lfIHs4),
                                                      icon: at.ReactionIcon,
                                                      onClick: am,
                                                  }),
                                                  (0, i.jsx)(as.qv, {
                                                      label: P.intl.string(P.t["5IEsGx"]),
                                                      icon: an.ArrowAngleLeftUpIcon,
                                                      onClick: am,
                                                  }),
                                                  (0, i.jsx)(as.qv, {
                                                      label: P.intl.string(P.t["UKOtz+"]),
                                                      icon: al.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: am,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? ao.ET : ao.je,
                                          inert: !0,
                                          children: (0, i.jsx)(af, {
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
            (0, i.jsxs)("div", {
                className: ao.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ar.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: P.intl.formatToPlainString(P.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var ag = n(332173);
function ap(e) {
    let { name: t } = e;
    return (0, i.jsxs)(ag.A, { children: ["/", t] });
}
function ax(e) {
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
            a.useMemo(
                () =>
                    (function (e) {
                        if (0 === e.length) return null;
                        let t = [...e].sort((e, t) => t.length - e.length).map(id());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(ap, { name: e.name }, e.start) : e.text));
}
n(827669);
var av = n(687966),
    aj = n(757789),
    ab = n(26137),
    ay = n(430392),
    ak = n(231483),
    aw = n(323384);
let aS = {
    frame: T.default.Z2bt4u,
    overlay_widget: T.default["0mGHfU"],
    user_widget: T.default.Jipr29,
    bot: T.default.EbvC13,
    commands: T.default.EbvC13,
    automod: T.default.tiMvei,
};
var aA = n(573634);
let aC = {
    frame: av.GameControllerIcon,
    overlay_widget: aj.WindowTopIcon,
    user_widget: ab.UserCircleIcon,
    bot: ay.RobotIcon,
    commands: ay.RobotIcon,
    automod: ak.ShieldIcon,
};
function aN(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: o()(aA.e7, l),
        children: [(0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function aI(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: aA.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: aA.jw,
                    children: (0, i.jsx)(v.E, {
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
function aE(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: aA.lj,
        children: [
            (0, i.jsx)("span", {
                className: o()(aA.Vo, aA.G),
                children: (0, i.jsx)(aw.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: aA.aV,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function a_(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: aA.wZ,
        children: t.map((e, t) => {
            let n = ih(e),
                l = e.description?.trim() ?? "";
            return (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, i.jsx)(ap, { name: e.name })
                                : (0, i.jsx)(ag.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function aM(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: aA.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: aA.Aw,
                    children: (0, i.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(ax, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function aR(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: a } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? aw.AppsIcon : aC[t.kind],
        o = P.intl.string(s ? T.default.BM4Ymz : aS[t.kind]);
    return (0, i.jsxs)("section", {
        className: aA.s9,
        "aria-label": o,
        children: [
            (0, i.jsxs)("div", {
                className: aA.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: aA.Vo,
                        children: (0, i.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, i.jsx)("div", { className: aA.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(ax, { text: n[0], commandNames: a }),
                  })
                : n.length > 0
                  ? (0, i.jsx)(aM, { bullets: n, commandNames: a })
                  : null,
            r.length > 0 ? (0, i.jsx)("div", { className: aA.PG, children: r }) : null,
        ],
    });
}
function aT(e) {
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
                                let n = t.map(id()).join("|");
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
    return (0, i.jsxs)("div", {
        className: aA.aN,
        children: [
            (0, i.jsxs)("div", {
                className: aA.Lv,
                children: [(0, i.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: aA.yF, role: "separator" }),
                            (0, i.jsx)(aR, {
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
                                                      ? [{ key: t, caption: P.intl.string(n), labels: l.map(im) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      aN,
                                                      { caption: n, children: (0, i.jsx)(aI, { labels: l }) },
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
                                                        let n = P.intl.string(T.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(en.q7.APP_CHANNEL)) {
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
                                                            launchableAnywhere: t.surfaces.includes(en.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(en.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, i.jsx)(
                                                                aN,
                                                                {
                                                                    className: aA.Iw,
                                                                    caption: P.intl.formatToPlainString(
                                                                        T.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: aA.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                aE,
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
                                                            ? [P.intl.string(T.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [P.intl.string(T.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    aN,
                                                                    {
                                                                        caption: P.intl.string(T.default.MY6UGJ),
                                                                        children: (0, i.jsx)(aI, { labels: r }),
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
                                                          (0, i.jsx)(
                                                              aN,
                                                              {
                                                                  caption: P.intl.string(P.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(a_, { commands: e.commands }),
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
var aP = n(633075),
    aL = n(591410),
    a$ = n(27399);
function aq(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nF.default], () => nF.default.getCurrentUser()),
        r = a.useMemo(() => new aP.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: a$.H,
              children: (0, i.jsx)(aL.A, {
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
var aD = n(443863);
function aF(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: ij(a.width * t, 1920), height: ij(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r6, { projectId: n }),
            (0, i.jsx)("div", {
                className: aD.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ib,
                    "--custom-conjure-plan-overlay-widget-end": iy,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: aD.M7, onError: s }),
            }),
        ],
    });
}
function aO(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, ts.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lC.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function aG(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: u } = (0, lN._)(t, r);
    return s
        ? null
        : (0, i.jsx)(ne.D, {
              className: aD.xX,
              onClick: () => aO(t, [{ id: r, alt: l }], 0),
              "aria-label": P.intl.string(T.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: aD.sN, onError: u }),
          });
}
function az(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lN._)(t, r),
        [f, m] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([iB.Ay], () => iB.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, u] = a.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => i((e) => (e + 1) % iK.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let f = a.useCallback((e) => {
                    (u(!0), i(e));
                }, []),
                m = a.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: iK.map((e) => P.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h });
    if (u) return null;
    let b = P.intl.string(T.default.mjryK4),
        y = P.intl.string(T.default["rPpf5/"]);
    return (0, i.jsxs)("div", {
        className: aD.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, i.jsx)(ne.D, {
                className: o()(aD.xX, aD.nj, { [aD.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(iv) },
                onClick: () => aO(t, [{ id: r, alt: b }], 0),
                "aria-label": P.intl.string(T.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, i.jsx)("img", { src: s, alt: b, className: aD.Ac, onError: d })
                          : (0, i.jsx)(aF, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, i.jsx)("div", {
                className: aD._4,
                role: "group",
                "aria-label": P.intl.string(T.default.EH36X6),
                children: x.map((e, t) =>
                    (0, i.jsx)(
                        ne.D,
                        {
                            className: o()(aD.c, { [aD.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, i.jsx)(v.E, {
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
function aU(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: u } = (0, lN._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(ne.D, {
                  className: aD.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: aD.rA, onError: u }),
              }),
          });
}
function aB(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: P.intl.formatToPlainString(T.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: aD.Op,
              children: (0, i.jsxs)("div", {
                  className: aD.uW,
                  children: [
                      (0, i.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: P.intl.string(T.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: aD.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(aU, { projectId: t, id: r, alt: a, onOpen: () => aO(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function aK(e) {
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
            ((n = it(x, en.q7.APPLICATION_COMMANDS)),
            (l =
                it(x, en.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(ia)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : io(x, l, {
                              message: P.intl.string(T.default.J7qggf),
                              reply: P.intl.string(T.default.nqYtiy),
                              event: P.intl.string(T.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = i_ } = t,
                r = (0, c.bG)([iN.default], () => iN.default.locale),
                i = (0, c.bG)([eP.Ay], () => {
                    let t = eP.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(iE);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ts.PK)(e, l.id).then(
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
                u = a.useMemo(
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
                                                          ...iM(n),
                                                          ...(null != n.fallback ? { fallback: iM(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = iw.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[iC.m.WIDGET_TOP] || null == a[iC.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: a,
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
                                                    for (let [e, i] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(i)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: iw.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: iw.oG.NUMBER, value: i })
                                                                : (r[e] = { type: iw.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(iR),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: iI,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == u ? null : { applicationId: i, rendererProps: u }), [i, u]);
        })(p, x),
        w = j?.superseded === !0,
        S = x.what_changed?.trim() ?? "",
        A =
            ((t = x.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === ih(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = ix(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (f = null != (o = x.design_image) && o.id !== ik(x)?.id ? o : null),
            (m = ik(x)),
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
                    null != m && null != g ? { experienceId: g, design: m, size: er(x.overlay_widget ?? null) } : null,
            }),
        N = a.useMemo(
            () =>
                x.commands.some(ia)
                    ? io({ ...x, bot: void 0 }, "commands", {
                          message: P.intl.string(T.default.J7qggf),
                          reply: P.intl.string(T.default.nqYtiy),
                          event: P.intl.string(T.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p)?.name, [p]),
        E =
            w && null != j
                ? P.intl.formatToPlainString(T.default.YZ3qJs, { version: j.version })
                : P.intl.string(T.default["3b6e7o"]),
        _ = w ? (0, i.jsx)(no, { children: P.intl.string(T.default.hF2c41) }) : null;
    return (0, i.jsxs)(nc, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: P.intl.string(T.default.yD8EJS),
        hideLabel: P.intl.string(T.default.nSPGNb),
        bodyClassName: aD.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: aD.Qs,
                children: (0, i.jsx)(aT, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(ax, { text: x.summary, commandNames: A }),
                            }),
                            (0, i.jsx)(aB, { projectId: p, proposal: x }),
                            "" !== S
                                ? (0, i.jsxs)("section", {
                                      className: aD.uW,
                                      children: [
                                          (0, i.jsx)(v.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: P.intl.string(T.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(ax, { text: S, commandNames: A }),
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
                                        e.id === C.ui?.experienceId
                                            ? (0, i.jsx)(aG, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: P.intl.string(null == (t = ix(x)) ? T.default["3/aHX6"] : ig[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(az, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(aq, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, i.jsx)(i6, { automod: x.automod })
                                    : null;
                            case "commands":
                            case "bot": {
                                let t = (function (e, t, n) {
                                    var l;
                                    let r;
                                    if ("commands" === e.kind) return n;
                                    let i = (e.example_exchanges ?? [])
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
                                        (l = i.length > 0 ? i : t),
                                        (r = l.some((e) => "command" === e.kind || is(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, i.jsx)(ah, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == b || w
                ? null
                : (0, i.jsxs)("div", {
                      className: aD.qr,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: P.intl.string(T.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: P.intl.string(T.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var aH = n(289565);
function aV(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: aH.m, children: n })
        : (0, i.jsxs)("div", {
              className: aH.Z,
              children: [
                  n,
                  (0, i.jsx)(tu.m, {
                      text: P.intl.string(P.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(tj.K, {
                          "aria-label": P.intl.string(P.t.WAI6xu),
                          icon: tn.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function aW(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function aX(e, t) {
    return null != e && aW(t, e.status);
}
let aQ = new WeakMap();
var aZ = n(175841),
    aY = n(27232),
    aJ = n(505930),
    a0 = n(506774),
    a1 = n(385081);
let a2 = "conjurePublishRatings",
    a3 = "conjurePublishRatingViews",
    a4 = [1, 2, 3, 4, 5],
    a5 = { 1: T.default.GhbsGA, 2: T.default.cm0nwU, 3: T.default.kGvlh2, 4: T.default.dVBSUg, 5: T.default.DKlgF7 };
function a7(e) {
    return P.intl.string(a5[e]);
}
let a8 = new Set(),
    a9 = 0;
function a6() {
    return a0.w.get(a2) ?? {};
}
function se(e, t) {
    return a6()[e]?.[t] ?? null;
}
function st(e) {
    return (a8.add(e), () => a8.delete(e));
}
function sn(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: i } = e;
    return {
        projectId: t,
        turnId: n,
        publishReason: l.reason ?? "first_publish",
        surface: r?.surface ?? l.surface,
        placement: i,
        publishState: r?.publishState ?? null,
    };
}
function sl(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: u,
        } = (function (e) {
            let [t, n] = a.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, a1.Fz)(e, n);
                },
            };
        })(t),
        o = P.intl.string(T.default.IqkF07);
    return (0, i.jsx)(e2.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: P.intl.string(T.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, i.jsx)(nR.f, {
            label: o,
            hideLabel: !0,
            placeholder: P.intl.string(T.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var sr = n(54100);
function si(e) {
    let { rating: t } = e;
    return (0, i.jsxs)("div", {
        className: sr.mo,
        role: "status",
        children: [
            (0, i.jsx)(aZ.SparklesIcon, { size: "xs", color: "currentColor", className: sr.dQ, "aria-hidden": !0 }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? P.intl.string(T.default["nIc9/M"])
                        : 3 === t
                          ? P.intl.string(T.default.ausj8U)
                          : P.intl.string(T.default.HilSjw),
            }),
        ],
    });
}
function sa(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            a.useSyncExternalStore(st, () => a9);
            let { publishReason: l, surface: r, placement: i, publishState: s } = sn(e);
            return (
                a.useEffect(() => {
                    !(function (e) {
                        if (null != se(e.projectId, e.turnId)) return;
                        let t = a0.w.get(a3) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, a1.rv)(e),
                            a0.w.set(a3, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: i, publishState: s });
                }, [t, n, l, r, i, s]),
                {
                    rating: se(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != se(l, r)) return null;
                            let i = { ...sn(n), rating: t };
                            (0, a1.gw)(i);
                            let a = a6();
                            return (a0.w.set(a2, { ...a, [l]: { ...a[l], [r]: t } }), a9++, a8.forEach((e) => e()), i);
                        })({ ...e, rating: t });
                        return null != n && t <= 2 ? n : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r, placement: s }),
        [d, f] = a.useState(null),
        [m, h] = a.useState(null),
        [g, p] = a.useState(!1),
        x = a.useId(),
        j = a.useId(),
        b = a.useRef(!1);
    if (
        (a.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [g]),
        null != u && !g)
    )
        return (0, i.jsx)(si, { rating: u });
    let y = null != u,
        k = y ? u : (m ?? d),
        w = y || (null == m && null != d);
    function S(e) {
        if (y) return;
        (f(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, H.qf)((e) => (0, i.jsx)(sl, { ...e, rating: t }));
    }
    return (0, i.jsxs)("div", {
        className: sr.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, i.jsxs)("span", {
                className: sr.WD,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(v.E, {
                        id: j,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(sr.Pf, { [sr.KH]: null == k }),
                        children: P.intl.string(T.default.mTV326),
                    }),
                    a4.map((e) =>
                        (0, i.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(sr.Pf, { [sr.KH]: k === e }),
                                children: a7(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: sr.uf,
                children: a4.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? aY.StarIcon : aJ.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: sr.uK,
                            onMouseEnter: () => {
                                y || h(e);
                            },
                            children: [
                                (0, i.jsx)("input", {
                                    type: "radio",
                                    name: x,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        b.current ? f(e) : S(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), S(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: sr.hF,
                                    "aria-label": P.intl.formatToPlainString(T.default.NU7Dex, {
                                        rating: e,
                                        label: a7(e),
                                    }),
                                }),
                                (0, i.jsx)(
                                    "span",
                                    {
                                        className: o()(sr.d4, { [sr.cO]: t, [sr.Ng]: t && w }),
                                        children: (0, i.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && w ? `picked-${k}` : "idle",
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
function ss(e) {
    let { projectId: t, publish: n } = e,
        l = (0, eV.A)(t, n);
    return (0, i.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function su(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eK.Ay)(t);
    return null != r && aX(r, l)
        ? (0, i.jsx)(aV, {
              children: (0, i.jsxs)(j.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(ss, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n
                          ? (0, i.jsx)(sa, {
                                projectId: t,
                                turnId: n,
                                cta: l,
                                status: r.status,
                                placement: "publish_card",
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var so = n(303345),
    sc = n(44255),
    sd = n(416473),
    sf = n(289830);
function sm(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eP.Ay],
                    () => {
                        let t = eP.Ay.getProject(e);
                        return null != t && (0, eP.jf)(t);
                    },
                    [e],
                ),
                [r, i] = a.useState("idle"),
                [s, u] = a.useState(null),
                o = a.useCallback(async () => {
                    (i("sending"), u(null));
                    try {
                        (await (0, sd.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (u(e instanceof so.A ? e.message : P.intl.string(T.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? P.intl.formatToPlainString(T.default.orZDqY, { time: (0, sc.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sc.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(ns, {
        title: P.intl.string(T.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: sf.r,
            children: [
                (0, i.jsxs)("div", {
                    className: sf.z,
                    children: [
                        (0, i.jsx)(v.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, i.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: P.intl.string(T.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: P.intl.string(T.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, i.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: P.intl.string(T.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sh = n(989271);
function sg(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(ne.D, {
        className: o()(sh.nM, { [sh.f1]: s, [sh.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(T.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: sh.jo,
                children: [
                    n
                        ? (0, i.jsx)(f.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sh.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sh.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sp(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(ns, {
        title: P.intl.string(T.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                sg,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sx = n(919790),
    sv = n(908492),
    sj = n(971824),
    sb = n(162052),
    sy = n(165648);
function sk(e) {
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
        x = a.useMemo(() => (0, t7.Jf)(n, l), [n, l]),
        v = a.useMemo(
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
        return (0, i.jsx)("ol", {
            className: nv.pj,
            "data-live": !1,
            children: (0, i.jsx)(nn.A, {
                glyph: (0, i.jsx)(rA.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(T.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, t7.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rP(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rO(k);
    return (0, i.jsxs)("ol", {
        className: nv.pj,
        "data-live": S,
        children: [
            (0, i.jsx)(t6.Ay, {
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
                let l = null != e.task.helperMark ? rT(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          rG,
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
            (0, i.jsx)(rJ, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, i.jsx)("li", {
                      className: nv.YO,
                      children: (0, i.jsx)(np, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sw(e) {
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
            sideReplyAcknowledges: S,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: N,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = a.useMemo(
            () => rC({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: R, lastStreamedMessage: L, showsClosingMessage: $, closingContent: q } = M,
        D = (A ? C : void 0) ?? M.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, i.jsx)(sx.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, i.jsx)("div", { className: nv.MT, children: O }),
        z = w
            ? (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return P.intl.string(T.default.Mv5OmK);
                          case "queued":
                              return P.intl.string(T.default["Po/2mi"]);
                          case "restarting":
                              return P.intl.string(T.default.Vj0woh);
                          default:
                              return P.intl.string(T.default.gY3L8p);
                      }
                  })(S),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nv.ue,
        children: [
            R.length > 0 && !A
                ? (0, i.jsx)("ol", {
                      className: nv.dO,
                      children: R.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nv.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: sy.PT,
                                          children: (0, sv.U)(e.content, !0, {
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
                ? (0, i.jsx)(aK, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, i.jsxs)("div", {
                        className: o()(nv.ky, sb.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: o()(sy.PT, nv.cW),
                                children: (0, sv.U)(q, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: o()(nv.ky, nv.k1, sb.XR, { [sj.O]: null != m && "open" === h }),
                      children: (0, i.jsx)(rr, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, i.jsx)("div", {
                      className: o()(nv.ky, nv.k1, sb.XR),
                      children: (0, i.jsx)(rg, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || F) ? null : O,
            null != x ? (0, i.jsx)(su, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, i.jsx)(sp, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, i.jsx)(r1, { proposal: N, onRestore: I }) : null,
            null != E ? (0, i.jsx)(sm, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var sS = n(286251),
    sA = n(146806),
    sC = n(475358),
    sN = n(783977),
    sI = n(559647),
    sE = n(787564),
    s_ = n(339200),
    sM = n(234320),
    sR = n(191023),
    sT = n(285796),
    sP = n(922329),
    sL = n(153171);
function s$(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(sP.p, {
        name: P.intl.string(T.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: tR.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(sR.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: tR.OY,
                    children: (0, i.jsx)(m.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, i.jsx)(v.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: P.intl.string(T.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: sL.o1,
            onClick: () => (0, I.xU)(t),
            "aria-label": P.intl.string(T.default.N852dj),
            children: (0, i.jsx)(sT.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sq(e) {
    let { send: t } = e;
    return (0, i.jsxs)(sP.p, {
        compact: !0,
        name: P.intl.string(T.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: P.intl.string(T.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: sL.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(nZ.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: P.intl.string(T.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sD = n(587157),
    sF = n(347111),
    sO = n(120234),
    sG = n(901173),
    sz = n(161431),
    sU = n(46653),
    sB = n(695184),
    sK = n(811091),
    sH = n(475458),
    sV = n(957071),
    sW = n(927659),
    sX = n(351906),
    sQ = n(407653),
    sZ = n(322915);
function sY(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        u = (0, c.bG)([sX.A], () => sX.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      sW.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: u,
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, i.jsx)(
                      sW.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(sQ.A, { projectId: n, file: e.file, className: sZ.Vk }),
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? f : f.slice(0, m),
        g = -1 === m ? [] : f.slice(m);
    return (0, i.jsx)(sW.Ay, {
        id: t,
        className: sZ.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": P.intl.string(T.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(sJ, { titleId: o, title: P.intl.string(T.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(sJ, { titleId: d, title: P.intl.string(T.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sJ(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sZ.Gf, children: n }),
            l,
        ],
    });
}
var s0 = n(719442),
    s1 = n(355622),
    s2 = n(408018),
    s3 = n(186306),
    s4 = n(323350),
    s5 = n(35277),
    s7 = n(68059),
    s8 = n(267102),
    s9 = n(259691);
let s6 = (0, iD.createChannelRecord)({ id: "1", type: eb.rbe.DM });
function ue(e) {
    let t = s_.VW.end(e, []);
    return { anchor: t, focus: t };
}
function ut(e) {
    return (0, s4.WO)(s_.VW.richValue(e), { mode: "raw" });
}
function un(e, t) {
    ((e.children = (0, s2.x7)(t)), (e.selection = ue(e)), e.onChange());
}
function ul(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rb.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(s9.A, { attachmentId: r }), n] });
}
var ur = n(497437),
    ui = n(465410);
let ua = "body-md/normal",
    us = null;
function uu(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        f = a.useRef(0),
        [m, h] = a.useState(0),
        [g, p] = a.useState(0),
        [x, j] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
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
                i = Number.isNaN(r) ? 0 : r,
                a = e.offsetWidth,
                s = l.offsetWidth + i;
            (p(a + i), h(s));
            let o = s + a,
                c = Math.max(n, l.offsetWidth) + i + a,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, sA._R)(f),
                frontTo: 1e3 * (0, sA._R)(m),
                backFrom: 1e3 * (0, sA.T)(f),
                backTo: 1e3 * (0, sA.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = a.useState(0),
        [k, w] = a.useState(null),
        S = a.useRef(!1),
        A = a.useCallback(() => {
            (w(S.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        S.current = n;
    }, [n, t]);
    let C = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([iB.Ay], () => iB.Ay.useReducedMotion),
        E = t === P.intl.string(T.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: o()(ur.VT, { [ur.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, i.jsx)(sC.e, { shortcut: "tab", className: ur.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(sS.o, {
                text: t,
                variant: ua,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(ur.xM, { [ur.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            M(ur.IS, n || (!I && "out" === k), u),
            (0, i.jsx)("span", {
                ref: d,
                className: ur.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(v.E, { variant: ua, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: ur.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(v.E, { variant: ua, tag: "span", className: ur.xM, children: t }),
                          M(ur.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uo = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                managedCopy: s = !1,
                running: u,
                restoring: d = !1,
                onSend: f,
                onInterrupt: m,
                escapeScopeRef: h,
                onUploadFile: g,
                onApprove: p,
                onImport: x,
                onSendToOtherProjects: v,
                suggestion: j,
                questionOpen: b = !1,
                secretPending: y = !1,
                hasPendingContext: k = !1,
                onDraftHasTextChange: w,
                modelSettings: S,
                onModelSettingsChange: A,
                visible: C = !0,
            } = e,
            N = n && !l && !r,
            E = (function (e) {
                let t = a.useContext(s8.Ay),
                    [n] = a.useState(() => {
                        let n = (0, s0.ie)();
                        return (
                            (n.children = (0, s2.x7)(e)),
                            (n.selection = ue(n)),
                            (0, s7.a)({
                                editor: n,
                                chatInputType: s1.oU.GENERIC_RICH_TEXTAREA,
                                channel: s6,
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
                                    for (let [t, l] of s_.VW.nodes(e, { at: [], match: s_.l5.isText }))
                                        for (let e of t.text.matchAll(rb.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        s3.o.withMergedEntry(e, () =>
                                            s_.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    s5.b.textToVoid(
                                                        e,
                                                        { type: "hostInlineVoid", raw: t, children: [{ text: "" }] },
                                                        {
                                                            anchor: { path: l, offset: r },
                                                            focus: { path: l, offset: i },
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
                return (a.useLayoutEffect(() => n.onChange(), [n]), n);
            })(rw.A.getDraft(t)),
            [_, M] = a.useState(() => ut(E));
        (0, sO.N$)(_);
        let R = a.useRef(_),
            [L, $] = a.useState(null),
            q = a.useCallback(() => {
                let e = ut(E);
                (e !== R.current && ((R.current = e), (0, sF.I)(t, e), M(e)),
                    $(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !s_.ZF.isCollapsed(t)) return null;
                            let [n] = s_.VW.node(e, t.anchor.path);
                            return s_.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(E),
                    ));
            }, [E, t]),
            D = a.useCallback((e) => un(E, e), [E]),
            F = "" !== _.trim();
        a.useEffect(() => w?.(F), [F, w]);
        let O = a.useRef(t);
        a.useLayoutEffect(() => {
            O.current !== t && ((O.current = t), un(E, rw.A.getDraft(t)));
        }, [E, t]);
        let G = (0, c.bG)([iB.Ay], () => iB.Ay.isSubmitButtonEnabled),
            [U, B] = a.useState(!1);
        a.useEffect(() => {
            u || B(!1);
        }, [u]);
        let {
                drafts: K,
                addFiles: H,
                pasteFiles: V,
                removeDraft: W,
                settled: X,
                takeRefs: Q,
            } = (0, td.FM)({ projectId: t, surface: "chat", onUploadFile: g }),
            Z = (0, I.fc)(t),
            Y = (0, I.bE)(t),
            J = a.useRef(Y);
        a.useEffect(() => {
            let e = J.current;
            ((J.current = Y), N && null != e && null != Y && Y !== e && s_.VW.focus(E));
        }, [Y, N, E]);
        let ee = "" !== _.trim() || K.length > 0 || k || Z,
            et = N && ee && X,
            [el, er] = a.useState(null);
        a.useEffect(() => {
            if (null == el) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => er(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [el]);
        let ei = (0, sz.rU)(t),
            [ea, es] = a.useState(null),
            [eu, eo] = a.useState(0),
            ec = a.useMemo(() => (null != L && N ? (0, sG.OG)(L, L.length) : null), [L, N]),
            ed = ec?.start ?? null;
        a.useEffect(() => {
            null == ed ? es(null) : (0, sz.IP)(t);
        }, [ed, t]);
        let ef = ed === ea ? null : ec,
            em = (function (e, t) {
                let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sH.yv)(n),
                    i = (0, c.bG)([sU.default], () => sU.default.getId()),
                    s = null != n && (0, en.pL)(n) ? n.guild_id : void 0,
                    u = t?.toLowerCase() ?? null;
                return (
                    a.useEffect(() => {
                        null != s && null != u && sB.A.requestMembers(s, u, 100);
                    }, [s, u]),
                    (0, c.yK)(
                        [li.Ay, la.A, nF.default],
                        () => {
                            if (null == u) return [];
                            let e = null != s ? la.A.getGuild(s) : null,
                                t = (t) => (0, sG.mO)(t, u, null != e ? li.Ay.getNick(e.id, t.id) : null),
                                a = new Set(n?.collaborator_role_ids ?? []),
                                o = null != e && a.has(sK.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : li.Ay.getMemberIds(e.id)
                                              .map((e) => nF.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (o ||
                                                          (li.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              a.has(e),
                                                          ) ||
                                                          ls.$3({
                                                              permission: eb.xBc.MANAGE_GUILD,
                                                              user: n,
                                                              context: e,
                                                          })),
                                              ),
                                d = new Set();
                            return [...[...(null != l ? [l] : []), ...r].filter(t), ...c].filter(
                                (e) => !(e.id === i || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                            );
                        },
                        [n, s, u, l, r, i],
                    )
                );
            })(t, ef?.text ?? null),
            eh = a.useMemo(() => (null == ef ? [] : (0, sG.l$)(em, ei, ef.text)), [ef, em, ei]),
            eg = ef?.text;
        a.useEffect(() => eo(0), [eg]);
        let ep = eh.length > 0,
            ex = Math.min(eu, Math.max(0, eh.length - 1)),
            ev = a.useId(),
            ej = a.useCallback(
                (e) => {
                    let t = eh[e];
                    null != ef &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (s5.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                s5.b.insertText(e, `${n} `));
                        })(E, ef.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eh, ef, E],
            ),
            ey = a.useCallback(() => {
                if (!et) return;
                let e = Q(),
                    n = Z
                        ? (function (e) {
                              let t = (0, I.K7)(e);
                              if (null == t || !(0, nk.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, I.C)(e);
                              return (
                                  (0, I.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, ez.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (nw.set(a, s),
                                          (s.job = (0, nk.B)({
                                              capture: (t) => (0 === t ? l : (0, I.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tX(e),
                                                              r = tX(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tW(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, ts.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ts.n6)(e, t.id),
                                              send: (n) => (0, ez.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nA(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nw.delete(a),
                                                          window.setTimeout(() => {
                                                              (nA(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                f(_, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == us && (us = document.createElement("canvas").getContext("2d"));
                    let a = us;
                    if (null == a) return i;
                    let s = getComputedStyle(e);
                    a.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let u =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (u <= 0 || a.measureText(i).width <= u) return i;
                    let o = 0,
                        c = i.length;
                    for (; o < c;) {
                        let e = Math.ceil((o + c) / 2);
                        a.measureText(i.slice(0, e)).width <= u ? (o = e) : (c = e - 1);
                    }
                    let d = i.slice(0, o),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(ud(eN.current), eq.current, (0, sG.Lj)(_));
                ("" !== l && er(l), D(""), es(null));
            }, [et, Z, t, _, f, Q, D]),
            ek = a.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = a.useCallback(() => {
                null == m || U || (B(!0), m());
            }, [m, U]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                i = a.useRef(r);
            (a.useEffect(() => {
                i.current = r;
            }),
                a.useEffect(() => {
                    if (t)
                        return (
                            window.addEventListener("keydown", e, !0),
                            () => window.removeEventListener("keydown", e, !0)
                        );
                    function e(e) {
                        var t, r;
                        "Escape" === e.key &&
                            !e.isComposing &&
                            (0, I.K7)(n)?.active !== !0 &&
                            !(0, z._c)(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, ti.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), i.current()));
                    }
                }, [t, n, l]));
        })({ active: u && null != m, projectId: t, scopeRef: h, onEscape: ew });
        let eS = null == j || "" !== _ || !N || d || k ? null : j,
            eA = a.useCallback(
                (e) => {
                    if (ep && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eh.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eo((ex + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ej(ex));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(ef?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, I.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, I.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && u && null != m) {
                        (e.preventDefault(), e.stopPropagation(), ew());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eS) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), D(eS));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != p && (e.preventDefault(), p());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ey());
                },
                [ey, p, u, m, ew, eS, D, ep, eh.length, ex, ej, ef, t],
            ),
            eC = a.useCallback(
                (e) => {
                    N && V(e);
                },
                [N, V],
            );
        (0, sM.Vo)({
            event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eC(t);
            },
        });
        let eN = a.useRef(null),
            eI = a.useCallback(() => {
                let e = R.current;
                v?.((0, sG.Lj)(e), () => {
                    R.current === e && D("");
                });
            }, [v, D]),
            [eE, e_] = a.useState(0),
            [eM, eR] = a.useState(!1);
        a.useEffect(() => {
            if (0 === _.length) return void eR(!1);
            let e = ud(eN.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && e_(t);
            }
            eR(!0);
            let t = setTimeout(() => eR(!1), uc);
            return () => clearTimeout(t);
        }, [_]);
        let eT = a.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eL = eM ? ` ${ur.EB}` : "",
            e$ = d
                ? P.intl.string(T.default.qqlUiW)
                : r
                  ? P.intl.string(T.default.Z0hyNL)
                  : l
                    ? P.intl.string(T.default.GcFRaY)
                    : N
                      ? k
                          ? P.intl.string(T.default.knUjL3)
                          : Z
                            ? P.intl.string(T.default["6rXxwa"])
                            : y
                              ? P.intl.string(T.default.VxH5vv)
                              : b
                                ? P.intl.string(T.default.IevBEw)
                                : P.intl.string(u ? T.default["0BJa/0"] : s ? T.default.dDDSuF : T.default.TEeU7z)
                      : P.intl.string(T.default.zZ9NgM),
            eq = a.useRef(0),
            eD = a.useRef(null),
            eF = a.useCallback((e) => {
                if ((eD.current?.disconnect(), null == e)) return;
                eq.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eq.current = e.clientWidth;
                });
                (t.observe(e), (eD.current = t));
            }, []),
            eO = a.useId(),
            eG = a.useId(),
            eU = null != eS,
            eB = el ?? eS ?? e$,
            eK = "" === _ && "" !== eB;
        return (0, i.jsxs)("form", {
            onSubmit: ek,
            className: ur.DA,
            children: [
                ep
                    ? (0, i.jsx)(sY, {
                          id: ev,
                          projectId: t,
                          suggestions: eh,
                          selectedIndex: ex,
                          onHover: eo,
                          onSelect: ej,
                      })
                    : null,
                K.length > 0 || Z
                    ? (0, i.jsxs)("div", {
                          className: ur.lN,
                          children: [
                              K.map((e) => (0, i.jsx)(td.Nl, { draft: e, onRemove: W }, e.localId)),
                              Z ? (0, i.jsx)(s$, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${ur.wg} ${ur.LP}${eL}`, style: eT, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${ur.wg} ${ur.L3}${eL}`, style: eT, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: ur.VA,
                    ref: eN,
                    children: [
                        (0, i.jsx)(sV.A, {
                            navId: "conjure-composer-attach",
                            disabled: !N,
                            buttonClassName: `${ur.Y0} ${ur.nu}`,
                            iconClassName: ur.Qu,
                            onAddFiles: H,
                            onImport: x,
                            onSendToOtherProjects: null != v ? eI : void 0,
                        }),
                        eK
                            ? (0, i.jsx)("div", {
                                  ref: eF,
                                  className: ur.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      uu,
                                      { text: eB, offering: eU && null == el, typed: null != el },
                                      C ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(nr.A, { id: eG, children: P.intl.string(T.default.ldNl9x) }),
                        (0, i.jsx)(rb.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(sE.A, {
                                editor: E,
                                containerClassName: o()(ur.sq, ui.dv),
                                className: ur.jp,
                                readOnly: !N,
                                canFocus: N,
                                onChange: q,
                                onBlur: () => $(null),
                                onKeyDown: eA,
                                onPaste: eC,
                                renderExtraElement: ul,
                                "aria-labelledby": eG,
                                "aria-describedby": eK ? eO : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ev : void 0,
                                "aria-activedescendant": ep ? ((0, sW.aI)(ex) ?? void 0) : void 0,
                            }),
                        }),
                        eK ? (0, i.jsx)(nr.A, { id: eO, children: e$ }) : null,
                        (0, i.jsx)("div", {
                            className: ur.Sz,
                            children:
                                u && null != m
                                    ? (0, i.jsx)(tu.m, {
                                          text: P.intl.string(T.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, i.jsx)("button", {
                                              type: "button",
                                              className: `${ur.Y0} ${ur.$E}`,
                                              disabled: U,
                                              onClick: ew,
                                              "aria-label": P.intl.string(T.default.wiguT0),
                                              children: (0, i.jsx)(rA.StopIcon, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : S?.tierSettings != null && null != A
                                      ? (0, i.jsx)(sD.A, {
                                            settings: S.tierSettings,
                                            tiers: S.tiers,
                                            choices: S.choices,
                                            disabled: !N,
                                            onChange: A,
                                            className: `${ur.Y0} ${ur.$E}`,
                                            icon: (0, i.jsx)(sN.FiltersHorizontalIcon, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        G
                            ? (0, i.jsxs)("div", {
                                  className: ur.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: ur.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: ur.rt,
                                          disabled: !et,
                                          "aria-label": P.intl.string(T.default.rxW2cl),
                                          children: (0, i.jsx)(sI.SendMessageIcon, {
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
    uc = 1500;
function ud(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uf = n(709753),
    um = n(540338);
function uh(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, t8.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var ug = n(986109);
let up = a.createContext(null);
function ux(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(up),
        [f, m] = a.useState(() => iB.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = a.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, i.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: f ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(ug.xk, { [ug.g5]: f, [ug.Qo]: s, [ug.q3]: u }),
        children: n,
    });
}
let uv = new Map();
function uj(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let ub = "live_behind",
    uy = "conjureTipDismissals",
    uk = new Set(),
    uw = new Set(),
    uS = 0;
function uA() {
    let e = a0.w.get(uy);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uC(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uk.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uA().anchor[t]?.[e.id] === n;
        case "app":
            return uA().app[t]?.includes(e.id) === !0;
        case "forever":
            return uA().forever.includes(e.id);
    }
}
function uN(e) {
    return (uw.add(e), () => uw.delete(e));
}
function uI(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([ri.A], () => null != n && n.length > 0 && re({ keys: n }, ri.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: P.intl.string(T.default.F2yVHg) }
        : null;
}
function uE(e) {
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
let u_ = [12e4];
var uM = n(292771);
function uR(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([iB.Ay], () => iB.Ay.useReducedMotion),
        [r, s] = a.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(u);
    a.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            i = r?.querySelector("[data-conjure-tip-icon]"),
            a = f.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != i
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = i.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = o));
        let g = h.current !== u;
        if (((h.current = u), !g || l || null == s || null == a || null == i || null == c)) return;
        let p = a.width / Math.max(1, c.width);
        (i.animate(
            [
                {
                    transform: `translate(${a.left - c.left}px, ${a.top - c.top}px) scale(${p})`,
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
        a.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, i.jsx)("div", {
            ref: d,
            className: uM.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uM.qd, e.leaving ? uM.dv : uM.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uT(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uP = n(247171);
function uL(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: o()(uP.row, r),
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(uP.gutter, uP[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: uP.content, children: a }),
        ],
    });
}
var u$ = n(830205);
function uq(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(uL, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: u$.aK,
        children: (0, i.jsxs)("div", {
            className: u$.n8,
            children: [
                (0, i.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: u$.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: u$.X8,
                          children: (0, i.jsx)(tu.m, {
                              text: P.intl.string(P.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tj.K, {
                                  "aria-label": P.intl.string(P.t.WAI6xu),
                                  icon: tn.XSmallIcon,
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
function uD(e) {
    let { projectId: t } = e,
        n = a.useContext(eK.bI);
    return (0, i.jsx)(uq, {
        icon: ak.ShieldIcon,
        children: P.intl.format(T.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eK.vL)(t, n.guildId));
            },
        }),
    });
}
var uF = n(443865),
    uO = n(716502);
function uG(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(uL, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uO.Nr,
        children: (0, i.jsxs)("section", {
            className: uO.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: uO.X8,
                          children: (0, i.jsx)(tu.m, {
                              text: P.intl.string(P.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tj.K, {
                                  "aria-label": P.intl.string(P.t.WAI6xu),
                                  icon: tn.XSmallIcon,
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
function uz(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uO.DD,
        children: t,
    });
}
function uU(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uO.rf,
        children: t,
    });
}
function uB(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: uO.o1, children: t });
}
var uK = n(95635);
function uH(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eV.A)(t, n);
    return (0, i.jsx)(uq, {
        icon: uK.UploadIcon,
        onDismiss: l,
        children: P.intl.format(T.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uV = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uT(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(uD, { projectId: n });
        },
    },
    {
        id: ub,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: i } = e;
            return null == n ||
                r ||
                null == l ||
                l.publishing ||
                !l.isUpdate ||
                null != l.disabledReason ||
                i < 12e4 ||
                (null != n.publishCta && aX(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(ub)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(uH, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || uT(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(uG, {
                icon: uF.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(uz, { children: P.intl.string(T.default.OJlbhX) }),
                    (0, i.jsx)(uU, { children: P.intl.string(T.default["3vJBni"]) }),
                    (0, i.jsx)(uB, {
                        children: (0, i.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: P.intl.string(T.default["U/bLzU"]),
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
var uW = n(817921);
function uX(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, eK.Ay)(e),
                    u = (0, c.bG)([nF.default], () => nF.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    f = (function (e, t) {
                        let [n, l] = a.useState(() => Date.now());
                        return (
                            a.useEffect(() => {
                                if (null == e) return;
                                let r = (function (e, t, n, l) {
                                    let r = t.map((t) => e + t);
                                    if (r.some((e) => e > n && e <= l)) return 0;
                                    let i = r.filter((e) => e > l);
                                    return i.length > 0 ? Math.min(...i) - l : null;
                                })(e, t, n, Date.now());
                                if (null == r) return;
                                let i = setTimeout(() => l(Date.now()), r);
                                return () => clearTimeout(i);
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
                                if ((0, t8.BL)(n)) return n;
                                if (!(0, t8.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || uE(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uj(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uI(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([ri.A], () => b > 0 && null == ri.A.getSettings(e), [b, e]),
                    k = (0, uf.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, t8.Ji)(t)) || !!(0, t8.B0)(t, t.lastIndexOf(i))) &&
                        (null == m || !uE(m)) &&
                        null == uh(t) &&
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
                        let l = uv.get(`${e}:${n}`);
                        return null != l ? uj(t, l, u) : null;
                    },
                    isDismissed: (t) => uC(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, u_);
            a.useSyncExternalStore(uN, () => uS);
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
                })(e, i, i.isDismissed),
                o = [s, u].filter((e) => null != e);
            return (
                a.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of o)
                        0 !== i.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                uv.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                o.map((e) => ({
                    ...e,
                    options: {
                        context: i,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || uC(e, t, n)) return;
                                          let l = uA();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uk.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  a0.w.set(uy, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  a0.w.set(uy, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  a0.w.set(uy, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uS++, uw.forEach((e) => e()));
                                      })(e.tip, t, i.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(uV, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(ux, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: uW.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(uR, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uQ = n(52133),
    uZ = n(732159),
    uY = n(888366),
    uJ = n(862026),
    u0 = n(291192);
function u1(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, uJ.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: u0.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: u0.Sp,
                children: [
                    (0, i.jsx)("span", { className: u0.q3 }),
                    (0, i.jsxs)("span", {
                        className: u0.g8,
                        children: [
                            (0, i.jsx)(uY.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: u0.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: u0.nM,
                role: "status",
                children: [
                    (0, i.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          " ",
                                          (0, i.jsx)(nZ.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, H.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(uZ.u, {
                                                                    ...t,
                                                                    title: P.intl.string(T.default["i+xjZM"]),
                                                                    subtitle: P.intl.string(T.default.fMBZmD),
                                                                    confirmText: P.intl.string(T.default.i5f3Uo),
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
                        ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var u2 = n(345942),
    u3 = n(727419);
function u4(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            P.intl.format(n ? T.default.esEGL5 : T.default["XrN+Bg"], {
                onOpen: () => u3.A.open(t, eb.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var u5 = n(976860);
function u7(e) {
    return (0, c.bG)([eP.Ay, iL.A], () => {
        let t = eP.Ay.getProject(e);
        return null == t ? "" : (iL.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var u8 = n(951465),
    u9 = n(369455);
function u6(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: u } = e,
        o = u7(s),
        d =
            null ==
            (a = (0, c.bG)([eP.Ay, la.A], () => {
                let e = eP.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (la.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        f = (0, c.cf)([eP.Ay, eU.A, la.A, eX.A], () => {
            let e = eP.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(en.q7.AUTOMOD) === !0 ||
                    eU.A.getPublishStatus(s)?.surface === "automod",
                n = la.A.getGuild(e.guild_id),
                l = null != n && eX.A.can(eb.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(v.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            P.intl.format(
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
                        null != d && (0, u2.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, i.jsx)(u4, { guildId: f.guildId, update: u.update })
                : !f.automod && u.update && null != u.published_revision
                  ? (0, i.jsx)(oe, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function oe(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eK.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [eU.A, eP.Ay],
                    () => {
                        let r = eU.A.getPublishStatus(e),
                            i = eP.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != i &&
                                "guild" === i.install_scope &&
                                (0, eP.jf)(i),
                        };
                    },
                    [e, l, t.update, n],
                );
            return null != r
                ? { state: "sent", sent: r }
                : i && null != l && null != n
                  ? { state: "offer", publishedRevision: l, fallbackGuildId: n }
                  : null;
        })(t, n);
    return null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " ",
                  "sent" === l.state
                      ? P.intl.format(T.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    ne.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: u9.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u5.pX)(eb.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : P.intl.format(T.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eP.Ay.getProject(e),
                                        i = null == r ? null : (0, eK.KL)(r, l);
                                    return null == r || null == i
                                        ? null
                                        : {
                                              projectId: e,
                                              guildId: i,
                                              applicationId: r.application_id,
                                              projectName: r.name,
                                              publishedRevision: n,
                                          };
                                })(t, l);
                                null != e && (0, u8.A)(e);
                            },
                        }),
              ],
          });
}
var ot = n(73153),
    on = n(505527),
    ol = n(367790),
    or = n(354777),
    oi = n(491182),
    oa = n(74096),
    os = n(549587),
    ou = n(448368),
    oo = n(21299),
    oc = n(538355),
    od = n(715628),
    of = n(752636),
    om = n(9842),
    oh = n(589022),
    og = n(967198),
    op = n(531685),
    ox = n(503275);
let ov = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oj(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function ob(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oy(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = ob(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === r
    )
        return !0;
    if (oj(r) && oj(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && oj(ob(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function ok(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([iB.Ay], () => iB.Ay.useReducedMotion),
        r = n && !l,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        u = i;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          i = 0;
                      for (; i < r && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && oy(t, i);) i--;
                      return i;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== i && s(u));
    let o = r && u.length < e.length,
        d = a.useRef(u);
    a.useLayoutEffect(() => {
        d.current = u;
    });
    let f = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
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
                                    i = t.length - r;
                                if (i <= 0) return r;
                                if (i > 900) return t.length;
                                let a = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && ov.has(e.charAt(l - 1));) l--;
                                    return ov.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oy(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
            );
    }, [o]),
        a.useEffect(() => {
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
var ow = n(624479),
    oS = n(890377),
    oA = n(92446),
    oC = n(957565),
    oN = n(180227);
function oI(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: o()(oN.QE, { [oN.Rn]: t }),
              children: (0, i.jsx)(as.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          as.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oE(e) {
    return oC.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: P.intl.string(P.t.JrGD7E), icon: ow.CopyIcon, onClick: () => (0, oC.C)(e) }]
        : [];
}
function o_(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: P.intl.string(T.default.CXtLD2),
                          tooltip: P.intl.string(T.default.DOb1HM),
                          icon: oS.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: P.intl.string(T.default.urZwpN),
                          icon: tn.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(oI, { groupStart: n, actions: [...r, ...oE(t)] });
}
function oM(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: P.intl.string(T.default.H8Jfhu), icon: tk.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oA.BugIcon, onClick: r }];
    return (0, i.jsx)(oI, { groupStart: n, actions: [...a, ...oE(t), ...s] });
}
let oR = (0, iD.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    oT = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oP(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: o()(oN.Yq, { [oN.x1]: t }), children: e });
}
function oL(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let o$ = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oq(e, t, n) {
    let { content: l } = (0, oc.A)(e, o$),
        r = a.useMemo(() => ((0, rb.aW)(e.content) ? (0, or.z2)(sv.U, e, o$).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: oR, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(oa.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, od.A)(s, r);
}
function oD(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oo.m)(e, oR, t.usernameProfile, l),
        u = (0, oo.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([og.A], () => og.A.getGuildId()),
        d = (0, c.bG)([nF.default], () => nF.default.getCurrentUser()),
        f = a.useCallback(
            (t) => {
                let n = nF.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(oh.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
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
let oF = { formatInline: !0, allowGameMentions: !0 };
function oO(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, oc.A)(n, oF),
        u = a.useMemo(() => {
            let e = "" === n.content ? null : (0, rb.aW)(n.content) ? (0, or.z2)(sv.U, n, oF).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: oN.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: oN.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, s, l]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: d } = (0, c.cf)(
            [nD.A],
            () => ({
                isReplyAuthorBlocked: nD.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nD.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, ai.X4)(n),
        m = (0, ai.X4)(t),
        g = oD(n);
    return (0, i.jsx)(ou.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: oR,
        referencedMessage: { state: om.a.LOADED, message: n },
        content: u,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: d,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: g.renderPopout,
        showAvatarPopout: g.showAvatarPopout,
        showUsernamePopout: g.showUsernamePopout,
        onClickAvatar: g.onClickAvatar,
        onClickUsername: g.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: g.onPopoutRequestClose,
    });
}
function oG(e) {
    let { message: t, author: n } = e,
        l = oD(t);
    return (0, i.jsx)(os.Ay, {
        message: t,
        channel: oR,
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
function oz(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, ox.vm)(l),
        c = a.useMemo(() => (0, ai.FT)(o, null), [o]),
        d = a.useMemo(() => (0, lF.W1)(t), [t]),
        f = d?.body ?? t,
        m = (0, sG.Qu)(f),
        h = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, iq.Ay)({ channelId: oR.id, content: f, author: o });
            return (0, i$.rh)({ ...e, timestamp: oL(n, e.timestamp), state: eb.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              oU,
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
function oU(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: u } = e,
        o = oq(t, l);
    return (0, i.jsx)(oi.A, {
        className: oN.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(oG, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, i.jsxs)("div", {
                      className: oN.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: oN.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: oN.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: oN.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oP(a, "" !== l),
        childrenButtons: (0, i.jsx)(o_, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oB(e) {
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
        { text: f, revealing: m } = ok(t, { streaming: (0, c.bG)([op.A], () => o && op.A.isFocused(), [o]) }),
        h = a.useMemo(() => (0, ai.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ox.vm)(p),
        v = a.useMemo(() => (null == r ? null : (0, lF.W1)(r.content)), [r]),
        j = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, iq.Ay)({ channelId: oR.id, content: v?.body ?? r.content, author: x });
            return (0, i$.rh)({ ...e, id: r.id, timestamp: oL(r.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [r, v, x]),
        b = a.useMemo(() => (null == r ? void 0 : { channel_id: oR.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, iq.Ay)({ channelId: oR.id, content: "", author: oT })),
        k = a.useMemo(
            () =>
                (0, i$.rh)({
                    ...y,
                    timestamp: oL(n, y.timestamp),
                    state: eb.cmJ.SENT,
                    ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = a.useMemo(() => k.set("content", f), [k, f]),
        S = a.useMemo(
            () => (0, of.A)({ message: k, channel: oR, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        A = oq(w, f, oN.OS);
    return (0, i.jsxs)("div", {
        className: oN.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, i.jsx)(oi.A, {
                className: oN.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, i.jsx)(oO, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: A,
                childrenAccessories: oP(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u ? (0, i.jsx)("img", { className: oN.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var oK = n(981879);
function oH(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, i$.rh)(
                    { ...(0, iq.Ay)({ channelId: oR.id, content: "" }), id: `conjure:${t}`, state: eb.cmJ.SENT },
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
        a.useEffect(() => {
            let e = { id: n.emojiId, name: n.emoji };
            function t() {
                (ot.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: oR.id,
                    messageId: l.id,
                    users: [oT],
                    emoji: e,
                    reactionType: on.v.NORMAL,
                }),
                    ot.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oR.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: on.v.NORMAL,
                    }));
            }
            return (
                t(),
                ot.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    ot.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: oK.H,
            children: (0, i.jsx)(ol.A, {
                message: l,
                channel: oR,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oV = n(442433);
n(775443);
var oW = n(990779),
    oX = n(155899);
function oQ(e) {
    let { onSelect: t, onClose: n = oV.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(eS.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": P.intl.string(P.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(eA.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(eA.Dr, {
                          id: "restore-version",
                          label: P.intl.string(T.default.H8Jfhu),
                          icon: tk.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(eA.Dr, { id: "view-trace", label: "View Trace", icon: oA.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oZ(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: a,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: o,
            secretRequestStatus: d,
            settingsFloating: f = !1,
            secretFloating: m = !1,
            isNewest: h = !1,
            onPickIdea: g,
            onApprovePlan: p,
            onRestoreVersion: x,
        } = e,
        v = n.message,
        j =
            null != x
                ? "assistant" !== v.role || null == v.sourceSha
                    ? null
                    : {
                          sha: v.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(v.created_at).toISOString(),
                          subject: v.content,
                      }
                : null,
        b = null != j && null != x ? () => oY(j, x) : void 0,
        y =
            ((t =
                O() && "assistant" === v.role && (0, t8.BL)(v)
                    ? (v.turn_id ?? v.steps.find((e) => null != e.turn_id)?.turn_id ?? v.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [oW.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : oW.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        k =
            null != y
                ? () =>
                      (function (e, t) {
                          for (let n of ((q = { projectId: e, traceId: t }), [...$])) n(e);
                      })(l, y)
                : void 0,
        w = v.in_reply_to,
        S = v.restoreProposal;
    return (0, i.jsx)(ux, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != b || null != k
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = b),
                          (l = k),
                          void (0, oV.jA)(t, (e) => (0, i.jsx)(oQ, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(oB, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(oM, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: b,
                onViewTrace: k,
            }),
            content: n.content,
            createdAt: v.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != a ? () => a(w) : void 0,
            accessories: (0, i.jsx)(sw, {
                projectId: l,
                steps: v.steps,
                content: "",
                proposal: v.proposal,
                planVersion: s,
                interrupted: !0 === v.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: v.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : v.ideas,
                pickedIdeaIds: null == v.ideas ? void 0 : u,
                attachments: v.attachments,
                secretRequest: n.active || m ? void 0 : v.secretRequest,
                secretRequestId: v.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: d,
                settingsRequest: n.active || f ? void 0 : v.settingsRequest,
                settingsAskId: v.id,
                publishCta: n.active ? null : v.publishCta,
                turnId: (0, t8.lb)(v) ?? void 0,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: S,
                publishScheduleProposal: v.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                onRestoreProposal:
                    null != S && null != x && h
                        ? () =>
                              oY(
                                  {
                                      sha: S.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: S.authored_at,
                                      subject: S.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function oY(e, t) {
    (0, oX.F)({ onConfirm: () => t(e) });
}
var oJ = n(288539),
    o0 = n(677683),
    o1 = n(677690),
    o2 = n(159711);
function o3(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([o0.A], () => o0.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nq.A, nF.default, nD.A],
                () => {
                    let e = t?.status === "pinned" ? nq.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, n$.m1)(e, nF.default, nD.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = P.intl.string(T.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(ns, {
              title: s,
              children: (0, i.jsx)(v.E, {
                  className: o2.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? P.intl.formatToPlainString(T.default.gKe6Lw, { channelName: a ?? "" })
                          : P.intl.string(T.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(ns, { title: s, children: (0, i.jsx)(o4, { projectId: l }) });
}
function o4(e) {
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
            let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lr.A, eX.A],
                        () =>
                            null == t
                                ? []
                                : lr.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === eb.rbe.GUILD_VOICE && eX.A.can(eb.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, i] = a.useState(null),
                [s, u] = a.useState(!1),
                [o, d] = a.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = a.useCallback(async () => {
                    if (null == f || null == m) return;
                    (u(!0), d(!1));
                    let t = await (0, o1.pk)(f.id, m);
                    (u(!1), t ? (0, o1.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = a.useCallback(() => (0, o1.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: i,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, n9.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: o2.r,
        children: (0, i.jsxs)(j.B, {
            gap: 12,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: P.intl.string(T.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(nM.Z, {
                          selectionMode: "single",
                          label: P.intl.string(T.default.peOi1H),
                          placeholder: P.intl.string(T.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? P.intl.string(T.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(T.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: o2.o,
                    children: [
                        (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: P.intl.string(T.default.Iw0l8o),
                            disabled: u,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: P.intl.string(T.default.FYI3qr),
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
function o5(e, t, n) {
    return (0, i.jsx)(oJ.A, { userId: e, content: `@${t}` }, n);
}
function o7(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, ox.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nF.default], () => (null == l ? null : nF.default.getUser(l)), [l]),
                i = (0, iO.tx)(r),
                s = u7(e),
                u =
                    (0, c.bG)([la.A], () => (null == t.guild_id ? null : la.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? P.intl.string(T.default.R1tPlP),
                o = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? P.intl.format(T.default.Lwsrhg, { app: s, server: u })
                        : P.intl.format(T.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? P.intl.format(T.default.mT7EQG, { app: s, server: u })
                        : P.intl.format(T.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? P.intl.format(T.default["4LVIeo"], { app: s, server: u })
                        : P.intl.format(T.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? P.intl.format(T.default["4VQfid"], { channel: e, server: u })
                        : P.intl.format(T.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return P.intl.format(T.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return P.intl.string(T.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, o5),
        r = uI(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(o3, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(rg, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let o8 = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nS.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rb.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oz, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(sx.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, i.jsx)(sq, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, i.jsx)(oH, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, ry.tp)(e, t.id, n);
                            })(l, u, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oB, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, i.jsx)(sx.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sk, {
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
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oB, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(u6, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oB, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(o7, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, i.jsx)(u1, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sk, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(ux, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sk, {
                            projectId: l,
                            steps: o9,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(oZ, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uQ.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uQ.A)(e.row, t.row, ["message"]) &&
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
                (0, uQ.A)(e.replyTo, t.replyTo) &&
                (0, uQ.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    o9 = [],
    o6 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    ce = new WeakMap();
function ct(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cn(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cl = ["wheel", "touchstart", "pointerdown", "keydown"];
function cr(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let ci = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            floatingSecretRenderId: m,
            liveClarificationId: h,
            onRestoreVersion: g,
            scrollerRef: p,
            stickToBottomRef: x,
            pinned: j,
            onUnpin: y,
            handleRef: k,
            onShowsLatestChange: w,
        } = e,
        S = a.useRef(null),
        [A, C] = a.useState(null),
        N = a.useCallback((e) => {
            ((S.current = e), C(e));
        }, []),
        [I, E] = a.useState(null),
        _ = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = a.useCallback((e) => {
            (E(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        R = (0, c.bG)([eU.A], () => eU.A.getPublishStatus(t)),
        L = (0, c.bG)([nF.default], () => nF.default.getCurrentUser()?.id),
        $ = a.useMemo(() => {
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
                                        let t = (0, t7.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = ce.get(r);
                    if (null != a && a.superseded === e && a.liveCard === i) {
                        n.push(...a.planned);
                        continue;
                    }
                    let s = (function (e, t, n) {
                        let l = [];
                        function r(e, t) {
                            l.push({ row: e, groupable: { key: e.key, ...t } });
                        }
                        if ("user" === e.role)
                            return (
                                (0, t8.ST)(e) ||
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
                        let i = !(0, t8.BL)(e),
                            a = rC({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            u = (0, t7.C6)(e.steps, { turnActive: i }),
                            { lastWork: o, open: c } = (0, t7.CT)(u, { turnActive: i }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && o6.test(n.prose.content)) f = !0;
                            else if (null != n.prose && n.prose.key !== a.replyKey) {
                                let t = `${e.render_id}:${n.key}`;
                                r(
                                    {
                                        kind: "prose",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        content: n.prose.content,
                                        hostsAttachments:
                                            "streamed" === a.attachmentsHost &&
                                            n.prose.key === s &&
                                            null != e.attachments,
                                        streaming: i && n.index === d && !n.hasWork,
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
                                        turnActive: t9(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = o6.test(e.content ?? "");
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
                            (a.showsClosingMessage && !m) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!i &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest)) ||
                                "standalone" === a.attachmentsHost)
                        ) {
                            let t = `${e.render_id}:closing`;
                            r(
                                {
                                    kind: "closing",
                                    key: t,
                                    message: e,
                                    groupStart: !1,
                                    active: i,
                                    attachmentsHost: a.attachmentsHost,
                                    content: a.closingContent,
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
                    })(r, e, i);
                    (ce.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
                }
                let r = (function (e) {
                    let t,
                        n,
                        l = [],
                        r = null,
                        i = !1,
                        a = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (r = null), (t = void 0), (i = !1), (a = !1), (n = void 0));
                            continue;
                        }
                        let e = !i || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || a;
                        (e && ((r = s.actor), (t = s.authorId), (i = !0), (a = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(n.map((e) => e.groupable));
                return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        let l = e[n].publishCta;
                        if (null != l) return aW(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = aQ.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), aQ.set(t, n)), n);
                      })),
                h,
            );
        }, [n, R, h]),
        q = a.useMemo(() => $.map((e) => e.key), [$]),
        [D, F] = a.useState(null),
        O = (function (e, t, n) {
            if (null == t) return ct(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cn(e, t.endKey, t.end - 1) + 1,
                i = cn(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), ct(e, i, r));
        })(q, D, j),
        G = a.useRef(O),
        z = a.useRef(q),
        U = a.useRef($),
        B = a.useRef(null),
        K = a.useRef(null),
        H = a.useRef(new Set()),
        V = a.useRef(null),
        W = a.useRef(!1),
        X = a.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = W.current ? cr(S.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [p]);
    a.useLayoutEffect(() => {
        let e = p.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            W.current = !1;
        };
        for (let n of cl) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cl) e.removeEventListener(n, t);
        };
    }, [p]);
    let Q = a.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = S.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect().top,
                l = t.querySelectorAll("[data-conjure-row-key]"),
                r = 0,
                i = l.length - 1,
                a = null;
            for (; r <= i;) {
                let e = (r + i) >> 1;
                l[e].getBoundingClientRect().bottom > n ? ((a = l[e]), (i = e - 1)) : (r = e + 1);
            }
            let s = a?.dataset.conjureRowKey;
            B.current = null != a && null != s ? { key: s, offset: a.getBoundingClientRect().top - n } : null;
        }, [p]),
        Z = a.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: i } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), ct(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), ct(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? ct(e, a, t.end) : null;
            })(z.current, G.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: x.current,
            });
            "older" === n ? (0, ez.P6)(t) : null != n && F(n);
        }, [p, x, t]);
    a.useImperativeHandle(
        k,
        () => ({
            handleScroll() {
                (Q(),
                    F((e) => {
                        let t = G.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Z());
            },
            recordAnchor: Q,
            showLatest(e) {
                ((W.current = !1), (K.current = e ?? null), F(null));
            },
            snapshot() {
                let e = B.current;
                return null == e ? null : { window: G.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!z.current.includes(n.key)) return !1;
                (y(), (B.current = n));
                let l = G.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = p.current?.getScrollerNode(),
                        t = S.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else F(t);
                return !0;
            },
        }),
        [Q, Z, y, p],
    );
    let Y = a.useRef(null),
        J = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Y.current = null), (W.current = !1));
                let r = S.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (y(), F(G.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let i = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, ez.P6)(t) && (Y.current = e);
                    return;
                }
                (y(),
                    (K.current = () => {
                        (S.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    F(((n = z.current), ct(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [M, y, t],
        );
    (a.useEffect(() => {
        let e = Y.current;
        null != e && J(e);
    }, [$, J]),
        a.useLayoutEffect(() => {
            if (null == A) return;
            let e = A.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), x.current)) return void p.current?.scrollToBottom();
                        (X(), Q());
                    }
                });
            return (t.observe(A), () => t.disconnect());
        }, [A, X, Q, p, x]));
    let ee = null == O.endKey;
    (a.useEffect(() => w?.(ee), [ee, w]),
        a.useLayoutEffect(() => {
            ((G.current = O), (z.current = q), (U.current = $));
        }),
        a.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                l = S.current,
                r =
                    null !=
                    (function (e, t, n) {
                        if (0 === n.length) return null;
                        let l = n[n.length - 1],
                            r = "assistant" === l.role && null != l.proposal ? l.render_id : null,
                            i = e.current;
                        return (
                            (e.current = { projectId: t, planId: r }),
                            i?.projectId === t && null != r && r !== i.planId ? r : null
                        );
                    })(V, t, n);
            if (null != e && null != l) {
                let t = B.current;
                if (r && x.current && null != cr(l)) (y(), F(G.current), (W.current = !0), X());
                else if (x.current) p.current?.scrollToBottom();
                else if (W.current) X();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = K.current;
                ((K.current = null), n?.(), Q(), Z());
            }
            H.current = new Set(q);
        }, [t, n, $, q, O.start, O.end, p, x, y, X, Q, Z]));
    let et = a.useMemo(() => uh(n), [n]),
        en = a.useMemo(
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
        el = a.useMemo(
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
                        let i = new Set();
                        for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && i.add(e.id);
                        t.set(r.render_id, i);
                    }
                    return t;
                })(n),
            [n],
        ),
        er = a.useMemo(
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
        ei = n.at(-1),
        ea =
            (ei?.role !== "assistant" || null == ei.awaitingUser || null == ei.secretRequest
                ? null
                : (0, t8.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([ri.A], () => ri.A.getSettings(t)?.secrets, [t]),
        eu = (0, uf.WT)(t),
        eo = a.useMemo(() => (0, l5.Mv)(n, es), [n, es]);
    if (!(0, t8.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: o()(ug.x7, ug.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: ug.Ub, children: (0, i.jsx)(b.y, {}) }),
            });
        let e = "unavailable" === l ? T.default.Td4Sf4 : T.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: ug.x7,
            children: (0, i.jsx)(ux, { role: "assistant", children: (0, i.jsx)(oB, { content: P.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(up.Provider, {
        value: H,
        children: (0, i.jsxs)("ol", {
            ref: N,
            className: ug.x7,
            children: [
                $.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            o8,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && I === n.id,
                                currentUserId: "user" === e.kind ? L : void 0,
                            },
                            e.key,
                        );
                    let l = n === ei;
                    return (0, i.jsx)(
                        o8,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? er.get(n.in_reply_to) : void 0,
                            onJumpTo: J,
                            planVersion: en.get(n.render_id),
                            pickedIdeaIds: el.get(n.render_id),
                            secretRequestAwaiting: l ? ea : void 0,
                            secretRequestStatus: eo.get(n.render_id),
                            settingsFloating: n.id === f,
                            secretFloating: n.render_id === m,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === et ? d : void 0,
                            onRestoreVersion: g,
                        },
                        e.key,
                    );
                }),
                ee
                    ? eu.map((e) =>
                          (0, i.jsx)(
                              ux,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(oB, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(um.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ea && ee
                    ? (0, i.jsx)(ux, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(oB, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: P.intl.string(T.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                ee ? (0, i.jsx)(uX, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var ca = n(731084),
    cs = n(336288),
    cu = n(187447);
function co(e) {
    let { activity: t, id: n } = e,
        l = (0, t5.j)(),
        { text: r, revealing: s } = ok(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = a.useRef(null),
        c = a.useRef(!0),
        d = a.useRef(0),
        f = a.useCallback(() => {
            let e = u.current,
                t = e?.getScrollerNode();
            if (null != e && null != t) {
                var n, l, r;
                ((n = c.current),
                    (l = e.getDistanceFromBottom()),
                    (r = t.scrollTop < d.current),
                    (c.current = l < 1 || (!r && (n || l < 16))),
                    (d.current = t.scrollTop));
            }
        }, []);
    return (
        a.useLayoutEffect(() => {
            if (!c.current) return;
            let e = u.current;
            e?.scrollToBottom({
                callback: () => {
                    let t = e.getScrollerNode();
                    null != t && (d.current = t.scrollTop);
                },
            });
        }, [r]),
        (0, i.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cu.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(t2.Ch, {
                ref: u,
                onScroll: f,
                className: cu.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: o()(sy.PT, cu.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: iX.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cc = n(53659);
function cd(e) {
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
        g = a.useRef(null),
        p = a.useId(),
        [x, j] = a.useState(null),
        b = (0, ca.xu)({
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
        y = P.intl.string(b),
        k = b === ca.kx["0"],
        [w, S] = a.useState(m ?? y),
        A = (0, t5.j)();
    (l || (0, ca.E4)(y, w) || (!A && !k)) && w !== y && S(y);
    let C = a.useRef(y);
    (a.useEffect(() => {
        C.current = y;
    }, [y]),
        a.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let N = a.useRef(null),
        I = a.useRef(w);
    a.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = a.useRef(k),
        _ = a.useRef(0);
    (a.useEffect(() => {
        ((E.current = k), !k && (0, ca.E8)(I.current) && S(C.current));
    }, [k]),
        a.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, ca.E8)(I.current) ? _.current + 1 : 0), S((0, ca.Ov)(_.current)))
                    : C.current !== I.current
                      ? S(C.current)
                      : N.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let M = null != t && "" !== t.text,
        R = t?.session ?? null,
        L = M && null != R && x === R,
        $ = a.useCallback(() => {
            M && null != R && j((e) => (e === R ? null : R));
        }, [M, R]),
        q = a.useCallback(() => j(null), []);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: q,
        renderPopout: () => (0, i.jsx)(co, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(ne.D, {
                innerRef: g,
                className: o()(cc.hF, M && cc.Xd),
                "aria-label": P.intl.string(
                    r
                        ? T.default.qqlUiW
                        : b === T.default.j8tmjK
                          ? T.default.j8tmjK
                          : k
                            ? ca.kx["0"]
                            : T.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": P.intl.string(b),
                onClick: $,
                children: [
                    (0, i.jsx)("span", {
                        className: cc.bl,
                        children: (0, i.jsx)(cs.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: cc.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, i.jsx)(sS.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cc.yE,
                              })
                            : (0, i.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cc.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cf = { second: 1e3, minute: 6e4 };
function cm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cf[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (l(i), (n = setTimeout(t, r - ((((i - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var ch = n(719374);
function cg(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cm(t);
    return (0, i.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: ch.$,
        "data-conjure-turn-timer": !0,
        children: (0, rL.C7)(l),
    });
}
function cp(e) {
    let { startedAt: t } = e,
        n = cm(t, "minute");
    return (0, i.jsx)(nr.A, { role: "timer", children: (0, rL.Us)(n) });
}
var cx = n(885574),
    cv = n(242779),
    cj = n(436804);
function cb(e) {
    return e.toLocaleString();
}
function cy(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cj.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cj.mf,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cb((0, cv.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cb(n.input_tokens),
                    " in \xb7 ",
                    cb(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cb(n.cache_creation_input_tokens)} cache write \xb7 ${cb(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ck(e) {
    let { project: t } = e,
        n = (0, cv.wU)(t.compaction),
        l = (0, cv.wU)(t.classifier),
        r = (0, cv.wU)(t.image),
        a = (0, cv.wV)(t.orchestrator, t.codegen),
        s = (0, cv.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cj.si,
        role: "dialog",
        "aria-label": P.intl.string(T.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cj.Q$,
                children: (0, i.jsxs)("div", {
                    className: cj.mf,
                    children: [
                        (0, i.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cb((0, cv.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(cy, { label: P.intl.string(T.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(cy, { label: P.intl.string(T.default.ANCEo3), usage: n }),
            (0, i.jsx)(cy, { label: P.intl.string(T.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(cy, { label: P.intl.string(T.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cj.mf,
                children: [
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(T.default["8OUg09"]),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cv.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cv.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cw(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(ck, { project: t }),
        children: (e) =>
            (0, i.jsx)(ne.D, {
                innerRef: n,
                className: cj.Y$,
                "aria-label": P.intl.string(T.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(cx.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cS = n(990250);
function cA(e) {
    let { queued: t } = e,
        n = P.intl.string(T.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cS.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cS.wx,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(t2.Ch, {
                className: cS.XG,
                children: (0, i.jsx)("ul", {
                    className: cS.p_,
                    children: t.map((e) => (0, i.jsx)(cC, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cC(e) {
    let { content: t } = e,
        n = a.useRef(null),
        [l, r] = a.useState(!1),
        [s, u] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || u(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, i.jsx)("li", {
              className: cS.AS,
              children: (0, i.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: P.intl.string(T.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cS.AS,
              children: [
                  (0, i.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cS.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(nZ.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: P.intl.string(l ? T.default.nEMoeN : T.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cN(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cA, { queued: t }),
        children: (e) =>
            (0, i.jsx)(ne.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, i.jsx)(v.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: P.intl.formatToPlainString(T.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cI = n(997421);
function cE(e) {
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
        x = (0, G.Zv)(t),
        j = (0, c.bG)([eU.A], () => eU.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = a.useState(null),
        k = a.useCallback(
            (e) =>
                y(
                    (0, ca.E8)(e) || e === P.intl.string(T.default.mKK6wB) || e === P.intl.string(T.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, ca.uc)(h),
        S = null != s,
        A = s ?? (n ? l : void 0),
        C = n || r || S || !0 === m;
    return (0, i.jsxs)("div", {
        className: cI.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cI.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || u || x || j
                        ? (0, i.jsx)(cd, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: S,
                              recalling: u,
                              controlling: x,
                              publishPending: j && C,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != A ? (0, i.jsx)(cg, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, i.jsx)(cp, { startedAt: A }) : null,
            0 === p.length ? null : (0, i.jsx)(cN, { queued: p, className: o()(cI.BP, cI.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: cI.BP,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(cw, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(T.default["tCo+ZM"], { status: (0, ca.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cI.XF,
                      children: (0, ca.Db)(g),
                  }),
        ],
    });
}
var c_ = n(698638),
    cM = n(608711);
let cR = [P.intl.string(T.default["9w+Chc"]), P.intl.string(T.default.WAvmdq), P.intl.string(T.default.SKsrzl)];
function cT(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        {
            projectId: f,
            restoreState: m,
            onRestoreVersion: h,
            onImportProject: g,
            escapeScopeRef: p,
            visible: x = !0,
        } = e,
        j = (0, c.bG)([lV.A], () => lV.A.getMessages(f), [f]),
        b = (0, c.bG)([ez.Ay], () => ez.Ay.getConnState(f), [f]),
        y = (0, c.bG)([lV.A], () => lV.A.getProjectUsage(f), [f]),
        k = (0, c.bG)([lV.A], () => lV.A.getThinkingActivity(f), [f]),
        w = (0, c.bG)([lV.A], () => lV.A.isCompacting(f), [f]),
        S = (0, c.bG)([lV.A], () => lV.A.isSaving(f), [f]),
        A = lX(f),
        C = (0, c.bG)([lU.A], () => lU.A.getModelSettings(f), [f]),
        N = a.useRef(null),
        I = a.useRef(null),
        E = a.useRef(null),
        M = a.useRef(null),
        {
            stickToBottomRef: R,
            pinned: L,
            atBottom: $,
            unpin: q,
            releasePinHold: D,
            showsLatest: F,
            showsLatestRef: O,
            handleShowsLatestChange: G,
            updatePin: U,
        } = (function (e) {
            let t = a.useRef(!0),
                [n, l] = a.useState(!0),
                [r, i] = a.useState(!0),
                s = a.useRef(!1),
                u = a.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                o = a.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = a.useState(!0),
                f = a.useRef(!0),
                m = a.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            a.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of cl) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cl) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = a.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    a = !s.current && r < 32 && f.current;
                t.current = a;
                let u = r > 1 || !f.current;
                (i((e) => (!u === e ? e : !u)), l((e) => (e === a ? e : a)));
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
        })(I),
        B = a.useCallback(() => {
            function e() {
                let e = N.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (D(), O.current ? e() : E.current?.showLatest(e));
        }, [D, O]),
        K = a.useCallback(() => {
            (U(), E.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = R.current ? null : (E.current?.snapshot() ?? null));
        }, [U, R]),
        H = a.useContext(Z.A) === f;
    a.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: J.A.getProjectView(f).chatScroll };
        return ((M.current = e), () => (0, Y.g7)(f, { chatScroll: e.position }));
    }, [H, f]);
    let V = a.useRef(!H);
    (a.useLayoutEffect(() => {
        if (V.current || !(0, t8.i_)(j)) return;
        V.current = !0;
        let e = J.A.getProjectView(f).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [j, f]),
        a.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = I.current?.getScrollerNode(),
                n = e.getBoundingClientRect().width,
                l = t?.getBoundingClientRect().height,
                r = new ResizeObserver((t) => {
                    let r = !1;
                    for (let i of t)
                        if (i.target === e) {
                            let e = i.contentRect.width;
                            if (e === n) continue;
                            ((n = e), (r = !0));
                        } else {
                            let e = i.contentRect.height;
                            if (e === l) continue;
                            ((l = e), (r = !0));
                        }
                    r && (R.current ? I.current?.scrollToBottom() : E.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [R]),
        a.useEffect(() => {
            (0, ez.ensureConnection)(f);
        }, [f]),
        (0, rk.E1)(f, (0, t5.j)()));
    let W = (0, z.rt)(f),
        X = (function (e) {
            let t = (0, eK.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([la.A], () => (null == n ? null : (la.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: P.intl.format("channel" === s ? T.default["1cm4fj"] : T.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(f),
        ee = (function (e) {
            let t = (0, c.bG)([rx.A], () => rx.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rv.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rp.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? P.intl.format(T.default["bw/n4C"], { helpdeskURL: e })
                            : P.intl.format(T.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: P.intl.formatToPlainString(T.default.GHgG2B, { percent: l, limit: n }) };
        })(f),
        et =
            ((l = (0, c.bG)([lK.A], () => lK.A.getFailure(f))),
            (r = a.useCallback(() => (0, lH.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: P.intl.format(T.default.Up6Ssw, { reason: l }),
                      retry: { text: P.intl.string(T.default["ywA+ET"]), onClick: r },
                  }),
        en = (0, Q.AJ)(f),
        el = (0, c.bG)([lK.A], () => lK.A.getSetupStartedAt(f), [f]),
        er = a.useCallback(
            (e, t) => {
                (0, ez.dv)(f, e, t);
            },
            [f],
        ),
        ei = a.useCallback(
            (e, t, n) => {
                let l = n ?? er;
                0 === W.annotations.length
                    ? l(e, t)
                    : (l((0, lF.BL)({ annotations: W.annotations, metaComment: e, context: W.context }), t),
                      (0, z.mB)(f));
            },
            [W, er, f],
        ),
        ea = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nw)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ez.re)(e, l.nonce),
                        (function (e) {
                            let t = nw.get(e);
                            (nw.delete(e), nA(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                lV.A.isThinking(f)) &&
                (0, ez.fu)(f);
        }, [f]),
        es = a.useCallback((e) => (0, nN.RQ)(f, e.implementation_prompt), [f]),
        [eu, eo] = (function (e) {
            let [t, n] = a.useState(() => rS(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? rS(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(f),
        ec = a.useCallback(() => er(P.intl.string(T.default["t5CN3+"])), [er]),
        ed = a.useCallback((e, t, n) => (0, nN.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ef = a.useCallback((e) => (0, lB.X)(f, e), [f]),
        em = a.useCallback((e) => (0, ts.vX)(f, e), [f]),
        eh = a.useCallback((e) => (0, td.gn)(f, "chat", Array.from(e), em), [f, em]),
        eg = a.useCallback(() => (0, nN.RQ)(f, P.intl.string(T.default.Zc7gML)), [f]),
        ep = m?.status === "restoring",
        ex = "open" === b && !ep,
        ev = j[j.length - 1],
        ej = null != ev && "assistant" === ev.role && null != ev.proposal,
        [eb, ey] = a.useState(null),
        ek = a.useMemo(
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
                })(j),
            [j],
        ),
        ew = null != ek && ek.id !== eb ? ek : null,
        eS = a.useCallback(() => {
            null != ew && ey(ew.id);
        }, [ew]),
        [eA, eC] = a.useState(null),
        eN = (function (e) {
            let [t, n] = a.useState(null),
                l = a.useRef(null),
                r = a.useCallback((e) => {
                    ((l.current = e), n(e));
                }, []),
                i = t?.projectId === e ? t : null,
                s = a.useCallback(
                    (t, n) =>
                        r({
                            projectId: e,
                            request: {
                                id: `manual:${e}:${Date.now()}`,
                                summary: P.intl.string(T.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                u = a.useCallback(() => r(null), [r]),
                o = a.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: i?.request ?? null, open: s, close: u, sent: o };
        })(f),
        eI = ev?.appBuildRequest != null && (0, t8.BL)(ev) && ev.appBuildRequest.id !== eA ? ev.appBuildRequest : null,
        eE = eN.request ?? (null == ew ? eI : null),
        e_ = null == eN.request ? ew : null,
        eM = null != eE && eE === eN.request,
        { close: eR, sent: eT } = eN,
        eL = eN.request?.id,
        e$ = a.useCallback(() => {
            eM ? eR() : null != eE && eC(eE.id);
        }, [eE, eM, eR]),
        eq = a.useCallback(
            (e) => {
                (null != eL && eT(eL),
                    (0, _.P0)({
                        text: P.intl.formatToPlainString(T.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eL, eT],
        ),
        eD = (0, c.bG)([ri.A], () => ri.A.getSettings(f), [f]),
        [eF, eO] = a.useState(null),
        eG = ro(),
        eU =
            null != ev &&
            ((t = ev.id),
            (s = (0, l5.Mv)(j, eD?.secrets)),
            (u = rc(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, t8.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rd(e.settingsRequest, eD, eG.has(e.id)))),
            )),
        eB =
            null != ev &&
            "assistant" === ev.role &&
            null != ev.settingsRequest &&
            null == ev.secretRequest &&
            (0, t8.BL)(ev) &&
            ev.id !== eF &&
            ((n = ev.settingsRequest),
            (o = n.keys ?? []),
            null != eD &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eD.schema.find((t) => t.key === e);
                    return null != t && l6.has(t.type);
                })) &&
            re(ev.settingsRequest, eD) &&
            !eU
                ? ev
                : null,
        eH = null == eN.request ? eB : null,
        eV = eH?.settingsRequest ?? null,
        eW = a.useCallback(() => {
            null != eB && eO(eB.id);
        }, [eB]),
        eX = null != eV,
        [eQ, eZ] = a.useState(null),
        eY = eD?.secrets,
        eJ = a.useMemo(() => (0, l5.Qr)(j, (0, l5.Mv)(j, eY)), [j, eY]),
        e0 = null != eJ && eJ.render_id !== eQ ? eJ : null,
        e1 = null != e_ || null != eE || A ? null : e0,
        e2 = a.useCallback(() => {
            null != e0 && eZ(e0.render_id);
        }, [e0]),
        [e3, e4] = a.useState(null),
        e5 = e_?.id ?? eE?.id ?? e1?.render_id ?? eH?.id ?? (A ? "scope-setup" : void 0),
        e7 = null != ew || null != eE || null != e0 || null != eB || A;
    a.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = e3?.firstElementChild;
        if (null == e3 || null == e || !(0, ti.vq)(t, HTMLElement) || null == e5) return;
        function n() {
            R.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e3.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e3, e5, I, R]);
    let e8 = (0, c.bG)([lV.A], () => lV.A.hasLoadedHistory(f), [f]),
        e9 = (function (e) {
            let t = lX(e),
                n = (0, c.bG)([eP.Ay], () => null != eP.Ay.getProject(e), [e]),
                l = (0, c.bG)([lV.A], () => lV.A.hasLoadedHistory(e), [e]),
                r = (0, c.bG)([lV.A], () => lV.A.getMessages(e), [e]),
                i = (0, c.bG)([ez.Ay], () => ez.Ay.getConnState(e), [e]),
                [s, u] = a.useState(0);
            return (
                a.useLayoutEffect(() => {
                    (0, lW.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, i]),
                s
            );
        })(f),
        e6 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e8,
            historyUnavailable: (0, c.bG)([lV.A], () => lV.A.isHistoryUnavailable(f), [f]),
            connState: b,
        }),
        te = !(0, t8.i_)(j),
        tt = "loading" === e6 && te,
        tl = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cR[e % cR.length];
        }, [f]),
        tr = ej ? P.intl.string(T.default.Zc7gML) : "greeting" === e6 && te ? tl : null,
        ta = a.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, t8.BL)(t)) return t;
            }
        }, [j]),
        to = null != ta,
        tc = a.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tf = null != ta ? (0, rj.S)(ta) : void 0,
        tm = ej && ex ? eg : void 0,
        th = a.useCallback(() => (0, nN.RQ)(f, P.intl.string(T.default.EMgIuY)), [f]),
        [tg, tp] = a.useState(null),
        [tx, tv] = a.useState(to);
    (tx !== to && (tv(to), to || tp(null)),
        a.useEffect(() => {
            if (!to) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tp(null)
                        : tp(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [to, ta?.steps, F]));
    let tb = F ? tg : "bottom",
        ty = a.useMemo(() => (null != ta ? (0, t6.b9)(ta.steps) : ""), [ta]),
        tk = a.useMemo(() => (null != ta ? ((0, t7.lt)(ta.steps) ?? ta.todos) : void 0), [ta]),
        tw = ta?.provisionalTodo,
        tS = null != ta && t9(ta),
        tA = a.useMemo(() => {
            var e;
            return null != ta ? ((e = ta.steps), rO((0, t7.Jf)(e, !0).tasks)) : void 0;
        }, [ta]);
    return (0, i.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cM.TE,
        children: [
            ex
                ? (0, i.jsx)(t4.A, {
                      title: P.intl.string(T.default.gy7byi),
                      description: P.intl.string(T.default["dkv/WO"]),
                      icons: c_.ir,
                      onDrop: eh,
                  })
                : null,
            (0, i.jsx)(nb, {
                onJumpToActivity: B,
                line: ty,
                placement: to && "top" === tb ? "top" : null,
                todos: tk,
                todosLive: tS,
                provisionalTodo: tw,
                agents: tA,
            }),
            (0, i.jsxs)("div", {
                className: cM.JX,
                children: [
                    (0, i.jsx)(t2.Ch, {
                        ref: I,
                        onScroll: K,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [cM.N$, $ ? null : cM.hB, eX ? cM.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(rb.Fu.Provider, {
                            value: f,
                            children: (0, i.jsx)(ci, {
                                projectId: f,
                                messages: j,
                                emptyState: e6,
                                floatingSettingsMessageId: eB?.id,
                                floatingSecretRenderId: e1?.render_id,
                                liveClarificationId: e_?.id,
                                onPickIdea: ex ? es : void 0,
                                onAskForIdeas: ex ? ec : void 0,
                                draftHasText: eu,
                                onApprovePlan: ex ? th : void 0,
                                onRestoreVersion: ep || to ? void 0 : h,
                                scrollerRef: I,
                                stickToBottomRef: R,
                                pinned: L,
                                onUnpin: q,
                                handleRef: E,
                                onShowsLatestChange: G,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: cM.NJ,
                        children: (0, i.jsx)(cE, {
                            projectId: f,
                            thinking: to,
                            turnStartedAt: tf,
                            restoring: ep,
                            remixStartedAt: el,
                            recalling: tt,
                            thinkingActivity: k,
                            compacting: w,
                            saving: S,
                            projectUsage: y,
                            connState: b,
                            queued: tc,
                        }),
                    }),
                    A
                        ? (0, i.jsx)("div", { ref: e4, className: cM.B5, children: (0, i.jsx)(l3, { projectId: f }) })
                        : null,
                    null == e_
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: eX ? `${cM.B5} ${cM.J9}` : cM.B5,
                              children:
                                  null != e_.install_scope_switch
                                      ? (0, i.jsx)(
                                            l4,
                                            {
                                                projectId: f,
                                                clarification: e_,
                                                offer: e_.install_scope_switch,
                                                onKept: eS,
                                            },
                                            e_.id,
                                        )
                                      : (0, i.jsx)(
                                            lD,
                                            {
                                                projectId: f,
                                                clarification: e_,
                                                onSubmit: ex ? ed : void 0,
                                                onDismiss: eS,
                                            },
                                            e_.id,
                                        ),
                          }),
                    null == eE
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: cM.B5,
                              children: (0, i.jsx)(
                                  nL,
                                  { projectId: f, request: eE, canSend: ex, onDismiss: e$, onSent: eM ? eq : void 0 },
                                  eE.id,
                              ),
                          }),
                    e1?.secretRequest == null
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: cM.B5,
                              children: (0, i.jsx)(
                                  rr,
                                  {
                                      projectId: f,
                                      cardId: e1.render_id,
                                      request: e1.secretRequest,
                                      status: "open",
                                      onDismiss: e2,
                                  },
                                  e1.render_id,
                              ),
                          }),
                    null == eV
                        ? null
                        : (0, i.jsx)("div", {
                              ref: null == e_ && null == eE ? e4 : void 0,
                              className: cM.B5,
                              children: (0, i.jsx)(
                                  rg,
                                  { askId: eH?.id, projectId: f, request: eV, onDismiss: eW },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: cM.Jx,
                children: [
                    (0, i.jsx)(nb, {
                        onJumpToActivity: B,
                        line: ty,
                        placement: to && "bottom" === tb ? "bottom" : null,
                        todos: tk,
                        todosLive: tS,
                        provisionalTodo: tw,
                        agents: tA,
                    }),
                    0 === W.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cM.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: P.intl.formatToPlainString(T.default["7b49dS"], {
                                          count: W.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: P.intl.string(T.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: P.intl.string(T.default["/zOv9+"]),
                                      onClick: () => (0, z.mB)(f),
                                  }),
                              ],
                          }),
                    en ? (0, i.jsx)("div", { className: cM.qB, children: (0, i.jsx)(lz, { projectId: f }) }) : null,
                    null == et
                        ? null
                        : (0, i.jsx)("div", {
                              className: cM.qB,
                              children: (0, i.jsx)(t3.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: et.message,
                                  action: et.retry,
                              }),
                          }),
                    null == X
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cM.Db,
                              children: [
                                  (0, i.jsx)(t3.w, { type: "warning", role: "status", message: X.message }),
                                  (0, i.jsx)("div", {
                                      className: cM.jU,
                                      children: (0, i.jsx)(tu.m, {
                                          text: P.intl.string(P.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(tj.K, {
                                              "aria-label": P.intl.string(P.t.WAI6xu),
                                              icon: tn.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: X.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == ee
                        ? null
                        : (0, i.jsx)("div", {
                              className: cM.qB,
                              children: (0, i.jsx)(t3.w, {
                                  type: ee.blocked ? "critical" : "warning",
                                  role: ee.blocked ? "alert" : "status",
                                  message: ee.message,
                              }),
                          }),
                    (0, i.jsx)(
                        uo,
                        {
                            projectId: f,
                            escapeScopeRef: p,
                            canSend: ex,
                            running: to,
                            restoring: ep,
                            onSend: ei,
                            hasPendingContext: W.annotations.length > 0,
                            onInterrupt: ex ? ea : void 0,
                            onUploadFile: em,
                            onImport: g,
                            onSendToOtherProjects: e7 ? void 0 : eN.open,
                            onApprove: tm,
                            suggestion: tr,
                            questionOpen: e7,
                            secretPending: null != e1,
                            modelSettings: C,
                            onModelSettingsChange: ef,
                            onDraftHasTextChange: eo,
                            inputLocked: A,
                            aiPaused: ee?.blocked === !0,
                            managedCopy: en,
                            visible: x,
                        },
                        e9,
                    ),
                ],
            }),
        ],
    });
}
var cP = n(761508),
    cL = n(209695),
    c$ = n(207438),
    cq = n(683438),
    cD = n(721507);
function cF(e, t) {
    return String(e).padStart(t, "0");
}
function cO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cF(l.getHours(), 2)}:${cF(l.getMinutes(), 2)}:${cF(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cF(l.getMilliseconds(), 3)}` : r;
}
var cG = n(667931);
let cz = {
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
    cU = { running: "Running", ok: "Done", error: "Failed" };
function cB(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cK(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cV(e) {
    return cK(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cW = ["Arguments", "Result", "Usage", "Details"];
function cX(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cQ(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cZ(e) {
    let t = (0, cG.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cG.lp)(e) ? "interrupted" : "still running";
}
function cY(e) {
    return [cO(new Date(e.started_at).toISOString()) ?? "", cH(e.spans.length), (0, cG.Sj)((0, cG.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cJ(e) {
    let t = (0, cG.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: i } = (0, cG.N5)(r);
        (n.set(i, (n.get(i) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c0(r, "in")),
                (l.output += c0(r, "out")),
                (l.cacheRead += c0(r, "cache_read")),
                (l.cacheWrite += c0(r, "cache_write")),
                (l.costUsd += c0(r, "cost_usd"))));
    }
    let r = cG.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c0(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c1 = n(738188),
    c2 = n(430993),
    c3 = n(364840),
    c4 = n(224640),
    c5 = n(20742);
let c7 = { collapsed: new Set(), revealed: new Set() };
var c8 = n(872892);
let c9 = {
    op: c8.Q,
    model: c8.i3,
    tool: c8.dH,
    setup: c8.kc,
    worktree: c8.Qx,
    sandbox: c8.QH,
    build: c8.F1,
    platform: c8.Op,
    other: c8.fv,
};
function c6(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cH(t.calls, "model call"),
                      `${cB(t.input)} in`,
                      `${cB(t.output)} out`,
                      `${cB(t.cacheRead)} cache read`,
                      `${cB(t.cacheWrite)} cache write`,
                      cQ(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, i.jsxs)("div", {
        className: c8.M1,
        children: [
            (0, i.jsx)("div", {
                className: c8.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: `${c8.DJ} ${c9[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, i.jsx)("div", {
                className: c8.o1,
                children: cG.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cK(n)}`;
                    return (0, i.jsxs)(
                        "span",
                        {
                            className: c8.fI,
                            children: [
                                (0, i.jsx)("span", { className: `${c8.nf} ${c9[e]}` }),
                                (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cz[e] }),
                                null == l
                                    ? null
                                    : (0, i.jsx)(v.E, {
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
                : (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function de(e) {
    return `conjure-perf-trace-${e}`;
}
function dt(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: a } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, i.jsxs)("div", {
        className: c8.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, i.jsx)("div", { className: r }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${c8.p0} ${s + u > 85 ? c8.EU : c8.jh}`,
                children: a,
            }),
        ],
    });
}
function dn(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? ni.ChevronSmallRightIcon : eN.ChevronSmallDownIcon,
        f = a.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, i.jsxs)(ne.D, {
        tag: "div",
        role: "treeitem",
        id: de(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${c8.$y} ${r ? c8.wQ : ""}`,
        onClick: f,
        children: [
            (0, i.jsxs)("div", {
                className: c8.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, i.jsx)(ne.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: c8.ai,
                              onClick: m,
                              children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, i.jsx)("span", { className: c8.YJ }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: c8.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, i.jsx)("span", { className: `${c8.nf} ${c9[t.category]}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: c8.eu,
                        children: t.service,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: c8.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: c8.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, i.jsx)(c1.WarningIcon, { size: "xs", color: "currentColor", className: c8.ik })
                        : null,
                ],
            }),
            (0, i.jsx)(dt, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${c8.M0} ${c8.Nh}`
                    : t.running
                      ? `${c8.M0} ${c8.rF}`
                      : `${c8.M0} ${c9[t.category]}`,
                duration: cV(t),
            }),
        ],
    });
}
function dl(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, i.jsxs)(ne.D, {
        tag: "div",
        role: "treeitem",
        id: de(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${c8.$y} ${l ? c8.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, i.jsxs)("div", {
                className: c8.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, i.jsx)("span", {
                        className: c8.ai,
                        children: (0, i.jsx)(ni.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", { className: c8.U9 }),
                    (0, i.jsx)("span", { className: `${c8.nf} ${c8.dL}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: c8.MQ,
                        children: cH(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, i.jsx)(dt, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${c8.M0} ${c8.ab} ${c8.dL}`,
                duration: cK(t.totalMs),
            }),
        ],
    });
}
function dr(e) {
    let { node: t } = e;
    return null == t
        ? (0, i.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, i.jsxs)("div", {
              className: c8._0,
              children: [
                  (0, i.jsxs)("div", {
                      className: c8.TQ,
                      children: [
                          (0, i.jsx)("span", { className: `${c8.nf} ${c9[t.category]}` }),
                          (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cX("Start", `+${cK(e.start)}`), cX("Duration", cV(e))];
                      e.count > 1
                          ? t.push(
                                cX("Calls", String(e.count)),
                                cX("Longest call", cK(e.maxMs)),
                                cX("Spread over", cK(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cX("Self time", cK(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cX("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cX("Notes", l.join(", "))),
                          null != e.span.error && t.push(cX("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var i, a;
                          let l =
                                  ((i = e),
                                  "args" === (a = t) || a.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === a || "result_chars" === a
                                        ? "Result"
                                        : "model" === i.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? cQ(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cX(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cW.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, i.jsxs)(
                          a.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, i.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: c8.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, i.jsxs)(
                                          a.Fragment,
                                          {
                                              children: [
                                                  (0, i.jsx)(v.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, i.jsx)(v.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: c8.vl,
                                                            children: n,
                                                        })
                                                      : (0, i.jsx)(v.E, {
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
function di(e) {
    let { trace: t } = e,
        n = a.useMemo(() => cJ(t), [t]);
    return (0, i.jsx)(c6, { stats: n });
}
function da(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = a.useMemo(() => (null == e ? null : (0, cG.TK)(e)), [e]),
                [n, l] = a.useState(() => (null == t ? c7 : (0, cG.hB)(t))),
                [r, i] = a.useState(null),
                s = a.useRef(null == t ? new Set() : (0, cG.x7)(t));
            a.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cG.x7)(t)), l((n) => (0, cG._0)(n, t, e)));
            }, [t]);
            let u = a.useMemo(() => (null == t ? [] : (0, cG.wu)(t, n)), [t, n]),
                o = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cG.IE)(t, e);
                        null != n && l((e) => (0, cG.TN)(e, n));
                    },
                    [t],
                ),
                c = a.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cG.IE)(t, e);
                        null != n && l((e) => (0, cG.H$)(e, n));
                    },
                    [t],
                ),
                f = a.useCallback(() => {
                    null != t && l((0, cG.vH)(t));
                }, [t]),
                m = a.useCallback(() => {
                    null != t && l((0, cG.rQ)(t));
                }, [t]),
                h = a.useCallback(() => {
                    null != t && l((0, cG.hB)(t));
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
                select: i,
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: f, expandSubtree: m } = n,
        h = (0, cG.dj)(t),
        g = a.useMemo(() => (0, cG.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = a.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    i = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == i) return;
                else if ("smaller" === i.kind && ("ArrowRight" === e.key || "Enter" === e.key)) f(i.parentKey);
                else if ("node" === i.kind && "ArrowRight" === e.key && e.shiftKey) m(i.key);
                else if ("node" === i.kind && "ArrowRight" === e.key && r.has(i.key)) c(i.key);
                else {
                    if ("node" !== i.kind || "ArrowLeft" !== e.key || !(i.node.children.length > 0) || r.has(i.key))
                        return;
                    c(i.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(de(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, o, u, c],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c2.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: c8.z,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cZ(t),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cY(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, i.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, i.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${cH(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(di, { trace: t }),
                    (0, i.jsxs)("div", {
                        className: c8.KE,
                        children: [
                            (0, i.jsx)(d.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, i.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, i.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : de(u),
                        className: c8.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, i.jsxs)("div", {
                                className: c8.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: c8.So,
                                        children: (0, i.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: c8.c1,
                                        children: g.map((e) =>
                                            (0, i.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${c8.io} ${(e / h) * 100 > 85 ? c8.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cK(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, i.jsx)(
                                          dn,
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
                                    : (0, i.jsx)(dl, { row: e, extent: h, selected: e.key === u, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(c3.j, { children: (0, i.jsx)(dr, { node: s }) }),
        ],
    });
}
function ds(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        a = (0, c.bG)([oW.A], () => oW.A.getTimingTrace(l, r), [l, r]),
        s = a?.name ?? "Perf Trace";
    return (0, i.jsxs)(c4.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, i.jsx)(c5.rQ, { title: s }),
            null == a
                ? (0, i.jsx)(c2.c, {
                      children: (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, i.jsx)(da, { trace: a }),
        ],
    });
}
let du = { running: c8.Vf, ok: c8.mo, error: c8.Sr };
function dc(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${c8.Om} ${du[t]}`, role: "img", "aria-label": cU[t] });
}
function dd(e, t) {
    (0, H.qf)((n) => (0, i.jsx)(ds, { ...n, projectId: e, traceId: t }));
}
function df(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = a.useCallback(() => dd(t, n.id), [t, n.id]);
    return (0, i.jsxs)(ne.D, {
        className: c8.nM,
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: c8.sU,
                children: [
                    (0, i.jsx)(dc, { status: (0, cG.lQ)(n) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: c8._k,
                        children: n.name,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cZ(n),
                    }),
                ],
            }),
            (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cY(n) }),
            null == l
                ? null
                : (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dm(e) {
    let { projectId: t, traces: n } = e,
        l = a.useRef(null),
        r = a.useCallback(() => {
            let e = JSON.stringify({
                kind: "conjure.timing_traces",
                version: 1,
                project_id: t,
                exported_at: new Date().toISOString(),
                traces: n,
            });
            (0, cD.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ew.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(eS.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(eA.rX, {
                    children: (0, i.jsx)(eA.Dr, {
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
            return (0, i.jsx)(tj.K, {
                ...e,
                buttonRef: l,
                icon: al.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dh(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([oW.A], () => oW.A.getTimingTraces(t), [t]),
        [l, r] = a.useState(""),
        s = a.useMemo(() => {
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
        u = a.useMemo(() => [...s].reverse(), [s]),
        o = a.useMemo(
            () =>
                (function (e) {
                    let t = e.map(cJ);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cG.BF.map((e) => ({
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
        ? (0, i.jsxs)("div", {
              className: c8.Ie,
              children: [
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: c8.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: c8.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: c8.fH,
                              children: (0, i.jsx)(cq.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(dm, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, i.jsxs)(t2.Ch, {
                      className: c8.XG,
                      children: [
                          (0, i.jsx)(c6, { stats: o }),
                          0 === u.length
                              ? (0, i.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: c8.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(df, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dg(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dp(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dx(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dv(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dj(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function db(e) {
    return P.intl.string("preview" === e ? T.default["2yLYlG"] : T.default.eiAi57);
}
let dy = ["all", "preview", "stable", "web"];
function dk(e) {
    switch (e.reason) {
        case "local":
            return P.intl.string(T.default.mUeKML);
        case "unconfigured":
            return P.intl.string(T.default.bGefb5);
        case "unauthorized":
            return P.intl.string(T.default.KLx6Bb);
        default:
            return null != e.detail
                ? P.intl.formatToPlainString(T.default.t09Q6q, { detail: e.detail })
                : P.intl.string(T.default["t+tG59"]);
    }
}
function dw(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : P.intl.formatToPlainString(T.default["XO/bN4"], {
              p50: dg(e.memory_p50_bytes ?? 0),
              p999: dg(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dS = {
    db: () => T.default["7l+DFG"],
    db_preview: () => T.default.FAuffi,
    runtime: () => T.default["Gkl+ab"],
    runtime_preview: () => T.default.ynpJzv,
    bot: () => T.default["5/i0cj"],
    bot_preview: () => T.default.m2jsnw,
};
var dA = n(911608),
    dC = n(177427);
function dN(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dC.KE,
        children: [
            (0, i.jsx)("div", {
                className: dC.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(b.y, { type: b.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: P.intl.string(T.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: P.intl.formatToPlainString(T.default.INVO50, { time: dv(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(d.$, { variant: "secondary", size: "sm", text: P.intl.string(T.default.oKEgiu), onClick: l }),
        ],
    });
}
function dI(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dC.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: dC.Gf, children: t }),
            n,
        ],
    });
}
function dE(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dC.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dC.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dC.kS,
                        children: [a, (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dC.kS,
                        children: [
                            s,
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function d_(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dC.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dC.x7,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(dA.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dC.dh : void 0,
            }),
        ],
    });
}
function dM(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dE, {
            label: P.intl.string(T.default.SXP7pD),
            value: P.intl.string(T.default.E5hKVi),
            hint: dk(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dE, {
            label: P.intl.string(T.default.SXP7pD),
            value: "\u2014",
            hint: P.intl.string(T.default.AGvoMJ),
        });
    let l = dw(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dE, { label: P.intl.string(T.default["H/X+FI"]), value: dp(n.cpu_ms) }),
            null != l && (0, i.jsx)(dE, { label: P.intl.string(T.default.lmFmMO), value: l }),
        ],
    });
}
function dR(e) {
    let { analytics: t } = e,
        n = P.intl.string(T.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dI, {
            title: n,
            children: (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: dk(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dS[t] : null) ? P.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dI, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: P.intl.string(T.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dE,
                          {
                              label: n,
                              value: P.intl.formatToPlainString(T.default["w/2voO"], { cpu: dp(t.cpu_ms) }),
                              hint: dw(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dT = n(678708),
    dP = n(414499),
    dL = n(714800),
    d$ = n(81466),
    dq = n(424383),
    dD = n(664121),
    dF = n(816943),
    dO = n(268791),
    dG = n(514042),
    dz = n(872351),
    dU = n(708988),
    dB = n(150934),
    dK = n(417270);
let dH = "Restart Agent",
    dV = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dW(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dX(e, t) {
    return { label: e, value: null != t && "" !== t ? dv(t) : "Unknown", icon: "calendar" };
}
function dQ(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dZ(e, t, n, l) {
    let [r, i] = dV[n.status];
    return { label: e, value: `${dQ(n.bytes)} of ${dQ(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function dY(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dv(e.at);
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
let dJ = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d0(e) {
    let t = `container ${dW(e.local)} \xb7 remote ${dW(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dJ[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dx(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dx(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dx(n)} Ahead, ${dx(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d1 = ["main", "wip"];
var d2 = n(400154);
let d3 = {
        checkout: dT.FolderIcon,
        edit: m.PencilIcon,
        remote: dP.CloudIcon,
        commits: dL.ListNumberedIcon,
        calendar: d$.CalendarIcon,
        save: dq.SaveIcon,
        objects: dD.ServerIcon,
        download: dF.CloudDownloadIcon,
        size: dO.SpeedometerIcon,
        file: dG.FileIcon,
    },
    d4 = {
        ok: [l9.CircleCheckIcon, tC.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c1.WarningIcon, tC.A.colors.ICON_FEEDBACK_WARNING],
        error: [sT.CircleXIcon, tC.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dz.ArrowSmallUpIcon, tC.A.colors.ICON_MUTED],
        behind: [dU.ArrowSmallDownIcon, tC.A.colors.ICON_MUTED],
    };
function d5(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([oW.A], () => oW.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, c$.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let i = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? i.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && i.push(["Read stopped early; some rows were not read", !0])
                    : i.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && i.push(["Remote repository missing", !0]),
                    "error" === e && i.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && i.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${dv(r)}`,
                    ...i.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: i.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, i.jsxs)(dI, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: d2.Lj,
                children:
                    "" !== l.line &&
                    (0, i.jsx)(v.E, {
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
                    if (!e.running || null != e.localError) return [dY(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dY(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dx(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d1.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d0))
                        : l.push(
                              { label: "Main", value: dW(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dW(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dx(e.commits) : "Unknown", icon: "commits" },
                            dX("Oldest Commit", e.oldest),
                            dX("Newest Commit", e.newest),
                            dY(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dx(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dx(t.loose)} loose (${dg(t.looseBytes)}) \xb7 ${dx(t.packed)} packed in ${n} (${dg(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dx(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let i = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${dx(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                dZ(
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
                                  dZ("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = d3[r],
                        [u, o] = null != a ? d4[a] : [null, void 0];
                    return (0, i.jsx)(
                        dE,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: tC.A.colors.ICON_MUTED }),
                            state: null != u ? (0, i.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d7(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([oW.A], () => oW.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, c$.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oW.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, c$.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                ot.h.dispatch({
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
            let u = a.useCallback(() => (0, c$.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dH,
                },
                restart: u,
            };
        })(t),
        f = a.useCallback(() => {
            (0, E.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, i.jsxs)("div", {
        className: d2.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: d2.nM,
                children: [
                    (0, i.jsx)(dB.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dK.RetryIcon,
                        text: dH,
                        loading: l,
                        disabled: l,
                        onClick: f,
                    }),
                ],
            }),
            (0, i.jsx)(v.E, {
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
                            return `Restarted \xb7 new instance since ${dv(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dv(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d8(e, t) {
    return (0, i.jsx)(dE, {
        label: e,
        value: P.intl.formatToPlainString(T.default.yHJxuP, { count: dx((0, cv.aM)(t)) }),
        hint: `${dx(t.input_tokens)} in \xb7 ${dx(t.output_tokens)} out \xb7 ${dx(t.cache_read_input_tokens)} cache read`,
    });
}
function d9(e) {
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
            restartState: S,
            turnRunning: A,
            handleForceCompaction: C,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: R,
        } = ((t = (0, c.bG)([oW.A], () => oW.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([oW.A], () => oW.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([oW.A], () => oW.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([oW.A], () => oW.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([oW.A], () => oW.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([lV.A], () => lV.A.isThinking(g), [g])),
        (o = a.useCallback(() => (0, c$.Lj)(g), [g])),
        (f = a.useCallback(() => (0, c$.Lj)(g, !0), [g])),
        (m = a.useCallback(() => (0, c$.bq)(g), [g])),
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
    return (0, i.jsxs)("div", {
        className: d2.Mf,
        children: [
            (0, i.jsx)(dN, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, i.jsx)(dI, {
                title: P.intl.string(T.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dE, {
                                      label: P.intl.string(T.default["9nqym2"]),
                                      value: dx((0, cv.a7)(E.cost_usd)),
                                      hint: P.intl.formatToPlainString(T.default.NCdUIh, { count: dx(E.turns) }),
                                  }),
                                  d8(P.intl.string(T.default.xtxP0e), E.orchestrator),
                                  d8(P.intl.string(T.default["9Sj3SX"]), E.codegen),
                                  d8(P.intl.string(T.default.ANCEo3), (0, cv.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dE, {
                                          label: P.intl.string(T.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dx(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dI, {
                title: P.intl.string(T.default.dZHPE5),
                children:
                    null == b
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  d8(P.intl.string(T.default["7X3i9d"]), b.total),
                                  (0, i.jsx)(dE, {
                                      label: P.intl.string(T.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cv.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dI, {
                title: P.intl.string(T.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d_, {
                                      label: P.intl.string(T.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dx,
                                  }),
                                  (0, i.jsx)(dE, {
                                      label: P.intl.string(T.default.mRbSns),
                                      value: `${dx(y.tokensBefore)} \u{2192} ${dx(y.tokensAfter)}`,
                                      hint: P.intl.formatToPlainString(T.default.Vq3skS, {
                                          count: dx(y.retainedMessages),
                                          time: dv(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? P.intl.formatToPlainString(T.default.GMLCNv, { ceiling: dx(R) })
                                      : P.intl.string(T.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(dE, {
                            label: P.intl.string(T.default["4BX5KK"]),
                            value: `${dx(k.projected)} / ${dx(k.threshold)}`,
                            critical: !0,
                            hint: P.intl.formatToPlainString(T.default["6ngCax"], { time: dv(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: d2.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: P.intl.string(T.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return P.intl.string(T.default.wox6Ev);
                                    if ("pending" === e) return P.intl.string(T.default.OcPHQ1);
                                    let t = dv(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return P.intl.formatToPlainString(T.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? T.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? T.default.YZb4hK
                                              : T.default.ZoUSVK;
                                    return P.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: P.intl.string(T.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, i.jsx)(v.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: P.intl.string(T.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: d2.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: P.intl.string(T.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || A,
                                onClick: I,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return P.intl.string(T.default.mlok8D);
                                    if ("pending" === e) return P.intl.string(T.default["1ugSyK"]);
                                    let t = dv(e.observedAt);
                                    return P.intl.formatToPlainString(
                                        "restarted" === e.outcome ? T.default["76mfqO"] : T.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, i.jsx)(d7, { projectId: g }),
                ],
            }),
            (0, i.jsx)(d5, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(dI, {
                    title: P.intl.string(T.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dE, {
                                        label: P.intl.string(T.default.CLXHAs),
                                        value: dv(M.instance_since),
                                        hint: P.intl.string(T.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dE, { label: P.intl.string(T.default["8V8e1Z"]), value: dx(M.sockets) }),
                                    (0, i.jsx)(dE, {
                                        label: P.intl.string(T.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? P.intl.string(T.default.Wv025I)
                                            : P.intl.string(T.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dE, {
                                            label: P.intl.string(T.default["3oUYnv"]),
                                            value: dx(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dM, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dI, {
                    title: P.intl.string(T.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dE, {
                            label: P.intl.string(T.default.IlDBN3),
                            value: dx(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dE, {
                            label: P.intl.string(T.default["ZdzKR+"]),
                            value: P.intl.formatToPlainString(T.default.yHJxuP, { count: dx(_.context_window_tokens) }),
                        }),
                        (0, i.jsx)(dE, {
                            label: P.intl.string(T.default.cIhN2W),
                            value: P.intl.formatToPlainString(T.default.yHJxuP, {
                                count: dx(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dE, {
                            label: P.intl.string(T.default["+fOn/q"]),
                            value: dx(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dE, { label: P.intl.string(T.default.kIHga0), value: dx(_.max_build_attempts) }),
                        (0, i.jsx)(dE, { label: P.intl.string(T.default.Iw03yW), value: dx(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var d6 = n(237528),
    fe = n(629584),
    ft = n(531893);
function fn(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: ft.ut,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: P.intl.string(T.default.h1SE6R),
              }),
          });
}
function fl(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: ft.qf,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: P.intl.string(T.default.h1SE6R),
                  }),
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: P.intl.string(T.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: ft.qf,
              children: [
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fr(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: ft.ps,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(T.default.V7Ri8H),
              }),
          })
        : null;
}
var fi = n(109079);
let fa = a.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = a.useState(!1),
        u = a.useId(),
        o = a.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let i = e.slice(r).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let a = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: a, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: a, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, i.jsxs)("div", {
        className: fi.vK,
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fi.Mt,
                selectable: !0,
                children: cO(n.ts) ?? n.ts,
            }),
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fi.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: fi.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: fi.Cq, children: (0, i.jsx)(d6.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: fi.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(d6.v, { text: P.intl.string(T.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, i.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, i.jsxs)(ne.D, {
                                      className: fi.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": P.intl.string(T.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(eN.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(ni.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, i.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  P.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? T.default.kUhyUv : T.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, i.jsx)(v.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: fi.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, i.jsx)(v.E, {
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
function fs(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cL.A], () => cL.A.getLogs(t), [t]),
        l = (0, c.bG)([cL.A], () => cL.A.getHistoryState(t, "logs")),
        [r, s] = a.useState("all"),
        [u, o] = a.useState(""),
        d = a.useMemo(() => {
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
        f = a.useRef(null),
        m = a.useRef(!0);
    a.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let h = a.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = a.useMemo(
            () =>
                dy.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return db(e);
                            case "web":
                                return P.intl.string(T.default.IVzfVV);
                            default:
                                return P.intl.string(T.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: fi.$F,
        children: [
            (0, i.jsxs)("div", {
                className: fi.y4,
                children: [
                    (0, i.jsx)(fe.I, {
                        look: "pill",
                        "aria-label": P.intl.string(T.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: fi.KT,
                        children: (0, i.jsx)(cq.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: P.intl.string(T.default["m2+37Y"]),
                            "aria-label": P.intl.string(T.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(fn, { state: l }),
            (0, i.jsxs)(t2.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fi.sx,
                children: [
                    (0, i.jsx)(fr, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(fl, {
                              state: l,
                              emptyTitle: P.intl.string(T.default.S7qlPG),
                              emptyBody: P.intl.string(T.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: P.intl.string(T.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(fa, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fu(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dI, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(T.default.umcjif),
                      }),
        })
    );
}
function fo(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dE, {
                      label: P.intl.formatToPlainString(T.default["01ZMS4"], { env: db(n) }),
                      value: ((t = l.connected), P.intl.string(t ? T.default.Wv025I : T.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dE, {
                      label: P.intl.string(T.default["z1dh+F"]),
                      value: dx(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dv(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dE, { label: P.intl.string(T.default.Iz5GnJ), value: dx(l.guild_count) }),
                  (0, i.jsx)(dE, {
                      label: P.intl.string(T.default["7UqtNv"]),
                      value: dx(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? P.intl.formatToPlainString(T.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dv(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dE, {
                          label: P.intl.string(T.default["x3+JXJ"]),
                          value: dx(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dE, { label: db(n), value: P.intl.string(T.default.lTHQss) });
}
function fc(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dE, {
        label: db(t),
        value: P.intl.formatToPlainString(T.default["Xq+wHT"], {
            requests: dx(n.requests),
            failures: dx(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? P.intl.formatToPlainString(T.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dv(n.last_failure.at),
                  })
                : P.intl.formatToPlainString(T.default["7KlGT6"], { time: dv(n.since) }),
    });
}
function fd(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dE, {
                label: P.intl.formatToPlainString(T.default["92gVTm"], { env: db(t) }),
                value: dx(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dE,
                    {
                        label: P.intl.formatToPlainString(T.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? P.intl.formatToPlainString(T.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? P.intl.formatToPlainString(T.default.wxAWNv, { time: dv(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ff(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dE, {
        label: db(t),
        value: P.intl.formatToPlainString(T.default.suAOj9, { calls: dx(n.calls), errors: dx(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fm(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dI, {
            title: t,
            children: (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: P.intl.string(T.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dI, {
        title: t,
        children: [
            (0, i.jsx)(dE, {
                label: P.intl.string(T.default.xtD4Zp),
                value: dx(n.requests),
                hint: P.intl.formatToPlainString(T.default["7KlGT6"], { time: dv(n.since) }),
            }),
            (0, i.jsx)(dE, { label: P.intl.string(T.default.gfRhR3), value: dx(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d_, {
                              label: P.intl.string(T.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dp,
                          }),
                          (0, i.jsx)(dE, {
                              label: P.intl.string(T.default.mSKImM),
                              value: dp(r),
                              hint: P.intl.formatToPlainString(T.default.JqMU05, {
                                  total: dp(n.cpu_ms_total),
                                  wall: dp(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dE, {
                      label: P.intl.string(T.default.LEJ5r3),
                      value: P.intl.string(T.default["2Ekb2b"]),
                      hint: P.intl.string(T.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dE, { label: P.intl.string(T.default.xvmL1D), value: dp(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dE, { label: P.intl.string(T.default["4sQYwH"]), value: dx(n.exceeded_cpu), critical: !0 }),
            (0, i.jsx)(dE, {
                label: P.intl.string(T.default.bQenOy),
                value: dx(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: P.intl.formatToPlainString(T.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dE, { label: P.intl.string(T.default.xgpn4Y), value: dj(n.build) }),
        ],
    });
}
function fh(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: P.intl.string(T.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: P.intl.string(T.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: P.intl.string(T.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dI, {
        title: P.intl.string(T.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dE, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dE, {
                                  label: P.intl.formatToPlainString(T.default.u7kJJ4, { env: n }),
                                  value: dg(l.r2_bytes),
                                  hint: P.intl.formatToPlainString(
                                      l.r2_truncated ? T.default.lH0oQw : T.default.m9h02S,
                                      { count: dx(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(d_, {
                                      label: P.intl.formatToPlainString(T.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dg,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fg(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: d2.Mf,
        children: [
            (0, i.jsx)(dN, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(fm, {
                            title: P.intl.string(T.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fm, {
                            title: P.intl.string(T.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fh, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(fu, {
                                title: P.intl.string(T.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fo, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(fu, {
                                title: P.intl.string(T.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fc, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(fu, {
                                title: P.intl.string(T.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fd, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(fu, {
                                title: P.intl.string(T.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(ff, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(dR, { analytics: t.analytics }),
                        (0, i.jsxs)(dI, {
                            title: P.intl.string(T.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dE, {
                                    label: P.intl.string(T.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dj(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dE, {
                                    label: P.intl.string(T.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dj(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fp = n(592465);
function fx(e) {
    let { projectId: t, onClose: n } = e,
        l = O(),
        [r, s] = a.useState(() => (l && q?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([oW.A], () => oW.A.getStatus(t), [t]),
        o = (0, c.bG)([oW.A], () => oW.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, c$.R7)(t), (0, c$.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, ez.Rw)(t), [t]));
    let f = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == q || q.projectId !== e) return null;
            let { traceId: t } = q;
            return ((q = null), t);
        })(t);
        return null != e && (dd(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        f();
    }, [f]),
        D(t, () => {
            f() && s("trace");
        }));
    let m = a.useCallback(() => {
            (0, oC.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oW.A.getStatus(t),
                        last_turn_usage: oW.A.getLastTurnUsage(t),
                        last_compaction: oW.A.getLastCompaction(t),
                        last_compaction_decline: oW.A.getLastCompactionDecline(t),
                        timing_traces: oW.A.getTimingTraces(t),
                        logs: cL.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, _.P0)({ text: P.intl.string(T.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = P.intl.string(T.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: fp.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(te.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(te.Ay.Icon, {
                            icon: ow.CopyIcon,
                            tooltip: P.intl.string(T.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, i.jsx)(te.Ay.Icon, { icon: tn.XSmallIcon, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, i.jsx)(te.Ay.ChannelIcon, { icon: oA.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(te.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: fp.rf,
                children: [
                    (0, i.jsxs)(cP.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": P.intl.string(T.default.RvvWIh),
                        className: fp.vR,
                        children: [
                            (0, i.jsx)(cP.V.Item, { id: "logs", children: P.intl.string(T.default["+VRYCm"]) }),
                            (0, i.jsx)(cP.V.Item, { id: "worker", children: P.intl.string(T.default["50D0FZ"]) }),
                            (0, i.jsx)(cP.V.Item, { id: "agent", children: P.intl.string(T.default.UkbTK1) }),
                            l ? (0, i.jsx)(cP.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(fs, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(fg, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(dh, { projectId: t })
                            : (0, i.jsx)(d9, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fv = n(365912),
    fj = n(873715);
function fb(e) {
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
let fy = Object.freeze({ x: -1, y: -1 });
function fk(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fb(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fw = n(192888);
function fS(e, t) {
    return (0, fw.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fk, () => ({ status: "failed" }));
}
var fA = n(108308);
let fC = { x: 25, y: 21 };
function fN(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fI(e, t, n, l) {
    let r = fN(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fE(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function f_(e) {
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
function fM(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: f } = (0, z.rt)(u),
        m = (0, G.Zv)(u),
        h = (0, H.Rv)(),
        g = (0, c.bG)([nF.default], () => nF.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, j] = a.useState(null),
        [b, y] = a.useState(!1),
        [k, w] = a.useState(!1),
        [S, A] = a.useState(null),
        [C, N] = a.useState(!1),
        E = a.useRef(null),
        _ = a.useRef(null),
        M = a.useRef(null),
        [R, L] = a.useState(null),
        [$, q] = a.useState(!1),
        [D, F] = a.useState(null),
        [O, U] = a.useState(null),
        B = a.useRef(!1),
        [K, V] = a.useState(!1),
        [W, X] = a.useState(null),
        Q = o && !m && !h;
    null == D || (Q && D.projectId === u) || F(null);
    let Z = D?.projectId ?? null;
    a.useEffect(() => {
        if (null != Z) return () => (0, nN.xJ)(Z, "design");
    }, [Z]);
    let Y = tp(r, Q);
    a.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fj.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? f_(t.response) : null;
                    null == n ? w(!0) : (j(n), (0, z.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [Q, r, u]);
    let J = a.useRef(null);
    (a.useEffect(() => {
        if (!Q || null == Y || null == u) return;
        if (null == x) {
            J.current = Y;
            return;
        }
        if (tg(J.current, Y)) return;
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
                    (0, fj.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = f_(e.response);
                        null != n && (j(n), (0, z.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let i = fb(e.element);
                            null != i && l.set(r.id, i);
                        }),
                            (0, z.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, f, u, r]),
        a.useEffect(() => {
            if (!Q)
                return () => {
                    (A(null), F(null), X(null), j(null));
                };
        }, [Q]));
    let ee = a.useRef(null),
        et = a.useRef(null),
        en = a.useRef(!1),
        el = a.useRef(!1);
    a.useEffect(() => {
        ((el.current = Q), Q || ((ee.current = null), (et.current = null), (M.current = null), N(!1)));
    }, [Q]);
    let er = a.useCallback(
            function e() {
                if (en.current) return;
                let t = ee.current;
                if (null == t) return;
                ee.current = null;
                let n = r();
                null != n &&
                    ((en.current = !0),
                    fS(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || fq(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && q(!0);
                            else {
                                let e = (0, lF.Sk)(t.target);
                                (L((t) => (f$(t, e) ? t : e)),
                                    A((e) => {
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
        ei = a.useCallback(() => {
            if (null == D) return;
            let e = !B.current;
            (U({ at: D.at, label: D.label, draft: D.draft, instant: e }), V(e), F(null));
        }, [D]);
    (a.useEffect(() => {
        if (!K) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [K]),
        a.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => U(null), fP);
            return () => clearTimeout(e);
        }, [O]));
    let ea = null == x || null == Y || x.viewport.width < 1 ? 1 : Y.width / x.viewport.width,
        es = null != x || k,
        eu = a.useMemo(() => x?.elements ?? [], [x]),
        eo = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        eo.current = { rect: Y, scale: ea };
    }, [Y, ea]);
    let ec = a.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, nN.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lF.Sk)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ef = a.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ef);
    let em = a.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), ef(), N(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fL || Math.abs(e.clientY - D.at.y) > fL) && (B.current = !0);
                    return;
                }
                if (!es) return void A(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lF.CZ)(eu, t.x, t.y),
                        n = null != e && fq(e, Y, ea) ? null : e;
                    if (null != n) {
                        let e = (0, lF.Sk)(n);
                        L((t) => (f$(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ea, es, ed, $, eu, D, W, ef, er],
        ),
        eh = null == W ? null : f.find((e) => e.id === W.id),
        eg = Q && (C || D?.target.marker != null || eh?.target.marker != null);
    a.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && fS(e, fy);
            };
    }, [eg, r]);
    let ep = a.useCallback(() => {
        (N(!1), A(null), (et.current = null), (ee.current = null));
    }, []);
    a.useEffect(() => {
        if (!Q || !C || !es || $ || null != D || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, C, es, $, D, W, er]);
    let ex = a.useCallback(
            (e) => {
                if (null != D || null != W) {
                    (ei(), X(null));
                    return;
                }
                if (null == S || null == Y) return;
                let t = ed(e, Y);
                ec(S, (0, lF.Hm)(S, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [S, Y, ed, D, W, ec, ei],
        ),
        ev = a.useCallback(() => {
            null != u && (A(null), (0, I.K7)(u)?.active === !0 ? (0, I.V9)(u) : (0, z.mB)(u));
        }, [u]),
        ej = a.useCallback(() => {
            null != u &&
                (null != D
                    ? ei()
                    : W?.confirmingRemove === !0
                      ? X({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? X(null)
                        : ev());
        }, [u, D, W, ei, ev]),
        eb = a.useRef(ej),
        ey = a.useRef(u),
        ek = a.useRef(ev);
    a.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = u), (ek.current = ev));
    });
    let ew = a.useRef(null);
    a.useEffect(() => {
        if (Q)
            return (
                ta.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        ta.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, ti.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fv.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, I.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eS = a.useCallback(
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
                    let n = null == S ? -1 : eu.findIndex((e) => e.ref === S.ref);
                    A(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ec(S, lF.QU, { x: (Y?.left ?? 0) + S.rect.x * ea, y: (Y?.top ?? 0) + S.rect.y * ea }));
            },
            [u, D, W, eu, S, ec, ej, Y, ea],
        ),
        eA = a.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    (((0, lF.Ch)(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ez.dv)(u, (0, lF.Q9)(D.target, D.draft), e), ei(), A(null)));
            },
            [u, D, ei],
        ),
        eC = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ts.vX)(u, e)), [u]),
        eN = a.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lF.Ch)(W.draft) && ((0, z.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = a.useCallback(() => {
            null != u && null != W && null != p && ((0, z.aC)(u, p, W.id), X(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? P.intl.string(T.default["Eb/YV9"])
                : k
                  ? P.intl.string(T.default.FD30bh)
                  : P.intl.formatToPlainString(T.default.dTSqLF, { count: f.length })
            : "",
        e_ = Q && null != Y,
        eM = C && null == W,
        eR = D?.target ?? eh?.target ?? null,
        eT = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = fE(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fI(eh.target, eh.anchor, Y, ea), Y)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            fS(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, tr.createPortal)(
            (0, i.jsxs)("div", {
                ref: ew,
                className: fA.Li,
                children: [
                    (0, i.jsx)(nr.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    e_
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: fA.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": P.intl.string(T.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eS,
                                  }),
                                  null != S && null == S.marker && null == D && null == W
                                      ? (0, i.jsx)(fD, { box: fN(S, Y, ea) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: E,
                                      className: fA.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: fA.xz,
                                          "data-shown": null != S && null == W && null == D ? "" : void 0,
                                          "data-instant": K ? "" : void 0,
                                          children: (0, i.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: fA.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, i.jsx)("span", { className: fA.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: fA.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: _,
                                      className: fA.Y,
                                      children: eM ? (0, i.jsx)("div", { className: fA.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: fA.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: fA.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, i.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: fA.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: fA.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: fA.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, i.jsx)("div", { className: fA.D0, style: fN(eR, Y, ea), "aria-hidden": !0 })
                                      : null,
                                  f.map((e, t) => {
                                      let n = fI(e.target, e.anchor, Y, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fA.xL,
                                              style: { ...fE(n, Y), width: 24, height: 24 },
                                              "aria-label": P.intl.formatToPlainString(T.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lF.Bx)(e.target),
                                              }),
                                              "aria-expanded": W?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && X(l);
                                              },
                                              onFocus: () => {
                                                  null == D && X(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ei(), X(l));
                                              },
                                              children: (0, i.jsx)(fR, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, i.jsx)(tm, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: Y,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != D && (0, lF.Ch)(eT.draft),
                                            onChange: (e) => {
                                                null != D && F({ ...D, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ei,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, i.jsxs)(fT, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lF.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, i.jsx)(nR.f, {
                                                          autoFocus: !0,
                                                          label: P.intl.string(T.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: W.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => X({ ...W, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eN());
                                                          },
                                                      })
                                                    : (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fA.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, z.It)(eh, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: fA.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fA.nv,
                                                                            children: P.intl.string(T.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: P.intl.string(T.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: P.intl.string(T.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eI,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: P.intl.string(T.default.friIzR),
                                                                            onClick: () =>
                                                                                X({
                                                                                    ...W,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        W.editing
                                                                            ? (0, i.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !(0, lF.Ch)(W.draft),
                                                                                  text: P.intl.string(T.default.iicRP9),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, i.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: P.intl.string(
                                                                                      T.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      X({
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
function fR(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nF.default], () => nF.default.getUser(t), [t]);
    return (0, i.jsx)(iH.eu, {
        src: null == n ? null : iW.Ay.getUserAvatarURL(n),
        size: iV._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fT(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = a.useRef(null),
        j = a.useRef(null),
        [b, y] = a.useState(fC);
    a.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: S,
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, i.jsxs)("div", {
        ref: x,
        className: fA.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: fA.MY,
                children: [
                    (0, i.jsx)("span", { ref: j, className: fA.ip, children: (0, i.jsx)(fR, { authorId: d }) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fA.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: fA.zI, children: p }),
        ],
    });
}
let fP = 300,
    fL = 2;
function f$(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fq(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fD(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: fA.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fF = n(318774),
    fO = n(697744),
    fG = n(130324);
function fz(e) {
    let t = (0, fO.c)(),
        { events: n, getDuration: l } = t;
    a.useEffect(() => {
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
    let r = (0, t5.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fU(e) {
    let { className: t } = e,
        { Component: n, events: l } = fz(3e4);
    return (0, i.jsxs)("div", {
        className: o()(t, fG.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: fG.ol,
                children: P.intl.string(T.default.AyiQEp),
            }),
        ],
    });
}
var fB = n(251363),
    fK = n(944142),
    fH = n(532247),
    fV = n(501628);
function fW(e) {
    let { progress: t } = e,
        { Component: n } = fz(1500),
        l = F.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: fV.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: fV.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fX(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([fK.A], () => (s ? fK.A.getLiveReload(t) : null), [s, t]),
        o = (0, e$.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, fH.dv)(e),
                [r, i] = a.useState(null),
                [s, u] = a.useState(l),
                [o, d] = a.useState(t);
            s !== l && (u(l), d(t), i(null != l || o ? null : (0, fH.QP)(e, s)));
            let f = (0, c.bG)(
                    [ep.A],
                    () => {
                        let e = ep.A.getFrame(n);
                        return (0, ey.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = a.useRef(f),
                h = a.useRef(!1);
            return (
                a.useEffect(() => {
                    ((m.current = f), f && (h.current = !0));
                }, [f]),
                a.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return i(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fB.ow)(null, n) && e();
                    }
                    ((h.current = m.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            h.current || e();
                        }, 4e3),
                        a = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(a));
                    };
                }, [r, n]),
                r
            );
        })(d, f, o),
        h = f ? null : (0, fH.h_)(d, u?.step ?? null, m);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nr.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: fV.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(fW, { progress: h }),
                  })
                : null,
        ],
    });
}
let fQ = 0;
var fZ = n(782134),
    fY = n(357858),
    fJ = n(343030),
    f0 = n(11411),
    f1 = n(111518),
    f2 = n(240666);
let f3 = { width: 1 / 0, height: 1 / 0 };
function f4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f3;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var f5 = n(702083);
function f7(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([eq.A], () => ({
            mobile: eq.A.isBuilderPreviewMobile(),
            landscape: eq.A.isBuilderPreviewLandscape(),
        })),
        r = a.useRef(null),
        [s, u] = a.useState(null);
    a.useLayoutEffect(() => {
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
        f = n ? f4(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: o()(f5.dw, { [f5.PQ]: null != f }),
        children: (0, i.jsx)("div", { className: o()(f5.R9, { [f5.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var f8 = n(347927);
function f9(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: o()(f8.Bf, l && f8.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: f8.Ux,
                children: [
                    (0, i.jsx)(x.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var f6 = n(957272);
function me(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, f1.A)({ applicationId: t, surface: n, launch: l });
    if (((0, f2.A)(t, n), s === f1.n.Launched)) {
        let e = (0, i.jsx)(f0.A, { frameId: a.id, level: fJ.A.WithinAppContent, className: f6.Z7, overlay: r });
        return (0, eD.Q5)(n) ? (0, i.jsx)(f7, { children: e }) : e;
    }
    return (0, i.jsx)(mt, { state: s });
}
function mt(e) {
    let { state: t } = e;
    switch (t) {
        case f1.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: f6.qs,
                children: (0, i.jsx)(f9, {
                    title: P.intl.string(T.default["9kpdo7"]),
                    body: P.intl.string(T.default.iIA8Nj),
                }),
            });
        case f1.n.NoApplication:
            return (0, i.jsx)(fU, { className: f6.qs });
        case f1.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: f6.qs,
                children: (0, i.jsx)(f9, {
                    title: P.intl.string(T.default["7k4GyN"]),
                    body: P.intl.string(T.default.zdIy3R),
                }),
            });
        case f1.n.Error:
            return (0, i.jsxs)("div", {
                className: f6.qs,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(T.default.lTPbnG),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: f6.tj,
                        children: P.intl.string(T.default.e6GiAZ),
                    }),
                ],
            });
        case f1.n.AwaitingLaunch:
        case f1.n.Loading:
            return (0, i.jsx)("div", { className: f6.qs, children: (0, i.jsx)(b.y, {}) });
    }
}
var mn = n(308528),
    ml = n(334738),
    mr = n(699344),
    mi = n(365971),
    ma = n(703462);
function ms(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: ma.f,
        children: [
            (0, i.jsx)(aw.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mu() {
    return (0, i.jsx)("div", { className: ma.f, children: (0, i.jsx)(b.y, {}) });
}
function mo(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = a.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nq.A], () => (null != o ? nq.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && mn.A.preload(eb.ME, t);
        }, [t]),
        (n = (0, c.bG)([op.A], () => op.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mi.Xg)();
            return (
                (0, ml.yl)(t, e),
                () => {
                    (0, ml.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = a.useState(null),
        h = f === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, ee.CN)(l).then(
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
        ? (0, i.jsx)(ms, { message: P.intl.string(T.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(mu, {})
          : (0, i.jsx)("div", {
                className: ma.g,
                children: (0, i.jsx)(mr.A, { channel: d, guild: null, chatInputType: s1.oU.SIDEBAR }, d.id),
            });
}
var mc = n(765671),
    md = n(596977),
    mf = n(921853),
    mm = n(582063);
function mh(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, ee.vX)(t, n?.id ?? null);
    }
    let u = P.intl.string(T.default.Gl3XtE),
        o = P.intl.string(T.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: mm.aF,
        children: [
            (0, i.jsx)(tu.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(tj.K, {
                    icon: mf.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: mm.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: P.intl.formatToPlainString(T.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: P.intl.string(T.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(tu.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(tj.K, {
                    icon: ni.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mg = n(625903),
    mp = n(666476);
let mx = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mv() {
    (0, _.P0)({ text: P.intl.string(T.default.jj3abP), variant: "critical" });
}
function mj(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = P.intl.string(T.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ew.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(mb, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: mm.m2,
                        children: (0, i.jsx)(tu.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(tj.K, {
                                "aria-label": r,
                                icon: mg.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, i.jsx)("input", {
                ref: l,
                type: "file",
                accept: mx.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mx.includes(n.type)
                                ? n.size > mp.aI
                                    ? (0, _.P0)({ text: P.intl.string(T.default.T8Spiu), variant: "critical" })
                                    : (0, r8.M$)(t, n).catch(mv)
                                : (0, _.P0)({ text: P.intl.string(T.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mb(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([r7.A], () => r7.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(eS.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": P.intl.string(T.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(eA.rX, {
                children: [
                    (0, i.jsx)(eA.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: P.intl.string(T.default.uQpDky),
                        icon: lw.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(eA.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: P.intl.string(T.default.AiAz8J),
                        icon: dK.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, r8.Og)(t).catch(mv));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(eA.rX, {
                children: (0, i.jsx)(eA.fP, {
                    id: "conjure-overlay-background-blur",
                    label: P.intl.string(T.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, r8.Y1)(t, !a) || mv();
                    },
                }),
            }),
        ],
    });
}
function my(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, mc.Ay)(),
        { captures: c, selected: d } = r5(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: ei({ width: l - 48, height: r - 48 }, n) };
            let i = t.width / t.height,
                a = Math.min(l, r * i),
                s = a / 1920,
                u = ei({ width: 1872, height: 1920 / i - 48 }, n);
            return { top: (r - a / i) / 2 + 24 * s, end: (l - a) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        a.useEffect(() => (0, md.L0)(), []),
        (0, i.jsxs)("div", {
            className: mm.JH,
            children: [
                (0, i.jsx)(r6, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: mm.dw,
                    children: (0, i.jsx)("div", {
                        className: mm.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, i.jsx)(me, { applicationId: t, surface: ey.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(mj, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(mh, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function mk(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, i.jsx)(f9, {
        title: P.intl.string(T.default.xlEjZ8),
        body: P.intl.string(T.default["4ByPbd"]),
        children: (0, i.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: P.intl.string(T.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var mw = n(409478),
    mS = n(652227);
function mA(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: a,
            previewGate: s,
            availability: u,
            activeMode: o,
            widgetApplicationId: d,
            overlayWidgetSize: f = el,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lK.A], () => null != m && null != lK.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: mS.qs, children: (0, i.jsx)(b.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: mS.qs,
                children: (0, i.jsx)(mk, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mS.RG,
                      children: [
                          (0, eu.yf)(u, o)
                              ? g
                                  ? (0, i.jsx)(mC, { projectId: m, onResume: p })
                                  : (0, i.jsx)(me, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, i.jsx)("div", {
                                        className: mS.qs,
                                        children: (0, i.jsx)(f9, {
                                            wide: !0,
                                            title: P.intl.string(T.default["08U+YO"]),
                                            body: P.intl.string(T.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(mw.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, i.jsx)(my, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(ey.ZN) })
                              : null,
                          "bot" === o && null != n && null != m
                              ? (0, i.jsx)(mo, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, i.jsx)("div", { className: mS.qs, children: (0, i.jsx)(b.y, {}) })
              : (0, i.jsx)(fU, { className: mS.qs });
}
function mC(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, fY.Pu)(t),
        (0, i.jsx)("div", {
            className: mS.qs,
            children: (0, i.jsx)(f9, {
                wide: !0,
                title: P.intl.string(T.default.MMWEH2),
                body: P.intl.string(T.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: fZ.PlayIcon,
                              text: P.intl.string(T.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mN = n(750506),
    mI = n(867193),
    mE = n(539197),
    m_ = n(977020);
function mM(e) {
    let { projectId: t } = e,
        n = (0, mE.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mE.Ie)(e);
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
    return (0, i.jsxs)("div", {
        className: m_.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [mE.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: o()(m_.hN, m_.vW), style: f(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: o()(m_.hN, m_.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: o()(m_.UE, { [m_.SP]: n.shown, [m_.Vq]: n.pressed, [m_.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mR = n(417760);
function mT(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([lV.A], () => null != e && lV.A.isThinking(e)),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || l(!1)),
                a.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = a.useCallback(() => {
                null != e && (l(!0), (0, ez.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, G.CU)(n),
        f = "controlling" === t,
        m = P.intl.string(f ? (u ? T.default["VJW/5P"] : T.default["+hD2Iz"]) : T.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: P.intl.string(T.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: o()(mR.M0, mR.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, i.jsx)(cs.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(aZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: mR.ID, children: m }),
                  f ? (0, i.jsx)(nr.A, { children: P.intl.string(T.default.fg1sor) }) : null,
                  f ? (0, i.jsx)("div", { className: mR.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: mR.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: mR.sp,
                      children: [
                          (0, i.jsx)(aZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, i.jsx)(cs.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: mR.f4,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: mR.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, i.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: mR.Rb,
                                            children: P.intl.string(T.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, i.jsx)("div", { className: mR.lC, children: h }) : null,
              ],
          });
}
function mP(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, G.Zv)(null != n && n === l ? t : null),
        o = (function (e) {
            let [t, n] = a.useState(e),
                [l, r] = a.useState(!1);
            return (e !== t && (n(e), r(!e)),
            a.useEffect(() => {
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
        c = (0, H.Rv)(),
        d = (0, ex.cR)(s);
    a.useEffect(() => {
        u && d && null != s && (0, ex.BL)(s);
    }, [u, d, s]);
    let [f, m] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== o;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = th(r());
            m((t) => (tg(t, e) ? t : e));
            let t = null == h ? null : th(h);
            (x((e) => (tg(e, t) ? e : t)), null != h && (0, mI.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mI.C)(0));
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
        S = (function () {
            let [e] = a.useContext(mN.uY),
                [t] = a.useState(() => document.createElement("div"));
            return (
                a.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            j
                ? (0, i.jsx)("div", {
                      ref: g,
                      className: mR.D,
                      "data-phase": o,
                      children: (0, i.jsx)("div", {
                          className: mR.QF,
                          children: (0, i.jsx)(mT, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tr.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(nr.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? P.intl.string(T.default.oWcemF)
                                : "handoff" === o
                                  ? P.intl.string(T.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, tr.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: mR.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: mR.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(mM, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var mL = n(399503),
    m$ = n(853555),
    mq = n(944100),
    mD = n(327152),
    mF = n(187645);
let mO = { width: 1280, height: 720 },
    mG = new Map(),
    mz = !1;
function mU() {
    let e = new Map();
    for (let t of new Set([...lV.A.getActivityOrderedProjectIds(), ...(0, G.T7)()])) {
        if (!(lV.A.isThinking(t) || (0, G.wK)(t)) || et.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eP.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eD.Rc)(t), (0, eD.Th)(t)].find(ey.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mG]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mG.delete(t),
            n.unregisterLookup(),
            mq.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mD.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mG.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mF.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mB(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mG.set(e, l),
                    (l.unregisterLookup = (0, m$.Ng)(e, () => (0, fB.n5)(n, t))),
                    mq.A.registerFrameTarget(t, n, fJ.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mG) mB(t.element, e, t.frameId);
}
function mB(e, t, n) {
    if (ep.A.getFrame(n)?.surface.type === eo.U.OVERLAY) {
        let l = ea(eP.Ay.getProject(t));
        (e.classList.remove(mF.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mD.Pn)(n, l));
        return;
    }
    let l = eq.A.isBuilderPreviewMobile();
    e.classList.toggle(mF.L, !l);
    let r = l ? f4(eq.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mD.Pn)(n, r ?? mO));
}
var mK = n(873727),
    mH = n(850333),
    mV = n(418842),
    mW = n(413599);
let mX = 0;
var mQ = n(487887);
let mZ = null;
var mY = n(949621);
function mJ(e) {
    let { projectId: t } = e,
        n = (0, c.bG)(
            [eP.Ay],
            () => {
                let e = eP.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = P.intl.string(l ? T.default.cAExE8 : T.default["15Y/Yz"]);
    return (0, i.jsx)(nl.u, {
        title: r,
        body: P.intl.string(l ? T.default.r8rVq1 : T.default.IZMyda),
        position: "bottom",
        children: (0, i.jsx)("span", { className: mY.I, tabIndex: 0, children: (0, i.jsx)(d6.v, { text: r }) }),
    });
}
var m0 = n(541940);
function m1(e) {
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
        [p, x] = a.useState(null),
        v = (0, e$.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([mW.A], () => (0, mK.x4)(mW.A.theme)),
            l = (0, c.bG)([mH.A], () => mH.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([iB.Ay], () => ({
                reducedMotion: iB.Ay.useReducedMotion,
                fontScale: (0, mK.U0)(),
                highContrast: iB.Ay.isHighContrastModeEnabled,
                forcedColors: iB.Ay.useForcedColors,
                underlineLinks: iB.Ay.alwaysShowLinkDecorations,
            })),
            d = F.hH.useSetting(),
            f = (0, mV.C)(),
            m = (0, c.bG)(
                [ep.A, eq.A],
                () =>
                    eq.A.isBuilderPreviewMobile() &&
                    ep.A.getFrame(t)?.applicationId === eq.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = a.useRef(!1),
            g = a.useRef(!1),
            p = a.useRef(null),
            x = a.useCallback(() => {
                let l = (0, fB.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let a = {
                    revision: ++mX,
                    baseTheme: n,
                    customTheme: (0, mK.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fw.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, i, m, t, s, d, e, r, f, o]),
            v = a.useRef(x);
        a.useLayoutEffect(() => {
            v.current = x;
        });
        let j = a.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), g.current || v.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                j();
            }, [l, j]),
            a.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            a.useLayoutEffect(() => {
                let n = (0, fB.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, fB.n5)(e, t) && ((p.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            a.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(p, j),
        a.useEffect(() => {
            if (null != t) return (0, m$.Ng)(t, () => (0, fB.n5)(p, j));
        }, [t, p, j]));
    let b = a.useCallback(() => (0, fB.ow)(p, j), [p, j]),
        y = a.useCallback(() => (h ? (0, fB.ow)(p, j) : p), [h, p, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: o()(m0.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, i.jsx)(mP, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, i.jsx)("div", { ref: x, className: m0.fm, children: f }),
                ],
            }),
            m,
            g
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(fM, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(tJ, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function m2(e) {
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
            activeMode: S,
            widgetApplicationId: A,
            overlayWidgetSize: C,
            previewPaused: N = !1,
            onResumePreview: I,
        } = e;
    (0, mL.k)(n, A);
    let E = u.type === eo.U.MAIN || (0, eD.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eq.A], () => ({
            mobile: eq.A.isBuilderPreviewMobile(),
            landscape: eq.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? mQ.aX.LANDSCAPE : mQ.aX.PORTRAIT), (mZ = e));
                else {
                    if (mZ !== e) return;
                    ((l = mQ.aX.UNHANDLED), (mZ = null));
                }
                ot.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let _ = a.useRef(null),
        [M, R] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, t1.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, t1.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            E && ((t.current = ++fQ), (0, ee.HV)(r));
        }, [r, E]),
        a.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === fQ && (0, ee.HV)(null);
            };
        }, [r, E]),
        a.useEffect(() => {
            null != n &&
                ((0, ez.ensureConnection)(n),
                mz ||
                    ((mz = !0),
                    lV.A.addChangeListener(mU),
                    eP.Ay.addChangeListener(mU),
                    ep.A.addChangeListener(mU),
                    eq.A.addChangeListener(mU),
                    et.A.addChangeListener(mU),
                    (0, G.W3)(mU),
                    mU()));
        }, [n]),
        a.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && R(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, M - 320),
        $ = m || E;
    return (0, i.jsx)("div", {
        ref: _,
        className: m0.LB,
        children: (0, i.jsx)(m1, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: f,
            showsFrame: (0, eu.yf)(w, S),
            paused: N,
            mainClassName: null == f ? void 0 : o()(m0.ez, { [m0.zt]: m }),
            content: (0, i.jsx)(mA, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: d,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: S,
                widgetApplicationId: A,
                overlayWidgetSize: C,
                projectId: n,
                paused: N,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, i.jsx)(fX, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && $
                    ? (0, i.jsx)("div", {
                          className: m ? m0.v7 : m0.LL,
                          children: (0, i.jsx)(tl.A, {
                              sidebarType: tl.X.CallChatSidebar,
                              maxWidth: L,
                              capturePointer: !0,
                              children: (0, i.jsx)("div", {
                                  className: m0.cO,
                                  children: v
                                      ? (0, i.jsx)(fx, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(fF.Ay, { projectId: n }),
                                                (0, i.jsxs)(te.Ay, {
                                                    "aria-label": P.intl.string(P.t["/VQax8"]),
                                                    toolbar: (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, i.jsx)(te.Ay.Icon, {
                                                                      icon: tn.XSmallIcon,
                                                                      tooltip: P.intl.string(T.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(te.Ay.Title, {
                                                            children: P.intl.string(P.t["/VQax8"]),
                                                        }),
                                                        (0, i.jsx)(mJ, { projectId: n }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: m0.cb,
                                                    children: (0, i.jsx)(
                                                        cT,
                                                        {
                                                            projectId: n,
                                                            restoreState: b,
                                                            onRestoreVersion: p,
                                                            onImportProject: x,
                                                            escapeScopeRef: _,
                                                            visible: m,
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
var m3 = n(705427),
    m4 = n(606128),
    m5 = n(323140);
function m7(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: b, guildId: y, onBackToServer: k } = e,
        w = a.useContext(Z.A),
        [S] = a.useState(() => (null != w ? J.A.getProjectView(w) : null)),
        [$, q] = a.useState(S?.chatOpen ?? !0),
        [F, el] = a.useState(S?.debugOpen ?? !1);
    a.useEffect(() => {
        null != w && (0, Y.g7)(w, { chatOpen: $, debugOpen: F });
    }, [w, $, F]);
    let er = a.useCallback(
            (e) => {
                null != w && (0, Y.g7)(w, { previewSelection: e });
            },
            [w],
        ),
        ei = O(),
        ec = (0, U.f)("ConjureSelectedProjectScreen"),
        ed = a.useCallback(() => q(!0), []),
        ef = a.useCallback(() => {
            (el(!1), q(!0));
        }, []),
        { restoreState: eh, handleRestoreVersion: eg } = (function (e, t) {
            let [n, l] = a.useState(null),
                r = e?.id ?? null,
                i = a.useRef(r),
                s = a.useRef(!0),
                u = a.useRef(!1);
            return (
                (i.current = r),
                a.useEffect(
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
                    handleRestoreVersion: a.useCallback(
                        function (n) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (null == e || u.current) return;
                            let o = e.id;
                            function c() {
                                return s.current && i.current === o;
                            }
                            ((u.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, W.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (a &&
                                                    c() &&
                                                    (0, _.P0)({
                                                        text: P.intl.formatToPlainString(T.default.Z4n6LX, {
                                                            title: (0, V.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, X.c)(o, r);
                                                null != e && (0, _.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, _.P0)({
                                                    text: P.intl.string(T.default["PSdo+w"]),
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
        })(s, ef),
        ep = s?.id ?? null,
        {
            integrationStatus: ex,
            isPreviewApplicationLoading: ev,
            checkingIntegration: ej,
            previewReady: eb,
            hasFrame: ew,
        } = (function (e) {
            let [t, n] = a.useState(null),
                l = e?.id ?? null,
                r = a.useRef(l),
                i = a.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eP.Ay, eT.A],
                    () => (null == l ? null : (eP.Ay.getIntegrationStatus(l) ?? eT.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, eM.YY)(u ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eu.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            a.useEffect(() => {
                g &&
                    !d &&
                    null != u &&
                    (async function (e) {
                        try {
                            await (0, eM.TA)(e);
                        } catch {}
                    })(u);
            }, [h, d, g, u]);
            let p = a.useCallback(async () => {
                if (null == l || r.current !== l) return;
                i.current?.abort();
                let e = new AbortController();
                ((i.current = e), n(null));
                try {
                    await ((0, eR.CG)(l)?.catch(() => (0, eR.U1)(l, e.signal)) ?? (0, eR.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || i.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                a.useEffect(
                    () => (
                        p(),
                        () => {
                            (i.current?.abort(), (i.current = null));
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
        eS =
            (0, c.bG)([eU.A], () => (null == ep ? void 0 : eU.A.getPublishStatus(ep)?.previewAppChannels), [ep]) ??
            ex?.preview_app_channels,
        {
            availability: eA,
            activeMode: eC,
            setMode: eN,
            frameSurface: eI,
            frameSurfaceOptions: eX,
            setFrameSurface: eQ,
            appChannel: eZ,
            setAppChannel: eY,
            frameLaunchParams: eJ,
            widgetApplicationId: e0,
        } = (0, em.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ew,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ex?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(en.q7.OVERLAY) === !0,
            previewAppChannels: eS,
            initialSelection: S?.previewSelection,
            onSelectionChange: er,
        }),
        e1 = ea(s);
    ((0, es.x)(ep, (e) => {
        eA.modes.includes(e) && eN(e);
    }),
        D(ep, () => {
            (q(!0), el(!0));
        }));
    let e2 = eA.modes.includes("frame"),
        e3 = (0, c.bG)([et.A], () => et.A.isPaused(ep), [ep]),
        {
            previewTargetOptions: e4,
            handleSelectPreviewTarget: e5,
            mobilePreview: e7,
            mobilePreviewLabel: e6,
            handleToggleMobilePreview: te,
            landscapePreview: tn,
            rotatePreviewLabel: tl,
            handleRotatePreview: tr,
            previewSurface: ti,
            previewFrame: ta,
            refreshFrame: ts,
            isRefreshing: tu,
            handleRefresh: to,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: i,
                    previewAppChannels: s,
                    setMode: u,
                    setFrameSurface: o,
                    setAppChannel: d,
                } = e,
                f = a.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === eo.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, i, s),
                    [n, i, s],
                ),
                m = a.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, o, u],
                ),
                h = (0, c.bG)([eq.A], () => eq.A.isBuilderPreviewMobile()),
                g = P.intl.string(h ? T.default.tKGF0Q : T.default.peqEOY),
                p = a.useCallback(() => (0, ee.GG)(!h), [h]),
                x = (0, c.bG)([eq.A], () => eq.A.isBuilderPreviewLandscape()),
                v = P.intl.string(x ? T.default.tunI2l : T.default.DoNdjA),
                j = a.useCallback(() => (0, ee.Lw)(!x), [x]),
                b = (0, eD.jS)(t),
                y = a.useMemo(() => (0, eD.Op)(b, r), [b, r]),
                k = (0, e$.A)(t?.preview_application_id ?? null, y),
                w = (0, e$.A)(t?.preview_application_id ?? null, ey.ZN),
                S = "overlay" === l ? w : k,
                A = (0, ey.x1)(S) && S.data.proxyTicketRefreshing,
                C = a.useCallback(() => {
                    null == S || A || eL.A.refreshProxyTicket(S.id);
                }, [S, A]);
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
                refreshFrame: S,
                isRefreshing: A,
                handleRefresh: C,
            };
        })({
            project: s,
            modes: eA.modes,
            activeMode: eC,
            frameSurface: eI,
            frameSurfaceOptions: eX,
            previewAppChannels: eS,
            setMode: eN,
            setFrameSurface: eQ,
            setAppChannel: eY,
        }),
        tc = (0, A.A)(ta),
        td = e2 && !e3,
        tf = (0, I.lQ)(ep),
        tm = tc.isPoppedOut ? T.default.pmkK8i : e3 ? T.default.Yet11p : null,
        th = null != tm;
    function tg(e) {
        return null == tm ? e : P.intl.formatToPlainString(tm, { label: e });
    }
    let tp = $ && !F,
        tx = P.intl.string(tp ? T.default.JD6Oit : T.default.xjJAQm),
        tv = a.useCallback(() => {
            if (F) {
                (el(!1), q(!0));
                return;
            }
            q((e) => !e);
        }, [F]),
        tj = a.useCallback(() => q(!1), []),
        {
            designFeedbackActive: tb,
            designFeedbackToggleRef: ty,
            agentDrivingPreview: tk,
            designFeedbackLabel: tw,
            handleToggleDesignFeedback: tS,
        } = (function (e, t, n) {
            let { active: l } = (0, z.rt)(e);
            a.useEffect(() => {
                null != e && l && !t && (0, z.mB)(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, G.Zv)(e),
                s = P.intl.string(i ? T.default.Sme0T0 : l ? T.default.vn5Rzu : T.default["cl/Jyl"]),
                u = a.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, z.mB)(e);
                        (n(), (0, z.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: i,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(ep, td && (!tc.isPoppedOut || tf), ef),
        [tA] = a.useState(() => N.isPlatformEmbedded && (0, e_.qM)());
    a.useEffect(() => {
        null != ep && tf && !td && (0, I.It)(ep);
    }, [ep, tf, td]);
    let tC = a.useCallback(() => {
            null != ep && (ef(), (0, I.c$)(ep), (0, I.rC)(ep, "marker"));
        }, [ep, ef]),
        tN = a.useCallback(() => {
            null != ep && (0, I.V9)(ep);
        }, [ep]),
        tI =
            th && !tf
                ? tg(P.intl.string(T.default["XWU+XF"]))
                : P.intl.string(tf ? T.default.tuQ5f3 : tk ? T.default.agwlrD : T.default["XWU+XF"]),
        tE = th ? tg(P.intl.string(T.default["cl/Jyl"])) : tw,
        t_ = tg(e6),
        tM = tg(tl),
        tR = a.useCallback(() => {
            el((e) => !e && (q(!0), !0));
        }, []),
        tT = a.useCallback(() => el(!1), []),
        tP = a.useCallback(() => {
            null != ep && (0, ee._j)(ep);
        }, [ep]),
        tL = a.useCallback(() => {
            null != ep && (e3 ? (0, ee._j)(ep) : (0, ee.di)(ep, ta?.id));
        }, [ep, e3, ta?.id]),
        t$ = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ta?.id), (0, ez.Bn)(e), (0, eG.r)(t)), b());
        }, [s, ta?.id, b]),
        tq =
            ((t = (0, R.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, M.vt)(e);
                    null != n
                        ? (0, _.P0)({ text: n, variant: "critical" })
                        : (0, E.A)({
                              title: P.intl.formatToPlainString(T.default["Gm+u1+"], { name: s.name }),
                              subtitle: P.intl.string(T.default.M7H3sJ),
                              confirmText: P.intl.string(T.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  ed();
                                  try {
                                      await (0, M.Hj)(t, e, P.intl.string(T.default.Owerd3));
                                  } catch {
                                      (0, _.P0)({ text: P.intl.string(T.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, ed],
            )),
            { onExport: t, onImport: (r = (0, M.yN)(l)).open, importInput: r.input }),
        tD = a.useCallback(() => {
            null != s && (0, eW.A)(s, y);
        }, [s, y]),
        tF = (0, Q.AJ)(ep),
        tO = a.useCallback(async () => {
            null != ep && (await (0, eK.vL)(ep, y));
        }, [y, ep]),
        tG = (0, eu.aN)(eC, {
            installScope: s?.install_scope ?? null,
            previewReady: eb,
            integrationInstalled: ex?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tO, loading: ev }
            : ej && null == ex
              ? { type: "checking" }
              : void 0,
        tz = (0, c.bG)([eP.Ay], () => null != ep && eP.Ay.isProjectDeleting(ep), [ep]);
    a.useEffect(() => {
        ((null == s && u) || tz) && b();
    }, [s, u, tz, b]);
    let {
            publishOptions: tU,
            publish: tB,
            publishing: tK,
            confirmation: tH,
            variant: tV,
            text: tW,
        } = (0, eH.A)(ep, y, ej || ev),
        tX = (0, eV.A)(ep, tB, tU),
        tQ = "frame" === eC && !e3 && (0, ey.x1)(ta) && (tc.isPoppedOut || tc.canPopout),
        tZ = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: eh?.status === "restoring",
                    onRestoreVersion: tF ? void 0 : (e, t) => eg(e, t, !0),
                }),
                    (0, H.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(437655),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(587883),
                        ]).then(n.bind(n, 247270));
                        return (n) => (0, i.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, eh?.status, eg, tF]);
    (0, K.z)(ep, tZ);
    let tY = null == s ? void 0 : () => (0, e9.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tU }),
        tJ =
            null == s
                ? null
                : (0, i.jsx)(eO.A, {
                      ...(0, eF.A)(s, y),
                      onOpenProjectSettings: tY,
                      onTogglePreviewPaused: "frame" === eC ? tL : void 0,
                      previewPaused: e3,
                      previewPauseDisabled: !e3 && tk,
                      onTogglePopout: tQ ? (tc.isPoppedOut ? tc.popIn : tc.popOut) : void 0,
                      poppedOut: tc.isPoppedOut,
                      onToggleDebug: ei ? tR : void 0,
                      debugOpen: F,
                      onExport: tq.onExport,
                      onImport: tF ? void 0 : tq.onImport,
                      onRemix: tF ? void 0 : tD,
                      onConnectTool: ec ? () => (0, B.A)(s.id) : void 0,
                      onHistory: tZ,
                      refreshApplicationId:
                          eA.modes.includes("widget") && "unavailable-authorization-revoked" !== eA.profileState
                              ? e0
                              : null,
                      previewProjectId: s.id,
                  }),
        t0 =
            null == tB || null == s
                ? null
                : (0, i.jsx)("div", {
                      className: m5.As,
                      onMouseDown:
                          null == ep || tB.disabled || tK
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, eB.dx)(ep);
                                },
                      children: (0, i.jsx)(d.$, {
                          size: "sm",
                          variant: tV,
                          icon: tK ? m8 : null != tH ? f.CheckmarkSmallIcon : void 0,
                          text: tW,
                          onClick: () => tX("header"),
                      }),
                  }),
        t1 = (0, i.jsx)(m3.A, {
            title: s?.name ?? P.intl.string(T.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tY,
            onBack: k,
            hideShareTarget: null != k,
            preview: null != s,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: m5.FO,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: m5.QQ,
                                  children: [
                                      (0, i.jsx)(eE, {
                                          targets: e4,
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
                                          })(eC, eI, eZ),
                                          onChange: e5,
                                      }),
                                      e2
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    "frame" === eC
                                                        ? (0, i.jsx)(C.A.Icon, {
                                                              icon: e7 ? he : m6,
                                                              tooltip: t_,
                                                              "aria-label": t_,
                                                              selected: e7,
                                                              disabled: th,
                                                              onClick: te,
                                                          })
                                                        : null,
                                                    e7 && "frame" === eC
                                                        ? (0, i.jsx)(C.A.Icon, {
                                                              icon: ht,
                                                              tooltip: tM,
                                                              "aria-label": tM,
                                                              selected: tn,
                                                              disabled: th,
                                                              onClick: tr,
                                                          })
                                                        : null,
                                                    tF
                                                        ? null
                                                        : tA
                                                          ? (0, i.jsx)(C.A.Icon, {
                                                                icon: m.PencilIcon,
                                                                tooltip: tI,
                                                                "aria-label": tI,
                                                                selected: tf,
                                                                disabled: (th || tk) && !tf,
                                                                onClick: tf ? tN : tC,
                                                            })
                                                          : (0, i.jsx)(C.A.Icon, {
                                                                ref: ty,
                                                                icon: h.ExperimentalDirectSelectIcon,
                                                                iconClassName: m5.D8,
                                                                tooltip: tE,
                                                                "aria-label": tE,
                                                                selected: tb,
                                                                disabled: th || tk,
                                                                onClick: tS,
                                                            }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eC || e3
                                          ? null
                                          : (0, i.jsx)(ek, { frame: ta, controlProjectId: s.id }),
                                      (0, ey.x1)(ts)
                                          ? (0, i.jsx)(C.A.Icon, {
                                                icon: g.RefreshIcon,
                                                tooltip: P.intl.string(T.default.FZIHQN),
                                                "aria-label": P.intl.string(T.default.FZIHQN),
                                                disabled: tu,
                                                onClick: to,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, i.jsx)("div", { className: m5.YJ }),
                              (0, i.jsx)(L.A, { frame: ta }),
                              (0, i.jsx)(C.A.Icon, {
                                  icon: p.DoorExitIcon,
                                  tooltip: P.intl.string(T.default["/TlGcK"]),
                                  "aria-label": P.intl.string(T.default["/TlGcK"]),
                                  onClick: t$,
                              }),
                              (0, i.jsx)(C.A.Icon, {
                                  icon: m9,
                                  tooltip: tx,
                                  "aria-label": tx,
                                  selected: tp,
                                  onClick: tv,
                              }),
                              tJ,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: o()(m5.nj, m4.T),
        children: [
            tq.importInput,
            (0, i.jsx)("main", {
                className: m5.JX,
                children:
                    null == s
                        ? (0, i.jsxs)("div", {
                              className: m5.j5,
                              children: [
                                  t1,
                                  (0, i.jsxs)("div", {
                                      className: m5.sD,
                                      children: [
                                          (0, i.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: P.intl.string(T.default.G1WwgK),
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: P.intl.string(T.default.fINulo),
                                          }),
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: P.intl.string(T.default["WFJ/vb"]),
                                              onClick: () => (0, eR.listProjects)(y),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(eK.bI.Provider, {
                              value: tU,
                              children: (0, i.jsx)(
                                  m2,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ty,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ti,
                                      frameLaunchParams: eJ,
                                      header: t1,
                                      chatOpen: $,
                                      onCloseChat: tj,
                                      chatHeaderAction: (0, i.jsxs)(j.B, {
                                          direction: "horizontal",
                                          gap: 8,
                                          align: "center",
                                          children: [
                                              tF ? null : (0, i.jsx)(tt, { projectId: s.id }),
                                              (0, i.jsx)(e8, { projectId: s.id, guildId: y, publishOptions: tU }),
                                              t0,
                                          ],
                                      }),
                                      debugOpen: ei && F,
                                      onCloseDebug: tT,
                                      onRestoreVersion: tF ? void 0 : eg,
                                      onImportProject: (0, eP.PV)(s) && !tF ? tq.onImport : void 0,
                                      restoreState: eh,
                                      previewReady: eb,
                                      previewGate: tG,
                                      availability: eA,
                                      activeMode: eC,
                                      widgetApplicationId: e0,
                                      overlayWidgetSize: e1,
                                      previewPaused: e3,
                                      onResumePreview: tP,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function m8() {
    return (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: m5.Hv, itemClassName: m5.C5 });
}
function m9(e) {
    return (0, i.jsx)(y.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function m6(e) {
    return (0, i.jsx)(k.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function he(e) {
    return (0, i.jsx)(w.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ht(e) {
    return (0, i.jsx)(S.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
